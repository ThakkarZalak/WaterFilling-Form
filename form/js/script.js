$(function () {

            $(".field-wrapper .field-placeholder").on("click", function () {
                $(this).closest(".field-wrapper").find("input").focus();
            });
            $(".field-wrapper input").on("keyup", function () {
                var value = $.trim($(this).val());
                if (value) {
                    $(this).closest(".field-wrapper").addClass("hasValue");
                } else {
                    $(this).closest(".field-wrapper").removeClass("hasValue");
                }
            });

        });
 
var val = 0;
var email_fill=true;
var email_unfill=false;
var number_fill=true;
var number_unfill=false;


function validateFunc(result, ele, span, circle, water,v){
    var cnt=document.getElementById(circle);
    var percent=cnt.innerText;
    var water=document.getElementById(water);
    
    var interval;
  if(result==true){
        $(ele).css("border", "1px solid green")
        $("#"+span).css("color", "green")
        if (val<100) {
        val = val + v;
        alert(val);
        alert(v);
        interval=setInterval(function(){ 
            

            cnt.innerHTML = percent; 
            water.style.transform='translate(0'+','+(100-percent)+'%)';
            if(percent==val){
                clearInterval(interval);
            }
            percent++;
        },20);
        }
    }
    else{
        $(ele).css("border", "1px solid red")
        $("#"+span).css("color", "red")
        if (val>0 && val<=100) {
        val = val - v;
        interval=setInterval(function(){ 
             
            cnt.innerHTML = percent; 
            water.style.transform='translate(0'+','+(100-percent)+'%)';
            if(percent==val){

                clearInterval(interval);
            }
            percent--;
        },20);
        }
        
    }  
}
$( "#email" ).focusout(function() {
    var email = $(this).val();
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var result= re.test(String(email).toLowerCase());
    if(result==true && email_fill==true){
        validateFunc(result, $(this), "semail" , "count", "water",50)
        email_fill=false;
        email_unfill=true;
    }
    if(result==false && email_unfill==true){
        validateFunc(result, $(this), "semail" , "count", "water",50)
        email_fill=true;
        email_unfill=false;
        
    }
    if(result==false && email_unfill==false){
        validateFunc(result, $(this), "semail" , "count", "water",0)
    }
});
$( "#number" ).focusout(function() {
    var number = $(this).val();
    if(!isNaN (number) && number.length>=10 && number_fill==true){
        validateFunc(true, $(this), "num" , "count","water",50)
        number_fill=false;
        number_unfill=true;
    }
    if((isNaN (number)||number.length < 10) && number_unfill==true){
        validateFunc(false, $(this), "num" , "count","water",50)  
        number_fill=true;
        number_unfill=false; 
    }
    if((isNaN (number)||number.length < 10) && number_unfill==false){
        validateFunc(false, $(this), "num" , "count", "water",0)
    }
    
});

$(document).ready(function(){
    $(".second").hide()
    $("#prev").click(function(){
    $(".first").show();
    $(".second").hide();
    });
    $("#next").click(function(){
    $(".first").hide();
    $(".second").show();
    });
});
