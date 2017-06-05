var React=require("react");
var ReactDOM=require("react-dom");
var MainFooter=require("./MainFooter");
var Home=require("./Home");
var HomeHeader=require("./HomeHeader");
var Main=React.createClass({
	render:function(){
		return(
			<div id="rootBox">
			   <div id="header"></div>
			   <div id="content"></div>
			   <div id="footer"></div>
			</div>
			
		)
	}
	
});
ReactDOM.render(<Main/>,document.getElementById("app"));
ReactDOM.render(<HomeHeader/>,document.getElementById("header"));
ReactDOM.render(<Home/>,document.getElementById("content"));
ReactDOM.render(<MainFooter/>,document.getElementById("footer"));





