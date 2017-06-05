var React=require("react");
var ReactDOM=require("react-dom");
//var ProList=require("./ProList");
var Refund=React.createClass({
	getInitialState:function(){
		return{
			kindList:""
		}
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
	componentWillMount:function(){
		var that=this;
		
	},
	render:function(){
		return(
			<div className="refundContent">
				<div className="refund_headers">
					<div className="refund_header">
						<div className="left_refund" id="goBack" onClick={this.backHandel}>
							<img src="img/back.png"/>
						</div>
						<div className="center_refund"> 
							退货/售后
						</div>
						<div className="right_refund" id="goMessageBox">
							<img src="img/more_03.png"/>
							<ul className="messageBox">
								<li data-type="refund">
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
								<li data-type="refund">
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
								<li data-type="refund">
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
					<ul className="ul_header">
						<li className="actives">退款</li>
						<li>售后</li>
					</ul>
				</div>
				<div className="refund_main">
					<ul className="ul_main">
						<li>
							<div className="goods_lis">
								<div className="lis_top">
									<span>订单号:12345567898745124</span>
									<span>退款成功</span>
								</div>
								<div className="lis_center">
									<div className="left">
										<img src="img/beizi1_07.png"/>
									</div>
									<div className="right">
										<p>大号纸杯 12盎司 1万  一次性杯子 纸杯增厚不渗漏</p>

										<p>
											<span>尺寸：</span>
											<span>210*285mm</span>  <span>数量：</span><span>500张</span>
										</p>
										<p><span>￥88</span><span>x1</span></p>
									</div>
								</div>
								<div className="lis_bottom">
									<div className="to_orderdetail">查看详情</div>
								</div>
							</div>
							<div className="goods_lis">
								<div className="lis_top">
									<span>订单号:12345567898745124</span>
									<span>退款中</span>
								</div>
								<div className="lis_center">
									<div className="left">
										<img src="img/beizi1_07.png"/>
									</div>
									<div className="right">
										<p>大号纸杯 12盎司 1万  一次性杯子 纸杯增厚不渗漏</p>

										<p>
											<span>尺寸：</span>
											<span>210*285mm</span>  <span>数量：</span><span>500张</span>
										</p>
										<p><span>￥88</span><span>x1</span></p>
									</div>
								</div>
								<div className="lis_bottom">
									<div className="to_orderdetail">查看详情</div>
								</div>
							</div>
							<div className="goods_lis">
								<div className="lis_top">
									<span>订单号:12345567898745124</span>
									<span>退款中</span>
								</div>
								<div className="lis_center">
									<div className="left">
										<img src="img/beizi1_07.png"/>
									</div>
									<div className="right">
										<p>大号纸杯 12盎司 1万  一次性杯子 纸杯增厚不渗漏</p>

										<p>
											<span>尺寸：</span>
											<span>210*285mm</span>  <span>数量：</span><span>500张</span>
										</p>
										<p><span>￥88</span><span>x1</span></p>
									</div>
								</div>
								<div className="lis_bottom">
									<div className="to_orderdetail">查看详情</div>
								</div>
							</div>
							<div className="goods_lis">
								<div className="lis_top">
									<span>订单号:12345567898745124</span>
									<span>退款成功</span>
								</div>
								<div className="lis_center">
									<div className="left">
										<img src="img/beizi1_07.png"/>
									</div>
									<div className="right">
										<p>大号纸杯 12盎司 1万  一次性杯子 纸杯增厚不渗漏</p>

										<p>
											<span>尺寸：</span>
											<span>210*285mm</span>  <span>数量：</span><span>500张</span>
										</p>
										<p><span>￥88</span><span>x1</span></p>
									</div>
								</div>
								<div className="lis_bottom">
									<div className="to_orderdetail">查看详情</div>
								</div>
							</div>
						</li>
						<li>
							<p>
								<img src="img/shouhou.png"/>	
							</p>
							<p>400-6878-909</p>
							<p>售后问题请与客服联系</p>
						</li>
					</ul>
				</div>
			</div>
			
		)
	},
	componentDidMount:function(){
		$("#goMessageBox").click(function(){
			$(".messageBox").css("display","block")
			
		});
		$(".refund_main").click(function(){
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
//================点击退款和售后来切换对应的页面
		$(".ul_header li").click(function(){
			var index=$(this).index();
			$(this).addClass("actives").siblings("li").removeClass("actives");
			$(".ul_main li").eq(index).css("display","block").siblings("li").css("display","none");
		});
//===============点击查看详情跳转到订单详情
		$(".to_orderdetail").click(function(){
			var OrderDetail=require("./OrderDetail");
			var OrderDetailHeader=require("./OrderDetailHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<OrderDetail type="refund"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<OrderDetailHeader type="refund"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
			
		})
	},
	componentDidUpdate:function(){

		
		
	}
});
module.exports=Refund;
