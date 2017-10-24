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
		var _v = function(index, i) {
			if (typeof i === 'undefined') {
				return $(index).html() ? $(index).html() : ''
			}
			return $(index).eq(i).html() ? $(index).eq(i).html() : ''
		};
		var help = (function() {
			var f1 = function() {
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
			};
			var f2 = function(date) {
				return date < 10 ? '0' + date: date
			};
			var f3 = function() {
				var ev = document.createEvent('HTMLEvents');
				ev.initEvent('change', true, false);
				return ev
			};
			return {
				maxEduIndex: f1,
				addZero: f2,
				event: f3
			}
		})();
		var autoWrite = {
			textWrite: function(content, obj) {
				if (content.length && obj.length) {
					obj.val(content)
				}
			},
			sexWrite: function() {
				if (_v('#mt_sex') === '男') {
					$('#sex0').click()
				} else {
					$('#sex1').click()
				}
			},
			selWrite: function(content, obj) {
				if (content.length && obj.length) {
					var opt = obj.get(0).options;
					for (var i in opt) {
						if (opt[i].innerText == content) {
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
		autoWrite.textWrite(_v('#mt_name'), $('#name'));
		autoWrite.sexWrite();
		autoWrite.selWrite(_v('#mt_biryear'), $('#birth_year'));
		autoWrite.selWrite(help.addZero(_v('#mt_birmonth')), $('#birth_month'));
		autoWrite.selWrite(help.addZero(_v('#mt_birday')), $('#birth_day'));
		autoWrite.textWrite(_v('#mt_tel'), $('#mobile'));
		autoWrite.textWrite(_v('#mt_email'), $('#email'));
		autoWrite.custonFun(function() {
			var maxedu = help.maxEduIndex();
			var id = maxedu['id'];
			autoWrite.textWrite(_v('.infopledu .mt_schoolName', id + 1), $('#school'));
			autoWrite.textWrite(_v('.infopledu .mt_professional', id + 1), $('#major'));
			autoWrite.textWrite(_v('.infopledu .mt_endYearY', id + 1), $('#graduateYear'));
			autoWrite.textWrite(help.addZero(_v('.infopledu .mt_endYearM', id + 1)), $('#graduateMonth'));
			var opt = $('[name=\"inivateJob.degree\"]').get(0).options;
			switch (_v('.infopledu .mt_education', id)) {
			case '大学专科':
				opt[0].selected = true;
				break;
			case '大学本科-一本':
			case '大学本科-二本':
			case '大学本科-三本':
			case '海外本科':
				opt[1].selected = true;
				break;
			default:
				opt[2].selected = true
			}
			var procon = '';
			$('#experience1').focus();
			$('#experience1').val('');
			$('.infoproject').each(function(i, val) {
				procon = $('#experience1').val();
				procon = procon + '项目名:' + _v('.infoproject .mt_projectName', i) + ' ';
				procon = procon + '项目开始时间:' + _v('.infoproject .mt_prostartdate', i) + ' ';
				procon = procon + '项目结束时间:' + _v('.infoproject .mt_proenddate', i) + ' ';
				procon = procon + '项目描述:' + _v('.infoproject .mt_projectRemark', i) + '\\n\\n';
				$('#experience1').val(procon)
			});
			document.getElementById('experience1').dispatchEvent(help.event());
			var jobcon = '';
			$('#experience2').focus();
			$('#experience2').val('');
			$('.infoparttimejobs').each(function(i, val) {
				jobcon = $('#experience2').val();
				jobcon = jobcon + '实习时间:' + _v('.infoparttimejobs .mt_startDate', i) + '-' + _v('.infoparttimejobs .mt_endDate', i) + ' ';
				jobcon = jobcon + '公司名称:' + _v('.infoparttimejobs .mt_companyName', i) + ' ';
				jobcon = jobcon + '实习职位:' + _v('.infoparttimejobs .mt_positionName', i) + ' ';
				jobcon = jobcon + '工作内容:' + _v('.infoparttimejobs .mt_workContent .workContent', i) + '\\n\\n';
				$('#experience2').val(jobcon)
			});
			document.getElementById('experience2').dispatchEvent(help.event());
			var schcon = '';
			$('#experience3').focus();
			$('#experience3').val('');
			$('.infoschoolclub').each(function(i, val) {
				schcon = $('#experience3').val();
				schcon = schcon + '任职时间:' + _v('.infoschoolclub .mt_startDate', i) + ' ';
				schcon = schcon + '组织名称:' + _v('.infoschoolclub .mt_schClubName', i) + ' ';
				schcon = schcon + '职位名称:' + _v('.infoschoolclub .mt_positionName', i) + ' ';
				schcon = schcon + '工作职责:' + _v('.infoschoolclub .mt_workDes', i) + '\\n\\n';
				$('#experience3').val(schcon)
			});
			document.getElementById('experience3').dispatchEvent(help.event())
		});
	});
})()