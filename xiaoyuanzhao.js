if ($('#jm_qiuck_cover')) {
	$('#jm_qiuck_cover').fadeIn();
	setTimeout(function() {
		$('#jm_qiuck_cover').fadeOut()
	}, 1000)
}
if ($.trim($('.xyz-form-content-item').eq(1).find('h2').html()) == '个人基本信息') {
	var basic = $('.xyz-form-content-item').eq(1);
	if (basic.find($('input[name=\"name\"]')).length) {
		basic.find($('input[name=\"name\"]')).val($('#mt_name').html())
	}
	if (basic.find($('select[name=\"gender\"]')).length && $('#mt_sex').html()) {
		if ($('#mt_sex').html() == '女') {
			basic.find($('select[name=\"gender\"]')).get(0).options[1].selected=true;
		}
		if ($('#mt_sex').html() == '男') {
			basic.find($('select[name=\"gender\"]')).get(0).options[0].selected=true;
		}
	}
	if (basic.find($('select[name=\"id_type\"]')).length && $('#mt_idtype').html()) {
		if ($('#mt_idtype').html() == '身份证') {
			basic.find($('input[name=\"id_number\"]')).val($('#mt_id').html());
		}
		if ($('#mt_idtype').html() == '护照') {
			basic.find($('select[name=\"id_type\"]')).get(0).options[1].selected=true;
			basic.find($('input[name=\"id_number\"]')).val($('#mt_id').html());
		}
	}
	if (basic.find($('input[name=\"birthday\"]')).length && $('#mt_birth').html()) {
		var birth = $('#mt_birth').html().split('-');
		for (var i in birth) {
			if (birth[i].length < 2) {
				birth[i] = '0' + birth[i]
			}
			var birthr = birth.join('-')
		}
		basic.find($('input[name=\"birthday\"]')).val(birthr)
	}
	if (basic.find($('select[name=\"political\"]')).length && $('#mt_polistatus').html()) {
		var polistatus = basic.find($('select[name=\"political\"]')).get(0);
		switch ($('#mt_polistatus').html()) {
			case '共青团员':
				polistatus.options[2].selected = true;
				break;
			case '中共党员':		
				polistatus.options[0].selected = true;
				break;
			case '中共预备党员':
				polistatus.options[1].selected = true;
				break;
			case '群众':
				polistatus.options[3].selected = true;
				break;
			}
	}
	if (basic.find($('input[name=\"graduation_time\"]')).length && $('#mt_gradutetime').html()) {
		if ($('#mt_gradutetime').html().length < 7) {
			basic.find($('input[name=\"graduation_time\"]')).val($('#mt_gradutetime').html().split('-').join('-0') + '-01')
		} else {
			basic.find($('input[name=\"graduation_time\"]')).val($('#mt_gradutetime').html() + '-01')
		}
	}
	if (basic.find($('select[name=\"highest_degree\"]')).length && $('#mt_edu').html()) {
		var sigNation = basic.find($('select[name=\"highest_degree\"]')).get(0);
		switch ($('#mt_edu').html()) {
			case '博士研究生':
				sigNation.options[3].selected=true;
				break;
			case '硕士研究生':
				sigNation.options[4].selected=true;
				break;
			case '大学本科-一本':
			case '大学本科-二本':
			case '大学本科-三本':
			case '双学士':
				sigNation.options[1].selected=true;
				break;
			case '大学专科':
				sigNation.options[0].selected=true;
				break;
			}
	}
	if (basic.find($('input[name=\"tel_number\"]')).length) {
		basic.find($('input[name=\"tel_number\"]')).val($('#mt_tel').html())
	}
	if (basic.find($('input[name=\"email\"]')).length) {
		basic.find($('input[name=\"email\"]')).val($('#mt_email').html())
	}
	if (basic.find($('input[name=\"emc_name\"]')).length) {
		basic.find($('input[name=\"emc_name\"]')).val($('#mt_jjlxr').html())
	}
	if (basic.find($('input[name=\"emc_tel\"]')).length) {
		basic.find($('input[name=\"emc_tel\"]')).val($('#mt_jjlxrtel').html())
	}
	if (basic.find($('input[name=\"address\"]')).length) {
		basic.find($('input[name=\"address\"]')).val($('#mt_add').html())
	}
}
//教育
if ($.trim($('.xyz-form-content-item').eq(2).find('h2').html()) == '教育经历') {
	var edu = $('.xyz-form-content-item').eq(2);
	for (var i = 0; i < $('.infopledu').length; i++) {
		if (edu.find($('select[name=\"degree\"]')).eq(i).length && $('.infopledu .mt_education').eq(i).html()) {
			if ($('.infopledu .mt_education').eq(i).html() == '硕士研究生') {
				edu.find($('select[name=\"degree\"]')).eq(i).get(0).options[3].selected=true;
			} else if ($('.infopledu .mt_education').eq(i).html() == '博士研究生') {
				edu.find($('select[name=\"degree\"]')).eq(i).get(0).options[2].selected=true;
			} else if ($('.infopledu .mt_education').eq(i).html() == '大学专科') {
				edu.find($('select[name=\"degree\"]')).eq(i).get(0).options[0].selected=true;
			} else if (($('.infopledu .mt_education').eq(i).html() == '大学本科-一本' || $('.infopledu .mt_education').eq(i).html() == '大学本科-二本' || $('.infopledu .mt_education').eq(i).html() == '大学本科-三本' || $('.infopledu .mt_education').eq(i).html() == '海外本科')) {
				edu.find($('select[name=\"degree\"]')).eq(i).get(0).options[1].selected=true;
			} 
		}
		if (edu.find($('input[name=\"begin_time\"]')).eq(i) && $('.infopledu .mt_startYear').eq(i).html()) {
			if ($('.infopledu .mt_startYear').eq(i).html().length < 7) {
				edu.find($('input[name=\"begin_time\"]')).eq(i).val($('.infopledu .mt_startYear').eq(i).html().split('-').join('-0') + '-01')
			} else {
				edu.find($('input[name=\"begin_time\"]')).eq(i).val($('.infopledu .mt_startYear').eq(i).html() + '-01')
			}
		}
		if (edu.find($('input[name=\"end_time\"]')).eq(i) && $('.infopledu .mt_endYear').eq(i).html()) {
			if ($('.infopledu .mt_endYear').eq(i).html().length < 7) {
				edu.find($('input[name=\"end_time\"]')).eq(i).val($('.infopledu .mt_endYear').eq(i).html().split('-').join('-0') + '-01')
			} else {
				edu.find($('input[name=\"end_time\"]')).eq(i).val($('.infopledu .mt_endYear').eq(i).html() + '-01')
			}
		}
		
		if (edu.find($('input[name=\"school\"]')).eq(i).length && $('.infopledu .mt_schoolName').eq(i).html()) {
			edu.find($('input[name=\"school\"]')).eq(i).val($('.infopledu .mt_schoolName').eq(i).html())
		}
		if (edu.find($('input[name=\"college\"]')).eq(i).length && $('.infopledu .mt_academy').eq(i).html()) {
			edu.find($('input[name=\"college\"]')).eq(i).val($('.infopledu .mt_academy').eq(i).html())
		}
		if (edu.find($('textarea[name=\"course\"]')).eq(i).length && $('.infopledu .mt_major').eq(i).html()) {
			edu.find($('textarea[name=\"course\"]')).eq(i).val($('.infopledu .mt_major').eq(i).html())
		}
		if (edu.find($('input[name=\"major\"]')).eq(i).length && $('.infopledu .mt_professional').eq(i).html()) {
			edu.find($('input[name=\"major\"]')).eq(i).val($('.infopledu .mt_professional').eq(i).html())
		}
		if (edu.find($('input[name=\"gpa\"]')).eq(i).length && $('.infopledu .mt_gpascore').eq(i).html()) {
			edu.find($('input[name=\"gpa\"]')).eq(i).val($('.infopledu .mt_gpascore').eq(i).html())
		}
		if (edu.find($('select[name=\"ranking\"]')).eq(i).length && $('.infopledu .mt_professionalranking').eq(i).html()) {
			if ($('.infopledu .mt_professionalranking').eq(i).html() == '前5%') {
				edu.find($('select[name=\"ranking\"]')).eq(i).get(0).options[0].selected=true;
			} else if ($('.infopledu .mt_professionalranking').eq(i).html() == '前10%') {
				edu.find($('select[name=\"ranking\"]')).eq(i).get(0).options[1].selected=true;
			} else if ($('.infopledu .mt_professionalranking').eq(i).html() == '前20%') {
				edu.find($('select[name=\"ranking\"]')).eq(i).get(0).options[2].selected=true;
			} else if ($('.infopledu .mt_professionalranking').eq(i).html() == '前30%') {
				edu.find($('select[name=\"ranking\"]')).eq(i).get(0).options[3].selected=true;
			} 
		}
	}
}
//实习
if ($.trim($('.xyz-form-content-item').eq(3).find('h2').html()) == '实习经历' && $('.infoparttimejobs').length != 0) {
	$('.item-choose').eq(0).find('span').eq(1).click();
	window.setTimeout(function(){
		for (var i = 0; i < $('.infoparttimejobs').length; i++) {
			var job = $('.xyz-form-content-item').eq(3);
			if (job.find($('input[name=\"name\"]')).eq(i).length && $('.infoparttimejobs .mt_companyName').eq(i).html()) {
				job.find($('input[name=\"name\"]')).eq(i).val($('.infoparttimejobs .mt_companyName').eq(i).html())
			}
			if (job.find($('input[name=\"job\"]')).eq(i).length && $('.infoparttimejobs .mt_positionName').eq(i).html()) {
				job.find($('input[name=\"job\"]')).eq(i).val($('.infoparttimejobs .mt_positionName').eq(i).html())
			}
			if (job.find($('input[name=\"begin_time\"]')).eq(i) && $('.infoparttimejobs .mt_startDate').eq(i).html()) {
				if ($('.infoparttimejobs .mt_startDate').eq(i).html().length < 7) {
					job.find($('input[name=\"begin_time\"]')).eq(i).val($('.infoparttimejobs .mt_startDate').eq(i).html().split('-').join('-0') + '-01')
				} else {
					job.find($('input[name=\"begin_time\"]')).eq(i).val($('.infoparttimejobs .mt_startDate').eq(i).html() + '-01')
				}
			}
			if (job.find($('input[name=\"end_time\"]')).eq(i) && $('.infoparttimejobs .mt_endDate').eq(i).html()) {
				if ($('.infoparttimejobs .mt_endDate').eq(i).html().length < 7) {
					job.find($('input[name=\"end_time\"]')).eq(i).val($('.infoparttimejobs .mt_endDate').eq(i).html().split('-').join('-0') + '-01')
				} else {
					job.find($('input[name=\"end_time\"]')).eq(i).val($('.infoparttimejobs .mt_endDate').eq(i).html() + '-01')
				}
			}
			if (job.find($('textarea[name=\"desc\"]')).eq(i).length && $('.infoparttimejobs .workContent').eq(i).html()) {
				job.find($('textarea[name=\"desc\"]')).eq(i).val($('.infoparttimejobs .workContent').eq(i).html())
			}
			if (job.find($('input[name=\"department\"]')).eq(i).length && $('.infoparttimejobs .mt_department').eq(i).html()) {
				job.find($('input[name=\"department\"]')).eq(i).val($('.infoparttimejobs .mt_department').eq(i).html())
			}
			if (job.find($('select[name=\"nature\"]')).eq(i).length && $('.infoparttimejobs .mt_companyproperty').eq(i).html()) {
				var company = job.find($('select[name=\"nature\"]')).eq(i).get(0);
				switch ($('.infoparttimejobs .mt_companyproperty').eq(i).html()) {
				case '外资-欧美':
				case '外资-非欧美':
					company.options[2].selected = true;
					break;
				case '国企':
					company.options[1].selected = true;
					break;
				case '合资-欧美':
				case '合资-非欧美':
					company.options[3].selected = true;
					break;
				case '民营公司':
					company.options[0].selected = true;
					break;
				case '政府机关':
					company.options[5].selected = true;
					break;
				case '事业单位':
					company.options[4].selected = true;
					break;
				default:
					company.options[6].selected = true;
					break;
				}
			}
		}
	 },200);	
}
//项目
if ($.trim($('.xyz-form-content-item').eq(4).find('h2').html()) == '项目经验' && $('.infoproject').length != 0) {
	$('.item-choose').eq(1).find('span').eq(1).click();
	window.setTimeout(function(){
		for (var i = 0; i < $('.infoproject').length; i++) {
			var ject = $('.xyz-form-content-item').eq(4);
			if (ject.find($('input[name=\"name\"]')).eq(i).length && $('.infoproject .mt_projectName').eq(i).html()) {
				ject.find($('input[name=\"name\"]')).eq(i).val($('.infoproject .mt_projectName').eq(i).html())
			}
			if (ject.find($('input[name=\"begin_time\"]')).eq(i) && $('.infoproject .mt_prostarttime').eq(i).html()) {
				if ($('.infoproject .mt_prostarttime').eq(i).html().length < 7) {
					ject.find($('input[name=\"begin_time\"]')).eq(i).val($('.infoproject .mt_prostarttime').eq(i).html().split('-').join('-0') + '-01')
				} else {
					ject.find($('input[name=\"begin_time\"]')).eq(i).val($('.infoproject .mt_prostarttime').eq(i).html() + '-01')
				}
			}
			if (ject.find($('input[name=\"end_time\"]')).eq(i) && $('.infoproject .mt_proendtime').eq(i).html()) {
				if ($('.infoproject .mt_proendtime').eq(i).html().length < 7) {
					ject.find($('input[name=\"end_time\"]')).eq(i).val($('.infoproject .mt_proendtime').eq(i).html().split('-').join('-0') + '-01')
				} else {
					ject.find($('input[name=\"end_time\"]')).eq(i).val($('.infoproject .mt_proendtime').eq(i).html() + '-01')
				}
			}
			if (ject.find($('textarea[name=\"desc\"]')).eq(i).length && $('.infoproject .mt_projectRemark').eq(i).html()) {
				ject.find($('textarea[name=\"desc\"]')).eq(i).val($('.infoproject .mt_projectRemark').eq(i).html())
			}
			if (ject.find($('textarea[name=\"duty\"]')).eq(i).length && $('.infoproject .mt_projectDuty').eq(i).html()) {
				ject.find($('textarea[name=\"duty\"]')).eq(i).val($('.infoproject .mt_projectDuty').eq(i).html())
			}
		}
	 },200);	
}
//语言能力
if ($.trim($('.xyz-form-content-item').eq(6).find('h2').html()) == '语言能力' && $('.infoproject').length != 0) {
	for (var i = 0; i < $('.infoOtherSkill').length; i++) {
		var lang = $('.xyz-form-content-item').eq(6);
		if (lang.find($('select[name=\"language\"]')).eq(i).length) {
			var sigNation = lang.find($('select[name=\"language\"]')).eq(i).get(0);
			for (var j = 0; j < sigNation.options.length; j++) {
				if (sigNation.options[j].innerHTML == $('.infoOtherSkill .mt_skillOtherLang').eq(i).html()) {
					sigNation.options[j].selected=true;
					break;
				}
			}
		}
		if (lang.find($('select[name=\"ls_ab\"]')).eq(i).length) {
			var Listen = lang.find($('select[name=\"ls_ab\"]')).eq(i).get(0);
			if ($('.infoOtherSkill .mt_skillListenLevel').eq(i).html() == '了解') {
				Listen.options[0].selected=true;
			}
			if ($('.infoOtherSkill .mt_skillListenLevel').eq(i).html() == '一般') {
				Listen.options[1].selected=true;
			}
			if ($('.infoOtherSkill .mt_skillListenLevel').eq(i).html() == '熟练') {
				Listen.options[2].selected=true;
			}
			if ($('.infoOtherSkill .mt_skillListenLevel').eq(i).html() == '精通') {
				Listen.options[3].selected=true;
			}
		}	
		if (lang.find($('select[name=\"rw_ab\"]')).eq(i).length) {
			var Write = lang.find($('select[name=\"rw_ab\"]')).eq(i).get(0);
			if ($('.infoOtherSkill .mt_skillWriteLevel').eq(i).html() == '了解') {
				Write.options[0].selected=true;
			}
			if ($('.infoOtherSkill .mt_skillWriteLevel').eq(i).html() == '一般') {
				Write.options[1].selected=true;
			}
			if ($('.infoOtherSkill .mt_skillWriteLevel').eq(i).html() == '熟练') {
				Write.options[2].selected=true;
			}
			if ($('.infoOtherSkill .mt_skillWriteLevel').eq(i).html() == '精通') {
				Write.options[3].selected=true;
			}
		}	
	}
	for (var i = 0; i < $('.infoEnglishSkill').length; i++) {
		var lang = $('.xyz-form-content-item').eq(6);
		if (lang.find($('select[name=\"level_exam\"]')).eq(i).length) {
			var sigNation = lang.find($('select[name=\"level_exam\"]')).eq(i).get(0);
			if ($('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() == '大学英语四级') {
				sigNation.options[0].selected=true;
			}
			if ($('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() == '大学英语六级') {
				sigNation.options[1].selected=true;
			}
		}
		if (lang.find($('input[name=\"score\"]')).eq(i).length && $('.infoEnglishSkill .mt_skillEngSorce').eq(i).html()) {
			lang.find($('input[name=\"score\"]')).eq(i).val($('.infoEnglishSkill .mt_skillEngSorce').eq(i).html())
		}		
	}
}
//奖励
if ($.trim($('.xyz-form-content-item').eq(8).find('h2').html()) == '荣誉奖励' && $('.infoschaward').length != 0) {
	$('.item-choose').eq(2).find('span').eq(1).click();
	window.setTimeout(function(){
		for (var i = 0; i < $('.infoschaward').length; i++) {
			var award = $('.xyz-form-content-item').eq(8);
			if (award.find($('input[name=\"name\"]')).eq(i).length && $('.infoschaward .mt_awardsName').eq(i).html()) {
				award.find($('input[name=\"name\"]')).eq(i).val($('.infoschaward .mt_awardsName').eq(i).html())
			}
			if (award.find($('input[name=\"get_time\"]')).eq(i).length && $('.infoschaward .mt_awardsDate').eq(i).html()) {
				if ($('.infoschaward .mt_awardsDate').eq(i).html().length < 7) {
					award.find($('input[name=\"get_time\"]')).eq(i).val($('.infoschaward .mt_awardsDate').eq(i).html().split('-').join('-0') + '-01')
				} else {
					award.find($('input[name=\"get_time\"]')).eq(i).val($('.infoschaward .mt_awardsDate').eq(i).html() + '-01')
				}
			}
			if (award.find($('textarea[name=\"desc\"]')).eq(i).length && $('.infoschaward .mt_awardsDes').eq(i).html()) {
				award.find($('textarea[name=\"desc\"]')).eq(i).val($('.infoschaward .mt_awardsDes').eq(i).html())
			}
			if (award.find($('select[name=\"class\"]')).eq(i).length) {
				var sigNation = award.find($('select[name=\"class\"]')).eq(i).get(0);
				for (var j = 0; j < sigNation.options.length; j++) {
					if (sigNation.options[j].innerHTML == $('.infoschaward .mt_awardsType').eq(i).html()) {
						sigNation.options[j].selected=true;
						break;
					}
				}
			}
			if (award.find($('select[name=\"level\"]')).eq(i).length) {
				var sigNation = award.find($('select[name=\"level\"]')).eq(i).get(0);
				for (var j = 0; j < sigNation.options.length; j++) {
					if (sigNation.options[j].innerHTML == $('.infoschaward .mt_awardsLevel').eq(i).html()) {
						sigNation.options[j].selected=true;
						break;
					}
					if ($('.infoschaward .mt_awardsLevel').eq(i).html() == '其他' || $('.infoschaward .mt_awardsLevel').eq(i).html() == '特等奖') {
						sigNation.options[3].selected=true;
						break;
					}
				}
			}
		}
	 },200);	
}
//活动
if ($.trim($('.xyz-form-content-item').eq(9).find('h2').html()) == '活动经历' && $('.infoschoolclub').length != 0) {
	$('.item-choose').eq(3).find('span').eq(1).click();
	window.setTimeout(function(){
		for (var i = 0; i < $('.infoschoolclub').length; i++) {
			var club = $('.xyz-form-content-item').eq(9);
			if (club.find($('input[name=\"name\"]')).eq(i).length && $('.infoschoolclub .mt_schClubName').eq(i).html()) {
				club.find($('input[name=\"name\"]')).eq(i).val($('.infoschoolclub .mt_schClubName').eq(i).html())
			}
			if (club.find($('input[name=\"begin_time\"]')).eq(i) && $('.infoschoolclub .mt_startDate').eq(i).html()) {
				if ($('.infoschoolclub .mt_startDate').eq(i).html().length < 7) {
					club.find($('input[name=\"begin_time\"]')).eq(i).val($('.infoschoolclub .mt_startDate').eq(i).html().split('-').join('-0') + '-01')
				} else {
					club.find($('input[name=\"begin_time\"]')).eq(i).val($('.infoschoolclub .mt_startDate').eq(i).html() + '-01')
				}
			}
			if (club.find($('input[name=\"end_time\"]')).eq(i) && $('.infoschoolclub .mt_endDate').eq(i).html()) {
				if ($('.infoschoolclub .mt_endDate').eq(i).html().length < 7) {
					club.find($('input[name=\"end_time\"]')).eq(i).val($('.infoschoolclub .mt_endDate').eq(i).html().split('-').join('-0') + '-01')
				} else {
					club.find($('input[name=\"end_time\"]')).eq(i).val($('.infoschoolclub .mt_endDate').eq(i).html() + '-01')
				}
			}
			if (club.find($('input[name=\"job\"]')).eq(i).length && $('.infoschoolclub .mt_positionName').eq(i).html()) {
				club.find($('input[name=\"job\"]')).eq(i).val($('.infoschoolclub .mt_positionName').eq(i).html())
			}
			if (club.find($('textarea[name=\"desc\"]')).eq(i).length && $('.infoschoolclub .mt_workDes').eq(i).html()) {
				club.find($('textarea[name=\"desc\"]')).eq(i).val($('.infoschoolclub .mt_workDes').eq(i).html())
			}
		}
	 },200);	
}
if ($.trim($('.xyz-form-content-item').eq(11).find('h2').html()) == '兴趣特长') {
	var hobby = $('.xyz-form-content-item').eq(11);
	if (hobby.find($('textarea[name=\"hobby\"]')).length && $('#mt_skill').html()) {
		hobby.find($('textarea[name=\"hobby\"]')).val($('#mt_skill').html())
	}
	if (hobby.find($('textarea[name=\"special\"]')).length && $('#mt_skill').html()) {
		hobby.find($('textarea[name=\"special\"]')).val($('#mt_skill').html())
	}
}
if ($.trim($('.xyz-form-content-item').eq(13).find('h2').html()) == '自我描述') {
	var desc = $('.xyz-form-content-item').eq(13);
	if (desc.find($('textarea[name=\"desc\"]')).length && $('#mt_selfIntro').html()) {
		desc.find($('textarea[name=\"desc\"]')).val($('#mt_selfIntro').html())
	}
}
