/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

(function ($) {
  'use strict';

  // ----------------------------
  // AOS
  // ----------------------------
  AOS.init({
    once: true
  });

  
  $(window).on('scroll', function () {
		//.Scroll to top show/hide
    var scrollToTop = $('.scroll-top-to'),
      scroll = $(window).scrollTop();
    if (scroll >= 200) {
      scrollToTop.fadeIn(200);
    } else {
      scrollToTop.fadeOut(100);
    }
  });
	// scroll-to-top
  $('.scroll-top-to').on('click', function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  $("form").submit(function (e) {
    e.preventDefault();
    var form = $(this)[0]
    var data = {
      nombre: form[1].value,
      email: form[2].value,
      mensaje: form[3].value,
      terminos_condiciones: form[4].checked,
    }
    gtag('event', 'conversion', {'send_to': 'AW-10947825641/LsGrCLufss4DEOmfquQo'})
    $.post('https://formsubmit.co/arab.desk@arayasociados.com', data).done(function(data){
      $('#contact-form form .row')
        .prepend('<div class="alert alert-success w-100" role="alert">Succès! Nous vous contacterons bientôt!</div>');
        $(':input','form')
          .not(':button, :submit, :reset, :hidden')
          .val('')
          .prop('checked', false)
          .prop('selected', false);
    })
    return false;
  });

  $('.viber-link').on('click tap', function(){
    gtag('event', 'conversion', {'send_to': 'AW-10947825641/mkRiCIOM888DEOmfquQo'});
  })

  $(document).ready(function() {

    // navbarDropdown
    if ($(window).width() < 992) {
      $('.main-nav .dropdown-toggle').on('click', function () {
        $(this).siblings('.dropdown-menu').animate({
          height: 'toggle'
        }, 300);
      });
    }

    // -----------------------------
    //  Testimonial Slider
    // -----------------------------
    $('.testimonial-slider').slick({
      slidesToShow: 2,
      infinite: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });


    // -----------------------------
    //  Video Replace
    // -----------------------------
    $('.video-box i').click(function () {
      var video = '<iframe class="border-0" allowfullscreen src="' + $(this).attr('data-video') + '"></iframe>';
      $(this).replaceWith(video);
    });


    // -----------------------------
    //  Count Down JS
    // -----------------------------
    var syoTimer = $('#simple-timer');
    if (syoTimer) {
      $('#simple-timer').syotimer({
        year: 2023,
        month: 9,
        day: 1,
        hour: 0,
        minute: 0
      });
    }


    // -----------------------------
    //  Story Slider
    // -----------------------------
    $('.about-slider').slick({
      slidesToShow: 1,
      infinite: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true
    });


    // -----------------------------
    //  Quote Slider
    // -----------------------------
    $('.quote-slider').slick({
      slidesToShow: 1,
      infinite: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true
    });


    // -----------------------------
    //  Client Slider
    // -----------------------------
    $('.client-slider').slick({
      slidesToShow: 4,
      infinite: true,
      arrows: false,
      // autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      responsive: [
        {
          breakpoint: 0,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        }
      ]
    });

  });

})(jQuery);