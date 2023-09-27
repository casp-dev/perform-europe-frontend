$(document).ready(function () {
    $(".w-webflow-badge").removeClass("w-webflow-badge").empty();
});
$('#menu-open').on('click', function () {
    $('.menu--dark').addClass('open');
    $('.menu').addClass('open');
});
$('#menu-close').on('click', function () {
    $('.menu--dark').removeClass('open');
    $('.menu').removeClass('open');
});
$('.dropdown-itm').on('click', function () {
   
    $(this).toggleClass('dd-open');
    $(this).find('.dd__txt').toggleClass('visible');
});

const cursors = document.querySelectorAll(".custom-cursor");

cursors.forEach((div, index) => {
    window.addEventListener("mousemove", function (dets) {
        div.style.left = `${dets.clientX}px`;
        div.style.top = `${dets.clientY}px`;
    });
});

$('.list__itm-wrp').on('mouseenter mouseleave', function () {
    $(".cursor-wrp").toggleClass('hide');
});

$('.project-list__itm').on('mouseenter mouseleave', function () {
    $(".cursor-wrp").toggleClass('hide');
});

$('#cookie-accept').on('click', function () {
    $('.cookie-banner').css('display', 'none');
});
$('#cookie-decline').on('click', function () {
    $('.cookie-banner').css('display', 'none');
});

$(".filter-menu__open").on('click', function (e) {
    e.preventDefault();
    if ($(window).width() > 768) {
        $(".fixed__filter-menu").addClass('open');
$(this).css('display', 'none');
$('.filter-itm__order').css('opacity', '1');
$('.fixed__cta__txt__close').css('display', 'block');
$('.filter-menu__arrow').css('transform', 'rotate(30deg)');
$('.btn-reset').css('opacity', '1');
    } else {
        $(".fixed__filter-menu").addClass('open');
$(this).css('display', 'none');
$('.filter-itm__order').css('opacity', '1');
$('.fixed__cta__txt__close').css('display', 'block');
$('.navbar-wrp--difference').css('display', 'none');
$('.filter-menu__arrow').css('transform', 'rotate(30deg)');
$('.btn-reset').css('opacity', '1');
    }
});

$('.filter-menu__arrow').on('click', function () {
$(".fixed__filter-menu").removeClass('open');
$('.filter-itm__order').css('opacity', '0');
$('.filter-menu__open').css('display', 'block');
$(this).css('transform', 'rotate(-30deg)');
$('.navbar-wrp--difference').css('display', 'flex');
$('.fixed__cta__txt__close').css('display', 'none');
$('.btn-reset').css('opacity', '0');
});
$('.fixed__cta__txt__close').on('click', function () {
$(".fixed__filter-menu").removeClass('open');
$('.filter-itm__order').css('opacity', '0');
$('.filter-menu__open').css('display', 'block');
$(this).css('display', 'none');
$('.navbar-wrp--difference').css('display', 'flex');
$('.filter-menu__arrow').css('transform', 'rotate(-30deg)');
$('.btn-reset').css('opacity', '0');
});
$('#btn-w-open').on('click', function () {
    $('.action-warning').addClass('open');
});
$('#btn-w-close').on('click', function () {
    $('.action-warning').removeClass('open');
});
$('.check-box').on('click', function () {
    $(this).toggleClass('is--checked');
});




$('.navbar-wrp').css('background-image', 'none');


