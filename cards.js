$(document).ready(function() {

	var inputDateRange = '2017/01/09 00:00 - 2017/01/16 23:00';
	var startMoment = moment.utc(inputDateRange.split(' - ')[0], 'YYYY/MM/DD HH:mm');
	var endMoment = moment.utc(inputDateRange.split(' - ')[1], 'YYYY/MM/DD HH:mm');

	$('input[name="inputDateRange"]').daterangepicker({
		maxDate: moment.utc().startOf('day').add(23, 'hours'),
		minDate: moment.utc().add(-60, 'days').startOf('day'),
		startDate: startMoment,
		endDate: endMoment,
		dateLimit: {days: 60},
		timePicker: true,
		timePickerIncrement: 60,
		format: 'YYYY/MM/DD HH:mm',
		timeZone: '00:00'
	}
	);

	$('#inputDateRange').data('daterangepicker').setStartDate(startMoment);
	$('#inputDateRange').data('daterangepicker').setEndDate(endMoment);

	$('#querySubmit').click(function(){
		process_click()
	});
	

});



function process_click() {
	
}

