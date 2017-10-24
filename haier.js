if ($('#jm_qiuck_cover')) {$('#jm_qiuck_cover').fadeIn();setTimeout(function(){$('#jm_qiuck_cover').fadeOut()},1000)}
//基本资料
if ($('input[name=\"realname\"]')) {
	$('input[name=\"realname\"]').val($('#mt_name').html());
}
if ($('.radiobox').eq(0).find('div').length && $('#mt_sex').html() == '男') {
	$('.radiobox').eq(0).find('div').click();
}
if ($('.radiobox').eq(0).find('div').length && $('#mt_sex').html() == '女') {
	$('.radiobox').eq(1).find('div').click();
}
if ($('input[name=\"birthday\"]')) {
	$('input[name=\"birthday\"]').val($('#mt_birth').html());
}
if ($('input[name=\"mobile\"]')) {
	$('input[name=\"mobile\"]').val($('#mt_tel').html());
}
if ($('input[name=\"idcard\"]') && $('#mt_id').html()) {
	$('input[name=\"idcard\"]').val($('#mt_id').html());
}
if ($('input[name=\"email\"]')) {
	$('input[name=\"email\"]').val($('#mt_email').html());
}
//校园
var ev = document.createEvent('HTMLEvents');
ev.initEvent('change', true, false);
if($('select[name=\"top_location_school_address\"]').length && $('#mt_nativeplace').html()) {
	var address = $('select[name=\"top_location_school_address\"]').get(0);  
	var mt_nativeplace = $('#mt_nativeplace').html();   
	for(var i=0; i<address.options.length; i++){
	   if(address.options[i].innerHTML.indexOf(mt_nativeplace,0) !=-1){
	   address.options[i].selected = true; 
	   $('select[name=\"top_location_school_address\"]').get(0).dispatchEvent(ev);
	   break; }  
	}
}
window.setTimeout(function(){
	if($('select[name=\"sub_location_school_address\"]').length && $('#mt_native_city').html()){
		var addresscity = $('select[name=\"sub_location_school_address\"]').get(0);    
		for(var i=0; i<addresscity.options.length; i++){
		   if(addresscity.options[i].innerHTML.indexOf($('#mt_native_city').html(),0) !=-1){
		   addresscity.options[i].selected = true; break; }  
		}
	}
 },200);
