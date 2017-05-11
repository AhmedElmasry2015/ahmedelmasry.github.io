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

  
});
 