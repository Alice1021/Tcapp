var React=require("react");
var ReactDOM=require("react-dom");
var FirmOrder=React.createClass({
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
			<div className="firmOrderContent">
				<div className="delivery_address">
					<div className="address_top">
						<div className="address_logo">
							<img src="img/firmOrder2.png"/>
						</div>
						<div className="address_detail">
							<p>
								<span>收货人：</span>
								<span>安二牛</span>
								<span>15030197739</span>
							</p>
							<p>
								<span>收货地址：</span>
								<span>河南省保定市望都县温泉花园30号楼1单元301</span>
							</p>
						</div>
						<div className="more_jiantou">
							<img src="img/home_more_.png"/>
						</div>
					</div>
					<div className="address_bottom">
						<img src="img/firmOrder1.png"/>
					</div>
				</div>
				<ul className="goods_shop">
					<li>
						<div className="shopName">
							<span>开封</span>
							<span>天采广告商城</span>
						</div>
						<div className="goodsproduce">
							<div className="goodsproduce_left">
								<div className="goodsproduce_left_img">
									<img src="img/detail_img.png"/>
								</div>
							</div>
							<div className="goodsproduce_right">
								<p>250g专用白卡竖版覆盖抹手提袋 普通棉绳T111 250g白卡 1000</p>
								<p>
									<span>尺寸选择：</span>
									<span>34*26*8cm</span>
									<span>数量选择：</span>
									<span>5000</span>
								</p>
								<p>
									<span>￥</span>
									<span>1740</span>
									<span>X1</span>
								</p>
							</div>
						</div>
						<div className="payStyle">
							<div className="payStyle_paymoney">
								<div className="payStyle_paymoney_left">支付方式</div>
								<div className="payStyle_paymoney_right">
									<span>请选择</span>
									<span><img src="img/home_more_.png"/></span>
								</div>
							</div>
							<div className="payStyle_payaddress">
								<div className="payStyle_payaddress_left">配送方式</div>
								<div className="payStyle_payaddress_right">
									<span>请选择</span>
									<span><img src="img/home_more_.png"/></span>
								</div>
							</div>
						</div>
						<div className="liuyan">
							<span>买家留言:</span>
							<input type="text" placeholder="选填:对本次交易的说明(建议填写已和卖家协商过的内容)" />
						</div>
						<div className="goods_number_price">
							<div className="goods_number_price_all">
								<span>共</span>
								<span>1</span>
								<span>件商品</span>
								<span>小计：</span>
								<span>￥</span>
								<span>1740</span>
							</div>
						</div>
					</li>
					<li>
						<div className="shopName">
							<span>开封</span>
							<span>天采广告商城</span>
						</div>
						<div className="goodsproduce">
							<div className="goodsproduce_left">
								<div className="goodsproduce_left_img">
									<img src="img/detail_img.png"/>
								</div>
							</div>
							<div className="goodsproduce_right">
								<p>250g专用白卡竖版覆盖抹手提袋 普通棉绳T111 250g白卡 1000</p>
								<p>
									<span>尺寸选择：</span>
									<span>34*26*8cm</span>
									<span>数量选择：</span>
									<span>5000</span>
								</p>
								<p>
									<span>￥</span>
									<span>1740</span>
									<span>X1</span>
								</p>
							</div>
						</div>
						<div className="payStyle">
							<div className="payStyle_paymoney">
								<div className="payStyle_paymoney_left">支付方式</div>
								<div className="payStyle_paymoney_right">
									<span>请选择</span>
									<span><img src="img/home_more_.png"/></span>
								</div>
							</div>
							<div className="payStyle_payaddress">
								<div className="payStyle_payaddress_left">配送方式</div>
								<div className="payStyle_payaddress_right">
									<span>请选择</span>
									<span><img src="img/home_more_.png"/></span>
								</div>
							</div>
						</div>
						<div className="liuyan">
							<span>买家留言:</span>
							<input type="text" placeholder="选填:对本次交易的说明(建议填写已和卖家协商过的内容)" />
						</div>
						<div className="goods_number_price">
							<div className="goods_number_price_all">
								<span>共</span>
								<span>1</span>
								<span>件商品</span>
								<span>小计：</span>
								<span>￥</span>
								<span>1740</span>
							</div>
						</div>
					</li>
					
					
					
				</ul>
				<div className="firmOrder_footer">
					<div className="firmOrder_footer_all">
						<div className="firmOrder_footer_all_left">
							<span>合计：</span>
							<span>￥</span>
							<span>1740</span>
						</div>
						<div className="firmOrder_footer_all_right">提交订单</div>
					</div>
				</div>
				
			</div>
			
		)
	},
	componentDidMount:function(){
		$(".newsList li").click(function(){
			var type=$(this).attr("data-type");
			var XinWenDetail=require("./XinWenDetail");
			var XinWenDetailHeader=require("./XinWenDetailHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<XinWenDetail />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<XinWenDetailHeader type={type} />,document.getElementById("header"));
			$("#footer").hide();
			
		})
		
	},
	componentDidUpdate:function(){

		
		
	}
});
module.exports=FirmOrder;
