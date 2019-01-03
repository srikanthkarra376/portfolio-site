$(document).ready(function(){
  $("header .main-nav .menu i,.toggle-menu ul li a,header .main-nav.scrolled .menu i").click(function(){
    $("header .main-nav .menu i").toggleClass("fa-times-circle");
    $(".toggle-menu").toggleClass("active");
  });
});

$(function () {
  $(document).scroll(function () {
    let nav = $("header .main-nav");
    nav.toggleClass('scrolled', $(this).scrollTop()>91);
  });
});

  const height = $("header .main-nav").outerHeight();
  $(function(){
    $('a[href*="#"]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset - 91}, 1000);
                return false;

            }
        }
      });
    });
   