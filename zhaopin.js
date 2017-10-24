if ($('#jm_qiuck_cover')) {
	$('#jm_qiuck_cover').fadeIn();
	setTimeout(function() {
		$('#jm_qiuck_cover').fadeOut()
	}, 1000)
}
if ($('#person_info_name').length) {
	$('#person_info_name').val($('#mt_name').html())
}
if ($('#person_info_gender').length && $('#mt_sex').html() && $('#mt_sex').html() == '女') {
	$('#person_info_gender').prev().find('div').eq(4).click()
}
if ($('#person_info_gender').length && $('#mt_sex').html() && $('#mt_sex').html() == '男') {
	$('#person_info_gender').prev().find('div').eq(3).click()
}
if ($('textarea[name=\"filed_204\"]').length && $.trim($('#person_info_filed_204').parent().prev().text()) == '身份证地址') {
	$('textarea[name=\"filed_204\"]').val($('#mt_hukoucitynow').html()+$('#mt_hukoucitynow_city').html())
}
if ($('textarea[name=\"filed_213\"]').length && $('#mt_skill').html() && $.trim($('textarea[name=\"filed_213\"]').parent().prev().text()) == '爱好特长') {
	$('textarea[name=\"filed_213\"]').val($('#mt_skill').html())
}
if ($('input[name=\"birth\"]').length && $('#mt_birth').html()) {
	var birth = $('#mt_birth').html().split('-');
	for (var i in birth) {
		if (birth[i].length < 2) {
			birth[i] = '0' + birth[i]
		}
		var birthr = birth.join('-')
	}
	$('input[name=\"birth\"]').val(birthr)
}
if ($('#person_info_nation').length && $('#mt_nation').html()) {
	var sigNation = $('#person_info_nation').prev().find('.selectList div');
	var mt_nation = $('#mt_nation').html();
	for (var i = 0; i < sigNation.length; i++) {
		if (sigNation.eq(i).html() == mt_nation) {
			sigNation.eq(i).click();
			break
		}
	}
}
if ($('#person_info_native_place').length) {
	$('#person_info_native_place').val($('#mt_nativeplace').html() + $('#mt_native_city').html())
}
if ($('#person_info_graduation_date').length && $('#mt_gradutetime').html()) {
	if ($('#mt_gradutetime').html().length < 7) {
		$('#person_info_graduation_date').val($('#mt_gradutetime').html().split('-').join('-0') + '-01')
	} else {
		$('#person_info_graduation_date').val($('#mt_gradutetime').html() + '-01')
	}
}
if ($('#person_info_id_card_type').length && $('#mt_idtype').html()) {
	var sigNation = $('#person_info_id_card_type').prev().find('.selectList div');
	if ($('#mt_idtype').html() == '身份证') {
		sigNation.eq(1).click()
	} else {
		sigNation.eq(2).click()
	}
	if ($('#person_info_id_card').length) {
		$('#person_info_id_card').val($('#mt_id').html())
	}
}
if ($('#person_info_filed_200').length) {
	$('#person_info_filed_200').val($('#mt_add').html())
}
if ($('#contact_info_address').length) {
	$('#contact_info_address').val($('#mt_add').html())
}
if ($('input[name=\"mobile_number\"]').length) {
	$('input[name=\"mobile_number\"]').val($('#mt_tel').html())
}
if ($('#contact_info_email').length) {
	$('#contact_info_email').val($('#mt_email').html())
}
if ($('input[name=\"emergency_number\"]').length) {
	$('input[name=\"emergency_number\"]').val($('#mt_jjlxrtel').html())
}
if ($('#contact_info_filed_201').length) {
	$('#contact_info_filed_201').val($('#mt_qqname').html())
}
for (var i = 0; i < $('.infopledu').length; i++) {
	if ($('select[name=\"education_degree\"]').eq(i).length && $('.infopledu .mt_education').eq(i).html()) {
		if ($('.infopledu .mt_education').eq(i).html() == '硕士研究生') {
			$('select[name=\"education_degree\"]').eq(i).prev().find('.selectList div').eq(3).click()
		} else if ($('.infopledu .mt_education').eq(i).html() == '博士研究生') {
			$('select[name=\"education_degree\"]').eq(i).prev().find('.selectList div').eq(1).click()
		} else if ($('.infopledu .mt_education').eq(i).html() == 'MBA') {
			$('select[name=\"education_degree\"]').eq(i).prev().find('.selectList div').eq(2).click()
		} else if ($('.infopledu .mt_education').eq(i).html() == '大学专科') {
			$('select[name=\"education_degree\"]').eq(i).prev().find('.selectList div').eq(5).click()
		} else if (($('.infopledu .mt_education').eq(i).html() == '大学本科-一本' || $('.infopledu .mt_education').eq(i).html() == '大学本科-二本' || $('.infopledu .mt_education').eq(i).html() == '大学本科-三本' || $('.infopledu .mt_education').eq(i).html() == '海外本科')) {
			$('select[name=\"education_degree\"]').eq(i).prev().find('.selectList div').eq(4).click()
		} else {
			$('select[name=\"education_degree\"]').eq(i).prev().find('.selectList div').eq(9).click()
		}
	}
	if ($('input[name=\"college_name\"]').eq(i).length && $('.infopledu .mt_academy').eq(i).html()) {
		$('input[name=\"college_name\"]').eq(i).val($('.infopledu .mt_academy').eq(i).html())
	}
	if ($('input[name=\"main_course\"]').eq(i).length && $('.infopledu .mt_major').eq(i).html()) {
		$('input[name=\"main_course\"]').eq(i).val($('.infopledu .mt_major').eq(i).html())
	}
	if ($('textarea[name=\"filed_213\"]').eq(i).length && $('.infopledu .mt_major').eq(i).html() && $.trim($('#education_experience_filed_213').parent().prev().text()) == '主修课程') {
		$('textarea[name=\"filed_213\"]').eq(i).val($('.infopledu .mt_major').eq(i).html())
	}
	if ($('input[name=\"major_name\"]').eq(i).length && $('.infopledu .mt_professional').eq(i).html()) {
		$('input[name=\"major_name\"]').eq(i).val($('.infopledu .mt_professional').eq(i).html())
	}
	if ($('input[name=\"filed_234\"]').eq(i).length && $('.infopledu .mt_classranking').eq(i).html()) {
		$('input[name=\"filed_234\"]').eq(i).val($('.infopledu .mt_classranking').eq(i).html())
	}
	if ($('select[name=\"education_level\"]').eq(i).length && $('.infopledu .mt_degree').eq(i).html()) {
		if ($('.infopledu .mt_degree').eq(i).html() == '硕士') {
			$('select[name=\"education_level\"]').eq(i).prev().find('.selectList div').eq(3).click()
		} else if ($('.infopledu .mt_degree').eq(i).html() == '博士') {
			$('select[name=\"education_level\"]').eq(i).prev().find('.selectList div').eq(1).click()
		} else if ($('.infopledu .mt_degree').eq(i).html() == 'MBA') {
			$('select[name=\"education_level\"]').eq(i).prev().find('.selectList div').eq(2).click()
		} else if ($('.infopledu .mt_degree').eq(i).html() == '学士') {
			$('select[name=\"education_level\"]').eq(i).prev().find('.selectList div').eq(5).click()
		} else if ($('.infopledu .mt_degree').eq(i).html() == '双学士') {
			$('select[name=\"education_level\"]').eq(i).prev().find('.selectList div').eq(4).click()
		} else if ($('.infopledu .mt_degree').eq(i).html() == '无') {
			$('select[name=\"education_level\"]').eq(i).prev().find('.selectList div').eq(7).click()
		} else {
			$('select[name=\"education_level\"]').eq(i).prev().find('.selectList div').eq(6).click()
		}
	}
	if ($('input[name=\"edu_date_start\"]').eq(i) && $('.infopledu .mt_startYear').eq(i).html()) {
		if ($('.infopledu .mt_startYear').eq(i).html().length < 7) {
			$('input[name=\"edu_date_start\"]').eq(i).val($('.infopledu .mt_startYear').eq(i).html().split('-').join('-0') + '-01')
		} else {
			$('input[name=\"edu_date_start\"]').eq(i).val($('.infopledu .mt_startYear').eq(i).html() + '-01')
		}
	}
	if ($('input[name=\"edu_date_end\"]').eq(i) && $('.infopledu .mt_endYear').eq(i).html()) {
		if ($('.infopledu .mt_endYear').eq(i).html().length < 7) {
			$('input[name=\"edu_date_end\"]').eq(i).val($('.infopledu .mt_endYear').eq(i).html().split('-').join('-0') + '-01')
		} else {
			$('input[name=\"edu_date_end\"]').eq(i).val($('.infopledu .mt_endYear').eq(i).html() + '-01')
		}
	}
	if ($('input[name=\"filed_216\"]').eq(i) && $('.infopledu .mt_endYear').eq(i).html()) {
		if ($('.infopledu .mt_endYear').eq(i).html().length < 7) {
			$('input[name=\"filed_216\"]').eq(i).val($('.infopledu .mt_endYear').eq(i).html().split('-').join('-0') + '-01')
		} else {
			$('input[name=\"filed_216\"]').eq(i).val($('.infopledu .mt_endYear').eq(i).html() + '-01')
		}
	}
	if ($('input[name=\"school_name\"]').eq(i).length && $('.infopledu .mt_schoolName').eq(i).html()) {
		$('input[name=\"school_name\"]').eq(i).val($('.infopledu .mt_schoolName').eq(i).html())
	}
	if ($('select[name=\"grade_rank\"]').eq(i).length && $('.infopledu .mt_professionalranking').eq(i).html()) {
		if ($('.infopledu .mt_professionalranking').eq(i).html() == '前5%') {
			$('select[name=\"grade_rank\"]').eq(i).prev().find('.selectList div').eq(1).click()
		} else if ($('.infopledu .mt_professionalranking').eq(i).html() == '前10%') {
			$('select[name=\"grade_rank\"]').eq(i).prev().find('.selectList div').eq(2).click()
		} else if ($('.infopledu .mt_professionalranking').eq(i).html() == '前20%') {
			$('select[name=\"grade_rank\"]').eq(i).prev().find('.selectList div').eq(3).click()
		} else if ($('.infopledu .mt_professionalranking').eq(i).html() == '前30%') {
			$('select[name=\"grade_rank\"]').eq(i).prev().find('.selectList div').eq(4).click()
		} else {
			$('select[name=\"grade_rank\"]').eq(i).prev().find('.selectList div').eq(5).click()
		}
	}
}
for (var i = 0; i < $('#project_experience .j_project_date_start').length - 1; i++) {
	if ($('input[name=\"project_name\"]').eq(i).length && $('.infoproject .mt_projectName').eq(i).html()) {
		$('input[name=\"project_name\"]').eq(i).val($('.infoproject .mt_projectName').eq(i).html())
	}
	if ($('input[name=\"project_date_start\"]').eq(i) && $('.infoproject .mt_prostarttime').eq(i).html()) {
		if ($('.infoproject .mt_prostarttime').eq(i).html().length < 7) {
			$('input[name=\"project_date_start\"]').eq(i).val($('.infoproject .mt_prostarttime').eq(i).html().split('-').join('-0') + '-01')
		} else {
			$('input[name=\"project_date_start\"]').eq(i).val($('.infoproject .mt_prostarttime').eq(i).html() + '-01')
		}
	}
	if ($('input[name=\"project_date_end\"]').eq(i) && $('.infoproject .mt_proendtime').eq(i).html()) {
		if ($('.infoproject .mt_proendtime').eq(i).html().length < 7) {
			$('input[name=\"project_date_end\"]').eq(i).val($('.infoproject .mt_proendtime').eq(i).html().split('-').join('-0') + '-01')
		} else {
			$('input[name=\"project_date_end\"]').eq(i).val($('.infoproject .mt_proendtime').eq(i).html() + '-01')
		}
	}
	if ($('input[name=\"project_title\"]').eq(i).length && $('.infoproject .mt_positionName').eq(i).html()) {
		$('input[name=\"project_title\"]').eq(i).val($('.infoproject .mt_positionName').eq(i).html())
	}
	if ($('input[name=\"responsibility\"]').eq(i).length && $('.infoproject .mt_projectDuty').eq(i).html()) {
		$('input[name=\"responsibility\"]').eq(i).val($('.infoproject .mt_projectDuty').eq(i).html())
	}
	if ($('textarea[name=\"description\"]').eq(i).length && $('.infoproject .mt_projectRemark').eq(i).html()) {
		$('textarea[name=\"description\"]').eq(i).val($('.infoproject .mt_projectRemark').eq(i).html())
	}
}
if ($('textarea[name=\"duty_description\"]').length && $('.infoschoolclub .mt_schClubName').html()) {
	var allactive = [];
	for (var i = 0; i < $('.infoschoolclub').length; i++) {
		var active = $('.infoschoolclub .mt_startDateDot').eq(i).html() + '-' + $('.infoschoolclub .mt_endDateDot').eq(i).html() + '\\n' + $('.infoschoolclub .mt_schClubName').eq(i).html() + '\\n' + $('.infoschoolclub .mt_positionName').eq(i).html() + '\\n' + $('.infoschoolclub .mt_workDes').eq(i).html() + '\\n';
		allactive.push(active)
	}
	$('textarea[name=\"duty_description\"]').val(allactive)
}
if ($('textarea[name=\"awards\"]').length && $('.infoschaward .mt_awardsName').html()) {
	var allaward = [];
	for (var i = 0; i < $('.infoschaward').length; i++) {
		var award = $('.infoschaward .mt_awardsDate').eq(i).html() + '\\n' + $('.infoschaward .mt_awardsName').eq(i).html() + '\\n' + $('.infoschaward .mt_awardsType').eq(i).html() + '\\n' + $('.infoschaward .mt_awardsLevel').eq(i).html() + '\\n';
		allaward.push(award)
	}
	$('textarea[name=\"awards\"]').val(allaward)
}
if ($('textarea[name=\"professional_award\"]').length && $('.infoplcerti .mt_certificateName').html()) {
	var allplcerti = [];
	for (var i = 0; i < $('.infoplcerti').length; i++) {
		var plcerti = $('.infoplcerti .mt_getDate').eq(i).html() + '\\n' + $('.infoplcerti .mt_certificateName').eq(i).html() + '\\n' + $('.infoplcerti .mt_certificateDes').eq(i).html() + '\\n' + $('.infoplcerti .mt_issuing').eq(i).html() + '\\n';
		allplcerti.push(plcerti)
	}
	$('textarea[name=\"professional_award\"]').val(allplcerti)
}
for (var i = 0; i < $('.infoparttimejobs').length; i++) {
	if ($('input[name=\"company_name\"]').eq(i).length && $('.infoparttimejobs .mt_companyName').eq(i).html()) {
		$('input[name=\"company_name\"]').eq(i).val($('.infoparttimejobs .mt_companyName').eq(i).html())
	}
	if ($('input[name=\"filed_204\"]').eq(i).length && $.trim($('#work_ecperience_filed_204').parent().prev().text()) == '实习单位') {
		$('input[name=\"filed_204\"]').eq(i).val($('.infoparttimejobs .mt_companyName').eq(i).html())
	}
	if ($('input[name=\"filed_205\"]').eq(i).length && $.trim($('#work_ecperience_filed_205').parent().prev().text()) == '职位') {
		$('input[name=\"filed_205\"]').eq(i).val($('.infoparttimejobs .mt_positionName').eq(i).html())
	}
	if ($('select[name=\"job_type\"]').eq(i).length && $('.mt_workcat').eq(i).html() == '实习') {
		$('select[name=\"job_type\"]').eq(i).prev().find('.selectList div').eq(3).click()
	}
	if ($('input[name=\"job_title\"]').eq(i).length && $('.infoparttimejobs .mt_positionName').eq(i).html()) {
		$('input[name=\"job_title\"]').eq(i).val($('.infoparttimejobs .mt_positionName').eq(i).html())
	}
	if ($('input[name=\"filed_220\"]').eq(i).length && $('.infoparttimejobs .mt_department').eq(i).html() && $.trim($('input[name=\"filed_220\"]').parent().prev().text()).substring(0,4) == '实习部门') {
		$('input[name=\"filed_220\"]').eq(i).val($('.infoparttimejobs .mt_department').eq(i).html())
	}
	if ($('input[name=\"job_date_start\"]').eq(i).length && $('.infoparttimejobs .mt_startDate').eq(i).html()) {
		if ($('.infoparttimejobs .mt_startDate').eq(i).html().length < 7) {
			$('input[name=\"job_date_start\"]').eq(i).val($('.infoparttimejobs .mt_startDate').eq(i).html().split('-').join('-0') + '-01')
		} else {
			$('input[name=\"job_date_start\"]').eq(i).val($('.infoparttimejobs .mt_startDate').eq(i).html() + '-01')
		}
	}
	if ($('input[name=\"job_date_end\"]').eq(i).length && $('.infoparttimejobs .mt_endDate').eq(i).html()) {
		if ($('.infoparttimejobs .mt_endDate').eq(i).html().length < 7) {
			$('input[name=\"job_date_end\"]').eq(i).val($('.infoparttimejobs .mt_endDate').eq(i).html().split('-').join('-0') + '-01')
		} else {
			$('input[name=\"job_date_end\"]').eq(i).val($('.infoparttimejobs .mt_endDate').eq(i).html() + '-01')
		}
	}
	if ($('input[name=\"filed_217\"]').eq(i).length && $('.infoparttimejobs .mt_startDate').eq(i).html() && $.trim($('input[name=\"filed_217\"]').parent().prev().text()).substring(0,4) == '入职时间') {
		if ($('.infoparttimejobs .mt_startDate').eq(i).html().length < 7) {
			$('input[name=\"filed_217\"]').eq(i).val($('.infoparttimejobs .mt_startDate').eq(i).html().split('-').join('-0'))
		} else {
			$('input[name=\"filed_217\"]').eq(i).val($('.infoparttimejobs .mt_startDate').eq(i).html())
		}
	}
	if ($('input[name=\"filed_218\"]').eq(i).length && $('.infoparttimejobs .mt_endDate').eq(i).html() && $.trim($('input[name=\"filed_218\"]').parent().prev().text()).substring(0,4) == '离职时间') {
		if ($('.infoparttimejobs .mt_endDate').eq(i).html().length < 7) {
			$('input[name=\"filed_218\"]').eq(i).val($('.infoparttimejobs .mt_endDate').eq(i).html().split('-').join('-0'))
		} else {
			$('input[name=\"filed_218\"]').eq(i).val($('.infoparttimejobs .mt_endDate').eq(i).html())
		}
	}
	if ($('textarea[name=\"work_description\"]').eq(i).length && $('.infoparttimejobs .workContent').eq(i).html()) {
		$('textarea[name=\"work_description\"]').eq(i).val($('.infoparttimejobs .workContent').eq(i).html())
	}
	if ($('textarea[name=\"filed_225\"]').eq(i).length && $('.infoparttimejobs .workContent').eq(i).html() && $.trim($('textarea[name=\"filed_225\"]').parent().prev().text()) != '自我评价') {
		$('textarea[name=\"filed_225\"]').eq(i).val($('.infoparttimejobs .workContent').eq(i).html())
	}
	if ($('textarea[name=\"filed_201\"]').eq(i).length && $('.infoparttimejobs .workContent').eq(i).html()) {
		$('textarea[name=\"filed_201\"]').eq(i).val($('.infoparttimejobs .workContent').eq(i).html())
	}
	if ($('textarea[name=\"filed_226\"]').eq(i).length && $('.infoparttimejobs .mt_reasons').eq(i).html()) {
		$('textarea[name=\"filed_226\"]').eq(i).val($('.infoparttimejobs .mt_reasons').eq(i).html())
	}
	if ($('select[name=\"is_references\"]').eq(i).length && $('.infoparttimejobs .mt_reterenceName').eq(i).html().length) {
		$('select[name=\"is_references\"]').eq(i).prev().find('.selectList div').eq(1).click();
		if ($('input[name=\"references_name\"]').eq(i).length) {
			$('input[name=\"references_name\"]').eq(i).val($('.infoparttimejobs .mt_reterenceName').eq(i).html())
		}
		if ($('input[name=\"references_relation\"]').eq(i).length) {
			$('input[name=\"references_relation\"]').eq(i).val($('.infoparttimejobs .mt_reterenceRelation').eq(i).html())
		}
		if ($('input[name=\"references_position\"]').eq(i).length) {
			$('input[name=\"references_position\"]').eq(i).val($('.infoparttimejobs .mt_reterencePosition').eq(i).html())
		}
		if ($('input[name=\"references_company\"]').eq(i).length) {
			$('input[name=\"references_company\"]').eq(i).val($('.infoparttimejobs .mt_reterenceCompany').eq(i).html())
		}
		if ($('input[name=\"references_contact\"]').eq(i).length) {
			$('input[name=\"references_contact\"]').eq(i).val($('.infoparttimejobs .mt_reterence_phone').eq(i).html())
		}
	} else {
		$('select[name=\"is_references\"]').eq(i).prev().find('.selectList div').eq(2).click()
	}
}
if ($('input[name=\"family_name\"]').length && $('#mt_fmname').html().length) {
	$('input[name=\"family_name\"]').val($('#mt_fmname').html())
}
if ($('input[name=\"family_relation\"]').length && $('#mt_fmrelation').html().length) {
	$('input[name=\"family_relation\"]').val($('#mt_fmrelation').html())
}
if ($('input[name=\"family_company\"]').length && $('#mt_fmwork').html().length) {
	$('input[name=\"family_company\"]').val($('#mt_fmwork').html())
}
if ($('input[name=\"family_position\"]').length && $('#mt_fmposition').html().length) {
	$('input[name=\"family_position\"]').val($('#mt_fmposition').html())
}
if ($('select[name=\"english_level\"]').length && $('.infoEnglishSkill .mt_skillEngLevel').html().length) {
	if ($('.infoEnglishSkill .mt_skillEngLevel').html() == '大学英语四级') {
		$('select[name=\"english_level\"]').prev().find('.selectList div').eq(1).click()
	} else if ($('.infoEnglishSkill .mt_skillEngLevel').html() == '专业四级') {
		$('select[name=\"english_level\"]').prev().find('.selectList div').eq(2).click()
	} else if ($('.infoEnglishSkill .mt_skillEngLevel').html() == '大学英语六级') {
		$('select[name=\"english_level\"]').prev().find('.selectList div').eq(3).click()
	} else if ($('.infoEnglishSkill .mt_skillEngLevel').html() == '专业六级') {
		$('select[name=\"english_level\"]').prev().find('.selectList div').eq(4).click()
	}
	if ($('.infoEnglishSkill .mt_skillEngSorce').html().length && $('input[name=\"english_score\"]').length) {
		$('input[name=\"english_score\"]').val($('.infoEnglishSkill .mt_skillEngSorce').html())
	}
}
if ($('select[name=\"filed_214\"]').length && $('.infoEnglishSkill .mt_skillEngLevel').html() && $.trim($('#module_51_filed_214').parent().prev().text()) == '英语水平') {
	if ($('.infoEnglishSkill .mt_skillEngLevel').html() == '大学英语四级') {
		$('select[name=\"filed_214\"]').prev().find('.selectList div').eq(1).click()
	} else if ($('.infoEnglishSkill .mt_skillEngLevel').html() == '专业四级') {
		$('select[name=\"filed_214\"]').prev().find('.selectList div').eq(2).click()
	} else if ($('.infoEnglishSkill .mt_skillEngLevel').html() == '大学英语六级') {
		$('select[name=\"filed_214\"]').prev().find('.selectList div').eq(3).click()
	} else if ($('.infoEnglishSkill .mt_skillEngLevel').html() == '专业六级') {
		$('select[name=\"filed_214\"]').prev().find('.selectList div').eq(4).click()
	}
}
if ($('.infoEnglishSkill .mt_skillEngSorce').html() && $('input[name=\"filed_215\"]').length && $.trim($('#module_51_filed_215').parent().prev().text()) == '英语分数') {
	$('input[name=\"filed_215\"]').val($('.infoEnglishSkill .mt_skillEngSorce').html())
}
if ($('.infoOtherSkill .mt_skillOtherLang').html() && $('#module_51_filed_216').length) {
	$('#module_51_filed_216').val($('.infoOtherSkill .mt_skillOtherLang').html())
}
for (var j = 0; j < $('#skill_favorite .j_certificate_itemWrap .j_selectList').length - 1; j++) {
	var EnglishSkill = $('#skill_favorite .j_certificate_itemWrap .j_selectList').eq(j).find('div');
	for (var k = 0; k < EnglishSkill.length; k++) {
		if ($('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(j).html() == '托福') {
			EnglishSkill.eq(1).click()
		} else if (EnglishSkill.eq(k).html().indexOf($('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(j).html(), 0) != -1) {
			EnglishSkill.eq(k).click()
		}
	}
	if ($('input[name=\"certificate_level\"]').eq(j).length && $('.infoOtEnglishSkill .mt_otherSkillEngSorce').eq(j).html()) {
		$('input[name=\"certificate_level\"]').eq(j).val($('.infoOtEnglishSkill .mt_otherSkillEngSorce').eq(j).html())
	}
}
for (var i = 0; i < $('.infoOtherSkill').length; i++) {
	if ($('.infoOtherSkill .mt_skillListenLevel').eq(i).html() == '了解') {
		$('select[name=\"language_skill_listen_say\"]').eq(i).prev().find('.selectList div').eq(1).click()
	} else if ($('.infoOtherSkill .mt_skillListenLevel').eq(i).html() == '一般') {
		$('select[name=\"language_skill_listen_say\"]').eq(i).prev().find('.selectList div').eq(2).click()
	} else if ($('.infoOtherSkill .mt_skillListenLevel').eq(i).html() == '熟练') {
		$('select[name=\"language_skill_listen_say\"]').eq(i).prev().find('.selectList div').eq(3).click()
	} else if ($('.infoOtherSkill .mt_skillListenLevel').eq(i).html() == '精通') {
		$('select[name=\"language_skill_listen_say\"]').eq(i).prev().find('.selectList div').eq(4).click()
	}
	if ($('.infoOtherSkill .mt_skillWriteLevel').eq(i).html() == '了解') {
		$('select[name=\"language_skill_read_write\"]').eq(i).prev().find('.selectList div').eq(1).click()
	} else if ($('.infoOtherSkill .mt_skillWriteLevel').eq(i).html() == '一般') {
		$('select[name=\"language_skill_read_write\"]').eq(i).prev().find('.selectList div').eq(2).click()
	} else if ($('.infoOtherSkill .mt_skillWriteLevel').eq(i).html() == '熟练') {
		$('select[name=\"language_skill_read_write\"]').eq(i).prev().find('.selectList div').eq(3).click()
	} else if ($('.infoOtherSkill .mt_skillWriteLevel').eq(i).html() == '精通') {
		$('select[name=\"language_skill_read_write\"]').eq(i).prev().find('.selectList div').eq(4).click()
	}
	var langskill = $('select[name=\"language_skill_language_skill\"]').eq(i).prev().find('.selectList div');
	for (var j = 0; j < langskill.length; j++) {
		if (langskill.eq(j).html().indexOf($('.infoOtherSkill .mt_skillOtherLang').eq(i).html(), 0) != -1) {
			langskill.eq(j).click()
		}
	}
}
if ($('textarea[name=\"other_skill\"]').length && $('#mt_hobbies').html().length) {
	$('textarea[name=\"other_skill\"]').val($('#mt_hobbies').html())
}
if ($('textarea[name=\"personal_favorite\"]').length && $('#mt_skill').html().length) {
	$('textarea[name=\"personal_favorite\"]').val($('#mt_skill').html())
}

//完美
if ($('#person_info_politics_bg').length && $('#mt_polistatus').html()) {
	var polistatus = $('#person_info_politics_bg').prev().find('.selectList div');
	switch ($('#mt_polistatus').html()) {
		case '共青团员':
			polistatus.eq(1).click();
			break;
		case '中共党员':
		case '中共预备党员':
			polistatus.eq(2).click();
			break;
		case '中国民主同盟':
		case '中国民主建国会':
		case '中国民主促进会':
		case '台湾民主自治同盟':
			polistatus.eq(3).click();
			break;
		case '无党派民主人士':
		case '群众':
			polistatus.eq(4).click();;
			break
		}
}
if ($('#person_info_filed_200').length && $.trim($('#person_info_filed_200').parent().prev().text() == '最高学历') && $('#mt_edu').html()) {
	var sigNation = $('#person_info_filed_200').prev().find('.selectList div');
	switch ($('#mt_edu').html()) {
		case '博士研究生':
			sigNation.eq(1).click();
			break;
		case 'MBA':
			sigNation.eq(2).click();
			break;
		case '硕士研究生':
			sigNation.eq(3).click();
			break;
		case '大学本科-一本':
		case '大学本科-二本':
		case '大学本科-三本':
		case '双学士':
			sigNation.eq(4).click();
			break;
		case '大学专科':
			sigNation.eq(5).click();
			break;
	    case '中专':
	    case '技校/职高':
			sigNation.eq(6).click();
			break;
		case '高中':
			sigNation.eq(7).click();
			break;
		case '初中及以下':
			sigNation.eq(8).click();
			break;
		default:
			sigNation.eq(9).click();
			break
		}
}
if ($('#person_info_filed_201').length && $.trim($('#person_info_filed_201').parent().prev().text()) == '最高学历毕业时间') {
	if ($('#person_info_filed_201').length.length < 7) {
		$('#person_info_filed_201').val($('#mt_gradutetime').html().split('-').join('-0') + '-01')
	} else {
		$('#person_info_filed_201').val($('#mt_gradutetime').html() + '-01')
	}
}

//顺丰
if ($('#person_info_marital_status').length && $('#mt_maritalstatus').html() && $.trim($('#person_info_marital_status').parent().prev().text()) == '婚姻状况') {
	var sigNation = $('#person_info_marital_status').prev().find('.selectList div');
	if ($('#mt_maritalstatus').html() == '未婚') {
		sigNation.eq(1).click()
	} 
	if ($('#mt_maritalstatus').html() == '已婚') {
		sigNation.eq(2).click()
	}
	if ($('#mt_maritalstatus').html() == '离异') {
		sigNation.eq(3).click()
	}
}
if ($('#person_info_filed_200').length && $.trim($('#person_info_filed_200').parent().prev().text() == '紧急联系人')) {
	$('#person_info_filed_200').val($('#mt_jjlxr').html())
}
if ($('input[name=\"stature\"]').length && $('#mt_height').html().length) {
	$('input[name=\"stature\"]').val($('#mt_height').html())
}
if ($('input[name=\"avoirdupois\"]').length && $('#mt_weight').html() && $.trim($('input[name=\"avoirdupois\"]').parent().prev().text()) == '体重(KG)') {
	$('input[name=\"avoirdupois\"]').val($('#mt_weight').html())
}
if ($('#person_info_filed_201').length && $.trim($('#person_info_filed_201').parent().prev().text()) == '辅导员姓名') {
	$('#person_info_filed_201').val($('.infopledu .mt_tutorname').html());
}
if ($('#person_info_filed_202').length && $.trim($('#person_info_filed_202').parent().prev().text()) == '辅导员电话') {
	$('#person_info_filed_202').val($('.infopledu .mt_tutorphone').html());
}
if ($('textarea[name=\"comment_content\"]').length && $('#mt_selfIntro').html()) {
	$('textarea[name=\"comment_content\"]').val($('#mt_selfIntro').html())
}
//高兴投
if ($('input[name=\"filed_204\"]').length && $.trim($('#contact_info_filed_204').parent().prev().text()) == '紧急联系人') {
	$('input[name=\"filed_204\"]').val($('#mt_jjlxr').html())
}
//中航工业雷达斯
if ($('#person_info_filed_202').length && $.trim($('#person_info_filed_202').parent().prev().text()) == '出生地') {
	$('#person_info_filed_202').val($('#mt_nativeplace').html()+$('#mt_native_city').html());
}
if ($('#person_info_filed_203').length && $.trim($('#person_info_filed_203').parent().prev().text()) == '爱好及特长') {
	$('#person_info_filed_203').val($('#mt_skill').html());
}
if ($('#contact_info_filed_230').length && $.trim($('#contact_info_filed_230').parent().prev().text()) == '现居地址') {
	$('#contact_info_filed_230').val($('#mt_add').html());
}
if ($('#contact_info_filed_206').length && $.trim($('#contact_info_filed_206').parent().prev().text()) == '邮编') {
	$('#contact_info_filed_206').val($('#mt_zip').html());
}
if ($('#contact_info_filed_207').length && $.trim($('#contact_info_filed_207').parent().prev().text()) == '固定电话') {
	$('#contact_info_filed_207').val($('#mt_gudingtel').html());
}
if ($('#contact_info_filed_208').length && $.trim($('#contact_info_filed_208').parent().prev().text()) == '家庭地址') {
	$('#contact_info_filed_208').val($('#mt_postadd').html());
}
if ($('#contact_info_filed_219').length && $.trim($('#contact_info_filed_219').parent().prev().text()) == '家庭电话') {
	$('#contact_info_filed_219').val($('#mt_fmphone').html());
}
if ($('#contact_info_filed_218').length && $.trim($('#contact_info_filed_218').parent().prev().text()) == '邮编') {
	$('#contact_info_filed_218').val($('#mt_zip').html());
}
if ($('#module_50_filed_214').length && $('.infoschaward .mt_awardsName').html()) {
	$('#module_50_filed_214').val($('.infoschaward .mt_schawradList').html());
}
//无忧英语
if ($('#contact_info_postal_code').length && $.trim($('#contact_info_postal_code').parent().prev().text()) == '邮政编码') {
	$('#contact_info_postal_code').val($('#mt_zip').html());
}
if ($('#contact_info_blog').length && $.trim($('#contact_info_blog').parent().prev().text()) == '个人主页/博客') {
	$('#contact_info_blog').val($('#mt_profile').html());
}

if ($('#mt_hobbies').html() && $('#skill_favorite_filed_217').length) {
	$('#skill_favorite_filed_217').val($('#mt_hobbies').html())
}

for (var i = 0; i < $('.infoproject').length; i++) {
	if ($('input[name=\"filed_219\"]').eq(i) && $('.infoproject .mt_prostarttime').eq(i).html()) {
		if ($('.infoproject .mt_prostarttime').eq(i).html().length < 7) {
			$('input[name=\"filed_219\"]').eq(i).val($('.infoproject .mt_prostarttime').eq(i).html().split('-').join('-0') + '-01')
		} else {
			$('input[name=\"filed_219\"]').eq(i).val($('.infoproject .mt_prostarttime').eq(i).html() + '-01')
		}
	}
	if ($('input[name=\"filed_220\"]').eq(i).length && $('.infoproject .mt_proendtime').eq(i).html() && $.trim($('input[name=\"filed_220\"]').parent().prev().text()) != '实习部门实习部门') {
		if ($('.infoproject .mt_proendtime').eq(i).html().length < 7) {
			$('input[name=\"filed_220\"]').eq(i).val($('.infoproject .mt_proendtime').eq(i).html().split('-').join('-0') + '-01')
		} else {
			$('input[name=\"filed_220\"]').eq(i).val($('.infoproject .mt_proendtime').eq(i).html() + '-01')
		}
	}
	if ($('textarea[name=\"filed_221\"]').eq(i).length && $('.infoproject .mt_projectRemark').eq(i).html()) {
		$('textarea[name=\"filed_221\"]').eq(i).val($('.infoproject .mt_projectRemark').eq(i).html())
	}
}
if ($('textarea[name=\"filed_234\"]').length && $('.infoparttimejobs .mt_workList').html() && $.trim($('textarea[name=\"filed_234\"]').parent().prev().text()) == '实习经历') {
	$('textarea[name=\"filed_234\"]').val($('.infoparttimejobs .mt_workList').html())
}
if ($('textarea[name=\"filed_225\"]').length && $('#mt_selfIntro').html() && $.trim($('textarea[name=\"filed_225\"]').parent().prev().text()) == '自我评价') {
	$('textarea[name=\"filed_225\"]').val($('#mt_selfIntro').html())
}
for (var i = 0; i < $('.infoplcerti').length; i++) {
	if ($('input[name=\"filed_212\"]').eq(i).length && $('.infoplcerti .mt_certificateName').eq(i).html() && $.trim($('input[name=\"filed_212\"]').parent().prev().text()).substring(0,4) == '专业证书') {
		$('input[name=\"filed_212\"]').eq(i).val($('.infoplcerti .mt_certificateName').eq(i).html())
	}
	if ($('input[name=\"filed_206\"]').eq(i).length && $('.infoplcerti .mt_getDate').eq(i).html() && $.trim($('input[name=\"filed_206\"]').parent().prev().text()).substring(0,6) == '获得证书时间') {
		if ($('.infoplcerti .mt_getDate').eq(i).html().length < 7) {
			$('input[name=\"filed_206\"]').eq(i).val($('.infoplcerti .mt_getDate').eq(i).html().split('-').join('-0'))
		} else {
			$('input[name=\"filed_206\"]').eq(i).val($('.infoplcerti .mt_getDate').eq(i).html())
		}
	}
}
for (var i = 0; i < $('.infoschaward').length; i++) {
	if ($('input[name=\"filed_203\"]').eq(i).length && $('.infoschaward .mt_awardsName').eq(i).html() && $.trim($('input[name=\"filed_203\"]').parent().prev().text()).substring(0,4) == '获奖名称') {
		$('input[name=\"filed_203\"]').eq(i).val($('.infoschaward .mt_awardsName').eq(i).html())
	}
	if ($('input[name=\"filed_204\"]').eq(i).length && $('.infoschaward .mt_awardsDate').eq(i).html() && $.trim($('input[name=\"filed_204\"]').parent().prev().text()).substring(0,4) == '获奖时间') {
		if ($('.infoschaward .mt_awardsDate').eq(i).html().length < 7) {
			$('input[name=\"filed_204\"]').eq(i).val($('.infoschaward .mt_awardsDate').eq(i).html().split('-').join('-0'))
		} else {
			$('input[name=\"filed_204\"]').eq(i).val($('.infoschaward .mt_awardsDate').eq(i).html())
		}
	}
	if ($('textarea[name=\"filed_205\"]').eq(i).length && $('.infoschaward .mt_awardsDes').eq(i).html() && $.trim($('textarea[name=\"filed_205\"]').parent().prev().text()).substring(0,4) == '奖项描述') {
		$('textarea[name=\"filed_205\"]').eq(i).val($('.infoschaward .mt_awardsDes').eq(i).html())
	}
}