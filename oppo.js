if ($('#jm_qiuck_cover')) {
	$('#jm_qiuck_cover').fadeIn();
	setTimeout(function() {
		$('#jm_qiuck_cover').fadeOut()
	}, 1000)
}
var ev = document.createEvent('HTMLEvents');
    ev.initEvent('change', true, false);
if ($('input[name=\"11_2_1\"]')) {
	$('input[name=\"11_2_1\"]').val($('#mt_name').html());
}
if ($('input[name=\"11_38_1\"]')) {
	$('input[name=\"11_38_1\"]').val($('#mt_add').html());
}
if ($('input[name=\"11_100_1\"]')) {
	$('input[name=\"11_100_1\"]').val($('#mt_id').html());
}
if ($('input[name=\"11_20_1\"]') && $('#mt_sex').html() == '男') {
	$('input[name=\"11_20_1\"]').eq(0).click();
}
if ($('#11_20_1') && $('#mt_sex').html() == '女') {
	$('input[name=\"11_20_1\"]').eq(1).click();
}
if ($('#11_24_1').length && $('#mt_maritalstatus').html()) {
	var mar = $('#11_24_1')[0];
	if ($('#mt_maritalstatus').html() == '未婚') {
		mar.options[1].selected = true
	} else if ($('#mt_maritalstatus').html() == '已婚') {
		mar.options[2].selected = true
	} else if ($('#mt_maritalstatus').html() == '离婚') {
		mar.options[3].selected = true
	} else {
		mar.options[4].selected = true
	}
}
if ($('#11_23_1').length && $('#mt_nation').html()) {
	var nat = document.getElementById('11_23_1');
	var flg = true;
	for (var i = 0; i < nat.options.length; i++) {
		if (nat.options[i].text == $('#mt_nation').html()) {
			nat.options[i].selected = true;
			flg = false;
			break
		}
	}
	if (flg) {
		nat.options[57].selected = true
	}
}
if ($('select[name=\"11_25_1\"]').length && $('#mt_polistatus').html()) {
	var plo = $('select[name=\"11_25_1\"]').get(0);
	switch ($('#mt_polistatus').html()) {
	case '中共党员':
	case '中共预备党员':
		plo.options[1].selected = true;
		break;
	case '无党派民主人士':
		plo.options[3].selected = true;
		break;
	case '群众':
		plo.options[4].selected = true;
		break;
	default:
		plo.options[3].selected = true;
		break;
	}
}
if ($('input[name=\"11_21_1\"]')) {
	$('input[name=\"11_21_1\"]').val($('#mt_birth').html());
}
if ($('input[name=\"11_36_1\"]')) {
	$('input[name=\"11_36_1\"]').val($('#mt_tel').html());
}
if ($('input[name=\"11_29_1\"]')) {
	$('input[name=\"11_29_1\"]').val($('#mt_id').html());
}
if ($('input[name=\"11_37_1\"]')) {
	$('input[name=\"11_37_1\"]').val($('#mt_email').html());
}
if ($('input[name=\"11_2001_1\"]')) {
	$('input[name=\"11_2001_1\"]').val($('#mt_qqname').html());
}
if ($('select[name=\"11_28_1\"]').length && $('#mt_idtype').html()) {
	var idtype = $('select[name=\"11_28_1\"]').get(0);
	switch ($('#mt_idtype').html()) {
	case '身份证':
		idtype.options[1].selected = true;
		break;
	case '护照':
		idtype.options[2].selected = true;
		break;
	case '台胞证':
		idtype.options[6].selected = true;
		break;
	case '澳门非永久居民身份证':
	case '澳门永久居民身份证':
		idtype.options[5].selected = true;
		break;
	case '军官证':
		idtype.options[3].selected = true;
		break;
	default:
		idtype.options[4].selected = true;
		break;
	}
}
if ($('#11_27_1').length && $('#mt_nativeplace').html()) {
	var nat = document.getElementById('11_27_1');
	for (var i = 0; i < nat.options.length; i++) {
		if (nat.options[i].text == $('#mt_nativeplace').html()) {
			nat.options[i].selected = true;
			break;
		}
	}
}
if ($('#firstLevl11_245_1').length && $('#mt_nativeplace').html()) {
	var pro = document.getElementById('firstLevl11_245_1');
	for (var i = 0; i < pro.options.length; i++) {
		if (pro.options[i].text.indexOf($('#mt_nativeplace').html(),0)!=-1) {
			pro.options[i].selected = true;
			pro.dispatchEvent(ev);
			break;
		}
	}
	
}
window.setTimeout(function(){
	if($('select[name=\"11_245_1\"]').length && $('#mt_native_city').html()){
		var city = document.getElementById('11_245_1');    
		for (var i = 0; i < city.options.length; i++) {
			if (city.options[i].text.indexOf($('#mt_native_city').html(),0)!=-1) {
				city.options[i].selected = true;
				city.dispatchEvent(ev);
				break;
			}
		}
	}
 },200);
