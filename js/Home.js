var React=require("react");
var ReactDOM=require("react-dom");
//var ProList=require("./ProList");
var Home=React.createClass({
	getInitialState:function(){
		return{
			
			imgsList:"",
			proList:""
			
		}
	},

	componentWillMount:function(){
		var that=this;




	},
	render:function(){
		return(
			<div className="homeContent">
				<div className="homeHeader">
					<div className="left">
						<div className="map">
							<div className="left">
								<img src="img/icon_location.png"/>
							</div>
							<div className="right">
								郑州市
							</div>
						</div>
					</div>
					<div className="center" id="goSearch"> 
						<div className="search">
							<img src="img/icon_search.png"/>
						</div>
						<div className="input">
							<input type="text" placeholder="搜索天采商品与店铺" />
						</div>
						<div className="select" >
							<img src="img/select.png"/>
						</div>
					</div>
					<div className="right" id="goNewsCenter" data-type="home">
						<div className="img">
							<img src="img/icon_messages.png"/>
						</div>
					</div>
				</div>
			    <div className="swiper-container" id="homeSwiper">
				    <div className="swiper-wrapper home1_wrapper">
				        <div className="swiper-slide home1_slide">
				        	<img src="img/banner.jpg"/>
						</div>
				        <div className="swiper-slide home1_slide">
				        	<img src="img/banner.png"/>
				        </div>
				        <div className="swiper-slide home1_slide">
				        	<img src="img/banner2.jpg"/>
				        </div>
				    </div>
				    <div className="swiper-pagination"></div>
				</div>
			    <div className="kind" id="toList">
			    	<ul className="ul1">
			    		<li data-type="home">
			    			<div className="title">
			    				<i className="iconfont">&#xe609;</i>
			    			</div>
			    			<div className="text">
			    				商务印刷
			    			</div>
			    		</li>
			    		<li data-type="home">
			    			<div className="title">
			    				<i className="iconfont">&#xe638;</i>
			    			</div>
			    			<div className="text">
			    				喷绘写真
			    			</div>
			    		</li>
			    		<li data-type="home">
			    			<div className="title">
			    				<i className="iconfont">&#xe624;</i>
			    			</div>
			    			<div className="text">
			    				灯箱照明
			    			</div>
			    		</li>
			    		<li data-type="home">
			    			<div className="title">
			    				<i className="iconfont">&#xe69d;</i>
			    			</div>
			    			<div className="text">
			    				发光字
			    			</div>
			    		</li>
			    		<li data-type="home">
			    			<div className="title">
			    				<i className="iconfont">&#xe618;</i>
			    			</div>
			    			<div className="text">
			    				标牌证卡
			    			</div>
			    		</li>
			    		<li data-type="home">
			    			<div className="title">
			    				<i className="iconfont">&#xe7be;</i>
			    			</div>
			    			<div className="text">
			    				户外广告
			    			</div>
			    		</li>
			    		<li data-type="home">
			    			<div className="title">
			    				<i className="iconfont">&#xe605;</i>
			    			</div>
			    			<div className="text">
			    			   展示促销
			    			</div>
			    		</li>
			    		<li data-type="home">
			    			<div className="title">
			    				<i className="iconfont">&#xe7ce;</i>
			    			</div>
			    			<div className="text">
			    			   气模帐篷
			    			</div>
			    		</li>
			    		<li data-type="home">
			    			<div className="title">
			    				<i className="iconfont">&#xe6a7;</i>
			    			</div>
			    			<div className="text">
			    			   广告礼品
			    			</div>
			    		</li>
			    		<li data-type="home">
			    			<div className="title">
			    				<i className="iconfont">&#xe668;</i>
			    			</div>
			    			<div className="text">
			    			   办公设备
			    			</div>
			    		</li>
			    	</ul>
			    </div>
			    <div className="notice">
			    	<div className="left">
			    		<div className="main">
			    			<i className="iconfont">&#xe76f;</i>
			    		</div>
			    	</div>
			    	<div className="notice-container" id="noticeSwiper">
					    <div className="swiper-wrapper notice_wrapper">
					        <div className="swiper-slide notice_slide">
					        	APP版本发布公告
							</div>
					        
					    </div>
					    
					</div>
			    	<div className="right" id="xinwen_center" data-type="home">
				    	<span>更多</span>
				    	<span><img src="img/home_more_.png"/></span>
			    	</div>
			    </div>
			    <div className="joinus">
			    	<img src="img/joinus.jpg"/>
			    </div>
			    <div className="main1">
			    	<div className="left toDetail" id="toDetail" data-type="home">
						<img src="img/home_521_01.jpg"/>
			    	</div>
			    	<div className="right">
			    		<div className="r_top toDetail" data-type="home">
			    			
			    			<img src="img/home_521_02.jpg"/>
			    		</div>
			    		<div className="r_bottom">
			    			<div className="rb_left toDetail" data-type="home">
			    				<img src="img/home_521_03.jpg"/>
			    			</div>
			    			<div className="rb_right toDetail" data-type="home">
			    				<img src="img/home_521_04.jpg"/>
			    			</div>
			    		</div>
			    	</div>
			    </div>
			    <div className="main2">
			    	<h3 className="header">
			    		会员特惠
			    	</h3>
			        <div className="banner">
			        	<img src="img/huiyuan.png"/>
			        </div>
			        <div className="center">
				        <div className="center_left toDetail" data-type="home">
			        		<img src="img/home1_521_01.jpg"/>
			        	
			        	</div>
			        	<div className="center_right">
			        		<div className="cr_top toDetail" data-type="home">
			        			<img src="img/home1_521_02.jpg"/>
			        		</div>
			        		<div className="cr_bottom toDetail" data-type="home">
			        			<img src="img/home1_521_03.jpg"/>
			        		</div>
			        	</div>
			        </div>
			    </div>
			    <ul className="main3">
			    	<li className="home_kind">
			    		<h3 className="m3_header">
				    		商务印刷
				    		<div className="more" data-type="home">
				    			<span>更多</span>
				    			<span><img src="img/home_more_.png"/></span>
				    		</div>
				    	</h3>
				    	<div className="m3_content">
				    		<div className="m3_top">
				    			<div className="m3t_left toDetail" data-type="home">
				    				<div className="m3tl_left">
				    					<p className="m3tl_txt1">
				    						单淋纸杯
				    					</p>
				    					<p className="m3tl_txt2">
				    						单淋纸杯单单
				    					</p>
				    				</div>
				    				<div className="m3tl_right">
				    					<img src="img/shouji.jpg"/>
				    				</div>
				    			</div>
				    			<div className="m3t_right toDetail" data-type="home">
				    				<div className="m3tr_left">
				    					<p className="m3tr_txt1">
				    						单淋纸杯
				    					</p>
				    					<p className="m3tr_txt2">
				    						单淋纸杯单单
				    					</p>
				    				</div>
				    				<div className="m3tr_right">
				    					<img src="img/shouji.jpg"/>
				    				</div>
				    			
				    			</div>
				    		</div>
				    	
				    		<ul className="m3_bottom">
				    			<li className="toDetail" data-type="home">
				    				<div className="m3b_top">
				    					<p>
				    					单淋纸杯
				    					</p>
				    					<p>
				    					单淋纸杯单单
				    					</p>
				    				</div>
				    				<div className="m3b_bottom">
				    					<div className="img">
				    						<img src="img/shouji.jpg"/>
				    					</div>
				    				</div>
				    			</li>
				    			<li className="toDetail" data-type="home">
				    				<div className="m3b_top">
				    					<p>
				    					单淋纸杯
				    					</p>
				    					<p>
				    					单淋纸杯单单
				    					</p>
				    				</div>
				    				<div className="m3b_bottom">
				    					<div className="img">
				    						<img src="img/shouji.jpg"/>
				    					</div>
				    				</div>
				    			</li>
				    			<li className="toDetail" data-type="home">
				    				<div className="m3b_top">
				    					<p>
				    					单淋纸杯
				    					</p>
				    					<p>
				    					单淋纸杯单单
				    					</p>
				    				</div>
				    				<div className="m3b_bottom">
				    					<div className="img">
				    						<img src="img/shouji.jpg"/>
				    					</div>
				    				</div>
				    			</li>
				    			<li className="toDetail" data-type="home">
				    				<div className="m3b_top">
				    					<p>
				    					单淋纸杯
				    					</p>
				    					<p>
				    					单淋纸杯单单
				    					</p>
				    				</div>
				    				<div className="m3b_bottom">
				    					<div className="img">
				    						<img src="img/shouji.jpg"/>
				    					</div>
				    				</div>
				    			</li>
				    		</ul>
				    	</div>
			    	
			    	</li>
			    	
			    	<li className="home_kind">
			    		<h3 className="m3_header">
				    		灯箱照明
				    		<div className="more" data-type="home">
				    			<span>更多</span>
				    			<span><img src="img/home_more_.png"/></span>
				    		</div>
				    	</h3>
				    	<div className="m3_content">
				    		<div className="m3_top">
				    			<div className="m3t_left toDetail" data-type="home">
				    				<div className="m3tl_left">
				    					<p className="m3tl_txt1">
				    						单淋纸杯
				    					</p>
				    					<p className="m3tl_txt2">
				    						单淋纸杯单单
				    					</p>
				    				</div>
				    				<div className="m3tl_right">
				    					<img src="img/shouji.jpg"/>
				    				</div>
				    			</div>
				    			<div className="m3t_right toDetail" data-type="home">
				    				<div className="m3tr_left">
				    					<p className="m3tr_txt1">
				    						单淋纸杯
				    					</p>
				    					<p className="m3tr_txt2">
				    						单淋纸杯单单
				    					</p>
				    				</div>
				    				<div className="m3tr_right">
				    					<img src="img/shouji.jpg"/>
				    				</div>
				    			
				    			</div>
				    		</div>
				    	
				    		<ul className="m3_bottom">
				    			<li className="toDetail" data-type="home">
				    				<div className="m3b_top">
				    					<p>
				    					单淋纸杯
				    					</p>
				    					<p>
				    					单淋纸杯单单
				    					</p>
				    				</div>
				    				<div className="m3b_bottom">
				    					<div className="img">
				    						<img src="img/shouji.jpg"/>
				    					</div>
				    				</div>
				    			</li>
				    			<li className="toDetail" data-type="home">
				    				<div className="m3b_top">
				    					<p>
				    					单淋纸杯
				    					</p>
				    					<p>
				    					单淋纸杯单单
				    					</p>
				    				</div>
				    				<div className="m3b_bottom">
				    					<div className="img">
				    						<img src="img/shouji.jpg"/>
				    					</div>
				    				</div>
				    			</li>
				    			<li className="toDetail" data-type="home">
				    				<div className="m3b_top">
				    					<p>
				    					单淋纸杯
				    					</p>
				    					<p>
				    					单淋纸杯单单
				    					</p>
				    				</div>
				    				<div className="m3b_bottom">
				    					<div className="img">
				    						<img src="img/shouji.jpg"/>
				    					</div>
				    				</div>
				    			</li>
				    			<li className="toDetail" data-type="home">
				    				<div className="m3b_top">
				    					<p>
				    					单淋纸杯
				    					</p>
				    					<p>
				    					单淋纸杯单单
				    					</p>
				    				</div>
				    				<div className="m3b_bottom">
				    					<div className="img">
				    						<img src="img/shouji.jpg"/>
				    					</div>
				    				</div>
				    			</li>
				    		</ul>
				    	</div>
			    	
			    	</li>
			    	
			    </ul>
			    <ul className="main4">
			    	<li className="toDetail" data-type="home">
			    		<div className="different">
			    			特色产品
			    		</div>
			    		<div className="m4_left">
			    			<div className="img">
			    				<img src="img/shouji.jpg"/>
			    			</div>
			    		</div>
			    		<div className="m4_right">
			    			<p>
			    				惠普HP1112彩色喷墨打印机T346
			    			</p>
			    			<p>
			    				连喷改好 支持单墨盒 OTG连接
			    			</p>
			    			<p>
			    				<span>￥</span>
			    				<strong>3888</strong>
			    				<span>已购买：</span>
			    				<span>2000</span>
			    			</p>
			    		</div>
			    	</li>
			    	<li className="toDetail" data-type="home">
			    		<div className="different">
			    			特色产品
			    		</div>
			    		<div className="m4_left">
			    			<div className="img">
			    				<img src="img/shouji.jpg"/>
			    			</div>
			    		</div>
			    		<div className="m4_right">
			    			<p>
			    				惠普HP1112彩色喷墨打印机T346
			    			</p>
			    			<p>
			    				连喷改好 支持单墨盒 OTG连接
			    			</p>
			    			<p>
			    				<span>￥</span>
			    				<strong>3888</strong>
			    				<span>已购买：</span>
			    				<span>2000</span>
			    			</p>
			    		</div>
			    	</li>
			    	<li className="toDetail" data-type="home">
			    		<div className="different">
			    			特色产品
			    		</div>
			    		<div className="m4_left">
			    			<div className="img">
			    				<img src="img/shouji.jpg"/>
			    			</div>
			    		</div>
			    		<div className="m4_right">
			    			<p>
			    				惠普HP1112彩色喷墨打印机T346
			    			</p>
			    			<p>
			    				连喷改好 支持单墨盒 OTG连接
			    			</p>
			    			<p>
			    				<span>￥</span>
			    				<strong>3888</strong>
			    				<span>已购买：</span>
			    				<span>2000</span>
			    			</p>
			    		</div>
			    	</li>
			    	<li className="toDetail" data-type="home">
			    		<div className="different">
			    			特色产品
			    		</div>
			    		<div className="m4_left">
			    			<div className="img">
			    				<img src="img/shouji.jpg"/>
			    			</div>
			    		</div>
			    		<div className="m4_right">
			    			<p>
			    				惠普HP1112彩色喷墨打印机T346
			    			</p>
			    			<p>
			    				连喷改好 支持单墨盒 OTG连接
			    			</p>
			    			<p>
			    				<span>￥</span>
			    				<strong>3888</strong>
			    				<span>已购买：</span>
			    				<span>2000</span>
			    			</p>
			    		</div>
			    	</li>
			    </ul>
			</div>
		)
	},
	componentDidMount:function(){
		var that=this;
//=====头部搜索栏的效果(上下滑动呈现不同的效果)
		function getTopDistance() {
			return document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
		};
		document.addEventListener("touchmove",function(){
			
			var scrollTop = $("#content").scrollTop();
			console.log(scrollTop);
			if(scrollTop>114){
				$(".homeHeader").css("background","#f8f8f8");
				$(".map .left img").attr("src","img/home_dingwei1.png");
				$(".map .right").css("color","#2b2b2b");
				$(".homeHeader .center").css("background","#eeeded");
				$(".homeHeader .center .search img").attr("src","img/home_search1.png");
				$(".homeHeader .right img").attr("src","img/home_news1.png");
			}else if(scrollTop<114){
				$(".homeHeader").css("background","rgba(255, 255, 255, 0)");
				$(".map .left img").attr("src","img/icon_location.png");
				$(".map .right").css("color","#fff");
				$(".homeHeader .center").css("background","rgba(255, 245, 247, 0.6)");
				$(".homeHeader .center .search img").attr("src","img/icon_search.png");
				$(".homeHeader .right img").attr("src","img/icon_messages.png");
			}
//			if(scrollTop>40){
//				$(".goodsDetail_introductMain").css("display","block");
//			}else{
//				$(".goodsDetail_introductMain").css("display","none");
//			}
		});
//=====点击搜索框		
		$("#goSearch").on("click",function(){
			var Search=require("./Search");
			var SearchHeader=require("./SearchHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Search type="home"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<SearchHeader type="home"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").show();
		});
//==========删除小按钮,被隐藏了
		$(".select").on("click",function(){
			console.log("2222222")
			$("")
		});
//==========点击消息图标,去消息中心		
		$("#goNewsCenter").click(function(){
			var type3=$(this).attr("data-type")
			var NewsCenter=require("./NewsCenter");
			var NewsCenterHeader=require("./NewsCenterHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<NewsCenter type3={type3}/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<NewsCenterHeader type3={type3} />,document.getElementById("header"));
			$("#footer").hide();
			$("#header").show();
		});
//=======导航轮播====================		
		var swiper = new Swiper(".swiper-container",{
			"pagination":".swiper-pagination",
			autoplay:2000,
			loop:true,
			autoplayDisableOnInteraction:false
		});
//=========新闻消息轮播=====================	
		var a=0;
		var array=new Array("APP版本发布公告","111","222","333");
		setInterval(function(){
		 	var b=$("#noticeSwiper .swiper-wrapper .swiper-slide");
		 	if(a==array.length-1){
		 		a=0;
		 	}else{
		 		a++;
		 	}
		 	b.html(array[a]);
		},2000);
//========通过首页小分类到列表=========================================		
		$("#toList .ul1 li").click(function(){
// 			var type=$(this).attr("data-type");
			var List=require("./List");
			var ListHeader=require("./ListHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<List list="list" id="100"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<ListHeader list="list" id="100"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
   		});
//=================点击跳转到详情页==============================================   		
		$(".toDetail").click(function(){
			var type=$(this).attr("data-type");
			var Detail=require("./Detail");
			var DetailHeader=require("./DetailHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Detail type={type}/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<DetailHeader type={type}/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		});
//		$("#goKind").tap(function(){			
//			$("#footer li").eq(1).trigger("click");
//		});	
		$("#xinwen_center").click(function(){
			var type=$(this).attr("data-type")
			var XinWen=require("./XinWen");
			var XinWenHeader=require("./XinWenHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<XinWen />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<XinWenHeader type={type} />,document.getElementById("header"));
			$("#footer").hide();
			
		});
//===============点击更多分类==================================================		
		$(".more").click(function(){
//			var type=$(this).attr("data-type");
			var List=require("./List");
			var ListHeader=require("./ListHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<List list="list"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<ListHeader list="list"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		})
	},
	componentDidUpdate:function(){
//		var mySwiper = new Swiper ('.swiper-container', {
//		   "pagination":".swiper-pagination",
//			autoplay:2000,
//		    loop: true,
//		    autoplayDisableOnInteraction:false
//
// 		}) 
 		
		
	}
			
});
module.exports=Home;