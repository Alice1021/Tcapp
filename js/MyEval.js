var React=require("react");
var ReactDOM=require("react-dom");
//var ProList=require("./ProList");
var MyEval=React.createClass({
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
			<div className="myevalContent">
				<div className="myeval_header">
					<div className="left_myeval" id="goBack" onClick={this.backHandel}>
						<img src="img/back.png"/>
					</div>
					<div className="center_myeval"> 
						我的评价
					</div>
					<div className="right_myeval" id="goMessageBox">
						<img src="img/more_03.png"/>
						<ul className="messageBox">
							<li data-type="myeval">
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
							<li data-type="myeval">
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
							<li data-type="myeval">
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
				<div className="myeval_main">
					<ul className="myeval_mains">
						<li>
							<div className="evalTime">
								<span>购买时间：</span><span>2016-12-9</span>&nbsp;&nbsp;<div>12:34:56</div>
							</div>
							<div className="orderMain">
								<div className="orderMain_img">
									<img src="img/img111.jpg"/>
								</div>
								<div className="orderMain_txt">
									<p>大号纸杯 大号纸杯大号纸杯大号纸杯大号纸杯大号纸杯大号纸杯</p>
									<p><span>规格:</span><span>34*26*8cm</span><span>数量:</span><span>5000</span></p>
									<p><span>￥</span><span>2300</span>&nbsp;&nbsp;<span>x1</span></p>
								</div>
							</div>
							<div className="evalTxt">
								<p><strong>评价：</strong><span><img src="img/star.png"/></span><span><img src="img/star.png"/></span><span><img src="img/star.png"/></span></p>
								<p>评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论评论</p>
							</div>
						</li>
					</ul>
					<div className="myeval_kong">
						<p><img src="img/Comment_1.png"/></p>
						<p>暂无评价内容</p>
					</div>
				
				</div>
				
			</div>
			
		)
	},
	componentDidMount:function(){
		$("#goMessageBox").click(function(){
			$(".messageBox").css("display","block")
		});
		$(".myeval_main").click(function(){
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
//======================点击评价里的每个商品跳转到对应的详情
		$(".orderMain").click(function(){
			var Detail=require("./Detail");
			var DetailHeader=require("./DetailHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Detail myeval="myeval"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<DetailHeader myeval="myeval"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		})
	},
	componentDidUpdate:function(){

		
		
	}
});
module.exports=MyEval;
