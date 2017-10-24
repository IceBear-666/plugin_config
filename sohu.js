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
			selectWrite: function(callback) {
				if (this.from && this.to.length > 0) {
					var opt = this.to.get(0).options;
					for (var i = 0; i < opt.length; i++) {
						if ($(opt[i]).html() == help.addZero(this.from.html())) {
							opt[i].selected = true;
							// $(opt[i]).click();
							break;
						}
					}
					this.to.get(0).dispatchEvent(event);
				}
			},
			writeSex: function() {
				if (this.from && this.to.length > 0) {
					var value = this.from.html();
					if (value == '男') {
						value = '0/599/604';
					} else {
						value = '0/599/605';
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
					this.to.eq(0).click();
					this.to.eq(0).attr('checked', 'checked');
				} else {
					this.to.eq(0).click();
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
				if (target.length > 0) {
					var opt = target.get(0).options;
					for (var i = 0; i < opt.length; i++) {
						if ($(opt[i]).html() == value) {
							opt[i].selected = true;
							// opt[i].click();
							break;
						}
					}
					target.get(0).dispatchEvent(event);
				}
			},
			valueWrite: function(value) {
				if (this.from && this.to.length > 0) {
					this.to.val(value);
				}
			}
		});

		// 姓名
		var name = new AutoWrite({
			from: $('#mt_name'),
			to: $('input[name="11_2_1"]')
		});
		name.textWrite();
		// 性别
		var sex = new AutoWrite({
			from: $('#mt_sex'),
			to: $('input[name="11_20_1"]')
		});
		sex.writeSex();
		// 出生年月日
		var birthday = new AutoWrite({
			from: $('#mt_birth'),
			to: $('input[name="11_21_1"]')
		});
		birthday.valueWrite(help.addZero(birthday.from.html()));
		// 证件类型
		var licenseSort = new AutoWrite({
			from: $('#mt_idtype'),
			to: $('select[name="11_28_1"]')
		});
		licenseSort.idcardWrite();
		// 证件号码
		var license = new AutoWrite({
			from: $('#mt_id'),
			to: $('input[name="11_29_1"]')
		});
		license.textWrite();
		// 民族
		var nation = new AutoWrite({
			from: $('#mt_nation'),
			to: $('select[name="11_23_1"]')
		});
		nation.selectWrite();

		// 身高
		var height = new AutoWrite({
			from: $('#mt_height'),
			to: $('input[name="11_247_1"]')
		});
		height.valueWrite(height.from.html() + 'cm');
		// 体重
		var weight = new AutoWrite({
			from: $('#mt_weight'),
			to: $('input[name="11_995581656_1"]')
		});
		weight.valueWrite(weight.from.html() + 'kg');
		// 婚姻
		var marry = new AutoWrite({
			from: $('#mt_maritalstatus'),
			to: $('select[name="11_24_1"]')
		});
		marry.selectWrite();
		// 政治面貌
		var political = new AutoWrite({
			from: $('#mt_polistatus'),
			to: $('select[name="11_25_1"]')
		});
		political.textWrite(function() {
			var value = political.from.html();
			switch (value) {
				case '共青团员':
					value = '共青团员';
					break;
				case '中共党员':
				case '中共预备党员':
					value = '中国共产党党员';
					break;
				case '群众':
					value = '群众';
					break;
				case '无党派民主人士':
					value = '无党派民主人士';
					break;
				default:
					value = '其它党派'
					break;
			}
			political.selectValue(political.to, value);
		});
		// 目前所在省
		var province = new AutoWrite({
			from: $('#mt_livecity_pro'),
			to: $('select[name="firstLevl11_26_1"]')
		});

		province.textWrite(function() {
			var value = province.from.html();
			var opt = province.to.get(0).options;
			for (var i = 0; i < opt.length; i++) {
				if (opt[i].innerHTML.indexOf(value) != -1) {
					opt[i].selected = true;
					province.to.get(0).dispatchEvent(event);
					setTimeout(function() {
						// 目前所在市
						var city = new AutoWrite({
							from: $('#mt_livecity_city'),
							to: $('select[name="11_26_1"]')
						});

						city.textWrite(function() {
							var value = city.from.html();
							console.log(value);
							var opt = city.to.get(0).options;
							for (var i = 0; i < opt.length; i++) {
								if (opt[i].innerHTML.indexOf(value) != -1) {
									console.log(opt[i]);
									opt[i].selected = true;
									break;
								}
							}
						});
					}, 100);
					break;
				}
			}
		});

		// 户口所在地
		var identity = new AutoWrite({
			from: $('#mt_hukoucity'),
			to: $('select[name="11_27_1"]')
		});
		identity.selectWrite();

		// 手机
		var phone = new AutoWrite({
			from: $('#mt_tel'),
			to: $('input[name="11_36_1"]')
		});
		phone.textWrite();

		// 邮箱
		var email = new AutoWrite({
			from: $('#mt_email'),
			to: $('input[name="11_37_1"]')
		});
		email.textWrite();

		var degree = new AutoWrite({
			from: $('#mt_edu'),
			to: $('select[name="11_30_1"]')
		});
		degree.textWrite(function() {
			var value = degree.from.html();
			var opt1 = degree.to.get(0).options;
			switch (value) {
				case '大学专科':
					opt1[5].selected = true;
					break;
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
				case 'MBA':
					opt1[9].selected = true;
					break;
				case 'EMBA':
					opt1[10].selected = true;
					break;
				case 'MPA':
					opt1[11].selected = true;
					break;
				case '中专':
					opt1[4].selected = true;
					break;
				case '技校/职高':
					opt1[3].selected = true;
					break;
				case '高中':
					opt1[2].selected = true;
					break;
				case '初中':
					opt1[1].selected = true;
					break;
				default:
					opt1[12].selected = true;
					break;
			}
		});

		// 教育经历
		var edu = new AutoWrite({
			from: $('.infopledu'),
			to: $('#14_all_content').children('div')
		});

		edu.textWrite(function() {
			var length = edu.from.length;
			edu.to.each(function(index, ele) {
				if (length < index + 1) {
					return false;
				} else {
					var name = edu.from.eq(index).find('.mt_schoolName').html();
					console.log(name);
					console.log($(ele).find('tr').not('.tr_errorMsg').eq(2).find('input'));
					$(ele).find('tr').not('.tr_errorMsg').eq(2).find('input').val(name);

					var startTime = help.addZero(edu.from.eq(index).find('.mt_startYear').html());
					var endTime = help.addZero(edu.from.eq(index).find('.mt_endYear').html());
					$(ele).find('tr').not('.tr_errorMsg').eq(0).find('input').val(startTime);
					$(ele).find('tr').not('.tr_errorMsg').eq(1).find('input').val(endTime);

					// var major = edu.from.eq(index).find('.mt_professional').html(); //专业
					var education = edu.from.eq(index).find('.mt_education').html(); //学历
					var rank = edu.from.eq(index).find('.mt_professionalranking').html();
					$(ele).find('tr').not('.tr_errorMsg').eq(6).find('input').val(rank);

					var gpa = edu.from.eq(index).find('.mt_gpascore').html();
					$(ele).find('tr').not('.tr_errorMsg').eq(8).find('input').val(gpa);

					var majorSub = edu.from.eq(index).find('.mt_major').html();
					$(ele).find('tr').not('.tr_errorMsg').eq(9).find('textarea').val(majorSub);

					var prove = edu.from.eq(index).find('.mt_tutorname').html();
					var proveTel = edu.from.eq(index).find('.mt_tutorphone').html();
					if (prove && proveTel) {
						$(ele).find('tr').not('.tr_errorMsg').eq(10).find('input').val(prove + '/' + proveTel);
					}
					// $(ele).find('tr').not('.tr_errorMsg').eq(3).find('.input1').val(major);

					var opt = $(ele).find('tr').not('.tr_errorMsg').eq(4).find('select');
					if (opt.length > 0) {
						var opt1 = opt.get(0).options;
						switch (education) {
							case '大学专科':
								opt1[5].selected = true;
								break;
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
							case 'MBA':
								opt1[9].selected = true;
								break;
							case 'EMBA':
								opt1[10].selected = true;
								break;
							case 'MPA':
								opt1[11].selected = true;
								break;
							case '中专':
								opt1[4].selected = true;
								break;
							case '技校/职高':
								opt1[3].selected = true;
								break;
							case '高中':
								opt1[2].selected = true;
								break;
							case '初中':
								opt1[1].selected = true;
								break;
							default:
								opt1[12].selected = true;
								break;
						}
					}
					var degree = edu.from.eq(index).find('.mt_degree').html();
					edu.selectValue($(ele).find('tr').not('.tr_errorMsg').eq(5).find('select'), degree);
				}
			});
		});
		// 自我评价
		var intro = new AutoWrite({
			from: $('#mt_selfIntro'),
			to: $('textarea[name="12_42_1"]')
		});
		intro.textWrite();

		// 英语等级
		var engRank = new AutoWrite({
			from: $('.infoEnglishSkill'),
			to: $('#16_63_1')
		});
		engRank.textWrite(function() {
			var value = '';
			var arr = [];
			engRank.from.each(function(index, ele) {
				arr.push($(ele).find('.mt_skillEngLevel').html());
			});
			if (arr.indexOf('专业八级') != -1) {
				value = '大学生英语专业八级考试';
			} else if (arr.indexOf('专业四级') != -1) {
				value = '大学生英语专业四级考试';
			} else if (arr.indexOf('大学英语六级') != -1) {
				value = '大学英语六级考试';
			} else if (arr.indexOf('大学英语四级') != -1) {
				value = '大学英语四级考试';
			} else {
				value = 0;
			}
			engRank.selectValue(engRank.to, value);
		});

		~ function() {
			var $from = $('.infoOtEnglishSkill');
			$from.each(function(index, ele) {
				if ($(ele).find('.mt_otherSkillEngLevel').html() == '托福') {
					$('#16_995797108_1').val($(ele).find('.mt_otherSkillEngSorce').html());
				}
				if ($(ele).find('.mt_otherSkillEngLevel').html() == 'GRE') {
					$('#16_995797111_1').val($(ele).find('.mt_otherSkillEngSorce').html());
				}
				if ($(ele).find('.mt_otherSkillEngLevel').html() == 'GMAT') {
					$('#16_995797115_1').val($(ele).find('.mt_otherSkillEngSorce').html());
				}
				if ($(ele).find('.mt_otherSkillEngLevel').html() == '雅思') {
					$('#16_995797118_1').val($(ele).find('.mt_otherSkillEngSorce').html());
				}
				if ($(ele).find('.mt_otherSkillEngLevel').html() == '托业') {
					$('#16_995797121_1').val($(ele).find('.mt_otherSkillEngSorce').html());
				}
			});
		}()
		// 工作经验
		var works = new AutoWrite({
			from: [$('.infoparttimejobs'), $('.infofulltimejobs')],
			to: $('#19_all_content').children('div')
		});

		works.textWrite(function() {
			var arr = [];
			var value = 0;
			var infoptJobLength = works.from[0].length;
			var infoFullJobLength = works.from[1].length;

			arr.push(works.to.children('div').eq(0));
			$('#19_0_append').children().each(function(index, ele) {
				arr.push($(ele));
			});

			for (var i = 0; i < arr.length; i++) {
				if (i < infoFullJobLength) {
					$(arr[i]).find('tr').not('.tr_errorMsg').eq(3).find('select').get(0).options[1].selected = true;

					var name = works.from[1].eq(i).find('.mt_companyName').html();
					var startTime = help.addZero(works.from[1].eq(i).find('.mt_startDate').html());
					var endTime = help.addZero(works.from[1].eq(i).find('.mt_endDate').html());
					var position = works.from[1].eq(i).find('.mt_positionName').html();
					var content = works.from[1].eq(i).find('.mt_workContent').children().html();
					var num = works.from[1].eq(i).find('.mt_companySize').html();
					var department = works.from[1].eq(i).find('.mt_department').html();
					var prove = works.from[1].eq(i).find('.mt_reterenceName').html();
					var proveTel = works.from[1].eq(i).find('.mt_reterence_phone').html();

					$(arr[i]).find('tr').not('.tr_errorMsg').eq(0).find('input').val(startTime);
					$(arr[i]).find('tr').not('.tr_errorMsg').eq(1).find('input').val(endTime);

					$(arr[i]).find('tr').not('.tr_errorMsg').eq(2).find('input').val(name);
					$(arr[i]).find('tr').not('.tr_errorMsg').eq(4).find('input').val(num);
					$(arr[i]).find('tr').not('.tr_errorMsg').eq(5).find('input').val(department);
					$(arr[i]).find('tr').not('.tr_errorMsg').eq(6).find('input').val(position);
					$(arr[i]).find('tr').not('.tr_errorMsg').eq(7).find('textarea').val(content);
					if (prove && proveTel) {
						$(arr[i]).find('tr').not('.tr_errorMsg').eq(8).find('input').val(prove + '/' + proveTel);
					}
				} else if (i < infoptJobLength + infoFullJobLength) {
					$(arr[i]).find('tr').not('.tr_errorMsg').eq(3).find('select').get(0).options[3].selected = true;

					var name = works.from[0].eq(value).find('.mt_companyName').html();
					var startTime = help.addZero(works.from[0].eq(value).find('.mt_startDate').html());
					var endTime = help.addZero(works.from[0].eq(value).find('.mt_endDate').html());
					var position = works.from[0].eq(value).find('.mt_positionName').html();
					var content = works.from[0].eq(value).find('.mt_workContent').children().html();
					var num = works.from[0].eq(value).find('.mt_companySize').html();
					var department = works.from[0].eq(value).find('.mt_department').html();
					var prove = works.from[0].eq(value).find('.mt_reterenceName').html();
					var proveTel = works.from[0].eq(value).find('.mt_reterence_phone').html();

					$(arr[i]).find('tr').not('.tr_errorMsg').eq(0).find('input').val(startTime);
					$(arr[i]).find('tr').not('.tr_errorMsg').eq(1).find('input').val(endTime);

					$(arr[i]).find('tr').not('.tr_errorMsg').eq(2).find('input').val(name);
					$(arr[i]).find('tr').not('.tr_errorMsg').eq(4).find('input').val(num);
					$(arr[i]).find('tr').not('.tr_errorMsg').eq(5).find('input').val(department);
					$(arr[i]).find('tr').not('.tr_errorMsg').eq(6).find('input').val(position);
					$(arr[i]).find('tr').not('.tr_errorMsg').eq(7).find('textarea').val(content);
					if (prove && proveTel) {
						$(arr[i]).find('tr').not('.tr_errorMsg').eq(8).find('input').val(prove + '/' + proveTel);
					}

					value++;
				} else {
					return false;
				}
			}
		});
		// 项目经验
		var project = new AutoWrite({
			from: $('.infoproject'),
			to: $('#40_all_content')
		});
		project.textWrite(function() {
			var arr = [];
			arr.push(project.to.children('div').eq(0));
			$('#40_0_append').children().each(function(index, ele) {
				arr.push($(ele));
			});

			var length = project.from.length;
			for (var i = 0; i < arr.length; i++) {
				if (length < i + 1) {
					return false;
				} else {
					var startTime = help.addZero(project.from.eq(i).find('.mt_prostarttime').html());
					var endTime = help.addZero(project.from.eq(i).find('.mt_proendtime').html());
					var name = project.from.eq(i).find('.mt_projectName').html();
					var content = project.from.eq(i).find('.mt_projectRemark').html();
					var prove = project.from.eq(i).find('.mt_reterenceName').html();
					var proveTel = project.from.eq(i).find('.mt_reterencePhone').html();
					$(arr[i]).find('tr').not('.tr_errorMsg').eq(0).find('input').val(startTime);
					$(arr[i]).find('tr').not('.tr_errorMsg').eq(1).find('input').val(endTime);
					$(arr[i]).find('tr').not('.tr_errorMsg').eq(2).find('input').val(name);
					$(arr[i]).find('tr').not('.tr_errorMsg').eq(3).find('textarea').val(content);
					if (prove && proveTel) {
						$(arr[i]).find('tr').not('.tr_errorMsg').eq(4).find('input').val(prove + '/' + proveTel);
					}
				}
			}
		});

		// 社团
		var group = new AutoWrite({
			from: $('.infoschoolclub'),
			to: $('#20_all_content')
		});
		group.textWrite(function() {
			var arr = [];
			arr.push(group.to.children('div').eq(0));
			$('#20_0_append').children().each(function(index, ele) {
				arr.push($(ele));
			});
			var length = group.from.length;
			for (var i = 0; i < arr.length; i++) {
				if (length < i + 1) {
					return false;
				} else {
					var name = group.from.eq(i).find('.mt_schClubName').html();
					var position = group.from.eq(i).find('.mt_positionName').html();
					$(arr[i]).find('tr').not('.tr_errorMsg').eq(0).find('input').val(name + ':' + position);
				}
			}
		});

		// 其他奖励
		var reward = new AutoWrite({
			from: $('.infoschaward'),
			to: $('#20_all_content').children('div').eq(0)
		});
		reward.textWrite(function() {
			reward.to.find('tr').not('.tr_errorMsg').eq(4).find('textarea').val('');
			reward.from.each(function(index, ele) {
				var name = $(ele).find('.mt_awardsName').html();
				var level = $(ele).find('.mt_awardsType').html();
				var rank = $(ele).find('.mt_awardsLevel').html();
				var time = $(ele).find('.mt_awardsDate').html();

				reward.to.find('tr').not('.tr_errorMsg').eq(4).find('textarea').val(reward.to.find('tr').not('.tr_errorMsg').eq(4).find('textarea').val() + time + '  ' + name + '  ' + level + '  ' + rank + '\\n');
			});
		});
	});
});