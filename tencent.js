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
					for (var i = 0; i < this.to.length; i++) {
						if (this.to.eq(i).val() == this.from.html()) {
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
			}
		});

		// 姓名
		var name = new AutoWrite({
			from: $('#mt_name'),
			to: $('input[name="info[name]"]')
		});
		name.textWrite();

		// 证件号码
		var license = new AutoWrite({
			from: $('#mt_id'),
			to: $('input[name="info[idcard]"]')
		});
		license.textWrite();

		// 证件类型
		var licenseSort = new AutoWrite({
			from: $('#mt_idtype'),
			to: $('#CertificateTypeID')
		});

		licenseSort.checkWrite(function() {
			var opts = licenseSort.to.get(0).options;
			var value = licenseSort.from.html();
			switch (value) {
				case '身份证':
					opts[0].selected = true;
					break;
				case '护照':
					opts[1].selected = true;
					break;
				case '香港永久居民身份证':
				case '澳门永久居民身份证':
					opts[3].selected = true;
					break;
				case '香港非永久居民身份证':
				case '澳门非永久居民身份证':
					opts[5].selected = true;
					break;
				case '台胞证':
					opts[4].selected = true;
					break;
				default:
					opts[2].selected = true;
			}
		});
		// 性别
		var sex = new AutoWrite({
			from: $('#mt_sex'),
			to: $('input[name="info[sex]"]')
		});
		sex.writeSex();

		// 出生年
		var birthYear = new AutoWrite({
			from: $('#mt_biryear'),
			to: $('#birthYear')
		});
		birthYear.selectWrite();
		// 出生月
		var birthMonth = new AutoWrite({
			from: $('#mt_birmonth'),
			to: $('#birthMonth')
		});
		birthMonth.selectWrite();
		// 出生日
		var birthDay = new AutoWrite({
			from: $('#mt_birday'),
			to: $('#birthDay')
		});
		birthDay.selectWrite();
		// 毕业时间年
		// 毕业时间月
		~ function() {
			var value = $('#mt_gradutetime').html();
			value = value.split('-');
			var valueYear = value[0];
			var valueMonth = value[1];

			var $graYear = $('select[name="info[g_year]"]');
			var $graMonth = $('select[name="info[g_month]"]');
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

		// 手机
		var phone = new AutoWrite({
			from: $('#mt_tel'),
			to: $('input[name="info[mobile]"]')
		});
		phone.textWrite();

		// 邮箱
		var email = new AutoWrite({
			from: $('#mt_email'),
			to: $('input[name="info[email]"]')
		});
		email.textWrite();

		// 紧急联系人
		var jjlxr = new AutoWrite({
			from: $('#mt_jjlxr'),
			to: $('input[name="info[lianxi_name]"]')
		});
		jjlxr.textWrite();

		// 紧急联系人联系方式
		var jjlxrtel = new AutoWrite({
			from: $('#mt_jjlxrtel'),
			to: $('input[name="info[lianxi_phone]"]')
		});
		jjlxrtel.textWrite();

		// 微信
		var weChat = new AutoWrite({
			from: $('#mt_wxname'),
			to: $('input[name="info[wechat]"]')
		});
		weChat.textWrite();

		// 英语等级
		var engRank = new AutoWrite({
			from: $('.infoEnglishSkill'),
			to: [$('select[name="info[eng_level]"]'), $('input[name="info[eng_score]"]')],
		});
		engRank.writeEngRank();

		// 其他英语等级
		var otEngRank = new AutoWrite({
			from: $('.infoOtEnglishSkill'),
			to: [$('select[name="info[other_language]"]'), $('input[name="info[other_language_score]"]')],
		});
		otEngRank.writeOtEngRank();

		// 教育经历
		var edu = new AutoWrite({
			from: $('.infopledu'),
			to: $('#myform').find('table')
		});

		edu.textWrite(function() {
			var length = edu.from.length;
			edu.to.each(function(index, ele) {
				if (length < index + 1) {
					return false;
				} else {
					var name = edu.from.eq(index).find('.mt_schoolName').html();
					var endTime = edu.from.eq(index).find('.mt_endYear').html();
					var department = edu.from.eq(index).find('.mt_academy').html(); // 院系
					var major = edu.from.eq(index).find('.mt_professional').html(); //专业
					var degree = edu.from.eq(index).find('.mt_education').html(); //学历
					var rank = edu.from.eq(index).find('.mt_professionalranking').html();

					$(ele).find('input[name="info[education_list][speciality][]"]').val(major);
					$(ele).find('input[name="info[education_list][department][]"]').val(department);
					$(ele).find('input[name="info[education_list][school][]"]').val(name);

					var opt1 = $(ele).find('select[name="info[education_list][edu_id][]"]').get(0).options;
					switch (degree) {
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
						default:
							break;
					}

					var opt2 = $(ele).find('select[name="info[education_list][school_rank][]"]').get(0).options;
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
						default:
							opt2[4].selected = true;
							break;
					}

					endTime = endTime.split('-');
					var valueYear = endTime[0];
					var valueMonth = endTime[1];

					var $graYear = $(ele).find('select[name="info[education_list][eduYear][]"]');
					var $graMonth = $(ele).find('select[name="info[education_list][eduMonth][]"]');
					if ($graYear.length > 0 && $graMonth.length > 0) {
						var opt1 = $graYear.get(0).options;
						var opt2 = $graMonth.get(0).options;
						for (var i = 0; i < opt1.length; i++) {
							if (opt1[i + 1].value == valueYear) {
								opt1[i + 1].selected = true;
								break;
							}
						}

						for (var i = 0; i < opt2.length; i++) {
							if (opt2[i + 1].value == valueMonth) {
								opt2[i + 1].selected = true;
								break;
							}
						}
					}
				}
			});
		});

		// 项目经历
		var isProject = new AutoWrite({
			from: $('.infoproject'),
			to: $('input[name="info[hasProject]"]')
		});

		isProject.isNot();

		var project = new AutoWrite({
			to: $('#project'),
			from: $('.infoproject'),
		});
		project.textWrite(function() {
			if (project.from.length > 0) {
				project.to.parent().removeClass('none');
				project.to.val("");
				project.from.each(function(index, ele) {
					var $name = $(ele).find('.mt_projectName');
					var $startTime = $(ele).find('.mt_prostarttime');
					var $endTime = $(ele).find('.mt_proendtime');
					var $position = $(ele).find('.mt_projectDuty');
					var $content = $(ele).find('.mt_projectRemark');

					project.to.val(project.to.val() + '项目名称：' + $name.html() + '／开始时间：' + $startTime.html() + '，结束时间：' + $endTime.html() + '／项目描述：' + $content.html() + '／职责：' + $position.html() + '\\n');
				});
			}
		});

		// 实习经历
		var isIntern = new AutoWrite({
			to: $('input[name="info[hasPractice]"]'),
			from: $('.infoparttimejobs'),
		});
		isIntern.isNot();

		var intern = new AutoWrite({
			to: $('#practice'),
			from: $('.infoparttimejobs'),
		});
		intern.textWrite(function() {
			if (intern.from.length > 0) {
				intern.to.parent().removeClass('none');
				intern.to.val("");
				intern.from.each(function(index, ele) {
					var $name = $(ele).find('.mt_companyName');
					var $startTime = $(ele).find('.mt_startDate');
					var $endTime = $(ele).find('.mt_endDate');
					var $position = $(ele).find('.mt_positionName');
					var $content = $(ele).find('.mt_workContent');

					intern.to.val(intern.to.val() + '工作单位：' + $name.html() + '／开始时间：' + $startTime.html() + '，结束时间：' + $endTime.html() + '／职位：' + $position.html() + '／工作内容：' + $content.children().html() + '\\n');
				});

			}
		});

		// 社团
		var isGroup = new AutoWrite({
			to: $('input[name="info[hasCadres]"]'),
			from: $('.infoschoolclub'),
		});
		isGroup.isNot();

		var group = new AutoWrite({
			to: $('#cadres'),
			from: $('.infoschoolclub'),
		});
		group.textWrite(function() {
			if (group.from.length > 0) {
				group.to.parent().removeClass('none');
				group.to.val("");
				group.from.each(function(index, ele) {
					var $name = $(ele).find('.mt_schClubName');
					var $startTime = $(ele).find('.mt_startDate');
					var $endTime = $(ele).find('.mt_endDate');
					var $position = $(ele).find('.mt_positionName');
					var $content = $(ele).find('.mt_workDes');

					group.to.val(group.to.val() + '社团名称：' + $name.html() + '／开始时间：' + $startTime.html() + '，结束时间：' + $endTime.html() + '／职位：' + $position.html() + '／工作职责：' + $content.html() + '\\n');
				});
			}
		});

		// 获奖经历
		var isReward = new AutoWrite({
			from: $('.infoschaward'),
			to: $('input[name="info[hasAwards]"]')
		});
		isReward.isNot();

		var reward = new AutoWrite({
			from: $('.infoschaward'),
			to: $('#awardsarea')
		});

		reward.textWrite(function() {
			if (reward.from.length > 0) {
				reward.to.parent().removeClass('none');
				reward.to.val("");
				reward.from.each(function(index, ele) {
					var name = $(ele).find('.mt_awardsName').html();
					var rewardTime = help.addZero($(ele).find('.mt_awardsDate').html() + '-1');
					var sort = $(ele).find('.mt_awardsType').html();
					var level = $(ele).find('.mt_awardsLevel').html();

					reward.to.val(reward.to.val() + rewardTime + ' ' + name + ' ' + level + '\\n');
				});
			}
		});
	});
});