if ($('#jm_qiuck_cover')) {$('#jm_qiuck_cover').fadeIn();setTimeout($('#jm_qiuck_cover').fadeOut(),3000);}
//个人信息
if($('input[name=\"name\"]').length){
	$('input[name=\"name\"]').val($('#mt_name').html()); 
}
if ($('#mt_sex').html() && $('#mt_sex').html()=='男') {
	$('#person_info .selectTitle').eq(0).next('div').find('div').eq(1).click();
}
if ($('#mt_sex').html() && $('#mt_sex').html()=='女') {
	$('#person_info .selectTitle').eq(0).next('div').find('div').eq(2).click();
}
if($('#person_info_birth').length && $('#mt_birth').html()){
	var birth = $('#mt_birth').html().split('-');
	for (var i in birth) {
	    if (birth[i].length < 2) {
	        birth[i] = '0'+birth[i];
	    }
	    var birthr=birth.join('-');
	}
	$('#person_info_birth').val(birthr); 
} 
if ($('#mt_idtype').html() && $('#mt_idtype').html()=='身份证') {
	$('#person_info .selectTitle').eq(1).next('div').find('div').eq(1).click();
}
if ($('#mt_idtype').html() && ($('#mt_idtype').html()=='护照' || $('#mt_idtype').html()=='台胞证' || $('#mt_idtype').html()=='军官证' || $('#mt_idtype').html()=='香港非永久居民身份证' || $('#mt_idtype').html()=='香港永久居民身份证' || $('#mt_idtype').html()=='澳门永久居民身份证' || $('#mt_idtype').html()=='澳门非永久居民身份证')) {
	$('#person_info .selectTitle').eq(1).next('div').find('div').eq(2).click();
}
if($('#person_info_id_card').length){
	$('#person_info_id_card').val($('#mt_id').html()); 
}
if($('#person_info_graduation_date').length && $('.mt_gradutetime').html()){
		if ($('.mt_gradutetime').html().length <7) {
			$('#person_info_graduation_date').val($('.mt_gradutetime').html().split('-').join('-0')+'-01');}
		else{$('#person_info_graduation_date').val($('.mt_gradutetime').html())}
}
if ($('#mt_edu').html() && $('#mt_edu').html()=='博士研究生') {
	$('#person_info .selectTitle').eq(3).next('div').find('div').eq(1).click();
}
if ($('#mt_edu').html() && $('#mt_edu').html()=='MBA') {
	$('#person_info .selectTitle').eq(3).next('div').find('div').eq(2).click();
}
if ($('#mt_edu').html() && $('#mt_edu').html()=='硕士研究生') {
	$('#person_info .selectTitle').eq(3).next('div').find('div').eq(3).click();
}
if ($('#mt_edu').html() && ($('#mt_edu').html()=='双学士' || $('#mt_edu').html()=='大学本科-一本' || $('#mt_edu').html()=='大学本科-二本' || $('#mt_edu').html()=='大学本科-三本')) {
	$('#person_info .selectTitle').eq(3).next('div').find('div').eq(4).click();
}
if ($('#mt_edu').html() && $('#mt_edu').html()=='大学专科') {
	$('#person_info .selectTitle').eq(3).next('div').find('div').eq(5).click();
}
if ($('#mt_edu').html() && ($('#mt_edu').html()=='MPA' || $('#mt_edu').html()=='EMBA' || $('#mt_edu').html()=='中专' || $('#mt_edu').html()=='高中' || $('#mt_edu').html()=='初中及以下' || $('#mt_edu').html()=='技校/职高')) {
	$('#person_info .selectTitle').eq(3).next('div').find('div').eq(6).click();
}
if($('#person_info_email').length){
	$('#person_info_email').val($('#mt_email').html()); 
}
if($('#person_info_mobile_number').length){
	$('#person_info_mobile_number').val($('#mt_tel').html()); 
}
if($('#person_info_weichat_number').length){
	$('#person_info_weichat_number').val($('#mt_wxname').html()); 
}
if($('#person_info_emergency_number').length){
	$('#person_info_emergency_number').val($('#mt_jjlxrtel').html()); 
}
//教育经历
for (var i = 0; i <$('.infopledu').length; i++) {  
    var eform = $('form[name=\"education_experience\"]'); 
    if ($('#mt_edutype').html() && $('#mt_edutype').html()=='全日制统分统招') {
        eform.eq(i).find('.selectTitle').eq(0).next('div').find('div').eq(1).click();
    }
    //学历
    if ($('.infopledu .mt_education').eq(i).html() && $('.infopledu .mt_education').eq(i).html()=='博士研究生') {
        eform.eq(i).find('.selectTitle').eq(1).next('div').find('div').eq(1).click();
    }
    else if ($('.infopledu .mt_education').eq(i).html() && $('.infopledu .mt_education').eq(i).html()=='MBA') {
        eform.eq(i).find('.selectTitle').eq(1).next('div').find('div').eq(2).click();
    }
    else if ($('.infopledu .mt_education').eq(i).html() && $('.infopledu .mt_education').eq(i).html()=='硕士研究生') {
        eform.eq(i).find('.selectTitle').eq(1).next('div').find('div').eq(3).click();
    }
    else if ($('.infopledu .mt_education').eq(i).html() && ($('.infopledu .mt_education').eq(i).html()=='大学本科-一本' || $('.infopledu .mt_education').eq(i).html()=='大学本科-一本' || $('.infopledu .mt_education').eq(i).html()=='大学本科-二本' || $('.infopledu .mt_education').eq(i).html()=='大学本科-三本' || $('.infopledu .mt_education').eq(i).html()=='海外本科')) {
        eform.eq(i).find('.selectTitle').eq(1).next('div').find('div').eq(4).click();
    }
    else if ($('.infopledu .mt_education').eq(i).html() && $('.infopledu .mt_education').eq(i).html()=='大学专科') {
        eform.eq(i).find('.selectTitle').eq(1).next('div').find('div').eq(5).click();
    }
    else if ($('.infopledu .mt_education').eq(i).html() && $('.infopledu .mt_education').eq(i).html()=='大学专科') {
        eform.eq(i).find('.selectTitle').eq(1).next('div').find('div').eq(5).click();
    }
    else if ($('.infopledu .mt_education').eq(i).html() && ($('.infopledu .mt_education').eq(i).html()=='其他' || $('.infopledu .mt_education').eq(i).html()=='MPA')) {
        eform.eq(i).find('.selectTitle').eq(1).next('div').find('div').eq(6).click();
    }
    //学位
    if ($('.infopledu .mt_degree').eq(i).html() && $('.infopledu .mt_degree').eq(i).html()=='博士') {
        eform.eq(i).find('.selectTitle').eq(2).next('div').find('div').eq(1).click();
    }
    if ($('.infopledu .mt_degree').eq(i).html() && $('.infopledu .mt_degree').eq(i).html()=='MBA') {
        eform.eq(i).find('.selectTitle').eq(2).next('div').find('div').eq(2).click();
    }
    if ($('.infopledu .mt_degree').eq(i).html() && $('.infopledu .mt_degree').eq(i).html()=='硕士') {
        eform.eq(i).find('.selectTitle').eq(2).next('div').find('div').eq(3).click();
    }
    if ($('.infopledu .mt_degree').eq(i).html() && $('.infopledu .mt_degree').eq(i).html()=='双学士') {
        eform.eq(i).find('.selectTitle').eq(2).next('div').find('div').eq(4).click();
    }
    if ($('.infopledu .mt_degree').eq(i).html() && $('.infopledu .mt_degree').eq(i).html()=='学士') {
        eform.eq(i).find('.selectTitle').eq(2).next('div').find('div').eq(5).click();
    }
    if ($('.infopledu .mt_degree').eq(i).html() && ($('.infopledu .mt_degree').eq(i).html()=='其他' || $('.infopledu .mt_degree').eq(i).html()=='MPA')) {
        eform.eq(i).find('.selectTitle').eq(2).next('div').find('div').eq(6).click();
    }
    if ($('.infopledu .mt_degree').eq(i).html() && $('.infopledu .mt_degree').eq(i).html()=='无') {
        eform.eq(i).find('.selectTitle').eq(2).next('div').find('div').eq(7).click();
    }
    //排名
    if ($('.infopledu .mt_professionalranking').eq(i).html() && $('.infopledu .mt_professionalranking').eq(i).html()=='前5%') {
        eform.eq(i).find('.selectTitle').eq(3).next('div').find('div').eq(1).click();
    }
    if ($('.infopledu .mt_professionalranking').eq(i).html() && $('.infopledu .mt_professionalranking').eq(i).html()=='前10%') {
        eform.eq(i).find('.selectTitle').eq(3).next('div').find('div').eq(2).click();
    }
    if ($('.infopledu .mt_professionalranking').eq(i).html() && $('.infopledu .mt_professionalranking').eq(i).html()=='前20%') {
        eform.eq(i).find('.selectTitle').eq(3).next('div').find('div').eq(3).click();
    }
    if ($('.infopledu .mt_professionalranking').eq(i).html() && $('.infopledu .mt_professionalranking').eq(i).html()=='前30%') {
        eform.eq(i).find('.selectTitle').eq(3).next('div').find('div').eq(4).click();
    }
    if ($('.infopledu .mt_professionalranking').eq(i).html() && ($('.infopledu .mt_professionalranking').eq(i).html()=='前40%' || $('.infopledu .mt_professionalranking').eq(i).html()=='前50%' || $('.infopledu .mt_professionalranking').eq(i).html()=='前60%' || $('.infopledu .mt_professionalranking').eq(i).html()=='前70%' || $('.infopledu .mt_professionalranking').eq(i).html()=='前80%' || $('.infopledu .mt_professionalranking').eq(i).html()=='其他')) {
        eform.eq(i).find('.selectTitle').eq(3).next('div').find('div').eq(5).click();
    }
    if ($('input[name=\"school_name\"]').eq(i) && $('.infopledu .mt_schoolName').eq(i).html()) {
        $('input[name=\"school_name\"]').eq(i).val($('.infopledu .mt_schoolName').eq(i).html());
    }
    if($('#education_experience_edu_date_start_'+(i+1)).length && $('.infopledu .mt_startYear').eq(i).html()){
        if ($('.mt_startYear').eq(i).html().length <7) {
            $('#education_experience_edu_date_start_'+(i+1)).val($('.mt_startYear').eq(i).html().split('-').join('-0')+'-01');}
        else{$('#education_experience_edu_date_start_'+(i+1)).val($('.mt_startYear').eq(i).html())}
    }
    if($('#education_experience_edu_date_end_'+(i+1)).length && $('.infopledu .mt_endYear').eq(i).html()){
            if ($('.infopledu .mt_endYear').eq(i).html().length <7) {
                $('#education_experience_edu_date_end_'+(i+1)).val($('.infopledu .mt_endYear').eq(i).html().split('-').join('-0')+'-01');}
            else{$('#education_experience_edu_date_end_'+(i+1)).val($('.infopledu .mt_endYear').eq(i).html())}
    }
    if ($('input[name=\"college_name\"]').eq(i) && $('.infopledu .mt_academy').eq(i).html()) {
        $('input[name=\"college_name\"]').eq(i).val($('.infopledu .mt_academy').eq(i).html());
    }   
    if ($('input[name=\"major_name\"]').eq(i) && $('.infopledu .mt_professional').eq(i).html()) {
        $('input[name=\"major_name\"]').eq(i).val($('.infopledu .mt_professional').eq(i).html());
    }
    if ($('input[name=\"main_direction\"]').eq(i) && $('.infopledu .mt_major').eq(i).html()) {
        $('input[name=\"main_direction\"]').eq(i).val($('.infopledu .mt_major').eq(i).html());
    }   
}  
//实习经历
for (var i = 0; i < ($('.infofulltimejobs').length + $('.infoparttimejobs').length); i++) {
        var ework = $('form[name=\"work_ecperience\"]'); 
        if ($('.infofulltimejobs .mt_workcat').eq(i).html() && $('.infofulltimejobs .mt_workcat').eq(i).html()=='全职') {
            ework.eq(i).find('.selectTitle').eq(0).next('div').find('div').eq(1).click();
            if ($('input[name=\"company_name\"]').eq(i) && $('.infofulltimejobs .mt_companyName').eq(i).html()) {
                $('input[name=\"company_name\"]').eq(i).val($('.infofulltimejobs .mt_companyName').eq(i).html());
            }
            if($('#work_ecperience_job_date_start_'+(i+1)).length && $('.infofulltimejobs .mt_startDate').eq(i).html()){
                if ($('.mt_startDate').eq(i).html().length <7) {
                    $('#work_ecperience_job_date_start_'+(i+1)).val($('.infofulltimejobs .mt_startDate').eq(i).html().split('-').join('-0')+'-01');}
                else{$('#work_ecperience_job_date_start_'+(i+1)).val($('.infofulltimejobs .mt_startDate').eq(i).html()+'-01')}
            }
            if($('#work_ecperience_job_date_end_'+(i+1)).length && $('.infofulltimejobs .mt_endDate').eq(i).html()){
                    if ($('.infofulltimejobs .mt_endDate').eq(i).html().length <7) {
                        $('#work_ecperience_job_date_end_'+(i+1)).val($('.infofulltimejobs .mt_endDate').eq(i).html().split('-').join('-0')+'-01');}
                    else{$('#work_ecperience_job_date_end_'+(i+1)).val($('.infofulltimejobs .mt_endDate').eq(i).html()+'-01')}
            }
            if ($('input[name=\"job_title\"]').eq(i) && $('.infofulltimejobs .mt_positionName').eq(i).html()) {
                $('input[name=\"job_title\"]').eq(i).val($('.infofulltimejobs .mt_positionName').eq(i).html());
            }
            if ($('textarea[name=\"work_description\"]').eq(i) && $('.infofulltimejobs .mt_workContent').eq(i).text()) {
                $('textarea[name=\"work_description\"]').eq(i).val($('.infofulltimejobs .mt_workContent').eq(i).text());
            }
            if ($('.infofulltimejobs .mt_reterenceName').eq(i).html().length) {
                ework.eq(i).find('.selectTitle').eq(2).next('div').find('div').eq(1).click();
                $('input[name=\"references_name\"]').eq(i).val($('.infofulltimejobs .mt_reterenceName').eq(i).html());
                if ($('.infofulltimejobs .mt_reterenceRelation').eq(i).html().length) {
                	$('input[name=\"references_relation\"]').eq(i).val($('.infofulltimejobs .mt_reterenceRelation').eq(i).html());
                }
                if ($('.infofulltimejobs .mt_reterencePosition').eq(i).html().length) {
                	$('input[name=\"references_position\"]').eq(i).val($('.infofulltimejobs .mt_reterencePosition').eq(i).html());
                }
                if ($('.infofulltimejobs .mt_reterenceCompany').eq(i).html().length) {
                	$('input[name=\"references_company\"]').eq(i).val($('.infofulltimejobs .mt_reterenceCompany').eq(i).html());
                }
                if ($('.infofulltimejobs .mt_reterence_phone').eq(i).html().length) {
                	$('input[name=\"references_contact\"]').eq(i).val($('.infofulltimejobs .mt_reterence_phone').eq(i).html());
                }
            }
        }
        else if ($('.infoparttimejobs .mt_workcat').eq(i).html() && $('.infoparttimejobs .mt_workcat').eq(i).html()=='实习') {
            ework.eq(i).find('.selectTitle').eq(0).next('div').find('div').eq(3).click();
            if ($('input[name=\"company_name\"]').eq(i) && $('.infoparttimejobs .mt_companyName').eq(i).html()) {
                $('input[name=\"company_name\"]').eq(i).val($('.infoparttimejobs .mt_companyName').eq(i).html());
            }
            if($('#work_ecperience_job_date_start_'+(i+1)).length && $('.infoparttimejobs .mt_startDate').eq(i).html()){
                if ($('.mt_startDate').eq(i).html().length <7) {
                    $('#work_ecperience_job_date_start_'+(i+1)).val($('.infoparttimejobs .mt_startDate').eq(i).html().split('-').join('-0')+'-01');}
                else{$('#work_ecperience_job_date_start_'+(i+1)).val($('.infoparttimejobs .mt_startDate').eq(i).html()+'-01')}
            }
            if($('#work_ecperience_job_date_end_'+(i+1)).length && $('.infoparttimejobs .mt_endDate').eq(i).html()){
                    if ($('.infoparttimejobs .mt_endDate').eq(i).html().length <7) {
                        $('#work_ecperience_job_date_end_'+(i+1)).val($('.infoparttimejobs .mt_endDate').eq(i).html().split('-').join('-0')+'-01');}
                    else{$('#work_ecperience_job_date_end_'+(i+1)).val($('.infoparttimejobs .mt_endDate').eq(i).html()+'-01')}
            }
            if ($('input[name=\"job_title\"]').eq(i) && $('.infoparttimejobs .mt_positionName').eq(i).html()) {
                $('input[name=\"job_title\"]').eq(i).val($('.infoparttimejobs .mt_positionName').eq(i).html());
            }
            if ($('textarea[name=\"work_description\"]').eq(i) && $('.infoparttimejobs .mt_workContent').eq(i).text()) {
                $('textarea[name=\"work_description\"]').eq(i).val($('.infoparttimejobs .mt_workContent').eq(i).text());
            }
            if ($('.infoparttimejobs .mt_reterenceName').eq(i).html().length) {
                ework.eq(i).find('.selectTitle').eq(2).next('div').find('div').eq(1).click();
                $('input[name=\"references_name\"]').eq(i).val($('.infoparttimejobs .mt_reterenceName').eq(i).html());
                if ($('.infoparttimejobs .mt_reterenceRelation').eq(i).html().length) {
                	$('input[name=\"references_relation\"]').eq(i).val($('.infoparttimejobs .mt_reterenceRelation').eq(i).html());
                }
                if ($('.infoparttimejobs .mt_reterencePosition').eq(i).html().length) {
                	$('input[name=\"references_position\"]').eq(i).val($('.infoparttimejobs .mt_reterencePosition').eq(i).html());
                }
                if ($('.infoparttimejobs .mt_reterenceCompany').eq(i).html().length) {
                	$('input[name=\"references_company\"]').eq(i).val($('.infoparttimejobs .mt_reterenceCompany').eq(i).html());
                }
                if ($('.infoparttimejobs .mt_reterence_phone').eq(i).html().length) {
                	$('input[name=\"references_contact\"]').eq(i).val($('.infoparttimejobs .mt_reterence_phone').eq(i).html());
                }
            }
        }
}
//项目经验
for (var i = 0; i <$('.infoproject').length; i++) {
	if ($('input[name=\"project_name\"]').eq(i) && $('.infoproject .mt_projectName').eq(i).html()) {
		$('input[name=\"project_name\"]').eq(i).val($('.infoproject .mt_projectName').eq(i).html());
	}
	if($('#project_experience_project_date_start_'+(i+1)).length && $('.infoproject .mt_prostarttime').eq(i).html()){
		if ($('.mt_prostarttime').eq(i).html().length <7) {
			$('#project_experience_project_date_start_'+(i+1)).val($('.mt_prostarttime').eq(i).html().split('-').join('-0')+'-01');}
		else{$('#project_experience_project_date_start_'+(i+1)).val($('.mt_prostarttime').eq(i).html())}
	}
	if($('#project_experience_project_date_end_'+(i+1)).length && $('.infoproject .mt_proendtime').eq(i).html()){
			if ($('.infoproject .mt_proendtime').eq(i).html().length <7) {
				$('#project_experience_project_date_end_'+(i+1)).val($('.infoproject .mt_proendtime').eq(i).html().split('-').join('-0')+'-01');}
			else{$('#project_experience_project_date_end_'+(i+1)).val($('.infoproject .mt_proendtime').eq(i).html())}
	}
    if ($('input[name=\"project_title\"]').eq(i) && $('.infoproject .mt_positionName').eq(i).html()) {
		$('input[name=\"project_title\"]').eq(i).val($('.infoproject .mt_positionName').eq(i).html());
	}
	if ($('input[name=\"responsibility\"]').eq(i) && $('.infoproject .mt_projectDuty').eq(i).html()) {
		$('input[name=\"responsibility\"]').eq(i).val($('.infoproject .mt_projectDuty').eq(i).html());
	}
	if ($('textarea[name=\"description\"]').eq(i) && $('.infoproject .mt_projectRemark').eq(i).html()) {
		$('textarea[name=\"description\"]').eq(i).val($('.infoproject .mt_projectRemark').eq(i).html());
	}
}
//技能爱好
if($('#skill_favorite_other_skill').length && $('#mt_hobbies').html()){
	$('#skill_favorite_other_skill').val($('#mt_hobbies').html()); 
}
if($('#skill_favorite_personal_favorite').length){
	$('#skill_favorite_personal_favorite').val($('#mt_skill').html()); 
}
//英语等级
if($('.infoEnglishSkill .mt_skillEngLevel').html() == '大学英语四级'){
	$('form[name=\"skill_favorite\"]').find('.selectTitle').eq(0).next('div').find('div').eq(1).click(); 
	$('#skill_favorite_english_score').val($('.infoEnglishSkill .mt_skillEngSorce').html());
}
if($('.infoEnglishSkill .mt_skillEngLevel').html() == '大学英语六级'){
	$('form[name=\"skill_favorite\"]').find('.selectTitle').eq(0).next('div').find('div').eq(3).click(); 
	$('#skill_favorite_english_score').val($('.infoEnglishSkill .mt_skillEngSorce').html());
}
if($('.infoEnglishSkill .mt_skillEngLevel').html() == '专业四级'){
	$('form[name=\"skill_favorite\"]').find('.selectTitle').eq(0).next('div').find('div').eq(2).click(); 
	$('#skill_favorite_english_score').val($('.infoEnglishSkill .mt_skillEngSorce').html());
}
if($('.infoEnglishSkill .mt_skillEngLevel').html() == '专业八级'){
	$('form[name=\"skill_favorite\"]').find('.selectTitle').eq(0).next('div').find('div').eq(4).click(); 
	$('#skill_favorite_english_score').val($('.infoEnglishSkill .mt_skillEngSorce').html());
}
//语言能力
for (var i = 0; i <$('.infoOtherSkill').length; i++) {
	var skill = $('.j_language_skill_itemWrap').find('.selectTitle').eq(0).next('div').find('div');
	for (var j = 0; j < skill.length; j++) {
		if ($('.j_language_skill_itemWrap').find('.selectTitle').eq(0).next('div').find('div').eq(j).html() == $('.infoOtherSkill .mt_skillOtherLang').eq(i).html()) {
			$('.j_language_skill_itemWrap').find('.selectTitle').eq(0).next('div').find('div').eq(j).click();
		}
		if ($('.j_language_skill_itemWrap').find('.selectTitle').eq(1).next('div').find('div').eq(j).html() ==$('.infoOtherSkill .mt_skillListenLevel').eq(i).html()) {
			$('.j_language_skill_itemWrap').find('.selectTitle').eq(1).next('div').find('div').eq(j).click();
		}
		if ($('.j_language_skill_itemWrap').find('.selectTitle').eq(2).next('div').find('div').eq(j).html() ==$('.infoOtherSkill .mt_skillWriteLevel').eq(i).html()) {
			$('.j_language_skill_itemWrap').find('.selectTitle').eq(2).next('div').find('div').eq(j).click();
		}
	}
}
//其他
if($('#other_comment_content').length){
	$('#other_comment_content').val($('#mt_selfIntro').html()); 
}
