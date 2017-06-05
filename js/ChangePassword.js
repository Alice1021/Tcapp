var React=require("react");
var ReactDOM=require("react-dom");
//var ProList=require("./ProList");
var ChangePassword=React.createClass({
	getInitialState:function(){
		return{
			kindList:""
		}
	},
	backHandel:function(){
		console.log(this.props.type)
		if(this.props.type=="set"){
			var Set=require("./Set");
			var SetHeader=require("./SetHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Set type="user"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<SetHeader type="user"/>,document.getElementById("header"));
		}
	},
	componentWillMount:function(){
		var that=this;
		
	},
	render:function(){
		return(
			<div className="changePasswordContent">
				<div className="changePassword_header">
					<div className="left_changePassword" id="goBack" onClick={this.backHandel}>
						<img src="img/back.png"/>
					</div>
					<div className="center_changePassword"> 
						修改密码
					</div>
					<div className="right_changePassword" id="goMessageBox">
						<img src="img/more_03.png"/>
						<ul className="messageBox">
							<li data-type="changePassword">
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
							<li data-type="changePassword">
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
							<li data-type="changePassword">
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
				<div className="changePassword_main">
					<p>
						<span><img src="img/changekey2_03.png"/></span>
						<input className="pass" type="password" placeholder="请输入原密码" />
					</p>
					<p>
						<span><img src="img/changekey2_03.png"/></span>
						<input  className="pass1" type="password" placeholder="设置新密码" />
					</p>
					<p>
						<span><img src="img/changekey2_03.png"/></span>
						<input className="pass2" type="password" placeholder="确认新密码" />
					</p>
					<div className="queren">确认</div>
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
		$("#goMessageBox").click(function(){
			$(".messageBox").css("display","block")
		});
		$(".changePassword_main").click(function(){
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
//==================点击确认================================		
		$(".queren").click(function(){
			var ispassword = /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/;//6-20位密码格式
			var user       = JSON.parse(localStorage.getItem("users"));//将字符串转化成对象
			var pass       = $('.pass').val();
			var pass1      = $('.pass1').val();
			var pass2      = $('.pass2').val();
			
			if(pass == ""){
				that.makeText('输入密码不能为空',1000);return false;
			}
			if(pass1 == ""){
				that.makeText('输入新密码不能为空',1000);return false;
			}
			if(!ispassword.test(pass1)){
				that.makeText('新密码格式不符',1000);return false;
			}
			if(pass2 == ""){
				that.makeText('确认新密码不能为空',1000);return false;
			}
			
	//			alert(user.user_id+'---'+pass+'---'+pass1+'---'+pass2)
			$.ajax({
				type:"POST",
				url:"http://m.chepc.cn/sopa/user/update_password",
				data:{tcggsc:'c2726d9cbd6f600f12d60352729060c3',user_id:user.user_id,password:pass,password1:pass1,password2:pass2},
				success:function(data){
					console.log(data);
					if(data.state == 0){ 
						that.makeText(data.result,2000);
					}
					if(data.state == 1){
						that.makeText(data.result,1000);
						var Set=require("./Set");
						var SetHeader=require("./SetHeader");
						ReactDOM.unmountComponentAtNode(document.getElementById("content"));
						ReactDOM.render(<Set type="user"/>,document.getElementById("content"));
						ReactDOM.unmountComponentAtNode(document.getElementById("header"));
						ReactDOM.render(<SetHeader type="user"/>,document.getElementById("header"));
					}
				}
			})
//			if(that.props.type=="set"){
//				var Set=require("./Set");
//				var SetHeader=require("./SetHeader");
//				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
//				ReactDOM.render(<Set type="user"/>,document.getElementById("content"));
//				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
//				ReactDOM.render(<SetHeader type="user"/>,document.getElementById("header"));
//			}
		})
	},
	componentDidUpdate:function(){

		
		
	}
});
module.exports=ChangePassword;
