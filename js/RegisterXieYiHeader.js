var React=require("react");
var ReactDOM=require("react-dom");
var RegisterXieYiHeader=React.createClass({
	
	backHandels:function(){
		if(this.props.type=="home"){
			var Register=require("./Register");
			var RegisterHeader=require("./RegisterHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Register type="home"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<RegisterHeader type="home"/>,document.getElementById("header"));
			$("#footer").hide();
		}else if(this.props.type=="user"){
			var Register=require("./Register");
			var RegisterHeader=require("./RegisterHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Register type="user"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<RegisterHeader type="user"/>,document.getElementById("header"));
			$("#footer").hide();
		}else if(this.props.list=="list"){
			var Register=require("./Register");
			var RegisterHeader=require("./RegisterHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Register list="list"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<RegisterHeader list="list"/>,document.getElementById("header"));
			$("#footer").hide();
		}else if(this.props.kind=="kind"){
			var Register=require("./Register");
			var RegisterHeader=require("./RegisterHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Register kind="kind"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<RegisterHeader kind="kind"/>,document.getElementById("header"));
			$("#footer").hide();
		}else if(this.props.cart=="cart"){
			var Register=require("./Register");
			var RegisterHeader=require("./RegisterHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Register cart="cart"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<RegisterHeader cart="cart"/>,document.getElementById("header"));
			$("#footer").hide();
		}
	},	
	render:function(){
		return(
			<div className="registerXieYiHeader">
				<div className="left" id="goUser" onClick={this.backHandels}>
					<div className="back">
						<img src="img/back.png"/>
					</div>
				</div>
				<div className="center_findPassword"> 
					注册协议
				</div>
			</div>
			
		)
	},
	componentDidMount:function(){
		
	}
});
module.exports=RegisterXieYiHeader;
