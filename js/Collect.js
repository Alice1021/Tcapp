var React=require("react");
var ReactDOM=require("react-dom");
//var ProList=require("./ProList");
var Collect=React.createClass({
	getInitialState:function(){
		return{
			kindList:"",
			collect_result:"",
			collect_result2:"",
			collect_num:"",
			collect_h:"",
			user:JSON.parse(localStorage.getItem('users')),
			url_interface:"m.chepc.cn"
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
		}else if(this.props.collect=="collect"){
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
		var users = that.state.user;//获取用户信息
		var url_interface = that.state.url_interface;//获取接口地址
		$.ajax({
			type:"get",
			url:"http://"+url_interface+"/sopa/user/get_goods_collect",
			data:{tcggsc:'c2726d9cbd6f600f12d60352729060c3',user_id:users.user_id,shop_id:users.shop_id,firstpage:0,lastpage:10},
			success:function(data){
				console.log(data);
				if(data.status == 1){
					var length     = data.result.length;
					var result     = data.result;
					var div_arr    = [];//进来显示的数据
					var div_arr2   = [];//编辑时的数据
					var div_header = [];//头部收藏总数量
					div_header.push(<ul className="collectKind_nav" key={Math.random()} >
										<li id="collect_all">
											<span>全部收藏</span>
											<span>(</span>
										    <span>{data.count}</span>
											<span>)</span>
										</li>
										<li id="editor">编辑</li>
									</ul>);
					//山品为空的时候显示的页面
					if(data.count == 0){
						$(".collect_main .collect_kong").css("display","block");
					}
					for(var i = 0; i < length; i++){
						div_arr.push(<div className="collect_main_all" key={Math.random()} data-collect_id={result[i].collect_id}>
										<div className="cma_left">
											<div className="cma_left_img">
												<img src={result[i].original_img}/>
											</div>
										</div>
										<div className="cma_right">
											<p>{result[i].goods_name}</p>
											<p><span>￥</span><span>{result[i].shop_price}</span><span>已售：</span><span>666</span></p>
										</div>
									</div>);
					};
					for(var i = 0; i < length; i++){
						div_arr2.push(<div className="collect_main_editor" id="editor_list" key={Math.random()} data-collect_id={result[i].collect_id}>
				  				<div className="ccm_check">
									<div className="ccmc_img">
										<img src="img/534.png"/>
									</div>
								</div>
				  				<div className="ccm_conent">
				  					<div className="ccmc_imgs">
				  						<div className="ccmci_img">
				  							<img src={result[i].original_img}/>
				  						</div>
				  					</div>
				  					<div className="ccmc_text">
				  						<p>
				  							{result[i].goods_name}
				  						</p>
				  						<p>
				  							<span>规格：</span>
				  							<span>12嗌司</span>
				  							<span>数量：</span>
				  							<span>5000</span>
				  						</p>
										<p>
											<span className="ccmct_left">
												<span>￥</span>
												<span>{result[i].shop_price}</span>
											</span>
										</p>
				  					</div>
				  					
				  				</div>
				  			</div>);
					};
					
				}
				that.setState({
					collect_result:div_arr,
					collect_result2:div_arr2,
					collect_h:div_header
				})
			}
		});
	},
	render:function(){
		return(
			<div className="collectContent">
				<div className="collect_header">
					<div className="collect_header_title">
						<div className="left_collect" id="goBack" onClick={this.backHandel}>
							<img src="img/back.png"/>
						</div>
						<div className="center_collect"> 
							我的收藏
						</div>
						<div className="right_collect" id="goMessageBox">
							<img src="img/more_03.png"/>
							<ul className="messageBox">
								<li data-type="collect">
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
								<li data-type="collect">
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
								<li data-type="collect">
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
					{this.state.collect_h}
				</div>
				<div className="collect_main">
					<ul>
						<li>
							{this.state.collect_result}
						</li>
						<li className="bianji_main">
							{this.state.collect_result2}
				  			<div className="delete_footer">
								<div className="checkAll">
									<span><img src="img/534.png"/></span>
									<span>全选</span>
								</div>
								
								<div className="delete" id="todelete">
									删除
									
								</div>
							</div>
						</li>
					</ul>
					<div className="collect_kong">
						<div className="collect_kong_img">
							<img src="img/collect_kong.png"/>
						</div>
						<p>暂无收藏内容</p>
						<div className="findgoods">发现精彩</div>
					</div>
				</div>
				<div className="mask">
					<div className="toSelect">
						<p>确认将这<span></span>个宝贝删除？</p>
						<p>
							<span className="quxiao">取消</span>
							<span className="queding">确定</span>
						</p>
					</div>
				</div>
			</div>
			
		)
	},
//============删除每件商品===================================	
//	removeDiv:function () {
//		//如果存在每个供应商DIV
//		if($(".collect_main_editor")){
//			for(var i=0;i<$(".collect_main_editor").length;i++){
//				if($(".collect_main_editor").eq(i).find(".ccm_check").find(".ccmc_img").find("img").attr("src")=="img/checked.png"){
//					$(".collect_main_editor").eq(i).remove();
//					$(".collect_main_all").eq(i).remove();
//				}
//			}
//		}else{
//			$(".collect_main ul").css("display","none");
//			$(".collect_main .collect_kong").css("display","block");
//			$(".delete_footer").remove()
//		}
//	},
//=============判断每个商品是选中状态还是没有选中状态===============================		
    allchk:function(){
    	//选项总个数
		var chknum = $(".collect_main_editor").size();
		var chk = 0;
		$(".collect_main_editor").each(function (){  
	        if($(this).find(".ccmc_img").find("img").attr("src")=="img/checked.png"){
				chk++;
			}
	    });
	    //全选和不全选
		if(chknum==chk){
			$(".checkAll span").eq(0).find("img").attr("src","img/checked.png");
			$(".mask .toSelect p").eq(0).find("span").html(chk);
		}else{
			$(".checkAll span").eq(0).find("img").attr("src","img/534.png");
			$(".mask .toSelect p").eq(0).find("span").html(chk);
		}
	},
	makeText:function(str,time){
		
		//吐司的封装函数
		$("#toast").show();
		$("#tip").html(str);
		setTimeout(function(){
			$("#toast").hide();
		},time);
	},
	ajax_return:function(collect_id){
		var collect_id    = collect_id;
		var that		  = this;
		var user          = that.state.user;//获取用户信息
		var url_interface = that.state.url_interface;//接口服务器地址
		var state         = 0;
		$.ajax({
			type:"get",
			url:"http://"+url_interface+"/sopa/user/del_goods_collect",
			data:{tcggsc:'c2726d9cbd6f600f12d60352729060c3',user_id:user.user_id,collect_id:collect_id},
			async:false,
			success:function(data){
				if(data.status == 1){//删除成功
					$('#collect_all span').eq(2).html(data.count);	
					state = 1;
				}else{
					alert(data.msg);//删除失败
				}
			}
		});
		return state;
	},
	componentDidMount:function(){
		var that=this;
//=================判断收藏里面是不是有内容==================================		
		if($(".collect_main ul").html()!=""){
//			console.log($(".collect_main ul").html());
			$(".collect_main ul").css("display","block");
			$(".collect_main .collect_kong").css("display","none");
			$(".collectKind_nav").css("display","block");
			$(".collect_main").css({
				"padding-top":"1.68rem",
				"background":"#e6e6e6"	
			})
			$(".collect_header_title").css("background","#fff")
		}else{
			$(".collect_main ul").css("display","none")
			$(".collect_main .collect_kong").css("display","block")
			$(".collectKind_nav").css("display","none")
			$(".collect_main").css({
				"padding-top":"0.9rem",
				"background":"#fff"	
			})
			$(".collect_header_title").css("background","#e6e6e6")
		}
//===========点击查看消息===========================
		$("#goMessageBox").click(function(){
			$(".messageBox").css("display","block")
		});
		$(".collect_main").click(function(){
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
//================点击全选按钮===================================
		$(".delete_footer .checkAll").click(function(e){
			var $img=$(this).find("span").find("img").attr("src")=="img/534.png"?"img/checked.png":"img/534.png";
			$(this).find("span").find("img").attr("src",$img);
			if($(this).find("span").find("img").attr("src")=="img/checked.png"){
				$(".collect_main_editor").find(".ccm_check").find(".ccmc_img").find("img").attr("src","img/checked.png");
			}else{
				$(".collect_main_editor").find(".ccm_check").find(".ccmc_img").find("img").attr("src","img/534.png");
			}
		});
//==============点击删除按钮=====================================
		$("#todelete").click(function(){
			var user = that.state.user;//获取用户信息
//			console.log(user);
			var url_interface = that.state.url_interface;//接口服务器地址
			$(".mask").css("display","none");
			that.allchk();
			if($(".mask .toSelect p").eq(0).find("span").html()==0){
				that.makeText("请至少选择一件商品",2000) 
			}else{
				that.allchk()
				$(".mask").css("display","block");
				
				$(".queding").click(function(){
					if($(".checkAll").find("span").find("img").attr("src")=="img/checked.png"){
						$(".mask").css("display","none");
						//删除全部收藏
						$.ajax({
				    		type:"get",
				    		url:"http://"+url_interface+"/sopa/user/del_all_goods_collect",
				    		data:{tcggsc:'c2726d9cbd6f600f12d60352729060c3',user_id:user.user_id},
				    		success:function(data){
				    			if(data.status == 1){
									$('#collect_all span').eq(2).html(data.count);
									$(".collect_main ul").html("");
									$(".collect_main .collect_kong").css("display","block");
									$(".delete_footer").remove();
				    			}
				    		}
				    	});
				    }else{
				    	//循环每个商品按钮
				    	for(var i=$(".ccmc_img").length;i>=0;i--){
				    		//如果商品被选中
				    		if($(".ccmc_img").eq(i).find("img").attr("src")=="img/checked.png"){
				    			var collect_id = $(".collect_main_editor").eq(i).attr("data-collect_id");//获取要删除的collect_id
				    			var state = that.ajax_return(collect_id);
								if(state == 1){
									$(".mask").css("display","none");
									$(".collect_main_editor").eq(i).remove();
									$(".collect_main_all").eq(i).remove();
								}
							}
				    	}
				    }
				});
				$(".quxiao").click(function(){
	    	    	$(".mask").css("display","none");
	    	    }) 
			}
		});
	},
	componentDidUpdate:function(){
		var that=this;
//==================点击编辑里的每个商品，改变选中状态==================		
		$(".collect_main_editor").on("touchend",function(e){
			var $img=$(this).find(".ccm_check").find(".ccmc_img").find("img").attr("src")=="img/534.png"?"img/checked.png":"img/534.png";
			$(this).find(".ccm_check").find(".ccmc_img").find("img").attr("src",$img);
			that.allchk();
		});
		
//==========点击头部的全部商品和编辑=======================
		$(".collectKind_nav li").click(function(){
			var index=$(this).index();
			$(".collect_main ul li").eq(index).css("display","block").siblings("li").css("display","none");
			if(index==0){
				$(".collectKind_nav li").eq(index+1).html("编辑")
			}
			else if(index==1){
				$(".collectKind_nav li").eq(index+1).html("完成")
				if($(this).html()=="编辑"){
					$(this).html("完成");
					$(".collect_main ul li").eq(1).css("display","block").siblings("li").css("display","none");
				}else if($(this).html()=="完成"){
					$(this).html("编辑");
					$(".collect_main ul li").eq(0).css("display","block").siblings("li").css("display","none");
				}
			}
		});	
//==========点击收藏商品到对应的商品详情========================================		
		$(".collect_main_all").click(function(){
			var Detail=require("./Detail");
			var DetailHeader=require("./DetailHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Detail collect="collect"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<DetailHeader collect="collect"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		})
	}
});
module.exports=Collect;
