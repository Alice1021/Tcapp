var React=require("react");
var ReactDOM=require("react-dom");
var FirmOrderHeader=React.createClass({
	backHandel:function(){
		if(this.props.type=="home"){
			var Detail=require("./Detail");
			var DetailHeader=require("./DetailHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Detail type="home"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<DetailHeader type="home"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		}else if(this.props.list=="list"){
			var Detail=require("./Detail");
			var DetailHeader=require("./DetailHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Detail list="list"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<DetailHeader list="list"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		}else if(this.props.kind=="kind"){
			var Detail=require("./Detail");
			var DetailHeader=require("./DetailHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Detail kind="kind"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<DetailHeader kind="kind"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		}else if(this.props.cart1=="cart"){
			var Cart=require("./Cart");
			var CartHeader=require("./CartHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Cart type="home"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<CartHeader type="home"/>,document.getElementById("header"));
			$("#footer").show();
			$("#header").hide();
		}else if(this.props.cart=="cart"){
			var Detail=require("./Detail");
			var DetailHeader=require("./DetailHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Detail cart="cart"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<DetailHeader cart="cart"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		}else if(this.props.collect=="collect"){
			var Detail=require("./Detail");
			var DetailHeader=require("./DetailHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Detail collect="collect"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<DetailHeader collect="collect"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		}else if(this.props.myeval=="myeval"){
			var Detail=require("./Detail");
			var DetailHeader=require("./DetailHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Detail myeval="myeval"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<DetailHeader myeval="myeval"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		}

		
	},
	render:function(){
		return(
			<div className="firmOrderHeader">
				<div className="left_news" id="goBack" onClick={this.backHandel}>
					<img src="img/back.png"/>
				</div>
				<div className="center_news"> 
					确认订单
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
module.exports=FirmOrderHeader;
