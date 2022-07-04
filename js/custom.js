$(document).ready(function($){
   // $(".search-field").click(function(){
       // $(".searchbar").addClass("active"); 
   // });

    //$(".category-thumb").hover(function(){
    //    $(".subcategory").show("active"); 
    //});

$(document).ready(function() {
    $(".category-thumb").hover(function () {
        $(".subcategory").toggle();
    })
})

   
    $('.category-box').on('click', function () {
        $('.category-area').removeClass("active");
        $(this).find('.category-area').addClass("active");
    }); 

    //$('.m-search').on('click', function () {
        //$('.header-search').removeClass("d-none");
   // }); 
    $('.closebtn').on('click', function () {
        $('.header-search').addClass("d-none");
    }); 

    //Testimonial
    $('.testimonial-slider').slick({
      infinite: true,
      slidesToShow: 6, 
      slidesToScroll: 3, 
      arrows: true, 
      autoplay:true,
      dots: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
          slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 575,
          settings: {
          slidesToShow: 2,
            slidesToScroll: 1,
          }
        }
      ]
    });

    //toggler
    $(".navbar-toggler").click(function(){
        $(".nav-list").toggleClass('active')
        $(".navbar-toggler").toggleClass('active')
    });



$('.kurtis-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    dots: false,
    margin: 30,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow:2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 999,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
          {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
            }
        }
    ]
});

$('.explore-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    dots: false,
    margin: 30,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll:2
            }
        },
          {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
            }
        }
    ]
});

$('.detail-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    margin: 30,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 999,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        ,
          {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
            }
        }
    ]
});

$('.ocassion-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    dots: false,
    margin: 30,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 999,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
        ,
          {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
            }
        }
    ]
});

    $('.Preference-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: false,
        margin: 30,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 999,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
            ,
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
        $('.customerSlider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        centerMode: true,
        autoplay: true,
        dots: false,
        centerPadding:'0px',
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 999,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                     centerMode: false,
                }
            }
            ,
          {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                centerMode: false,
            }
        }
        ]
    });
const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage() {
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);

});

$(function() {
  $("#price-range").slider({
    step: 500,
    range: true, 
    min: 0, 
    max: 20000, 
    values: [0, 20000], 
    slide: function(event, ui)
    {$("#priceRange").val(ui.values[0] + " - " + ui.values[1]);}
  });
  $("#priceRange").val($("#price-range").slider("values", 0) + " - " + $("#price-range").slider("values", 1));
  
});

$(document).ready(function(){
    "use strict";
  var offSetTop = 100;
  var $scrollToTopButton = $('.scrollToTop');
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > offSetTop) {
            $scrollToTopButton.fadeIn();
        } else {
            $scrollToTopButton.fadeOut();
        }
    });
    
    //Click event to scroll to top
    $scrollToTopButton.click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
    
});

