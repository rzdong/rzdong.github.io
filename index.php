<!doctype html>
<html style="height: 100%;">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link href="css/jquery.slideBox.css" rel="stylesheet" type="text/css" />
<title>主页</title>
<style>
	* {
		margin: 0;
		padding: 0;
		font-family: "仿宋";
	}
	body {
		text-align: center;
		padding: 0;
		background:url(images/bg.jpg) top left repeat;
		background-size:cover;
		overflow: hidden;
		z-index: -2;
	}
	.head {
			margin: 0;
			width: 100%;
			height: 35px;
			position: absolute;
			top: 0;
			background-color: #111111;
			border-radius: 2%;
		}
	.shouye {
			margin: 0;
			width: 60px;
			height: 90%;
			position: relative;
			top: 0;
			left: 50px;

			
			margin-top: 0;
			margin-left: 0.5%;
		}
	.erye {
			color: #ff0000;
			font-size: 17px;
			position: relative;
			top: -24px;
			left: 135px;
			width: 100px;

	}
	.sanye {
			font-size: 17px;
			position: relative;
			top: -43px;
			left: 230px;
			color: #ffffff;
			width: 70px;
	}
	b {
		font-family: "仿宋";
		font-size: 20px;
		color: #ffffff;
		border: 800;
		position: relative;
		top: 6.5px;
		left: 2px;
	}
	b:hover {
		font-size: 21;
	}
	#img {
		position: relative;
		left: 43.5px;
		top: -16px;
	}
	.person {
		position: relative;
		top: -31.5px;
		left: -92px;
		color: #ffffff;
		font-size: 17px;
		width: 90px;
	}
	.imgqiu {
		position: relative;
		top: 0px;
		left: -5px;
	}
	.textsousuo {
		position: relative;
		left: -4px;
		top: -11px;
		font-size: 17px;
	}
	.input {
		position: relative;
		left: 4px;
		top: -12px;
	}
	.imgsousuo {
		position: relative;
		left: 4px;
		top: -5px;
	}
	.qiu {
		position: absolute;
		right: 50px;
		top: 0px;
	}
	.erye a ,.sanye a,.textsousuo a,.person a{
		text-decoration: none;
		color: #dddddd;
	}
	.erye a:hover ,.sanye a:hover,.textsousuo a:hover,.person a:hover{
		color: #ffffff;
		font-size: 19px;
	}


	.menu { 
font-family: arial, sans-serif; 
width:725px; 
margin:0 auto; 
margin-top: 75px;
z-index: 2;
} 
/* remove the bullets and set the margin and padding to zero for the unordered list */ 
.menu ul { 
padding:0; 
margin:0; 
list-style-type: none; 
} 
/* float the list so that the items are in a line and their position relative so that the drop down list will appear in the right place underneath each list item */ 
.menu ul li { 
float:left; 
position:relative; 
} 
/* style the links to be 104px wide by 30px high with a top and right border 1px solid white. Set the background color and the font size. */ 
.menu ul li a, .menu ul li a:visited { 
display:block; 
text-align:center; 
text-decoration:none; 
width:145px; 
height:35px; 
color:#fff; 
/*border:1px solid #fff; */
border-width:1px 1px 0 0; 
/*background:#c9c9a7;*/ 
line-height:30px; 
font-size:23px; 
} 
/* make the dropdown ul invisible */ 
.menu ul li ul { 
display: none; 
} 
/* specific to non IE browsers */ 
/* set the background and foreground color of the main menu li on hover */ 
.menu ul li:hover a { 
color:#fff; 
background:#5485f5; 
} 
/* make the sub menu ul visible and position it beneath the main menu list item */ 
.menu ul li:hover ul { 
display:block; 
position:absolute; 
top:31px; 
left:0; 
width:105px; 
} 
/* style the background and foreground color of the submenu links */ 
.menu ul li:hover ul li a { 
display:block; 
background:#eedeac; 
color:#000; 
} 
/* style the background and forground colors of the links on hover */ 
.menu ul li:hover ul li a:hover { 
background:#fff; 
color:#dd0000; 
} 	
.ab {
	position: relative;
	top: 100px;
height: 100%;
top: 0;
z-index: 2;
background-color: #aaaaaa;
}
		#container {
	position: absolute;
	height: 100%;
	width: 100%;
	z-index: -2;
}
#output {
	position: absolute;
	left: 0px;
	top: -479px;
}
.color{
	width: 120px;
	height: 20px;
	margin: 0 auto;
	position: fixed;
	left: 50%;
	margin-left: -60px;
	bottom: 20px;
}
.color li{
	float: left;
	margin: 0 5px;
	width: 20px;
	height: 20px;
	background: #ccc;
	box-shadow: 0 0 4px #FFF;
	list-style: none;
	cursor: pointer;
}
.color li:nth-child(1){
	background: #002c4a;
}
.color li:nth-child(2){
	background: #35ac03;
}
.color li:nth-child(3){
	background: #ac0908;
}
.color li:nth-child(4){
	background: #18bbff;
}
.table1 {
	position: relative;
	top: 55px;
	font-size: 3;
	color: #ffffff;
	text-align: center;
	width: 700px;
	height: 60px;
}
.table1 td {
	width: 33%;
	width: 25%;
	padding: 4px;
}
.table1 a {
	color: #ffffff;
}
</style>
<script>
		var timeInterval=1000;
		function function1(){
			var x=document.getElementById('top');
				x.src="image/botjiantou.png";
		}
		function function2(){
			var x=document.getElementById('top');
				x.src="image/topjiantou.png";
		}		
