		$(document).ready(function() {
		  
		  $('.flexslider').flexslider({
		    animation: "slide"
		  });


// ======== INITIATE ISOTOPE ========//

		$('.grid').isotope({ // identify the wrapper div that contains the elements to be filtered
		  // options
		  itemSelector: '.grid-item', // the class name that identifies the class of divs to be filtered
		  layoutMode: 'fitRows'
		});


// ======== CREATE CLICK FUNCTIONS FOR EACH BUTTON ========//

		$('#css').click(function(){ // the button id to be clicked
			$('.grid').isotope({ 	//isotope function grabs the items in the wrapper
		  filter: '.css',			// filter the items with this class
			});
		})

		$('#javascript').click(function(){
			$('.grid').isotope({
		  filter: '.javascript',
			});
		})

		$('#node').click(function(){
			$('.grid').isotope({
		  filter: '.node',
			});
		})

		$('#react').click(function(){
			$('.grid').isotope({
		  filter: '.react',
			});
		})




	});

