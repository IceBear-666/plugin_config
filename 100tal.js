if (KISSY.one('#jm_qiuck_cover')) {KISSY.one('#jm_qiuck_cover').fadeIn();setTimeout(\"KISSY.one('#jm_qiuck_cover').fadeOut()\",3000);} 

//个人信息
if($('#4c037148-140a-4c2b-b87a-b97609215d7011') && $('#mt_name').html()){
	$('#4c037148-140a-4c2b-b87a-b97609215d7011').val($('#mt_name').html());
}
if($('#67a5c587-4f90-4ae7-819f-eb3dba9ea39911') && $('#mt_email').html()){
	$('#67a5c587-4f90-4ae7-819f-eb3dba9ea39911').val($('#mt_email').html());
}
if($('#acb9b67f-9643-41fb-a7fe-5ff8d742ccdf11') && $('#mt_tel').html()){
	$('#acb9b67f-9643-41fb-a7fe-5ff8d742ccdf11').val($('#mt_tel').html());
}
if($('#436ab7a4-67a1-4819-a238-d5d34eb0717611') && $('#mt_birth').html())
{
	var birstr=$('#mt_birth').html();
	var birary=birstr.split('-');
	birstr=birary.join('/');
	$('#436ab7a4-67a1-4819-a238-d5d34eb0717611').val(birstr);
}
if($('input[name=\"RecruitmentPortalPersonProfile_gender\"]') && $('#mt_sex').html()){
	if($('#mt_sex').html()=='男'){
		$('input[name=\"RecruitmentPortalPersonProfile_gender\"]').eq(0).trigger('click');
	}else{
		$('input[name=\"RecruitmentPortalPersonProfile_gender\"]').eq(1).trigger('click');
	}
}
if($('input[displayname=\"现居住地\"]') && $('#mt_livecity_city').html()){
	$('input[displayname=\"现居住地\"]').val($('#mt_livecity_city').html()+'市');
}
if($('input[displayname=\"户口所在地\"]') && $('#mt_hukoucitynow_city').html()){
	$('input[displayname=\"户口所在地\"]').val($('#mt_hukoucitynow_city').html()+'市');
}
if($('#RecruitmentPortalPersonProfile_EducationLevel') && $('#mt_edu').html()){
	var edu=document.getElementById('RecruitmentPortalPersonProfile_EducationLevel');
	switch($('#mt_edu').html()){
		case '高中':
		case '初中及以下':edu.options[1].selected=true;break;
		case '中专':
		case '技校/职高':edu.options[2].selected=true;break;
		case '大学专科':edu.options[3].selected=true;break;
		case '大学本科-一本':
		case '大学本科-二本':
		case '大学本科-三本':edu.options[4].selected=true;break;
		case '硕士研究生':edu.options[5].selected=true;break;
		case 'MBA':edu.options[6].selected=true;break;
		case '博士研究生':edu.options[7].selected=true;break;
	}
}
if($('#RecruitmentPortalPersonProfile_EducationStudyMode') && $('#mt_edutype').html()){
	var type=document.getElementById('RecruitmentPortalPersonProfile_EducationStudyMode');
	switch($('#mt_edutype').html()){
		case '全日制统分统招':type.options[1].selected=true;break;
		case '成人教育':type.options[2].selected=true;break;
		case '自费':type.options[4].selected=true;break;
		default:type.options[5].selected=true;break;
	}
}
if($('#RecruitmentPortalPersonProfile_Nation') && $('#mt_nation').html()){
	var nat=document.getElementById('RecruitmentPortalPersonProfile_Nation');
	var flg=true;
	for(var i=0;i<nat.options.length;i++){
		if(nat.options[i].text==$('#mt_nation').html()){
			nat.options[i].selected=true;flg=false;break;
		}
	}
	if(flg){
		nat.options[57].selected=true;
	}
} 
if($('textarea[name=\"RecruitmentPortalPersonProfile_evaluation\"]') && $('#mt_selfIntro').html()){
	$('textarea[name=\"RecruitmentPortalPersonProfile_evaluation\"]').val($('#mt_selfIntro').html());
}

//教育背景
for(var i=0;i<$('.infopledu').length;i++){
	var sy;var sm;var ey;var em;var y;var m;
	if($('input[name=\"RecruitmentPortalEducation_SchoolName\"]').eq(i+1).length){
		$('input[name=\"RecruitmentPortalEducation_SchoolName\"]').eq(i+1).val($('.infopledu .mt_schoolName').html());
	}
	if($('select[name=\"RecruitmentPortalEducation_StartDate_Year\"]').eq(i+1).length && $('.infopledu .mt_startYearY').eq(i).html()){
		sy=$('select[name=\"RecruitmentPortalEducation_StartDate_Year\"]').eq(i+1).get(0);
		y=2016-parseInt($('.infopledu .mt_startYearY').eq(i).html());
		sy.options[47-y].selected=true;
	}
	if($('select[name=\"RecruitmentPortalEducation_EndDate_Year\"]').eq(i+1).length && $('.infopledu .mt_endYearY').eq(i).html()){
		ey=$('select[name=\"RecruitmentPortalEducation_EndDate_Year\"]').eq(i+1).get(0);
		y=2016-parseInt($('.infopledu .mt_endYearY').eq(i).html());
		ey.options[47-y].selected=true;
	}
	if($('select[name=\"RecruitmentPortalEducation_StartDate_Month\"]').eq(i+1).length && $('.infopledu .mt_startYearM').eq(i).html()){
		sm=$('select[name=\"RecruitmentPortalEducation_StartDate_Month\"]').eq(i+1).get(0);
		m=parseInt($('.infopledu .mt_startYearM').eq(i).html());
		sm.options[m].selected=true;
	}
	if($('select[name=\"RecruitmentPortalEducation_EndDate_Month\"]').eq(i+1).length && $('.infopledu .mt_endYearM').eq(i).html()){
		sm=$('select[name=\"RecruitmentPortalEducation_EndDate_Month\"]').eq(i+1).get(0);
		m=parseInt($('.infopledu .mt_endYearM').eq(i).html());
		sm.options[m].selected=true;
	}
	if($('select[name=\"RecruitmentPortalEducation_EducationLevel\"]').eq(i+1).length && $('.infopledu .mt_education').eq(i).html()){
		var edu=$('select[name=\"RecruitmentPortalEducation_EducationLevel\"]').eq(i+1).get(0);
		switch($('.infopledu .mt_education').eq(i).html()){
			case '高中':
			case '初中及以下':edu.options[1].selected=true;break;
			case '中专':
			case '技校/职高':edu.options[2].selected=true;break;
			case '大学专科':edu.options[3].selected=true;break;
			case '大学本科-一本':
			case '大学本科-二本':
			case '大学本科-三本':edu.options[4].selected=true;break;
			case '硕士研究生':edu.options[5].selected=true;break;
			case 'MBA':edu.options[6].selected=true;break;
			case '博士研究生':edu.options[7].selected=true;break;
		}
	}
	if($('select[name=\"RecruitmentPortalEducation_Degree\"]').eq(i+1).length && $('.infopledu .mt_degree').eq(i).html()){
		var deg=$('select[name=\"RecruitmentPortalEducation_Degree\"]').eq(i+1).get(0);
		for(var j=1;j<deg.options.length;j++){
			if(deg.options[j].text==$('.infopledu .mt_degree').eq(i).html()){
				deg.options[j].selected=true;break;
			}
		}
	}
	if($('input[name=\"RecruitmentPortalEducation_MajorName\"]').eq(i+1).length && $('.infopledu .mt_professional').eq(i).html()){
		$('input[name=\"RecruitmentPortalEducation_MajorName\"]').eq(i+1).val($('.infopledu .mt_professional').eq(i).html());
	}
}

//工作经历
for(var i=0;i<$('.infofulltimejobs').length;i++)
{
	var sy;var sm;var ey;var em;var y;var m;
	if($('input[name=\"RecruitmentPortalExperience_CompanyName\"]').eq(i+1).length){
		$('input[name=\"RecruitmentPortalExperience_CompanyName\"]').eq(i+1).val($('.infofulltimejobs .mt_companyName').html());
	}
	if($('select[name=\"RecruitmentPortalExperience_StartDate_Year\"]').eq(i+1).length && $('.infofulltimejobs .mt_startDate').eq(i).html()){
		sy=$('select[name=\"RecruitmentPortalExperience_StartDate_Year\"]').eq(i+1).get(0);
		sm=$('select[name=\"RecruitmentPortalExperience_StartDate_Month\"]').eq(i+1).get(0);
		var sd=$('.infofulltimejobs .mt_startDate').eq(i).html().split('-');
		y=2016-parseInt(sd[0]);
		m=parseInt(sd[1]);
		sy.options[47-y].selected=true;
		sm.options[m].selected=true;
	}
	if($('select[name=\"RecruitmentPortalExperience_EndDate_Year\"]').eq(i+1).length && $('.infofulltimejobs .mt_endDate').eq(i).html()){
		sy=$('select[name=\"RecruitmentPortalExperience_EndDate_Year\"]').eq(i+1).get(0);
		sm=$('select[name=\"RecruitmentPortalExperience_EndDate_Month\"]').eq(i+1).get(0);
		var sd=$('.infofulltimejobs .mt_endDate').eq(i).html().split('-');
		y=2016-parseInt(sd[0]);
		m=parseInt(sd[1]);
		sy.options[47-y].selected=true;
		sm.options[m].selected=true;
	}
	if($('input[name=\"RecruitmentPortalExperience_JobTitle\"]').eq(i+1).length && $('.infofulltimejobs .mt_positionName').eq(i).html())
	{
		$('input[name=\"RecruitmentPortalExperience_JobTitle\"]').eq(i+1).val($('.infofulltimejobs .mt_positionName').eq(i).html());
	}
	if($('textarea[name=\"RecruitmentPortalExperience_JobDuty\"]').eq(i+1).length && $('.infofulltimejobs .mt_workContent').eq(i).text())
	{
		$('textarea[name=\"RecruitmentPortalExperience_JobDuty\"]').eq(i+1).val($('.infofulltimejobs .mt_workContent').eq(i).text());
	}
	if($('input[name=\"RecruitmentPortalExperience_department\"]').eq(i+1).length && $('.infofulltimejobs .mt_department').eq(i).html())
	{
		$('input[name=\"RecruitmentPortalExperience_department\"]').eq(i+1).val($('.infofulltimejobs .mt_department').eq(i).html());
	}
}

//语言能力
for(var i=0;i<$('.infoOtherSkill').length;i++){
	if($('select[name=\"RecruitmentPortalLang_LanguageType\"]').eq(i+1).length && $('.infoOtherSkill .mt_skillOtherLang').eq(i).html()){
		var skill=$('select[name=\"RecruitmentPortalLang_LanguageType\"]').eq(i+1).get(0);
		for(var j=0;j<skill.options.length;j++){
			if(skill.options[j].text==$('.infoOtherSkill .mt_skillOtherLang').eq(i).html()){
				skill.options[j].selected=true;break;
			}
		}
	}
	if($('select[name=\"RecruitmentPortalLang_LanguageLevel\"]').eq(i+1).length && $('.infoOtherSkill .mt_skillGraspLevel').eq(i).html()){
		var level=$('select[name=\"RecruitmentPortalLang_LanguageLevel\"]').eq(i+1).get(0);
		switch($('.infoOtherSkill .mt_skillGraspLevel').eq(i).html()){
			case '一般':level.options[1].selected=true;break;
			case '熟练':level.options[2].selected=true;break;
			case '精通':level.options[3].selected=true;break;
		}
	}
}