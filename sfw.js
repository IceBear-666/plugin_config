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
					if (typeof o1[i] === 'undefined') {
						o1[i] = o2[i]
					}
				return o1
			},
			//2013-9-8 -> 2013-09-08
			addZero: function(date) {
				date = date.split('-');
				for (var i = 0; i < date.length; i++) {
					if (date[i] < 10 && date[i].length < 2) {
						date[i] = '0' + date[i];
					}
				}
				return date.join('-');
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
			writeSex: function() {
				if (this.from && this.to) {
					var opt = this.to.get(0).options;
					for (var i = 0; i < opt.length; i++) {
						if (opt[i].innerHTML == this.from.html()) {
							opt[i].selected = true;
							break;
						}
					}
				}
			},
			writeEngRank: function() {
				if (this.from && this.to) {
					var self = this;
					var opt = this.to[0].get(0).options;
					this.from.each(function(index, ele) {
						var value = $(ele).find('.mt_skillEngLevel').html();
						var num = $(ele).find('.mt_skillEngSorce').html();
						if (value == '大学英语六级') {
							opt[1].selected = true;
							$(self.to[1]).val(num);
							return false;
						} else if (value == '大学英语四级') {
							opt[2].selected = true;
							$(self.to[1]).val(num);
							return false;
						}
					});
				}
			},
		});
		// 所在城市
		var city = new AutoWrite({
			from: $('#mt_livecity_city'),
			to: $('#txtCity')
		});
		city.textWrite();

		// 姓名
		var name = new AutoWrite({
			from: $('#mt_name'),
			to: $('input[name="input"]')
		});
		name.textWrite();

		// 性别
		var sex = new AutoWrite({
			from: $('#mt_sex'),
			to: $('#txtSex')
		});
		sex.writeSex();

		// 证件号码
		var license = new AutoWrite({
			from: $('#mt_id'),
			to: $('input[name="input3"]')
		});
		license.textWrite();

		// 出生年月日
		var birthday = new AutoWrite({
			from: $('#mt_birth'),
			to: $('input[name="input5"]')
		});

		birthday.textWrite(function() {
			var value = help.addZero(birthday.from.html());
			birthday.to.val(value);
		});

		// 手机
		var phone = new AutoWrite({
			from: $('#mt_tel'),
			to: $('input[name="input4"]')
		});
		phone.textWrite();

		// 邮箱
		var email = new AutoWrite({
			from: $('#mt_email'),
			to: $('input[name="input6"]')
		});
		email.textWrite();

		// 紧急联系人
		var jjlxr = new AutoWrite({
			from: $('#mt_jjlxr'),
			to: $('input[name="input9"]')
		});
		jjlxr.textWrite();

		// 紧急联系人联系方式
		var jjlxrtel = new AutoWrite({
			from: $('#mt_jjlxrtel'),
			to: $('input[name="input7"]')
		});
		jjlxrtel.textWrite();

		// 英语等级
		var engRank = new AutoWrite({
			from: $('.infoEnglishSkill'),
			to: [$('#txtEnglishLevel'), $('input[name="input8"]')],
		});
		engRank.writeEngRank();

		// 英语能力
		(function() {
			var $text = $('textarea[name="textarea"]'); //文本框
			var $cOne = $('.infoEnglishSkill'); //大学英语等级
			var $cTwo = $('.infoOtEnglishSkill'); //其他英语等级

			$text.val('');
			$cOne.each(function(index, ele) {
				var value = $(ele).find('.mt_skillEngLevel').html();
				var num = $(ele).find('.mt_skillEngSorce').html();

				if (value != '大学英语四级' && value != '大学英语六级') {
					$text.val($text.val() + value + '：' + num + '\\n');
				}
			});

			$cTwo.each(function(index, ele) {
				var value = $(ele).find('.mt_otherSkillEngLevel').html();
				var num = $(ele).find('.mt_otherSkillEngSorce').html();

				$text.val($text.val() + value + '：' + num + '\\n');
			});
		})()

		// 教育经历
		var edu = new AutoWrite({
			from: $('.infopledu'),
			to: $('.xueli')
		});

		edu.textWrite(function() {
			var length = edu.from.length;
			edu.to.each(function(index, ele) {
				if (length < index + 1) {
					return false;
				} else {
					var name = edu.from.eq(index).find('.mt_schoolName').html();
					var startTime = help.addZero(edu.from.eq(index).find('.mt_startYear').html() + '-1');
					var endTime = help.addZero(edu.from.eq(index).find('.mt_endYear').html() + '-1');
					var major = edu.from.eq(index).find('.mt_professional').html();
					var degree = edu.from.eq(index).find('.mt_education').html();
					var rank = edu.from.eq(index).find('.mt_professionalranking').html();

					$(ele).find('#txtzhuanye').val(major);
					$(ele).find('.input05').val(startTime);
					$(ele).find('.input06').val(endTime);
					$(ele).find('#txtSchool').val(name);

					var opt1 = $(ele).find('#select').get(0).options;
					switch (degree) {
						case '大学本科-一本':
						case '大学本科-二本':
						case '大学本科-三本':
						case '海外本科':
							opt1[3].selected = true;
							break;
						case '硕士研究生':
							opt1[2].selected = true;
							break;
						case '博士研究生':
							opt1[1].selected = true;
							break;
						default:
							break;
					}
				}
			});
		});
		// 社团
		var group = new AutoWrite({
			to: $('.huodong'),
			from: $('.infoschoolclub'),
		});
		group.textWrite(function() {
			var length = group.from.length;
			group.to.each(function(index, ele) {
				if (length < index + 1) {
					return false;
				} else {
					var name = group.from.eq(index).find('.mt_schClubName').html();
					var startTime = help.addZero(group.from.eq(index).find('.mt_startDate').html() + '-1');
					var endTime = help.addZero(group.from.eq(index).find('.mt_endDate').html() + '-1');
					var content = group.from.eq(index).find('.mt_workDes').html();

					$(ele).find('#txtaction').val(name);
					$(ele).find('.input05').val(startTime);
					$(ele).find('.input06').val(endTime);
					$(ele).find('#textarea2').val(content);
				}
			});
		});

		// 实习经历
		var intern = new AutoWrite({
			to: $('.shixi'),
			from: $('.infoparttimejobs'),
		});
		intern.textWrite(function() {
			var length = intern.from.length;
			intern.to.each(function(index, ele) {
				if (length < index + 1) {
					return false;
				} else {
					var name = intern.from.eq(index).find('.mt_companyName').html();
					var startTime = help.addZero(intern.from.eq(index).find('.mt_startDate').html() + '-1');
					var endTime = help.addZero(intern.from.eq(index).find('.mt_endDate').html() + '-1');
					var position = intern.from.eq(index).find('.mt_positionName').html();
					var content = '职位：' + intern.from.eq(index).find('.mt_positionName').html() + '\\n' + '工作内容：' + intern.from.eq(index).find('.mt_workContent').children().html();

					$(ele).find('#txtSchool').val(name);
					$(ele).find('.input05').val(startTime);
					$(ele).find('.input06').val(endTime);
					$(ele).find('#textarea3').val(content);
				}
			});
		});

		// 获奖经历
		var reward = new AutoWrite({
			from: $('.infoschaward'),
			to: $('#win').nextUntil('#copyeduEnd')
		});

		reward.textWrite(function() {
			var length = reward.from.length;
			reward.to.each(function(index, ele) {
				if (length < index + 1) {
					return false;
				} else {
					var name = reward.from.eq(index).find('.mt_awardsName').html();
					var rewardTime = help.addZero(reward.from.eq(index).find('.mt_awardsDate').html() + '-1');
					var sort = reward.from.eq(index).find('.mt_awardsType').html();
					var level = reward.from.eq(index).find('.mt_awardsLevel').html();
					var des = reward.from.eq(index).find('.mt_awardsDes').html();


					$(ele).find('input[name="input11"]').val(rewardTime);
					$(ele).find('#textarea4').val('获奖名称：' + name + '／' + '获奖类型：' + sort + '／' + '获奖等级：' + level + '\\n' + '获奖描述：' + des);
				}
			});
		});
	});
});