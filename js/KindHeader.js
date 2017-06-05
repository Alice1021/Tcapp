var React=require("react");
var ReactDOM=require("react-dom");
var KindHeader=React.createClass({
	
	render:function(){
		return(
			<div className="kindHeader">
				<div className="left" id="goHome">
					<div className="back" >
						<img src="img/back.png"/>
					</div>
				</div>
				<div className="center1"> 
					<div className="search1">
						<img src="img/search.png"/>
					</div>
					<div className="input">
						<input className="shousuo" data-goods_name="0" type="text" placeholder="热卖商品" />
					</div>
					<div className="select" >
						<img src="img/select.png"/>
					</div>
				</div>
				<div className="right" id="goNewsCenter" data-type="kind">
					<div className="img">
						<img src="img/massage.png"/>
					</div>
					
				</div>
			  
			</div>
		)
	},
	componentDidMount:function(){
		$("#goHome").click(function(){
//			console.log("eeeeee");
			$("#footer ul li").eq(0).trigger("click")
			var Home=require("./Home");
			var HomeHeader=require("./HomeHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Home />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<HomeHeader />,document.getElementById("header"));
		});
		$("#goNewsCenter").click(function(){
			var type=$(this).attr("data-type");
			var NewsCenter=require("./NewsCenter");
			var NewsCenterHeader=require("./NewsCenterHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<NewsCenter />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<NewsCenterHeader type={type} />,document.getElementById("header"));
			$("#footer").hide();
		});
//=========点击搜索到列表页================================
		$(".center1").click(function(){
			var Search=require("./Search");
			var SearchHeader=require("./SearchHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Search type="kind"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<SearchHeader type="kind"/>,document.getElementById("header"));
			$("#footer").hide();
			
			
			
			
//			var goods_name=$(".shousuo").attr("data-goods_name");
//			var search_name=$(".shousuo").val();
//			if($(".shousuo").val()!=""){
//				var List=require("./List");
//				var ListHeader=require("./ListHeader");
//				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
//				ReactDOM.render(<List goods_name={goods_name} search_name={search_name}/>,document.getElementById("content"));
//				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
//				ReactDOM.render(<ListHeader goods_name={goods_name} search_name={search_name}/>,document.getElementById("header"));
//				$("#footer").hide();
//				$("#header").hide();
//			}
			
			
		})
	}
});
module.exports=KindHeader;
