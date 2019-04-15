console.log("hello world");

$(document).ready(function(){
    // Target your .container, .wrapper, .post, etc.
    $(".video-clip").fitVids();
  });



    $('.carousel').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
    });

var animationTime 	= 2000;
var interval 		= null;
var featureItems 	= 5;
var featureCount 	= 1;
var hovered_feature;

triggerFeatures(hovered_feature);

function triggerFeatures(hovered_feature) {
	
	if(hovered_feature != undefined){
		featureCount = hovered_feature;
	}
	
	//Timer between the slides
	interval = setInterval(function(){ 
		animateFeatures();    
	}, animationTime);
	
	function animateFeatures() {
		
		if(featureCount >= featureItems ) {
			featureCount = 0;
		}
		
		featureCount++;
		
		$(".hover_content").hide();
		$('.feature_hover_content_' + featureCount).show();
	}
}

$(".features_hover_content_triggers img").mouseenter(function(e){
	
	var hovered_feature = $(this).attr("class");
	hovered_feature 	= hovered_feature.split("features_hover_").pop();
	
	clearInterval(interval);
	
	$(".hover_content").hide();
	$('.feature_hover_content_' + hovered_feature).show();
	
}).mouseleave(function(e){
	
	var hovered_feature = $(this).attr("class");
	// console.log(hovered_feature);
	
	hovered_feature = hovered_feature.slice(-1);
	
	triggerFeatures(hovered_feature);
	
});

$(".hover_content").mouseenter(function(e){
	
	clearInterval(interval);

}).mouseleave(function(e){
	var textHovered = $(this).attr("class").split(' ')[0];
	hovered_feature 	= textHovered.split("feature_hover_content_").pop();
	triggerFeatures(hovered_feature);
});
