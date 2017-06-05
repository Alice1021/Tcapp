var React=require("react");
var ReactDOM=require("react-dom");
//var ProList=require("./ProList");
var User=React.createClass({
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
			<div className="userContent">
				<div className="uc_header">
					<div className="uch_left">
						<div className="toRegister" id="goRegister" data-type="user">
							注册
						</div>
					</div>
					<div className="uch_center">
						
					</div>
					<div className="uch_right">
						<div className="toLogin" id="goLogin" data-type="user">
							登录
						</div>
					</div>
				</div>
				<div className="uc_headered">
					<div className="touxiang">
						<img src="img/touxiang.png"/>
					</div>
					<div className="user_name">王大大去上班</div>
					<div className="change_zhiliao">
						<span>修改资料</span>
						<span><img src="img/change_ziliao.png"/></span>
					</div>
				</div>
			  	<div className="order">
			  		<div className="myorder" id="goMyOrder" data-type="user">
			  			<div className="mo_text">
							<div className="mot_left">
								<div className="motl_img">
									<img src="img/order.png"/>
								</div>
							</div>
							<div className="mot_center">我的订单</div>
							<div className="mot_right">全部订单&nbsp;<span><img src="img/set_next.png"/></span></div>
			  			</div>
			  		</div>
			  		<div className="orderKind">
			  			<ul className="ok_list">
			  				<li className="order_list">
			  					<div className="okl_top">
			  						<div className="oklt_img">
			  							<img src="img/Wallet.png"/>
			  						</div>
			  					</div>
			  					<div className="okl_bottom">
			  						待付款
			  					</div>
			  				</li>
			  				<li className="order_list">
			  					<div className="okl_top">
			  						<div className="oklt_img">
			  							<img src="img/delivery.png"/>
			  						</div>
			  					</div>
			  					<div className="okl_bottom">
			  						待发货
			  					</div>
			  				</li>
			  				<li className="order_list">
			  					<div className="okl_top">
			  						<div className="oklt_img">
			  							<img src="img/car.png"/>
			  						</div>
			  					</div>
			  					<div className="okl_bottom">
			  						待收货
			  					</div>
			  				</li>
			  				<li className="order_list">
			  					<div className="okl_top">
			  						<div className="oklt_img">
			  							<img src="img/Comment.png"/>
			  						</div>
			  					</div>
			  					<div className="okl_bottom">
			  						待评价
			  					</div>
			  				</li>
			  				<li className="toRefund">
			  					<div className="okl_top">
			  						<div className="oklt_img">
			  							<img src="img/after_sales.png"/>
			  						</div>
			  					</div>
			  					<div className="okl_bottom">
			  						退货/售后
			  					</div>
			  				</li>
			  			</ul>
			  		
			  		
			  		</div>
			  	</div>
			  	<div className="jifen">
			  		<div className="jifen_left">
			  			<span>
			  				<img src="img/youhuiquan@2x.png"/>
			  			</span>
			  			<span>优惠券</span>
			  			<span>0</span>
			  			<span>张</span>
			  		</div>
			  		<div className="jifen_right">
			  			<span>
			  				<img src="img/jifen@2x.png"/>
			  			</span>
			  			<span>积分</span>
			  			<span>188</span>
			  			<span>分</span>
			  		</div>
			  	</div>
				<ul className="mine">
					<li>
						<div className="m_main">
							<div className="mm_left">
								<div className="mml_img">
									<img src="img/wallet2.png"/>
								</div>
							</div>
							<div className="mm_center">我的钱包</div>
							<div className="mm_right"><img src="img/set_next.png"/></div>
						</div>
					</li>
					<li>
						<div className="m_main">
							<div className="mm_left">
								<div className="mml_img">
									<img src="img/Comment2.png"/>
								</div>
							</div>
							<div className="mm_center">我的评价</div>
							<div className="mm_right"><img src="img/set_next.png"/></div>
						</div>
					</li>
					<li>
						<div className="m_main">
							<div className="mm_left">
								<div className="mml_img">
									<img src="img/collection.png"/>
								</div>
							</div>
							<div className="mm_center">我的收藏</div>
							<div className="mm_right"><img src="img/set_next.png"/></div>
						</div>
					</li>
					<li>
						<div className="m_main">
							<div className="mm_left">
								<div className="mml_img">
									<img src="img/personal_data.png"/>
								</div>
							</div>
							<div className="mm_center">个人资料</div>
							<div className="mm_right"><img src="img/set_next.png"/></div>
						</div>
					</li>
				</ul>
				<ul className="aboutus">
					<li>
						<div className="m_main">
							<div className="mm_left">
								<div className="mml_img">
									<img src="img/Customer_service.png"/>
								</div>
							</div>
							<div className="mm_center">我的客服</div>
							<div className="mm_right"><img src="img/set_next.png"/></div>
						</div>
					</li>
					<li>
						<div className="m_main">
							<div className="mm_left">
								<div className="mml_img">
									<img src="img/about_us.png"/>
								</div>
							</div>
							<div className="mm_center">关于我们</div>
							<div className="mm_right"><img src="img/set_next.png"/></div>
						</div>
					</li>
				</ul>
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
//============注册页面============================		
		$("#goRegister").click(function(){
			var type=$(this).attr("data-type");
			var Register=require("./Register");
			var RegisterHeader=require("./RegisterHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Register type={type}/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<RegisterHeader type={type}/>,document.getElementById("header"));
			$("#footer").hide();
		});
//===============去登录页面================================		
		$("#goLogin").click(function(){
			var type=$(this).attr("data-type");
			var Login=require("./Login");
			var LoginHeader=require("./LoginHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Login type={type}/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<LoginHeader type={type}/>,document.getElementById("header"));
			$("#footer").hide();
		})
//============去我的订单=========================		
		$("#goMyOrder").click(function(){
//			console.log("tttt")
			var type=$(this).attr("data-type");				
			var MyOrder=require("./MyOrder");
			var MyOrderHeader=require("./MyOrderHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<MyOrder type={type} />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<MyOrderHeader type={type} />,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		});
//============点击待付款  发货  收货  评价传参到我的订单里面的相应页面========================		
		$(".ok_list .order_list").click(function(){
			var indexTo=$(this).index();
			var MyOrder=require("./MyOrder");
			var MyOrderHeader=require("./MyOrderHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<MyOrder type="user" indexOk={indexTo}/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<MyOrderHeader />,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
			
		});
//=============点击退货售后=================		
		$(".toRefund").click(function(){
			var Refund=require("./Refund");
			var RefundHeader=require("./RefundHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Refund type="user" />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<RefundHeader type="user" />,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		});
//==========未登录状态的判断(我的钱包  评价 收藏  个人资料)===================================
		$(".mine li").click(function(){
//			alert("s")
			var index=$(this).index();
			var user=JSON.parse(localStorage.getItem('users'));
//			alert(user)
			if(!user){
				that.makeText("请登录",2000)
			}else if(user){
				if(index==0){
					var Mypurse=require("./Mypurse");
					var MypurseHeader=require("./MypurseHeader");
					ReactDOM.unmountComponentAtNode(document.getElementById("content"));
					ReactDOM.render(<Mypurse type="user"/>,document.getElementById("content"));
					ReactDOM.unmountComponentAtNode(document.getElementById("header"));
					ReactDOM.render(<MypurseHeader />,document.getElementById("header"));
					$("#footer").hide();
					$("#header").hide();
				}else if(index==1){
					var MyEval=require("./MyEval");
					var MyEvalHeader=require("./MyEvalHeader");
					ReactDOM.unmountComponentAtNode(document.getElementById("content"));
					ReactDOM.render(<MyEval type="user"/>,document.getElementById("content"));
					ReactDOM.unmountComponentAtNode(document.getElementById("header"));
					ReactDOM.render(<MyEvalHeader />,document.getElementById("header"));
					$("#footer").hide();
					$("#header").hide();
				}else if(index==2){
					var Collect=require("./Collect");
					var CollectHeader=require("./CollectHeader");
					ReactDOM.unmountComponentAtNode(document.getElementById("content"));
					ReactDOM.render(<Collect type="user" collect="collect"/>,document.getElementById("content"));
					ReactDOM.unmountComponentAtNode(document.getElementById("header"));
					ReactDOM.render(<CollectHeader collect="collect"/>,document.getElementById("header"));
					$("#footer").hide();
					$("#header").hide();
				}else if(index==3){
					var MineZiliao=require("./MineZiliao");
					var MineZiliaoHeader=require("./MineZiliaoHeader");
					ReactDOM.unmountComponentAtNode(document.getElementById("content"));
					ReactDOM.render(<MineZiliao type="user"/>,document.getElementById("content"));
					ReactDOM.unmountComponentAtNode(document.getElementById("header"));
					ReactDOM.render(<MineZiliaoHeader />,document.getElementById("header"));
					$("#footer").hide();
					$("#header").hide();
				}
			}
			
		});
//==============判断登录状态从而改变登录注册页面的显示与否
		var user=JSON.parse(localStorage.getItem('users'));
		if(!user){
			$(".uc_header").css("display","block");
			$(".uc_headered").css("display","none");
		}else{
			$(".uc_header").css("display","none");
			$(".uc_headered").css("display","block");
		};
//===========点击登录状态的修改资料
		$(".change_zhiliao").click(function(){
			var MineZiliao=require("./MineZiliao");
			var MineZiliaoHeader=require("./MineZiliaoHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<MineZiliao type="user"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<MineZiliaoHeader />,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		})
	},
	componentDidUpdate:function(){

		
		
	}
});
module.exports=User;
