var React=require("react");
var ReactDOM=require("react-dom");
var UserHeader=React.createClass({
	render:function(){
		return(
			<div className="userHeader">
				<div className="left" id="goSet" data-type="user">
					<div className="back1" >
						<img src="img/set.png"/>
					</div>
				</div>
				<div className="center_user"> 
					我的
				</div>
				<div className="right" id="goNewsCenter" data-type="user">
					<div className="img">
						<img src="img/icon_messages.png"/>
					</div>
					
				</div>
			  
			</div>
		)
	},
	componentDidMount:function(){
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
		$("#goSet").click(function(){
			var type=$(this).attr("data-type");
			var Set=require("./Set");
			var SetHeader=require("./SetHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Set type={type}/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<SetHeader type={type} />,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
			
		})
	}
});
module.exports=UserHeader;
