var React=require("react");
var ReactDOM=require("react-dom");
//var ProList=require("./ProList");
var Login=React.createClass({
	getInitialState:function(){
		return{
			kindList:""
		}
	},
	
	componentWillMount:function(){
		var that=this;
		
	},
	render:function(){
		return(
			<div className="loginContent">
				<div className="login_nav">
					<img src="img/logins-2_03.png"/>
				</div>
				<div className="login_tishi">
					<span>
						<img src="img/tishi-56_03.png"/>
					</span>
					<span>您输入的手机号不符合规则</span>
				</div>
				<div className="zhanghao">
					<span>账号</span>
					<input className="phone_number" type="text" placeholder="请输入手机号/邮箱" />
					<span>
						<img src="img/select_phonenumber-56_03.png"/>
					</span>
				</div>
				<div className="mima">
					<span>密码</span>
					<input className="password_number" type="password" placeholder="请输入您的密码" />
					<span>
						<img src="img/select_phonenumber-56_03.png"/>
					</span>
					<span><img src="img/mima-2_03.png"/></span>
					
				</div>
				<div className="wangji_mima">
					<div className="forgetNumber">忘记密码</div>
				</div>
				
				<div className="denglu">登录</div>
				<div className="otherStyle">
					<img src="img/login-2_04.png"/>
				</div>
				<div className="otherStyle_each">
					<span>
						<img src="img/login-2_06.png"/>
					</span>
					<span>
						<img src="img/login-2_08.png"/>
					</span>
					<span>
						<img src="img/login-2_10.png"/>
					</span>
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
//=========点击忘记密码==============================		
		$(".forgetNumber").click(function(){
			var type=that.props.type;
			var list=that.props.list;
			var kind=that.props.kind;
			var cart=that.props.cart;
			var collect=that.props.collect;
			var myeval=that.props.myeval;
			var FindPassword=require("./FindPassword");
			var FindPasswordHeader=require("./FindPasswordHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<FindPassword type={type} list={list} kind={kind} cart={cart} collect={collect} myeval={myeval}/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<FindPasswordHeader type={type} list={list} kind={kind} cart={cart} collect={collect} myeval={myeval}/>,document.getElementById("header"));
			$("#footer").hide();
		});
		$(".denglu").click(function(){
			var pattern = /^1[34578]\d{9}$/;
			var phone=$(".phone_number").val();
			
			var ispassword=/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/;
			var passtext=$(".password_number").val();
			
			if(!pattern.test(phone)){
				$(".login_nav").css("margin-bottom","0.63rem");
				$(".login_tishi").css("display","block");
				$(".zhanghao span").eq(1).css("display","inline-block");
				return false;
			}
			if(!ispassword.test(passtext)){
				$(".login_nav").css("margin-bottom","0.63rem");
				$(".login_tishi").css("display","block");
				$(".login_tishi span").eq(1).html("输入6-20位字母和数字或特殊符号组成的密码");
				$(".mima span").eq(1).css("display","inline-block");
				return false;
			}else{
				$(".login_nav").css("margin-bottom","1.23rem")
				$(".login_tishi").css("display","none");
				$(".login_tishi span").eq(1).html("您输入的账号不存在");
				$(".mima span").eq(1).css("display","none");
			}
			if($(".zhanghao input").val()!=""&&$(".zhanghao input").val()!=""&&that.props.type=="user"){
				var username = $(".zhanghao input").val();
				var pass     = $(".mima input").val();
				$.ajax({
					type:'post',
					url:"http://m.chepc.cn/sopa/User/do_login",
					async:true,
					dataType:"json",
					data:{tcggsc:'c2726d9cbd6f600f12d60352729060c3',username:username,password:pass},
					success:function(data){
						console.log(data);
						if(data.status == 1){//登录成功
							var users = data.result;
							localStorage.setItem('users',JSON.stringify(users));//储存用户信息  localStorage 只能存字符串
							alert(JSON.parse(localStorage.getItem("users")));
							
							var User=require("./User");
							var UserHeader=require("./UserHeader");
							ReactDOM.unmountComponentAtNode(document.getElementById("content"));
							ReactDOM.render(<User />,document.getElementById("content"));
							ReactDOM.unmountComponentAtNode(document.getElementById("header"));
							ReactDOM.render(<UserHeader />,document.getElementById("header"));
							$("#footer").show();
							$("#header").show();
						}else{
							$('.login_tishi').find('span').eq(1).html('');
							$('.login_tishi').find('span').eq(1).html(data.msg);
						}
					}
				});
			}else{
				that.makeText("请输入信息",2000);
			}
			
		});
		
		
		
	},
	componentDidUpdate:function(){

		
		
	}
});
module.exports=Login;
