jQuery(function($){
    if($(window).width()<767){
        $(".switch-row").removeClass("row-eq-height").addClass('row');
    }else{
        $(".switch-row").addClass("row-eq-height").removeClass('row');
    }

    $(window).resize(function(){
         if($(window).width()<767){
        $(".switch-row").removeClass("row-eq-height").addClass('row');
        }else{
            $(".switch-row").addClass("row-eq-height").removeClass('row');
        }
    })
})