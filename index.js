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


