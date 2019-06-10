console.log('DEVELOPED BY RONALD LANGEVELD FOR SAINT SOLUTIONS')
console.log('https://ronaldlangeveld.com')

$(window).on('load', function () {
	var url = window.location.pathname;
	var lastChar = url[url.length - 1];

	console.log(lastChar);

	if (lastChar === '/') {
		var newStr = url.slice(0, url.length - 1);
		console.log(true);
		$(".navbar-item").each(function () {
			if ($(this).attr("href") == newStr) {
				$(this).addClass("has-text-link");
			}
		});
	} else {
		$(".navbar-item").each(function () {
			if ($(this).attr("href") == window.location.pathname) {
				$(this).addClass("has-text-link");
			}
		});
	};
});


function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
};

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




$('#contactUsBtn').click(function () {
	var btn = this;

	var d = new Date();
	var n = d.getTime();
	var firstname = $('#firstname').val();
	var lastname = $('#lastname').val();
	var email = $('#email').val();
	var phone = $('#phone').val();
	var company = $('#company').val();
	var teamsize = $("#teamsize option:selected").val();
	var message = $("#message").val();

	var url = 'https://api.hsforms.com/submissions/v3/integration/submit/5979242/4b40b8de-1146-44f7-ab1c-527b16b20688';
	if (firstname.length && lastname.length && email.length && phone.length && company.length && teamsize.length && message.length > 0) {
		$(btn).toggleClass('is-loading');
		var data = {
			"submittedAt": n,
			"fields": [
				{
					"name": "email",
					"value": email
				},
				{
					"name": "firstname",
					"value": firstname
				},
				{
					"name": "lastname",
					"value": lastname
				},
				{
					"name": "phone",
					"value": phone
				},
				{
					"name": "maintenance_team_size",
					"value": teamsize
				},
				{
					"name": "message",
					"value": message
				},
				{
					"name": "company",
					"value": company
				},
			],
			"context": {
				"hutk": getCookie("hubspotutk"),
				"pageUri": window.location.href,
				"pageName": "Contact Us Page"
			},
		};

		console.log(data);
		var context = JSON.stringify(data);
		$.ajax({
			type: "POST",
			url: url,
			data: context,
			contentType: "application/json;",
			dataType: "json",
			success: function (data) {
				$(btn).toggleClass('is-loading');
				$(btn).attr("disabled", true);
				swal("Success!", "Thank you! We will be in touch soon.", "success");
			},
			failure: function (errMsg) {
				$(btn).toggleClass('is-loading');
				alert('Oops, something is wrong. Please send us an email over at info@fiixsoftware.co.za')
			}
		});
	} else {
		swal("Oops!", "Please make sure everything is filled in.", "warning");
	}

});

var hubcookie = getCookie("hubspotutk");
console.log(hubcookie);