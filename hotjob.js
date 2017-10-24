(function() {
	$('.quick-write').on('click',
	function() {
		if ($('#jm_qiuck_cover')) {
			$('#jm_qiuck_cover').fadeIn();
			setTimeout(function() {
				$('#jm_qiuck_cover').fadeOut()
			},
			1000)
		}
		var date = new Date();
		function addOnlyZero(date) {
			date = date.split('-');
			for (var i = 0; i < date.length; i++) {
				date[i] = date[i] < 10 ? '0' + date[i] : date[i]
			}
			return date.join('-')
		}
		function delZero(date) {
			date = date.split('-');
			if (date.length == 3) {
				for (var i = 0; i < date.length - 1; i++) {
					date[i] = date[i] < 10 ? '0' + date[i] : date[i]
				}
				return date[0] + '-' + date[1]
			} else {
				if (date.length == 2) {
					for (var i = 0; i < date.length; i++) {
						date[i] = date[i] < 10 ? '0' + date[i] : date[i]
					}
					return date.join('-')
				}
			}
		}
		function formatDate(value, length) {
			if (length == undefined || length == 3) {
				let newDate = value.split('-');
				for (let i = 0; i < newDate.length; i++) {
					if (parseInt(newDate[i]) < 10) {
						newDate[i] = '0' + newDate[i]
					}
				}
				return newDate.join('-')
			}
			if (length == 2) {
				let newDate = value.split('-');
				for (let i = 0; i < newDate.length; i++) {
					if (parseInt(newDate[i]) < 10) {
						newDate[i] = '0' + newDate[i]
					}
				}
				newDate = newDate.slice(0, 2);
				return newDate.join('-')
			}
		}
		var pathname = window.location.pathname;
		var event = document.createEvent('HTMLEvents');
		event.initEvent('change', false, true);
		
		if($('#21_86_1') && $('#mt_fmname').html()){
			$('#21_86_1').val($('#mt_fmname').html());
		}
		if($('#21_88_1') && $('#mt_fmwork').html()){
			$('#21_88_1').val($('#mt_fmwork').html());
		}
		if($('#21_89_1') && $('#mt_fmposition').html()){
			$('#21_89_1').val($('#mt_fmposition').html());
		}
		if ($('#11_27_1') && $('#mt_postadd').html()) {
			$('#11_27_1').val($('#mt_postadd').html())
		}
		if ($('#11_100414_1') && $('#mt_weight').html()) {
			$('#11_100414_1').val($('#mt_weight').html())
		}
		if ($('#11_100307_1') && $('#mt_add').html()) {
			$('#11_100307_1').val($('#mt_add').html())
		}
		if ($('input[name=\"11_2_1\"]') && $('#mt_name').html()) {
			$('input[name=\"11_2_1\"]').val($('#mt_name').html())
		}
		if ($('input[name=\"11_100001_1\"]') && $('#mt_ywname').html()) {
			$('input[name=\"11_100001_1\"]').val($('#mt_ywname').html())
		}
		if ($('input[name=\"11_20_1\"]') && $('#mt_sex').html() && $('#mt_sex').html() == '男') {
			$('input[name=\"11_20_1\"]').eq(0).trigger('click')
		}
		if ($('input[name=\"11_20_1\"]') && $('#mt_sex').html() && $('#mt_sex').html() == '女') {
			$('input[name=\"11_20_1\"]').eq(1).trigger('click')
		}
		if ($('#11_36_1') && $('#mt_tel').html()) {
			$('#11_36_1').val($('#mt_tel').html())
		}
		if ($('#11_37_1') && $('#mt_email').html()) {
			$('#11_37_1').val($('#mt_email').html())
		}
		if ($('input[name=\"11_21_1\"]') && $('#mt_birth').html()) {
			$('input[name=\"11_21_1\"]').val(addOnlyZero($('#mt_birth').html()))
		}
		if ($('#11_247_1').length && $('#mt_height').html()) {
			$('#11_247_1').val($('#mt_height').html())
		}
		if ($('#11_100502_1').length && $('#mt_weight').html()) {
			$('#11_100502_1').val($('#mt_weight').html())
		}
		if ($('#11_100003_1').length && $('#mt_weight').html()) {
			$('#11_100003_1').val($('#mt_weight').html())
		}
		if ($('#11_100202_1').length && $('#mt_jjlxrtel').html()) {
			$('#11_100202_1').val($('#mt_jjlxrtel').html())
		}
		if ($('#11_100101_1').length && $('#mt_jjlxrtel').html()) {
			$('#11_100101_1').val($('#mt_jjlxrtel').html())
		}
		if ($('#11_1036787238_1') && $('#mt_jjlxrtel').html()) {
			$('#11_1036787238_1').val($('#mt_jjlxrtel').html())
		}
		if ($('#11_100004_1').length && $('#mt_jjlxr').html()) {
			$('#11_100004_1').val($('#mt_jjlxr').html())
		}
		if ($('#11_2001_1') && $('#mt_qqname').html()) {
			$('#11_2001_1').val($('#mt_qqname').html())
		}
		if ($('#11_2003_1') && $('#mt_wxname').html()) {
			$('#11_2003_1').val($('#mt_wxname').html())
		}
		if ($('#11_100102_1') && $('#mt_postadd').html()) {
			$('#11_100102_1').val($('#mt_postadd').html())
		}
		if ($('#11_837554767_1') && $('#mt_hukoucity').html()) {
			$('#11_837554767_1').val($('#mt_hukoucity').html() + $('#mt_hukoucity_city').html())
		}
		if ($('#11_837554765_1') && $('#mt_postadd').html()) {
			$('#11_837554765_1').val($('#mt_postadd').html())
		}
		if ($('#11_23_1').length > 0 && $('#mt_nation').html()) {
			var nation = document.getElementById('11_23_1');
			for (var i = 0; i < nation.options.length; i++) {
				if (nation.options[i].text == $('#mt_nation').html()) {
					nation.options[i].selected = true;
					break
				}
			}
		}
		if ($('#11_25_1').length > 0 && $('#mt_polistatus').html()) {
			var plo = document.getElementById('11_25_1');
			switch ($('#mt_polistatus').html()) {
			case '中共党员':
				plo.options[1].selected = true;
				break;
			case '群众':
				plo.options[4].selected = true;
				break;
			case '无党派民主人士':
				plo.options[3].selected = true;
				break;
			default:
				plo.options[2].selected = true;
				break
			}
		}
		if ($('#11_28_1').length > 0 && $('#mt_idtype').html()) {
			$opc = $('#11_28_1 option');
			switch ($('#mt_idtype').text()) {
			case '身份证':
				$opc.get(1).selected = true;
				break;
			case '护照':
				$opc.get(2).selected = true;
				break;
			case '军官证':
				$opc.get(3).selected = true;
				break;
			case '香港永久居民身份证':
			case '香港非永久居民身份证':
				$opc.get(4).selected = true;
				break;
			case '澳门永久居民身份证':
			case '澳门非永久居民身份证':
				$opc.get(5).selected = true;
				break;
			case '台胞证':
				$opc.get(6).selected = true;
				break;
			default:
				$opc.get(7).selected = true;
				break
			}
		}
		if ($('#11_29_1') && $('#mt_id').html()) {
			$('#11_29_1').val($('#mt_id').html())
		}
		if ($('#11_100_1') && $('#mt_id').html()) {
			$('#11_100_1').val($('#mt_id').html())
		}
		if ($('#11_101945385_1') && $('#mt_skill').html()) {
			$('#11_101945385_1').val($('#mt_skill').html())
		}
		if ($('#firstLevl11_26_1').length > 0 && $('#11_26_1').length > 0 && $('#mt_livecity_pro').html() && $('#mt_livecity_city').html()) {
			var pro = document.getElementById('firstLevl11_26_1');
			var mypro = $('#mt_livecity_pro').html();
			var prostr;
			for (var i = 0; i < pro.options.length; i++) {
				prostr = $.trim(pro.options[i].innerHTML);
				if (prostr.indexOf(mypro, 0) != -1) {
					pro.options[i].selected = true;
					pro.dispatchEvent(event);
					setTimeout(function() {
						var city = document.getElementById('11_26_1');
						var mycity = $('#mt_livecity_city').html();
						var citystr;
						for (var j = 0; j < city.options.length; j++) {
							citystr = city.options[j].innerHTML.trim();
							if (citystr.indexOf(mycity, 0) != -1) {
								city.options[j].selected = true;
								break
							}
						}
					},
					200);
					break
				}
			}
		}
		if ($('#firstLevl11_245_1').length > 0 && $('#11_245_1').length > 0 && $('#mt_nativeplace').html() && $('#mt_native_city').html()) {
			var pro = document.getElementById('firstLevl11_245_1');
			var mypro = $('#mt_nativeplace').html();
			var prostr;
			for (var i = 0; i < pro.options.length; i++) {
				prostr = $.trim(pro.options[i].innerHTML);
				if (prostr.indexOf(mypro, 0) != -1) {
					pro.options[i].selected = true;
					pro.dispatchEvent(event);
					setTimeout(function() {
						var city = document.getElementById('11_245_1');
						var mycity = $('#mt_native_city').html();
						var citystr;
						for (var j = 0; j < city.options.length; j++) {
							citystr = city.options[j].innerHTML.trim();
							if (citystr.indexOf(mycity, 0) != -1) {
								city.options[j].selected = true;
								break
							}
						}
					},
					200);
					break
				}
			}
		}
		if ($('#firstLevl11_246_1').length > 0 && $('#11_246_1').length > 0 && $('#mt_hukoucity').html() && $('#mt_hukoucity_city').html()) {
			var pro = document.getElementById('firstLevl11_246_1');
			var mypro = $('#mt_hukoucity').html();
			var prostr;
			for (var i = 0; i < pro.options.length; i++) {
				prostr = $.trim(pro.options[i].innerHTML);
				if (prostr.indexOf(mypro, 0) != -1) {
					pro.options[i].selected = true;
					pro.dispatchEvent(event);
					setTimeout(function() {
						var city = document.getElementById('11_246_1');
						var mycity = $('#mt_hukoucity_city').html();
						var citystr;
						for (var j = 0; j < city.options.length; j++) {
							citystr = city.options[j].innerHTML.trim();
							if (citystr.indexOf(mycity, 0) != -1) {
								city.options[j].selected = true;
								break
							}
						}
					},
					200);
					break
				}
			}
		}
		if ($('#firstLevl13_44_1').length && $('#13_44_1').length && $('#mt_expectcity').html() && $('#mt_expectcity_city').html()) {
			var pro = document.getElementById('firstLevl13_44_1');
			var mypro = $('#mt_expectcity').html();
			var prostr;
			for (var i = 0; i < pro.options.length; i++) {
				prostr = $.trim(pro.options[i].innerHTML);
				if (prostr.indexOf(mypro, 0) != -1) {
					pro.options[i].selected = true;
					pro.dispatchEvent(event);
					setTimeout(function() {
						var city = document.getElementById('13_44_1');
						var mycity = $('#mt_expectcity_city').html();
						var citystr;
						for (var j = 0; j < city.options.length; j++) {
							citystr = city.options[j].innerHTML.trim();
							if (citystr.indexOf(mycity, 0) != -1) {
								city.options[j].selected = true;
								break
							}
						}
					},
					200);
					break
				}
			}
		}
		if ($('#837553714_837553706_1') && $('#mt_expectcity').html()) {
			$('#837553714_837553706_1').val($('#mt_expectcity').html() + $('#mt_expectcity_city').html())
		}
		if ($('#11_24_1').length > 0 && $('#mt_maritalstatus').html()) {
			if ($('#mt_maritalstatus').html() == '未婚') {
				document.getElementById('11_24_1').options[1].selected = true
			}
			if ($('#mt_maritalstatus').html() == '已婚') {
				document.getElementById('11_24_1').options[2].selected = true
			}
			if ($('#mt_maritalstatus').html() == '离婚') {
				document.getElementById('11_24_1').options[3].selected = true
			}
		}
		if ($('#11_30_1').length > 0 && $('#mt_edu').html()) {
			var edu = document.getElementById('11_30_1').options;
			for (var i = 0; i < edu.length; i++) {
				if ($('#mt_edu').html().indexOf(edu[i].innerHTML) != -1) {
					edu[i].selected = true;
					break
				}
			}
		}
		if ($('#11_38_1') && $('#mt_add').html()) {
			$('#11_38_1').val($('#mt_add').html())
		}
		if ($('#12_42_1') && $('#mt_selfIntro').html()) {
			$('#12_42_1').val($('#mt_selfIntro').html())
		}
		if ($('#11_40_1') && $('#mt_profile').html()) {
			$('#11_40_1').val($('#mt_profile').html())
		}
		if ($('#11_39_1') && $('#mt_zip').html()) {
			$('#11_39_1').val($('#mt_zip').html())
		}
		var maxid = 0;
		var maxedutime;
		for (var i = 0; i < $('.infopledu').length; i++) {
			if ($('#14_101801_' + (i + 1)) && $('#edu-list .mt_startYear').eq(i).html()) {
				$('#14_101801_' + (i + 1)).val(formatDate($('#edu-list .mt_startYear').eq(i).html(), 2) + '-01');
			}
			if ($('#14_101802_' + (i + 1)) && $('#edu-list .mt_endYear').eq(i).html()) {
				$('#14_101802_' + (i + 1)).val(formatDate($('#edu-list .mt_endYear').eq(i).html(), 2) + '-01');
			}
			if ($('#14_49_' + (i + 1)) && $('#edu-list .mt_startYear').eq(i).html()) {
				$('#14_49_' + (i + 1)).val(delZero($('#edu-list .mt_startYear').eq(i).html()))
			}
			if ($('#14_50_' + (i + 1)) && $('#edu-list .mt_endYear').eq(i).html()) {
				$('#14_50_' + (i + 1)).val(delZero($('#edu-list .mt_endYear').eq(i).html()))
			}
			if ($('#14_51_' + (i + 1)) && $('.mt_schoolName').eq(i).html()) {
				$('#14_51_' + (i + 1)).val($('.mt_schoolName').eq(i).html())
			}
			if ($('#showName14_54_' + (i + 1)) && $('#edu-list .mt_professional').eq(i).html()) {
				$('#showName14_54_' + (i + 1)).val($('#edu-list .mt_professional').eq(i).html())
			}
			if ($('#14_55_' + (i + 1)) && $('.infopledu .mt_major').eq(i).html()) {
				$('#14_55_' + (i + 1)).val('主修课程: ' + $('.infopledu .mt_major').eq(i).html())
			}
			if ($('#14_248_' + (i + 1)).length > 0 && $('#edu-list .mt_degree').eq(i).html()) {
				var degree = document.getElementById('14_248_' + (i + 1));
				for (var j = 0; j < degree.options.length; j++) {
					if (degree.options[j].text == $('#edu-list .mt_degree').eq(i).html()) {
						degree.options[j].selected = true;
						break
					}
				}
				if ($('#edu-list .mt_degree').eq(i).html() == 'EMBA') {
					degree.options[3].selected = true
				}
			}
			if ($('#14_53_' + (i + 1)).length > 0 && $('#edu-list .mt_education').eq(i).html()) {
				var education = document.getElementById('14_53_' + (i + 1)).options;
				var myedu = $('#edu-list .mt_education').eq(i).html();
				for (var j in education) {
					if (myedu.indexOf(education[j].innerHTML) != -1) {
						education[j].selected = true;
						break
					}
				}
			}
			if ($('#14_1252686137_' + (i + 1)) && $('.infopledu .mt_classranking').eq(i).html()) {
				$('#14_1252686137_' + (i + 1)).val($('.infopledu .mt_classranking').eq(i).html())
			}
			if ($('#14_1398847859_' + (i + 1)) && $('.infopledu .mt_professionalranking').eq(i).html()) {
				$('#14_1398847859_' + (i + 1)).val($('.infopledu .mt_professionalranking').eq(i).html())
			}
			if ($('#14_935298218_' + (i + 1)) && $('.infopledu .mt_professionalranking').eq(i).html()) {
				$('#14_935298218_' + (i + 1)).val($('.infopledu .mt_professionalranking').eq(i).html())
			}
			if ($('#14_837553741_' + (i + 1)) && $('.infopledu .mt_tutorname').eq(i).html()) {
				$('#14_837553741_' + (i + 1)).val($('.infopledu .mt_tutorname').eq(i).html())
			}
			if ($('#14_837553725_' + (i + 1)) && $('.infopledu .mt_tutorphone').eq(i).html()) {
				$('#14_837553725_' + (i + 1)).val($('.infopledu .mt_tutorphone').eq(i).html())
			}
			var endyear = parseInt($('#edu-list .mt_endYearY').eq(i).html());
			if (i == 0) {
				maxedutime = endyear;
				maxid = 0
			} else {
				if (endyear > maxedutime) {
					maxedutime = endyear;
					maxid = i
				}
			}
		}
		if ($('#11_31_1') && $('#edu-list .mt_endYear').eq(maxid).html()) {
			$('#11_31_1').val(delZero($('#edu-list .mt_endYear').eq(maxid).html()) + '-01')
		}
		if ($('#11_101001_1') && $('#edu-list .mt_professional').eq(maxid).html()) {
			$('#11_101001_1').val($('#edu-list .mt_professional').eq(maxid).html())
		}
		if ($('#showName11_33_1') && $('#edu-list .mt_professional').eq(maxid).html()) {
			$('#showName11_33_1').val($('#edu-list .mt_professional').eq(maxid).html())
		}
		if ($('#11_32_1') && $('.mt_schoolName').last().html()) {
			$('#11_32_1').val($('.mt_schoolName').last().html())
		}
		if ($('#11_244_1').length && $('#edu-list .mt_degree').last().html()) {
			switch ($('#edu-list .mt_degree').last().html()) {
			case '学士':
				document.getElementById('11_244_1').options[1].selected = true;
				break;
			case '硕士':
				document.getElementById('11_244_1').options[2].selected = true;
				break;
			case 'MBA':
				document.getElementById('11_244_1').options[3].selected = true;
				break;
			case '博士':
				document.getElementById('11_244_1').options[4].selected = true;
				break;
			case '双学士':
				document.getElementById('11_244_1').options[5].selected = true;
				break;
			default:
				document.getElementById('11_244_1').options[6].selected = true;
				break
			}
		}
		if ($('#11_1029585546_1') && $('#edu-list .mt_major').eq(maxid).html()) {
			$('#11_1029585546_1').val($('#edu-list .mt_major').eq(maxid).html())
		}
		if ($('#11_1029585531_1') && $('#edu-list .mt_gpascore').eq(maxid).html()) {
			$('#11_1029585531_1').val($('#edu-list .mt_gpascore').eq(maxid).html())
		}
		if ($('#11_1071477393_1') && $('#edu-list .mt_academy').eq(maxid).html()) {
			$('#11_1071477393_1').val($('#edu-list .mt_academy').eq(maxid).html())
		}
		for (var i = 0; i < $('.infoEnglishSkill').length; i++) {
			if (document.getElementById('16_63_' + (i + 1)) && document.getElementById('16_63_' + (i + 1)).options) {
				if ($('#16_63_' + (i + 1)).length > 0 && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() == '大学英语四级') {
					document.getElementById('16_63_' + (i + 1)).options[1].selected = true
				}
				if ($('#16_63_' + (i + 1)).length > 0 && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() == '大学英语六级') {
					document.getElementById('16_63_' + (i + 1)).options[2].selected = true
				}
				if ($('#16_63_' + (i + 1)).length > 0 && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() == '专业四级') {
					document.getElementById('16_63_' + (i + 1)).options[3].selected = true
				}
				if ($('#16_63_' + (i + 1)).length > 0 && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() == '专业八级') {
					document.getElementById('16_63_' + (i + 1)).options[4].selected = true
				}
				if ($('#16_64_' + (i + 1)) && $('.infoEnglishSkill .mt_skillEngSorce').eq(i).html()) {
					$('#16_64_' + (i + 1)).val($('.infoEnglishSkill .mt_skillEngSorce').eq(i).html())
				}
				if ($('#43_228_' + (i + 1)).length) {
					$('#43_228_' + (i + 1)).val($('.infoEnglishSkill .mt_skillEngSorce').eq(i).html())
				}
			} else {
				if ($('#16_63_' + (i + 1)).length > 0 && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() == '大学英语四级') {
					$('#16_63_' + (i + 1)).val($('.infoEnglishSkill .mt_skillEngLevel').eq(i).html())
				}
				if ($('#16_63_' + (i + 1)).length > 0 && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() == '大学英语六级') {
					$('#16_63_' + (i + 1)).val($('.infoEnglishSkill .mt_skillEngLevel').eq(i).html())
				}
				if ($('#16_63_' + (i + 1)).length > 0 && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() == '专业四级') {
					$('#16_63_' + (i + 1)).val($('.infoEnglishSkill .mt_skillEngLevel').eq(i).html())
				}
				if ($('#16_63_' + (i + 1)).length > 0 && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() == '专业八级') {
					$('#16_63_' + (i + 1)).val($('.infoEnglishSkill .mt_skillEngLevel').eq(i).html())
				}
				if ($('#16_64_' + (i + 1)) && $('.infoEnglishSkill .mt_skillEngSorce').eq(i).html()) {
					$('#16_64_' + (i + 1)).val($('.infoEnglishSkill .mt_skillEngSorce').eq(i).html())
				}
			}
		}
		function getOthSkill(et, lan) {
			for (var i = 0; i < et.options.length; i++) {
				if (et.options[i].text == lan) {
					et.options[i].selected = true;
					break
				}
			}
		}
		for (var i = 0; i < $('.infoOtherSkill').length; i++) {
			var oskill = null;
			if ($('.infoOtherSkill .mt_skillOtherLang').eq(i).html()) {
				if ($('#17_66_' + (i + 1)).length) {
					oskill = document.getElementById('17_66_' + (i + 1));
					getOthSkill(oskill, $('.infoOtherSkill .mt_skillOtherLang').eq(i).html())
				}
				if ($('#43_225_' + (i + 1)).length && $('.infoOtherSkill .mt_skillOtherLang').eq(i).html()) {
					oskill = document.getElementById('43_225_' + (i + 1));
					getOthSkill(oskill, $('.infoOtherSkill .mt_skillOtherLang').eq(i).html())
				}
				if ($('#17_950644024_' + (i + 1)).length) {
					oskill = document.getElementById('17_950644024_' + (i + 1));
					getOthSkill(oskill, $('.infoOtherSkill .mt_skillOtherLang').eq(i).html())
				}
			}
			if ($('#17_67_' + (i + 1)).length && $('.infoOtherSkill .mt_skillListenLevel').eq(i).html()) {
				var lskl = $('#17_67_' + (i + 1))[0];
				switch ($('.infoOtherSkill .mt_skillListenLevel').eq(i).html()) {
				case '精通':
					lskl.options[3].selected = true;
					break;
				case '熟练':
					lskl.options[4].selected = true;
					break;
				case '一般':
					lskl.options[2].selected = true;
					break;
				case '了解':
					lskl.options[1].selected = true;
					break
				}
			}
			if ($('#43_226_' + (i + 1)).length && $('.infoOtherSkill .mt_skillListenLevel').eq(i).html()) {
				var lskl = $('#43_226_' + (i + 1))[0];
				switch ($('.infoOtherSkill .mt_skillListenLevel').eq(i).html()) {
				case '精通':
					lskl.options[1].selected = true;
					break;
				case '熟练':
					lskl.options[2].selected = true;
					break;
				case '一般':
					lskl.options[3].selected = true;
					break;
				case '了解':
					lskl.options[4].selected = true;
					break
				}
			}
			if ($('#43_227_' + (i + 1)).length && $('.infoOtherSkill .mt_skillWriteLevel').eq(i).html()) {
				var wskl = $('#43_227_' + (i + 1))[0];
				switch ($('.infoOtherSkill .mt_skillWriteLevel').eq(i).html()) {
				case '精通':
					wskl.options[1].selected = true;
					break;
				case '熟练':
					wskl.options[2].selected = true;
					break;
				case '一般':
					wskl.options[3].selected = true;
					break;
				case '了解':
					wskl.options[4].selected = true;
					break
				}
			}
		}
		for (var i = 0; i < $('.infofulltimejobs').length; i++) {
			if ($('#19_72_' + (i + 1)) && $('.infofulltimejobs .mt_startDate').eq(i).html()) {
				$('#19_72_' + (i + 1)).val(delZero($('.infofulltimejobs .mt_startDate').eq(i).html()))
			}
			if ($('#19_73_' + (i + 1)) && $('.infofulltimejobs .mt_endDate').eq(i).html()) {
				$('#19_73_' + (i + 1)).val(delZero($('.infofulltimejobs .mt_endDate').eq(i).html()))
			}
			if ($('#19_198_' + (i + 1)) && $('.infofulltimejobs .mt_companyName').eq(i).html()) {
				$('#19_198_' + (i + 1)).val($('.infofulltimejobs .mt_companyName').eq(i).html())
			}
			if ($('#19_76_' + (i + 1)) && $('.infofulltimejobs .mt_positionName').eq(i).html()) {
				$('#19_76_' + (i + 1)).val($('.infofulltimejobs .mt_positionName').eq(i).html())
			}
			if ($('#19_78_' + (i + 1)) && $('.infofulltimejobs .mt_workContent .workContent').eq(i).text()) {
				$('#19_78_' + (i + 1)).val($('.infofulltimejobs .mt_workContent .workContent').eq(i).text())
			}
			if ($('#19_202_' + (i + 1)) && $('.infofulltimejobs .mt_department').eq(i).html()) {
				$('#19_202_' + (i + 1)).val($('.infofulltimejobs .mt_department').eq(i).html())
			}
			if ($('#19_79_' + (i + 1)) && $('.infofulltimejobs .mt_reasons').eq(i).html()) {
				$('#19_79_' + (i + 1)).val($('.infofulltimejobs .mt_reasons').eq(i).html())
			}
			if ($('#19_200_' + (i + 1)) && $('.infofulltimejobs .mt_companySize').eq(i).html()) {
				$('#19_200_' + (i + 1)).val($('.infofulltimejobs .mt_companySize').eq(i).html())
			}
			if ($('#19_100146_' + (i + 1)) && $('.infofulltimejobs .mt_workCity').eq(i).html()) {
				$('#19_100146_' + (i + 1)).val($('.infofulltimejobs .mt_workCity').eq(i).html())
			}
			if ($('#19_100147_' + (i + 1)) && $('.infofulltimejobs .mt_reterenceName').eq(i).html()) {
				$('#19_100147_' + (i + 1)).val($('.infofulltimejobs .mt_reterenceName').eq(i).html())
			}
			if ($('#19_100148_' + (i + 1)) && $('.infofulltimejobs .mt_reterence_phone').eq(i).html()) {
				$('#19_100148_' + (i + 1)).val($('.infofulltimejobs .mt_reterence_phone').eq(i).html())
			}
			if ($('#19_101945390_' + (i + 1)) && $('.infofulltimejobs .mt_reterenceName').eq(i).html()) {
				$('#19_101945390_' + (i + 1)).val($('.infofulltimejobs .mt_reterenceName').eq(i).html())
			}
			if ($('#19_101945423_' + (i + 1)) && $('.infofulltimejobs .mt_reterence_phone').eq(i).html()) {
				$('#19_101945423_' + (i + 1)).val($('.infofulltimejobs .mt_reterence_phone').eq(i).html())
			}
			if ($('#19_75_' + (i + 1)).length && $('.infofulltimejobs .mt_workcat').eq(i).html()) {
				var ctype = $('#19_75_' + (i + 1))[0];
				ctype.options[1].selected = true
			}
			if ($('#1364547328_1364547350_' + (i + 1)) && $('.infofulltimejobs .mt_startDate').eq(i).html()) {
				$('#1364547328_1364547350_' + (i + 1)).val(delZero($('.infofulltimejobs .mt_startDate').eq(i).html()))
			}
			if ($('#1364547328_1364547353_' + (i + 1)) && $('.infofulltimejobs .mt_endDate').eq(i).html()) {
				$('#1364547328_1364547353_' + (i + 1)).val(delZero($('.infofulltimejobs .mt_endDate').eq(i).html()))
			}
			if ($('#1364547328_1364547526_' + (i + 1)) && $('.infofulltimejobs .mt_companyName').eq(i).html()) {
				$('#1364547328_1364547526_' + (i + 1)).val($('.infofulltimejobs .mt_companyName').eq(i).html())
			}
			if ($('#1364547328_1364547568_' + (i + 1)) && $('.infofulltimejobs .mt_workcat').eq(i).html()) {
				$('#1364547328_1364547568_' + (i + 1)).val($('.infofulltimejobs .mt_workcat').eq(i).html())
			}
			if ($('#1364547328_1364547575_' + (i + 1)) && $('.infofulltimejobs .mt_companyproperty').eq(i).html()) {
				$('#1364547328_1364547575_' + (i + 1)).val($('.infofulltimejobs .mt_companyproperty').eq(i).html())
			}
			if ($('#1364547328_1364547623_' + (i + 1)) && $('.infofulltimejobs .mt_positionName').eq(i).html()) {
				$('#1364547328_1364547623_' + (i + 1)).val($('.infofulltimejobs .mt_positionName').eq(i).html())
			}
			if ($('#1364547328_1364547626_' + (i + 1)) && $('.infofulltimejobs .mt_companySize').eq(i).html()) {
				$('#1364547328_1364547626_' + (i + 1)).val($('.infofulltimejobs .mt_companySize').eq(i).html())
			}
			if ($('#1364547328_1364547632_' + (i + 1)) && $('.infofulltimejobs .mt_companyCat').eq(i).html()) {
				$('#1364547328_1364547632_' + (i + 1)).val($('.infofulltimejobs .mt_companyCat').eq(i).html())
			}
			if ($('#1364547328_1364547636_' + (i + 1)) && $('.infofulltimejobs .workDes').eq(i).html()) {
				$('#1364547328_1364547636_' + (i + 1)).val($('.infofulltimejobs .workDes').eq(i).html())
			}
			if ($('#1364547328_1364547640_' + (i + 1)) && $('.infofulltimejobs .mt_department').eq(i).html()) {
				$('#1364547328_1364547640_' + (i + 1)).val($('.infofulltimejobs .mt_department').eq(i).html())
			}
			if ($('#19_100104_' + (i + 1)) && $('.infofulltimejobs .mt_reterenceName').eq(i).html()) {
				$('#19_100104_' + (i + 1)).val($('.infofulltimejobs .mt_reterenceName').eq(i).html())
			}
			if ($('#19_100105_' + (i + 1)) && $('.infofulltimejobs .mt_reterence_phone').eq(i).html()) {
				$('#19_100105_' + (i + 1)).val($('.infofulltimejobs .mt_reterence_phone').eq(i).html())
			}
			if ($('#19_801498895_' + (i + 1)) && $('.infofulltimejobs .mt_reterenceName').eq(i).html()) {
				$('#19_801498895_' + (i + 1)).val($('.infofulltimejobs .mt_reterenceName').eq(i).html())
			}
			if ($('#19_801498292_' + (i + 1)) && $('.infofulltimejobs .mt_reterence_phone').eq(i).html()) {
				$('#19_801498292_' + (i + 1)).val($('.infofulltimejobs .mt_reterence_phone').eq(i).html())
			}
			if ($('#19_199_' + (i + 1)).length && $('.infofulltimejobs .mt_companyproperty').eq(i).html()) {
				var ctype = $('#19_199_' + (i + 1))[0];
				switch ($('.infofulltimejobs .mt_companyproperty').eq(i).html()) {
				case '外资-欧美':
					ctype.options[1].selected = true;
					break;
				case '外资-非欧美':
					ctype.options[2].selected = true;
					break;
				case '合资-欧美':
					ctype.options[3].selected = true;
					break;
				case '合资-非欧美':
					ctype.options[4].selected = true;
					break;
				case '国企':
				case '上市公司':
					ctype.options[5].selected = true;
					break;
				case '民营公司':
					ctype.options[6].selected = true;
					break;
				case '外企代表处':
					ctype.options[7].selected = true;
					break;
				default:
					ctype.options[8].selected = true;
					break
				}
			}
		}
		for (var i = 0; i < $('.infoparttimejobs').length; i++) {
			if ($('#19_101901_' + (i + 1)) && $('.infoparttimejobs .mt_startDate').eq(i).html()) {
				$('#19_101901_' + (i + 1)).val(formatDate($('.infoparttimejobs .mt_startDate').eq(i).html(),2) + '-01')
			}
			if ($('#19_102001_' + (i + 1)) && $('.infoparttimejobs .mt_endDate').eq(i).html()) {
				$('#19_102001_' + (i + 1)).val(formatDate($('.infoparttimejobs .mt_endDate').eq(i).html(), 2) + '-01')
			}
			if ($('#1036754764_1036754596_' + (i + 1)) && $('.infoparttimejobs .mt_startDate').eq(i).html()) {
				$('#1036754764_1036754596_' + (i + 1)).val(delZero($('.infoparttimejobs .mt_startDate').eq(i).html()))
			}
			if ($('#1036754764_1036751707_' + (i + 1)) && $('.infoparttimejobs .mt_endDate').eq(i).html()) {
				$('#1036754764_1036751707_' + (i + 1)).val(delZero($('.infoparttimejobs .mt_endDate').eq(i).html()))
			}
			if ($('#1036754764_1036751635_' + (i + 1)) && $('.infoparttimejobs .mt_companyName').eq(i).html()) {
				$('#1036754764_1036751635_' + (i + 1)).val($('.infoparttimejobs .mt_companyName').eq(i).html())
			}
			if ($('#1036754764_1036749964_' + (i + 1)) && $('.infoparttimejobs .mt_department').eq(i).html()) {
				$('#1036754764_1036749964_' + (i + 1)).val($('.infoparttimejobs .mt_department').eq(i).html())
			}
			if ($('#1036754764_1036749985_' + (i + 1)) && $('.infoparttimejobs .mt_positionName').eq(i).html()) {
				$('#1036754764_1036749985_' + (i + 1)).val($('.infoparttimejobs .mt_positionName').eq(i).html())
			}
			if ($('#1036754764_1036749922_' + (i + 1)) && $('.infoparttimejobs .mt_workContent .workContent').eq(i).text()) {
				$('#1036754764_1036749922_' + (i + 1)).val($('.infoparttimejobs .mt_workContent .workContent').eq(i).text())
			}
			if ($('#19_979197128_' + (i + 1)) && $('.infoparttimejobs .mt_reterenceName').eq(i).html()) {
				$('#19_979197128_' + (i + 1)).val($('.infoparttimejobs .mt_reterenceName').eq(i).html() + $('.infoparttimejobs .mt_reterence_phone').eq(i).html())
			}
			if ($('#100201_100901_' + (i + 1)) && $('.infoparttimejobs .mt_startDate').eq(i).html()) {
				$('#100201_100901_' + (i + 1)).val(delZero($('.infoparttimejobs .mt_startDate').eq(i).html()))
			}
			if ($('#100201_100902_' + (i + 1)) && $('.infoparttimejobs .mt_endDate').eq(i).html()) {
				$('#100201_100902_' + (i + 1)).val(delZero($('.infoparttimejobs .mt_endDate').eq(i).html()))
			}
			if ($('#100201_100903_' + (i + 1)) && $('.infoparttimejobs .mt_companyName').eq(i).html()) {
				$('#100201_100903_' + (i + 1)).val($('.infoparttimejobs .mt_companyName').eq(i).html())
			}
			if ($('#100201_100904_' + (i + 1)) && $('.infoparttimejobs .mt_positionName').eq(i).html()) {
				$('#100201_100904_' + (i + 1)).val($('.infoparttimejobs .mt_positionName').eq(i).html())
			}
			if ($('#100201_100905_' + (i + 1)) && $('.infoparttimejobs .mt_workContent').eq(i).text()) {
				$('#100201_100905_' + (i + 1)).val($('.infoparttimejobs .mt_workContent').eq(i).text())
			}
			if ($('#19_100101_' + (i + 1)) && $('.infoparttimejobs .mt_reterenceName').eq(i).text()) {
				$('#19_100101_' + (i + 1)).val($('.infoparttimejobs .mt_reterenceName').eq(i).text())
			}
			if ($('#19_100102_' + (i + 1)) && $('.infoparttimejobs .mt_reterencePosition').eq(i).text()) {
				$('#19_100102_' + (i + 1)).val($('.infoparttimejobs .mt_reterencePosition').eq(i).text())
			}
			if ($('#19_100103_' + (i + 1)) && $('.infoparttimejobs .mt_reterence_phone').eq(i).text()) {
				$('#19_100103_' + (i + 1)).val($('.infoparttimejobs .mt_reterence_phone').eq(i).text())
			}
			var len = $('.infofulltimejobs').length;
			if ($('#19_72_' + (i + 1 + len)) && $('.infoparttimejobs .mt_startDate').eq(i).html()) {
				$('#19_72_' + (i + 1 + len)).val(delZero($('.infoparttimejobs .mt_startDate').eq(i).html()))
			}
			if ($('#19_73_' + (i + 1 + len)) && $('.infoparttimejobs .mt_endDate').eq(i).html()) {
				$('#19_73_' + (i + 1 + len)).val(delZero($('.infoparttimejobs .mt_endDate').eq(i).html()))
			}
			if ($('#19_198_' + (i + 1 + len)) && $('.infoparttimejobs .mt_companyName').eq(i).html()) {
				$('#19_198_' + (i + 1 + len)).val($('.infoparttimejobs .mt_companyName').eq(i).html())
			}
			if ($('#19_76_' + (i + 1 + len)) && $('.infoparttimejobs .mt_positionName').eq(i).html()) {
				$('#19_76_' + (i + 1 + len)).val($('.infoparttimejobs .mt_positionName').eq(i).html())
			}
			if ($('#19_78_' + (i + 1 + len)) && $('.infoparttimejobs .mt_workContent .workContent').eq(i).text()) {
				$('#19_78_' + (i + 1 + len)).val($('.infoparttimejobs .mt_workContent .workContent').eq(i).text())
			}
			if ($('#19_202_' + (i + 1 + len)) && $('.infoparttimejobs .mt_department').eq(i).html()) {
				$('#19_202_' + (i + 1 + len)).val($('.infoparttimejobs .mt_department').eq(i).html())
			}
			if ($('#19_79_' + (i + 1 + len)) && $('.infoparttimejobs .mt_reasons').eq(i).html()) {
				$('#19_79_' + (i + 1 + len)).val($('.infoparttimejobs .mt_reasons').eq(i).html())
			}
			if ($('#19_200_' + (i + 1 + len)) && $('.infoparttimejobs .mt_companySize').eq(i).html()) {
				$('#19_200_' + (i + 1 + len)).val($('.infoparttimejobs .mt_companySize').eq(i).html())
			}
			if ($('#19_100146_' + (i + 1 + len)) && $('.infoparttimejobs .mt_workCity').eq(i).html()) {
				$('#19_100146_' + (i + 1 + len)).val($('.infoparttimejobs .mt_workCity').eq(i).html())
			}
			if ($('#19_100147_' + (i + 1 + len)) && $('.infoparttimejobs .mt_reterenceName').eq(i).html()) {
				$('#19_100147_' + (i + 1 + len)).val($('.infoparttimejobs .mt_reterenceName').eq(i).html())
			}
			if ($('#19_100148_' + (i + 1 + len)) && $('.infoparttimejobs .mt_reterence_phone').eq(i).html()) {
				$('#19_100148_' + (i + 1 + len)).val($('.infoparttimejobs .mt_reterence_phone').eq(i).html())
			}
			if ($('#19_101945390_' + (i + 1 + len)) && $('.infoparttimejobs .mt_reterenceName').eq(i).html()) {
				$('#19_101945390_' + (i + 1 + len)).val($('.infoparttimejobs .mt_reterenceName').eq(i).html())
			}
			if ($('#19_101945423_' + (i + 1 + len)) && $('.infoparttimejobs .mt_reterence_phone').eq(i).html()) {
				$('#19_101945423_' + (i + 1 + len)).val($('.infoparttimejobs .mt_reterence_phone').eq(i).html())
			}
			if ($('#1364547328_1364547350_' + (i + 1 + len)) && $('.infoparttimejobs .mt_startDate').eq(i).html()) {
				$('#1364547328_1364547350_' + (i + 1 + len)).val(delZero($('.infoparttimejobs .mt_startDate').eq(i).html()))
			}
			if ($('#1364547328_1364547353_' + (i + 1 + len)) && $('.infoparttimejobs .mt_endDate').eq(i).html()) {
				$('#1364547328_1364547353_' + (i + 1 + len)).val(delZero($('.infoparttimejobs .mt_endDate').eq(i).html()))
			}
			if ($('#1364547328_1364547526_' + (i + 1 + len)) && $('.infoparttimejobs .mt_companyName').eq(i).html()) {
				$('#1364547328_1364547526_' + (i + 1 + len)).val($('.infoparttimejobs .mt_companyName').eq(i).html())
			}
			if ($('#1364547328_1364547568_' + (i + 1 + len)) && $('.infoparttimejobs .mt_workcat').eq(i).html()) {
				$('#1364547328_1364547568_' + (i + 1 + len)).val($('.infoparttimejobs .mt_workcat').eq(i).html())
			}
			if ($('#1364547328_1364547575_' + (i + 1 + len)) && $('.infoparttimejobs .mt_companyproperty').eq(i).html()) {
				$('#1364547328_1364547575_' + (i + 1 + len)).val($('.infoparttimejobs .mt_companyproperty').eq(i).html())
			}
			if ($('#1364547328_1364547623_' + (i + 1 + len)) && $('.infoparttimejobs .mt_positionName').eq(i).html()) {
				$('#1364547328_1364547623_' + (i + 1 + len)).val($('.infoparttimejobs .mt_positionName').eq(i).html())
			}
			if ($('#1364547328_1364547626_' + (i + 1 + len)) && $('.infoparttimejobs .mt_companySize').eq(i).html()) {
				$('#1364547328_1364547626_' + (i + 1 + len)).val($('.infoparttimejobs .mt_companySize').eq(i).html())
			}
			if ($('#1364547328_1364547632_' + (i + 1 + len)) && $('.infoparttimejobs .mt_companyCat').eq(i).html()) {
				$('#1364547328_1364547632_' + (i + 1 + len)).val($('.infoparttimejobs .mt_companyCat').eq(i).html())
			}
			if ($('#1364547328_1364547636_' + (i + 1 + len)) && $('.infoparttimejobs .workDes').eq(i).html()) {
				$('#1364547328_1364547636_' + (i + 1 + len)).val($('.infoparttimejobs .workDes').eq(i).html())
			}
			if ($('#1364547328_1364547640_' + (i + 1 + len)) && $('.infoparttimejobs .mt_department').eq(i).html()) {
				$('#1364547328_1364547640_' + (i + 1 + len)).val($('.infoparttimejobs .mt_department').eq(i).html())
			}
			if ($('#19_75_' + (i + 1 + len)).length && $('.infoparttimejobs .mt_workcat').eq(i).html()) {
				var ctype = $('#19_75_' + (i + 1 + len))[0];
				ctype.options[3].selected = true
			}
			if ($('#19_979197128_' + (i + 1)) && $('.infoparttimejobs .mt_reterenceName').eq(i).html()) {
				$('#19_979197128_' + (i + 1)).val($('.infoparttimejobs .mt_reterenceName').eq(i).html() + $('.infoparttimejobs .mt_reterence_phone').eq(i).html())
			}
			if ($('#19_100104_' + (i + 1 + len)) && $('.infoparttimejobs .mt_reterenceName').eq(i).html()) {
				$('#19_100104_' + (i + 1 + len)).val($('.infoparttimejobs .mt_reterenceName').eq(i).html())
			}
			if ($('#19_100105_' + (i + 1 + len)) && $('.infoparttimejobs .mt_reterence_phone').eq(i).html()) {
				$('#19_100105_' + (i + 1 + len)).val($('.infoparttimejobs .mt_reterence_phone').eq(i).html())
			}
			if ($('#19_801498895_' + (i + 1 + len)) && $('.infoparttimejobs .mt_reterenceName').eq(i).html()) {
				$('#19_801498895_' + (i + 1 + len)).val($('.infoparttimejobs .mt_reterenceName').eq(i).html())
			}
			if ($('#19_801498292_' + (i + 1 + len)) && $('.infoparttimejobs .mt_reterence_phone').eq(i).html()) {
				$('#19_801498292_' + (i + 1 + len)).val($('.infoparttimejobs .mt_reterence_phone').eq(i).html())
			}
			if ($('#19_199_' + (i + 1 + len)).length && $('.infoparttimejobs .mt_companyproperty').eq(i).html()) {
				var ctype = $('#19_199_' + (i + 1 + len))[0];
				switch ($('.infoparttimejobs .mt_companyproperty').eq(i).html()) {
				case '外资-欧美':
					ctype.options[1].selected = true;
					break;
				case '外资-非欧美':
					ctype.options[2].selected = true;
					break;
				case '合资-欧美':
					ctype.options[3].selected = true;
					break;
				case '合资-非欧美':
					ctype.options[4].selected = true;
					break;
				case '国企':
				case '上市公司':
					ctype.options[5].selected = true;
					break;
				case '民营公司':
					ctype.options[6].selected = true;
					break;
				case '外企代表处':
					ctype.options[7].selected = true;
					break;
				default:
					ctype.options[8].selected = true;
					break
				}
			}
		}
		for (var i = 0; i < $('.infoproject').length; i++) {
			if ($('#40_102101_' + (i + 1)) && $('.infoproject .mt_prostartdate').eq(i).html()) {
				$('#40_102101_' + (i + 1)).val(formatDate($('.infoproject .mt_prostartdate').eq(i).html(), 2) + '-01')
			}
			if ($('#40_102002_' + (i + 1)) && $('.infoproject .mt_proenddate').eq(i).html()) {
				$('#40_102002_' + (i + 1)).val(formatDate($('.infoproject .mt_proenddate').eq(i).html(), 2) + '-01')
			}
			if ($('#40_206_' + (i + 1)) && $('.infoproject .mt_prostartdate').eq(i).html()) {
				$('#40_206_' + (i + 1)).val(delZero($('.infoproject .mt_prostartdate').eq(i).html()))
			}
			if ($('#40_207_' + (i + 1)) && $('.infoproject .mt_proenddate').eq(i).html()) {
				$('#40_207_' + (i + 1)).val(delZero($('.infoproject .mt_proenddate').eq(i).html()))
			}
			if ($('#40_210_' + (i + 1)) && $('.infoproject .mt_projectDuty').eq(i).html()) {
				$('#40_210_' + (i + 1)).val($('.infoproject .mt_projectDuty').eq(i).html())
			}
			if ($('#40_208_' + (i + 1)) && $('.infoproject .mt_projectName').eq(i).html()) {
				$('#40_208_' + (i + 1)).val($('.infoproject .mt_projectName').eq(i).html())
			}
			if ($('#40_209_' + (i + 1)) && $('.infoproject .mt_projectRemark').eq(i).html()) {
				$('#40_209_' + (i + 1)).val($('.infoproject .mt_projectRemark').eq(i).html())
			}
			if ($('#40_111542250_' + (i + 1)) && $('.infoproject .mt_projectNumber').eq(i).html()) {
				$('#40_111542250_' + (i + 1)).val($('.infoproject .mt_projectNumber').eq(i).html() + '人')
			}
		}
		for (var i = 0; i < $('.infotraining').length; i++) {
			if ($('#15_56_' + (i + 1)) && $('.infotraining .mt_startDate').eq(i).html()) {
				$('#15_56_' + (i + 1)).val(delZero($('.infotraining .mt_startDate').eq(i).html()))
			}
			if ($('#15_57_' + (i + 1)) && $('.infotraining .mt_endDate').eq(i).html()) {
				$('#15_57_' + (i + 1)).val(delZero($('.infotraining .mt_endDate').eq(i).html()))
			}
			if ($('#15_58_' + (i + 1)) && $('.infotraining .mt_trainingCompany').eq(i).html()) {
				$('#15_58_' + (i + 1)).val($('.infotraining .mt_trainingCompany').eq(i).html())
			}
			if ($('#15_60_' + (i + 1)) && $('.infotraining .mt_trainingName').eq(i).html()) {
				$('#15_60_' + (i + 1)).val($('.infotraining .mt_trainingName').eq(i).html())
			}
			if ($('#15_61_' + (i + 1)) && $('.infotraining .mt_certificateName').eq(i).html()) {
				$('#15_61_' + (i + 1)).val($('.infotraining .mt_certificateName').eq(i).html())
			}
			if ($('#15_62_' + (i + 1)) && $('.infotraining .mt_trainingDes').eq(i).html()) {
				$('#15_62_' + (i + 1)).val($('.infotraining .mt_trainingDes').eq(i).html())
			}
			if ($('#15_100142_' + (i + 1)) && $('.infotraining .mt_trainingDes').eq(i).html()) {
				$('#15_100142_' + (i + 1)).val($('.infotraining .mt_trainingDes').eq(i).html())
			}
			if ($('#15_59_' + (i + 1)).length > 0 && $('.infotraining .mt_trainingPlace').eq(i).html()) {
				var trainingPlace = $('.infotraining .mt_trainingPlace').eq(i).html();
				var tp = document.getElementById('15_59_' + (i + 1));
				for (var j = 0; j < tp.options.length; j++) {
					if (trainingPlace.indexOf(tp.options[j].text, 0) != -1) {
						tp.options[j].selected = true;
						break
					}
				}
			}
		}
		for (var i = 0; i < $('.infoschaward').length; i++) {
			if ($('#20_82_' + (i + 1)) && $('.infoschaward .mt_awardsName').eq(i).html()) {
				$('#20_82_' + (i + 1)).val($('.infoschaward .mt_awardsName').eq(i).html())
			}
			if ($('#20_83_' + (i + 1)) && $('#schclub-list .mt_positionName').eq(i).html()) {
				$('#20_83_' + (i + 1)).val($('#schclub-list .mt_positionName').eq(i).html())
			}
			if ($('#20_83_' + (i + 1)) && $('#schclub-list .mt_positionName').eq(i).html()) {
				$('#20_83_' + (i + 1)).val($('#schclub-list .mt_positionName').eq(i).html())
			}
//			if ($('#100603_102210_1')) {
//				let award = '获奖名称：' + $('.infoschaward .mt_awardsName').eq(i).html() + '\n' + 
//							'获奖时间：' + $('.infoschaward .mt_awardsDate').eq(i).html() + '\n' + 
//							'奖项描述：' + $('.infoschaward .mt_awardsDes').eq(i).html() + '\n'
//				$('#100603_102210_1').val($('#100603_102210_1').val() + award);
//			}
			if ($('#20_84_' + (i + 1)) && $('#schclub-list .mt_schClubName').eq(i).html()) {
				$('#20_84_' + (i + 1)).val($('#schclub-list .mt_schClubName').eq(i).html())
			}
		}
		for (var i = 0; i < $('.infoplcerti').length; i++) {
			if ($('#44_229_' + (i + 1)) && $('.mt_certificateName').eq(i).html()) {
				$('#44_229_' + (i + 1)).val($('.mt_certificateName').eq(i).html())
			}
			if ($('#44_231_' + (i + 1)) && $('.mt_certificateDes').eq(i).html()) {
				$('#44_231_' + (i + 1)).val($('.mt_certificateDes').eq(i).html())
			}
			if ($('#44_230_' + (i + 1)) && $('.mt_getDate').eq(i).html()) {
				$('#44_230_' + (i + 1)).val(delZero($('.mt_getDate').eq(i).html()) + '-01')
			}
		}
		if ($('#21_86_1') && $('#mt_fmname').html()) {
			$('#21_86_1').val($('#mt_fmname').html())
		}
		if ($('#21_88_1') && $('#mt_fmwork').html()) {
			$('#21_88_1').val($('#mt_fmwork').html())
		}
		if ($('#21_89_1') && $('#mt_fmposition').html()) {
			$('#21_89_1').val($('#mt_fmposition').html())
		}
		if ($('#21_100108_1') && $('#mt_fmphone').html()) {
			$('#21_100108_1').val($('#mt_fmphone').html())
		}
		for (var i = 0; i < $('.infoschaward').length; i++) {
			if ($('#20_1036786808_' + (i + 1)) && $('.infoschaward .mt_awardsName').eq(i).html()) {
				$('#20_1036786808_' + (i + 1)).val($('.infoschaward .mt_awardsName').eq(i).html())
			}
			if ($('#20_1036786500_' + (i + 1)) && $('.infoschaward .mt_awardsDate').eq(i).html()) {
				$('#20_1036786500_' + (i + 1)).val(delZero($('.infoschaward .mt_awardsDate').eq(i).html()) + '-01')
			}
			if ($('#20_1036778364_' + (i + 1)) && $('.infoschaward .mt_awardsDes').eq(i).html()) {
				$('#20_1036778364_' + (i + 1)).val($('.infoschaward .mt_awardsDes').eq(i).html())
			}
			if ($('#100101_100102_' + (i + 1)) && $('.infoschaward .mt_schawradList').eq(i).html()) {
				$('#100101_100102_' + (i + 1)).val($('.infoschaward .mt_schawradList').eq(i).html())
			}
		}
		 if ($('#11_27_1').length > 0 && $('#mt_hukoucitynow').html() && $('#11_27_1').parent().prev().html() != '家庭地址及邮编') {
		 	var pro = document.getElementById('11_27_1');
		 	var mypro = $('#mt_hukoucitynow').html();
		 	var prostr;
		 	for (var i = 0; i < pro.options.length; i++) {
		 		prostr = $.trim(pro.options[i].innerHTML);
		 		if (prostr.indexOf(mypro, 0) != -1) {
		 			pro.options[i].selected = true;
		 			break
		 		}
		 	}
		 }
		if ($('#11_34_1') && $('#mt_gudingtel').html()) {
			$('#11_34_1').val($('#mt_gudingtel').html())
		}
		if ($('#firstLevl11_100802662_1').length > 0 && $('#11_100802662_1').length > 0 && $('#mt_hukoucity').html() && $('#mt_hukoucity_city').html()) {
			var pro = document.getElementById('firstLevl11_100802662_1');
			var mypro = $('#mt_hukoucity').html();
			var prostr;
			for (var i = 0; i < pro.options.length; i++) {
				prostr = $.trim(pro.options[i].innerHTML);
				if (prostr.indexOf(mypro, 0) != -1) {
					pro.options[i].selected = true;
					pro.dispatchEvent(event);
					setTimeout(function() {
						var city = document.getElementById('11_100802662_1');
						var mycity = $('#mt_hukoucity_city').html();
						var citystr;
						for (var j = 0; j < city.options.length; j++) {
							citystr = city.options[j].innerHTML.trim();
							if (citystr.indexOf(mycity, 0) != -1) {
								city.options[j].selected = true;
								break
							}
						}
					},
					200);
					break
				}
			}
		}
		if ($('#100116655_100116720_1') && $('#mt_skill').html()) {
			$('#100116655_100116720_1').val($('#mt_skill').html())
		}
		if ($('#11_22_1').length && $('#mt_national').html()) {
			var nat = document.getElementById('11_22_1');
			for (var i = 0; i < nat.options.length; i++) {
				if (nat.options[i].text.indexOf($('#mt_national').html(), 0) != -1) {
					nat.options[i].selected = true;
					break
				}
			}
		}
		if ($('#11_246_1') && $('#mt_hukoucity_city').html()) {
			$('#11_246_1').val($('#mt_hukoucity_city').html())
		}
		for (var i = 0; i < $('.infoparttimejobs').length; i++) {
			if ($('#111527355_111527475_' + (i + 1)) && $('.infoparttimejobs .mt_startDate').eq(i).html()) {
				$('#111527355_111527475_' + (i + 1)).val(delZero($('.infoparttimejobs .mt_startDate').eq(i).html()))
			}
			if ($('#111527355_111527478_' + (i + 1)) && $('.infoparttimejobs .mt_endDate').eq(i).html()) {
				$('#111527355_111527478_' + (i + 1)).val(delZero($('.infoparttimejobs .mt_endDate').eq(i).html()))
			}
			if ($('#111527355_111527359_' + (i + 1)) && $('.infoparttimejobs .mt_companyName').eq(i).html()) {
				$('#111527355_111527359_' + (i + 1)).val($('.infoparttimejobs .mt_companyName').eq(i).html())
			}
			if ($('#111527355_111527480_' + (i + 1)) && $('.infoparttimejobs .mt_department').eq(i).html()) {
				$('#111527355_111527480_' + (i + 1)).val($('.infoparttimejobs .mt_department').eq(i).html())
			}
			if ($('#111527355_111527483_' + (i + 1)) && $('.infoparttimejobs .mt_positionName').eq(i).html()) {
				$('#111527355_111527483_' + (i + 1)).val($('.infoparttimejobs .mt_positionName').eq(i).html())
			}
			if ($('#111527355_111527487_' + (i + 1)) && $('.infoparttimejobs .mt_workContent').eq(i).text()) {
				$('#111527355_111527487_' + (i + 1)).val($('.infoparttimejobs .mt_workContent').eq(i).text())
			}
		}
		for (var i = 0; i < $('.infoschaward').length; i++) {
			if ($('#111526900_111527492_' + (i + 1)) && $('.infoschaward .mt_awardsName').eq(i).html()) {
				$('#111526900_111527492_' + (i + 1)).val($('.infoschaward .mt_awardsName').eq(i).html())
			}
			if ($('#111526900_111527494_' + (i + 1)) && $('.infoschaward .mt_awardsDate').eq(i).html()) {
				$('#111526900_111527494_' + (i + 1)).val(delZero($('.infoschaward .mt_awardsDate').eq(i).html()) + '-01')
			}
			if ($('#111526900_111527498_' + (i + 1)) && $('.infoschaward .mt_awardsDes').eq(i).html()) {
				$('#111526900_111527498_' + (i + 1)).val($('.infoschaward .mt_awardsDes').eq(i).html())
			}
		}
		for (var i = 0; i < $('.infoschoolclub').length; i++) {
			if ($('#111526980_111527500_' + (i + 1)) && $('.infoschoolclub .mt_positionName').eq(i).html()) {
				$('#111526980_111527500_' + (i + 1)).val($('.infoschoolclub .mt_positionName').eq(i).html())
			}
			if ($('#100602_102205_' + (i + 1)) && $('.infoschoolclub .mt_positionName').eq(i).html()) {
				$('#100602_102205_' + (i + 1)).val($('.infoschoolclub .mt_positionName').eq(i).html())
			}
			if ($('#111526980_111528113_' + (i + 1)) && $('.infoschoolclub .mt_schClubName').eq(i).html()) {
				$('#111526980_111528113_' + (i + 1)).val($('.infoschoolclub .mt_schClubName').eq(i).html())
			}
			if ($('#111526980_111527502_' + (i + 1)) && $('.infoschoolclub .mt_startDate').eq(i).html()) {
				$('#111526980_111527502_' + (i + 1)).val(delZero($('.infoschoolclub .mt_startDate').eq(i).html()) + '-01')
			}
			if ($('#111526980_111527741_' + (i + 1)) && $('.infoschoolclub .mt_endDate').eq(i).html()) {
				$('#111526980_111527741_' + (i + 1)).val(delZero($('.infoschoolclub .mt_endDate').eq(i).html()) + '-01')
			}
			if ($('#111526980_111528685_' + (i + 1)) && $('.infoschoolclub .mt_workDes').eq(i).html()) {
				$('#111526980_111528685_' + (i + 1)).val($('.infoschoolclub .mt_workDes').eq(i).html())
			}
			if ($('#100102_100104_' + (i + 1)) && $('.infoschoolclub .mt_schClubList').eq(i).html()) {
				$('#100102_100104_' + (i + 1)).val($('.infoschoolclub .mt_schClubList').eq(i).html())
			}
			if ($('#100602_102206_' + (i + 1)) && $('.infoschoolclub .mt_schClubList').eq(i).html()) {
				$('#100602_102206_' + (i + 1)).val($('.infoschoolclub .mt_schClubList').eq(i).html())
			}
		}
		if (pathname.indexOf('/wt/asus/web/index/showNewResume') != -1) {
			if($('#11_100204_1').length && $('#mt_add').html()){
				$('#11_100204_1').val($('#mt_add').html())
			}
		}
		if (pathname.indexOf('/wt/MS/web/index/showNewResume') != -1) {
			if($('#11_100113_1').length && $('#mt_ywname').html()){
				$('#11_100113_1').val($('#mt_ywname').html())
			}
			if($('#11_100115_1').length && $('#mt_weight').html()){
				$('#11_100115_1').val($('#mt_weight').html())
			}
			if($('#11_100117_1').length && $('#mt_add').html()){
				$('#11_100117_1').val($('#mt_add').html())
			}
			if($('#11_100118_1').length && $('#mt_hukoucitynow').html()){
				$('#11_100118_1').val($('#mt_hukoucitynow').html() + $('#mt_hukoucitynow_city').html())
			}
			for (var i = 0; i < $('.infopledu').length; i++) {
				if ($('#14_100028_' + (i + 1)) && $('.infopledu .mt_startYear').eq(i).html()) {
					$('#14_100028_' + (i + 1)).val(delZero($('.infopledu .mt_startYear').eq(i).html()) + '至' + delZero($('.infopledu .mt_endYear').eq(i).html()))
				}
			}
			for (var i = 0; i < $('.infoparttimejobs').length; i++) {
				if ($('#14_100028_' + (i + 1)) && $('.infoparttimejobs .mt_startDate').eq(i).html()) {
					$('#14_100028_' + (i + 1)).val(delZero($('.infoparttimejobs .mt_startDate').eq(i).html()) + '至' + delZero($('.infoparttimejobs .mt_endDate').eq(i).html()))
				}
				if ($('#100101_100016_' + (i + 1)) && $('.infoparttimejobs .mt_companyName').eq(i).html()) {
					$('#100101_100016_' + (i + 1)).val($('.infoparttimejobs .mt_companyName').eq(i).html())
				}
				if ($('#100101_100019_' + (i + 1)) && $('.infoparttimejobs .mt_reterenceName').eq(i).html()) {
					$('#100101_100019_' + (i + 1)).val($('.infoparttimejobs .mt_reterenceName').eq(i).html() + '/' + $('.infoparttimejobs .mt_reterence_phone').eq(i).text())
				}
				if ($('#100101_100017_' + (i + 1)) && $('.infoparttimejobs .mt_positionName').eq(i).html()) {
					$('#100101_100017_' + (i + 1)).val($('.infoparttimejobs .mt_positionName').eq(i).html())
				}
				if ($('#100101_100201_' + (i + 1)) && $('.infoparttimejobs .mt_reasons').eq(i).html()) {
					$('#100101_100201_' + (i + 1)).val($('.infoparttimejobs .mt_reasons').eq(i).html())
				}
				if ($('#100101_100018_' + (i + 1)) && $('.infoparttimejobs .mt_salaryMonth').eq(i).html()) {
					$('#100101_100018_' + (i + 1)).val($('.infoparttimejobs .mt_salaryMonth').eq(i).html())
				}
			}
			if($('#21_100021_1').length && $('#mt_fmphone').html()){
				$('#21_100021_1').val($('#mt_fmphone').html())
			}
			if($('#100102_100024_1').length && $('#mt_jjlxrtel').html()){
				$('#100102_100024_1').val($('#mt_jjlxrtel').html())
			}
			if($('#100102_100022_1').length && $('#mt_jjlxr').html()){
				$('#100102_100022_1').val($('#mt_jjlxr').html())
			}
		}
		if (pathname.indexOf('/wt/hkhchr/web/index/showNewResume') != -1) {
			for (var i = 0; i < $('.infoparttimejobs').length; i++) {
				if ($('#100101_100805_' + (i + 1)) && $('.infoparttimejobs .mt_startDate').eq(i).html()) {
					$('#100101_100805_' + (i + 1)).val(delZero($('.infoparttimejobs .mt_startDate').eq(i).html()))
				}
				if ($('#100101_100806_' + (i + 1)) && $('.infoparttimejobs .mt_endDate').eq(i).html()) {
					$('#100101_100806_' + (i + 1)).val(delZero($('.infoparttimejobs .mt_endDate').eq(i).html()))
				}
				if ($('#100101_100807_' + (i + 1)) && $('.infoparttimejobs .mt_companyName').eq(i).html()) {
					$('#100101_100807_' + (i + 1)).val($('.infoparttimejobs .mt_companyName').eq(i).html())
				}
				if ($('#100101_100809_' + (i + 1)) && $('.infoparttimejobs .mt_reterenceName').eq(i).html()) {
					$('#100101_100809_' + (i + 1)).val($('.infoparttimejobs .mt_reterenceName').eq(i).html())
				}
				if ($('#100101_100808_' + (i + 1)) && $('.infoparttimejobs .mt_positionName').eq(i).html()) {
					$('#100101_100808_' + (i + 1)).val($('.infoparttimejobs .mt_positionName').eq(i).html())
				}
				if ($('#100101_100810_' + (i + 1)) && $('.infoparttimejobs .mt_reterence_phone').eq(i).text()) {
					$('#100101_100810_' + (i + 1)).val($('.infoparttimejobs .mt_reterence_phone').eq(i).text())
				}
			}
		}
		if (pathname.indexOf('/wt/Taikang/web/index/showNewResume') != -1) {
			if($('#11_25_1').length && $('#mt_polistatus').html()){
				let polistatus = $('#11_25_1')[0].options;
				switch($('#mt_polistatus').html()){
					case '中共党员': polistatus[1].selected = true;break;
					case '中共预备党员': polistatus[2].selected = true;break;
					case '共青团员': polistatus[3].selected = true;break;
					case '群众': polistatus[13].selected = true;break;
					default: break;
				}
			}
			if($('#11_101801_1').length && $('#mt_hukoucitynow').html()){
				$('#11_101801_1').val($('#mt_hukoucitynow').html() + $('#mt_hukoucitynow_city').html())
			}
			if($('#11_100005_1').length && $('#mt_jjlxrtel').html()){
				$('#11_100005_1').val($('#mt_jjlxrtel').html())
			}
			//社会实践
			if($('#100401_all_content').length){
				let length = $('.infoschoolclub .infopl').length;
				for(let i=0; i<length; i++){
					if($('#100401_100801_' + (i+1)).length && $('.infoschoolclub .mt_startDate').eq(i).html()){
						$('#100401_100801_' + (i+1)).val(formatDate($('.infoschoolclub .mt_startDate').eq(i).html(),2) + '-01')
					}
					if($('#100401_100802_' + (i+1)).length && $('.infoschoolclub .mt_endDate').eq(i).html()){
						$('#100401_100802_' + (i+1)).val(formatDate($('.infoschoolclub .mt_endDate').eq(i).html(),2) + '-01')
					}
					if($('#100401_100803_' + (i+1)).length && $('.infoschoolclub .mt_schClubName').eq(i).html()){
						$('#100401_100803_' + (i+1)).val($('.infoschoolclub .mt_schClubName').eq(i).html())
					}
					if($('#100401_100804_' + (i+1)).length && $('.infoschoolclub .mt_schClubList').eq(i).html()){
						$('#100401_100804_' + (i+1)).val($('.infoschoolclub .mt_schClubList').eq(i).html())
					}
				}
			}
			if($('#46_100302_1').length && $('#mt_hobbies').html()){
				$('#46_100302_1').val($('#mt_hobbies').html())
			}
			if($('#46_100027_1').length && $('#mt_skill').html()){
				$('#46_100027_1').val($('#mt_skill').html())
			}
		}
		if (pathname.indexOf('/wt/Citicbank/web/index/showNewResume') != -1) {
			if($('#1538865239_all_content').length && $('.infoschoolclub .infopl').length){
				let length = $('.infoschoolclub .infopl').length;
				for(let i=0; i<length; i++){
					if($('#1538865239_1538865731_' + (i+1)).length && $('.infoschoolclub .mt_startDate').eq(i).html()){
						$('#1538865239_1538865731_' + (i+1)).val($('.infoschoolclub .mt_startDate').eq(i).html() + '至 ' + $('.infoschoolclub .mt_endDate').eq(i).html())
					}
					if($('#1538865239_1538865841_' + (i+1)).length && $('.infoschoolclub .mt_schClubName').eq(i).html()){
						$('#1538865239_1538865841_' + (i+1)).val($('.infoschoolclub .mt_schClubName').eq(i).html())
					}
					if($('#1538865239_1538867998_' + (i+1)).length && $('.infoschoolclub .mt_positionName').eq(i).html()){
						$('#1538865239_1538867998_' + (i+1)).val($('.infoschoolclub .mt_positionName').eq(i).html())
					}
					if($('#1538865239_1538868235_' + (i+1)).length && $('.infoschoolclub .mt_schClubList').eq(i).html()){
						$('#1538865239_1538868235_' + (i+1)).val($('.infoschoolclub .mt_schClubList').eq(i).html())
					}
				}
				
			}
		}
		if (pathname.indexOf('/wt/Sinochem/web/index/showNewResume') != -1) {
			if($('#1784626267_all_content').length && $('.infoparttimejobs .infopl').length){
				let length = $('.infoparttimejobs .infopl').length;
				for(let i=0; i<length; i++){
					if($('#1784626267_1786001701_' + (i+1)).length && $('.infoparttimejobs .mt_companyName').eq(i).html()){
						$('#1784626267_1786001701_' + (i+1)).val($('.infoparttimejobs .mt_companyName').eq(i).html())
					}
					if($('#1784626267_1784626516_' + (i+1)).length && $('.infoparttimejobs .mt_positionName').eq(i).html()){
						$('#1784626267_1784626516_' + (i+1)).val($('.infoparttimejobs .mt_positionName').eq(i).html())
					}
					if($('#1784626267_1784626558_' + (i+1)).length && $('.infoparttimejobs .workDes').eq(i).html()){
						$('#1784626267_1784626558_' + (i+1)).val($('.infoparttimejobs .workDes').eq(i).html())
					}
					if($('input[name=\"1784626267_1784626490_' + (i+1) + '\"]') && $('.infoparttimejobs .mt_startDate').eq(i).html()){
						$('input[name=\"1784626267_1784626490_' + (i+1) + '\"]').val(formatDate($('.infoparttimejobs .mt_startDate').eq(i).html(), 2) + '-01')
					}
					if($('input[name=\"1784626267_1784626513_' + (i+1) + '\"]') && $('.infoparttimejobs .mt_endDate').eq(i).html()){
						$('input[name=\"1784626267_1784626513_' + (i+1) + '\"]').val(formatDate($('.infoparttimejobs .mt_endDate').eq(i).html(), 2) + '-01')
					}
				}
			}
			if($('#957052900_957053006_1').length && $('#mt_fmname').html()){
				$('#957052900_957053006_1').val($('#mt_fmname').html())
			}
			if($('#957052900_957053368_1').length && $('#mt_fmposition').html()){
				$('#957052900_957053368_1').val($('#mt_fmposition').html())
			}
			if($('#957052900_957053398_1').length && $('#mt_fmphone').html()){
				$('#957052900_957053398_1').val($('#mt_fmphone').html())
			}
			if($('#20_all_content').length && $('.infoschaward .infopl').length){
				let length = $('.infoschaward .infopl').length;
				for(let i=0; i<length; i++){
					if($('#20_849630019_' + (i+1)).length && $('.infoschaward .mt_awardsDes').eq(i).html()){
						$('#20_849630019_' + (i+1)).val($('.infoschaward .mt_awardsDes').eq(i).html())
					}
					if($('input[name=\"20_849630835_' + (i+1) + '\"]') && $('.infoschaward .mt_awardsDate').eq(i).html()){
						$('input[name=\"20_849630835_' + (i+1) + '\"]').val(formatDate($('.infoschaward .mt_awardsDate').eq(i).html(), 2) + '-01')
					}
					if($('#20_80_' + (i+1)).length && $('.infoschaward .mt_awardsType').eq(i).html()){
						let osk = $('#20_80_' + (i+1))[0];
						switch($('.infoschaward .mt_awardsType').eq(i).html()){
							case '国际级':
								osk.options[3].selected = true;
								break;
							case '国家级':
								osk.options[3].selected = true;
								break;
							case '省市级':
								osk.options[2].selected = true;
								break;
							case '院系级':
								osk.options[1].selected = true;
								break;
							default:
								osk.options[1].selected = true;
								break
						}
					}
					
				}
			}
			if($('#849637024_all_content').length && $('.infoschoolclub .infopl').length){
				let length = $('.infoparttimejobs .infopl').length;
				for(let i=0; i<length; i++){
					if($('#849637024_849605040_' + (i+1)).length && $('.infoschoolclub .mt_positionName').eq(i).html()){
						$('#849637024_849605040_' + (i+1)).val($('.infoschoolclub .mt_positionName').eq(i).html())
					}
					if($('#849637024_849604348_' + (i+1)).length && $('.infoschoolclub .mt_schClubList').eq(i).html()){
						$('#849637024_849604348_' + (i+1)).val($('.infoschoolclub .mt_schClubList').eq(i).html())
					}
					if($('input[name=\"849637024_849606166_' + (i+1) + '\"]') && $('.infoschoolclub .mt_startDate').eq(i).html()){
						$('input[name=\"849637024_849606166_' + (i+1) + '\"]').val(formatDate($('.infoschoolclub .mt_startDate').eq(i).html(), 2) + '-01')
					}
					if($('input[name=\"849637024_849606017_' + (i+1) + '\"]') && $('.infoschoolclub .mt_endDate').eq(i).html()){
						$('input[name=\"849637024_849606017_' + (i+1) + '\"]').val(formatDate($('.infoschoolclub .mt_endDate').eq(i).html(), 2) + '-01')
					}
				}
			}
			
		}
		if (pathname.indexOf('/wt/TEDU/web/index/showNewResume') != -1) {
			if($('#11_27_1').length && $('#mt_hukoucitynow').html()){
				let hukou = $('#11_27_1')[0].options;
				let length = hukou.length;
				for(let i=0; i<length; i++){
					if(hukou[i].innerText.substring(0,2) == $('#mt_hukoucitynow').html().substring(0,2)){
						hukou[i].selected = true;
					}
				}
			}
			if($('#21_100015_1').length && $('#mt_fmphone').html()){
				$('#21_100015_1').val($('#mt_fmphone').html())
			}
		}
		if (pathname.indexOf('/wt/LHWY/web/index/showNewResume') != -1) {
			var date = new Date();
			if($('#11_103001_1').length && $('#mt_biryear').html()){
				$('#11_103001_1').val(date.getFullYear() - $('#mt_biryear').html());
			}
			if($('#11_102801_1').length && $('#mt_weight').html()){
				$('#11_102801_1').val($('#mt_weight').html());
			}
			if($('#101001_1_content')){
				let length = $('.infoparttimejobs .infopl').length;
				for(let i=0; i<length; i++){
					if($('input[name=\"101001_103102_' + (i+1) + '\"]') && $('.infoparttimejobs .mt_startDate').eq(i).html()){
						$('input[name=\"101001_103102_' + (i+1) + '\"]').val(formatDate($('.infoparttimejobs .mt_startDate').eq(i).html(), 2) + '-01')
					}
					if($('input[name=\"101001_103103_' + (i+1) + '\"]') && $('.infoparttimejobs .mt_endDate').eq(i).html()){
						$('input[name=\"101001_103103_' + (i+1) + '\"]').val(formatDate($('.infoparttimejobs .mt_endDate').eq(i).html(), 2) + '-01')
					}
					if($('input[name=\"101001_102802_' + (i+1) + '\"]') && $('.infoparttimejobs .mt_companyName').eq(i).html()){
						$('input[name=\"101001_102802_' + (i+1) + '\"]').val($('.infoparttimejobs .mt_companyName').eq(i).html())
					}
					if($('input[name=\"101001_103104_' + (i+1) + '\"]') && $('.infoparttimejobs .mt_positionName').eq(i).html()){
						$('input[name=\"101001_103104_' + (i+1) + '\"]').val($('.infoparttimejobs .mt_positionName').eq(i).html())
					}
					if($('input[name=\"101001_103203_' + (i+1) + '\"]') && $('.infoparttimejobs .workDes').eq(i).html()){
						$('input[name=\"101001_103203_' + (i+1) + '\"]').val($('.infoparttimejobs .workDes').eq(i).html())
					}
				}
			}
			if($('#firstLevl11_102901_1').length && $('#mt_livecity_pro').html()){
				let pro =  $('#firstLevl11_102901_1')[0].options;
				let length = pro.length;
				for(let i=0; i<length; i++){
					if(pro[i].innerText.substring(0,2) == $('#mt_livecity_pro').html().substring(0,2)){
						pro[i].selected = true;
						pro[i].dispatchEvent(event);
						setTimeout(function(){
							let city =  $('#11_102901_1')[0].options;
							let len = city.length;
							for(let j=0; j<len; j++){
								if(city[j].innerText.substring(0,2) == $('#mt_livecity_pro').html().substring(0,2)){
									city[j].selected = true;
									city[j].dispatchEvent(event);
								}
							}
						},200)
					}
				}
			}
			
		}
		if (pathname.indexOf('/wt/dangdang/web/index/showNewResume') != -1) {
			if ($('#11_150051_1').length && $('#mt_edu').html()) {
				var eduOpt = $('#11_150051_1').get(0).options;
				for (var i in eduOpt) {
					if ($('#mt_edu').html().indexOf(eduOpt[i].innerHTML) != -1) {
						eduOpt[i].selected = true;
						break
					}
				}
				if ($('#mt_edu').html() == '大学专科') {
					eduOpt[5].selected = true
				}
			}
			if ($('#11_2003_1') && $('#mt_wxname').html()) {
				$('#11_2003_1').val($('#mt_wxname').html())
			}
			if ($('#11_100110_1') && $('#mt_expectcity_city').html()) {
				$('#11_100110_1').val($('#mt_expectcity_city').html())
			}
			if ($('#100103_100151_1') && $('#mt_skill').html()) {
				$('#100103_100151_1').val($('#mt_skill').html())
			}
			if ($('#21_100123_1') && $('#mt_fmphone').html()) {
				$('#21_100123_1').val($('#mt_fmphone').html())
			}
			if ($('#21_100124_1') && $('#mt_fmposition').html()) {
				$('#21_100124_1').val($('#mt_fmposition').html())
			}
		}
		if (pathname.indexOf('/wt/midea/web/index/showNewResume') != -1) {
			if ($('#11_1040066555_1') && $('#mt_livecity_city').html()) {
				$('#11_1040066555_1').val($('#mt_livecity_city').html())
			}
			for (var i = 0; i < $('.infoparttimejobs').length; i++) {
				if ($('#19_72_' + (i + 1)) && $('.infoparttimejobs .mt_startDate').eq(i).html()) {
					$('#19_72_' + (i + 1)).val(delZero($('.infoparttimejobs .mt_startDate').eq(i).html()))
				}
				if ($('#19_73_' + (i + 1)) && $('.infoparttimejobs .mt_endDate').eq(i).html()) {
					$('#19_73_' + (i + 1)).val(delZero($('.infoparttimejobs .mt_endDate').eq(i).html()))
				}
				if ($('#19_198_' + (i + 1)) && $('.infoparttimejobs .mt_companyName').eq(i).html()) {
					$('#19_198_' + (i + 1)).val($('.infoparttimejobs .mt_companyName').eq(i).html())
				}
				if ($('#19_76_' + (i + 1)) && $('.infoparttimejobs .mt_positionName').eq(i).html()) {
					$('#19_76_' + (i + 1)).val($('.infoparttimejobs .mt_positionName').eq(i).html())
				}
				if ($('#19_78_' + (i + 1)) && $('.infoparttimejobs .mt_workContent .workContent').eq(i).text()) {
					$('#19_78_' + (i + 1)).val($('.infoparttimejobs .mt_workContent .workContent').eq(i).text())
				}
				if ($('#19_202_' + (i + 1)) && $('.infoparttimejobs .mt_department').eq(i).html()) {
					$('#19_202_' + (i + 1)).val($('.infoparttimejobs .mt_department').eq(i).html())
				}
				if ($('#19_79_' + (i + 1)) && $('.infoparttimejobs .mt_reasons').eq(i).html()) {
					$('#19_79_' + (i + 1)).val($('.infoparttimejobs .mt_reasons').eq(i).html())
				}
				if ($('#19_200_' + (i + 1)) && $('.infoparttimejobs .mt_companySize').eq(i).html()) {
					$('#19_200_' + (i + 1)).val($('.infoparttimejobs .mt_companySize').eq(i).html())
				}
				if ($('#19_199_' + (i + 1)).length && $('.infoparttimejobs .mt_companyproperty').eq(i).html()) {
					var ctype = $('#19_199_' + (i + 1))[0];
					switch ($('.infoparttimejobs .mt_companyproperty').eq(i).html()) {
					case '外资-欧美':
						ctype.options[1].selected = true;
						break;
					case '外资-非欧美':
						ctype.options[2].selected = true;
						break;
					case '合资-欧美':
						ctype.options[3].selected = true;
						break;
					case '合资-非欧美':
						ctype.options[4].selected = true;
						break;
					case '国企':
					case '上市公司':
						ctype.options[5].selected = true;
						break;
					case '民营公司':
						ctype.options[6].selected = true;
						break;
					case '外企代表处':
						ctype.options[7].selected = true;
						break;
					default:
						ctype.options[8].selected = true;
						break
					}
				}
			}
		}
		if (pathname.indexOf('/wt/DFL-PV/web/index/showNewResume') != -1) {
			if ($('#11_1337535468_1') && $('#mt_ywname').html()) {
				$('#11_1337535468_1').val($('#mt_ywname').html())
			}
			if ($('#11_105156026_1') && $('#mt_height').html()) {
				$('#11_105156026_1').val($('#mt_height').html())
			}
			if ($('#11_105156336_1') && $('#mt_qqname').html()) {
				$('#11_105156336_1').val($('#mt_qqname').html())
			}
			if ($('#11_1339123780_1') && $('#mt_jjlxr').html()) {
				$('#11_1339123780_1').val($('#mt_jjlxr').html())
			}
			if ($('#11_1339240590_1') && $('#mt_jjlxrtel').html()) {
				$('#11_1339240590_1').val($('#mt_jjlxrtel').html())
			}
			
			if($('#14_1_content')){
				let length = $('#edu-list .mt_education').length;
				for(let i=0; i<length; i++){
					switch($('#edu-list .mt_education').eq(i).html()){
						case '博士研究生':
			                if($('#14_100516_1') && $('#edu-list .mt_startYear').eq(i).html()){
			                	$('#14_100516_1').val(formatDate($('#edu-list .mt_startYear').eq(i).html(), 2) + '-01');
			                }
			                if($('#14_100517_1') && $('#edu-list .mt_endYear').eq(i).html()){
			                	$('#14_100517_1').val(formatDate($('#edu-list .mt_endYear').eq(i).html(), 2) + '-01');
			                }
			                if($('#14_100518_1') && $('#edu-list .mt_schoolName').eq(i).html()){
			                	$('#14_100518_1').val($('#edu-list .mt_schoolName').eq(i).html());
			                }
			                if($('#14_100519_1') && $('#edu-list .mt_professional').eq(i).html()){
			                	$('#14_100519_1').val($('#edu-list .mt_professional').eq(i).html());
			                }
			                if($('#14_100522_1') && $('#edu-list .mt_classranking').eq(i).html()){
			                	let level = $('#14_100522_1')[0].options;
			                	switch($('#edu-list .mt_classranking').eq(i).html()){
			                		case '前5%':
				                        level[1].selected = true;
				                        break;
				                    case '前10%':
				                    	level[2].selected = true;
				                        break;
				                    case '前20%':
				                        level[3].selected = true;
				                        break;
				                    case '前30%':
				                    case '前40%':
				                    case '前50%':
				                        level[4].selected = true;
				                        break;
				                    default:
				                        level[5].selected = true;
				                        break
			                	}
			                	
			                }
			                if($('#14_100524_1') && $('#edu-list .mt_major').eq(i).html()){
			                	$('#14_100524_1').val($('#edu-list .mt_major').eq(i).html());
			                }
			                break;
			            case '硕士研究生':
			            	if($('#14_105157181_1') && $('#edu-list .mt_startYear').eq(i).html()){
			                	$('#14_105157181_1').val(formatDate($('#edu-list .mt_startYear').eq(i).html(), 2) + '-01');
			                }
			                if($('#14_105157215_1') && $('#edu-list .mt_endYear').eq(i).html()){
			                	$('#14_105157215_1').val(formatDate($('#edu-list .mt_endYear').eq(i).html(), 2) + '-01');
			                }
			                if($('#14_105157258_1') && $('#edu-list .mt_schoolName').eq(i).html()){
			                	$('#14_105157258_1').val($('#edu-list .mt_schoolName').eq(i).html());
			                }
			                if($('#14_105161100_1') && $('#edu-list .mt_professional').eq(i).html()){
			                	$('#14_105161100_1').val($('#edu-list .mt_professional').eq(i).html());
			                }
			                if($('#14_100511_1') && $('#edu-list .mt_classranking').eq(i).html()){
			                	let level = $('#14_100511_1')[0].options;
			                	switch($('#edu-list .mt_classranking').eq(i).html()){
			                		case '前5%':
				                        level[1].selected = true;
				                        break;
				                    case '前10%':
				                    	level[2].selected = true;
				                        break;
				                    case '前20%':
				                        level[3].selected = true;
				                        break;
				                    case '前30%':
				                    case '前40%':
				                    case '前50%':
				                        level[4].selected = true;
				                        break;
				                    default:
				                        level[5].selected = true;
				                        break
			                	}
			                	
			                }
			                if($('#14_100513_1') && $('#edu-list .mt_major').eq(i).html()){
			                	$('#14_100513_1').val($('#edu-list .mt_major').eq(i).html());
			                }
			                break;
			            case '海外本科':
			            case '大学本科-一本':
			            case '大学本科-二本':
			            case '大学本科-三本':
			            	if($('#14_105157158_1') && $('#edu-list .mt_startYear').eq(i).html()){
			                	$('#14_105157158_1').val(formatDate($('#edu-list .mt_startYear').eq(i).html(), 2) + '-01');
			                }
			                if($('#14_100527_1') && $('#edu-list .mt_endYear').eq(i).html()){
			                	$('#14_100527_1').val(formatDate($('#edu-list .mt_endYear').eq(i).html(), 2) + '-01');
			                }
			                if($('#14_105157164_1') && $('#edu-list .mt_schoolName').eq(i).html()){
			                	$('#14_105157164_1').val($('#edu-list .mt_schoolName').eq(i).html());
			                }
			                if($('#14_105157170_1') && $('#edu-list .mt_professional').eq(i).html()){
			                	$('#14_105157170_1').val($('#edu-list .mt_professional').eq(i).html());
			                }
			                if($('#14_100504_1') && $('#edu-list .mt_classranking').eq(i).html()){
			                	let level = $('#14_100504_1')[0].options;
			                	switch($('#edu-list .mt_classranking').eq(i).html()){
			                		case '前5%':
				                        level[1].selected = true;
				                        break;
				                    case '前10%':
				                    	level[2].selected = true;
				                        break;
				                    case '前20%':
				                        level[3].selected = true;
				                        break;
				                    case '前30%':
				                    case '前40%':
				                    case '前50%':
				                        level[4].selected = true;
				                        break;
				                    default:
				                        level[5].selected = true;
				                        break
			                	}
			                	
			                }
			                if($('#14_100506_1') && $('#edu-list .mt_major').eq(i).html()){
			                	$('#14_100506_1').val($('#edu-list .mt_major').eq(i).html());
			                }
			                break;
			            
					}
				}		
			}
			if($('#16_1_content')){
				let length = $('#skill-list .infopl').length;
				for(let i=0; i<length; i++){
					switch($('#skill-list .mt_skillEngLevel').eq(i).html()){
						case '大学英语四级':
							$('#16_100401_1').val($('#skill-list .mt_skillEngSorce').eq(i).html());
							break;
						case '大学英语六级':
							$('#16_100402_1').val($('#skill-list .mt_skillEngSorce').eq(i).html());
							break;
						case '专业四级':
							$('#firstLevl16_1342707782_1')[0].options[1].selected = true;
							break;
						case '专业八级':
							$('#firstLevl16_1342707782_1')[0].options[2].selected = true;
							break;
					}
				}
			}
		}
		if (pathname.indexOf('/wt/jxhksh/web/index/showNewResume') != -1){
			if($('#11_245_1') && $('#mt_nativeplace').html()){
				let length = $('#11_245_1')[0].options.length;
				for(let i=0; i<length; i++){
					if($('#11_245_1')[0].options[i].innerText.substring(0,2) == $('#mt_nativeplace').html().substring(0,2)){
						$('#11_245_1')[0].options[i].selected = true;					
					}
				}
			}
			if($('#11_27_1') && $('#mt_nativeplace').html()){
				let length = $('#11_27_1')[0].options.length;
				for(let i=0; i<length; i++){
					if($('#11_27_1')[0].options[i].innerText.substring(0,2) == $('#mt_nativeplace').html().substring(0,2)){
						$('#11_27_1')[0].options[i].selected = true;					
					}
				}
			}
			if($('#firstLevl11_101302_1') && $('#mt_livecity_pro').html()){
				let length = $('#firstLevl11_101302_1')[0].options.length;
				for(let i=0; i<length; i++){
					if($('#firstLevl11_101302_1')[0].options[i].innerText.substring(0,2) == $('#mt_livecity_pro').html().substring(0,2)){
						$('#firstLevl11_101302_1')[0].options[i].selected = true;
					}
				}
			}
			if($('#11_247_1') && $('#mt_height').html()){
				let length = $('#11_247_1')[0].options.length;
				for(let i=0; i<length; i++){
					if($('#11_247_1')[0].options[i].innerText == $('#mt_height').html()){
						$('#11_247_1')[0].options[i].selected = true;
					}
				}
			}
			if($('#11_100001_1') && $('#mt_weight').html()){
				let length = $('#11_100001_1')[0].options.length;
				for(let i=0; i<length; i++){
					if($('#11_100001_1')[0].options[i].innerText == $('#mt_weight').html()){
						$('#11_100001_1')[0].options[i].selected = true;
					}
				}
			}
			if($('#11_25_1') && $('#mt_polistatus').html()){
				let plo = $('#11_25_1')[0];
				switch($('#mt_polistatus').html()){
					case '中共党员':
						plo.options[1].selected = true;
						break;
					case '中共预备党员':
						plo.options[2].selected = true;
						break;
					case '群众':
						plo.options[3].selected = true;
						break;
					case '共青团员':
						plo.options[4].selected = true;
						break;
					default:
						plo.options[5].selected = true;
						break
				}
			}
			if($('#11_150051_1') && $('#mt_edu').html()){
				let edu = $('#11_150051_1')[0];
				switch($('#mt_edu').html()){
					case 'MPA':
						edu.options[11].selected = true;
						break;
					case 'EMBA':
						edu.options[10].selected = true;
						break;
					case 'MBA':
						edu.options[9].selected = true;
						break;
					case '博士研究生':
						edu.options[8].selected = true;
						break;
					case '硕士研究生':
						edu.options[7].selected = true;
						break;
					case '双学士':
					case '大学本科-一本':
					case '大学本科-二本':
					case '大学本科-三本':
						edu.options[6].selected = true;
						break;
					case '大学专科':
						edu.options[5].selected = true;
						break;
					case '中专':
						edu.options[4].selected = true;
						break;
					case '技校/职高':
						edu.options[3].selected = true;
						break;
					case '高中':
						edu.options[2].selected = true;
						break;
					case '初中及以下':
						edu.options[1].selected = true;
						break;
					default:
						break
				}
			}
			if ($('#11_101205_1').length && $('.infoEnglishSkill .mt_skillEngLevel').last().html()) {
				var ctype = $('#11_101205_1')[0];
				switch ($('.infoEnglishSkill .mt_skillEngLevel').last().html()) {
					case '大学英语四级':
						ctype.options[1].selected = true;
						break;
					case '大学英语六级':
						ctype.options[2].selected = true;
						break;
					case '专业四级':
						ctype.options[3].selected = true;
						break;
					case '专业八级':
						ctype.options[4].selected = true;
						break
				}
			}
			if($('#11_101401_1') && $('#mt_add').html()){
				$('#11_101401_1').val($('#mt_add').html());
			}
			if($('#11_101236_1') && $('#mt_zip').html()){
				$('#11_101236_1').val($('#mt_zip').html());
			}
			//社团经历
			if($('#100601_1_content')){
				let length = $('.infoschoolclub .infopl').length;
				for(let i=0; i<length; i++){
					if($('input[name=\"100601_101215_' + (i+1) + '\"]') && $('.infoschoolclub .mt_startDate').eq(i).html()){
						$('input[name=\"100601_101215_' + (i+1) + '\"]').val(formatDate($('.infoschoolclub .mt_startDate').eq(i).html(), 2) + '-01')
					}
					if($('input[name=\"100601_101216_' + (i+1) + '\"]') && $('.infoschoolclub .mt_endDate').eq(i).html()){
						$('input[name=\"100601_101216_' + (i+1) + '\"]').val(formatDate($('.infoschoolclub .mt_endDate').eq(i).html(), 2) + '-01')
					}
					if($('input[name=\"100601_101217_' + (i+1) + '\"]') && $('.infoschoolclub .mt_schClubName').eq(i).html()){
						$('input[name=\"100601_101217_' + (i+1) + '\"]').val($('.infoschoolclub .mt_schClubName').eq(i).html())
					}
					if($('input[name=\"100601_101218_' + (i+1) + '\"]') && $('.infoschoolclub .mt_positionName').eq(i).html()){
						$('input[name=\"100601_101218_' + (i+1) + '\"]').val($('.infoschoolclub .mt_positionName').eq(i).html())
					}
					if($('input[name=\"100601_101219_' + (i+1) + '\"]') && $('.infoschoolclub .mt_workDes').eq(i).html()){
						$('input[name=\"100601_101219_' + (i+1) + '\"]').val($('.infoschoolclub .mt_workDes').eq(i).html())
					}
				}
				
			}
			//实习经历
			if($('#100602_1_content')){
				let length = $('.infoparttimejobs .infopl').length;
				for(let i=0; i<length; i++){
					if($('input[name=\"100602_101220_' + (i+1) + '\"]') && $('.infoparttimejobs .mt_startDate').eq(i).html()){
						$('input[name=\"100602_101220_' + (i+1) + '\"]').val(formatDate($('.infoparttimejobs .mt_startDate').eq(i).html(), 2) + '-01')
					}
					if($('input[name=\"100602_101221_' + (i+1) + '\"]') && $('.infoparttimejobs .mt_endDate').eq(i).html()){
						$('input[name=\"100602_101221_' + (i+1) + '\"]').val(formatDate($('.infoparttimejobs .mt_endDate').eq(i).html(), 2) + '-01')
					}
					if($('input[name=\"100602_101222_' + (i+1) + '\"]') && $('.infoparttimejobs .mt_companyName').eq(i).html()){
						$('input[name=\"100602_101222_' + (i+1) + '\"]').val($('.infoparttimejobs .mt_companyName').eq(i).html())
					}
					if($('input[name=\"100602_101223_' + (i+1) + '\"]') && $('.infoparttimejobs .mt_positionName').eq(i).html()){
						$('input[name=\"100602_101223_' + (i+1) + '\"]').val($('.infoparttimejobs .mt_positionName').eq(i).html())
					}
					if($('input[name=\"100602_101224_' + (i+1) + '\"]') && $('.infoparttimejobs .workDes').eq(i).html()){
						$('input[name=\"100602_101224_' + (i+1) + '\"]').val($('.infoparttimejobs .workDes').eq(i).html())
					}
				}
			}
			//个人荣誉
			if($('#100603')){
				let length = $('.infoschaward .infopl').length;
				for(let i=0; i<length; i++){
					if($('input[name=\"100603_101225_' + (i+1) + '\"]') && $('.infoschaward .mt_awardsDate').eq(i).html()){
						$('input[name=\"100603_101225_' + (i+1) + '\"]').val(formatDate($('.infoschaward .mt_awardsDate').eq(i).html(), 2) + '-01')
					}
					if($('input[name=\"100603_101226_' + (i+1) + '\"]') && $('.infoschaward .mt_awardsName').eq(i).html()){
						$('input[name=\"100603_101226_' + (i+1) + '\"]').val($('.infoschaward .mt_awardsName').eq(i).html())
					}
				}
			}
			//个人评价
			if($('#12_42_1') && $('#mt_selfIntro').html()){
				$('#12_42_1').val($('#mt_selfIntro').html());
			}
		}
		if (pathname.indexOf('/wt/sunwoda/web/index/showNewResume') != -1) {
			//语言能力
			if($('#17_1_content').length){
				let length = $('.infoEnglishSkill .infopl').length;
				for(let i=0; i<length; i++){
					if($('#17_101806_' + (i+1)).length && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html()){
						let ctype = $('#17_101806_' + (i+1))[0];
						switch($('.infoEnglishSkill .mt_skillEngLevel').eq(i).html()){
							case '大学英语四级':
								ctype.options[1].selected = true;
								break;
							case '大学英语六级':
								ctype.options[2].selected = true;
								break;
							case '专业四级':
								ctype.options[3].selected = true;
								break;
							case '专业八级':
								ctype.options[4].selected = true;
								break
						}
					}
					if($('#17_101807_' + (i+1)).length && $('.infoEnglishSkill .mt_skillEngSorce').eq(i).html()){
						$('#17_101807_' + (i+1)).val($('.infoEnglishSkill .mt_skillEngSorce').eq(i).html());
					}
				}
			}
			if($('#11_66006_1').length && $('#mt_maritalstatus').html()){
				let marginStatus = $('#11_66006_1')[0].options;
				switch($('#mt_maritalstatus').html()){
					case '未婚': marginStatus[1].selected = true;break;
					case '已婚': marginStatus[2].selected = true;break;
				}
			}
			if($('#11_27_1').length && $('#mt_hukoucitynow').html()){
				let length = $('#11_27_1')[0].options.length;
				for(let i=0; i<length; i++){
					if($('#11_27_1')[0].options[i].innerText == $('#mt_hukoucitynow').html())
						$('#11_27_1')[0].options[i].selected = true;
				}
			}
			if($('#11_245_1').length && $('#mt_nativeplace').html()){
				let length = $('#11_27_1')[0].options.length;
				for(let i=0; i<length; i++){
					if($('#11_245_1')[0].options[i].innerText.substring(0,2) == $('#mt_nativeplace').html().substring(0,2))
						$('#11_245_1')[0].options[i].selected = true;
				}
			}
			if($('#11_100005_1').length && $('#mt_expectcity_city').html()){
				let length = $('#11_100005_1')[0].options.length;
				for(let i=0; i<length; i++){
					if($('#11_100005_1')[0].options[i].innerText.substring(0,2) == $('#mt_expectcity_city').html().substring(0,2))
						$('#11_100005_1')[0].options[i].selected = true;
				}
			}
			if($('#11_100006_1').length && $('#mt_jjlxr').html()){
				$('#11_100006_1').val($('#mt_jjlxr').html())
			}
			if($('#11_100007_1').length && $('#mt_jjlxrtel').html()){
				$('#11_100007_1').val($('#mt_jjlxrtel').html())
			}
			if($('#14_all_content').length){
				let length = $('.infopledu .infopl').length;
				for(let i=0; i<length; i++){
					if($('#14_100010_' + (i+1)).length){
						$('#14_100010_' + (i+1)).val($('.infopledu .mt_major').eq(i).html());
					}
					if($('#14_100008_' + (i+1)).length){
						$('#14_100008_' + (i+1)).val($('.infopledu .mt_classranking').eq(i).html());
					}
				}
			}
			//社会实践
			if($('#100401_all_content').length){
				let length = $('.infoschoolclub .infopl').length;
				for(let i=0; i<length; i++){
					if($('#100401_100701_' + (i+1)).length){
						$('#100401_100701_' + (i+1)).val(formatDate($('.infoschoolclub .mt_startDate').eq(i).html(), 2) + '-01');
					}
					if($('#100401_100702_' + (i+1)).length){
						$('#100401_100702_' + (i+1)).val(formatDate($('.infoschoolclub .mt_endDate').eq(i).html(), 2) + '-01');
					}
					if($('#100401_100704_' + (i+1)).length){
						$('#100401_100704_' + (i+1)).val($('.infoschoolclub .mt_positionName').eq(i).html());
					}
					if($('#100401_100703_' + (i+1)).length){
						$('#100401_100703_' + (i+1)).val($('.infoschoolclub .mt_schClubName').eq(i).html());
					}
					if($('#100401_100801_' + (i+1)).length){
						$('#100401_100801_' + (i+1)).val($('.infoschoolclub .mt_workDes').eq(i).html());
					}
				}
			}
		}
		if (pathname.indexOf('/wt/yujiahui/web/index/showNewResume') != -1) {
			if($('#21_100201_1').length && $('#mt_fmphone').html()){
				$('#21_100201_1').val($('#mt_fmphone').html())
			}
		}
		if (pathname.indexOf('/wt/huya/web/index/showNewResume') != -1) {
			if($('#17_all_content').length){
				let length = $('.infoOtherSkill .infopl').length;
				for(let i=0; i<length; i++){
					if($('#17_66_' + (i+1)).length){
						let length1 = $('#17_66_' + (i+1))[0].options.length;
						for(let j=0; j<length1; j++){
							if($('#17_66_' + (i+1))[0].options[j].innerText == $('.infoOtherSkill .mt_skillOtherLang').eq(i).html()){
								$('#17_66_' + (i+1))[0].options[j].selected = true;
							}
						}
					}
					if($('#17_67_' + (i+1)).length && $('.infoOtherSkill .mt_skillListenLevel').eq(i).html()){
						let listenSkill = $('#17_67_' + (i+1))[0].options;
						switch($('.infoOtherSkill .mt_skillListenLevel').eq(i).html()){
							case '精通': listenSkill[4].selected = true; break;
							case '熟练': listenSkill[3].selected = true; break;
							case '一般': listenSkill[2].selected = true; break;
							case '了解': listenSkill[1].selected = true; break;
						}
					}
				}
			}
		}
		if (pathname.indexOf('/wt/glodon/web/index/showNewResume') != -1) {
			if ($('#11_1252681486_1') && $('#mt_add').html()) {
				$('#11_1252681486_1').val($('#mt_add').html())
			}
			if ($('#11_1252682930_1') && $('#mt_jjlxr').html()) {
				$('#11_1252682930_1').val($('#mt_jjlxr').html())
			}
			if ($('#11_1252683262_1') && $('#mt_jjlxrtel').html()) {
				$('#11_1252683262_1').val($('#mt_jjlxrtel').html())
			}
			$('.infoparttimejobs').each(function(i, val) {
				if ($('#1245014133_1252659651_' + (i + 1)) && $('.infoparttimejobs .mt_workList').eq(i).html()) {
					$('#1245014133_1252659651_' + (i + 1)).val($('.infoparttimejobs .mt_workList').eq(i).html())
				}
			});
			$('.infoproject').each(function(i, val) {
				if ($('#1245014133_1252659702_' + (i + 1)) && $('.infoproject .mt_proList').eq(i).html()) {
					$('#1245014133_1252659702_' + (i + 1)).val($('.infoproject .mt_proList').eq(i).html())
				}
			});
			$('.infoschaward').each(function(i, val) {
				if ($('#1245014133_1252659883_' + (i + 1)) && $('.infoschaward .mt_schawradList').eq(i).html()) {
					$('#1245014133_1252659883_' + (i + 1)).val($('.infoschaward .mt_schawradList').eq(i).html())
				}
			})
		}
		if (pathname.indexOf('/wt/xdf/web/index/showNewResume') != -1 || pathname.indexOf('/wt/xdf/web/index/showNewResume3') != -1) {
			for (var i = 0; i < $('.infoOtherSkill').length; i++) {
				var oskill = null;
				if ($('#17_67_' + (i + 1)).length && $('.infoOtherSkill .mt_skillListenLevel').eq(i).html()) {
					var lskl = $('#17_67_' + (i + 1))[0];
					switch ($('.infoOtherSkill .mt_skillListenLevel').eq(i).html()) {
					case '精通':
						lskl.options[3].selected = true;
						break;
					case '熟练':
						lskl.options[4].selected = true;
						break;
					case '一般':
						lskl.options[2].selected = true;
						break;
					case '了解':
						lskl.options[1].selected = true;
						break
					}
				}

			}
		}
		if (pathname.indexOf('/wt/ehuatai/web/index/showNewResume') != -1) {
			if($('#11_25_1').length && $('#mt_polistatus').html()){
				let polistatus = $('#11_25_1')[0].options;
				switch($('#mt_polistatus').html()){
					case '中共党员': polistatus[1].selected = true;break;
					case '中共预备党员': polistatus[2].selected = true;break;
					case '共青团员': polistatus[3].selected = true;break;
					case '群众': polistatus[13].selected = true;break;
					default: break;
				}
			}
			if($('#11_100003_1').length && $('.infoparttimejobs .mt_companyName').last().html()){
				$('#11_100003_1').val($('.infoparttimejobs .mt_companyName').last().html())
			}
			if($('#11_100004_1').length && $('.infoparttimejobs .mt_positionName').last().html()){
				$('#11_100004_1').val($('.infoparttimejobs .mt_positionName').last().html())
			}
			if($('#11_100009_1').length && $('#mt_add').html()){
				$('#11_100009_1').val($('#mt_add').html())
			}
			if($('#100301_100601_1').length && $('#mt_fmname').html()){
				$('#100301_100601_1').val($('#mt_fmname').html())
			}
			if($('#100301_100604_1').length && $('#mt_fmphone').html()){
				$('#100301_100604_1').val($('#mt_fmphone').html())
			}
			if($('#100301_100605_1').length && $('#mt_fmwork').html()){
				$('#100301_100605_1').val($('#mt_fmwork').html())
			}
			if($('#100301_100607_1').length && $('#mt_fmposition').html()){
				$('#100301_100607_1').val($('#mt_fmposition').html())
			}
			if($('#100001_100109_1').length && $('#mt_skill').html()){
				$('#100001_100109_1').val($('#mt_skill').html())
			}
			if($('#100001_100502_1').length && $('.infoschaward .infopl').length){
				let award = '';
				for(let i=0; i<$('.infoschaward .infopl').length; i++){
					award += '获奖名称：' + $('.infoschaward .mt_awardsName').eq(i).html()
						   + '\\n获奖时间：' + $('.infoschaward .mt_awardsDate').eq(i).html()
						   + '\\n获奖类型：' + $('.infoschaward .mt_awardsType').eq(i).html() + '\\n';
				}
				$('#100001_100502_1').val(award);
			}
		}
		if (pathname.indexOf('/wt/gree/web/index/showNewResume') != -1) {
			if ($('#21_950797955_1') && $('#mt_fmposition').html()) {
				$('#21_950797955_1').val($('#mt_fmposition').html())
			}
			if ($('#21_950745899_1') && $('#mt_fmphone').html()) {
				$('#21_950745899_1').val($('#mt_fmphone').html())
			}
			if ($('#950743790_950743127_1') && $('#mt_skill').html()) {
				$('#950743790_950743127_1').val($('#mt_skill').html())
			}
			if ($('#11_247_1') && $('#mt_height').html()) {
				$('#11_247_1').val($('#mt_height').html())
			}
			if ($('#11_949466877_1') && $('#mt_weight').html()) {
				$('#11_949466877_1').val($('#mt_weight').html())
			}
			if ($('#11_950741373_1') && $('#mt_qqname').html()) {
				$('#11_950741373_1').val($('#mt_qqname').html())
			}
			for (var i = 0; i < $('.infopledu').length; i++) {
				if ($('#14_950888631_' + (i + 1)) && $('#edu-list .mt_classranking').eq(i).html()) {
					$('#14_950888631_' + (i + 1)).val($('#edu-list .mt_classranking').eq(i).html())
				}
			}
			for (var i = 0; i < $('.infopledu').length; i++) {
				if ($('#14_950888631_' + (i + 1)) && $('#edu-list .mt_classranking').eq(i).html()) {
					$('#14_950888631_' + (i + 1)).val($('#edu-list .mt_classranking').eq(i).html())
				}
			}
			for (var i = 0; i < $('.infoschoolclub').length; i++) {
				if ($('#20_950807074_' + (i + 1)) && $('.infoschoolclub .mt_positionName').eq(i).html()) {
					$('#20_950807074_' + (i + 1)).val($('.infoschoolclub .mt_positionName').eq(i).html())
				}
				if ($('#20_950807181_' + (i + 1)) && $('.infoschoolclub .mt_schClubName').eq(i).html()) {
					$('#20_950807181_' + (i + 1)).val($('.infoschoolclub .mt_schClubName').eq(i).html())
				}
				if ($('#20_950887845_' + (i + 1)) && $('.infoschoolclub .mt_startDate').eq(i).html()) {
					$('#20_950887845_' + (i + 1)).val(delZero($('.infoschoolclub .mt_startDate').eq(i).html()) + '-01')
				}
				if ($('#20_950887591_' + (i + 1)) && $('.infoschoolclub .mt_endDate').eq(i).html()) {
					$('#20_950887591_' + (i + 1)).val(delZero($('.infoschoolclub .mt_endDate').eq(i).html()) + '-01')
				}
				if ($('#20_924087859_' + (i + 1)) && $('.infoschoolclub .mt_workDes').eq(i).html()) {
					$('#20_924087859_' + (i + 1)).val($('.infoschoolclub .mt_workDes').eq(i).html())
				}
			}
			for (var i = 0; i < $('.infoEnglishSkill').length; i++) {
				if ($('#16_949263864_' + (i + 1)).length > 0 && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() == '大学英语四级') {
					document.getElementById('16_949263864_' + (i + 1)).options[1].selected = true
				}
				if ($('#16_949263864_' + (i + 1)).length > 0 && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() == '大学英语六级') {
					document.getElementById('16_949263864_' + (i + 1)).options[2].selected = true
				}
				if ($('#16_949263864_' + (i + 1)).length > 0 && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() == '专业四级') {
					document.getElementById('16_949263864_' + (i + 1)).options[3].selected = true
				}
				if ($('#16_949263864_' + (i + 1)).length > 0 && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() == '专业八级') {
					document.getElementById('16_949263864_' + (i + 1)).options[4].selected = true
				}
				if ($('#16_64_' + (i + 1)) && $('.infoEnglishSkill .mt_skillEngSorce').eq(i).html()) {
					$('#16_64_' + (i + 1)).val($('.infoEnglishSkill .mt_skillEngSorce').eq(i).html())
				}
			}
		}
		if (pathname.indexOf('/wt/Fiberhome/web/index/showNewResume') != -1) {
			if ($('#11_1684487923_1') && $('#mt_jjlxr').html()) {
				$('#11_1684487923_1').val($('#mt_jjlxr').html())
			}
			if ($('#11_1684550083_1') && $('#mt_jjlxrtel').html()) {
				$('#11_1684550083_1').val($('#mt_jjlxrtel').html())
			}
			if ($('#12_935256563_1') && $('#mt_skill').html()) {
				$('#12_935256563_1').val($('#mt_skill').html())
			}
			if ($('#firstLevl11_935257769_1').length && $('#11_935257769_1').length && $('#mt_expectcity').html() && $('#mt_expectcity_city').html()) {
				var pro = document.getElementById('firstLevl11_935257769_1');
				var mypro = $('#mt_expectcity').html();
				var prostr;
				for (var i = 0; i < pro.options.length; i++) {
					prostr = $.trim(pro.options[i].innerHTML);
					if (prostr.indexOf(mypro, 0) != -1) {
						pro.options[i].selected = true;
						pro.dispatchEvent(event);
						setTimeout(function() {
							var city = document.getElementById('11_935257769_1');
							var mycity = $('#mt_expectcity_city').html();
							var citystr;
							for (var j = 0; j < city.options.length; j++) {
								citystr = city.options[j].innerHTML.trim();
								if (citystr.indexOf(mycity, 0) != -1) {
									city.options[j].selected = true;
									break
								}
							}
						},
						200);
						break
					}
				}
			}
			if ($('#firstLevl11_1039945066_1').length > 0 && $('#11_1039945066_1').length > 0 && $('#mt_hukoucity').html() && $('#mt_hukoucity_city').html()) {
				var pro = document.getElementById('firstLevl11_1039945066_1');
				var mypro = $('#mt_hukoucity').html();
				var prostr;
				for (var i = 0; i < pro.options.length; i++) {
					prostr = $.trim(pro.options[i].innerHTML);
					if (prostr.indexOf(mypro, 0) != -1) {
						pro.options[i].selected = true;
						pro.dispatchEvent(event);
						setTimeout(function() {
							var city = document.getElementById('11_1039945066_1');
							var mycity = $('#mt_hukoucity_city').html();
							var citystr;
							for (var j = 0; j < city.options.length; j++) {
								citystr = city.options[j].innerHTML.trim();
								if (citystr.indexOf(mycity, 0) != -1) {
									city.options[j].selected = true;
									break
								}
							}
						},
						200);
						break
					}
				}
			}
			for (var i = 0; i < $('.infoparttimejobs').length; i++) {
				if ($('#1193717781_1193718073_' + (i + 1)) && $('.infoparttimejobs .mt_startDate').eq(i).html()) {
					$('#1193717781_1193718073_' + (i + 1)).val(delZero($('.infoparttimejobs .mt_startDate').eq(i).html()) + '-01')
				}
				if ($('#1193717781_1193718075_' + (i + 1)) && $('.infoparttimejobs .mt_endDate').eq(i).html()) {
					$('#1193717781_1193718075_' + (i + 1)).val(delZero($('.infoparttimejobs .mt_endDate').eq(i).html()) + '-01')
				}
				if ($('#1193717781_1193717865_' + (i + 1)) && $('.infoparttimejobs .mt_companyName').eq(i).html()) {
					$('#1193717781_1193717865_' + (i + 1)).val($('.infoparttimejobs .mt_companyName').eq(i).html())
				}
				if ($('#1193717781_1193718084_' + (i + 1)) && $('.infoparttimejobs .mt_workContent .workContent').eq(i).text()) {
					$('#1193717781_1193718084_' + (i + 1)).val($('.infoparttimejobs .mt_workContent .workContent').eq(i).text())
				}
				if ($('#19_979197128_' + (i + 1)) && $('.infoparttimejobs .mt_reterenceName').eq(i).html()) {
					$('#19_979197128_' + (i + 1)).val($('.infoparttimejobs .mt_reterenceName').eq(i).html() + $('.infoparttimejobs .mt_reterence_phone').eq(i).html())
				}
				var len = $('.infofulltimejobs').length;
				if ($('#1193717781_1193718073_' + (i + 1 + len)) && $('.infoparttimejobs .mt_startDate').eq(i).html()) {
					$('#1193717781_1193718073_' + (i + 1 + len)).val(delZero($('.infoparttimejobs .mt_startDate').eq(i).html()) + '-01')
				}
				if ($('#1193717781_1193718075_' + (i + 1 + len)) && $('.infopledu .mt_endYear').eq(i).html()) {
					$('#1193717781_1193718075_' + (i + 1 + len)).val(delZero($('.infopledu .mt_endYear').eq(i).html()) + '-01')
				}
				if ($('#1193717781_1193717865_' + (i + 1 + len)) && $('.infoparttimejobs .mt_companyName').eq(i).html()) {
					$('#1193717781_1193717865_' + (i + 1 + len)).val($('.infoparttimejobs .mt_companyName').eq(i).html())
				}
				if ($('#1193717781_1193718084_' + (i + 1 + len)) && $('.infoparttimejobs .mt_workContent .workContent').eq(i).text()) {
					$('#1193717781_1193718084_' + (i + 1 + len)).val($('.infoparttimejobs .mt_workContent .workContent').eq(i).text())
				}
				if ($('#19_979197128_' + (i + 1)) && $('.infoparttimejobs .mt_reterenceName').eq(i).html()) {
					$('#19_979197128_' + (i + 1)).val($('.infoparttimejobs .mt_reterenceName').eq(i).html() + $('.infoparttimejobs .mt_reterence_phone').eq(i).html())
				}
			}
			for (var i = 0; i < $('.infoplcerti').length; i++) {
				if ($('#1193892592_1193892701_' + (i + 1))) {
					$('#1193892592_1193892701_' + (i + 1)).val($('.infoplcerti .mt_certificateName').eq(i).html() + '\\n' + $('.infoplcerti .mt_getDate').eq(i).html() + '\\n' + $('.infoplcerti .mt_certificateDes').eq(i).html())
				}
			}
			for (var i = 0; i < $('.infoEnglishSkill').length; i++) {
				if ($('#1193892592_1193892597_' + (i + 1))) {
					$('#1193892592_1193892597_' + (i + 1)).val($('.infoEnglishSkill .mt_skillEngLevel').eq(i).html())
				}
			}
		}
		if (pathname.indexOf('/wt/digitalchina/web/index/showNewResume') != -1) {
			if ($('#11_247_1') && $('#mt_height').html()) {
				$('#11_247_1').val($('#mt_height').html())
			}
			if ($('#11_978945750_1') && $('#mt_weight').html()) {
				$('#11_978945750_1').val($('#mt_weight').html())
			}
			if ($('#21_983831990_1') && $('#mt_fmphone').html()) {
				$('#21_983831990_1').val($('#mt_fmphone').html())
			}
			for (var i = 0; i < $('.infoschaward').length; i++) {
				if ($('#20_979197434_' + (i + 1)) && $('.infoschaward .mt_schawradList').eq(i).html()) {
					$('#20_979197434_' + (i + 1)).val($('.infoschaward .mt_schawradList').eq(i).html())
				}
			}
			for (var i = 0; i < $('.infoEnglishSkill').length; i++) {
				var oskill;
				if ($('#firstLevl43_320_' + (i + 1)).length && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html()) {
					console.log('i' + i);
					oskill = document.getElementById('firstLevl43_320_' + (i + 1));
					oskill.options[1].selected = true;
					oskill.dispatchEvent(event)
				}
			}
			setTimeout(function() {
				for (var k = 0; k < $('.infoEnglishSkill').length; k++) {
					if ($('#43_320_' + (k + 1)).length) {
						console.log('#43_320_' + (k + 1));
						var oski = document.getElementById('43_320_' + (k + 1));
						for (var j = 1; j < oski.options.length; j++) {
							if ($('.infoEnglishSkill .mt_skillEngLevel').eq(k).html().indexOf(oski.options[j].innerHTML) != -1) {
								console.log(oski.options[j]);
								oski.options[j].selected = true;
								oski.dispatchEvent(event);
								break
							}
						}
					}
				}
			},
			600)
		}
		if (pathname.indexOf('/wt/SKSHU/web/index/showNewResume') != -1) {
			if ($('#11_26_1') && $('#mt_add').html()) {
				$('#11_26_1').val($('#mt_add').html() + $('#mt_zip').html())
			}
			if ($('#11_27_1') && $('#mt_postadd').html()) {
				$('#11_27_1').val($('#mt_postadd').html() + $('#mt_zip').html())
			}
			if ($('#21_101103_1') && $('#mt_fmphone').html()) {
				$('#21_101103_1').val($('#mt_fmphone').html())
			}
			if ($('#11_247_1') && $('#mt_height').html()) {
				$('#11_247_1').val($('#mt_height').html())
			}
			if ($('#11_101601_1') && $('#mt_weight').html()) {
				$('#11_101601_1').val($('#mt_weight').html())
			}
			if ($('#11_101602_1').length && $('.infoEnglishSkill .mt_skillEngLevel').html() && $('.infoEnglishSkill .mt_skillEngLevel').html() == '大学英语四级') {
				document.getElementById('11_101602_1').options[1].selected = true
			}
			if ($('#11_101602_1').length && $('.infoEnglishSkill .mt_skillEngLevel').html() && $('.infoEnglishSkill .mt_skillEngLevel').html() == '大学英语六级') {
				document.getElementById('11_101602_1').options[2].selected = true
			}
			if ($('#11_101602_1').length && $('.infoEnglishSkill .mt_skillEngLevel').html() && $('.infoEnglishSkill .mt_skillEngLevel').html() == '专业四级') {
				document.getElementById('11_101602_1').options[3].selected = true
			}
			if ($('#11_101602_1').length && $('.infoEnglishSkill .mt_skillEngLevel').html() && $('.infoEnglishSkill .mt_skillEngLevel').html() == '专业八级') {
				document.getElementById('11_101602_1').options[4].selected = true
			}
			if ($('#11_101603_1') && $('.infoEnglishSkill .mt_skillEngSorce').html()) {
				$('#11_101603_1').val($('.infoEnglishSkill .mt_skillEngSorce').html())
			}
			for (var i = 0; i < $('.infoschaward').length; i++) {
				if ($('#20_101402_' + (i + 1)).length && $('.infoschaward .mt_awardsName').eq(i).html()) {
					$('#20_101402_' + (i + 1)).val($('.infoschaward .mt_awardsName').eq(i).html())
				}
				if ($('#20_101403_' + (i + 1)).length && $('.infoschaward .mt_awardsDate').eq(i).html()) {
					$('#20_101403_' + (i + 1)).val(delZero($('.infoschaward .mt_awardsDate').eq(i).html()) + '-01')
				}
				if ($('#20_101401_' + (i + 1)).length && $('.infoschaward .mt_awardsType').eq(i).html()) {
					if ($('.infoschaward .mt_awardsType').eq(i).html() == '国家级') {
						$('#20_101401_' + (i + 1)).get(0).options[1].selected = true
					}
					if ($('.infoschaward .mt_awardsType').eq(i).html() == '省市级') {
						$('#20_101401_' + (i + 1)).get(0).options[2].selected = true
					}
					if ($('.infoschaward .mt_awardsType').eq(i).html() == '学校级') {
						$('#20_101401_' + (i + 1)).get(0).options[3].selected = true
					}
					if ($('.infoschaward .mt_awardsType').eq(i).html() == '院系级') {
						$('#20_101401_' + (i + 1)).get(0).options[4].selected = true
					} else {
						$('#20_101401_' + (i + 1)).get(0).options[5].selected = true
					}
				}
			}
			for (var i = 0; i < $('.infoschoolclub').length; i++) {
				if ($('#101001_101702_' + (i + 1)) && $('.infoschoolclub .mt_positionName').eq(i).html()) {
					$('#101001_101702_' + (i + 1)).val($('.infoschoolclub .mt_positionName').eq(i).html())
				}
				if ($('#101001_101703_' + (i + 1)) && $('.infoschoolclub .mt_startDate').eq(i).html()) {
					$('#101001_101703_' + (i + 1)).val(delZero($('.infoschoolclub .mt_startDate').eq(i).html()))
				}
				if ($('#101001_101704_' + (i + 1)) && $('.infoschoolclub .mt_workDes').eq(i).html()) {
					$('#101001_101704_' + (i + 1)).val($('.infoschoolclub .mt_workDes').eq(i).html())
				}
			}
		};
		
	});
})()