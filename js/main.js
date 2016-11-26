$(document).ready(function(){
    
    $("#home button").on("click",function(){$("#home").hide(0.5,function(){$(".contenido").show('fast')})
    }) 
    
    $("#newhome").click(function(){
          // $(".contenido").fadeOut("slow");
        $("#home").slideToggle(0.5,function(){$(".contenido").hide()})
          // $("#home").slideDown("slow",function(){$(".contenido").hide()})
    })

    $("i.fa.fa-bars").on("click",function(){$("aside ul").toggleClass("mostrar")})
  
})
  






$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



//  $(".fa.fa-github").click(function(){
//         $(".fa.fa-html5").css({"left": "12px", "top": "23px"});
//         $(".jade").css({"top": "-13px", "left": "138px"});
//         $(".fa.fa-css3").css({"right": "26px", "top": "23px"});
// })


// $(document).ready(function(){
 
//   $("ul li:nth-child(2)").on("click",function(){$(".about").slideDown("slow")});//no corre con id?
//   $("ul li:nth-child(3)").on("click",function(){$(".portfolio").slideDown("slow")});
  
//   })


// $("ul li:nth-child(2)").on("click",function(){$("#about").show().addClass("animated slideInDown")});
//   $("ul li:nth-child(3)").on("click",function(){$("#portfolio").show().addClass("animated slideInDown")});