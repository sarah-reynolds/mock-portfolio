		$(document).ready(function() {
		  
		  $('.flexslider').flexslider({
		    animation: "slide"
		  });


		$('.grid').isotope({
		  // options
		  itemSelector: '.grid-item',
		  layoutMode: 'fitRows'
		});


		$(this).click(function(){
			var filterValue = $(this).attr('data-filter');
			$('.grid').isotope({
		  	filter: filterValue
			});
		});


		// $('#javascript').click(function(){
		// 	$('.grid').isotope({
		//   filter: '.javascript',
		// 	});
		// })

		// $('#node').click(function(){
		// 	$('.grid').isotope({
		//   filter: '.node',
		// 	});
		// })

		// $('#react').click(function(){
		// 	$('.grid').isotope({
		//   filter: '.react',
		// 	});
		// })
		// $('.filter-button-group').on('click', 'button', function(){
		// var filterValue = $(this).attr('data-filter');
		// $grid.isoptope({ filter: filterValue });

		// })

		// $('.grid').isotope({ 
		// 	filter: '.css' 
		// });
		

	});

