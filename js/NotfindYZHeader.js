var React=require("react");
var ReactDOM=require("react-dom");
var NotfindYZHeader=React.createClass({
	
	backHandels:function(){
		if(this.props.type=="home"){
			var FindPassword=require("./FindPassword");
			var FindPasswordHeader=require("./FindPasswordHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<FindPassword type="home"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<FindPasswordHeader type="home"/>,document.getElementById("header"));
			$("#footer").hide();
		}else if(this.props.type=="user"){
			var FindPassword=require("./FindPassword");
			var FindPasswordHeader=require("./FindPasswordHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<FindPassword type="user"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<FindPasswordHeader type="user"/>,document.getElementById("header"));
			$("#footer").hide();
		}else if(this.props.list=="list"){
			var FindPassword=require("./FindPassword");
			var FindPasswordHeader=require("./FindPasswordHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<FindPassword list="list"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<FindPasswordHeader list="list"/>,document.getElementById("header"));
			$("#footer").hide();
		}else if(this.props.kind=="kind"){
			var FindPassword=require("./FindPassword");
			var FindPasswordHeader=require("./FindPasswordHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<FindPassword kind="kind"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<FindPasswordHeader kind="kind"/>,document.getElementById("header"));
			$("#footer").hide();
		}else if(this.props.cart=="cart"){
			var FindPassword=require("./FindPassword");
			var FindPasswordHeader=require("./FindPasswordHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<FindPassword cart="cart"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<FindPasswordHeader cart="cart"/>,document.getElementById("header"));
			$("#footer").hide();
		}
	},	
	render:function(){
		return(
			<div className="notfindYzHeader">
				<div className="left" id="goUser" onClick={this.backHandels}>
					<div className="back">
						<img src="img/back.png"/>
					</div>
				</div>
				<div className="center_findPassword"> 
					无法获取验证码
				</div>
			</div>
			
		)
	},
	componentDidMount:function(){
		
	}
});
module.exports=NotfindYZHeader;
