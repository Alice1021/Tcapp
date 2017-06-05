var React=require("react");
var ReactDOM=require("react-dom");
var CollectHeader=React.createClass({
//	backHandel:function(){
//		console.log(this.props.type)
//		if(this.props.type=="user"){
//			var User=require("./User");
//			var UserHeader=require("./UserHeader");
//			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
//			ReactDOM.render(<User />,document.getElementById("content"));
//			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
//			ReactDOM.render(<UserHeader />,document.getElementById("header"));
//			$("#footer").show();
//			$("#header").show();
//		}
//	},
	render:function(){
		return(
			<div className="refundHeader">
				
			</div>
		)
	},
	componentDidMount:function(){
//		$("#goMessageBox").click(function(){
//			$(".messageBox").css("display","block")
//			
//		});
//		$(".orderKind_main").click(function(){
//			$(".messageBox").css("display","none");
//		});
//		$(".messageBox li").click(function(){
//			var index=$(this).index();
//			var type=$(this).attr("data-type");
//			if(index==0){
//				var NewsCenter=require("./NewsCenter");
//				var NewsCenterHeader=require("./NewsCenterHeader");
//				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
//				ReactDOM.render(<NewsCenter type={type} />,document.getElementById("content"));
//				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
//				ReactDOM.render(<NewsCenterHeader type={type} />,document.getElementById("header"));
//				$("#header").show();
//				$("#footer").hide();
//			}else if(index==1){
//				
//				var Home=require("./Home");
//				var HomeHeader=require("./HomeHeader");
//				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
//				ReactDOM.render(<Home type={type} />,document.getElementById("content"));
//				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
//				ReactDOM.render(<HomeHeader type={type} />,document.getElementById("header"));
//				$("#header").show();
//				$("#footer").show();
//				$("#footer ul li").eq(0).trigger("click")
//			}
//		});

	}
});
module.exports=CollectHeader;
