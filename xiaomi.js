$(function() {
	$('.quick-write').click(function() {
		function b(b) {
			a.extend(this, b)
		}
		var a, c, d, e, f, g, h, i, j, k, l, m, n, o, p;
		$('#jm_qiuck_cover') && ($('#jm_qiuck_cover').fadeIn(), setTimeout(function() {
			$('#jm_qiuck_cover').fadeOut()
		},
		3e3));
		function formatDate(value,length,type) {
			if(type == undefined){
				type = '-';
			}
		    if(length == undefined || length == 3){
		        let newDate = value.split('-');
		        for (let i = 0; i < newDate.length; i++) {
		            if (parseInt(newDate[i]) < 10) {
		                newDate[i] = '0' + newDate[i]
		            }
		        }
		        return newDate.join(type)
		    }
	        if(length == 2){
	            let newDate = value.split('-');
	            for (let i = 0; i < newDate.length; i++) {
	                if (parseInt(newDate[i]) < 10) {
	                    newDate[i] = '0' + newDate[i]
	                }
	            }
	            newDate = newDate.slice(0,2);
	            return newDate.join(type)
	        }
	    }
		//工作经历
		if($('#workExperience')){
			let length = $('#exp-list .infopl').length;
			for(let i=length-1; i>=0; i--){
				if($('input[name=\"workTimeBegin[' + i + ']\"]') && $('#exp-list .mt_startDate').eq(i).html()){
					$('input[name=\"workTimeBegin[' + i + ']\"]').val(formatDate($('#exp-list .mt_startDate').eq(i).html(),3,'/'));
				}
				if($('input[name=\"workTimeEnd[' + i + ']\"]') && $('#exp-list .mt_endDate').eq(i).html()){
					$('input[name=\"workTimeEnd[' + i + ']\"]').val(formatDate($('#exp-list .mt_endDate').eq(i).html(),3,'/'));
				}
				if($('input[name=\"workCompany[' + i + ']\"]') && $('#exp-list .mt_companyName').eq(i).html()){
					$('input[name=\"workCompany[' + i + ']\"]').val($('#exp-list .mt_companyName').eq(i).html());
				}
				if($('input[name=\"workPosition[' + i + ']\"]') && $('#exp-list .mt_positionName').eq(i).html()){
					$('input[name=\"workPosition[' + i + ']\"]').val($('#exp-list .mt_positionName').eq(i).html());
				}
				if($('textarea[name=\"jobContent[' + i + ']\"]') && $('#exp-list .workDes').eq(i).html()){
					$('textarea[name=\"jobContent[' + i + ']\"]').val($('#exp-list .workDes').eq(i).html());
				}
			}
		}
		a = {
			extend: function(a, b) {
				for (var c in b)'undefined' == typeof a[c] && (a[c] = b[c]);
				return a
			},
			addZero: function(a, b) {
				a = a.split('-');
				for (var c = 0; c < a.length; c++) a[c] < 10 && a[c].length < 2 && (a[c] = '0' + a[c]);
				return a.join(b)
			}
		},
		a.extend(b.prototype, {
			textWrite: function(a) {
				a ? this.from && this.to.length > 0 && a() : this.from && this.to.length > 0 && this.to.val(this.from.html())
			},
			checkWrite: function(a) {
				this.from && this.to.length > 0 && a()
			},
			selectWrite: function() {
				var b, c;
				if (this.from && this.to.length > 0) for (b = this.to.get(0).options, c = 0; c < b.length; c++) if (b[c].value == a.addZero(this.from.html())) {
					b[c].selected = !0;
					break
				}
			},
			writeSex: function() {
				var a, b;
				if (this.from && this.to.length > 0) for (a = this.from.html(), a = '男' == a ? 'M': 'F', b = 0; b < this.to.length; b++) if (this.to.eq(b).val() == a) {
					'M' == a ? this.to.eq(b).attr('checked', 'checked').parent().addClass('label-on').next().removeClass('label-on') : this.to.eq(b).attr('checked', 'checked').parent().addClass('label-on').prev().removeClass('label-on');
					break
				}
			},
			writeEngRank: function() {
				var a, b;
				this.from && this.to.length > 0 && this.to[0].length > 0 && (a = this, b = this.to[0].get(0).options, this.from.each(function(c, d) {
					var e = $(d).find('.mt_skillEngLevel').html(),
					f = $(d).find('.mt_skillEngSorce').html();
					return '专业八级' == e ? (b[4].selected = !0, $(a.to[1]).val(f), !1) : '专业四级' == e ? (b[3].selected = !0, $(a.to[1]).val(f), !1) : '大学英语六级' == e ? (b[2].selected = !0, $(a.to[1]).val(f), !1) : '大学英语四级' == e ? (b[1].selected = !0, $(a.to[1]).val(f), !1) : void 0
				}))
			},
			writeOtEngRank: function() {
				var a, b;
				this.from && this.to.length > 0 && this.to[0].length > 0 && (a = this, b = this.to[0].get(0).options, this.from.each(function(c, d) {
					var e = $(d).find('.mt_otherSkillEngLevel').html(),
					f = $(d).find('.mt_otherSkillEngSorce').html();
					return '雅思' == e ? (b[4].selected = !0, $(a.to[1]).val(f), !1) : 'GMAT' == e ? (b[3].selected = !0, $(a.to[1]).val(f), !1) : 'GRE' == e ? (b[2].selected = !0, $(a.to[1]).val(f), !1) : '托福' == e ? (b[1].selected = !0, $(a.to[1]).val(f), !1) : void 0
				}))
			},
			isNot: function() {
				this.from.length > 0 ? this.to.eq(0).attr('checked', 'checked') : this.to.eq(1).attr('checked', 'checked')
			},
			idcardWrite: function() {
				var a, b;
				if (this.from && this.to.length > 0) switch (a = this.to.get(0).options, b = this.from.html()) {
				case '身份证':
					a[1].selected = !0;
					break;
				case '护照':
					a[3].selected = !0;
					break;
				case '香港永久居民身份证':
				case '澳门永久居民身份证':
				case '香港非永久居民身份证':
				case '澳门非永久居民身份证':
					a[2].selected = !0;
					break;
				default:
					a[0].selected = !0
				}
			},
			selectValue: function(a, b) {
				var d, c = a.get(0).options;
				for (d = 0; d < c.length; d++) if (c[d].value == b) {
					c[d].selected = !0;
					break
				}
			},
			dateWrite: function() {
				this.to.val(a.addZero(this.from.html(), '/'))
			},
			xiaomiWorkWirte: function() {
				var b = this,
				c = this.from.length;
				this.to.each(function(d, e) {
					var f, g, h, i, j, k;
					return d + 1 > c ? !1 : (f = a.addZero(b.from.eq(d).find('.mt_startDate').html() + '-1', '/'), g = a.addZero(b.from.eq(d).find('.mt_endDate').html() + '-1', '/'), $(e).find('.input-text.js-input-date').eq(0).val(f), $(e).find('.input-text.js-input-date').eq(1).val(g), h = b.from.eq(d).find('.mt_companyName').html(), i = b.from.eq(d).find('.mt_department').html(), '' != i ? $(e).find('.input-text').eq(2).val(h + '+' + i) : $(e).find('.input-text').eq(2).val(h), j = b.from.eq(d).find('.mt_workContent').children().html(), $(e).find('.textarea').val(j), k = b.from.eq(d).find('.mt_positionName').html(), $(e).find('.input-text').eq(3).val(k), void 0)
				})
			}
		}),
		c = new b({
			from: $('#mt_name'),
			to: $('input[name=\"firstName \"]')
		}),
		c.textWrite(function() {
			var a = c.from.html();
			a = a.length <= 3 ? a.substring(0, 1) : a.substring(0, 2),
			c.to.val(a)
		}),
		d = new b({
			from: $('#mt_name'),
			to: $('input[name=\"lastName \"]')
		}),
		d.textWrite(function() {
			var a = d.from.html();
			a = a.length <= 3 ? a.substring(1) : a.substring(2),
			d.to.val(a)
		}),
		e = new b({
			from: $('#mt_tel'),
			to: $('input[name=\"tel \"]')
		}),
		e.textWrite(),
		f = new b({
			from: $('#mt_email'),
			to: $('input[name=\"email \"]')
		}),
		f.textWrite(),
		g = new b({
			from: $('#mt_maritalstatus'),
			to: $('.dropdown-text').eq(0)
		}),
		g.textWrite(function() {
			g.to.html(g.from.html())
		}),
		h = new b({
			from: $('#mt_sex'),
			to: $('input[name=\"sex \"]')
		}),
		h.writeSex(),
		i = new b({
			from: $('#mt_birth'),
			to: $('input[name=\"birth \"]')
		}),
		i.dateWrite(),
		j = new b({
			from: $('#mt_add'),
			to: $('input[name=\"address \"]')
		}),
		j.textWrite(),
		k = new b({
			from: $('.infoparttimejobs'),
			to: $('.resume-box-wrapper.js-add-section.toggle-box').eq(0).find('.resume-box.clearfix')
		}),
		k.xiaomiWorkWirte(),
		l = new b({
			from: $('.infofulltimejobs'),
			to: $('.resume-box-wrapper.js-add-section.toggle-box').eq(1).find('.resume-box.clearfix')
		}),
		l.xiaomiWorkWirte(),
		m = new b({
			from: $('.infopledu'),
			to: $('.resume-box-wrapper.js-add-section.toggle-box').eq(2).find('.resume-box')
		}),
		m.textWrite(function() {
			var b = m.from.length;
			m.to.each(function(c, d) {
				var e, f, g, i, j, k, l, n;
				if (c + 1 > b) return ! 1;
				switch (e = m.from.eq(c).find('.mt_schoolName').html(), f = m.from.eq(c).find('.mt_startYear').html(), g = m.from.eq(c).find('.mt_endYear').html(), m.from.eq(c).find('.mt_academy').html(), i = m.from.eq(c).find('.mt_professional').html(), j = m.from.eq(c).find('.mt_education').html(), k = m.from.eq(c).find('.mt_degree').html(), $(d).find('.input-text').eq(3).val(i), $(d).find('.input-text').eq(0).val(a.addZero(f + '-1', '/')), $(d).find('.input-text').eq(1).val(a.addZero(g + '-1', '/')), $(d).find('.input-text').eq(2).val(e), l = $(d).find('.dropdown-text').eq(0), j) {
				case '大学专科':
					l.html('大专');
					break;
				case '大学本科-一本':
				case '大学本科-二本':
				case '大学本科-三本':
				case '海外本科':
					l.html('本科');
					break;
				case '硕士研究生':
					l.html('硕士研究生');
					break;
				case '博士研究生':
					l.html('博士研究生');
					break;
				case '中专':
					l.html('中专');
					break;
				case '技校/职高':
					l.html('职高');
					break;
				case '高中':
					l.html('高中');
					break;
				default:
					l.html('其他')
				}
				switch (n = $(d).find('.dropdown-text').eq(1), k) {
				case '学士':
				case '双学士':
					n.html('学士');
					break;
				case '硕士':
					n.html('硕士');
					break;
				case '博士':
					n.html('博士');
					break;
				case 'MBA':
					n.html('MBA');
					break;
				default:
					n.html('无学位')
				}
			})
		}),
		n = new b({
			from: $('.infoplcerti'),
			to: $('#credentialsInfo').find('.resume-box.clearfix')
		}),
		n.textWrite(function() {
			var b = n.from.length;
			n.to.each(function(c, d) {
				var e, f;
				return c + 1 > b ? !1 : (e = n.from.eq(c).find('.mt_certificateName').html(), f = a.addZero(n.from.eq(c).find('.mt_getDate').html() + '-1', '/'), $(d).find('.input-text').eq(0).val(e), $(d).find('.input-text').eq(1).val(f), void 0)
			})
		}),
		o = new b({
			from: $('.infoschaward'),
			to: $('#award').find('.resume-box.clearfix')
		}),
		o.textWrite(function() {
			var b = o.from.length;
			o.to.each(function(c, d) {
				var e, f, g;
				return c + 1 > b ? !1 : (e = o.from.eq(c).find('.mt_awardsName').html(), f = o.from.eq(c).find('.mt_awardsLevel').html(), g = a.addZero(o.from.eq(c).find('.mt_awardsDate').html() + '-1', '/'), $(d).find('.input-text').eq(0).val(e + ' ' + f), $(d).find('.input-text').eq(1).val(g), void 0)
			})
		}),
		p = new b({
			from: $('#mt_selfIntro'),
			to: $('#selfEvaluation')
		}),
		p.textWrite()
		
		
		
	})
});