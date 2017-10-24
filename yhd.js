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
		};

		function AutoWrite(obj) {
			help.extend(this, obj);
		}

		help.extend(AutoWrite.prototype, {
			textWrite: function(callback) {
				if (callback) {
					if (this.from && this.to.length > 0) {
						callback();
					}
				} else {
					if (this.from && this.to.length > 0) {
						this.to.val(this.from.html());
					}
				}
			},
			checkWrite: function(callback) {
				if (this.from && this.to.length > 0) {
					callback();
				}
			},
			selectWrite: function() {
				if (this.from && this.to.length > 0) {
					var opt = this.to.get(0).options;
					for (var i = 0; i < opt.length; i++) {
						if (opt[i].value == help.addZero(this.from.html())) {
							opt[i].selected = true;
							break;
						}
					}
				}
			},
			writeSex: function() {
				if (this.from && this.to.length > 0) {
					var value = this.from.html();
					if (value == '男') {
						value = 0;
					} else {
						value = 1;
					}
					for (var i = 0; i < this.to.length; i++) {
						if (this.to.eq(i).val() == value) {
							this.to.eq(i).attr('checked', 'checked');
							break;
						}
					}
				}
			},
			writeEngRank: function() {
				if (this.from && this.to.length > 0 && this.to[0].length > 0) {
					var self = this;
					var opt = this.to[0].get(0).options;
					this.from.each(function(index, ele) {
						var value = $(ele).find('.mt_skillEngLevel').html();
						var num = $(ele).find('.mt_skillEngSorce').html();
						if (value == '专业八级') {
							opt[4].selected = true;
							$(self.to[1]).val(num);
							return false;
						} else if (value == '专业四级') {
							opt[3].selected = true;
							$(self.to[1]).val(num);
							return false;
						} else if (value == '大学英语六级') {
							opt[2].selected = true;
							$(self.to[1]).val(num);
							return false;

						} else if (value == '大学英语四级') {
							opt[1].selected = true;
							$(self.to[1]).val(num);
							return false;
						}
					});
				}
			},
			writeOtEngRank: function() {
				if (this.from && this.to.length > 0 && this.to[0].length > 0) {
					var self = this;
					var opt = this.to[0].get(0).options;
					this.from.each(function(index, ele) {
						var value = $(ele).find('.mt_otherSkillEngLevel').html();
						var num = $(ele).find('.mt_otherSkillEngSorce').html();
						if (value == '雅思') {
							opt[4].selected = true;
							$(self.to[1]).val(num);
							return false;
						} else if (value == 'GMAT') {
							opt[3].selected = true;
							$(self.to[1]).val(num);
							return false;
						} else if (value == 'GRE') {
							opt[2].selected = true;
							$(self.to[1]).val(num);
							return false;

						} else if (value == '托福') {
							opt[1].selected = true;
							$(self.to[1]).val(num);
							return false;
						}
					});
				}
			},
			isNot: function() {
				if (this.from.length > 0) {
					this.to.eq(0).attr('checked', 'checked');
				} else {
					this.to.eq(1).attr('checked', 'checked');
				}
			},
			idcardWrite: function() {
				if (this.from && this.to.length > 0) {
					var opts = this.to.get(0).options;
					var value = this.from.html();
					switch (value) {
						case '身份证':
							opts[1].selected = true;
							break;
						case '护照':
							opts[3].selected = true;
							break;
						case '香港永久居民身份证':
						case '澳门永久居民身份证':
						case '香港非永久居民身份证':
						case '澳门非永久居民身份证':
							opts[2].selected = true;
							break;
						default:
							opts[0].selected = true;
					}
				}
			},
			selectValue: function(target, value) {
				var opt = target.get(0).options;
				for (var i = 0; i < opt.length; i++) {
					if (opt[i].value == value) {
						opt[i].selected = true;
						break;
					}
				}
			}
		});

		// 姓名
		var name = new AutoWrite({
			from: $('#mt_name'),
			to: $('input[name="resume.name"]')
		});
		name.textWrite();

		// 证件号码
		var license = new AutoWrite({
			from: $('#mt_id'),
			to: $('input[name="resume.IDCard"]')
		});
		license.textWrite();

		// 性别
		var sex = new AutoWrite({
			from: $('#mt_sex'),
			to: $('input[name="resume.sex"]')
		});
		sex.writeSex();

		// 婚姻
		var marry = new AutoWrite({
			from: $('#mt_maritalstatus'),
			to: $('input[name="resume.maritalStatus"]')
		});
		marry.textWrite(function() {
			var value = marry.from.html();
			switch (value) {
				case '未婚':
					marry.to.eq(1).attr('checked', 'checked');
					break;
				case '已婚':
					marry.to.eq(0).attr('checked', 'checked');
					break;
				default:
					marry.to.eq(2).attr('checked', 'checked');
					break;
			}
		});
		// 手机
		var phone = new AutoWrite({
			from: $('#mt_tel'),
			to: $('input[name="resume.telephone"]')
		});
		phone.textWrite();

		// 邮箱
		var email = new AutoWrite({
			from: $('#mt_email'),
			to: $('input[name="resume.email"]')
		});
		email.textWrite();

		// 最高学历
		var topEduLevel = new AutoWrite({
			from: $('#mt_edu'),
			to: $('select[name="resume.education"]')
		});
		topEduLevel.textWrite(function() {
			var opt1 = topEduLevel.to.get(0).options;
			switch (topEduLevel.from.html()) {
				case '大学专科':
					opt1[1].selected = true;
					break;
				case '大学本科-一本':
				case '大学本科-二本':
				case '大学本科-三本':
				case '海外本科':
					opt1[2].selected = true;
					break;
				case '硕士研究生':
					opt1[3].selected = true;
					break;
				case '博士研究生':
					opt1[4].selected = true;
					break;
				case '中专':
				case '技校/职高':
				case '高中':
				case '初中':
					opt1[0].selected = true;
					break;
				default:
					break;
			}
		});

		// 毕业时间年
		// 毕业时间月
		~ function() {
			var value = $('#mt_gradutetime').html();
			value = value.split('-');
			var valueYear = value[0];
			var valueMonth = value[1];

			var $graYear = $('select[name="resume.workyears"]');
			var $graMonth = $('select[name="resume.graduationMonth"]');
			if ($graYear.length > 0 && $graMonth.length > 0) {
				var opt1 = $graYear.get(0).options;
				var opt2 = $graMonth.get(0).options;
				for (var i = 0; i < opt1.length; i++) {
					if (opt1[i].value == valueYear) {
						opt1[i].selected = true;
						break;
					}
				}

				for (var i = 0; i < opt2.length; i++) {
					if (opt2[i].value == valueMonth) {
						opt2[i].selected = true;
						break;
					}
				}
			}
		}()

		// 毕业学校
		var school = new AutoWrite({
			from: $('.infopledu .mt_schoolName'),
			to: $('input[name="resume.school"]')
		});
		school.textWrite();

		// 专业
		var major = new AutoWrite({
			from: $('.infopledu .mt_professional'),
			to: $('input[name="resume.major"]')
		});
		major.textWrite();

		// 实习经历
		var intern = new AutoWrite({
			to: $('#workExperience'),
			from: $('.infoparttimejobs'),
		});
		intern.textWrite(function() {
			if (intern.from.length > 0) {
				intern.to.val("");
				intern.from.each(function(index, ele) {
					var $name = $(ele).find('.mt_companyName');
					var $startTime = $(ele).find('.mt_startDatedot');
					var $endTime = $(ele).find('.mt_endDatedot');
					var $position = $(ele).find('.mt_positionName');
					var $content = $(ele).find('.mt_workContent');

					intern.to.val(intern.to.val() + $name.html() + '  ' + $startTime.html() + '-' + $endTime.html() + '   ' + $position.html() + '   ' + $content.children().html() + '\\n');
				});

			}
		});
	});
});