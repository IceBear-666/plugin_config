if (KISSY.one('#jm_qiuck_cover')) {KISSY.one('#jm_qiuck_cover').fadeIn();setTimeout(\"KISSY.one('#jm_qiuck_cover').fadeOut()\",3000);} 

// 应聘信息
if($('#340003963 select').length>0){
	var year=$('#340003963 select').get(0);
	year.options[1].selected=true;
}

// 个人信息
if($('input[name=\"2\"]') && $('#mt_name').html()){
	$('input[name=\"2\"]').val($('#mt_name').html());
}
if($('input[data-index=\"0\"]') && $('#mt_sex').html()=='男'){
	$('input[data-index=\"0\"]').get(0).click();
}
if($('input[data-index=\"1\"]') && $('#mt_sex').html()=='女'){
	$('input[data-index=\"1\"]').get(0).click();
}
if($('input[name=\"21\"]') && $('#mt_birth').html()){
	$('input[name=\"21\"]').val($('#mt_birth').html());
}
if($('#28 select').length>0 && $('#mt_idtype').html()){
	var idtype=$('#28 select').get(0);
	switch($('#mt_idtype').html()){
		case '身份证':idtype.options[1].selected=true;break;
		case '护照':idtype.options[2].selected=true;break;
		case '军官证':idtype.options[3].selected=true;break;
		case '香港永久居民身份证':
		case '香港非永久居民身份证':
		case '澳门永久居民身份证':
		case '澳门非永久居民身份证':idtype.options[4].selected=true;break;
		case '台胞证':idtype.options[5].selected=true;break;
		default:idtype.options[6].selected=true;break;
	}
}
if($('input[name=\"29\"]') && $('#mt_id').html()){
	$('input[name=\"29\"]').val($('#mt_id').html());
}
if($('#27 select').length>0 && $('#mt_hukoucitynow').html()){
	var hkcity=$('#27 select').get(0);
	for(var i=0;i<hkcity.options.length;i++){
		if(hkcity.options[i].text==$('#mt_hukoucitynow').html()){
			hkcity.options[i].selected=true;break;
		}
	}
}
if($('#22 select').length>0 && $('#mt_national').html()){
	var national=$('#22 select').get(0);
	for(var i=0;i<national.options.length;i++){
		if(national.options[i].text==$('#mt_national').html()){
			national.options[i].selected=true;break;
		}
	}
}
if($('input[name=\"36\"]') && $('#mt_tel').html()){
	$('input[name=\"36\"]').val($('#mt_tel').html());
}
if($('input[name=\"37\"]') && $('#mt_email').html()){
	$('input[name=\"37\"]').val($('#mt_email').html());
}
if($('#73180078 select').length>0 && $('#mt_edu').html()){
	var national=$('#73180078 select').get(0);
	switch($('#mt_edu').html()){
		case '初中及以下':national.options[1].selected=true;break;
		case '中专':
		case '技校/职高':
		case '高中':national.options[2].selected=true;break;
		case '大学专科':national.options[3].selected=true;break;
		case '大学本科-一本':case '大学本科-二本':case '大学本科-三本':national.options[4].selected=true;break;
		case '硕士研究生':national.options[5].selected=true;break;
		case '博士研究生':national.options[6].selected=true;break;
	}
}
if($('#26 input') && $('#mt_livecity_city').html()){
	$('#26 input').eq(0).val($('#mt_livecity_city').html());
}
if($('#246 input') && $('#mt_hukoucity_city').html()){
	$('#246 input').eq(0).val($('#mt_hukoucity_city').html());
}
if($('input[name=\"73520830\"]') && $('#mt_add').html()){
	$('input[name=\"73520830\"]').val($('#mt_add').html());
}
if($('input[name=\"39\"]') && $('#mt_zip').html()){
	$('input[name=\"39\"]').val($('#mt_zip').html());
}
if($('input[name=\"339969748\"]') && $('#mt_jjlxr').html()){
	$('input[name=\"339969748\"]').val($('#mt_jjlxr').html());
}
if($('input[name=\"340000417\"]') && $('#mt_jjlxrtel').html()){
	$('input[name=\"340000417\"]').val($('#mt_jjlxrtel').html());
}

//教育经历
var maxid=0;
var maxedutime;
if($('div[data-rid=0]').length==6){
	$edudiv=$('div[data-rid=0]').eq(2);
}else{
	$edudiv=$('div[data-rid=0]').eq(1);
}

for(var i=0;i<$('.infopledu').length;i++){
	if(i>0){
		$edudiv=$edudiv.next('div');
	}
	if($edudiv.length==0){
		break;
	}
	if($('input[name=\"49\"]').eq(i) && $('#edu-list .mt_startYear').eq(i).html()){
		$('input[name=\"49\"]').eq(i).val($('#edu-list .mt_startYear').eq(i).html()+'-1');
	}
	if($('input[name=\"50\"]').eq(i) && $('#edu-list .mt_endYear').eq(i).html()){
		$('input[name=\"50\"]').eq(i).val($('#edu-list .mt_endYear').eq(i).html()+'-1');
	}
	if($('input[name=\"51\"]').eq(i) && $('#edu-list .mt_schoolName').eq(i).html()){
		$('input[name=\"51\"]').eq(i).val($('#edu-list .mt_schoolName').eq(i).html());
	}
	if($('input[name=\"73513768\"]').eq(i) && $('#edu-list .mt_professionalranking').eq(i).html()){
		$('input[name=\"73513768\"]').eq(i).val($('#edu-list .mt_professionalranking').eq(i).html());
	}
	if($('input[name=\"73511016\"]').eq(i) && $('#edu-list .mt_major').eq(i).html()){
		$('input[name=\"73511016\"]').eq(i).val($('#edu-list .mt_major').eq(i).html());
	}
	if($edudiv.length>0 && $edudiv.find('#54 input').eq(0) && $('#edu-list .mt_professional').eq(i).html()){
		$edudiv.find('#54 input').eq(0).val($('#edu-list .mt_professional').eq(i).html());
	}
	if($edudiv.length>0 && $edudiv.find('#53 select').length>0 && $('#edu-list .mt_education').eq(i).html()){
		var edu=$edudiv.find('#53 select').get(0);
		switch($('#edu-list .mt_education').eq(i).html()){
			case '初中及以下':edu.options[1].selected=true;break;
			case '中专':
			case '技校/职高':
			case '高中':edu.options[2].selected=true;break;
			case '大学专科':edu.options[3].selected=true;break;
			case '大学本科-一本':
			case '大学本科-二本':
			case '大学本科-三本':edu.options[4].selected=true;break;
			case '硕士研究生':edu.options[5].selected=true;break;
			case '博士研究生':edu.options[6].selected=true;break;
		}
	}
	if($edudiv.length>0 && $edudiv.find('#248 select').length>0 && $('#edu-list .mt_degree').eq(i).html()){
		var deg=$edudiv.find('#248 select').get(0);
		switch($('#edu-list .mt_degree').eq(i).html()){
			case '学士':deg.options[1].selected=true;break;
			case '硕士':deg.options[2].selected=true;break;
			case '博士':deg.options[3].selected=true;break;
			default:deg.options[4].selected=true;break;
		}
	}

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
if($('input[name=\"32\"]') && $('#edu-list .mt_schoolName').eq(maxid).html()){
	$('input[name=\"32\"]').val($('#edu-list .mt_schoolName').eq(maxid).html());
}
if($('input[name=\"31\"]') && $('#edu-list .mt_endYear').eq(maxid).html()){
	$('input[name=\"31\"]').val($('#edu-list .mt_endYear').eq(maxid).html()+'-1');
}

// 实习经历
if($('textarea[name=\"340064697\"]').length>0 && $('.infoparttimejobs .mt_workList').eq(0).html()){
	$('textarea[name=\"340064697\"]').val($('.infoparttimejobs .mt_workList').eq(0).html());
}
//项目经验
if($('textarea[name=\"340065258\"]').length>0 && $('.infoproject .mt_proList').eq(0).html()){
	$('textarea[name=\"340065258\"]').val($('.infoproject .mt_proList').eq(0).html());
}
// 获奖描述
if($('textarea[name=\"340066273\"]').length>0 && $('.infoschaward .mt_schawradList').eq(0).html()){
	$('textarea[name=\"340066273\"]').val($('.infoschaward .mt_schawradList').eq(0).html());
}
// 项目经历
for(var i=0;i<$('.infoproject').length;i++){
	if($('input[name=\"208\"]').eq(i) && $('#pro-list .mt_projectName').eq(i).html()){
		$('input[name=\"208\"]').eq(i).val($('#pro-list .mt_projectName').eq(i).html());
	}
	if($('input[name=\"206\"]').eq(i) && $('#pro-list .mt_prostartdate').eq(i).html()){
		$('input[name=\"206\"]').eq(i).val($('#pro-list .mt_prostartdate').eq(i).html()+'-01');
	}
	if($('input[name=\"207\"]').eq(i) && $('#pro-list .mt_proenddate').eq(i).html()){
		$('input[name=\"207\"]').eq(i).val($('#pro-list .mt_proenddate').eq(i).html()+'-01');
	}
	if($('input[name=\"73513562\"]').eq(i) && $('#pro-list .mt_positionName').eq(i).html()){
		$('input[name=\"73513562\"]').eq(i).val($('#pro-list .mt_positionName').eq(i).html());
	}
	if($('textarea[name=\"209\"]').eq(i) && $('#pro-list .mt_projectRemark').eq(i).html()){
		$('textarea[name=\"209\"]').eq(i).val($('#pro-list .mt_projectRemark').eq(i).html());
	}
}

//其他外语
var level=0;
var maxlevel=0;
if($('.infoEnglishSkill').length){
	$('#66 select').get(0).options[1].selected=true;
	for(var i=0;i<$('.infoEnglishSkill').length;i++){
		switch($('.infoEnglishSkill .mt_skillEngLevel').eq(i).html()){
			case '大学英语四级':level=1;
			case '大学英语六级':level=2;
			case '专业四级':level=3;
			case '专业八级':level=6;
		}
		if(level>maxlevel){
			maxlevel=level;
		}
	}
}
for(var i=0;i<$('.infoOtEnglishSkill').length;i++){
	if($('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html()=='雅思'){
		level=4;
	}
	if($('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html()=='托福'){
		level=5;
	}
	if(level>maxlevel){
		maxlevel=level;
	}
}
if(maxlevel==6 && $('#340069221 input')){
	$('#340069221 input').val('专业八级');
}
if(maxlevel==5 && $('#340069221 input')){
	$('#340069221 input').val('托福');
}
if(maxlevel==4 && $('#340069221 input')){
	$('#340069221 input').val('雅思');
}
if(maxlevel==3 && $('#340069221 input')){
	$('#340069221 input').val('专业四级');
}
if(maxlevel==2 && $('#340069221 input')){
	$('#340069221 input').val('大学英语六级');
}
if(maxlevel==1 && $('#340069221 input')){
	$('#340069221 input').val('大学英语四级');
}
