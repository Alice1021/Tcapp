var React=require("react");
var ReactDOM=require("react-dom");
//var ProList=require("./ProList");
var Mypurse=React.createClass({
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
			<div className="mypurseContent">
				<div className="mypurse_header">
					<div className="left_mypurse" id="goBack" onClick={this.backHandel}>
						<img src="img/backf.png"/>
					</div>
					<div className="center_mypurse"> 
						我的钱包
					</div>
					<div className="right_mypurse" id="goMessageBox">
						<img src="img/moref.png"/>
						<ul className="messageBox">
							<li data-type="mypurse">
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
							<li data-type="mypurse">
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
							<li data-type="mypurse">
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
				<ul className="mypurse_main">
					<div className="mypurse_main_header">
						<img src="img/22@2x.png"/>
					</div>
					<p className="mypurse_main_price">
						<span>￥</span>
						<span>88888</span>
					</p>
					<p className="mypurse_main_text">我的余额</p>
					<div className="mingxi">
						<div className="left_line">
							<img src="img/left_line.png"/>
							
						</div>
						<div className="lingqian">零钱明细</div>
						<div className="right_line">
							<img src="img/right_line.png"/>
						</div>
					</div>
					<div className="addmoney">充值</div>
				</ul>
			</div>
			
		)
	},
	componentDidMount:function(){
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
//============点击充值		
		$(".addmoney").click(function(){
			var VoucherCenter=require("./VoucherCenter");
			var VoucherCenterHeader=require("./VoucherCenterHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<VoucherCenter type="mypurse"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<VoucherCenterHeader type="mypurse"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		});
//==============点击零钱明细
		$(".lingqian").click(function(){
			var Balance=require("./Balance");
			var BalanceHeader=require("./BalanceHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Balance type="mypurse"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<BalanceHeader type="mypurse"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		})
	},
	componentDidUpdate:function(){

		
		
	}
});
module.exports=Mypurse;
