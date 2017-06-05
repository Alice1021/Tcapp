var React=require("react");
var ReactDOM=require("react-dom");
//var ProList=require("./ProList");
var MoreEval=React.createClass({
	getInitialState:function(){
		return{
			kindList:""
		}
	},
	backHandel:function(){
		/*console.log(this.props.type)
		alert(this.props.list)*/
		
		if(this.props.type=="home"){
			var Detail=require("./Detail");
			var DetailHeader=require("./DetailHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Detail type="home"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<DetailHeader type="home"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		}else if(this.props.list=="list"){
//			var list=this.props.list;
//			alert(list)
			var Detail=require("./Detail");
			var DetailHeader=require("./DetailHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Detail list="list"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<DetailHeader list="list"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		}else if(this.props.kind=="kind"){
//			var list=this.props.list;
//			alert(list)
			var Detail=require("./Detail");
			var DetailHeader=require("./DetailHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Detail kind="kind"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<DetailHeader kind="kind"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		}else if(this.props.cart=="cart"){
			var Detail=require("./Detail");
			var DetailHeader=require("./DetailHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Detail cart="cart"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<DetailHeader cart="cart"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		}else if(this.props.collect=="collect"){
			var Detail=require("./Detail");
			var DetailHeader=require("./DetailHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Detail collect="collect"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<DetailHeader collect="collect"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		}else if(this.props.myeval=="myeval"){
			var Detail=require("./Detail");
			var DetailHeader=require("./DetailHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Detail myeval="myeval"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<DetailHeader myeval="myeval"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		}
	},
	componentWillMount:function(){
		var that=this;
		
	},
	render:function(){
		return(
			<div className="moreEvalContent">
				<div className="myeval_header moreEval_header">
					<div className="left_myeval" id="goBack" onClick={this.backHandel}>
						<img src="img/back.png"/>
					</div>
					<div className="center_myeval"> 
						更多评价
					</div>
					<div className="right_myeval" id="goMessageBox">
						<img src="img/more_03.png"/>
						<ul className="messageBox">
							<li data-type="moreEval">
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
							<li data-type="moreEval">
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
							<li data-type="moreEval">
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
				<ul className="moreEval_main">
					<li>
						<p>
							<span><img src="img/moreEval_03.png"/></span>
							<span>王**牛</span>
						</p>
						<p>这是评价内容这是评价内容这是评价内容这是评价内容这是评价内容这是评价内容这是评价内容这是评价内容这是评价内容这是评价内容这是评价内容这是评价内容</p>
						<p>
							<span>2016-08-26</span>
							<span>规格：</span>
							<span>仪式</span>
							<span>数量：</span>
							<span>5000个</span>
						</p>
					</li>
					<li>
						<p>
							<span><img src="img/moreEval_03.png"/></span>
							<span>王**牛</span>
						</p>
						<p>这是评价内容这是评价内容这是评价内容这是评价内容这是评价内容这是评价内容这是评价内容这是评价内容这是评价内容这是评价内容这是评价内容这是评价内容</p>
						<p>
							<span>2016-08-26</span>
							<span>规格：</span>
							<span>仪式</span>
							<span>数量：</span>
							<span>5000个</span>
						</p>
					</li>
					<li>
						<p>
							<span><img src="img/moreEval_03.png"/></span>
							<span>王**牛</span>
						</p>
						<p>这是评价内容这是评价内容这是评价内容这是评价内容这是评价内容这是评价内容这是评价内容这是评价内容这是评价内容这是评价内容这是评价内容这是评价内容</p>
						<p>
							<span>2016-08-26</span>
							<span>规格：</span>
							<span>仪式</span>
							<span>数量：</span>
							<span>5000个</span>
						</p>
					</li>
				</ul>
			</div>
			
		)
	},
	componentDidMount:function(){
		var that=this;
		$("#goMessageBox").click(function(){
			$(".messageBox").css("display","block")
		});
		$(".myeval_main").click(function(){
			$(".messageBox").css("display","none");
		});
		$(".messageBox li").click(function(){
			var index=$(this).index();
			var list=that.props.list;
			var kind=that.props.kind;
			var type1=that.props.type;
			var cart=that.props.cart;
			var collect=that.props.collect;
			var myeval=that.props.myeval;
			if(index==0){
				var NewsCenter=require("./NewsCenter");
				var NewsCenterHeader=require("./NewsCenterHeader");
				ReactDOM.unmountComponentAtNode(document.getElementById("content"));
				ReactDOM.render(<NewsCenter type1={type1} list={list} kind={kind} cart={cart} collect={collect} myeval={myeval}/>,document.getElementById("content"));
				ReactDOM.unmountComponentAtNode(document.getElementById("header"));
				ReactDOM.render(<NewsCenterHeader type1={type1} list={list} kind={kind} cart={cart} collect={collect} myeval={myeval}/>,document.getElementById("header"));
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

	},
	componentDidUpdate:function(){

		
		
	}
});
module.exports=MoreEval;
