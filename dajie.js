if ($('#jm_qiuck_cover')) {
	$('#jm_qiuck_cover').fadeIn();
	setTimeout(function() {
		$('#jm_qiuck_cover').fadeOut()
	}, 1000)
}
var event = document.createEvent('HTMLEvents');
event.initEvent('change', true, false);
if ($('#personInfo').prev().html() == '个人信息') {
	if ($('input[name=\"NAME\"]').length) {
		$('input[name=\"NAME\"]').val($('#mt_name').html());
	}
	if ($('li[data-name=\"GENDER\"]').length && $('#mt_sex').html() == '男') {
		$('li[data-name=\"GENDER\"] span i').eq(0).click();
	}
	if ($('li[data-name=\"GENDER\"]').length && $('#mt_sex').html() == '女') {
		$('li[data-name=\"GENDER\"] span i').eq(1).click();
	}
	if($('input[name=\"BIRTHDAY\"]').length && $('#mt_birth').html()){
		var birth = $('#mt_birth').html().split('-');
		for (var i in birth) {
		    if (birth[i].length < 2) {
		        birth[i] = '0'+birth[i];
		    }
		    var birthr=birth.join('-');
		}
		$('input[name=\"BIRTHDAY\"]').val(birthr); 
	} 
	if ($('#divselect').length && $('#mt_idtype').html()) {
		switch ($('#mt_idtype').html()) {
		case '身份证':
			$('#divselect ul li a').eq(1).click();
			break;
		case '护照':
			$('#divselect ul li a').eq(2).click();
			break;
		case '军官证':
			$('#divselect ul li a').eq(3).click();
			break;
		default:
			$('#divselect ul li a').eq(4).click();
			break
		}
	}
	if ($('input[name=\"DOCUMENT_NUMBER\"]').length) {
		$('input[name=\"DOCUMENT_NUMBER\"]').val($('#mt_id').html());
	}
	if ($('#nation_name').length) {
		$('#nation_name').val($('#mt_nation').html());
	}
	if ($('input[name=\"HEIGHT\"]').length) {
		$('input[name=\"HEIGHT\"]').val($('#mt_height').html());
	}
	if ($('input[name=\"WEIGHT\"]').length) {
		$('input[name=\"WEIGHT\"]').val($('#mt_weight').html());
	}
	if ($('input[name=\"EMAIL\"]').length) {
		$('input[name=\"EMAIL\"]').val($('#mt_email').html());
	}
	if ($('li[data-name=\"IS_MARRIED\"]').length && $('#mt_maritalstatus').html() == '未婚') {
		$('li[data-name=\"IS_MARRIED\"] span i').eq(0).click();
	}
	if ($('li[data-name=\"IS_MARRIED\"]').length && $('#mt_maritalstatus').html() == '已婚') {
		$('li[data-name=\"IS_MARRIED\"] span i').eq(1).click();
	}
	if ($('li[data-name=\"IS_MARRIED\"]').length && $('#mt_maritalstatus').html() == '离异') {
		$('li[data-name=\"IS_MARRIED\"] span i').eq(2).click();
	}
	if ($('#divselect3').length && $('#mt_polistatus').html()) {
		switch ($('#mt_polistatus').html()) {
		case '群众':	
			$('#divselect3 ul li a').eq(1).click();
			break;
		case '共青团员':
			$('#divselect3 ul li a').eq(2).click();
			break;
		case '中共党员':
		case '中共预备党员':
			$('#divselect3 ul li a').eq(3).click();
			break;
		case '中国民主同盟':
		case '中国民主建国会':
		case '中国民主促进会':
		case '台湾民主自治同盟':
			$('#divselect3 ul li a').eq(4).click();
			break;
		default:
			$('#divselect3 ul li a').eq(5).click();
			break
		}
	}
	if ($('#divselect4').length && $('#mt_livecity_pro').html()) {
		for (var i = 0; i < $('#divselect4 ul li a').length; i++) {
			if ($('#divselect4 ul li a').eq(i).html() == $('#mt_livecity_pro').html()) {
				$('#divselect4 ul li a').eq(i).click();
			}
		}
	}
	window.setTimeout(function(){
		if($('#divselect5').length && $('#mt_livecity_city').html()){ 
			for (var i = 0; i < $('#divselect5 ul li a').length; i++) {
				if ($('#divselect5 ul li a').eq(i).html() == $('#mt_livecity_city').html()) {
				$('#divselect5 ul li a').eq(i).click();
			    }
			}
		}
	 },200);
	if ($('#divselect6').length && $('#mt_hukoucitynow').html()) {
		for (var i = 0; i < $('#divselect6 ul li a').length; i++) {
			if ($('#divselect6 ul li a').eq(i).html() == $('#mt_hukoucitynow').html()) {
				$('#divselect6 ul li a').eq(i).click();
			}
		}
	}
	window.setTimeout(function(){
		if($('#divselect7').length && $('#mt_hukoucitynow_city').html()){ 
			for (var i = 0; i < $('#divselect7 ul li a').length; i++) {
				if ($('#divselect7 ul li a').eq(i).html() == $('#mt_hukoucitynow_city').html()) {
				$('#divselect7 ul li a').eq(i).click();
			    }
			}
		}
	 },200);
	if ($('#personal_evaluation').length) {
		$('#personal_evaluation').val($('#mt_selfIntro').html());
	}
	if ($('input[name=\"MOBILE_NO\"]').length) {
		$('input[name=\"MOBILE_NO\"]').val($('#mt_tel').html());
	}
}

