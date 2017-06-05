var React=require("react");
var ReactDOM=require("react-dom");
var FindPassword=React.createClass({
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
			<div className="findPasswordContent">
				<div className="number">
					请输入
					<span>13000000000</span>
					收到的验证码
				</div>
				<div className="error_message">
					<span>
						<img src="img/tishi-56_03.png" />
					</span>
					<span>验证码输入错误</span>
				</div>
				<div className="yanzheng">
					<input type="text" placeholder="请输入短信验证码" />
					<div className="huoqu_duanxin">
						<span>获取验证码</span>
						<span>(</span>
						<span id="time">10</span>
						<span>)</span>
					</div>
				</div>
				<div className="noHave">收不到验证码？</div>
				<div className="next_go">下一步</div>
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
//===========点击获取验证码=====================		
		$(".huoqu_duanxin").click(function(){
			if($(this).find("span").eq(0).html()=="获取验证码"){
				$(this).find("span").eq(0).html("重新获取");
				$(this).find("span").css("display","inline-block");
				$(this).css({
					"background":"#eeeeee",
					"color":"#c0c0c0"
					});
				var setTime;
	            var time=parseInt($("#time").text());
	            setTime=setInterval(function(){
	                if(time<=0){
	                	$(".huoqu_duanxin").css({
	                		"background":"#f39800",
	                		"color":"#fff"
	                	})
	                    clearInterval(setTime);
	                    return;
	                }
	                time--;
	                $("#time").text(time);
	            },1000);
			}else if($(this).find("span").eq(0).html()=="重新获取"&&$(this).find("#time").html()==0){
//				$(this).find("span").eq(0).html("重新获取");
//				$(this).find("span").css("display","inline-block");
				$(this).css({
					"background":"#eeeeee",
					"color":"#c0c0c0"
					});
				$("#time").html(10);
				var setTime;
	            var time=parseInt($("#time").text());
	            setTime=setInterval(function(){
	                if(time<=0){
	                	$(".huoqu_duanxin").css({
	                		"background":"#f39800",
	                		"color":"#fff"
	                	});
	                    clearInterval(setTime);
	                    return;
	                }
	                time--;
	                $("#time").text(time);
	            },1000);
			}
		});
//=============input获取焦点，下一步变色==============================	
		$(".yanzheng input").focus(function(){
			$(".next_go").css("background","#f39800");
		});
		
//=============点击下一步=========================
		$(".next_go").click(function(){
			if($(".yanzheng input").val()!=""){
				$(".error_message").css("display","none");
				$(".number").css("margin-bottom","0.55rem");
				var type=that.props.type;
				var list=that.props.list;
				var kind=that.props.kind;
				var cart=that.props.cart;
				var collect=that.props.collect;
				var myeval=that.props.myeval;
				var SetPassword=require("./SetPassword");
				var SetPasswordHeader=require("./SetPasswordHeader");
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(<SetPassword type={type} list={list} kind={kind} cart={cart} collect={collect} myeval={myeval}/>,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<SetPasswordHeader type={type} list={list} kind={kind} cart={cart} collect={collect} myeval={myeval}/>,document.getElementById("header"));
				$("#footer").hide();
			}else{
				$(".error_message").css("display","block");
				$(".number").css("margin-bottom",0)
			}
		});
//==========点击 收不到验证码 =========================
		$(".noHave").click(function(){
			var type=that.props.type;
			var list=that.props.list;
			var kind=that.props.kind;
			var cart=that.props.cart;
			var NotfindYZ=require("./NotfindYZ");
			var NotfindYZHeader=require("./NotfindYZHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<NotfindYZ type={type} list={list} kind={kind} cart={cart}/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<NotfindYZHeader type={type} list={list} kind={kind} cart={cart}/>,document.getElementById("header"));
			$("#footer").hide();
		})
	},
	componentDidUpdate:function(){

		
		
	}
});
module.exports=FindPassword;
