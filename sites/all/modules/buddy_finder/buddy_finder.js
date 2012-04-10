Drupal.behaviors.buddy_finder = function(context) {
	$('#edit-submittt', context).click(function () {
			alert($("input[name=type]:checked").val());
			
			return false;
		});
}