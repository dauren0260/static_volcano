$("#hamburgerIcon").click(function(){
    $(this).toggleClass("on");
    
    $(".product").toggleClass("on");
    $(".blog").toggleClass("on");
    $(".shop").toggleClass("on");
    $(".memberCenter").toggleClass("on");
    $("header").toggleClass("on");
})

$(window).resize(function(){
    $width = $(window).width(); 

    if( $width >= 767){
        $('nav li').removeClass("on");
        $("#hamburgerIcon").removeClass("on");
    }else{
        $('nav li').removeClass("show")
    }

})