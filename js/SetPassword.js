var React=require("react");
var ReactDOM=require("react-dom");
var SetPassword=React.createClass({
	getInitialState:function(){
		return{
			
		}
	},
	
	componentWillMount:function(){
		var that=this;
		
	},
	loginHandel:function(){
		
	},
	render:function(){
		return(
			<div className="setPasswordContent">
				<div className="havePass">您已经通过验证，请重新设置您的密码</div>
				<div className="setNewPw">
					<input type="password" placeholder="请设置6-20位新密码" />
				</div>
				<div className="againNewPw">
					<input type="password" placeholder="请再次输入您的密码" />
					<span><img src="img/select_phonenumber-56_03.png" /></span>
				</div>
				<div className="errorMg">
					<span>
						<img src="img/tishi-56_03.png" />
					</span>
					<span>两次密码输入不一致</span>
				</div>
				<div className="wancheng">完成</div>
				
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
//=============input获取焦点，完成变色==============================		
		$(".setNewPw input").focus(function(){
			$(".wancheng").css("background","#f39800")
		});
		$(".againNewPw input").focus(function(){
			$(".wancheng").css("background","#f39800")
		})
//==============点击完成，判断两个密码不一致，错误提示==============================
		$(".wancheng").click(function(){
			if($(".setNewPw input").val()!=$(".againNewPw input").val()||$(".setNewPw input").val()==""||$(".againNewPw input").val()==""){
				$(".errorMg").css("display","block");
				$(".againNewPw span").css("display","block");
				$(".againNewPw input").css("color","#f23025");
			}else if($(".setNewPw input").val()==$(".againNewPw input").val()){
				that.makeText("密码已重置，请登录",2000);
				var type=that.props.type;
				var list=that.props.list;
				var kind=that.props.kind;
				var cart=that.props.cart;
				var collect=that.props.collect;
				var Login=require("./Login");
				var LoginHeader=require("./LoginHeader");
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(<Login type={type} list={list} kind={kind} cart={cart} collect={collect}/>,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<LoginHeader type={type} list={list} kind={kind} cart={cart} collect={collect}/>,document.getElementById("header"));
			}
		})
	},
	componentDidUpdate:function(){

		
		
	}
});
module.exports=SetPassword;
