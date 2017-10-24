$(function() {
	$('.quick-write').click(function() {
		if ($('#jm_qiuck_cover')) {
			$('#jm_qiuck_cover').fadeIn();
			setTimeout(function() {
				$('#jm_qiuck_cover').fadeOut()
			}, 3000);
		}
		var event = document.createEvent('HTMLEvents');
		event.initEvent('change', true, false);

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
						value = 'M';
					} else {
						value = 'F';
					}
					for (var i = 0; i < this.to.length; i++) {
						if (this.to.eq(i).val() == value) {
							this.to.eq(i).attr('checked', 'checked');
							break;
						}
					}
				}
			},
			marryWrite: function() {
				if (this.from && this.to.length > 0) {
					var value = this.from.html();
					if (value == '未婚') {
						value = 'S';
					} else if (value == '已婚') {
						value = 'M';
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
					var opts = this.to;
					var value = this.from.html();
					switch (value) {
						case '身份证':
						case '香港永久居民身份证':
						case '澳门永久居民身份证':
						case '香港非永久居民身份证':
						case '澳门非永久居民身份证':
							$('#indentifiedType_ddl').css({
								'display': 'block'
							}).find('.jalor-selector-body').find('.list-item').eq(0).click();
							break;
						case '护照':
							$('#indentifiedType_ddl').css({
								'display': 'block'
							}).find('.jalor-selector-body').find('.list-item').eq(1).click();
							break;
						default:
							break;
					}
					opts.get(0).dispatchEvent(event);
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
			hwWorkWirte: function() {
				if (this.from && this.to.length > 0) {
					var startTime = this.from.find('.mt_startDate').html().split('-');
					var endTime = this.from.find('.mt_endDate').html().split('-');

					var startTimeY = startTime[0];
					var startTimeM = startTime[1];
					var endTimeY = endTime[0];
					var endTimeM = endTime[1];
					this.timeWrite($('#sdyear_ddl'), startTimeY);
					this.timeWrite($('#sdmonth_ddl'), startTimeM);
					this.timeWrite($('#edyear_ddl'), endTimeY);
					this.timeWrite($('#edmonth_ddl'), endTimeM);


					var name = this.from.find('.mt_companyName').html();
					var department = this.from.find('.mt_department').html();
					this.to.find('#jobDept').val(department);
					this.to.find('input[name="employerName"]').val(name);

					var content = this.from.find('.mt_workContent').children().html();
					this.to.find('#achievement').val(content);

					var position = this.from.find('.mt_positionName').html();
					this.to.find('#jobName').val(position);

					var proveName = this.from.find('.mt_reterenceName').html();
					this.to.find('input[name="recommend"]').val(proveName);

					var proveTel = this.from.find('.mt_reterence_phone').html();
					this.to.find('input[name="recommendPhone"]').val(proveTel);

				}
			},
			hwSelectWrite: function() {
				if (this.from && this.to.length > 0) {
					var value = this.from.html();

					this.to.css({
						'display': 'block'
					}).find('.list-item').each(function(index, ele) {
						var hwValue = $(ele).attr('val');
						if (hwValue == value) {
							$(ele).click();
							return false;
						}
					});
				}
			},
			timeWrite: function(hwObj, value) {
				hwObj.css({
					'display': 'block'
				}).find('.list-item').each(function(index, ele) {
					var hwValue = $(ele).attr('val');
					if (hwValue == value) {
						$(ele).click();
						return false;
					}
				});
			}
		});

		function hwWordWrite(hwObj, value) {
			hwObj.css({
				'display': 'block'
			}).find('.list-text').each(function(index, ele) {
				var hwValue = $(ele).html();
				if (hwValue == value) {
					$(ele).click();
					return false;
				}
			});
		}

		// 成绩
		var grade = new AutoWrite({
			from: $('.infopledu').find('.mt_professionalranking'),
			to: $('#dropdown_1_ddl')
		});
		grade.textWrite(function() {
			var value = grade.from.html();
			switch (value) {
				case '前5%':
				case '前10%':
					value = 'TOP10';
					break;
				case '前20%':
				case '前30%':
					value = 'TOP30';
					break;
				case '前40%':
				case '前50%':
					value = 'TOP50';
					break;
				default:
					value = 'Other';
					break;
			}
			grade.timeWrite(grade.to, value);
		});
		// 国家
		~ function() {
			$('#dropdown_0_ddl').css({
				'display': 'block'
			}).find('.list-text').eq(0).click();
		}()
		// 邮箱
		var email = new AutoWrite({
			from: $('#mt_email'),
			to: $('input[name="email"]')
		});
		email.textWrite();
		// 姓名
		var name = new AutoWrite({
			from: $('#mt_name'),
			to: $('input[name="name"]')
		});
		name.textWrite();
		// 性别
		var sex = new AutoWrite({
			from: $('#mt_sex'),
			to: $('input[name="title"]')
		});
		sex.writeSex();
		// 证件类型
		var licenseSort = new AutoWrite({
			from: $('#mt_idtype'),
			to: $('input[name="indentifiedType"]')
		});
		licenseSort.idcardWrite();
		// 证件号码
		var license = new AutoWrite({
			from: $('#mt_id'),
			to: $('input[name="indentifiedId"]')
		});
		license.textWrite();
		// 出生年
		var birthYear = new AutoWrite({
			from: $('#mt_biryear'),
			to: $('#byear_ddl')
		});
		birthYear.hwSelectWrite();
		// 出生月
		var birthMonth = new AutoWrite({
			from: $('#mt_birmonth'),
			to: $('#bmonth_ddl')
		});
		birthMonth.hwSelectWrite();
		// 出生日
		var birthDay = new AutoWrite({
			from: $('#mt_birday'),
			to: $('#bday_ddl')
		});
		birthDay.hwSelectWrite();
		// 婚姻
		var marry = new AutoWrite({
			from: $('#mt_maritalstatus'),
			to: $('input[name="maritalStatus"]')
		});
		marry.marryWrite();
		// 手机
		var phone = new AutoWrite({
			from: $('#mt_tel'),
			to: $('input[name="mobilePhone"]')
		});
		phone.textWrite();
		// 个人成就
		var achieve = new AutoWrite({
			from: $('#achievement'),
			to: $('textarea[name="effort"]')
		});
		achieve.textWrite();
		// 教育经历
		var edu = new AutoWrite({
			from: $('.infopledu').eq(0),
			to: $('#resumewlForm')
		});

		edu.textWrite(function() {
			// 时间
			var startTimeY = edu.from.find('.mt_startYearY').html();
			var startTimeM = edu.from.find('.mt_startYearM').html();
			var endTimeY = edu.from.find('.mt_endYearY').html();
			var endTimeM = edu.from.find('.mt_endYearM').html();

			edu.timeWrite($('#esdyear_ddl'), startTimeY);
			edu.timeWrite($('#esdmonth_ddl'), startTimeM);
			edu.timeWrite($('#eedyear_ddl'), endTimeY);
			edu.timeWrite($('#eedmonth_ddl'), endTimeM);

			// 默认选中国
			edu.to.find('#countryOfSchool').siblings('.jalor-dropdown-btn').click();
			setTimeout(function() {
				$('#countryOfSchool_ddl').find('.list-text').eq(0).click();
				var name = edu.from.find('.mt_schoolName').html();
				edu.to.find('input[name="establishmentId"]').val(name);

				var department = edu.from.find('.mt_academy').html(); // 院系
				var major = edu.from.find('.mt_professional').html(); //专业
				var education = edu.from.find('.mt_education').html(); //学历
				var degree = edu.from.find('.mt_degree').html(); //学位
				var teachName = edu.from.find('.mt_tutorname').html();

				edu.to.find('input[name="teacherName"]').val(teachName);


				edu.to.find('#qualification').siblings('.jalor-dropdown-btn').click();
				edu.to.find('#degree').siblings('.jalor-dropdown-btn').click();

				setTimeout(function() {
					var $opt1 = $('#qualification_ddl');
					switch (education) {
						case '大学专科':
							hwWordWrite($opt1, '大专');
							break;
						case '大学本科-一本':
						case '大学本科-二本':
						case '大学本科-三本':
						case '海外本科':
							hwWordWrite($opt1, '本科');
							break;
						case '硕士研究生':
							hwWordWrite($opt1, '硕士研究生');
							break;
						case '博士研究生':
							hwWordWrite($opt1, '博士研究生');
							break;
						case '中专':
							hwWordWrite($opt1, '中专');
							break;
						default:
							hwWordWrite($opt1, '其他');
							break;
					}

					var $degreeBox = $('#degree_ddl');
					switch (degree) {
						case '学士':
							hwWordWrite($degreeBox, '学士');
							break;
						case '双学士':
							hwWordWrite($degreeBox, '双学士');
							break;
						case '硕士':
							hwWordWrite($degreeBox, '硕士');
							break;
						case '博士':
							hwWordWrite($degreeBox, '博士');
							break;
						default:
							hwWordWrite($degreeBox, '无学位');
							break;
					}
					// edu.to.find('input[name="graduationCourtyardId"]').siblings(".jalor-dropdown-btn").click();
					// edu.to.find('input[name="firstMajorId"]').siblings(".jalor-dropdown-btn").click();
					// edu.to.find('input[name="graduationCourtyardId"]').click().val(department);
					// edu.to.find('input[name="firstMajorId"]').click().val(major);
				}, 100);
			}, 100);
		});

		var eng = new AutoWrite({
			from: $('.infoEnglishSkill'),
			to: $('.languagediv')
		});

		eng.textWrite(function() {
			// 默认选英语
			$('#languageName_ddl').css({
				'display': 'block'
			}).find('.list-item').eq(17).click();

			var name = eng.from.find('.mt_skillEngLevel').html();
			var score = eng.from.find('.mt_skillEngSorce').html();

			eng.to.find('#certificat').val(name);
			eng.to.find('#grade').val(score);

		});
		// 实习
		var works = new AutoWrite({
			from: $('.infoparttimejobs'),
			to: $('#workdiv').find('.regTb')
		});
		works.hwWorkWirte();
	});
});