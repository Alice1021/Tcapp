var React=require("react");
var ReactDOM=require("react-dom");
//var ProList=require("./ProList");
var Set=React.createClass({
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
			<div className="setContent">
				<div className="set_header">
					<div className="left_set" id="goBack" onClick={this.backHandel}>
						<img src="img/back.png"/>
					</div>
					<div className="center_set"> 
						设置
					</div>
					<div className="right_set" id="goMessageBox">
						<img src="img/more_03.png"/>
						<ul className="messageBox">
							<li data-type="set">
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
							<li data-type="set">
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
							<li data-type="set">
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
				<div className="set_main">
					<ul className="change_main">
						<li data-type="set">
							<div className="change_main_txt">修改手机号</div>
							<div className="change_main_next">
								<img src="img/set_next.png"/>
							</div>
						</li>
						<li data-type="set">
							<div className="change_main_txt">修改密码</div>
							<div className="change_main_next">
								<img src="img/set_next.png"/>
							</div>
						</li>
					</ul>
					<ul className="change_other">
						<li data-type="set">
							<div className="change_main_txt">版本更新</div>
							<div className="change_main_next">
								<img src="img/set_next.png"/>
							</div>
						</li>
						<li data-type="set">
							<div className="change_main_txt">欢迎吐槽</div>
							<div className="change_main_next">
								<img src="img/set_next.png"/>
							</div>
						</li>
						<li data-type="set">
							<div className="change_main_txt">消息通知</div>
							<div className="change_main_next">
								<img src="img/set_next.png"/>
							</div>
						</li>
						<li data-type="set">
							<div className="change_main_txt">清除缓存</div>
							<div className="change_main_next">
								<img src="img/set_next.png"/>
							</div>
						</li>
					</ul>
				    <ul className="xieyi">
				    	<li data-type="set">
							<div className="change_main_txt">用户协议</div>
							<div className="change_main_next">
								<img src="img/set_next.png"/>
							</div>
						</li>
				    </ul>
				    <div className="tuichu">退出当前账号</div>
				</div>
			</div>
			
		)
	},
	componentDidMount:function(){
		$("#goMessageBox").click(function(){
			$(".messageBox").css("display","block")
		});
		$(".set_main").click(function(){
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
		$(".change_main li").click(function(){
			var type=$(this).attr("data-type");
			if($(this).index()==0){
				var ChangeNumber=require("./ChangeNumber");
				var ChangeNumberHeader=require("./ChangeNumberHeader");
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(<ChangeNumber type={type} />,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<ChangeNumberHeader type={type} />,document.getElementById("header"));
				$("#header").hide();
				$("#footer").hide();
			}else if($(this).index()==1){
				var ChangePassword=require("./ChangePassword");
				var ChangePasswordHeader=require("./ChangePasswordHeader");
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(<ChangePassword type={type} />,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<ChangePasswordHeader type={type} />,document.getElementById("header"));
				$("#header").hide();
				$("#footer").hide();
			}
		});
		$(".change_other li").click(function(){
			var type=$(this).attr("data-type");
			if($(this).index()==0){
//				var ChangeNumber=require("./ChangeNumber");
//				var ChangeNumberHeader=require("./ChangeNumberHeader");
//				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
//				ReactDOM.render(<ChangeNumber type={type} />,document.getElementById("content"));
//				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
//				ReactDOM.render(<ChangeNumberHeader type={type} />,document.getElementById("header"));
//				$("#header").hide();
//				$("#footer").hide();
			}else if($(this).index()==1){
				var WelcomeTucao=require("./WelcomeTucao");
				var WelcomeTucaoHeader=require("./WelcomeTucaoHeader");
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(<WelcomeTucao type={type} />,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<WelcomeTucaoHeader type={type} />,document.getElementById("header"));
				$("#header").hide();
				$("#footer").hide();
			}else if($(this).index()==2){
				var SetMessage=require("./SetMessage");
				var SetMessageHeader=require("./SetMessageHeader");
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(<SetMessage type={type} />,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<SetMessageHeader type={type} />,document.getElementById("header"));
				$("#header").hide();
				$("#footer").hide();
			}
			
		});
//===================退出当前登录
		$(".tuichu").click(function(){
			localStorage.removeItem('users');
			var User=require("./User");
			var UserHeader=require("./UserHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<User />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<UserHeader />,document.getElementById("header"));
			$("#footer").show();
			$("#header").show();
		})

	},
	componentDidUpdate:function(){

		
		
	}
});
module.exports=Set;
