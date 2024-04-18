$(".important__slids").slick({
    arrows: true,
    infinite: true,
    touchThreshold: 1000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: document.querySelector(".slick-next"),
    prevArrow: document.querySelector(".slick-prev"),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          adaptiveHeight: true,
        },
      },
    ],
  });


  $(document).ready(function () {
    const $tabs = $(".medical__tab");
    const $tabContents = $(".medical__content");
  
    function hideAllTabContents() {
      $tabContents.hide();
    }
  
    function showTabContent(index) {
      hideAllTabContents();
      $tabContents.eq(index).show();
    }
  
    $tabs.each(function (index) {
      $(this).on("click", function () {
        $tabs.removeClass("tab--active");
        $(this).addClass("tab--active");
        showTabContent(index);
      });
    });
  
    showTabContent(0);
  });



  $(".question__item-parent-icon").click(function () {
    var $parent = $(this).closest(".questions__item");
    var $items = $parent.find(".question__item-answer");
    var $arrow = $(this).find("svg");
  
    $parent.toggleClass("active");
    $items.slideToggle(200);
  
    if ($parent.hasClass("active")) {
      $arrow.addClass("up");
    } else {
      $arrow.removeClass("up");
    }
  
    $(".questions__item")
      .not($parent)
      .removeClass("active")
      .find(".question__item-answer")
      .slideUp(200);
  });
  

  $(".partners__slids").slick({
    arrows: true,
    infinite: true,
    touchThreshold: 1000,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: $(".partners__slider").find(".partners-next"),
    prevArrow: $(".partners__slider").find(".partners-prev"),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          adaptiveHeight: true
        },
      },
    ],
});



