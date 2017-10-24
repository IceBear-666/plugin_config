if ($('#jm_qiuck_cover')) {
	$('#jm_qiuck_cover').fadeIn();
	setTimeout(function() {
		$('#jm_qiuck_cover').fadeOut()
	}, 1000)
}
if ($('#jm_qiuck_cover')) {
	$('#jm_qiuck_cover').fadeIn();
	setTimeout(function() {
		$('#jm_qiuck_cover').fadeOut()
	}, 1000)
}
if ($('input[name=\"name_cn\"]').length) {
	$('input[name=\"name_cn\"]').val($('#mt_name').html())
}
if ($('#line_cv_basic_gender_1').find('span') && $('#mt_sex').html() == '男') {
	$('#line_cv_basic_gender_1').find('span').removeClass('selected').eq(2).addClass('selected').click()
}
if ($('#line_cv_basic_gender_1').find('span') && $('#mt_sex').html() == '女') {
	$('#line_cv_basic_gender_1').find('span').removeClass('selected').eq(3).addClass('selected').click()
}
if ($('#cv_basic-birth_date-1').length && $('#mt_birth').html()) {
	var birth = $('#mt_birth').html().split('-');
	for (var i in birth) {
		if (birth[i].length < 2) {
			birth[i] = '0' + birth[i]
		}
		var birthr = birth.join('-')
	}
	$('#cv_basic-birth_date-1').val(birthr)
}
if ($('#cv_basic-guoji-1').length) {
	$('#cv_basic-guoji-1').val($('#mt_national').html())
}
if ($('#cv_basic-card_no-1').prev() && $('#mt_idtype').html()) {
	$('#cv_basic-card_type-1').prev().find('span').click();
	if ($('.select-box').find('li') && $('#mt_idtype').html() == '身份证') {
		$('.select-box').find('li').eq(1).click()
	}
	else if ($('.select-box').find('li') && $('#mt_idtype').html() == '护照') {
		$('.select-box').find('li').eq(2).click()
	}
}
if ($('#cv_basic-card_no-1').length) {
	$('#cv_basic-card_no-1').val($('#mt_id').html())
}
if ($('input[data-text=\"期望工作地点\"]').length && $('#mt_expectcity').html()) {
	$('input[data-text=\"期望工作地点\"]').val($('#mt_expectcity').html()+$('#mt_expectcity_city').html())
}
if ($('#line_cv_basic_politics_1').find('span') && $('#mt_polistatus').html() == '群众') {
	$('#line_cv_basic_politics_1').find('span').removeClass('selected').eq(1).addClass('selected').click()
}
if ($('#line_cv_basic_politics_1').find('span') && $('#mt_polistatus').html() == '共青团员') {
	$('#line_cv_basic_politics_1').find('span').removeClass('selected').eq(2).addClass('selected').click()
}
if ($('#line_cv_basic_politics_1').find('span') && $('#mt_polistatus').html() == '中共党员') {
	$('#line_cv_basic_politics_1').find('span').removeClass('selected').eq(3).addClass('selected').click()
}
if ($('#cv_basic-card_no-1').prev().length && ($('#mt_idtype').html() == '身份证' || $('#mt_idtype').html() == '护照')) {
	$('#cv_basic-card_no-1').prev().html($('#mt_idtype').html())
}
if ($('#cv_basic-edu_schol-1').length && $('.infopledu .mt_schoolName').html()) {
	$('#cv_basic-edu_schol-1').val($('.infopledu .mt_schoolName').html())
}
if ($('#cv_basic-edu_majr-1').length && $('.infopledu .mt_professional').html()) {
	$('#cv_basic-edu_majr-1').val($('.infopledu .mt_professional').html())
}
if ($('input[data-text=\"紧急联系人\"]').length && $('#mt_jjlxr').html()) {
	$('input[data-text=\"紧急联系人\"]').val($('#mt_jjlxr').html())
}
if ($('input[data-text=\"紧急联系方式\"]').length && $('#mt_jjlxrtel').html()) {
	$('input[data-text=\"紧急联系方式\"]').val($('#mt_jjlxrtel').html())
}
if ($('#cv_basic-contact_type-1').length && $('#mt_jjlxrtel').html()) {
	$('#cv_basic-contact_type-1').val($('#mt_jjlxrtel').html())
}
if ($('#line_cv_basic_marital_1').find('span') && $('#mt_maritalstatus').html() == '未婚') {
	$('#line_cv_basic_marital_1').find('span').removeClass('selected').eq(2).addClass('selected').click()
}
if ($('#line_cv_basic_marital_1').find('span') && $('#mt_maritalstatus').html() == '已婚') {
	$('#line_cv_basic_marital_1').find('span').removeClass('selected').eq(3).addClass('selected').click()
}
if ($('#line_cv_basic_marital_1').find('span') && $('#mt_maritalstatus').html() == '离婚') {
	$('#line_cv_basic_marital_1').find('span').removeClass('selected').eq(4).addClass('selected').click()
}
if ($('#cv_basic-graduate_date-1').length && $('#mt_gradutetime').html()) {
	if ($('#mt_gradutetime').html().length < 7) {
		$('#cv_basic-graduate_date-1').val($('#mt_gradutetime').html().split('-').join('-0') + '-01')
	} else {
		$('#cv_basic-graduate_date-1').val($('#mt_gradutetime').html())
	}
}
if ($('#line_cv_basic_edu_degree_1').prev() && $('#mt_edu').html()) {
	$('#cv_basic-edu_degree-1').prev().find('span').click();
	if ($('.select-box').find('li') && $('#mt_edu').html() && ($('#mt_edu').html() == '大学本科-一本' || $('#mt_edu').html() == '大学本科-二本' || $('#mt_edu').html() == '大学本科-三本')) {
		$('.select-box').find('li').eq(2).click()
	}
}
if ($('textarea[name=\"cv_intro\"]') && $('#mt_selfIntro').html()) {
	$('textarea[name=\"cv_intro\"]').val($('#mt_selfIntro').html())
}
if ($('#cv_basic-mobile_tel-1')) {
	$('#cv_basic-mobile_tel-1').val($('#mt_tel').html())
}
if ($('#cv_basic-email-1')) {
	$('#cv_basic-email-1').val($('#mt_email').html())
}
if ($('#cv_basic-address-1')) {
	$('#cv_basic-address-1').val($('#mt_add').html())
}
if ($('#cv_basic-postcode-1')) {
	$('#cv_basic-postcode-1').val($('#mt_zip').html())
}
if ($('span[data-id=\"contact_type\"]').length) {
	$('span[data-id=\"contact_type\"]').click();
	$('.select-box').find('li').eq(2).click()
}
if ($('#cv_basic-contact-1')) {
	$('#cv_basic-contact-1').val($('#mt_gudingtel').html())
}
for (var i = 0; i < $('.infopledu').length; i++) {
	if ($('#cv_degree-start_date-' + (i + 1)).length && $('.infopledu .mt_startYear').eq(i).html()) {
		if ($('.mt_startYear').eq(i).html().length < 7) {
			$('#cv_degree-start_date-' + (i + 1)).val($('.mt_startYear').eq(i).html().split('-').join('-0') + '-01')
		} else {
			$('#cv_degree-start_date-' + (i + 1)).val($('.mt_startYear').eq(i).html())
		}
	}
	if ($('#cv_degree-end_date-' + (i + 1)).length && $('.infopledu .mt_endYear').eq(i).html()) {
		if ($('.infopledu .mt_endYear').eq(i).html().length < 7) {
			$('#cv_degree-end_date-' + (i + 1)).val($('.infopledu .mt_endYear').eq(i).html().split('-').join('-0') + '-01')
		} else {
			$('#cv_degree-end_date-' + (i + 1)).val($('.infopledu .mt_endYear').eq(i).html())
		}
	}
	if ($('#cv_degree-courses-' + (i + 1)) && $('.infopledu .mt_major').eq(i).html()) {
		$('#cv_degree-courses-' + (i + 1)).val($('.infopledu .mt_major').eq(i).html())
	}
	if ($('#cv_degree-xueyuan-'+ (i + 1)).length && $('.infopledu .mt_academy').eq(i).html()) {
		$('#cv_degree-xueyuan-'+ (i + 1)).val($('.infopledu .mt_academy').eq(i).html())
	}
	if ($('#cv_degree-college-' + (i + 1)) && $('.infopledu .mt_academy').eq(i).html()) {
		$('#cv_degree-college-' + (i + 1)).val($('.infopledu .mt_academy').eq(i).html())
	}
	if ($('#cv_degree-daoshitel-' + (i + 1)) && $('.infopledu .mt_tutorname').eq(i).html()) {
		$('#cv_degree-daoshitel-' + (i + 1)).val($('.infopledu .mt_tutorname').eq(i).html() + $('.infopledu .mt_tutorphone').eq(i).html())
	}
	if ($('#cv_degree-xueli-' + (i + 1)).length && $('.infopledu .mt_education').eq(i).html() && $('.select-box').eq(0).find('li').eq(3).html() == '本科') {
		$('#cv_degree-xueli-' + (i + 1)).prev().find('span').click();
		if ($('.select-box').find('li') && $('.infopledu .mt_education').eq(i).html() && ($('.infopledu .mt_education').eq(i).html() == '大学本科-一本' || $('.infopledu .mt_education').eq(i).html() == '大学本科-二本' || $('.infopledu .mt_education').eq(i).html() == '大学本科-三本' || $('.infopledu .mt_education').eq(i).html() == '海外本科')) {
			$('.select-box').find('li').eq(3).click()
		} else if ($('.select-box').find('li') && $('.infopledu .mt_education').eq(i).html() && $('.infopledu .mt_education').eq(i).html() == '大学专科') {
			$('.select-box').find('li').eq(2).click()
		} else if ($('.select-box').find('li') && $('.infopledu .mt_education').eq(i).html() && $('.infopledu .mt_education').eq(i).html() == '硕士研究生') {
			$('.select-box').find('li').eq(5).click()
		} else if ($('.select-box').find('li') && $('.infopledu .mt_education').eq(i).html() && $('.infopledu .mt_education').eq(i).html() == '博士研究生') {
			$('.select-box').find('li').eq(7).click()
		} else if ($('.select-box').find('li') && $('.infopledu .mt_education').eq(i).html() && $('.infopledu .mt_education').eq(i).html() == 'MBA') {
			$('.select-box').find('li').eq(6).click()
		} else {
			$('.select-box').find('li').eq(1).click()
		}
	}
	if ($('#line_cv_degree_xueli_' + (i + 1)).length && $('.infopledu .mt_education').eq(i).html() && $('.select-box').eq(0).find('li').eq(7).html() == '本科') {
		$('#cv_degree-xueli-' + (i + 1)).prev().find('span').click();
		if ($('.select-box').find('li') && $('.infopledu .mt_education').eq(i).html() && ($('.infopledu .mt_education').eq(i).html() == '大学本科-一本' || $('.infopledu .mt_education').eq(i).html() == '大学本科-二本' || $('.infopledu .mt_education').eq(i).html() == '大学本科-三本' || $('.infopledu .mt_education').eq(i).html() == '海外本科')) {
			$('.select-box').find('li').eq(7).click()
		} else if ($('.select-box').find('li') && $('.infopledu .mt_education').eq(i).html() && $('.infopledu .mt_education').eq(i).html() == '大学专科') {
			$('.select-box').find('li').eq(6).click()
		} else if ($('.select-box').find('li') && $('.infopledu .mt_education').eq(i).html() && $('.infopledu .mt_education').eq(i).html() == '硕士研究生') {
			$('.select-box').find('li').eq(8).click()
		} else if ($('.select-box').find('li') && $('.infopledu .mt_education').eq(i).html() && $('.infopledu .mt_education').eq(i).html() == '博士研究生') {
			$('.select-box').find('li').eq(9).click()}
	}
	if ($('#cv_degree-degree-' + (i + 1)).length && $('.infopledu .mt_degree').eq(i).html()) {
		$('#cv_degree-degree-' + (i + 1)).prev().find('span').click();
		if ($('.select-box').find('li') && $('.infopledu .mt_degree').eq(i).html() && $('.infopledu .mt_degree').eq(i).html() == '学士') {
			$('.select-box').find('li').eq(2).click()
		} else if ($('.select-box').find('li') && $('.infopledu .mt_degree').eq(i).html() && $('.infopledu .mt_degree').eq(i).html() == '双学士') {
			$('.select-box').find('li').eq(3).click()
		} else if ($('.select-box').find('li') && $('.infopledu .mt_degree').eq(i).html() && $('.infopledu .mt_degree').eq(i).html() == '硕士') {
			$('.select-box').find('li').eq(4).click()
		} else if ($('.select-box').find('li') && $('.infopledu .mt_degree').eq(i).html() && $('.infopledu .mt_degree').eq(i).html() == 'MBA') {
			$('.select-box').find('li').eq(5).click()
		} else if ($('.select-box').find('li') && $('.infopledu .mt_degree').eq(i).html() && $('.infopledu .mt_degree').eq(i).html() == '博士') {
			$('.select-box').find('li').eq(6).click()
		} else {
			$('.select-box').find('li').eq(1).click()
		}
	}
	if ($('#line_cv_degree_gpa_' + (i + 1)).length && $('.infopledu .mt_classranking').eq(i).html()) {
		$('#cv_degree-gpa-' + (i + 1)).prev().find('span').click();
		if ($('.select-box').find('li') && $('.infopledu .mt_classranking').eq(i).html() && $('.infopledu .mt_classranking').eq(i).html() == '前5%') {
			$('.select-box').find('li').eq(1).click()
		} else if ($('.select-box').find('li') && $('.infopledu .mt_classranking').eq(i).html() && $('.infopledu .mt_classranking').eq(i).html() == '前10%') {
			$('.select-box').find('li').eq(2).click()
		} else if ($('.select-box').find('li') && $('.infopledu .mt_classranking').eq(i).html() && $('.infopledu .mt_classranking').eq(i).html() == '前20%') {
			$('.select-box').find('li').eq(3).click()
		} else if ($('.select-box').find('li') && $('.infopledu .mt_classranking').eq(i).html() && $('.infopledu .mt_classranking').eq(i).html() == '前30%') {
			$('.select-box').find('li').eq(4).click()
		} else if ($('.select-box').find('li') && $('.infopledu .mt_classranking').eq(i).html() && ($('.infopledu .mt_classranking').eq(i).html() == '前40%' || $('.infopledu .mt_classranking').eq(i).html() == '前50%' || $('.infopledu .mt_classranking').eq(i).html() == '前60%' || $('.infopledu .mt_classranking').eq(i).html() == '前70%' || $('.infopledu .mt_classranking').eq(i).html() == '前80%' || $('.infopledu .mt_classranking').eq(i).html() == '其他')) {
			$('.select-box').find('li').eq(5).click()
		}
	}
	if ($('#cv_degree-rank-' + (i + 1)).length && $('.infopledu .mt_classranking').eq(i).html()) {
		$('#cv_degree-rank-' + (i + 1)).prev().find('span').click();
		if ($('.select-box').find('li') && $('.infopledu .mt_classranking').eq(i).html() && $('.infopledu .mt_classranking').eq(i).html() == '前5%') {
			$('.select-box').find('li').eq(1).click()
		} else if ($('.select-box').find('li') && $('.infopledu .mt_classranking').eq(i).html() && $('.infopledu .mt_classranking').eq(i).html() == '前10%') {
			$('.select-box').find('li').eq(2).click()
		} else if ($('.select-box').find('li') && $('.infopledu .mt_classranking').eq(i).html() && $('.infopledu .mt_classranking').eq(i).html() == '前20%') {
			$('.select-box').find('li').eq(3).click()
		} else if ($('.select-box').find('li') && $('.infopledu .mt_classranking').eq(i).html() && $('.infopledu .mt_classranking').eq(i).html() == '前30%') {
			$('.select-box').find('li').eq(4).click()
		} else if ($('.select-box').find('li') && $('.infopledu .mt_classranking').eq(i).html() && ($('.infopledu .mt_classranking').eq(i).html() == '前40%' || $('.infopledu .mt_classranking').eq(i).html() == '前50%' || $('.infopledu .mt_classranking').eq(i).html() == '前60%' || $('.infopledu .mt_classranking').eq(i).html() == '前70%' || $('.infopledu .mt_classranking').eq(i).html() == '前80%' || $('.infopledu .mt_classranking').eq(i).html() == '其他')) {
			$('.select-box').find('li').eq(5).click()
		}
	}
	if ($('#cv_degree-gpa-' + (i + 1)).eq(i).length && $('.infopledu .mt_gpascore').eq(i).html()) {
		$('#cv_degree-gpa-' + (i + 1)).eq(i).val($('.infopledu .mt_gpascore').eq(i).html())
	}
}
for (var i = 0; i < $('.infoEnglishSkill').length; i++) {
	if ($('#line_cv_language_eng_cert_' + (i + 1)) && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html()) {
		$('#cv_language-eng_cert-' + (i + 1)).prev().find('span').click();
		if ($('.select-box').find('li') && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() == '大学英语四级') {
			$('.select-box').find('li').eq(1).click()
		} else if ($('.select-box').find('li') && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() == '大学英语六级') {
			$('.select-box').find('li').eq(2).click()
		} else if ($('.select-box').find('li') && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() == '专业四级') {
			$('.select-box').find('li').eq(3).click()
		} else if ($('.select-box').find('li') && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() == '专业八级') {
			$('.select-box').find('li').eq(4).click()
		}
	}
	if ($('#cv_language-eng_grade-1') && $('.infoEnglishSkill .mt_skillEngSorce').eq(i).html()) {
		$('#cv_language-eng_grade-1').val($('.infoEnglishSkill .mt_skillEngSorce').eq(i).html())
	}
}
for (var i = 0; i < $('.infoOtEnglishSkill').length; i++) {
	if ($('#cv_language-toefl-1').length && $('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html() && $('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html() == '托福') {
		$('#cv_language-toefl-1').val($('.infoOtEnglishSkill .mt_otherSkillEngSorce').eq(i).html())
	}
	if ($('#cv_language-gre-1').length && $('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html() && $('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html() == 'GRE') {
		$('#cv_language-gre-1').val($('.infoOtEnglishSkill .mt_otherSkillEngSorce').eq(i).html())
	}
	if ($('#cv_language-gmat-1').length && $('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html() && $('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html() == 'GMAT') {
		$('#cv_language-gmat-1').val($('.infoOtEnglishSkill .mt_otherSkillEngSorce').eq(i).html())
	}
	if ($('#cv_language-ielts-1').length && $('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html() && $('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html() == '雅思') {
		$('#cv_language-ielts-1').val($('.infoOtEnglishSkill .mt_otherSkillEngSorce').eq(i).html())
	}
	if ($('#cv_language-toeic-1').length && $('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html() && $('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html() == '托业') {
		$('#cv_language-toeic-1').val($('.infoOtEnglishSkill .mt_otherSkillEngSorce').eq(i).html())
	}
}
if ($('span[data-id=\"first_lang\"]').length) {
	$('span[data-id=\"first_lang\"]').click();
	if ($('.select-box').find('li') && $('.infoOtherSkill .mt_skillOtherLang').html() && $('.infoOtherSkill .mt_skillOtherLang').html() == '法语') {
		$('.select-box').find('li').eq(1).click()
	} else if ($('.select-box').find('li') && $('.infoOtherSkill .mt_skillOtherLang').html() && $('.infoOtherSkill .mt_skillOtherLang').html() == '日语') {
		$('.select-box').find('li').eq(2).click()
	} else if ($('.select-box').find('li') && $('.infoOtherSkill .mt_skillOtherLang').html() && $('.infoOtherSkill .mt_skillOtherLang').html() == '德语') {
		$('.select-box').find('li').eq(3).click()
	} else if ($('.select-box').find('li') && $('.infoOtherSkill .mt_skillOtherLang').html() && $('.infoOtherSkill .mt_skillOtherLang').html() == '西班牙语') {
		$('.select-box').find('li').eq(4).click()
	} else if ($('.select-box').find('li') && $('.infoOtherSkill .mt_skillOtherLang').html() && $('.infoOtherSkill .mt_skillOtherLang').html() == '意大利语') {
		$('.select-box').find('li').eq(5).click()
	}
}
for (var i = 0; i < $('.infoproject').length; i++) {
	if ($('#cv_prj-start_date-' + (i + 1)) && $('.infoproject .mt_prostarttime').eq(i).html()) {
		if ($('.mt_prostarttime').eq(i).html().length < 7) {
			$('#cv_prj-start_date-' + (i + 1)).val($('.mt_prostarttime').eq(i).html().split('-').join('-0') + '-01')
		} else {
			$('#cv_prj-start_date-' + (i + 1)).val($('.mt_prostarttime').eq(i).html() + '-01')
		}
	}
	if ($('#cv_prj-end_date-' + (i + 1)) && $('.infoproject .mt_proendtime').eq(i).html()) {
		if ($('.infoproject .mt_proendtime').eq(i).html().length < 7) {
			$('#cv_prj-end_date-' + (i + 1)).val($('.infoproject .mt_proendtime').eq(i).html().split('-').join('-0') + '-01')
		} else {
			$('#cv_prj-end_date-' + (i + 1)).val($('.infoproject .mt_proendtime').eq(i).html() + '-01')
		}
	}
	if ($('#cv_prj-prj_name-' + (i + 1)) && $('.infoproject .mt_projectName').eq(i).html()) {
		$('#cv_prj-prj_name-' + (i + 1)).val($('.infoproject .mt_projectName').eq(i).html())
	}
	if ($('#cv_prj-prj_duty-' + (i + 1)) && $('.infoproject .mt_positionName').eq(i).html()) {
		$('#cv_prj-prj_duty-' + (i + 1)).val($('.infoproject .mt_positionName').eq(i).html())
	}
	if ($('#cv_prj-prj_desc-' + (i + 1)) && $('.infoproject .mt_projectRemark').eq(i).html()) {
		$('#cv_prj-prj_desc-' + (i + 1)).val($('.infoproject .mt_projectRemark').eq(i).html())
	}
	if ($('#cv_prj-prj_zhize-' + (i + 1)) && $('.infoproject .mt_projectDuty').eq(i).html()) {
		$('#cv_prj-prj_zhize-' + (i + 1)).val($('.infoproject .mt_projectDuty').eq(i).html())
	}
}
for (var i = 0; i < $('.infoparttimejobs').length; i++) {
	if ($('#line_cv_exp_gongsixingzhi_' + (i + 1)) && $('.infoparttimejobs .mt_companyproperty').eq(i).html()) {
		$('#cv_exp-gongsixingzhi-' + (i + 1)).prev().find('span').click();
		if ($('.select-box').find('li') && $('.infoparttimejobs .mt_companyproperty').eq(i).html() && ($('.infoparttimejobs .mt_companyproperty').eq(i).html() == '外企代表处' || $('.infoparttimejobs .mt_companyproperty').eq(i).html() == '外资-欧美' || $('.infoparttimejobs .mt_companyproperty').eq(i).html() == '外资-非欧美')) {
			$('.select-box').find('li').eq(1).click()
		} else if ($('.select-box').find('li') && $('.infoparttimejobs .mt_companyproperty').eq(i).html() && ($('.infoparttimejobs .mt_companyproperty').eq(i).html() == '合资-欧美' || $('.infoparttimejobs .mt_companyproperty').eq(i).html() == '合资-非欧美')) {
			$('.select-box').find('li').eq(2).click()
		} else if ($('.select-box').find('li') && $('.infoparttimejobs .mt_companyproperty').eq(i).html() && ($('.infoparttimejobs .mt_companyproperty').eq(i).html() == '民营公司' || $('.infoparttimejobs .mt_companyproperty').eq(i).html() == '创业公司')) {
			$('.select-box').find('li').eq(3).click()
		} else if ($('.select-box').find('li') && $('.infoparttimejobs .mt_companyproperty').eq(i).html() && $('.infoparttimejobs .mt_companyproperty').eq(i).html() == '国企') {
			$('.select-box').find('li').eq(4).click()
		} else if ($('.select-box').find('li') && $('.infoparttimejobs .mt_companyproperty').eq(i).html() && $('.infoparttimejobs .mt_companyproperty').eq(i).html() == '上市公司') {
			$('.select-box').find('li').eq(5).click()
		} else if ($('.select-box').find('li') && $('.infoparttimejobs .mt_companyproperty').eq(i).html() && ($('.infoparttimejobs .mt_companyproperty').eq(i).html() == '政府机关' || $('.infoparttimejobs .mt_companyproperty').eq(i).html() == '非盈利机构')) {
			$('.select-box').find('li').eq(6).click()
		} else if ($('.select-box').find('li') && $('.infoparttimejobs .mt_companyproperty').eq(i).html() && $('.infoparttimejobs .mt_companyproperty').eq(i).html() == '事业单位') {
			$('.select-box').find('li').eq(7).click()
		}
	}
	if ($('#line_cv_exp_gongsiguimo_' + (i + 1)) && $('.infoparttimejobs .mt_companySize').eq(i).html()) {
		$('#cv_exp-gongsiguimo-' + (i + 1)).prev().find('span').click();
		if ($('.select-box').find('li') && $('.infoparttimejobs .mt_companySize').eq(i).html() && $('.infoparttimejobs .mt_companySize').eq(i).html() == '少于50人') {
			$('.select-box').find('li').eq(1).click()
		} else if ($('.select-box').find('li') && $('.infoparttimejobs .mt_companySize').eq(i).html() && $('.infoparttimejobs .mt_companySize').eq(i).html() == '50-149人') {
			$('.select-box').find('li').eq(2).click()
		} else if ($('.select-box').find('li') && $('.infoparttimejobs .mt_companySize').eq(i).html() && $('.infoparttimejobs .mt_companySize').eq(i).html() == '150-499人') {
			$('.select-box').find('li').eq(3).click()
		} else if ($('.select-box').find('li') && $('.infoparttimejobs .mt_companySize').eq(i).html() && $('.infoparttimejobs .mt_companySize').eq(i).html() == '500-999人') {
			$('.select-box').find('li').eq(4).click()
		} else {
			$('.select-box').find('li').eq(5).click()
		}
	}
	if ($('#cv_exp-start_date-' + (i + 1)) && $('.infoparttimejobs .mt_startDate').eq(i).html()) {
		if ($('.mt_startDate').eq(i).html().length < 7) {
			$('#cv_exp-start_date-' + (i + 1)).val($('.infoparttimejobs .mt_startDate').eq(i).html().split('-').join('-0') + '-01')
		} else {
			$('#cv_exp-start_date-' + (i + 1)).val($('.infoparttimejobs .mt_startDate').eq(i).html() + '-01')
		}
	}
	if ($('#cv_exp-end_date-' + (i + 1)) && $('.infoparttimejobs .mt_endDate').eq(i).html()) {
		if ($('.infoparttimejobs .mt_endDate').eq(i).html().length < 7) {
			$('#cv_exp-end_date-' + (i + 1)).val($('.infoparttimejobs .mt_endDate').eq(i).html().split('-').join('-0') + '-01')
		} else {
			$('#cv_exp-end_date-' + (i + 1)).val($('.infoparttimejobs .mt_endDate').eq(i).html() + '-01')
		}
	}
	if ($('#cv_exp-company_name-' + (i + 1)) && $('.infoparttimejobs .mt_companyName').eq(i).html()) {
		$('#cv_exp-company_name-' + (i + 1)).val($('.infoparttimejobs .mt_companyName').eq(i).html())
	}
	if ($('#cv_exp-job_title-' + (i + 1)) && $('.infoparttimejobs .mt_positionName').eq(i).html()) {
		$('#cv_exp-job_title-' + (i + 1)).val($('.infoparttimejobs .mt_positionName').eq(i).html())
	}
	if ($('#cv_exp-job_duty-' + (i + 1)) && $('.infoparttimejobs .mt_workDes').eq(i).text()) {
		$('#cv_exp-job_duty-' + (i + 1)).val($('.infoparttimejobs .mt_workDes').eq(i).text())
	}
	if ($('#cv_exp-dept_name-' + (i + 1)) && $('.infoparttimejobs .mt_department').eq(i).text()) {
		$('#cv_exp-dept_name-' + (i + 1)).val($('.infoparttimejobs .mt_department').eq(i).text())
	}
	if ($('#line_cv_exp_job_type_' + (i + 1)) && $('.infoparttimejobs .mt_workcat').eq(i).html()) {
		if ($('.infoparttimejobs .mt_workcat').eq(i).html() == '实习') {
			$('#line_cv_exp_job_type_' + (i + 1)).find('span').removeClass('selected').eq(4).addClass('selected').click()
		} else {
			$('#line_cv_exp_job_type_' + (i + 1)).find('span').removeClass('selected').eq(2).addClass('selected').click()
		}
	}
}
if ($('#cv_family-name-1').length) {
	$('#cv_family-name-1').val($('#mt_fmname').html())
}
if ($('#cv_family-relationship-1').length) {
	$('#cv_family-relationship-1').val($('#mt_fmrelation').html())
}
if ($('#cv_family-com_name-1').length) {
	$('#cv_family-com_name-1').val($('#mt_fmwork').html())
}
if ($('#cv_family-occupation-1').length) {
	$('#cv_family-occupation-1').val($('#mt_fmposition').html())
}
if ($('#cv_family-tel-1').length) {
	$('#cv_family-tel-1').val($('#mt_fmphone').html())
}
if ($('.infoschoolclub .mt_schClubLevel').html() && $('.infoschoolclub .mt_schClubLevel').html() == '班级') {
	$('#line_cv_act_is_std_leader_1').find('span').removeClass('selected').eq(2).addClass('selected').click();
	$('#cv_act-leader_title-1').val($('.infoschoolclub .mt_positionName').html())
}
if ($('#cv_act-awards_other-1').length) {
	$('#cv_act-awards_other-1').val($('#achievement').html())
}
if ($('#cv_act-awards_other-1').length) {
	$('#cv_act-awards_other-1').val($('#achievement').html())
}
for (var i = 0; i < $('.infoschaward').length; i++) {
	if ($('#line_cv_act_scholarship' + (i + 1) + '_1').length && $('.infoschaward .mt_awardsType').eq(i).html()) {
		$('#cv_act-scholarship' + (i + 1) + '-1').prev().find('span').click();
		if ($('.select-box').find('li') && $('.infoschaward .mt_awardsType').eq(i).html() && $('.infoschaward .mt_awardsType').eq(i).html() == '院系级') {
			$('.select-box').find('li').eq(1).click()
		} else if ($('.select-box').find('li') && $('.infoschaward .mt_awardsType').eq(i).html() && $('.infoschaward .mt_awardsType').eq(i).html() == '学校级') {
			$('.select-box').find('li').eq(2).click()
		} else if ($('.select-box').find('li') && $('.infoschaward .mt_awardsType').eq(i).html() && $('.infoschaward .mt_awardsType').eq(i).html() == '省市级') {
			$('.select-box').find('li').eq(3).click()
		} else if ($('.select-box').find('li') && $('.infoschaward .mt_awardsType').eq(i).html() && $('.infoschaward .mt_awardsType').eq(i).html() == '国家级') {
			$('.select-box').find('li').eq(4).click()
		} else if ($('.select-box').find('li') && $('.infoschaward .mt_awardsType').eq(i).html() && $('.infoschaward .mt_awardsType').eq(i).html() == '国际级') {
			$('.select-box').find('li').eq(5).click()
		}
	}
	if ($('#line_cv_act_scholarship' + (i + 1) + '_lvl_1').length && $('.infoschaward .mt_awardsLevel').eq(i).html()) {
		$('#cv_act-scholarship' + (i + 1) + '_lvl-1').prev().find('span').click();
		if ($('.select-box').find('li') && $('.infoschaward .mt_awardsLevel').eq(i).html() && $('.infoschaward .mt_awardsLevel').eq(i).html() == '特等奖') {
			$('.select-box').find('li').eq(1).click()
		} else if ($('.select-box').find('li') && $('.infoschaward .mt_awardsLevel').eq(i).html() && $('.infoschaward .mt_awardsLevel').eq(i).html() == '一等奖') {
			$('.select-box').find('li').eq(2).click()
		} else if ($('.select-box').find('li') && $('.infoschaward .mt_awardsLevel').eq(i).html() && $('.infoschaward .mt_awardsLevel').eq(i).html() == '二等奖') {
			$('.select-box').find('li').eq(3).click()
		} else if ($('.select-box').find('li') && $('.infoschaward .mt_awardsLevel').eq(i).html() && $('.infoschaward .mt_awardsLevel').eq(i).html() == '三等奖') {
			$('.select-box').find('li').eq(4).click()
		}
	}
	if ($('#cv_act-acquired_date' + (i + 1) + '-1').length && $('.infoschaward .mt_awardsDate').eq(i).html()) {
		if ($('.mt_awardsDate').eq(i).html().length < 7) {
			$('#cv_act-acquired_date' + (i + 1) + '-1').val($('.infoschaward .mt_awardsDate').eq(i).html().split('-').join('-0') + '-01')
		} else {
			$('#cv_act-acquired_date' + (i + 1) + '-1').val($('.infoschaward .mt_awardsDate').eq(i).html() + '-01')
		}
	}
}
if ($('#cv_act-act_desc-1').length) {
	$('#cv_act-act_desc-1').val($('.infoschoolclub .mt_workDes').html())
}
if ($('#cv_act-cansai_other1-1').length) {
	$('#cv_act-cansai_other1-1').val($('.infoschaward .mt_awardsName').html())
}
if ($('#cv_act-cansai_other2-1').length) {
	$('#cv_act-cansai_other2-1').val($('.infoschaward .mt_awardsLevel').html())
}
if ($('.resume-title').eq(5).text() == '奖励、竞赛 编辑') {
	if ($('input[data-text=\"担任职务\"]').length && $('.infoschoolclub .mt_positionName').html()) {
		$('input[data-text=\"担任职务\"]').val($('.infoschoolclub .mt_positionName').html())
	}
}
//微软
if ($('input[name=\"country\"]').length) {
	$('input[name=\"country\"]').val($('#mt_national').html())
}
if ($('#cv_huodong-q1-1').length) {
	$('#cv_huodong-q1-1').val($('#mt_skill').html())
}
//最高学历
if ($('select[name=\"edu_degree\"]').length && $('#mt_edu').html()) {
	$('#cv_basic-edu_degree-1').prev().find('span').click();
	if ($('.select-box').find('li') && $('#mt_edu').html() && ($('#mt_edu').html() == '大学本科-一本' || $('#mt_edu').html() == '大学本科-二本' || $('#mt_edu').html() == '大学本科-三本')) {
		$('.select-box').find('li').eq(3).click()
	}
	if ($('.select-box').find('li') && $('#mt_edu').html() && $('#mt_edu').html() == '博士研究生') {
		$('.select-box').find('li').eq(7).click()
	}
	if ($('.select-box').find('li') && $('#mt_edu').html() && $('#mt_edu').html() == '大学专科') {
		$('.select-box').find('li').eq(2).click()
	}
	if ($('.select-box').find('li') && $('#mt_edu').html() && $('#mt_edu').html() == '双学士') {
		$('.select-box').find('li').eq(4).click()
	}
	if ($('.select-box').find('li') && $('#mt_edu').html() && $('#mt_edu').html() == '硕士研究生') {
		$('.select-box').find('li').eq(5).click()
	}
	if ($('.select-box').find('li') && $('#mt_edu').html() && $('#mt_edu').html() == 'MBA') {
		$('.select-box').find('li').eq(6).click()
	}
}