if ($('#bodyheight').length) {
	$('#bodyheight').val($('#mt_height').html());
}
if ($('#bodyweight').length) {
	$('#bodyweight').val($('#mt_weight').html());
}
if($('select[name=\"select_english_grade\"]').length && $('.infoEnglishSkill .mt_skillEngLevel').html()) {
	var Language = $('select[name=\"select_english_grade\"]').get(0);
	if($('.infoEnglishSkill .mt_skillEngLevel').html() == '大学英语四级'){
		Language.options[2].selected=true; }
	else if($('.infoEnglishSkill .mt_skillEngLevel').html() == '大学英语六级' ){
		Language.options[3].selected=true; }
	else if($('.infoEnglishSkill .mt_skillEngLevel').html() == '专业四级'){
		Language.options[4].selected=true; }
	else if($('.infoEnglishSkill .mt_skillEngLevel').html() == '专业八级' ){
		Language.options[5].selected=true; }
}
if ($('#english_score').length) {
	$('#english_score').val($('.infoEnglishSkill .mt_skillEngSorce').html());
}   
if ($('#other_language').length) {
	$('#other_language').val($('.infoOtherSkill .mt_skillOtherLang').html());
}
if ($('#other_language_level').length) {
	$('#other_language_level').val($('.infoOtherSkill .mt_skillGraspLevel').html());
}
if($('select[name=\"political\"]').length && $('#mt_polistatus').html()) {
	var address = $('select[name=\"political\"]').get(0);  
	var mt_polistatus = $('#mt_polistatus').html();   
	for(var i=0; i<address.options.length; i++){
	   if(address.options[i].innerHTML.indexOf(mt_polistatus,0) !=-1){
	   address.options[i].selected = true; 
	   break; }  
	}
}
if ($('#txtiptintroduction').length) {
	$('#txtiptintroduction').val($('#mt_selfIntro').html());
} 
//教育
for (var i = 0; i <$('.infopledu').length; i++) {
    var count = $('.Archives_list').eq(2).find('ul li').length;
    if($('input[name=\"school_name\"]').length && $('.theme_title h3').html() == '新增教育经历' && $('.infopledu .mt_schoolName').eq(count).html()){
        $('input[name=\"school_name\"]').val($('.infopledu .mt_schoolName').eq(count).html()); 
    }
    if($('input[name=\"start_time\"]').length && $('.theme_title h3').html() == '新增教育经历' && $('.infopledu .mt_startYear').eq(count).html()){
        if ($('.infopledu .mt_startYear').eq(count).html().length <7) {
            $('input[name=\"start_time\"]').val($('.infopledu .mt_startYear').eq(count).html().split('-').join('-0'));}
        else{$('input[name=\"start_time\"]').val($('.infopledu .mt_startYear').eq(count).html())}
    }
    if($('input[name=\"end_time\"]').length && $('.theme_title h3').html() == '新增教育经历' && $('.theme_title h3').html() == '新增教育经历' && $('.infopledu .mt_endYear').eq(count).html()){
        if ($('.infopledu .mt_endYear').eq(count).html().length <7) {
            $('input[name=\"end_time\"]').val($('.infopledu .mt_endYear').eq(count).html().split('-').join('-0'));}
        else{$('input[name=\"end_time\"]').val($('.infopledu .mt_endYear').eq(count).html())}
    }
    if ($('input[name=\"major\"]').length && $('.theme_title h3').html() == '新增教育经历' ) {
        $('input[name=\"major\"]').val($('.infopledu .mt_professional').eq(count).html());
    }
    if($('select[name=\"select_education\"]').length && $('.theme_title h3').html() == '新增教育经历' && $('.infopledu .mt_education').eq(count).html()) {
        var education = $('select[name=\"select_education\"]').get(0);
        if($('.infopledu .mt_education').eq(count).html() == '大学本科-一本' || $('.infopledu .mt_education').eq(count).html() == '大学本科-二本' || $('.infopledu .mt_education').eq(count).html() == '大学本科-三本' || $('.infopledu .mt_education').eq(count).html() == '海外本科'){
            education.options[6].selected=true; }
        else if($('.infopledu .mt_education').eq(count).html() == '博士研究生' ){
            education.options[2].selected=true; }
        else if($('.infopledu .mt_education').eq(count).html() == '硕士研究生'){
            education.options[5].selected=true; }
        else if($('.infopledu .mt_education').eq(count).html() == 'MBA' ){
            education.options[4].selected=true; }
        else if($('.infopledu .mt_education').eq(count).html() == '大学专科' ){
            education.options[7].selected=true; }
    }
    if ($('textarea[name=\"experience\"]').length && $('textarea[name=\"experience\"]').parent().prev('div').html() == '主修课程' && $('.infopledu .mt_major').eq(count).html()) {
        $('textarea[name=\"experience\"]').val($('.infopledu .mt_major').eq(count).html());
    }

}
//获奖
for (var i = 0; i <$('.infoschaward').length; i++) {
	var count = $('.Archives_list').eq(3).find('.Archives_list ul li').eq(0).length;
	if($('input[name=\"awardname\"]').length && $('.theme_title h3').html() == '新增获奖经历' && $('.infoschaward .mt_awardsName').eq(count).html()){
        $('input[name=\"awardname\"]').val($('.infoschaward .mt_awardsName').eq(count).html()); 
    }
    if($('select[name=\"awardlevel\"]').length && $('.theme_title h3').html() == '新增获奖经历' && $('.infoschaward .mt_awardsType').eq(count).html()) {
        var award = $('select[name=\"awardlevel\"]').get(0);
        if($('.infoschaward .mt_awardsType').eq(count).html() == '国家级' ){
            award.options[0].selected=true; }
        else if($('.infoschaward .mt_awardsType').eq(count).html() == '学校级' ){
            award.options[3].selected=true; }
    }
	if($('input[name=\"awardtime\"]').length && $('.theme_title h3').html() == '新增获奖经历' && $('.infoschaward .mt_awardsDate').eq(count).html()){
        if ($('.infoschaward .mt_awardsDate').eq(count).html().length <7) {
            $('input[name=\"awardtime\"]').val($('.infoschaward .mt_awardsDate').eq(count).html().split('-').join('-0')+'-01');}
        else{$('input[name=\"awardtime\"]').val($('.infoschaward .mt_awardsDate').eq(count).html()+'-01')}
    }
}
//学校经历
for (var i = 0; i <$('.infoschoolclub').length; i++) {
	var count = $('.Archives_list').eq(3).find('.Archives_list').eq(1).find('ul li').length;
	if($('input[name=\"start_time\"]').length && $('.theme_title h3').html() == '新增学生工作经历' && $('.infoschoolclub .mt_startDate').eq(count).html()){
        if ($('.infoschoolclub .mt_startDate').eq(count).html().length <7) {
            $('input[name=\"start_time\"]').val($('.infoschoolclub .mt_startDate').eq(count).html().split('-').join('-0'));}
        else{$('input[name=\"start_time\"]').val($('.infoschoolclub .mt_startDate').eq(count).html())}
    }
    if($('input[name=\"end_time\"]').length && $('.theme_title h3').html() == '新增学生工作经历' && $('.infoschoolclub .mt_endDate').eq(count).html()){
        if ($('.infoschoolclub .mt_endDate').eq(count).html().length <7) {
            $('input[name=\"end_time\"]').val($('.infoschoolclub .mt_endDate').eq(count).html().split('-').join('-0'));}
        else{$('input[name=\"end_time\"]').val($('.infoschoolclub .mt_endDate').eq(count).html())}
    }
	if($('textarea[name=\"experience\"]').length && $('.theme_title h3').html() == '新增学生工作经历' && $('.infoschoolclub .mt_workDes').eq(count).html()){
        $('textarea[name=\"experience\"]').val($('.infoschoolclub .mt_workDes').eq(count).html()); 
    }
}
//实习
for (var i = 0; i <$('.infoparttimejobs').length; i++) {
	var count = $('.Archives_list').eq(3).find('.Archives_list').eq(2).find('ul li').length;
	if($('input[name=\"company_name\"]').length && $('.theme_title h3').html() == '新增实习/项目经历' && $('.infoparttimejobs .mt_companyName').eq(count).html()){
        $('input[name=\"company_name\"]').val($('.infoparttimejobs .mt_companyName').eq(count).html()); 
    }
	if($('input[name=\"start_time\"]').length && $('.theme_title h3').html() == '新增实习/项目经历' && $('.infoschoolclub .mt_startDate').eq(count).html()){
        if ($('.infoparttimejobs .mt_startDate').eq(count).html().length <7) {
            $('input[name=\"start_time\"]').val($('.infoparttimejobs .mt_startDate').eq(count).html().split('-').join('-0'));}
        else{$('input[name=\"start_time\"]').val($('.infoparttimejobs .mt_startDate').eq(count).html())}
    }
    if($('input[name=\"end_time\"]').length && $('.theme_title h3').html() == '新增实习/项目经历' && $('.infoparttimejobs .mt_endDate').eq(count).html()){
        if ($('.infoparttimejobs .mt_endDate').eq(count).html().length <7) {
            $('input[name=\"end_time\"]').val($('.infoparttimejobs .mt_endDate').eq(count).html().split('-').join('-0'));}
        else{$('input[name=\"end_time\"]').val($('.infoparttimejobs .mt_endDate').eq(count).html())}
    }
	if($('textarea[name=\"experience\"]').length && $('.theme_title h3').html() == '新增实习/项目经历' && $('.infoparttimejobs .mt_workContent').eq(count).text()){
        $('textarea[name=\"experience\"]').val($('.infoparttimejobs .mt_workContent').eq(count).text()); 
    }
}

