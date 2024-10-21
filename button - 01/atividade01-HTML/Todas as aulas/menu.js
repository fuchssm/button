document.addEventListener("DOMContentLoaded", function(){

    const menuIcon = document.querySelector('.menu-icon');
    const sidebar = document.querySelector('.sidebar');

    //Alterna a exibição do menu quando o ícone foi clicado
    menuIcon.addEventListener('click', function(){
        if(sidebar.style.transform === 'translateX(0%)'){
            sidebar.style.transform = 'translateX(-100%)';
        }else{
            sidebar.style.transform = 'translateX(0%)'
        }
    });
        window.addEventListener('resize', function(){
            const windowWidth = window.innerWidth;
            const sidebarWidth = sidebar.offsetWidth;
        
            //Verifica se a largura da tela é maior ou igual a 768px
        
            if(windowWidth >= 768 ){
                 
                //Mostra o menu vertical se a tela for grande
        
                sidebar.style.transform = 'traslateX(0%)'
            }else{
                //Esconde o menu vertical se a tela for menor
                sidebar.style.transform = 'tartraslateX(-100%)'
                }
            })
        
    });

