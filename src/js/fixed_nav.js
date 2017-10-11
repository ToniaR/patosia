    document.onscroll = (function (event) {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        console.log(scrollTop);
       if ($(window).scrollTop() >= 2850) {
        if(!$('.fixed-nav').hasClass('fixed-nav--hidden')){
             $('.fixed-nav').addClass('fixed-nav--hidden');
        }
    }
    else {
        if($('.fixed-nav').hasClass('fixed-nav--hidden')){
            $('.fixed-nav').removeClass('fixed-nav--hidden');
        }
    } 
        
    });


    //scroll

    $('a[href^="#"]').click(function(){
//Сохраняем значение атрибута href в переменной:
var target = $(this).attr('href');
$('html, body').animate({scrollTop: $(target).offset().top}, 120);
return false;
});   
   