</script>
<script src="js/jquery.js"></script>
<script src="js/vector.js"></script>
<script src="js/jquery.min.js" type="text/javascript"></script>
<script src="js/jquery.slideBox.min.js" type="text/javascript"></script>
<script>
$(function(){
	// 初始化 传入dom id
	var victor = new Victor("container", "output");
	var theme = [
			["#002c4a", "#005584"],
			["#35ac03", "#3f4303"],
			["#ac0908", "#cd5726"],
			["#18bbff", "#00486b"]
		]
	$(".color li").each(function(index, val) {
		var color = theme[index];
		 $(this).mouseover(function(){
			victor(color).set();
		 })
	});
});
jQuery(function($){
	$('#demo1').slideBox();
	$('#demo2').slideBox({
		direction : 'top',//left,top#方向
		duration : 0.6,//滚动持续时间，单位：秒
		easing : 'linear',//swing,linear//滚动特效
		delay : 6,//滚动延迟时间，单位：秒
		startIndex : 1//初始焦点顺序
	});
	$('#demo3').slideBox({
		duration : 0.6,//滚动持续时间，单位：秒
		easing : 'linear',//swing,linear//滚动特效
		delay : 6,//滚动延迟时间，单位：秒
		hideClickBar : false,//不自动隐藏点选按键
		clickBarRadius : 10
	});
	$('#demo4').slideBox({
		hideBottomBar : true//隐藏底栏
	});
});
</script>
</head>	
<body style="height: 100%;">
	<div class="head">
    	<div class="shouye" onmouseover="function1()" onmouseleave="function2()">
    		<div class="shouye1">
    			<b>首页</b>
				<div id="img"><img src="image/topjiantou.png" id="top"></div>
			</div>
    	</div>
        <div class="erye">
        		<font><a href="#" style="color: #ff0000;">亲,请登陆</a></font>
        </div>
        <div class="sanye">
        		<font><a href="#">注册</a></font>
        </div>
        <div class="qiu">
        		
        		<img src="image/explort.png" width="35px" height="35px" class="imgqiu" id="imgqiu">
        		<font style="color: #ffffff" class="textsousuo"><a href="#">网上搜索:</a></font><input type="text" size="15" class="input">
        		<img src="image/sousuo.png" width="50" height="25" class="imgsousuo">
        		<div class="person"><a href="#">个人中心</a></div>
        </div>
    </div>
    <center>
    <div class="ab">
    
    <div class="menu"> 
		<ul> 
			<li><a class="hide" href="#">首页</a></li> 

			<li><a class="hide" href="#">最新</a> 
				<ul> 
					<li><a href="#" title="#">电商报</a></li> 
					<li><a href="#" title="#">行业资讯</a></li> 
					<li><a href="#" title="#">新闻门户</a></li> 
					<li><a href="#" title="#">阿里新闻</a></li> 
					<li><a href="#" title="#">网创电商</a></li> 
					<li><a href="#" title="#">新浪娱乐</a></li> 
					<li><a href="#" title="#">跨境交易</a></li> 
				</ul> 
			</li> 

			<li><a class="hide" href="#">查询</a> 
				<ul> 
					<li><a href="#" title="#">名企</a></li> 
					<li><a href="#" title="#">名人</a></li> 
					<li><a href="#" title="#">头条</a></li> 
					<li><a href="#" title="#">订单</a></li> 
					<li><a href="#" title="#">仓库</a></li> 
				</ul> 
			</li> 

			<li><a class="hide" href="#">资料管理</a> 
				<ul> 
					<li><a href="#" title="#">增加资料</a></li> 
					<li><a href="#" title="#">删除记录</a></li> 
					<li><a href="#" title="#">修改信息</a></li> 
					<li><a href="#" title="#">查询价格</a></li> 
				</ul> 
			</li> 

			<li><a class="hide" href="#">关于</a> 
				<ul> 
					<li><a href="#" title="#">开发者</a></li> 
					<li><a href="#" title="#">企业</a></li> 
					<li><a href="#" title="#">最近优惠</a></li> 
					<li><a href="#" title="#">版权</a></li> 
				</ul>
			</li> 
		</ul> 
		</div>
		</div>	
		
