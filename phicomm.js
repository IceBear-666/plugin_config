(function() {
	KISSY.one('.quick-write').on('click',
	function() {
		if ($('#jm_qiuck_cover')) {
			$('#jm_qiuck_cover').fadeIn();
			setTimeout(function() {
				$('#jm_qiuck_cover').fadeOut()
			},
			1000)
		};
		var help = {
			getGraguate: function() {
				var maxid = 0;
				var maxedutime;
				for (var i = 0; i < $('.infopledu').length; i++) {
					var endyear = parseInt($('#edu-list .mt_endYearY').eq(i).html());
					if (i == 0) {
						maxedutime = endyear;
						maxid = 0
					} else {
						if (endyear > maxedutime) {
							maxedutime = endyear;
							maxid = i
						}
					}
				}
				return maxid
			}
		};
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
		var event = document.createEvent('HTMLEvents');
		event.initEvent('change', true, false);
		if ($('input[name=\"RecruitmentPortalPersonProfile_extXB_107138_1853034669\"]') && $('#mt_sex').html()) {
			if ($('#mt_sex').html() == '男') {
				$('input[name=\"RecruitmentPortalPersonProfile_extXB_107138_1853034669\"]').eq(0).trigger('click')
			} else if ($('#mt_sex').html() == '女') {
				$('input[name=\"RecruitmentPortalPersonProfile_extXB_107138_1853034669\"]').eq(1).trigger('click')
			}
		}
		if ($('input[name=\"RecruitmentPortalPersonProfile_extwxh_107138_1155644826\"]') && $('#mt_wxname').html()) {
			$('input[name=\"RecruitmentPortalPersonProfile_extwxh_107138_1155644826\"]').val($('#mt_wxname').html())
		}
		if ($('#4c037148-140a-4c2b-b87a-b97609215d7011') && $('#mt_name').html()) {
			$('#4c037148-140a-4c2b-b87a-b97609215d7011').val($('#mt_name').html())
		}
		if ($('input[name=\"RecruitmentPortalPersonProfile_NameEn\"]') && $('#mt_ywname').html()) {
			$('input[name=\"RecruitmentPortalPersonProfile_NameEn\"]').val($('#mt_ywname').html())
		}
		if ($('#67a5c587-4f90-4ae7-819f-eb3dba9ea39911') && $('#mt_email').html()) {
			$('#67a5c587-4f90-4ae7-819f-eb3dba9ea39911').val($('#mt_email').html())
		}
		if ($('#acb9b67f-9643-41fb-a7fe-5ff8d742ccdf11') && $('#mt_tel').html()) {
			$('#acb9b67f-9643-41fb-a7fe-5ff8d742ccdf11').val($('#mt_tel').html())
		}
		if ($('#885567e0-5e3e-4e48-9a77-9b4313da006611') && $('.infoEnglishSkill .mt_skillEngLevel').html()) {
			$('#885567e0-5e3e-4e48-9a77-9b4313da006611').val($('.infoEnglishSkill .mt_skillEngLevel').html())
		}
		if ($('#b6cf6039-f2fb-48d8-8a09-9213541b8fe111') && $('.infoEnglishSkill .mt_skillEngSorce').html()) {
			$('#b6cf6039-f2fb-48d8-8a09-9213541b8fe111').val($('.infoEnglishSkill .mt_skillEngSorce').html())
		}
		if ($('#436ab7a4-67a1-4819-a238-d5d34eb0717611') && $('#mt_birth').html()) {
			var birstr = $('#mt_birth').html();
			var birary = birstr.split('-');
			birstr = birary.join('/');
			$('#436ab7a4-67a1-4819-a238-d5d34eb0717611').val(birstr)
		}
		if ($('input[name=\"RecruitmentPortalPersonProfile_gender\"]') && $('#mt_sex').html()) {
			if ($('#mt_sex').html() == '男') {
				$('input[name=\"RecruitmentPortalPersonProfile_gender\"]').eq(0).trigger('click')
			} else {
				$('input[name=\"RecruitmentPortalPersonProfile_gender\"]').eq(1).trigger('click')
			}
		}
		if ($('input[displayname=\"现居住地\"]').length && $('#mt_livecity_city').html()) {
			$('input[displayname=\"现居住地\"]').val($('#mt_livecity_city').html() + '市')
		}
		if ($('input[displayname=\"户口所在地\"]').length && $('#mt_hukoucitynow_city').html()) {
			$('input[displayname=\"户口所在地\"]').val($('#mt_hukoucitynow_city').html() + '市')
		}
		if ($('input[displayname=\"生源地\"]').length && $('#mt_hukoucity_city').html()) {
			$('input[displayname=\"生源地\"]').val($('#mt_hukoucity_city').html() + '市')
		}
		if ($('input[displayname=\"籍贯\"]').length && $('#mt_native_city').html()) {
			$('input[displayname=\"籍贯\"]').val($('#mt_native_city').html() + '市')
		}
		if ($('#RecruitmentPortalPersonProfile_exthyzk_103330_864190088').length && $('#mt_maritalstatus').html()) {
			var mar = $('#RecruitmentPortalPersonProfile_exthyzk_103330_864190088')[0];
			if ($('#mt_maritalstatus').html() == '未婚') {
				mar.options[1].selected = true
			} else {
				if ($('#mt_maritalstatus').html() == '已婚') {
					mar.options[2].selected = true
				} else {
					if ($('#mt_maritalstatus').html() == '离婚') {
						mar.options[3].selected = true
					} else {
						mar.options[4].selected = true
					}
				}
			}
		}
		if ($('#RecruitmentPortalPersonProfile_ext092902_105433_171605192').length && $('#mt_maritalstatus').html()) {
			var mar = $('#RecruitmentPortalPersonProfile_ext092902_105433_171605192')[0];
			if ($('#mt_maritalstatus').html() == '未婚') {
				mar.options[1].selected = true
			} else {
				if ($('#mt_maritalstatus').html() == '已婚') {
					mar.options[3].selected = true
				} else {
					mar.options[0].selected = true
				}
			}
		}
		if ($('#RecruitmentPortalPersonProfile_exthf_102995_192023877').length && $('#mt_maritalstatus').html()) {
			var mar = $('#RecruitmentPortalPersonProfile_exthf_102995_192023877')[0];
			if ($('#mt_maritalstatus').html() == '未婚') {
				mar.options[2].selected = true
			} else {
				if ($('#mt_maritalstatus').html() == '已婚') {
					mar.options[1].selected = true
				} else {
					if ($('#mt_maritalstatus').html() == '离婚') {
						mar.options[3].selected = true
					} else {
						mar.options[0].selected = true
					}
				}
			}
		}
		if ($('#RecruitmentPortalPersonProfile_EducationLevel').length && $('#mt_edu').html()) {
			var edu = document.getElementById('RecruitmentPortalPersonProfile_EducationLevel');
			switch ($('#mt_edu').html()) {
			case '高中':
				edu.options[3].selected = true;
				break;
			case '初中及以下':
				edu.options[2].selected = true;
				break;
			case '中专':
			case '技校/职高':
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
				edu.options[8].selected = true;
				break;
			case '博士研究生':
				edu.options[9].selected = true;
				break
			}
		}
		if ($('#RecruitmentPortalPersonProfile_extzgxl_107138_1359366821').length && $('#mt_edu').html()) {
			var edu = document.getElementById('RecruitmentPortalPersonProfile_extzgxl_107138_1359366821');
			switch ($('#mt_edu').html()) {
			case '高中':
			case '初中及以下':
				edu.options[1].selected = true;
				break;
			case '中专':
			case '技校/职高':
				edu.options[2].selected = true;
				break;
			case '大学专科':
				edu.options[3].selected = true;
				break;
			case '大学本科-一本':
			case '大学本科-二本':
			case '大学本科-三本':
				edu.options[4].selected = true;
				break;
			case '硕士研究生':
				edu.options[5].selected = true;
				break;
			case 'MBA':
				edu.options[6].selected = true;
				break;
			case '博士研究生':
				edu.options[7].selected = true;
				break
			}
		}
		if ($('#RecruitmentPortalPersonProfile_EducationStudyMode').length && $('#mt_edutype').html()) {
			var type = document.getElementById('RecruitmentPortalPersonProfile_EducationStudyMode');
			switch ($('#mt_edutype').html()) {
			case '全日制统分统招':
				type.options[1].selected = true;
				break;
			case '成人教育':
				type.options[2].selected = true;
				break;
			case '自费':
				type.options[4].selected = true;
				break;
			default:
				type.options[5].selected = true;
				break
			}
		}
		if ($('#RecruitmentPortalPersonProfile_Nation').length && $('#mt_nation').html()) {
			var nat = document.getElementById('RecruitmentPortalPersonProfile_Nation');
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
		if ($('textarea[name=\"RecruitmentPortalPersonProfile_evaluation\"]') && $('#mt_selfIntro').html()) {
			$('textarea[name=\"RecruitmentPortalPersonProfile_evaluation\"]').val($('#mt_selfIntro').html())
		}
		if ($('input[name=\"RecruitmentPortalPersonProfile_GraduationDate\"]') && $('#mt_gradutetime').html()) {
			var gt = $('#mt_gradutetime').html().split('-');
			if (gt[0] < 2017) {
				$('[name=\"RecruitmentPortalPersonProfile_IsFreshGraduated\"]').eq(1).trigger('click')
			} else {
				$('[name=\"RecruitmentPortalPersonProfile_IsFreshGraduated\"]').eq(0).trigger('click')
			}
			gt[1] = gt[1] < 10 ? '0' + gt[1] : gt[1];
			gt = gt.join('/') + '/01';
			$('input[name=\"RecruitmentPortalPersonProfile_GraduationDate\"]').val(gt)
		}
		if ($('input[name=\"RecruitmentPortalPersonProfile_EmergencyContact\"]') && $('#mt_jjlxr').html()) {
			$('input[name=\"RecruitmentPortalPersonProfile_EmergencyContact\"]').val($('#mt_jjlxr').html())
		}
		if ($('input[name=\"RecruitmentPortalPersonProfile_QQ\"]') && $('#mt_qqname').html()) {
			$('input[name=\"RecruitmentPortalPersonProfile_QQ\"]').val($('#mt_qqname').html())
		}
		if ($('input[name=\"RecruitmentPortalPersonProfile_ext55_102995_354362417\"]') && $('#mt_zip').html()) {
			$('input[name=\"RecruitmentPortalPersonProfile_ext55_102995_354362417\"]').val($('#mt_zip').html())
		}
		if ($('input[name=\"RecruitmentPortalPersonProfile_ext78_102995_874362502\"]') && $('#mt_postadd').html()) {
			$('input[name=\"RecruitmentPortalPersonProfile_ext78_102995_874362502\"]').val($('#mt_postadd').html())
		}
		if ($('input[name=\"RecruitmentPortalObjective_ExpectWorkCity_txt\"]') && $('#mt_expectcity').html()) {
			$('input[name=\"RecruitmentPortalObjective_ExpectWorkCity_txt\"]').val($('#mt_expectcity').html() + $('#mt_expectcity_city').html())
		}
		if ($('input[name=\"RecruitmentPortalPersonProfile_extTF2016091410_103330_1048608259\"]') && $('#mt_postadd').html()) {
			$('input[name=\"RecruitmentPortalPersonProfile_extTF2016091410_103330_1048608259\"]').val($('#mt_postadd').html() + $('#mt_expectcity_city').html())
		}
		var maxy = 0;
		var maxid = 0;
		for (var i = 0; i < $('.infopledu').length; i++) {
			var endyear = parseInt($('.infopledu .mt_endYearY').eq(i).html());
			if (i == 0) {
				maxy = endyear
			} else {
				if (endyear > maxy) {
					maxy = endyear;
					maxid = i
				}
			}
		}
		if ($('select[name=\"RecruitmentPortalPersonProfile_HighestDegree\"]').length && $('.infopledu .mt_degree').last().html()) {
			var deg = $('select[name=\"RecruitmentPortalPersonProfile_HighestDegree\"]')[0];
			for (var j = 1; j < deg.options.length; j++) {
				if (deg.options[j].text == $('.infopledu .mt_degree').last().html()) {
					deg.options[j].selected = true;
					break;
				}
			}
		}
		if ($('select[name=\"RecruitmentPortalPersonProfile_extzgxl_103330_1336934284\"]').length && $('.infopledu .mt_education').last().html()) {
			var edu = $('select[name=\"RecruitmentPortalPersonProfile_extzgxl_103330_1336934284\"]')[0];
			switch($('.infopledu .mt_education').last().html()){
				case '大学专科':
					edu.options[1].selected = true;
					break;
				case '大学本科-一本':
				case '大学本科-二本':
				case '大学本科-三本':
				case '海外本科':
					edu.options[2].selected = true;
					break;
				case '硕士研究生':
					edu.options[3].selected = true;
					break;
				case 'MBA':
				case 'EPA':
					edu.options[3].selected = true;
					break;
				case '博士研究生':
					edu.options[4].selected = true;
					break;
			}
		}
		if ($('input[name=\"RecruitmentPortalPersonProfile_EmergencyPhone\"]') && $('#mt_jjlxrtel').html()) {
			$('input[name=\"RecruitmentPortalPersonProfile_EmergencyPhone\"]').val($('#mt_jjlxrtel').html())
		}
		if ($('input[name=\"RecruitmentPortalObjective_ExptectedArrivalTime\"]') && $('#mt_gradutetime').html()) {
			var gt = $('#mt_gradutetime').html().split('-');
			gt = gt.join('/') + '/1';
			$('input[name=\"RecruitmentPortalObjective_ExptectedArrivalTime\"]').val(gt)
		}
		if ($('select[name=\"RecruitmentPortalPersonProfile_CertificateType\"]').length && $('#mt_idtype').html()) {
			var idtype = $('select[name=\"RecruitmentPortalPersonProfile_CertificateType\"]')[0];
			switch ($('#mt_idtype').html()) {
			case '身份证':
				idtype.options[1].selected = true;
				break;
			case '护照':
				idtype.options[2].selected = true;
				break;
			case '台胞证':
				idtype.options[4].selected = true;
				break;
			case '军官证':
				idtype.options[5].selected = true;
				break;
			default:
				idtype.options[3].selected = true;
				break
			}
		}
		if ($('input[name=\"RecruitmentPortalPersonProfile_CertificateNumber\"]') && $('#mt_id').html()) {
			$('input[name=\"RecruitmentPortalPersonProfile_CertificateNumber\"]').val($('#mt_id').html())
		}
		if ($('input[name=\"RecruitmentPortalPersonProfile_extsfzhm_102995_169995583\"]') && $('#mt_id').html()) {
			$('input[name=\"RecruitmentPortalPersonProfile_extsfzhm_102995_169995583\"]').val($('#mt_id').html())
		}
		if ($('input[name=\"RecruitmentPortalPersonProfile_ext0923_105433_1479708618\"]') && $('#mt_nativeplace').html()) {
			$('input[name=\"RecruitmentPortalPersonProfile_ext0923_105433_1479708618\"]').val($('#mt_nativeplace').html())
		}
		if ($('input[name=\"RecruitmentPortalPersonProfile_ext8_102995_651301562\"]') && $('#mt_hukoucity').html()) {
			$('input[name=\"RecruitmentPortalPersonProfile_ext8_102995_651301562\"]').val($('#mt_hukoucity').html())
		}
		if ($('input[name=\"RecruitmentPortalPersonProfile_Nationality\"]') && $('#mt_national').html()) {
			$('input[name=\"RecruitmentPortalPersonProfile_Nationality\"]').val($('#mt_national').html())
		}
		if ($('select[name=\"RecruitmentPortalPersonProfile_polity\"]').length && $('#mt_polistatus').html()) {
			var plo = $('select[name=\"RecruitmentPortalPersonProfile_polity\"]')[0];
			switch ($('#mt_polistatus').html()) {
			case '中共党员':
			case '中共预备党员':
				plo.options[1].selected = true;
				break;
			case '共青团员':
				plo.options[2].selected = true;
				break;
			case '中国民主同盟':
			case '中国民主建国会':
			case '中国民主促进会':
				plo.options[3].selected = true;
				break;
			case '无党派民主人士':
			case '群众':
				plo.options[4].selected = true;
				break;
			default:
				plo.options[5].selected = true;
				break
			}
		}
		if ($('select[name=\"RecruitmentPortalPersonProfile_extzzmm_102995_658129944\"]').length && $('#mt_polistatus').html()) {
			var plo = $('select[name=\"RecruitmentPortalPersonProfile_extzzmm_102995_658129944\"]')[0];
			switch ($('#mt_polistatus').html()) {
			case '中共党员':
			case '中共预备党员':
				plo.options[1].selected = true;
				break;
			case '共青团员':
				plo.options[3].selected = true;
				break;
			case '中国民主同盟':
			case '中国民主建国会':
			case '中国民主促进会':
				plo.options[4].selected = true;
				break;
			case '无党派民主人士':
			case '群众':
				plo.options[5].selected = true;
				break;
			default:
				plo.options[0].selected = true;
				break
			}
		}
		if ($('input[name=\"RecruitmentPortalPersonProfile_extbyyx_105433_1507278512\"]')) {
			var max = help.getGraguate();
			$('input[name=\"RecruitmentPortalPersonProfile_extbyyx_105433_1507278512\"]').val($('.mt_schoolName').eq(max).html())
		}
		if ($('input[name=\"RecruitmentPortalPersonProfile_Address\"]') && $('#mt_add').html()) {
			$('input[name=\"RecruitmentPortalPersonProfile_Address\"]').val($('#mt_add').html())
		}
		if ($('input[name=\"RecruitmentPortalPersonProfile_ZipCode\"]') && $('#mt_zip').html()) {
			$('input[name=\"RecruitmentPortalPersonProfile_ZipCode\"]').val($('#mt_zip').html())
		}
		if ($('input[name=\"RecruitmentPortalPersonProfile_Height\"]') && $('#mt_height').html()) {
			$('input[name=\"RecruitmentPortalPersonProfile_Height\"]').val($('#mt_height').html())
		}
		if ($('input[name=\"RecruitmentPortalPersonProfile_Weight\"]') && $('#mt_weight').html()) {
			$('input[name=\"RecruitmentPortalPersonProfile_Weight\"]').val($('#mt_weight').html())
		}
		for (var i = 0; i < $('.infopledu').length; i++) {
			var sy;
			var sm;
			var ey;
			var em;
			var y;
			var m;
			if ($('input[name=\"RecruitmentPortalEducation_SchoolName\"]').eq(i + 1).length && $('.infopledu .mt_schoolName').eq(i).html()) {
				$('input[name=\"RecruitmentPortalEducation_SchoolName\"]').eq(i + 1).val($('.infopledu .mt_schoolName').eq(i).html())
			}
			if ($('select[name=\"RecruitmentPortalEducation_StartDate_Year\"]').eq(i + 1).length && $('.infopledu .mt_startYearY').eq(i).html()) {
				sy = $('select[name=\"RecruitmentPortalEducation_StartDate_Year\"]').eq(i + 1).get(0);
				y = 2016 - parseInt($('.infopledu .mt_startYearY').eq(i).html());
				sy.options[47 - y].selected = true
			}
			if ($('select[name=\"RecruitmentPortalEducation_EndDate_Year\"]').eq(i + 1).length && $('.infopledu .mt_endYearY').eq(i).html()) {
				ey = $('select[name=\"RecruitmentPortalEducation_EndDate_Year\"]').eq(i + 1).get(0);
				y = 2016 - parseInt($('.infopledu .mt_endYearY').eq(i).html());
				ey.options[47 - y].selected = true
			}
			if ($('select[name=\"RecruitmentPortalEducation_StartDate_Month\"]').eq(i + 1).length && $('.infopledu .mt_startYearM').eq(i).html()) {
				sm = $('select[name=\"RecruitmentPortalEducation_StartDate_Month\"]').eq(i + 1).get(0);
				m = parseInt($('.infopledu .mt_startYearM').eq(i).html());
				sm.options[m].selected = true
			}
			if ($('select[name=\"RecruitmentPortalEducation_EndDate_Month\"]').eq(i + 1).length && $('.infopledu .mt_endYearM').eq(i).html()) {
				sm = $('select[name=\"RecruitmentPortalEducation_EndDate_Month\"]').eq(i + 1).get(0);
				m = parseInt($('.infopledu .mt_endYearM').eq(i).html());
				sm.options[m].selected = true;
				sm.dispatchEvent(event)
			}
			if ($('select[name=\"RecruitmentPortalEducation_EducationLevel\"]').eq(i + 1).length && $('.infopledu .mt_education').eq(i).html()) {
				var edu = $('select[name=\"RecruitmentPortalEducation_EducationLevel\"]').eq(i + 1).get(0);
				switch ($('.infopledu .mt_education').eq(i).html()) {
				case '高中':
					edu.options[3].selected = true;
					break;
				case '初中及以下':
					edu.options[2].selected = true;
					break;
				case '中专':
				case '技校/职高':
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
					edu.options[8].selected = true;
					break;
				case '博士研究生':
					edu.options[9].selected = true;
					break
				}
			}
			if ($('select[name=\"RecruitmentPortalEducation_extxueli_102995_24148180\"]').eq(i + 1).length && $('.infopledu .mt_education').eq(i).html()) {
				var edu = $('select[name=\"RecruitmentPortalEducation_extxueli_102995_24148180\"]').eq(i + 1).get(0);
				switch ($('.infopledu .mt_education').eq(i).html()) {
				case '大学专科':
					edu.options[1].selected = true;
					break;
				case '大学本科-一本':
				case '大学本科-二本':
				case '大学本科-三本':
					edu.options[2].selected = true;
					break;
				case '硕士研究生':
					edu.options[3].selected = true;
					break;
				case '博士研究生':
					edu.options[4].selected = true;
					break
				}
			}
			if ($('select[name=\"RecruitmentPortalEducation_Degree\"]').eq(i + 1).length && $('.infopledu .mt_degree').eq(i).html()) {
				var deg = $('select[name=\"RecruitmentPortalEducation_Degree\"]').eq(i + 1).get(0);
				for (var j = 1; j < deg.options.length; j++) {
					if (deg.options[j].text == $('.infopledu .mt_degree').eq(i).html()) {
						deg.options[j].selected = true;
						break
					}
				}
			}
			if ($('select[name=\"RecruitmentPortalEducation_PlaceInClass\"]').eq(i + 1).length && $('.infopledu .mt_classranking').eq(i).html()) {
				var rank = $('select[name=\"RecruitmentPortalEducation_PlaceInClass\"]').eq(i + 1).get(0);
				switch ($('.infopledu .mt_classranking').eq(i).html()) {
				case '前5%':
					rank.options[1].selected = true;
					break;
				case '前10%':
					rank.options[2].selected = true;
					break;
				case '前20%':
					rank.options[3].selected = true;
					break;
				case '前30%':
					rank.options[4].selected = true;
					break;
				default:
					rank.options[5].selected = true;
					break
				}
			}
			if ($('select[name=\"RecruitmentPortalEducation_MajorOrder\"]').eq(i + 1).length && $('.infopledu .mt_professionalranking').eq(i).html()) {
				var rank = $('select[name=\"RecruitmentPortalEducation_MajorOrder\"]').eq(i + 1).get(0);
				switch ($('.infopledu .mt_professionalranking').eq(i).html()) {
				case '前5%':
					rank.options[1].selected = true;
					break;
				case '前10%':
					rank.options[2].selected = true;
					break;
				case '前20%':
					rank.options[3].selected = true;
					break;
				case '前30%':
					rank.options[4].selected = true;
					break;
				default:
					rank.options[5].selected = true;
					break
				}
			}
			if ($('select[name=\"RecruitmentPortalEducation_extscores_101305_1988903091\"]').eq(i + 1).length && $('.infopledu .mt_professionalranking').eq(i).html()) {
				selectFac($('.infopledu .mt_professionalranking').eq(i).html(), $('select[name=\"RecruitmentPortalEducation_extscores_101305_1988903091\"]').eq(i + 1))
			}
			if ($('input[name=\"RecruitmentPortalEducation_MajorName\"]').eq(i + 1).length && $('.infopledu .mt_professional').eq(i).html()) {
				$('input[name=\"RecruitmentPortalEducation_MajorName\"]').eq(i + 1).val($('.infopledu .mt_professional').eq(i).html())
			}
			if ($('input[name=\"RecruitmentPortalEducation_extjidian_101305_2054918165\"]').eq(i + 1).length && $('.infopledu .mt_gpascore').eq(i).html()) {
				$('input[name=\"RecruitmentPortalEducation_extjidian_101305_2054918165\"]').eq(i + 1).val($('.infopledu .mt_gpascore').eq(i).html())
			}
			if ($('textarea[name=\"RecruitmentPortalEducation_MajorCourses\"]').eq(i + 1).length && $('.infopledu .mt_major').eq(i).html()) {
				$('textarea[name=\"RecruitmentPortalEducation_MajorCourses\"]').eq(i + 1).val($('.infopledu .mt_major').eq(i).html())
			}
			if ($('input[name=\"RecruitmentPortalEducation_CollegeName\"]').eq(i + 1).length && $('.infopledu .mt_academy').eq(i).html()) {
				$('input[name=\"RecruitmentPortalEducation_CollegeName\"]').eq(i + 1).val($('.infopledu .mt_academy').eq(i).html())
			}
			if ($('input[name=\"RecruitmentPortalEducation_GPA\"]').eq(i + 1).length && $('.infopledu .mt_gpascore').eq(i).html()) {
				$('input[name=\"RecruitmentPortalEducation_GPA\"]').eq(i + 1).val($('.infopledu .mt_gpascore').eq(i).html())
			}
			if ($('textarea[name=\"RecruitmentPortalEducation_MajorDescription\"]').eq(i + 1).length && $('.infopledu .mt_major').eq(i).html()) {
				$('textarea[name=\"RecruitmentPortalEducation_MajorDescription\"]').eq(i + 1).val($('.infopledu .mt_major').eq(i).html())
			}
			if ($('input[name=\"RecruitmentPortalEducation_SchoolReferenceName\"]').eq(i + 1).length && $('.infopledu .mt_tutorname').eq(i).html()) {
				$('input[name=\"RecruitmentPortalEducation_SchoolReferenceName\"]').eq(i + 1).val($('.infopledu .mt_tutorname').eq(i).html())
			}
			if ($('input[name=\"RecruitmentPortalEducation_SchoolReferenceRelation\"]').eq(i + 1).length && $('.infopledu .mt_tutorname').eq(i).html()) {
				$('input[name=\"RecruitmentPortalEducation_SchoolReferenceRelation\"]').eq(i + 1).val('导师')
			}
			if ($('input[name=\"RecruitmentPortalEducation_SchoolReferenceContact\"]').eq(i + 1).length && $('.infopledu .mt_tutorphone').eq(i).html()) {
				$('input[name=\"RecruitmentPortalEducation_SchoolReferenceContact\"]').eq(i + 1).val($('.infopledu .mt_tutorphone').eq(i).html())
			}
			if ($('input[name=\"RecruitmentPortalEducation_TutorName\"]').eq(i + 1).length && $('.infopledu .mt_tutorname').eq(i).html()) {
				$('input[name=\"RecruitmentPortalEducation_TutorName\"]').eq(i + 1).val($('.infopledu .mt_tutorname').eq(i).html())
			}
			if ($('input[name=\"RecruitmentPortalEducation_TutorContact\"]').eq(i + 1).length && $('.infopledu .mt_tutorphone').eq(i).html()) {
				$('input[name=\"RecruitmentPortalEducation_TutorContact\"]').eq(i + 1).val($('.infopledu .mt_tutorphone').eq(i).html())
			}
		}
		for (var i = 0; i < $('.infoproject').length; i++) {
			var sy;
			var sm;
			var ey;
			var em;
			var y;
			var m;
			if ($('input[name=\"RecruitmentPortalProject_ProjectName\"]').eq(i + 1).length && $('.infoproject .mt_projectName').eq(i).html()) {
				$('input[name=\"RecruitmentPortalProject_ProjectName\"]').eq(i + 1).val($('.infoproject .mt_projectName').eq(i).html())
			}
			if ($('textarea[name=\"RecruitmentPortalProject_extxmzzjcg_107138_1470058620\"]').eq(i + 1).length && $('.infop1 .workContent').eq(i).html()) {
				$('textarea[name=\"RecruitmentPortalProject_extxmzzjcg_107138_1470058620\"]').eq(i + 1).val($('.infop1 .workContent').eq(i).html())
			}
			if ($('select[name=\"RecruitmentPortalProject_StartDate_Year\"]').eq(i + 1).length && $('.infoproject .mt_prostarttime').eq(i).html()) {
				sy = $('select[name=\"RecruitmentPortalProject_StartDate_Year\"]').eq(i + 1).get(0);
				sm = $('select[name=\"RecruitmentPortalProject_StartDate_Month\"]').eq(i + 1).get(0);
				var sd = $('.infoproject .mt_prostarttime').eq(i).html().split('-');
				y = 2016 - parseInt(sd[0]);
				m = parseInt(sd[1]);
				sy.options[47 - y].selected = true;
				sm.options[m].selected = true
			}
			if ($('select[name=\"RecruitmentPortalProject_EndDate_Year\"]').eq(i + 1).length && $('.infoproject .mt_proendtime').eq(i).html()) {
				sy = $('select[name=\"RecruitmentPortalProject_EndDate_Year\"]').eq(i + 1).get(0);
				sm = $('select[name=\"RecruitmentPortalProject_EndDate_Month\"]').eq(i + 1).get(0);
				var sd = $('.infoproject .mt_proendtime').eq(i).html().split('-');
				y = 2016 - parseInt(sd[0]);
				m = parseInt(sd[1]);
				sy.options[47 - y].selected = true;
				sm.options[m].selected = true;
				sm.dispatchEvent(event)
			}
			if ($('textarea[name=\"RecruitmentPortalProject_ProjectDescribe\"]').eq(i + 1).length && $('.infoproject .mt_projectRemark').eq(i).text()) {
				$('textarea[name=\"RecruitmentPortalProject_ProjectDescribe\"]').eq(i + 1).val($('.infoproject .mt_projectRemark').eq(i).text())
			}
			if ($('textarea[name=\"RecruitmentPortalProject_duty\"]').eq(i + 1).length && $('.infoproject .mt_projectDuty').eq(i).text()) {
				$('textarea[name=\"RecruitmentPortalProject_duty\"]').eq(i + 1).val($('.infoproject .mt_projectDuty').eq(i).text())
			}
			if ($('input[name=\"RecruitmentPortalProject_ProjectNumber\"]').eq(i + 1).length && $('.infoproject .mt_projectNumber').eq(i).html()) {
				$('input[name=\"RecruitmentPortalProject_ProjectNumber\"]').eq(i + 1).val($('.infoproject .mt_projectNumber').eq(i).html())
			}
			if ($('input[name=\"RecruitmentPortalProject_Job\"]').eq(i + 1).length && $('.infoproject .mt_positionName').eq(i).html()) {
				$('input[name=\"RecruitmentPortalProject_Job\"]').eq(i + 1).val($('.infoproject .mt_positionName').eq(i).html())
			}
		}
		for (var i = 0; i < $('.infoschaward').length; i++) {
			if ($('input[name=\"RecruitmentPortalAwards_AwardName\"]').eq(i + 1).length && $('.infoschaward .mt_awardsName').eq(i).html()) {
				$('input[name=\"RecruitmentPortalAwards_AwardName\"]').eq(i + 1).val($('.infoschaward .mt_awardsName').eq(i).html())
			}
			if ($('select[name=\"RecruitmentPortalAwards_AwardLevel\"]').eq(i + 1).length && $('.infoschaward .mt_awardsType').eq(i).html()) {
				var aLevel = $('select[name=\"RecruitmentPortalAwards_AwardLevel\"]').eq(i + 1).get(0);
				switch ($('.infoschaward .mt_awardsType').eq(i).html()) {
				case '院系级':
				case '学校级':
					aLevel.options[2].selected = true;
					break;
				case '省市级':
					aLevel.options[4].selected = true;
					break;
				case '国家级':
					aLevel.options[5].selected = true;
					break;
				case '国际级':
					aLevel.options[6].selected = true;
					break
				}
			}
			if ($('input[name=\"RecruitmentPortalAwards_extjxmc_107138_937871537\"]').eq(i + 1).length && $('.infoschaward .mt_awardsName').eq(i).html()) {
				$('input[name=\"RecruitmentPortalAwards_extjxmc_107138_937871537\"]').eq(i + 1).val($('.infoschaward .mt_awardsName').eq(i).html())
			}
			if ($('input[name=\"RecruitmentPortalAwards_AwardTime\"]').eq(i + 1).length && $('.infoschaward .mt_awardsDate').eq(i).html()) {
				var ad = $('.infoschaward .mt_awardsDate').eq(i).html().split('-');
				ad = ad.join('/');
				$('input[name=\"RecruitmentPortalAwards_AwardTime\"]').eq(i + 1).val(ad + '/1')
			}
			if ($('textarea[name=\"RecruitmentPortalAwards_AwardDescription\"]').eq(i + 1).length && $('.infoschaward .mt_awardsDes').eq(i).html()) {
				$('textarea[name=\"RecruitmentPortalAwards_AwardDescription\"]').eq(i + 1).val($('.infoschaward .mt_awardsDes').eq(i).html())
			}
		}
		for (var i = 0; i < $('.infofulltimejobs').length; i++) {
			var sy;
			var sm;
			var ey;
			var em;
			var y;
			var m;
			if ($('input[name=\"RecruitmentPortalExperience_CompanyName\"]').eq(i + 1).length) {
				$('input[name=\"RecruitmentPortalExperience_CompanyName\"]').eq(i + 1).val($('.infofulltimejobs .mt_companyName').eq(i).html())
			}
			if ($('select[name=\"RecruitmentPortalExperience_StartDate_Year\"]').eq(i + 1).length && $('.infofulltimejobs .mt_startDate').eq(i).html()) {
				sy = $('select[name=\"RecruitmentPortalExperience_StartDate_Year\"]').eq(i + 1).get(0);
				sm = $('select[name=\"RecruitmentPortalExperience_StartDate_Month\"]').eq(i + 1).get(0);
				var sd = $('.infofulltimejobs .mt_startDate').eq(i).html().split('-');
				y = 2016 - parseInt(sd[0]);
				m = parseInt(sd[1]);
				sy.options[47 - y].selected = true;
				sm.options[m].selected = true
			}
			if ($('select[name=\"RecruitmentPortalExperience_EndDate_Year\"]').eq(i + 1).length && $('.infofulltimejobs .mt_endDate').eq(i).html()) {
				sy = $('select[name=\"RecruitmentPortalExperience_EndDate_Year\"]').eq(i + 1).get(0);
				sm = $('select[name=\"RecruitmentPortalExperience_EndDate_Month\"]').eq(i + 1).get(0);
				var sd = $('.infofulltimejobs .mt_endDate').eq(i).html().split('-');
				y = 2016 - parseInt(sd[0]);
				m = parseInt(sd[1]);
				sy.options[47 - y].selected = true;
				sm.options[m].selected = true;
				sm.dispatchEvent(event)
			}
			if ($('input[name=\"RecruitmentPortalExperience_JobTitle\"]').eq(i + 1).length && $('.infofulltimejobs .mt_positionName').eq(i).html()) {
				$('input[name=\"RecruitmentPortalExperience_JobTitle\"]').eq(i + 1).val($('.infofulltimejobs .mt_positionName').eq(i).html())
			}
			if ($('textarea[name=\"RecruitmentPortalExperience_JobDuty\"]').eq(i + 1).length && $('.infofulltimejobs .mt_workContent').eq(i).text()) {
				$('textarea[name=\"RecruitmentPortalExperience_JobDuty\"]').eq(i + 1).val($('.infofulltimejobs .mt_workContent').eq(i).text())
			}
			if ($('input[name=\"RecruitmentPortalExperience_department\"]').eq(i + 1).length && $('.infofulltimejobs .mt_department').eq(i).html()) {
				$('input[name=\"RecruitmentPortalExperience_department\"]').eq(i + 1).val($('.infofulltimejobs .mt_department').eq(i).html())
			}
			if ($('input[displayname=\"工作地点\"]').eq(i + 1).length && $('.infofulltimejobs .mt_workCity').eq(i).html()) {
				$('input[displayname=\"工作地点\"]').val($('.infofulltimejobs .mt_workCity').eq(i).html())
			}
			if ($('textarea[name=\"RecruitmentPortalExperience_ReasonOfLeaving\"]').eq(i + 1).length && $('.infofulltimejobs .mt_reasons').eq(i).text()) {
				$('textarea[name=\"RecruitmentPortalExperience_ReasonOfLeaving\"]').eq(i + 1).val($('.infofulltimejobs .mt_reasons').eq(i).text())
			}
			if ($('input[name=\"RecruitmentPortalExperience_ReferencePosition\"]').eq(i + 1).length && $('.infofulltimejobs .mt_reterencePosition').eq(i).html()) {
				$('input[name=\"RecruitmentPortalExperience_ReferencePosition\"]').eq(i + 1).val($('.infofulltimejobs .mt_reterencePosition').eq(i).html())
			}
			if ($('input[name=\"RecruitmentPortalExperience_ReferenceRelation\"]').eq(i + 1).length && $('.infofulltimejobs .mt_reterenceRelation').eq(i).html()) {
				$('input[name=\"RecruitmentPortalExperience_ReferenceRelation\"]').eq(i + 1).val($('.infofulltimejobs .mt_reterenceRelation').eq(i).html())
			}
		}
		for (var i = 0; i < $('.infoparttimejobs').length; i++) {
			var sy;
			var sm;
			var ey;
			var em;
			var y;
			var m;
			if ($('input[name=\"RecruitmentPortalPracticeExp_PracticeCompanyName\"]').eq(i + 1).length) {
				$('input[name=\"RecruitmentPortalPracticeExp_PracticeCompanyName\"]').eq(i + 1).val($('.infoparttimejobs .mt_companyName').eq(i).html())
			}
			if ($('select[name=\"RecruitmentPortalPracticeExp_PracticeStartDate_Year\"]').eq(i + 1).length && $('.infoparttimejobs .mt_startDate').eq(i).html()) {
				sy = $('select[name=\"RecruitmentPortalPracticeExp_PracticeStartDate_Year\"]').eq(i + 1).get(0);
				sm = $('select[name=\"RecruitmentPortalPracticeExp_PracticeStartDate_Month\"]').eq(i + 1).get(0);
				var sd = $('.infoparttimejobs .mt_startDate').eq(i).html().split('-');
				y = 2016 - parseInt(sd[0]);
				m = parseInt(sd[1]);
				sy.options[47 - y].selected = true;
				sm.options[m].selected = true
			}
			if ($('select[name=\"RecruitmentPortalPracticeExp_PracticeEndDate_Year\"]').eq(i + 1).length && $('.infoparttimejobs .mt_endDate').eq(i).html()) {
				sy = $('select[name=\"RecruitmentPortalPracticeExp_PracticeEndDate_Year\"]').eq(i + 1).get(0);
				sm = $('select[name=\"RecruitmentPortalPracticeExp_PracticeEndDate_Month\"]').eq(i + 1).get(0);
				var sd = $('.infoparttimejobs .mt_endDate').eq(i).html().split('-');
				y = 2016 - parseInt(sd[0]);
				m = parseInt(sd[1]);
				sy.options[47 - y].selected = true;
				sm.options[m].selected = true;
				sm.dispatchEvent(event)
			}
			if ($('textarea[name=\"RecruitmentPortalPracticeExp_PracticeContent\"]').eq(i + 1).length && $('.infoparttimejobs .mt_workContent').eq(i).text()) {
				$('textarea[name=\"RecruitmentPortalPracticeExp_PracticeContent\"]').eq(i + 1).val($('.infoparttimejobs .mt_workContent').eq(i).text())
			}
			if ($('input[name=\"RecruitmentPortalPracticeExp_PracticeReferencesName\"]').eq(i + 1).length && $('.infoparttimejobs .mt_reterenceName').eq(i).html()) {
				$('input[name=\"RecruitmentPortalPracticeExp_PracticeReferencesName\"]').eq(i + 1).val($('.infoparttimejobs .mt_reterenceName').eq(i).html())
			}
			if ($('input[name=\"RecruitmentPortalPracticeExp_PracticeReferencesName\"]').eq(i + 1).length && $('.infoparttimejobs .mt_reterenceName').eq(i).html()) {
				$('input[name=\"RecruitmentPortalPracticeExp_PracticeReferencesName\"]').eq(i + 1).val($('.infoparttimejobs .mt_reterenceName').eq(i).html())
			}
			if ($('input[name=\"RecruitmentPortalPracticeExp_PracticeAddress_txt\"]').eq(i + 1).length && $('.infoparttimejobs .mt_workCity').eq(i).html()) {
				$('input[name=\"RecruitmentPortalPracticeExp_PracticeAddress_txt\"]').eq(i + 1).val($('.infoparttimejobs .mt_workCity').eq(i).html())
			}
			if ($('input[name=\"RecruitmentPortalPracticeExp_PracticeReferencesRelation\"]').eq(i + 1).length && $('.infoparttimejobs .mt_reterenceRelation').eq(i).html()) {
				$('input[name=\"RecruitmentPortalPracticeExp_PracticeReferencesRelation\"]').eq(i + 1).val($('.infoparttimejobs .mt_reterenceRelation').eq(i).html())
			}
			if ($('input[name=\"RecruitmentPortalPracticeExp_PracticeReferencesPosition\"]').eq(i + 1).length && $('.infoparttimejobs .mt_reterencePosition').eq(i).html()) {
				$('input[name=\"RecruitmentPortalPracticeExp_PracticeReferencesPosition\"]').eq(i + 1).val($('.infoparttimejobs .mt_reterencePosition').eq(i).html())
			}
			if ($('input[name=\"RecruitmentPortalPracticeExp_PracticeReferencesContact\"]').eq(i + 1).length && $('.infoparttimejobs .mt_reterence_phone').eq(i).html()) {
				$('input[name=\"RecruitmentPortalPracticeExp_PracticeReferencesContact\"]').eq(i + 1).val($('.infoparttimejobs .mt_reterence_phone').eq(i).html())
			}
			if ($('.mainContainer').eq(3).find('a').eq(0).length == 0 || $('.mainContainer').eq(3).find('a').eq(0).attr('name') != '工作经验') {
				if ($('input[name=\"RecruitmentPortalExperience_CompanyName\"]').eq(i + 1).length) {
					$('input[name=\"RecruitmentPortalExperience_CompanyName\"]').eq(i + 1).val($('.infoparttimejobs .mt_companyName').eq(i).html())
				}
				if ($('select[name=\"RecruitmentPortalExperience_StartDate_Year\"]').eq(i + 1).length && $('.infoparttimejobs .mt_startDate').eq(i).html()) {
					sy = $('select[name=\"RecruitmentPortalExperience_StartDate_Year\"]').eq(i + 1).get(0);
					sm = $('select[name=\"RecruitmentPortalExperience_StartDate_Month\"]').eq(i + 1).get(0);
					var sd = $('.infoparttimejobs .mt_startDate').eq(i).html().split('-');
					y = 2016 - parseInt(sd[0]);
					m = parseInt(sd[1]);
					sy.options[47 - y].selected = true;
					sm.options[m].selected = true
				}
				if ($('select[name=\"RecruitmentPortalExperience_EndDate_Year\"]').eq(i + 1).length && $('.infoparttimejobs .mt_endDate').eq(i).html()) {
					sy = $('select[name=\"RecruitmentPortalExperience_EndDate_Year\"]').eq(i + 1).get(0);
					sm = $('select[name=\"RecruitmentPortalExperience_EndDate_Month\"]').eq(i + 1).get(0);
					var sd = $('.infoparttimejobs .mt_endDate').eq(i).html().split('-');
					y = 2016 - parseInt(sd[0]);
					m = parseInt(sd[1]);
					sy.options[47 - y].selected = true;
					sm.options[m].selected = true;
					sm.dispatchEvent(event)
				}
				if ($('input[name=\"RecruitmentPortalExperience_JobTitle\"]').eq(i + 1).length && $('.infoparttimejobs .mt_positionName').eq(i).html()) {
					$('input[name=\"RecruitmentPortalExperience_JobTitle\"]').eq(i + 1).val($('.infoparttimejobs .mt_positionName').eq(i).html())
				}
				if ($('textarea[name=\"RecruitmentPortalExperience_JobDuty\"]').eq(i + 1).length && $('.infoparttimejobs .mt_workContent').eq(i).text()) {
					$('textarea[name=\"RecruitmentPortalExperience_JobDuty\"]').eq(i + 1).val($('.infoparttimejobs .mt_workContent').eq(i).text())
				}
				if ($('input[name=\"RecruitmentPortalExperience_department\"]').eq(i + 1).length && $('.infoparttimejobs .mt_department').eq(i).html()) {
					$('input[name=\"RecruitmentPortalExperience_department\"]').eq(i + 1).val($('.infoparttimejobs .mt_department').eq(i).html())
				}
				if ($('input[displayname=\"工作地点\"]').eq(i + 1).length && $('.infoparttimejobs .mt_workCity').eq(i).html()) {
					$('input[displayname=\"工作地点\"]').val($('.infoparttimejobs .mt_workCity').eq(i).html())
				}
				if ($('textarea[name=\"RecruitmentPortalExperience_ReasonOfLeaving\"]').eq(i + 1).length && $('.infoparttimejobs .mt_reasons').eq(i).text()) {
					$('textarea[name=\"RecruitmentPortalExperience_ReasonOfLeaving\"]').eq(i + 1).val($('.infoparttimejobs .mt_reasons').eq(i).text())
				}
				if ($('input[name=\"RecruitmentPortalExperience_ReferencePosition\"]').eq(i + 1).length && $('.infoparttimejobs .mt_reterencePosition').eq(i).html()) {
					$('input[name=\"RecruitmentPortalExperience_ReferencePosition\"]').eq(i + 1).val($('.infoparttimejobs .mt_reterencePosition').eq(i).html())
				}
				if ($('input[name=\"RecruitmentPortalExperience_ReferenceRelation\"]').eq(i + 1).length && $('.infoparttimejobs .mt_reterenceRelation').eq(i).html()) {
					$('input[name=\"RecruitmentPortalExperience_ReferenceRelation\"]').eq(i + 1).val($('.infoparttimejobs .mt_reterenceRelation').eq(i).html())
				}
				if ($('input[name=\"RecruitmentPortalExperience_ReferenceName\"]').eq(i + 1).length && $('.infoparttimejobs .mt_reterenceName').eq(i).html()) {
					$('input[name=\"RecruitmentPortalExperience_ReferenceName\"]').eq(i + 1).val($('.infoparttimejobs .mt_reterenceName').eq(i).html())
				}
				if ($('input[name=\"RecruitmentPortalExperience_ReferenceLinkInfo\"]').eq(i + 1).length && $('.infoparttimejobs .mt_reterence_phone').eq(i).html()) {
					$('input[name=\"RecruitmentPortalExperience_ReferenceLinkInfo\"]').eq(i + 1).val($('.infoparttimejobs .mt_reterence_phone').eq(i).html())
				}
			}
		}
		for (var i = 0; i < $('.infoschoolclub').length; i++) {
			var sy;
			var sm;
			var ey;
			var em;
			var y;
			var m;
			if ($('select[name=\"RecruitmentPortalSchoolPractice_PracticeStartDateTime_Year\"]').eq(i + 1).length && $('.infoschoolclub .mt_startDate').eq(i).html()) {
				sy = $('select[name=\"RecruitmentPortalSchoolPractice_PracticeStartDateTime_Year\"]').eq(i + 1).get(0);
				sm = $('select[name=\"RecruitmentPortalSchoolPractice_PracticeStartDateTime_Month\"]').eq(i + 1).get(0);
				var sd = $('.infoschoolclub .mt_startDate').eq(i).html().split('-');
				y = 2016 - parseInt(sd[0]);
				m = parseInt(sd[1]);
				sy.options[47 - y].selected = true;
				sm.options[m].selected = true
			}
			if ($('select[name=\"RecruitmentPortalSchoolPractice_PracticeEndDateTime_Year\"]').eq(i + 1).length && $('.infoschoolclub .mt_endDate').eq(i).html()) {
				sy = $('select[name=\"RecruitmentPortalSchoolPractice_PracticeEndDateTime_Year\"]').eq(i + 1).get(0);
				sm = $('select[name=\"RecruitmentPortalSchoolPractice_PracticeEndDateTime_Month\"]').eq(i + 1).get(0);
				var sd = $('.infoschoolclub .mt_endDate').eq(i).html().split('-');
				y = 2016 - parseInt(sd[0]);
				m = parseInt(sd[1]);
				sy.options[47 - y].selected = true;
				sm.options[m].selected = true;
				sm.dispatchEvent(event)
			}
			if ($('select[name=\"RecruitmentPortalSchoolCadre_CadreStartDateTime_Year\"]').eq(i + 1).length && $('.infoschoolclub .mt_startDate').eq(i).html()) {
				sy = $('select[name=\"RecruitmentPortalSchoolCadre_CadreStartDateTime_Year\"]').eq(i + 1).get(0);
				sm = $('select[name=\"RecruitmentPortalSchoolCadre_CadreStartDateTime_Month\"]').eq(i + 1).get(0);
				var sd = $('.infoschoolclub .mt_startDate').eq(i).html().split('-');
				y = 2016 - parseInt(sd[0]);
				m = parseInt(sd[1]);
				sy.options[47 - y].selected = true;
				sm.options[m].selected = true
			}
			if ($('select[name=\"RecruitmentPortalSchoolCadre_CadreEndDateTime_Year\"]').eq(i + 1).length && $('.infoschoolclub .mt_endDate').eq(i).html()) {
				sy = $('select[name=\"RecruitmentPortalSchoolCadre_CadreEndDateTime_Year\"]').eq(i + 1).get(0);
				sm = $('select[name=\"RecruitmentPortalSchoolCadre_CadreEndDateTime_Month\"]').eq(i + 1).get(0);
				var sd = $('.infoschoolclub .mt_endDate').eq(i).html().split('-');
				y = 2016 - parseInt(sd[0]);
				m = parseInt(sd[1]);
				sy.options[47 - y].selected = true;
				sm.options[m].selected = true;
				sm.dispatchEvent(event)
			}
			if ($('input[name=\"RecruitmentPortalSchoolPractice_PracticeName\"]').eq(i + 1).length && $('.infoschoolclub .mt_schClubName').eq(i).html()) {
				$('input[name=\"RecruitmentPortalSchoolPractice_PracticeName\"]').eq(i + 1).val($('.infoschoolclub .mt_schClubName').eq(i).html())
			}
			if ($('textarea[name=\"RecruitmentPortalSchoolPractice_PracticeDescription\"]').eq(i + 1).length && $('.infoschoolclub .mt_workDes').eq(i).html()) {
				$('textarea[name=\"RecruitmentPortalSchoolPractice_PracticeDescription\"]').eq(i + 1).val($('.infoschoolclub .mt_workDes').eq(i).html())
			}
			if ($('input[name=\"RecruitmentPortalSchoolCadre_CadreName\"]').eq(i + 1).length && $('.infoschoolclub .mt_positionName').eq(i).html()) {
				$('input[name=\"RecruitmentPortalSchoolCadre_CadreName\"]').eq(i + 1).val($('.infoschoolclub .mt_positionName').eq(i).html())
			}
			if ($('[name=\"RecruitmentPortalSchoolCadre_CadreDescription\"]').eq(i + 1) && $('.infoschoolclub .mt_schClubList').eq(i).html()) {
				$('[name=\"RecruitmentPortalSchoolCadre_CadreDescription\"]').eq(i + 1).val($('.infoschoolclub .mt_schClubList').eq(i).html())
			}
		}
		if ($('select[name=\"RecruitmentPortalPersonProfile_extyydj_102995_773868123\"]').length && $('.infoEnglishSkill .mt_skillEngLevel').eq(0).html()) {
			function cmp(a, b) {
				return b.level - a.level
			}
			var englevel = [];
			for (var i = 0; i < $('.infoEnglishSkill').length; i++) {
				switch ($('.infoEnglishSkill .mt_skillEngLevel').eq(i).html()) {
				case '大学英语四级':
					englevel.push({
						level:
						1,
						id: i
					});
					break;
				case '大学英语六级':
					englevel.push({
						level:
						2,
						id: i
					});
					break;
				case '专业四级':
					englevel.push({
						level:
						3,
						id: i
					});
					break;
				case '专业八级':
					englevel.push({
						level:
						4,
						id: i
					});
					break
				}
			}
			englevel.sort(cmp);
			if (englevel[0]) {
				if (englevel[0].level == 1) {
					$('select[name=\"RecruitmentPortalPersonProfile_extyydj_102995_773868123\"]')[0].options[3].selected = true
				} else {
					if (englevel[0].level == 2) {
						$('select[name=\"RecruitmentPortalPersonProfile_extyydj_102995_773868123\"]')[0].options[4].selected = true
					} else {
						if (englevel[0].level == 3) {
							$('select[name=\"RecruitmentPortalPersonProfile_extyydj_102995_773868123\"]')[0].options[2].selected = true
						} else {
							if (englevel[0].level == 4) {
								$('select[name=\"RecruitmentPortalPersonProfile_extyydj_102995_773868123\"]')[0].options[1].selected = true
							}
						}
					}
				}
			}
		}
		if ($('select[name=\"RecruitmentPortalPersonProfile_ExamCategory\"]') && $('#skill-list .mt_skillEngLevel').last().html()) {
			let endlevel = $('select[name=\"RecruitmentPortalPersonProfile_ExamCategory\"]')[0].options;
			switch($('#skill-list .mt_skillEngLevel').last().html()){
				case '大学英语四级':
					endlevel[3].selected=true;
					$('input[name=\"RecruitmentPortalPersonProfile_Score\"]').val($('#skill-list .mt_skillEngSorce').last().html());
					break;
				case '大学英语六级':
					endlevel[4].selected=true;
					$('input[name=\"RecruitmentPortalPersonProfile_Score\"]').val($('#skill-list .mt_skillEngSorce').last().html());
					break;
				case '专业四级':
					endlevel[5].selected=true;
					$('input[name=\"RecruitmentPortalPersonProfile_Score\"]').val($('#skill-list .mt_skillEngSorce').last().html());
					break;
				case '专业八级':
					endlevel[6].selected=true;
					$('input[name=\"RecruitmentPortalPersonProfile_Score\"]').val($('#skill-list .mt_skillEngSorce').last().html());
					break;
			}
		}
		if ($('select[name=\"RecruitmentPortalPersonProfile_extyingyudengji_105733_2142696772\"]').length && $('.infoEnglishSkill .mt_skillEngLevel').eq(0).html()) {
			function cmp(a, b) {
				return b.level - a.level
			}
			var englevel = [];
			for (var i = 0; i < $('.infoEnglishSkill').length; i++) {
				switch ($('.infoEnglishSkill .mt_skillEngLevel').eq(i).html()) {
					case '大学英语四级':
						englevel.push({
							level:
							1,
							id: i
						});
						break;
					case '大学英语六级':
						englevel.push({
							level:
							2,
							id: i
						});
						break;
					case '专业四级':
						englevel.push({
							level:
							3,
							id: i
						});
						break;
					case '专业八级':
						englevel.push({
							level:
							4,
							id: i
						});
						break
				}
			}
			englevel.sort(cmp);
			if (englevel[0]) {
				$('select[name=\"RecruitmentPortalPersonProfile_extyingyudengji_105733_2142696772\"]')[0].options[englevel[0].level + 1].selected = true;
				$('input[name=\"RecruitmentPortalPersonProfile_Score\"]').val($('.infoEnglishSkill .mt_skillEngSorce').eq(englevel[0].id).html())
			}
		}
		for (var i = 0; i < $('.infoOtEnglishSkill').length; i++) {
			if ($('input[name=\"RecruitmentPortalPersonProfile_GRE\"]') && $('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html() == 'GRE') {
				$('input[name=\"RecruitmentPortalPersonProfile_GRE\"]').val($('.infoOtEnglishSkill .mt_otherSkillEngSorce').eq(i).html())
			}
			if ($('input[name=\"RecruitmentPortalPersonProfile_TOEFL\"]') && $('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html() == '托福') {
				$('input[name=\"RecruitmentPortalPersonProfile_TOEFL\"]').val($('.infoOtEnglishSkill .mt_otherSkillEngSorce').eq(i).html())
			}
			if ($('input[name=\"RecruitmentPortalPersonProfile_GMAT\"]') && $('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html() == 'GMAT') {
				$('input[name=\"RecruitmentPortalPersonProfile_GMAT\"]').val($('.infoOtEnglishSkill .mt_otherSkillEngSorce').eq(i).html())
			}
			if ($('input[name=\"RecruitmentPortalPersonProfile_IELTS\"]') && $('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html() == '雅思') {
				$('input[name=\"RecruitmentPortalPersonProfile_IELTS\"]').val($('.infoOtEnglishSkill .mt_otherSkillEngSorce').eq(i).html())
			}
		}
		for (var i = 0; i < $('.infoOtherSkill').length; i++) {
			if ($('select[name=\"RecruitmentPortalLang_LanguageType\"]').eq(i + 1).length && $('.infoOtherSkill .mt_skillOtherLang').eq(i).html()) {
				var skill = $('select[name=\"RecruitmentPortalLang_LanguageType\"]').eq(i + 1).get(0);
				for (var j = 0; j < skill.options.length; j++) {
					if (skill.options[j].text == $('.infoOtherSkill .mt_skillOtherLang').eq(i).html()) {
						skill.options[j].selected = true;
						break
					}
				}
			}
			if ($('select[name=\"RecruitmentPortalLang_LanguageLevel\"]').eq(i + 1).length && $('.infoOtherSkill .mt_skillGraspLevel').eq(i).html()) {
				var level = $('select[name=\"RecruitmentPortalLang_LanguageLevel\"]').eq(i + 1).get(0);
				switch ($('.infoOtherSkill .mt_skillGraspLevel').eq(i).html()) {
				case '一般':
					level.options[1].selected = true;
					break;
				case '熟练':
					level.options[2].selected = true;
					break;
				case '精通':
					level.options[3].selected = true;
					break
				}
			}
			if ($('select[name=\"RecruitmentPortalLang_ListeningSpeakingAbility\"]').eq(i + 1).length && $('.infoOtherSkill .mt_skillListenLevel').eq(i).html()) {
				var level = $('select[name=\"RecruitmentPortalLang_ListeningSpeakingAbility\"]').eq(i + 1).get(0);
				switch ($('.infoOtherSkill .mt_skillListenLevel').eq(i).html()) {
				case '一般':
					level.options[1].selected = true;
					break;
				case '熟练':
					level.options[2].selected = true;
					break;
				case '精通':
					level.options[3].selected = true;
					break
				}
			}
			if ($('select[name=\"RecruitmentPortalLang_ReadingWritingAbility\"]').eq(i + 1).length && $('.infoOtherSkill .mt_skillWriteLevel').eq(i).html()) {
				var level = $('select[name=\"RecruitmentPortalLang_ReadingWritingAbility\"]').eq(i + 1).get(0);
				switch ($('.infoOtherSkill .mt_skillWriteLevel').eq(i).html()) {
				case '一般':
					level.options[1].selected = true;
					break;
				case '熟练':
					level.options[2].selected = true;
					break;
				case '精通':
					level.options[3].selected = true;
					break
				}
			}
		}
		for (var i = 0; i < $('.infotraining').length; i++) {
			var sy;
			var sm;
			var ey;
			var em;
			var y;
			var m;
			if ($('select[name=\"RecruitmentPortalTrain_TrainStartDate_Year\"]').eq(i + 1).length && $('.infotraining .mt_startDate').eq(i).html()) {
				sy = $('select[name=\"RecruitmentPortalTrain_TrainStartDate_Year\"]').eq(i + 1).get(0);
				sm = $('select[name=\"RecruitmentPortalTrain_TrainStartDate_Month\"]').eq(i + 1).get(0);
				var sd = $('.infotraining .mt_startDate').eq(i).html().split('-');
				y = 2016 - parseInt(sd[0]);
				m = parseInt(sd[1]);
				sy.options[47 - y].selected = true;
				sm.options[m].selected = true
			}
			if ($('select[name=\"RecruitmentPortalTrain_TrainEndDate_Year\"]').eq(i + 1).length && $('.infotraining .mt_endDate').eq(i).html()) {
				sy = $('select[name=\"RecruitmentPortalTrain_TrainEndDate_Year\"]').eq(i + 1).get(0);
				sm = $('select[name=\"RecruitmentPortalTrain_TrainEndDate_Month\"]').eq(i + 1).get(0);
				var sd = $('.infotraining .mt_endDate').eq(i).html().split('-');
				y = 2016 - parseInt(sd[0]);
				m = parseInt(sd[1]);
				sy.options[47 - y].selected = true;
				sm.options[m].selected = true;
				sm.dispatchEvent(event)
			}
			if ($('[name=\"RecruitmentPortalTrain_OrgName\"]').eq(i + 1) && $('.infotraining .mt_trainingCompany').eq(i).html()) {
				$('[name=\"RecruitmentPortalTrain_OrgName\"]').eq(i + 1).val($('.infotraining .mt_trainingCompany').eq(i).html())
			}
			if ($('[name=\"RecruitmentPortalTrain_CourseName\"]').eq(i + 1) && $('.infotraining .mt_trainingName').eq(i).html()) {
				$('[name=\"RecruitmentPortalTrain_CourseName\"]').eq(i + 1).val($('.infotraining .mt_trainingName').eq(i).html())
			}
			if ($('[name=\"RecruitmentPortalTrain_Certificate\"]').eq(i + 1) && $('.infotraining .mt_certificateName').eq(i).html()) {
				$('[name=\"RecruitmentPortalTrain_Certificate\"]').eq(i + 1).val($('.infotraining .mt_certificateName').eq(i).html())
			}
			if ($('[name=\"RecruitmentPortalTrain_Description\"]').eq(i + 1) && $('.infotraining .mt_trainingDes').eq(i).html()) {
				$('[name=\"RecruitmentPortalTrain_Description\"]').eq(i + 1).val($('.infotraining .mt_trainingDes').eq(i).html())
			}
		}
		for (var i = 0; i < $('.infoplcerti').length; i++) {
			if ($('input[name=\"RecruitmentPortalCertificate_CertificateName\"]').eq(i + 1) && $('.infoplcerti .mt_certificateName').eq(i).html()) {
				$('input[name=\"RecruitmentPortalCertificate_CertificateName\"]').eq(i + 1).val($('.infoplcerti .mt_certificateName').eq(i).html())
			}
			if ($('[name=\"RecruitmentPortalCertificate_ObtainDate\"]').eq(i + 1) && $('.infoplcerti .mt_getDate').eq(i).html()) {
				var getdate = $('.infoplcerti .mt_getDate').eq(i).html().split('-');
				getdate[1] = getdate[1] < 10 ? '0' + getdate[1] : getdate[1];
				getdate = getdate.join('/') + '/01';
				$('[name=\"RecruitmentPortalCertificate_ObtainDate\"]').eq(i + 1).val(getdate)
			}
			if ($('textarea[name=\"RecruitmentPortalCertificate_CertificateDescription\"]').eq(i + 1) && $('.infoplcerti .mt_certificateDes').eq(i).html()) {
				$('textarea[name=\"RecruitmentPortalCertificate_CertificateDescription\"]').eq(i + 1).val($('.infoplcerti .mt_certificateDes').eq(i).html())
			}
			if ($('input[name=\"RecruitmentPortalCertificate_AwardOrg\"]').eq(i + 1) && $('.infoplcerti .mt_issuing').eq(i).html()) {
				$('input[name=\"RecruitmentPortalCertificate_AwardOrg\"]').eq(i + 1).val($('.infoplcerti .mt_issuing').eq(i).html())
			}
		}
		for (var i = 0; i < $('.infootherinfo').length; i++) {
			if ($('input[name=\"RecruitmentPortalSkill_SkillName\"]') && $('.infootherinfo #mt_hobbies').eq(i).html()) {
				$('input[name=\"RecruitmentPortalSkill_SkillName\"]').val($('.infootherinfo #mt_hobbies').eq(i).html())
			}
		}
		if ($('textarea[name=\"RecruitmentPortalAdditionalInfo_Interest\"]') && $('#mt_skill').html()) {
			$('textarea[name=\"RecruitmentPortalAdditionalInfo_Interest\"]').val($('#mt_skill').html())
		}
		if ($('textarea[name=\"RecruitmentPortalAdditionalInfo_glory\"]') && $('#achievement').html()) {
			$('textarea[name=\"RecruitmentPortalAdditionalInfo_glory\"]').val($('#achievement').html())
		}
		if ($('textarea[name=\"RecruitmentPortalAdditionalInfo_Specialskills\"]') && $('#mt_hobbies').html()) {
			$('textarea[name=\"RecruitmentPortalAdditionalInfo_Specialskills\"]').val($('#mt_hobbies').html())
		}
		if ($('textarea[name=\"RecruitmentPortalAdditionalInfo_glory\"]') && $('#achievement').html()) {
			$('textarea[name=\"RecruitmentPortalAdditionalInfo_glory\"]').val($('#achievement').html())
		}
		if ($('textarea[name=\"RecruitmentPortalAdditionalInfo_Specialty\"]') && $('#mt_skill').html()) {
			$('textarea[name=\"RecruitmentPortalAdditionalInfo_Specialty\"]').val($('#mt_skill').html())
		}
		if ($('input[name=\"RecruitmentPortalFamily_Name\"]').eq(1) && $('#mt_fmname').html()) {
			$('input[name=\"RecruitmentPortalFamily_Name\"]').eq(1).val($('#mt_fmname').html())
		}
		if ($('input[name=\"RecruitmentPortalFamily_relation\"]').eq(1) && $('#mt_fmrelation').html()) {
			$('input[name=\"RecruitmentPortalFamily_relation\"]').eq(1).val($('#mt_fmrelation').html())
		}
		if ($('input[name=\"RecruitmentPortalFamily_CompanyName\"]').eq(1) && $('#mt_fmwork').html()) {
			$('input[name=\"RecruitmentPortalFamily_CompanyName\"]').eq(1).val($('#mt_fmwork').html())
		}
		if ($('input[name=\"RecruitmentPortalFamily_telephone\"]').eq(1) && $('#mt_fmphone').html()) {
			$('input[name=\"RecruitmentPortalFamily_telephone\"]').eq(1).val($('#mt_fmphone').html())
		}
		if ($('input[name=\"RecruitmentPortalFamily_JobTitle\"]').eq(1) && $('#mt_fmposition').html()) {
			$('input[name=\"RecruitmentPortalFamily_JobTitle\"]').eq(1).val($('#mt_fmposition').html())
		}
		if ($('input[name=\"RecruitmentPortalPersonProfile_CollegeContact\"]') && $('.infopledu .mt_tutorname').html()) {
			$('input[name=\"RecruitmentPortalPersonProfile_CollegeContact\"]').val($('.infopledu .mt_tutorname').html())
		}
		if ($('input[name=\"RecruitmentPortalPersonProfile_CollegeContactTel\"]') && $('.infopledu .mt_tutorphone').html()) {
			$('input[name=\"RecruitmentPortalPersonProfile_CollegeContactTel\"]').val($('.infopledu .mt_tutorphone').html())
		}
		if ($('select[name=\"RecruitmentPortalPersonProfile_extxb_180033_1945695191\"]').length && $('#mt_sex').html()) {
			var sex = $('select[name=\"RecruitmentPortalPersonProfile_extxb_180033_1945695191\"]').get(0);
			if ($('#mt_sex').html() == '男') {
				sex.options[1].selected = true
			}
			if ($('#mt_sex').html() == '女') {
				sex.options[2].selected = true
			}
		}
		if ($('select[name=\"RecruitmentPortalPersonProfile_extzy_102639_764974970\"]').length && $('.infopledu .mt_professionalranking').html()) {
			var rank = $('select[name=\"RecruitmentPortalPersonProfile_extzy_102639_764974970\"]').get(0);
			switch ($('.infopledu .mt_professionalranking').html()) {
			case '前5%':
				rank.options[1].selected = true;
				break;
			case '前10%':
				rank.options[2].selected = true;
				break;
			case '前20%':
				rank.options[3].selected = true;
				break;
			case '前30%':
				rank.options[4].selected = true;
				break;
			case '前40%':
				rank.options[5].selected = true;
				break;
			case '前50%':
				rank.options[6].selected = true;
				break;
			default:
				rank.options[5].selected = true;
				break
			}
		}
		if ($('select[name=\"RecruitmentPortalPersonProfile_extzhuanyepaiming_105733_1247239906\"]').length) {
			var rank = $('select[name=\"RecruitmentPortalPersonProfile_extzhuanyepaiming_105733_1247239906\"]').get(0);
			var max = help.getGraguate();
			switch ($('.infopledu .mt_professionalranking').eq(max).html()) {
			case '前5%':
			case '前10%':
				rank.options[1].selected = true;
				break;
			case '前20%':
				rank.options[2].selected = true;
				break;
			case '前30%':
				rank.options[3].selected = true;
				break;
			case '前40%':
			case '前50%':
				rank.options[4].selected = true;
				break;
			default:
				rank.options[5].selected = true;
				break
			}
		}
		if ($('input[name=\"RecruitmentPortalPersonProfile_extzhuanyemingcheng_160213_1686935379\"]') && $('.infopledu .mt_professional').html()) {
			$('input[name=\"RecruitmentPortalPersonProfile_extzhuanyemingcheng_160213_1686935379\"]').val($('.infopledu .mt_professional').html())
		}
		if ($('input[name=\"RecruitmentPortalPersonProfile_telephone\"]') && $('#mt_gudingtel').html()) {
			$('input[name=\"RecruitmentPortalPersonProfile_telephone\"]').val($('#mt_gudingtel').html())
		}
		if ($('input[name=\"RecruitmentPortalPersonProfile_extguoji_110018_1949884123\"]') && $('#mt_national').html()) {
			$('input[name=\"RecruitmentPortalPersonProfile_extguoji_110018_1949884123\"]').val($('#mt_national').html())
		}
		if ($('select[name=\"RecruitmentPortalPersonProfile_extyingyu_110018_2081314279\"]').length && $('.infoEnglishSkill .mt_skillEngLevel').html()) {
			var rank = $('select[name=\"RecruitmentPortalPersonProfile_extyingyu_110018_2081314279\"]').get(0);
			switch ($('.infoEnglishSkill .mt_skillEngLevel').html()) {
			case '大学英语四级':
				rank.options[3].selected = true;
				break;
			case '大学英语六级':
				rank.options[4].selected = true;
				break;
			case '专业四级':
				rank.options[5].selected = true;
				break;
			default:
				rank.options[6].selected = true;
				break
			}
		}
		if ($('select[name=\"RecruitmentPortalPersonProfile_ExamCategory\"]').length == 0 && $('select[name=\"RecruitmentPortalPersonProfile_extyingyudengji_105733_2142696772\"]').length == 0 && $('input[name=\"RecruitmentPortalPersonProfile_Score\"]') && $('.infoEnglishSkill .mt_skillEngSorce').html()) {
			$('input[name=\"RecruitmentPortalPersonProfile_Score\"]').val($('.infoEnglishSkill .mt_skillEngSorce').html())
		}
		if ($('input[name=\"RecruitmentPortalPersonProfile_extpingjia_110018_919095991\"]') && $('#mt_selfIntro').html()) {
			$('input[name=\"RecruitmentPortalPersonProfile_extpingjia_110018_919095991\"]').val($('#mt_selfIntro').html())
		}
		if ($('textarea[name=\"RecruitmentPortalAdditionalInfo_extziwopm_106189_752247470\"]') && $('#mt_selfIntro').html()) {
			$('textarea[name=\"RecruitmentPortalAdditionalInfo_extziwopm_106189_752247470\"]').val($('#mt_selfIntro').html())
		}
		if ($('input[name=\"RecruitmentPortalFamily_FamilyLocaltion\"]').eq(1) && $('#mt_postadd').html()) {
			$('input[name=\"RecruitmentPortalFamily_FamilyLocaltion\"]').eq(1).val($('#mt_postadd').html())
		}
		if ($('.mainContainer').eq(2).length && $('.mainContainer').eq(2).find('a').eq(0).attr('name') == '获奖情况') {
			if ($('#11982481-5687-422e-8131-fe3193614feb162162').length) {
				var text = '';
				for (var i = 0; i < $('.infoschaward ').length; i++) {
					text = text + $('.infoschaward.mt_schawradList ').eq(i).html() + ';'
				}
				$('#11982481 - 5687 - 422e-8131 - fe3193614feb162162 ').val(text)
			}
		};
		if ($('#RecruitmentPortalPersonProfile_exteducation_101440_1335004877') && $('#mt_edu').html()) {
			let edu = $('#RecruitmentPortalPersonProfile_exteducation_101440_1335004877')[0];
			switch ($('#mt_edu').html()) {
			case '大学专科':
				edu.options[1].selected = true;
				break;
			case '海外本科':
			case '大学本科-一本':
			case '大学本科-二本':
			case '大学本科-三本':
				edu.options[2].selected = true;
				break;
			case 'MPA':
			case 'MBA':
			case '硕士研究生':
				edu.options[3].selected = true;
				break;
			case '博士研究生':
				edu.options[4].selected = true;
				break
			}
		}
		if ($('#077e07c6-1476-47d0-959f-c5a33405e25411') && $('#edu-list .mt_schoolName').last().html()) {
			$('#077e07c6-1476-47d0-959f-c5a33405e25411').val($('#edu-list .mt_schoolName').last().html())
		}
		if ($('#eb2408ed-d256-411f-b50f-c9fd8ec73fc111') && $('#edu-list .mt_professional').last().html()) {
			$('#eb2408ed-d256-411f-b50f-c9fd8ec73fc111').val($('#edu-list .mt_professional').last().html())
		}
	})
})()