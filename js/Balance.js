var React=require("react");
var ReactDOM=require("react-dom");
//var ProList=require("./ProList");
var Balance=React.createClass({
	getInitialState:function(){
		return{
			kindList:""
		}
	},
	backHandel:function(){
		console.log(this.props.type)
		if(this.props.type=="mypurse"){
			var Mypurse=require("./Mypurse");
			var MypurseHeader=require("./MypurseHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Mypurse type="user"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<MypurseHeader type="user" />,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		}
	},
	componentWillMount:function(){
		var that=this;
		
	},
	render:function(){
		return(
			<div className="balanceContent">
				<div className="balance_header">
					<div className="left_mypurse" id="goBack" onClick={this.backHandel}>
						<img src="img/back.png"/>
					</div>
					<div className="center_mypurse"> 
						余额明细
					</div>
					<div className="right_mypurse" id="goMessageBox">
						<img src="img/more_03.png"/>
						<ul className="messageBox">
							<li data-type="balance">
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
							<li data-type="balance">
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
							<li data-type="balance">
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
				<ul className="balance_main">
					<li>
						<div className="left">
							<p>商城纸杯付款</p>
							<p>2016-05-28 16:28:36</p>

						</div>
						<div className="right">
							<span>+</span>
							<span>￥888.88</span>
						</div>
					</li>
					<li>
						<div className="left">
							<p>商城纸杯付款</p>
							<p>2016-05-28 16:28:36</p>

						</div>
						<div className="right">
							<span>-</span>
							<span>￥888.88</span>
						</div>
					</li>
					<li>
						<div className="left">
							<p>商城纸杯付款</p>
							<p>2016-05-28 16:28:36</p>

						</div>
						<div className="right">
							<span>-</span>
							<span>￥888.88</span>
						</div>
					</li>
					<li>
						<div className="left">
							<p>支付宝充值</p>
							<p>2016-05-28 16:28:36</p>

						</div>
						<div className="right">
							<span>+</span>
							<span>￥888.88</span>
						</div>
					</li>
				</ul>
			</div>
			
		)
	},
	componentDidMount:function(){
		$("#goMessageBox").click(function(){
			$(".messageBox").css("display","block")
		});
		$(".balance_main").click(function(){
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
//===========判断是充值还是付款（价格变色）
		for(var i=0;i<$(".balance_main li").length;i++){
//			var text=$(".balance_main li").eq(i).find($(".right span")).eq(0).text();
//			alert(text.length)
//			for(var j=0;j<)
			if($(".balance_main li").eq(i).find($(".right span")).eq(0).text()=="+"){
				$(".balance_main li").eq(i).find($(".right")).css("color","#f23025")
			}
		};
		
//============点击每一笔的余额明细到余额详情
		$(".balance_main li").click(function(){
//			alert($(this).index())
			var MingXi=require("./MingXi");
			var MingXiHeader=require("./MingXiHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<MingXi type="balance"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<MingXiHeader type="balance" />,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		})
		
		
	},
	componentDidUpdate:function(){

		
		
	}
});
module.exports=Balance;
