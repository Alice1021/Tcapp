var React=require("react");
var ReactDOM=require("react-dom");
//var ProList=require("./ProList");
var TuiKuan=React.createClass({
	getInitialState:function(){
		return{
			kindList:""
		}
	},
	backHandel:function(){
		console.log(this.props.type)
		if(this.props.type=="myorder"){
			var OrderDetail=require("./OrderDetail");
			var OrderDetailHeader=require("./OrderDetailHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<OrderDetail type="myorder"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<OrderDetailHeader type="myorder"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		}else if(this.props.type=="refund"){
			var OrderDetail=require("./OrderDetail");
			var OrderDetailHeader=require("./OrderDetailHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<OrderDetail type="refund"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<OrderDetailHeader type="refund"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		}
	},
	componentWillMount:function(){
		var that=this;
		
	},
	render:function(){
		return(
			<div className="tuiKuanContent">
				<div className="tuikuan_header">
					<div className="left_tuikuan" id="goBack" onClick={this.backHandel}>
						<img src="img/back.png"/>
					</div>
					<div className="center_tuikuan"> 
						退款申请
					</div>
					<div className="right_tuikuan" id="goMessageBox">
						<img src="img/more_03.png"/>
						<ul className="messageBox">
							<li data-type="tuikuan">
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
							<li data-type="tuikuan">
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
							<li data-type="tuikuan">
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
				<div className="tuiKuan_main">
					<div className="title">退款申请提交后，我们将在24小时内帮您处理！</div>
					<textarea type="text" name="content" rows="12" placeholder="请输入退款说明">
						
					</textarea>
                    <div className="tijiao">提交申请</div> 
				</div>
				
			</div>
			
		)
	},
	componentDidMount:function(){
		var that=this;
//===========头部消息中心=================		
		$("#goMessageBox").click(function(){
			$(".messageBox").css("display","block")
		});
		$(".mypurse_main").click(function(){
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
//============点击提交按钮===========================
		$(".tijiao").click(function(){
			if(that.props.type=="myorder"){
				var OrderDetail=require("./OrderDetail");
				var OrderDetailHeader=require("./OrderDetailHeader");
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(<OrderDetail type="myorder" name="tuikuan_shenqing"/>,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<OrderDetailHeader type="myorder" name="tuikuan_shenqing"/>,document.getElementById("header"));
				$("#footer").hide();
				$("#header").hide();
			}else if(that.props.type=="refund"){
				var OrderDetail=require("./OrderDetail");
				var OrderDetailHeader=require("./OrderDetailHeader");
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(<OrderDetail type="refund" name="tuikuan_shenqing"/>,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<OrderDetailHeader type="refund" name="tuikuan_shenqing"/>,document.getElementById("header"));
				$("#footer").hide();
				$("#header").hide();
			}
		})
	},
	componentDidUpdate:function(){

		
		
	}
});
module.exports=TuiKuan;
