var $menu = $('.menu-title');
var opened = false;
var didScroll = false;
var sections = Array();



$(function (){
		
	console.log('scroll', didScroll);

	$menu.on('click', function() {
		//controller.menuClicked($(this));

		if(opened == true) {
			opened = false;

			$(this).find('a').text('menu').attr('href', '#');
		}
		else {
			opened = true;
			$(this).find('a').text('close').attr('href', '#nav');
		}
		
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

function scroll() {
          didScroll = true;
          console.log('scrolled', didScroll);
     }

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
	},

	addSelected : function($selected) {

		$('.subnav ul li.selected').removeClass('selected');

		$('.subnav ul li#' + $selected).addClass('selected');
	}
});




