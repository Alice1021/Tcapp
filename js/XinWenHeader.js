var React=require("react");
var ReactDOM=require("react-dom");
var XinWenHeader=React.createClass({
	backHandel:function(){
//		console.log("222"+this.props.type);
//		var type=this.props.type;
//		console.log("11"+type);
		if(this.props.type=="home"){
			var Home=require("./Home");
			var HomeHeader=require("./HomeHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Home />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<HomeHeader />,document.getElementById("header"));
			$("#footer").show();
		}
		
	},
	render:function(){
		return(
			<div className="xinWenHeader">
				<div className="left_news" id="goBack" onClick={this.backHandel} data-type="newsCenter">
					<img src="img/back.png"/>
				</div>
				<div className="center_news"> 
					新闻中心
				</div>

			</div>
		)
	},
	componentDidMount:function(){
//		$("#goBack").click(function(){
////			console.log("eeeeee");
//			$("#footer ul li").eq(0).trigger("click")
//			var Home=require("./Home");
//			var HomeHeader=require("./HomeHeader");
//			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
//			ReactDOM.render(<Home />,document.getElementById("content"));
//			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
//			ReactDOM.render(<HomeHeader />,document.getElementById("header"));
//			$("#header").show();
//			$("#footer").show();
//		});
		
	}
});
module.exports=XinWenHeader;
