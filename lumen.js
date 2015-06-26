function dJSAO() {
 var element = document.createElement("script");
 element.src = "defer.js";
 document.body.appendChild(element);
 }
 if (window.addEventListener)
 window.addEventListener("load", dJSAO, false);
 else if (window.attachEvent)
 window.attachEvent("onload", dJSAO);
 else window.onload = downloadJSAtOnload;
