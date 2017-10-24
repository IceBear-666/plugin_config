if (KISSY.one('#jm_qiuck_cover')) {KISSY.one('#jm_qiuck_cover').fadeIn();setTimeout(\"KISSY.one('#jm_qiuck_cover').fadeOut()\",3000);}  

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
//现居住城市
if($('#firstLevl11_26_1').length>0 && $('#11_26_1').length>0 && $('#mt_livecity_pro').html() && $('#mt_livecity_city').html()){
	var pro;
	var city;
	var mt_livecity_city;
	var mt_livecity_provice;
	var thispro;
	var thiscity;
	pro=document.getElementById('firstLevl11_26_1');
	city=document.getElementById('11_26_1');
	mt_livecity_city = $('#mt_livecity_city').html();
	mt_livecity_provice = $('#mt_livecity_pro').html();
	for(var i=0;i<pro.options.length;i++){
		thispro = $.trim(pro.options[i].innerHTML);
		if(thispro.indexOf(mt_livecity_provice,0)!=-1){
			pro.options[i].selected = true;
			$('#firstLevl11_26_1').trigger('change');
			 setTimeout(\"for(var i=0;i<city.options.length;i++){thiscity=$.trim(city.options[i].innerHTML);if(thiscity.indexOf(mt_livecity_city,0)!=-1){city.options[i].selected=true;break}}\", 200);break;
		}
	}
}

//籍贯
if($('#firstLevl11_245_1').length>0 && $('#11_245_1').length>0 && $('#mt_nativeplace').html() && $('#mt_native_city').html()){
	var npro;
	var ncity;
	var mt_native_city;
	var mt_native_provice;
	var mypro;
	var mycity;
	npro=document.getElementById('firstLevl11_245_1');
	ncity=document.getElementById('11_245_1');
	mt_native_city= $('#mt_native_city').html();
	mt_native_provice = $('#mt_nativeplace').html();
	for(var i=0;i<npro.options.length;i++){
		mypro = $.trim(npro.options[i].innerHTML);
		if(mypro.indexOf(mt_native_provice,0)!=-1){
			npro.options[i].selected = true;
			$('#firstLevl11_245_1').trigger('change');
			 setTimeout(\"for(var i=0;i<ncity.options.length;i++){mycity=$.trim(ncity.options[i].innerHTML);if(mycity.indexOf(mt_native_city,0)!=-1){ncity.options[i].selected=true;break}}\", 200 );break;
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
// 求职意向
var epro;
var ecity;
var mt_expectcity_city;
var mt_expectcity;
var exppro;
var expcity;
if($('#firstLevl13_44_1') && $('#13_44_1') && $('#mt_expectcity').html() && $('#mt_expectcity_city').html()){
 epro=document.getElementById('firstLevl13_44_1');
 ecity=document.getElementById('13_44_1');
 mt_expectcity_city= $('#mt_expectcity_city').html();
 mt_expectcity = $('#mt_expectcity').html();
 for(var i=0;i<epro.options.length;i++){
  exppro = $.trim(epro.options[i].innerHTML);
  if(exppro.indexOf(mt_expectcity,0)!=-1){
   epro.options[i].selected = true;
   $('#firstLevl13_44_1').trigger('change');
    setTimeout(\"for(var i=0;i<document.getElementById('13_44_1').options.length;i++){expcity=$.trim(document.getElementById('13_44_1').options[i].innerHTML);if(expcity.indexOf(mt_expectcity_city,0)!=-1){document.getElementById('13_44_1').options[i].selected=true;break}}\", 200 );break;
  }
 }
}

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
if($('#11_244_1') && $('#edu-list .mt_degree').eq(maxid).html()){
	switch($('#edu-list .mt_degree').eq(maxid).html()){
		case '学士':document.getElementById('11_244_1').options[1].selected=true;break;
		case '硕士':document.getElementById('11_244_1').options[2].selected=true;break;
		case 'MBA':document.getElementById('11_244_1').options[3].selected=true;break;
		case '博士':document.getElementById('11_244_1').options[4].selected=true;break;
		case '双学士':document.getElementById('11_244_1').options[5].selected=true;break;
		default:document.getElementById('11_244_1').options[6].selected=true;break;
	}
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
for(var i=0;i<$('.infoOtherSkill').length;i++){
	if($('#17_66_'+(i+1)).length>0 && $('#skill-list .infoOtherSkill .mt_skillOtherLang').html()){
		var oskill=document.getElementById('17_66_'+(i+1));
		for(var j=0;j<oskill.options.length;j++){
			if(oskill.options[j].text==$('#skill-list .infoOtherSkill .mt_skillOtherLang').html()){
				oskill.options[j].selected=true;break;
			}
		}
	}
}
//工作经历
for (var i = 0; i < $('.infofulltimejobs').length; i++) {
	if($('#19_72_'+(i+1)) && $('#exp-list .infofulltimejobs .mt_startDate').eq(i).html()){
	$('#19_72_'+(i+1)).val($('#exp-list .infofulltimejobs .mt_startDate').eq(i).html()); }
	if($('#19_73_'+(i+1)) && $('#exp-list .infofulltimejobs .mt_endDate').eq(i).html()){
	$('#19_73_'+(i+1)).val($('#exp-list .infofulltimejobs .mt_endDate').eq(i).html()); }
	if($('#19_198_'+(i+1)) && $('#exp-list .infofulltimejobs .mt_companyName').eq(i).html()){
	$('#19_198_'+(i+1)).val($('#exp-list .infofulltimejobs .mt_companyName').eq(i).html()); }
	if($('#19_76_'+(i+1)) && $('#exp-list .infofulltimejobs .mt_positionName').eq(i).html()){
	$('#19_76_'+(i+1)).val($('#exp-list .infofulltimejobs .mt_positionName').eq(i).html()); }
	if($('#19_78_'+(i+1)) && $('#exp-list .infofulltimejobs .mt_workContent').eq(i+1).text()){
	$('#19_78_'+(i+1)).val($('#exp-list .infofulltimejobs .mt_workContent').eq(i+1).text()); }
	if($('#19_202_'+(i+1)) && $('#exp-list .infofulltimejobs .mt_department').eq(i).html()){
	$('#19_202_'+(i+1)).val($('#exp-list .infofulltimejobs .mt_department').eq(i).html()); }
	if($('#19_79_'+(i+1)) && $('#exp-list .infofulltimejobs .mt_reasons').eq(i).html()){
	$('#19_79_'+(i+1)).val($('#exp-list .infofulltimejobs .mt_reasons').eq(i).html());}
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
}
// 培训经历
for(var i=0;i<$('.infotraining').length;i++){
	if($('#15_56_'+(i+1)) && $('#training-list .infotraining #mt_startDate').eq(i).html()){
		$('#15_56_'+(i+1)).val($('#training-list .infotraining #mt_startDate').eq(i).html());}
	if($('#15_57_'+(i+1)) && $('#training-list .infotraining #mt_endDate').eq(i).html()){
		$('#15_57_'+(i+1)).val($('#training-list .infotraining #mt_endDate').eq(i).html());}
	if($('#15_58_'+(i+1)) && $('#training-list .infotraining #mt_trainingCompany').eq(i).html()){
		$('#15_58_'+(i+1)).val($('#training-list .infotraining #mt_trainingCompany').eq(i).html());}
	if($('#15_60_'+(i+1)) && $('#training-list .infotraining #mt_trainingName').eq(i).html()){
		$('#15_60_'+(i+1)).val($('#training-list .infotraining #mt_trainingName').eq(i).html());}
	if($('#15_61_'+(i+1)) && $('#training-list .infotraining #mt_certificateName').eq(i).html()){
		$('#15_61_'+(i+1)).val($('#training-list .infotraining #mt_certificateName').eq(i).html());}
	if($('#15_62_'+(i+1)) && $('#training-list .infotraining #mt_trainingDes').eq(i).html()){
		$('#15_62_'+(i+1)).val($('#training-list .infotraining #mt_trainingDes').eq(i).html());}
	if($('#15_59_'+(i+1)).length>0 && $('#training-list .infotraining #mt_trainingPlace').eq(i).html()){
		var trainingPlace=$('#training-list .infotraining #mt_trainingPlace').eq(i).html();
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
