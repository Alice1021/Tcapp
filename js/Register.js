var React=require("react");
var ReactDOM=require("react-dom");
//var ProList=require("./ProList");
//var LArea=require("./LArea");
var Register=React.createClass({
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
			<div className="registerContent">
				<div className="register_main1">
					<ul className="register_style">
						<span><img src="img/register-3_03.png"/></span>
						<span>手机注册</span>
					</ul>
					<ul className="register_style_main">
						<div className="tishi">
							<span>
								<img src="img/tishi-56_03.png"/>
							</span>
							<span>您输入的手机号不合法</span>
						</div>
						<li>
							<div className="register_style_main_line">
								<span>+86</span>
								<span><img src="img/regist-3_03.png"/></span>
								<input className="phoneNumber" type="text" placeholder="请输入您的手机号码" />
								<span>
									<img src="img/select_phonenumber-56_03.png"/>
								</span>
							</div>
							<div className="duanxin_yanzheng">
								<div className="write_duanxin">
									<input type="text" placeholder="请输入短信验证码"/>
								</div>
								<div className="huoqu_duanxin">
									<span>获取验证码</span>
									<span>(</span>
									<span id="time">10</span>
									<span>)</span>
								</div>
							</div>
							<div className="register_address">
								<span>注册地址</span>
								<input className="chanceaddress" type="text" placeholder="请选择您的注册所在地"  readOnly="true"/>
							</div>
							<p>
							    <span className="isChecked"><img src="img/checked.png"/></span>
								<span>同意</span>
								<span className="xieyi">天采用户注册协议</span>
							</p>
							<div className="next">下一步</div>
						</li>
					</ul>
					<App />
				</div>
				<div className="register_main2">
					<div className="setPass">请为您的账户设置密码</div>
					<div className="setNewPw">
						<input className="setpassword" type="password" placeholder="请设置6-20位新密码" />
						<span><img src="img/select_phonenumber-56_03.png" /></span>
					</div>
					<div className="seepw">
						<span>
							<img src="img/unchecked.png" />
						</span>
						<span>密码可见</span>
					</div>
					<div className="guiding">密码由6-20位字母、数字、符号等组成，且密码不可以纯数字组合，密码区分字母的大小写</div>
					<div className="wancheng">完成</div>
					
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
	componentDidMount:function(){
		var that=this;	
//=============输入电话框失去焦点的时候的事件=================
		$(".phoneNumber").on("blur",function(){
			var pattern = /^1[34578]\d{9}$/;
			var phone=$(".phoneNumber").val();
			if(!pattern.test(phone)){
				$(".tishi").css("display","block");
				$(".register_style_main_line span").eq(2).css("display","block");
				$(".register_style_main").css("margin-top",0);
			}else{
				
			}
		});
//=============点击同意天采用户协议====================================
		$(".isChecked").click(function(){
			if($(this).find("img").attr("src")=="img/checked.png"){
				$(this).find("img").attr("src","img/534.png")
			}else if($(this).find("img").attr("src")=="img/534.png"){
				$(this).find("img").attr("src","img/checked.png")
			}
		})
//=============点击获取验证码==========================================	
		$(".huoqu_duanxin").click(function(){
			if($(this).find("span").eq(0).html()=="获取验证码"){
				$(this).find("span").eq(0).html("重新获取");
				$(this).find("span").css("display","inline-block");
				$(this).css({
					"background":"#eeeeee",
					"color":"#c0c0c0"
					});
				var setTime;
	            var time=parseInt($("#time").text());
	            setTime=setInterval(function(){
	                if(time<=0){
	                	$(".huoqu_duanxin").css({
	                		"background":"#f39800",
	                		"color":"#fff"
	                	})
	                    clearInterval(setTime);
	                    return;
	                }
	                time--;
	                $("#time").text(time);
	            },1000);
			}else if($(this).find("span").eq(0).html()=="重新获取"&&$(this).find("#time").html()==0){
				$(this).css({
					"background":"#eeeeee",
					"color":"#c0c0c0"
					});
				$("#time").html(10);
				var setTime;
	            var time=parseInt($("#time").text());
	            setTime=setInterval(function(){
	                if(time<=0){
	                	$(".huoqu_duanxin").css({
	                		"background":"#f39800",
	                		"color":"#fff"
	                	});
	                    clearInterval(setTime);
	                    return;
	                }
	                time--;
	                $("#time").text(time);
	            },1000);
			}
		});
//==========点击天采用户注册协议=============================	
		$(".xieyi").click(function(){
			var type=that.props.type;
			var list=that.props.list;
			var kind=that.props.kind;
			var cart=that.props.cart;
			var RegisterXieYi=require("./RegisterXieYi");
			var RegisterXieYiHeader=require("./RegisterXieYiHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<RegisterXieYi type={type} list={list} kind={kind} cart={cart}/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<RegisterXieYiHeader type={type} list={list} kind={kind} cart={cart}/>,document.getElementById("header"));
			$("#footer").hide();
		})
//=======往下是点击下一步之后页面的效果		
//============点击注册的 下一步=============================
		$(".next").click(function(){
			$(".register_main1").css("display","none");
			$(".register_main2").css("display","block")
		});
//=============手机注册密码时，input获取焦点，完成变色==============================		
		$(".setNewPw input").focus(function(){
			$(".wancheng").css("background","#f39800")
		});
//==============选择密码是可见还是不可见===========================
		$(".seepw span").eq(0).click(function(){
			if($(this).find("img").attr("src")=="img/checked.png"){
				$(this).find("img").attr("src","img/unchecked.png");
				$(".setNewPw input").attr("type","password");
			}else if($(this).find("img").attr("src")=="img/unchecked.png"){
				$(this).find("img").attr("src","img/checked.png");
				$(".setNewPw input").attr("type","text");
			}
			
		});
//==============点击完成，判断密码格式是否正确==============================
		$(".wancheng").click(function(){
			var ispassword=/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/;
			var passtext=$(".setpassword").val();
			if(!ispassword.test(passtext)){
				$(".setNewPw span").css("display","block");
				$(".guiding").css("color","#f23025")
			}else{
				if(that.props.type=="home"){
					var Login=require("./Login");
					var LoginHeader=require("./LoginHeader");
					ReactDOM.unmountComponentAtNode(document.getElementById("content"));
					ReactDOM.render(<Login type="home"/>,document.getElementById("content"));
					ReactDOM.unmountComponentAtNode(document.getElementById("header"));
					ReactDOM.render(<LoginHeader type="home"/>,document.getElementById("header"));
					$("#footer").hide();
				}else if(that.props.type=="user"){
					var User=require("./User");
					var UserHeader=require("./UserHeader");
					ReactDOM.unmountComponentAtNode(document.getElementById("content"));
					ReactDOM.render(<User />,document.getElementById("content"));
					ReactDOM.unmountComponentAtNode(document.getElementById("header"));
					ReactDOM.render(<UserHeader />,document.getElementById("header"));
					$("#footer").show()
				}else if(that.props.list=="list"){
					var Login=require("./Login");
					var LoginHeader=require("./LoginHeader");
					ReactDOM.unmountComponentAtNode(document.getElementById("content"));
					ReactDOM.render(<Login list="list"/>,document.getElementById("content"));
					ReactDOM.unmountComponentAtNode(document.getElementById("header"));
					ReactDOM.render(<LoginHeader list="list"/>,document.getElementById("header"));
					$("#footer").hide();
				}else if(that.props.kind=="kind"){
					var Login=require("./Login");
					var LoginHeader=require("./LoginHeader");
					ReactDOM.unmountComponentAtNode(document.getElementById("content"));
					ReactDOM.render(<Login kind="kind"/>,document.getElementById("content"));
					ReactDOM.unmountComponentAtNode(document.getElementById("header"));
					ReactDOM.render(<LoginHeader kind="kind"/>,document.getElementById("header"));
					$("#footer").hide();
				}else if(that.props.cart=="cart"){
					var Login=require("./Login");
					var LoginHeader=require("./LoginHeader");
					ReactDOM.unmountComponentAtNode(document.getElementById("content"));
					ReactDOM.render(<Login cart="cart"/>,document.getElementById("content"));
					ReactDOM.unmountComponentAtNode(document.getElementById("header"));
					ReactDOM.render(<LoginHeader cart="cart"/>,document.getElementById("header"));
					$("#footer").hide();
				}else if(that.props.collect=="collect"){
					var Login=require("./Login");
					var LoginHeader=require("./LoginHeader");
					ReactDOM.unmountComponentAtNode(document.getElementById("content"));
					ReactDOM.render(<Login collect="collect"/>,document.getElementById("content"));
					ReactDOM.unmountComponentAtNode(document.getElementById("header"));
					ReactDOM.render(<LoginHeader collect="collect"/>,document.getElementById("header"));
					$("#footer").hide();
				}
			}
			
		});
//==========点击注册地址获取焦点事件===========================
		$(".chanceaddress").on("click",function(){
			$(".area_ctrl").css("display","block");
			$(".area_ctrl").addClass("slideInUp");
		});
//=======点击地址栏的取消按钮====================	
		$(".larea_cancel").click(function(){
			$(".area_ctrl").css("display","none");
			$(".area_ctrl").removeClass("slideInUp");
		});
//=======点击地址栏的确定按钮====================			
		$(".larea_finish").click(function(){
			$(".area_ctrl").css("display","none");
			$(".area_ctrl").removeClass("slideInUp");
		})
	},
	componentDidUpdate:function(){

		
		
	}
});

	/**
		 * 整个应用
		 */
		var App = React.createClass({
		    getInitialState: function () {  //初始化数据
		        return {data: []}
		    },
		    /**
		     * 城市选择回调，返回省市区的下标
		     */
		    onAddressSelect: function (pIndex, cIndex, aIndex) {
//		    	 console.log(this.state.data)	
		        var data = this.state.data;
		        
		        var address = data[pIndex].name
		            + data[pIndex].city[cIndex].name
		            + data[pIndex].city[cIndex].area[aIndex].name;
				var ids=data[pIndex].id+"----------"
		            + data[pIndex].city[cIndex].id+"-----------"
		            + data[pIndex].city[cIndex].area[aIndex].id;
		        this.address = address;
		        this.ids=ids;
		       //与渲染无关的数据  直接存在this对象里  如果存在State里面会导致页面脏渲染，卡顿
		    },
		    onClick: function () {
		        var ans = '选择的地址：'+this.address;
		        var ids='选择的对应的id'+this.ids;
		        alert(ans);
		        alert(ids);
		    },
		    componentDidMount: function () {
		        var self = this;
		      
		        
		        $.get("http://m.chepc.cn/sopa/user/get_p_c_d/tcggsc/c2726d9cbd6f600f12d60352729060c3",function (data) {
		            
		            self.setState({data: data});
		        });
		    },
		    render: function () {
		        return (<div className="area_ctrl">
						<div className="area_btn_box">
							<div className="area_btn larea_cancel">取消</div>
							<div className="area_btn larea_finish btn" onClick={this.onClick}>确定</div>
							
						</div>
						<div className="area_roll_mask">
							<div>
			                    
			                    <WheelDialog
			                            data={this.state.data}
			                            onAddressSelect={this.onAddressSelect}//传进回调
			                    />
			                </div>
						</div>
					</div>);
		    }
		});
		/**
		 * 选择组件
		 */
		var WheelDialog = React.createClass({
		    getInitialState: function () {
		        return {
		            data: [],
		            pro: [],//省数组
		            city: [],//市数组
		            area: [],//区数组
		            pIndex: 0,//当前的省下标
		            cIndex: 0,//当前的市下标
		            aIndex: 0,//当前的区下标
		        }
		    },
		    componentWillReceiveProps: function (nextProps) {
		        this.setState({data: nextProps.data});//把新的数据填进列表，setState会自动触发render更新界面
		        this.initData(nextProps.data);
		    },
		    initData: function (data) {
		        var pArr = [];
		        var cArr = [];
		        var aArr = [];
		        data.map(function (pro) {
		            pArr.push(pro.name);
		        });
		        if (data[0])
		            data[0].city.map(function (city) {
		                cArr.push(city.name)
		            });
		        if (data[0].city[0])
		            data[0].city[0].area.map(function (area) {
		                aArr.push(area.name)
		            }); 
		        this.setState({
		            pro: pArr,
		            city: cArr,
		            area: aArr
		        });
		        this.props.onAddressSelect(0, 0, 0);
		    },
		    onDataChange: function (type, index) {
//		        console.log(type + "   --->" + index)
		        var cArr = [];
		        var aArr = [];
		        switch (type) {
		            case  "pro"://省带动市区变化
		                this.state.data[index].city.map(function (city) {
		                    cArr.push(city.name)
		                });
						this.state.data[index].city[0].area.map(function (area) {
		                    aArr.push(area.name)
		                });
		                this.setState({
		                    city: cArr,
		                    area: aArr,
		                    pIndex: index,
		                    cIndex: 0,
		                    aIndex: 0,
		                });
		                break;
		            case  "city"://市带动区变化
		            	this.state.data[this.state.pIndex].city[index].area.map(function (area) {
		                    aArr.push(area.name)
		              	});	
		                this.setState({
		                    area: aArr,
		                    cIndex: index,
		                    aIndex: 0,
		                });
		                break;
		            case  "area":
		                this.setState({aIndex: index});
		                break;
		        };
		        this.props.onAddressSelect(this.state.pIndex, this.state.cIndex, this.state.aIndex);//数据变化之后，触发回调
		    },
		    render: function () {
		        return (
		                <div className="dialog">
		                    <div  className="box"></div>
		                    <WheelView type="pro" data={this.state.pro}	
		                               index={this.state.pIndex}
		                               onDataChange={this.onDataChange}/>
		                    <WheelView type="city" data={this.state.city}			
		                               index={this.state.cIndex}
		                               onDataChange={this.onDataChange}/>
		                    <WheelView type="area" data={this.state.area}
		                               index={this.state.aIndex}
		                               onDataChange={this.onDataChange}/>
		
		                </div>
		        );
		    }
		});
		/**
		 * 滚动组件
		 */
		var WheelView = React.createClass({
		    getInitialState: function () {
		        return {
		            data: []
		        }
		    },
		    /**
		     * 当有新的属性需要更新时。也就是网络数据回来之后
		     * @param nextProps
		     */
		    componentWillReceiveProps: function (nextProps) {//接收父组建的数据
		        this.setState({
		            data: nextProps.data,
		        });//把新的数据填进列表，setState会自动触发render更新界面
		        this.refs.scroller.scrollTop = 40 * nextProps.index;
		          //每个列表选项高度为40px;
		    },
		    componentDidMount: function () {
		        var self = this;
		        self.refs.scroller.addEventListener('touchstart', touchStart, false);
		        self.refs.scroller.addEventListener('touchend', touchEnd, false);
		        self.refs.scroller.addEventListener('mousedown', touchStart, false);
		        self.refs.scroller.addEventListener('mouseup', touchEnd, false);
		
		        function touchStart(event) {
		            self.isTouchStart = true;
		        };
		
		        function touchEnd(event) {
		            self.isTouchStart = false;
		            self.timer = setTimeout(self.reSet, 100)
		            //100毫秒未触摸，认定滚动结束进行状态修正
		        };
		    },
		
		    /**
		     * 监听滚动事件
		     * @param e
		     */
		    onScroll: function () {
		        var self = this;
		        if (this.timer) clearTimeout(this.timer)//如果一直在滚动，不会触发timer
		        this.timer = setTimeout(self.reSet, 100);
		        //100毫秒未滚动，认定滚动结束
		    },
		
		    /**
		     * 状态修正
		     */
		    reSet: function () {
		        var self = this;
		        if (self.isTouchStart)return;//如果在触摸状态，返回
//		        console.log('scrolling ends..');
		        var top = self.refs.scroller.scrollTop;//滚过的高度
		        var dis = top % 40;
		        var target;
		        if (dis > 20) {//超过一半，向下滚
		            target=top + (40 - dis);
		            self.transfrom(target);
		        } else {//否则滚回去
		            target=top - dis;
		            self.transfrom(target);
		        }
		        self.index = target / 40;//  当前选中的序号
		        self.props.onDataChange(self.props.type, self.index);
		    },
		    handleClick:function(e){   //点到哪个滚到目标位置
//		        console.log(e.clientY-120);
		        var distance = e.clientY-120;  //当前点击的位置距目标位置的距离
		        var self=this;
		        var top = self.refs.scroller.scrollTop;  //滚过的高度
		        var target = top+Math.floor(distance/40)*40;  //需要滚动的高度
		        self.transfrom(target);    //动画过渡到目标位置
		        self.index = target / 40;  //  当前选中的序号
		        self.props.onDataChange(self.props.type, self.index); 
		          //回调函数数据改变事件    
		    },
		    /**
		     * 动画过渡到目标位置
		     * @param target
		     */
		    transfrom: function (target) {
		        var self = this;
		        var now = self.refs.scroller.scrollTop;
		        var step = (target - now) / 20;
		        setTimeout(function () {
		            self.refs.scroller.scrollTop = self.refs.scroller.scrollTop + step;
		            if (self.refs.scroller.scrollTop != target)
		                setTimeout(this, 10);//没有滚动到目标位置，继续触发自己
		        },10);
		    },
		    render: function () {
		        return (<div className="container"
		                     ref="scroller"
		                     onScroll={this.onScroll}
		                     onClick={this.handleClick}>
		                     <div className="scroller">
		                        {
		                            this.state.data.map(function (item) {
		                            //循环把数据显示出来
		                                return <div className="item">{item}</div>
		                            })
		                        }
		                    </div>
		                </div>
		       );
		    }
		});
		







module.exports=Register;
