$(function(){
    
    $(window).on('load', function(){
       
        setTimeout(function(){
            $(".one").hide();
        }, 3550);

        setTimeout(function(){
            $(".loader").fadeOut();
        }, 3500);

        setTimeout(function(){
            $(".loader").fadeOut();
            $(".wrapper-all").show();
        }, 3500);
    });
});