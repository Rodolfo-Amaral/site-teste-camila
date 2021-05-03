$(function () {
	$('#i1').click(function () {
		$('#i1').show();
		$('#i2').hide();
		$('#i3').hide();
		$('#i4').hide();
	});
	$('#i2').click(function () {
		$('#i1').hide();
		$('#i2').show();
		$('#i3').hide();
		$('#i4').hide();
	});
	$('#i3').click(function () {
		$('#i1').hide();
		$('#i2').hide();
		$('#i3').show();
		$('#i4').hide();
	});
	$('#i4').click(function () {
		$('#i1').hide();
		$('#i2').hide();
		$('#i3').hide();
		$('#i4').show();
	});

});