$(document).ready(function(){

//** MENU LATERAL **//
  function menuScroll(){
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
    menuScroll();  
  };
  menuScroll();

//** BUTTONS TYPES **//
  $(".menu-marcas > div").click(function(){
    newClass = $(this).attr("newclass");
    $("head #linkcss").attr("href","css/"+newClass+"/bootstrap.min.css");




    if(newClass == "saas"){
      $(".drop-box i, .drop-box div").removeClass(
        'color1 color2 color3 color4 color5 color6 color7 color8 color9 color10 color11 color12 color13 color14 color15 color16 color17 color18 color19 color20'
      ).addClass('color2');

      $("#cards .card-count").removeClass(
        'bgColor1 bgColor2 bgColor3 bgColor4 bgColor5 bgColor6 bgColor7 bgColor8 bgColor9 bgColor10 bgColor11 bgColor12 bgColor13 bgColor14 bgColor15 bgColor16 bgColor17 bgColor18 bgColor19 bgColor20'
      ).addClass('bgColor2');
    }




    if(newClass == "mkt-digital"){
      $(".drop-box i, .drop-box div").removeClass(
        'color1 color2 color3 color4 color5 color6 color7 color8 color9 color10 color11 color12 color13 color14 color15 color16 color17 color18 color19 color20'
      ).addClass('color3');

      $("#cards .card-count").removeClass(
        'bgColor1 bgColor2 bgColor3 bgColor4 bgColor5 bgColor6 bgColor7 bgColor8 bgColor9 bgColor10 bgColor11 bgColor12 bgColor13 bgColor14 bgColor15 bgColor16 bgColor17 bgColor18 bgColor19 bgColor20'
      ).addClass('bgColor3');
    }




    if(newClass == "remanescentes"){
      $(".drop-box i, .drop-box div").removeClass(
        'color1 color2 color3 color4 color5 color6 color7 color8 color9 color10 color11 color12 color13 color14 color15 color16 color17 color18 color19 color20'
      ).addClass('color6');

      $("#cards .card-count").removeClass(
        'bgColor1 bgColor2 bgColor3 bgColor4 bgColor5 bgColor6 bgColor7 bgColor8 bgColor9 bgColor10 bgColor11 bgColor12 bgColor13 bgColor14 bgColor15 bgColor16 bgColor17 bgColor18 bgColor19 bgColor20'
      ).addClass('bgColor6');
    }



  });


  $('button, a').addClass('text-uppercase');

//** BOOTSTRAP CARDS **//
  bootcards.init( {
    offCanvasBackdrop : true,
    offCanvasHideOnMainClick : true,
    enableTabletPortraitMode : true,
    disableRubberBanding : true,
    disableBreakoutSelector : 'a.no-break-out'
    });

  //** FORMS  **//



  /**********************/
  // $(".menu-marcas > div").click(function(){
  //   newClass = $(this).attr("newclass");    
  //   $("#buttons .btn-types .btn-success").removeClass('saas mkt-digital remanescentes').addClass(newClass);
  // });  

  /**********************/
  // $( ".saas" ).click(function() {
  //   $("#buttons .btn-types .btn-success").addClass("saas");
  //   $("#buttons .btn-types .btn-success").removeClass("mkt-digital");
  //   $("#buttons .btn-types .btn-success").removeClass("remanescentes");
  // });

  // $( ".mkt-digital" ).click(function() {
  //   $("#buttons .btn-types .btn-success").addClass("mkt-digital");
  //   $("#buttons .btn-types .btn-success").removeClass("saas");
  //   $("#buttons .btn-types .btn-success").removeClass("remanescentes");
  // });

  // $( ".remanescentes" ).click(function() {
  //   $("#buttons .btn-types .btn-success").addClass("remanescentes");
  //   $("#buttons .btn-types .btn-success").removeClass("saas");
  //   $("#buttons .btn-types .btn-success").removeClass("mkt-digital");
  // });



});
