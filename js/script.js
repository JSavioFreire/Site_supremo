$(function(){
    var praia = $('.header2 .praia');
    var menupraia = $('#principal #painel .menu')
   
    praia.hover(function(){
        menupraia.slideToggle(150)
    })
    $('#painel').hover(function(e){
        e.stopPropagation();
    })
       
       
       
})
