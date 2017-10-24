if (KISSY.one('#jm_qiuck_cover')) {KISSY.one('#jm_qiuck_cover').fadeIn();setTimeout(\"KISSY.one('#jm_qiuck_cover').fadeOut()\",1000);}

//个人信息
if($('#name') && $('#mt_name').html()){
	$('#name').val($('#mt_name').html());
}
if($('#birthday') && $('#mt_birth').html()){
	$('#birthday').val($('#mt_birth').html());
}
if($('#country').length && $('#mt_national').html()){
	var nat=document.getElementById('country');
	for(var i=0;i<nat.options.length;i++)
	{
		if(nat.options[i].text.indexOf($('#mt_national').html(),0)!=-1){
			nat.options[i].selected=true;break;
		}
	}
}
if($('#phone') && $('#mt_tel').html()){
	$('#phone').val($('#mt_tel').html());
}
if($('input[name=\"sex\"]') && $('#mt_sex').html()=='男'){
	$('input[name=\"sex\"]').eq(0).trigger('click');
}
if($('input[name=\"sex\"]') && $('#mt_sex').html()=='女'){
	$('input[name=\"sex\"]').eq(1).trigger('click');
}
if($('#cid-type').length && $('#mt_idtype').html()){
	var idtype=document.getElementById('cid-type');
	switch($('#mt_idtype').html())
	{
		case '身份证':idtype.options[0].selected=true;break;
		case '护照':idtype.options[1].selected=true;break;
		case '香港永久居民身份证':
		case '香港非永久居民身份证':idtype.options[2].selected=true;break;
		case '台胞证':idtype.options[3].selected=true;break;
		default:idtype.options[4].selected=true;break;
	}
} 
if($('#idCard') && $('#mt_id').html()){
	$('#idCard').val($('#mt_id').html());
}
if($('select[name=\"graduateYear\"]').length && $('#mt_gradutetime').html()){
	var grastr=$('#mt_gradutetime').html().split('-');
	var gray=parseInt(grastr[0]);
	var gram=parseInt(grastr[1]);
	if(gray>=2016){
		gray=gray-2015;
		$('select[name=\"graduateYear\"]')[0].options[gray].selected=true;
		$('select[name=\"graduateMonth\"]')[0].options[gram].selected=true;
	}
}
if($('#email') && $('#mt_email').html()){
	$('#email').val($('#mt_email').html());
}
if($('#mailAddress') && $('#mt_add').html()){
	$('#mailAddress').val($('#mt_add').html());
}
if($('#homeMailAddress') && $('#mt_postadd').html()){
	$('#homeMailAddress').val($('#mt_postadd').html());
}
var event=document.createEvent('HTMLEvents');
event.initEvent('change',true,false);

//教育信息
for(var i=0;i<$('.infopledu').length;i++){
	if($('.educationxps').eq(i).length){
		$edudiv=$('.educationxps').eq(i);
		var y;var m;
		if($edudiv.find('select[name=\"startYear\"]') && $('.infopledu .mt_startYearY').eq(i).html()){
			y=parseInt($('.infopledu .mt_startYearY').eq(i).html());
			m=parseInt($('.infopledu .mt_startYearM').eq(i).html());
			$edudiv.find('select[name=\"startYear\"]')[0].options[2018-y].selected=true;
			$edudiv.find('select[name=\"startMonth\"]')[0].options[m].selected=true;
		}
		if($edudiv.find('select[name=\"endYear\"]') && $('.infopledu .mt_endYearY').eq(i).html()){
			y=parseInt($('.infopledu .mt_endYearY').eq(i).html());
			m=parseInt($('.infopledu .mt_endYearM').eq(i).html());
			$edudiv.find('select[name=\"endYear\"]')[0].options[2023-y].selected=true;
			$edudiv.find('select[name=\"endMonth\"]')[0].options[m].selected=true;
		}
		if($edudiv.find('select[name=\"education\"]').length && $('.infopledu .mt_education').eq(i).html()){
			var deg=$edudiv.find('select[name=\"education\"]')[0];
			switch($('.infopledu .mt_education').eq(i).html())
			{
				case '大学专科':deg.options[1].selected=true;break;
				case '大学本科-一本':
				case '大学本科-二本':
				case '大学本科-三本':deg.options[2].selected=true;break;
				case '硕士研究生':deg.options[3].selected=true;break;
				case '博士研究生':deg.options[4].selected=true;break;
			}
		}
		// if($edudiv.find('input[name=\"school\"]') && $('.infopledu .mt_schoolName').eq(i).html()){
		// 	$edudiv.find('input[name=\"school\"]').val($('.infopledu .mt_schoolName').eq(i).html());
		// 	$edudiv.find('input[name=\"school\"]')[0].dispatchEvent(event);
		// }
		// if($edudiv.find('input[name=\"academy-others\"]') && $('.infopledu .mt_academy').eq(i).html()){
		// 	$edudiv.find('input[name=\"academy-others\"]').val($('.infopledu .mt_academy').eq(i).html());
		// }
		if($edudiv.find('input[name=\"major\"]') && $('.infopledu .mt_professional').eq(i).html()){
			$edudiv.find('input[name=\"major\"]').val($('.infopledu .mt_professional').eq(i).html());
		}
		if($edudiv.find('input[name=\"tutor\"]') && $('.infopledu .mt_tutorname').eq(i).html()){
			$edudiv.find('input[name=\"tutor\"]').val($('.infopledu .mt_tutorname').eq(i).html());
		}
		if($edudiv.find('select[name=\"scoreRank\"]').length && $('.infopledu .mt_classranking').eq(i).html()){
			var rank=$edudiv.find('select[name=\"scoreRank\"]')[0];
			switch($('.infopledu .mt_classranking').eq(i).html()){
				case '前5%':
				case '前10%':rank.options[1].selected=true;break;
				case '前20%':
				case '前30%':rank.options[2].selected=true;break;
				case '前40%':
				case '前50%':rank.options[3].selected=true;break;
				default:rank.options[4].selected=true;break;
			}
		}
		if($edudiv.find('textarea[name=\"rewardInfo\"]') && $('.infoschaward .mt_schawradList').eq(i).text()){
			$edudiv.find('textarea[name=\"rewardInfo\"]').val($('.infoschaward .mt_schawradList').eq(i).text());
		}
		if($edudiv.find('select[name=\"language\"]') && $('.infoOtherSkill .mt_skillOtherLang').eq(i).html()){
			var othsk=$edudiv.find('select[name=\"language\"]')[0];
			for(var j=0;j<othsk.options.length;j++){
				if(othsk.options[j].text.indexOf($('.infoOtherSkill .mt_skillOtherLang').eq(i).html(),0)!=-1){
					othsk.options[j].selected=true;break;
				}
			}
		}
		if($edudiv.find('select[name=\"languageRank\"]') && $('.infoOtherSkill .mt_skillGraspLevel').eq(i).html()){
			switch($('.infoOtherSkill .mt_skillGraspLevel').eq(i).html()){
				case '了解':$edudiv.find('select[name=\"languageRank\"]')[0].options[1].selected=true;break;
				case '一般':$edudiv.find('select[name=\"languageRank\"]')[0].options[2].selected=true;break;
				case '熟练':$edudiv.find('select[name=\"languageRank\"]')[0].options[3].selected=true;break;
				case '精通':$edudiv.find('select[name=\"languageRank\"]')[0].options[4].selected=true;break;
			}
		}
	}
}
