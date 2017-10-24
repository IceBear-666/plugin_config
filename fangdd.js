if ($('#jm_qiuck_cover')) {$('#jm_qiuck_cover').fadeIn();setTimeout(function(){$('#jm_qiuck_cover').fadeOut()},1000)}
//信息
var ev = document.createEvent('HTMLEvents');
ev.initEvent('change', true, false);
if ($('.resume-base-c .resume-form ul li').eq(0).find('input').length){
	$('.resume-base-c .resume-form ul li').eq(0).find('input').val($('#mt_name').html()); 
	$('.resume-base-c .resume-form ul li').eq(0).find('input').get(0).dispatchEvent(ev);
} 
if ($('#mt_sex').html() && $('.resume-base-c .resume-form ul li').eq(1).find('li') && $('#mt_sex').html() == '男') {
	$('.resume-base-c .resume-form ul li').eq(1).find('i').eq(0).click()
}
if ($('#mt_sex').html() && $('.resume-base-c .resume-form ul li').eq(1).find('li') && $('#mt_sex').html() == '女') {
	$('.resume-base-c .resume-form ul li').eq(1).find('i').eq(1).click()
}

if ($('#mt_idtype').html() && $('.resume-base-c .resume-form ul li').eq(2).find('li')) {
	if ($('#mt_idtype').html() == '身份证') {
		$('.resume-base-c .resume-form ul li').eq(2).find('li').eq(0).click();
		$('.resume-base-c .resume-form ul li').eq(2).find('li').eq(0).click();
	}
	else if ($('#mt_idtype').html() == '护照') {
		$('.resume-base-c .resume-form ul li').eq(2).find('li').eq(1).click();
		$('.resume-base-c .resume-form ul li').eq(2).find('li').eq(1).click();
	}
	else if ($('#mt_idtype').html() == '台胞证') {
		$('.resume-base-c .resume-form ul li').eq(2).find('li').eq(2).click();
		$('.resume-base-c .resume-form ul li').eq(2).find('li').eq(2).click();
	}
	else if ($('#mt_idtype').html() == '军官证') {
		$('.resume-base-c .resume-form ul li').eq(2).find('li').eq(3).click();
		$('.resume-base-c .resume-form ul li').eq(2).find('li').eq(3).click();
	}
	else if ($('#mt_idtype').html() == '香港永久居民身份证' || $('#mt_idtype').html() == '香港非永久居民身份证' || $('#mt_idtype').html() == '澳门非永久居民身份证' || $('#mt_idtype').html() == '澳门永久居民身份证') {
		$('.resume-base-c .resume-form ul li').eq(2).find('li').eq(5).click();
		$('.resume-base-c .resume-form ul li').eq(2).find('li').eq(5).click();
	}	
}
if ($('.resume-base-c .resume-form ul li').eq(9).find('input') && $('#mt_id').html()) {
	$('.resume-base-c .resume-form ul li').eq(9).find('input').val($('#mt_id').html());
	$('.resume-base-c .resume-form ul li').eq(9).find('input').get(0).dispatchEvent(ev);
}
if ($('.resume-base-c .resume-form ul li').eq(10).find('input') && $('#mt_tel')) {
	$('.resume-base-c .resume-form ul li').eq(10).find('input').val($('#mt_tel').html());
	$('.resume-base-c .resume-form ul li').eq(10).find('input').get(0).dispatchEvent(ev);
}
if ($('.resume-base-c .resume-form ul li').eq(11).find('input') && $('#mt_email').html()) {
	$('.resume-base-c .resume-form ul li').eq(11).find('input').val($('#mt_email').html());
	$('.resume-base-c .resume-form ul li').eq(11).find('input').get(0).dispatchEvent(ev);
}
// 教育 
for (var i = 0; i <$('.infopledu').length; i++) {
	if ($('.resume-edu .resume-form').eq(i).find('ul li').eq(0).find('input').length && $('.infopledu .mt_schoolName').eq(i).html()){
		$('.resume-edu .resume-form').eq(i).find('ul li').eq(0).find('input').val($('.infopledu .mt_schoolName').eq(i).html()); 
		$('.resume-edu .resume-form').eq(i).find('ul li').eq(0).find('input').get(0).dispatchEvent(ev);
	} 
	if ($('.resume-edu .resume-form').eq(i).find('ul li').eq(1).find('ul li').length && $('.resume-edu .resume-form').eq(i).find('ul li').eq(1).find('span').eq(0).html() == '学&nbsp;&nbsp;历' && $('.infopledu .mt_education').eq(i).html()) {
		if ($('.infopledu .mt_education').eq(i).html() == '大学本科-一本' || $('.infopledu .mt_education').eq(i).html() == '大学本科-二本' || $('.infopledu .mt_education').eq(i).html() == '大学本科-三本' || $('.infopledu .mt_education').eq(i).html() == '海外本科') {
			$('.resume-edu .resume-form').eq(i).find('ul li').eq(1).find('ul li').eq(0).click();
			$('.resume-edu .resume-form').eq(i).find('ul li').eq(1).find('ul li').eq(0).click();
		}
		else if ($('.infopledu .mt_education').eq(i).html() == '硕士研究生') {
			$('.resume-edu .resume-form').eq(i).find('ul li').eq(1).find('ul li').eq(1).click();
			$('.resume-edu .resume-form').eq(i).find('ul li').eq(1).find('ul li').eq(1).click();
		} 
		else if ($('.infopledu .mt_education').eq(i).html() == '博士研究生') {
			$('.resume-edu .resume-form').eq(i).find('ul li').eq(1).find('ul li').eq(2).click();
			$('.resume-edu .resume-form').eq(i).find('ul li').eq(1).find('ul li').eq(2).click();
		}
		else if ($('.infopledu .mt_education').eq(i).html() == '大学专科') {
			$('.resume-edu .resume-form').eq(i).find('ul li').eq(1).find('ul li').eq(4).click();
			$('.resume-edu .resume-form').eq(i).find('ul li').eq(1).find('ul li').eq(4).click();
		}
	}
	if ($('.resume-edu .resume-form').eq(i).find('ul li').eq(11).find('input').length && $('.infopledu .mt_academy').eq(i).html()){
		$('.resume-edu .resume-form').eq(i).find('ul li').eq(11).find('input').val($('.infopledu .mt_academy').eq(i).html());
		$('.resume-edu .resume-form').eq(i).find('ul li').eq(11).find('input').get(0).dispatchEvent(ev); 
	}
	if ($('.resume-edu .resume-form').eq(i).find('ul li').eq(12).find('input').length && $('.infopledu .mt_professional').eq(i).html()){
		$('.resume-edu .resume-form').eq(i).find('ul li').eq(12).find('input').val($('.infopledu .mt_professional').eq(i).html()); 
		$('.resume-edu .resume-form').eq(i).find('ul li').eq(12).find('input').get(0).dispatchEvent(ev); 
	}
	if ($('.resume-edu .resume-form').eq(i).find('ul li').eq(13).find('ul li').length && $('.resume-edu .resume-form').eq(0).find('ul li').eq(13).find('span').eq(0).html() == '成&nbsp;&nbsp;绩' && $('.infopledu .mt_professionalranking').eq(i).html()) {
		if ($('.infopledu .mt_professionalranking').eq(i).html() == '前5%' || $('.infopledu .mt_professionalranking').eq(i).html() == '前10%') {
			$('.resume-edu .resume-form').eq(i).find('ul li').eq(13).find('ul li').eq(0).click();
			$('.resume-edu .resume-form').eq(i).find('ul li').eq(13).find('ul li').eq(0).click();
		}
		else if ($('.infopledu .mt_professionalranking').eq(i).html() == '前20%' || $('.infopledu .mt_professionalranking').eq(i).html() == '前30') {
			$('.resume-edu .resume-form').eq(i).find('ul li').eq(13).find('ul li').eq(1).click();
			$('.resume-edu .resume-form').eq(i).find('ul li').eq(13).find('ul li').eq(1).click();
		}
		else if ($('.infopledu .mt_professionalranking').eq(i).html() == '前40%' || $('.infopledu .mt_professionalranking').eq(i).html() == '前50%') {
			$('.resume-edu .resume-form').eq(i).find('ul li').eq(13).find('ul li').eq(2).click();
			$('.resume-edu .resume-form').eq(i).find('ul li').eq(13).find('ul li').eq(2).click();
		}
		else {
			$('.resume-edu .resume-form').eq(i).find('ul li').eq(13).find('ul li').eq(3).click();
			$('.resume-edu .resume-form').eq(i).find('ul li').eq(13).find('ul li').eq(3).click();
		}
	}
}
//语言能力
for (var i = 0; i <$('.infoOtEnglishSkill').length; i++) {
	if ($('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(0).find('ul li').length && $('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(0).find('ul li span').eq(0).text() == '*英语等级' && $('.infoEnglishSkill .mt_skillEngLevel').html()) {
		if ($('.infoEnglishSkill .mt_skillEngLevel').html() == '大学英语四级') {
			$('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(0).find('ul li').eq(1).click();
			$('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(0).find('ul li').eq(1).click();
		}
		else if ($('.infoEnglishSkill .mt_skillEngLevel').html() == '大学英语六级') {
			$('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(0).find('ul li').eq(2).click();
			$('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(0).find('ul li').eq(2).click();
		}
		else if ($('.infoEnglishSkill .mt_skillEngLevel').html() == '专业四级') {
			$('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(0).find('ul li').eq(3).click();
			$('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(0).find('ul li').eq(3).click();
		}
		else if ($('.infoEnglishSkill .mt_skillEngLevel').html() == '专业八级') {
			$('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(0).find('ul li').eq(4).click();
			$('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(0).find('ul li').eq(4).click();
		}
		if ($('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(0).find('ul li').eq(7).find('input').length) {
			$('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(0).find('ul li').eq(7).find('input').val($('.infoEnglishSkill .mt_skillEngSorce').html());
			$('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(0).find('ul li').eq(7).find('input').get(0).dispatchEvent(ev); 
		}
		if ($('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(0).find('ul li').eq(8).find('input').length && $('.infoOtEnglishSkill .mt_otherSkillEngLevel').html() == '托福') {
			$('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(0).find('ul li').eq(8).find('input').val($('.infoOtEnglishSkill .mt_otherSkillEngSorce').html());
			$('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(0).find('ul li').eq(8).find('input').get(0).dispatchEvent(ev); 
		}
		else if ($('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(0).find('ul li').eq(9).find('input').length && $('.infoOtEnglishSkill .mt_otherSkillEngLevel').html() == 'GRE') {
			$('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(0).find('ul li').eq(9).find('input').val($('.infoOtEnglishSkill .mt_otherSkillEngSorce').html());
			$('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(0).find('ul li').eq(9).find('input').get(0).dispatchEvent(ev); 
		}
		if ($('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(i+1).length && $('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(0+1).find('ul li span').eq(0).html() == '语种' && $('.infoOtherSkill .mt_skillOtherLang').eq(i).html()) {
			if ($('.infoOtherSkill .mt_skillOtherLang').eq(i).html() == '日语') {
				$('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(i+1).find('ul li').eq(1).click();
				$('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(i+1).find('ul li').eq(1).click();
			}
			else if ($('.infoOtherSkill .mt_skillOtherLang').eq(i).html() == '法语') {
				$('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(i+1).find('ul li').eq(2).click();
				$('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(i+1).find('ul li').eq(2).click();
			}
			else if ($('.infoOtherSkill .mt_skillOtherLang').eq(i).html() == '韩语') {
				$('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(i+1).find('ul li').eq(3).click();
				$('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(i+1).find('ul li').eq(3).click();
			}
			else if ($('.infoOtherSkill .mt_skillOtherLang').eq(i).html() == '俄语') {
				$('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(i+1).find('ul li').eq(4).click();
				$('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(i+1).find('ul li').eq(4).click();
			}
			else if ($('.infoOtherSkill .mt_skillOtherLang').eq(i).html() == '德语') {
				$('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(i+1).find('ul li').eq(5).click();
				$('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(i+1).find('ul li').eq(5).click();
			}
			else if ($('.infoOtherSkill .mt_skillOtherLang').eq(i).html() == '西班牙语') {
				$('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(i+1).find('ul li').eq(6).click();
				$('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(i+1).find('ul li').eq(6).click();
			}
		}
		if ($('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(0+1).length && $('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(0+1).find('ul li span').eq(3).html() == '熟练程度' && $('.infoOtherSkill .mt_skillGraspLevel').eq(i).html()) {
			if ($('.infoOtherSkill .mt_skillGraspLevel').eq(i).html() == '了解') {
				$('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(i+1).find('ul li').eq(8).click();
				$('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(i+1).find('ul li').eq(8).click();
			}
			else if ($('.infoOtherSkill .mt_skillGraspLevel').eq(i).html() == '一般') {
				$('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(i+1).find('ul li').eq(9).click();
				$('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(i+1).find('ul li').eq(9).click();
			}
			else if ($('.infoOtherSkill .mt_skillGraspLevel').eq(i).html() == '熟练') {
				$('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(i+1).find('ul li').eq(10).click();
				$('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(i+1).find('ul li').eq(10).click();
			}
			else if ($('.infoOtherSkill .mt_skillGraspLevel').eq(i).html() == '精通') {
				$('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(i+1).find('ul li').eq(11).click();
				$('.resume-edu .form-hd').eq(1).nextAll('.resume-form').eq(i+1).find('ul li').eq(11).click();
			}
		}
	}
}
//获奖
for (var i = 0; i <$('.infoschaward').length; i++) {
	if ($('.resume-edu .form-hd').eq(3).nextAll('.resume-form').eq(i).length && $('.resume-edu .form-hd').eq(3).nextAll('.resume-form').eq(i).find('ul li span').eq(0).html() == '大赛名称' && $('.infoschaward .mt_awardsName').eq(i).html()){
		$('.resume-edu .form-hd').eq(3).nextAll('.resume-form').eq(i).find('ul li input').eq(0).val($('.infoschaward .mt_awardsName').eq(i).html());
		$('.resume-edu .form-hd').eq(3).nextAll('.resume-form').eq(i).find('ul li input').eq(0).get(0).dispatchEvent(ev);
	}
	if ($('.resume-edu .form-hd').eq(3).nextAll('.resume-form').eq(i).length && $('.resume-edu .form-hd').eq(3).nextAll('.resume-form').eq(i).find('ul li span').eq(2).html() == '大赛级别' && $('.infoschaward .mt_awardsType').eq(i).html()){
		if ($('.infoschaward .mt_awardsType').eq(i).html() == '国际级') {
			$('.resume-edu .form-hd').eq(3).nextAll('.resume-form').eq(0).find('ul li').eq(2).click();
			$('.resume-edu .form-hd').eq(3).nextAll('.resume-form').eq(0).find('ul li').eq(2).click();
		}
		else if ($('.infoschaward .mt_awardsType').eq(i).html() == '国家级') {
			$('.resume-edu .form-hd').eq(3).nextAll('.resume-form').eq(0).find('ul li').eq(3).click();
			$('.resume-edu .form-hd').eq(3).nextAll('.resume-form').eq(0).find('ul li').eq(3).click();
		}
		else if ($('.infoschaward .mt_awardsType').eq(i).html() == '省市级') {
			$('.resume-edu .form-hd').eq(3).nextAll('.resume-form').eq(0).find('ul li').eq(4).click();
			$('.resume-edu .form-hd').eq(3).nextAll('.resume-form').eq(0).find('ul li').eq(4).click();
		}
		else if ($('.infoschaward .mt_awardsType').eq(i).html() == '学校级' || $('.infoschaward .mt_awardsType').eq(i).html() == '院系级') {
			$('.resume-edu .form-hd').eq(3).nextAll('.resume-form').eq(0).find('ul li').eq(6).click();
			$('.resume-edu .form-hd').eq(3).nextAll('.resume-form').eq(0).find('ul li').eq(6).click();
		}
	}
	if ($('.resume-edu .form-hd').eq(3).nextAll('.resume-form').eq(i).length && $('.resume-edu .form-hd').eq(3).nextAll('.resume-form').eq(0).find('ul li span').eq(5).html() == '成&nbsp;&nbsp;绩' && ($('.infoschaward .mt_awardsLevel').eq(i).html() == '一等奖' || $('.infoschaward .mt_awardsLevel').eq(i).html() == '二等奖' || $('.infoschaward .mt_awardsLevel').eq(i).html() == '三等奖')){
		$('.resume-edu .form-hd').eq(3).nextAll('.resume-form').eq(0).find('ul li').eq(8).click();
		$('.resume-edu .form-hd').eq(3).nextAll('.resume-form').eq(0).find('ul li').eq(8).click();
	}
	if ($('.resume-edu .form-hd').eq(3).nextAll('.resume-form').eq(i).length && $('.resume-edu .form-hd').eq(3).nextAll('.resume-form').eq(i).find('ul li span').eq(8).html() == '职位描述' && $('.infoschaward .mt_awardsDes').eq(i).html()){
		$('.resume-edu .form-hd').eq(3).nextAll('.resume-form').eq(i).find('ul li textarea').eq(0).val($('.infoschaward .mt_awardsDes').eq(i).html());
		$('.resume-edu .form-hd').eq(3).nextAll('.resume-form').eq(i).find('ul li textarea').eq(0).get(0).dispatchEvent(ev);
	} 
}
//实习
for (var i = 0; i <$('.infoparttimejobs').length; i++) {
	var ev = document.createEvent('HTMLEvents');
    ev.initEvent('change', true, false);
	if ($('.resume-edu .form-hd').eq(2).nextAll('.resume-form').eq(i).length && $('.resume-edu .form-hd').eq(2).nextAll('.resume-form').eq(i).find('ul li span').eq(0).html() == '工作单位' && $('.infoparttimejobs .mt_companyName').eq(i).html()){
		$('.resume-edu .form-hd').eq(2).nextAll('.resume-form').eq(i).find('ul li input').eq(0).val($('.infoparttimejobs .mt_companyName').eq(i).html());
		$('.resume-edu .form-hd').eq(2).nextAll('.resume-form').eq(i).find('ul li input').eq(0).get(0).dispatchEvent(ev); 
	}
	if ($('.resume-edu .form-hd').eq(2).nextAll('.resume-form').eq(i).length && $('.resume-edu .form-hd').eq(2).nextAll('.resume-form').eq(0).find('ul li span').eq(2).html() == '职&nbsp;&nbsp;位' && $('.infoparttimejobs .mt_positionName').eq(i).html()){
		$('.resume-edu .form-hd').eq(2).nextAll('.resume-form').eq(i).find('ul li input').eq(1).val($('.infoparttimejobs .mt_positionName').eq(i).html());
		$('.resume-edu .form-hd').eq(2).nextAll('.resume-form').eq(i).find('ul li input').eq(1).get(0).dispatchEvent(ev); 
	}
	if ($('.resume-edu .form-hd').eq(2).nextAll('.resume-form').eq(i).length && $('.resume-edu .form-hd').eq(2).nextAll('.resume-form').eq(0).find('ul li span').eq(20).html() == '职位描述' && $('.infoparttimejobs .workDes').eq(i).html()){
		$('.resume-edu .form-hd').eq(2).nextAll('.resume-form').eq(i).find('ul li textarea').eq(0).val($('.infoparttimejobs .workDes').eq(i).html());
		$('.resume-edu .form-hd').eq(2).nextAll('.resume-form').eq(i).find('ul li textarea').eq(0).get(0).dispatchEvent(ev); 
	}
}




