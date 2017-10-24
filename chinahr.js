if ($('#jm_qiuck_cover')) {
	$('#jm_qiuck_cover').fadeIn();
	setTimeout(function() {
		$('#jm_qiuck_cover').fadeOut()
	}, 1000)
}
var pathname = window.location.pathname;
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
//广州银行
// if(pathname.indexOf('/resume/gzcbbank2017')!=-1){
	if ($('#cv_basic-edu_degree-1').length && $('#mt_edu').html() && $('.select-box').eq(0).find('li').eq(3).html() == '双学士') {
		$('#cv_basic-edu_degree-1').prev().find('span').click();
		if ($('.select-box').find('li') && $('#mt_edu').html() && ($('#mt_edu').html() == '大学本科-一本' || $('#mt_edu').html() == '大学本科-二本' || $('#mt_edu').html() == '大学本科-三本' || $('#mt_edu').html() == '海外本科')) {
			$('.select-box').find('li').eq(2).click()
		} else if ($('.select-box').find('li') && $('#mt_edu').html() && $('#mt_edu').html() == '双学士') {
			$('.select-box').find('li').eq(3).click()
		} else if ($('.select-box').find('li') && $('#mt_edu').html() && $('#mt_edu').html() == '硕士研究生') {
			$('.select-box').find('li').eq(4).click()
		} else if ($('.select-box').find('li') && $('#mt_edu').html() && $('#mt_edu').html() == '博士研究生') {
			$('.select-box').find('li').eq(6).click()
		} else if ($('.select-box').find('li') && $('#mt_edu').html() && $('#mt_edu').html() == 'MBA') {
			$('.select-box').find('li').eq(5).click()
		}
	}
	for (var i = 0; i < $('.infopledu').length; i++) {
		if ($('#cv_degree-xueli-' + (i + 1)).length && $('.infopledu .mt_education').eq(i).html() && $.trim($('.resume-title').eq(1).text()).substring(1,6) == '学历、学校') {
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
		if ($('#cv_degree-department-' + (i + 1)).length) {
			$('#cv_degree-department-' + (i + 1)).val($('.infopledu .mt_academy').html())
		}
	}
	if ($.trim($('.resume-title').eq(3).text())=='奖励、活动') {
		if ($('#cv_act-leader_title-1').length) {
			$('#cv_act-leader_title-1').val($('.infoschoolclub .mt_positionName').html())
		}
	}
// }
//北汽集团
if(pathname.indexOf('/resume/baic/31661011045967')!=-1){
	if ($.trim($('.resume-title').eq(0).text())=='*个人信息(未完善) 编辑') {
		if ($('select[name=\"edu_degree\"]').length && $('#mt_edu').html()) {
			if ($('div[datas-id=\"selectBox\"]').find('li') && $('#mt_edu').html() && ($('#mt_edu').html() == '大学本科-一本' || $('#mt_edu').html() == '大学本科-二本' || $('#mt_edu').html() == '大学本科-三本')) {
				$('div[datas-id=\"selectBox\"]').find('li').eq(2).click()
			}
			if ($('div[datas-id=\"selectBox\"]').find('li') && $('#mt_edu').html() && $('#mt_edu').html() == '博士研究生') {
				$('div[datas-id=\"selectBox\"]').find('li').eq(6).click()
			}
			if ($('div[datas-id=\"selectBox\"]').find('li') && $('#mt_edu').html() && $('#mt_edu').html() == '大学专科') {
				$('div[datas-id=\"selectBox\"]').find('li').eq(2).click()
			}
			if ($('div[datas-id=\"selectBox\"]').find('li') && $('#mt_edu').html() && $('#mt_edu').html() == '双学士') {
				$('div[datas-id=\"selectBox\"]').find('li').eq(3).click()
			}
			if ($('div[datas-id=\"selectBox\"]').find('li') && $('#mt_edu').html() && $('#mt_edu').html() == '硕士研究生') {
				$('div[datas-id=\"selectBox\"]').find('li').eq(4).click()
			}
			if ($('div[datas-id=\"selectBox\"]').find('li') && $('#mt_edu').html() && $('#mt_edu').html() == 'MBA') {
				$('div[datas-id=\"selectBox\"]').find('li').eq(5).click()
			}
		}
	}
	if ($.trim($('.resume-title').eq(1).text())=='*学历、学校请从您的最高学历开始填写') {
		for (var i = 0; i < $('.infopledu').length; i++) {
		    if ($('#cv_degree-xueli-' + (i + 1)).length && $('.infopledu .mt_education').eq(i).html() && $('.select-box').eq(0).find('li').eq(6).html() == '博士研究生') {
		        $('#cv_degree-xueli-' + (i + 1)).prev().find('span').click();
		        if ($('div[datas-id=\"selectBox\"]').find('li') && $('.infopledu .mt_education').eq(i).html() && ($('.infopledu .mt_education').eq(i).html() == '大学本科-一本' || $('.infopledu .mt_education').eq(i).html() == '大学本科-二本' || $('.infopledu .mt_education').eq(i).html() == '大学本科-三本' || $('.infopledu .mt_education').eq(i).html() == '海外本科')) {
		            $('div[datas-id=\"selectBox\"]').find('li').eq(3).click()
		        } else if ($('div[datas-id=\"selectBox\"]').find('li') && $('.infopledu .mt_education').eq(i).html() && $('.infopledu .mt_education').eq(i).html() == '大学专科') {
		            $('div[datas-id=\"selectBox\"]').find('li').eq(2).click()
		        } else if ($('div[datas-id=\"selectBox\"]').find('li') && $('.infopledu .mt_education').eq(i).html() && $('.infopledu .mt_education').eq(i).html() == '硕士研究生') {
		            $('div[datas-id=\"selectBox\"]').find('li').eq(5).click()
		        } else if ($('div[datas-id=\"selectBox\"]').find('li') && $('.infopledu .mt_education').eq(i).html() && $('.infopledu .mt_education').eq(i).html() == '博士研究生') {
		            $('div[datas-id=\"selectBox\"]').find('li').eq(6).click()
		        } else if ($('div[datas-id=\"selectBox\"]').find('li') && $('.infopledu .mt_education').eq(i).html() && $('.infopledu .mt_education').eq(i).html() == 'MBA') {
		            $('div[datas-id=\"selectBox\"]').find('li').eq(7).click()
		        } else {
		            $('div[datas-id=\"selectBox\"]').find('li').eq(1).click()
		        }
		    }
		}
	}
	if ($.trim($('.resume-title').eq(3).text())=='奖励、活动(未完善) 编辑') {
		if ($('#cv_act-leader_title-1').length) {
			$('#cv_act-leader_title-1').val($('.infoschoolclub .mt_positionName').html())
		}
	}
}
//信步科技
if(pathname.indexOf('/resume/seavo2017/31801011040365')!=-1 || pathname.indexOf('/resume/hpe2017/31831011040365')!=-1 || pathname.indexOf('/resume/ximalaya2017/31791011040365')!=-1 || pathname.indexOf('/resume/baic/31661011040365')!=-1){
	if ($.trim($('.resume-title').eq(3).text()) == '奖励、活动') {
		if ($('#cv_act-leader_title-1').length) {
			$('#cv_act-leader_title-1').val($('.infoschoolclub .mt_positionName').html())
		}
	}
	if ($('select[name=\"edu_degree\"]').length && $('#mt_edu').html()) {
		$('#cv_basic-edu_degree-1').prev().find('span').click();
		if ($('.select-box').find('li') && $('#mt_edu').html() && ($('#mt_edu').html() == '大学本科-一本' || $('#mt_edu').html() == '大学本科-二本' || $('#mt_edu').html() == '大学本科-三本')) {
			$('div[datas-id=\"selectBox\"]').find('li').eq(2).click()
		}
		if ($('.select-box').find('li') && $('#mt_edu').html() && $('#mt_edu').html() == '博士研究生') {
			$('div[datas-id=\"selectBox\"]').find('li').eq(6).click()
		}
		if ($('.select-box').find('li') && $('#mt_edu').html() && $('#mt_edu').html() == '双学士') {
			$('div[datas-id=\"selectBox\"]').find('li').eq(3).click()
		}
		if ($('.select-box').find('li') && $('#mt_edu').html() && $('#mt_edu').html() == '硕士研究生') {
			$('div[datas-id=\"selectBox\"]').find('li').eq(4).click()
		}
		if ($('.select-box').find('li') && $('#mt_edu').html() && $('#mt_edu').html() == 'MBA') {
			$('div[datas-id=\"selectBox\"]').find('li').eq(5).click()
		}
	}
	for (var i = 0; i < $('.infopledu').length; i++) {
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
	}
}
//联通
if(pathname.indexOf('/resume/chinaunicom2017')!=-1){
	if ($('#cv_basic-height-1').length) {
		$('#cv_basic-height-1').val($('#mt_height').html())
	}
	if ($('#cv_basic-weight-1').length) {
		$('#cv_basic-weight-1').val($('#mt_weight').html())
	}
	if ($('#cv_basic-minzu-1').length) {
		$('#cv_basic-minzu-1').val($('#mt_nation').html())
	}
	if ($('#cv_basic-jiguan-1').length) {
		$('#cv_basic-jiguan-1').val($('#mt_nativeplace').html()+$('#mt_native_city').html())
	}
	if ($('#cv_basic-edu_degree-1').length && $('#mt_edu').html() && $('.select-box').eq(0).find('li').eq(3).html() == '双学士') {
		$('#cv_basic-edu_degree-1').prev().find('span').click();
		if ($('.select-box').find('li') && $('#mt_edu').html() && ($('#mt_edu').html() == '大学本科-一本' || $('#mt_edu').html() == '大学本科-二本' || $('#mt_edu').html() == '大学本科-三本' || $('#mt_edu').html() == '海外本科')) {
			$('.select-box').find('li').eq(2).click()
		} else if ($('.select-box').find('li') && $('#mt_edu').html() && $('#mt_edu').html() == '双学士') {
			$('.select-box').find('li').eq(3).click()
		} else if ($('.select-box').find('li') && $('#mt_edu').html() && $('#mt_edu').html() == '硕士研究生') {
			$('.select-box').find('li').eq(4).click()
		} else if ($('.select-box').find('li') && $('#mt_edu').html() && $('#mt_edu').html() == '博士研究生') {
			$('.select-box').find('li').eq(6).click()
		} else if ($('.select-box').find('li') && $('#mt_edu').html() && $('#mt_edu').html() == 'MBA') {
			$('.select-box').find('li').eq(5).click()
		}
	}
	if ($('#cv_basic-politics-1-30').length && $('#mt_polistatus').html()) {
		if ($('#mt_polistatus').html() == '群众') {
			$('#cv_basic-politics-1-30').nextAll().eq(0).click();
		}
		if ($('#mt_polistatus').html() == '共青团员') {
			$('#cv_basic-politics-1-30').nextAll().eq(1).click();
		}
		if ($('#mt_polistatus').html() == '中共预备党员' || $('#mt_polistatus').html() == '中共党员') {
			$('#cv_basic-politics-1-30').nextAll().eq(2).click();
		}
	}
	for (var i = 0; i < $('.infopledu').length; i++) {
		if ($('#cv_degree-xueli-' + (i + 1)).length && $('.infopledu .mt_education').eq(i).html() && $.trim($('.resume-title').eq(1).text()).substring(1,5) == '教育经历') {
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
	}
	for (var i = 0; i < $('.infoparttimejobs').length; i++) {
		if ($('#cv_prj-start_date-' + (i + 1)) && $('.infoparttimejobs .mt_startDate').eq(i).html()) {
			if ($('.mt_startDate').eq(i).html().length < 7) {
				$('#cv_prj-start_date-' + (i + 1)).val($('.mt_startDate').eq(i).html().split('-').join('-0') + '-01')
			} else {
				$('#cv_prj-start_date-' + (i + 1)).val($('.mt_startDate').eq(i).html() + '-01')
			}
		}
		if ($('#cv_prj-end_date-' + (i + 1)) && $('.infoparttimejobs .mt_endDate').eq(i).html()) {
			if ($('.infoparttimejobs .mt_endDate').eq(i).html().length < 7) {
				$('#cv_prj-end_date-' + (i + 1)).val($('.infoparttimejobs .mt_endDate').eq(i).html().split('-').join('-0') + '-01')
			} else {
				$('#cv_prj-end_date-' + (i + 1)).val($('.infoparttimejobs .mt_endDate').eq(i).html() + '-01')
			}
		}
		if ($('#cv_prj-prj_name-' + (i + 1)) && $('.infoparttimejobs .mt_companyName').eq(i).html()) {
			$('#cv_prj-prj_name-' + (i + 1)).val($('.infoparttimejobs .mt_companyName').eq(i).html())
		}
		if ($('#cv_prj-prj_duty-' + (i + 1)) && $('.infoparttimejobs .mt_positionName').eq(i).html()) {
			$('#cv_prj-prj_duty-' + (i + 1)).val($('.infoparttimejobs .mt_positionName').eq(i).html())
		}
		if ($('#cv_prj-prj_desc-' + (i + 1)) && $('.infoparttimejobs .mt_workDes').eq(i).text()) {
			$('#cv_prj-prj_desc-' + (i + 1)).val($('.infoparttimejobs .mt_workDes').eq(i).text())
		}
		if ($('#cv_prj-ZhengMingRen-' + (i + 1)) && $('.infoparttimejobs .mt_reterenceName').eq(i).html()) {
			$('#cv_prj-ZhengMingRen-' + (i + 1)).val($('.infoparttimejobs .mt_reterenceName').eq(i).html())
		}
		if ($('#cv_prj-contact_zmr-' + (i + 1)) && $('.infoparttimejobs .mt_reterence_phone').eq(i).html()) {
			$('#cv_prj-contact_zmr-' + (i + 1)).val($('.infoparttimejobs .mt_reterence_phone').eq(i).html())
		}
	}
	for (var i = 0; i < $('.infoplcerti').length; i++) {
		if ($('#cv_prj-contact_zmr-' + (i + 1)) && $('.infoplcerti .mt_certificateName').eq(i).html()) {
			$('#cv_prj-contact_zmr-' + (i + 1)).val($('.infoplcerti .mt_certificateName').eq(i).html())
		}
		if ($('#cv_prj-prizeDate-' + (i + 1)).length && $('.infoplcerti .mt_getDate').eq(i).html()) {
			if ($('.infoplcerti .mt_getDate').eq(i).html().length < 7) {
				$('#cv_prj-prizeDate-' + (i + 1)).val($('.infoplcerti .mt_getDate').eq(i).html().split('-').join('-0') + '-01')
			} else {
				$('#cv_prj-prizeDate-' + (i + 1)).val($('.infoplcerti .mt_getDate').eq(i).html() + '-01')
			}
		}
		if ($('#cv_prj-prizeUnit-' + (i + 1)) && $('.infoplcerti .mt_issuing').eq(i).html()) {
			$('#cv_prj-prizeUnit-' + (i + 1)).val($('.infoplcerti .mt_issuing').eq(i).html())
		}
		if ($('#cv_prj-majorActivity-' + (i + 1)) && $('.infoplcerti .mt_certificateDes').eq(i).html()) {
			$('#cv_prj-majorActivity-' + (i + 1)).val($('.infoplcerti .mt_certificateDes').eq(i).html())
		}
	}
}
// 锦州银行
if(pathname.indexOf('/resume/jinzhoubank2017')!=-1){
	if ($('#cv_basic-nationality-1').length) {
		$('#cv_basic-nationality-1').val($('#mt_nation').html())
	}
	if ($('#cv_basic-family_add-1').length) {
		$('#cv_basic-family_add-1').val($('#mt_postadd').html())
	}
	if ($('#cv_basic-hobbies-1').length) {
		$('#cv_basic-hobbies-1').val($('#mt_skill').html())
	}
	if ($('input[name=\"politics_1\"]').length && $('#mt_polistatus').html()) {
		if ($('#mt_polistatus').html() == '群众') {
			$('input[name=\"politics_1\"]').nextAll('span').eq(4).click();
		}
		if ($('#mt_polistatus').html() == '共青团员') {
			$('input[name=\"politics_1\"]').eq(3).nextAll('span').click();
		}
		if ($('#mt_polistatus').html() == '中共党员') {
			$('input[name=\"politics_1\"]').eq(0).nextAll('span').click();
		}
		if ($('#mt_polistatus').html() == '中共预备党员') {
			$('input[name=\"politics_1\"]').eq(1).nextAll('span').click();
		}
	}
	if ($.trim($('.resume-title').eq(2).text())=='*校内任职选“是”无法提交请刷新浏览器页面，技术咨询电话15040556629') {
		if ($('#cv_xnrz-zyrzjl-1').length) {
			$('#cv_xnrz-zyrzjl-1').val($('.infoschoolclub .mt_schClubList').html())
		}
	}
}
//咪咕
if(pathname.indexOf('/2011/forms/migu2017')!=-1){
	var event=document.createEvent('HTMLEvents');
    event.initEvent('change',false,true);
    if ($('form[name=\"frmMain\"]').find('table').eq(0).find('strong').html() == '个人信息') {
		if ($('#item_name_cn').length) {
			$('#item_name_cn').val($('#mt_name').html())
		}
		if ($('input[name=\"item_gender\"]').length && $('#mt_sex').html()) {
			if ($('#mt_sex').html() == '男') {
				$('input[name=\"item_gender\"]').eq(0).click();
			}
			if ($('#mt_sex').html() == '女') {
				$('input[name=\"item_gender\"]').eq(1).click();
			}
		}
		if ($('#item_birth_date').length && $('#mt_birth').html()) {
			var birth = $('#mt_birth').html().split('-');
			for (var i in birth) {
				if (birth[i].length < 2) {
					birth[i] = '0' + birth[i]
				}
				var birthr = birth.join('-')
			}
			$('#item_birth_date').val(birthr)
		}
		if ($('#item_tall').length) {
			$('#item_tall').val($('#mt_height').html())
		}
		if ($('#item_height').length) {
			$('#item_height').val($('#mt_weight').html())
		}
		if ($('input[name=\"item_marital\"]').length && $('#mt_maritalstatus').html()) {
			if ($('#mt_maritalstatus').html() == '未婚') {
				$('input[name=\"item_marital\"]').eq(0).click();
			}
			if ($('#mt_maritalstatus').html() == '已婚') {
				$('input[name=\"item_marital\"]').eq(1).click();
			}
			if ($('#mt_maritalstatus').html() == '离婚') {
				$('input[name=\"item_marital\"]').eq(2).click();
			}
		}
		if($('#item_pr_area').length && $('#mt_hukoucity').html() && $('#mt_hukoucity_city').html()){
			var pro=document.getElementById('item_pr_area');
			var mypro = $('#mt_hukoucity').html();
			var prostr;
			for(var i=0;i<pro.options.length;i++){
				prostr = $.trim(pro.options[i].innerHTML);
				if(prostr.indexOf(mypro,0)!=-1){
					pro.options[i].selected = true;	
					pro.dispatchEvent(event);
					setTimeout(function(){
						var city=document.getElementById('item_pr_loc');
						var mycity=$('#mt_hukoucity_city').html();
						var citystr;
						for(var j=0;j<city.options.length;j++){
							citystr=city.options[j].innerHTML.trim();
							if(citystr.indexOf(mycity,0)!=-1){
								city.options[j].selected=true;
								break;
							}
							else{city.options[3].selected=true;}
						}
						city.dispatchEvent(event);
					},200);
					if ($('#item_pr_loc_othr').length) {
						$('#item_pr_loc_othr').val($('#mt_hukoucity_city').html())
					}
					break;
				}
			}
		}
		if($('#item_birth_area').length && $('#mt_hukoucity').html() && $('#mt_hukoucity_city').html()){
			var pro=document.getElementById('item_birth_area');
			var mypro = $('#mt_hukoucity').html();
			var prostr;
			for(var i=0;i<pro.options.length;i++){
				prostr = $.trim(pro.options[i].innerHTML);
				if(prostr.indexOf(mypro,0)!=-1){
					pro.options[i].selected = true;	
					pro.dispatchEvent(event);
					setTimeout(function(){
						var city=document.getElementById('item_birth_loc');
						var mycity=$('#mt_hukoucity_city').html();
						var citystr;
						for(var j=0;j<city.options.length;j++){
							citystr=city.options[j].innerHTML.trim();
							if(citystr.indexOf(mycity,0)!=-1){
								city.options[j].selected=true;
								break;
							}
							else{city.options[3].selected=true;}
						}
						city.dispatchEvent(event);
					},200);
					if ($('#item_birth_loc_othr').length) {
						$('#item_birth_loc_othr').val($('#mt_hukoucity_city').html())
					}
					break;
				}
			}
		}
		if($('#item_card_type').length && $('#mt_idtype').html()){
			var pro=document.getElementById('item_card_type');
			var mypro = $('#mt_idtype').html();
			var prostr;
			for(var i=0;i<pro.options.length;i++){
				prostr = $.trim(pro.options[i].innerHTML);
				if(prostr.indexOf(mypro,0)!=-1){
					pro.options[i].selected = true;	
					pro.dispatchEvent(event);
					break;
				}
				else{pro.options[3].selected = true;}
			}
			if($('#item_card_no').length && $('#mt_id').html()){
				$('#item_card_no').val($('#mt_id').html())
			}
		}
		if($('#item_minzu').length && $('#mt_nation').html()){
			var sigNation = document.getElementById('item_minzu');  
			var mt_nation = $('#mt_nation').html();   
			for(var i=0; i<sigNation.options.length; i++){
			   if(sigNation.options[i].innerHTML == mt_nation){
			   sigNation.options[i].selected = true; break; }  
			}
		}
		if ($('input[name=\"item_politics\"]').length && $('#mt_polistatus').html()) {
			if ($('#mt_polistatus').html() == '群众') {
				$('input[name=\"item_politics\"]').eq(0).click();
			}
			else if ($('#mt_polistatus').html() == '共青团员') {
				$('input[name=\"item_politics\"]').eq(1).click();
			}
			else if ($('#mt_polistatus').html() == '中共党员' || $('#mt_polistatus').html() == '中共预备党员') {
				$('input[name=\"item_politics\"]').eq(2).click();
			}
			else if ($('#mt_polistatus').html() == '中国民主同盟' || $('#mt_polistatus').html() == '中国民主建国会' || $('#mt_polistatus').html() == '中国民主促进会' || $('#mt_polistatus').html() == '中国农工民主党' || $('#mt_polistatus').html() == '台湾民主自治同盟' ) {
				$('input[name=\"item_politics\"]').eq(3).click();
			}
		}
		if($('#item_cur_area').length && $('#mt_livecity_pro').html() && $('#mt_livecity_city').html()){
			var pro=document.getElementById('item_cur_area');
			var mypro = $('#mt_livecity_pro').html();
			var prostr;
			for(var i=0;i<pro.options.length;i++){
				prostr = $.trim(pro.options[i].innerHTML);
				if(prostr.indexOf(mypro,0)!=-1){
					pro.options[i].selected = true;	
					pro.dispatchEvent(event);
					setTimeout(function(){
						var city=document.getElementById('item_cur_loc');
						var mycity=$('#mt_livecity_city').html();
						var citystr;
						for(var j=0;j<city.options.length;j++){
							citystr=city.options[j].innerHTML.trim();
							if(citystr.indexOf(mycity,0)!=-1){
								city.options[j].selected=true;
								break;
							}
							else{city.options[3].selected=true;}
						}
					},200);
					break;
				}
			}
		}
		if($('#item_work_cit').length && $('#mt_expectcity_city').html()){
			var sigNation = document.getElementById('item_work_cit');  
			var mt_expectcity_city = $('#mt_expectcity_city').html();   
			for(var i=0; i<sigNation.options.length; i++){
			   if(mt_expectcity_city.indexOf(sigNation.options[i].innerHTML,0)!=-1){
			   sigNation.options[i].selected = true; break; }  
			}
		}
		if ($('#item_email').length) {
			$('#item_email').val($('#mt_email').html())
		}
		if ($('#item_mobile_tel').length) {
			$('#item_mobile_tel').val($('#mt_tel').html())
		}
		if ($('#item_contact').length) {
			$('#item_contact').val($('#mt_jjlxrtel').html())
		}
		if ($('#item_address').length) {
			$('#item_address').val($('#mt_add').html())
		}
		if ($('#item_postcode').length) {
			$('#item_postcode').val($('#mt_zip').html())
		}
		//教育信息
		var maxid=0;
		var maxedutime;
		for(var i=0;i<$('.infopledu').length;i++){
			//得到最晚毕业年份
			var endyear=parseInt($('#edu-list .mt_endYearY').eq(i).html());
			if(i==0){
				maxedutime=endyear;
				maxid=0;
			}else{
				if(endyear>maxedutime){
					maxedutime=endyear;
					maxid=i;
				}
			}
		}
		//把最高的教育信息填写在基本信息处
		if($('#item_edu_xueli').length>0 && $('#edu-list .mt_education').eq(maxid).html()){
			var education=document.getElementById('item_edu_xueli');
			switch( $('#edu-list .mt_education').eq(maxid).html()){
				case '大学本科-一本':
				case '大学本科-二本':
				case '大学本科-三本':
				case '海外本科':education.options[3].selected=true;break;
				case '硕士研究生':education.options[5].selected=true;break;
				case '双学士':education.options[4].selected=true;break;
				case '博士研究生':education.options[7].selected=true;break;
				case 'MBA':education.options[6].selected=true;break;
				case '大学专科':education.options[2].selected=true;break;
			}
		}
		if ($('#item_graduate_date').length) {
			$('#item_graduate_date').val($('#mt_gradutetime').html())
		}
		if ($('#item_get_date').length) {
			$('#item_get_date').val($('#mt_gradutetime').html())
		}
		if ($('#mt_gradutetime').html().length < 7) {
			$('#item_graduate_date').val($('#mt_gradutetime').html().split('-').join('-0') + '-01')
		} else {
			$('#item_graduate_date').val($('#mt_gradutetime').html() + '-01')
		}
	}
	if ($('form[name=\"frmMain\"]').find('table').eq(0).find('strong').html() == '教育经历') {
		if ($('form[name=\"frmMain\"]').find('table').eq(4).find('tr').length == 15) {
			if ($('select[name=\"item_xueli\"]').length && $('.infopledu .mt_education').eq(0).html()) {
				if ($('.infopledu .mt_education').eq(0).html() == '硕士研究生') {
					$('select[name=\"item_xueli\"]').get(0).options[5].selected=true;
				} else if ($('.infopledu .mt_education').eq(0).html() == '博士研究生') {
					$('select[name=\"item_xueli\"]').get(0).options[7].selected=true;
				} else if ($('.infopledu .mt_education').eq(0).html() == '大学专科') {
					$('select[name=\"item_xueli\"]').get(0).options[2].selected=true;
				} else if (($('.infopledu .mt_education').eq(0).html() == '大学本科-一本' || $('.infopledu .mt_education').eq(0).html() == '大学本科-二本' || $('.infopledu .mt_education').eq(0).html() == '大学本科-三本' || $('.infopledu .mt_education').eq(0).html() == '海外本科')) {
					$('select[name=\"item_xueli\"]').get(0).options[3].selected=true;
				} else if ($('.infopledu .mt_education').eq(0).html() == 'MBA') {
					$('select[name=\"item_xueli\"]').get(0).options[6].selected=true;
				}
			}
			if ($('select[name=\"item_degree\"]').length && $('.infopledu .mt_degree').eq(0).html()) {
				if ($('.infopledu .mt_degree').eq(0).html() == '学士') {
					$('select[name=\"item_degree\"]').get(0).options[2].selected=true;
				} else if ($('.infopledu .mt_degree').eq(0).html() == '博士') {
					$('select[name=\"item_degree\"]').get(0).options[6].selected=true;
				} else if ($('.infopledu .mt_degree').eq(0).html() == '双学士') {
					$('select[name=\"item_degree\"]').get(0).options[3].selected=true;
				} else if ($('.infopledu .mt_degree').eq(0).html() == '硕士') {
					$('select[name=\"item_degree\"]').get(0).options[4].selected=true;
				} else if ($('.infopledu .mt_degree').eq(0).html() == 'MBA') {
					$('select[name=\"item_degree\"]').get(0).options[5].selected=true;
				}
			}
			if ($('input[name=\"item_start_date\"]').length && $('.infopledu .mt_startYear').eq(0).html()) {
				if ($('.infopledu .mt_startYear').eq(0).html().length < 7) {
					$('input[name=\"item_start_date\"]').val($('.infopledu .mt_startYear').eq(0).html().split('-').join('-0') + '-01')
				} else {
					$('input[name=\"item_start_date\"]').val($('.infopledu .mt_startYear').eq(0).html() + '-01')
				}
			}
			if ($('input[name=\"item_end_date\"]').length && $('.infopledu .mt_endYear').eq(0).html()) {
				if ($('.infopledu .mt_endYear').eq(0).html().length < 7) {
					$('input[name=\"item_end_date\"]').val($('.infopledu .mt_endYear').eq(0).html().split('-').join('-0') + '-01')
				} else {
					$('input[name=\"item_end_date\"]').val($('.infopledu .mt_endYear').eq(0).html() + '-01')
				}
			}
			if ($('input[name=\"item_getzhengshu_date\"]').length && $('.infopledu .mt_endYear').eq(0).html()) {
				if ($('.infopledu .mt_endYear').eq(0).html().length < 7) {
					$('input[name=\"item_getzhengshu_date\"]').val($('.infopledu .mt_endYear').eq(0).html().split('-').join('-0') + '-01')
				} else {
					$('input[name=\"item_getzhengshu_date\"]').val($('.infopledu .mt_endYear').eq(0).html() + '-01')
				}
			}
			if ($('input[name=\"item_cool\"]').length && $('.infopledu .mt_academy').eq(0).html()) {
				$('input[name=\"item_cool\"]').val($('.infopledu .mt_academy').eq(0).html())
			}
			if ($('textarea[name=\"item_courses\"]').length && $('.infopledu .mt_major').eq(0).html()) {
				$('textarea[name=\"item_courses\"]').val($('.infopledu .mt_major').eq(0).html())
			}
			if ($('input[name=\"item_fangxiang\"]').length && $('.infopledu .mt_professional').eq(0).html()) {
				$('input[name=\"item_fangxiang\"]').val($('.infopledu .mt_professional').eq(0).html())
			}
			if ($('select[name=\"item_gpa\"]').length && $('.infopledu .mt_classranking').eq(0).html()) {
				if ($('.infopledu .mt_classranking').eq(0).html() == '前5%') {
					$('select[name=\"item_gpa\"]').get(0).options[1].selected=true;
				} else if ($('.infopledu .mt_classranking').eq(0).html() == '前10%') {
					$('select[name=\"item_gpa\"]').get(0).options[2].selected=true;
				} else if ($('.infopledu .mt_classranking').eq(0).html() == '前20%') {
					$('select[name=\"item_gpa\"]').get(0).options[3].selected=true;
				} else if ($('.infopledu .mt_classranking').eq(0).html() == '前30%') {
					$('select[name=\"item_gpa\"]').get(0).options[4].selected=true;
				} else{$('select[name=\"item_gpa\"]').get(0).options[5].selected=true;}
			}
	    }
	  //   if ($('form[name=\"frmMain\"]').find('table').eq(4).find('tr').length < 15) {
		 //    var i =$('form[name=\"frmMain\"]').find('table').eq(4).find('tr').length;
			// if ($('select[name=\"item_xueli\"]').length && $('.infopledu .mt_education').eq(i-2).html()) {
			// 	if ($('.infopledu .mt_education').eq(i-2).html() == '硕士研究生') {
			// 		$('select[name=\"item_xueli\"]').get(0).options[5].selected=true;
			// 	} else if ($('.infopledu .mt_education').eq(i-2).html() == '博士研究生') {
			// 		$('select[name=\"item_xueli\"]').get(0).options[7].selected=true;
			// 	} else if ($('.infopledu .mt_education').eq(i-2).html() == '大学专科') {
			// 		$('select[name=\"item_xueli\"]').get(0).options[2].selected=true;
			// 	} else if (($('.infopledu .mt_education').eq(i-2).html() == '大学本科-一本' || $('.infopledu .mt_education').eq(i-2).html() == '大学本科-二本' || $('.infopledu .mt_education').eq(i-2).html() == '大学本科-三本' || $('.infopledu .mt_education').eq(i-2).html() == '海外本科')) {
			// 		$('select[name=\"item_xueli\"]').get(0).options[3].selected=true;
			// 	} else if ($('.infopledu .mt_education').eq(i-2).html() == 'MBA') {
			// 		$('select[name=\"item_xueli\"]').get(0).options[6].selected=true;
			// 	}
			// }
			// if ($('select[name=\"item_degree\"]').length && $('.infopledu .mt_degree').eq(i-2).html()) {
			// 	if ($('.infopledu .mt_degree').eq(i-2).html() == '学士') {
			// 		$('select[name=\"item_degree\"]').get(0).options[2].selected=true;
			// 	} else if ($('.infopledu .mt_degree').eq(i-2).html() == '博士') {
			// 		$('select[name=\"item_degree\"]').get(0).options[6].selected=true;
			// 	} else if ($('.infopledu .mt_degree').eq(i-2).html() == '双学士') {
			// 		$('select[name=\"item_degree\"]').get(0).options[3].selected=true;
			// 	} else if ($('.infopledu .mt_degree').eq(i-2).html() == '硕士') {
			// 		$('select[name=\"item_degree\"]').get(0).options[4].selected=true;
			// 	} else if ($('.infopledu .mt_degree').eq(i-2).html() == 'MBA') {
			// 		$('select[name=\"item_degree\"]').get(0).options[5].selected=true;
			// 	}
			// }
			// if ($('input[name=\"item_start_date\"]').length && $('.infopledu .mt_startYear').eq(i-2).html()) {
			// 	if ($('.infopledu .mt_startYear').eq(i-2).html().length < 7) {
			// 		$('input[name=\"item_start_date\"]').val($('.infopledu .mt_startYear').eq(i-2).html().split('-').join('-0') + '-01')
			// 	} else {
			// 		$('input[name=\"item_start_date\"]').val($('.infopledu .mt_startYear').eq(i-2).html() + '-01')
			// 	}
			// }
			// if ($('input[name=\"item_end_date\"]').length && $('.infopledu .mt_endYear').eq(i-2).html()) {
			// 	if ($('.infopledu .mt_endYear').eq(i-2).html().length < 7) {
			// 		$('input[name=\"item_end_date\"]').val($('.infopledu .mt_endYear').eq(i-2).html().split('-').join('-0') + '-01')
			// 	} else {
			// 		$('input[name=\"item_end_date\"]').val($('.infopledu .mt_endYear').eq(i-2).html() + '-01')
			// 	}
			// }
			// if ($('input[name=\"item_getzhengshu_date\"]').length && $('.infopledu .mt_endYear').eq(i-2).html()) {
			// 	if ($('.infopledu .mt_endYear').eq(i-2).html().length < 7) {
			// 		$('input[name=\"item_getzhengshu_date\"]').val($('.infopledu .mt_endYear').eq(i-2).html().split('-').join('-0') + '-01')
			// 	} else {
			// 		$('input[name=\"item_getzhengshu_date\"]').val($('.infopledu .mt_endYear').eq(i-2).html() + '-01')
			// 	}
			// }
			// if ($('input[name=\"item_cool\"]').length && $('.infopledu .mt_academy').eq(i-2).html()) {
			// 	$('input[name=\"item_cool\"]').val($('.infopledu .mt_academy').eq(i-2).html())
			// }
			// if ($('textarea[name=\"item_courses\"]').length && $('.infopledu .mt_major').eq(i-2).html()) {
			// 	$('textarea[name=\"item_courses\"]').val($('.infopledu .mt_major').eq(i-2).html())
			// }
			// if ($('input[name=\"item_fangxiang\"]').length && $('.infopledu .mt_professional').eq(i-2).html()) {
			// 	$('input[name=\"item_fangxiang\"]').val($('.infopledu .mt_professional').eq(i-2).html())
			// }
			// if ($('select[name=\"item_gpa\"]').length && $('.infopledu .mt_classranking').eq(i-2).html()) {
			// 	if ($('.infopledu .mt_classranking').eq(i-2).html() == '前5%') {
			// 		$('select[name=\"item_gpa\"]').get(0).options[1].selected=true;
			// 	} else if ($('.infopledu .mt_classranking').eq(i-2).html() == '前10%') {
			// 		$('select[name=\"item_gpa\"]').get(0).options[2].selected=true;
			// 	} else if ($('.infopledu .mt_classranking').eq(i-2).html() == '前20%') {
			// 		$('select[name=\"item_gpa\"]').get(0).options[3].selected=true;
			// 	} else if ($('.infopledu .mt_classranking').eq(i-2).html() == '前30%') {
			// 		$('select[name=\"item_gpa\"]').get(0).options[4].selected=true;
			// 	} else{$('select[name=\"item_gpa\"]').get(0).options[5].selected=true;}
			// }
   //      }
    }
	if ($('form[name=\"frmMain\"]').find('table').eq(0).find('strong').html() == '活动') {
		if ($('form[name=\"frmMain\"]').find('table').eq(2).find('tr').length == 1) {
			if ($('input[name=\"item_leader_title\"]').length && $('.infoschoolclub .mt_positionName').eq(0).html()) {
				$('input[name=\"item_leader_title\"]').val($('.infoschoolclub .mt_positionName').eq(0).html())
			}
			if ($('textarea[name=\"item_act_desc\"]').length && $('.infoschoolclub .mt_workDes').eq(0).html()) {
				$('textarea[name=\"item_act_desc\"]').val($('.infoschoolclub .mt_workDes').eq(0).html())
			}
		}
		// if ($('form[name=\"frmMain\"]').find('table').eq(2).find('tr').length != 1) {
		// 	var i = $('form[name=\"frmMain\"]').find('table').eq(3).find('tr').length;
		// 	if ($('input[name=\"item_leader_title\"]').length && $('.infoschoolclub .mt_positionName').eq(i-2).html()) {
		// 		$('input[name=\"item_leader_title\"]').val($('.infoschoolclub .mt_positionName').eq(i-2).html())
		// 	}
		// 	if ($('textarea[name=\"item_act_desc\"]').length && $('.infoschoolclub .mt_workDes').eq(i-2).html()) {
		// 		$('textarea[name=\"item_act_desc\"]').val($('.infoschoolclub .mt_workDes').eq(i-2).html())
		// 	}
		// }
	}  
	if ($('form[name=\"frmMain\"]').find('table').eq(0).find('strong').html() == '奖励') {
		if ($('form[name=\"frmMain\"]').find('table').eq(2).find('tr').length == 1) {
			if ($('#item_scholarship1').length && $('.infoschaward .mt_awardsType').eq(0).html()) {
				var osk = document.getElementById('item_scholarship1');
				switch ($('.infoschaward .mt_awardsType').eq(0).html()) {
				case '国际级':
					osk.options[5].selected = true;
					break;
				case '国家级':
					osk.options[4].selected = true;
					break;
				case '省市级':
					osk.options[3].selected = true;
					break;
				case '学校级':
					osk.options[2].selected = true;
					break;
				default:
					osk.options[1].selected = true;
					break
				}
				osk.dispatchEvent(event)
			}
			if ($('#item_scholarship1_lvl').length && $('.infoschaward .mt_awardsLevel').eq(0).html()) {
				var osk = document.getElementById('item_scholarship1_lvl');
				switch ($('.infoschaward .mt_awardsLevel').eq(0).html()) {
				case '特等奖':
					osk.options[1].selected = true;
					break;
				case '一等奖':
					osk.options[2].selected = true;
					break;
				case '二等奖':
					osk.options[3].selected = true;
					break;
				case '三等奖':
					osk.options[4].selected = true;
					break;
				default:
					osk.options[5].selected = true;
					break
				}
				osk.dispatchEvent(event)
			}
			if ($('input[name=\"item_acquired_date1\"]').length && $('.infoschaward .mt_awardsDate').eq(0).html()) {
				if ($('.infoschaward .mt_awardsDate').eq(0).html().length < 7) {
					$('input[name=\"item_acquired_date1\"]').val($('.infoschaward .mt_awardsDate').eq(0).html().split('-').join('-0') + '-01')
				} else {
					$('input[name=\"item_acquired_date1\"]').val($('.infoschaward .mt_awardsDate').eq(0).html() + '-01')
				}
			}
			if ($('textarea[name=\"item_awards_other\"]').length && $('.infoschaward .mt_schawradList').eq(0).html()) {
				$('textarea[name=\"item_awards_other\"]').val($('.infoschaward .mt_schawradList').eq(0).html())
			}
		}
		// if ($('form[name=\"frmMain\"]').find('table').eq(2).find('tr').length != 1) {
		// 	var i = $('form[name=\"frmMain\"]').find('table').eq(3).find('tr').length;
		// }
	}   
	if ($('form[name=\"frmMain\"]').find('table').eq(0).find('strong').html() == '实习经验') {
		if ($('form[name=\"frmMain\"]').find('table').eq(2).find('tr').length == 1) {
			if ($('#item_gongsixingzhi').length && $('.infoparttimejobs .mt_companyproperty').eq(0).html()) {
				var osk = document.getElementById('item_gongsixingzhi');
				switch ($('.infoparttimejobs .mt_companyproperty').eq(0).html()) {
				case '外企代表处':
				case '外资-非欧美':
				case '外资-欧美':
					osk.options[1].selected = true;
					break;
				case '合资-非欧美':
				case '合资-欧美':
					osk.options[2].selected = true;
					break;
				case '民营公司':
				case '创业公司':
					osk.options[3].selected = true;
					break;
				case '国企':
					osk.options[4].selected = true;
					break;
				case '上市公司':
					osk.options[5].selected = true;
					break;
				case '事业单位':
					osk.options[6].selected = true;
					break;
				default:
					osk.options[5].selected = true;
					break
				}
				osk.dispatchEvent(event)
			}
			if ($('#item_gongsiguimo').length && $('.infoparttimejobs .mt_companySize').eq(0).html()) {
				var osk = document.getElementById('item_gongsiguimo');
				switch ($('.infoparttimejobs .mt_companySize').eq(0).html()) {
				case '少于50人':
					osk.options[1].selected = true;
					break;
				case '50-149人':
					osk.options[2].selected = true;
					break;
				case '150-499人':
					osk.options[3].selected = true;
					break;
				case '500-999':
					osk.options[4].selected = true;
					break;
				default:
					osk.options[5].selected = true;
					break
				}
				osk.dispatchEvent(event)
			}
			if ($('input[name=\"item_start_date\"]').length && $('.infoparttimejobs .mt_startDate').eq(0).html()) {
				if ($('.infoparttimejobs .mt_startDate').eq(0).html().length < 7) {
					$('input[name=\"item_start_date\"]').val($('.infoparttimejobs .mt_startDate').eq(0).html().split('-').join('-0') + '-01')
				} else {
					$('input[name=\"item_start_date\"]').val($('.infoparttimejobs .mt_startDate').eq(0).html() + '-01')
				}
			}
			if ($('input[name=\"item_end_date\"]').length && $('.infoparttimejobs .mt_endDate').eq(0).html()) {
				if ($('.infoparttimejobs .mt_endDate').eq(0).html().length < 7) {
					$('input[name=\"item_end_date\"]').val($('.infoparttimejobs .mt_endDate').eq(0).html().split('-').join('-0') + '-01')
				} else {
					$('input[name=\"item_end_date\"]').val($('.infoparttimejobs .mt_endDate').eq(0).html() + '-01')
				}
			}
			if ($('textarea[name=\"item_job_duty\"]').length && $('.infoparttimejobs .workDes').eq(0).html()) {
				$('textarea[name=\"item_job_duty\"]').val($('.infoparttimejobs .workDes').eq(0).html())
			}
			if ($('input[name=\"item_company_name\"]').length && $('.infoparttimejobs .mt_companyName').eq(0).html()) {
				$('input[name=\"item_company_name\"]').val($('.infoparttimejobs .mt_companyName').eq(0).html())
			}
			if ($('input[name=\"item_job_title\"]').length && $('.infoparttimejobs .mt_positionName').eq(0).html()) {
				$('input[name=\"item_job_title\"]').val($('.infoparttimejobs .mt_positionName').eq(0).html())
			}
		}
		// if ($('form[name=\"frmMain\"]').find('table').eq(2).find('tr').length != 1) {
		// 	var i = $('form[name=\"frmMain\"]').find('table').eq(3).find('tr').length;
		// }
	} 
	if ($('form[name=\"frmMain\"]').find('table').eq(0).find('strong').html() == '项目经验') {
		if ($('form[name=\"frmMain\"]').find('table').eq(2).find('tr').length == 1) {
			if ($('input[name=\"item_start_date\"]').length && $('.infoproject .mt_prostarttime').eq(0).html()) {
				if ($('.infoproject .mt_prostarttime').eq(0).html().length < 7) {
					$('input[name=\"item_start_date\"]').val($('.infoproject .mt_prostarttime').eq(0).html().split('-').join('-0') + '-01')
				} else {
					$('input[name=\"item_start_date\"]').val($('.infoproject .mt_prostarttime').eq(0).html() + '-01')
				}
			}
			if ($('input[name=\"item_end_date\"]').length && $('.infoproject .mt_proendtime').eq(0).html()) {
				if ($('.infoproject .mt_proendtime').eq(0).html().length < 7) {
					$('input[name=\"item_end_date\"]').val($('.infoproject .mt_proendtime').eq(0).html().split('-').join('-0') + '-01')
				} else {
					$('input[name=\"item_end_date\"]').val($('.infoproject .mt_proendtime').eq(0).html() + '-01')
				}
			}
			if ($('textarea[name=\"item_prj_desc\"]').length && $('.infoproject .mt_projectRemark').eq(0).html()) {
				$('textarea[name=\"item_prj_desc\"]').val($('.infoproject .mt_projectRemark').eq(0).html())
			}
			if ($('input[name=\"item_prj_name\"]').length && $('.infoproject .mt_projectName').eq(0).html()) {
				$('input[name=\"item_prj_name\"]').val($('.infoproject .mt_projectName').eq(0).html())
			}
			if ($('input[name=\"item_prj_duty\"]').length && $('.infoproject .mt_positionName').eq(0).html()) {
				$('input[name=\"item_prj_duty\"]').val($('.infoproject .mt_positionName').eq(0).html())
			}
		}
		// if ($('form[name=\"frmMain\"]').find('table').eq(2).find('tr').length != 1) {
		// 	var i = $('form[name=\"frmMain\"]').find('table').eq(3).find('tr').length;
		// }
	} 
	if ($('form[name=\"frmMain\"]').find('table').eq(0).find('strong').html() == '英语能力') {
		if ($('#item_eng_cert').length && $('.infoEnglishSkill .mt_skillEngLevel').eq(0).html()) {
			var osk = document.getElementById('item_eng_cert');
			switch ($('.infoEnglishSkill .mt_skillEngLevel').eq(0).html()) {
			case '大学英语四级':
				osk.options[1].selected = true;
				break;
			case '大学英语六级':
				osk.options[2].selected = true;
				break;
			case '专业四级':
				osk.options[3].selected = true;
				break;
			default:
				osk.options[4].selected = true;
				break
			}
			osk.dispatchEvent(event)
		}
		if ($('input[name=\"item_eng_grade\"]').length && $('.infoEnglishSkill .mt_skillEngSorce').eq(0).html()) {
			$('input[name=\"item_eng_grade\"]').val($('.infoEnglishSkill .mt_skillEngSorce').eq(0).html())
		}
		if ($('input[name=\"item_eng_zheng\"]').length && $('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(0).html()) {
			$('input[name=\"item_eng_zheng\"]').val($('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(0).html())
		}
		if ($('input[name=\"item_eng_fen\"]').length && $('.infoOtEnglishSkill .mt_otherSkillEngSorce').eq(0).html()) {
			$('input[name=\"item_eng_fen\"]').val($('.infoOtEnglishSkill .mt_otherSkillEngSorce').eq(0).html())
		}
	} 
	if ($('form[name=\"frmMain\"]').find('table').eq(0).find('strong').html() == '其他语言能力') {
		if ($('#item_language').length && $('.infoOtherSkill .mt_skillOtherLang').eq(0).html()) {
			var osk = document.getElementById('item_language');
			for (var j = 0; j < osk.options.length; j++) {
				if (osk.options[j].innerHTML.indexOf($('.infoOtherSkill .mt_skillOtherLang').eq(0).html()) != -1) {
					osk.options[j].selected = true;
					break;
				}
			}
			osk.dispatchEvent(event)
		}
		if ($('input[name=\"item_language_leason\"]').length && $('.infoOtherSkill .mt_skillListenLevel').eq(0).html()) {
			$('input[name=\"item_language_leason\"]').val($('.infoOtherSkill .mt_skillListenLevel').eq(0).html())
		}
		if ($('input[name=\"item_language_read\"]').length && $('.infoOtherSkill .mt_skillWriteLevel').eq(0).html()) {
			$('input[name=\"item_language_read\"]').val($('.infoOtherSkill .mt_skillWriteLevel').eq(0).html())
		}
	}
	if ($('form[name=\"frmMain\"]').find('table').eq(0).find('strong').html() == '其他个人说明') {
		if ($('textarea[name=\"item_cv_intro\"]').length && $('#mt_selfIntro').html()) {
			$('textarea[name=\"item_cv_intro\"]').val($('#mt_selfIntro').html())
		}
		if ($('textarea[name=\"item_aihao\"]').length && $('#mt_skill').html()) {
			$('textarea[name=\"item_aihao\"]').val($('#mt_skill').html())
		}
		if ($('textarea[name=\"item_qita\"]').length && $('#mt_hobbies').html()) {
			$('textarea[name=\"item_qita\"]').val($('#mt_hobbies').html())
		}
		if ($('textarea[name=\"item_geren\"]').length && $('#achievement').html()) {
			$('textarea[name=\"item_geren\"]').val($('#achievement').html())
		}
	}
}

