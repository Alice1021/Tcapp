var React=require("react");
var ReactDOM=require("react-dom");
var NewsCenterHeader=React.createClass({
	backHandel:function(){
//		console.log("222"+this.props.type);
//		var type=this.props.type;
//		console.log("11"+type);
		if(this.props.type=="home"){
			var Home=require("./Home");
			var HomeHeader=require("./HomeHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Home />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<HomeHeader />,document.getElementById("header"));
			$("#footer").show();
		}else if(this.props.type=="kind"){
			var Kind=require("./Kind");
			var KindHeader=require("./KindHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Kind />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<KindHeader />,document.getElementById("header"));
			$("#footer").show();
		}else if(this.props.type=="cart"){
			var Cart=require("./Cart");
			var CartHeader=require("./CartHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Cart />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<CartHeader />,document.getElementById("header"));
			$("#footer").show();
			$("#header").hide();
		}else if(this.props.type=="user"){
			var User=require("./User");
			var UserHeader=require("./UserHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<User />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<UserHeader />,document.getElementById("header"));
			$("#footer").show();
		}else if(this.props.type=="myOrder"){
			var MyOrder=require("./MyOrder");
			var MyOrderHeader=require("./MyOrderHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<MyOrder type="user" />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<MyOrderHeader />,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		}else if(this.props.type=="refund"){
			var Refund=require("./Refund");
			var RefundHeader=require("./RefundHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Refund type="user" />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<RefundHeader type="user"/>,document.getElementById("header"));
			$("#footer").show();
			$("#header").hide();
		}else if(this.props.type=="myeval"){
			var MyEval=require("./MyEval");
			var MyEvalHeader=require("./MyEvalHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<MyEval type="user" />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<MyEvalHeader type="user"/>,document.getElementById("header"));
			$("#footer").show();
			$("#header").hide();
		}else if(this.props.type=="collect"){
			var Collect=require("./Collect");
			var CollectHeader=require("./CollectHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Collect type="user" />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<CollectHeader type="user"/>,document.getElementById("header"));
			$("#footer").show();
			$("#header").hide();
		}else if(this.props.type=="mineziliao"){
			var MineZiliao=require("./MineZiliao");
			var MineZiliaoHeader=require("./MineZiliaoHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<MineZiliao type="user" />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<MineZiliaoHeader type="user"/>,document.getElementById("header"));
			$("#footer").show();
			$("#header").hide();
		}else if(this.props.type=="mypurse"){
			var Mypurse=require("./Mypurse");
			var MypurseHeader=require("./MypurseHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Mypurse type="user" />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<MypurseHeader type="user"/>,document.getElementById("header"));
			$("#footer").show();
			$("#header").hide();
		}else if(this.props.type=="voucherCenter"){
			var VoucherCenter=require("./VoucherCenter");
			var VoucherCenterHeader=require("./VoucherCenterHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<VoucherCenter type="mypurse" />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<VoucherCenterHeader type="mypurse"/>,document.getElementById("header"));
			$("#footer").show();
			$("#header").hide();
		}else if(this.props.type=="set"){
			var Set=require("./Set");
			var SetHeader=require("./SetHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Set type="user" />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<SetHeader type="user"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		}else if(this.props.type=="setmessage"){
			var SetMessage=require("./SetMessage");
			var SetMessageHeader=require("./SetMessageHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<SetMessage type="set" />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<SetMessageHeader type="set"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		}else if(this.props.type=="changeNumber"){
			var ChangeNumber=require("./ChangeNumber");
			var ChangeNumberHeader=require("./ChangeNumberHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<ChangeNumber type="set" />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<ChangeNumberHeader type="set"/>,document.getElementById("header"));
			$("#header").hide();
		}else if(this.props.type=="changePassword"){
			var ChangePassword=require("./ChangePassword");
			var ChangePasswordHeader=require("./ChangePasswordHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<ChangePassword type="set" />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<ChangePasswordHeader type="set"/>,document.getElementById("header"));
			$("#header").hide();
		}else if(this.props.type=="welcomeTucao"){
			var WelcomeTucao=require("./WelcomeTucao");
			var WelcomeTucaoHeader=require("./WelcomeTucaoHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<WelcomeTucao type="set" />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<WelcomeTucaoHeader type="set"/>,document.getElementById("header"));
			$("#header").hide();
		}else if(this.props.type=="detail"){
			var Detail=require("./Detail");
			var DetailHeader=require("./DetailHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Detail type="home" />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<DetailHeader type="home"/>,document.getElementById("header"));
			$("#header").hide();
		}else if(this.props.type1=="home"){
			var MoreEval=require("./MoreEval");
			var MoreEvalHeader=require("./MoreEvalHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<MoreEval type="home" />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<MoreEvalHeader type="home"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		}else if(this.props.list=="list"){
			var MoreEval=require("./MoreEval");
			var MoreEvalHeader=require("./MoreEvalHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<MoreEval list="list" />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<MoreEvalHeader list="list"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		}else if(this.props.type2=="home"){
			var Detail=require("./Detail");
			var DetailHeader=require("./DetailHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Detail type="home" />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<DetailHeader type="home"/>,document.getElementById("header"));
			$("#header").hide();
		}else if(this.props.list1=="list"){
			var Detail=require("./Detail");
			var DetailHeader=require("./DetailHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Detail list="list"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<DetailHeader list="list"/>,document.getElementById("header"));
			$("#header").hide();
		}else if(this.props.kind=="kind"){
			var MoreEval=require("./MoreEval");
			var MoreEvalHeader=require("./MoreEvalHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<MoreEval kind="kind"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<MoreEvalHeader kind="kind"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		}else if(this.props.kind1=="kind"){
			var Detail=require("./Detail");
			var DetailHeader=require("./DetailHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Detail kind="kind"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<DetailHeader kind="kind"/>,document.getElementById("header"));
			$("#header").hide();
		}else if(this.props.cart2=="cart"){
			var Detail=require("./Detail");
			var DetailHeader=require("./DetailHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Detail cart="cart"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<DetailHeader cart="cart"/>,document.getElementById("header"));
			$("#header").hide();
		}else if(this.props.cart=="cart"){
			var MoreEval=require("./MoreEval");
			var MoreEvalHeader=require("./MoreEvalHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<MoreEval cart="cart"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<MoreEvalHeader cart="cart"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		}else if(this.props.type=="orderdetail"){
			var OrderDetail=require("./OrderDetail");
			var OrderDetailHeader=require("./OrderDetailHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<OrderDetail type="myorder"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<OrderDetailHeader type="myorder"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		}else if(this.props.type=="tuikuan"){
			var TuiKuan=require("./TuiKuan");
			var TuiKuanHeader=require("./TuiKuanHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<TuiKuan type="orderdetail" />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<TuiKuanHeader type="orderdetail" />,document.getElementById("header"));
			$("#header").hide();
			$("#footer").hide();
		}else if(this.props.type=="ordereval"){
			var OrderEval=require("./OrderEval");
			var OrderEvalHeader=require("./OrderEvalHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<OrderEval type="myorder"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<OrderEvalHeader type="myorder"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		}else if(this.props.collect1=="collect"){
			var Detail=require("./Detail");
			var DetailHeader=require("./DetailHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Detail collect="collect"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<DetailHeader collect="collect"/>,document.getElementById("header"));
			$("#header").hide(); 
		}else if(this.props.collect=="collect"){
			var MoreEval=require("./MoreEval");
			var MoreEvalHeader=require("./MoreEvalHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<MoreEval collect="collect"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<MoreEvalHeader collect="collect"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		}else if(this.props.type=="changename"){
			var ChangeName=require("./ChangeName");
			var ChangeNameHeader=require("./ChangeNameHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<ChangeName type="mineziliao" />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<ChangeNameHeader type="mineziliao" />,document.getElementById("header"));
			$("#header").hide();
			$("#footer").hide();
		}else if(this.props.type=="changeaddress"){
			var ChangeAddress=require("./ChangeAddress");
			var ChangeAddressHeader=require("./ChangeAddressHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<ChangeAddress type="mineziliao" />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<ChangeAddressHeader type="mineziliao" />,document.getElementById("header"));
			$("#header").hide();
			$("#footer").hide();
		}else if(this.props.type=="editoraddress"){
			var EditorAddress=require("./EditorAddress");
			var EditorAddressHeader=require("./EditorAddressHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<EditorAddress type="changeaddress" />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<EditorAddressHeader type="changeaddress" />,document.getElementById("header"));
			$("#header").hide();
			$("#footer").hide();
		}else if(this.props.type=="addaddress"){
			var AddAddress=require("./AddAddress");
			var AddAddressHeader=require("./AddAddressHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<AddAddress type="changeaddress" />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<AddAddressHeader type="changeaddress" />,document.getElementById("header"));
			$("#header").hide();
			$("#footer").hide();
		}else if(this.props.type=="balance"){
			var Balance=require("./Balance");
			var BalanceHeader=require("./BalanceHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Balance type="mypurse" />,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<BalanceHeader type="mypurse" />,document.getElementById("header"));
			$("#header").hide();
			$("#footer").hide();
		}else if(this.props.type=="mingxi"){
			var MingXi=require("./MingXi");
			var MingXiHeader=require("./MingXiHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<MingXi type="balance"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<MingXiHeader type="balance" />,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide();
		}else if(this.props.myeval1=="myeval"){
			var Detail=require("./Detail");
			var DetailHeader=require("./DetailHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<Detail myeval="myeval"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<DetailHeader myeval="myeval"/>,document.getElementById("header"));
			$("#header").hide(); 
		}else if(this.props.myeval=="myeval"){
			var MoreEval=require("./MoreEval");
			var MoreEvalHeader=require("./MoreEvalHeader");
			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
			ReactDOM.render(<MoreEval myeval="myeval"/>,document.getElementById("content"));
			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
			ReactDOM.render(<MoreEvalHeader myeval="myeval"/>,document.getElementById("header"));
			$("#footer").hide();
			$("#header").hide(); 
		}else if(this.props.refund=="refund"){
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
	render:function(){
		return(
			<div className="newsCenterHeader">
				<div className="left_news" id="goBack" onClick={this.backHandel} data-type="newsCenter">
					<img src="img/back.png"/>
				</div>
				<div className="center_news"> 
					消息中心
				</div>

			</div>
		)
	},
	componentDidMount:function(){
//		$("#goBack").click(function(){
////			console.log("eeeeee");
//			$("#footer ul li").eq(0).trigger("click")
//			var Home=require("./Home");
//			var HomeHeader=require("./HomeHeader");
//			ReactDOM.unmountComponentAtNode(document.getElementById("content"));
//			ReactDOM.render(<Home />,document.getElementById("content"));
//			ReactDOM.unmountComponentAtNode(document.getElementById("header"));
//			ReactDOM.render(<HomeHeader />,document.getElementById("header"));
//			$("#header").show();
//			$("#footer").show();
//		});
		
	}
});
module.exports=NewsCenterHeader;
