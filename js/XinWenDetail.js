var React=require("react");
var ReactDOM=require("react-dom");
//var ProList=require("./ProList");
var XinWenDetail=React.createClass({
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
			<div className="xinWenDetailContent">
				<div className="title">
					“天采之音 相约未来”2017广告人创新论坛郑州举行
				</div>
				<div className="detail_time">
					<span>2017年01月16日14:42  </span>
					<span>来源：人民网-河南频道</span>
				</div>
				<div className="detail_img">
					<img src="img/xinwen_detail_03.jpg"/>
				</div>
				<p>
					人民网郑州1月16日电（智泓）2017广告业将会有什么新变化？
					2016年的广告业又有哪些“可圈可点”？
					未来，广告业将会面临什么样的机遇与挑战？……1月15日，
					“天采之音，相约未来”2017广告人创新论坛郑州举行。
				</p>
				<p>
					郑州大学美术学院柯方明、河南标识行业协会会长王鹏、河南广告传媒业商会会长刘延坤等众多河南广告业大咖，
					亮相论坛并发言。
				</p>
				<p>
					围绕广告业的过去和未来，论坛一致认为，为顺应文化体制改革和媒体融合大趋势，
					探索广告行业发展路径，打造广告人商城和天采广告商城双平台战略，
					结合B2B、B2C、O2O与一体全新B2B2B2C电商生态产业链模式，是大势所趋；“站点—供货—入驻商家—区域配送”四位一体的结合思路，
					形成完整电商生态模式，
					填补了目前国内广告行业电商平台空白，成为广告行业“淘宝网”。
				</p>
				
			</div>
			
		)
	},
	componentDidMount:function(){
		
		
	},
	componentDidUpdate:function(){

		
		
	}
});
module.exports=XinWenDetail;
