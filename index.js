var oxunhuan = document.getElementById("xunhuan");
var oshunxu = document.getElementById("shunxu");

var oprve = document.getElementById("prve");
var onext = document.getElementById("next");

var omus = document.getElementById("mus");
var otxt = document.getElementById("txt");

var oshiyan = document.getElementById("shiyan");
var ospan = oshiyan.getElementsByTagName("span");
var oli = oshiyan.getElementsByTagName("li");

var odiv = document.getElementById("pct")

var oimges_k = document.getElementById("imges_k");
var arrurl = ["images/qie (1).jpg", "images/qie (2).jpg", "images/qie (3).jpg", "images/qie (4).jpg"];
var arrname = ["图片一", "图片二", "图片三", "图片四"];

var onum = 0;
var oldli = null;

// 定时器开始
var timer = null;
function anment() {
	timer = setInterval(function() {
		oli[onum].className = "";
		onum++;
		onum%=arrurl.length;
		start();
	},1000)
}
setTimeout(anment,1000);
odiv.onmouseover = function () {
	clearInterval(timer);
}
odiv.onmouseout = anment;

// 定时器结束


// 初始化开始
function start() {
	otxt.innerHTML = arrname[onum];
	omus.innerHTML = onum+1 + "/" + arrurl.length;
	oimges_k.src = arrurl[onum];
	oli[onum].className = "active";
	oldli = oli[onum];
}
start();

// 初始化结束

// 上下按钮开始
onext.onclick = function() {
	oli[onum].className = "";
	onum++;
	if (onum > arrurl.length-1 ) {
		onum = 0;
	}
	start();
}

oprve.onclick = function() {
	oli[onum].className = "";
	onum--;
	if (onum <= -1 ) {
		onum = arrurl.length-1;
	}
	start();
}

// 上下按钮结束

// 导航点开始
for (var i = 0; i < arrurl.length; i++) {
	ospan[i].style.backgroundImage = "url('"+arrurl[i]+"')";
	oli[i].index = i;
	oli[i].onmouseover = function () {
		ospan[this.index].style.display = "block";
	}
	oli[i].onmouseout = function () {
		ospan[this.index].style.display = "none";
	}
	oli[i].onclick = function () {
		oimges_k.src = arrurl[this.index];
		omus.innerHTML = this.index + 1 +"/"+arrurl.length;
		otxt.innerHTML = arrname[this.index];

		onum = this.index;

		oldli.className = "";
		oldli = this;
		this.className = "active";
	}
}

// 导航点结束
































