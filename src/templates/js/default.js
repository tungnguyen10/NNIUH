$(document).ready(function () {
	$(window).scroll(function () {
		$(this).scrollTop() > 200 ? $('.backtop').addClass('show') : $('.backtop').removeClass('show')
	});
	/*** back to top ***/
	$('.backtop').click(function () {
		return $("body,html").animate({
			scrollTop: 0
		}, 800), !1
	});
	/*** btn support left ***/
	$('a.btn-support').click(function (e) {
		e.stopPropagation();
		$('.support-content').slideToggle();
	});

	/*** Footer mobile ***/
	var ww = $(window).width();
	if (ww < 768) {
		$('.foo-title').on('click', function () {
			$(this).next('.foo-content').slideToggle('fast');
		});
	} else {
		$('.foo-content').show();
	}

	/** menu mobile */
	$('.menubutton').click(function (e) {
		e.stopPropagation();
		$('.wrapmenu_right').toggleClass('open_sidebar_menu');
		$('.opacity_menu').toggleClass('open_opacity');
		$('body').toggleClass('open_menu');
	});
	$('.opacity_menu').click(function (e) {
		$('.wrapmenu_right').removeClass('open_sidebar_menu');
		$('.opacity_menu').removeClass('open_opacity');
		$('body').toggleClass('open_menu');
	});
	$(".menubar_pc").click(function () {
		$('.wrapmenu_full').slideToggle('fast');
		$('.wrapmenu_full, .cloed').toggleClass('open_menu');
		$('.dqdt-sidebar, .open-filters').removeClass('openf')
	});
	$(".cloed").click(function () {
		$(this).toggleClass('open_menu');
		$('.wrapmenu_full').slideToggle('fast');
	});
	$(".opacity_menu").click(function () {
		$('.opacity_menu').removeClass('open_opacity');
	});
	if ($('.dqdt-sidebar').hasClass('openf')) {
		$('.wrapmenu_full').removeClass('open_menu');
	}
	$('.ul_collections li > .fa').click(function () {
		$(this).parent().toggleClass('current');
		$(this).toggleClass('fa-plus fa-minus');
		$(this).next('ul').slideToggle("fast");
		$(this).next('div').slideToggle("fast");
	});

});

if ($('#index').length > 0) {
	$('.owl-partner').owlCarousel({
		rtl:true,
		loop:true,
		margin:10,
		nav:false,
		dots:false,
		responsive:{
				0:{
						items:2
				},
				600:{
						items:3
				},
				1000:{
						items:5
				}
		}
	})
	$('.owl-news').owlCarousel({
		rtl:true,
		loop:true,
		margin:25,
		nav:false,
		dots:false,
		responsive:{
				0:{
						items:1
				},
				768:{
						items:2
				},
				1000:{
						items:3
				}
		}
	})
}
