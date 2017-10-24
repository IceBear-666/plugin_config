if ($('#jm_qiuck_cover')) {$('#jm_qiuck_cover').fadeIn();setTimeout(function(){$('#jm_qiuck_cover').fadeOut()},1000)}
//基本信息
if($('#realname').length){
	$('#realname').val($('#mt_name').html()); 
}
if( $('#apply-girl').length && $('#mt_sex').html() && $('#mt_sex').html() == '女' ){
	$('#apply-girl').click();
}
if( $('#apply-boy').length && $('#mt_sex').html() && $('#mt_sex').html() == '男' ){
	$('#apply-boy').click();
}
if($('#apply-birth').length && $('#mt_birth').html()){
	var birth = $('#mt_birth').html().split('-');
	for (var i in birth) {
	    if (birth[i].length < 2) {
	        birth[i] = '0'+birth[i];
	    }
	    var birthr=birth.join('-');
	}
	$('#apply-birth').val(birthr); 
} 
if($('#apply-nations').length){
	$('#apply-nations').val($('#mt_nation').html()); 
}
if($('#apply-roots').length){
	$('#apply-roots').val($('#mt_nativeplace').html()+$('#mt_native_city').html()); 
}
if($('#apply-card-num').length){
	$('#apply-card-num').val($('#mt_id').html()); 
}
if ($('select[name=\"apply-degree\"]').length) {
	var edu = $('select[name=\"apply-degree\"]').get(0);
	if($('#mt_edu').html() && $('#mt_edu').html() == '大学专科'){
	    edu.options[1].selected=true; }
	else if($('#mt_edu').html() && ($('#mt_edu').html() == '大学本科-一本' || $('#mt_edu').html() == '大学本科-二本' || $('#mt_edu').html() == '大学本科-三本')){
		edu.options[2].selected=true; }
	else if($('#mt_edu').html() && $('#mt_edu').html() == '硕士研究生'){
		edu.options[3].selected=true; }
	else if($('#mt_edu').html() && $('#mt_edu').html() == '博士研究生'){
		edu.options[4].selected=true; }
	else{edu.options[5].selected=true;}
}
if($('#apply-phone').length){
	$('#apply-phone').val($('#mt_tel').html()); 
}
if($('#apply-email').length){
	$('#apply-email').val($('#mt_email').html()); 
}
if($('#apply-nlive').length){
	$('#apply-nlive').val($('#mt_livecity_pro').html()+$('#mt_livecity_city').html()); 
}
if($('#apply-urg').length){
	$('#apply-urg').val($('#mt_jjlxr').html()); 
}
if($('#apply-urg-phone').length){
	$('#apply-urg-phone').val($('#mt_jjlxrtel').html()); 
}
if ($('select[name=\"eng-level\"]').length) {
	var edu = $('select[name=\"eng-level\"]').get(0);
	if($('.infoEnglishSkill .mt_skillEngLevel').html() && $('.infoEnglishSkill .mt_skillEngLevel').html() == '大学英语四级'){
	    edu.options[1].selected=true; }
	else if($('.infoEnglishSkill .mt_skillEngLevel').html() && $('.infoEnglishSkill .mt_skillEngLevel').html() == '大学英语六级'){
		edu.options[2].selected=true; }
	else if($('.infoEnglishSkill .mt_skillEngLevel').html() && $('.infoEnglishSkill .mt_skillEngLevel').html() == '专业四级'){
		edu.options[3].selected=true; }
	else if($('.infoEnglishSkill .mt_skillEngLevel').html() && $('.infoEnglishSkill .mt_skillEngLevel').html() == '专业八级'){
		edu.options[4].selected=true; }
}
if($('#eng-mark').length){
	$('#eng-mark').val($('.infoEnglishSkill .mt_skillEngSorce').html()); 
}
for (var k = 1; k < $('select[name=\"eng-other\"]').get(0).options.length; k++) {
    if ($('select[name=\"eng-other\"]').get(0).options[k].innerHTML.indexOf($('.infoOtEnglishSkill .mt_otherSkillEngLevel').html(),0) != -1) {
        $('select[name=\"eng-other\"]').get(0).options[k].selected = true;
        if($('#eng-othmark').length){
			$('#eng-othmark').val($('.infoOtEnglishSkill .mt_otherSkillEngSorce').html()); 
		}
    }
}
if($('#other-zhshu').length){
	$('#other-zhshu').val($('.infoplcerti .mt_certificateName').html()+'\\n'+$('.infoplcerti .mt_getDate').html()+'\\n'+$('.infoplcerti .mt_certificateDes').html()+'\\n'+$('.infoplcerti .mt_issuing').html()); 
}
//教育
for (var i = 0; i <$('.infopledu').length; i++) {
	if($('input[name=\"edu-start[]\"]').eq(i) && $('.infopledu .mt_startYear').eq(i).html()){
        if ($('.infopledu .mt_startYear').eq(i).html().length <7) {
            $('input[name=\"edu-start[]\"]').eq(i).val($('.infopledu .mt_startYear').eq(i).html().split('-').join('-0')+'-01');}
        else{$('input[name=\"edu-start[]\"]').eq(i).val($('.infopledu .mt_startYear').eq(i).html()+'-01')}
    }
    if($('input[name=\"edu-end[]\"]').eq(i) && $('.infopledu .mt_endYear').eq(i).html()){
        if ($('.infopledu .mt_endYear').eq(i).html().length <7) {
            $('input[name=\"edu-end[]\"]').eq(i).val($('.infopledu .mt_endYear').eq(i).html().split('-').join('-0')+'-01');}
        else{$('input[name=\"edu-end[]\"]').eq(i).val($('.infopledu .mt_endYear').eq(i).html()+'-01')}
    }
    if ($('select[name=\"edu-degree[]\"]').eq(i).length && $('.infopledu .mt_education').eq(i).html()) {	
		if($('.infopledu .mt_education').eq(i).html() == '硕士研究生'){
			$('select[name=\"edu-degree[]\"]').eq(i).get(0).options[3].selected=true;;
		}
		else if($('.infopledu .mt_education').eq(i).html() == '博士研究生'){
			$('select[name=\"edu-degree[]\"]').eq(i).get(0).options[4].selected=true;;
		}	
		else if($('.infopledu .mt_education').eq(i).html() == '大学专科'){
	       $('select[name=\"edu-degree[]\"]').eq(i).get(0).options[1].selected=true;
	    }
	    else if(($('.infopledu .mt_education').eq(i).html() == '大学本科-一本' || $('.infopledu .mt_education').eq(i).html() == '大学本科-二本' || $('.infopledu .mt_education').eq(i).html() == '大学本科-三本' || $('.infopledu .mt_education').eq(i).html() == '海外本科')){
		   $('select[name=\"edu-degree[]\"]').eq(i).get(0).options[2].selected=true;;
		}
		else{$('select[name=\"edu-degree[]\"]').eq(i).get(0).options[5].selected=true;;}
    }
    if($('input[name=\"edu-college[]\"]').eq(i).length){
		$('input[name=\"edu-college[]\"]').eq(i).val($('.infopledu .mt_academy').eq(i).html()); 
	}
}
//项目经历
for (var i = 0; i <$('.infoproject').length; i++) {
	if ($('select[name=\"active-type[]\"]').eq(i).length && $('.infoproject').eq(i).html()) {
		$('select[name=\"active-type[]\"]').eq(i).get(0).options[1].selected=true;
	}
	if($('input[name=\"active-start[]\"]').eq(i) && $('.infoproject .mt_prostarttime').eq(i).html()){
        if ($('.infoproject .mt_prostarttime').eq(i).html().length <7) {
            $('input[name=\"active-start[]\"]').eq(i).val($('.infoproject .mt_prostarttime').eq(i).html().split('-').join('-0')+'-01');}
        else{$('input[name=\"active-start[]\"]').eq(i).val($('.infoproject .mt_prostarttime').eq(i).html()+'-01')}
    }
    if($('input[name=\"active-end[]\"]').eq(i) && $('.infoproject .mt_proendtime').eq(i).html()){
        if ($('.infoproject .mt_proendtime').eq(i).html().length <7) {
            $('input[name=\"active-end[]\"]').eq(i).val($('.infoproject .mt_proendtime').eq(i).html().split('-').join('-0')+'-01');}
        else{$('input[name=\"active-end[]\"]').eq(i).val($('.infoproject .mt_proendtime').eq(i).html()+'-01')}
    }
    if ($('input[name=\"active-item[]\"]').eq(i).length && $('.infoproject .mt_projectName').eq(i).html()){
		$('input[name=\"active-item[]\"]').eq(i).val($('.infoproject .mt_projectName').eq(i).html()); 
	}
	if ($('textarea[name=\"active-other[]\"]').eq(i).length && $('.infoproject .mt_projectRemark').eq(i).html()){
		$('textarea[name=\"active-other[]\"]').eq(i).val($('.infoproject .mt_projectRemark').eq(i).html()); 
	}
}