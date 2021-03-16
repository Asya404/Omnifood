$(document).ready(function () {

   /* Waipoints for triggering functions on scroll */
   /* For the sticky navigation */
   $('.js--features').waypoint(function (direction) {
      if (direction == "down") {
         $('nav').addClass('sticky')
      } else {
         $('nav').removeClass('sticky')
      }
   }, {
      offset: '60px'
   })


   /* Scroll on buttons */
   $('.js--scroll-to-plans').click(function () {
      $('html, body').animate({ scrollTop: $('.js--plans').offset().top }, 100)
   })

   $('.js--scroll-to-start').click(function () {
      $('html, body').animate({ scrollTop: $('.js--features').offset().top }, 100)
   })


   /* Navigation scroll */
   $(function () {
      $('a[href*=#]:not([href=#])').click(function () {
         if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
               $('html,body').animate({
                  scrollTop: target.offset().top
               }, 1000);
               return false;
            }
         }
      });
   });


   /* Animations on scroll */
   $('.js--wp-1').waypoint(function (direction) {
      $('.js--wp-1').addClass('animate__animated animate__fadeIn')
   }, {
      offset: '50 %'
   })


   $('.js--wp-2').waypoint(function (direction) {
      $('.js--wp-2').addClass('animate__animated animate__fadeInUp')
   }, {
      offset: '50 %'
   })


   $('.js--wp-3').waypoint(function (direction) {
      $('.js--wp-3').addClass('animate__animated animate__fadeIn')
   }, {
      offset: '50 %'
   })


   $('.js--wp-4').waypoint(function (direction) {
      $('.js--wp-4').addClass('animate__animated animate__pulse')
   }, {
      offset: '50 %'
   })


   /* Mobile nav */
   $('.js--nav-icon').click(function () {
      const nav = $('.js--main-nav')
      const icon = $('.js--nav-icon ion-icon')

      nav.slideToggle(200)
      if (icon.attr('name') == 'menu-outline') {
         icon.attr('name', 'close-outline')
      } else {
         icon.attr('name', 'menu-outline')
      }
   })



});