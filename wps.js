if ($('#jm_qiuck_cover')) {$('#jm_qiuck_cover').fadeIn();setTimeout($('#jm_qiuck_cover').fadeOut(),3000);}
//个人信息
if($('input[name=\"info[name]\"]').length){
	$('input[name=\"info[name]\"]').val($('#mt_name').html()); 
}
if( $('input[name=\"info[sex]\"]') && $('#mt_sex').html() == '女'){
	$('input[name=\"info[sex]\"]').eq(1).click();
}
if( $('input[name=\"info[sex]\"]') && $('#mt_sex').html() == '男'){
	$('input[name=\"info[sex]\"]').eq(0).click();
}
if($('input[name=\"info[idcard]\"]').length && $('#mt_idtype').html() == '身份证'){
	$('input[name=\"info[idcard]\"]').val($('#mt_id').html()); 
}
if($('select[name=\"info[birthYear]\"]') && $('#mt_biryear').html()){
	var birthYear = document.getElementById('birthYear');  
	for(var i=0; i<birthYear.options.length; i++){
	    if(birthYear.options[i].innerHTML == $('#mt_biryear').html()){
	       birthYear.options[i].selected = true;   break;   }  }
}
if($('select[name=\"info[birthMonth]\"]') && $('#mt_birmonth').html()){
	var birthMonth = document.getElementById('birthMonth');  
	for(var i=0; i<birthMonth.options.length; i++){
	    if(birthMonth.options[i].innerHTML == $('#mt_birmonth').html()){
	       birthMonth.options[i].selected = true;   break;   }  }
}
if($('select[name=\"info[birthDay]\"]') && $('#mt_birday').html()){
	var birthDay = document.getElementById('birthDay');  
	for(var i=0; i<birthDay.options.length; i++){
	    if(birthDay.options[i].innerHTML == $('#mt_birday').html()){
	       birthDay.options[i].selected = true;   break;   }  }
}
if($('input[name=\"info[mobile]\"]').length){
	$('input[name=\"info[mobile]\"]').val($('#mt_tel').html()); 
}
if($('input[name=\"info[email]\"]').length){
	$('input[name=\"info[email]\"]').val($('#mt_email').html()); 
}
if($('input[name=\"info[school]\"]').length){
	$('input[name=\"info[school]\"]').val($('.infopledu .mt_schoolName').html()); 
}
if($('input[name=\"info[department]\"]').length){
	$('input[name=\"info[department]\"]').val($('.infopledu .mt_academy').html()); 
}
if($('input[name=\"info[speciality]\"]').length){
	$('input[name=\"info[speciality]\"]').val($('.infopledu .mt_professional').html()); 
}
if ($('select[name=\"info[educationId]\"]').length) {
	var edu = $('select[name=\"info[educationId]\"]').get(0);
	if($('.infopledu .mt_education').html() && $('.infopledu .mt_education').html() == '大学专科'){
	    edu.options[1].selected=true; }
	else if($('.infopledu .mt_education').html() && ($('.infopledu .mt_education').html() == '大学本科-一本' || $('.infopledu .mt_education').html() == '大学本科-二本' || $('.infopledu .mt_education').html() == '大学本科-三本' || $('.infopledu .mt_education').html() == '海外本科')){
		edu.options[2].selected=true; }
	else if($('.infopledu .mt_education').html() && $('.infopledu .mt_education').html() == '硕士研究生'){
		edu.options[3].selected=true; }
	else if($('.infopledu .mt_education').html() && $('.infopledu .mt_education').html() == '博士研究生'){
		edu.options[4].selected=true; }
}
if($('select[name=\"info[eduYear]\"]') && $('.infopledu .mt_endYearY').html()){
	var birthYear = $('select[name=\"info[eduYear]\"]').get(0);  
	for(var i=0; i<birthYear.options.length; i++){
	    if(birthYear.options[i].innerHTML == $('.infopledu .mt_endYearY').html()){
	       birthYear.options[i].selected = true;   break;   }  }
}
if($('select[name=\"info[eduMonth]\"]') && $('.infopledu .mt_endYearM').html()){
	var birthMonth = $('select[name=\"info[eduMonth]\"]').get(0);  
	for(var i=0; i<birthMonth.options.length; i++){
	    if(birthMonth.options[i].innerHTML == $('.infopledu .mt_endYearM').html()){
	       birthMonth.options[i].selected = true;   break;   }  }
}
if($('.infoproject .mt_projectRemark').length && $('textarea[name=\"info[project]\"]')){
	$('#hasProject').click();
	$('textarea[name=\"info[project]\"]').val($('.infoproject .mt_projectName').html()+'\\n'+$('.infoproject .mt_projectRemark').html()+'\\n'+$('.infoproject .mt_projectDuty').html()); 
}
if($('.mt_companyName').length && $('textarea[name=\"info[practice]\"]')){
	$('input[name=\"info[hasPractice]\"]').eq(0).click();
	$('textarea[name=\"info[practice]\"]').val($('.mt_companyName').html()+'\\n'+$('.mt_department').html()+'\\n'+$('.mt_positionName').html()+'\\n'+$('.mt_workContent').text()); 
}
if($('input[name=\"info[activeProveName]\"]').length){
	$('input[name=\"info[activeProveName]\"]').val($('.infopledu .mt_tutorname').html()); 
}
if($('input[name=\"info[activeProveIntro]\"]').length && $('.infopledu .mt_tutorname').html()){
	$('input[name=\"info[activeProveIntro]\"]').val('导师'); 
}
if($('input[name=\"info[activeProveMobile]\"]').length && $('.infopledu .mt_tutorphone').html()){
	$('input[name=\"info[activeProveMobile]\"]').val($('.infopledu .mt_tutorphone').html()); 
}