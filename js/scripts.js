$(document).ready(function() {
 
 
   $("a.scrollto").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 800,
         easing: "swing"
      });
      return false;
   });
 
 
});



 $(".citroen").click(function(){
      $(".form__1").addClass("show__form"); 
        $(".form__1").removeClass("close__form__func"); 
    });
    $(".close__form").click(function(){
      $(".form__1").addClass("close__form__func");
        $(".form__1").removeClass("show__form"); 
    });  
        
        $(".peugeot").click(function(){
      $(".form__2").addClass("show__form"); 
        $(".form__2").removeClass("close__form__func"); 
    });
    $(".close__form").click(function(){
      $(".form__2").addClass("close__form__func");
        $(".form__2").removeClass("show__form"); 
    });
            $(".reno").click(function(){
      $(".form__3").addClass("show__form"); 
        $(".form__3").removeClass("close__form__func"); 
    });
    $(".close__form").click(function(){
      $(".form__3").addClass("close__form__func");
        $(".form__3").removeClass("show__form"); 
    });
        $(".menu__button").click(function(){
            $(".menu__resp").addClass("show__menu");
            
            $(".menu__resp").removeClass("close__menu_s");
        });
        $(".close__menu").click(function(){
            $(".menu__resp").addClass("close__menu_s");
            $(".menu__resp").removeClass("show__menu");
        });


$(".menu__close-l").click(function(){
       $(".menu__resp").addClass("close__menu_s");
       $(".menu__resp").removeClass("show__menu");
    });