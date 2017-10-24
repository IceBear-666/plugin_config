if (KISSY.one('#jm_qiuck_cover')) {KISSY.one('#jm_qiuck_cover').fadeIn();setTimeout(\"KISSY.one('#jm_qiuck_cover').fadeOut()\",1000);}  

var event=document.createEvent('HTMLEvents');
event.initEvent('change',false,true);

if($('input[name=\"11_2_1\"]') && $('#mt_name').html()){
		$('input[name=\"11_2_1\"]').val($('#mt_name').html());
}
if($('input[name=\"11_20_1\"]') && $('#mt_sex').html() && $('#mt_sex').html() == '男'){
	$('input[name=\"11_20_1\"]').eq(0).trigger('click');
	}
if($('input[name=\"11_20_1\"]') && $('#mt_sex').html() && $('#mt_sex').html() == '女'){
	$('input[name=\"11_20_1\"]').eq(0).trigger('click');
}
if($('#11_36_1') && $('#mt_tel').html()){
	$('#11_36_1').val($('#mt_tel').html());
}
if($('#11_37_1') && $('#mt_email').html()){
	$('#11_37_1').val($('#mt_email').html());
}
if($('input[name=\"11_21_1\"]') && $('#mt_birth').html()){
	$('input[name=\"11_21_1\"]').val($('#mt_birth').html());
}
if($('#11_1036787238_1') && $('#mt_jjlxrtel').html()){
	$('#11_1036787238_1').val($('#mt_jjlxrtel').html());
}
if($('#11_2001_1') && $('#mt_qqname').html()){
	$('#11_2001_1').val($('#mt_qqname').html());
}
// 民族
if($('#11_23_1').length>0 && $('#mt_nation').html()){
	var nation=document.getElementById('11_23_1');
	for(var i=0;i<nation.options.length;i++){
		if(nation.options[i].text==$('#mt_nation').html()){
			nation.options[i].selected=true;break;
		}
	}
}
//政治面貌
if($('#11_25_1').length>0 && $('#mt_polistatus').html()){
	var plo=document.getElementById('11_25_1');
	switch($('#mt_polistatus').html()){
		case '中共党员':plo.options[1].selected=true;break;
		case '群众':plo.options[4].selected=true;break;
		case '无党派民主人士':plo.options[3].selected=true;break;
		default:plo.options[2].selected=true;break;
	}
}
//证件
if($('#11_28_1').length>0 && $('#mt_idtype').html()){
	$opc=$('#11_28_1 option');
	switch($('#mt_idtype').text())
	{
		case '身份证':$opc.get(1).selected=true;break;
		case '护照':$opc.get(2).selected=true;break;
		case '军官证':$opc.get(3).selected=true;break;
		case '香港永久居民身份证':
		case '香港非永久居民身份证':$opc.get(4).selected=true;break;
		case '澳门永久居民身份证':
		case '澳门非永久居民身份证':$opc.get(5).selected=true;break;
		case '台胞证':$opc.get(6).selected=true;break;
		default:$opc.get(7).selected=true;break;
	}
} 

if($('#11_29_1') && $('#mt_id').html()){
	$('#11_29_1').val($('#mt_id').html());
}
if($('#11_100_1') && $('#mt_id').html()){
	$('#11_100_1').val($('#mt_id').html());
}

//现居住城市
if($('#firstLevl11_26_1').length>0 && $('#11_26_1').length>0 && $('#mt_livecity_pro').html() && $('#mt_livecity_city').html()){
	var pro=document.getElementById('firstLevl11_26_1');
	var mypro = $('#mt_livecity_pro').html();
	var prostr;
	for(var i=0;i<pro.options.length;i++){
		prostr = $.trim(pro.options[i].innerHTML);
		if(prostr.indexOf(mypro,0)!=-1){
			pro.options[i].selected = true;	
			pro.dispatchEvent(event);
			setTimeout(\"var city=document.getElementById('11_26_1');var mycity=$('#mt_livecity_city').html();var citystr;for(var j=0;j<city.options.length;j++){citystr=city.options[j].innerHTML.trim();if(citystr.indexOf(mycity,0)!=-1){city.options[j].selected=true;break}}\",200);
			break;
		}
	}
}

//籍贯
if($('#firstLevl11_245_1').length>0 && $('#11_245_1').length>0 && $('#mt_nativeplace').html() && $('#mt_native_city').html()){
	var pro=document.getElementById('firstLevl11_245_1');
	var mypro = $('#mt_nativeplace').html();
	var prostr;
	for(var i=0;i<pro.options.length;i++){
		prostr = $.trim(pro.options[i].innerHTML);
		if(prostr.indexOf(mypro,0)!=-1){
			pro.options[i].selected = true;	
			pro.dispatchEvent(event);
			setTimeout(\"var city=document.getElementById('11_245_1');var mycity=$('#mt_native_city').html();var citystr;for(var j=0;j<city.options.length;j++){citystr=city.options[j].innerHTML.trim();if(citystr.indexOf(mycity,0)!=-1){city.options[j].selected=true;break}}\",200);
			break;
		}
	}
}
//生源地
if($('#firstLevl11_246_1').length>0 && $('#11_246_1').length>0 && $('#mt_hukoucity').html() && $('#mt_hukoucity_city').html()){
	var pro=document.getElementById('firstLevl11_246_1');
	var mypro = $('#mt_hukoucity').html();
	var prostr;
	for(var i=0;i<pro.options.length;i++){
		prostr = $.trim(pro.options[i].innerHTML);
		if(prostr.indexOf(mypro,0)!=-1){
			pro.options[i].selected = true;	
			pro.dispatchEvent(event);
			setTimeout(\"var city=document.getElementById('11_246_1');var mycity=$('#mt_hukoucity_city').html();var citystr;for(var j=0;j<city.options.length;j++){citystr=city.options[j].innerHTML.trim();if(citystr.indexOf(mycity,0)!=-1){city.options[j].selected=true;break}}\",200);
			break;
		}
	}
}
// 求职意向
if($('#firstLevl13_44_1').length && $('#13_44_1').length && $('#mt_expectcity').html() && $('#mt_expectcity_city').html()){
	var pro=document.getElementById('firstLevl13_44_1');
	var mypro = $('#mt_expectcity').html();
	var prostr;
	for(var i=0;i<pro.options.length;i++){
		prostr = $.trim(pro.options[i].innerHTML);
		if(prostr.indexOf(mypro,0)!=-1){
			pro.options[i].selected = true;	
			pro.dispatchEvent(event);
			setTimeout(\"var city=document.getElementById('13_44_1');var mycity=$('#mt_expectcity_city').html();var citystr;for(var j=0;j<city.options.length;j++){citystr=city.options[j].innerHTML.trim();if(citystr.indexOf(mycity,0)!=-1){city.options[j].selected=true;break}}\",200);
			break;
		}
	}
}

// 婚姻情况
if($('#11_24_1').length>0 && $('#mt_maritalstatus').html()){
	if($('#mt_maritalstatus').html()=='未婚'){
		document.getElementById('11_24_1').options[1].selected=true;
	}
	if($('#mt_maritalstatus').html()=='已婚'){
		document.getElementById('11_24_1').options[2].selected=true;
	}
	if($('#mt_maritalstatus').html()=='离婚'){
		document.getElementById('11_24_1').options[3].selected=true;
	}
}
//学历
if($('#11_30_1').length>0 && $('#mt_edu').html()){
	var edu=document.getElementById('11_30_1');
	for(var i=0;i<edu.options.length;i++){
		if(edu.options[i].innerHTML==$('#mt_edu').html()){
			edu.options[i].selected=true;
			heightedu=i;break;
		}
	}
	if($('#mt_edu').html()=='大学本科-一本' || $('#mt_edu').html()=='大学本科-二本' || $('#mt_edu').html()=='大学本科-三本'){
		edu.options[6].selected=true;
	}
	else if($('#mt_edu').html()=='大学专科'){
		edu.options[5].selected=true;
	}
}
if($('#11_38_1') && $('#mt_add').html()){
	$('#11_38_1').val($('#mt_add').html());
}

//自我评价
if($('#12_42_1') && $('#mt_selfIntro').html()){
	$('#12_42_1').val($('#mt_selfIntro').html());
}
//个人主页
if($('#11_40_1') && $('#mt_profile').html()){$('#11_40_1').val($('#mt_profile').html());}
//邮编
if($('#11_39_1') && $('#mt_zip').html()){$('#11_39_1').val($('#mt_zip').html());}

//教育信息
var maxid=0;
var maxedutime;
for(var i=0;i<$('.infopledu').length;i++){
	if($('#14_49_'+(i+1)) && $('#edu-list .mt_startYear').eq(i).html()){
		$('#14_49_'+(i+1)).val($('#edu-list .mt_startYear').eq(i).html());
	}
	if($('#14_50_'+(i+1)) && $('#edu-list .mt_endYear').eq(i).html()){
		$('#14_50_'+(i+1)).val($('#edu-list .mt_endYear').eq(i).html());  
	}
	if($('#14_51_'+(i+1)) && $('.mt_schoolName').eq(i).html()){
		$('#14_51_'+(i+1)).val($('.mt_schoolName').eq(i).html());  
	}
	if($('#showName14_54_'+(i+1)) && $('#edu-list .mt_professional').eq(i).html()){
		$('#showName14_54_'+(i+1)).val($('#edu-list .mt_professional').eq(i).html());
	}

	if($('#14_248_'+(i+1)).length>0 && $('#edu-list .mt_degree').eq(i).html()){
		var degree=document.getElementById('14_248_'+(i+1));
		for(var j=0;j<degree.options.length;j++){
			if(degree.options[j].text==$('#edu-list .mt_degree').eq(i).html()){
				degree.options[j].selected=true;break;
			}
		}
		if($('#edu-list .mt_degree').eq(i).html()=='EMBA'){
			degree.options[3].selected=true;
		}
	}

	if($('#14_53_'+(i+1)).length>0 && $('#edu-list .mt_education').eq(i).html()){
		var education=document.getElementById('14_53_'+(i+1));
		switch( $('#edu-list .mt_education').eq(i).html()){
			case '大学本科-一本':
			case '大学本科-二本':
			case '大学本科-三本':
			case '海外本科':education.options[6].selected=true;break;
			case '硕士研究生':education.options[7].selected=true;break;
			case '博士研究生':education.options[9].selected=true;break;
			case 'MBA':education.options[8].selected=true;break;
			case 'MPA':education.options[11].selected=true;break;
			case '大学专科':education.options[5].selected=true;break;
			default:education.options[12].selected=true;break;
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
//把最高的教育信息填写在基本信息处
if($('#11_31_1') && $('#edu-list .mt_endYear').eq(maxid).html()){
	$('#11_31_1').val($('#edu-list .mt_endYear').eq(maxid).html()+'-1');
}
if($('#showName11_33_1') && $('#edu-list .mt_professional').eq(maxid).html()){
	$('#showName11_33_1').val($('#edu-list .mt_professional').eq(maxid).html());
}
if($('#11_32_1') && $('.mt_schoolName').eq(maxid).html()){
	$('#11_32_1').val($('.mt_schoolName').eq(maxid).html());
}
if($('#11_244_1').length && $('#edu-list .mt_degree').eq(maxid).html()){
	switch($('#edu-list .mt_degree').eq(maxid).html()){
		case '学士':document.getElementById('11_244_1').options[1].selected=true;break;
		case '硕士':document.getElementById('11_244_1').options[2].selected=true;break;
		case 'MBA':document.getElementById('11_244_1').options[3].selected=true;break;
		case '博士':document.getElementById('11_244_1').options[4].selected=true;break;
		case '双学士':document.getElementById('11_244_1').options[5].selected=true;break;
		default:document.getElementById('11_244_1').options[6].selected=true;break;
	}
}
if($('#11_1029585546_1') && $('#edu-list .mt_major').eq(maxid).html()){
	$('#11_1029585546_1').val($('#edu-list .mt_major').eq(maxid).html());
}
if($('#11_1029585531_1') && $('#edu-list .mt_gpascore').eq(maxid).html()){
	$('#11_1029585531_1').val($('#edu-list .mt_gpascore').eq(maxid).html());
}
if($('#11_1071477393_1') && $('#edu-list .mt_academy').eq(maxid).html()){
	$('#11_1071477393_1').val($('#edu-list .mt_academy').eq(maxid).html());
}

//英语能力
for(var i=0;i<$('.infoEnglishSkill').length;i++){
	if($('#16_63_'+(i+1)).length>0 && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() == '大学英语四级' ){
	document.getElementById('16_63_'+(i+1)).options[1].selected=true;  }

	if($('#16_63_'+(i+1)).length>0 && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() == '大学英语六级' ){
		document.getElementById('16_63_'+(i+1)).options[2].selected=true; }

	if($('#16_63_'+(i+1)).length>0 && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() == '专业四级' ){
		document.getElementById('16_63_'+(i+1)).options[3].selected=true;  }

	if($('#16_63_'+(i+1)).length>0 && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() == '专业八级'){
		document.getElementById('16_63_'+(i+1)).options[4].selected=true; }
}
// 其他外语能力
function getOthSkill(et,lan){
	for(var i=0;i<et.options.length;i++){
		if(et.options[i].text==lan){
			et.options[i].selected=true;break;
		}
	}
}
for(var i=0;i<$('.infoOtherSkill').length;i++){
	var oskill=null;
	if($('.infoOtherSkill .mt_skillOtherLang').eq(i).html()){
		if($('#17_66_'+(i+1)).length){
			oskill=document.getElementById('17_66_'+(i+1));
			getOthSkill(oskill,$('.infoOtherSkill .mt_skillOtherLang').eq(i).html());
		}	
		if($('#43_225_'+(i+1)).length && $('.infoOtherSkill .mt_skillOtherLang').eq(i).html()){
			oskill=document.getElementById('43_225_'+(i+1));
			getOthSkill(oskill,$('.infoOtherSkill .mt_skillOtherLang').eq(i).html());
		}
	}
	if($('#43_226_'+(i+1)).length && $('.infoOtherSkill .mt_skillListenLevel').eq(i).html()){
		var lskl=$('#43_226_'+(i+1))[0];
		switch($('.infoOtherSkill .mt_skillListenLevel').eq(i).html()){
			case '精通':lskl.options[1].selected=true;break;
			case '熟练':lskl.options[2].selected=true;break;
			case '一般':lskl.options[3].selected=true;break;
			case '了解':lskl.options[4].selected=true;break;
		}
	}
	if($('#43_227_'+(i+1)).length && $('.infoOtherSkill .mt_skillWriteLevel').eq(i).html()){
		var wskl=$('#43_227_'+(i+1))[0];
		switch($('.infoOtherSkill .mt_skillWriteLevel').eq(i).html()){
			case '精通':wskl.options[1].selected=true;break;
			case '熟练':wskl.options[2].selected=true;break;
			case '一般':wskl.options[3].selected=true;break;
			case '了解':wskl.options[4].selected=true;break;
		}
	}
}

//工作经历
for (var i = 0; i < $('.infofulltimejobs').length; i++) {
	if($('#19_72_'+(i+1)) && $('.infofulltimejobs .mt_startDate').eq(i).html()){
	$('#19_72_'+(i+1)).val($('.infofulltimejobs .mt_startDate').eq(i).html()); }
	if($('#19_73_'+(i+1)) && $('.infofulltimejobs .mt_endDate').eq(i).html()){
	$('#19_73_'+(i+1)).val($('.infofulltimejobs .mt_endDate').eq(i).html()); }
	if($('#19_198_'+(i+1)) && $('.infofulltimejobs .mt_companyName').eq(i).html()){
	$('#19_198_'+(i+1)).val($('.infofulltimejobs .mt_companyName').eq(i).html()); }
	if($('#19_76_'+(i+1)) && $('.infofulltimejobs .mt_positionName').eq(i).html()){
	$('#19_76_'+(i+1)).val($('.infofulltimejobs .mt_positionName').eq(i).html()); }
	if($('#19_78_'+(i+1)) && $('.infofulltimejobs .mt_workContent').eq(i+1).text()){
	$('#19_78_'+(i+1)).val($('.infofulltimejobs .mt_workContent').eq(i+1).text()); }
	if($('#19_202_'+(i+1)) && $('.infofulltimejobs .mt_department').eq(i).html()){
	$('#19_202_'+(i+1)).val($('.infofulltimejobs .mt_department').eq(i).html()); }
	if($('#19_79_'+(i+1)) && $('.infofulltimejobs .mt_reasons').eq(i).html()){
	$('#19_79_'+(i+1)).val($('.infofulltimejobs .mt_reasons').eq(i).html());}
	if($('#19_200_'+(i+1)) && $('.infofulltimejobs .mt_companySize').eq(i).html()){
		$('#19_200_'+(i+1)).val($('.infofulltimejobs .mt_companySize').eq(i).html());
	}
	if($('#19_199_'+(i+1)).length && $('.infofulltimejobs .mt_companyproperty').eq(i).html()){
		var ctype=$('#19_199_'+(i+1))[0];
		switch($('.infofulltimejobs .mt_companyproperty').eq(i).html()){
			case '外资-欧美':ctype.options[1].selected=true;break;
			case '外资-非欧美':ctype.options[2].selected=true;break;
			case '合资-欧美':ctype.options[3].selected=true;break;
			case '合资-非欧美':ctype.options[4].selected=true;break;
			case '国企':
			case '上市公司':ctype.options[5].selected=true;break;
			case '民营公司':ctype.options[6].selected=true;break;
			case '外企代表处':ctype.options[7].selected=true;break;
			default:ctype.options[8].selected=true;break;
		}
	}
}

//实习经历
for (var i = 0; i < $('.infoparttimejobs').length; i++) {
	if($('#1036754764_1036754596_'+(i+1)) && $('.infoparttimejobs .mt_startDate').eq(i).html()){
	$('#1036754764_1036754596_'+(i+1)).val($('.infoparttimejobs .mt_startDate').eq(i).html()); }
	if($('#1036754764_1036751707_'+(i+1)) && $('.infoparttimejobs .mt_endDate').eq(i).html()){
	$('#1036754764_1036751707_'+(i+1)).val($('.infoparttimejobs .mt_endDate').eq(i).html()); }
	if($('#1036754764_1036751635_'+(i+1)) && $('.infoparttimejobs .mt_companyName').eq(i).html()){
	$('#1036754764_1036751635_'+(i+1)).val($('.infoparttimejobs .mt_companyName').eq(i).html()); }
	if($('#1036754764_1036749964_'+(i+1)) && $('.infoparttimejobs .mt_department').eq(i).html()){
	$('#1036754764_1036749964_'+(i+1)).val($('.infoparttimejobs .mt_department').eq(i).html()); }
	if($('#1036754764_1036749985_'+(i+1)) && $('.infoparttimejobs .mt_positionName').eq(i).html()){
	$('#1036754764_1036749985_'+(i+1)).val($('.infoparttimejobs .mt_positionName').eq(i).html()); }
	if($('#1036754764_1036749922_'+(i+1)) && $('.infoparttimejobs .mt_workContent').eq(i).text()){
	$('#1036754764_1036749922_'+(i+1)).val($('.infoparttimejobs .mt_workContent').eq(i).text()); }
}
//项目经历
for (var i = 0; i < $('.infoproject').length; i++) {
	if($('#40_206_'+(i+1)) && $('.infoproject .mt_prostartdate').eq(i).html()){
		$('#40_206_'+(i+1)).val($('.infoproject .mt_prostartdate').eq(i).html()); }

	if($('#40_207_'+(i+1)) && $('.infoproject .mt_proenddate').eq(i).html()){
		$('#40_207_'+(i+1)).val($('.infoproject .mt_proenddate').eq(i).html()); }

	if($('#40_210_'+(i+1)) && $('.infoproject .mt_positionName').eq(i).html()){
		$('#40_210_'+(i+1)).val($('.infoproject .mt_positionName').eq(i).html()); }

	if($('#40_208_'+(i+1)) && $('.infoproject .mt_projectName').eq(i).html()){
		$('#40_208_'+(i+1)).val($('.infoproject .mt_projectName').eq(i).html()); }

	if($('#40_209_'+(i+1)) && $('.infoproject .mt_projectRemark').eq(i).html()){
		$('#40_209_'+(i+1)).val($('.infoproject .mt_projectRemark').eq(i).html()); }
	if($('#40_111542250_'+(i+1)) && $('.infoproject .mt_projectNumber').eq(i).html()){
		$('#40_111542250_'+(i+1)).val($('.infoproject .mt_projectNumber').eq(i).html()+'人');
	}
}
// 培训经历
for(var i=0;i<$('.infotraining').length;i++){
	if($('#15_56_'+(i+1)) && $('.infotraining .mt_startDate').eq(i).html()){
		$('#15_56_'+(i+1)).val($('.infotraining .mt_startDate').eq(i).html());}
	if($('#15_57_'+(i+1)) && $('.infotraining .mt_endDate').eq(i).html()){
		$('#15_57_'+(i+1)).val($('.infotraining .mt_endDate').eq(i).html());}
	if($('#15_58_'+(i+1)) && $('.infotraining .mt_trainingCompany').eq(i).html()){
		$('#15_58_'+(i+1)).val($('.infotraining .mt_trainingCompany').eq(i).html());}
	if($('#15_60_'+(i+1)) && $('.infotraining .mt_trainingName').eq(i).html()){
		$('#15_60_'+(i+1)).val($('.infotraining .mt_trainingName').eq(i).html());}
	if($('#15_61_'+(i+1)) && $('.infotraining .mt_certificateName').eq(i).html()){
		$('#15_61_'+(i+1)).val($('.infotraining .mt_certificateName').eq(i).html());}
	if($('#15_62_'+(i+1)) && $('.infotraining .mt_trainingDes').eq(i).html()){
		$('#15_62_'+(i+1)).val($('.infotraining .mt_trainingDes').eq(i).html());}
	if($('#15_59_'+(i+1)).length>0 && $('.infotraining .mt_trainingPlace').eq(i).html()){
		var trainingPlace=$('.infotraining .mt_trainingPlace').eq(i).html();
		var tp=document.getElementById('15_59_'+(i+1));
		for(var j=0;j<tp.options.length;j++){
			if(trainingPlace.indexOf(tp.options[j].text,0)!=-1){
				tp.options[j].selected=true;break;
			}
		}
	}
}

//获奖经历
for(var i=0;i<$('.infoschaward').length;i++){
	if($('#20_82_'+(i+1)) && $('.mt_awardsName').eq(i).html()){
		$('#20_82_'+(i+1)).val($('.mt_awardsName').eq(i).html());
	}
	if($('#20_83_'+(i+1)) && $('#schclub-list .mt_positionName').eq(i).html()){
		$('#20_83_'+(i+1)).val($('#schclub-list .mt_positionName').eq(i).html());
	}
	if($('#20_83_'+(i+1)) && $('#schclub-list .mt_positionName').eq(i).html()){
		$('#20_83_'+(i+1)).val($('#schclub-list .mt_positionName').eq(i).html());
	}
	if($('#20_84_'+(i+1)) && $('#schclub-list .mt_schClubName').eq(i).html()){
		$('#20_84_'+(i+1)).val($('#schclub-list .mt_schClubName').eq(i).html());
	}
}
//证书
for(var i=0;i<$('.infoplcerti').length;i++){
	if($('#44_229_'+(i+1)) && $('.mt_certificateName').html()){
		$('#44_229_'+(i+1)).val($('.mt_certificateName').html());
	}
	if($('#44_231_'+(i+1)) && $('.mt_certificateDes').html()){
		$('#44_231_'+(i+1)).val($('.mt_certificateDes').html());
	}
	if($('#44_230_'+(i+1)) && $('.mt_getDate').html()){
		$('#44_230_'+(i+1)).val($('.mt_getDate').html()+'-1');
	}
}

//家庭关系
if($('#21_86_1') && $('#mt_fmname').html()){
	$('#21_86_1').val($('#mt_fmname').html());
}
if($('#21_88_1') && $('#mt_fmwork').html()){
	$('#21_88_1').val($('#mt_fmwork').html());
}
if($('#21_89_1') && $('#mt_fmposition').html()){
	$('#21_89_1').val($('#mt_fmposition').html());
}

//------------------YY 华丽分割线----------------------
//获奖情况
for(var i=0;i<$('.infoschaward').length;i++){
	if($('#20_1036786808_'+(i+1)) && $('.infoschaward .mt_awardsName').eq(i).html()){
		$('#20_1036786808_'+(i+1)).val($('.infoschaward .mt_awardsName').eq(i).html());
	}
	if($('#20_1036786500_'+(i+1)) && $('.infoschaward .mt_awardsDate').eq(i).html()){
		$('#20_1036786500_'+(i+1)).val($('.infoschaward .mt_awardsDate').eq(i).html()+'-1');
	}
	if($('#20_1036778364_'+(i+1)) && $('.infoschaward .mt_awardsDes').eq(i).html()){
		$('#20_1036778364_'+(i+1)).val($('.infoschaward .mt_awardsDes').eq(i).html());
	}
}

if($('#11_27_1').length>0 && $('#mt_hukoucitynow').html()){
	var pro=document.getElementById('11_27_1');
	var mypro = $('#mt_hukoucitynow').html();
	var prostr;
	for(var i=0;i<pro.options.length;i++){
		prostr = $.trim(pro.options[i].innerHTML);
		if(prostr.indexOf(mypro,0)!=-1){
			pro.options[i].selected = true;	
			break;
		}
	}
}

//------------------美团 华丽分割线----------------------
if($('#firstLevl11_100802662_1').length>0 && $('#11_100802662_1').length>0 && $('#mt_hukoucity').html() && $('#mt_hukoucity_city').html()){
	var pro=document.getElementById('firstLevl11_100802662_1');
	var mypro = $('#mt_hukoucity').html();
	var prostr;
	for(var i=0;i<pro.options.length;i++){
		prostr = $.trim(pro.options[i].innerHTML);
		if(prostr.indexOf(mypro,0)!=-1){
			pro.options[i].selected = true;	
			pro.dispatchEvent(event);
			setTimeout(\"var city=document.getElementById('11_100802662_1');var mycity=$('#mt_hukoucity_city').html();var citystr;for(var j=0;j<city.options.length;j++){citystr=city.options[j].innerHTML.trim();if(citystr.indexOf(mycity,0)!=-1){city.options[j].selected=true;break}}\",200);
			break;
		}
	}
}
if($('#100116655_100116720_1') && $('#mt_skill').html()){
	$('#100116655_100116720_1').val($('#mt_skill').html());
}

//------------------大众点评 华丽分割线----------------------
if($('#11_22_1').length && $('#mt_national').html()){
	var nat=document.getElementById('11_22_1');
	for(var i=0;i<nat.options.length;i++)
	{
		if(nat.options[i].text.indexOf($('#mt_national').html(),0)!=-1){
			nat.options[i].selected=true;break;
		}
	}
}
if($('#11_246_1') && $('#mt_hukoucity_city').html()){$('#11_246_1').val($('#mt_hukoucity_city').html())};

//实习经历
for (var i = 0; i < $('.infoparttimejobs').length; i++) {
	if($('#111527355_111527475_'+(i+1)) && $('.infoparttimejobs .mt_startDate').eq(i).html()){
	$('#111527355_111527475_'+(i+1)).val($('.infoparttimejobs .mt_startDate').eq(i).html()); }
	if($('#111527355_111527478_'+(i+1)) && $('.infoparttimejobs .mt_endDate').eq(i).html()){
	$('#111527355_111527478_'+(i+1)).val($('.infoparttimejobs .mt_endDate').eq(i).html()); }
	if($('#111527355_111527359_'+(i+1)) && $('.infoparttimejobs .mt_companyName').eq(i).html()){
	$('#111527355_111527359_'+(i+1)).val($('.infoparttimejobs .mt_companyName').eq(i).html()); }
	if($('#111527355_111527480_'+(i+1)) && $('.infoparttimejobs .mt_department').eq(i).html()){
	$('#111527355_111527480_'+(i+1)).val($('.infoparttimejobs .mt_department').eq(i).html()); }
	if($('#111527355_111527483_'+(i+1)) && $('.infoparttimejobs .mt_positionName').eq(i).html()){
	$('#111527355_111527483_'+(i+1)).val($('.infoparttimejobs .mt_positionName').eq(i).html()); }
	if($('#111527355_111527487_'+(i+1)) && $('.infoparttimejobs .mt_workContent').eq(i).text()){
	$('#111527355_111527487_'+(i+1)).val($('.infoparttimejobs .mt_workContent').eq(i).text()); }
}
//获奖
for(var i=0;i<$('.infoschaward').length;i++){
	if($('#111526900_111527492_'+(i+1)) && $('.infoschaward .mt_awardsName').eq(i).html()){
		$('#111526900_111527492_'+(i+1)).val($('.infoschaward .mt_awardsName').eq(i).html());
	}
	if($('#111526900_111527494_'+(i+1)) && $('.infoschaward .mt_awardsDate').eq(i).html()){
		$('#111526900_111527494_'+(i+1)).val($('.infoschaward .mt_awardsDate').eq(i).html()+'-1');
	}
	if($('#111526900_111527498_'+(i+1)) && $('.infoschaward .mt_awardsDes').eq(i).html()){
		$('#111526900_111527498_'+(i+1)).val($('.infoschaward .mt_awardsDes').eq(i).html());
	}
}
//校内职务
for(var i=0;i<$('.infoschoolclub').length;i++){
	if($('#111526980_111527500_'+(i+1)) && $('.infoschoolclub .mt_positionName').eq(i).html()){
		$('#111526980_111527500_'+(i+1)).val($('.infoschoolclub .mt_positionName').eq(i).html());
	}
	if($('#111526980_111528113_'+(i+1)) && $('.infoschoolclub .mt_schClubName').eq(i).html()){
		$('#111526980_111528113_'+(i+1)).val($('.infoschoolclub .mt_schClubName').eq(i).html());
	}
	if($('#111526980_111527502_'+(i+1)) && $('.infoschoolclub .mt_startDate').eq(i).html()){
		$('#111526980_111527502_'+(i+1)).val($('.infoschoolclub .mt_startDate').eq(i).html()+'-1');
	}
	if($('#111526980_111527741_'+(i+1)) && $('.infoschoolclub .mt_endDate').eq(i).html()){
		$('#111526980_111527741_'+(i+1)).val($('.infoschoolclub .mt_endDate').eq(i).html()+'-1');
	}
	if($('#111526980_111528685_'+(i+1)) && $('.infoschoolclub .mt_workDes').eq(i).html()){
		$('#111526980_111528685_'+(i+1)).val($('.infoschoolclub .mt_workDes').eq(i).html());
	}
}