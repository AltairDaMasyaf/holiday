$(document).ready(function () {
  const collapsibles = document.querySelectorAll(".collapsible");
  collapsibles.forEach((item) =>
    item.addEventListener("click", function () {
      this.classList.toggle("collapsible--expanded");
    })
  );

  //   if(window.innerWidth < 769) {
  //   var targetOffset = $("#hero").offset().top;
  //   var $w = $(window).scroll(function(){

  //     if ( $w.scrollTop() > targetOffset ) {
  //         $('nav').addClass("nav-scrolled");
  //         $("nav").css({"border-bottom":"2px solid white"});
  //     }
  //     else{
  //       $("nav").removeClass("nav-scrolled");
  //       $("nav").css({"border":"0"});
  //     }
  // });
  //   };

  $(".go-up").on("click", function () {
    let winh = $(window).height();
    var y = $(window).scrollTop(); // current page position
    $(window).scrollTop(y - winh); // scroll up 150px
  });

  $(".go-down").on("click", function () {
    let winh = $(window).height();
    var y = $(window).scrollTop(); // current page position
    $(window).scrollTop(y + winh); // scroll down 150px
  });
});
