// 跨浏览器添加事件绑定1
/*function addEvent (obj,type,fn) {
	if (typeof obj.addEventListener != "undefined") {
		obj.addEventListener(type,fn,false);
	} else if (typeof obj.attachEvent != "undefined") {
		obj.attachEvent("on" + type,function() {
			fn.call(obj,window.event);
		});
	}
}

// 跨浏览器添加事件绑定2 IE端传统模拟现代绑定
function addEvent (obj,type,fn) {
	if (typeof obj.addEventListener != "undefined") {
		obj.addEventListener(type,fn,false);
	} else {
		alert(addEvent.ID);
		addEvent.ID++;
	}

}
// 为每个事件分配一个计数器实现顺序累加
addEvent.ID = 1;




*/
/*....................................................*/
// 跨浏览器添加事件绑定3
function addEvent (obj,type,fn) {
	if (typeof obj.addEventListener != "undefined") {
		obj.addEventListener(type,fn,false);
	} else {
		// 给obj添加events属性 创建哈希表存放各个事件处理函数但无顺序
		if (!obj.events) obj.events = {};
		// 第一次执行时执行
		if (!obj.events[type]) {
			// 创建存放事件处理函数的数组
			obj.events[type] = [];
			// 把第一次的事件处理函数先储存到第一个位置
			if (obj["on" + type]) obj.events[type][0] = fn;
		} else {
			// 同一个注册函数进行屏蔽
			if (addEvent.equal(obj.events[type],fn)) {
				return false;
			}
		}
		// 从第二次开始我们用事件计数器来存储
		obj.events[type][addEvent.ID++] = fn;
		// 执行事件处理函数
		obj["on" + type] = addEvent.exec;

	}

}
// 为每个事件分配一个计数器实现顺序累加
addEvent.ID = 1;

// 执行事件处理函数
addEvent.exec = function (event) {
	var e = event ||addEvent.fixEvent(window.event);
	var es = this.events[e.type];
	for (var i in es) {
		es[i].call(this,e);
	}
}

// 同一个注册函数进行屏蔽
addEvent.equal = function (es,fn) {
	for (var i in es) {
		if (es[i] == fn) return true;
	}
	return false;
}


// 跨浏览器删除事件绑定
function removeEvent (obj,type,fn) {
	if (typeof obj.removeEventListener != "undefined") {
		obj.removeEventListener (type,fn,false);
	} else {
		if (obj.events) {
			for(var i in obj.events[type]) {
				if (obj.events[type] [i]== fn) {
					delete obj.events[type] [i];
				}
			}
		}

	}
}

// 把IE常用的Event对象配对到W3C中
addEvent.fixEvent = function (event) {
	event.preventDefault = addEvent.fixEvent.preventDefault;
	event.stopPropagation = addEvent.fixEvent.stopPropagation;
	event.target = event.srcElement;
	return event;
}

// IE阻止默认行为
addEvent.fixEvent.preventDefault =function () {
	this.returnValue = false;
}

// IE取消冒泡
addEvent.fixEvent.stopPropagation = function () {
	this.cancelBubble = true ;
}

/*....................................................*/








// 跨浏览器获取视口大小
function getInner() {
	if (typeof window.innerWidth != "undefined") {
		return {
			width:window.innerWidth,
			height:window.innerHeight
		}
	} else {
		return{
			width:document.documentElement.clientWidth,
			height:document.documentElement.clientHeight
		}
	}
}


// 跨浏览器获取Style
function getStyle(element,attr) {
		if (typeof window.getComputedStyle !=="undefind") {//w3c
			return window.getComputedStyle(element,null)[attr];
		} else if (typeof element.currentStyle != "undefind") {//ie
			return element.currentStyle[attr];
		};
}


// 判断class是否存在
function hasClass (element,className) {
	return element.className.match(new RegExp("(\\s|^)" +className+ "(\\s|$)"));
}


// 跨浏览器添加LINK规则
function insetRule (sheet,selectorText,cssText,position) {
	if (typeof sheet.insertRule != "undefind") {//标准方法
		sheet.insertRule(selectorText + "{"+cssText+"}",position);
	} else if (typeof sheet.addRule != "undefind") {//ie方法
		sheet.addRule(selectorText,cssText,position);
	}
}



/*
// 获取event对象
function getEvent (event) {
	return event ||window.event;
}

// 阻止默认行为
function preDef(event) {
	var e = getEvent(event);
	if (typeof e.preventDefault != "undefind") {//w3c
		e.preventDefault();
	} else {//IE
		e.returnValue =false;
	}
}



*/







