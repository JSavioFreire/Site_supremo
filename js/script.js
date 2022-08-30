$(function(){
    var praia = $('.header2 .praia');
    var menupraia = $('main #painel .praia2')
    abrirmenu();

    function abrirmenu(){
        praia.hover(function(){
            menupraia.fadeIn();
        })
    }
       
       
       
})
