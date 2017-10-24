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
		var _ = function(index, i) {
			var $subDoc = $('#showframe').contents();
			if (typeof i === 'undefined') {
				return $subDoc.find(index)
			}
			return $subDoc.find(index).eq(i)
		};
		var _v = function(name, i) {
			if (typeof i === 'undefined') {
				return document.querySelectorAll(name)[0].innerHTML
			}
			return document.querySelectorAll(name)[i].innerHTML
		};
		var help = {
			addZero: function(date) {
				date = date.split('-');
				for (var i in date) {
					if (date[i] < 10) {
						date[i] = '0' + date[i]
					}
				}
				return date = date.join('-')
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
			maxEduIndex: function() {
				var ary = [];
				$('.infopledu').each(function(i, val) {
					var year = _v('.infopledu .mt_endYearY', i);
					year = parseInt(year);
					ary.push({
						id: i,
						y: year
					})
				});
				ary.sort(function(a, b) {
					return b.y - a.y
				});
				return {
					id: ary[0]['id'],
					year: ary[0]['y']
				}
			},
			event: function() {
				var ev = document.createEvent('HTMLEvents');
				ev.initEvent('change', true, false);
				return ev
			},
			delay: function(callback) {
				window.setTimeout(callback, 200)
			}
		};
		var autoWrite = {
			textWrite: function(content, obj) {
				if (content && obj.length) {
					obj.val(content)
				}
			},
			textArrWrite: function(conArray, objArray) {
				for (var i in conArray) {
					this.textWrite(conArray[i], objArray[i])
				}
			},
			selWrite: function(content, obj) {
				if (content && obj.length) {
					var opt = obj.get(0).options;
					for (var i in opt) {
						if (content.indexOf(opt[i].innerHTML) != -1) {
							opt[i].selected = true;
							break
						}
					}
				}
			},
			custonFun: function(callback) {
				callback()
			}
		};
		var personInfo = function() {
			var conArray = [help.addZero(_v('#mt_birth')), _v('#mt_hukoucity_city'), _v('#mt_height'), _v('#mt_tel'), _v('#mt_email'), _v('#mt_gudingtel'), _v('#mt_zip'), _v('#mt_add'), _v('#mt_postadd'), _v('#mt_fmphone'), _v('#mt_fmrelation'), _v('#mt_fmname'), _v('#mt_fmwork'), _v('#mt_fmposition')];
			var objArray = [_('#txtBirthday'), _('#txtSource'), _('#txtHeight'), _('#txtMobile'), _('#txtEmail'), _('#txtHomePhone'), _('#txtPostCode'), _('#txtAddress'), _('#txtFamilyAddress'), _('#txtFamilyPhone'), _('#txtFamilyRelation'), _('#txtFamilyName'), _('#txtFamilyCompany'), _('#txtFamilyPosition')];
			autoWrite.textArrWrite(conArray, objArray);
			autoWrite.selWrite(_v('#mt_nation'), _('#drpRace'));
			if (_v('#mt_maritalstatus') == '未婚' && _('#rblMarryType_0').length) {
				_('#rblMarryType_0').click()
			} else {
				_('#rblMarryType_1').click()
			}
			if (_('#ddlLangStyle').length) {
				_('#ddlLangStyle').get(0).options[2].selected = true;
				_('#ddlLangStyle').get(0).dispatchEvent(help.event());
				help.delay(function() {
					var eng = help.maxEngLevel();
					_('#ddlAuthenticationStyle').get(0).options[eng['level'] + 1].selected = true;
					autoWrite.textWrite('成绩: ' + _v('.infoEnglishSkill .mt_skillEngSorce', eng['id']), _('#txtRemark'))
				})
			}
			if (_('#drpGrdYear').length) {
				var gradate = _v('#mt_gradutetime').split('-');
				autoWrite.selWrite(gradate[0], _('#drpGrdYear'))
			}
			if (_('#drpPolitic').length) {
				var plo = _('#drpPolitic').get(0).options;
				switch (_v('#mt_polistatus')) {
				case '群众':
					plo[1].selected = true;
					break;
				case '中共党员':
					plo[2].selected = true;
					break;
				case '共青团员':
					plo[3].selected = true;
					break;
				case '九三学社':
					plo[4].selected = true;
					break;
				case '中国民主同盟':
					plo[5].selected = true;
					break;
				case '中国国民党革命委员会':
					plo[6].selected = true;
					break;
				case '中国民主建国会':
					plo[7].selected = true;
					break;
				case '中国民主促进会':
					plo[8].selected = true;
					break;
				case '中国农工民主党':
					plo[9].selected = true;
					break;
				case '中国致公党':
					plo[10].selected = true;
					break;
				case '台湾民主自治同盟':
					plo[11].selected = true;
					break;
				default:
					plo[12].selected = true;
					break
				}
			}
		};
		autoWrite.custonFun(personInfo);
		var educationExp = function() {
			var edu = help.maxEduIndex();
			var id = edu['id'];
			var st = _v('.infopledu .mt_startYear', id).split('-');
			var et = _v('.infopledu .mt_endYear', id).split('-');
			autoWrite.selWrite(st[0], _('#drpBeginYear'));
			autoWrite.selWrite(st[1], _('#drpBeginMonth'));
			autoWrite.selWrite(et[0], _('#drpEndYear'));
			autoWrite.selWrite(et[1], _('#drpEndMonth'));
			autoWrite.textWrite(_v('.infopledu .mt_academy', id), _('#txtCollege'));
			autoWrite.selWrite(_v('.infopledu .mt_education', id), _('#drpXueLi'));
			autoWrite.selWrite(_v('.infopledu .mt_degree', id), _('#drpDegree'));
			autoWrite.textWrite(_v('.infopledu .mt_tutorname', id), _('#txtTeacher'))
		};
		autoWrite.custonFun(educationExp);
		var other = function() {
			if (_('#txtSelfIntro').length) {
				var jobcon = '';
				$('.infofulltimejobs').each(function(i, val) {
					jobcon = jobcon + _v('.infofulltimejobs .mt_workList', i) + '\\n\\n'
				});
				_('#txtSelfIntro').val(jobcon)
			}
		};
		autoWrite.custonFun(other);
		
		var _ = function(index, i) {
			var $subDoc = $('#showframe').contents();
			if (typeof i === 'undefined') {
				return $subDoc.find(index)
			}
			return $subDoc.find(index).eq(i)
		};
		var _v = function(name, i) {
			if (typeof i === 'undefined') {
				return document.querySelectorAll(name)[0].innerHTML
			}
			return document.querySelectorAll(name)[i].innerHTML
		};
		if(_('#txtXing') && _v('#mt_name')){
			_('#txtXing').val(_v('#mt_name').slice(0,1));
		}
		if(_('#txtMing') && _v('#mt_name')){
			_('#txtMing').val(_v('#mt_name').slice(1));
		}
	});
})()