$(function() {
	$('.quick-write').click(function() {
		if ($('#jm_qiuck_cover')) {
			$('#jm_qiuck_cover').fadeIn();
			setTimeout(function() {
				$('#jm_qiuck_cover').fadeOut()
			}, 3000);
		}

		var help = {
			// 帮助函数
			// 赋值属性
			// extend({a:1}, {b:1, a:2}) -> {a:1, b:1}
			extend: function(o1, o2) {
				for (var i in o2)
					console.log('i: '+i);
					if (typeof o1[i] === 'undefined') {
						console.log('i: '+i);
						o1[i] = o2[i]
						console.log('i: '+i);
					}
				return o1
			}
		}

		function AutoWrite(obj) {
			help.extend(this, obj);
		}

		help.extend(AutoWrite.prototype, {
			textWrite: function(callback) {
				if (callback) {
					if (this.from && this.to) {
						callback();
					}
				} else {
					if (this.from && this.to) {
						this.to.val(this.from.html());
					}
				}
			},
			checkWrite: function(callback) {
				console.log(this.to);
				if (this.from && this.to) {
					callback();
				}
			},
			selectWrite: function() {

			}
		});

		// 姓名
		var name = new AutoWrite({
			from: $('#mt_name'),
			to: $('input[name="name"]')
		});
		name.textWrite();

		// 邮箱
		var email = new AutoWrite({
			from: $('#mt_email'),
			to: $('input[name="email"]')
		});
		email.textWrite();

		// 手机
		var phone = new AutoWrite({
			from: $('#mt_tel'),
			to: $('input[name="mobile"]')
		});
		phone.textWrite();

		// 证件号码
		var license = new AutoWrite({
			from: $('#mt_id'),
			to: $('input[name="idCard"]')
		});
		license.textWrite();

		// 出生年月日
		var birthday = new AutoWrite({
			from: $('#mt_birth'),
			to: $('input[name="birthday"]')
		});

		birthday.textWrite(function() {
			var date = birthday.from.html();
			date = date.split('-');
			date.splice(2, 1);
			var str = date.join('-');
			birthday.to.val(str);
		});

		// 微信
		var weChat = new AutoWrite({
			from: $('#mt_wxname'),
			to: $('input[name="wechat"]')
		});
		weChat.textWrite();

		// 性别
		var sex = new AutoWrite({
			from: $('#mt_sex'),
			to: $('select[name="gender"]')
		});
		sex.checkWrite(function() {
			var opt = sex.to.get(0).options;
			for (var i = 0; i < opt.length; i++) {
				if (opt[i].innerHTML == sex.from.html()) {
					opt[i].selected = true;
					break;
				}
			}
		});

		// 毕业时间
		var graduation = new AutoWrite({
			from: $('#mt_gradutetime'),
			to: $('select[name="rf270"]')
		});
		graduation.checkWrite(function() {
			var opt = graduation.to.get(0).options;
			var date = graduation.from.html();
			date = date.split('-');
			var str = date[0];
			for (var i = 0; i < opt.length; i++) {
				if (opt[i].innerHTML == str) {
					opt[i].selected = true;
					break;
				}
			}
		});

		// 实习经历
		var intern = new AutoWrite({
			to: $('textarea[name="rf265"]'),
			from: $('.infoparttimejobs'),
		});
		intern.textWrite(function() {
			intern.to.val("");
			intern.from.each(function(index, ele) {
				var $name = $(ele).find('.mt_companyName');
				var $startTime = $(ele).find('.mt_startDate');
				var $endTime = $(ele).find('.mt_endDate');
				var $position = $(ele).find('.mt_positionName');
				var $content = $(ele).find('.mt_workContent');

				intern.to.val(intern.to.val() + '工作单位：' + $name.html() + '，开始时间：' + $startTime.html() + '，结束时间：' + $endTime.html() + '，职位：' + $position.html() + '，工作内容：' + $content.children().html() + '\\n');
			});
		});

		// 项目经历
		var project = new AutoWrite({
			to: $('textarea[name="rf264"]'),
			from: $('.infoproject'),
		});
		project.textWrite(function() {
			project.to.val("");
			project.from.each(function(index, ele) {
				var $name = $(ele).find('.mt_projectName');
				var $startTime = $(ele).find('.mt_prostarttime');
				var $endTime = $(ele).find('.mt_proendtime');
				var $position = $(ele).find('.mt_projectDuty');
				var $content = $(ele).find('.mt_projectRemark');

				project.to.val(project.to.val() + '项目名称：' + $name.html() + '，开始时间：' + $startTime.html() + '，结束时间：' + $endTime.html() + '，项目描述：' + $content.html() + '，职责：' + $position.html() + '\\n');
			});
		});

		// 社团
		var group = new AutoWrite({
			to: $('textarea[name="rf266"]'),
			from: $('.infoschoolclub'),
		});
		group.textWrite(function() {
			group.to.val("");
			group.from.each(function(index, ele) {
				var $name = $(ele).find('.mt_schClubName');
				var $startTime = $(ele).find('.mt_startDate');
				var $endTime = $(ele).find('.mt_endDate');
				var $position = $(ele).find('.mt_positionName');
				var $content = $(ele).find('.mt_workDes');

				group.to.val(group.to.val() + '社团名称：' + $name.html() + '，开始时间：' + $startTime.html() + '，结束时间：' + $endTime.html() + '，职位：' + $position.html() + '，工作职责：' + $content.html() + '\\n');
			});
		});

		// 其他外语能力
		var otlang = new AutoWrite({
			from: $('.infoOtherSkill'),
			to: $('input[name="rf259"]')
		});

		otlang.textWrite(function() {
			var text = [];
			otlang.from.each(function(index, ele) {
				text.push($(ele).find('.mt_skillOtherLang').html());
			});
			var str = text.join('/');
			otlang.to.val(str);
		});

		// 英语能力
		(function() {
			var $rank = $('select[name="englishTestName"]');
			var $score = $('input[name="rf258"]');
			var $cOne = $('.infoEnglishSkill'); //大学英语等级
			var $cTwo = $('.infoOtEnglishSkill'); //其他英语等级

			var opt = $rank.get(0).options;
			if ($cTwo.find('.mt_otherSkillEngLevel').html() != '') {
				var value = $cTwo.find('.mt_otherSkillEngLevel').html();
				var num = $cTwo.find('.mt_otherSkillEngSorce').html();
				switch (value) {
					case '雅思':
						opt[5].selected = true;
						break;
					case '托福':
						opt[6].selected = true;
						break;
					case 'GRE':
						opt[8].selected = true;
						break;
					case '托业':
						opt[7].selected = true;
						break;
					default:
						break;
				}
				$score.val(num);
			} else {
				var value = $cOne.find('.mt_skillEngLevel').html();
				var num = $cOne.find('.mt_skillEngSorce').html();
				switch (value) {
					case '大学英语四级':
						opt[1].selected = true;
						break;
					case '大学英语六级':
						opt[2].selected = true;
						break;
					case '专业四级':
						opt[3].selected = true;
						break;
					case '专业八级':
						opt[4].selected = true;
						break;
					default:
						break;
				}
				$score.val(num);
			}
		})()

		// 竞赛获奖
		var reward = new AutoWrite({
			from: $('.infoschaward'),
			to: $('#rf267Container').children()
		});

		reward.textWrite(function() {
			var length = reward.from.length;
			reward.to.each(function(index, ele) {
				if (length < index + 1) {
					return false;
				} else {
					var name = reward.from.eq(index).find('.mt_awardsName').html();
					var descript = reward.from.eq(index).find('.mt_awardsDes').html();

					var opt = $(ele).find('select[name="prefixForRf2670.u_267_268"]').get(0).options;
					for (var i = 0; i < opt.length; i++) {
						if (opt[i].innerHTML == name) {
							opt[i].selected = true;
							break;
						} else {
							opt[7].selected = true;
						}
					}
					$(ele).find('input[name="prefixForRf2670.u_267_269"]').val(descript);
				}
			})
		});

		// 教育经历
		var edu = new AutoWrite({
			from: $('.infopledu'),
			to: $('#rf22Container').children()
		});

		edu.textWrite(function() {
			var length = edu.from.length;
			edu.to.each(function(index, ele) {
				if (length < index + 1) {
					return false;
				} else {
					var name = edu.from.eq(index).find('.mt_schoolName').html();
					var startTime = edu.from.eq(index).find('.mt_startYear').html();
					var endTime = edu.from.eq(index).find('.mt_endYear').html();
					var major = edu.from.eq(index).find('.mt_professional').html();
					var degree = edu.from.eq(index).find('.mt_education').html();
					var rank = edu.from.eq(index).find('.mt_professionalranking').html();

					$(ele).find('input[name="prefixForRf220.major"]').val(major);
					$(ele).find('input[name="starDate"]').val(startTime);
					$(ele).find('input[name="endDate"]').val(endTime);
					$(ele).find('input[name="prefixForRf220.school"]').val(name);

					var opt1 = $(ele).find('select[name="prefixForRf220.degree"]').get(0).options;
					switch (degree) {
						case '大学本科-一本':
						case '大学本科-二本':
						case '大学本科-三本':
						case '海外本科':
							opt1[6].selected = true;
							break;
						case '硕士研究生':
							opt1[7].selected = true;
							break;
						case '博士研究生':
							opt1[8].selected = true;
							break;
						case '大学专科':
							opt1[5].selected = true;
							break;
						case 'MBA':
							opt1[9].selected = true;
							break;
						default:
							opt1[11].selected = true;
							break;
					}

					var opt2 = $(ele).find('select[name="prefixForRf220.u_22_275"]').get(0).options;
					switch (rank) {
						case '前5%':
							opt2[1].selected = true;
							break;
						case '前10%':
							opt2[2].selected = true;
							break;
						case '前20%':
							opt2[3].selected = true;
							break;
						case '前30%':
							opt2[4].selected = true;
							break;
						default:
							opt2[5].selected = true;
							break;
					}

					if ($('.infoschoolclub').length > 0) {
						$(ele).find('input[name="prefixForRf220.u_22_277"]').attr("checked", "checked");
					}
				}
			});
		});
	});
})