(function($){
	// This is where you will write your function for the programming challenge
	// Do not commit console.log statements
	// Use ajax to reach the api endpoint
	// Whether or not you use jQuery, you still have to fix the jQuery errors. Removing jQuery is not fixing the problem.
	//Luke Kljucaric LEK70 3793943

	$mouseover = $('.mouseover');
	$click     = $('.click');
	$submit       = $('.submit');
	$timeout   = $('.timeout');
	$title	   = $('.title');
	$content   = $('.content');
	var first = true;

	$mouseover.on('mouseover', function() {
		$this = $(this);
		$(this).html('Scrooge McDuck!');
		$(this).height($(this).height() + 50);
	});

	$click.on('click', function() {
		$(this).html('Peace Out!');
		$(this).fadeOut(1500);
		return false;
	});

	$submit.submit(function(e) {
		e.preventDefault();
		if ($(this).find('input[type="text"]').val() !== '') {
			$(this).find('input').each(function() {
				$(this).fadeOut('slow');
			});
			$(this).append('<h2>Congratulations! You\'ve entered some text!</h2>');
		}
	});

	$(document).ready(function() {
		setTimeout(function() {
			$timeout.fadeIn('slow');
		}, 1000);
	});

	//hey matt I was in class

	$title.on('click', function() {
		$.ajax({
			url: "http://www.mattbowytz.com/simple_api.json?data=quizData",
			success: function(result) {
				var data = result.data;

				$content.empty();
				$content.append('<div class="next"></div><div class="do"></div>');
				$next = $('.next');
				$doButtons = $('.do');

				if(document.cookie != '')
				{
					var showCookie = document.cookie.split('=');
					$next.html(showCookie[1]);
				}

				$doButtons.append($('<button>Change It</button>').click(function () {
					$next.html('<h2>' + data[Math.floor(Math.random() * data.length)] + '</h2>');
					if(first)
					{
						first = false;
						$doButtons.append('<button>Keep It</button>').click(function () {
							document.cookie = "val=" + $next.html();
						});
					}
				}));
			}
		});
	});


})(jQuery);