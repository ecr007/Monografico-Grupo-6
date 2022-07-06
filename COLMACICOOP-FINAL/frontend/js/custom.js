$(document).ready(function() {
    $('#header_wrapper').scrollToFixed();
    
    $('.res-nav_click').click(function() {
        $('.main-nav').slideToggle();
        return false

    });
	
    function resizeText() {
        var preferredWidth = 767;
        var displayWidth = window.innerWidth;
        var percentage = displayWidth / preferredWidth;
        var fontsizetitle = 25;
        var newFontSizeTitle = Math.floor(fontsizetitle * percentage);
        $(".divclass").css("font-size", newFontSizeTitle)
    }
    if ($('#main-nav ul li:first-child').hasClass('active')) {
        $('#main-nav').css('background', 'none');
    }
    $('.mainNav,.links').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 500,
        scrollThreshold: 0.2,
        filter: '',
        navHeight: $(window).width() > 768 ? 100 : 70,
        easing: 'swing',
        begin: function() {
        },
        end: function() {
            if (!$('#main-nav ul li:first-child').hasClass('active')) {
                $('.header').addClass('addBg');
            } else {
                $('.header').removeClass('addBg');
            }

        },
        scrollChange: function($currentListItem) {
            if (!$('#main-nav ul li:first-child').hasClass('active')) {
                $('.header').addClass('addBg');
            } else {
                $('.header').removeClass('addBg');
            }
        }
    });

    var container = $('#portfolio_wrapper');


    container.isotope({
        animationEngine: 'best-available',
        animationOptions: {
            duration: 200,
            queue: false
        },
        layoutMode: 'fitRows'
    });

    $('#filters a').click(function() {
        $('#filters a').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        container.isotope({
            filter: selector
        });
        setProjects();
        return false;
    });

    function splitColumns() {
        var winWidth = $(window).width(),
            columnNumb = 1;


        if (winWidth > 1024) {
            columnNumb = 4;
        } else if (winWidth > 900) {
            columnNumb = 2;
        } else if (winWidth > 479) {
            columnNumb = 2;
        } else if (winWidth < 479) {
            columnNumb = 1;
        }

        return columnNumb;
    }
	
    function setColumns() {
        var winWidth = $(window).width(),
            columnNumb = splitColumns(),
            postWidth = Math.floor(winWidth / columnNumb);

        container.find('.portfolio-item').each(function() {
            $(this).css({
                width: postWidth + 'px'
            });
        });
    }

    function setProjects() {
        setColumns();
        container.isotope('reLayout');
    }

    container.imagesLoaded(function() {
        setColumns();
    });


    $(window).bind('resize', function() {
        setProjects();
    });

   $(".fancybox").fancybox();
});

wow = new WOW({
    animateClass: 'animated',
    offset: 100
});

wow.init();

function numberFormat(value){
    // Create our number formatter.
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',

        // These options are needed to round to whole numbers if that's what you want.
        minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        maximumFractionDigits: 2, // (causes 2500.99 to be printed as $2,501)
    });

    return formatter.format(value);
}

function runSlider(){
    $('.bxslider').bxSlider({
        mode: 'fade',
        auto: true,
        infiniteLoop: true,
        speed: 500,
        pause: 20000
        // slideWidth: 1170
    });
}

function activeCollapseArrow(){
    $('.panel-collapse').on('show.bs.collapse', function () {
        $(this).siblings('.panel-heading').addClass('active');
    });

    $('.panel-collapse').on('hide.bs.collapse', function () {
        $(this).siblings('.panel-heading').removeClass('active');
    });
}

function irA(identify){
    var top = ($(identify).offset().top - 150);

    $('html, body').animate({
        scrollTop: top
    }, 500);

    return false;
}

function showLoading(){
    $('.loading-general').fadeIn('slow');
}

function closeLoading(){
    $('.loading-general').fadeOut('slow');
}

function valida_cedula(ced) {  
    var c = ced.replace(/-/g,'');  
    var cedula = c.substr(0, c.length - 1);  
    var verificador = c.substr(c.length - 1, 1);  
    var suma = 0;  
    var cedulaValida = 0;
    if(ced.length < 11) { return false; }  
        for (i=0; i < cedula.length; i++) {  
            mod = "";  
            if((i % 2) == 0){mod = 1} else {mod = 2}  
               res = cedula.substr(i,1) * mod;  
           if (res > 9) {  
              res = res.toString();  
              uno = res.substr(0,1);  
              dos = res.substr(1,1);  
              res = eval(uno) + eval(dos);  
          }  
          suma += eval(res);  
      }  
      el_numero = (10 - (suma % 10)) % 10;  
      if (el_numero == verificador && cedula.substr(0,3) != "000") {  
          cedulaValida = 1;
      }  
      else   {  
       cedulaValida = 0;
    }  
    return cedulaValida;
}

$(document).on("click",".btn-cal",function(){
    var amount = parseFloat($('#amount').val().replace(/[a-zA-Z,]/g,""));
    var period = parseInt($("#period").val()) / 12;
    var tasa = parseInt($("#tasa").val().replace(/\D/g,"")) / 100;



    if (amount > 100000000 || amount <= 0 || isNaN(amount)) {
        swal("Error","Cuota mensual incorrecta.","error");
        return false;
    }

    var total = (amount * (period * 12)) + (amount * (1 + (tasa * period)));

    $('.cal-calculator-res p').html("RD"+numberFormat(total));

    return false;
});

$(function(){ 
    var navMain = $(".navbar-collapse"); // avoid dependency on #id
    // "a:not([data-toggle])" - to avoid issues caused
    // when you have dropdown inside navbar
    navMain.on("click", "a:not([data-toggle])", null, function () {
        navMain.collapse('hide');
    });
});

$('#modal-calculator, #modal-afiliate').on('show.bs.modal', function (e) {
    var navMain = $(".navbar-collapse");
    navMain.collapse('hide');
})

$(document).click(function () {
 // if($(".navbar-collapse").hasClass("in")){
   $('.navbar-collapse').collapse('hide');
 // }
});