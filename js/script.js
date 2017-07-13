/*
	Many Worlds Scripts
	
	Author: 	Ben Cook
	Version: 	0.8
	Date: 		13/07/2017
*/

$(document).ready(function(){
	// Get modal
	var modal = $('#modal-main');
	var modalbg = $('#modal-bg');

	// Get modal image, caption and descriptions
	var modalImg = $('#modal-img');
	var captionText = $('#caption');
	var descText = $('#desc');
	
	$('.world-image').click(function(event){
		var imgName = $(this).find('img').attr('id') + '.jpg';
		var imgTitle = $(this).find('.img-name').text();
		var imgDesc = $(this).find('.img-desc').text();
		openModal(imgName, imgTitle, imgDesc);
	});

	// When the user clicks on <span> (x), close the modal
	$('.close-modal').click(function() { 
		closeModal();
	});
	
	// When the user clicks on <span> (x), close the modal
	$('#modal-bg').click(function() { 
		closeModal();
	});
	
	// Toggle visibility of About button, and change 'selected' attribute to match
	$('.about-button').click(function(){
		$('#info-section').slideToggle("slow");
		$('.about-button').toggleClass('selected');
	});
	
	// Alternative exit button (cross in top right-hand corner) toggle for About section
	$('.close-about').click(function(){
		$('#info-section').slideToggle("slow");
		$('.about-button').toggleClass('selected');
	});
	
	// Open Modal dialog using given img, caption and description
	function openModal(imgName, imgTitle, imgDesc){
		// Display modal
		modal.css('display', 'block');
		modalbg.css('display', 'block');
		
		// Trigger background blur effect by adding relevant class
		$('#main').toggleClass( 'blur-effect', true );
		
		// Add image from image name
		modalImg.attr('src', 'images/' + imgName); 
		
		// Setup image caption and description
		captionText.html(imgTitle);
		descText.html(imgDesc);
	}
	
	// Close down modal
	function closeModal(){
		// Hide modal (no need to destroy current image data since not visible)
		modal.css('display', 'none');
		modalbg.css('display', 'none');
		
		// Remove blur effect from background
		$('#main').toggleClass( 'blur-effect', false );
	}
});