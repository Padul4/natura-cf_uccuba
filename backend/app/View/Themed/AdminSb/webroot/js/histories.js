$("#HistoryCategoryId").on("change", function() {
	if ($(this).val() == 7) {
		$('#validateCronicasDoGregorio').hide();
	} else {
		$('#validateCronicasDoGregorio').show();
	}
});

$("#HistoryCategoryId").trigger("change"); 