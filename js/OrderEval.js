var React=require("react");
var ReactDOM=require("react-dom");
//var ProList=require("./ProList");
var OrderEval=React.createClass({
	getInitialState:function(){
		return{
			kindList:""
		}
	},
	backHandel:function(){
		console.log(this.props.type)
		if(this.props.type1=="myorder"){
			var MyOrder=require("./MyOrder");
			var MyOrderHeader=require("./MyOrderHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<MyOrder type="user"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<MyOrderHeader type="user"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		}else if(this.props.type=="myorder"){
			var DealSuccess=require("./DealSuccess");
			var DealSuccessHeader=require("./DealSuccessHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<DealSuccess type="myorder"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<DealSuccessHeader type="myorder"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		}else if(this.props.type=="refund"){
			var DealSuccess=require("./DealSuccess");
			var DealSuccessHeader=require("./DealSuccessHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<DealSuccess type="refund"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<DealSuccessHeader type="refund"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		}else if(this.props.type2=="myorder"){
			var DealSuccess=require("./DealSuccess");
			var DealSuccessHeader=require("./DealSuccessHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<DealSuccess type2="myorder"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<DealSuccessHeader type2="myorder"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		}
	},
	componentWillMount:function(){
		var that=this;
	},
	render:function(){
		return(
			<div className="orderEvalContent">
				<div className="orderEval_header">
					<div className="left_orderEval" id="goBack" onClick={this.backHandel}>
						<img src="img/back.png"/>
					</div>
					<div className="center_orderEval"> 
						订单评价
					</div>
					<div className="right_orderEval" id="goMessageBox">
						<img src="img/more_03.png"/>
						<ul className="messageBox">
							<li data-type="ordereval">
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
							<li data-type="ordereval">
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
							<li data-type="ordereval">
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
				<div className="orderEval_main">
					<div className="goods_m">
						<div className="left">
							<img src="img/img111.jpg"/>
						</div>
						<div className="right">
							<textarea type="text" name="content" rows="12" placeholder="请输入你对产品的评价">
								
							</textarea>
						</div>
						<span>83/100</span>
					</div>
					<div className="pingjia">
						<div className="ping_fen">评分</div>
						<div className="miaoshu">
							<div className="left">与描述相符：</div>
							<div className="right">
								<span>
									<img src="img/ping_star.png"/>
								</span>
								<span>
									<img src="img/ping_star.png"/>
								</span>
								<span>
									<img src="img/ping_star.png"/>
								</span>
								<span>
									<img src="img/ping_star.png"/>
								</span>
								<span>
									<img src="img/ping_star.png"/>
								</span>
							</div>
						</div>
						<div className="miaoshu">
							<div className="left">客服服务质量：</div>
							<div className="right">
								<span>
									<img src="img/ping_star.png"/>
								</span>
								<span>
									<img src="img/ping_star.png"/>
								</span>
								<span>
									<img src="img/ping_star.png"/>
								</span>
								<span>
									<img src="img/ping_star.png"/>
								</span>
								<span>
									<img src="img/ping_star.png"/>
								</span>
							</div>
						</div>
						<div className="miaoshu">
							<div className="left">物流发货速度：</div>
							<div className="right">
								<span>
									<img src="img/ping_star.png"/>
								</span>
								<span>
									<img src="img/ping_star.png"/>
								</span>
								<span>
									<img src="img/ping_star.png"/>
								</span>
								<span>
									<img src="img/ping_star.png"/>
								</span>
								<span>
									<img src="img/ping_star.png"/>
								</span>
							</div>
						</div>
					</div>
					<div className="tijiao_pingjia">提交评价</div>
				</div>
				
			</div>
			
		)
	},
	componentDidMount:function(){
		var that=this;
//===========头部消息中心=================		
		$("#goMessageBox").click(function(){
			$(".messageBox").css("display","block")
		});
		$(".mypurse_main").click(function(){
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
//========== 点击每个星星按钮===========================
		$(".miaoshu .right span").click(function(){
			if($(this).find("img").attr("src")=="img/ping_star.png"){
				$(this).find("img").attr("src","img/ping_star1.png");
				$(this).prevAll("span").find("img").attr("src","img/ping_star1.png");
			}else if($(this).find("img").attr("src")=="img/ping_star1.png"){
				$(this).next().find("img").attr("src","img/ping_star.png")
				$(this).next().nextAll("span").find("img").attr("src","img/ping_star.png");
			}
			
		})
		
//============点击提交评价按钮===========================
		$(".tijiao_pingjia").click(function(){
			var indexTo=$(this).index();
			if(that.props.type=="myorder"){
				var MyOrder=require("./MyOrder");
				var MyOrderHeader=require("./MyOrderHeader");
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(<MyOrder type="user" indexOk={indexTo}/>,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<MyOrderHeader type="user"/>,document.getElementById("header"));
				$("#footer").hide();
				$("#header").hide();
			}else if(that.props.type=="refund"){
				var Refund=require("./Refund");
				var RefundHeader=require("./RefundHeader");
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(<Refund type="user" />,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<RefundHeader type="user" />,document.getElementById("header"));
				$("#footer").hide();
				$("#header").hide();
			}else if(that.props.type1=="myorder"){
				var MyOrder=require("./MyOrder");
				var MyOrderHeader=require("./MyOrderHeader");
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(<MyOrder type="user" indexOk={indexTo}/>,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<MyOrderHeader type="user"/>,document.getElementById("header"));
				$("#footer").hide();
				$("#header").hide();
			}else if(that.props.type2=="myorder"){
				var MyOrder=require("./MyOrder");
				var MyOrderHeader=require("./MyOrderHeader");
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(<MyOrder type="user" indexOk={indexTo}/>,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<MyOrderHeader type="user"/>,document.getElementById("header"));
				$("#footer").hide();
				$("#header").hide();
			}
			
		})
	},
	componentDidUpdate:function(){

		
		
	}
});
module.exports=OrderEval;
