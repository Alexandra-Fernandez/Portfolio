$(document).ready(function(){
    
    $("#home button").on("click",function(){$("#home").hide(0.5,function(){$(".contenido").show('fast')})
    }) 
    
    $("#newhome").click(function(){
        $("#home").slideToggle(0.5,function(){$(".contenido").hide()})
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

