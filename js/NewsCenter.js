var React=require("react");
var ReactDOM=require("react-dom");
//var ProList=require("./ProList");
var NewsCenter=React.createClass({
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
			<div className="newsCenterContent">
				<ul className="newsList">
					<li>
						<div className="nl_newsLogo">
							<div className="nln_text">通知</div>
						</div>
						<div className="nl_newsMain">
							<div className="nln_title">
								<div className="nlnt_h3">这是消息标题</div>
								<div className="nlnt_time">12:30</div>
							</div>
							<div className="nln_maintxt">
								这是消息内容这是消息内容这是消息内容这是消息内容这是消息内容这是消息内容这是消息内容这是消息内容
							</div>
						</div>
						<div className="delete">删除</div>
					</li>
					<li>
						<div className="nl_newsLogo">
							<div className="nln_text">通知</div>
						</div>
						<div className="nl_newsMain">
							<div className="nln_title">
								<h3 className="nlnt_h3">这是消息标题</h3>
								<div className="nlnt_time">12:30</div>
							</div>
							<div className="nln_maintxt">
								这是消息内容这是消息内容这是消息内容这是消息内容这是消息内容这是消息内容这是消息内容这是消息内容
							</div>
						</div>
						<div className="delete">删除</div>
					</li>
					<li>
						<div className="nl_newsLogo">
							<div className="nln_text">通知</div>
						</div>
						<div className="nl_newsMain">
							<div className="nln_title">
								<h3 className="nlnt_h3">这是消息标题</h3>
								<div className="nlnt_time">12:30</div>
							</div>
							<div className="nln_maintxt">
								这是消息内容这是消息内容这是消息内容这是消息内容这是消息内容这是消息内容这是消息内容这是消息内容
							</div>
						</div>
						<div className="delete">删除</div>
					</li>
					<li>
						<div className="nl_newsLogo">
							<div className="nln_text">通知</div>
						</div>
						<div className="nl_newsMain">
							<div className="nln_title">
								<h3 className="nlnt_h3">这是消息标题</h3>
								<div className="nlnt_time">12:30</div>
							</div>
							<div className="nln_maintxt">
								这是消息内容这是消息内容这是消息内容这是消息内容这是消息内容这是消息内容这是消息内容这是消息内容
							</div>
						</div>
						<div className="delete">删除</div>
					</li>
				</ul>
				<div className="newsList_1">
					<p><img src="img/xiaoxi_4.png"/></p>
					<p>暂无消息内容</p>
				</div>
				<div className="newsList_2">
					<p><img src="img/chucuo.png"/></p>
					<p>加载出错，点击屏幕重新加载</p>
				</div>
				<div className="newsList_3">
					<p><img src="img/wangluo.png"/></p>
					<p>请链接网络后，点击屏幕重新加载</p>
				</div>
			</div>
			
		)
	},
	componentDidMount:function(){
//=================判断有没有消息，若没有就显示空白页
		if($(".newsList").html()==""){
			$(".newsList").css("display","none");
			$(".newsList_1").css("display","block");
		};
//==========出错页面的显示
		//缺少判断条件,判断条件显示后执行下面的效果
		
//		$(".newsList").css("display","none");   
//		$(".newsList_1").css("display","none");
//		$(".newsList_2").css("display","block");
		
//=========向左滑动删除对应的消息
		var count = 0; //判断用户是否第一次进行touchmove操作
		var startX, startY;
		var endX, endY;
		var distanceX, distanceY;
		$(".newsList li").bind('touchstart', function(event) {   
			count = 0; //每次开始点击时清零    
			startX = event.targetTouches[0].clientX;    
			startY = event.targetTouches[0].clientY;
		}).bind('touchmove', function(event) { 
			if (count === 0) { 
				//如果是第一次滑动        
				endX = event.changedTouches[0].clientX;        
				endY = event.changedTouches[0].clientY;        
				distanceX = Math.abs(startX - endX);        
				distanceY = Math.abs(startY - endY);        
				if (distanceX > distanceY) { 
					//如果X绝对距离大于Y绝对距离            
					event.preventDefault();  
				}    
			}    
			count++; 
		}).bind('touchend', function(event) {    
			endX = event.changedTouches[0].clientX;    
			endY = event.changedTouches[0].clientY;    
			distanceX = Math.abs(startX - endX);    
			distanceY = Math.abs(startY - endY);    
			if (distanceX > distanceY) {        
//				startX - endX > 0 ? swipeLeft() : swipeRight();  
				if(startX - endX>0){
					$(this).animate({
		            	"left":"-1.4rem",
		            },1200);
		            $(this).siblings("li").animate({
		            	"left":0,
		            },1200);
				}else{
					$(this).animate({
		            	"left":0,
		            	
		            },1200)
				}
			}
		});
//=============点击删除,删除当条消息
		$(".delete").click(function(){
			$(this).parents("li").remove();
			if($(".newsList").html()==""){
				$(".newsList").css("display","none");
				$(".newsList_1").css("display","block");
			};
		})




	},
	componentDidUpdate:function(){

		
		
	}
});
module.exports=NewsCenter;
