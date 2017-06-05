var React=require("react");
var ReactDOM=require("react-dom");
//var ProList=require("./ProList");
var ChangeNumber=React.createClass({
	getInitialState:function(){
		return{
			kindList:""
		}
	},
	backHandel:function(){
//		console.log(this.props.type)
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
			<div className="changeNumberContent">
				<div className="changeNumber_header">
					<div className="left_changeNumber" id="goBack" onClick={this.backHandel}>
						<img src="img/back.png"/>
					</div>
					<div className="center_changeNumber"> 
						修改手机号
					</div>
					<div className="right_changeNumber" id="goMessageBox">
						<img src="img/more_03.png"/>
						<ul className="messageBox">
							<li data-type="changeNumber">
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
							<li data-type="changeNumber">
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
							<li data-type="changeNumber">
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
				<div className="changeNumber_main">
					<p>
						<img src="img/changeNumber2_03.png"/>
					</p>
					<p>你当前的手机号为</p>
					<p>
						<span>158****8888</span>
						<span>更换后可用新手机号登录</span>
					</p>
					<p>
						<span><img src="img/changeNumber2_07.png"/></span>
						<input type="text" placeholder="新手机号" />
					</p>
					<p>
						<span className="logo_yanzheng"><img src="img/changeNumber2_10.png"/></span>
						<input className="yanzheng_text" type="text" placeholder="验证码" />
						<span className="yanzhengma">
							<span>获取验证码</span>
							<span>(</span>
							<span id="time">10</span>
							<span>)</span>
						</span>
					</p>
					<div className="queren">确认</div>
				</div>
			</div>
			
		)
	},
	componentDidMount:function(){
		var that=this;
//=========================头部到消息和首页部分		
		$("#goMessageBox").click(function(){
			$(".messageBox").css("display","block")
		});
		$(".changeNumber_main").click(function(){
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
//==============点击获取验证码===============================		
		$(".yanzhengma").click(function(){
			if($(this).find("span").eq(0).html()=="获取验证码"){
				$(this).find("span").eq(0).html("重新获取");
				$(this).css("display","block");
				$(this).css({
//					"background":"#eeeeee",
					"color":"#c0c0c0"
					});
				var setTime;
	            var time=parseInt($("#time").text());
	            setTime=setInterval(function(){
	                if(time<=0){
	                	$(".yanzhengma").css({
//	                		"background":"#f39800",
	                		"color":"#f5a100"
	                	})
	                    clearInterval(setTime);
	                    return;
	                }
	                time--;
	                $("#time").text(time);
	            },1000);
			}else if($(this).find("span").eq(0).html()=="重新获取"&&$(this).find("#time").html()==0){
				$(this).css({
//					"background":"#eeeeee",
					"color":"#c0c0c0"
					});
				$("#time").html(10);
				var setTime;
	            var time=parseInt($("#time").text());
	            setTime=setInterval(function(){
	                if(time<=0){
	                	$(".yanzhengma").css({
//	                		"background":"#f39800",
	                		"color":"#f5a100"
	                	});
	                    clearInterval(setTime);
	                    return;
	                }
	                time--;
	                $("#time").text(time);
	            },1000);
			}
		});
//===============点击确认===========================
		$(".queren").click(function(){
			if(that.props.type=="set"){
				var Set=require("./Set");
				var SetHeader=require("./SetHeader");
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(<Set type="user"/>,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<SetHeader type="user"/>,document.getElementById("header"));
			}
		})
	},
	componentDidUpdate:function(){

		
		
	}
});
module.exports=ChangeNumber;
