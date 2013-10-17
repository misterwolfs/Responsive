var $menu = $('.menu-title');

$(function (){
	

	$menu.on('click', function() {
		menuClicked($(this));
		
	});

	$( window ).scroll(function() {
	  	//menuClose();

	  	//$('.menu-title').delay( 800 ).css({'position' : 'fixed'});


	  	//menuClose();
	});
})

function menuClicked($this) {
	var $menu_title = $this;

	if($menu_title.hasClass('opened'))
	{
		menuClose();
	}
	else {
		menuOpen();
	}
}

function menuClose() {
	console.log('close');

	$('.navigation ul li').delay(500).animate({
		marginLeft : "-200px"
	}, 100);

	$('.navigation').animate({
		marginTop : "-159px"
	}, 500, function() {
		$menu.text('menu').toggleClass('opened')
	});


}

function menuOpen() {
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
}