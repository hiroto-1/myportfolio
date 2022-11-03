"use strict";
/*---------- humburger menu ----------*/
$(function () {
  const hamburger = $(".js_hamburger_bar");
  const navigation = $(".js_nav");
  hamburger.on("click", function () {
    $(".js_hamburger_bar").toggleClass("is_active");
    navigation.toggleClass("is_active");
    $(".js_body").toggleClass("is_active");
  });
  $(".l_header-hamburger_demo a").on("click", function () {
    if (navigation.hasClass("is_active")) {
      hamburger.removeClass("is_active");
      navigation.removeClass("is_active");
      $(".js_body").removeClass("is_active");
    }
  });

  /*---------- top button ----------*/
  const pageTop = $(".js_page");
  $(window).on("scroll", function () {
    const windowHeight = $(window).height();
    let scrollPos = $(window).scrollTop();
    if (scrollPos > windowHeight) {
      pageTop.addClass("is_active");
    } else {
      pageTop.removeClass("is_active");
    }
  });
  pageTop.on("click", function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      00
    );
  });
  /*---------- gsap scrollTrigger ----------*/
  gsap.fromTo(
    ".js_prof-trigger",
    {
      y: 300,
      autoAlpha: 0,
    },
    {
      y: 0,
      autoAlpha: 1,
      duration: 1,
      ease: "Power4.inOut",
      scrollTrigger: {
        trigger: ".js_prof",
        start: "top center",
      },
      stagger: {
        each: 1.0,
        from: "start",
      },
    }
  );
  gsap.fromTo(
    ".js_skill-trigger",
    {
      y: 100,
      autoAlpha: 0,
    },
    {
      y: 0,
      autoAlpha: 1,
      duration: 1,
      ease: "Power4.inOut",
      scrollTrigger: {
        trigger: ".js_skill",
        start: "top center",
      },
      stagger: {
        each: 1.0,
        from: "start",
      },
    }
  );

  /*---------- loading ----------*/
  $(function () {
    function end_loader() {
      $(".js_loading").fadeOut(200);
    }
    $(window).on("load", function () {
      setTimeout(function () {
        end_loader();
      }, 500);
    });
  });
});
