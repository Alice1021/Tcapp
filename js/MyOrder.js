var React=require("react");
var ReactDOM=require("react-dom");
//var ProList=require("./ProList");
var MyOrder=React.createClass({
	getInitialState:function(){
		return{
			kindList:""

		}
	},
	componentWillMount:function(){
		var that=this;
		
		
		
	},
	backHandel:function(){
		console.log(this.props.type)
		if(this.props.type=="user"){
			var User=require("./User");
			var UserHeader=require("./UserHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<User />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<UserHeader />,document.getElementById("header"));
			$("#footer").show();
			$("#header").show();
		}
	},
	render:function(){
		return(
			
			<div className="myOrderContent">
				<div className="myOrder_header">
					<div className="myOrder_header_title">
						<div className="left_order" id="goBack" onClick={this.backHandel}>
							<img src="img/back.png"/>
						</div>
						<div className="center_order"> 
							我的订单
						</div>
						<div className="right_order" id="goMessageBox">
							<img src="img/more_03.png"/>
							<ul className="messageBox">
								<li data-type="myOrder">
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
								<li data-type="myOrder">
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
								<li data-type="myOrder">
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
					<ul className="orderKind_nav">
						<li className="active">全部订单</li>
						<li>待付款</li>
						<li>待发货</li>
						<li>待收货</li>
						<li>待评价</li>
					</ul>
				</div>
				<div className="orderKind_main">
					<ul>
						<li>
							<div className="waitPay">
								<div className="waitPay_main">
									<div className="mainn" data-type="myorder" data-name="等待买家付款">
										<div className="orderNumber">
											<div className="number">订单号：<span>12345567898745124</span></div>
											<div className="waitPay_txt">等待买家付款</div>
										</div>
										<div className="orderMain">
											<div className="orderMain_img">
												<img src="img/img111.jpg"/>
											</div>
											<div className="orderMain_txt">
												<p>大号纸杯 大号纸杯大号纸杯大号纸杯大号纸杯大号纸杯大号纸杯</p>
												<p><span>￥</span><span>2300</span><span>已售：</span><span>666</span></p>
											</div>
										</div>
									</div>
									<div className="waitPay_btn">
										<div className="cancelOrder">取消订单</div>
										<div className="payment">付款</div>
									</div>
								</div>
							</div>
							<div className="alreadyPay">
								<div className="waitPay_main">
									<div className="mainn" data-type="myorder" data-name="买家已付款">
										<div className="orderNumber">
											<div className="number">订单号：<span>12345567898745124</span></div>
											<div className="waitPay_txt">买家已付款</div>
										</div>
										<div className="orderMain">
											<div className="orderMain_img">
												<img src="img/img111.jpg"/>
											</div>
											<div className="orderMain_txt">
												<p>大号纸杯 大号纸杯大号纸杯大号纸杯大号纸杯大号纸杯大号纸杯</p>
												<p><span>￥</span><span>2300</span><span>已售：</span><span>666</span></p>
											</div>
										</div>
									</div>
									<div className="waitPay_btn">
										<div className="promptshipment">提醒发货</div>
									</div>
								</div>
							</div>
							<div className="alreadyOut">
								<div className="waitPay_main">
									<div className="mainn" data-type="myorder" data-name="卖家已发货">
										<div className="orderNumber">
											<div className="number">订单号：<span>12345567898745124</span></div>
											<div className="waitPay_txt">卖家已发货</div>
										</div>
										<div className="orderMain">
											<div className="orderMain_img">
												<img src="img/img111.jpg"/>
											</div>
											<div className="orderMain_txt">
												<p>大号纸杯 大号纸杯大号纸杯大号纸杯大号纸杯大号纸杯大号纸杯</p>
												<p><span>￥</span><span>2300</span><span>已售：</span><span>666</span></p>
											</div>
										</div>
									</div>
									<div className="waitPay_btn">
										<div className="viewLogistics">查看物流</div>
										<div className="confirmReceipt  confirm_shouhuo">确认收货</div>
									</div>
								</div>
							</div>
							<div className="successTrade">
								<div className="mainn" data-type="myorder" data-name="交易成功">
									<div className="orderNumber">
										<div className="number">订单号：<span>12345567898745124</span></div>
										<div className="waitPay_txt">交易成功</div>
									</div>
									<div className="orderMain">
										<div className="orderMain_img">
											<img src="img/img111.jpg"/>
										</div>
										<div className="orderMain_txt">
											<p>大号纸杯 大号纸杯大号纸杯大号纸杯大号纸杯大号纸杯大号纸杯</p>
											<p><span>￥</span><span>2300</span><span>已售：</span><span>666</span></p>
										</div>
									</div>
									<div className="orderMain">
										<div className="orderMain_img">
											<img src="img/img111.jpg"/>
										</div>
										<div className="orderMain_txt">
											<p>大号纸杯 大号纸杯大号纸杯大号纸杯大号纸杯大号纸杯大号纸杯</p>
											<p><span>￥</span><span>2300</span><span>已售：</span><span>666</span></p>
										</div>
									</div>
								</div>
								<div className="waitPay_btn">
									<div className="viewLogistics">查看物流</div>
									<div className="confirmReceipt goEval">马上评价</div>
								</div>
							</div>
							<div className="over">
								<div className="over_left"></div>
								<div className="over_center">内容已到底</div>
								<div className="over_right"></div>
							</div>
							<div className="no_order">
								<p className="p1">
									<img src="img/order_kong.png"/>
								</p>
								<p className="p2">暂无订单信息哦！</p>
							</div>
						</li>
						<li>
							<div className="waitPay">
								<div className="waitPay_main">
									<div className="mainn" data-type="myorder" data-name="等待买家付款">
										<div className="orderNumber">
											<div className="number">订单号：<span>12345567898745124</span></div>
											<div className="waitPay_txt">等待买家付款</div>
										</div>
										<div className="orderMain">
											<div className="orderMain_img">
												<img src="img/img111.jpg"/>
											</div>
											<div className="orderMain_txt">
												<p>大号纸杯 大号纸杯大号纸杯大号纸杯大号纸杯大号纸杯大号纸杯</p>
												<p><span>￥</span><span>2300</span><span>已售：</span><span>666</span></p>
											</div>
										</div>
									</div>
									<div className="waitPay_btn">
										<div className="cancelOrder">取消订单</div>
										<div className="payment">付款</div>
									</div>
								</div>
							</div>
							<div className="no_order">
								<p className="p1">
									<img src="img/order_kong.png"/>
								</p>
								<p className="p2">暂无订单信息哦！</p>
							</div>
						</li>
						<li>
							<div className="alreadyPay">
								<div className="waitPay_main">
									<div className="mainn" data-type="myorder" data-name="买家已付款">
										<div className="orderNumber">
											<div className="number">订单号：<span>12345567898745124</span></div>
											<div className="waitPay_txt">买家已付款</div>
										</div>
										<div className="orderMain">
											<div className="orderMain_img">
												<img src="img/img111.jpg"/>
											</div>
											<div className="orderMain_txt">
												<p>大号纸杯 大号纸杯大号纸杯大号纸杯大号纸杯大号纸杯大号纸杯</p>
												<p><span>￥</span><span>2300</span><span>已售：</span><span>666</span></p>
											</div>
										</div>
									</div>
									<div className="waitPay_btn">
										<div className="promptshipment">提醒发货</div>
									</div>
								</div>
							</div>
							<div className="no_order">
								<p className="p1">
									<img src="img/order_kong.png"/>
								</p>
								<p className="p2">暂无订单信息哦！</p>
							</div>
						</li>
						<li>
							<div className="alreadyOut">
								<div className="waitPay_main">
									<div className="mainn" data-type="myorder" data-name="卖家已发货">
										<div className="orderNumber">
											<div className="number">订单号：<span>12345567898745124</span></div>
											<div className="waitPay_txt">卖家已发货</div>
										</div>
										<div className="orderMain">
											<div className="orderMain_img">
												<img src="img/img111.jpg"/>
											</div>
											<div className="orderMain_txt">
												<p>大号纸杯 大号纸杯大号纸杯大号纸杯大号纸杯大号纸杯大号纸杯</p>
												<p><span>￥</span><span>2300</span><span>已售：</span><span>666</span></p>
											</div>
										</div>
									</div>
									<div className="waitPay_btn">
										<div className="viewLogistics">查看物流</div>
										<div className="confirmReceipt confirm_shouhuo">确认收货</div>
									</div>
								</div>
							</div>
							<div className="no_order">
								<p className="p1">
									<img src="img/order_kong.png"/>
								</p>
								<p className="p2">暂无订单信息哦！</p>
							</div>
						</li>
						<li>
							<div className="successTrade">
								<div className="mainn" data-type="myorder" data-name="交易成功">
									<div className="orderNumber">
										<div className="number">订单号：<span>12345567898745124</span></div>
										<div className="waitPay_txt">交易成功</div>
									</div>
									<div className="orderMain">
										<div className="orderMain_img">
											<img src="img/img111.jpg"/>
										</div>
										<div className="orderMain_txt">
											<p>大号纸杯 大号纸杯大号纸杯大号纸杯大号纸杯大号纸杯大号纸杯</p>
											<p><span>￥</span><span>2300</span><span>已售：</span><span>666</span></p>
										</div>
									</div>
									<div className="orderMain">
										<div className="orderMain_img">
											<img src="img/img111.jpg"/>
										</div>
										<div className="orderMain_txt">
											<p>大号纸杯 大号纸杯大号纸杯大号纸杯大号纸杯大号纸杯大号纸杯</p>
											<p><span>￥</span><span>2300</span><span>已售：</span><span>666</span></p>
										</div>
									</div>
								</div>
								<div className="waitPay_btn">
									<div className="viewLogistics">查看物流</div>
									<div className="confirmReceipt goEval">马上评价</div>
								</div>
							</div>
							<div className="successTrade">
								<div className="mainn" data-type="myorder" data-name="交易成功">
									<div className="orderNumber">
										<div className="number">订单号：<span>12345567898745124</span></div>
										<div className="waitPay_txt">交易成功</div>
									</div>
									<div className="orderMain">
										<div className="orderMain_img">
											<img src="img/img111.jpg"/>
										</div>
										<div className="orderMain_txt">
											<p>大号纸杯 大号纸杯大号纸杯大号纸杯大号纸杯大号纸杯大号纸杯</p>
											<p><span>￥</span><span>2300</span><span>已售：</span><span>666</span></p>
										</div>
									</div>
									<div className="orderMain">
										<div className="orderMain_img">
											<img src="img/img111.jpg"/>
										</div>
										<div className="orderMain_txt">
											<p>大号纸杯 大号纸杯大号纸杯大号纸杯大号纸杯大号纸杯大号纸杯</p>
											<p><span>￥</span><span>2300</span><span>已售：</span><span>666</span></p>
										</div>
									</div>
								</div>
								<div className="waitPay_btn">
									<div className="viewLogistics">查看物流</div>
									<div className="confirmReceipt goEval">马上评价</div>
								</div>
							</div>
							<div className="no_order">
								<p className="p1">
									<img src="img/order_kong.png"/>
								</p>
								<p className="p2">暂无订单信息哦！</p>
							</div>
						</li>
					</ul>
				</div>
				<div className="mask">
					<div className="toSelect">
						<p>确认将这<span>1</span>个宝贝删除？</p>
						<p>
							<span className="quxiao">取消</span>
							<span className="queding">确定</span>
						</p>
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
//===========获取user传来的参数indexOk来进行事件====================		
		var indexOk=that.props.indexOk;
		if(indexOk+1){
			$(".orderKind_nav li").eq(indexOk+1).trigger("click").addClass("active").siblings("li").removeClass("active");
			$(".orderKind_main li").eq(indexOk+1).css("display","block").siblings("li").css("display","none");
		}
//==========头部进入消息=========================		
		$("#goMessageBox").click(function(){
			$(".messageBox").css("display","block")
		});
		$(".orderKind_main").click(function(){
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
//========从我的订单进入页面,空订单
		if($(".orderKind_main li").eq(0).find(".waitPay").length==0 && $(".orderKind_main li").eq(0).find(".alreadyPay").length==0 && $(".orderKind_main li").eq(0).find(".alreadyOut").length==0 && $(".orderKind_main li").eq(0).find(".successTrade").length==0){
			$(".orderKind_main li").eq(0).find(".no_order").css("display","block");
		}
//=======从待付款等等进入页面,空订单		
		if($(".orderKind_main li").eq(indexOk+1).find(".waitPay").length==0 && $(".orderKind_main li").eq(indexOk+1).find(".alreadyPay").length==0 && $(".orderKind_main li").eq(indexOk+1).find(".alreadyOut").length==0 && $(".orderKind_main li").eq(indexOk+1).find(".successTrade").length==0){
			$(".orderKind_main li").eq(indexOk+1).find(".no_order").css("display","block");
		}
//============点击订单里每一块   获取对应的内容=================================		
		$(".orderKind_nav li").click(function(){
			var index=$(this).index();
			$(this).addClass("active").siblings("li").removeClass("active");
			$(".orderKind_main li").eq(index).css("display","block").siblings("li").css("display","none");
//空订单		
			if($(".orderKind_main li").eq(index).find(".waitPay").length==0 && $(".orderKind_main li").eq(index).find(".alreadyPay").length==0 && $(".orderKind_main li").eq(index).find(".alreadyOut").length==0 && $(".orderKind_main li").eq(index).find(".successTrade").length==0){
				$(".orderKind_main li").eq(index).find(".no_order").css("display","block");
			}
		});
//==========点击每个商品到对应的订单详情===========================	
		$(".mainn").click(function(){
			var name=$(this).attr("data-name");
			var type=$(this).attr("data-type");
			var OrderDetail=require("./OrderDetail");
			var OrderDetailHeader=require("./OrderDetailHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<OrderDetail type={type} name={name}/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<OrderDetailHeader type={type} name={name}/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		});
//==========点击待付款里的取消订单===================================		
		$(".cancelOrder").click(function(){
			var $this=$(this);
			$(".mask").css("display","block");
			$(".queding").click(function(){
				$(".mask").css("display","none");
				$(".cancelOrder").parents(".waitPay_btn").parents(".waitPay").remove();
				//点击取消后没有订单显示空订单
				if($(this).parents(".waitPay").length==0){
					$(".orderKind_main li").eq(1).find(".no_order").css("display","block");
				}
			});
			$(".quxiao").click(function(){
				$(".mask").css("display","none");
			})
		});
//==========点击待发货里的提醒发货====================================	
		$(".promptshipment").click(function(){
			that.makeText("已提醒卖家发货",2000);
		});	
//========点击马上评价========================================
		$(".goEval").click(function(){
			var OrderEval=require("./OrderEval");
			var OrderEvalHeader=require("./OrderEvalHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<OrderEval type1="myorder"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<OrderEvalHeader type1="myorder"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		});
//============点击确认收货==================
		$(".confirm_shouhuo").click(function(){
			var DealSuccess=require("./DealSuccess");
			var DealSuccessHeader=require("./DealSuccessHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<DealSuccess type2="myorder"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<DealSuccessHeader type2="myorder"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
			
		})
	},
	componentDidUpdate:function(){
		
		
		
	}
});
module.exports=MyOrder;
