(function() {
	$('.quick-write').unbind('click').click(function() {
		if ($('#jm_qiuck_cover')) {
			$('#jm_qiuck_cover').fadeIn();
			setTimeout(function() {
				$('#jm_qiuck_cover').fadeOut()
			},
			1000)
		}
		var help = {
			getFiexphone: function() {
				var phone = $('#mt_gudingtel').html();
				return {
					phone_code: phone.substr(0, 4),
					phone_num: phone.substr(4)
				}
			},
			maxEngLevel: function() {
				var level = 0,
				maxLevel = 0,
				index = -1;
				for (var i = 0; i < $('.infoEnglishSkill').length; i++) {
					switch ($('.infoEnglishSkill .mt_skillEngLevel').eq(i).html()) {
					case '大学英语四级':
						level = 1;
						break;
					case '大学英语六级':
						level = 2;
						break;
					case '专业四级':
						level = 3;
						break;
					case '专业八级':
						level = 4;
						break
					}
					if (level > maxLevel) {
						maxLevel = level;
						index = i
					}
				}
				return {
					id: index,
					level: maxLevel
				}
			}
		};
		var _ = function(objname, i) {
			if (typeof i === 'undefined') {
				return $('input[name=\"'+objname+'\"]')
			}
			return $('input[name=\"'+objname+'\"]').eq(i)
		};
		autoWrite = {
			textWrite: function(content, obj) {
				if (content && obj.length) {
					obj.val(content)
				}
			},
			selWrite: function(content, objname) {
				var obj = document.querySelectorAll('[data-selector=\"'+objname+'\"] ul li a');
				if (content && obj.length) {
					for (var i = 0; i < obj.length; i++) {
						if (obj[i].innerText.indexOf(content, 0) != -1) {
							obj[i].click();
							break
						}
					}
				}
			},
			custonFun: function(callback) {
				callback()
			}
		};
		autoWrite.textWrite($('#mt_name').html(), _('xyc_name'));
		autoWrite.selWrite($('#mt_hukoucitynow').html(), 'provice');
		autoWrite.selWrite($('#mt_hukoucitynow_city').html(), 'city');
		autoWrite.selWrite($('#mt_livecity_pro').html(), 'cProvice');
		autoWrite.selWrite($('#mt_livecity_city').html(), 'cCity');
		autoWrite.selWrite($('#mt_biryear').html(), 'year');
		autoWrite.selWrite($('#mt_birmonth').html(), 'month');
		autoWrite.selWrite($('#mt_birday').html(), 'day');
		autoWrite.textWrite($('#mt_livecity_pro').html() + $('#mt_livecity_city').html(), _('xyc_dq'));
		autoWrite.textWrite($('#mt_hukoucitynow').html() + $('#mt_hukoucitynow_city').html(), _('xyc_household_register'));
		autoWrite.textWrite($('#mt_height').html(), _('xyc_height'));
		autoWrite.textWrite($('#mt_weight').html(), _('xyc_weight'));
		autoWrite.textWrite($('#mt_id').html(), _('xyc_cert_number'));
		autoWrite.textWrite($('#mt_jjlxr').html(), _('custom_field1'));
		autoWrite.textWrite($('#mt_jjlxrtel').html(), _('custom_field2'));
		autoWrite.textWrite($('#mt_selfIntro').html(), $('textarea[name=\"res_context\"]'));
		autoWrite.custonFun(function() {
			if ($('#mt_sex').html() === '男' && $('i[data-name=\"xyc_sex \"]').length) {
				$('i[data-name=\"xyc_sex \"]').eq(0).click()
			} else {
				$('i[data-name=\"xyc_sex \"]').eq(1).click()
			}
			var idType = document.querySelectorAll('[data-selector=\"certificate - type \"] ul li a');
			if (idType.length) {
				switch ($('#mt_idtype').html()) {
				case '身份证':
					idType[0].click();
					break;
				case '护照':
					idType[1].click();
					break;
				case '军官证':
					idType[2].click();
					break;
				case '香港永久居民身份证':
				case '香港非永久居民身份证':
				case '澳门永久居民身份证':
				case '澳门非永久居民身份证':
					idType[3].click();
					break;
				default:
					idType[4].click();
					break
				}
			}
			var polis = $('i[data-name=\"xyc_political_status\"]');
			if (polis.length) {
				switch ($('#mt_polistatus').html()) {
				case '中共党员':
					polis.eq(0).click();
					break;
				case '共青团员':
					polis.eq(1).click();
					break;
				case '群众':
					polis.eq(2).click();
					break;
				case '其它':
					polis.eq(4).click();
					break;
				default:
					polis.eq(3).click();
					break
				}
			}
			var mari = $('i[data-name=\"xyc_marriage\"]');
			if (mari.length) {
				switch ($('#mt_maritalstatus').html()) {
				case '未婚':
					mari.eq(0).click();
					break;
				case '已婚':
					mari.eq(1).click();
					break;
				default:
					mari.eq(2).click();
					break
				}
			}
		});
		autoWrite.textWrite($('#mt_tel').html(), _('xyc_tel'));
		autoWrite.textWrite($('#mt_email').html(), _('user_email'));
		var phone = help.getFiexphone();
		autoWrite.textWrite(phone['phone_code'], _('xyc_area_code'));
		autoWrite.textWrite(phone['phone_num'], _('xyc_phone'));
		autoWrite.textWrite($('#mt_qqname').html(), _('xyc_qq'));
		autoWrite.textWrite($('#mt_add').html(), _('xyc_address'));
		autoWrite.textWrite($('#mt_zip').html(), _('xyc_postalcode'));
		autoWrite.custonFun(function() {
			if (_('xyedu_school').length) {
				if ($('[data-selector=\"resumeEdu\"]').length > 0) {
					id = $('.education').eq(1).find('table tbody tr').length
				} else {
					if ($('.education').length > 0) {
						id = $('.education').eq(0).find('table tbody tr').length
					}
				}
				autoWrite.selWrite($('.infopledu .mt_startYearY').eq(id).html(), 'startYear');
				autoWrite.selWrite($('.infopledu .mt_startYearM').eq(id).html(), 'startMonth');
				autoWrite.selWrite($('.infopledu .mt_endYearY').eq(id).html(), 'endYear');
				autoWrite.selWrite($('.infopledu .mt_endYearM').eq(id).html(), 'endMonth');
				autoWrite.selWrite($('.infopledu .mt_startYearY').eq(id).html(), 'start-year');
				autoWrite.selWrite($('.infopledu .mt_startYearM').eq(id).html(), 'start-month');
				autoWrite.selWrite($('.infopledu .mt_endYearY').eq(id).html(), 'end-year');
				autoWrite.selWrite($('.infopledu .mt_endYearM').eq(id).html(), 'end-month');
				autoWrite.textWrite($('.infopledu .mt_schoolName').eq(id).html(), _('xyedu_school'));
				autoWrite.textWrite($('.infopledu .mt_professional').eq(id).html(), _('xyedu_special'));
				autoWrite.textWrite($('.infopledu .mt_gpascore').eq(id).html(), _('xyedu_gpa'));
				var eduList = document.querySelector('[name=\"xyedu_education \"]');
				if (eduList && $('.infopledu .mt_education').eq(id).html()) {
					eduList = eduList.parentNode.parentNode.childNodes[3];
					eduList = eduList.querySelectorAll('li a');
					switch ($('.infopledu .mt_education').eq(id).html()) {
					case '大学专科':
						eduList[0].click();
						break;
					case '大学本科-一本':
					case '大学本科-二本':
					case '大学本科-三本':
						eduList[1].click();
						break;
					case '硕士研究生':
						eduList[2].click();
						break;
					case '博士研究生':
						eduList[3].click();
						break;
					default:
						eduList[4].click()
					}
				}
				var degList = document.querySelector('[name=\"xyedu_degree \"]');
				if (degList && $('.infopledu .mt_degree').eq(id).html()) {
					degList = degList.parentNode.parentNode.childNodes[3];
					degList = degList.querySelectorAll('li a');
					switch ($('.infopledu .mt_degree').eq(id).html()) {
					case '学士':
					case '双学士':
						degList[1].click();
						break;
					case '硕士':
						degList[2].click();
						break;
					case '博士':
						degList[3].click();
						break;
					default:
						degList[0].click()
					}
				}
				var scoList = document.querySelector('[name=\"xyedu_ranking \"]');
				if (scoList && $('.infopledu .mt_professionalranking').eq(id).html()) {
					scoList = scoList.parentNode.parentNode.childNodes[3];
					scoList = scoList.querySelectorAll('li a');
					switch ($('.infopledu .mt_professionalranking').eq(id).html()) {
					case '前5%':
						scoList[1].click();
						break;
					case '前10%':
						scoList[2].click();
						break;
					case '前20%':
						scoList[3].click();
						break;
					case '前30%':
						scoList[4].click();
						break;
					default:
						scoList[5].click()
					}
				}
				autoWrite.textWrite($('.infopledu .mt_major').eq(id).html(), $('textarea[name=\"custom_field1 \"]'))
			}
		});
		autoWrite.custonFun(function() {
			var skillType = document.querySelectorAll('[data-selector=\"languageList \"]');
			if (skillType.length) {
				if ($('[data-selector=\"languageAbility \"]').length > 0) {
					var $done = $('[data-selector=\"languageAbility \"]>div').eq(1);
					var id = $done.find('table tbody tr').length
				} else {
					if ($('[data-selector=\"language - ability \"]').length > 0) {
						var $done = $('[data-selector=\"language - ability \"]>div').eq(1);
						var id = $done.find('table tbody tr').length
					}
				}
				if (id == 0) {
					document.querySelector('[data-selector=\"addLevel \"]').click();
					var maxEng = help.maxEngLevel();
					autoWrite.selWrite('英语', 'languageList');
					autoWrite.textWrite($('.infoEnglishSkill .mt_skillEngSorce').eq(maxEng['id']).html(), _('score'));
					skillType = document.querySelector('[name=\"certificate \"]').parentNode.parentNode.childNodes[1];
					skillType = skillType.querySelectorAll('li a');
					switch (maxEng['level']) {
					case 1:
						skillType[0].click();
						break;
					case 2:
						skillType[1].click();
						break;
					case 3:
						skillType[2].click();
						break;
					case 4:
						skillType[3].click();
						break
					}
				} else {
					id = id - 1;
					autoWrite.selWrite($('.infoOtherSkill .mt_skillOtherLang').eq(id).html(), 'languageList');
					var listenSkill = document.querySelector('[name=\"xyla_listensay_ability \"]').parentNode.parentNode.childNodes[3];
					listenSkill = listenSkill.querySelectorAll('li a');
					switch ($('.infoOtherSkill .mt_skillListenLevel').eq(id).html()) {
					case '一般':
						listenSkill[0].click();
						break;
					case '熟练':
						listenSkill[1].click();
						break;
					case '精通':
						listenSkill[2].click();
						break
					}
					var writeSkill = document.querySelector('[name=\"xyla_readwrite_ability \"]').parentNode.parentNode.childNodes[3];
					writeSkill = writeSkill.querySelectorAll('li a');
					switch ($('.infoOtherSkill .mt_skillWriteLevel').eq(id).html()) {
					case '一般':
						writeSkill[0].click();
						break;
					case '熟练':
						writeSkill[1].click();
						break;
					case '精通':
						writeSkill[2].click();
						break
					}
				}
			}
		});
		autoWrite.custonFun(function() {
			if (_('xypra_compname').length) {
				if ($('[data-selector=\"internshipExperience \"]').length > 0) {
					var $done1 = $('[data-selector=\"internshipExperience \"]>div').eq(1);
					var id = $done1.find('table tbody tr').length
				} else {
					if ($('.internship-experience').length > 0) {
						var done2 = $('.internship-experience').eq(0).find('table tbody tr').length;
						var id = done2
					}
				}
				var startDate = $('.infoparttimejobs .mt_startDate').eq(id).html();
				if ($('.infoparttimejobs .mt_startDate').length) {
					startDate = startDate.split('-');
					autoWrite.selWrite(startDate[0], 'startYear');
					autoWrite.selWrite(startDate[1], 'startMonth');
					autoWrite.selWrite(startDate[0], 'start-year');
					autoWrite.selWrite(startDate[1], 'start-month')
				}
				var endDate = $('.infoparttimejobs .mt_endDate').eq(id).html();
				if ($('.infoparttimejobs .mt_endDate').length) {
					endDate = endDate.split('-');
					autoWrite.selWrite(endDate[0], 'endYear');
					autoWrite.selWrite(endDate[1], 'endMonth');
					autoWrite.selWrite(endDate[0], 'end-year');
					autoWrite.selWrite(endDate[1], 'end-month')
				}
				autoWrite.textWrite($('.infoparttimejobs .mt_companyName').eq(id).html(), _('xypra_compname'));
				autoWrite.textWrite($('.infoparttimejobs .mt_department').eq(id).html(), _('xypra_dept'));
				autoWrite.textWrite($('.infoparttimejobs .mt_positionName').eq(id).html(), _('xypra_title'));
				autoWrite.textWrite($('.infoparttimejobs .mt_workContent .workContent').eq(id).html(), $('textarea[name=\"xypra_workdesc \"]'));
				autoWrite.textWrite($('.infoparttimejobs .mt_reterenceName').eq(id).html(), _('xypra_reference'));
				autoWrite.textWrite($('.infoparttimejobs .mt_reterence_phone').eq(id).html(), _('xypra_reference_tel'))
			}
		});
		autoWrite.custonFun(function() {
			if (_('xyproj_name').length) {
				if ($('[data-selector=\"projectExperiences \"]').length > 0) {
					var $done1 = $('[data-selector=\"projectExperiences \"]>div').eq(1);
					var id = $done1.find('table tbody tr').length
				} else {
					if ($('.project-experience').length > 0) {
						var done2 = $('.project-experience').eq(0).find('table tbody tr').length;
						var id = done2
					}
				}
				var startDate = $('.infoproject .mt_prostartdate').eq(id).html();
				if ($('.infoproject .mt_prostartdate').length) {
					startDate = startDate.split('-');
					autoWrite.selWrite(startDate[0], 'startYear');
					autoWrite.selWrite(startDate[1], 'startMonth');
					autoWrite.selWrite(startDate[0], 'start-year');
					autoWrite.selWrite(startDate[1], 'start-month')
				}
				var endDate = $('.infoproject .mt_proenddate').eq(id).html();
				if ($('.infoproject .mt_proenddate').length) {
					endDate = endDate.split('-');
					autoWrite.selWrite(endDate[0], 'endYear');
					autoWrite.selWrite(endDate[1], 'endMonth');
					autoWrite.selWrite(endDate[0], 'end-year');
					autoWrite.selWrite(endDate[1], 'end-month')
				}
				var size = $('.infoproject .mt_projectNumber').eq(id).html();
				if (document.getElementsByName('xyproj_dimensions').length) {
					if (size.length) {
						size = parseInt(size);
						var sizeList = document.querySelector('[name=\"xyproj_dimensions\"]').parentNode.parentNode.childNodes[3];
						sizeList = sizeList.querySelectorAll('li a');
						if (size <= 3) {
							sizeList[1].click()
						} else {
							if (size <= 7) {
								sizeList[2].click()
							} else {
								if (size <= 10) {
									sizeList[3].click()
								} else {
									if (size <= 20) {
										sizeList[4].click()
									} else {
										sizeList[5].click()
									}
								}
							}
						}
					}
				}
				autoWrite.textWrite($('.infoproject .mt_projectName').eq(id).html(), _('xyproj_name'));
				autoWrite.textWrite($('.infoproject .mt_positionName').eq(id).html(), _('xyproj_role'));
				autoWrite.textWrite($('.infoproject .mt_projectRemark').eq(id).html(), $('textarea[name=\"xyproj_desc\"]'))
			}
		});
		autoWrite.custonFun(function() {
			if (_('xysr_name').length) {
				if ($('[data-selector=\"campusPrizes \"]').length > 0) {
					var $done1 = $('[data-selector=\"campusPrizes \"]>div').eq(1);
					var id = $done1.find('table tbody tr').length
				} else {
					if ($('[data-selector=\"campus - prizes \"]').length > 0) {
						var $done2 = $('[data-selector=\"campus - prizes \"]>div').eq(1);
						var id = $done2.find('table tbody tr').length
					}
				}
				var getDate = $('.infoschaward .mt_awardsDate').eq(id).html();
				if (getDate.length) {
					getDate = getDate.split('-');
					autoWrite.selWrite(getDate[0], 'startYear');
					autoWrite.selWrite(getDate[1], 'startMonth');
					autoWrite.selWrite(getDate[0], 'start-year');
					autoWrite.selWrite(getDate[1], 'start-month')
				}
				autoWrite.textWrite($('.infoschaward .mt_awardsName').eq(id).html(), _('xysr_name'));
				autoWrite.textWrite($('.infoschaward .mt_awardsDes').eq(id).html(), $('textarea[name=\"xysr_desc \"]'));
				autoWrite.selWrite($('.infoschaward .mt_awardsType').eq(id).html(), 'firstLevel');
				autoWrite.selWrite($('.infoschaward .mt_awardsLevel').eq(id).html(), 'secondLevel')
			}
		});
		autoWrite.custonFun(function() {
			if ($('[name=\"xysd_desc \"]').length) {
				if ($('[data-selector=\"campusDuty \"]').length > 0) {
					var $done1 = $('[data-selector=\"campusDuty \"]>div').eq(1);
					var id = $done1.find('table tbody tr').length
				} else {
					if ($('.school-job').length > 0) {
						var done2 = $('.school-job').eq(0).find('table tbody tr').length;
						var id = done2
					}
				}
				if (id < $('.infoschoolclub').length) {
					var startDate = $('.infoschoolclub .mt_startDate').eq(id).html();
					if ($('.infoschoolclub .mt_startDate').length) {
						startDate = startDate.split('-');
						autoWrite.selWrite(startDate[0], 'startYear');
						autoWrite.selWrite(startDate[1], 'startMonth');
						autoWrite.selWrite(startDate[0], 'start-year');
						autoWrite.selWrite(startDate[1], 'start-month')
					}
					var endDate = $('.infoschoolclub .mt_endDate').eq(id).html();
					if ($('.infoschoolclub .mt_endDate').length) {
						endDate = endDate.split('-');
						autoWrite.selWrite(endDate[0], 'endYear');
						autoWrite.selWrite(endDate[1], 'endMonth');
						autoWrite.selWrite(endDate[0], 'end-year');
						autoWrite.selWrite(endDate[1], 'end-month')
					}
					autoWrite.textWrite($('.infoschoolclub .mt_workDes').eq(id).html(), $('textarea[name=\"xysd_desc \"]'))
				}
			}
		});
		autoWrite.custonFun(function() {
			var $done = $('[data-selector=\"familyMember \"]>div').eq(1);
			var id = $done.find('table tbody tr').length;
			if (_('xyf_name').length && id == 0) {
				autoWrite.textWrite($('#mt_fmname').html(), _('xyf_name'));
				autoWrite.textWrite($('#mt_fmrelation').html(), _('xyf_relation'));
				autoWrite.textWrite($('#mt_fmwork').html(), _('xyf_workcomp'));
				autoWrite.textWrite($('#mt_fmposition').html(), _('xyf_duty'));
				autoWrite.textWrite($('#mt_fmphone').html(), _('xyf_tel'))
			}
		});
	});
})()