if ($('#firstLevl11_26_1').length && $('#mt_livecity_pro').html()) {
	var pro = document.getElementById('firstLevl11_26_1');
	for (var i = 0; i < pro.options.length; i++) {
		if (pro.options[i].text.indexOf($('#mt_livecity_pro').html(),0)!=-1) {
			pro.options[i].selected = true;
			pro.dispatchEvent(ev);
			break;
		}
	}
	
}
window.setTimeout(function(){
	if($('select[name=\"11_26_1\"]').length && $('#mt_livecity_city').html()){
		var city = document.getElementById('11_26_1');    
		for (var i = 0; i < city.options.length; i++) {
			if (city.options[i].text.indexOf($('#mt_livecity_city').html(),0)!=-1) {
				city.options[i].selected = true;
				city.dispatchEvent(ev);
				break;
			}
		}
	}
 },200);
if ($('#11_30_1').length && $('#mt_edu').html()) {
	var edu = document.getElementById('11_30_1');
	switch ($('#mt_edu').html()) {
	case '初中及以下':
		edu.options[1].selected = true;
		break;
	case '高中':
		edu.options[2].selected = true;
		break;
	case '技校/职高':
		edu.options[3].selected = true;
		break;
	case '中专':
		edu.options[4].selected = true;
		break;
	case '大学专科':
		edu.options[5].selected = true;
		break;
	case '大学本科-一本':
	case '大学本科-二本':
	case '大学本科-三本':
		edu.options[6].selected = true;
		break;
	case '硕士研究生':
		edu.options[7].selected = true;
		break;
	case 'MBA':
		edu.options[9].selected = true;
		break;
	case 'EMBA':
		edu.options[10].selected = true;
		break;
	case 'MPA':
		edu.options[11].selected = true;
		break;
	case '博士研究生':
		edu.options[8].selected = true;
		break;
	}
}
if($('#11_31_1').length && $('#mt_gradutetime').html()){
	if ($('#mt_gradutetime').html().length <7) {
		$('#11_31_1').val($('#mt_gradutetime').html().split('-').join('-0')+'-01');}
	else{$('#11_31_1').val($('#mt_gradutetime').html()+'-01')}
}
if ($('textarea[name=\"12_42_1\"]').length) {
	$('textarea[name=\"12_42_1\"]').val($('#mt_selfIntro').html());
}
if ($('#firstLevl13_44_1').length && $('#mt_expectcity').html()) {
	var pro = document.getElementById('firstLevl13_44_1');
	for (var i = 0; i < pro.options.length; i++) {
		if (pro.options[i].text.indexOf($('#mt_expectcity').html(),0)!=-1) {
			pro.options[i].selected = true;
			pro.dispatchEvent(ev);
			break;
		}
	}
	
}
window.setTimeout(function(){
	if($('select[name=\"13_44_1\"]').length && $('#mt_expectcity_city').html()){
		var city = document.getElementById('13_44_1');    
		for (var i = 0; i < city.options.length; i++) {
			if (city.options[i].text.indexOf($('#mt_expectcity_city').html(),0)!=-1) {
				city.options[i].selected = true;
				city.dispatchEvent(ev);
				break;
			}
		}
	}
 },200);
