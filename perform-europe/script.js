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
$('#open-video').on('click', function () {
    $('.video__embed-wrp').addClass('open');
});
$('#close-video').on('click', function () {
    $('.video__embed-wrp').removeClass('open');
});



$('.navbar-wrp').css('background-image', 'none');


$(".landing-img-wrp").each(function (index) {
    $('.l__title').css('display', 'none');
    let titles = $(".l__title");
    let tlin = gsap.timeline({ paused: true });
    tlin.from (titles, {
        y: "2.5rem",
        duration: .3,
        ease: Power2.easeInOuteaseInOut,
      });
    let tlout = gsap.timeline({ paused: true });
    tlout.to (titles, {
        y: "-2.5rem",
        duration: .25,
        ease: Power2.easeInOuteaseInOut,
    });

    $('.l__img.top-right').on('mouseenter', function () {
        $('#title-gen').css('display', 'block');
        tlin.restart();});
      $('.l__img.top-right').on('mouseleave', function () {
        tlout.restart();
        $("#title-gen")
      .delay(100)
      .queue(function () {
        $(this).css('display', 'none');
        $(this).dequeue();
      });
    });
        
        $('.l__img.bottom-right').on('mouseenter', function () {
            $('#title-acc').css('display', 'block');
            tlin.restart();});
          $('.l__img.bottom-right').on('mouseleave', function () {
            tlout.restart();
            $("#title-acc")
          .delay(100)
          .queue(function () {
            $(this).css('display', 'none');
            $(this).dequeue();
          });
        });

            $('.l__img.bottom-left').on('mouseenter', function () {
                $('#title-sus').css('display', 'block');
                tlin.restart();});
              $('.l__img.bottom-left').on('mouseleave', function () {
                tlout.restart();
                $("#title-sus")
              .delay(100)
              .queue(function () {
                $(this).css('display', 'none');
                $(this).dequeue();
              });
            });

                $('.l__img.bottom-mid').on('mouseenter', function () {
                    $('#title-inc').css('display', 'block');
                    tlin.restart();});
                  $('.l__img.bottom-mid').on('mouseleave', function () {
                    tlout.restart();
                    $("#title-inc")
                  .delay(100)
                  .queue(function () {
                    $(this).css('display', 'none');
                    $(this).dequeue();
                  });
                });

                    $('.l__img.top-mid').on('mouseenter', function () {
                        $('#title-inn').css('display', 'block');
                        tlin.restart();});
                      $('.l__img.top-mid').on('mouseleave', function () {
                        tlout.restart();
                        $("#title-inn")
                      .delay(100)
                      .queue(function () {
                        $(this).css('display', 'none');
                        $(this).dequeue();
                      });
                    });

                        $('.l__img.top-mid-right').on('mouseenter', function () {
                            $('#title-div').css('display', 'block');
                            tlin.restart();});
                          $('.l__img.top-mid-right').on('mouseleave', function () {
                            tlout.restart();
                            $("#title-div")
                          .delay(100)
                          .queue(function () {
                            $(this).css('display', 'none');
                            $(this).dequeue();
                          });
                        });

  });

