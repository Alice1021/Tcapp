var React=require("react");
var ReactDOM=require("react-dom");
//var ProList=require("./ProList");
var DealSuccess=React.createClass({
	getInitialState:function(){
		return{
			kindList:""
		}
	},
	backHandel:function(){
		console.log(this.props.type)
		if(this.props.type2=="myorder"){
			var MyOrder=require("./MyOrder");
			var MyOrderHeader=require("./MyOrderHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<MyOrder type="user"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<MyOrderHeader type="user"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		}else if(this.props.type=="myorder"){
			var OrderDetail=require("./OrderDetail");
			var OrderDetailHeader=require("./OrderDetailHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<OrderDetail type="myorder"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<OrderDetailHeader type="myorder"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		}else if(this.props.type=="refund"){
			var OrderDetail=require("./OrderDetail");
			var OrderDetailHeader=require("./OrderDetailHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<OrderDetail type="refund"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<OrderDetailHeader type="refund"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		}
	},
	componentWillMount:function(){
		var that=this;
		
	},
	render:function(){
		return(
			<div className="dealsuccessContent">
				<div className="dealsuccess_header">
					<div className="left_dealsuccess" id="goBack" onClick={this.backHandel}>
						<img src="img/back.png"/>
					</div>
					<div className="center_dealsuccess"> 
						交易成功
					</div>
					<div className="right_dealsuccess" id="goMessageBox">
						<img src="img/more_03.png"/>
						<ul className="messageBox">
							<li data-type="myeval">
								<div className="mb_logo">
									<div className="mbl_img">
										<img src="img/massage.png"/>
									</div>
								</div>
								<div className="mb_txt">消息</div>
								<div className="mb_right">
									<div className="mbr_txt">1</div>
								</div>
							</li>
							<li data-type="myeval">
								<div className="mb_logo">
									<div className="mbl_img">
										<img src="img/home.png"/>
									</div>
								</div>
								<div className="mb_txt">首页</div>
								<div className="mb_right">
									<div className="mbr_txt">1</div>
								</div>
							</li>
							<li data-type="myeval">
								<div className="mb_logo">
									<div className="mbl_img">
										<img src="img/share.png"/>
									</div>
								</div>
								<div className="mb_txt">分享</div>
								<div className="mb_right">
									<div className="mbr_txt">1</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div className="dealsuccess_main">
					<div className="dealsuccess_title">
						<p>
							<img src="img/deal.png"/>
						</p>
						<p>恭喜您!您的交易成功搂咯!</p>
					</div>
					<div className="to_orderEval">立即评价</div>
				</div>
			</div>
			
		)
	},
	componentDidMount:function(){
		var that=this;
		$("#goMessageBox").click(function(){
			$(".messageBox").css("display","block")
		});
		$(".dealsuccess_main").click(function(){
			$(".messageBox").css("display","none");
		});
		$(".messageBox li").click(function(){
			var index=$(this).index();
			var type=$(this).attr("data-type");
			if(index==0){
				var NewsCenter=require("./NewsCenter");
				var NewsCenterHeader=require("./NewsCenterHeader");
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(<NewsCenter type={type} />,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<NewsCenterHeader type={type} />,document.getElementById("header"));
				$("#header").show();
				$("#footer").hide();
			}else if(index==1){
				var Home=require("./Home");
				var HomeHeader=require("./HomeHeader");
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(<Home type={type} />,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<HomeHeader type={type} />,document.getElementById("header"));
				$("#header").show();
				$("#footer").show();
				$("#footer ul li").eq(0).trigger("click")
			}
		});
//=====================点击立即评价
		$(".to_orderEval").click(function(){
			var type=that.props.type;
			var type2=that.props.type2;
			var OrderEval=require("./OrderEval");
			var OrderEvalHeader=require("./OrderEvalHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<OrderEval type={type} type2={type2}/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<OrderEvalHeader type={type} type2={type2}/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		})
	},
	componentDidUpdate:function(){

		
		
	}
});
module.exports=DealSuccess;
