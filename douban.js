$(function() {
	$('.quick-write').click(function() {
		if ($('#jm_qiuck_cover')) {
			$('#jm_qiuck_cover').fadeIn();
			setTimeout(function() {
				$('#jm_qiuck_cover').fadeOut()
			}, 3000);
		};
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
					if (this.from && this.to) {
						callback();
					}
				} else {
					if (this.from && this.to) {
						this.to.val(this.from.html());
					}
				}
			},
			valueWrite: function(value) {
				if (this.from.length > 0 && this.to.length > 0) {
					this.to.val(value);
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
			to: $('input[name=\"name\"]')
		});
		name.textWrite();

		// 性别
		var sex = new AutoWrite({
			from: $('#mt_sex'),
			to: $('input[name=\"gender\"]')
		});
		sex.checkWrite(function() {
			if (sex.from.html() === '男') {
				sex.to.eq(0).attr('checked', 'checked');
			} else {
				sex.to.eq(1).attr('checked', 'checked');
			}
		});
		// 出生年月日
		var birthday = new AutoWrite({
			from: $('#mt_birth'),
			to: $('input[name=\"birthday\"]')
		});

		birthday.textWrite();

		// 籍贯
		var nativeplace = new AutoWrite({
			from: $('#mt_nativeplace'),
			to: $('input[name=\"city\"]')
		});
		nativeplace.textWrite();

		// 邮箱
		var email = new AutoWrite({
			from: $('#mt_email'),
			to: $('input[name=\"email\"]')
		});
		email.textWrite();

		// 手机
		var phone = new AutoWrite({
			from: $('#mt_tel'),
			to: $('input[name=\"phone\"]')
		});
		phone.textWrite();

		// 微信
		var weChat = new AutoWrite({
			from: $('#mt_wxname'),
			to: $('input[name=\"weixin\"]')
		});
		weChat.textWrite();

		// 紧急联系人
		var jjlxr = new AutoWrite({
			from: $('#mt_jjlxr'),
			to: $('input[name=\"urgent_contact\"]')
		});
		jjlxr.textWrite();

		// 紧急联系人联系方式
		var jjlxrtel = new AutoWrite({
			from: $('#mt_jjlxrtel'),
			to: $('input[name=\"urgent_contact_number\"]')
		});
		jjlxrtel.textWrite();

		// 专业
		var major = new AutoWrite({
			from: $('.mt_professional'),
			to: $('input[name=\"major\"]')
		});
		major.textWrite();

		// 证件号码
		var license = new AutoWrite({
			from: $('#mt_id'),
			to: $('input[name=\"license_number\"]')
		});
		license.textWrite();

		// 入学时间
		var enrol_date = new AutoWrite({
			from: $('.infopledu').find('.mt_startYear'),
			to: $('input[name=\"enrol_date\"]')
		});
		enrol_date.valueWrite(help.addZero(enrol_date.from.html() + '-1'));

		// 毕业时间
		var graduation_date = new AutoWrite({
			from: $('.infopledu').find('.mt_endYear'),
			to: $('input[name=\"graduation_date\"]')
		});
		graduation_date.valueWrite(help.addZero(graduation_date.from.html() + '-1'));

		// 学校省份
		// 学校名称
		var college = new AutoWrite({
			from: $('.mt_schoolName'),
			to: $('select[name=\"college\"]')
		});
		college.checkWrite(function() {
			var opt = college.to.get(0).options;
			for (var i = 0; i < opt.length; i++) {
				if (opt[i].innerHTML == college.from.html()) {
					opt[i].selected = true;
					break;
				}
			}
		});

		// 学历
		var diploma = new AutoWrite({
			from: $('.mt_education'),
			to: $('select[name=\"diploma\"]')
		});
		diploma.checkWrite(function() {
			var opt = diploma.to.get(0).options;
			var value = diploma.from.html();
			switch (value) {
				case '大学本科-一本':
				case '大学本科-二本':
				case '大学本科-三本':
				case '海外本科':
					opt[5].selected = true;
					break;
				case '硕士研究生':
					opt[6].selected = true;
					break;
				case '博士研究生':
					opt[7].selected = true;
					break;
				case '大学专科':
					opt[4].selected = true;
					break;
				default:
					opt[8].selected = true;
					break;
			}
		});
		// 学位
		var degree = new AutoWrite({
			from: $('.mt_degree'),
			to: $('select[name=\"degree\"]')
		});
		degree.checkWrite(function() {
			var opt = degree.to.get(0).options;
			var value = degree.from.html();
			switch (value) {
				case '学士':
					opt[1].selected = true;
					break;
				case '双学士':
					opt[2].selected = true;
					break;
				case '硕士':
					opt[3].selected = true;
					break;
				case '博士':
					opt[6].selected = true;
					break;
				case 'MBA':
					opt[4].selected = true;
					break;
				default:
					opt[7].selected = true;
					break;
			}
		});

		// 实习经历
		var intern = new AutoWrite({
			to: $('.items').eq(0).find('.item'),
			from: $('.infoparttimejobs'),
		});
		intern.textWrite(function() {
			var length = intern.from.length;
			intern.to.each(function(index, ele) {
				if (index < length) {
					var $name = intern.from.eq(index).find('.mt_companyName');
					var startTime = help.addZero(intern.from.eq(index).find('.mt_startDate').html() + '-1');
					var endTime = help.addZero(intern.from.eq(index).find('.mt_endDate').html() + '-1');
					var $position = intern.from.eq(index).find('.mt_positionName');
					var $content = intern.from.eq(index).find('.mt_workContent');

					$(ele).find('.exp-time.textinput.textInput').eq(0).val(startTime).addClass('hasDatepicker');
					$(ele).find('.exp-time.textinput.textInput').eq(1).val(endTime).addClass('hasDatepicker');
					$(ele).find('textarea').val('工作单位：' + $name.html() + '，开始时间：' + startTime + '，结束时间：' + endTime + '，职位：' + $position.html() + '，工作内容：' + $content.children().html());
				} else {
					return false;
				}
			});
		});

		// 项目／社团经历
		var group = new AutoWrite({
			from: [$('.infoproject'), $('.infoschoolclub')],
			to: $('.experience').eq(1).children('.items').children('.item')
		});

		group.textWrite(function() {
			var value = 0;
			var infoprojectLength = group.from[0].length;
			var infoschoolclubLength = group.from[1].length;
			group.to.each(function(index, ele) {
				if (index < infoprojectLength) {
					var $name = group.from[0].eq(index).find('.mt_projectName');
					var startTime = help.addZero(group.from[0].eq(index).find('.mt_prostarttime').html() + '-1');
					var endTime = help.addZero(group.from[0].eq(index).find('.mt_proendtime').html() + '-1');
					var $position = group.from[0].eq(index).find('.mt_projectDuty');
					var $content = group.from[0].eq(index).find('.mt_projectRemark');

					$(ele).find('.exp-time.textinput.textInput').eq(0).val(startTime).addClass('hasDatepicker');
					$(ele).find('.exp-time.textinput.textInput').eq(1).val(endTime).addClass('hasDatepicker');
					$(ele).find('textarea').val('项目名称：' + $name.html() + '，开始时间：' + startTime + '，结束时间：' + endTime + '，项目描述：' + $content.html() + '，职责：' + $position.html());
				} else if (index < infoprojectLength + infoschoolclubLength) {
					var $name = group.from[1].eq(value).find('.mt_schClubName');
					var startTime = help.addZero(group.from[1].eq(value).find('.mt_startDate').html() + '-1');
					var endTime = help.addZero(group.from[1].eq(value).find('.mt_endDate').html() + '-1');
					var $position = group.from[1].eq(value).find('.mt_positionName');
					var $content = group.from[1].eq(value).find('.mt_workDes');

					$(ele).find('.exp-time.textinput.textInput').eq(0).val(startTime).addClass('hasDatepicker');
					$(ele).find('.exp-time.textinput.textInput').eq(1).val(endTime).addClass('hasDatepicker');
					$(ele).find('textarea').val('社团名称：' + $name.html() + '，开始时间：' + startTime + '，结束时间：' + endTime + '，职位：' + $position.html() + '，工作职责：' + $content.html());
					value++;
				} else {
					return false;
				}
			});
		});

		// 自我介绍
		var intro = new AutoWrite({
			from: $('#mt_selfIntro'),
			to: $('textarea[name=\"self_introduction\"]')
		});
		intro.textWrite();
	});
});