//教育
if ($('#personInfo').parent().find('h5').html() == '教育经历') {
    for (var i = 0; i <$('.educate_top li').length; i++) {
        if ($('input[name=\"BEGIN_TIME_b\"]').eq(i-2).length) {
            $('input[name=\"BEGIN_TIME_b\"]').eq(i-2).val($('.infopledu .mt_startYearY').eq(i-2).html());
        }
        if ($('input[name=\"BEGIN_TIME_e\"]').eq(i-2).length) {
            $('input[name=\"BEGIN_TIME_e\"]').eq(i-2).val($('.infopledu .mt_startYearM').eq(i-2).html());
        }
        if ($('input[name=\"END_TIME_b\"]').eq(i-2).length) {
            $('input[name=\"END_TIME_b\"]').eq(i-2).val($('.infopledu .mt_endYearY').eq(i-2).html());
        }
        if ($('input[name=\"END_TIME_e\"]').eq(i-2).length) {
            $('input[name=\"END_TIME_e\"]').eq(i-2).val($('.infopledu .mt_endYearM').eq(i-2).html());
        }
        if ($('input[name=\"SCHOOL\"]').eq(i-2).length) {
            $('input[name=\"SCHOOL\"]').eq(i-2).val($('.infopledu .mt_schoolName').eq(i-2).html());
        }
        if ($('input[name=\"MAJOR_NAME\"]').eq(i-2).length) {
            $('input[name=\"MAJOR_NAME\"]').eq(i-2).val($('.infopledu .mt_professional').eq(i-2).html());
        }
        if ($('input[name=\"GPA\"]').eq(i-2).length) {
            $('input[name=\"GPA\"]').eq(i-2).val($('.infopledu .mt_gpascore').eq(i-2).html());
        }
        if ($('textarea[name=\"personal_evaluation\"]').eq(i-2).length) {
            $('textarea[name=\"personal_evaluation\"]').eq(i-2).val($('.infopledu .mt_major').eq(i-2).html());
        }
        if ($('input[name=\"PROVE_PERSON\"]').eq(i-2).length) {
            $('input[name=\"PROVE_PERSON\"]').eq(i-2).val($('.infopledu .mt_tutorname').eq(i-2).html()+$('.infopledu .mt_tutorphone').eq(i-2).html());
        }
        if ($('#divselect6').eq(i-2).length && $('.infopledu .mt_education').eq(i-2).html()) {
            switch ($('.infopledu .mt_education').eq(i-2).html()) {
            case '博士研究生':
                $('#divselect6').eq(i-2).find('ul li a').eq(1).click();
                break;
            case '硕士研究生':
                $('#divselect6').eq(i-2).find('ul li a').eq(2).click();
                break;
            case '大学本科-一本':
            case '大学本科-二本':
            case '大学本科-三本':
            case '海外本科':
                $('#divselect6').eq(i-2).find('ul li a').eq(3).click();
                break;
            case '大学专科':
                $('#divselect6').eq(i-2).find('ul li a').eq(4).click();
                break;
            default:
                $('#divselect6').eq(i-2).find('ul li a').eq(5).click();
                break
            }
        }
        if ($('#divselect7').eq(i-2).length && $('.infopledu .mt_degree').eq(i-2).html()) {
            for (var j = 0; j < $('#divselect7 ul li a').length; j++) {
                if ($('#divselect7 ul li a').eq(j).html() == $('.infopledu .mt_degree').eq(i-2).html()) {
                $('#divselect7').eq(i-2).find('ul li a').eq(j).click();
                }
            }
        }
        if ($('#divselect8').eq(i-2).length && $('.infopledu .mt_professionalranking').eq(i-2).html()) {
            for (var k = 0; k < $('#divselect8 ul li a').length; k++) {
                if ($('.infopledu .mt_professionalranking').eq(i-2).html().indexOf($('#divselect8 ul li a').eq(k).html())!=-1) {
                    $('#divselect8').eq(i-2).find('ul li a').eq(k).click();
                }
                if ($('.infopledu .mt_professionalranking').eq(i-2).html() == '前40%' || $('.infopledu .mt_professionalranking').eq(i-2).html() == '前50%' || $('.infopledu .mt_professionalranking').eq(i-2).html() == '前60%' || $('.infopledu .mt_professionalranking').eq(i-2).html() == '前70%') {
                    $('#divselect8').eq(i-2).find('ul li a').eq(4).click();
                }
            }
        }
    }
}
//语言
if ($('#personInfo').parent().find('h5').html() == '语言能力') {
	if($('#divselect1').length && $('.infoEnglishSkill .mt_skillEngLevel').html()){
		switch ($('.infoEnglishSkill .mt_skillEngLevel').html()) {
            case '大学英语四级':
                $('#divselect1').find('ul li a').eq(1).click();
                break;
            case '大学英语六级':
                $('#divselect1').find('ul li a').eq(2).click();
                break;
            case '专业四级':
                $('#divselect1').find('ul li a').eq(3).click();
                break;
            default:
                $('#divselect1').find('ul li a').eq(4).click();
                break
            }
	}
	if ($('input[name=\"ENG_SCORE\"]').length) {
		$('input[name=\"ENG_SCORE\"]').val($('.infoEnglishSkill .mt_skillEngSorce').html());
	}
	for (var i = 0; i < $('.infoOtEnglishSkill').length; i++) {
		if ($('input[name=\"TOEFL\"]').length && $('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html() == '托福') {
			$('input[name=\"TOEFL\"]').val($('.infoOtEnglishSkill .mt_otherSkillEngSorce').eq(i).html());
		}
		if ($('input[name=\"GRE\"]').length && $('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html() == 'GRE') {
			$('input[name=\"GRE\"]').val($('.infoOtEnglishSkill .mt_otherSkillEngSorce').eq(i).html());
		}
		if ($('input[name=\"GMAT\"]').length && $('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html() == 'GMAT') {
			$('input[name=\"GMAT\"]').val($('.infoOtEnglishSkill .mt_otherSkillEngSorce').eq(i).html());
		}
		if ($('input[name=\"IELTS\"]').length && $('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html() == '雅思') {
			$('input[name=\"IELTS\"]').val($('.infoOtEnglishSkill .mt_otherSkillEngSorce').eq(i).html());
		}
		if ($('input[name=\"TOEIC\"]').length && $('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html() == '托业') {
			$('input[name=\"TOEIC\"]').val($('.infoOtEnglishSkill .mt_otherSkillEngSorce').eq(i).html());
		}
	}
	for (var i = 0; i <$('.educate_top,.li_ul').find('ul li').length; i++) {
        if ($('#divselect4').eq(i-1).length && $('.infoOtherSkill .mt_skillWriteLevel').eq(i-1).html()) {
            switch ($('.infoOtherSkill .mt_skillWriteLevel').eq(i-1).html()) {
            case '入门':
                $('#divselect4').eq(i-1).find('ul li a').eq(1).click();
                break;
            case '一般':
                $('#divselect4').eq(i-1).find('ul li a').eq(2).click();
                break;
            case '熟练':
                $('#divselect4').eq(i-1).find('ul li a').eq(3).click();
                break;
            case '精通':
                $('#divselect4').eq(i-1).find('ul li a').eq(4).click();
                break;
            }
        }
        if ($('#divselect5').eq(i-1).length && $('.infoOtherSkill .mt_skillListenLevel').eq(i-1).html()) {
            switch ($('.infoOtherSkill .mt_skillListenLevel').eq(i-1).html()) {
            case '入门':
                $('#divselect5').eq(i-1).find('ul li a').eq(1).click();
                break;
            case '一般':
                $('#divselect5').eq(i-1).find('ul li a').eq(2).click();
                break;
            case '熟练':
                $('#divselect5').eq(i-1).find('ul li a').eq(3).click();
                break;
            case '精通':
                $('#divselect5').eq(i-1).find('ul li a').eq(4).click();
                break;
            }
        }
        if ($('#divselect2').eq(i-1).length && $('.infoOtherSkill .mt_skillOtherLang').eq(i-1).html()) {
            for (var j = 0; j < $('#divselect2 ul li a').length; j++) {
                if ($('#divselect2 ul li a').eq(j).html() == $('.infoOtherSkill .mt_skillOtherLang').eq(i-1).html()) {
                $('#divselect2').eq(i-1).find('ul li a').eq(j).click();
                }
            }
        }
    }
}
//奖励 活动
if ($('#personInfo').parent().find('h5').html() == '奖励、活动') {
	if ($('#textarea_school').length && $('.infoschoolclub .mt_positionName').html()){
		var allactive = [];
		for (var i = 0; i < $('.infoschoolclub').length; i++) {
			if ($('#divselect1').length && ($('.infoschoolclub .mt_positionName').eq(i).html() == '学生会主席' || $('.infoschoolclub .mt_positionName').eq(i).html() == '学生会副主席')) {
				$('#divselect1 ul li a').eq(1).click();
			}
			else if ($('#divselect1').length && $('.infoschoolclub .mt_positionName').eq(i).html() == '学生会部长') {
				$('#divselect1 ul li a').eq(2).click();
			}
			else if ($('#divselect1').length && $('.infoschoolclub .mt_positionName').eq(i).html() == '学生会干事') {
				$('#divselect1 ul li a').eq(5).click();
			}
			else if ($('#divselect1').length && $('.infoschoolclub .mt_positionName').eq(i).html() == '班长团支书') {
				$('#divselect1 ul li a').eq(6).click();
			}
			else if ($('#divselect1').length && $('.infoschoolclub .mt_positionName').eq(i).html() == '班干部') {
				$('#divselect1 ul li a').eq(7).click();
			}
			var active = $('.infoschoolclub .mt_startDateDot').eq(i).html()+'-'+$('.infoschoolclub .mt_endDateDot').eq(i).html()+'\\n'+$('.infoschoolclub .mt_schClubName').eq(i).html()+'\\n'+$('.infoschoolclub .mt_workDes').eq(i).html()+'\\n';
	        allactive.push(active); 
		}
		$('#textarea_school').val(allactive);
	}
	if ($('#textarea_reward').length && $('.infoschaward .mt_awardsName').html()){
	    var allaward = [];
	    for (var i = 0; i < $('.infoschaward').length; i++) {
	        var award = $('.infoschaward .mt_awardsDate').eq(i).html()+'\\n'+$('.infoschaward .mt_awardsName').eq(i).html()+'\\n'+$('.infoschaward .mt_awardsType').eq(i).html()+'\\n'+$('.infoschaward .mt_awardsLevel').eq(i).html()+'\\n';
	        allaward.push(award);    
	    } 
	    $('#textarea_reward').val(allaward); 
	}
	for (var i = 0; i <$('.educate_top,.li_ul').find('ul li').length; i++) {
		if ($('#divselect2').eq(i-1).length && $('.infoschaward .mt_awardsType').eq(i-1).html()) {
            for (var j = 0; j < $('#divselect2 ul li a').length; j++) {
                if ($('.infoschaward .mt_awardsType').eq(i-1).html().indexOf($('#divselect2 ul li a').eq(j).html(),0)!=-1) {
                    $('#divselect2').eq(i-1).find('ul li a').eq(j).click();
                }
            }
        }
        if ($('#divselect4').eq(i-1).length && $('.infoschaward .mt_awardsLevel').eq(i-1).html()) {
            for (var j = 0; j < $('#divselect4 ul li a').length; j++) {
                if ($('.infoschaward .mt_awardsLevel').eq(i-1).html().indexOf($('#divselect4 ul li a').eq(j).html(),0)!=-1) {
                    $('#divselect4').eq(i-1).find('ul li a').eq(j).click();
                }
            }
        }
        if ($('input[name=\"RECEIVE_TIME\"]').eq(i-1).length && $('.infoschaward .mt_awardsDate').eq(i-1).html()) {
        	if ($('.infoschaward .mt_awardsDate').eq(i-1).html().length <7) {
	            $('input[name=\"RECEIVE_TIME\"]').eq(i-1).val($('.infoschaward .mt_awardsDate').eq(i-1).html().split('-').join('-0')+'-01');}
	        else{$('input[name=\"RECEIVE_TIME\"]').eq(i-1).val($('.infoschaward .mt_awardsDate').eq(i-1).html()+'-01')}
        }
	}
}
//实习
if ($('#personInfo').parent().find('h5').html() == '实习经验') {
	if ($('.educate_top').find('ul li').length == 0) {
        if ($('input[name=\"BEGIN_TIME_b\"]').length && $('.infoparttimejobs .mt_startDatedot').eq(0).html()) {
            $('input[name=\"BEGIN_TIME_b\"]').val($('.infoparttimejobs .mt_startDatedot').eq(0).html().split('.')[0]);
        }
        if ($('input[name=\"BEGIN_TIME_e\"]').length && $('.infoparttimejobs .mt_startDatedot').eq(0).html()) {
         $('input[name=\"BEGIN_TIME_e\"]').val($('.infoparttimejobs .mt_startDatedot').eq(0).html().split('.')[1]);
        }
        if ($('input[name=\"END_TIME_b\"]').length && $('.infoparttimejobs .mt_proEndDateDot').eq(0).html()) {
         $('input[name=\"END_TIME_b\"]').val($('.infoparttimejobs .mt_proEndDateDot').eq(0).html().split('.')[0]);
        }
        if ($('input[name=\"END_TIME_e\"]').length && $('.infoparttimejobs .mt_proEndDateDot').eq(0).html()) {
         $('input[name=\"END_TIME_e\"]').val($('.infoparttimejobs .mt_proEndDateDot').eq(0).html().split('.')[1]);
        }
        if ($('input[name=\"CORP_NAME\"]').length && $('.infoparttimejobs .mt_companyName').eq(0).html()) {
         $('input[name=\"CORP_NAME\"]').val($('.infoparttimejobs .mt_companyName').eq(0).html());
        }
        if ($('#divselect').length && $('.infoparttimejobs .mt_companySize').eq(0).html()){
        	switch ($('.infoparttimejobs .mt_companySize').eq(0).html()) {
            case '少于50人':
                $('#divselect ul li a').eq(0).click();
                break;
            case '50-149人':
                $('#divselect ul li a').eq(1).click();
                break;
            case '150-499人':
                $('#divselect ul li a').eq(2).click();
                break;
            case '500-999人':
                $('#divselect ul li a').eq(3).click();
                break;
            default:
                $('#divselect ul li a').eq(4).click();
                break;
            }
        }
        if ($('#divselect2').length && $('.infoparttimejobs .mt_companyproperty').eq(0).html()){
        	switch ($('.infoparttimejobs .mt_companyproperty').eq(0).html()) {
            case '外资-欧美':
            case '外资-非欧美':
            case '合资-欧美':
            case '合资-非欧美':
                $('#divselect2 ul li a').eq(0).click();
                break;
            case '民营公司':
            case '上市公司':
            case '创业公司':
                $('#divselect2 ul li a').eq(1).click();
                break;
            case '国企':
                $('#divselect2 ul li a').eq(2).click();
                break;
            case '事业单位':
            case '非盈利机构':
                $('#divselect2 ul li a').eq(3).click();
                break;
            default:
                $('#divselect2 ul li a').eq(4).click();
                break;
            }
        }
        if ($('input[name=\"DEPT\"]').length && $('.infoparttimejobs .mt_department').eq(0).html()) {
            $('input[name=\"DEPT\"]').val($('.infoparttimejobs .mt_department').eq(0).html());
        }
        if ($('input[name=\"JOB_NAME\"]').length && $('.infoparttimejobs .mt_positionName').eq(0).html()) {
            $('input[name=\"JOB_NAME\"]').val($('.infoparttimejobs .mt_positionName').eq(0).html());
        }
        if ($('textarea[name=\"personal_evaluation\"]').length && $('.infoparttimejobs .mt_workContent').eq(0).text()) {
            $('textarea[name=\"personal_evaluation\"]').val($('.infoparttimejobs .mt_workContent').eq(0).text());
        }
        if ($('input[name=\"PROVE_PERSON\"]').length && $('.infoparttimejobs .mt_reterenceName').eq(0).html()) {
            $('input[name=\"PROVE_PERSON\"]').val($('.infoparttimejobs .mt_reterenceName').eq(0).html()+$('.infoparttimejobs .mt_reterence_phone').eq(0).html());
        }
    }
    if ($('.educate_top').find('ul li').length != 0) {
        for (var i = 0; i <$('.educate_top').find('ul li').length; i++) {
            if ($('input[name=\"BEGIN_TIME_b\"]').length && $('.infoparttimejobs .mt_startDatedot').eq(i).html()) {
                $('input[name=\"BEGIN_TIME_b\"]').val($('.infoparttimejobs .mt_startDatedot').eq(i).html().split('.')[0]);
            }
            if ($('input[name=\"BEGIN_TIME_e\"]').length && $('.infoparttimejobs .mt_startDatedot').eq(i).html()) {
                $('input[name=\"BEGIN_TIME_e\"]').val($('.infoparttimejobs .mt_startDatedot').eq(i).html().split('.')[1]);
            }
            if ($('input[name=\"END_TIME_b\"]').length && $('.infoparttimejobs .mt_proEndDateDot').eq(i).html()) {
                $('input[name=\"END_TIME_b\"]').val($('.infoparttimejobs .mt_proEndDateDot').eq(i).html().split('.')[0]);
            }
            if ($('input[name=\"END_TIME_e\"]').length && $('.infoparttimejobs .mt_proEndDateDot').eq(i).html()) {
                $('input[name=\"END_TIME_e\"]').val($('.infoparttimejobs .mt_proEndDateDot').eq(i).html().split('.')[1]);
            }
            if ($('input[name=\"CORP_NAME\"]').length && $('.infoparttimejobs .mt_companyName').eq(i).html()) {
                $('input[name=\"CORP_NAME\"]').val($('.infoparttimejobs .mt_companyName').eq(i).html());
            }
            if ($('#divselect').length && $('.infoparttimejobs .mt_companySize').eq(i).html()){
	        	switch ($('.infoparttimejobs .mt_companySize').eq(i).html()) {
	            case '少于50人':
	                $('#divselect ul li a').eq(0).click();
	                break;
	            case '50-149人':
	                $('#divselect ul li a').eq(1).click();
	                break;
	            case '150-499人':
	                $('#divselect ul li a').eq(2).click();
	                break;
	            case '500-999人':
	                $('#divselect ul li a').eq(3).click();
	                break;
	            default:
	                $('#divselect ul li a').eq(4).click();
	                break;
	            }
	        }
	        if ($('#divselect2').length && $('.infoparttimejobs .mt_companyproperty').eq(i).html()){
	        	switch ($('.infoparttimejobs .mt_companyproperty').eq(i).html()) {
	            case '外资-欧美':
	            case '外资-非欧美':
	            case '合资-欧美':
	            case '合资-非欧美':
	                $('#divselect2 ul li a').eq(0).click();
	                break;
	            case '民营公司':
	            case '上市公司':
	            case '创业公司':
	                $('#divselect2 ul li a').eq(1).click();
	                break;
	            case '国企':
	                $('#divselect2 ul li a').eq(2).click();
	                break;
	            case '事业单位':
	            case '非盈利机构':
	                $('#divselect2 ul li a').eq(3).click();
	                break;
	            default:
	                $('#divselect2 ul li a').eq(4).click();
	                break;
	            }
	        }
	        if ($('input[name=\"DEPT\"]').length && $('.infoparttimejobs .mt_department').eq(i).html()) {
	            $('input[name=\"DEPT\"]').val($('.infoparttimejobs .mt_department').eq(i).html());
	        }
	        if ($('input[name=\"JOB_NAME\"]').length && $('.infoparttimejobs .mt_positionName').eq(i).html()) {
	            $('input[name=\"JOB_NAME\"]').val($('.infoparttimejobs .mt_positionName').eq(i).html());
	        }
	        if ($('textarea[name=\"personal_evaluation\"]').length && $('.infoparttimejobs .mt_workContent').eq(i).text()) {
	            $('textarea[name=\"personal_evaluation\"]').val($('.infoparttimejobs .mt_workContent').eq(i).text());
	        }
	        if ($('input[name=\"PROVE_PERSON\"]').length && $('.infoparttimejobs .mt_reterenceName').eq(i).html()) {
	            $('input[name=\"PROVE_PERSON\"]').val($('.infoparttimejobs .mt_reterenceName').eq(i).html()+$('.infoparttimejobs .mt_reterence_phone').eq(i).html());
	        }
        }
    }
}
//项目
if ($('#personInfo').parent().find('h5').html() == '项目经验') {
	if ($('.educate_top').find('ul li').length == 0) {
        if ($('input[name=\"BEGIN_TIME_b\"]').length && $('.infoproject .mt_proStartDateDot').eq(0).html()) {
            $('input[name=\"BEGIN_TIME_b\"]').val($('.infoproject .mt_proStartDateDot').eq(0).html().split('.')[0]);
        }
        if ($('input[name=\"BEGIN_TIME_e\"]').length && $('.infoproject .mt_proStartDateDot').eq(0).html()) {
         $('input[name=\"BEGIN_TIME_e\"]').val($('.infoproject .mt_proStartDateDot').eq(0).html().split('.')[1]);
        }
        if ($('input[name=\"END_TIME_b\"]').length && $('.infoproject .mt_endDatedot').eq(0).html()) {
         $('input[name=\"END_TIME_b\"]').val($('.infoproject .mt_endDatedot').eq(0).html().split('.')[0]);
        }
        if ($('input[name=\"END_TIME_e\"]').length && $('.infoproject .mt_endDatedot').eq(0).html()) {
         $('input[name=\"END_TIME_e\"]').val($('.infoproject .mt_endDatedot').eq(0).html().split('.')[1]);
        }
        if ($('input[name=\"PROJECT_NAME\"]').length && $('.infoproject .mt_projectName').eq(0).html()) {
         $('input[name=\"PROJECT_NAME\"]').val($('.infoproject .mt_projectName').eq(0).html());
        }
        if ($('input[name=\"JOB_NAME\"]').length && $('.infoproject .mt_positionName').eq(0).html()) {
            $('input[name=\"JOB_NAME\"]').val($('.infoproject .mt_positionName').eq(0).html());
        }
        if ($('textarea[name=\"personal_evaluation\"]').length && $('.infoproject .mt_projectRemark').eq(0).text()) {
            $('textarea[name=\"personal_evaluation\"]').val($('.infoproject .mt_projectRemark').eq(0).text());
        }
        if ($('input[name=\"PROVE_PERSON\"]').length && $('.infoproject .mt_reterenceName').eq(0).html()) {
            $('input[name=\"PROVE_PERSON\"]').val($('.infoproject .mt_reterenceName').eq(0).html()+$('.infoproject .mt_reterencePhone').eq(0).html());
        }
    }
    if ($('.educate_top').find('ul li').length != 0) {
        for (var i = 0; i <$('.educate_top').find('ul li').length; i++) {
            if ($('input[name=\"BEGIN_TIME_b\"]').length && $('.infoproject .mt_proStartDateDot').eq(i).html()) {
                $('input[name=\"BEGIN_TIME_b\"]').val($('.infoproject .mt_proStartDateDot').eq(i).html().split('.')[0]);
            }
            if ($('input[name=\"BEGIN_TIME_e\"]').length && $('.infoproject .mt_proStartDateDot').eq(i).html()) {
                $('input[name=\"BEGIN_TIME_e\"]').val($('.infoproject .mt_proStartDateDot').eq(i).html().split('.')[1]);
            }
            if ($('input[name=\"END_TIME_b\"]').length && $('.infoproject .mt_endDatedot').eq(i).html()) {
                $('input[name=\"END_TIME_b\"]').val($('.infoproject .mt_endDatedot').eq(i).html().split('.')[0]);
            }
            if ($('input[name=\"END_TIME_e\"]').length && $('.infoproject .mt_endDatedot').eq(i).html()) {
                $('input[name=\"END_TIME_e\"]').val($('.infoproject .mt_endDatedot').eq(i).html().split('.')[1]);
            }
            if ($('input[name=\"PROJECT_NAME\"]').length && $('.infoproject .mt_projectName').eq(i).html()) {
                $('input[name=\"PROJECT_NAME\"]').val($('.infoproject .mt_projectName').eq(i).html());
            }
	        if ($('input[name=\"JOB_NAME\"]').length && $('.infoproject .mt_positionName').eq(i).html()) {
	            $('input[name=\"JOB_NAME\"]').val($('.infoproject .mt_positionName').eq(i).html());
	        }
	        if ($('textarea[name=\"personal_evaluation\"]').length && $('.infoproject .mt_projectRemark').eq(i).text()) {
	            $('textarea[name=\"personal_evaluation\"]').val($('.infoproject .mt_projectRemark').eq(i).text());
	        }
	        if ($('input[name=\"PROVE_PERSON\"]').length && $('.infoproject .mt_reterenceName').eq(i).html()) {
	            $('input[name=\"PROVE_PERSON\"]').val($('.infoproject .mt_reterenceName').eq(i).html()+$('.infoproject .mt_reterencePhone').eq(i).html());
	        }
        }
    }
}
//家庭
if ($('#personInfo').parent().find('h5').html() == '家庭成员') {
	if ($('input[name=\"NAME\"]').length && $('#mt_fmname').html()) {
        $('input[name=\"NAME\"]').val($('#mt_fmname').html());
    }
    if ($('input[name=\"RELATION\"]').length && $('#mt_fmrelation').html()) {
        $('input[name=\"RELATION\"]').val($('#mt_fmrelation').html());
    }
    if ($('input[name=\"CORP\"]').length && $('#mt_fmwork').html()) {
        $('input[name=\"CORP\"]').val($('#mt_fmwork').html());
    }
    if ($('input[name=\"DUTIES\"]').length && $('#mt_fmposition').html()) {
        $('input[name=\"DUTIES\"]').val($('#mt_fmposition').html());
    }
    if ($('input[name=\"TEL\"]').length && $('#mt_fmphone').html()) {
        $('input[name=\"TEL\"]').val($('#mt_fmphone').html());
    }
}
if ($('#personInfo').parent().find('h5').html() == '其他信息') {
	if ($('#divselect4').length && $('#mt_expectcity').html()) {
        for (var j = 0; j < $('#divselect4 ul li a').length; j++) {
            if ($('#mt_expectcity').html().indexOf($('#divselect4 ul li a').eq(j).html(),0)!=-1) {
                $('#divselect4 ul li a').eq(j).click();
            }
        }
    }
    window.setTimeout(function(){
		if ($('#divselect5').length && $('#mt_expectcity_city').html()) {
	        for (var j = 0; j < $('#divselect5 ul li a').length; j++) {
	            if ($('#mt_expectcity_city').html().indexOf($('#divselect5 ul li a').eq(j).html(),0)!=-1) {
	                $('#divselect5 ul li a').eq(j).click();
	            }
	        }
	    }
	},200);
}