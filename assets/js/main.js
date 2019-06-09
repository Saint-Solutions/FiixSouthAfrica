console.log('DEVELOPED BY RONALD LANGEVELD FOR SAINT SOLUTIONS')
console.log('https://ronaldlangeveld.com')

$(window).on('load', function () {
	var url = window.location.pathname;
	var lastChar = url[url.length -1];

	console.log(lastChar);

	if(lastChar === '/'){
		var newStr = url.slice(0,url.length-1);
		console.log(true);
		$(".navbar-item").each(function(){
			if ($(this).attr("href") == newStr){
					$(this).addClass("has-text-link");
			}
	});
	} else {
		$(".navbar-item").each(function(){
			if ($(this).attr("href") == window.location.pathname){
					$(this).addClass("has-text-link");
			}
	});
	};
});



$(document).ready(function () {
	// Target your .container, .wrapper, .post, etc.
	$(".video-clip").fitVids();
});



$('.carousel').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
});

var animationTime = 2000;
var interval = null;
var featureItems = 5;
var featureCount = 1;
var hovered_feature;

triggerFeatures(hovered_feature);

function triggerFeatures(hovered_feature) {

	if (hovered_feature != undefined) {
		featureCount = hovered_feature;
	}

	//Timer between the slides
	interval = setInterval(function () {
		animateFeatures();
	}, animationTime);

	function animateFeatures() {

		if (featureCount >= featureItems) {
			featureCount = 0;
		}

		featureCount++;

		$(".hover_content").hide();
		$('.feature_hover_content_' + featureCount).show();
	}
}

$(".features_hover_content_triggers img").mouseenter(function (e) {

	var hovered_feature = $(this).attr("class");
	hovered_feature = hovered_feature.split("features_hover_").pop();

	clearInterval(interval);

	$(".hover_content").hide();
	$('.feature_hover_content_' + hovered_feature).show();

}).mouseleave(function (e) {

	var hovered_feature = $(this).attr("class");
	// console.log(hovered_feature);

	hovered_feature = hovered_feature.slice(-1);

	triggerFeatures(hovered_feature);

});

$(".hover_content").mouseenter(function (e) {

	clearInterval(interval);

}).mouseleave(function (e) {
	var textHovered = $(this).attr("class").split(' ')[0];
	hovered_feature = textHovered.split("feature_hover_content_").pop();
	triggerFeatures(hovered_feature);
});




$(".cellphone").hover(function () {
	console.log(this);
	$('.fas').show();
	$('.fas').hide();
	$('.cellphone-info').show();
	$('.cellphone-info').hide();

	$(this).find('.fas').show();
	$(this).find('.cellphone-info').show();
})



// Check for click events on the navbar burger icon
$(".navbar-burger").click(function () {

	// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
	$(".navbar-burger").toggleClass("is-active");
	$(".navbar-menu").toggleClass("is-active");

});



$(".enquireModal").click(function () {

	$(".modal").toggleClass("is-active");

});

$(function () {
	var header = $(".desktopNavBar");
	var navLink = $(".toChange");
	var navItem = $(".toChange");
	var demoBTN = $(".demoBTN");
	var burger = $(".desktopNav");

	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll >= 30) {
			console.log('remove class');
			header.removeClass("transNav");
			navLink.removeClass("has-text-grey-lighter");
			navItem.removeClass("has-text-grey-lighter");
			demoBTN.removeClass("is-white");
			header.addClass("is-white");
			header.addClass("borderShadow");
			demoBTN.addClass("is-link");
			burger.removeClass("has-text-white");
			burger.addClass("has-text-link");
			$(".fixLogoWhite").hide();
			$(".fixLogo").show();
		} else {
			console.log('add class');
			header.removeClass("is-white");
			header.removeClass("borderShadow");
			demoBTN.removeClass("is-link");
			navItem.addClass("has-text-grey-lighter");
			demoBTN.addClass("is-white");
			navLink.addClass("has-text-grey-lighter");
			header.addClass("transNav");
			burger.addClass("has-text-white");
			burger.removeClass("has-text-link");
			$(".fixLogoWhite").show();
			$(".fixLogo").hide();
		}
	});

});

$(document).ready(function () {
	$('.venobox').venobox();
});


$(".popup").on("click", function (e) {
	e.preventDefault();
	var dataPopup = $(this).attr('data-popup');
	var dataTitle = $(this).text()
	swal({
		title: dataTitle,
		text: dataPopup
	});
});



$(".learnMoreBtn").click(function () {
	$(".learnMoreModal").addClass('is-active');

});

$(".exitModal").click(function () {
	$(".modal").removeClass('is-active');

});


$(".bigImg").click(function () {

	console.log('clicked img')
	var imglink = $(this).data("src");
	$(".imgModal").addClass('is-active');
	$('.dynaImg').attr('src', imglink);

});

$(".modal-close").click(function () {
	$(".modal").removeClass('is-active');
});

$('.industryDD').on('change', function () {
	var link = "#" + this.value;
	$('html, body').animate({
		scrollTop: $(link).offset().top
	}, 2000);
});

