Drupal.behaviors.property = function(context) {
	$('#img1_button', context).click(function () {
			//alert($(this).prev("img").attr("src"));
			$(this).hide();
			$(this).prev("img").replaceWith("<div>Are you sure you want to delete?<input type='button' value='yes' class='yes-button'/><input type='button' value='no' class='no-button'/></div>");
		});
	
	$('.yes-button', context).click(function(){
		alert('yes');
	});
}