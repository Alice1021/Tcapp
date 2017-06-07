var React=require("react");
var ReactDOM=require("react-dom");
//var ProList=require("./ProList");
var ChangeName=React.createClass({
	getInitialState:function(){
		return{
			kindList:"",
			user:JSON.parse(localStorage.getItem('users')),
			shop_id:40,
			url_interface:"m.chepc.cn"
		}
	},
	backHandel:function(){
		console.log(this.props.type)
		if(this.props.type=="mineziliao"){
			var MineZiliao=require("./MineZiliao");
			var MineZiliaoHeader=require("./MineZiliaoHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<MineZiliao type="user" />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<MineZiliaoHeader type="user" />,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		}
	},
	componentWillMount:function(){
		var that = this;
		var user = that.state.user;
		var nick = [];
		nick.push(<div className="nicheng" key={Math.random}>
						<span>昵称</span>
						<input className="nickname" type="text" defaultValue={user.nickname}/>
					</div>);
		that.setState({
			nick:nick
		});
	},
	render:function(){
		return(
			<div className="changeNameContent">
				<div className="changeName_header">
					<div className="left_changeName" id="goBack" onClick={this.backHandel}>
						<img src="img/back.png"/>
					</div>
					<div className="center_changeName"> 
						修改昵称
					</div>
					<div className="right_changeName" id="goMessageBox">
						<img src="img/more_03.png"/>
						<ul className="messageBox">
							<li data-type="changename">
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
							<li data-type="changename">
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
							<li data-type="changename">
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
				<div className="changeName_main">
					{this.state.nick}
					<div className="queren">确认</div>
				</div>
			</div>
			
		)
	},
	componentDidMount:function(){
		var that = this;
		$("#goMessageBox").click(function(){
			$(".messageBox").css("display","block")
		});
		$(".changeName_main").click(function(){
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
//==============点击确认=======================================
		$(".queren").click(function(){
			var nickname 	  = $('.nickname').val();
			var user     	  = that.state.user;
			var url_interface = that.state.url_interface;
			$.ajax({
				type:"post",
				url:"http://"+url_interface+"/sopa/User/update_nickname",
				data:{tcggsc:'c2726d9cbd6f600f12d60352729060c3',user_id:user.user_id,nickname:nickname},
				success:function(data){
					if(data.status == 1){//修改昵称后重新存储用户信息
						localStorage.removeItem('users');
						var users = data.result;
						localStorage.setItem('users',JSON.stringify(users));//储存用户信息  localStorage 只能存字符串
					}
				}
			});
			var MineZiliao=require("./MineZiliao");
			var MineZiliaoHeader=require("./MineZiliaoHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<MineZiliao type="user" />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<MineZiliaoHeader type="user" />,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
			
		})
	},
	componentDidUpdate:function(){
	    var that = this;
		
	}
});
module.exports=ChangeName;
