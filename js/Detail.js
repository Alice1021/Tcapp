var React=require("react");
var ReactDOM=require("react-dom");
//var ProList=require("./ProList");
var Detail=React.createClass({
	getInitialState:function(){
		return{
			kindList:"",
			user:JSON.parse(localStorage.getItem('users')),
			shop_id:40,
			url_interface:"m.chepc.cn"

		}
	},
	componentWillMount:function(){
		var that 		  = this;
		var user 		  = that.state.user;
		if(user == ""){
			var user_id       ="";
		}else{
			var user_id       =user.user_id;
		}
		console.log(user)
		var url_interface = that.state.url_interface;
		var goods_id      = that.props.goods_id;//337 330
		var shop_id       = that.state.shop_id;
		if(goods_id != ""){
			$.ajax({
				type:"get",
				url:"http://"+url_interface+"/sopa/goods/goodsinfo",
				data:{tcggsc:'c2726d9cbd6f600f12d60352729060c3',goods_id:goods_id,shop_id:shop_id,user_id:user_id},
				success:function(data){
					console.log(data);
					if(data.state == 1){
						var commentstati 	  = data.goods.commentStatistics;//商品品论
						var filter_spec  	  = data.goods.filter_spec;//商品规格
						var goods_attr_list   = data.goods.goods_attr_list;//商品属性
						var goods_attribute   = data.goods.goods_attribute;//商品属性
						var goods_images_list = data.goods.goods_images_list;//商品图片列表
						var recommend_goods   = data.goods.recommend_goods;//推荐商品
						var goods_content	  = data.goods.goods_content.toString();//商品详情图
						var comment_list      = data.goods.comment_list;//
//						console.log(data.goods.spec_goods_price);
						var goods_images_arr  = [];//banner轮播
						var goods_shuxin_arr  = [];//商品属性
						var recommend_arr     = [];//推荐商品
						var goods_comment_arr = [];//商品评论
						var goods_gather      = [];//商品名称，价格，库存
						var filter_arr        = [];//商品规格
						for (var i = 0 ; i < goods_images_list.length ; i++) {//banner轮播
							goods_images_arr.push(<div className="swiper-slide home1_slide" key={i}>
						        					<img src={goods_images_list[i].image_url}/>
												  </div>);
						}
						for(var i = 0 ; i < goods_attr_list.length ; i++){//商品属性列表
							var attr_id = goods_attr_list[i].attr_id;
//							console.log(goods_attribute[attr_id]+'--->'+goods_attr_list[i].attr_value);
							goods_shuxin_arr.push(<p key={i}>{goods_attribute[attr_id]}---------{goods_attr_list[i].attr_value}</p>);
						}
						for(var i = 0 ; i < recommend_goods.length ; i++){//热门推荐商品
							recommend_arr.push(<div className="tuijian_detail" key={i}>
													<div className="tuijian_baby"><img src={recommend_goods[i].original_img}/></div>
													<div className="tuijian_baby_introduce">
														<div className="introduce1">{recommend_goods[i].goods_name}</div>
														<div className="introduce2">
															<span>￥</span>
															<span>{recommend_goods[i].shop_price}</span>
														</div>
														<div className="introduce3">
															<span>已售：</span>
															<span>{recommend_goods[i].sales_sum}</span>
														</div>
													</div>
												</div>);
						}
						if(parseInt(data.goods.goods_comment_count) > 0){//商品存在评论
//							for(var i = 0 ;i < comment_list.length;i++){
//								console.log(comment_list[i].add_time+'-->'+comment_list[i].content);
								goods_comment_arr.push(<div key={Math.random()}><div className="goodsEval_people" >
															<span>
																<img src="img/evalpeople_19.png"/>
															</span>
															<span>{comment_list[0].add_time}</span>
														</div>
														<div className="goodsEval_text">
															{comment_list[0].content}
														</div></div>);
//							}
						}
//						商品名称，价格，库存
						goods_gather.push(<div className="goods_title" key={Math.random}>
											<div className="delete_goodstitle">
												<img src="img/detail_baobei.png"/>
											</div>
											<div className="goods_title_left">
												<div className="baobei">
													<div className="baobei_img">
														<img src={data.goods.original_img}/>
													</div>
												</div>
											</div>
											<div className="goods_title_right">
												
												<p>
													<span>￥</span>
													<span>{data.goods.shop_price}</span>
												</p>
												<p>
													<span>规格</span>
													<span>250克白卡</span>
												</p>
												<p>
													<span>库存</span>
													<span>{data.goods.store_count}</span>
													<span>件</span>
												</p>
											</div>
										</div>);
						for(var k in filter_spec){//商品规格列表
							var filter_spec_arr   = [];//详细商品规格
							for(var i = 0 ;i < filter_spec[k].length;i++){
								var sizeActive = '';
								if(i == 0){
									 sizeActive = 'sizeActive';
								}
								filter_spec_arr.push(<span className={sizeActive} data-item_id={filter_spec[k][i].item_id} key={i}>{filter_spec[k][i].item}</span>);
							}
							filter_arr.push(<div className="chanceSize" data-item_name={k} key={k}>
												<p>{k}</p>
												<p id="size_each">
												{filter_spec_arr}
												</p>
											</div>);
						}
//						收藏图标显示
						if(data.goods.is_collect == 1){
							var collec_img_icon = 'img/detail_icon6.png';
						}else{
							var collec_img_icon = 'img/detail_shouchang_icon.png';
						}
					}
					that.setState({
						goods_images_result:goods_images_arr,//banner轮播
						goods_content_image:goods_content,//商品详情图
						goods_shuxin:goods_shuxin_arr,//商品属性列表
						goods_recommend_arr:recommend_arr,//商品属性列表
						goods_name:data.goods.goods_name,//商品名称
						shop_price:data.goods.shop_price,//价格
						goods_original_img:data.original_img,//banner轮播
						goods_sales_sum:data.goods.sales_sum,//销量
						goods_comment_count:data.goods.goods_comment_count,//评价数量
						goods_comment_result:goods_comment_arr,//评价列表
						goods_gather_result:goods_gather,//商品名称，价格，库存
						goods_filter_spec:filter_arr,//商品规格列表
						spec_goods_price:data.goods.spec_goods_price,//商品规格列表
						collec_img_icon:collec_img_icon//收藏图标显示
						
					})
				}
				
			});	
		}

	},
	tobackHandel:function(){
		var id=this.props.id;
		if(this.props.type=="home"){
			var Home=require("./Home");
			var HomeHeader=require("./HomeHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Home />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<HomeHeader />,document.getElementById("header"));
			$("#footer").show();
			$("#header").show();
		}else if(this.props.list=="list"){
			var List=require("./List");
			var ListHeader=require("./ListHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<List list="list" id={id}/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<ListHeader list="list" id={id}/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		}else if(this.props.kind=="kind"){
			var List=require("./List");
			var ListHeader=require("./ListHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<List kind="kind" id={id}/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<ListHeader kind="kind" id={id}/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		}else if(this.props.cart=="cart"){
			var Cart=require("./Cart");
			var CartHeader=require("./CartHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Cart/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<CartHeader />,document.getElementById("header"));
			$("#footer").show();
			$("#header").hide();
		}else if(this.props.collect=="collect"){
			var Collect=require("./Collect");
			var CollectHeader=require("./CollectHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Collect collect="collect"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<CollectHeader collect="collect"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		}else if(this.props.myeval=="myeval"){
			var MyEval=require("./MyEval");
			var MyEvalHeader=require("./MyEvalHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<MyEval type="user"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<MyEvalHeader type="user"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		}
		
	},
	render:function(){
		var goods_content_image = this.state.goods_content_image;
		return(
			<div className="detailContent">
				<div className="detailHeader">
					<div className="back" onClick={this.tobackHandel}>
						<div className="back_img">
							<img src="img/detail_icon1.png"/>
						</div>
					</div>
					<div className="toCart" id="goCart">
						<div className="toCart_img">
							<img src="img/detail_icon2.png"/>
						</div>
					</div>
					<div className="toMore" id="goMessageBox">
						<div className="toMore_img">
							<img src="img/detail_icon3.png"/>
						</div>
						<ul className="messageBox">
							<li data-type="detail">
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
							<li data-type="detail">
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
							<li data-type="detail">
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
				<div className="detailMain">
					<div className="goodsDetail">
					
						 <div className="swiper-container detailImg">
						    <div className="swiper-wrapper home1_wrapper">
						        {this.state.goods_images_result}
						    </div>
						    <div className="swiper-pagination"></div>
						</div>
						<div className="goodsText">
							{this.state.goods_name}
						</div>
						<div className="goodsStyle">
							<span>40*30*10</span>
							<span>cm</span>
						</div>
						<div className="goodsPrice">
							<span>￥</span>
							<span>{this.state.shop_price}</span>
						</div>
						<div className="address">
							<p>配送至</p>
							<div className="add_adress">
								<span>河南省郑州市中原区</span>
								
							</div>
							<p>包邮</p>
							<p>销量：</p>
							<p>{this.state.goods_sales_sum}</p>
							<p>件</p>
						</div>
					</div>
					<div className="changeStyle">
						<span>选择类型</span>
						<span><img src="img/gengduo.png"/></span>
					</div>
					<div className="goodsEval">
						<div className="goodsEval_number">
							<span>商品评价</span>
							<span>（</span>
							<span>{this.state.goods_comment_count}</span>
							<span>）</span>
						</div>
						{this.state.goods_comment_result}
						<div className="toMore_eval" data-type="detail">查看全部评价</div>
					</div>
					<div className="goods_detail">
						<span></span>
						<span>继续拖动,查看图文详情</span>
						<span></span>
					</div>
					<ul className="goodsDetail_introduct">
						<li className="actives">图文详情</li>
						<li>产品参数</li>
						<li>热门推荐</li>
					</ul>
					<ul className="goodsDetail_introductMain">
						<li>
							<div className="goodsDetail_photoDetail">
								<div dangerouslySetInnerHTML={{__html: goods_content_image}} />
							</div>
						</li>
						<li>
							{this.state.goods_shuxin}
						</li>
						<li>
							<p>
								<span></span>
								<span>宝贝推荐</span>
								<span></span>
							</p>
							<div className="tuijian">
								{this.state.goods_recommend_arr}
							</div>
							
						</li>
					</ul>
				</div>
				<div className="detailFooter">
					<div className="detailFooter_left">
						<div className="detailFooter_left1">
							<p>
								<img src="img/detail_icon4.png"/>
							</p>
							<p>客服</p>
						</div>
						<div className="detailFooter_left1">
							<p>
								<img src={this.state.collec_img_icon}/>
							</p>
							<p>收藏</p>
						</div>
					</div>
					<div className="detailFooter_right">
						<div className="detailFooter_right1" id="addCart" data-type="detail" data-name="addCart">加入购物车</div>
						<div className="detailFooter_right1" id="goBuy" data-name="rightawaybuy">立即购买</div>
					</div>
				</div>
				<div className="choice_style">
				</div>
				<div className="eachgoods_main weui_actionsheet">
					<div className="eachgoods_style">
						{this.state.goods_gather_result}
						<div className="chanceStyle">
							{this.state.goods_filter_spec}
							<div className="buyNumber">
								<div className="buyNumber_left">购买数量</div>
								<div className="buyNumber_right">
									<span className="secNum">-</span>
									<span className="numVal">1</span>
									<span className="addNum">+</span>
								</div>
							</div>
						</div>
						<div className="goods_queding" data-type="detail">确定</div>
						<div className="chance_goodsStyle" data-type="detail">
							<div className="chance_goodsStyle_addCart" id="to_addCart" data-type="detail" data-name="addCart">加入购物车</div>
							<div className="chance_goodsStyle_tobuy" id="to_goBuy" data-type="detail" data-name="rightawaybuy">立即购买</div>
						</div>
					</div>
				</div>
					
				
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
	get_spec_item_id:function(){//获得对应规格id
		var spec_item_id ='';
		for(var i = 0;i<$('.chanceSize').length;i++){
			if($('.chanceSize').eq(i).find("span").hasClass("sizeActive")){
				spec_item_id += $('.chanceSize').eq(i).find(".sizeActive").attr("data-item_id")+'_';
			}
		}
		var len = parseInt(spec_item_id.length) - 1;
		spec_item_id = spec_item_id.substring(0,len);
		return spec_item_id;
	},
	get_spec_item:function(){//获得选中名称 id 组合成数组
		var spec_item = [];
		for(var i = 0;i<$('.chanceSize').length;i++){
			var k = $('.chanceSize').eq(i).attr('data-item_name');
			if($('.chanceSize').eq(i).find("span").hasClass("sizeActive")){
				var v = $('.chanceSize').eq(i).find(".sizeActive").attr("data-item_id");
			}
			spec_item.push({'item_name':k,'item_id':v});
		}
		return spec_item;
	},
	ajax_add_to_cart:function(goods_id,goods_num,spec_key,user_id,shop_id){//ajax加入购物车
		var that       = this;
		var goods_id   = goods_id;
		var goods_num  = goods_num;
		var spec_key   = spec_key;
		var user_id    = user_id;
		var shop_id    = shop_id;
		var url_interface = that.state.url_interface;
		var data_arr   = [];
		$.ajax({
			type:"post",
			url:"http://"+url_interface+"/sopa/Cart/addCart",
			async:false,
			data:{tcggsc:'c2726d9cbd6f600f12d60352729060c3',goods_id:goods_id,goods_num:goods_num,spec_key:spec_key,user_id:user_id,shop_id:shop_id},
			success:function(data){
				if(data.status == 1){
					data_arr = data;
				}
			}
		});
		return data_arr;
	},
	componentDidMount:function(){
		var that=this;

//=========================上下滑动详情头部的效果================================		
		/*$(".detailContent").swipeUp(function(){
//			$(".detailHeader").addClass("beginChange");
			console.log($(".goodsDetail_introduct").height())
		})*/
//		$(".detailContent").swipeDown(function(){
//			$(".detailHeader").removeClass("beginChange");
//		})
		
		function getTopDistance() {
			return document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
		}
		document.addEventListener("touchmove",function(){
			var scrollTop = $("#content").scrollTop();
			if(scrollTop<5){
				$(".detailHeader").css("background"," rgba(255,255,255,0)");
			}else if(scrollTop>20&&scrollTop<50){
				$(".detailHeader").css("background"," rgba(255,255,255,0.3)");
			}else if(scrollTop>50){
				$(".detailHeader").css("background"," rgba(255,255,255,1)");
			}
		})
//=========================滑动判断距离，让图文详情，产品参数，热门推荐定位================================	
		function getTopDistance() {
			return document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
		}
		document.addEventListener("touchmove",function(){
			
			var scrollTop = $("#content").scrollTop();
//			console.log(scrollTop);
			if(scrollTop>550){
				$(".goodsDetail_introduct").addClass("alreadyMove")
			}else{
				$(".goodsDetail_introduct").removeClass("alreadyMove")
			}
			if(scrollTop>40){
				$(".goodsDetail_introductMain").css("display","block");
			}else{
				$(".goodsDetail_introductMain").css("display","none");
			}
		})
//=========================点击图文详情    产品参数   热门推荐的跳转================================			
		$(".goodsDetail_introduct li").click(function(){
			var index=$(this).index();
			$(this).addClass("actives").siblings("li").removeClass("actives");
			$(".goodsDetail_introductMain li").eq(index).css("display","block").siblings("li").css("display","none")
		});
//=========================点击购物车标志================================			
		$("#goCart").click(function(){
			$("#footer ul li").eq(2).trigger("click")
			var Cart=require("./Cart");
			var CartHeader=require("./CartHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Cart />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<CartHeader />,document.getElementById("header"));
			$("#footer").show();
			$("#header").hide();	
		});
//=========================点击消息标志================================			
		$("#goMessageBox").click(function(){
			$(".messageBox").css("display","block")
			
		});
		$(".detailMain").click(function(){
			$(".messageBox").css("display","none");
		});
		$(".messageBox li").click(function(){
			var index=$(this).index();
			var type2=that.props.type;
			var list1=that.props.list;
			var kind1=that.props.kind;
			var cart2=that.props.cart;
			var collect1=that.props.collect;
			var myeval1=that.props.myeval;
			if(index==0){
				var NewsCenter=require("./NewsCenter");
				var NewsCenterHeader=require("./NewsCenterHeader");
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(<NewsCenter type2={type2} list1={list1} kind1={kind1} cart2={cart2} collect1={collect1} myeval1={myeval1}/>,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<NewsCenterHeader type2={type2} list1={list1} kind1={kind1} cart2={cart2} collect1={collect1} myeval1={myeval1}/>,document.getElementById("header"));
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
//==================点击加入购物车=======================================		
		$("#addCart").click(function(){
			var type=that.props.type;
			var list=that.props.list;
			var kind=that.props.kind;
			var cart=that.props.cart;
			var collect=that.props.collect;
			var myeval=that.props.myeval;
			var name=$(this).attr("data-name");
			$(".weui_actionsheet").attr("data-name",name);
			if(localStorage.getItem("users")){
				$(".choice_style").css("display","block");
				$(".goods_queding").css("display","block");
			    $(".chance_goodsStyle").css("display","none");
				$(".weui_actionsheet").removeClass("weui_actionsheet1 weui_actionsheet_toggle1");
				$(".weui_actionsheet").addClass("weui_actionsheet weui_actionsheet_toggle");
				
			}else{
				var Login=require("./Login");
				var LoginHeader=require("./LoginHeader");
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(<Login type={type} list={list} kind={kind} cart={cart} collect={collect} myeval={myeval}/>,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<LoginHeader type={type} list={list} kind={kind} cart={cart} collect={collect} myeval={myeval}/>,document.getElementById("header"));
				$("#footer").hide();
				$("#header").show();
			}
		});
//==================点击立即购买========================================				
		$("#goBuy").click(function(){
			if(localStorage.getItem("users")){
				var name=$(this).attr("data-name")
				$(".weui_actionsheet").attr("data-name",name)
				$(".choice_style").css("display","block");
				$(".chance_goodsStyle").css("display","none");
				$(".goods_queding").css("display","block")
				$(".weui_actionsheet").removeClass("weui_actionsheet1 weui_actionsheet_toggle1");
				$(".weui_actionsheet").addClass("weui_actionsheet weui_actionsheet_toggle");
			}else{//未登录跳转到登陆页
				that.makeText("请先登录",2000);
			}
		});		
//=================选择类型后的加入购物车===============================================		
		$("#to_addCart").click(function(){
			var goods_id   = that.props.goods_id;
			var goods_num  = parseInt($('.numVal').text());
			var spec_key   = that.get_spec_item();//获得规格   
			var user_id    = that.state.user.user_id;
			var shop_id    = that.state.shop_id;
			
			if(localStorage.getItem("users")){
				var data       = that.ajax_add_to_cart(goods_id,goods_num,spec_key,user_id,shop_id);//加入购物车
				if(data.status == 1){//加入购物车成功,,,,,,此处未写加入购物车成功后的效果
					that.makeText(data.msg,2000);
					$(".weui_actionsheet").addClass("weui_actionsheet1 weui_actionsheet_toggle1");
				}
				
			}else{
				var type=that.props.type;
				var list=that.props.list;
				var kind=that.props.kind;
				var cart=that.props.cart;
				var collect=that.props.collect;
				var myeval=that.props.myeval;
				var Login=require("./Login"); 
				var LoginHeader=require("./LoginHeader");
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(<Login type={type} list={list} kind={kind} cart={cart} collect={collect} myeval={myeval}/>,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<LoginHeader type={type} list={list} kind={kind} cart={cart} collect={collect} myeval={myeval}/>,document.getElementById("header"));
				$("#footer").hide();
				$("#header").show();
//=========测试用的，可删除==========================
//that.makeText("成功加入购物车",2000);
				
			}
		});

//==================选择类型后的立即购买========================================
		$("#to_goBuy").click(function(){
			var goods_id   = that.props.goods_id;
			var goods_num  = parseInt($('.numVal').text());
			var spec_key   = that.get_spec_item();//获得规格   
			var user_id    = that.state.user.user_id;
			var shop_id    = that.state.shop_id;
			if(localStorage.getItem("users")){
				var data       = that.ajax_add_to_cart(goods_id,goods_num,spec_key,user_id,shop_id);//立即购买
				if(data.status == 1){//立即购买,跳转到订单确认页面
					$(".choice_style").css("display","none");
					$(".goods_queding").css("display","none")
					$(".chance_goodsStyle").css("display","block");
					$(".weui_actionsheet").addClass("weui_actionsheet1 weui_actionsheet_toggle1");
					var type=that.props.type;
					var list=that.props.list;
					var kind=that.props.kind;
					var cart=that.props.cart;
					var collect=that.props.collect;
					var myeval=that.props.myeval;
					var FirmOrder=require("./FirmOrder");
					var FirmOrderHeader=require("./FirmOrderHeader");
					ReactDOM.unmountComponentAtNode(document.getElementById("content"));
					ReactDOM.render(<FirmOrder type={type} list={list} kind={kind} cart={cart} collect={collect} myeval={myeval}/>,document.getElementById("content"));
					ReactDOM.unmountComponentAtNode(document.getElementById("header"));
					ReactDOM.render(<FirmOrderHeader type={type} list={list} kind={kind} cart={cart} collect={collect} myeval={myeval}/>,document.getElementById("header"));
					$("#footer").hide();
					$("#header").show();
				}
			}else{
				var type=that.props.type;
				var list=that.props.list;
				var kind=that.props.kind;
				var cart=that.props.cart;
				var collect=that.props.collect;
				var myeval=that.props.myeval;
				var Login=require("./Login"); 
				var LoginHeader=require("./LoginHeader");
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(<Login type={type} list={list} kind={kind} cart={cart} collect={collect} myeval={myeval}/>,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<LoginHeader type={type} list={list} kind={kind} cart={cart} collect={collect} myeval={myeval}/>,document.getElementById("header"));
				$("#footer").hide();
				$("#header").show();
			}
			
		});	
//==================关闭对商品的选择========================================	
		$(".choice_style").click(function(){
			$(".choice_style").css("display","none");
			$(".weui_actionsheet").addClass("weui_actionsheet1 weui_actionsheet_toggle1");
		});
		
//==================选择数量========================================		
//		$("#number_each span").click(function(){
//			$(this).addClass("numberActive").siblings().removeClass("numberActive");
//		});
////==================改变规格========================================		
//		$("#guige_each span").click(function(){
//			$(this).addClass("guigeActive").siblings().removeClass("guigeActive");
//		});
//==================改变数量=========================================
		$('.addNum').click(function(){
			var num = parseInt($('.numVal').text());
//			if(num >= 20){
//				that.makeText("最多加入20件商品",1000);return false;
//			}
			if(num > 0){
				num++;
				$('.numVal').html(num);
			}
		});
		$('.secNum').click(function(){
			var num = parseInt($('.numVal').text());
			if(num > 1){
				num--;
				$('.numVal').html(num);
			}
		});
//==================点击确定=======================================			
		$(".goods_queding").click(function(){
			
			var goods_id   = that.props.goods_id;
			var goods_num  = parseInt($('.numVal').text());
			var spec_key   = that.get_spec_item();//获得规格   
			var user_id    = that.state.user.user_id;
			var shop_id    = that.state.shop_id;
			
			if($(".weui_actionsheet").attr("data-name")=="addCart"){
				var data       = that.ajax_add_to_cart(goods_id,goods_num,spec_key,user_id,shop_id);//加入购物车
				if(data.status == 1){//加入购物车成功
					that.makeText(data.msg,2000);
					$(".choice_style").css("display","none");
				    $(".weui_actionsheet").addClass("weui_actionsheet1 weui_actionsheet_toggle1");
					$(".weui_actionsheet").removeAttr("data-name");
				}else{
					that.makeText(data.msg,2000);
				}
			}else if($(".weui_actionsheet").attr("data-name")=="rightawaybuy"){
				var data  = that.ajax_add_to_cart(goods_id,goods_num,spec_key,user_id,shop_id);//加入购物车
				if(data.status == 1){//立即购物，去购物车列表
					var type=that.props.type;
					var list=that.props.list;
					var kind=that.props.kind;
					var cart=that.props.cart;
					var collect=that.props.collect;
					var myeval=that.props.myeval;
					var FirmOrder=require("./FirmOrder");
					var FirmOrderHeader=require("./FirmOrderHeader");
					ReactDOM.unmountComponentAtNode(document.getElementById("content"));
					ReactDOM.render(<FirmOrder type={type} list={list} kind={kind} cart={cart} collect={collect} myeval={myeval}/>,document.getElementById("content"));
					ReactDOM.unmountComponentAtNode(document.getElementById("header"));
					ReactDOM.render(<FirmOrderHeader type={type} list={list} kind={kind} cart={cart} collect={collect} myeval={myeval}/>,document.getElementById("header"));
					$("#footer").hide();
					$("#header").show();
					$(".weui_actionsheet").removeAttr("data-name");
				}
				
			}
			
		})
//===================点击选择类型======================================================	
		$(".changeStyle").click(function(){
//			alert(1)
			$(".choice_style").css("display","block");
			$(".goods_queding").css("display","none")
			$(".chance_goodsStyle").css("display","block");
			$(".weui_actionsheet").removeClass("weui_actionsheet1 weui_actionsheet_toggle1");
			$(".weui_actionsheet").addClass("weui_actionsheet weui_actionsheet_toggle");	
		})
//===================点击查看全部评价===============================================	
		$(".toMore_eval").click(function(){
			var list=that.props.list;
			var kind=that.props.kind;
			var cart=that.props.cart;
			var type=that.props.type;
			var collect=that.props.collect;
			var myeval=that.props.myeval;
			var MoreEval=require("./MoreEval");
			var MoreEvalHeader=require("./MoreEvalHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<MoreEval type={type} list={list} kind={kind} cart={cart} collect={collect} myeval={myeval}/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<MoreEvalHeader type={type} list={list} kind={kind} cart={cart} collect={collect} myeval={myeval}/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		})
//=====================点击收藏=======================================================		
		$(".detailFooter_left1").eq(1).click(function(){
			var goods_id      = that.props.goods_id;//337 330
			var shop_id       = that.state.shop_id;
			var user 		  = that.state.user;
			var url_interface = that.state.url_interface;
			if(user.user_id == ""){
				that.makeText("请登录后再收藏",1000);return false;
			}
			if($(this).find("p").find("img").attr("src")=="img/detail_shouchang_icon.png"){//收藏
				$.ajax({
					type:"get",
					url:"http://"+url_interface+"/sopa/goods/goods_collect",
					async:false,
					data:{tcggsc:'c2726d9cbd6f600f12d60352729060c3',user_id:user.user_id,goods_id:goods_id,shop_id:shop_id},
					success:function(data){
						if(data.state == 1){
							$('.detailFooter_left1').eq(1).find("p").find("img").attr("src","img/detail_icon6.png");
							that.makeText(data.result,2000);
						}else{
							that.makeText(data.result,2000);
						}
					}
				});
			}else if($(this).find("p").find("img").attr("src")=="img/detail_icon6.png"){//取消收藏
				$.ajax({
					type:"get",
					url:"http://"+url_interface+"/sopa/goods/del_goods_collect_fromDetail",
					async:false,
					data:{tcggsc:'c2726d9cbd6f600f12d60352729060c3',user_id:user.user_id,goods_id:goods_id,shop_id:shop_id},
					success:function(data){
						if(data.state == 1){
							$('.detailFooter_left1').eq(1).find("p").find("img").attr("src","img/detail_shouchang_icon.png");
							that.makeText(data.result,2000);
						}else{
							that.makeText(data.result,2000);
						}
					}
				});
			}
//			if($(this).find("p").find("img").attr("src")=="img/detail_shouchang_icon.png"){
//				$(this).find("p").find("img").attr("src","img/detail_icon6.png");
//				that.makeText("添加收藏成功",2000);
//			}
//			else if($(this).find("p").find("img").attr("src")=="img/detail_icon6.png"){
//				$(this).find("p").find("img").attr("src","img/detail_shouchang_icon.png");
//			    that.makeText("取消收藏成功",2000);
//			}
		})
},
	componentDidUpdate:function(){
		var that = this;
		//=====详情图片轮播=================================		
		var swiper = new Swiper(".swiper-container",{
			"pagination":".swiper-pagination",
			autoplay:2000,
			loop:true,
			autoplayDisableOnInteraction:false
		});
//==================选择尺寸========================================		
		$("#size_each span").click(function(){
			$(this).addClass("sizeActive").siblings().removeClass("sizeActive");
			var spec_item_id = that.get_spec_item_id();//获得选中的规格列id
			var shop_price = that.state.spec_goods_price[spec_item_id].price;//获取对应规格价格
			$('.goods_title_right p').eq(0).find('span').eq(1).html(shop_price);
		});	
//==============关闭对商品的选择==============================
		$(".delete_goodstitle").click(function(){
			$(".choice_style").css("display","none");
			$(".weui_actionsheet").addClass("weui_actionsheet1 weui_actionsheet_toggle1");
		});

	}
});
module.exports=Detail;
