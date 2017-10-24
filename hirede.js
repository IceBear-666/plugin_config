(function() {
	$('.quick-write').on('click',
	function() {
		if ($('#jm_qiuck_cover')) {
			$('#jm_qiuck_cover').fadeIn();
			setTimeout(function() {
				$('#jm_qiuck_cover').fadeOut()
			},
			1000);
		}
		var hostname = window.location.hostname;
		var flg = false;
		if (hostname == 'intel2017.hirede.com') {
			flg = true;
		}
		var help = {
			htmlEvent: function() {
				var ev = document.createEvent('HTMLEvents');
				ev.initEvent('change', true, false);
				return ev
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
			},
			maxOthEnglevel: function() {
				var engArr = [];
				for (var i = 0; i < $('.infoOtEnglishSkill').length; i++) {
					engArr.push({
						id: i,
						score: $('.infoOtEnglishSkill .mt_otherSkillEngSorce').eq(i).html()
					})
				}
				engArr.sort(function(a, b) {
					return b.score - a.score
				});
				return engArr[0]['score'].length ? engArr[0]['id'] : -1
			},
			maxEduIndex: function() {
				var id = -1,
				year = 0;
				for (var i = 0; i < $('.infopledu').length; i++) {
					if ($('.infopledu .mt_endYearY').eq(i).html() > year) {
						year = parseInt($('.infopledu .mt_endYearY').eq(i).html());
						id = i
					}
				}
				return {
					id: id,
					year: year
				}
			},
			addZero: function(date) {
				date = date.split('-');
				for (var i in date) {
					if (date[i] < 10) {
						date[i] = '0' + date[i]
					}
				}
				date = date.join('-');
				return date
			},
			getActiveItem: function() {
				var $item = $('#icampusNav li');
				for (var i = 0; i < $item.length; i++) {
					if ($item.eq(i).attr('class') === 'active') {
						return i
					}
				}
				if (i === $item.length) {
					return 0
				}
			}
		};
		var autoWrite = {
			textWrite: function(content, wtobj) {
				if (content && wtobj.length > 0) {
					wtobj.val(content)
				}
			},
			sexWrite: function(fid, tid) {
				if ($(fid).html() && $(tid[0]).length > 0) {
					if ($(fid).html() === '男') {
						$(tid[0]).trigger('click')
					} else {
						$(tid[1]).trigger('click')
					}
				}
			},
			selWrite: function(content, wtobj) {
				if (content && wtobj.length > 0) {
					var opt = wtobj.get(0).options;
					for (var i in opt) {
						if (opt[i].text === content) {
							opt[i].selected = true;
							break
						}
					}
				}
			},
			eduWrite: function(content, wtobj) {
				if (content && wtobj.length > 0) {
					var opt = wtobj.get(0).options;
					switch (content) {
					case '大学专科':
						opt[2].selected = true;
						break;
					case '大学本科-一本':
					case '大学本科-二本':
					case '大学本科-三本':
						opt[3].selected = true;
						break;
					case '硕士研究生':
						opt[4].selected = true;
						break;
					case 'MBA':
						opt[5].selected = true;
						break;
					case '博士研究生':
						opt[6].selected = true;
						break
					}
				}
			},
			custonFunc: function(callback) {
				callback()
			}
		};
		var activeId = help.getActiveItem();
		if (flg === true) {
			if (activeId >= 2 && activeId <= 5) {
				activeId = activeId + 1
			}
		}
		if (activeId == 0 && $('#sexMale').length) {
			autoWrite.textWrite($('#mt_name').html(), $('#Name'));
			autoWrite.sexWrite('#mt_sex', ['#sexMale', '#sexFemale']);
			autoWrite.selWrite($('#mt_biryear').html(), $('#DateOfBirthYear'));
			autoWrite.selWrite($('#mt_birmonth').html(), $('#DateOfBirthMonth'));
			$('#DateOfBirthMonth').get(0).dispatchEvent(help.htmlEvent());
			autoWrite.selWrite($('#mt_birday').html(), $('#DateOfBirthDay'));
			autoWrite.textWrite($('#mt_tel').html(), $('#MobilePhone'));
			autoWrite.textWrite($('#mt_livecity_city').html(), $('#inputCity'));
			autoWrite.textWrite($('#mt_id').html(), $('#IDNumber'));
			autoWrite.textWrite($('#mt_nation').html(), $('#Nation'));
			autoWrite.textWrite($('#mt_height').html(), $('#Height'));
			autoWrite.textWrite($('#mt_weight').html(), $('#Weight'));
			autoWrite.textWrite($('#mt_gudingtel').html(), $('#Tel'));
			autoWrite.textWrite($('#mt_email').html(), $('#Email'));
			autoWrite.textWrite($('#mt_qqname').html(), $('#QQ'));
			autoWrite.textWrite($('#mt_wbname').html(), $('#WeiboUrl'));
			autoWrite.textWrite($('#mt_jjlxr').html(), $('#EmergencyContact'));
			autoWrite.textWrite($('#mt_jjlxrtel').html(), $('#EmergencyContactPhone'));
			autoWrite.textWrite($('#mt_add').html(), $('#Address'));
			autoWrite.custonFunc(function() {
				if ($('#mt_native_city').html() && $('#inputHukou').length) {
					$('button[data-toggle=\"dropdown\"]').eq(0).click();
					setTimeout(function() {
						var $itemList = $('#inputHukou').next('ul').find('li');
						for (var i = 0; i < $itemList.length; i++) {
							if ($itemList.eq(i).attr('data-value').indexOf($('#mt_native_city').html(), 0) != -1) {
								$itemList.eq(i).addClass('active').siblings('li').removeClass('active');
								$itemList.click();
								break
							}
						}
					},
					200)
				}
				if ($('#mt_polistatus').html() && $('#PoliticalStatus').length) {
					var opt = $('#PoliticalStatus').get(0).options;
					switch ($('#mt_polistatus').html()) {
					case '群众':
						opt[1].selected = true;
						break;
					case '共青团员':
						opt[2].selected = true;
						break;
					case '中共党员':
						opt[3].selected = true;
						break
					}
				}
				if ($('#mt_maritalstatus').html() && $('#MaritalStatus').length) {
					var opt = $('#MaritalStatus').get(0).options;
					switch ($('#mt_maritalstatus').html()) {
					case '未婚':
						opt[1].selected = true;
						break;
					case '已婚':
						opt[2].selected = true;
						break;
					default:
						opt[3].selected = true;
						break
					}
				}
			})
		} else if (activeId == 2) {
			autoWrite.textWrite($('#mt_selfIntro').html(), $('#Assessment'))
		} else if (activeId == 3) {
			autoWrite.custonFunc(function() {
				var id = $('#educationList .span12').length;
				if (id < $('.infopledu').length) {
					autoWrite.selWrite($('.infopledu .mt_startYearY').eq(id).html(), $('#educationContentBox #BeginDateYear'));
					autoWrite.selWrite($('.infopledu .mt_startYearM').eq(id).html(), $('#educationContentBox #BeginDateMonth'));
					autoWrite.selWrite($('.infopledu .mt_endYearY').eq(id).html(), $('#educationContentBox #EndDateYear'));
					autoWrite.selWrite($('.infopledu .mt_endYearM').eq(id).html(), $('#educationContentBox #EndDateMonth'));
					autoWrite.eduWrite($('.infopledu .mt_education').eq(id).html(), $('#educationContentBox #Degree'));
					autoWrite.textWrite($('.infopledu .mt_schoolName').eq(id).html(), $('#educationContentBox #SchoolName'));
					autoWrite.textWrite($('.infopledu .mt_professional').eq(id).html(), $('#educationContentBox #MajorName'));
					autoWrite.selWrite($('.infopledu .mt_professionalranking').eq(id).html(), $('#educationContentBox #RankingInMajor'));
					autoWrite.textWrite($('.infoschoolclub .mt_schClubList').eq(id).html(), $('#educationContentBox #Position'));
					autoWrite.textWrite($('.infoschaward .mt_schawradList').eq(id).html(), $('#educationContentBox #Rewards'));
					$('#educationContentBox #Position').val($('.infoschoolclub .mt_schClubList').eq(id).html())
				}
			})
		} else if (activeId == 4) {
			$('#CommunityActivity').val('');
			for (var i = 0; i < $('.infoschoolclub').length; i++) {
				$('#CommunityActivity').val($('#CommunityActivity').val() + $('.infoschoolclub .mt_schClubList').eq(i).text() + '\\n')
			}
		} else if (activeId == 5) {
			autoWrite.custonFunc(function() {
				var id = $('#workExperienceList .span12').length;
				var st, et, cName, cSize, cPost, cType, cDes, fNum = $('.infofulltimejobs').length,
				pNum = $('.infoparttimejobs').length;
				if (id < fNum) {
					st = $('.infofulltimejobs .mt_startDate').eq(id).html().split('-');
					et = $('.infofulltimejobs .mt_endDate').eq(id).html().split('-');
					cName = $('.infofulltimejobs .mt_companyName').eq(id).html();
					cSize = $('.infofulltimejobs .mt_companySize').eq(id).html();
					cPost = $('.infofulltimejobs .mt_positionName').eq(id).html();
					cType = 1;
					cDes = $('.infofulltimejobs .mt_workDes .workDes').eq(id).html()
				} else if (id < pNum + fNum) {
					id = id - fNum;
					st = $('.infoparttimejobs .mt_startDate').eq(id).html().split('-');
					et = $('.infoparttimejobs .mt_endDate').eq(id).html().split('-');
					cName = $('.infoparttimejobs .mt_companyName').eq(id).html();
					cSize = $('.infoparttimejobs .mt_companySize').eq(id).html();
					cPost = $('.infoparttimejobs .mt_positionName').eq(id).html();
					cType = 3;
					cDes = $('.infoparttimejobs .mt_workDes .workDes').eq(id).html()
				}
				if (typeof st != 'undefined') {
					autoWrite.selWrite(st[0], $('#workExperienceContentBox #BeginDateYear'));
					autoWrite.selWrite(st[1], $('#workExperienceContentBox #BeginDateMonth'));
					autoWrite.selWrite(et[0], $('#workExperienceContentBox #EndDateYear'));
					autoWrite.selWrite(et[1], $('#workExperienceContentBox #EndDateMonth'));
					autoWrite.textWrite(cName, $('#workExperienceContentBox #CompanyName'));
					autoWrite.textWrite(cPost, $('#workExperienceContentBox #JobTitle'));
					autoWrite.textWrite(cDes, $('#workExperienceContentBox #JobDuty'));
					var opt = $('#workExperienceContentBox #CompanyScale').get(0).options;
					switch (cSize) {
					case '少于50人':
						opt[1].selected = true;
						break;
					case '50-149人':
						opt[2].selected = true;
						break;
					case '150-499人':
						opt[3].selected = true;
						break;
					default:
						opt[4].selected = true
					}
					$('#workExperienceContentBox #JobType').get(0).options[cType].selected = true
				}
			})
		} else if (activeId == 6) {
			autoWrite.custonFunc(function() {
				var id = $('#projectList .span12').length;
				if (id < $('.infoproject').length) {
					var pst = $('.infoproject .mt_prostartdate').eq(id).html().split('-');
					var pet = $('.infoproject .mt_proenddate').eq(id).html().split('-');
					var pname = $('.infoproject .mt_projectName').eq(id).html();
					var pdes = $('.infoproject .mt_projectRemark').eq(id).html();
					var ppost = $('.infoproject .mt_projectDuty').eq(id).html();
					autoWrite.selWrite(pst[0], $('#projectExperienceEdit #BeginDateYear'));
					autoWrite.selWrite(pst[1], $('#projectExperienceEdit #BeginDateMonth'));
					autoWrite.selWrite(pet[0], $('#projectExperienceEdit #EndDateYear'));
					autoWrite.selWrite(pet[1], $('#projectExperienceEdit #EndDateMonth'));
					autoWrite.textWrite(pname, $('#projectExperienceEdit #ProjectName'));
					autoWrite.textWrite(pdes, $('#projectExperienceEdit #ProjectIntroduce'));
					autoWrite.textWrite(ppost, $('#projectExperienceEdit #Duty'))
				}
			})
		} else if (activeId == 7) {
			autoWrite.custonFunc(function() {
				var id = $('#languageSkillList .span12').length;
				var opt = $('#LanguageId').get(0).options;
				if (id == 0) {
					var engLevel = help.maxEngLevel();
					engLevel = engLevel['id'];
					var othEngLevel = help.maxOthEnglevel();
					opt[1].selected = true;
					if (engLevel) {
						autoWrite.textWrite($('.infoEnglishSkill .mt_skillEngLevel').eq(engLevel).html(), $('#GradeTest'));
						autoWrite.textWrite($('.infoEnglishSkill .mt_skillEngSorce').eq(engLevel).html(), $('#GradeTestScore'))
					}
					if (othEngLevel > -1) {
						autoWrite.textWrite($('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(othEngLevel).html(), $('#ProfessionTest'));
						autoWrite.textWrite($('.infoOtEnglishSkill .mt_otherSkillEngSorce').eq(othEngLevel).html(), $('#ProfessionTestScore'))
					}
				} else {
					id = id - 1;
					autoWrite.selWrite($('.infoOtherSkill .mt_skillOtherLang').eq(id).html(), $('#LanguageId'));
					var opt1 = $('#WrittenGrade').get(0).options;
					switch ($('.infoOtherSkill .mt_skillWriteLevel').eq(id).html()) {
					case '精通':
						opt1[1].selected = true;
						break;
					case '熟练':
						opt1[2].selected = true;
						break;
					case '一般':
						opt1[3].selected = true;
						break;
					case '了解':
						opt1[4].selected = true;
						break
					}
					var opt2 = $('#OralGrade').get(0).options;
					switch ($('.infoOtherSkill .mt_skillListenLevel').eq(id).html()) {
					case '精通':
						opt2[1].selected = true;
						break;
					case '熟练':
						opt2[2].selected = true;
						break;
					case '一般':
					case '了解':
						opt2[3].selected = true;
						break
					}
				}
			})
		} else if (activeId == 8) {
			autoWrite.custonFunc(function() {
				autoWrite.textWrite($('#mt_skill').text(), $('#OtherSkill'));
				autoWrite.textWrite($('.infoplcerti .mt_certificateName').html(), $('#Certification'))
			})
		} else if (activeId == 9) {
			autoWrite.custonFunc(function() {
				autoWrite.textWrite($('#mt_fmname').text(), $('#familyNumberEdit #Name'));
				autoWrite.textWrite($('#mt_fmrelation').text(), $('#familyNumberEdit #Relation'));
				autoWrite.textWrite($('#mt_fmwork').text(), $('#familyNumberEdit #Company'));
				autoWrite.textWrite($('#mt_fmposition').text(), $('#familyNumberEdit #Job'))
			})
		}
		var eduId = help.maxEduIndex()['id'];
		autoWrite.textWrite($('#mt_name').html(), $('#Name'));
		autoWrite.selWrite($('#mt_sex').html(), $('#Gender'));
		autoWrite.textWrite(help.addZero($('#mt_birth').html()), $('#DateOfBirth'));
		autoWrite.textWrite($('#mt_tel').html(), $('#MobilePhone'));
		autoWrite.textWrite($('#mt_email').html(), $('#Email'));
		autoWrite.textWrite($('.infopledu .mt_schoolName').eq(eduId).html(), $('#inputEducation'));
		autoWrite.textWrite($('.infopledu .mt_professional').eq(eduId).html(), $('#inputProfession'));
		autoWrite.eduWrite($('.infopledu .mt_education').eq(eduId).html(), $('#DegreeId'));
		autoWrite.textWrite(help.addZero($('#mt_gradutetime').html()) + '-01', $('#GraduationDate'));
		autoWrite.textWrite($('#mt_livecity_city').html(), $('#inputCity'));
	});
})()