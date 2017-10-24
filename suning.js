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
		if ($('#resumeForm input[name=\"name\"]')) {
			$('#resumeForm input[name=\"name\"]').val($('#mt_name').html())
		}
		if ($('#sex-show~ul li').click()) {
			$('#sex-show').val($('#mt_sex').html())
		}
		if ($('#birthday') && $('#mt_birth').html()) {
			$('#birthday').val($('#mt_birth').html())
		}
		if ($('#stature')) {
			$('#stature').val($('#mt_height').html())
		}
		if ($('input[name=\"ethnicGroup\"]').next('input') && $('#mt_nation').html()) {
			var nationality = $('#ethnicGroup-show').next('ul').find('li');
			for (var i = 0; i < nationality.length; i++) {
				if (nationality[i].innerHTML == $('#mt_nation').html()) {
					nationality[i].click();
					break
				}
			}
		}
		if ($('input[name=\"education\"]').next('input') && $('#mt_edu').html()) {
			var edu = $('#education-show').next('ul').find('li');
			for (var i = 0; i < edu.length; i++) {
				if ($('#mt_edu').html().indexOf(edu[i].innerHTML, 0) != -1) {
					edu[i].click()
				}
			}
		}
		if ($('input[name=\"polityLevel\"]').next('input') && $('#mt_polistatus').html()) {
			var polity = $('#polityLevel-show').next('ul').find('li');
			for (var i = 0; i < polity.length; i++) {
				if (polity[i].innerHTML.indexOf($('#mt_polistatus').html(), 0) != -1) {
					polity[i].click();
					break
				}
			}
		}
		if ($('input[name=\"identificationType\"]').next('input') && $('#mt_idtype').html()) {
			var identi = $('#identificationType-show').next('ul').find('li');
			for (var i = 0; i < identi.length; i++) {
				if (identi[i].innerHTML == $('#mt_idtype').html()) {
					identi[i].click();
					break
				} else {
					identi[4].click()
				}
			}
		}
		if ($('#cardNumber')) {
			$('#cardNumber').val($('#mt_id').html())
		}
		if ($('input[name=\"married\"]').next('input') && $('#mt_maritalstatus').html()) {
			var married = $('#married-show').next('ul').find('li');
			for (var i = 0; i < married.length; i++) {
				if (married[i].innerHTML == $('#mt_maritalstatus').html()) {
					married[i].click();
					break
				}
			}
		}
		if ($('#graduateDate')) {
			$('#graduateDate').val($('#mt_gradutetime').html() + '-1')
		}
		if ($('input[name=\"houseHoldRegistrationProvince\"]').next('input') && $('#mt_hukoucitynow').html()) {
			var houseHo = $('#houseHoldRegistrationProvince-show').next('ul').find('li');
			for (var i = 0; i < houseHo.length; i++) {
				if (houseHo[i].innerHTML == $('#mt_hukoucitynow').html()) {
					houseHo[i].click();
					break
				}
			}
		}
		window.setTimeout(function() {
			if ($('input[name=\"houseHoldRegistrationCity\"]').next('input') && $('#mt_hukoucitynow_city').html()) {
				var houseHo = $('#houseHoldRegistrationCity-show').next('ul').find('li');
				for (var i = 0; i < houseHo.length; i++) {
					if (houseHo[i].innerHTML.indexOf($('#mt_hukoucitynow_city').html(), 0) != -1) {
						houseHo[i].click();
						break
					}
				}
			}
		},
		200);
		if ($('input[name=\"nativeplaceProvince\"]').next('input') && $('#mt_nativeplace').html()) {
			var houseHo = $('#nativeplaceProvince-show').next('ul').find('li');
			for (var i = 0; i < houseHo.length; i++) {
				if (houseHo[i].innerHTML == $('#mt_nativeplace').html()) {
					houseHo[i].click();
					break
				}
			}
		}
		window.setTimeout(function() {
			if ($('input[name=\"nativeplace\"]').next('input') && $('#mt_native_city').html()) {
				var houseHo = $('#nativeplace-show').next('ul').find('li');
				for (var i = 0; i < houseHo.length; i++) {
					if (houseHo[i].innerHTML.indexOf($('#mt_native_city').html(), 0) != -1) {
						houseHo[i].click();
						break
					}
				}
			}
		},
		200);
		if ($('input[name=\"currentProvince\"]').next('input') && $('#mt_livecity_pro').html()) {
			var houseHo = $('#currentProvince-show').next('ul').find('li');
			for (var i = 0; i < houseHo.length; i++) {
				if (houseHo[i].innerHTML == $('#mt_livecity_pro').html()) {
					houseHo[i].click();
					break
				}
			}
		}
		window.setTimeout(function() {
			if ($('input[name=\"currentCity\"]').next('input') && $('#mt_livecity_city').html()) {
				var houseHo = $('#currentCity-show').next('ul').find('li');
				for (var i = 0; i < houseHo.length; i++) {
					if (houseHo[i].innerHTML.indexOf($('#mt_livecity_city').html(), 0) != -1) {
						houseHo[i].click();
						break
					}
				}
			}
		},
		200);
		if ($('input[name=\"examinationProvince\"]').next('input') && $('#mt_hukoucity').html()) {
			var houseHo = $('#examinationProvince-show').next('ul').find('li');
			for (var i = 0; i < houseHo.length; i++) {
				if (houseHo[i].innerHTML.indexOf($('#mt_hukoucity').html(), 0) != -1) {
					houseHo[i].click();
					break
				}
			}
		}
		window.setTimeout(function() {
			if ($('input[name=\"examinationCity\"]').next('input') && $('#mt_hukoucity_city').html()) {
				var houseHo = $('#examinationCity-show').next('ul').find('li');
				for (var i = 0; i < houseHo.length; i++) {
					if (houseHo[i].innerHTML.indexOf($('#mt_hukoucity_city').html(), 0) != -1) {
						houseHo[i].click();
						break
					}
				}
			}
		},
		200);
		if ($('#mobile')) {
			$('#mobile').val($('#mt_tel').html())
		}
		if ($('#email')) {
			$('#email').val($('#mt_email').html())
		}
		if ($('#emergencyPeople')) {
			$('#emergencyPeople').val($('#mt_jjlxr').html())
		}
		if ($('#emergencyPhone')) {
			$('#emergencyPhone').val($('#mt_jjlxrtel').html())
		}
		if ($('#familyPhone')) {
			$('#familyPhone').val($('#mt_fmphone').html())
		}
		if ($('#familyPostcode')) {
			$('#familyPostcode').val($('#mt_zip').html())
		}
		if ($('#familyAddr')) {
			$('#familyAddr').val($('#mt_postadd').html())
		}
		for (var i = 0; i < $('.infopledu').length; i++) {
			if ($('input[name=\"educationalBackground\"]').eq(i + 1).length && $('.infopledu .mt_education').eq(i).html()) {
				var educa = $('input[name=\"educationalBackground\"]').eq(i + 1).siblings('ul').find('li');
				for (var j = 1; j < educa.length; j++) {
					if ($('.infopledu .mt_education').eq(i).html().indexOf(educa.eq(j).html()) != -1) {
						educa.eq(j)[0].click();
						break
					}
				}
			}
			if ($('input[name=\"degree\"]').eq(i + 1).length && $('.infopledu .mt_degree').eq(i).html()) {
				var educa = $('input[name=\"degree\"]').eq(i + 1).siblings('ul').find('li');
				for (var j = 1; j < educa.length; j++) {
					if ($('.infopledu .mt_degree').eq(i).html().indexOf(educa.eq(j).html()) != -1) {
						educa.eq(j)[0].click();
						break
					}
				}
			}
			if ($('#tag-3').next('div').find('[name=\"enrolDate\"]').eq(i + 1) && $('.infopledu .mt_startYear').eq(i).html()) {
				if ($('.infopledu .mt_startYear').eq(i + 1).length <= 6) {
					$('#tag-3').next('div').find('[name=\"enrolDate\"]').eq(i + 1).val($('.infopledu .mt_startYear').eq(i).html().split('-').join('-0') + '-01')
				} else if ($('.infopledu .mt_startYear').eq(i + 1).length >= 6) {
					$('#tag-3').next('div').find('[name=\"enrolDate\"]').eq(i + 1).val($('.infopledu .mt_startYear').eq(i).html().split('-').join('-') + '-01')
				}
			}
			if ($('#tag-3').next('div').find('[name=\"enrolDate\"]').eq(i + 1) && $('.infopledu .mt_endYear').eq(i).html()) {
				if ($('.infopledu .mt_endYear').eq(i + 1).length <= 6) {
					$('#tag-3').next('div').find('[name=\"graduateDate\"]').eq(i + 1).val($('.infopledu .mt_endYear').eq(i).html().split('-').join('-0') + '-01')
				} else if ($('.infopledu .mt_endYear').eq(i + 1).length >= 6) {
					$('#tag-3').next('div').find('[name=\"graduateDate\"]').eq(i + 1).val($('.infopledu .mt_endYear').eq(i).html().split('-').join('-') + '-01')
				}
			}
			if ($('input[name=\"schoolName\"]').eq(i + 1) && $('.infopledu .mt_schoolName').eq(i).html()) {
				$('input[name=\"schoolName\"]').eq(i + 1).val($('.infopledu .mt_schoolName').eq(i).html())
			}
			if ($('input[name=\"specialty\"]').eq(i + 1) && $('.infopledu .mt_professional').eq(i).html()) {
				$('input[name=\"specialty\"]').eq(i + 1).val($('.infopledu .mt_professional').eq(i).html())
			}
			if ($('#educationForm input[name=\"degree\"]').eq(i + 1) && $('.infopledu .mt_degree').eq(i).html()) {
				switch ($('.infopledu .mt_degree').eq(i).html()) {
				case '学士':
				case '双学士':
					$('#educationForm input[name=\"degree\"]').eq(i + 1).parent().find('li').eq(3).trigger('click');
					break;
				case 'MPA':
				case 'MBA':
				case '硕士':
					$('#educationForm input[name=\"degree\"]').eq(i + 1).parent().find('li').eq(2).trigger('click');
					break;
				case '博士':
					$('#educationForm input[name=\"degree\"]').eq(i + 1).parent().find('li').eq(1).trigger('click');
					break;
				default:
					$('#educationForm input[name=\"degree\"]').eq(i + 1).parent().find('li').eq(0).trigger('click');
					break
				}
			}
			if ($('input[name=\"counsellor\"]').eq(i + 1) && $('.infopledu .mt_tutorname').eq(i).html()) {
				$('input[name=\"counsellor\"]').eq(i + 1).val($('.infopledu .mt_tutorname').eq(i).html())
			}
			if ($('input[name=\"counsellorPhone\"]').eq(i + 1) && $('.infopledu .mt_tutorphone').eq(i).html()) {
				$('input[name=\"counsellorPhone\"]').eq(i + 1).val($('.infopledu .mt_tutorphone').eq(i).html())
			}
		}
		for (var i = 1; i < $('#classNumber-show').siblings('ul').find('li').length; i++) {
			var classn = $('#classNumber-show').siblings('ul').find('li');
			if ($('.infopledu .mt_classranking').html().slice(1, 3) <= 10) {
				classn.eq(1).click()
			} else if ($('.infopledu .mt_classranking').html().slice(1, 3) <= 30) {
				classn.eq(2).click()
			} else if ($('.infopledu .mt_classranking').html().slice(1, 3) <= 50) {
				classn.eq(3).click()
			} else if ($('.infopledu .mt_classranking').html() == classn.eq(i)) {
				classn.eq(i).click()
			} else {
				classn.eq(4).click()
			}
		}
		if ($('input[name=\"englishLevel\"]').parent().find('li') && $('.infoEnglishSkill .mt_skillEngLevel').last().html()) {
			switch ($('.infoEnglishSkill .mt_skillEngLevel').last().html()) {
			case '大学英语四级':
				$('input[name=\"englishLevel\"]').parent().find('li').eq(1).trigger('click');
				break;
			case '大学英语六级':
				$('input[name=\"englishLevel\"]').parent().find('li').eq(2).trigger('click');
				break;
			case '专业四级':
				$('input[name=\"englishLevel\"]').parent().find('li').eq(3).trigger('click');
				break;
			case '专业八级':
				$('input[name=\"englishLevel\"]').parent().find('li').eq(4).trigger('click');
				break
			}
		}
		if ($('#englishCore')) {
			$('#englishCore').val($('.mt_skillEngSorce').html())
		}
		if ($('input[name=\"otherLanguage\"]').next('input') && $('.infoEnglishSkill .mt_skillOtherLang').html()) {
			var english = $('#otherLanguage-show').next('ul').find('li');
			for (var i = 0; i < english.length; i++) {
				if (english[i].innerHTML == $('.infoEnglishSkill .mt_skillOtherLang').html()) {
					english[i].click();
					break
				}
			}
		}
		for (var i = 0; i < $('.infoschoolclub').length; i++) {
			if ($('.infoschoolclub .mt_schClubLevel').eq(i).html() == '班级') {
				$('input[name=\"position\"]').eq(i).siblings('ul').find('li').eq(1).click()
			} else if ($('.infoschoolclub .mt_schClubLevel').eq(i).html() == '校学生会') {
				$('input[name=\"position\"]').eq(i).siblings('ul').find('li').eq(3).click()
			} else if ($('.infoschoolclub .mt_schClubLevel').eq(i).html() == '学生社团') {
				$('input[name=\"position\"]').eq(i).siblings('ul').find('li').eq(4).click()
			} else if ($('.infoschoolclub .mt_schClubLevel').eq(i).html() == '团委') {
				$('input[name=\"position\"]').eq(i).siblings('ul').find('li').eq(2).click()
			} else {
				$('input[name=\"position\"]').eq(i).siblings('ul').find('li').eq(5).click()
			}
			if ($('#tag-5').next('div').find('[name=\"startDate\"]').eq(i) && $('.infoschoolclub .mt_startDate').eq(i).html()) {
				if ($('.infoschoolclub .mt_startDate').eq(i).html().length <= 6) {
					$('#tag-5').next('div').find('[name=\"startDate\"]').eq(i).val($('.infoschoolclub .mt_startDate').eq(i).html().split('-').join('-0') + '-01')
				} else if ($('.infoschoolclub .mt_startDate').eq(i).html().length >= 6) {
					$('#tag-5').next('div').find('[name=\"startDate\"]').eq(i).val($('.infoschoolclub .mt_startDate').eq(i).html().split('-').join('-') + '-01')
				}
			}
			if ($('#tag-5').next('div').find('[name=\"endDate\"]').eq(i) && $('.infoschoolclub .mt_endDate').eq(i).html()) {
				if ($('.infoschoolclub .mt_endDate').eq(i).html().length <= 6) {
					$('#tag-5').next('div').find('[name=\"endDate\"]').eq(i).val($('.infoschoolclub .mt_endDate').eq(i).html().split('-').join('-0') + '-01')
				} else if ($('.infoschoolclub .mt_endDate').eq(i).html().length >= 6) {
					$('#tag-5').next('div').find('[name=\"endDate\"]').eq(i).val($('.infoschoolclub .mt_endDate').eq(i).html().split('-').join('-') + '-01')
				}
			}
			if ($('input[name=\"positionName\"]').eq(i) && $('.infoschoolclub .mt_positionName').eq(i).html()) {
				$('input[name=\"positionName\"]').eq(i).val($('.infoschoolclub .mt_positionName').eq(i).html())
			}
			if ($('#tag-5').next('div').find('[name=\"description\"]').eq(i) && $('.infoschoolclub .mt_workDes').eq(i).text()) {
				$('#tag-5').next('div').find('[name=\"description\"]').eq(i).val($('.infoschoolclub .mt_workDes').eq(i).text())
			}
		}
		for (var i = 0; i < $('.infoschaward').length; i++) {
			if ($('#tag-6').next('div').find('[name=\"gainDate\"]').eq(i) && $('.infoschaward .mt_awardsDatedot').eq(i).html()) {
				if ($('.infoschaward .mt_awardsDatedot').eq(i).html().length <= 6) {
					$('#tag-6').next('div').find('[name=\"gainDate\"]').eq(i).val($('.infoschaward .mt_awardsDatedot').eq(i).html().split('.').join('-0') + '-01')
				} else if ($('.infoschaward .mt_awardsDatedot').eq(i).html().length >= 6) {
					$('#tag-6').next('div').find('[name=\"gainDate\"]').eq(i).val($('.infoschaward .mt_awardsDatedot').eq(i).html().split('.').join('-') + '-01')
				}
			}
			if ($('input[name=\"awardName\"]').eq(i) && $('.infoschaward .mt_awardsName').eq(i).html()) {
				$('input[name=\"awardName\"]').eq(i).val($('.infoschaward .mt_awardsName').eq(i).html())
			}
			if ($('#tag-6').next('div').find('[name=\"description\"]').eq(i) && $('.infoschaward .mt_awardsDes').eq(i).html()) {
				$('#tag-6').next('div').find('[name=\"description\"]').eq(i).val($('.infoschaward .mt_awardsDes').eq(i).html())
			}
			if ($('input[name=\"awardType\"]').eq(i).length && $('.infoschaward .mt_awardsType').eq(i).html()) {
				var award = $('input[name=\"awardType\"]').eq(i).siblings('ul').find('li');
				for (var j = 1; j < award.length; j++) {
					if ($('.infoschaward .mt_awardsType').eq(i).html() == '省市级') {
						$('input[name=\"awardType\"]').eq(i).siblings('ul').find('li').eq(3).click()
					}
					if ($('.infoschaward .mt_awardsType').eq(i).html() == '院系级') {
						$('input[name=\"awardType\"]').eq(i).siblings('ul').find('li').eq(1).click()
					} else if ($('.infoschaward .mt_awardsType').eq(i).html() == award.eq(j).html()) {
						award.eq(j)[0].click()
					}
				}
			}
		}
		for (var i = 0; i < $('.infotraining').length; i++) {
			if ($('#tag-7').next('div').find('[name=\"startDate\"]').eq(i) && $('.infotraining .mt_startDate').eq(i).html()) {
				$('#tag-7').next('div').find('[name=\"startDate\"]').eq(i).val($('.infotraining .mt_startDate').eq(i).html() + '-1')
			}
			if ($('#tag-7').next('div').find('[name=\"endDate\"]').eq(i) && $('.infotraining .mt_endDate').eq(i).html()) {
				$('#tag-7').next('div').find('[name=\"endDate\"]').eq(i).val($('.infotraining .mt_endDate').eq(i).html() + '-1')
			}
			if ($('input[name=\"trainingInstitution\"]').eq(i) && $('.infotraining .mt_trainingCompany').eq(i).html()) {
				$('input[name=\"trainingInstitution\"]').eq(i).val($('.infotraining .mt_trainingCompany').eq(i).html())
			}
			if ($('input[name=\"trainingCourse\"]').eq(i) && $('.infotraining .mt_trainingName').eq(i).html()) {
				$('input[name=\"trainingCourse\"]').eq(i).val($('.infotraining .mt_trainingName').eq(i).html())
			}
			if ($('input[name=\"certificate\"]').eq(i) && $('.infotraining .mt_certificateName').eq(i).html()) {
				$('input[name=\"certificate\"]').eq(i).val($('.infotraining .mt_certificateName').eq(i).html())
			}
			if ($('#tag-7').next('div').find('[name=\"descriptionInDetails\"]').eq(i) && $('.infotraining .mt_trainingDes').eq(i).html()) {
				$('#tag-7').next('div').find('[name=\"descriptionInDetails\"]').eq(i).val($('.infotraining .mt_trainingDes').eq(i).html())
			}
		}
		for (var i = 0; i < $('.infoplcerti').length; i++) {
			if ($('input[name=\"receivingDate\"]').eq(i) && $('.infoplcerti .mt_getDate').eq(i).html()) {
				$('input[name=\"receivingDate\"]').eq(i).val($('.infoplcerti .mt_getDate').eq(i).html() + '-1')
			}
			if ($('input[name=\"nameOfCertificate\"]').eq(i) && $('.infoplcerti .mt_certificateName').eq(i).html()) {
				$('input[name=\"nameOfCertificate\"]').eq(i).val($('.infoplcerti .mt_certificateName').eq(i).html())
			}
			if ($('#tag-8').next('div').find('[name=\"description\"]').eq(i) && $('.infoplcerti .mt_certificateDes').eq(i).html()) {
				$('#tag-8').next('div').find('[name=\"description\"]').eq(i).val($('.infoplcerti .mt_certificateDes').eq(i).html())
			}
		}
		for (var i = 0; i < $('.infofulltimejobs').length; i++) {
			if ($('#tag-9').next('div').find('[name=\"startDate\"]').eq(i) && $('.infofulltimejobs .mt_startDate').eq(i).html()) {
				if ($('.infofulltimejobs .mt_startDate').eq(i).html().length <= 6) {
					$('#tag-9').next('div').find('[name=\"startDate\"]').eq(i).val($('.infofulltimejobs .mt_startDate').eq(i).html().split('-').join('-0') + '-01')
				} else if ($('.infofulltimejobs .mt_startDate').eq(i).html().length >= 6) {
					$('#tag-9').next('div').find('[name=\"startDate\"]').eq(i).val($('.infofulltimejobs .mt_startDate').eq(i).html().split('-').join('-') + '-01')
				}
			}
			if ($('#tag-9').next('div').find('[name=\"endDate\"]').eq(i) && $('.infofulltimejobs .mt_endDate').eq(i).html()) {
				if ($('.infofulltimejobs .mt_endDate').eq(i).html().length <= 6) {
					$('#tag-9').next('div').find('[name=\"endDate\"]').eq(i).val($('.infofulltimejobs .mt_endDate').eq(i).html().split('-').join('-0') + '-01')
				} else if ($('.infofulltimejobs .mt_endDate').eq(i).html().length >= 6) {
					$('#tag-9').next('div').find('[name=\"endDate\"]').eq(i).val($('.infofulltimejobs .mt_endDate').eq(i).html().split('-').join('-') + '-01')
				}
			}
			if ($('#tag-9').next('div').find('[name=\"unit\"]').eq(i) && $('.infofulltimejobs .mt_companyName').eq(i).html()) {
				$('#tag-9').next('div').find('[name=\"unit\"]').eq(i).val($('.infofulltimejobs .mt_companyName').eq(i).html())
			}
			if ($('input[name=\"department\"]').eq(i) && $('.infofulltimejobs .mt_department').eq(i).html()) {
				$('input[name=\"department\"]').eq(i).val($('.infofulltimejobs .mt_department').eq(i).html())
			}
			if ($('textarea[name=\"content\"]').eq(i) && $('.infofulltimejobs .mt_workContent').eq(i).text()) {
				$('textarea[name=\"content\"]').eq(i).val($('.infofulltimejobs .mt_workContent').eq(i).text())
			}
			if ($('input[name=\"province\"]').eq(i).length && $('.infofulltimejobs .mt_workCity').eq(i).html()) {
				var province = $('input[name=\"province\"]').eq(i).siblings('ul').find('li');
				for (var j = 1; j < province.length; j++) {
					if ($('.infofulltimejobs .mt_workCity').eq(i).html().indexOf(province.eq(j).html()) != -1) {
						province.eq(j)[0].click();
						break
					}
				}
			}
			window.setTimeout(function() {
				if ($('input[name=\"city\"]').eq(i).length && $('.infofulltimejobs .mt_workCity').eq(i).html()) {
					var city = $('input[name=\"city\"]').eq(i).siblings('ul').find('li');
					for (var j = 1; j < city.length; j++) {
						if ($('.infofulltimejobs .mt_workCity').eq(i).html().indexOf(city.eq(j).html()) != -1) {
							city.eq(j)[0].click()
						}
					}
				}
			})
		}
		if ($('input[name=\"relationship\"]').length && $('#mt_fmrelation').html()) {
			var educa = $('input[name=\"relationship\"]').siblings('ul').find('li');
			for (var j = 1; j < educa.length; j++) {
				if ($('#mt_fmrelation').html().indexOf(educa.eq(j).html()) != -1) {
					educa.eq(j)[0].click();
					break
				}
			}
		}
		if ($('#relationForm input[name=\"name\"]') && $('#mt_fmname').html()) {
			$('#relationForm input[name=\"name\"]').val($('#mt_fmname').html())
		}
		if ($('#relationForm input[name=\"phone\"]') && $('#mt_fmphone').html()) {
			$('#relationForm input[name=\"phone\"]').val($('#mt_fmphone').html())
		}
		if ($('#tag-10').next('div').find('[name=\"unit\"]') && $('#mt_fmwork').html()) {
			$('#tag-10').next('div').find('[name=\"unit\"]').val($('#mt_fmwork').html())
		}
		if ($('input[name=\"position\"]') && $('#mt_fmposition').html()) {
			$('input[name=\"position\"]').val($('#mt_fmposition').html())
		}
		if ($('input[name=\"age\"]')) {
			$('input[name=\"age\"]').val('1')
		}
		if ($('textarea[name=\"selfDesc\"]') && $('#mt_selfIntro').html()) {
			$('textarea[name=\"selfDesc\"]').val($('#mt_selfIntro').html())
		}
		if ($('.nationBtn') && $('#mt_national').html()) {
			$('.nationBtn').val($('#mt_national').html())
		}
		if ($('#qzyxForm').find('tr').eq(2).find('input').eq(0) && $('#mt_expectcity_city').html()) {
			$('#qzyxForm').find('tr').eq(2).find('input').eq(0).val($('#mt_expectcity_city').html() + '市')
		}
		if ($('#exercitationForm')) {
			let length = $('#exp-list .infopl').length;
			for (let i = 0; i < length; i++) {
				if ($('#exercitationForm input[name=\"startDate\"]').eq(i) && $('#exp-list .infopl').eq(i).find('.mt_startDate').html()) {
					$('#exercitationForm input[name=\"startDate\"]').eq(i).val($('#exp-list .infopl').eq(i).find('.mt_startDate').html())
				}
				if ($('#exercitationForm input[name=\"endDate\"]').eq(i) && $('#exp-list .infopl').eq(i).find('.mt_endDate').html()) {
					$('#exercitationForm input[name=\"endDate\"]').eq(i).val($('#exp-list .infopl').eq(i).find('.mt_endDate').html())
				}
				if ($('#exercitationForm input[name=\"unit\"]').eq(i) && $('#exp-list .infopl').eq(i).find('.mt_companyName').html()) {
					$('#exercitationForm input[name=\"unit\"]').eq(i).val($('#exp-list .infopl').eq(i).find('.mt_companyName').html())
				}
				if ($('#exercitationForm input[name=\"department\"]').eq(i) && $('#exp-list .infopl').eq(i).find('.mt_positionName').html()) {
					$('#exercitationForm input[name=\"department\"]').eq(i).val($('#exp-list .infopl').eq(i).find('.mt_positionName').html())
				}
				if ($('#exercitationForm textarea[name=\"content\"]').eq(i) && $('#exp-list .infopl').eq(i).find('.workContent').html()) {
					$('#exercitationForm textarea[name=\"content\"]').eq(i).val($('#exp-list .infopl').eq(i).find('.workContent').html())
				}
			}
		}
		function formatDate(value) {
			let newDate = value.split('-');
			for (let i = 0; i < newDate.length; i++) {
				if (parseInt(newDate[i]) < 10) {
					newDate[i] = '0' + newDate[i]
				}
			}
			return newDate.join('-')
		}
		if ($('#birthday') && $('#mt_birth').html()) {
			$('#birthday').val(formatDate($('#mt_birth').html()))
		}
	})
})()