var React=require("react");
var ReactDOM=require("react-dom");
//var ProList=require("./ProList");
var List=React.createClass({
	getInitialState:function(){
		return{
			kindList:"",
			up_list:"",
			across_arr:"",
			url_interface:"m.chepc.cn",//服务器地址

		}
	},
	componentWillMount:function(){
		var that 		  = this;
		var id            = that.props.id;//获取从列表页中传过来的二级分类id
		var url_interface = that.state.url_interface;
		var shop_id       = 40;//加盟店的id 存在localstorge的
		var goods_name    = that.props.goods_name;
		var search_name   = that.props.search_name;
		if(!search_name){
			var url_goods_list = "http://"+url_interface+"/sopa/goods/goodslist";
		}else{
			var url_goods_list = "http://"+url_interface+"/sopa/goods/search";
		}
		$.ajax({
			type:"get",
			url:url_goods_list,
			data:{tcggsc:'c2726d9cbd6f600f12d60352729060c3',id:id,shop_id:shop_id,search_name:search_name},
			success:function(data){
				if(parseInt(data.state) == 1){
					var result     = data.goods_list;//列表页数据 object 对象
					var up_arr     = [];//竖着的数据
					var across_arr = [];//横着的数据
					
					for (var i in result) {//竖
						up_arr.push(<li className="collect_main_all todetail" data-type="list" key={i} data-goods_id={result[i].goods_id}>
							<div className="cma_left">
								<div className="cma_left_img">
									<img src={result[i].original_img}/>
								</div>
							</div>
							<div className="cma_right">
								<p>{result[i].goods_name}</p>
								<p><span>￥</span><span>{result[i].shop_price}</span><span>已售：</span><span>{result[i].sales_sum}</span></p>
							</div>
						</li>);
					}
					for(var j in result){//横
						across_arr.push(<li className="collect_li2_all todetail" data-type="list" key={j} data-goods_id={result[j].goods_id}>
							<div className="ul2_img">
								<img src={result[j].original_img}/>
							</div>
							<p>{result[j].goods_name}</p>
							<div className="ul2_number">
								<div className="ul2_number_left"> 
									<span>￥</span>
									<span>{result[j].shop_price}</span>
								</div>
								<div className="ul2_number_right">
									<span>已售：</span>
									<span>{result[j].sales_sum}</span>
								</div>
								
							</div>
						</li>);
					}
				}
				that.setState({
					up_list:up_arr,
					across_list:across_arr
				})
			}
		});
	},
	backHandel:function(){
		if(this.props.list=="list"){
			var Home=require("./Home");
			var HomeHeader=require("./HomeHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Home />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<HomeHeader />,document.getElementById("header"));
			$("#footer").show();
			$("#header").show();
		}else if(this.props.kind=="kind"){
			var Kind=require("./Kind");
			var KindHeader=require("./KindHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Kind />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<KindHeader />,document.getElementById("header"));
			$("#footer").show();
			$("#header").show();
		}else if(this.props.type=="home"){
			var Home=require("./Home");
			var HomeHeader=require("./HomeHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Home />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<HomeHeader />,document.getElementById("header"));
			$("#footer").show();
			$("#header").show();
		}else if(this.props.type=="kind"){
			var Kind=require("./Kind");
			var KindHeader=require("./KindHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Kind />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<KindHeader />,document.getElementById("header"));
			$("#footer").show();
			$("#header").show();
		}
	},
	render:function(){
		return(
			<div className="listContent">
				<div className="myOrder_header">
					<div className="myOrder_header_title">
						<div className="left" id="goBack" onClick={this.backHandel}>
							<div className="back" >
								<img src="img/back.png"/>
							</div>
						</div>
						<div className="center1"> 
							<div className="search1">
								<img src="img/search.png"/>
							</div>
							<div className="input">
								<input type="text" placeholder="搜索天采商品" />
							</div>
							<div className="select" >
								<img src="img/select.png"/>
							</div>
						</div>
						<div className="right" id="changeStyle" data-type="kind">
							<div className="img">
								<img src="img/list1.png"/>
							</div>
							
						</div>
					</div>
					<ul className="orderKind_nav">
						<li className="active" data-data="0">
						    <div className="zonghe_text">综合</div>
						    <div className="zonghe_img">
						    	<span><img src="img/list2.gif"/></span>
						    </div>
						</li>
						<li>销量</li>
						<li data-jiage="0">
							<div className="jiage_text">价格</div>
						    <div className="jiage_img">
						    	<span>
						    		<img src="img/list3.png"/>
						    	</span>
						    	<span>
						    		<img src="img/list4.png"/>
						    	</span>
						    </div>
						</li>
					</ul>
					<div className="mask">
						<ul className="tosort">
							<li className="actives">
								<span>综合排序</span>
								<span><img src="img/gou.png"/></span>
							</li>
							<li>
								<span>新品优先</span>
								<span><img src="img/gou.png"/></span>
							</li>
							<li>
								<span>评论数从高到低</span>
								<span><img src="img/gou.png"/></span>
							</li>
						</ul>
					</div>
					
				</div>
				<div className="orderKind_main">
					<ul className="ul1">
						{this.state.up_list}
					</ul>
					<ul className="ul2">
						{this.state.across_list}
					</ul>
				</div>
			
			</div>
			
		)
	},
	ajax_return:function(sort,paixu,goods_name){
		var that 		  = this;
		var sort          = sort;//根据那个字段排序
		var paixu         = paixu;//倒序还是正序
		var goods_name    = goods_name;
		var id            = that.props.id;//获取从列表页中传过来的二级分类id
		var url_interface = that.state.url_interface;
		var shop_id       = 40;//加盟店的id 存在localstorge的
		var result        = new Object();
		if(goods_name == ""){
			var url_goods_list = "http://"+url_interface+"/sopa/goods/goodslist";
		}else{
			var url_goods_list = "http://"+url_interface+"/sopa/goods/search";
		}
		$.ajax({
			type:"get",
			url:url_goods_list,
			data:{tcggsc:'c2726d9cbd6f600f12d60352729060c3',id:id,shop_id:shop_id,sort:sort,sort_asc:paixu,search_name:goods_name},
			async:false,
			success:function(data){
				if(data.state == 1){
					result = data.goods_list;
				}
			}
		});
		return result;
	},
	obj_to_array:function(obj){//对象转数组
		var arr = []; 
		var obj = obj;
		for(var key in obj){ 
		    if(!obj.hasOwnProperty(key)){
		        continue;
		    }
		    var item = {}; 
		    item = obj[key]; 
		    arr.push(item); 
		}
		return arr;
	},
	componentDidMount:function(){
		var that=this;
//		var indexOk=this.props.indexOk;
//		console.log(indexOk);
//		if(indexOk+1){
//			$(".orderKind_nav li").eq(indexOk+1).trigger("touchend").addClass("active").siblings("li").removeClass("active");
////			$(this).addClass("active").siblings("li").removeClass("active");
////			
//			$(".orderKind_main li").eq(indexOk+1).css("display","block").siblings("li").css("display","none");
//		}
		$("#goMessageBox").click(function(){
			$(".messageBox").css("display","block")
			
		});
		$(".orderKind_main").click(function(){
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
//===========点击搜索框==============================	
		$(".center1").click(function(){
			var list=that.props.list;
			var kind=that.props.kind;
			var Search=require("./Search");
			var SearchHeader=require("./SearchHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Search list={list} kind={kind}/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<SearchHeader list={list} kind={kind}/>,document.getElementById("header"));
			$("#header").show();
			$("#footer").hide();
		});
//==============排序==================================		
		$(".orderKind_nav li").click(function(){
			var index=$(this).index();
			$(this).addClass("active").siblings("li").removeClass("active");
			var data=$(".orderKind_nav li").eq(0).attr("data-data");
			var jiage=$(".orderKind_nav li").eq(2).attr("data-jiage");
			if(index==0){//综合排序
				$(".orderKind_nav li").eq(0).find(".zonghe_img").find("img").attr("src","img/list_jiage.png");
				$(".orderKind_nav li").eq(2).find(".jiage_img").find("span").eq(0).find("img").attr("src","img/list3.png");
				$(".orderKind_nav li").eq(2).find(".jiage_img").find("span").eq(1).find("img").attr("src","img/list4.png");
				if(data=="0"){
					$(".orderKind_nav li").eq(0).attr("data-data","1");
					$(".mask").css("display","block");
				}else if(data=="1"){
					$(".orderKind_nav li").eq(0).attr("data-data","0");
					$(".mask").css("display","none");
				}
			}else if(index==1){//销量排序
				$(".orderKind_nav li").eq(0).find(".zonghe_img").find("img").attr("src","img/list4.png");
				$(".orderKind_nav li").eq(2).find(".jiage_img").find("span").eq(0).find("img").attr("src","img/list3.png");
				$(".orderKind_nav li").eq(2).find(".jiage_img").find("span").eq(1).find("img").attr("src","img/list4.png");
				$(".orderKind_nav li").eq(0).attr("data-data","0");
				$(".mask").css("display","none");
				var sort   		 = 'sales_sum';//根据销量字段排序
				var paixu        = 'desc';
				var goods_name   = !that.props.search_name ? '' : that.props.search_name;

				var result       = that.ajax_return(sort,paixu,goods_name);//ajax得到的是object对象
				var result_array = that.obj_to_array(result); 
				for(var j = 0 ; j < result_array.length ; j++){//排序之后替换掉页面上的值
//					竖着的数据排序
					$(".collect_main_all").eq(j).find(".cma_left_img img").attr("src",result_array[j].original_img);
					$(".cma_right").eq(j).find("p").eq(0).html(result_array[j].goods_name);
					$(".cma_right").eq(j).find("p").eq(1).find("span").eq(1).html(result_array[j].shop_price);
					$(".cma_right").eq(j).find("p").eq(1).find("span").eq(3).html(result_array[j].sales_sum);
//					横着的数据排序
					$(".collect_li2_all").eq(j).find(".ul2_img img").attr("src",result_array[j].original_img);
					$(".collect_li2_all").eq(j).find("p").html(result_array[j].goods_name);
					$(".ul2_number_left").eq(j).find("span").eq(1).html(result_array[j].shop_price);
					$(".ul2_number_right").eq(j).find("span").eq(1).html(result_array[j].sales_sum);
				}
			}else if(index==2){//价格排序
				$(".orderKind_nav li").eq(0).find(".zonghe_img").find("img").attr("src","img/list4.png");
				$(".orderKind_nav li").eq(0).attr("data-data","0");
				$(".mask").css("display","none");
				if(jiage=="0"){//价格正序
					$(".orderKind_nav li").eq(2).attr("data-jiage","1");
					$(".orderKind_nav li").eq(2).find(".jiage_img").find("span").eq(0).find("img").attr("src","img/list2.gif");
					$(".orderKind_nav li").eq(2).find(".jiage_img").find("span").eq(1).find("img").attr("src","img/list4.png");
					
					var sort   		 = 'shop_price';//根据价格字段排序
					var paixu        = 'asc';
					var goods_name   = !that.props.search_name ? '' : that.props.search_name;
					var result       = that.ajax_return(sort,paixu,goods_name);//ajax得到的是object对象
					var result_array = that.obj_to_array(result); 
					for(var j = 0 ; j < result_array.length ; j++){//排序之后替换掉页面上的值
//						竖着的数据
						$(".collect_main_all").eq(j).find(".cma_left_img img").attr("src",result_array[j].original_img);
						$(".cma_right").eq(j).find("p").eq(0).html(result_array[j].goods_name);
						$(".cma_right").eq(j).find("p").eq(1).find("span").eq(1).html(result_array[j].shop_price);
						$(".cma_right").eq(j).find("p").eq(1).find("span").eq(3).html(result_array[j].sales_sum);
//					    横着的数据排序
						$(".collect_li2_all").eq(j).find(".ul2_img img").attr("src",result_array[j].original_img);
						$(".collect_li2_all").eq(j).find("p").html(result_array[j].goods_name);
						$(".ul2_number_left").eq(j).find("span").eq(1).html(result_array[j].shop_price);
						$(".ul2_number_right").eq(j).find("span").eq(1).html(result_array[j].sales_sum);
					}
				}else if(jiage=="1"){//价格倒叙
					$(".orderKind_nav li").eq(2).attr("data-jiage","0");
					$(".orderKind_nav li").eq(2).find(".jiage_img").find("span").eq(0).find("img").attr("src","img/list3.png");
					$(".orderKind_nav li").eq(2).find(".jiage_img").find("span").eq(1).find("img").attr("src","img/list_jiage.png");
					
					var sort   		 = 'shop_price';//根据价格字段排序
					var paixu        = 'desc';
					var goods_name   = !that.props.search_name ? '' : that.props.search_name;
					var result       = that.ajax_return(sort,paixu,goods_name);//ajax得到的是object对象
					var result_array = that.obj_to_array(result); 
					for(var j = 0 ; j < result_array.length ; j++){//排序之后替换掉页面上的值
//						竖着的数据
						$(".collect_main_all").eq(j).find(".cma_left_img img").attr("src",result_array[j].original_img);
						$(".cma_right").eq(j).find("p").eq(0).html(result_array[j].goods_name);
						$(".cma_right").eq(j).find("p").eq(1).find("span").eq(1).html(result_array[j].shop_price);
						$(".cma_right").eq(j).find("p").eq(1).find("span").eq(3).html(result_array[j].sales_sum);
//					    横着的数据排序
						$(".collect_li2_all").eq(j).find(".ul2_img img").attr("src",result_array[j].original_img);
						$(".collect_li2_all").eq(j).find("p").html(result_array[j].goods_name);
						$(".ul2_number_left").eq(j).find("span").eq(1).html(result_array[j].shop_price);
						$(".ul2_number_right").eq(j).find("span").eq(1).html(result_array[j].sales_sum);						
					}	
				}
			}
		});
//=======点击综合里的每个分类===================
		$(".tosort li").click(function(e){
			var data=$(".orderKind_nav li").eq(0).attr("data-data");
			$(".orderKind_nav li").eq(0).attr("data-data","0");
			var index=$(this).index();
			$(this).addClass("actives").siblings("li").removeClass("actives");
			$(this).find("span").eq(1).css("display","block");
			$(this).siblings("li").find("span").eq(1).css("display","none");
			if(index==0){//综合排序的ajax
				$(".tosort li").eq(2).find("span").eq(1).css("display","none");
				var sort   		 = 'goods_id';//商品id
				var paixu        = 'desc';
				var goods_name   = !that.props.search_name ? '' : that.props.search_name;
				var result       = that.ajax_return(sort,paixu,goods_name);//ajax得到的是object对象
				var result_array = that.obj_to_array(result); 
				for(var j = 0 ; j < result_array.length ; j++){//排序之后替换掉页面上的值
//					竖着的数据
					$(".collect_main_all").eq(j).find(".cma_left_img img").attr("src",result_array[j].original_img);
					$(".cma_right").eq(j).find("p").eq(0).html(result_array[j].goods_name);
					$(".cma_right").eq(j).find("p").eq(1).find("span").eq(1).html(result_array[j].shop_price);
					$(".cma_right").eq(j).find("p").eq(1).find("span").eq(3).html(result_array[j].sales_sum);
//				       横着的数据排序
					$(".collect_li2_all").eq(j).find(".ul2_img img").attr("src",result_array[j].original_img);
					$(".collect_li2_all").eq(j).find("p").html(result_array[j].goods_name);
					$(".ul2_number_left").eq(j).find("span").eq(1).html(result_array[j].shop_price);
					$(".ul2_number_right").eq(j).find("span").eq(1).html(result_array[j].sales_sum);						
				}	
			}else if(index==1){//新品优先的ajax
				$(".tosort li").eq(2).find("span").eq(1).css("display","none");
				
				var sort   		 = 'on_time';//上架时间
				var paixu        = 'desc';
				var goods_name   = !that.props.search_name ? '' : that.props.search_name;
				var result       = that.ajax_return(sort,paixu,goods_name);//ajax得到的是object对象
				var result_array = that.obj_to_array(result); 
				for(var j = 0 ; j < result_array.length ; j++){//排序之后替换掉页面上的值
//					竖着的数据
					$(".collect_main_all").eq(j).find(".cma_left_img img").attr("src",result_array[j].original_img);
					$(".cma_right").eq(j).find("p").eq(0).html(result_array[j].goods_name);
					$(".cma_right").eq(j).find("p").eq(1).find("span").eq(1).html(result_array[j].shop_price);
					$(".cma_right").eq(j).find("p").eq(1).find("span").eq(3).html(result_array[j].sales_sum);
//				       横着的数据排序
					$(".collect_li2_all").eq(j).find(".ul2_img img").attr("src",result_array[j].original_img);
					$(".collect_li2_all").eq(j).find("p").html(result_array[j].goods_name);
					$(".ul2_number_left").eq(j).find("span").eq(1).html(result_array[j].shop_price);
					$(".ul2_number_right").eq(j).find("span").eq(1).html(result_array[j].sales_sum);						
				}
			}else if(index==2){//评论数从高到底的ajax
				$(".tosort li").eq(1).find("span").eq(1).css("display","none");
				
				var sort   		 = 'comment_count';//评论数
				var paixu        = 'desc';
				var goods_name   = !that.props.search_name ? '' : that.props.search_name;
				var result       = that.ajax_return(sort,paixu,goods_name);//ajax得到的是object对象
				var result_array = that.obj_to_array(result); 
				for(var j = 0 ; j < result_array.length ; j++){//排序之后替换掉页面上的值
//					竖着的数据
					$(".collect_main_all").eq(j).find(".cma_left_img img").attr("src",result_array[j].original_img);
					$(".cma_right").eq(j).find("p").eq(0).html(result_array[j].goods_name);
					$(".cma_right").eq(j).find("p").eq(1).find("span").eq(1).html(result_array[j].shop_price);
					$(".cma_right").eq(j).find("p").eq(1).find("span").eq(3).html(result_array[j].sales_sum);
//				       横着的数据排序
					$(".collect_li2_all").eq(j).find(".ul2_img img").attr("src",result_array[j].original_img);
					$(".collect_li2_all").eq(j).find("p").html(result_array[j].goods_name);
					$(".ul2_number_left").eq(j).find("span").eq(1).html(result_array[j].shop_price);
					$(".ul2_number_right").eq(j).find("span").eq(1).html(result_array[j].sales_sum);						
				}	
			}
			
		});
//=========点击遮罩======================
		$(".mask").click(function(e){
			var data=$(".orderKind_nav li").eq(0).attr("data-data");
			$(".orderKind_nav li").eq(0).attr("data-data","0");
			$(this).css("display","none");
		});			
//====================切换列表的方式====================================		
		var hide = true;
		$("#changeStyle").click(function(e){
			e.preventDefault();
			if(hide){
				$(".orderKind_main .ul1").css("display","none")
				$(".orderKind_main .ul2").css("display","block")
				$(this).find(".img").find("img").attr("src","img/list.png")
				hide = false;
			}else{
				$(".orderKind_main .ul1").css("display","block")
				$(".orderKind_main .ul2").css("display","none")
				$(this).find(".img").find("img").attr("src","img/list1.png")
				hide = true;
			}
		});
	
	},
	componentDidUpdate:function(){
		var that=this;
//======================点击列表页的每个li到详情============================
		$(".todetail").click(function(){
			var id   	 	 = that.props.id;
			var goods_id 	 = $(this).attr('data-goods_id');
			var list	 	 = that.props.list;
			var kind	 	 = that.props.kind;
			var Detail	     = require("./Detail");
			var DetailHeader = require("./DetailHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Detail list={list} kind={kind} id={id} goods_id={goods_id} />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<DetailHeader list={list} kind={kind} id={id} goods_id={goods_id} />,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		})
		
	}
});
module.exports=List;
