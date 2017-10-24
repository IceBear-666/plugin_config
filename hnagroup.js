(function() {
	KISSY.one('.quick-write').on('click',
	function() {
		if ($('#jm_qiuck_cover')) {
			$('#jm_qiuck_cover').fadeIn();
			setTimeout(function() {
				$('#jm_qiuck_cover').fadeOut()
			},
			1000)
		}
		var event = document.createEvent('HTMLEvents');
		event.initEvent('change', true, false);
		if ($('#4c037148-140a-4c2b-b87a-b97609215d7011') && $('#mt_name').html()) {
			$('#4c037148-140a-4c2b-b87a-b97609215d7011').val($('#mt_name').html())
		}
		if ($('input[name=\"RecruitmentPortalLang_extCertificateType_140036_1335944666\"]') && $('#skill-list .mt_skillEngLevel').last().html()){
			$('input[name=\"RecruitmentPortalLang_extCertificateType_140036_1335944666\"]').val($('#skill-list .mt_skillEngLevel').last().html());
		}
		if ($('input[name=\"RecruitmentPortalLang_extFraction_140036_1927441460\"]') && $('#skill-list .mt_skillEngSorce').last().html()){
			$('input[name=\"RecruitmentPortalLang_extFraction_140036_1927441460\"]').val($('#skill-list .mt_skillEngSorce').last().html());
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
		if ($('#RecruitmentPortalPersonProfile_WedState').length && $('#mt_maritalstatus').html()) {
			var mar = $('#RecruitmentPortalPersonProfile_WedState')[0];
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
		if ($('#RecruitmentPortalPersonProfile_EducationLevel').length && $('#mt_edu').html()) {
			var edu = document.getElementById('RecruitmentPortalPersonProfile_EducationLevel');
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
		var maxy = 0;
		var maxid = 0;
		for (var i = 0; i < $('.infopledu').length; i++) {
			var endyear = parseInt($('.infopledu .mt_endYearY').eq(i).html());
			if (i == 0) {
				maxy = endyear
			} else if (endyear > maxy) {
				maxy = endyear;
				maxid = i
			}
		}
		if ($('select[name=\"RecruitmentPortalPersonProfile_HighestDegree\"]').length && $('.infopledu .mt_degree').eq(maxid).html()) {
			var deg = $('select[name=\"RecruitmentPortalPersonProfile_HighestDegree\"]')[0];
			for (var j = 1; j < deg.options.length; j++) {
				if (deg.options[j].text == $('.infopledu .mt_degree').eq(maxid).html()) {
					deg.options[j].selected = true;
					break
				}
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
					edu.options[8].selected = true;
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
			if ($('input[name=\"RecruitmentPortalEducation_MajorName\"]').eq(i + 1).length && $('.infopledu .mt_professional').eq(i).html()) {
				$('input[name=\"RecruitmentPortalEducation_MajorName\"]').eq(i + 1).val($('.infopledu .mt_professional').eq(i).html())
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
		if ($('select[name=\"RecruitmentPortalPersonProfile_ExamCategory\"]').length && $('.infoEnglishSkill .mt_skillEngLevel').eq(0).html()) {
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
				$('select[name=\"RecruitmentPortalPersonProfile_ExamCategory\"]')[0].options[englevel[0].level + 2].selected = true;
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
		if ($('input[name=\"RecruitmentPortalFamily_FamilyLocaltion\"]').eq(1) && $('#mt_postadd').html()) {
			$('input[name=\"RecruitmentPortalFamily_FamilyLocaltion\"]').eq(1).val($('#mt_postadd').html())
		}
		if ($('input[name=\"RecruitmentPortalPersonProfile_exthjxz_104849_115829694\"]').length && $('#mt_hukoucitynow').html()) {
			$('input[name=\"RecruitmentPortalPersonProfile_exthjxz_104849_115829694\"]').val($('#mt_hukoucitynow').html() + $('#mt_hukoucitynow_city').html())
		}
	});
})()