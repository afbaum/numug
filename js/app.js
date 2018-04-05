const today=new Date();
const conf=new Date(today.getFullYear(), 9, 17);

const days = Math.ceil((conf.getTime() - today.getTime())/(1000*60*60*24));


var para = document.createElement("P");
var t = document.createTextNode(days + ' Days');
para.appendChild(t);
document.getElementById("myDIV").appendChild(para);
