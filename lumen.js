/*! lumen.js (c) 2015 Oluwaseun Ogedengbe, MIT seun40.github.io/lumen.js/*/
console.log(Date.now()%86400000);
var sch = {};
sch[43200000] = new Uint8Array([-1,125,256]);
console.log(sch);
function lmn(){
    var day = Math.floor(Date.now()/1000)%86400,lt=[Math.floor(day/255),Math.floor(day/255)%255,Math.floor(day/255)],dk=[255-Math.floor(day/255),255-Math.floor(day/255),255-Math.floor(day/255)];
    //var lt=[day%255,day%255,day%255],dk=[255-(day%255),255-(day%255),255-(day%255)];
    document.body.setAttribute("style","background-color: rgb("+lt[0]+","+lt[1]+","+lt[2]+");color: rgb("+dk[0]+","+dk[1]+","+dk[2]+");");
    console.log("rgb("+lt[0]+","+lt[1]+","+lt[2]+")","rgb("+dk[0]+","+dk[1]+","+dk[2]+")");
    setTimeout(lmn,100);
} 
/*if (window.addEventListener) window.addEventListener("load", lmn, false);
else if (window.attachEvent) window.attachEvent("onload", lmn);
else window.onload = lmn;*/