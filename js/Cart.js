var React=require("react");
var ReactDOM=require("react-dom");
//var ProList=require("./ProList");
var Cart=React.createClass({
	getInitialState:function(){
		return{
			kindList:"",
			user:JSON.parse(localStorage.getItem('users')),
			shop_id:40,
			url_interface:"m.chepc.cn"
		}
	},
	componentWillMount:function(){
		var that=this;
		var user 		  = that.state.user;
		var url_interface = that.state.url_interface;
		var shop_id       = that.state.shop_id;

		$.ajax({
			type:"get",
			url:"http://"+url_interface+"/sopa/cart/cartList",
			data:{tcggsc:'c2726d9cbd6f600f12d60352729060c3',user_id:user.user_id,shop_id:shop_id},
			success:function(data){
				console.log(data);
				if(data.status == 1 && data.result.cartList.length > 0){//购物车有商品
					var result 		   = data.result.cartList;//购物车列表cartList  和总价total_price
					var cartList_arr   = [];//cartList渲染结果集
					var select_all_res = 1;//默认进来全部选中
					var select_all_img ='';
					var check_length = 0;//进入购物车已选中的商品数量
					for (var i = 0 ; i < result.length ; i++) {
						if(result[i].selected == 0){//购物车勾选状态  selected
							var selected_img ="img/534.png";
							select_all_res =0;
						}else{
							check_length++;
							var selected_img ="img/checked.png";
						}
						cartList_arr.push(<li key={i} className="li_cart_id" data-cart_id={result[i].id}>
								  			<div className="cc_main">
								  				<div className="ccm_check">
													<div className="ccmc_img">
														<img src={selected_img}/>
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
								  						<p data-spec_key={result.spec_key}>
								  							{result[i].spec_key_name}
								  						</p>
														<p>
															<span className="ccmct_left">
																<span>￥</span>
																<span>{result[i].goods_price}</span>
															</span>
															<span className="ccmct_right">
																<span className="eachGoods_sub">-</span>
																<span className="eachGoods_number">{result[i].goods_num}</span>
																<span className="eachGoods_add">+</span>
															</span>
														</p>
								  					</div>
								  				</div>
								  			</div>
								  		</li>);
					}
					select_all_img = select_all_res == 0 ? 'img/534.png' :'img/checked.png';//全选图标
//					console.log(select_all_img);
				}else if(data.status == 1 && data.result.cartList.length == 0){//购物车无商品
					$(".cartMains").css("display","none");
					$(".cart_kong").css("display","block");
					$(".cartFooter").remove();
					$(".cartHeader .left").css("display","none");
					$(".cartHeader .right_cart .rc_txt").css("display","none");	
					$(".cartHeader .center_cart").css("margin-left","1.7rem");
				}
				that.setState({
						cartList_result:cartList_arr,//cartList渲染结果集
						shop_name_result:data.shop_name,//店铺名称
						totla_price_result:data.result.total_price.total_fee,//购物车总价
						totla_num_result:data.result.total_price.num,//购物车商品总计数
						total_baobei_num:check_length,//宝贝数量
						select_all_img_result:select_all_img,
					})
			}
		});
		
	},
	render:function(){
		return(
			<div className="cartContent">
				<div className="cartHeader">
					<div className="left" id="goHome">
						<div className="back">
							<img src="img/back.png"/>
						</div>
					</div>
					<div className="center_cart"> 
						购物车
					</div>
					<div className="right_cart">
						<div className="rc_txt" id="editor">
							编辑
						</div>
						<div className="rc_img" id="goNewsCenter" data-type="cart">
							<div className="img">
								<img src="img/massage.png"/>
							</div>
						</div>
					</div>
				</div>
				<div className="cartMains">
					<div className="cart_header">
						<div className="ch_main">
							
							<div className="chm_ding">
								<div className="chmd_logo">
									<img src="img/logo.png"/>
								</div>
								<div className="chmd_txt">
									<span>{this.state.shop_name_result}</span>
									天采广告商城&nbsp;
									<span className="chmdt_d"><img src="img/home_more_.png"/></span>
								</div>
							</div>
						</div>
					</div>
				  	<ul className="cart_cont">
				  		{this.state.cartList_result}
				  	</ul>
				</div>
				<div className="cart_kong">
					<p><img src="img/Shopping_cart.png"/></p>
					<p>购物车空空如也</p>
					<p>去抢购</p>
				</div>
				<div className="cartFooter">
					<div className="cartFooter_left">
						<div className="allChecked">
							<span><img src={this.state.select_all_img_result}/></span>
							<span>全选</span>
						</div>
						<div className="allPrice">
							<span>合计：</span>
							<span>￥</span>
							<span>{this.state.totla_price_result}</span>
						</div>
					</div>
					<div className="cartFooter_right">
						<span>结算</span>
						<span>(</span>
						<span>{this.state.total_baobei_num}</span>
						<span>)</span>
					</div>
				</div>
				<div className="mask">
					<div className="toSelect">
						<p>确认将这<span>{this.state.total_baobei_num}</span>个宝贝删除？</p>
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
	removeDiv:function () {
	    //如果存在每个供应商DIV
		if($(".cart_cont li")){
			for(var i=0;i<$(".cart_cont li").length;i++){
//				if($(".cart_cont li").eq(i).find(".ccm_check").find(".ccmc_img").find("img").attr("src")=="img/checked.png"){
//
//					$(".cart_cont li").eq(i).remove();
//				}
				var $main=$(".cart_cont li").find(".ccm_conent");
				if($main.length!=0){
					
				}else{
					$(".cart_cont li").eq(i).remove();
				}
			}
		}else{
			$(".cartMains").css("display","none");
			$(".cart_kong").css("display","block");
			$(".cartFooter").remove();
			$(".cartHeader .left").css("display","none");
			$(".cartHeader .right_cart .rc_txt").css("display","none");	
			$(".cartHeader .center_cart").css("margin-left","1.7rem");
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
	delOrupdateCart:function(cart_id,up_text){//cart_id:购物车id，up_text:购物车操作标识，(删除 参数(del)，全部删除 参数（delall），增加数量 参数(add)，减少数量 参数(cut))
		var that          = this;
		var user 		  = that.state.user;
		var url_interface = that.state.url_interface;
		var shop_id       = that.state.shop_id;
//		var result 		  = 0;
		$.ajax({
			type:"post",
			url:"http://"+url_interface+"/sopa/cart/delOrupdateCart",
			async:false,
			data:{tcggsc:'c2726d9cbd6f600f12d60352729060c3',user_id:user.user_id,shop_id:shop_id,cart_id:cart_id,up_text:up_text},
			success:function(data){
//				result = data.status;
			}
		});
//		return result;
	},
	ajaxCartList:function(){//购物车操作后重新渲染页面的总价和选中的数量
		var that          = this;
		var user 		  = that.state.user;
		var url_interface = that.state.url_interface;
		var shop_id       = that.state.shop_id;
		$.ajax({
			type:"post",
			url:"http://"+url_interface+"/sopa/cart/cartList",
			data:{tcggsc:'c2726d9cbd6f600f12d60352729060c3',user_id:user.user_id,shop_id:shop_id},
			async:false,
			success:function(data){
				if(data.status == 1){
					var total_price = data.result.total_price.total_fee;//选中商品总价格
					var total_num 	= 0;//选中的宝贝数量
					var result    	= data.result.cartList;
					for(var i = 0 ; i < result.length ; i++){
						if(result[i].selected == 1){
							total_num++;
						}
					}
//					var total_num   = data.result.total_price.num;//商品总数量
//					var total_num   = data.result.cartList.length;//宝贝数量
					$('.allPrice').find('span').eq(2).html('');
					$('.cartFooter_right').find('span').eq(2).html('');
					$('.allPrice').find('span').eq(2).html(total_price);
					$('.cartFooter_right').find('span').eq(2).html(total_num);
				}
			}
		});
	},
//=============判断每个商品是选中状态还是没有选中状态===============================		
    allchk:function(){
    	//选项总个数
		var chknum = $(".cc_main").size();
		var chk = 0;
		$(".cc_main").each(function (){  
	        if($(this).find(".ccmc_img").find("img").attr("src")=="img/checked.png"){
				chk++;
			}
	    });
	    //全选和不全选
		if(chknum==chk){
			$(".allChecked span").eq(0).find("img").attr("src","img/checked.png");
			$(".cartFooter_right span").eq(2).html(chk);
			$(".mask .toSelect p").eq(0).find("span").html(chk);
		}else{
			$(".allChecked span").eq(0).find("img").attr("src","img/534.png");
			$(".cartFooter_right span").eq(2).html(chk);
			$(".mask .toSelect p").eq(0).find("span").html(chk);
		}
	},
	componentDidMount:function(){
		var that=this;
		$("#goHome").click(function(){
			$("#footer ul li").eq(0).trigger("click")
			var Home=require("./Home");
			var HomeHeader=require("./HomeHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Home />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<HomeHeader />,document.getElementById("header"));
		});
		$("#goNewsCenter").click(function(){
			var type=$(this).attr("data-type");
			var NewsCenter=require("./NewsCenter");
			var NewsCenterHeader=require("./NewsCenterHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<NewsCenter />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<NewsCenterHeader type={type} />,document.getElementById("header"));
			$("#footer").hide();
			$("#header").show();
		});
//================点击编辑=============================================
		$("#editor").click(function(){
			var editor=$(this).html()=="编辑"?"完成":"编辑";
			var allNumber=$(".cartFooter_right span").eq(0).html()=="结算"?"删除":"结算";
			$(this).html(editor);
			$(".cartFooter_right span").eq(0).html(allNumber)
		});

//=====================点击每个商品进入详情======================================================	
		$(".ccm_conent").click(function(){
			var Detail=require("./Detail");
			var DetailHeader=require("./DetailHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Detail cart="cart"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<DetailHeader cart="cart"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		});


//=====================点击空购物车去抢购=====================================	
		$(".cart_kong p").eq(2).click(function(){
			$("#footer ul li").eq(0).trigger("click")
			var Home=require("./Home");
			var HomeHeader=require("./HomeHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Home />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<HomeHeader />,document.getElementById("header"));
			
		});

			
	},
	componentDidUpdate:function(){
			var that=this;
//=====================================点击加减按钮加减物品
		$(".eachGoods_add").click(function(e){
			e.stopImmediatePropagation();
//			alert("ccc")
			var b		= $(this).prev(".eachGoods_number").html();
			var a		= parseFloat(b);
			var a1		= a+1;
			var cart_id = $(this).parents('li').attr('data-cart_id');//购物车id
			var up_text = 'add';
			that.delOrupdateCart(cart_id,up_text);//购物车操作
			that.ajaxCartList();//重新渲染数据
			if(isNaN(b)) {
				that.makeText("请输入数字",2000);
				$(this).prev(".eachGoods_number").html();
			} else {
				if(a >= 100) {
					that.makeText("大于库存",2000);
					$(this).prev(".eachGoods_number").html(100);
				} else {
					$(this).prev(".eachGoods_number").html(a1);
				}
				
			}
		})
		$(".eachGoods_sub").click(function(e){
			e.stopImmediatePropagation();
//			alert("ddd")
			var b = $(this).next(".eachGoods_number").html();
			var a = parseFloat(b);
			var a1 = a - 1;
			
			var cart_id = $(this).parents('li').attr('data-cart_id');//购物车id
			var up_text = 'cut';
			if(a == 1) {
				that.makeText("数量不能小于1",2000);
				return false;
			}
			that.delOrupdateCart(cart_id,up_text);//购物车操作
			that.ajaxCartList();//重新渲染数据
			$(this).next(".eachGoods_number").html(a1);
			
			
//			if(isNaN(b)) {
////				alert("请输入数字");
//				that.makeText("请输入数字",2000);
//				$(this).next(".eachGoods_number").html(1);
//			} else {
//				if(a == 1) {
////					alert("数量不能小于1");
//					that.makeText("数量不能小于1",2000);
//					$(this).next(".eachGoods_number").html(1);
//				} else {
//					$(this).next(".eachGoods_number").html(a1);
//				}
//				
//			}
	});
//==================点击每个商品，改变选中状态===========================================	
		$(".ccm_check").click(function(){
			var $img=$(this).find(".ccmc_img").find("img").attr("src")=="img/534.png"?"img/checked.png":"img/534.png";
			$(this).find(".ccmc_img").find("img").attr("src",$img);
			that.allchk();
			var cart_id = $(this).parents('li').attr('data-cart_id');//购物车id
			var up_text = 'sel';
			that.delOrupdateCart(cart_id,up_text);//改变选中状态
			that.ajaxCartList();//重新渲染数据
			
		});	
	
//====================点击全选按钮==========================================
		$(".allChecked").click(function(){
			var $img=$(this).find("span").find("img").attr("src")=="img/534.png"?"img/checked.png":"img/534.png";
			$(this).find("span").find("img").attr("src",$img);
			if($(this).find("span").find("img").attr("src")=="img/checked.png"){//全选
				var len=$(".cc_main").size();
				$(".ccm_check").find(".ccmc_img").find("img").attr("src","img/checked.png");
				$(".cartFooter_right span").eq(2).html(len);
//				全选 不需要获取cart_id 给cart_id一个初始值
//				var cart_id = -1;
				var up_text ='selall_on_check';
				that.delOrupdateCart(cart_id,up_text);//改变选中状态
				that.ajaxCartList();//重新渲染数据
			}else{//全不选
				$(".ccm_check").find(".ccmc_img").find("img").attr("src","img/534.png");
				$(".cartFooter_right span").eq(2).html(0);
//				全选 不需要获取cart_id 给cart_id一个初始值	
				var cart_id = -1;
				var up_text ='selall_not_check';
				that.delOrupdateCart(cart_id,up_text);//改变选中状态
				that.ajaxCartList();//重新渲染数据
			}
		});	
	
	
	
//=================点击结算和删除功能========================
		$(".cartFooter_right").click(function(){
			if($(this).find("span").eq(0).html()=="结算"){
	       		if($(this).find("span").eq(2).html()==0){
	       			that.makeText("您还没有选择宝贝哦",2000);
	       		}else if($(this).find("span").eq(2).html()!=0){
	       			var FirmOrder=require("./FirmOrder");
					var FirmOrderHeader=require("./FirmOrderHeader");
					ReactDOM.unmountComponentAtNode(document.getElementById("content"));
					ReactDOM.render(<FirmOrder cart1="cart"/>,document.getElementById("content"));
					ReactDOM.unmountComponentAtNode(document.getElementById("header"));
					ReactDOM.render(<FirmOrderHeader cart1="cart"/>,document.getElementById("header"));
					$("#footer").hide();
					$("#header").show();
	       		}
            }else if($(this).find("span").eq(0).html()=="删除"){
            	
            	if($(this).find("span").eq(2).html()==0){
            		$(".mask").css("display","none");
            		that.makeText("您还没有选择宝贝哦",2000);
            	}else if($(this).find("span").eq(2).html()!=0){
				    $(".mask").css("display","block");
				    $(".queding").click(function(){
//          			$(".cartFooter_right").find("span").eq(2).html(0);
						if($(".allChecked span").eq(0).find("img").attr("src")=="img/checked.png"){
							var cart_id = -1;//全部删除
							var up_text ='delall';//全部删除
							that.delOrupdateCart(cart_id,up_text);
							$(".mask").css("display","none");
							$(".cartMains").css("display","none");
							$(".cart_kong").css("display","block");
							$(".cartFooter").remove();
							$(".cartHeader .left").css("display","none");
							$(".cartHeader .right_cart .rc_txt").css("display","none");	
							$(".cartHeader .center_cart").css("margin-left","1.7rem");
					    }else{
					    	//循环每个商品按钮
					    	for(var i=$(".ccmc_img").length;i>=0;i--){
					    		//如果商品被选中
					    		if($(".ccmc_img").eq(i).find("img").attr("src")=="img/checked.png"){
									var cart_id = $(".ccmc_img").eq(i).parents("li").attr('data-cart_id');
									var up_text = 'del';
									that.delOrupdateCart(cart_id,up_text);//购物车操作
									that.ajaxCartList();//重新渲染数据
					    			$(".mask").css("display","none");
									$(".ccmc_img").eq(i).parents("li").remove();
								}
					    	}
					    }
            	    });
            	    $(".quxiao").click(function(){
            	    	$(".mask").css("display","none");
            	    }) 
            	}
//          	that.removeDiv();

            }
            
		});		
		
		
		
		
	}
});
module.exports=Cart;
