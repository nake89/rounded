// console.log("loading");
// document.getElementById("box").innerHTML = randStr();

var asd = document.getElementById("dom-methods");
var methods = "";

// var debug = "";
// for (var m in document) {
  // console.log(typeof document[m]);
  // debug = typeof document[m];
  // if (typeof document[m] === "object" || typeof document[m] === "function") {
  //   methods += m + "<br>";
  // }
    // methods += m + "<br>";
// }
// asd.innerHTML = methods + debug;

var msg = "";
var els = document.all;
for (var i = 0; i < els.length; i++) {
  if (isRounded(els[i])) {
    msg += els[i].id + " " + els[i].style.background + "<br>";
    rounded(els[i],getBg(els[i]));
    // console.log(els[i].style.background);
  }
}

function isRounded(el) {
  var classes = el.className.split(" ");
  for (var i = 0; i < classes.length; i++) {
    if (classes[i] === "rounded") {
      return true;
    }
  }
}

function getBg(el) {
  var classes = el.className.split(" ");
  for (var i = 0; i < classes.length; i++) {
    if (classes[i].substr(0,3) === "bg-") {
      return classes[i];
    }
  }
}

function getClasses(el) {
  return el.className.split(" ");
}
asd.innerHTML = msg;

function rounded(original, bg) {
  var baseStyle = {display: "block"};
  var rtop = h("b", {className: "rtop siteBg", style: baseStyle });
  var rbottom = h("b", {className: "rbottom siteBg", style: baseStyle });
  var tempInner = original.innerHTML;
  original.innerHTML = "";

  rtop.appendChild(r(1, bg));
  rtop.appendChild(r(2, bg));
  rtop.appendChild(r(3, bg));
  rtop.appendChild(r(4, bg));
  rbottom.appendChild(r(4, bg));
  rbottom.appendChild(r(3, bg));
  rbottom.appendChild(r(2, bg));
  rbottom.appendChild(r(1, bg));
  original.appendChild(rtop);
  var content = h("span");
  content.innerHTML = tempInner;
  original.appendChild(content);
  original.appendChild(rbottom);
  // original.innerHTML = rtop.innerHTML + tempInner + rbottom.innerHTML;
}

function r(id, bg) {
  var cornerStyle = {display: "block", height: "1px", overflow: "hidden"};
  var rEl = h("b", {className: "r"+id + " "+bg, style: cornerStyle});
  if (id === 1) {
    rEl.style.margin = "0 5px";
  } else
  if (id === 2) {
    rEl.style.margin = "0 3px";
  } else
  if (id === 3) {
    rEl.style.margin = "0 2px";
  } else
  if (id === 4) {
    rEl.style.margin = "0 1px";
    rEl.style.height = "2px";
  }
  return rEl;
}

function appendStyles(el, style) {
  for (var prop in style) {
    if (style.hasOwnProperty(prop)) {
      el.style[prop] = style[prop];
    }
  }
}

// rounded(document.getElementById("box"));

function h(type, prop) {
  var el = document.createElement(type);
  if (prop) {
    if (prop.className) {
      el.className = prop.className;
    }
    if (prop.style) {
      appendStyles(el, prop.style);
      // el.style = prop.style;
      // if (prop.className === "rtop") {
      //   console.log(el.style);
      // }
    }
  }
  return el;
}

function div(className) {
  var el = document.createElement("div");
  el.className = className;
  return el;
}

function randStr() {
  return hexEncode(new Date().getTime());
}
function hexEncode(str){
  // console.log(str);
  // console.log(typeof str);
  str = String(str);
  // console.log(str);
  // console.log(typeof str);
    var hex, i;

    var result = "";
    for (i=0; i<str.length; i++) {
        hex = str.charCodeAt(i).toString(16);
        result += ("000"+hex).slice(-4);
    }

    return result
}
