var React=require("react");
var ReactDOM=require("react-dom");
//var ProList=require("./ProList");
var AddAddress=React.createClass({
	getInitialState:function(){
		return{
			kindList:""
		}
	},
	backHandel:function(){
		if(this.props.type=="mineziliao"){
			var ChangeAddress=require("./ChangeAddress");
			var ChangeAddressHeader=require("./ChangeAddressHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<ChangeAddress type="mineziliao" />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<ChangeAddressHeader type="mineziliao" />,document.getElementById("header"));
			$("#header").hide();
			$("#footer").hide();
		}else if(this.props.type=="home"){
			var ChangeAddress=require("./ChangeAddress");
			var ChangeAddressHeader=require("./ChangeAddressHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<ChangeAddress type="home" />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<ChangeAddressHeader type="home" />,document.getElementById("header"));
			$("#header").hide();
			$("#footer").hide();
		}else if(this.props.list=="list"){
			var ChangeAddress=require("./ChangeAddress");
			var ChangeAddressHeader=require("./ChangeAddressHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<ChangeAddress list="list" />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<ChangeAddressHeader list="list" />,document.getElementById("header"));
			$("#header").hide();
			$("#footer").hide();
		}else if(this.props.collect=="collect"){
			var ChangeAddress=require("./ChangeAddress");
			var ChangeAddressHeader=require("./ChangeAddressHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<ChangeAddress collect="collect" />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<ChangeAddressHeader collect="collect" />,document.getElementById("header"));
			$("#header").hide();
			$("#footer").hide();
		}else if(this.props.kind=="kind"){
			var ChangeAddress=require("./ChangeAddress");
			var ChangeAddressHeader=require("./ChangeAddressHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<ChangeAddress kind="kind" />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<ChangeAddressHeader kind="kind" />,document.getElementById("header"));
			$("#header").hide();
			$("#footer").hide();
		}else if(this.props.cart=="cart"){
			var ChangeAddress=require("./ChangeAddress");
			var ChangeAddressHeader=require("./ChangeAddressHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<ChangeAddress cart="cart" />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<ChangeAddressHeader cart="cart" />,document.getElementById("header"));
			$("#header").hide();
			$("#footer").hide();
		}else if(this.props.cart1=="cart"){
			var ChangeAddress=require("./ChangeAddress");
			var ChangeAddressHeader=require("./ChangeAddressHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<ChangeAddress cart1="cart" />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<ChangeAddressHeader cart1="cart" />,document.getElementById("header"));
			$("#header").hide();
			$("#footer").hide();
		}else if(this.props.myeval=="myeval"){
			var ChangeAddress=require("./ChangeAddress");
			var ChangeAddressHeader=require("./ChangeAddressHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<ChangeAddress myeval="myeval" />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<ChangeAddressHeader myeval="myeval" />,document.getElementById("header"));
			$("#header").hide();
			$("#footer").hide();
		}
	},
	componentWillMount:function(){
		var that=this;
		
	},
	render:function(){
		return(
			<div className="addAddressContent">
				<div className="addAddress_header">
					<div className="left_addAddress" id="goBack" onClick={this.backHandel}>
						<img src="img/back.png"/>
					</div>
					<div className="center_addAddress"> 
						新增收货地址
					</div>
					<div className="right_addAddress" id="goMessageBox">
						<img src="img/more_03.png"/>
						<ul className="messageBox">
							<li data-type="addaddress">
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
							<li data-type="addaddress">
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
							<li data-type="addaddress">
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
				<ul className="addAddress_main">
					<li>
						<span>收货人</span>
						<input type="text" placeholder="请输入收货人姓名"/>
					</li>
					<li>
						<span>联系电话</span>
						<input type="text" placeholder="请输入收货人联系电话"/>
					</li>
					<li>
						<span>所在地址</span>
						<span></span>
						<span><img src="img/set_next.png"/></span>
						<span>请选择</span>
					</li>
					<textarea placeholder="请填写详细地址，不少于5个字"></textarea>
					<App />
				</ul>
				<div className="chance_style">
					<div className="left quxiao">取消</div>
					<div className="right baocun">保存</div>
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
		$("#goMessageBox").click(function(){
			$(".messageBox").css("display","block")
		});
		$(".addAddress_main").click(function(){
			$(".messageBox").css("display","none");
		});
		$(".messageBox li").click(function(){
			var index=$(this).index();
			var kind4=that.props.kind; 
			var type4=that.props.type;
			var list4=that.props.list;
			var collect4=that.props.collect;
			var cart4=that.props.cart;
			var cart14=that.props.cart1;
			var myeval4=that.props.myeval;
			if(index==0){
				var NewsCenter=require("./NewsCenter");
				var NewsCenterHeader=require("./NewsCenterHeader");
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(<NewsCenter kind4={kind4} type4={type4} list4={list4} collect4={collect4} cart4={cart4}  cart14={cart14} myeval4={myeval4}/>,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<NewsCenterHeader kind4={kind4} type4={type4} list4={list4} collect4={collect4} cart4={cart4}  cart14={cart14}  myeval4={myeval4}/>,document.getElementById("header"));
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
//=======点击取消========================
		$(".quxiao").click(function(){
			var ChangeAddress=require("./ChangeAddress");
			var ChangeAddressHeader=require("./ChangeAddressHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<ChangeAddress type="mineziliao" />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<ChangeAddressHeader type="mineziliao" />,document.getElementById("header"));
			$("#header").hide();
			$("#footer").hide();
		});
//======点击保存==================	
		$(".baocun").click(function(){
	//=====判断消息是否完善
			if($(".addAddress_main li").eq(0).find("input").val()==""||$(".addAddress_main li").eq(0).find("input").val().length<=1){
				that.makeText("收货人姓名至少两个字符",2000);
			}else if($(".addAddress_main li").eq(1).find("input").val()==""){
				that.makeText("请填写联系电话",2000);
			}else if($(".addAddress_main li").eq(2).find("span").eq(2).html()=="请选择"){
				that.makeText("请选择所在地区",2000);
			}else if($(".addAddress_main textarea").html()==""){
				that.makeText("请填写详细地址",2000);
			}else{
				var ChangeAddress=require("./ChangeAddress");
				var ChangeAddressHeader=require("./ChangeAddressHeader");
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(<ChangeAddress type="mineziliao" />,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<ChangeAddressHeader type="mineziliao" />,document.getElementById("header"));
				$("#header").hide();
				$("#footer").hide();
			}
			
		});
//==========点击注册地址获取焦点事件===========================
		$(".addAddress_main li").eq(2).on("click",function(){
			$(".area_ctrl").css("display","block");
			$(".area_ctrl").addClass("slideInUp");
			$(".chance_style").css("display","none");
		});
//=======点击地址栏的取消按钮====================	
		$(".larea_cancel").click(function(){
			$(".area_ctrl").css("display","none");
			$(".area_ctrl").removeClass("slideInUp");
			$(".chance_style").css("display","flex");
		});		
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
		        var ans = this.address;
		        var ids='选择的对应的id'+this.ids;
		        alert(ans);
		        alert(ids);
		      //=======点击地址栏的确定按钮====================		
		        $(".addAddress_main li").eq(2).find("span").eq(1).html(ans);
				$(".area_ctrl").css("display","none");
				$(".area_ctrl").removeClass("slideInUp");
				$(".chance_style").css("display","flex");
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
module.exports=AddAddress;
