$(function(){
    $(window).scroll(function() {
        $(".animateLeft").each(function() {
            var t = $(this).offset().top
            , o = $(window).scrollTop();
            t < o + 650 && $(this).addClass("animate__fadeInLeft")
        })
    }),
    $(window).scroll(function() {
        $(".animateRight").each(function() {
            var t = $(this).offset().top
            , o = $(window).scrollTop();
            t < o + 650 && $(this).addClass("animate__fadeInRight")
        })
    }),
    $(window).scroll(function() {
        $(".animateUp").each(function() {
            var t = $(this).offset().top
            , o = $(window).scrollTop();
            t < o + 650 && $(this).addClass("animate__fadeInUp")
        })
    }),
    $('#button').click(function(){
        $('#hidden-menu').fadeIn(500);
    })
    $('#close-button').click(function(){
        $('#hidden-menu').fadeOut(500);
    })
    $('.hidden-menu-a').click(function(){
        $('#hidden-menu').fadeOut(100);
    })
   
})