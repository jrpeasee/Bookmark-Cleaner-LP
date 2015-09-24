;(function(){


function toggleMenu(){
	$('#menuToggle, .fa-close').on('click', function(){
		$('#theMenu').toggleClass('menu-open'),
		$('body').toggleClass('push-body-left');

	})
}

toggleMenu();

})(jQuery)