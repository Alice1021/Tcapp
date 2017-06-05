var React=require("react");
var ReactDOM=require("react-dom");
//var ProList=require("./ProList");
var OrderDetail=React.createClass({
	getInitialState:function(){
		return{
			kindList:""
		}
	},
	backHandel:function(){
		console.log(this.props.type)
		if(this.props.type=="myorder"){
			var MyOrder=require("./MyOrder");
			var MyOrderHeader=require("./MyOrderHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<MyOrder type="user"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<MyOrderHeader type="user"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		}else if(this.props.type=="refund"){
			var Refund=require("./Refund");
			var RefundHeader=require("./RefundHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Refund type="user" />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<RefundHeader type="user" />,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		}
	},
	componentWillMount:function(){
		var that=this;
		if(that.props.name=="等待买家付款"){
			alert("1")
		}else if(that.props.name=="买家已付款"){
			alert("2")
		}else if(that.props.name=="卖家已发货"){
			alert("3")
		}else if(that.props.name=="交易成功"){
			alert("4")
		}
	},
	render:function(){
		return(
			<div className="orderDetailContent">
				<div className="orderDetail_header">
					<div className="left_mypurse" id="goBack" onClick={this.backHandel}>
						<img src="img/back.png"/>
					</div>
					<div className="center_mypurse"> 
						订单详情
					</div>
					<div className="right_mypurse" id="goMessageBox">
						<img src="img/more_03.png"/>
						<ul className="messageBox">
							<li data-type="orderdetail">
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
							<li data-type="orderdetail">
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
							<li data-type="orderdetail">
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
				<div className="orderDetail_main">
					<div className="shouhuo_men">
						<div className="shouhuo_tou">
							<div className="left">
								<p>卖家已发货</p>
								<p>还剩一天58分钟自动确认</p>
							</div>
							<div className="right"><img src="img/orderdetail_2.png"/></div>
						</div>
						<div className="shouhuo_ren">
							<div className="address_top">
								<div className="address_logo">
									<img src="img/firmOrder2.png"/>
								</div>
								<div className="address_detail">
									<p>
										<span>收货人：</span>
										<span>安二牛</span>
										<span>15030197739</span>
									</p>
									<p>
										<span>收货地址：</span>
										<span>收货地址:河南省郑州市金水区丰产路街道 东明路红专路名
门国际808室</span>
									</p>
								</div>
							</div>
							<div className="address_bottom">
								<div className="left">
									<img src="img/orderdetail_3.png"/>
								</div>
								<div className="center">
									<p>包裹正在揽收</p>
									<p><span>2012-12-08</span><span>15:30:24</span></p>
								</div>
								<div className="right">
									<img src="img/set_next.png"/>
								</div>
							</div>
						
						</div>
					</div>
					<div className="ordergoods_detail">
						<div className="evalTime">
							<span>订单号：</span>
							<span>12345567898745124</span>
						</div>
						<div className="orderMain">
							<div className="orderMain_img">
								<img src="img/img111.jpg"/>
							</div>
							<div className="orderMain_txt">
								<p>大号纸杯 大号纸杯大号纸杯大号纸杯大号纸杯大号纸杯大号纸杯</p>
								<p><span>规格:</span><span>34*26*8cm</span><span>数量:</span><span>5000</span></p>
								<p><span>￥</span><span>2300</span>&nbsp;&nbsp;<span>x1</span></p>
							</div>
						</div>
						<div className="xijie_jieshao">
							<p>
								<span>商品总价：</span>
								<span>￥15</span>
							</p>
							<p>
								<span>配送费用：</span>
								<span>￥15</span>
							</p>
							<p>
								<span>优惠券：</span>
								<span>￥15</span>
							</p>
							<p>
								<span>积分：</span>
								<span>￥15</span>
							</p>
							<p>
								<span>金额：</span>
								<span>￥15</span>
							</p>
							<p>
								<span>活动优惠：</span>
								<span>￥15</span>
							</p>
						</div>
						<div className="shi_price">
							<span>实付款：</span>
							<span>￥2315</span>
						</div>
					</div>
					<div className="weChat">
						<div className="top">
							<div className="kefu">
								<span><img src="img/kefu.png"/></span>
								<span>联系客服</span>
							</div>
							<div className="dianhua">
								<span><img src="img/dianhua.png"/></span>
								<span>拨打电话</span>
							</div>
						</div>
						<div className="bottom">
							<span>支付方式：</span>
							<span>支付宝</span>
						</div>
					</div>
				</div>
				<div className="footer">
					<div className="right">
						<span className="tuikuan">退款</span>
						<span className="kan_wuliu">查看物流</span>
						<span className="queren_shouhuo">确认收货</span>
					</div>
					
				</div>
			</div>
			
		)
	},
	makeText:function(str,time){
		
		//吐司的封装函数
		$("#toast").show();
		$("#tip").html(str);
		setTimeout(function(){
			$("#toast").hide();
		},time);
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
				ReactDOM.render(<NewsCenter refund="refund" />,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<NewsCenterHeader refund="refund" />,document.getElementById("header"));
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
//===================点击确认收货  退款  查看物流   立即评价  申请售后  取消退款   提醒发货
		$(".footer .right span").click(function(){
			var len=$(".footer .right span").length;
			var index=$(this).index();
			var type=that.props.type;
			alert(type)
			if($(".footer .right span").eq(index).text()=="确认收货"){
				var DealSuccess=require("./DealSuccess");
				var DealSuccessHeader=require("./DealSuccessHeader");
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(<DealSuccess type={type}/>,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<DealSuccessHeader type={type}/>,document.getElementById("header"));
				$("#footer").hide();
				$("#header").hide();
			}else if($(".footer .right span").eq(index).text()=="退款"){
				var TuiKuan=require("./TuiKuan");
				var TuiKuanHeader=require("./TuiKuanHeader");
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(<TuiKuan type={type} />,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<TuiKuanHeader type={type} />,document.getElementById("header"));
				$("#header").hide();
				$("#footer").hide();
			}else if($(".footer .right span").eq(index).text()=="查看物流"){
				alert("查看物流")
			}else if($(".footer .right span").eq(index).text()=="立即评价"){
				alert("立即评价")
			}else if($(".footer .right span").eq(index).text()=="申请售后"){
				alert("申请售后")
			}else if($(".footer .right span").eq(index).text()=="取消退款"){
				alert("取消退款")
			}else if($(".footer .right span").eq(index).text()=="提醒发货"){
				that.makeText("已提醒卖家发货");
			}
		})
	},
	componentDidUpdate:function(){

		
		
	}
});
module.exports=OrderDetail;
