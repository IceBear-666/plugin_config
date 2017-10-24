if ($('#jm_qiuck_cover')) {$('#jm_qiuck_cover').fadeIn();setTimeout(function(){$('#jm_qiuck_cover').fadeOut()},1000)}
//个人信息
if ($('input[name=\"姓名\"]').length){
	$('input[name=\"姓名\"]').val($('#mt_name').html()); 
}
if ( $('div[data-name=\"name\"]').find('div') && $('#mt_sex').html() && $('#mt_sex').html() == '女' ){
	$('div[data-name=\"name\"]').find('div').eq(1).click();
}
if ( $('div[data-name=\"name\"]').find('div') && $('#mt_sex').html() && $('#mt_sex').html() == '男' ){
	$('div[data-name=\"name\"]').find('div').eq(0).click();
}
if ($('input[name=\"证件号码\"]').prev().find('ul li').length && $('input[name=\"证件号码\"]').length && $('#mt_idtype').html()) {
	if ($('#mt_idtype').html() == '身份证') {
		$('input[name=\"证件号码\"]').prev().find('ul li').eq(1).click();
	}
	else if ($('#mt_idtype').html() == '台胞证') {
		$('input[name=\"证件号码\"]').prev().find('ul li').eq(2).click();
	}
	else if ($('#mt_idtype').html() == '澳门非永久居民身份证' || $('#mt_idtype').html() == '澳门永久居民身份证' || $('#mt_idtype').html() == '香港永久居民身份证' || $('#mt_idtype').html() == '香港非永久居民身份证') {
		$('input[name=\"证件号码\"]').prev().find('ul li').eq(3).click();
	}
	else if ($('#mt_idtype').html() == '护照') {
		$('input[name=\"证件号码\"]').prev().find('ul li').eq(2).click();
	}
}
if ($('input[name=\"证件号码\"]').length){
	$('input[name=\"证件号码\"]').val($('#mt_id').html()); 
}
if($('input[name=\"出生日期\"]').length && $('#mt_birth').html()){
	var birth = $('#mt_birth').html().split('-');
	for (var i in birth) {
	    if (birth[i].length < 2) {
	        birth[i] = '0'+birth[i];
	    }
	    var birthr=birth.join('-');
	}
	$('input[name=\"出生日期\"]').val(birthr); 
} 
if ($('input[name=\"身高\"]').length){
	$('input[name=\"身高\"]').val($('#mt_height').html()); 
}
if ($('input[name=\"体重\"]').length){
	$('input[name=\"体重\"]').val($('#mt_weight').html()); 
}
if ($('input[name=\"爱好/特长\"]').length){
	$('input[name=\"爱好/特长\"]').val($('#mt_skill').html()); 
}
if ($('input[name=\"籍贯\"]').length){
	$('input[name=\"籍贯\"]').val($('#mt_nativeplace').html()); 
}
if ($('input[name=\"户口地\"]').length){
	$('input[name=\"户口地\"]').val($('#mt_hukoucitynow').html()); 
}
if ($('input[name=\"民族\"]').length && $('#mt_nation').html()) {
	var nation = $('input[name=\"民族\"]').parent().next().next('ul').find('li');
	for (var i = 0; i < nation.length; i++) {
		if ($.trim(nation.eq(i).text()) == $('#mt_nation').html()) {
			nation.eq(i).click();
		}
	}
}
if ($('input[name=\"政治面貌\"]').parent().next().next('ul').find('li').length && $('#mt_polistatus').html()) {
	if ($('#mt_polistatus').html() == '无党派民主人士') {
		$('input[name=\"政治面貌\"]').parent().next().next('ul').find('li').eq(1).click();
	}
	else if ($('#mt_polistatus').html().indexOf('民主') != -1 && $('#mt_polistatus').html() != '无党派民主人士') {
		$('input[name=\"政治面貌\"]').parent().next().next('ul').find('li').eq(2).click();
	}
	else if ($('#mt_polistatus').html() == '中共党员' || $('#mt_polistatus').html() == '中共预备党员') {
		$('input[name=\"政治面貌\"]').parent().next().next('ul').find('li').eq(3).click();
	}
	else if ($('#mt_polistatus').html() == '共青团员') {
		$('input[name=\"政治面貌\"]').parent().next().next('ul').find('li').eq(4).click();
	}
	else {$('input[name=\"政治面貌\"]').parent().next().next('ul').find('li').eq(5).click();}
}
if ($('.obtainBookWeibo').find('ul li').length && $('#mt_wbname').html().length) {
	$('.obtainBookWeibo').find('ul li').eq(2).click();
	if ($('input[name=\"微博链接\"]').length){
		$('input[name=\"微博链接\"]').val($('#mt_wbname').html()); 
	}
}
if ($('input[name=\"通讯地址\"]').length){
	$('input[name=\"通讯地址\"]').val($('#mt_livecity_pro').html()); 
}
if ($('input[name=\"详细街道地址\"]').length){
	$('input[name=\"详细街道地址\"]').val($('#mt_add').html()); 
}
if ($('input[name=\"紧急联系人\"]').length){
	$('input[name=\"紧急联系人\"]').val($('#mt_livecity_pro').html()); 
}
if ($('input[name=\"通讯地址\"]').length){
	$('input[name=\"通讯地址\"]').val($('#mt_jjlxr').html()); 
}
if ($('input[name=\"联系人电话\"]').length){
	$('input[name=\"联系人电话\"]').val($('#mt_jjlxrtel').html()); 
}
if ($('textarea[name=\"录取你的原因\"]').length){
	$('textarea[name=\"录取你的原因\"]').val($('#mt_selfIntro').html()); 
}
if ($('input[name=\"家庭成员姓名\"]').length){
	$('input[name=\"家庭成员姓名\"]').val($('#mt_fmname').html()); 
}
if ($('input[name=\"与自己关系\"]').length){
	$('input[name=\"与自己关系\"]').val($('#mt_fmrelation').html()); 
}
if ($('input[name=\"职业\"]').length){
	$('input[name=\"职业\"]').val($('#mt_fmposition').html()); 
}
if ($('input[name=\"工作单位\"]').length){
	$('input[name=\"工作单位\"]').val($('#mt_fmwork').html()); 
}
//教育背景
for (var i = 0; i <$('.infopledu').length; i++) {
	if($('.educationArea').find('input[name=\"开始时间\"]').eq(i) && $('.infopledu .mt_startYear').eq(i).html()){
        if ($('.infopledu .mt_startYear').eq(i).html().length <7) {
            $('.educationArea').find('input[name=\"开始时间\"]').eq(i).val($('.infopledu .mt_startYear').eq(i).html().split('-').join('-0')+'-01');}
        else{$('.educationArea').find('input[name=\"开始时间\"]').eq(i).val($('.infopledu .mt_startYear').eq(i).html()+'-01')}
    }
    if($('.educationArea').find('input[name=\"结束时间\"]').eq(i) && $('.infopledu .mt_endYear').eq(i).html()){
        if ($('.infopledu .mt_endYear').eq(i).html().length <7) {
            $('.educationArea').find('input[name=\"结束时间\"]').eq(i).val($('.infopledu .mt_endYear').eq(i).html().split('-').join('-0')+'-01');}
        else{$('.educationArea').find('input[name=\"结束时间\"]').eq(i).val($('.infopledu .mt_endYear').eq(i).html()+'-01')}
    }
    if ($('.bb_educationInfo').eq(i).prev('div').text() == '*学历学位：' && $('.infopledu .mt_education').eq(i).html()) {
    	if($('.infopledu .mt_education').eq(i).html() == '大学专科'){
		    $('.bb_educationInfo').eq(i).find('ul li').eq(1).click();}
		else if(($('.infopledu .mt_education').eq(i).html() == '大学本科-一本' || $('.infopledu .mt_education').eq(i).html() == '大学本科-二本' || $('.infopledu .mt_education').eq(i).html() == '大学本科-三本' || $('.infopledu .mt_education').eq(i).html() == '海外本科')){
			$('.bb_educationInfo').eq(i).find('ul li').eq(2).click();}
		else if($('.infopledu .mt_education').eq(i).html() == '硕士研究生'){
			$('.bb_educationInfo').eq(i).find('ul li').eq(3).click();
			if ($('input[name=\"研究生导师\"]').eq(i).length && $('.infopledu .mt_tutorname').eq(i).html()){
				$('input[name=\"研究生导师\"]').eq(i).val($('.infopledu .mt_tutorname').eq(i).html()); 
			}
			if ($('input[name=\"导师电话\"]').eq(i).length && $('.infopledu .mt_tutorphone').eq(i).html()){
				$('input[name=\"导师电话\"]').eq(i).val($('.infopledu .mt_tutorphone').eq(i).html()); 
			}
		}
		else if($('.infopledu .mt_education').eq(i).html() == '博士研究生'){
			$('.bb_educationInfo').eq(i).find('ul li').eq(4).click();
			if ($('input[name=\"研究生导师\"]').eq(i).length && $('.infopledu .mt_tutorname').eq(i).html()){
				$('input[name=\"研究生导师\"]').eq(i).val($('.infopledu .mt_tutorname').eq(i).html()); 
			}
			if ($('input[name=\"导师电话\"]').eq(i).length && $('.infopledu .mt_tutorphone').eq(i).html()){
				$('input[name=\"导师电话\"]').eq(i).val($('.infopledu .mt_tutorphone').eq(i).html()); 
			}
		}
    }
    if ($('input[name=\"毕业院校\"]').eq(i).length && $('.infopledu .mt_schoolName').eq(i).html()){
		$('input[name=\"毕业院校\"]').eq(i).val($('.infopledu .mt_schoolName').eq(i).html()); 
	}
    if ($('input[name=\"专业\"]').eq(i).length && $('.infopledu .mt_professional').eq(i).html()){
		$('input[name=\"专业\"]').eq(i).val($('.infopledu .mt_professional').eq(i).html()); 
	}
	if ($('input[name=\"学院\"]').eq(i).length && $('.infopledu .mt_academy').eq(i).html()){
		$('input[name=\"学院\"]').eq(i).val($('.infopledu .mt_academy').eq(i).html()); 
	}
	if ($('input[name=\"专业排名\"]').eq(i).length && $('.infopledu .mt_professionalranking').eq(i).html()) {
    	if($('.infopledu .mt_professionalranking').eq(i).html() == '前5%' || $('.infopledu .mt_professionalranking').eq(i).html() == '前10%'){
		    $('input[name=\"专业排名\"]').eq(i).parent().next().next('ul').find('li').eq(1).click();}
		else if($('.infopledu .mt_professionalranking').eq(i).html() == '前20%'){
			$('input[name=\"专业排名\"]').eq(i).parent().next().next('ul').find('li').eq(2).click();}
		else if($('.infopledu .mt_professionalranking').eq(i).html() == '前30%'){
			$('input[name=\"专业排名\"]').eq(i).parent().next().next('ul').find('li').eq(3).click();}
		else if($('.infopledu .mt_professionalranking').eq(i).html() == '前40%'){
			$('input[name=\"专业排名\"]').eq(i).parent().next().next('ul').find('li').eq(4).click();}
		else if($('.infopledu .mt_professionalranking').eq(i).html() == '前50%'){
			$('input[name=\"专业排名\"]').eq(i).parent().next().next('ul').find('li').eq(5).click();}
		else{$('input[name=\"专业排名\"]').eq(i).parent().next().next('ul').find('li').eq(6).click();}
    }
}
//证书
for (var i = 0; i <$('.infoplcerti').length; i++) {
	if ($('input[name=\"奖学金、证书\"]').eq(i).length && $('.infoplcerti .mt_certificateName').eq(i).html()){
		$('input[name=\"奖学金、证书\"]').eq(i).val($('.infoplcerti .mt_certificateName').eq(i).html()); 
	}
	if($('#scholarshipCertificate').find('input[name=\"时间\"]').eq(i) && $('.infoplcerti .mt_getDate').eq(i).html()){
        if ($('.infoplcerti .mt_getDate').eq(i).html().length <7) {
            $('#scholarshipCertificate').find('input[name=\"时间\"]').eq(i).val($('.infoplcerti .mt_getDate').eq(i).html().split('-').join('-0')+'-01');}
        else{$('#scholarshipCertificate').find('input[name=\"时间\"]').eq(i).val($('.infoplcerti .mt_getDate').eq(i).html()+'-01')}
    }
	if ($('textarea[name=\"地点/途径\"]').eq(i).length && $('.infoplcerti .mt_certificateDes').eq(i).html()){
		$('textarea[name=\"地点/途径\"]').eq(i).val($('.infoplcerti .mt_certificateDes').eq(i).html()); 
	}
}
//校园活动
for (var i = 0; i <$('.infoschoolclub').length; i++) {
	if ($('#campusActivities').find('input[name=\"组织单位\"]').eq(i).length && $('.infoschoolclub .mt_schClubName').eq(i).html()){
		$('#campusActivities').find('input[name=\"组织单位\"]').eq(i).val($('.infoschoolclub .mt_schClubName').eq(i).html()); 
	}
	if ($('#campusActivities').find('input[name=\"职务\"]').eq(i).length && $('.infoschoolclub .mt_positionName').eq(i).html()){
		$('#campusActivities').find('input[name=\"职务\"]').eq(i).val($('.infoschoolclub .mt_positionName').eq(i).html()); 
	}
	if($('#campusActivities').find('input[name=\"开始时间\"]').eq(i).length && $('.infoschoolclub .mt_startDate').eq(i).html()){
        if ($('.infoschoolclub .mt_startDate').eq(i).html().length <7) {
            $('#campusActivities').find('input[name=\"开始时间\"]').eq(i).val($('.infoschoolclub .mt_startDate').eq(i).html().split('-').join('-0')+'-01');}
        else{$('#campusActivities').find('input[name=\"开始时间\"]').eq(i).val($('.infoschoolclub .mt_startDate').eq(i).html()+'-01')}
    }
    if($('#campusActivities').find('input[name=\"结束时间\"]').eq(i).length && $('.infoschoolclub .mt_endDate').eq(i).html()){
        if ($('.infoschoolclub .mt_endDate').eq(i).html().length <7) {
            $('#campusActivities').find('input[name=\"结束时间\"]').eq(i).val($('.infoschoolclub .mt_endDate').eq(i).html().split('-').join('-0')+'-01');}
        else{$('#campusActivities').find('input[name=\"结束时间\"]').eq(i).val($('.infoschoolclub .mt_endDate').eq(i).html()+'-01')}
    }
	if ($('#campusActivities').find('textarea[name=\"工作内容\"]').eq(i).length && $('.infoschoolclub .mt_workDes').eq(i).html()){
		$('#campusActivities').find('textarea[name=\"工作内容\"]').eq(i).val($('.infoschoolclub .mt_workDes').eq(i).html()); 
	}
}
//实践
for (var i = 0; i <$('.infoparttimejobs').length; i++) {
	if ($('#socialExperience').find('input[name=\"组织单位\"]').eq(i).length && $('.infoparttimejobs .mt_companyName').eq(i).html()){
		$('#socialExperience').find('input[name=\"组织单位\"]').eq(i).val($('.infoparttimejobs .mt_companyName').eq(i).html()); 
	}
	if ($('#socialExperience').find('input[name=\"职务角色\"]').eq(i).length && $('.infoparttimejobs .mt_positionName').eq(i).html()){
		$('#socialExperience').find('input[name=\"职务角色\"]').eq(i).val($('.infoparttimejobs .mt_positionName').eq(i).html()); 
	}
	if($('#socialExperience').find('input[name=\"开始时间\"]').eq(i).length && $('.infoparttimejobs .mt_startDate').eq(i).html()){
        if ($('.infoparttimejobs .mt_startDate').eq(i).html().length <7) {
            $('#socialExperience').find('input[name=\"开始时间\"]').eq(i).val($('.infoparttimejobs .mt_startDate').eq(i).html().split('-').join('-0')+'-01');}
        else{$('#socialExperience').find('input[name=\"开始时间\"]').eq(i).val($('.infoparttimejobs .mt_startDate').eq(i).html()+'-01')}
    }
    if($('#socialExperience').find('input[name=\"结束时间\"]').eq(i).length && $('.infoparttimejobs .mt_endDate').eq(i).html()){
        if ($('.infoparttimejobs .mt_endDate').eq(i).html().length <7) {
            $('#socialExperience').find('input[name=\"结束时间\"]').eq(i).val($('.infoparttimejobs .mt_endDate').eq(i).html().split('-').join('-0')+'-01');}
        else{$('#socialExperience').find('input[name=\"结束时间\"]').eq(i).val($('.infoparttimejobs .mt_endDate').eq(i).html()+'-01')}
    }
	if ($('#socialExperience').find('textarea[name=\"工作内容\"]').eq(i).length && $('.infoparttimejobs .mt_workContent').eq(i).text()){
		$('#socialExperience').find('textarea[name=\"工作内容\"]').eq(i).val($('.infoparttimejobs .mt_workContent').eq(i).text()); 
	}
}
//项目
for (var i = 0; i <$('.infoproject').length; i++) {
	if ($('#workExperience').find('input[name=\"项目名称\"]').eq(i).length && $('.infoproject .mt_projectName').eq(i).html()){
		$('#workExperience').find('input[name=\"项目名称\"]').eq(i).val($('.infoproject .mt_projectName').eq(i).html()); 
	}
	if ($('#workExperience').find('input[name=\"职务/角色\"]').eq(i).length && $('.infoproject .mt_positionName').eq(i).html()){
		$('#workExperience').find('input[name=\"职务/角色\"]').eq(i).val($('.infoproject .mt_positionName').eq(i).html()); 
	}
	if ($('#workExperience').find('input[name=\"下属人数\"]').eq(i).length && $('.infoproject .mt_projectNumber').eq(i).html()){
		$('#workExperience').find('input[name=\"下属人数\"]').eq(i).val($('.infoproject .mt_projectNumber').eq(i).html()); 
	}
	if($('#workExperience').find('input[name=\"开始时间\"]').eq(i).length && $('.infoproject .mt_prostarttime').eq(i).html()){
        if ($('.infoproject .mt_prostarttime').eq(i).html().length <7) {
            $('#workExperience').find('input[name=\"开始时间\"]').eq(i).val($('.infoproject .mt_prostarttime').eq(i).html().split('-').join('-0')+'-01');}
        else{$('#workExperience').find('input[name=\"开始时间\"]').eq(i).val($('.infoproject .mt_prostarttime').eq(i).html()+'-01')}
    }
    if($('#workExperience').find('input[name=\"结束时间\"]').eq(i).length && $('.infoproject .mt_proendtime').eq(i).html()){
        if ($('.infoproject .mt_proendtime').eq(i).html().length <7) {
            $('#workExperience').find('input[name=\"结束时间\"]').eq(i).val($('.infoproject .mt_proendtime').eq(i).html().split('-').join('-0')+'-01');}
        else{$('#workExperience').find('input[name=\"结束时间\"]').eq(i).val($('.infoproject .mt_proendtime').eq(i).html()+'-01')}
    }
	if ($('#workExperience').find('textarea[name=\"项目描述\"]').eq(i).length && $('.infoproject .mt_projectRemark').eq(i).html()){
		$('#workExperience').find('textarea[name=\"项目描述\"]').eq(i).val($('.infoproject .mt_projectRemark').eq(i).html()); 
	}
	if ($('#workExperience').find('textarea[name=\"项目职责\"]').eq(i).length && $('.infoproject .mt_projectDuty').eq(i).html()){
		$('#workExperience').find('textarea[name=\"项目职责\"]').eq(i).val($('.infoproject .mt_projectDuty').eq(i).html()); 
	}
}
//获奖
for (var i = 0; i <$('.infoschaward').length; i++) {
	if($('#competitionAward').find('input[name=\"时间\"]').eq(i).length && $('.infoschaward .mt_awardsDate').eq(i).html()){
        if ($('.infoschaward .mt_awardsDate').eq(i).html().length <7) {
            $('#competitionAward').find('input[name=\"时间\"]').eq(i).val($('.infoschaward .mt_awardsDate').eq(i).html().split('-').join('-0')+'-01');}
        else{$('#competitionAward').find('input[name=\"时间\"]').eq(i).val($('.infoschaward .mt_awardsDate').eq(i).html()+'-01')}
    }
	if ($('#competitionAward').find('textarea[name=\"地点/途径\"]').eq(i).length && $('.infoschaward .mt_awardsDes').eq(i).html()){
		$('#competitionAward').find('textarea[name=\"地点/途径\"]').eq(i).val($('.infoschaward .mt_awardsDes').eq(i).html()); 
	}
}