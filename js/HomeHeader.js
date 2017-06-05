var React=require("react");
var ReactDOM=require("react-dom");
var HomeHeader=React.createClass({
	render:function(){
		return(
			<div className="homeHeader">
				<div className="left">
					<div className="map">
						<div className="left">
							<img src="img/icon_location.png"/>
						</div>
						<div className="right">
							郑州市
						</div>
					</div>
				</div>
				<div className="center" id="goSearch"> 
					<div className="search">
						<img src="img/icon_search.png"/>
					</div>
					<div className="input">
						<input type="text" placeholder="搜索天采商品与店铺" />
					</div>
					<div className="select" >
						<img src="img/select.png"/>
					</div>
				</div>
				<div className="right" id="goNewsCenter" data-type="home">
					<div className="img">
						<img src="img/icon_messages.png"/>
					</div>
					
				</div>
			  
			</div>
		)
	},
	componentDidMount:function(){
		var that=this;
		$("#goSearch").on("click",function(){
			var Search=require("./Search");
			var SearchHeader=require("./SearchHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Search type="home"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<SearchHeader type="home"/>,document.getElementById("header"));
			$("#footer").hide();
		})
		$(".select").on("click",function(){
			console.log("2222222")
			$("")
		})
		$("#goNewsCenter").click(function(){
			var type=$(this).attr("data-type")
			var NewsCenter=require("./NewsCenter");
			var NewsCenterHeader=require("./NewsCenterHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<NewsCenter />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<NewsCenterHeader type={type} />,document.getElementById("header"));
			$("#footer").hide();
		})
	},
});
module.exports=HomeHeader;
