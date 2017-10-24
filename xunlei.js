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
		var _v = function(id, i) {
			if (typeof i === 'undefined') {
				return $(id).html()
			}
			return $(id).eq(i).html()
		};
		var help = {
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
		};
		var autoWrite = {
			textWrite: function(content, obj) {
				if (content && obj.length) {
					obj.val(content)
				}
			},
			selWrite: function(content, objName) {
				var opt = document.querySelectorAll(objName + '>div a');
				if (content && opt.length) {
					for (var i in opt) {
						if (opt[i].innerHTML === content) {
							opt[i].click();
							opt[i].click();
							break
						}
					}
				}
			},
			sexWrite: function() {
				if ($('.sex').eq(0) && _v('#mt_sex') === '男') {
					$('.sex').eq(0).click()
				} else {
					$('.sex').eq(1).click()
				}
			},
			custonFun: function(callback) {
				callback()
			}
		};
		autoWrite.textWrite(_v('#mt_name'), $('#apply_user'));
		autoWrite.selWrite(_v('#mt_idtype'), '#idcard_type');
		autoWrite.textWrite(_v('#mt_id'), $('#cardvalue'));
		autoWrite.sexWrite();
		autoWrite.selWrite(_v('#mt_biryear'), '#year');
		autoWrite.selWrite(_v('#mt_birmonth'), '#month');
		autoWrite.selWrite(_v('#mt_birday'), '#day');
		autoWrite.textWrite(_v('#mt_tel'), $('#telephone'));
		autoWrite.custonFun(function() {
			var eduId = help.maxEduIndex()['id'];
			if (eduId > -1) {
				var edu;
				switch (_v('.infopledu .mt_education', eduId)) {
				case '大学本科-一本':
				case '大学本科-二本':
				case '大学本科-三本':
					edu = '本科';
					break;
				case '硕士研究生':
					edu = '硕士';
					break;
				case '博士研究生':
					edu = '博士';
					break;
				default:
					edu = '本科以下';
					break
				}
				autoWrite.selWrite(edu, '#degree');
				autoWrite.selWrite(_v('.infopledu .mt_endYearY', eduId + 1), '#graduate_year');
				autoWrite.selWrite(_v('.infopledu .mt_endYearM', eduId + 1), '#graduate_month');
				autoWrite.textWrite(_v('.infopledu .mt_schoolName', eduId + 1), $('#schoolname'));
				autoWrite.textWrite(_v('.infopledu .mt_academy', eduId + 1), $('#aculty'));
				autoWrite.textWrite(_v('.infopledu .mt_professional', eduId + 1), $('#major'))
			}
			var engId = help.maxEngLevel()['id'];
			if (engId > -1) {
				var eng;
				switch (_v('.infoEnglishSkill .mt_skillEngLevel', engId)) {
				case '大学英语四级':
					eng = '四级';
					break;
				case '大学英语六级':
					eng = '六级';
					break;
				case '专业八级':
					eng = '八级';
					break
				}
				autoWrite.selWrite(eng, '#englishlevel');
				autoWrite.textWrite(_v('.infoEnglishSkill .mt_skillEngSorce', engId), $('#englishpoint'))
			}
			autoWrite.textWrite(_v('#mt_hobbies'), $('#itlevel'));
			$('#reward').val('');
			$('.infoschaward').each(function(i, val) {
				var str = $('#reward').val();
				str = str + _v('.infoschaward .mt_awardsDate', i) + ' -- ' + _v('.infoschaward .mt_awardsName', i);
				str = str + '(' + _v('.infoschaward .mt_awardsType', i) + _v('.infoschaward .mt_awardsLevel', i) + ')\\n';
				$('#reward').val(str)
			});
			$('#activity').val('');
			$('.infoschoolclub').each(function(i, val) {
				var con = $('#activity').val();
				con = con + _v('.infoschoolclub .mt_schClubList', i) + '\\n';
				$('#activity').val(con)
			})
		});
		autoWrite.custonFun(function() {
			if ($('.infoproject').length > 0 && $('#proname')) {
				$('.sex').eq(8).click();
				$('#proname').val('');
				$('.infoproject').each(function(i, val) {
					var procon = $('#proname').val();
					procon = procon + _v('.infoproject .mt_proList', i) + '\\n';
					$('#proname').val(procon)
				})
			} else {
				$('.sex').eq(9).click()
			}
			if ($('.infoparttimejobs').length > 0 && $('#practiceName_0')) {
				$('.sex').eq(10).click();
				$('.infoparttimejobs').each(function(i, val) {
					var st = _v('.infoparttimejobs .mt_startDate', i).split('-');
					var et = _v('.infoparttimejobs .mt_endDate', i).split('-');
					autoWrite.selWrite(st[0], '#start_year_' + i);
					autoWrite.selWrite(st[1], '#start_month_' + i);
					autoWrite.selWrite(et[0], '#end_year_' + i);
					autoWrite.selWrite(et[1], '#end_month_' + i);
					autoWrite.textWrite(_v('.infoparttimejobs .mt_companyName', i), $('#practiceName_' + i));
					autoWrite.textWrite(_v('.infoparttimejobs .mt_workList', i), $('#prodesc_' + i))
				})
			} else {
				$('.sex').eq(11).click()
			}
		});
	});
})()