<div id="demo1" class="slideBox">
  <ul class="items">
    <li><a href="#" title="进军美国 优势开始出现？"><img src="img/1.jpg"></a></li>
    <li><a href="#" title="中国经济 发展论坛"><img src="img/2.jpg"></a></li>
    <li><a href="#" title="美国如何看待中国发展"><img src="img/3.jpg"></a></li>
    <li><a href="#" title="改革开放 经济巨变"><img src="img/4.jpg"></a></li>
    <li><a href="#" title="网络社交 不亚于他国"><img src="img/5.jpg"></a></li>
  </ul>
</div>
</center>
<center>
	<table class="table1">
		<tr>
			<td><a href="#">淘宝C店现“回潮”流</a></td>
			<td><a href="#">商家裁员80%</a></td>
			<td><a href="#">12306假期掉链子</a></td>
			<td><a href="#">网红经济何时休？</a></td>
		</tr>
		<tr>
			<td><a href="#">中手机印获追捧</a></td>
			<td><a href="#">华为为何能杀入美国？</a></td>
			<td><a href="#">EMS快递员被指撞人逃逸</a></td>
			<td><a href="#">小米告“雷军电动”</a></td>
		</tr>
		<tr>
			<td><a href="#">华人挤爆美奢特卖会</a></td>
			<td><a href="#">跨境电商vs海关新政</a></td>
			<td><a href="#">消费需要价比三家</a></td>
			<td><a href="#">北京搭上跨境快车</a></td>
		</tr>
	</table>
</center>
	<div id="container"><div id="output"></div></div>

		<ul class="color">
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>

	<!--图片切换-->
	<div class="imagechange">
		
	</div>
	<!--鼠标指针移动特效,需要js文件夹中的mymouse1文件夹名字边围mymouse生效-->
	<div style="text-align:center;clear:both">
	<script type="text/javascript" src="js/mymouse.js" id="mymouse"></script>
	</div>
      
</body>
</html>
