
// Slider_1 formula

	$('.bxslider1').bxSlider({
		auto: true,
		autoControls:false,
		pager:false,
		captions: true,
		pause: 3000,
		speed: 250,
		autoHover:false,
		mode:'vertical'
		});
		
/*
// For Easing Formula

$('.bxslider1').bxSlider({
  auto:true,
  mode: 'horizontal',
  useCSS:true,
  infiniteLoop: false,
  hideControlOnEnd: true,
  easing:'cubic-bezier(n,n,n,n)',
  speed: 500
});
*/


// Slider_2 Formula

	$('.bxslider2').bxSlider({
		auto: true,
		autoControls: false,
		controls:false,
		pager:false,
		slideWidth: 150,
		minSlides: 6,
		maxSlides: 6,
		slideMargin: 12,
		moveSlides: 1,
		pause: 3000,
		speed: 250,
		captions: false,
		autoHover:false
	});


// For Search BOx Empty field

function notEmpty(elem, helperMsg){ 
	if (elem.value.length == 0){ 
		alert(helperMsg); 
		elem.focus(); 
		return false;
	} 
		return true;
	}