//教育
for (var i = 0; i <$('.infopledu').length; i++) {
    var ev = document.createEvent('HTMLEvents');
    ev.initEvent('change', true, false);
    if ($('#14_49_'+(i+1)) && $('.infopledu .mt_startYear').eq(i).html()){
                if ($('.infopledu .mt_startYear').eq(i).html().length <7) {
                    $('#14_49_'+(i+1)).val($('.infopledu .mt_startYear').eq(i).html().split('-').join('-0')+'-01');}
                else{$('#14_49_'+(i+1)).val($('.infopledu .mt_startYear').eq(i).html()+'-01')}
    }
    if ($('#14_50_'+(i+1)) && $('.infopledu .mt_endYear').eq(i).html()){
                if ($('.infopledu .mt_endYear').eq(i).html().length <7) {
                    $('#14_50_'+(i+1)).val($('.infopledu .mt_endYear').eq(i).html().split('-').join('-0')+'-01');}
                else{$('#14_50_'+(i+1)).val($('.infopledu .mt_endYear').eq(i).html()+'-01')}
    }
    //学位
    if ($('#14_248_'+(i+1)).length && $('.infopledu .mt_degree').eq(i).html()) {
		var nat = $('#14_248_'+(i+1)).get(0);
		for (var j = 0; j < nat.options.length; j++) {
			if (nat.options[j].text == $('.infopledu .mt_degree').eq(i).html()) {
				nat.options[j].selected = true;
				break;
			}
		}
	}
    var eduList= $('#14_53_'+(i+1));
    //学历
    if (eduList.length && $('.infopledu .mt_education').eq(i).html() && $('.infopledu .mt_education').eq(i).html() == '大学专科'){
        eduList.get(0).options[5].selected=true; $('#14_53_'+(i+1)).get(0).dispatchEvent(ev);}
    else if(eduList.length && $('.infopledu .mt_education').eq(i).html() && ($('.infopledu .mt_education').eq(i).html() == '大学本科-一本' || $('.infopledu .mt_education').eq(i).html() == '大学本科-二本' || $('.infopledu .mt_education').eq(i).html() == '大学本科-三本' || $('.infopledu .mt_education').eq(i).html() == '海外本科')){
        eduList.get(0).options[6].selected=true; $('#14_53_'+(i+1)).get(0).dispatchEvent(ev);}
    else if(eduList.length && $('.infopledu .mt_education').eq(i).html() && $('.infopledu .mt_education').eq(i).html() == '硕士研究生'){
        eduList.get(0).options[7].selected=true; $('#14_53_'+(i+1)).get(0).dispatchEvent(ev);}
    else if(eduList.length && $('.infopledu .mt_education').eq(i).html() && $('.infopledu .mt_education').eq(i).html() == 'MBA'){
        eduList.get(0).options[9].selected=true; $('#14_53_'+(i+1)).get(0).dispatchEvent(ev);} 
    else if(eduList.length && $('.infopledu .mt_education').eq(i).html() && $('.infopledu .mt_education').eq(i).html() == 'MPA'){
        eduList.get(0).options[10].selected=true; $('#14_53_'+(i+1)).get(0).dispatchEvent(ev);}     
    else if(eduList.length && $('.infopledu .mt_education').eq(i).html() && $('.infopledu .mt_education').eq(i).html() == '博士研究生'){
        eduList.get(0).options[8].selected=true;  $('#14_53_'+(i+1)).get(0).dispatchEvent(ev);} 
    if ($('#14_55_'+(i+1)).length){
        $('#14_55_'+(i+1)).val($('.infopledu .mt_major').eq(i).html()); 
    } 
}
//培训
for (var i = 0; i <$('.infotraining').length; i++) {
    if ($('#15_56_'+(i+1)) && $('.infotraining .mt_startDate').eq(i).html()){
                if ($('.infotraining .mt_startDate').eq(i).html().length <7) {
                    $('#15_56_'+(i+1)).val($('.infotraining .mt_startDate').eq(i).html().split('-').join('-0')+'-01');}
                else{$('#15_56_'+(i+1)).val($('.infotraining .mt_startDate').eq(i).html()+'-01')}
    }
    if ($('#15_57_'+(i+1)) && $('.infotraining .mt_endDate').eq(i).html()){
                if ($('.infotraining .mt_endDate').eq(i).html().length <7) {
                    $('#15_57_'+(i+1)).val($('.infotraining .mt_endDate').eq(i).html().split('-').join('-0')+'-01');}
                else{$('#15_57_'+(i+1)).val($('.infotraining .mt_endDate').eq(i).html()+'-01')}
    }
    if ($('#15_58_'+(i+1)) && $('.infotraining .mt_trainingCompany').eq(i).html()){
    	$('#15_58_'+(i+1)).val($('.infotraining .mt_trainingCompany').eq(i).html());
    }
    if ($('#15_60_'+(i+1)) && $('.infotraining .mt_trainingName').eq(i).html()){
    	$('#15_60_'+(i+1)).val($('.infotraining .mt_trainingName').eq(i).html());
    }
    if ($('#15_61_'+(i+1)) && $('.infotraining .mt_certificateName').eq(i).html()){
    	$('#15_61_'+(i+1)).val($('.infotraining .mt_certificateName').eq(i).html());
    }
    if ($('#15_62_'+(i+1)) && $('.infotraining .mt_trainingDes').eq(i).html()){
    	$('#15_62_'+(i+1)).val($('.infotraining .mt_trainingDes').eq(i).html());
    }
}
//英语能力
for (var i = 0; i <$('.infoEnglishSkill').length; i++) {
	if ($('#16_63_'+(i+1)).length && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html()) {
		var EngLevel = $('#16_63_'+(i+1)).get(0);
		switch ($('.infoEnglishSkill .mt_skillEngLevel').eq(i).html()) {
		case '大学英语四级':
			EngLevel.options[1].selected = true;
			break;
		case '大学英语六级':
			EngLevel.options[2].selected = true;
			break;
		case '专业四级':
			EngLevel.options[3].selected = true;
			break;
		case '专业八级':
			EngLevel.options[4].selected = true;
			break;
		}
	}
}
//语言能力
for (var i = 0; i <$('.infoOtherSkill').length; i++) {
	if ($('#43_225_'+(i+1)).length && $('.infoOtherSkill .mt_skillOtherLang').eq(i).html()) {
		var Skill = $('#43_225_'+(i+1)).get(0);
		for (var j = 0; j < Skill.options.length; j++) {
			if (Skill.options[j].text == $('.infoOtherSkill .mt_skillOtherLang').eq(i).html()) {
				Skill.options[j].selected = true;
				break;
			}
		}
    }
    if ($('#43_226_'+(i+1)).length && $('.infoOtherSkill .mt_skillListenLevel').eq(i).html()) {
		var EngLevel = $('#43_226_'+(i+1)).get(0);
		switch ($('.infoOtherSkill .mt_skillListenLevel').eq(i).html()) {
		case '了解':
			EngLevel.options[1].selected = true;
			break;
		case '一般':
			EngLevel.options[2].selected = true;
			break;
		case '熟练':
			EngLevel.options[4].selected = true;
			break;
		case '精通':
			EngLevel.options[3].selected = true;
			break;
		}
	}
	if ($('#43_227_'+(i+1)).length && $('.infoOtherSkill .mt_skillWriteLevel').eq(i).html()) {
		var EngLevel = $('#43_227_'+(i+1)).get(0);
		switch ($('.infoOtherSkill .mt_skillWriteLevel').eq(i).html()) {
		case '了解':
			EngLevel.options[1].selected = true;
			break;
		case '一般':
			EngLevel.options[2].selected = true;
			break;
		case '熟练':
			EngLevel.options[4].selected = true;
			break;
		case '精通':
			EngLevel.options[3].selected = true;
			break;
		}
	}
}
//实习经历
if ($('#767808845_767808848_1') && $('.infoparttimejobs .mt_startDate').html()){
    if ($('.infoparttimejobs .mt_startDate').html().length <7) {
        $('#767808845_767808848_1').val($('.infoparttimejobs .mt_startDate').html().split('-').join('-0')+'-01');}
    else{$('#767808845_767808848_1').val($('.infoparttimejobs .mt_startDate').html()+'-01')}
}
if ($('#767808845_767808856_1') && $('.infoparttimejobs .mt_endDate').html()){
    if ($('.infoparttimejobs .mt_endDate').html().length <7) {
        $('#767808845_767808856_1').val($('.infoparttimejobs .mt_endDate').html().split('-').join('-0')+'-01');}
    else{$('#767808845_767808856_1').val($('.infoparttimejobs .mt_endDate').html()+'-01')}
}
if ($('#767808845_767808861_1') && $('.infoparttimejobs .mt_companyName').html()){
	$('#767808845_767808861_1').val($('.infoparttimejobs .mt_companyName').html());
}
if ($('#767808845_767808876_1') && $('.infoparttimejobs .mt_department').html()){
	$('#767808845_767808876_1').val($('.infoparttimejobs .mt_department').html());
}
if ($('#767808845_767808870_1') && $('.infoparttimejobs .mt_positionName').html()){
	$('#767808845_767808870_1').val($('.infoparttimejobs .mt_positionName').html());
}
if ($('#767808845_767808879_1') && $('.infoparttimejobs .mt_workContent').text()){
	$('#767808845_767808879_1').val($('.infoparttimejobs .mt_workContent').text());
}
if ($('#767808845_767808864_1').length && $('.infoparttimejobs .mt_companyproperty').html()) {
	var company = $('#767808845_767808864_1').get(0);
	switch ($('.infoparttimejobs .mt_companyproperty').html()) {
	case '外资-欧美':
		company.options[1].selected = true;
		break;
	case '外资-非欧美':
		company.options[2].selected = true;
		break;
	case '合资-欧美':
		company.options[3].selected = true;
		break;
	case '合资-非欧美':
		company.options[4].selected = true;
		break;
	case '国企':
	case '上市公司':
		company.options[5].selected = true;
		break;
	case '民营公司':
	case '创业公司':
		company.options[6].selected = true;
		break;
	case '外企代表处':
		company.options[7].selected = true;
		break;
	default:
			rank.options[8].selected = true;
			break;
	}
}
if ($('#767808845_767808867_1').length && $('.infoparttimejobs .mt_companySize').html()) {
	var company = $('#767808845_767808867_1').get(0);
	switch ($('.infoparttimejobs .mt_companySize').html()) {
	case '少于50人':
		company.options[2].selected = true;
		break;
	case '50-149人':
		company.options[3].selected = true;
		break;
	case '150-499人':
		company.options[3].selected = true;
		break;
	case '500-999人':
		company.options[4].selected = true;
		break;
	case '1000-9999人':
		company.options[5].selected = true;
		break;
	default:
			rank.options[6].selected = true;
			break;
	}
}
//项目经历
for (var i = 0; i < $('.infoproject').length; i++) {
	if ($('#40_206_'+(i+1)) && $('.infoproject .mt_prostarttime').eq(i).html()){
	    if ($('.infoproject .mt_prostarttime').eq(i).html().length <7) {
	        $('#40_206_'+(i+1)).val($('.infoproject .mt_prostarttime').eq(i).html().split('-').join('-0')+'-01');}
	    else{$('#40_206_'+(i+1)).val($('.infoproject .mt_prostarttime').eq(i).html()+'-01')}
	}
	if ($('#40_207_'+(i+1)) && $('.infoproject .mt_proendtime').eq(i).html()){
	    if ($('.infoproject .mt_proendtime').eq(i).html().length <7) {
	        $('#40_207_'+(i+1)).val($('.infoproject .mt_proendtime').eq(i).html().split('-').join('-0')+'-01');}
	    else{$('#40_207_'+(i+1)).val($('.infoproject .mt_proendtime').eq(i).html()+'-01')}
	}
	if ($('#40_208_'+(i+1)) && $('.infoproject .mt_projectName').eq(i).html()){
		$('#40_208_'+(i+1)).val($('.infoproject .mt_projectName').eq(i).html());
	}
	if ($('#40_209_'+(i+1)) && $('.infoproject .mt_projectRemark').eq(i).html()){
		$('#40_209_'+(i+1)).val($('.infoproject .mt_projectRemark').eq(i).html());
	}
	if ($('#40_210_'+(i+1)) && $('.infoproject .mt_projectDuty').eq(i).html()){
		$('#40_210_'+(i+1)).val($('.infoproject .mt_projectDuty').eq(i).html());
	}
}
//证书
for (var i = 0; i < $('.infoplcerti').length; i++) {
	if ($('#44_230_'+(i+1)) && $('.infoplcerti .mt_getDate').eq(i).html()){
	    if ($('.infoplcerti .mt_getDate').eq(i).html().length <7) {
	        $('#44_230_'+(i+1)).val($('.infoplcerti .mt_getDate').eq(i).html().split('-').join('-0')+'-01');}
	    else{$('#44_230_'+(i+1)).val($('.infoplcerti .mt_getDate').eq(i).html()+'-01')}
	}
	if ($('#44_229_'+(i+1)) && $('.infoplcerti .mt_certificateName').eq(i).html()){
		$('#44_229_'+(i+1)).val($('.infoplcerti .mt_certificateName').eq(i).html());
	}
	if ($('#44_231_'+(i+1)) && $('.infoplcerti .mt_certificateDes').eq(i).html()){
		$('#44_231_'+(i+1)).val($('.infoplcerti .mt_certificateDes').eq(i).html());
	}
}
for (var i = 0; i < $('.infoschaward').length; i++) {
	if ($('#20_82_'+(i+1)) && $('.infoschaward').eq(i).html()){
		$('#20_82_'+(i+1)).val($('.infoschaward .mt_awardsDate').eq(i).html()+'月' + '\\n' + $('.infoschaward .mt_awardsName').eq(i).html() + '\\n' + $('.infoschaward .mt_awardsType').eq(i).html() + '\\n' + $('.infoschaward .mt_awardsLevel').eq(i).html() + '\\n');
	}
}
for (var i = 0; i < $('.infoschoolclub').length; i++) {
	if ($('#20_83_'+(i+1)).length){
		$('#20_83_'+(i+1)).val($('.infoschoolclub .mt_positionName').eq(i).html());
	}
	if ($('#20_84_'+(i+1)).length){
		$('#20_84_'+(i+1)).val($('.infoschoolclub .mt_startDate').eq(i).html() + '至' + $('.infoschoolclub .mt_endDate').eq(i).html()+$('.infoschoolclub .mt_schClubName').eq(i).html()+$('.infoschoolclub .mt_workDes').eq(i).html());
	}
}
