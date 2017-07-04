var e = document.getElementById("yingbo");
var f = e.getElementsByTagName("div");

var i = 0;
function t() {
	f[i].style.animationName= "donghua";
	i= i+1;
	if (i < f.length) {
		setTimeout("t()",i*10);
	} else {
		return;
	}
}
t();



// function t() {
// 	if (i > f.length) {
// 	return ;
// 	}else{
// 		f[i].style.animationName= "donghua";
// 		i= i+1;
// 		setTimeout("t()",i*10);
// 		}

// 	}




/*
setTimeout(
	function(){
		for (var i = 0; i<arry.length; i++){
			arry[i].style.animationName = "donghua";
		}
	},1000);
*/



// window.onload = function () {
// 	// 下拉菜单
// 	$().getClass("member").hover(function() {
// 		$().getClass("wode").css("background","url(images/jiantou_h.png) no-repeat 34px center");
// 		$().getClass("myicon").css("background","url(images/my_h.png)");
// 		$().getClass("wode").css("color","#f8b551");
// 		$().getTagName("ul").show();
// 	},function() {
// 		$().getClass("wode").css("background","url(images/jiantou_1.png) no-repeat 34px center");
// 		$().getClass("myicon").css("background","url(images/my_1.png)");
// 		$().getTagName("ul").hide();
// 		$().getClass("wode").css("color","#fff");

// 	})

// 	// 登陆控件
// 	$().getClass("log").hover(function() {
// 		$().getClass("log_icon").css("background","url(images/login_h.png)");
// 		$().getClass("denglu").css("color","#f8b551");
// 	},function() {
// 		$().getClass("log_icon").css("background","url(images/login_1.png)");
// 		$().getClass("denglu").css("color","#fff");
// 	});


// 	// 登陆窗开启分__零散写法
// /*	$().getClass("log").click(function(){
// 		$().getId("login").css("display","block");
// 		$().getId("lock").css("display","block");
// 	});
// 	// 登陆窗口关闭
// 	$().getClass("clo").click(function() {
// 		$().getId("login").css("display","none");
// 		$().getId("lock").css("display","none");
// 	});*/

// 	// 登陆窗与锁屏__紧凑写法
// 	var login = $().getId("login");
// 	var lock = $().getId("lock");
// 	// 居中及窗口变化限制
// 	login.center(520,410).resize(function(){
// 		if (login.css("display") == "block") {
// 			lock.show();
// 		}
// 	});

// 	// 登陆窗与锁屏
// 	$().getClass("log").click(function() {
// 		login.show();
// 		lock.show();
// 	});
// 	$().getClass("clo").click(function() {
// 		login.hide();
// 		lock.hide();
// 	});

// 	// 拖动窗口
// 	login.drag();



// };





















