
$('.menu li').has('ul').addClass('dropdown');
$('.menu ul li').has('ul').append('<span class="drop-button"></span>');
$('.drop-button').click(function () {
    $(this).parents('.dropdown').children('ul').slideToggle();
    $(this).parents('.dropdown').siblings('li').children('ul').slideUp();
    $(this).toggleClass('active').parents('li').siblings().children('.drop-button').removeClass('active');
})

// $('.menu li ul li .drop-button').click(function(){
//     $(this).parents('.dropdown').children('ul').slideToggle();
//     $(this).parents('.dropdown').siblings('li').children('ul').slideUp();
//     $(this).toggleClass('active').parents('li').siblings().children('.drop-button').removeClass('active');
// })




$('.header .logo').append('<button type="button" class="toggle"><span></span><span></span><span></span></button>');

$('.toggle').click(function () {
    $('.site-controls').slideToggle();
    $(this).toggleClass('active');
})

$('.scroll-up').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    return false;
});

$('.accordion-section h3').click(function () {
    $(this).next('.text').slideToggle();
    $(this).parent('li').siblings().children('.text').slideUp();
    $(this).toggleClass('active').parent().siblings().children('h3').removeClass('active');
})

$(window).scroll(function () {
    var sticky = $('.header'),
        scroll = $(window).scrollTop();
    if (scroll >= 200) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
    if ($(window == 767)) {
        $('header').hide();
    }
});

/* product counter */
function increaseValue() {
    var value = parseInt(document.getElementById('quantity').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('quantity').value = value;
}
function decreaseValue() {
    var value = parseInt(document.getElementById('quantity').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('quantity').value = value;
}

$('.add-to-cart').click(function () {
    let proName = $('#productName').text();
    let size = $("input[type='radio'][name='size']:checked").val();
    let quantity = $('#quantity').val();
    alert("Product Name" + proName + "Size " + size + "br> Quantity" + quantity);
})

/* topbar */
// $('.topbar li').has('ul').append('<span class="expend"></span>')
// $('.dropdown-toggle li').click(function(event){
//     $(this).children('ul').fadeToggle().parent().siblings().children('ul').fadeOut();
//     event.stopPropagation();
// })
// $('body').click(function(){
//     $('.dropdown-toggle li ul').hide();
// });

$('.single-item').slick({
    fade: true,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
});
$('.single-item-2').slick({
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
});

$('.multiple-items-4').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

$('.multiple-items-5').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

$('.client-items').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: false,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});


$('.testi-item').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
});

$('[data-showElement]').click(function () {
    let getId = $(this).attr('data-showElement');
    $(getId).fadeIn();
})
$('.model-close').click(function () {
    $('.model-popup').fadeOut();
})

function getVals() {
    // Get slider values
    let parent = this.parentNode;
    let slides = parent.getElementsByTagName("input");
    let slide1 = parseFloat(slides[0].value);
    let slide2 = parseFloat(slides[1].value);
    // Neither slider will clip the other, so make sure we determine which is larger
    if (slide1 > slide2) { let tmp = slide2; slide2 = slide1; slide1 = tmp; }

    let displayElement = parent.getElementsByClassName("rangeValues")[0];
    displayElement.innerHTML = slide1 + " - " + slide2;
}
window.onload = function () {
    // Initialize Sliders
    let sliderSections = document.getElementsByClassName("range-slider");
    for (let x = 0; x < sliderSections.length; x++) {
        let sliders = sliderSections[x].getElementsByTagName("input");
        for (let y = 0; y < sliders.length; y++) {
            if (sliders[y].type === "range") {
                sliders[y].oninput = getVals;
                // Manually trigger event first time to display values
                sliders[y].oninput();
            }
        }
    }
}


AOS.init({
    once: false
});

$(".gallery a").fancybox();


var pdfUrl = "projects/escon-villa/brochureEsconVillas.pdf";

$('#esconBrochure').on('submit', function () {
    window.open(pdfUrl, '_blank');
});

$ = function (id) {
    return document.getElementById(id);
}

var show = function (id) {
    $(id).style.display = 'block';
}
var hide = function (id) {
    $(id).style.display = 'none';
}