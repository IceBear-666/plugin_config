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
			addZero: function(date, style) {
				date = date.split('-');
				for (var i = 0; i < date.length; i++) {
					if (date[i] < 10 && date[i].length < 2) {
						date[i] = '0' + date[i];
					}
				}
				return date.join(style);
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
						value = 'M';
					} else {
						value = 'F';
					}
					for (var i = 0; i < this.to.length; i++) {
						if (this.to.eq(i).val() == value) {
							if (value == 'M') {
								this.to.eq(i).attr('checked', 'checked').parent().addClass('label-on').next().removeClass('label-on');
							} else {
								this.to.eq(i).attr('checked', 'checked').parent().addClass('label-on').prev().removeClass('label-on');
							}
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
			},
			dateWrite: function() {
				this.to.val(help.addZero(this.from.html(), '/'));
			},
			xiaomiWorkWirte: function() {
				var _self = this;
				var length = this.from.length;
				this.to.each(function(index, ele) {
					if (length < index + 1) {
						return false;
					} else {
						var startTime = help.addZero(_self.from.eq(index).find('.mt_startDate').html() + '-1', '/');
						var endTime = help.addZero(_self.from.eq(index).find('.mt_endDate').html() + '-1', '/');


						$(ele).find('.input-text.js-input-date').eq(0).val(startTime);
						$(ele).find('.input-text.js-input-date').eq(1).val(endTime);

						var name = _self.from.eq(index).find('.mt_companyName').html();
						var department = _self.from.eq(index).find('.mt_department').html();
						if (department != '') {
							$(ele).find('.input-text').eq(2).val(name + '+' + department);
						} else {
							$(ele).find('.input-text').eq(2).val(name);
						}

						var content = _self.from.eq(index).find('.mt_workContent').children().html();
						$(ele).find('.textarea').val(content);

						var position = _self.from.eq(index).find('.mt_positionName').html();
						$(ele).find('.input-text').eq(3).val(position);
					}
				});
			}
		});

		// 姓
		var name1 = new AutoWrite({
			from: $('#mt_name'),
			to: $('input[name="firstName"]')
		});
		name1.textWrite(function() {
			var value = name1.from.html();
			if (value.length <= 3) {
				value = value.substring(0, 1);
			} else {
				value = value.substring(0, 2);
			}
			name1.to.val(value);
		});
		// 名
		var name2 = new AutoWrite({
			from: $('#mt_name'),
			to: $('input[name="lastName"]')
		});
		name2.textWrite(function() {
			var value = name2.from.html();
			if (value.length <= 3) {
				value = value.substring(1);
			} else {
				value = value.substring(2);
			}
			name2.to.val(value);
		});

		// 手机
		var phone = new AutoWrite({
			from: $('#mt_tel'),
			to: $('input[name="tel"]')
		});
		phone.textWrite();

		// 邮箱
		var email = new AutoWrite({
			from: $('#mt_email'),
			to: $('input[name="email"]')
		});
		email.textWrite();

		// 婚姻
		var marry = new AutoWrite({
			from: $('#mt_maritalstatus'),
			to: $('.dropdown-text').eq(0)
		});
		marry.textWrite(function() {
			marry.to.html(marry.from.html());
		});
		// 性别
		var sex = new AutoWrite({
			from: $('#mt_sex'),
			to: $('input[name="sex"]')
		});
		sex.writeSex();

		// 出生年月日
		var birthday = new AutoWrite({
			from: $('#mt_birth'),
			to: $('input[name="birth"]')
		});

		birthday.dateWrite();

		// 居住地址
		var place = new AutoWrite({
			from: $('#mt_add'),
			to: $('input[name="address"]')
		});
		place.textWrite();

		// 实习
		var works = new AutoWrite({
			from: $('.infoparttimejobs'),
			to: $('.resume-box-wrapper.js-add-section.toggle-box').eq(0).find('.resume-box.clearfix')
		});
		works.xiaomiWorkWirte();

		// 全职
		var fullWorks = new AutoWrite({
			from: $('.infofulltimejobs'),
			to: $('.resume-box-wrapper.js-add-section.toggle-box').eq(1).find('.resume-box.clearfix')
		});
		fullWorks.xiaomiWorkWirte();

		// 教育经历
		var edu = new AutoWrite({
			from: $('.infopledu'),
			to: $('.resume-box-wrapper.js-add-section.toggle-box').eq(2).find('.resume-box')
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
					var department = edu.from.eq(index).find('.mt_academy').html(); // 院系
					var major = edu.from.eq(index).find('.mt_professional').html(); //专业
					var education = edu.from.eq(index).find('.mt_education').html(); //学历
					var degree = edu.from.eq(index).find('.mt_degree').html(); //学位


					$(ele).find('.input-text').eq(3).val(major);
					$(ele).find('.input-text').eq(0).val(help.addZero(startTime + '-1', '/'));
					$(ele).find('.input-text').eq(1).val(help.addZero(endTime + '-1', '/'));
					$(ele).find('.input-text').eq(2).val(name);

					var $educationBox = $(ele).find('.dropdown-text').eq(0);
					switch (education) {
						case '大学专科':
							$educationBox.html('大专');
							break;
						case '大学本科-一本':
						case '大学本科-二本':
						case '大学本科-三本':
						case '海外本科':
							$educationBox.html('本科');
							break;
						case '硕士研究生':
							$educationBox.html('硕士研究生');
							break;
						case '博士研究生':
							$educationBox.html('博士研究生');
							break;
						case '中专':
							$educationBox.html('中专');
							break;
						case '技校/职高':
							$educationBox.html('职高');
							break;
						case '高中':
							$educationBox.html('高中');
							break;
						default:
							$educationBox.html('其他');
							break;
					}

					var $degreeBox = $(ele).find('.dropdown-text').eq(1);
					switch (degree) {
						case '学士':
						case '双学士':
							$degreeBox.html('学士');
							break;
						case '硕士':
							$degreeBox.html('硕士');
							break;
						case '博士':
							$degreeBox.html('博士');
							break;
						case 'MBA':
							$degreeBox.html('MBA');
							break;
						default:
							$degreeBox.html('无学位');
							break;
					}
				}
			});
		});

		// 教育经历
		var certificate = new AutoWrite({
			from: $('.infoplcerti'),
			to: $('#credentialsInfo').find('.resume-box.clearfix')
		});

		certificate.textWrite(function() {
			var length = certificate.from.length;
			certificate.to.each(function(index, ele) {
				if (length < index + 1) {
					return false;
				} else {
					var name = certificate.from.eq(index).find('.mt_certificateName').html();
					var time = help.addZero(certificate.from.eq(index).find('.mt_getDate').html() + '-1', '/');

					$(ele).find('.input-text').eq(0).val(name);
					$(ele).find('.input-text').eq(1).val(time);
				}
			});
		});

		// 获奖经历
		var reward = new AutoWrite({
			from: $('.infoschaward'),
			to: $('#award').find('.resume-box.clearfix')
		});

		reward.textWrite(function() {
			var length = reward.from.length;
			reward.to.each(function(index, ele) {
				if (length < index + 1) {
					return false;
				} else {
					var name = reward.from.eq(index).find('.mt_awardsName').html();
					var level = reward.from.eq(index).find('.mt_awardsLevel').html();
					var time = help.addZero(reward.from.eq(index).find('.mt_awardsDate').html() + '-1', '/');


					$(ele).find('.input-text').eq(0).val(name + ' ' + level);
					$(ele).find('.input-text').eq(1).val(time);
				}
			});
		});

		// 个人评价
		var intro = new AutoWrite({
			from: $('#mt_selfIntro'),
			to: $('#selfEvaluation')
		});

		intro.textWrite();

	});
});