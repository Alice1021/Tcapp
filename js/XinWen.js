var React=require("react");
var ReactDOM=require("react-dom");
//var ProList=require("./ProList");
var XinWen=React.createClass({
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
			<div className="xinWenContent">
				<ul className="newsList">
					<li data-type="xinwen">
						<div className="nl_newsLogo">
							<div className="nln_text">通知</div>
						</div>
						<div className="nl_newsMain">
							<div className="nln_title">
								<div className="nlnt_h3">这是新闻标题</div>
								<div className="nlnt_time">12:30</div>
							</div>
							<div className="nln_maintxt">
								这是消息内容这是消息内容这是消息内容这是消息内容这是消息内容这是消息内容这是消息内容这是消息内容
							</div>
						</div>
					</li>
					<li data-type="xinwen">
						<div className="nl_newsLogo">
							<div className="nln_text">通知</div>
						</div>
						<div className="nl_newsMain">
							<div className="nln_title">
								<h3 className="nlnt_h3">这是新闻标题</h3>
								<div className="nlnt_time">12:30</div>
							</div>
							<div className="nln_maintxt">
								这是消息内容这是消息内容这是消息内容这是消息内容这是消息内容这是消息内容这是消息内容这是消息内容
							</div>
						</div>
					</li>
				</ul>
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
module.exports=XinWen;
