$(function(){
    var input = $( ".form input" );
    var value = input.val();
    input.blur(function(){
        if($(this).val() === ''){
            $(this).css("box-shadow","inset #d01c34 0px 0px 0px 1px");
            $(this).parent().find('.error').fadeIn().delay(1000).fadeOut();
        }else{
            $(this).css("box-shadow","inset #00ea2d 0px 0px 0px 1px");
        }
    });
    //Gestion des erreurs
    $( ".form" ).submit(function(e){
        input.each(function(){
            if($(this).val() === '') {
                $(this).css("box-shadow", "inset #d01c34 0px 0px 0px 1px");
                $(this).parent().find('.error').fadeIn().delay(1000).fadeOut();
            }
        });
        input.val('');
        input.css("box-shadow","none");
        $('.overlay-v').fadeIn().delay(1000).fadeOut();
        e.preventDefault();
    });

    $(".integer").keypress(function(e) {
        // Entre 0 et 9, ce scripte va vérifier qu'aucune entrée différente d'un nombre puisse s'afficher
        if ((e.which < 48 || e.which > 57) && e.which != 0 && e.which != 8 && e.which != 44 && e.which != 109 && e.which != 110  && e.which != 46 && e.which != 188 && e.which != 16 ){

            return(false);
        }
    });

});
