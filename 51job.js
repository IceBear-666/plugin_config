if ($('#jm_qiuck_cover')) {
	$('#jm_qiuck_cover').fadeIn();
	setTimeout(function() {
		$('#jm_qiuck_cover').fadeOut()
	}, 1000)
}
var event = document.createEvent('HTMLEvents');
event.initEvent('change', true, false);

function addZero(date) {
	date = date.split('-');
	for (var i in date) {
		date[i] = date[i] < 10 ? '0' + date[i] : date[i]
	}
	return date.join('-')
}
function getTitle(obj) {
	if (obj.length) {
		var str = obj.parent('dd').prev('dt').text();
		if (str[0] == '*') {
			str = str.substr(1)
		}
		return str.trim()
	}
}
function selectFac(content, obj) {
	if (content && obj.length) {
		var opt = obj.get(0).options;
		for (var i in opt) {
			if (content.indexOf(opt[i].innerHTML) != -1) {
				opt[i].selected = true;
				break
			}
		}
	}
}
function getRank(rank) {
	rank = parseInt(rank.replace(/[^0-9]/ig, ''));
	if (rank <= 5) {
		return '前5%'
	} else if (rank <= 20) {
		return '前20%'
	} else if (rank <= 50) {
		return '前50%'
	}
}
if ($('#container h1').eq(0).text() == '基本信息') {
	if ($('input[name=\"cc_Cname_1_1\"]') && $('#mt_name').html()) {
		$('input[name=\"cc_Cname_1_1\"]').val($('#mt_name').html())
	}
	if ($('input[name=\"cc_Ename_1_1\"]') && $('#mt_ywname').html()) {
		$('input[name=\"cc_Ename_1_1\"]').val($('#mt_ywname').html())
	}
	if ($('select[name=\"cc_Gender_1_1\"]').length) {
		if ($('#mt_sex').html() && $('#mt_sex').html() == '男') {
			document.getElementById('cc_Gender_1_1').options[1].selected = true
		}
		if ($('#mt_sex').html() && $('#mt_sex').html() == '女') {
			document.getElementById('cc_Gender_1_1').options[2].selected = true
		}
	}
	if ($('input[name=\"cc_Birthday_3_1\"]') && $('#mt_birth').html()) {
		$('input[name=\"cc_Birthday_3_1\"]').val($('#mt_birth').html())
	}
	if ($('select[name=\"cc_Marriage_1_1\"]').length) {
		if ($('#mt_maritalstatus').html() && $('#mt_maritalstatus').html() == '未婚') {
			document.getElementById('cc_Marriage_1_1').options[1].selected = true
		}
		if ($('#mt_maritalstatus').html() && $('#mt_maritalstatus').html() == '已婚') {
			document.getElementById('cc_Marriage_1_1').options[2].selected = true
		}
		if ($('#mt_maritalstatus').html() && $('#mt_maritalstatus').html() == '离婚') {
			document.getElementById('cc_Marriage_1_1').options[3].selected = true
		}
	}
	if ($('input[name=\"cc_IDCard_1_1\"]') && $('#mt_id').html()) {
		$('input[name=\"cc_IDCard_1_1\"]').val($('#mt_id').html())
	}
	if ($('select[name=\"cc_Party_1_1\"]').length) {
		if ($('#mt_polistatus').html() && $('#mt_polistatus').html() == '中共党员') {
			document.getElementById('cc_Party_1_1').options[1].selected = true
		} else if ($('#mt_polistatus').html() && $('#mt_polistatus').html() == '共青团员') {
			document.getElementById('cc_Party_1_1').options[2].selected = true
		} else if ($('#mt_polistatus').html() && $('#mt_polistatus').html() == '群众') {
			document.getElementById('cc_Party_1_1').options[3].selected = true
		} else {
			document.getElementById('cc_Party_1_1').options[4].selected = true
		}
	}
	if ($('input[name=\"cc_Email_1_1\"]') && $('#mt_email').html()) {
		$('input[name=\"cc_Email_1_1\"]').val($('#mt_email').html())
	}
	if ($('input[name=\"cc_MobilePhone_1_1\"]') && $('#mt_tel').html()) {
		$('input[name=\"cc_MobilePhone_1_1\"]').val($('#mt_tel').html())
	}
	if ($('input[name=\"cc_QQ_1_1\"]') && $('#mt_qqname').html()) {
		$('input[name=\"cc_QQ_1_1\"]').val($('#mt_qqname').html())
	}
	if ($('input[name=\"cc_Phone_1_1\"]') && $('#mt_gudingtel').html()) {
		$('input[name=\"cc_Phone_1_1\"]').val($('#mt_gudingtel').html())
	}
	if ($('input[cname=\"紧急联系人姓名\"]') && $('#mt_jjlxr').html()) {
		$('input[cname=\"紧急联系人姓名\"]').val($('#mt_jjlxr').html())
	}
	else if ($('input[name=\"cc_Address_5_1\"]') && $('#mt_add').html()) {
		$('input[name=\"cc_Address_5_1\"]').val($('#mt_add').html())
	}
	if ($('input[name=\"cc_CCF8_6_1\"]') && $('#mt_add').html()) {
		$('input[name=\"cc_CCF8_6_1\"]').val($('#mt_add').html())
	}
	if ($('input[name=\"cc_ZipCode_1_1\"]') && $('#mt_zip').html()) {
		$('input[name=\"cc_ZipCode_1_1\"]').val($('#mt_zip').html())
	}
	if ($('input[name=\"cc_EmergentContact_1_1\"]') && $('#mt_jjlxr').html()) {
		$('input[name=\"cc_EmergentContact_1_1\"]').val($('#mt_jjlxr').html())
	}
	if ($('input[name=\"cc_EmergentContact_1_1\"]') && $('#mt_jjlxr').html()) {
		$('input[name=\"cc_EmergentContact_1_1\"]').val($('#mt_jjlxr').html())
	}
	if ($('input[name=\"cc_Contact_1_1\"]') && $('#mt_jjlxrtel').html()) {
		$('input[name=\"cc_Contact_1_1\"]').val($('#mt_jjlxrtel').html())
	}
	if ($('input[name=\"cc_CCA8_1_1\"]') && $('#mt_national').html()) {
		$('input[name=\"cc_CCA8_1_1\"]').val($('#mt_national').html())
	}
	if ($('input[name=\"cc_CCA6_1_1\"]') && $('input[name=\"cc_CCA6_1_1\"]').parent('dd').prev('dt').text() == '国籍' && $('#mt_national').html()) {
		$('input[name=\"cc_CCA6_1_1\"]').val($('#mt_national').html())
	}
	if ($('input[name=\"cc_CCA6_1_1\"]') && getTitle($('input[name=\"cc_CCA6_1_1\"]')) == '民族') {
		$('input[name=\"cc_CCA6_1_1\"]').val($('#mt_nation').html())
	}
	if ($('input[name=\"cc_CCA7_1_1\"]') && $('#mt_height').html()) {
		$('input[name=\"cc_CCA7_1_1\"]').val($('#mt_height').html())
	}
	if ($('input[name=\"cc_CCA9_1_1\"]') && $('#mt_native_city').html()) {
		$('input[name=\"cc_CCA9_1_1\"]').val($('#mt_native_city').html())
	}
	if ($('#ddl_City_1_1').length && $('#cc_City_1_1').length && $('#mt_livecity_pro').html() && $('#mt_livecity_city').html()) {
		var pro = document.getElementById('ddl_City_1_1');
		var city = document.getElementById('cc_City_1_1');
		var nowpro = $('#mt_livecity_pro').html();
		var nowcity = $('#mt_livecity_city').html();
		var prostr;
		var citystr;
		if ($('#mt_livecity_city').html() == '深圳') {
			pro.options[4].selected = true;
			pro.dispatchEvent(event)
		} else {
			for (var i = 0; i < pro.options.length; i++) {
				prostr = $.trim(pro.options[i].innerHTML);
				if (prostr.indexOf(nowpro, 0) != -1) {
					pro.options[i].selected = true;
					pro.dispatchEvent(event);
					for (var j = 0; j < city.options.length; j++) {
						citystr = $.trim(city.options[j].innerHTML);
						if (citystr.indexOf(nowcity, 0) != -1) {
							city.options[j].selected = true;
							break
						}
					};
					break
				}
			}
		}
	}
	if ($('#ddl_Hukou_1_1').length && $('#cc_Hukou_1_1').length && $('#mt_hukoucitynow').html() && $('#mt_hukoucitynow_city').html()) {
		var pro = document.getElementById('ddl_Hukou_1_1');
		var city = document.getElementById('cc_Hukou_1_1');
		var nowpro = $('#mt_hukoucitynow').html();
		var nowcity = $('#mt_hukoucitynow_city').html();
		var prostr;
		var citystr;
		if ($('#mt_hukoucitynow_city').html() == '深圳') {
			pro.options[4].selected = true;
			pro.dispatchEvent(event)
		} else {
			for (var i = 0; i < pro.options.length; i++) {
				prostr = $.trim(pro.options[i].innerHTML);
				if (prostr.indexOf(nowpro, 0) != -1) {
					pro.options[i].selected = true;
					pro.dispatchEvent(event);
					for (var j = 0; j < city.options.length; j++) {
						citystr = $.trim(city.options[j].innerHTML);
						if (citystr.indexOf(nowcity, 0) != -1) {
							city.options[j].selected = true;
							break
						}
					};
					break
				}
			}
		}
	}
	if ($('#ddl_TargetCity_1_1').length && $('#cc_TargetCity_1_1').length && $('#mt_expectcity').html() && $('#mt_expectcity_city').html()) {
		var pro = document.getElementById('ddl_TargetCity_1_1');
		var city = document.getElementById('cc_TargetCity_1_1');
		var nowpro = $('#mt_expectcity').html();
		var nowcity = $('#mt_expectcity_city').html();
		var prostr;
		var citystr;
		if ($('#mt_expectcity_city').html() == '深圳') {
			pro.options[4].selected = true;
			pro.dispatchEvent(event)
		} else {
			for (var i = 0; i < pro.options.length; i++) {
				prostr = $.trim(pro.options[i].innerHTML);
				if (prostr.indexOf(nowpro, 0) != -1) {
					pro.options[i].selected = true;
					pro.dispatchEvent(event);
					for (var j = 0; j < city.options.length; j++) {
						citystr = $.trim(city.options[j].innerHTML);
						if (citystr.indexOf(nowcity, 0) != -1) {
							city.options[j].selected = true;
							break
						}
					};
					break
				}
			}
		}
	}
	if ($('#ddl_CCE1_5_1').length && $('#cc_CCE1_5_1').length && $('#mt_nativeplace').html() && $('#mt_native_city').html()) {
		var pro = document.getElementById('ddl_CCE1_5_1');
		var city = document.getElementById('cc_CCE1_5_1');
		var nowpro = $('#mt_nativeplace').html();
		var nowcity = $('#mt_native_city').html();
		var prostr;
		var citystr;
		if ($('#mt_native_city').html() == '深圳') {
			pro.options[4].selected = true;
			pro.dispatchEvent(event)
		} else {
			for (var i = 0; i < pro.options.length; i++) {
				prostr = $.trim(pro.options[i].innerHTML);
				if (prostr.indexOf(nowpro, 0) != -1) {
					pro.options[i].selected = true;
					pro.dispatchEvent(event);
					for (var j = 0; j < city.options.length; j++) {
						citystr = $.trim(city.options[j].innerHTML);
						if (citystr.indexOf(nowcity, 0) != -1) {
							city.options[j].selected = true;
							break
						}
					};
					break
				}
			}
		}
	}
	if ($('#cc_CCA16_1_1').length && $('#mt_nation').html()) {
		var nat = $('#cc_CCA16_1_1').get(0).options;
		for (var i in nat) {
			if ($('#mt_nation').html().indexOf(nat[i].innerHTML) != -1) {
				nat[i].selected = true;
				break
			}
		}
	}
	if ($('#cc_CCA17_1_1') && $('#mt_height').html()) {
		$('#cc_CCA17_1_1').val($('#mt_height').html())
	}
}
var eduary = [];
for (var i = 0; i < $('.infopledu').length; i++) {
	eduary.push({
		id: i,
		year: $('.infopledu .mt_endYearY').eq(i).html()
	})
}
eduary.sort(function(a, b) {
	return b.year - a.year
});
if ($('#container h1').eq(0).text() == '教育信息' || $('#container h1').eq(0).text() == '教育经历' || $('#container h1').eq(0).text() == '最高学历' || $('#container h1').eq(0).text() == '其他学历') {
	eduary.forEach(function(item, index) {
		var id = item['id'];
		var eduinfo = $('.infopledu');
		var st = eduinfo.find('.mt_startYear').eq(id).html() + '-1';
		var et = eduinfo.find('.mt_endYear').eq(id).html() + '-1';
		var edu = eduinfo.find('.mt_education').eq(id).html();
		var deg = eduinfo.find('.mt_degree').eq(id).html();
		var rank = eduinfo.find('.mt_classranking').eq(id).html();
		var major = eduinfo.find('.mt_major').eq(id).html();
		rank = getRank(rank);
		if (index == 0) {
			if (edu.length > 0) {
				if ($('#cc_Degree_1_1').length) {
					selectFac(edu, $('#cc_Degree_1_1'))
				}
			}
			if (deg.length > 0) {
				if ($('#cc_CCA21_1_1').length && getTitle($('#cc_CCA21_1_1')) == '学位') {
					selectFac(deg, $('#cc_CCA21_1_1'))
				}
			}
			if (st.length > 0) {
				if ($('#cc_CCC11_3_1') && getTitle($('#cc_GradDate_3_1')) != '在校时间从') {
					$('#cc_CCC11_3_1').val(st)
				} else if ($('#cc_GradDate_3_1') && getTitle($('#cc_GradDate_3_1')) == '在校时间从') {
					$('#cc_GradDate_3_1').val(st)
				}
			}
			if (et.length > 0) {
				if ($('#cc_GradDate_3_1') && getTitle($('#cc_GradDate_3_1')) == '毕业时间') {
					$('#cc_GradDate_3_1').val(et)
				} else if ($('#cc_CCC2_3_1') && getTitle($('#cc_CCC2_3_1')) == '到') {
					$('#cc_CCC2_3_1').val(et)
				}
			}
			if ($('#ddl_CCE4_5_1').length) {
				var hy = 2018 - parseInt($('.infopledu .mt_endYearY').eq(id).html());
				var hm = parseInt($('.infopledu .mt_endYearM').eq(id).html());
				document.getElementById('ddl_CCE4_5_1').options[4 - hy].selected = true;
				document.getElementById('cc_CCE4_5_1').options[hm - 1].selected = true
			}
			if (rank.length > 0) {
				var rantit = getTitle($('#cc_Score_1_1'));
				if ($('#cc_Score_1_1') && (rantit == '学习成绩排名' || rantit == '成绩排名')) {
					selectFac(rank, $('#cc_Score_1_1'))
				}
			}
			if (major.length > 0) {
				if ($('#cc_Course_6_1')) {
					$('#cc_Course_6_1').val(major)
				}
			}
		} else if (index == 1) {
			if (edu.length > 0) {
				if ($('#cc_CCA1_1_1').length) {
					selectFac(edu, $('#cc_CCA1_1_1'))
				}
			}
			if (deg.length > 0) {
				if ($('#cc_CCA22_1_1').length) {
					selectFac(deg, $('#cc_CCA22_1_1'))
				}
			}
			if (st.length > 0) {
				if ($('#cc_CCC1_3_1') && getTitle($('#cc_CCC1_3_1')) == '在校时间从') {
					$('#cc_CCC1_3_1').val(st)
				} else if ($('#cc_CCC2_3_1')) {
					$('#cc_CCC2_3_1').val(st)
				}
			}
			if (et.length > 0) {
				if ($('#cc_CCC12_3_1') && getTitle($('#cc_CCC12_3_1')) == '到') {
					$('#cc_CCC12_3_1').val(et)
				} else if ($('#cc_CCC1_3_1')) {
					$('#cc_CCC1_3_1').val(et)
				}
			}
			if (rank.length > 0) {
				if ($('#cc_CCA14_1_1') && (getTitle($('#cc_CCA14_1_1')) == '学习成绩排名2' || getTitle($('#cc_CCA14_1_1')) == '成绩排名2')) {
					selectFac(rank, $('#cc_CCA14_1_1'))
				} else if ($('#cc_CCA3_1_1') && getTitle($('#cc_CCA3_1_1')) == '学习成绩排名') {
					selectFac(rank, $('#cc_CCA3_1_1'))
				}
			}
			if (major.length > 0) {
				if ($('#cc_CCF1_6_1') && getTitle($('#cc_CCF1_6_1')) == '主修课程2') {
					$('#cc_CCF1_6_1').val(major)
				} else if ($('#cc_CCF2_6_1') && getTitle($('#cc_CCF2_6_1')) == '主修课程') {
					$('#cc_CCF2_6_1').val(major)
				}
			}
		}
	});
	if ($('#cc_CCC12_3_1') && $('#cc_CCC12_3_1').parent('dd').prev('dt').text() == '本科入学时间') {
		var id2 = -1;
		for (var i = 0; i < $('.infopledu').length; i++) {
			if ($('.infopledu .mt_education').eq(i).html().indexOf('本科') >= 0) {
				id2 = i;
				break
			}
		}
		if (id2 > -1) {
			if ($('#cc_CCC12_3_1') && $('.infopledu .mt_startYear').eq(id2).html()) {
				$('#cc_CCC12_3_1').val($('.infopledu .mt_startYear').eq(id2).html() + '-1')
			}
			if ($('#cc_CCC1_3_1') && $('.infopledu .mt_endYear').eq(id2).html()) {
				$('#cc_CCC1_3_1').val($('.infopledu .mt_endYear').eq(id2).html() + '-1')
			}
			if (document.getElementById('cc_Score_1_1') && $('#cc_Score_1_1').parent('dd').prev('dt').html() == '本科成绩排名') {
				switch ($('.infopledu .mt_professionalranking').eq(id2).html()) {
				case '前5%':
					document.getElementById('cc_Score_1_1').options[1].selected = true;
					break;
				case '前10%':
				case '前20%':
					document.getElementById('cc_Score_1_1').options[2].selected = true;
					break;
				case '前30%':
				case '前40%':
				case '前50%':
					document.getElementById('cc_Score_1_1').options[3].selected = true;
					break;
				default:
					document.getElementById('cc_Score_1_1').options[4].selected = true;
					break
				}
			}
			if ($('#cc_CCF1_6_1') && $('.infopledu .mt_major').eq(id2).html()) {
				$('#cc_CCF1_6_1').val($('.infopledu .mt_major').eq(id2).html())
			}
		}
	}
	if ($('#cc_CCC11_3_1') && $('#cc_CCC11_3_1').parent('dd').prev('dt').text() == '硕士入学时间') {
		var id3 = -1;
		for (var i = 0; i < $('.infopledu').length; i++) {
			if ($('.infopledu .mt_education').eq(i).html().indexOf('硕士') >= 0) {
				id3 = i;
				break
			}
		}
		if (id3 >= 0) {
			if ($('#cc_CCC11_3_1') && $('.infopledu .mt_startYear').eq(id3).html()) {
				$('#cc_CCC11_3_1').val($('.infopledu .mt_startYear').eq(id3).html() + '-1')
			}
			if ($('#cc_CCC2_3_1') && $('.infopledu .mt_endYear').eq(id3).html()) {
				$('#cc_CCC2_3_1').val($('.infopledu .mt_endYear').eq(id3).html() + '-1')
			}
			if (document.getElementById('cc_CCA14_1_1') && $('#cc_CCA14_1_1').parent('dd').prev('dt').html() == '硕士成绩排名') {
				switch ($('.infopledu .mt_professionalranking').eq(id3).html()) {
				case '前5%':
					document.getElementById('cc_CCA14_1_1').options[1].selected = true;
					break;
				case '前10%':
				case '前20%':
					document.getElementById('cc_CCA14_1_1').options[2].selected = true;
					break;
				case '前30%':
				case '前40%':
				case '前50%':
					document.getElementById('cc_CCA14_1_1').options[3].selected = true;
					break;
				default:
					document.getElementById('cc_CCA14_1_1').options[4].selected = true;
					break
				}
			}
			if ($('#cc_CCF6_6_1') && $('.infopledu .mt_major').eq(id3).html()) {
				$('#cc_CCF6_6_1').val($('.infopledu .mt_major').eq(id3).html())
			}
		}
	}
	if ($('#cc_CCC3_3_1') && $('#cc_CCC3_3_1').parent('dd').prev('dt').text() == '博士入学时间') {
		var id4 = -1;
		for (var i = 0; i < $('.infopledu').length; i++) {
			if ($('.infopledu .mt_education').eq(i).html().indexOf('博士') >= 0) {
				id4 = i;
				break
			}
		}
		if (id4 >= 0) {
			if ($('#cc_CCC3_3_1') && $('.infopledu .mt_startYear').eq(id4).html()) {
				$('#cc_CCC3_3_1').val($('.infopledu .mt_startYear').eq(id4).html() + '-1')
			}
			if ($('#cc_CCC13_3_1') && $('.infopledu .mt_endYear').eq(id4).html()) {
				$('#cc_CCC13_3_1').val($('.infopledu .mt_endYear').eq(id4).html() + '-1')
			}
			if ($('#cc_CCF11_6_1') && $('.infopledu .mt_major').eq(id4).html()) {
				$('#cc_CCF11_6_1').val($('.infopledu .mt_major').eq(id4).html())
			}
		}
	}
}
if ($('#container h1').eq(0).text() == '最高学历') {
	var skilllevel = 0;
	var maxlevel = 0;
	for (var i = 0; i < $('.infoEnglishSkill').length; i++) {
		if ($('.mt_skillEngLevel').eq(i).html() == '专业八级') {
			skilllevel = 6
		} else if ($('.mt_skillEngLevel').eq(i).html() == '专业四级') {
			skilllevel = 3
		} else if ($('.mt_skillEngLevel').eq(i).html() == '大学英语六级') {
			skilllevel = 2
		} else {
			skilllevel = 1
		}
		if (skilllevel > maxlevel) {
			maxlevel = skilllevel
		}
	}
	for (var i = 0; i < $('.infoOtEnglishSkil').length; i++) {
		if ($('.mt_otherSkillEngLevel').eq(i).html() == '托福') {
			skilllevel = 5
		} else if ($('.mt_otherSkillEngLevel').eq(i).html() == '雅思') {
			skilllevel = 4
		}
		if (skilllevel > maxlevel) {
			maxlevel = skilllevel
		}
	}
	if ($('#ddl_EnglishLevel_5_1').length) {
		var engskill = document.getElementById('ddl_EnglishLevel_5_1');
		if (maxlevel == 6) {
			engskill.options[4].selected = true
		} else if (maxlevel == 5) {
			engskill.options[5].selected = true
		} else if (maxlevel == 4) {
			engskill.options[6].selected = true
		} else if (maxlevel == 3) {
			engskill.options[3].selected = true
		} else if (maxlevel == 2) {
			engskill.options[2].selected = true
		} else if (maxlevel == 1) {
			engskill.options[1].selected = true
		}
		engskill.dispatchEvent(event)
	}
	if ($('#ddl_OtherLanguage_5_1').length && $('.infoOtherSkill .mt_skillOtherLang').eq(0).html()) {
		var osk = document.getElementById('ddl_OtherLanguage_5_1');
		switch ($('.infoOtherSkill .mt_skillOtherLang').eq(0).html()) {
		case '德语':
			osk.options[1].selected = true;
			break;
		case '日语':
			osk.options[3].selected = true;
			break;
		case '法语':
			osk.options[2].selected = true;
			break;
		default:
			osk.options[4].selected = true;
			break
		}
		osk.dispatchEvent(event)
	}
}
if ($('#container h1').eq(0).text() == '语言能力') {
	var skilllevel = 0;
	var maxlevel = 0;
	var maxscore;
	for (var i = 0; i < $('.infoEnglishSkill').length; i++) {
		if ($('.mt_skillEngLevel').eq(i).html() == '专业八级') {
			skilllevel = 6
		} else if ($('.mt_skillEngLevel').eq(i).html() == '专业四级') {
			skilllevel = 3
		} else if ($('.mt_skillEngLevel').eq(i).html() == '大学英语六级') {
			skilllevel = 2
		} else {
			skilllevel = 1
		}
		if (skilllevel > maxlevel) {
			maxlevel = skilllevel;
			maxscore = $('.infoEnglishSkill .mt_skillEngSorce').eq(i).html()
		}
	}
	for (var i = 0; i < $('.infoOtEnglishSkil').length; i++) {
		if ($('.mt_otherSkillEngLevel').eq(i).html() == '托福') {
			skilllevel = 5
		} else if ($('.mt_otherSkillEngLevel').eq(i).html() == '雅思') {
			skilllevel = 4
		}
		if (skilllevel > maxlevel) {
			maxlevel = skilllevel;
			maxscore = $('.infoOtEnglishSkil .mt_otherSkillEngSorce').eq(i).html()
		}
	}
	if ($('#ddl_CCE10_5_1').length && $('#ddl_CCE10_5_1').parent().prev().html() == '其他英语考试') {
		var engskill = document.getElementById('ddl_CCE10_5_1');
		if ($('.infoOtEnglishSkill .mt_otherSkillEngLevel').html() == '托福') {
			engskill.options[1].selected = true
		} else if ($('.infoOtEnglishSkill .mt_otherSkillEngLevel').html() == '雅思') {
			engskill.options[2].selected = true
		} 
		engskill.dispatchEvent(event);
		if ($('#cc_CCF2_6_1').length) {
			$('#cc_CCF2_6_1').val($('.infoOtEnglishSkill .mt_otherSkillEngSorce').html())
		}
	}
	if ($('#ddl_EnglishLevel_5_1').length) {
		var engskill = document.getElementById('ddl_EnglishLevel_5_1');
		if (maxlevel == 6) {
			engskill.options[4].selected = true
		} else if (maxlevel == 5) {
			engskill.options[5].selected = true
		} else if (maxlevel == 4) {
			engskill.options[6].selected = true
		} else if (maxlevel == 3) {
			engskill.options[3].selected = true
		} else if (maxlevel == 2) {
			engskill.options[2].selected = true
		} else if (maxlevel == 1) {
			engskill.options[1].selected = true
		}
		engskill.dispatchEvent(event);
		if ($('#cc_CCA40_1_1') && maxscore) {
			$('#cc_CCA40_1_1').val(maxscore)
		}
		if ($('#cc_CCA21_1_1') && maxscore) {
			$('#cc_CCA21_1_1').val(maxscore)
		}
		if ($('#cc_CCA30_1_1') && $('.infoOtherSkill .mt_skillOtherLang').eq(0).html()) {
			$('#cc_CCA30_1_1').val($('.infoOtherSkill .mt_skillOtherLang').eq(0).html())
		}
		if ($('#cc_CCA41_1_1').length) {
			var oth = $('#cc_CCA41_1_1').get(0).options;
			for (var i in oth) {
				if (oth[i].innerHTML == $('.infoOtherSkill .mt_skillGraspLevel').eq(0).html()) {
					oth[i].selected = true;
					break
				}
			}
		}
	}
	if ($('#ddl_OtherLanguage_5_1').length && $('.infoOtherSkill .mt_skillOtherLang').eq(0).html()) {
		var osk = document.getElementById('ddl_OtherLanguage_5_1');
		switch ($('.infoOtherSkill .mt_skillOtherLang').eq(0).html()) {
		case '德语':
			osk.options[1].selected = true;
			break;
		case '日语':
			osk.options[3].selected = true;
			break;
		case '法语':
			osk.options[2].selected = true;
			break;
		default:
			osk.options[4].selected = true;
			break
		}
		osk.dispatchEvent(event)
	}
	if ($('#cc_CCF12_6_1') && $('.infoOtherSkill .mt_skillOtherLang').eq(0).html()) {
		$('#cc_CCF12_6_1').val($('.infoOtherSkill .mt_skillOtherLang').eq(0).html())
	}
}
if ($('#container h1').eq(0).text() == '学生实践经验' || $('#container h1').eq(0).text() == '项目经验') {
	for (var i = 0; i < $('.infoproject').length; i++) {
		if (i > 2) {
			break
		} else {
			if ($('#cc_CCC1_3_' + (i + 1)) && $('.infoproject .mt_prostartdate').eq(i).html()) {
				$('#cc_CCC1_3_' + (i + 1)).val($('.infoproject .mt_prostartdate').eq(i).html() + '-1')
			}
			if ($('#cc_CCC2_3_' + (i + 1)) && $('.infoproject .mt_proenddate').eq(i).html()) {
				$('#cc_CCC2_3_' + (i + 1)).val($('.infoproject .mt_proenddate').eq(i).html() + '-1')
			}
			if ($('#cc_CCF1_6_' + (i + 1)) && $('.infoproject .mt_projectRemark').eq(i).html()) {
				$('#cc_CCF1_6_' + (i + 1)).val($('.infoproject .mt_projectRemark').eq(i).html())
			}
		}
	}
	if ($('#cc_CCA1_1_1').length) {
		for (var i = 0; i < $('.infoparttimejobs').length; i++) {
			if ($('#cc_CCC1_3_' + (i + 1)) && $('.infoparttimejobs .mt_startDate').eq(i).html()) {
				$('#cc_CCC1_3_' + (i + 1)).val($('.infoparttimejobs .mt_startDate').eq(i).html() + '-1')
			}
			if ($('#cc_CCC2_3_' + (i + 1)) && $('.infoparttimejobs .mt_endDate').eq(i).html()) {
				$('#cc_CCC2_3_' + (i + 1)).val($('.infoparttimejobs .mt_endDate').eq(i).html() + '-1')
			}
			if ($('#cc_CCA1_1_' + (i + 1)) && $('.infoparttimejobs .mt_companyName').eq(i).html()) {
				$('#cc_CCA1_1_' + (i + 1)).val($('.infoparttimejobs .mt_companyName').eq(i).html())
			}
			if ($('#cc_CCA2_1_' + (i + 1)) && $('.infoparttimejobs .mt_companyproperty').eq(i).html()) {
				$('#cc_CCA2_1_' + (i + 1)).val($('.infoparttimejobs .mt_companyproperty').eq(i).html())
			}
			if ($('#cc_CCF2_6_' + (i + 1)) && $('.infoparttimejobs .mt_positionName').eq(i).html()) {
				$('#cc_CCF2_6_' + (i + 1)).val($('.infoparttimejobs .mt_positionName').eq(i).html())
			}
			if ($('#cc_CCF1_6_' + (i + 1)) && $('.infoparttimejobs .mt_workContent .workContent').eq(i).text()) {
				$('#cc_CCF1_6_' + (i + 1)).val($('.infoparttimejobs .mt_workContent .workContent').eq(i).text())
			}
		}
	}
	if ($('#cc_CCA8_1_1').length) {
		var schOpt = $('#cc_CCA8_1_1').get(0).options;
		if ($('.infoschoolclub').length) {
			schOpt[1].selected = true;
			var schcon = '';
			$('#cc_CCF2_6_1').val('');
			$('.infoschoolclub').each(function(i, val) {
				schcon = $('#cc_CCF2_6_1').val();
				schcon = schcon + $('.infoschoolclub .mt_schClubList').eq(i).html() + '\\n\\n';
				$('#cc_CCF2_6_1').val(schcon)
			})
		} else {
			schOpt[2].selected = true
		}
	}
	if ($('#cc_CCA16_1_1').length) {
		var jobOpt = $('#cc_CCA16_1_1').get(0).options;
		if ($('.infoparttimejobs').length) {
			jobOpt[1].selected = true;
			$('.infoparttimejobs').each(function(i, val) {
				var st = $('.infoparttimejobs .mt_startDate').eq(i).html() + '-1';
				var et = $('.infoparttimejobs .mt_endDate').eq(i).html() + '-1';
				var cpname = $('.infoparttimejobs .mt_companyName').eq(i).html();
				var cdes = $('.infoparttimejobs .mt_workDes .workDes').eq(i).html();
				if (i == 0) {
					$('#cc_CCC12_3_1').val(st);
					$('#cc_CCC2_3_1').val(et);
					$('#cc_CCF3_6_1').val(cpname);
					$('#cc_CCF4_6_1').val(cdes)
				} else if (i == 1) {
					$('#cc_CCC11_3_1').val(st);
					$('#cc_CCC3_3_1').val(et);
					$('#cc_CCF5_6_1').val(cpname);
					$('#cc_CCF6_6_1').val(cdes)
				}
			})
		}
	}
}
if ($('#container h1').eq(0).text() == '奖励信息') {
	for (var i = 0; i < $('.infoschaward').length; i++) {
		if (i <= 2) {
			var schatime = $('.infoschaward .mt_awardsDate').eq(i).html();
			var schaary = schatime.split('-');
			var y = 2018 - parseInt(schaary[0]);
			var d = parseInt(schaary[1]);
			var l = 0;
			switch ($('.infoschaward .mt_awardsLevel').eq(i).html()) {
			case '特等奖':
				l = 0;
				break;
			case '一等奖':
				l = 1;
				break;
			case '二等奖':
				l = 2;
				break;
			case '三等奖':
				l = 3;
				break
			}
			if ($('#cc_ResumeSubID_7_' + (i + 1)).next().find('select').eq(0).length) {
				$('#cc_ResumeSubID_7_' + (i + 1)).next().find('select').eq(0).get(0).options[y].selected = true;
				$('#cc_ResumeSubID_7_' + (i + 1)).next().find('select').eq(1).get(0).options[d].selected = true
			}
			$('#cc_CCA2_1_' + (i + 1)).val($('.infoschaward .mt_awardsName').eq(i).html());
			if ($('#ddl_CCE1_5_' + (i + 1)).length) {
				var adtype = $('#ddl_CCE1_5_' + (i + 1)).get(0);
				for (var j = 0; j < 6; j++) {
					if (adtype.options[j].innerHTML == $('.infoschaward .mt_awardsType').eq(i).html()) {
						adtype.options[j].selected = true;
						$('#ddl_CCE1_5_' + (i + 1)).trigger('change');
						$('#cc_CCE1_5_' + (i + 1)).get(0).options[l].selected = true;
						break
					}
				}
			}
		} else {
			break
		}
	}
}
if ($('#container h1').eq(0).text() == '家庭成员') {
	if ($('#cc_CCA6_1_1') && $('#mt_fmname').html()) {
		$('#cc_CCA6_1_1').val($('#mt_fmname').html())
	}
	if ($('#cc_CCA7_1_1') && $('#mt_fmrelation').html()) {
		$('#cc_CCA7_1_1').val($('#mt_fmrelation').html())
	}
	if ($('#cc_CCA8_1_1') && $('#mt_fmwork').html()) {
		$('#cc_CCA8_1_1').val($('#mt_fmwork').html())
	}
	if ($('#cc_CCA9_1_1') && $('#mt_fmphone').html()) {
		$('#cc_CCA9_1_1').val($('#mt_fmphone').html())
	}
}
if ($('#container h1').eq(0).text() == '培训经历') {
	if ($('#cc_CCF1_6_1').length) {
		for (var i = 0; i < $('.infotraining').length; i++) {
			if (i <= 2) {
				if ($('#cc_CCA1_1_' + (i + 1)) && $('.mt_trainingName').eq(i).html()) {
					$('#cc_CCA1_1_' + (i + 1)).val($('.mt_trainingName').eq(i).html())
				}
				if ($('#cc_CCA2_1_' + (i + 1)) && $('.mt_trainingCompany').eq(i).html()) {
					$('#cc_CCA2_1_' + (i + 1)).val($('.mt_trainingCompany').eq(i).html())
				}
				if ($('#cc_CCF1_6_' + (i + 1)) && $('.mt_trainingDes').eq(i).html()) {
					$('#cc_CCF1_6_' + (i + 1)).val($('.mt_trainingDes').eq(i).html())
				}
				if ($('#cc_CCA2_1_' + (i + 1)).parents('dl').next('dl').find('select').eq(0).length) {
					var tratime = $('.infotraining .mt_startDate').eq(i).html();
					var traary = tratime.split('-');
					var tray = 2018 - parseInt(traary[0]);
					var tram = parseInt(traary[1]);
					$('#cc_CCA2_1_1').parents('dl').next('dl').find('select').eq(0).get(0).options[tray].selected = true;
					$('#cc_CCA2_1_1').parents('dl').next('dl').find('select').eq(1).get(0).options[tram].selected = true
				}
			} else {
				break
			}
		}
	}
}
if ($('#container h1').eq(0).text() == '工作经验') {
	if ($('#cc_CCC1_3_1').length) {
		for (var i = 0; i < $('.infofulltimejobs').length; i++) {
			if (i <= 2) {
				if ($('#cc_CCC1_3_' + (i + 1)) && $('.infofulltimejobs .mt_startDate').eq(i).html()) {
					$('#cc_CCC1_3_' + (i + 1)).val($('.infofulltimejobs .mt_startDate').eq(i).html() + '-1')
				}
				if ($('#cc_CCC2_3_' + (i + 1)) && $('.infofulltimejobs .mt_endDate').eq(i).html()) {
					$('#cc_CCC2_3_' + (i + 1)).val($('.infofulltimejobs .mt_endDate').eq(i).html() + '-1')
				}
				if ($('#cc_CCA1_1_' + (i + 1)) && $('.infofulltimejobs .mt_companyName').eq(i).html()) {
					$('#cc_CCA1_1_' + (i + 1)).val($('.infofulltimejobs .mt_companyName').eq(i).html())
				}
				if ($('#cc_CCA2_1_' + (i + 1)).length) {
					var csize = $('#cc_CCA2_1_' + (i + 1)).get(0);
					switch ($('.infofulltimejobs .mt_companySize').eq(i).html()) {
					case '少于50人':
						csize.options[1].selected = true;
						break;
					case '50-149人':
						csize.options[2].selected = true;
						break;
					case '150-499人':
						csize.options[3].selected = true;
						break;
					default:
						csize.options[4].selected = true;
						break
					}
				}
				if ($('#cc_CCA4_1_' + (i + 1)) && $('.infofulltimejobs .mt_department').eq(i).html()) {
					$('#cc_CCA4_1_' + (i + 1)).val($('.infofulltimejobs .mt_department').eq(i).html())
				}
				if ($('#cc_CCF1_6_' + (i + 1)) && $('.infofulltimejobs .mt_workContent').eq(i).text()) {
					$('#cc_CCF1_6_' + (i + 1)).val($('.infofulltimejobs .mt_workContent').eq(i).text())
				}
				if ($('#cc_CCE1_1_' + (i + 1)).length) {
					var ctype = $('#cc_CCE1_1_' + (i + 1)).get(0);
					switch ($('.infofulltimejobs .mt_companyCat').eq(i).html()) {
					case '互联网/游戏/软件':
						ctype.options[1].selected = true;
						break;
					case '电子/通信/硬件':
						ctype.options[2].selected = true;
						break;
					case '房地产/建筑/物业':
						ctype.options[24].selected = true;
						break;
					case '金融':
						ctype.options[3].selected = true;
						break;
					case '消费品':
						ctype.options[5].selected = true;
						break;
					case '汽车/机械/制造':
						ctype.options[13].selected = true;
						break;
					case '服务/外包/中介':
						ctype.options[7].selected = true;
						break;
					case '广告/媒体/教育/文化':
						ctype.options[11].selected = true;
						break;
					case '交通/贸易/物流':
						ctype.options[21].selected = true;
						break;
					case '制药/医疗':
						ctype.options[8].selected = true;
						break;
					case '能源/化工/环保':
						ctype.options[61].selected = true;
						break
					}
				}
			} else {
				break
			}
		}
	}
}
if ($('#container h1').eq(0).text() == '获得证书') {
	if ($('#cc_CCA2_1_1').length) {
		for (var i = 0; i < $('.infoplcerti').length; i++) {
			if (i <= 2) {
				if ($('#cc_CCA2_1_' + (i + 1)) && $('.infoplcerti .mt_certificateName').eq(i).html()) {
					$('#cc_CCA2_1_' + (i + 1)).val($('.infoplcerti .mt_certificateName').eq(i).html())
				}
				var certime = $('.infoplcerti .mt_getDate').eq(i).html();
				var cerary = certime.split('-');
				var cery = 2018 - parseInt(cerary[0]);
				var cerm = parseInt(cerary[1]);
				$('#cc_CCA2_1_' + (i + 1)).parents('dl').prev('dl').find('select').eq(0).get(0).options[cery].selected = true;
				$('#cc_CCA2_1_' + (i + 1)).parents('dl').prev('dl').find('select').eq(1).get(0).options[cerm].selected = true
			} else {
				break
			}
		}
	}
}
if ($('#cc_SelfAssessment_6_1') && $('#mt_selfIntro').html()) {
	$('#cc_SelfAssessment_6_1').val($('#mt_selfIntro').html())
}
if ($('#container h1').eq(0).text() == '项目/课题经验') {
	for (var i = 0; i < $('.infoproject').length; i++) {
		if ($('#cc_CCF1_6_' + (i + 1)) && $('.infoproject .mt_projectName').eq(i).html()) {
			$('#cc_CCF1_6_' + (i + 1)).val($('.infoproject .mt_projectName').eq(i).html())
		}
		if ($('#cc_CCF2_6_' + (i + 1)) && $('.infoproject .mt_projectRemark').eq(i).html()) {
			$('#cc_CCF2_6_' + (i + 1)).val($('.infoproject .mt_projectRemark').eq(i).html())
		}
	}
}
if ($('#container h1').eq(0).text() == '实习经历') {
	for (var i = 0; i < $('.infoparttimejobs').length; i++) {
		if ($('#cc_CCC1_3_' + (i + 1)) && $('.infoparttimejobs .mt_startDate').eq(i).html()) {
			$('#cc_CCC1_3_' + (i + 1)).val($('.infoparttimejobs .mt_startDate').eq(i).html() + '-1')
		}
		if ($('#cc_CCC2_3_' + (i + 1)) && $('.infoparttimejobs .mt_endDate').eq(i).html()) {
			$('#cc_CCC2_3_' + (i + 1)).val($('.infoparttimejobs .mt_endDate').eq(i).html() + '-1')
		}
		if ($('#cc_CCF2_6_' + (i + 1)) && $('.infoparttimejobs .mt_companyName').eq(i).html()) {
			$('#cc_CCF2_6_' + (i + 1)).val($('.infoparttimejobs .mt_companyName').eq(i).html())
		}
		if ($('#cc_CCF1_6_' + (i + 1)) && $('.infoparttimejobs .mt_workContent').eq(i).text()) {
			$('#cc_CCF1_6_' + (i + 1)).val($('.infoparttimejobs .mt_workContent').eq(i).text())
		}
	}
}
if ($('#container h1').eq(0).text() == '社团经验') {
	for (var i = 0; i < $('.infoschoolclub').length; i++) {
		if (i < 3) {
			if ($('#cc_CCC1_3_' + (i + 1)) && $('.infoschoolclub .mt_startDate').eq(i).html()) {
				$('#cc_CCC1_3_' + (i + 1)).val($('.infoschoolclub .mt_startDate').eq(i).html() + '-1')
			}
			if ($('#cc_CCC2_3_' + (i + 1)) && $('.infoschoolclub .mt_endDate').eq(i).html()) {
				$('#cc_CCC2_3_' + (i + 1)).val($('.infoschoolclub .mt_endDate').eq(i).html() + '-1')
			}
			if ($('#cc_CCF1_6_' + (i + 1)) && $('.infoschoolclub .mt_positionName').eq(i).html()) {
				$('#cc_CCF1_6_' + (i + 1)).val($('.infoschoolclub .mt_positionName').eq(i).html())
			}
			if ($('#cc_CCF2_6_' + (i + 1)) && $('.infoschoolclub .mt_workDes').eq(i).html()) {
				$('#cc_CCF2_6_' + (i + 1)).val($('.infoschoolclub .mt_workDes').eq(i).html())
			}
		} else {
			break
		}
	}
}
if ($('#container h1').eq(0).text() == '竞赛/奖励') {
	for (var i = 0; i < $('.infoschaward').length; i++) {
		if ($('#cc_CCC1_3_' + (i + 1)) && $('.infoschaward .mt_awardsDate').eq(i).html()) {
			$('#cc_CCC1_3_' + (i + 1)).val($('.infoschaward .mt_awardsDate').eq(i).html() + '-1')
		}
		if ($('#cc_CCF1_6_' + (i + 1)) && $('.infoschaward .mt_awardsName').eq(i).html()) {
			$('#cc_CCF1_6_' + (i + 1)).val($('.infoschaward .mt_awardsName').eq(i).html())
		}
		if ($('#cc_CCF2_6_' + (i + 1)) && $('.infoschaward .mt_awardsDes').eq(i).html()) {
			$('#cc_CCF2_6_' + (i + 1)).val($('.infoschaward .mt_awardsDes').eq(i).html())
		}
	}
}
if ($('#container h1').eq(0).text() == '实习经验') {
	for (var i = 0; i < $('.infoparttimejobs').length; i++) {
		if ($('#cc_CCA1_1_' + (i + 1)).length) {
			$('#cc_CCA1_1_' + (i + 1))[0].options[1].selected = true
		}
		if ($('#cc_CCF1_6_' + (i + 1)) && $('.infoparttimejobs .mt_positionName').eq(i).html()) {
			$('#cc_CCF1_6_' + (i + 1)).val($('.infoparttimejobs .mt_positionName').eq(i).html())
		}
		var stime = $('.infoparttimejobs .mt_startDate').eq(i).html();
		var etime = $('.infoparttimejobs .mt_endDate').eq(i).html();
		var stary = stime.split('-');
		var edary = etime.split('-');
		stime = stary.join('/') + '/1';
		etime = edary.join('/') + '/1';
		if ($('#cc_CCF2_6_' + (i + 1))) {
			$('#cc_CCF2_6_' + (i + 1)).val(stime + '-' + etime)
		}
		if ($('#cc_CCF3_6_' + (i + 1)) && $('.infoparttimejobs .mt_workContent').eq(i).text()) {
			$('#cc_CCF3_6_' + (i + 1)).val($('.infoparttimejobs .mt_workContent').eq(i).text())
		}
		if ($('#cc_CCA2_1_' + (i + 1)).length && $('.infoparttimejobs .mt_companyproperty').eq(i).html()) {
			var ctype = $('#cc_CCA2_1_' + (i + 1))[0];
			switch ($('.infoparttimejobs .mt_companyproperty').eq(i).html()) {
			case '外资-欧美':
				ctype.options[1].selected = true;
				break;
			case '外资-非欧美':
				ctype.options[2].selected = true;
				break;
			case '合资-欧美':
			case '合资-非欧美':
				ctype.options[3].selected = true;
				break;
			case '国企':
				ctype.options[4].selected = true;
				break;
			case '民营公司':
				ctype.options[5].selected = true;
				break;
			case '外企代表处':
				ctype.options[6].selected = true;
				break;
			case '政府机关':
				ctype.options[7].selected = true;
				break;
			case '事业单位':
				ctype.options[8].selected = true;
				break;
			case '非盈利机构':
				ctype.options[9].selected = true;
				break;
			case '上市公司':
				ctype.options[10].selected = true;
				break;
			case '创业公司':
				ctype.options[11].selected = true;
				break
			}
		}
	}
}
if ($('#container h1').eq(0).text() == '实践经验') {
	var numpartjob = $('.infoparttimejobs').length;
	var numproject = $('.infoproject').length;
	if (numpartjob + numproject == 0) {
		document.getElementById('cc_CCA23_1_1').options[1].selected = true
	} else if (numproject + numpartjob >= 1 && numproject + numpartjob < 3) {
		document.getElementById('cc_CCA23_1_1').options[2].selected = true
	} else {
		document.getElementById('cc_CCA23_1_1').options[3].selected = true
	}
	$('#cc_CCF6_6_1').val('');
	for (var i = 0; i < $('.infoparttimejobs').length; i++) {
		if ($('.infoparttimejobs .mt_workList').eq(i).text()) {
			$('#cc_CCF6_6_1').val($('#cc_CCF6_6_1').val() + $('.infoparttimejobs .mt_workList').eq(i).text() + '\\n')
		}
	}
	for (var i = 0; i < $('.infoproject').length; i++) {
		if ($('.infoproject .mt_proList').eq(i).text()) {
			$('#cc_CCF6_6_1').val($('#cc_CCF6_6_1').val() + $('.infoproject .mt_proList').eq(i).text() + '\\n')
		}
	}
	if ($('.infoschoolclub').length > 0) {
		document.getElementById('cc_CCA20_1_1').options[1].selected = true;
		$('#cc_CCF13_6_1').val('');
		for (var i = 0; i < $('.infoschoolclub').length; i++) {
			$('#cc_CCF13_6_1').val($('#cc_CCF13_6_1').val() + $('.infoschoolclub .mt_workDes').eq(i).html() + '\\n')
		}
	} else {
		document.getElementById('cc_CCA8_1_1').options[2].selected = true
	}
	var numschawd = $('.infoschaward').length;
	if ($('#cc_CCA17_1_1').length) {
		if (numschawd == 0) {
			document.getElementById('cc_CCA17_1_1').options[2].selected = true
		} else {
			document.getElementById('cc_CCA17_1_1').options[1].selected = true;
			$('#cc_CCF8_6_1').val('');
			for (var i = 0; i < $('.infoschaward').length; i++) {
				$('#cc_CCF8_6_1').val($('#cc_CCF8_6_1').val() + $('.infoschaward .mt_schawradList').eq(i).text() + '\\n')
			}
		}
	}
	if ($('#cc_CCA22_1_1').length) {
		if (numschawd == 0) {
			document.getElementById('cc_CCA22_1_1').options[2].selected = true
		} else {
			document.getElementById('cc_CCA22_1_1').options[1].selected = true;
			$('#cc_CCF24_6_1').val('');
			for (var i = 0; i < $('.infoschaward').length; i++) {
				$('#cc_CCF24_6_1').val($('#cc_CCF24_6_1').val() + $('.infoschaward .mt_schawradList').eq(i).text() + '\\n')
			}
		}
	}
}
if ($('#container h1').eq(0).text() == '校园活动') {
	for (var i = 0; i < $('.infoschoolclub').length; i++) {
		if ($('#cc_CCA1_1_' + (i + 1)).length) {
			$('#cc_CCA1_1_' + (i + 1))[0].options[1].selected = true
		}
		if ($('#cc_CCA2_1_' + (i + 1)) && $('.infoschoolclub .mt_positionName').eq(i).html()) {
			$('#cc_CCA2_1_' + (i + 1)).val($('.infoschoolclub .mt_positionName').eq(i).html())
		}
		if ($('#cc_CCF1_6_' + (i + 1)) && $('.infoschoolclub .mt_schClubName').eq(i).html()) {
			$('#cc_CCF1_6_' + (i + 1)).val($('.infoschoolclub .mt_schClubName').eq(i).html())
		}
		if ($('#cc_CCF2_6_' + (i + 1)) && $('.infoschoolclub .mt_workDes').eq(i).html()) {
			$('#cc_CCF2_6_' + (i + 1)).val($('.infoschoolclub .mt_workDes').eq(i).html())
		}
	}
}
if ($('#container h1').eq(0).text() == '奖学金') {
	for (var i = 0; i < $('.infoschaward').length; i++) {
		if ($('#cc_CCA3_1_' + (i + 1)) && $('.infoschaward .mt_awardsName').eq(i).html()) {
			$('#cc_CCA3_1_' + (i + 1)).val($('.infoschaward .mt_awardsName').eq(i).html())
		}
		if ($('#ddl_CCE2_5_' + (i + 1)).length && $('.infoschaward .mt_awardsType').eq(i).html()) {
			var schatype = $('#ddl_CCE2_5_' + (i + 1))[0];
			for (var j = 0; j < schatype.options.length; j++) {
				if (schatype.options[j].text == $('.infoschaward .mt_awardsType').eq(i).html()) {
					schatype.options[j].selected = true;
					schatype.dispatchEvent(event);
					break
				}
			}
		}
		if ($('#cc_CCE2_5_' + (i + 1)).length && $('.infoschaward .mt_awardsLevel').eq(i).html()) {
			var schalevl = $('#cc_CCE2_5_' + (i + 1))[0];
			for (var j = 0; j < schalevl.options.length; j++) {
				if (schalevl.options[j].text.indexOf($('.infoschaward .mt_awardsLevel').eq(i).html()) != -1) {
					schalevl.options[j].selected = true;
					break
				}
			}
		}
		if ($('#cc_CCC2_3_' + (i + 1)) && $('.infoschaward .mt_awardsDate').eq(i).html()) {
			$('#cc_CCC2_3_' + (i + 1)).val($('.infoschaward .mt_awardsDate').eq(i).html() + '-1')
		}
	}
}
if ($('#container h1').eq(0).text() == '专长') {
	if ($('#cc_CCF3_6_1') && $('#mt_skill').html()) {
		$('#cc_CCF3_6_1').val($('#mt_skill').html())
	}
}
if ($('#container h1').eq(0).text() == '工作经历') {
	var len = $('.infofulltimejobs').length;
	$('.infofulltimejobs').each(function(i, item) {
		if ($('#cc_CCC1_3_' + (i + 1)) && $('.infofulltimejobs .mt_startDate').eq(i).html()) {
			$('#cc_CCC1_3_' + (i + 1)).val($('.infofulltimejobs .mt_startDate').eq(i).html() + '-1')
		}
		if ($('#cc_CCC2_3_' + (i + 1)) && $('.infofulltimejobs .mt_endDate').eq(i).html()) {
			$('#cc_CCC2_3_' + (i + 1)).val($('.infofulltimejobs .mt_endDate').eq(i).html() + '-1')
		}
		if ($('#cc_CCA3_1_' + (i + 1)).length) {
			$('#cc_CCA3_1_' + (i + 1)).get(0).options[1].selected = true
		}
		if ($('#cc_CCA4_1_' + (i + 1)) && $('.infofulltimejobs .mt_companyName').eq(i).html()) {
			$('#cc_CCA4_1_' + (i + 1)).val($('.infofulltimejobs .mt_companyName').eq(i).html())
		}
		if ($('#cc_CCA5_1_' + (i + 1)) && $('.infofulltimejobs .mt_workCity').eq(i).html()) {
			$('#cc_CCA5_1_' + (i + 1)).val($('.infofulltimejobs .mt_workCity').eq(i).html())
		}
		if ($('#cc_CCF1_6_' + (i + 1)) && $('.infofulltimejobs .mt_workContent .workContent').eq(i).html()) {
			$('#cc_CCF1_6_' + (i + 1)).val($('.infofulltimejobs .mt_workContent .workContent').eq(i).html())
		}
		if ($('#cc_CCA6_1_' + (i + 1)) && $('.infofulltimejobs .mt_reterenceName').eq(i).html()) {
			$('#cc_CCA6_1_' + (i + 1)).val($('.infofulltimejobs .mt_reterenceName').eq(i).html())
		}
		if ($('#cc_CCA7_1_' + (i + 1)) && $('.infofulltimejobs .mt_reterence_phone').eq(i).html()) {
			$('#cc_CCA7_1_' + (i + 1)).val($('.infofulltimejobs .mt_reterence_phone').eq(i).html())
		}
	});
	$('.infoparttimejobs').each(function(i, item) {
		if ($('#cc_CCC1_3_' + (i + 1 + len)) && $('.infoparttimejobs .mt_startDate').eq(i).html()) {
			$('#cc_CCC1_3_' + (i + 1 + len)).val($('.infoparttimejobs .mt_startDate').eq(i).html() + '-1')
		}
		if ($('#cc_CCC2_3_' + (i + 1 + len)) && $('.infoparttimejobs .mt_endDate').eq(i).html()) {
			$('#cc_CCC2_3_' + (i + 1 + len)).val($('.infoparttimejobs .mt_endDate').eq(i).html() + '-1')
		}
		if ($('#cc_CCA3_1_' + (i + 1 + len)).length) {
			$('#cc_CCA3_1_' + (i + 1 + len)).get(0).options[2].selected = true
		}
		if ($('#cc_CCA4_1_' + (i + 1 + len)) && $('.infoparttimejobs .mt_companyName').eq(i).html()) {
			$('#cc_CCA4_1_' + (i + 1 + len)).val($('.infoparttimejobs .mt_companyName').eq(i).html())
		}
		if ($('#cc_CCA5_1_' + (i + 1 + len)) && $('.infoparttimejobs .mt_workCity').eq(i).html()) {
			$('#cc_CCA5_1_' + (i + 1 + len)).val($('.infoparttimejobs .mt_workCity').eq(i).html())
		}
		if ($('#cc_CCF1_6_' + (i + 1 + len)) && $('.infoparttimejobs .mt_workContent .workContent').eq(i).html()) {
			$('#cc_CCF1_6_' + (i + 1 + len)).val($('.infoparttimejobs .mt_workContent .workContent').eq(i).html())
		}
		if ($('#cc_CCA6_1_' + (i + 1 + len)) && $('.infoparttimejobs .mt_reterenceName').eq(i).html()) {
			$('#cc_CCA6_1_' + (i + 1 + len)).val($('.infoparttimejobs .mt_reterenceName').eq(i).html())
		}
		if ($('#cc_CCA7_1_' + (i + 1 + len)) && $('.infoparttimejobs .mt_reterence_phone').eq(i).html()) {
			$('#cc_CCA7_1_' + (i + 1)).val($('.infoparttimejobs .mt_reterence_phone').eq(i).html())
		}
	})
}
if ($('#container h1').eq(0).text() == '学生活动/项目经验') {
	var len = $('.infoproject').length;
	$('.infoproject').each(function(i, val) {
		if ($('#cc_CCC1_3_' + (i + 1)) && $('.infoproject .mt_prostartdate').eq(i).html()) {
			$('#cc_CCC1_3_' + (i + 1)).val($('.infoproject .mt_prostartdate').eq(i).html() + '-1')
		}
		if ($('#cc_CCC2_3_' + (i + 1)) && $('.infoproject .mt_proenddate').eq(i).html()) {
			$('#cc_CCC2_3_' + (i + 1)).val($('.infoproject .mt_proenddate').eq(i).html() + '-1')
		}
		if ($('#cc_CCA1_1_' + (i + 1)) && $('.infoproject .mt_projectName').eq(i).html()) {
			$('#cc_CCA1_1_' + (i + 1)).val($('.infoproject .mt_projectName').eq(i).html())
		}
		if ($('#cc_CCA2_1_' + (i + 1)) && $('.infoproject .mt_positionName').eq(i).html()) {
			$('#cc_CCA2_1_' + (i + 1)).val($('.infoproject .mt_positionName').eq(i).html())
		}
		if ($('#cc_CCF1_6_' + (i + 1)) && $('.infoproject .mt_projectRemark').eq(i).html()) {
			$('#cc_CCF1_6_' + (i + 1)).val($('.infoproject .mt_projectRemark').eq(i).html())
		}
	});
	$('.infoschoolclub').each(function(i, val) {
		if ($('#cc_CCC1_3_' + (i + 1 + len)) && $('.infoschoolclub .mt_startDate').eq(i).html()) {
			$('#cc_CCC1_3_' + (i + 1 + len)).val($('.infoschoolclub .mt_startDate').eq(i).html() + '-1')
		}
		if ($('#cc_CCC2_3_' + (i + 1 + len)) && $('.infoschoolclub .mt_endDate').eq(i).html()) {
			$('#cc_CCC2_3_' + (i + 1 + len)).val($('.infoschoolclub .mt_endDate').eq(i).html() + '-1')
		}
		if ($('#cc_CCA1_1_' + (i + 1 + len)) && $('.infoschoolclub .mt_schClubName').eq(i).html()) {
			$('#cc_CCA1_1_' + (i + 1 + len)).val($('.infoschoolclub .mt_schClubName').eq(i).html())
		}
		if ($('#cc_CCA2_1_' + (i + 1 + len)) && $('.infoschoolclub .mt_positionName').eq(i).html()) {
			$('#cc_CCA2_1_' + (i + 1 + len)).val($('.infoschoolclub .mt_positionName').eq(i).html())
		}
		if ($('#cc_CCF1_6_' + (i + 1 + len)) && $('.infoschoolclub .mt_workDes').eq(i).html()) {
			$('#cc_CCF1_6_' + (i + 1 + len)).val($('.infoschoolclub .mt_workDes').eq(i).html())
		}
	})
}
if ($('#container h1').eq(0).text() == '技能/获奖证书') {
	if ($('#cc_CCC1_3_1') && $('.infoschaward .mt_awardsDate').eq(0).html()) {
		$('#cc_CCC1_3_1').val($('.infoschaward .mt_awardsDate').eq(0).html() + '-1')
	}
	if ($('#cc_CCA4_1_1') && $('.infoschaward .mt_awardsName').eq(0).html()) {
		$('#cc_CCA4_1_1').val($('.infoschaward .mt_awardsName').eq(0).html())
	}
}
if ($('#container h1').eq(0).text() == '其他') {
	if ($('#cc_CCA44_1_1') && $('#mt_fmname').html()) {
		$('#cc_CCA44_1_1').val($('#mt_fmname').html())
	}
	if ($('#cc_CCA34_1_1') && $('#mt_fmrelation').html()) {
		$('#cc_CCA34_1_1').val($('#mt_fmrelation').html())
	}
	if ($('#cc_CCA45_1_1') && $('#mt_fmwork').html()) {
		$('#cc_CCA45_1_1').val($('#mt_fmwork').html())
	}
	if ($('#cc_CCA35_1_1') && $('#mt_fmposition').html()) {
		$('#cc_CCA35_1_1').val($('#mt_fmposition').html())
	}
}
if ($('#container h1').eq(0).text() == '实习/项目经验') {
	$('.infoparttimejobs').each(function(i, val) {
		if (i < 3) {
			var $div = $('#cc_ResumeSubID_7_' + (i + 1));
			var $stsel = $div.nextAll('dl').eq(0).find('select');
			var $etsel = $div.nextAll('dl').eq(1).find('select');
			var st = $(val).find('.mt_startDate').html().split('-');
			var et = $(val).find('.mt_endDate').html().split('-');
			var name = $(val).find('.mt_companyName').html();
			var des = $(val).find('.mt_workContent .workContent').html();
			selectFac(st[0], $stsel.eq(0));
			$stsel.eq(1).get(0).options[st[1] - 0].selected = true;
			selectFac(et[0], $etsel.eq(0));
			$etsel.eq(1).get(0).options[et[1] - 0].selected = true;
			if ($('#cc_CCF2_6_' + (i + 1)) && name) {
				$('#cc_CCF2_6_' + (i + 1)).val(name)
			}
			if ($('#cc_CCF1_6_' + (i + 1)) && des) {
				$('#cc_CCF1_6_' + (i + 1)).val(des)
			}
		}
	})
}
if ($('#container h1').eq(0).text() == '校园实践') {
	$('.infoschoolclub').each(function(i, val) {
		if (i < 3) {
			var $div = $('#cc_ResumeSubID_7_' + (i + 1));
			var $stsel = $div.nextAll('dl').eq(0).find('select');
			var $etsel = $div.nextAll('dl').eq(1).find('select');
			var st = $(val).find('.mt_startDate').html().split('-');
			var et = $(val).find('.mt_endDate').html().split('-');
			var pos = $(val).find('.mt_positionName').html();
			var des = $(val).find('.mt_workDes').html();
			selectFac(st[0], $stsel.eq(0));
			$stsel.eq(1).get(0).options[st[1] - 0].selected = true;
			selectFac(et[0], $etsel.eq(0));
			$etsel.eq(1).get(0).options[et[1] - 0].selected = true;
			if ($('#cc_CCA3_1_' + (i + 1)) && pos) {
				$('#cc_CCA3_1_' + (i + 1)).val(pos)
			}
			if ($('#cc_CCF1_6_' + (i + 1)) && des) {
				$('#cc_CCF1_6_' + (i + 1)).val(des)
			}
		}
	})
}
if ($('#container h1').eq(0).text() == '获奖情况') {
	$('.infoschaward').each(function(i, val) {
		if (i < 5) {
			var gt = addZero($(val).find('.mt_awardsDate').html() + '-01');
			var name = $(val).find('.mt_awardsName').html();
			var level = $(val).find('.mt_awardsType').html();
			var des = $(val).find('.mt_awardsDes').html();
			if ($('#cc_CCC11_3_' + (i + 1)) && gt) {
				$('#cc_CCC11_3_' + (i + 1)).val(gt)
			}
			if ($('#cc_CCA22_1_' + (i + 1)) && name) {
				$('#cc_CCA22_1_' + (i + 1)).val(name)
			}
			if ($('#cc_CCF3_6_' + (i + 1)) && des) {
				$('#cc_CCF3_6_' + (i + 1)).val(des)
			}
			selectFac(level, $('#cc_CCA23_1_' + (i + 1)))
		}
	})
}
if ($('#container h1').eq(0).text() == '兴趣特长') {
	if ($('#cc_CCF2_6_1') && $('#mt_skill').html()) {
		$('#cc_CCF2_6_1').val($('#mt_skill').html())
	}
}
if ($('#container h1').eq(0).text() == '家庭情况') {
	if ($('#cc_CCA18_1_1') && $('#mt_fmname').html()) {
		$('#cc_CCA18_1_1').val($('#mt_fmname').html())
	}
	if ($('#cc_CCA10_1_1') && $('#mt_fmrelation').html()) {
		$('#cc_CCA10_1_1').val($('#mt_fmrelation').html())
	}
	if ($('#cc_CCA19_1_1') && $('#mt_fmposition').html()) {
		$('#cc_CCA19_1_1').val($('#mt_fmposition').html())
	}
	if ($('#cc_CCF8_6_1') && $('#mt_fmwork').html()) {
		$('#cc_CCF8_6_1').val($('#mt_fmwork').html())
	}
	if ($('#cc_CCA20_1_1') && $('#mt_fmphone').html()) {
		$('#cc_CCA20_1_1').val($('#mt_fmphone').html())
	}
}