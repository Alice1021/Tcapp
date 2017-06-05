var React=require("react");
var ReactDOM=require("react-dom");
var RegisterHeader=React.createClass({
	backHandels:function(){
		if(this.props.type=="home"){
			var Login=require("./Login");
			var LoginHeader=require("./LoginHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Login type="home"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<LoginHeader type="home"/>,document.getElementById("header"));
		}else if(this.props.type=="user"){
			var User=require("./User");
			var UserHeader=require("./UserHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<User />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<UserHeader />,document.getElementById("header"));
			$("#footer").show()
		}else if(this.props.list=="list"){
			var Login=require("./Login");
			var LoginHeader=require("./LoginHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Login list="list"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<LoginHeader list="list"/>,document.getElementById("header"));
		}else if(this.props.kind=="kind"){
			var Login=require("./Login");
			var LoginHeader=require("./LoginHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Login kind="kind"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<LoginHeader kind="kind"/>,document.getElementById("header"));
		}else if(this.props.cart=="cart"){
			var Login=require("./Login");
			var LoginHeader=require("./LoginHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Login cart="cart"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<LoginHeader cart="cart"/>,document.getElementById("header"));
		}else if(this.props.collect=="collect"){
			var Login=require("./Login");
			var LoginHeader=require("./LoginHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Login collect="collect"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<LoginHeader collect="collect"/>,document.getElementById("header"));
		}else if(this.props.myeval=="myeval"){
			var Login=require("./Login");
			var LoginHeader=require("./LoginHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Login myeval="myeval"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<LoginHeader myeval="myeval"/>,document.getElementById("header"));
		}
	},
	render:function(){
		return(
			<div className="registerHeader">
				<div className="left" id="goUser" onClick={this.backHandels}>
					<div className="back">
						<img src="img/back.png"/>
					</div>
				</div>
				<div className="center_register"> 
					注册
				</div>
				
			</div>
		)
	},
	componentDidMount:function(){
	

		
	}
});
module.exports=RegisterHeader;
