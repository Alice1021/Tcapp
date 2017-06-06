var React=require("react");
var ReactDOM=require("react-dom");
var SearchHeader=React.createClass({
	getInitialState:function(){
		return{
			url_interface:"m.chepc.cn"//服务器地址

		}
	},
	render:function(){
		return(
			<div className="searchHeader">
				<div className="search_left"> 
					<div className="search1">
						<img src="img/search.png"/>
					</div>
					<div className="input">
						<input className="search_name" type="text" placeholder="搜索天采商品" />
					</div>
				</div>
				<div className="search_right" id="goHome">
					取消
				</div>
			  	<ul className="search_list">
			  		{this.state.li_res}
			  	</ul>
			</div>
		)
	},
	componentDidMount:function(){
		var that=this;
		$("#goHome").click(function(){
//			console.log("eeeeee");
			if(that.props.type=="home"){
				$("#footer ul li").eq(0).trigger("click")
				var Home=require("./Home");
				var HomeHeader=require("./HomeHeader");
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(<Home />,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<HomeHeader />,document.getElementById("header"));
				$("#footer").show();
				$("#header").hide();
			}else if(that.props.type=="kind"){
				$("#footer ul li").eq(1).trigger("click")
				var Kind=require("./Kind");
				var KindHeader=require("./KindHeader");
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(<Kind />,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<KindHeader />,document.getElementById("header"));
				$("#footer").show();
				$("#header").show();
			}else if(that.props.list=="list"){
				var List=require("./List");
				var ListHeader=require("./ListHeader");
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(<List list="list"/>,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<ListHeader />,document.getElementById("header"));
				$("#header").hide();
				$("#footer").hide();
			}else if(that.props.kind=="kind"){
				var List=require("./List");
				var ListHeader=require("./ListHeader");
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(<List kind="kind"/>,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<ListHeader kind="kind"/>,document.getElementById("header"));
				$("#header").hide();
				$("#footer").hide();
			}
			
		});
//===========改变input框里的内容显示搜索列表=======================================		
		$(".search_name").on("input",function(){
			
			if($(this).val()!=""){
				var url_interface = that.state.url_interface;
				var goods_name = $(this).val();
				$.ajax({
					type:"get",
					url:"http://"+url_interface+"/sopa/goods/get_search_name",
					async:false,
					data:{tcggsc:'c2726d9cbd6f600f12d60352729060c3',goods_name:goods_name},
					success:function(data){
						console.log(data);
						var arr_li=[];
						if(data.state == 1){
							for(var i = 0 ; i < data.result.length ; i++){
								arr_li.push(<li key={i} className="click_li" data-id={data.result[i].cat_id}>{data.result[i].goods_name}</li>)			
							}
						}
						that.setState({
							li_res:arr_li
						})
					}
				});
				$(".search_list").css("display","block");
			}else{
				$(".search_list").css("display","none");
			}
			
			
		})
	},
	componentDidUpdate:function(){
		var that=this;
		var type=that.props.type;
		var list=that.props.list;
		var kind=that.props.kind;
		$(".click_li").click(function(){
			var id=$(this).attr("data-id");
			if(type=="home"){
				var List=require("./List");
				var ListHeader=require("./ListHeader");
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(<List list="list" id={id}/>,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<ListHeader list="list" id={id}/>,document.getElementById("header"));
				$("#header").hide();
				$("#footer").hide();	
			}else if(type=="kind"){
				var List=require("./List");
				var ListHeader=require("./ListHeader");
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(<List kind="kind" id={id}/>,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<ListHeader kind="kind" id={id}/>,document.getElementById("header"));
				$("#header").hide();
				$("#footer").hide();
			}else if(list=="list"){
				var List=require("./List");
				var ListHeader=require("./ListHeader");
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(<List list="list" id={id}/>,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<ListHeader list="list" id={id}/>,document.getElementById("header"));
				$("#header").hide();
				$("#footer").hide();
			}else if(kind=="kind"){
				var List=require("./List");
				var ListHeader=require("./ListHeader");
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(<List kind="kind" id={id}/>,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<ListHeader kind="kind" id={id}/>,document.getElementById("header"));
				$("#header").hide();
				$("#footer").hide();
			}
			
			
			
			
		})
	}
});
module.exports=SearchHeader;
