
$(function() {
    "use strict";
    $('.kenburns_slider').vegas({
        slides: [
            { src: BASE_URL+'assets/images/gallery/1.jpg' },
        ],
        overlay: false,
        transition: 'fade2',
        animation: 'kenburns',
        transitionDuration: 1000,
        delay: 5000,
        animationDuration: 10000
    });
});



$(".moreless-button").click(function () {
    $(".moretext").slideToggle(10);
    if ($(".moreless-button").text() == "Read more") {
        $(this).text("Read less");
    } else {
        $(this).text("Read more");
    }
});



let dropdownItem = document.querySelectorAll('.show-submenu');
dropdownItem.forEach(singleItem =>{
    singleItem.addEventListener('click',function(item) {
        // item.target.closest('#mainNav')
        // console.log(item.target);
        singleItem.classList.toggle('show_normal');
    })
})