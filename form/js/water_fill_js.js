// var cnt=document.getElementById("count"); 
// var water=document.getElementById("water");
// var percent=cnt.innerText;
// var interval;
// var val=0;

// function clickFunc()
// { if(val<100){	
//   val=val+10;
//   interval=setInterval(function(){ 
//   percent++; 
//   cnt.innerHTML = percent; 
//   water.style.transform='translate(0'+','+(100-percent)+'%)';
//   if(percent==val){
//     clearInterval(interval);
//   }
// },20);
// }	
// }
var cnt=document.getElementById("count"); 
var water=document.getElementById("water");
var percent=cnt.innerText;
var interval;
interval=setInterval(function(){ 
  percent++; 
  cnt.innerHTML = percent; 
  water.style.transform='translate(0'+','+(100-percent)+'%)';
  if(percent==100){
    clearInterval(interval);
  }
},60);