var React=require("react");
var ReactDOM=require("react-dom");
//var ProList=require("./ProList");
var Kind=React.createClass({
	getInitialState:function(){
		return{
			kindStyle:"",
			kindStyleMain:"",
			kindStylelist:""
		
		}
	},
	componentWillMount:function(){
		var that=this;
		$.ajax({
			type:"get",
			url:"http://m.chepc.cn/sopa/index/category",
			async:true,
			dataType:"json",
			data:{tcggsc:'c2726d9cbd6f600f12d60352729060c3'},
			success:function(data){
//				console.log(data.cate);
				var result=data.cate;
				var len=result.length;
				var arr=[];
				var main=[];
				for(var i=0;i<len;i++){
					arr.push(<li key={Math.random()}>{result[i].name}</li>)
					var list=[];
					var cate_name=result[i].cate_name;
//					console.log(cate_name.length)
					for(var j=0;j<cate_name.length;j++){
						list.push(<li key={Math.random()} data-type="kind" data-cate_id={cate_name[j].tow_cate_id}>
									<div className="kmucm_img">
										<img src={cate_name[j].tow_cate_image}/>
									</div>
									<div className="kmucm_text">
										{cate_name[j].tow_cate_name}
									</div>
								</li>)
					}
					main.push(<ul className="kindMainList" key={Math.random()}>
							<div className="header">
								<div className="banner">
									<img src="img/yinshua.jpg"/>
								</div>
							</div>
							<div className="kmu_cont">
								<ul className="kmuc_main">
									{list}
								</ul>
							</div>
						</ul>)
			}
				
			that.setState({
				kindStyle:arr,
				kindStyleMain:main
			})
			}
		});
	},
	render:function(){
		return(
			<div className="kindContent">
				<div className="kindContent_all">
					<ul className="kind">
			    		{this.state.kindStyle}
				    </ul>
					<div className="kindMain">
						{this.state.kindStyleMain}
						
					</div>
				</div>
			</div>
		)
	},
	componentDidMount:function(){
		
	},
	componentDidUpdate:function(){
		var that=this;
		$(".kind li").click(function(){
			var index=$(this).index()
			$(this).addClass("kindactive").siblings().removeClass("kindactive");
			$(".kindMainList").eq(index).css("display","block").siblings(".kindMainList").css("display","none")
		});
		var index=this.props.index;
		var k=index||0;
		$(".kind li").eq(k).trigger("click");
//===================点击分类页的每个li==============================================		
		$(".kindMainList .kmuc_main li").click(function(){
			//获取二级分类id
			var cate_two_id = $(this).attr('data-cate_id');
			var kind=$(this).attr("data-type");
			var List=require("./List");
			var ListHeader=require("./ListHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<List kind={kind} id={cate_two_id} />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<ListHeader kind={kind} id={cate_two_id} />,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		})
		
	}
});
module.exports=Kind;
