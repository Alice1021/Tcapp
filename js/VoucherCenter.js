var React=require("react");
var ReactDOM=require("react-dom");
//var ProList=require("./ProList");
var VoucherCenter=React.createClass({
	getInitialState:function(){
		return{
			kindList:""
		}
	},
	backHandel:function(){
		console.log(this.props.type)
		if(this.props.type=="mypurse"){
			var Mypurse=require("./Mypurse");
			var MypurseHeader=require("./MypurseHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Mypurse type="user"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<MypurseHeader type="user"/>,document.getElementById("header"));

		}
	},
	componentWillMount:function(){
		var that=this;
		
	},
	render:function(){
		return(
			<div className="voucherCenterContent">
				<div className="voucherCenter_header">
					<div className="left_voucherCenter" id="goBack" onClick={this.backHandel}>
						<img src="img/back.png"/>
					</div>
					<div className="center_voucherCenter"> 
						充值中心
					</div>
					<div className="right_voucherCenter" id="goMessageBox">
						<img src="img/more_03.png"/>
						<ul className="messageBox">
							<li data-type="voucherCenter">
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
							<li data-type="voucherCenter">
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
							<li data-type="voucherCenter">
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
				<div className="voucherCenter_main">
					<div className="chongzhi_money">
						<p>充值金额</p>
						<div className="money_chance">
							<div className="voucherChecked each_money">
								500元
								<div className="checked_img">
									<img src="img/voucherCenter.png"/>
								</div>
							</div>
							<div className="voucherChecked each_money">
								1000元
								<div className="checked_img">
									<img src="img/voucherCenter.png"/>
								</div>
							</div>
							<div className="voucherChecked each_money">
								2000元
								<div className="checked_img">
									<img src="img/voucherCenter.png"/>
								</div>
							</div>
							<div className="voucherChecked each_money">
								3000元
								<div className="checked_img">
									<img src="img/voucherCenter.png"/>
								</div>
							</div>
							<div className="voucherChecked each_money">
								50000元
								<div className="checked_img">
									<img src="img/voucherCenter.png"/>
								</div>
							</div>
							<div className="voucherChecked each_money">
								10000元
								<div className="checked_img">
									<img src="img/voucherCenter.png"/>
								</div>
							</div>
							<div className="voucherChecked each_money">
								<input type="text" placeholder="请输入金额" />	
								<span>其他金额</span>
								<div className="checked_img">
									<img src="img/voucherCenter.png"/>
								</div>
							</div>
						</div>
					</div>
					<ul className="chongzhi_style">
						<p>充值方式</p>
						<li>
							<div className="style_img">
								<img src="img/wechat.png"/>
							</div>
							<div className="style_txt">微信充值</div>
							<div className="style_checked">
								<img src="img/chong_checked.png"/>
							</div>
						</li>
						<li>
							<div className="style_img">
								<img src="img/zhifu.png"/>
							</div>
							<div className="style_txt">支付宝充值</div>
							<div className="style_checked">
								<img src="img/chong_uncheck.png"/>
							</div>
						</li>
					</ul>
					<div className="queren">确认</div>
				</div>
			</div>
			
		)
	},
	componentDidMount:function(){
		$("#goMessageBox").click(function(){
			$(".messageBox").css("display","block")
		});
		$(".voucherCenter_main").click(function(){
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
//===========点击选择的充值金额===========================
		$(".chongzhi_money .each_money").click(function(){ 
			var index=$(this).index();
			$(this).find(".checked_img").css("display","block").parents(".each_money").siblings(".each_money").find(".checked_img").css("display","none")
			if(index==6){
				$(".chongzhi_money .each_money").eq(6).find("input").css("display","block");
				$(".chongzhi_money .each_money").eq(6).find("span").css("display","none");
			}else{
				$(".chongzhi_money .each_money").eq(6).find("span").css("display","block");
				$(".chongzhi_money .each_money").eq(6).find("input").css("display","none");
			}
		});
//==========充值方式的选择===========================	
		$(".chongzhi_style li").click(function(){
			var index=$(this).index();
//			alert(index);
			$(this).find(".style_checked").find("img").attr("src","img/chong_checked.png").parents("li").siblings("li").find(".style_checked").find("img").attr("src","img/chong_uncheck.png")
		})

	},
	componentDidUpdate:function(){

		
		
	}
});
module.exports=VoucherCenter;
