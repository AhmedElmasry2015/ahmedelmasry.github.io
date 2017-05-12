$(function(){
    'use strict';
    $(window).scroll(function(){
    var navbar=$('.navbar').height();
    if($(window).scrollTop() >= navbar){
        $('.navbar').addClass("scrolled");
        $('.navbar').addClass("navbar-fixed-top");
        
    }
    
    else{
        $('.navbar').removeClass("scrolled");
        $('.navbar').removeClass("navbar-fixed-top");
        
    }
    });
  $(".b1").hover(function(){
        $("#div1").fadeToggle(3000);
    });
  
  $(".b2").hover(function(){
        $("#div2").fadeToggle(3000);
        
    });
  
  $(".b3").hover(function(){
        $("#div3").fadeToggle(3000);
    });
  
});
 