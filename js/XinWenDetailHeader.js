var React=require("react");
var ReactDOM=require("react-dom");
var XinWenDetailHeader=React.createClass({
	backHandel:function(){
//		console.log("222"+this.props.type);
//		var type=this.props.type;
//		console.log("11"+type);
		if(this.props.type=="xinwen"){
			var XinWen=require("./XinWen");
			var XinWenHeader=require("./XinWenHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<XinWen type="home"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<XinWenHeader type="home" />,document.getElementById("header"));
			$("#footer").hide();
		}
		
	},
	render:function(){
		return(
			<div className="xinWenDetailHeader">
				<div className="left_news" id="goBack" onClick={this.backHandel} data-type="newsCenter">
					<img src="img/back.png"/>
				</div>
				<div className="center_news"> 
					新闻详情
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
module.exports=XinWenDetailHeader;
