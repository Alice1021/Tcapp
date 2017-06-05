var React=require("react");
var ReactDOM=require("react-dom");
var MainFooter=React.createClass({
	getInitialState:function(){
		return{
			activeIndex:0,
			
			
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
	clickListHandels:function(e){
		var that=this;
		var currentIndex=e.target.getAttribute("data-id")*1;
		
		that.setState({
			activeIndex:currentIndex
		});
		var content = document.getElementById("content");
		var header=document.getElementById("header");
		switch(currentIndex){
			case 0:
			    var Home=require("./Home");
			    var HomeHeader=require("./HomeHeader");
			    ReactDOM.unmountComponentAtNode(header);
				ReactDOM.render(<HomeHeader/>,header);
			    ReactDOM.unmountComponentAtNode(content);
				ReactDOM.render(<Home/>,content);
				$("#header").show();
				break;
			case 1:
				var Kind=require("./Kind");
				var KindHeader=require("./KindHeader");
			    ReactDOM.unmountComponentAtNode(header);
				ReactDOM.render(<KindHeader/>,header);
				ReactDOM.unmountComponentAtNode(content);
				ReactDOM.render(<Kind/>,content);
				$("#header").show();
				break;
			case 2:
				if(!JSON.parse(localStorage.getItem('users'))){
					that.makeText("请先登录",1000);
					return false;
				}else if(JSON.parse(localStorage.getItem('users'))){
					var Cart=require("./Cart");
					var CartHeader=require("./CartHeader")
				    ReactDOM.unmountComponentAtNode(header);
					ReactDOM.render(<CartHeader/>,header);
					ReactDOM.unmountComponentAtNode(content);
					ReactDOM.render(<Cart/>,content);
					$("#header").hide();
				}
				
				break;
			case 3:
				var User=require("./User");
				var UserHeader=require("./UserHeader");
			    ReactDOM.unmountComponentAtNode(header);
				ReactDOM.render(<UserHeader/>,header);
				ReactDOM.unmountComponentAtNode(content);
				ReactDOM.render(<User/>,content);
				$("#header").show();
				break;	
			default:
				break;	
		}
	},
	render:function(){
		return(
			<ul>
				<li className={this.state.activeIndex==0?"active":""} onClick={this.clickListHandels} data-id="0">
					<i className="iconfont" data-id="0">
						<span className="span1" data-id="0"></span>
					</i>
					<p data-id="0">商城首页</p>
				</li>
				<li className={this.state.activeIndex==1?"active":""} onClick={this.clickListHandels} data-id="1">
					<i className="iconfont" data-id="1">
					    <span className="span2" data-id="1"></span>
					</i>
					<p data-id="1">商品分类</p>
				</li>
				<li className={this.state.activeIndex==2?"active":""} onClick={this.clickListHandels} data-id="2">
					<i className="iconfont" data-id="2">
						<span className="span3" data-id="2"></span>
					</i>
					<p data-id="2">购物车</p>
				</li>
				<li className={this.state.activeIndex==3?"active":""} onClick={this.clickListHandels} data-id="3">
					<i className="iconfont" data-id="3">
						<span className="span4" data-id="3"></span>
					</i>
					<p data-id="3">个人中心</p>
				</li>
			</ul>
		)
	}
});
module.exports=MainFooter;