var React=require("react");
var ReactDOM=require("react-dom");
//var ProList=require("./ProList");
var Search=React.createClass({
	getInitialState:function(){
		return{
			kindList:"",
			li_result:"",
			url_interface:"m.chepc.cn"
		}
	},
	componentWillMount:function(){
		var that		  = this;
		var url_interface = that.state.url_interface;//获取接口地址
		$.ajax({
			type:"get",
			url:"http://"+url_interface+"/sopa/goods/search_index",
			async:true,
			data:{tcggsc:'c2726d9cbd6f600f12d60352729060c3'},
			success:function(data){
				var arr_li   = [];
				for (var i = 0 ; i < data.search_index.length ; i++) {
					var arr_span = [];
					var res      = data.search_index[i];
				for (var j = 0 ; j < res.length ; j++) {
						arr_span.push(<span className="WZ" data-id={res[j].id} key={j}>{res[j].name}</span>);
					}
					arr_li.push(<li key={i}>
									{arr_span}
								</li>);
				}
				that.setState({
					li_result:arr_li
				})
			}
		});
		
	},
	render:function(){
		return(
			<div className="searchContent">
				<div className="hotSearch">热门搜索</div>
				<ul className="hs_main">
					{this.state.li_result}
				</ul>
				<div className="historySearch">历史搜索</div>
				<ul className="historymain">
					<li>
						<div className="hm_left">
							<div className="hml_img">
								<img src="img/search.png"/>
							</div>
						</div>
						<div className="hm_right">不干胶</div>
					</li>
					<li>
						<div className="hm_left">
							<div className="hml_img">
								<img src="img/search.png"/>
							</div>
						</div>
						<div className="hm_right">不干胶</div>
					</li>
					<li>
						<div className="hm_left">
							<div className="hml_img">
								<img src="img/search.png"/>
							</div>
						</div>
						<div className="hm_right">不干胶</div>
					</li>
					<li>
						<div className="hm_left">
							<div className="hml_img">
								<img src="img/search.png"/>
							</div>
						</div>
						<div className="hm_right">不干胶</div>
					</li>
					<li>清除搜索记录</li>
				</ul>
			</div>
			
		)
	},
	componentDidUpdate:function(){
		var that=this;
		$(".WZ").click(function(){
			var list=that.props.list;
			var kind=that.props.kind;
			var type=that.props.type;
			var id=$(this).attr("data-id");
			var List=require("./List");
			var ListHeader=require("./ListHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<List list={list} kind={kind} type={type} id={id} />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<ListHeader list={list} kind={kind} type={type} id={id} />,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		})
		
		
	}
});
module.exports=Search;
