$(function(){
    var praia = $('.header2 .praia');
    var menupraia = $('main #painel .praia2')
    var fit = $('.header2 .fitness')
    var menufit = $('main #painel .fitness2')
    var night = $('.header2 .night')
    var menunight = $('main #painel .night2')
    

    //nao estou chamando a funcao abrir dos menus


    //menu pc
    function abrirmenupraia(){
        praia.hover(function(){
            menupraia.fadeIn(50);
            })
        menupraia.hover(function(e){
            e.stopPropagation();
        })
        $('header, #painel, header2, .menu').hover(function(){
            menupraia.fadeOut(50);
            }) 
        }


        
        function abrirmenufit(){
            fit.hover(function(){
                menufit.fadeIn(50);
                })
            menufit.hover(function(e){
                e.stopPropagation();
            })
            $('header, #painel, header2 .menu').hover(function(){
                menufit.fadeOut(50);
                }) 
            }

    
        function abrirmenunight(){
            night.hover(function(){
                menunight.fadeIn(50);
                })
            menunight.hover(function(e){
                e.stopPropagation();
            })
            $('header, #painel, header2 .menu').hover(function(){
                menunight.fadeOut(50);
                }) 
            }
       
       



            //menumobile
    
    var menuburguer = $('.header1 #menuburguer');
    var menumobile = $('#painel #menumobile')
    menuburguer.click(function(){
        menumobile.slideToggle();
    })
       
})
