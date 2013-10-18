var $menu = $('.menu-title');

$(function (){
	

	$menu.on('click', function() {
		controller.menuClicked($(this));
		
	});

	$('.subnav ul li').on('click', function() {
		var selectedBike = $(this).attr('id');

		$('.subnav ul li.selected').removeClass('selected');

		$(this).addClass('selected');


		controller.subnavClicked(selectedBike);
	});

	$('.down').on('click', function() {
	
		var selected = $('.subnav ul li.selected');
		var next = selected.next().attr('id');

		if(selected.hasClass('prelast'))
		{
			$('.down').css({'display' : 'none'})
		}
		
		controller.goDown(next);
		$(selected).removeClass('selected');
	});


})

var controller = ({
	number : 1,
	menuClicked : function($this) {
		var $menu_title = $this;

		if($menu_title.hasClass('opened'))
		{
			controller.menuClose();
		}
		else {
			controller.menuOpen();
		}
	},

	menuClose : function() {
		console.log('close');

		$('.navigation ul li').delay(500).animate({
			marginLeft : "-200px"
		}, 100);

		$('.navigation').animate({
			marginTop : "-159px"
		}, 500, function() {
			$menu.text('menu').toggleClass('opened')
		});
	},

	menuOpen : function() {
		console.log('open');

		$('.navigation').animate({
			marginTop : "0px"
		}, 500, function() {
			$menu.text('close').toggleClass('opened')
		});

		$('.navigation ul li').delay(500).animate({
			marginLeft : "10px"
		}, 100);

		$('.menu-title').css({'position' : 'relative'});
	},

	subnavClicked : function($selectedBike) {
		console.log($selectedBike);

		$('html, body').animate({
		 
			scrollTop: $("." + $selectedBike).offset().top 
		}, 700, "easeOutCirc");
			 
	},

	goDown : function($number) {
		console.log('numerb', $number);
		$('html, body').animate({
		 
			scrollTop: $("." + $number).offset().top
		}, 700, "easeOutCirc");

		console.log('#' + $number);
		$('#' + $number).addClass('selected');

		controller.number++;
	}
});




