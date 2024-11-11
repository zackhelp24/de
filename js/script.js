$(window).on("load", function () {

   // Preload 
   $("#preload").fadeOut(500);

});


jQuery(document).ready(function () {

   // Owl Carousel Best Deals
   $('.best-deals-carousel').owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      dots: true,
      responsive: {
         0: {
            items: 1
         },
         670: {
            items: 2
         },
         1000: {
            items: 3
         }
      }
   });

   // Tabs Properties
   $('.properties-list  li a').each(function (i) {
      $(this).attr('data-tab', 'tab' + i);
   });
   $('.wrapper-properties-result > .wrapper-properties-catalog').each(function (i) {
      $(this).attr('data-tab', 'tab' + i);
   });

   $('.properties-list  li a').on('click', function (e) {
      e.preventDefault();
      var datatab = $(this).data('tab');
      $('.properties-list  li a').removeClass('active');
      $(this).addClass('active');
      $('.wrapper-properties-result > .wrapper-properties-catalog').hide();
      $('.wrapper-properties-result > .wrapper-properties-catalog[data-tab=' + datatab + ']').attr('style', 'display:flex').show();
   });

   // Accordion Faq
   $('.wrapper-accordion .content-accordion:first-of-type').show();
   $('.wrapper-accordion h3:first-of-type').children('.fa-solid').removeClass('fa-chevron-down').addClass('fa-chevron-up');

   var titleAccordion = $('.wrapper-accordion h3');
   var contentAccordion = $('.content-accordion');


   titleAccordion.click(function () {
      var content = $(this).next(contentAccordion);
      if (content.is(':visible')) {
         content.slideUp();
         $(this).children('.fa-solid').removeClass('fa-chevron-up').addClass('fa-chevron-down');
      } else {
         contentAccordion.slideUp();
         content.slideDown();
         titleAccordion.children('.fa-solid').removeClass('fa-chevron-up').addClass('fa-chevron-down');
         $(this).children('.fa-solid').removeClass('fa-chevron-down').addClass('fa-chevron-up');
      }

   });

   // OWl Carousel Testimonials
   $('.testimonials-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: true,
      responsive: {
         0: {
            items: 1
         },
         600: {
            items: 1
         },
         1000: {
            items: 1
         }
      }
   });

   // Contact Form Ajax 
   $('#send').click(function (event) {
      event.preventDefault();
      var name = $('input[name="name"]').val();
      var lastname = $('input[name="lastname"]').val();
      var phone = $('input[name="phone"]').val();
      var email = $('input[name="email"]').val();
      var message = $('textarea[name="message"]').val();

      if (name == '' || lastname == '' || phone == '' || email == '' || message == '') {

         $('.res-send').fadeIn().html('<span class="error">All fields must be filled.</span>');
         $('input, textarea').focus(function () {
            $('.res-send').fadeOut();
         });

      } else {

         $.ajax({
            url: '../contact.php',
            type: 'POST',
            data: {
               name: name,
               lastname: lastname,
               phone: phone,
               email: email,
               message: message
            },
            dataType: 'html',
            success: function (data) {
               if (data == 'Send') {

                  $('.res-send').fadeIn().html('<span class="send">Thanks. We will contact you shortly.</span>');

                  $('input[name="name"]').val('');
                  $('input[name="lastname"]').val('');
                  $('input[name="phone"]').val('');
                  $('input[name="email"]').val('');
                  $('textarea[name="message"]').val('');

                  $('input, textarea').focus(function () {
                     $('.res-send').fadeOut();
                  });

               }
            }
         }); // ajax
      }
   });

   // Scroll Top Button
   $('#scroll-top').click(function () {
      $('body,html').animate({
         scrollTop: 0
      }, 800);
      return false;
   });

   // Scroll Top
   $('#scroll-top').hide();
   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
         $('#scroll-top').fadeIn();
      } else {
         $('#scroll-top').fadeOut();
      }
   });

   // Scroll Menu
   $('.menu li a[href^="#"]').click(function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
         top = $(id).offset().top;
      $('body,html').animate({
         scrollTop: top
      }, 1500);
   });

   $('#logo, .header-content a[href^="#"], #banner .btn[href^="#"]').click(function (event) {
      event.preventDefault();
      var id = $(this).attr('href'),
         top = $(id).offset().top;
      $('body,html').animate({
         scrollTop: top
      }, 1500);
   });

   // Mobile Menu
   $('#openmenu').click(function (event) {
      event.preventDefault();
      $('#navigation').animate({
         'left': 0
      }, 800);
   });

   $('#closemenu').click(function (event) {
      event.preventDefault();
      $('#navigation').animate({
         'left': '-320px'
      }, 800);
   });

   $('#navigation a').on("click", function () {
      $("#navigation").animate({
         'left': '-320px'
      }, 800);
   });

   // scroll fixed menu
   $(window).scroll(function () {
      var headerTop = $('.wrapper-header-top').height();
      if ($(this).scrollTop() >= headerTop) {
         $('.wrapper-header-bottom').addClass('fixedmenu');
      } else {
         $('.wrapper-header-bottom').removeClass('fixedmenu');
      }
   });


}); // ready