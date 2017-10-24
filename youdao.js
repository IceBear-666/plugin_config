if ($('#jm_qiuck_cover')) {$('#jm_qiuck_cover').fadeIn();setTimeout(function(){$('#jm_qiuck_cover').fadeOut()},1000)}
//个人信息
if($('#name').length){
	$('#name').val($('#mt_name').html()); 
}
if( $('input[name=\"gender\"]') && $('#mt_sex').html() && $('#mt_sex').html() == '女' ){
	$('input[name=\"gender\"]').eq(1).click();
}
if( $('input[name=\"gender\"]') && $('#mt_sex').html() && $('#mt_sex').html() == '男' ){
	$('input[name=\"gender\"]').eq(0).click();
}
if($('input[name=\"idcard\"]').length && $('#mt_id').html()){
	$('input[name=\"idcard\"]').val($('#mt_id').html()); 
}
if($('input[name=\"mobile\"]').length && $('#mt_tel').html()){
	$('input[name=\"mobile\"]').val($('#mt_tel').html()); 
}
if($('input[name=\"phone\"]').length && $('#mt_gudingtel').html()){
	$('input[name=\"phone\"]').val($('#mt_gudingtel').html()); 
}
if($('input[name=\"address\"]').length && $('#mt_add').html()){
	$('input[name=\"address\"]').val($('#mt_add').html()); 
}
if($('#postcode').length && $('#mt_zip').html()){
	$('#postcode').val($('#mt_zip').html()); 
}
if($('#emeyContact').length && $('#mt_jjlxr').html()){
	$('#emeyContact').val($('#mt_jjlxr').html()); 
}
if($('#emeyContactMobile').length && $('#mt_jjlxrtel').html()){
	$('#emeyContactMobile').val($('#mt_jjlxrtel').html()); 
}
//教育
var ev = document.createEvent('HTMLEvents');
ev.initEvent('change', true, false);
if ($('select[name=\"education\"]').length && $('.infopledu .mt_education').html()) {
	var edu = document.getElementById('education');
	if($('.infopledu .mt_education').html() && $('.infopledu .mt_education').html() == '大学专科'){
	    edu.options[4].selected=true; document.getElementById('education').dispatchEvent(ev);}
	else if($('.infopledu .mt_education').html() && ($('.infopledu .mt_education').html() == '大学本科-一本' || $('.infopledu .mt_education').html() == '大学本科-二本' || $('.infopledu .mt_education').html() == '大学本科-三本' || $('.infopledu .mt_education').html() == '海外本科')){
		edu.options[1].selected=true; document.getElementById('education').dispatchEvent(ev);}
	else if($('.infopledu .mt_education').html() && $('.infopledu .mt_education').html() == '硕士研究生'){
		edu.options[2].selected=true; document.getElementById('education').dispatchEvent(ev);}
	else if($('.infopledu .mt_education').html() && $('.infopledu .mt_education').html() == '博士研究生'){
		edu.options[3].selected=true; document.getElementById('education').dispatchEvent(ev);}
	else if($('.infopledu .mt_education').html() && $('.infopledu .mt_education').html() == 'MBA'){
		edu.options[5].selected=true; document.getElementById('education').dispatchEvent(ev);}
	if($('#bachelorSchoolother').length && $('.infopledu .mt_schoolName').html()){
		$('#bachelorSchoolother').val($('.infopledu .mt_schoolName').html()); 
	}
}
if($('#department').length && $('.infopledu .mt_professional').html()){
		$('#department').val($('.infopledu .mt_professional').html()); 
}