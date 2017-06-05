var React=require("react");
var ReactDOM=require("react-dom");
//var ProList=require("./ProList");
var MineZiliao=React.createClass({
	getInitialState:function(){
		return{
			kindList:""
		}
	},
	
	backHandel:function(){
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
			<div className="mineziliaoContent">
				<div className="mineziliao_header">
					<div className="left_mineziliao" id="goBack" onClick={this.backHandel}>
						<img src="img/back.png"/>
					</div>
					<div className="center_mineziliao"> 
						个人资料
					</div>
					<div className="right_mineziliao" id="goMessageBox">
						<img src="img/more_03.png"/>
						<ul className="messageBox">
							<li data-type="mineziliao">
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
							<li data-type="mineziliao">
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
							<li data-type="mineziliao">
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
				<ul className="mineziliao_main">
					<li>
						<div className="ziliao_title">头像</div>
						<div className="mine_tou">
							<img src="img/mine_tou.png"/>
						</div>
						
					</li>
					<li>
						<div className="ziliao_title">会员名</div>
						<p>1234568788</p>
					</li>
					<li>
						<div className="ziliao_title">注册地址</div>
						<p>栾川</p>
					</li>
					<li className="nicheng">
						<div className="ziliao_title">昵称</div>
						<div className="more"><img src="img/set_next.png"/></div>
					</li>
					<li className="shou_dizhi">
						<div className="ziliao_title">收货地址</div>
						<div className="more"><img src="img/set_next.png"/></div>
					</li>
				</ul>
			</div>
			
		)
	},
	componentDidMount:function(){
		$("#goMessageBox").click(function(){
			$(".messageBox").css("display","block")
		});
		$(".mineziliao_main").click(function(){
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
//============点击更多修改昵称============================
		$(".nicheng").click(function(){
			var ChangeName=require("./ChangeName");
			var ChangeNameHeader=require("./ChangeNameHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<ChangeName type="mineziliao" />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<ChangeNameHeader type="mineziliao" />,document.getElementById("header"));
			$("#header").hide();
			$("#footer").hide();
		})

//============点击更多修改收货地址=================
		$(".shou_dizhi").click(function(){
			var ChangeAddress=require("./ChangeAddress");
			var ChangeAddressHeader=require("./ChangeAddressHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<ChangeAddress type="mineziliao" />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<ChangeAddressHeader type="mineziliao" />,document.getElementById("header"));
			$("#header").hide();
			$("#footer").hide();
			
		})
	},
	componentDidUpdate:function(){

		
		
	}
});
module.exports=MineZiliao;
