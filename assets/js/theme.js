$(document).on("ready", function () {

  $("#mobile").on("click", function () {
    $("body").toggleClass("mobile");
  });

  $("#banner-slide").slick({
    dots: true,
    prevArrow: false,
    nextArrow: false,
    customPaging: function (slick, index) {
      const list = [
        {
          title: "Activate & Engage",
          img: "./assets/images/slide-1.png",
        },
        {
          title: "Support Before, During & After",
          img: "./assets/images/slide-2.png",
        },
        {
          title: "Reach Out & Be Discovered",
          img: "./assets/images/slide-3.png",
        },
      ];
      return (
        '<div class="custom-dot"><img src=" ' +
        list[index].img +
        ' "/> <h2 class="custom-dot-title">' +
        list[index].title +
        "</h2></div>"
      );
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    }
  });
  $("#review-slider").slick({
  });

  $(window).load(function(){
		
		$(".input-effect input").focusout(function(){
			if($(this).val() != ""){
				$(this).addClass("has-content");
			}else{
				$(this).removeClass("has-content");
			}
		})

    $(".input-effect textarea").focusout(function(){
			if($(this).val() != ""){
				$(this).addClass("has-content");
			}else{
				$(this).removeClass("has-content");
			}
		})

    $(".input-effect input").focusout(function(){
			if($(this).val() != ""){
				$(this).parent('.input-effect').addClass('lost-focus');;
			}else{
				$(this).parent('.input-effect').removeClass("lost-focus");
			}
		})

    $(".input-effect textarea").focusout(function(){
			if($(this).val() != ""){
				$(this).parent('.input-effect').addClass('lost-focus');;
			}else{
				$(this).parent('.input-effect').removeClass("lost-focus");
			}
		})

    // $('.input-effect input').blur(function() {
    //   $(this).parent('.input-effect').addClass('lost-focus');
    // });
	});

});