$(document).ready(function(){

  function teste(){
    var y = $(window).scrollTop();
    //console.log(y);

    if(y > 250){ 
      $('.menu-lateral').addClass('affix');  
      $('.menu-lateral').addClass('menu-lateral-stop');
    }   
    if(y < 250){ 
      $('.menu-lateral').removeClass('affix');  
      $('.menu-lateral').removeClass('menu-lateral-stop');        
    }
  }
  // MENU LATERAL
  window.onscroll=function(){
    teste();  
  };
  teste();

});
