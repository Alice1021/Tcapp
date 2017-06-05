var React=require("react");
var ReactDOM=require("react-dom");
var SetPasswordHeader=React.createClass({
	
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
		}else if(this.props.collect=="collect"){
			var FindPassword=require("./FindPassword");
			var FindPasswordHeader=require("./FindPasswordHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<FindPassword collect="collect"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<FindPasswordHeader collect="collect"/>,document.getElementById("header"));
			$("#footer").hide();
		}else if(this.props.myeval=="myeval"){
			var FindPassword=require("./FindPassword");
			var FindPasswordHeader=require("./FindPasswordHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<FindPassword myeval="myeval"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<FindPasswordHeader myeval="myeval"/>,document.getElementById("header"));
			$("#footer").hide();
		}
	},	
	render:function(){
		return(
			<div className="setPasswordHeader">
				<div className="left" id="goUser" onClick={this.backHandels}>
					<div className="back">
						<img src="img/back.png"/>
					</div>
				</div>
				<div className="center_findPassword"> 
					重置密码
				</div>
			</div>
			
		)
	},
	componentDidMount:function(){
		
	}
});
module.exports=SetPasswordHeader;
