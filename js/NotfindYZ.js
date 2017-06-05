var React=require("react");
var ReactDOM=require("react-dom");
var NotfindYZ=React.createClass({
	getInitialState:function(){
		return{
			
		}
	},
	
	componentWillMount:function(){
		var that=this;
		
	},
	loginHandel:function(){
		
	},
	render:function(){
		return(
			<div className="notfindYzContent">
				<p>如果无法获取验证码：</p>
				<p>1.检查您输入的手机号是否正确。</p>
				<p>2.检查您的手机是否通讯正常。</p>
				<p>3.致电全国客服热线400-6878-909。</p>
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


	},
	componentDidUpdate:function(){

		
		
	}
});
module.exports=NotfindYZ;
