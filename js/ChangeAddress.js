var React=require("react");
var ReactDOM=require("react-dom");
//var ProList=require("./ProList");
var ChangeAddress=React.createClass({
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
			ReactDOM.render(<MineZiliao type="user"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<MineZiliaoHeader type="user"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		}else if(this.props.type=="home"){
			var FirmOrder=require("./FirmOrder");
			var FirmOrderHeader=require("./FirmOrderHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<FirmOrder type="home"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<FirmOrderHeader type="home"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").show();
		}else if(this.props.list=="list"){
			var FirmOrder=require("./FirmOrder");
			var FirmOrderHeader=require("./FirmOrderHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<FirmOrder list="list"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<FirmOrderHeader list="list"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").show();
		}else if(this.props.collect=="collect"){
			var FirmOrder=require("./FirmOrder");
			var FirmOrderHeader=require("./FirmOrderHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<FirmOrder collect="collect"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<FirmOrderHeader collect="collect"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").show();
		}else if(this.props.kind=="kind"){
			var FirmOrder=require("./FirmOrder");
			var FirmOrderHeader=require("./FirmOrderHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<FirmOrder kind="kind"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<FirmOrderHeader kind="kind"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").show();
		}else if(this.props.cart=="cart"){
			var FirmOrder=require("./FirmOrder");
			var FirmOrderHeader=require("./FirmOrderHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<FirmOrder cart="cart"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<FirmOrderHeader cart="cart"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").show();
		}else if(this.props.cart1=="cart"){
			var FirmOrder=require("./FirmOrder");
			var FirmOrderHeader=require("./FirmOrderHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<FirmOrder cart1="cart"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<FirmOrderHeader cart1="cart"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").show();
		}else if(this.props.myeval=="myeval"){
			var FirmOrder=require("./FirmOrder");
			var FirmOrderHeader=require("./FirmOrderHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<FirmOrder myeval="myeval"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<FirmOrderHeader myeval="myeval"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").show();
		}
	},
	componentWillMount:function(){
		var that		  = this;
		var user 		  = that.state.user;
		var url_interface = that.state.url_interface;
		$.ajax({
			type:"get",
			url:"http://"+url_interface+"/sopa/User/address_list",
			data:{tcggsc:'c2726d9cbd6f600f12d60352729060c3',user_id:user.user_id},
			success:function(data){
				console.log(data);
				if(data.state == 1){
					var address_res = data.result;
					var address_arr = [];
					for(i = 0 ; i < address_res.length ; i++){
						var moren_img = parseFloat(address_res[i].is_default) == 1 ? 'img/moren.png' : 'img/moren_no.png';//默认图片
						var moren_ads = parseFloat(address_res[i].is_default) == 1 ? '默认地址' : '选为默认';//默认地址
						var moren_css = parseFloat(address_res[i].is_default) == 1 ? 'left moren_chance set_morem' : 'left set_morem';//默认样式
//						console.log(is_defaule);
						address_arr.push(<li key={i} data-address_id={address_res[i].address_id}>
											<div className="top">
												<div className="left">
													<p className="left_top">
														<span>{address_res[i].consignee}</span>
														<span>{address_res[i].mobile}</span>
													</p>
													<p className="left_bottom">{address_res[i].province_name}  {address_res[i].city_name}  {address_res[i].district_name}  {address_res[i].address}</p>
												</div>
											</div>
											<div className="bottom">
												<div className={moren_css}>
													<span><img src={moren_img} /></span>
													<span>{moren_ads}</span>
												</div>
												
												<div className="right shanchu">
													<span><img src="img/shanchu.png"/></span>
													<span>删除</span>
												</div>
												<div className="center bianji">
													<span><img src="img/bianji.png"/></span>
													<span>编辑</span>
												</div>
											</div>
											<div className="mask">
												<div className="toSelect">
													<p>确认将这<span>1</span>个宝贝删除？</p>
													<p>
														<span className="quxiao">取消</span>
														<span className="queding">确定</span>
													</p>
												</div>
											</div>
										</li>);
					}
				}
				that.setState({
					address_result:address_arr
				})
			}
		});
		
	},
	render:function(){
		return(
			<div className="changeAddressContent">
				<div className="changeAddress_header">
					<div className="left_changeAddress" id="goBack" onClick={this.backHandel}>
						<img src="img/back.png"/>
					</div>
					<div className="center_changeAddress"> 
						收货地址管理
					</div>
					<div className="right_changeAddress" id="goMessageBox">
						<img src="img/more_03.png"/>
						<ul className="messageBox">
							<li data-type="changeaddress">
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
							<li data-type="changeaddress">
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
							<li data-type="changeaddress">
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
				<ul className="changeAddress_main">
					{this.state.address_result}
				</ul>
				<div className="kong_address">
					<p><img src="img/shouhuo_address.png"/></p>
					<p>暂无收货地址</p>
				</div>
				
				<div className="foot_address">新增收货地址</div>
			</div>
			
		)
	},
	componentDidMount:function(){
		
	},
	componentDidUpdate:function(){
		var that = this;
		//============判断是不是空的收货地址
		if($(".changeAddress_main").html()==null||$(".changeAddress_main").html().length==0){
			$(".changeAddress_main").css("display","none");
			$(".kong_address").css("display","block");
		}else{
			$(".changeAddress_main").css("display","block");
			$(".kong_address").css("display","none");
		}
		$("#goMessageBox").click(function(){
			$(".messageBox").css("display","block")
		});
		$(".changeAddress_main").click(function(){
			$(".messageBox").css("display","none");
		});
		$(".messageBox li").click(function(){
			var index=$(this).index();
			var kind=that.props.kind; 
			var type=that.props.type;
			var list=that.props.list;
			var collect=that.props.collect;
			var cart=that.props.cart;
			var cart1=that.props.cart1;
			var myeval=that.props.myeval;
			if(index==0){
				var NewsCenter=require("./NewsCenter");
				var NewsCenterHeader=require("./NewsCenterHeader");
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(<NewsCenter kind={kind} type={type} list={list} collect={collect} cart={cart} cart1={cart1} myeval={myeval}/>,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<NewsCenterHeader kind={kind} type={type} list={list} collect={collect} cart={cart} cart1={cart1} myeval={myeval}/>,document.getElementById("header"));
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
				$("#footer ul li").eq(0).trigger("click");
			}
		});

		//=============点击删除弹出框================================
		$(".shanchu").click(function(){
			var $this=$(this);
			$this.parent(".bottom").siblings(".mask").css("display","block");
//==============点击mask里面的取消================	
			$this.parent(".bottom").siblings(".mask").find(".quxiao").click(function(){
				$this.parent(".bottom").siblings(".mask").css("display","none");
			});	
//==============点击mask里面的确定================	
			$this.parent(".bottom").siblings(".mask").find(".queding").click(function(){
				var address_id    = $this.parent(".bottom").parent("li").attr('data-address_id');//地址id
				var url_interface = that.state.url_interface;
				var user          = that.state.user;
				$.ajax({
					type:"get",
					url:"http://"+url_interface+"/sopa/User/delAddress",
					data:{tcggsc:'c2726d9cbd6f600f12d60352729060c3',user_id:user.user_id,address_id:address_id},
					success:function(data){
//						console.log(data);
					}
				});
				$this.parent(".bottom").siblings(".mask").css("display","none");
				$this.parent(".bottom").parent("li").remove();
				//============判断是不是空的收货地址
				if($(".changeAddress_main").html()==null||$(".changeAddress_main").html().length==0){
					$(".changeAddress_main").css("display","none");
					$(".kong_address").css("display","block");
				}else{
					$(".changeAddress_main").css("display","block");
					$(".kong_address").css("display","none");
				}
			});

		});
//=================点击选择地址默认与否=====================
		$(".set_morem").click(function(){
			var address_id    = $(this).parents('li').attr('data-address_id');
			var url_interface = that.state.url_interface;
			var user          = that.state.user;
			$.ajax({
				type:"get",
				url:"http://"+url_interface+"/sopa/User/set_addressdefault",
				data:{tcggsc:'c2726d9cbd6f600f12d60352729060c3',user_id:user.user_id,address_id:address_id},
				success:function(data){
				}
			});
			for(var i=0;i<$(".set_morem").length;i++){
				$(this).find("span").eq(0).find("img").attr("src","img/moren.png").parents("li").siblings("li").eq(i-1).find(".moren_chance").find("span").eq(0).find("img").attr("src","img/moren_no.png");
				$(this).find("span").eq(1).html("默认地址").parents("li").siblings("li").eq(i-1).find(".moren_chance").find("span").eq(1).html("选为默认");
				$(this).addClass("moren_chance").parents("li").siblings("li").eq(i-1).find(".set_morem").removeClass("moren_chance")
			}
		});
//===========点击编辑 跳转到编辑地址===============================
		$(".bianji").click(function(){
			var address_id = $(this).parents('li').attr('data-address_id');
			var type=that.props.type;
			var kind=that.props.kind;
			var list=that.props.list;
			var collect=that.props.collect;
			var cart=that.props.cart;
			var cart1=that.props.cart1;
			var myeval=that.props.myeval;
			var EditorAddress=require("./EditorAddress");
			var EditorAddressHeader=require("./EditorAddressHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<EditorAddress address_id={address_id} kind={kind} type={type} list={list} collect={collect} cart={cart} cart1={cart1} myeval={myeval}/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<EditorAddressHeader address_id={address_id} kind={kind} type={type} list={list} collect={collect} cart={cart} cart1={cart1} myeval={myeval}/>,document.getElementById("header"));
			$("#header").hide();
			$("#footer").hide();
		});
//=============点击新增收货地址跳转到这一页===============================		
		$(".foot_address").click(function(){
			var type=that.props.type;
			var kind=that.props.kind;
			var list=that.props.list;
			var collect=that.props.collect;
			var cart=that.props.cart;
			var cart1=that.props.cart1;
			var myeval=that.props.myeval;
			var AddAddress=require("./AddAddress");
			var AddAddressHeader=require("./AddAddressHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<AddAddress kind={kind} type={type} list={list} collect={collect} cart={cart} cart1={cart1}  myeval={myeval}/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<AddAddressHeader kind={kind} type={type} list={list} collect={collect} cart={cart} cart1={cart1}  myeval={myeval}/>,document.getElementById("header"));
			$("#header").hide();
			$("#footer").hide();
		})




	}
});
module.exports=ChangeAddress;
