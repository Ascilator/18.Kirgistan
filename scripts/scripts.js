jQuery(function () {

	$('.burger_container').click(function(){
		$('.menu').slideToggle(500);
		$('.burger_before').toggleClass('_active');
		$('.burger').toggleClass('_active');
		$('.burger_after').toggleClass('_active');
	});


	var products = $('.product_item_border');

	var maxH =  $('.product_item_border:eq(0)').height();
	for (var i = 0; i < products.length; i++) {
		if ($(`.product_item_border:eq(${i})`).height() >= maxH) {
			maxH = $(`.product_item_border:eq(${i})`).height();
		}
	}

	$('.product_item_border').height(maxH); 

	var slider;
	slider = $('.product_body').bxSlider({
		slideMargin: 30,
		infiniteLoop: false,
		adaptiveHeight: true,
		controls: true,
		minSlides: 1,
		maxSlides: 3,
		slideWidth: 386,
		moveSlides: 3,
		swipeThreshold: 50,
		responsive: true,

		nextSelector: $('.next_arrow'),
		prevText: '',
		nextText: '',
		prevSelector: $('.prev_arrow'),
	});

	$( document ).ready(function(){
		if($('html').width() <= 450){

			slider.reloadSlider({
				slideMargin: 30,
				infiniteLoop: false,
				adaptiveHeight: true,
				controls: true,
				minSlides: 1,
				maxSlides: 3,
				slideWidth: 260,
				moveSlides: 3,
				swipeThreshold: 50,
				responsive: true,

				nextSelector: $('.next_arrow'),
				prevText: '',
				nextText: '',
				prevSelector: $('.prev_arrow'),
			});
		}
	});
	
	$(window).resize(function(){
		if($('html').width() <= 450){
			  slider.reloadSlider({
				slideMargin: 30,
				infiniteLoop: false,
				adaptiveHeight: true,
				controls: true,
				minSlides: 1,
				maxSlides: 3,
				slideWidth: 260,
				moveSlides: 3,
				swipeThreshold: 50,
				responsive: true,

				nextSelector: $('.next_arrow'),
				prevText: '',
				nextText: '',
				prevSelector: $('.prev_arrow'),
			});
		} else {
			slider.reloadSlider({
				slideMargin: 30,
				infiniteLoop: false,
				adaptiveHeight: true,
				controls: true,
				minSlides: 1,
				maxSlides: 3,
				slideWidth: 386,
				moveSlides: 3,
				swipeThreshold: 50,
				responsive: true,

				nextSelector: $('.next_arrow'),
				prevText: '',
				nextText: '',
				prevSelector: $('.prev_arrow'),
			});
		}
	});

	$('._form').on('focus', function(){		
		if ($(this).val() == 'Имя' || $(this).val() == 'Name'  || $(this).val() == 'Телефон (обязательно)' || $(this).val() == 'Phone' || $(this).val() == 'Электронная почта'|| $(this).val() == 'E-mail' || $(this).val() == 'Телефон') {
			$(this).val('');
		}
		$(this).parent().addClass('_active');
	});

	$('._form').on('blur', function(){
		if ($(this).val() == '') {
			if($('.translate>a').text() === 'ru'){

				if($(this).attr('val') == '1'){
					$(this).val('Имя');
				}
				if($(this).attr('val') == '2'){
					$(this).val('Электронная почта');
				}
				if($(this).attr('val') == '3'){
					$(this).val('Телефон (обязательно)');
				}
				if($(this).attr('val') == '4'){
					$(this).val('Телефон');
				}
			} else {
				if($(this).attr('val') == '1'){
					$(this).val('Name');
				}
				if($(this).attr('val') == '2'){
					$(this).val('E-mail');
				}
				if($(this).attr('val') == '3'){
					$(this).val('Phone');
				}
				if($(this).attr('val') == '4'){
					$(this).val('Phone');
				}
			}
			
		}
		$(this).parent().removeClass('_active');
	});



	$('.learn_more_btn').click(function(){
		var pic = $(this).parent().siblings('.cont').children('.pic').children('.form_pic').clone();
		var desc = $(this).parent().siblings('.cont').children('.title').children('.lower').text();
		var name = $(this).parent().siblings('.cont').children('.title').children('.upper').children('.neme').text() +' '+ $(this).parent().siblings('.cont').children('.title').children('.upper').children('.supname').text();
		$('#_form_img').children().replaceWith(pic);
		$('#_form_title').text(name);
		$('#_form_desc').text(desc);
	});


	$('.menu_link').click(function(){
	    $('html, body').animate({
	        scrollTop: $(`#to_scroll_${$(this).index()}`).offset().top - 30
	    }, 1000);
	});
/*
	
	$( document ).ready(function(){
		if($('html').width() <= 575){

			$('#slider_1').bxSlider({
				slideMargin: 30,
				infiniteLoop: false,
				adaptiveHeight: true,
				controls: false,
				minSlides: 1,
				maxSlides: 6,
				slideWidth: 190,
				moveSlides: 1,
				swipeThreshold: 50,
				responsive: true,
			});
		}
	});
	var slider;
	$(window).resize(function(){
		if($('html').width() <= 575){
			 slider = $('#slider_1').bxSlider({
				slideMargin: 30,
				infiniteLoop: false,
				
				controls: false,
				minSlides: 1,
				maxSlides: 6,
				slideWidth: 190,
				moveSlides: 1,
				swipeThreshold: 50,
				responsive: true,
			});
		} else {
			if(slider === undefined){}else{
				slider.destroySlider();
			}
		}
	});




	$('#slider_2').bxSlider({
		slideMargin: 20,
		infiniteLoop: false,
		nextSelector: $('.next_control'),
		prevText: '',
		nextText: '',
		prevSelector: $('.prev_control'),
		controls: true,
		minSlides: 1,
		maxSlides: 3,
		slideWidth: 242,
		moveSlides: 1,
		swipeThreshold: 50,
		responsive: true,
	});


	var top = $('.recivies_cont').height();
	$('.next_control').css({
		'top': top/2 + 'px'
	});
	$('.prev_control').css({
		'top': top/2 + 'px'
	});


	$('.drop_control').click(function(){
		$('.add_drop').slideToggle(500);
	});
	$('.drop_item').click(function(){
		$('.drop_item_acc').text($(this).text());
		$('.add_drop').slideToggle(0);

	});





	$('.menu_link').click(function(){
		
	    $('html, body').animate({
	        scrollTop: $(`#to_scroll_${$(this).index()}`).offset().top - 30
	    }, 1000);
	});


	$('.part_1').click(function(){
		
		var pic = $('#gal_1').clone();
		$('.popup_cont').empty();
		$('.popup_cont').append(pic);
	});
	$('.part_2').click(function(){
		
		var pic = $('#gal_2').clone();
		$('.popup_cont').empty();
		$('.popup_cont').append(pic);
	});





	$('.arrow_up').click(function(){
		 $('html, body').animate({
	        scrollTop: 0 
	    }, 2000);
	});
	*/
});


