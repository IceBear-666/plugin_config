(function() {
	KISSY.one('.quick-write').on('click',
	function() {
		if ($('#jm_qiuck_cover')) {
			$('#jm_qiuck_cover').fadeIn();
			setTimeout(function() {
				$('#jm_qiuck_cover').fadeOut()
			},
			1000)
		}
		
		
		var event = document.createEvent('HTMLEvents');
		event.initEvent('change', true, false);
		var help = {
			getGraguateMax: function() {
				var maxid = 0;
				var maxedutime;
				for (var i = 0; i < $('.infopledu').length; i++) {
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
				return maxid
			},
			getGraguateMin: function() {
				var minid = 0;
				var minedutime;
				for (var i = 0; i < $('.infopledu').length; i++) {
					var endyear = parseInt($('#edu-list .mt_endYearY').eq(i).html());
					if (i == 0) {
						minedutime = endyear;
						minid = 0
					} else {
						if (endyear < minedutime) {
							minedutime = endyear;
							minid = i
						}
					}
				}
				return minid
			}
		};
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
		function addZero(date) {
			date = date.split('-');
			if (date.length == 3) {
				for (var i = 0; i < date.length; i++) {
					date[i] = date[i] < 10 ? '0' + date[i] : date[i]
				}
				return date.join('-')
			} else if (date.length == 2) {
				for (var i = 0; i < date.length; i++) {
					date[i] = date[i] < 10 ? '0' + date[i] : date[i]
				}
				return date.join('-') + '-01'
			}
		}
		function getTitle(obj) {
			if (obj.length) {
				var str = obj.parent('dd').prev('dt').text();
				if (str[0] == '*') {
					str = str.substr(1)
				}
				return str.trim()
			}
		}
		function selectFac(content, obj) {
			if (content && obj.length) {
				var opt = obj.get(0).options;
				for (var i in opt) {
					if (content.indexOf(opt[i].innerHTML) != -1) {
						opt[i].selected = true;
						break
					}
				}
			}
		}
		function selectFacc(content, obj) {
			var t = 0;
			if (content && obj.length) {
				var opt = obj.get(0).options;
				for (var i = 0; i < opt.length; i++) {
					if (opt[i].innerHTML.indexOf(content) != -1) {
						opt[i].selected = true;
						break
					}
				}
			}
		}
		function getRank(rank) {
			rank = parseInt(rank.replace(/[^0-9]/ig, ''));
			if (rank <= 5) {
				return '前5%'
			} else if (rank <= 20) {
				return '前20%'
			} else if (rank <= 50) {
				return '前50%'
			} else {
				return '其他'
			}
		}
		function getRankEn(rank) {
			rank = parseInt(rank.replace(/[^0-9]/ig, ''));
			if (rank <= 5) {
				return 'Top5%'
			} else if (rank <= 20) {
				return 'Top20%'
			} else if (rank <= 50) {
				return 'Top50%'
			} else {
				return 'other'
			}
		}
		function getOtRankEn(rank) {
			rank = parseInt(rank.replace(/[^0-9]/ig, ''));
			if (rank <= 5) {
				return 'Top5%'
			} else if (rank <= 10) {
				return 'Top10%'
			} else if (rank <= 20) {
				return 'Top20%'
			} else if (rank <= 30) {
				return 'Top30%'
			} else {
				return '其他'
			}
		}
		function getOtRank(rank) {
			rank = parseInt(rank.replace(/[^0-9]/ig, ''));
			if (rank <= 10) {
				return '前10%'
			} else if (rank <= 30) {
				return '前30%'
			} else if (rank <= 50) {
				return '前50%'
			} else if (rank <= 80) {
				return '前80%'
			} else {
				return '其他'
			}
		}
		function dispatch(el, type) {
			let evt = document.createEvent('Event');
			evt.initEvent('click', true, true);
			el.dispatchEvent(evt)
		}
		if ($('#container h1').eq(0).text() == '基本信息' || $('.main_title').eq(0).text().trim() == '基本信息' || $('#container h1').eq(0).text() == '基本资料' || $('#container h1').eq(0).text() == 'Basic Information') {
			var date = new Date();
			if ($('input[name=\"cc_Cname_1_1\"]').length && $('#mt_name').html()) {
				$('input[name=\"cc_Cname_1_1\"]').val($('#mt_name').html())
			}
			if ($('input[name=\"cc_Ename_1_1\"]').length && $('#mt_ywname').html()) {
				$('input[name=\"cc_Ename_1_1\"]').val($('#mt_ywname').html())
			}
			if ($('select[name=\"cc_Gender_1_1\"]').length) {
				if ($('#mt_sex').html() && $('#mt_sex').html() == '男') {
					document.getElementById('cc_Gender_1_1').options[1].selected = true
				}
				if ($('#mt_sex').html() && $('#mt_sex').html() == '女') {
					document.getElementById('cc_Gender_1_1').options[2].selected = true
				}
			}
			if ($('input[cname=\"国籍\"]').length && $('#mt_national').html()) {
				$('input[cname=\"国籍\"]').val($('#mt_national').html())
			}
			if ($('input[cname=\"籍贯\"]').length && $('#mt_nativeplace').html()) {
				$('input[cname=\"籍贯\"]').val($('#mt_nativeplace').html())
			}
			if ($('input[cname=\"户籍地址\"]').length && $('#mt_nativeplace').html()) {
				$('input[cname=\"户籍地址\"]').val($('#mt_nativeplace').html() + $('#mt_native_city').html())
			}
			if ($('input[cname=\"年龄\"]').length && $('#mt_biryear').html()) {
				$('input[cname=\"年龄\"]').val(date.getFullYear() - $('#mt_biryear').html())
			}
			if ($('input[cname=\"身高（cm）\"]').length && $('#mt_height').html()) {
				$('input[cname=\"身高（cm）\"]').val($('#mt_height').html())
			}
			if ($('input[cname=\"身高\"]').length && $('#mt_height').html()) {
				$('input[cname=\"身高\"]').val($('#mt_height').html())
			}
			if ($('input[cname=\"身高（CM）\"]').length && $('#mt_height').html()) {
				$('input[cname=\"身高（CM）\"]').val($('#mt_height').html())
			}
			if ($('input[cname=\"身高（应聘动物驯养岗人员必填）\"]').length && $('#mt_height').html()) {
				$('input[cname=\"身高（应聘动物驯养岗人员必填）\"]').val($('#mt_height').html())
			}
			if ($('input[cname=\"体重（应聘动物驯养岗人员必填）\"]') && $('#mt_weight').html()) {
				$('input[cname=\"体重（应聘动物驯养岗人员必填）\"]').val($('#mt_weight').html())
			}
			if ($('input[cname=\"体重（KG）\"]').length && $('#mt_weight').html()) {
				$('input[cname=\"体重（KG）\"]').val($('#mt_weight').html())
			}
			if ($('input[cname=\"体重（kg）\"]').length && $('#mt_weight').html()) {
				$('input[cname=\"体重（kg）\"]').val($('#mt_weight').html())
			}
			if ($('input[cname=\"体重\"]').length && $('#mt_weight').html()) {
				$('input[cname=\"体重\"]').val($('#mt_weight').html())
			}
			if ($('input[cname=\"民族\"]').length && $('#mt_nation').html()) {
				$('input[cname=\"民族\"]').val($('#mt_nation').html())
			}
			if ($('textarea[cname=\"特长及爱好\"]').length && $('#mt_skill').html()) {
				$('textarea[cname=\"特长及爱好\"]').val($('#mt_skill').html())
			}
			if ($('input[cname=\"QQ\"]').length && $('#mt_qqname').html()) {
				$('input[cname=\"QQ\"]').val($('#mt_qqname').html())
			}
			if($('input[cname=\"毕业日期\"]').length && $('#edu-list .mt_endYear').last().html()){
            	$('input[cname=\"毕业日期\"]').val(formatDate($('#edu-list .mt_endYear').last().html(), 2) + '-01');
            }
			if ($('select[cname=\"国籍\"]').length && $('#mt_national').html()) {
				switch($('#mt_national').html()){
					case '中国': $('select[cname=\"国籍\"]')[0].options[1].selected = true;break;
					default: $('select[cname=\"国籍\"]')[0].options[3].selected = true;break;
				}
			}
			if ($('select[cname=\"英语水平\"]').length && $('.infoEnglishSkill .mt_skillEngLevel').last().html()) {
				let level = $('select[cname=\"英语水平\"]').prev()[0].options;
				switch($('.infoEnglishSkill .mt_skillEngLevel').last().html()){
					case '大学英语四级': 
						level[1].selected = true;
						level[1].dispatchEvent(event);
						break;
					case '大学英语六级': 
						level[2].selected = true;
						level[2].dispatchEvent(event);
						break;
					case '专业四级': 
						level[3].selected = true;
						level[3].dispatchEvent(event);
						break;
					case '专业八级': 
						level[4].selected = true;
						level[4].dispatchEvent(event);
						break;
				}
			}
			if ($('input[cname=\"其他外语水平\"]').length && $('.infoOtherSkill .mt_skillOtherLang').html()) {
				$('input[cname=\"其他外语水平\"]').val($('.infoOtherSkill .mt_skillOtherLang').html())
			}
			if ($('textarea[cname=\"个人特长\"]').length && $('#mt_skill').html()) {
				$('textarea[cname=\"个人特长\"]').val($('#mt_skill').html())
			}
			if ($('input[cname=\"紧急联系人手机号码\"]').length && $('#mt_jjlxrtel').html()) {
				$('input[cname=\"紧急联系人手机号码\"]').val($('#mt_jjlxrtel').html())
			}
			if ($('select[cname=\"个人有效证件类型\"]').length && $('#mt_idtype').html()) {
				let idtype = $('select[cname=\"个人有效证件类型\"]')[0].options;
				switch($('#mt_idtype').html()){
					case '身份证': idtype[1].selected = true;break;
					case '护照': idtype[2].selected = true;break;
				}
			}
			if ($('input[cname=\"最高学位\"]').length && $('.infopledu .mt_degree').last().html()) {
				$('input[cname=\"最高学位\"]').val($('.infopledu .mt_degree').last().html())
			}
			if ($('input[name=\"cc_CCA31_1_1\"]').length && (getTitle($('input[name=\"cc_CCA31_1_1\"]')) == '* 国籍' || getTitle($('input[name=\"cc_CCA31_1_1\"]')) == '国籍')) {
				$('input[name=\"cc_CCA31_1_1\"]').val($('#mt_national').html())
			}
			if ($('input[name=\"cc_CCA31_1_1\"]').length && (getTitle($('input[name=\"cc_CCA31_1_1\"]')) == '* 身高' || getTitle($('input[name=\"cc_CCA31_1_1\"]')) == '身高')) {
				$('input[name=\"cc_CCA31_1_1\"]').val($('#mt_height').html())
			}
			if ($('input[name=\"cc_Birthday_3_1\"]').length && $('#mt_birth').html()) {
				$('input[name=\"cc_Birthday_3_1\"]').val(addZero($('#mt_birth').html()))
			}
			if ($('input[cname=\"cc_Birthday_3_1\"]').length && $('#mt_birth').html()) {
				$('input[cname=\"cc_Birthday_3_1\"]').val(addZero($('#mt_birth').html()))
			}
			if ($('select[name=\"cc_Marriage_1_1\"]').length) {
				if ($('#mt_maritalstatus').html() && $('#mt_maritalstatus').html() == '未婚') {
					document.getElementById('cc_Marriage_1_1').options[1].selected = true
				}
				if ($('#mt_maritalstatus').html() && $('#mt_maritalstatus').html() == '已婚') {
					document.getElementById('cc_Marriage_1_1').options[2].selected = true
				}
				if ($('#mt_maritalstatus').html() && $('#mt_maritalstatus').html() == '离婚') {
					document.getElementById('cc_Marriage_1_1').options[3].selected = true
				}
			}
			if ($('input[name=\"cc_IDCard_1_1\"]').length && $('#mt_id').html()) {
				$('input[name=\"cc_IDCard_1_1\"]').val($('#mt_id').html())
			}
			if ($('select[name=\"cc_Party_1_1\"]').length) {
				if (document.getElementById('cc_Party_1_1').options[2].value == '预备党员') {
					if ($('#mt_polistatus').html() && $('#mt_polistatus').html() == '中共党员') {
						document.getElementById('cc_Party_1_1').options[1].selected = true
					} else if ($('#mt_polistatus').html() && $('#mt_polistatus').html() == '中共预备党员') {
						document.getElementById('cc_Party_1_1').options[2].selected = true
					} else if ($('#mt_polistatus').html() && $('#mt_polistatus').html() == '共青团员') {
						document.getElementById('cc_Party_1_1').options[3].selected = true
					} else {
						document.getElementById('cc_Party_1_1').options[4].selected = true
					}
				} else {
					if ($('#mt_polistatus').html() && $('#mt_polistatus').html() == '中共党员') {
						document.getElementById('cc_Party_1_1').options[1].selected = true
					} else if ($('#mt_polistatus').html() && $('#mt_polistatus').html() == '共青团员') {
						document.getElementById('cc_Party_1_1').options[2].selected = true
					} else if ($('#mt_polistatus').html() && $('#mt_polistatus').html() == '群众') {
						document.getElementById('cc_Party_1_1').options[3].selected = true
					} else {
						document.getElementById('cc_Party_1_1').options[4].selected = true
					}
				}
			}
			if ($('input[name=\"cc_Email_1_1\"]').length && $('#mt_email').html()) {
				$('input[name=\"cc_Email_1_1\"]').val($('#mt_email').html())
			}
			if ($('input[name=\"cc_MobilePhone_1_1\"]').length && $('#mt_tel').html()) {
				$('input[name=\"cc_MobilePhone_1_1\"]').val($('#mt_tel').html())
			}
			if ($('input[name=\"cc_QQ_1_1\"]').length && $('#mt_qqname').html()) {
				$('input[name=\"cc_QQ_1_1\"]').val($('#mt_qqname').html())
			}
			if ($('input[name=\"cc_Phone_1_1\"]').length && $('#mt_gudingtel').html()) {
				if ($('input[name=\"cc_Phone_1_1\"]').eq(0).attr('cname') == '紧急联系人电话') {
					$('input[name=\"cc_Phone_1_1\"]').val($('#mt_jjlxrtel').html())
				} else {
					$('input[name=\"cc_Phone_1_1\"]').val($('#mt_gudingtel').html())
				}
			}
			if ($('input[cname=\"紧急联系人姓名\"]').length && $('#mt_jjlxr').html()) {
				$('input[cname=\"紧急联系人姓名\"]').val($('#mt_jjlxr').html())
			}
			if ($('input[name=\"cc_Address_5_1\"]') && $('#mt_add').html()) {
				if ($('input[name=\"cc_Address_5_1\"]').eq(0).attr('cname') == '家庭地址' || $('input[name=\"cc_Address_5_1\"]').eq(0).attr('cname') == '家庭户籍地址') {
					$('input[name=\"cc_Address_5_1\"]').val($('#mt_postadd').html())
				} else {
					$('input[name=\"cc_Address_5_1\"]').val($('#mt_add').html())
				}
			}
			if ($('input[name=\"cc_Address_5_1\"]').attr('cname') == '英文名' && $('#mt_ywname').html()) {
				$('input[name=\"cc_Address_5_1\"]').val($('#mt_ywname').html())
			}
			if ($('input[name=\"cc_CCF8_6_1\"]') && $('#mt_add').html()) {
				$('input[name=\"cc_CCF8_6_1\"]').val($('#mt_add').html())
			}
			if ($('input[name=\"cc_CCF8_6_1\"]') && $('input[name=\"cc_CCF8_6_1\"]').eq(0).attr('cname') == '特长') {
				$('input[name=\"cc_CCF8_6_1\"]').val('')
			}
			if ($('input[name=\"cc_ZipCode_1_1\"]') && $('#mt_zip').html()) {
				$('input[name=\"cc_ZipCode_1_1\"]').val($('#mt_zip').html())
			}
			if ($('input[name=\"cc_EmergentContact_1_1\"]') && $('#mt_jjlxr').html()) {
				$('input[name=\"cc_EmergentContact_1_1\"]').val($('#mt_jjlxr').html())
			}
			if ($('input[name=\"cc_EmergentContact_1_1\"]') && $('#mt_jjlxr').html()) {
				$('input[name=\"cc_EmergentContact_1_1\"]').val($('#mt_jjlxr').html())
			}
			if ($('input[name=\"cc_Contact_1_1\"]') && $('#mt_jjlxrtel').html() && $('input[name=\"cc_Contact_1_1\"]').eq(0).attr('cname') != '期望年收入') {
				$('input[name=\"cc_Contact_1_1\"]').val($('#mt_jjlxrtel').html())
			}
			if ($('input[name=\"cc_CCA8_1_1\"]') && $('#mt_national').html()) {
				if ($('input[name=\"cc_CCA8_1_1\"]').eq(0).attr('cname') == '体重') {
					$('input[name=\"cc_CCA8_1_1\"]').val($('#mt_weight').html())
				} else if ($('input[name=\"cc_CCA8_1_1\"]').eq(0).attr('cname') != '岗位名称' && $('input[name=\"cc_CCA8_1_1\"]').eq(0).attr('cname') != '期望月薪') {
					$('input[name=\"cc_CCA8_1_1\"]').val($('#mt_national').html())
				}
			}
			if ($('input[name=\"cc_CCA26_1_1\"]') && $('#mt_nation').html() && getTitle($('input[name=\"cc_CCA26_1_1\"]')) == '民族') {
				$('input[name=\"cc_CCA26_1_1\"]').val($('#mt_nation').html())
			}
			if ($('input[name=\"cc_CCA6_1_1\"]') && ($('input[name=\"cc_CCA6_1_1\"]').parent('dd').prev('dt').text() == '国籍' || $('input[name=\"cc_CCA6_1_1\"]').parent('dd').prev('dt').text() == '* 国籍') && $('#mt_national').html()) {
				$('input[name=\"cc_CCA6_1_1\"]').val($('#mt_national').html())
			}
			if ($('input[name=\"cc_CCA6_1_1\"]') && getTitle($('input[name=\"cc_CCA6_1_1\"]')) == '民族') {
				$('input[name=\"cc_CCA6_1_1\"]').val($('#mt_nation').html())
			}
			if ($('select[name=\"cc_CCA6_1_1\"]').length && getTitle($('select[name=\"cc_CCA6_1_1\"]')) == '民族') {
				var pro = document.getElementById('cc_CCA6_1_1');
				var nowpro = $('#mt_nation').html();
				for (var i = 0; i < pro.options.length; i++) {
					prostr = $.trim(pro.options[i].innerHTML);
					if (prostr.indexOf(nowpro) != -1) {
						pro.options[i].selected = true;
						pro.dispatchEvent(event);
						break
					}
				}
			}
			if ($('select[cname=\"民族\"]').length) {
				var pro = $('select[cname=\"民族\"]')[0];
				var nowpro = $('#mt_nation').html();
				for (var i = 0; i < pro.options.length; i++) {
					prostr = $.trim(pro.options[i].innerHTML);
					if (prostr.indexOf(nowpro) != -1) {
						pro.options[i].selected = true;
						pro.dispatchEvent(event);
						break
					}
				}
			}
			if ($('select[name=\"cc_CCA41_1_1\"]').length && getTitle($('select[name=\"cc_CCA41_1_1\"]')) == '民族') {
				var pro = document.getElementById('cc_CCA41_1_1');
				var nowpro = $('#mt_nation').html();
				for (var i = 0; i < pro.options.length; i++) {
					prostr = $.trim(pro.options[i].innerHTML);
					if (prostr.indexOf(nowpro) != -1) {
						pro.options[i].selected = true;
						pro.dispatchEvent(event);
						break
					}
				}
			}
			if ($('select[name=\"cc_CCA23_1_1\"]').length && getTitle($('select[name=\"cc_CCA23_1_1\"]')) == '民族') {
				var pro = document.getElementById('cc_CCA23_1_1');
				var nowpro = $('#mt_nation').html();
				for (var i = 0; i < pro.options.length; i++) {
					prostr = $.trim(pro.options[i].innerHTML);
					if (prostr.indexOf(nowpro) != -1) {
						pro.options[i].selected = true;
						pro.dispatchEvent(event);
						break
					}
				}
			}
			if ($('select[name=\"cc_CCA7_1_1\"]').length && getTitle($('select[name=\"cc_CCA7_1_1\"]')) == '民族') {
				var pro = document.getElementById('cc_CCA7_1_1');
				var nowpro = $('#mt_nation').html();
				for (var i = 0; i < pro.options.length; i++) {
					prostr = $.trim(pro.options[i].innerHTML);
					if (prostr.indexOf(nowpro) != -1) {
						pro.options[i].selected = true;
						pro.dispatchEvent(event);
						break
					}
				}
			}
			if ($('select[name=\"cc_CCA6_1_1\"]').length && $('#cc_CCA6_1_1').attr('cname') == '籍贯') {
				var pro = document.getElementById('cc_CCA6_1_1');
				var nowpro = $('#mt_native_city').html();
				for (var i = 0; i < pro.options.length; i++) {
					prostr = $.trim(pro.options[i].innerHTML);
					if (prostr.indexOf(nowpro) != -1) {
						pro.options[i].selected = true;
						pro.dispatchEvent(event);
						break
					}
				}
			}
			if ($('select[name=\"cc_CCA18_1_1\"]').length && $('#cc_CCA18_1_1').attr('cname') != '年龄') {
				var pro = document.getElementById('cc_CCA18_1_1');
				var nowpro = $('#mt_nation').html();
				for (var i = 0; i < pro.options.length; i++) {
					prostr = $.trim(pro.options[i].innerHTML);
					if (prostr.indexOf(nowpro) != -1) {
						pro.options[i].selected = true;
						pro.dispatchEvent(event);
						break
					}
				}
			}
			if ($('select[name=\"cc_CCA19_1_1\"]').length && $('#cc_CCA19_1_1').attr('cname') == '民族') {
				var pro = document.getElementById('cc_CCA19_1_1');
				var nowpro = $('#mt_nation').html();
				for (var i = 0; i < pro.options.length; i++) {
					prostr = $.trim(pro.options[i].innerHTML);
					if (prostr.indexOf(nowpro) != -1) {
						pro.options[i].selected = true;
						pro.dispatchEvent(event);
						break
					}
				}
			}
			if ($('select[name=\"cc_CCA45_1_1\"]').length && $('#cc_CCA45_1_1').attr('cname') == '民族') {
				var pro = document.getElementById('cc_CCA45_1_1');
				var nowpro = $('#mt_nation').html();
				for (var i = 0; i < pro.options.length; i++) {
					prostr = $.trim(pro.options[i].innerHTML);
					if (prostr.indexOf(nowpro) != -1) {
						pro.options[i].selected = true;
						pro.dispatchEvent(event);
						break
					}
				}
			}
			if ($('select[name=\"cc_CCA47_1_1\"]').length && $('#cc_CCA47_1_1').attr('cname') == '籍贯') {
				var pro = document.getElementById('cc_CCA47_1_1');
				var nowpro = $('#mt_nativeplace').html();
				for (var i = 0; i < pro.options.length; i++) {
					prostr = $.trim(pro.options[i].innerHTML);
					if (prostr.indexOf(nowpro) != -1) {
						pro.options[i].selected = true;
						pro.dispatchEvent(event);
						break
					}
				}
			}
			if ($('select[name=\"cc_CCA6_1_1\"]').length && $('#cc_CCA6_1_1').attr('cname') == '证件类型') {
				if ($('#mt_idtype').html().indexOf('香港') != -1 || $('#mt_idtype').html().indexOf('澳门') != -1 || $('#mt_idtype').html().indexOf('台') != -1) {
					document.getElementById('cc_CCA6_1_1').options[2].selected = true
				} else if ($('#mt_idtype').html().indexOf('护照') != -1) {
					document.getElementById('cc_CCA6_1_1').options[3].selected = true
				} else {
					document.getElementById('cc_CCA6_1_1').options[1].selected = true
				}
			}
			if ($('select[name=\"ddl_CCE3_5_1\"]').length) {
				var pro = document.getElementById('ddl_CCE3_5_1');
				if ($('#mt_sex').html() && $('#mt_sex').html() == '男') {
					pro.options[1].selected = true
				}
				if ($('#mt_sex').html() && $('#mt_sex').html() == '女') {
					pro.options[2].selected = true
				}
				pro.dispatchEvent(event)
			}
			if ($('input[name=\"cc_CCA13_1_1\"]') && $('input[name=\"cc_CCA13_1_1\"]').eq(0).attr('cname') == '具体身高(cm)') {
				$('input[name=\"cc_CCA13_1_1\"]').val($('#mt_height').html())
			}
			if ($('input[name=\"cc_CCA7_1_1\"]') && $('input[name=\"cc_CCA7_1_1\"]').eq(0).attr('cname') == '身高（CM)') {
				$('input[name=\"cc_CCA7_1_1\"]').val($('#mt_height').html())
			}
			if ($('input[name=\"cc_CCB11_2_1\"]') && $('input[name=\"cc_CCB11_2_1\"]').eq(0).attr('cname') == '身高') {
				$('input[name=\"cc_CCB11_2_1\"]').val($('#mt_height').html())
			}
			if ($('input[name=\"cc_CCA16_1_1\"]') && $('input[name=\"cc_CCA16_1_1\"]').eq(0).attr('cname') == '身高') {
				$('input[name=\"cc_CCA16_1_1\"]').val($('#mt_height').html())
			}
			if ($('input[name=\"cc_CCA43_1_1\"]') && $('input[name=\"cc_CCA43_1_1\"]').eq(0).attr('cname') == '学历') {
				$('input[name=\"cc_CCA43_1_1\"]').val($('.infopledu .mt_education').last().html())
			}
			if ($('input[name=\"cc_CCA33_1_1\"]') && $('input[name=\"cc_CCA33_1_1\"]').eq(0).attr('cname') == '毕业院校') {
				$('input[name=\"cc_CCA33_1_1\"]').val($('.infopledu .mt_schoolName').last().html())
			}
			if ($('input[name=\"cc_CCA44_1_1\"]') && $('input[name=\"cc_CCA44_1_1\"]').eq(0).attr('cname') == '所学专业') {
				$('input[name=\"cc_CCA44_1_1\"]').val($('.infopledu .mt_professional').last().html())
			}
			if ($('input[name=\"cc_CCA20_1_1\"]') && $('input[name=\"cc_CCA20_1_1\"]').eq(0).attr('cname') == '身高') {
				$('input[name=\"cc_CCA20_1_1\"]').val($('#mt_height').html())
			}
			if ($('input[name=\"cc_CCB4_2_1\"]') && ($('input[name=\"cc_CCB4_2_1\"]').eq(0).attr('cname') == '身高（cm）' || $('input[name=\"cc_CCB4_2_1\"]').eq(0).attr('cname') == '身高')) {
				$('input[name=\"cc_CCB4_2_1\"]').val($('#mt_height').html())
			}
			if ($('input[name=\"cc_CCB5_2_1\"]') && ($('input[name=\"cc_CCB4_2_1\"]').eq(0).attr('cname') == '身高（cm）' || $('input[name=\"cc_CCB4_2_1\"]').eq(0).attr('cname') == '身高')) {
				$('input[name=\"cc_CCB5_2_1\"]').val($('#mt_height').html())
			}
			if ($('input[name=\"cc_CCA6_1_1\"]') && (getTitle($('input[name=\"cc_CCA6_1_1\"]')) == '身高' || getTitle($('input[name=\"cc_CCA6_1_1\"]')) == '身高（cm）') || $('input[name=\"cc_CCA6_1_1\"]').attr('cname') == '身高(cm)') {
				$('input[name=\"cc_CCA6_1_1\"]').val($('#mt_height').html())
			}
			if ($('input[name=\"cc_CCA7_1_1\"]') && $('#mt_height').html() && (getTitle($('input[name=\"cc_CCA7_1_1\"]')) == '身高' || getTitle($('input[name=\"cc_CCA7_1_1\"]')) == '体重（kg）')) {
				$('input[name=\"cc_CCA7_1_1\"]').val($('#mt_height').html())
			}
			if ($('input[name=\"cc_CCA44_1_1\"]') && $('input[name=\"cc_CCA44_1_1\"]').eq(0).attr('cname') == '体重') {
				$('input[name=\"cc_CCA44_1_1\"]').val($('#mt_weight').html())
			}
			if ($('input[name=\"cc_CCA16_1_1\"]') && $('input[name=\"cc_CCA16_1_1\"]').eq(0).attr('cname') == '体重（KG)') {
				$('input[name=\"cc_CCA16_1_1\"]').val($('#mt_weight').html())
			}
			if ($('input[name=\"cc_CCA18_1_1\"]') && $('input[name=\"cc_CCA18_1_1\"]').eq(0).attr('cname') == '体重') {
				$('input[name=\"cc_CCA18_1_1\"]').val($('#mt_weight').html())
			}
			if ($('input[name=\"cc_CCA18_1_1\"]') && $('input[name=\"cc_CCA18_1_1\"]').eq(0).attr('cname') == '身高（CM）') {
				$('input[name=\"cc_CCA18_1_1\"]').val($('#mt_height').html())
			}
			if ($('input[name=\"cc_CCA11_1_1\"]') && $('input[name=\"cc_CCA11_1_1\"]').eq(0).attr('cname') == '体重') {
				$('input[name=\"cc_CCA11_1_1\"]').val($('#mt_weight').html())
			}
			if ($('input[name=\"cc_CCA10_1_1\"]') && $('input[name=\"cc_CCA10_1_1\"]').eq(0).attr('cname') == '体重（Kg）') {
				$('input[name=\"cc_CCA10_1_1\"]').val($('#mt_weight').html())
			}
			if ($('input[name=\"cc_CCB5_2_1\"]') && ($('input[name=\"cc_CCB5_2_1\"]').eq(0).attr('cname') == '体重（kg）' || $('input[name=\"cc_CCB5_2_1\"]').eq(0).attr('cname') == '体重')) {
				$('input[name=\"cc_CCB5_2_1\"]').val($('#mt_weight').html())
			}
			if ($('input[name=\"cc_CCA7_1_1\"]') && (getTitle($('input[name=\"cc_CCA7_1_1\"]')) == '体重' || getTitle($('input[name=\"cc_CCA7_1_1\"]')) == '体重（kg）') || $('input[name=\"cc_CCA7_1_1\"]').attr('cname') == '体重(kg)') {
				$('input[name=\"cc_CCA7_1_1\"]').val($('#mt_weight').html())
			}
			if ($('input[name=\"cc_CCA16_1_1\"]') && (getTitle($('input[name=\"cc_CCA16_1_1\"]')) == '体重' || getTitle($('input[name=\"cc_CCA16_1_1\"]')) == '体重（kg）')) {
				$('input[name=\"cc_CCA16_1_1\"]').val($('#mt_weight').html())
			}
			if ($('input[name=\"cc_CCA9_1_1\"]') && $('#mt_native_city').html() && $('input[name=\"cc_CCA9_1_1\"]').eq(0).attr('cname') != '面试情况') {
				if ($('input[name=\"cc_CCA9_1_1\"]').eq(0).attr('cname') == '体重(kg)') {
					$('input[name=\"cc_CCA9_1_1\"]').val($('#mt_weight').html())
				} else if ($('input[name=\"cc_CCA9_1_1\"]').eq(0).attr('cname') == '身高') {
					$('input[name=\"cc_CCA9_1_1\"]').val($('#mt_height').html())
				} else {
					$('input[name=\"cc_CCA9_1_1\"]').val($('#mt_native_city').html())
				}
			}
			if ($('input[name=\"cc_CCC11_3_1\"]') && $('input[name=\"cc_CCC11_3_1\"]').attr('cname') == '毕业日期') {
				$('input[name=\"cc_CCC11_3_1\"]').val(addZero($('#mt_gradutetime').html()))
			}
			if ($('input[name=\"cc_CCA7_1_1\"]') && $('input[name=\"cc_CCA7_1_1\"]').eq(0).attr('cname') == '   QQ') {
				$('input[name=\"cc_CCA7_1_1\"]').val($('#mt_qqname').html())
			}
			if ($('input[name=\"cc_CCA17_1_1\"]') && $('input[name=\"cc_CCA17_1_1\"]').eq(0).attr('cname') == 'QQ号') {
				$('input[name=\"cc_CCA17_1_1\"]').val($('#mt_qqname').html())
			}
			if ($('#cc_CCA1_1_1').attr('cname') == '最高学历' || $('#cc_CCA1_1_1').attr('cname') == '学历') {
				switch ($('#mt_edu').html()) {
					case '博士研究生':
						document.getElementById('cc_CCA1_1_1').options[8].selected = true;
						break;
					case '硕士研究生':
						document.getElementById('cc_CCA1_1_1').options[7].selected = true;
						break;
					case '双学士':
					case '大学本科-一本':
					case '大学本科-二本':
					case '大学本科-三本':
						document.getElementById('cc_CCA1_1_1').options[6].selected = true;
						break;
					case '大学专科':
						document.getElementById('cc_CCA1_1_1').options[5].selected = true;
						break;
					case '中专':
						document.getElementById('cc_CCA1_1_1').options[4].selected = true;
						break;
					case '技校/职高':
						document.getElementById('cc_CCA1_1_1').options[3].selected = true;
						break;
					case '高中':
						document.getElementById('cc_CCA1_1_1').options[2].selected = true;
						break;
					case '初中及以下':
						document.getElementById('cc_CCA1_1_1').options[1].selected = true;
						break;
					default:
						break
				}
			}
			if ($('#cc_Degree_1_1').attr('cname') == '最高学历') {
				switch ($('#mt_edu').html()) {
					case '博士研究生':
						document.getElementById('cc_Degree_1_1').options[3].selected = true;
						break;
					case '硕士研究生':
						document.getElementById('cc_Degree_1_1').options[2].selected = true;
						break;
					case '双学士':
					case '大学本科-一本':
					case '大学本科-二本':
					case '大学本科-三本':
						document.getElementById('cc_Degree_1_1').options[1].selected = true;
						break;
					default:
						break
				}
			}
			if ($('select[name=\"cc_CCA9_1_1\"]').length && $('#cc_CCA9_1_1').attr('cname') == '期望工作地点') {
				var pro = document.getElementById('cc_CCA9_1_1');
				var nowpro = $('#mt_expectcity_city').html();
				var prostr;
				for (var i = 0; i < pro.options.length; i++) {
					prostr = $.trim(pro.options[i].innerHTML);
					if (prostr.indexOf(nowpro, 0) != -1) {
						pro.options[i].selected = true;
						pro.dispatchEvent(event);
						break
					}
				}
			}
			if ($('#ddl_CCE11_5_1').length && $('#cc_CCE11_5_1').length && $('#mt_nativeplace').html() && $('#mt_native_city').html()) {
				var pro = document.getElementById('ddl_CCE11_5_1');
				var city = document.getElementById('cc_CCE11_5_1');
				var nowpro = $('#mt_nativeplace').html();
				var nowcity = $('#mt_native_city').html();
				var prostr;
				var citystr;
				if ($('#mt_native_city').html() == '深圳') {
					pro.options[4].selected = true;
					pro.dispatchEvent(event)
				} else {
					for (var i = 0; i < pro.options.length; i++) {
						prostr = $.trim(pro.options[i].innerHTML);
						if (prostr.indexOf(nowpro, 0) != -1) {
							pro.options[i].selected = true;
							pro.dispatchEvent(event);
							for (var j = 0; j < city.options.length; j++) {
								citystr = $.trim(city.options[j].innerHTML);
								if (citystr.indexOf(nowcity, 0) != -1) {
									city.options[j].selected = true;
									break
								}
							}
							break
						}
					}
				}
			}
			if ($('#ddl_CCE12_5_1').length && $('#cc_CCE12_5_1').length && $('#mt_nativeplace').html() && $('#mt_native_city').html()) {
				var pro = document.getElementById('ddl_CCE12_5_1');
				var city = document.getElementById('cc_CCE12_5_1');
				var nowpro = $('#mt_nativeplace').html();
				var nowcity = $('#mt_native_city').html();
				var prostr;
				var citystr;
				if ($('#mt_native_city').html() == '深圳') {
					pro.options[4].selected = true;
					pro.dispatchEvent(event)
				} else {
					for (var i = 0; i < pro.options.length; i++) {
						prostr = $.trim(pro.options[i].innerHTML);
						if (prostr.indexOf(nowpro, 0) != -1) {
							pro.options[i].selected = true;
							pro.dispatchEvent(event);
							for (var j = 0; j < city.options.length; j++) {
								citystr = $.trim(city.options[j].innerHTML);
								if (citystr.indexOf(nowcity, 0) != -1) {
									city.options[j].selected = true;
									break
								}
							}
							break
						}
					}
				}
			}
			if ($('#ddl_Hukou_1_1').length && $('#cc_Hukou_1_1').length && $('#mt_hukoucitynow').html() && $('#mt_hukoucitynow_city').html()) {
				var pro = document.getElementById('ddl_Hukou_1_1');
				var city = document.getElementById('cc_Hukou_1_1');
				var nowpro = $('#mt_hukoucitynow').html();
				var nowcity = $('#mt_hukoucitynow_city').html();
				var prostr;
				var citystr;
				if ($('#mt_hukoucitynow_city').html() == '深圳') {
					pro.options[4].selected = true;
					pro.dispatchEvent(event)
				} else {
					for (var i = 0; i < pro.options.length; i++) {
						prostr = $.trim(pro.options[i].innerHTML);
						if (prostr.indexOf(nowpro, 0) != -1) {
							pro.options[i].selected = true;
							pro.dispatchEvent(event);
							for (var j = 0; j < city.options.length; j++) {
								citystr = $.trim(city.options[j].innerHTML);
								if (citystr.indexOf(nowcity, 0) != -1) {
									city.options[j].selected = true;
									break
								}
							}
							break
						}
					}
				}
			}
			if ($('#ddl_CCE5_5_1').length && $('#cc_CCE5_5_1').length && $('#mt_nativeplace').html() && $('#mt_native_city').html()) {
				var pro = document.getElementById('ddl_CCE5_5_1');
				var city = document.getElementById('cc_CCE5_5_1');
				var nowpro = $('#mt_nativeplace').html();
				var nowcity = $('#mt_native_city').html();
				var prostr;
				var citystr;
				if ($('#mt_native_city').html() == '深圳') {
					pro.options[4].selected = true;
					pro.dispatchEvent(event)
				} else {
					for (var i = 0; i < pro.options.length; i++) {
						prostr = $.trim(pro.options[i].innerHTML);
						if (prostr.indexOf(nowpro, 0) != -1) {
							pro.options[i].selected = true;
							pro.dispatchEvent(event);
							for (var j = 0; j < city.options.length; j++) {
								citystr = $.trim(city.options[j].innerHTML);
								if (citystr.indexOf(nowcity, 0) != -1) {
									city.options[j].selected = true;
									break
								}
							}
							break
						}
					}
				}
			}
			if ($('#ddl_TargetCity3_1_1').length && $('#cc_TargetCity3_1_1').length && $('#mt_nativeplace').html() && $('#mt_native_city').html()) {
				var pro = document.getElementById('ddl_TargetCity3_1_1');
				var city = document.getElementById('cc_TargetCity3_1_1');
				var nowpro = $('#mt_nativeplace').html();
				var nowcity = $('#mt_native_city').html();
				var prostr;
				var citystr;
				if ($('#mt_native_city').html() == '深圳') {
					pro.options[4].selected = true;
					pro.dispatchEvent(event)
				} else {
					for (var i = 0; i < pro.options.length; i++) {
						prostr = $.trim(pro.options[i].innerHTML);
						if (prostr.indexOf(nowpro, 0) != -1) {
							pro.options[i].selected = true;
							pro.dispatchEvent(event);
							for (var j = 0; j < city.options.length; j++) {
								citystr = $.trim(city.options[j].innerHTML);
								if (citystr.indexOf(nowcity, 0) != -1) {
									city.options[j].selected = true;
									break
								}
							}
							break
						}
					}
				}
			}
			if ($.trim($('#ddl_City_1_1').parent().prev().text()) == '* 生源地') {
				if ($('#ddl_City_1_1').length && $('#cc_City_1_1').length && $('#mt_nativeplace').html() && $('#mt_native_city').html()) {
					var pro = document.getElementById('ddl_City_1_1');
					var city = document.getElementById('cc_City_1_1');
					var nowpro = $('#mt_nativeplace').html();
					var nowcity = $('#mt_native_city').html();
					var prostr;
					var citystr;
					if ($('#mt_native_city').html() == '深圳') {
						pro.options[4].selected = true;
						pro.dispatchEvent(event)
					} else {
						for (var i = 0; i < pro.options.length; i++) {
							prostr = $.trim(pro.options[i].innerHTML);
							if (prostr.indexOf(nowpro, 0) != -1) {
								pro.options[i].selected = true;
								pro.dispatchEvent(event);
								for (var j = 0; j < city.options.length; j++) {
									citystr = $.trim(city.options[j].innerHTML);
									if (citystr.indexOf(nowcity, 0) != -1) {
										city.options[j].selected = true;
										break
									}
								}
								break
							}
						}
					}
				}
			} else if ($('#ddl_City_1_1').length && $('#cc_City_1_1').length && $('#mt_livecity_pro').html() && $('#mt_livecity_city').html()) {
				var pro = document.getElementById('ddl_City_1_1');
				var city = document.getElementById('cc_City_1_1');
				var nowpro = $('#mt_livecity_pro').html();
				var nowcity = $('#mt_livecity_city').html();
				var prostr;
				var citystr;
				if ($('#mt_livecity_city').html() == '深圳' && (pro.options[4].innerText == '深圳' || pro.options[4].value == '深圳')) {
					pro.options[4].selected = true;
					pro.dispatchEvent(event)
				} else {
					for (var i = 0; i < pro.options.length; i++) {
						prostr = $.trim(pro.options[i].innerHTML);
						if (prostr.indexOf(nowpro, 0) != -1) {
							pro.options[i].selected = true;
							pro.dispatchEvent(event);
							for (var j = 0; j < city.options.length; j++) {
								citystr = $.trim(city.options[j].innerHTML);
								if (citystr.indexOf(nowcity, 0) != -1) {
									city.options[j].selected = true;
									break
								}
							};
							break
						}
					}
				}
			}
			if ($('#ddl_CCE6_5_1').length && $('#cc_CCE6_5_1').length && $('#mt_livecity_pro').html() && $('#mt_livecity_city').html()) {
				var pro = document.getElementById('ddl_CCE6_5_1');
				var city = document.getElementById('cc_CCE6_5_1');
				var nowpro = $('#mt_livecity_pro').html();
				var nowcity = $('#mt_livecity_city').html();
				var prostr;
				var citystr;
				if ($('#mt_livecity_city').html() == '深圳' && pro.options[4].value == '深圳') {
					pro.options[4].selected = true;
					pro.dispatchEvent(event)
				} else {
					for (var i = 0; i < pro.options.length; i++) {
						prostr = $.trim(pro.options[i].innerHTML);
						if (prostr.indexOf(nowpro, 0) != -1) {
							pro.options[i].selected = true;
							pro.dispatchEvent(event);
							for (var j = 0; j < city.options.length; j++) {
								citystr = $.trim(city.options[j].innerHTML);
								if (citystr.indexOf(nowcity, 0) != -1) {
									city.options[j].selected = true;
									break
								}
							};
							break
						}
					}
				}
			}
			if ($('#ddl_Hukou_1_1').length && $('#cc_Hukou_1_1').length && $('#mt_hukoucitynow').html() && $('#mt_hukoucitynow_city').html()) {
				var pro = document.getElementById('ddl_Hukou_1_1');
				var city = document.getElementById('cc_Hukou_1_1');
				var nowpro = $('#mt_hukoucitynow').html();
				var nowcity = $('#mt_hukoucitynow_city').html();
				var prostr;
				var citystr;
				if ($('#mt_hukoucitynow_city').html() == '深圳') {
					pro.options[4].selected = true;
					pro.dispatchEvent(event)
				} else {
					for (var i = 0; i < pro.options.length; i++) {
						prostr = $.trim(pro.options[i].innerHTML);
						if (prostr.indexOf(nowpro, 0) != -1) {
							pro.options[i].selected = true;
							pro.dispatchEvent(event);
							for (var j = 0; j < city.options.length; j++) {
								citystr = $.trim(city.options[j].innerHTML);
								if (citystr.indexOf(nowcity, 0) != -1) {
									city.options[j].selected = true;
									break
								}
							};
							break
						}
					}
				}
			}
			if ($('#ddl_TargetCity_1_1').length && $('#cc_TargetCity_1_1').length && $('#mt_expectcity').html() && $('#mt_expectcity_city').html()) {
				if ($('#ddl_TargetCity_1_1').parent('dd').prev('dt').text() == '* 出生地') {
					var nowpro = $('#mt_nativeplace').html();
					var nowcity = $('#mt_native_city').html()
				} else {
					var nowpro = $('#mt_expectcity').html();
					var nowcity = $('#mt_expectcity_city').html()
				}
				var pro = document.getElementById('ddl_TargetCity_1_1');
				var city = document.getElementById('cc_TargetCity_1_1');
				var prostr;
				var citystr;
				if ($('#mt_expectcity_city').html() == '深圳' && pro.options[4].innerHTML.indexOf($('#mt_expectcity_city').html() == '深圳') != -1) {
					pro.options[4].selected = true;
					pro.dispatchEvent(event)
				} else {
					for (var i = 0; i < pro.options.length; i++) {
						prostr = $.trim(pro.options[i].innerHTML);
						if (prostr.indexOf(nowpro, 0) != -1) {
							pro.options[i].selected = true;
							pro.dispatchEvent(event);
							for (var j = 0; j < city.options.length; j++) {
								citystr = $.trim(city.options[j].innerHTML);
								if (citystr.indexOf(nowcity, 0) != -1) {
									city.options[j].selected = true;
									break
								}
							}
							break
						}
					}
				}
			}
			if ($('#ddl_CCE1_5_1').length && $('#cc_CCE1_5_1').length && $('#mt_nativeplace').html() && $('#mt_native_city').html()) {
				var pro = document.getElementById('ddl_CCE1_5_1');
				var city = document.getElementById('cc_CCE1_5_1');
				if ($('#ddl_CCE1_5_1').parent('dd').prev('dt').text() == '* 期望工作地点') {
					var nowpro = $('#mt_expectcity').html();
					var nowcity = $('#mt_expectcity_city').html()
				} else {
					var nowpro = $('#mt_nativeplace').html();
					var nowcity = $('#mt_native_city').html()
				}
				var prostr;
				var citystr;
				if ($('#mt_native_city').html() == '深圳') {
					pro.options[4].selected = true;
					pro.dispatchEvent(event)
				} else {
					for (var i = 0; i < pro.options.length; i++) {
						prostr = $.trim(pro.options[i].innerHTML);
						if (prostr.indexOf(nowpro, 0) != -1) {
							pro.options[i].selected = true;
							pro.dispatchEvent(event);
							for (var j = 0; j < city.options.length; j++) {
								citystr = $.trim(city.options[j].innerHTML);
								if (citystr.indexOf(nowcity, 0) != -1) {
									city.options[j].selected = true;
									break
								}
							};
							break
						}
					}
				}
			}
			if ($('#ddl_CCE2_5_1').length && $('#cc_CCE2_5_1').length && $('#mt_expectcity').html() && $('#mt_nativeplace').html()) {
				var pro = document.getElementById('ddl_CCE2_5_1');
				var city = document.getElementById('cc_CCE2_5_1');
				var nowpro;
				var nowcity;
				if ($('#ddl_CCE2_5_1').parent('dd').prev('dt').text() == '* 籍贯') {
					nowpro = $('#mt_nativeplace').html();
					nowcity = $('#mt_native_city').html()
				} else {
					nowpro = $('#mt_expectcity').html();
					nowcity = $('#mt_expectcity_city').html()
				}
				var prostr;
				var citystr;
				if ($('#mt_expectcity_city').html() == '深圳') {
					pro.options[4].selected = true;
					pro.dispatchEvent(event)
				} else {
					for (var i = 0; i < pro.options.length; i++) {
						prostr = $.trim(pro.options[i].innerHTML);
						if (prostr.indexOf(nowpro, 0) != -1) {
							pro.options[i].selected = true;
							pro.dispatchEvent(event);
							for (var j = 0; j < city.options.length; j++) {
								citystr = $.trim(city.options[j].innerHTML);
								if (citystr.indexOf(nowcity, 0) != -1) {
									city.options[j].selected = true;
									break
								}
							};
							break
						}
					}
				}
			}
			if ($('#ddl_CCE10_5_1').length && $('#mt_expectcity').html() && $('#ddl_CCE10_5_1').attr('class') != 'mytextselectlittle') {
				for (var i = 0; i < $('#ddl_CCE10_5_1').get(0).options.length; i++) {
					if ($('#ddl_CCE10_5_1').get(0).options[i].innerHTML.indexOf($('#mt_expectcity').html()) != -1) {
						$('#ddl_CCE10_5_1').get(0).options[i].selected = true
					}
				}
			}
			if ($('#ddl_CCE10_5_1').length && $('#ddl_CCE10_5_1').attr('class') == 'mytextselectlittle' && $('#cc_CCE10_5_1').length && $('#mt_hukoucity').html() && $('#mt_hukoucity_city').html()) {
				var pro = document.getElementById('ddl_CCE10_5_1');
				var city = document.getElementById('cc_CCE10_5_1');
				var nowpro = $('#mt_hukoucity').html();
				var nowcity = $('#mt_hukoucity_city').html();
				var prostr;
				var citystr;
				if ($('#mt_hukoucity_city').html() == '深圳') {
					pro.options[4].selected = true;
					pro.dispatchEvent(event)
				} else {
					for (var i = 0; i < pro.options.length; i++) {
						prostr = $.trim(pro.options[i].innerHTML);
						if (prostr.indexOf(nowpro, 0) != -1) {
							pro.options[i].selected = true;
							pro.dispatchEvent(event);
							for (var j = 0; j < city.options.length; j++) {
								citystr = $.trim(city.options[j].innerHTML);
								if (citystr.indexOf(nowcity, 0) != -1) {
									city.options[j].selected = true;
									break
								}
							};
							break
						}
					}
				}
			}
			window.setTimeout(function() {
				if ($('select[name=\"cc_CCE10_5_1\"]').length && $('#mt_expectcity_city').html() && $('#cc_CCE10_5_1').attr('class') != 'mytextselectlittle') {
					for (var i = 0; i < $('#cc_CCE10_5_1').get(0).options.length; i++) {
						if ($('#cc_CCE10_5_1').get(0).options[i].innerHTML == $('#mt_expectcity_city').html()) {
							$('#cc_CCE10_5_1').get(0).options[i].selected = true
						}
					}
				}
			},
			200);
			if ($('#ddl_CCE4_5_1').length && $('#mt_expectcity').html()) {
				for (var i = 0; i < $('#ddl_CCE4_5_1').get(0).options.length; i++) {
					if ($('#ddl_CCE4_5_1').get(0).options[i].innerHTML.indexOf($('#mt_expectcity').html()) != -1) {
						$('#ddl_CCE4_5_1').get(0).options[i].selected = true
					}
				}
			}
			window.setTimeout(function() {
				if ($('#cc_CCE4_5_1').length && $('#mt_expectcity_city').html()) {
					for (var i = 0; i < $('#cc_CCE4_5_1').get(0).options.length; i++) {
						if ($('#cc_CCE4_5_1').get(0).options[i].innerHTML == $('#mt_expectcity_city').html()) {
							$('#cc_CCE4_5_1').get(0).options[i].selected = true
						}
					}
				}
			},
			200);
			if ($('#cc_CCA16_1_1').length && $('#mt_nation').html()) {
				var nat = $('#cc_CCA16_1_1').get(0).options;
				for (var i in nat) {
					if ($('#mt_nation').html().indexOf(nat[i].innerHTML) != -1) {
						nat[i].selected = true;
						break
					}
				}
			}
			if ($('#cc_CCA17_1_1').length && $('#mt_fmrelation').html()) {
				if ($('#cc_CCA17_1_1').parent().prev().text() == '* 与紧急联系人关系') {
					$('#cc_CCA17_1_1').val($('#mt_fmrelation').html())
				} else if ($('#mt_height').html() && $('#cc_CCA17_1_1').attr('cname') == '居住地邮政编码') {
					$('#cc_CCA17_1_1').val($('#mt_zip').html())
				} else if ($('#mt_height').html() && $('#cc_CCA17_1_1').attr('cname') == '民族') {
					$('#cc_CCA17_1_1').val($('#mt_nation').html())
				} else if ($('#mt_height').html() && $('#cc_CCA17_1_1').attr('cname') == '是何岗位') {
					$('#cc_CCA17_1_1').val($('#mt_height').html())
				}
			}
			if ($('select[name=\"cc_CCA7_1_1\"]').length && $('.infoOtherSkill .mt_skillOtherLang').html() && $('#cc_CCA7_1_1').attr('cname') != '岗位类别') {
				var pro = document.getElementById('cc_CCA7_1_1');
				var nowpro;
				if ($('#cc_CCA7_1_1').attr('cname') == '入学前所在地') {
					nowpro = $('#mt_hukoucity_city').html()
				} else {
					nowpro = $('.infoOtherSkill .mt_skillOtherLang').html()
				}
				var prostr;
				for (var i = 0; i < pro.options.length; i++) {
					prostr = $.trim(pro.options[i].innerHTML);
					if (prostr.indexOf(nowpro, 0) != -1) {
						pro.options[i].selected = true;
						pro.dispatchEvent(event);
						break
					}
				}
			}
			if ($('#ddl_EnglishLevel_5_1')) {
				var skilllevel = 0;
				var maxlevel = 0;
				for (var i = 0; i < $('.infoEnglishSkill').length; i++) {
					if ($('.mt_skillEngLevel').eq(i).html() == '专业八级') {
						skilllevel = 6
					} else if ($('.mt_skillEngLevel').eq(i).html() == '专业四级') {
						skilllevel = 3
					} else if ($('.mt_skillEngLevel').eq(i).html() == '大学英语六级') {
						skilllevel = 2
					} else {
						skilllevel = 1
					}
					if (skilllevel > maxlevel) {
						maxlevel = skilllevel
					}
				}
				for (var i = 0; i < $('.infoOtEnglishSkil').length; i++) {
					if ($('.mt_otherSkillEngLevel').eq(i).html() == '托福') {
						skilllevel = 5
					} else if ($('.mt_otherSkillEngLevel').eq(i).html() == '雅思') {
						skilllevel = 4
					}
					if (skilllevel > maxlevel) {
						maxlevel = skilllevel
					}
				}
				if ($('#ddl_EnglishLevel_5_1').length) {
					var engskill = document.getElementById('ddl_EnglishLevel_5_1');
					if (maxlevel == 6) {
						engskill.options[4].selected = true
					} else if (maxlevel == 5) {
						engskill.options[5].selected = true
					} else if (maxlevel == 4) {
						engskill.options[6].selected = true
					} else if (maxlevel == 3) {
						engskill.options[3].selected = true
					} else if (maxlevel == 2) {
						engskill.options[2].selected = true
					} else if (maxlevel == 1) {
						engskill.options[1].selected = true
					}
					engskill.dispatchEvent(event)
				}
			}
			if ($('select[name=\"ddl_CCE13_5_1\"]').length) {
				selectFacc($('.mt_skillOtherLang').html(), $('select[name=\"ddl_CCE13_5_1\"]'))
			}
			if ($('select[name=\"ddl_OtherLanguage_5_1\"]').length) {
				selectFacc($('.mt_skillOtherLang').html(), $('select[name=\"ddl_OtherLanguage_5_1\"]'))
			}
		}
		if ($('#container h1').eq(0).text() == '教育信息' || $('#container h1').eq(0).text() == 'Education' || $('#container h1').eq(0).text() == '教育经历' || $('#container h1').eq(0).text() == '最高学历' || $('#container h1').eq(0).text() == '其他学历') {
			var eduary = [];
			for (var i = 0; i < $('.infopledu').length; i++) {
				eduary.push({
					id: i,
					year: $('.infopledu .mt_endYearY').eq(i).html()
				})
			}
			eduary.sort(function(a, b) {
				return b.year - a.year
			});
			eduary.forEach(function(item, index) {
				var id = item['id'];
				var eduinfo = $('.infopledu');
				var st = addZero(eduinfo.find('.mt_startYear').eq(id).html());
				var et = addZero(eduinfo.find('.mt_endYear').eq(id).html());
				var edu = eduinfo.find('.mt_education').eq(id).html();
				var deg = eduinfo.find('.mt_degree').eq(id).html();
				var xueyuan = eduinfo.find('.mt_academy').eq(id).html();
				var rank0 = eduinfo.find('.mt_professionalranking').eq(id).html();
				var major = eduinfo.find('.mt_major').eq(id).html();
				var gpa = eduinfo.find('.mt_gpascore').eq(id).html();
				var rank = getRank(rank0);
				if (index == 0) {
					if (edu.length > 0) {
						if ($('#cc_CCA1_1_1').length) {
							selectFac(edu, $('#cc_CCA1_1_1'))
						}
					}
					if (deg.length > 0) {
						if ($('#cc_CCA21_1_1').length && getTitle($('#cc_CCA21_1_1')) == '学位') {
							selectFac(deg, $('#cc_CCA21_1_1'))
						}
					}
					if (st.length > 0) {
						if ($('#cc_CCC11_3_1').length && getTitle($('#cc_CCC11_3_1')) != '在校时间从' && $('#cc_CCC11_3_1').attr('cname') != '小学入学时间' && $('#cc_CCC11_3_1').attr('cname') != '高职/专科入学时间' && $('#cc_CCC11_3_1').attr('cname') != '可长期离校实习时间') {
							$('#cc_CCC11_3_1').val(st)
						} else if ($('#cc_GradDate_3_1').length && getTitle($('#cc_GradDate_3_1')) == '在校时间从') {
							$('#cc_GradDate_3_1').val(st)
						} else if ($('#cc_CCC2_3_1').length && $('#cc_CCC2_3_1').attr('cname') != '高中入学间' && $('#cc_CCC2_3_1').parent('dd').parent('dl').prev('dl').find('dt').eq(0).text() == '* 最高学历') {
							$('#cc_CCC2_3_1').val(st)
						}
					}
					if (et.length > 0) {
						if ($('#cc_GradDate_3_1') && (getTitle($('#cc_GradDate_3_1')) == '毕业时间' || $('#cc_GradDate_3_1').attr('cname') == '最高学历毕业时间')) {
							$('#cc_GradDate_3_1').val(et)
						} else if ($('#cc_CCC2_3_1') && getTitle($('#cc_CCC2_3_1')) == '到') {
							$('#cc_CCC2_3_1').val(et)
						} else if ($('#cc_CCA17_1_1').length && $('#cc_CCA17_1_1').attr('cname') == '毕业时间') {
							$('#cc_CCA17_1_1').val(et)
						}
					}
					if ($('#cc_CCA7_1_1').length && $('#cc_CCA7_1_1').attr('cname') == '隶属学院') {
						$('#cc_CCA7_1_1').val(xueyuan)
					}
					if ($('#ddl_CCE4_5_1').length) {
						var hy = 2018 - parseInt($('.infopledu .mt_endYearY').eq(id).html());
						var hm = parseInt($('.infopledu .mt_endYearM').eq(id).html());
						if (document.getElementById('ddl_CCE4_5_1').options[4 - hy] && document.getElementById('cc_CCE4_5_1').options[hm - 1]) {
							document.getElementById('ddl_CCE4_5_1').options[4 - hy].selected = true;
							document.getElementById('cc_CCE4_5_1').options[hm - 1].selected = true
						}
					}
					if (rank.length > 0) {
						var rantit = getTitle($('#cc_Score_1_1'));
						if ($('#cc_Score_1_1').length) {
							if (rantit == '成绩排名' || rantit == '学习成绩排名') {
								selectFacc(rank, $('#cc_Score_1_1'))
							} else if ($('#cc_Score_1_1').attr('cname') == 'GPA成绩排名') {
								selectFacc(getOtRankEn(rank0), $('#cc_Score_1_1'))
							} else if ($('#cc_Score_1_1').attr('cname') == '专业排名') {
								selectFacc(getRank(rank), $('#cc_Score_1_1'))
							}
						} else if ($('#cc_CCA16_1_1').length && $('#cc_CCA16_1_1').attr('cname') == '班级成绩排名') {
							selectFacc(rank, $('#cc_CCA16_1_1'))
						}
						if ($('input[name=\"cc_CCA20_1_1\"]').length && $('#cc_CCA20_1_1').attr('cname') == '学习成绩排名') {
							$('#cc_CCA20_1_1').val(rank0)
						}
					}
					if (major.length > 0) {
						if ($('#cc_Course_6_1') && $('#cc_Course_6_1').attr('cname') != '在校期间获奖情况') {
							$('#cc_Course_6_1').val(major)
						}
					}
					if (gpa.length > 0) {
						if ($('select[name=\"cc_CCA6_1_1\"]').length && $('#cc_CCA6_1_1').attr('cname') == '学习成绩绩点') {
							if (gpa >= 1 && gpa < 2) {
								document.getElementById('cc_CCA6_1_1').options[5].selected = true
							} else if (gpa >= 2 && gpa < 2.5) {
								document.getElementById('cc_CCA6_1_1').options[4].selected = true
							} else if (gpa >= 2.5 && gpa < 3) {
								document.getElementById('cc_CCA6_1_1').options[3].selected = true
							} else if (gpa >= 3 && gpa < 3.5) {
								document.getElementById('cc_CCA6_1_1').options[2].selected = true
							} else if (gpa > 3.5 && gpa <= 4.0) {
								document.getElementById('cc_CCA6_1_1').options[1].selected = true
							}
							document.getElementById('cc_CCA6_1_1').dispatchEvent(event)
						}
						if ($('#cc_CCA46_1_1') && $('#cc_CCA46_1_1').attr('cname') == '具体绩点分数') {
							$('#cc_CCA46_1_1').val(gpa)
						}
					}
				} else if (index == 1) {
					if (edu.length > 0) {
						if ($('#cc_Degree_1_1').length) {
							selectFac(edu, $('#cc_Degree_1_1'))
						}
					}
					if (deg.length > 0) {
						if ($('#cc_CCA22_1_1').length) {
							selectFac(deg, $('#cc_CCA22_1_1'))
						}
					}
					if (st.length > 0) {
						if ($('#cc_CCC1_3_1').length && getTitle($('#cc_CCC1_3_1')) == '在校时间从') {
							$('#cc_CCC1_3_1').val(st)
						} else if ($('#cc_CCC2_3_1').length && $('#cc_CCC2_3_1').attr('cname') != '开始时间' && $('#cc_CCC2_3_1').attr('cname') != '高中入学时间' && $('#cc_CCC2_3_1').attr('cname') != '最高学历入学时间' && $('#cc_CCC2_3_1').parent('dd').parent('dl').prev('dl').find('dt').eq(0).text() != '* 最高学历') {
							$('#cc_CCC2_3_1').val(st)
						} else if ($('#cc_CCC3_3_1').length && $('#cc_CCC3_3_1').attr('cname') == '开始时间2') {
							$('#cc_CCC3_3_1').val(st)
						}
					}
					if (et.length > 0) {
						if ($('#cc_CCC12_3_1') && getTitle($('#cc_CCC12_3_1')) == '到') {
							$('#cc_CCC12_3_1').val(et)
						} else if ($('#cc_CCC1_3_1') && $('#cc_CCC1_3_1').attr('cname') != '中学毕业时间' && $('#cc_CCC1_3_1').attr('cname') != '高中毕业时') {
							$('#cc_CCC1_3_1').val(et)
						}
					}
					if (rank.length > 0) {
						if ($('#cc_CCA14_1_1')) {
							if (getTitle($('#cc_CCA14_1_1')) == '成绩排名' || getTitle($('#cc_CCA14_1_1')) == '学习成绩排名' || getTitle($('#cc_CCA14_1_1')) == '学习成绩排名2') {
								selectFacc(rank, $('#cc_CCA14_1_1'))
							} else if ($('#cc_CCA14_1_1').attr('cname') == 'GPA成绩排名2') {
								selectFacc(getOtRankEn(rank0), $('#cc_CCA14_1_1'))
							} else if ($('#cc_CCA14_1_1').attr('cname') == '专业排名2') {
								selectFacc(getRank(rank), $('#cc_CCA14_1_1'))
							}
						} else if ($('#cc_CCA3_1_1') && getTitle($('#cc_CCA3_1_1')) == '学习成绩排名') {
							selectFacc(rank, $('#cc_CCA3_1_1'))
						} else if ($('input[name=\"cc_CCA12_1_1\"]').length && $('#cc_CCA12_1_1').attr('cname') == '学习成绩排名2') {
							$('#cc_CCA12_1_1').val(rank0)
						}
					}
					if (major.length > 0) {
						if ($('#cc_CCF1_6_1') && (getTitle($('#cc_CCF1_6_1')) == '主修课程2' || getTitle($('#cc_CCF1_6_1')) == '主修课程1')) {
							$('#cc_CCF1_6_1').val(major)
						} else if ($('#cc_CCF2_6_1') && (getTitle($('#cc_CCF2_6_1')) == '主修课程' || getTitle($('#cc_CCF2_6_1')) == '主修课程')) {
							$('#cc_CCF2_6_1').val(major)
						} else if ($('#cc_CCF1_6_1').length && $('#cc_CCF1_6_1').attr('cname') == '主修课程及毕业课题2') {
							$('#cc_CCF1_6_1').val(major)
						}
					}
					if (gpa.length > 0) {
						if ($('select[name=\"cc_CCA7_1_1\"]').length && $('#cc_CCA7_1_1').attr('cname') == '学习成绩绩点2') {
							if (gpa >= 1 && gpa < 2) {
								document.getElementById('cc_CCA7_1_1').options[5].selected = true
							} else if (gpa >= 2 && gpa < 2.5) {
								document.getElementById('cc_CCA7_1_1').options[4].selected = true
							} else if (gpa >= 2.5 && gpa < 3) {
								document.getElementById('cc_CCA7_1_1').options[3].selected = true
							} else if (gpa >= 3 && gpa < 3.5) {
								document.getElementById('cc_CCA7_1_1').options[2].selected = true
							} else if (gpa > 3.5 && gpa <= 4.0) {
								document.getElementById('cc_CCA7_1_1').options[1].selected = true
							}
							document.getElementById('cc_CCA7_1_1').dispatchEvent(event)
						}
						if ($('#cc_CCA38_1_1') && $('#cc_CCA38_1_1').attr('cname') == '具体绩点分数2') {
							$('#cc_CCA38_1_1').val(gpa)
						}
					}
				} else if (index == 2) {
					if (edu.length > 0) {
						if ($('#cc_CCA17_1_1').length && $('#cc_CCA17_1_1').attr('cname') == ' 其他学历3  ') {
							selectFac(edu, $('#cc_CCA17_1_1'))
						} else if ($('#cc_CCA7_1_1').length && $('#cc_CCA7_1_1').attr('cname') == '其他学历3') {
							selectFac(edu, $('#cc_CCA7_1_1'))
						}
					}
					if (st.length > 0) {
						if ($('#cc_CCC13_3_1').length && $('#cc_CCC13_3_1').attr('cname') == '开始时间3') {
							$('#cc_CCC13_3_1').val(st)
						}
					}
					if (et.length > 0) {
						if ($('#cc_CCC14_3_1').length && $('#cc_CCC14_3_1').attr('cname') == '毕业时间3') {
							$('#cc_CCC14_3_1').val(et)
						} else if ($('#cc_CCC11_3_1').length && $('#cc_CCC11_3_1').attr('cname') == '毕业时间3') {
							$('#cc_CCC11_3_1').val(et)
						}
					}
					if (rank.length > 0) {
						if ($('#cc_CCA11_1_1').length && $('#cc_CCA11_1_1').attr('cname') == '学习成绩排名3') {
							selectFac(rank, $('#cc_CCA11_1_1'))
						}
						if ($('#cc_CCA9_1_1').length && $('#cc_CCA9_1_1').attr('cname') == 'GPA成绩排名3') {
							selectFac(getOtRankEn(rank0), $('#cc_CCA9_1_1'))
						}
					}
					if (major.length > 0) {
						if ($('#cc_CCF2_6_1') && $('#cc_CCF2_6_1').attr('cname') == '主修课程3') {
							$('#cc_CCF2_6_1').val(major)
						}
					}
				}
			});
			if ($('#cc_GradDate_3_1').length && $('#cc_GradDate_3_1').attr('cname') == '毕业时间' && $('#cc_CCC1_3_1').length && $('#cc_CCC1_3_1').attr('cname') == '本科毕业时间' && $('#cc_CCC2_3_1').length && $('#cc_CCC2_3_1').attr('cname') == '硕士毕业时间') {
				for (var i = 0; i < $('.infopledu').length; i++) {
					if ($('.infopledu .mt_education').eq(i).html().indexOf('本科') != -1) {
						$('#cc_CCC1_3_1').val(addZero($('.infopledu .mt_endYear').eq(i).html()));
						selectFacc(getOtRank($('.infopledu .mt_professionalranking').eq(i).html()), $('#cc_CCA14_1_1'))
					} else if ($('.infopledu .mt_education').eq(i).html().indexOf('硕士') != -1) {
						$('#cc_CCC2_3_1').val(addZero($('.infopledu .mt_endYear').eq(i).html()));
						selectFacc(getOtRank($('.infopledu .mt_professionalranking').eq(i).html()), $('#cc_CCA7_1_1'))
					}
				}
				$('#cc_CCC1_3_1').val()
			}
			if ($('#cc_CCC12_3_1').length && $('#cc_CCC12_3_1').parent('dd').prev('dt').text() == '本科入学时间') {
				var id2 = -1;
				for (var i = 0; i < $('.infopledu').length; i++) {
					if ($('.infopledu .mt_education').eq(i).html().indexOf('本科') >= 0) {
						id2 = i;
						break
					}
				}
				if (id2 > -1) {
					if ($('#cc_CCC12_3_1') && $('.infopledu .mt_startYear').eq(id2).html()) {
						$('#cc_CCC12_3_1').val(addZero($('.infopledu .mt_startYear').eq(id2).html()))
					}
					if ($('#cc_CCC1_3_1') && $('.infopledu .mt_endYear').eq(id2).html()) {
						$('#cc_CCC1_3_1').val(addZero($('.infopledu .mt_endYear').eq(id2).html()))
					}
					if (document.getElementById('cc_Score_1_1') && $('#cc_Score_1_1').parent('dd').prev('dt').html() == '本科成绩排名') {
						switch ($('.infopledu .mt_professionalranking').eq(id2).html()) {
						case '前5%':
							document.getElementById('cc_Score_1_1').options[1].selected = true;
							break;
						case '前10%':
						case '前20%':
							document.getElementById('cc_Score_1_1').options[2].selected = true;
							break;
						case '前30%':
						case '前40%':
						case '前50%':
							document.getElementById('cc_Score_1_1').options[3].selected = true;
							break;
						default:
							document.getElementById('cc_Score_1_1').options[4].selected = true;
							break
						}
					}
					if ($('#cc_CCF1_6_1') && $('.infopledu .mt_major').eq(id2).html()) {
						$('#cc_CCF1_6_1').val($('.infopledu .mt_major').eq(id2).html())
					}
				}
			}
			if ($('#cc_CCC11_3_1').length && $('#cc_CCC11_3_1').parent('dd').prev('dt').text() == '硕士入学时间') {
				var id3 = -1;
				for (var i = 0; i < $('.infopledu').length; i++) {
					if ($('.infopledu .mt_education').eq(i).html().indexOf('硕士') >= 0) {
						id3 = i;
						break
					}
				}
				if (id3 >= 0) {
					if ($('#cc_CCC11_3_1') && $('.infopledu .mt_startYear').eq(id3).html()) {
						$('#cc_CCC11_3_1').val(addZero($('.infopledu .mt_startYear').eq(id3).html()))
					}
					if ($('#cc_CCC2_3_1') && $('.infopledu .mt_endYear').eq(id3).html()) {
						$('#cc_CCC2_3_1').val(addZero($('.infopledu .mt_endYear').eq(id3).html()))
					}
					if (document.getElementById('cc_CCA14_1_1') && $('#cc_CCA14_1_1').parent('dd').prev('dt').html() == '硕士成绩排名') {
						switch ($('.infopledu .mt_professionalranking').eq(id3).html()) {
						case '前5%':
							document.getElementById('cc_CCA14_1_1').options[1].selected = true;
							break;
						case '前10%':
						case '前20%':
							document.getElementById('cc_CCA14_1_1').options[2].selected = true;
							break;
						case '前30%':
						case '前40%':
						case '前50%':
							document.getElementById('cc_CCA14_1_1').options[3].selected = true;
							break;
						default:
							document.getElementById('cc_CCA14_1_1').options[4].selected = true;
							break
						}
					}
					if ($('#cc_CCF6_6_1') && $('.infopledu .mt_major').eq(id3).html()) {
						$('#cc_CCF6_6_1').val($('.infopledu .mt_major').eq(id3).html())
					}
				}
			}
			if ($('#cc_CCC3_3_1').length && $('#cc_CCC3_3_1').parent('dd').prev('dt').text() == '博士入学时间') {
				var id4 = -1;
				for (var i = 0; i < $('.infopledu').length; i++) {
					if ($('.infopledu .mt_education').eq(i).html().indexOf('博士') >= 0) {
						id4 = i;
						break
					}
				}
				if (id4 >= 0) {
					if ($('#cc_CCC3_3_1') && $('.infopledu .mt_startYear').eq(id4).html()) {
						$('#cc_CCC3_3_1').val(addZero($('.infopledu .mt_startYear').eq(id4).html()))
					}
					if ($('#cc_CCC13_3_1') && $('.infopledu .mt_endYear').eq(id4).html()) {
						$('#cc_CCC13_3_1').val(addZero($('.infopledu .mt_endYear').eq(id4).html()))
					}
					if ($('#cc_CCF11_6_1') && $('.infopledu .mt_major').eq(id4).html()) {
						$('#cc_CCF11_6_1').val($('.infopledu .mt_major').eq(id4).html())
					}
				}
			}
			if ($('#cc_CCC12_3_1').length && $('#cc_CCC12_3_1').parent('dd').prev('dt').text() == '* 高中入学时间') {
				$('#cc_CCC2_3_1').val('');
				if ($('.infopledu').length) {
					var opt = $('select[name=\"cc_CCA1_1_1\"]').get(0).options;
					if ($('.mt_education').eq(0).html().indexOf('博士') != -1) {
						opt[4].selected = true
					} else if ($('.mt_education').eq(0).html().indexOf('硕士') != -1) {
						opt[3].selected = true
					} else if ($('.mt_education').eq(0).html().indexOf('本科') != -1) {
						opt[2].selected = true
					} else if ($('.mt_education').eq(0).html().indexOf('专科') != -1) {
						opt[1].selected = true
					}
					if ($('input[name=\"cc_CCC13_3_1\"]')) {
						$('input[name=\"cc_CCC13_3_1\"]').val(addZero($('.infopledu .mt_startYear').eq(0).html()))
					}
					if ($('input[name=\"cc_GradDate_3_1\"]')) {
						$('input[name=\"cc_GradDate_3_1\"]').val(addZero($('.infopledu .mt_endYear').eq(0).html()))
					}
					if ($('.infopledu').length > 1) {
						var opt = $('select[name=\"cc_Degree_1_1\"]').get(0).options;
						if ($('.mt_education').eq(1).html().indexOf('博士') != -1) {
							opt[4].selected = true
						} else if ($('.mt_education').eq(1).html().indexOf('硕士') != -1) {
							opt[3].selected = true
						} else if ($('.mt_education').eq(1).html().indexOf('本科') != -1) {
							opt[2].selected = true
						} else if ($('.mt_education').eq(1).html().indexOf('专科') != -1) {
							opt[1].selected = true
						}
						if ($('input[name=\"cc_CCC3_3_1\"]')) {
							$('input[name=\"cc_CCC3_3_1\"]').val(addZero($('.infopledu .mt_startYear').eq(1).html()))
						}
						if ($('input[name=\"cc_CCC1_3_1\"]')) {
							$('input[name=\"cc_CCC1_3_1\"]').val(addZero($('.infopledu .mt_endYear').eq(1).html()))
						}
						if ($('.infopledu').length > 2) {
							var opt = $('select[name=\"cc_CCA23_1_1\"]').get(0).options;
							if ($('.mt_education').eq(2).html().indexOf('博士') != -1) {
								opt[4].selected = true
							} else if ($('.mt_education').eq(2).html().indexOf('硕士') != -1) {
								opt[3].selected = true
							} else if ($('.mt_education').eq(2).html().indexOf('本科') != -1) {
								opt[2].selected = true
							} else if ($('.mt_education').eq(2).html().indexOf('专科') != -1) {
								opt[1].selected = true
							}
							if ($('input[name=\"cc_CCC14_3_1\"]')) {
								$('input[name=\"cc_CCC14_3_1\"]').val(addZero($('.infopledu .mt_startYear').eq(2).html()))
							}
							if ($('input[name=\"cc_CCC4_3_1\"]')) {
								$('input[name=\"cc_CCC4_3_1\"]').val(addZero($('.infopledu .mt_endYear').eq(2).html()))
							}
						}
					}
				}
			}
			if ($('select[name=\"cc_CCA8_1_1\"]').length && $('#cc_CCA8_1_1').attr('cname') != '学分' && $('#cc_CCA8_1_1').attr('cname') != '教育类型') {
				var maxedu = help.getGraguateMax();
				var minedu = help.getGraguateMin();
				var opt = $('select[name=\"cc_CCA8_1_1\"]').get(0).options;
				var opt2 = $('select[name=\"cc_CCA9_1_1\"]').get(0).options;
				if ($('.mt_education').eq(minedu).html().indexOf('本科') != -1) {
					opt[2].selected = true;
					opt2[1].selected = true
				} else if ($('.mt_education').eq(minedu).html().indexOf('专科') != -1) {
					opt[1].selected = true;
					opt2[2].selected = true
				} else {
					opt[3].selected = true;
					opt2[2].selected = true
				}
				if ($('input[name=\"cc_GradDate_3_1\"]')) {
					$('input[name=\"cc_GradDate_3_1\"]').val(addZero($('.infopledu .mt_endYear').eq(minedu).html()))
				}
				if ($('#cc_Score_1_1')) {
					selectFac($('.mt_professionalranking').eq(minedu).html(), $('select[name=\"cc_Score_1_1\"]'))
				}
				if ($('#cc_Course_6_1')) {
					$('textarea[name=\"cc_Course_6_1\"]').val($('.infopledu .mt_major').eq(minedu).html())
				}
				if (maxedu != minedu) {
					var opt3 = $('select[name=\"cc_CCA1_1_1\"]').get(0).options;
					var opt4 = $('select[name=\"cc_CCA18_1_1\"]').get(0).options;
					if ($('.mt_education').eq(maxedu).html().indexOf('博士') != -1) {
						opt3[3].selected = true;
						opt4[4].selected = true
					} else if ($('.mt_education').eq(maxedu).html().indexOf('硕士') != -1) {
						opt3[2].selected = true;
						opt4[3].selected = true
					} else if ($('.mt_education').eq(maxedu).html().indexOf('本科') != -1) {
						opt3[1].selected = true;
						opt4[2].selected = true
					} else {
						opt3[0].selected = true;
						opt4[0].selected = true
					}
					if ($('input[name=\"cc_CCC1_3_1\"]')) {
						$('input[name=\"cc_CCC1_3_1\"]').val(addZero($('.infopledu .mt_endYear').eq(maxedu).html()))
					}
					if ($('#cc_CCA14_1_1')) {
						selectFac($('.mt_professionalranking').eq(maxedu).html(), $('select[name=\"cc_CCA14_1_1\"]'))
					}
					if ($('#cc_CCF1_6_1')) {
						$('textarea[name=\"cc_CCF1_6_1\"]').val($('.infopledu .mt_major').eq(maxedu).html())
					}
				}
				if ($('.infopledu').length > 2) {
					for (var i = 0; i < $('.infopledu').length; i++) {
						if (i != maxedu && i != minedu) {
							var opt5 = $('select[name=\"cc_Degree_1_1\"]').get(0).options;
							var opt6 = $('select[name=\"cc_CCA19_1_1\"]').get(0).options;
							if ($('.mt_education').eq(i).html().indexOf('博士') != -1) {
								opt5[8].selected = true;
								opt6[3].selected = true
							} else if ($('.mt_education').eq(i).html().indexOf('硕士') != -1) {
								opt5[7].selected = true;
								opt6[2].selected = true
							} else if ($('.mt_education').eq(i).html().indexOf('本科') != -1) {
								opt5[6].selected = true;
								opt6[1].selected = true
							} else if ($('.mt_education').eq(i).html().indexOf('专科') != -1) {
								opt5[6].selected = true
							} else {
								opt5[0].selected = true;
								opt6[0].selected = true
							}
							if ($('input[name=\"cc_CCC2_3_1\"]')) {
								$('input[name=\"cc_CCC2_3_1\"]').val(addZero($('.infopledu .mt_endYear').eq(i).html()))
							}
							if ($('#cc_CCA11_1_1')) {
								selectFac($('.mt_professionalranking').eq(i).html(), $('select[name=\"cc_CCA11_1_1\"]'))
							}
							if ($('#cc_CCF3_6_1')) {
								$('textarea[name=\"cc_CCF3_6_1\"]').val($('.infopledu .mt_major').eq(i).html())
							}
							break
						}
					}
				}
			}
			if ($('#cc_CCC13_3_1').length && $('#cc_CCC13_3_1').attr('cname') == '大学入学时间' && $('#cc_CCC13_3_1').attr('class') == 'textbox') {
				for (var i = 0; i < $('.infopledu').length; i++) {
					if ($('.infopledu .mt_education').eq(i).html().indexOf('本科') != -1) {
						if ($('#cc_CCC13_3_1') && $('.infopledu .mt_startYear').eq(i).html()) {
							$('#cc_CCC13_3_1').val(addZero($('.infopledu .mt_startYear').eq(i).html()))
						}
						if ($('#cc_CCC14_3_1') && $('.infopledu .mt_endYear').eq(i).html()) {
							$('#cc_CCC14_3_1').val(addZero($('.infopledu .mt_endYear').eq(i).html()))
						}
						if ($('#cc_CCF8_6_1') && $('.infopledu .mt_schoolName').eq(i).html()) {
							$('#cc_CCF8_6_1').val($('.infopledu .mt_schoolName').eq(i).html())
						}
						if ($('#cc_CCF9_6_1') && $('.infopledu .mt_major').eq(i).html()) {
							$('#cc_CCF9_6_1').val($('.infopledu .mt_major').eq(i).html())
						}
						break
					}
				}
			}
			if ($('#cc_CCC4_3_1').length && $('#cc_CCC4_3_1').attr('cname') == '硕士入学时间' && $('#cc_CCC4_3_1').attr('class') == 'textbox') {
				for (var i = 0; i < $('.infopledu').length; i++) {
					if ($('.infopledu .mt_education').eq(i).html().indexOf('硕士') != -1) {
						if ($('#cc_CCC4_3_1') && $('.infopledu .mt_startYear').eq(i).html()) {
							$('#cc_CCC4_3_1').val(addZero($('.infopledu .mt_startYear').eq(i).html()))
						}
						if ($('#cc_CCC5_3_1') && $('.infopledu .mt_endYear').eq(i).html()) {
							$('#cc_CCC5_3_1').val(addZero($('.infopledu .mt_endYear').eq(i).html()))
						}
						if ($('#cc_CCA31_1_1') && $('.infopledu .mt_schoolName').eq(i).html()) {
							$('#cc_CCA31_1_1').val($('.infopledu .mt_schoolName').eq(i).html())
						}
						if ($('#cc_CCA41_1_1') && $('.infopledu .mt_major').eq(i).html()) {
							$('#cc_CCA41_1_1').val($('.infopledu .mt_major').eq(i).html())
						}
						break
					}
				}
			}
			if ($('#cc_CCC15_3_1').length && $('#cc_CCC15_3_1').attr('cname') == '博士入学时间' && $('#cc_CCC15_3_1').attr('class') == 'textbox') {
				for (var i = 0; i < $('.infopledu').length; i++) {
					if ($('.infopledu .mt_education').eq(i).html().indexOf('博士') != -1) {
						if ($('#cc_CCC15_3_1') && $('.infopledu .mt_startYear').eq(i).html()) {
							$('#cc_CCC15_3_1').val(addZero($('.infopledu .mt_startYear').eq(i).html()))
						}
						if ($('#cc_CCC6_3_1') && $('.infopledu .mt_endYear').eq(i).html()) {
							$('#cc_CCC6_3_1').val(addZero($('.infopledu .mt_endYear').eq(i).html()))
						}
						if ($('#cc_CCA32_1_1') && $('.infopledu .mt_schoolName').eq(i).html()) {
							$('#cc_CCA32_1_1').val($('.infopledu .mt_schoolName').eq(i).html())
						}
						if ($('#cc_CCA33_1_1') && $('.infopledu .mt_major').eq(i).html()) {
							$('#cc_CCA33_1_1').val($('.infopledu .mt_major').eq(i).html())
						}
						break
					}
				}
			}
			if ($('#cc_CCA39_1_1').length && $('#cc_CCA39_1_1').attr('cname') == '第一学历') {
				var min = help.getGraguateMin();
				var max = help.getGraguateMax();
				if ($('#cc_CCA39_1_1').length && $('#cc_CCA39_1_1').attr('cname') == '第一学历') {
					switch ($('.infopledu .mt_education').eq(min).html()) {
					case '大学本科-一本':
					case '大学本科-二本':
					case '大学本科-三本':
					case '海外本科':
						document.getElementById('cc_CCA39_1_1').options[2].selected = true;
						document.getElementById('cc_CCA49_1_1').options[1].selected = true;
						break;
					case '大学专科':
						document.getElementById('cc_CCA39_1_1').options[1].selected = true;
						document.getElementById('cc_CCA49_1_1').options[2].selected = true;
						break;
					default:
						document.getElementById('cc_CCA39_1_1').options[3].selected = true;
						document.getElementById('cc_CCA49_1_1').options[2].selected = true;
						break
					}
					$('#cc_CCC11_3_1').val(addZero($('.infopledu .mt_endYear').eq(min).html()));
					$('#cc_CCA50_1_1').val($('.infopledu .mt_professional').eq(min).html());
					if ($('.infopledu .mt_gpascore').eq(min).html() != '') {
						document.getElementById('cc_CCA30_1_1').options[1].selected = true;
						$('#cc_CCA20_1_1').val($('.infopledu .mt_gpascore').eq(min).html())
					}
					selectFac($('.infopledu .mt_professionalranking').eq(min).html(), $('select[name=\"cc_CCA12_1_1\"]'));
					$('#cc_CCF4_6_1').val($('.infopledu .mt_major').eq(min).html())
				}
				if ($('#cc_CCA1_1_1').length && $('#cc_CCA1_1_1').attr('cname') == '最高学历') {
					switch ($('.infopledu .mt_education').eq(max).html()) {
					case '大学本科-一本':
					case '大学本科-二本':
					case '大学本科-三本':
					case '海外本科':
						document.getElementById('cc_CCA1_1_1').options[1].selected = true;
						break;
					case '硕士研究生':
						document.getElementById('cc_CCA1_1_1').options[2].selected = true;
						break;
					case '博士研究生':
						document.getElementById('cc_CCA1_1_1').options[3].selected = true;
						break;
					default:
						document.getElementById('cc_CCA1_1_1').options[0].selected = true;
						break
					}
					switch ($('.infopledu .mt_degree').eq(max).html()) {
					case '学士':
						document.getElementById('cc_CCA21_1_1').options[1].selected = true;
						break;
					case '双学士':
						document.getElementById('cc_CCA21_1_1').options[2].selected = true;
						break;
					case '硕士':
						document.getElementById('cc_CCA21_1_1').options[3].selected = true;
						break;
					case '博士':
						document.getElementById('cc_CCA21_1_1').options[4].selected = true;
						break;
					default:
						document.getElementById('cc_CCA21_1_1').options[0].selected = true;
						break
					}
					$('#cc_GradDate_3_1').val(addZero($('.infopledu .mt_endYear').eq(max).html()));
					$('#cc_OtherMajor_1_1').val($('.infopledu .mt_professional').eq(max).html());
					if ($('.infopledu .mt_gpascore').eq(max).html() != '') {
						document.getElementById('cc_CCA46_1_1').options[1].selected = true;
						$('#cc_CCA29_1_1').val($('.infopledu .mt_gpascore').eq(max).html())
					}
					selectFac($('.infopledu .mt_professionalranking').eq(max).html(), $('select[name=\"cc_Score_1_1\"]'));
					$('#cc_Course_6_1').val($('.infopledu .mt_major').eq(max).html())
				}
				if ($('#cc_Degree_1_1').length && $('#cc_Degree_1_1').attr('cname') == '第二学历') {
					for (var i = 0; i < $('.infopledu').length; i++) {
						if (i != min && i != max) {
							switch ($('.infopledu .mt_education').eq(i).html()) {
							case '大学本科-一本':
							case '大学本科-二本':
							case '大学本科-三本':
							case '海外本科':
								document.getElementById('cc_Degree_1_1').options[1].selected = true;
								break;
							case '硕士研究生':
								document.getElementById('cc_Degree_1_1').options[2].selected = true;
								break;
							case '博士研究生':
								document.getElementById('cc_Degree_1_1').options[3].selected = true;
								break;
							default:
								document.getElementById('cc_Degree_1_1').options[0].selected = true;
								break
							}
							switch ($('.infopledu .mt_degree').eq(i).html()) {
							case '学士':
							case '双学士':
								document.getElementById('cc_CCA13_1_1').options[1].selected = true;
								break;
							case '硕士':
								document.getElementById('cc_CCA13_1_1').options[2].selected = true;
								break;
							case '博士':
								document.getElementById('cc_CCA13_1_1').options[3].selected = true;
								break;
							default:
								document.getElementById('cc_CCA13_1_1').options[0].selected = true;
								break
							}
							$('#cc_CCC1_3_1').val(addZero($('.infopledu .mt_endYear').eq(i).html()));
							$('#cc_CCA5_1_1').val($('.infopledu .mt_professional').eq(i).html());
							if ($('.infopledu .mt_gpascore').eq(i).html() != '') {
								document.getElementById('cc_CCA36_1_1').options[1].selected = true;
								$('#cc_CCA41_1_1').val($('.infopledu .mt_gpascore').eq(i).html())
							}
							selectFac($('.infopledu .mt_professionalranking').eq(i).html(), $('select[name=\"cc_CCA14_1_1\"]'));
							$('#cc_CCF1_6_1').val($('.infopledu .mt_major').eq(i).html());
							break
						}
					}
				}
			}
			if ($('#cc_GradDate_3_1').length && $('#cc_GradDate_3_1').attr('cname') == '本科毕业时间') {
				for (var i = 0; i < $('.infopledu').length; i++) {
					if ($('.infopledu .mt_education').eq(i).html().indexOf('本科') != -1) {
						$('#cc_GradDate_3_1').val(addZero($('.infopledu .mt_endYear').eq(i).html()))
					}
				}
			}
			if ($('textarea[name=\"cc_CCF4_6_1\"]').length && $('#cc_CCF4_6_1').attr('cname') == '获奖情况') {
				var text = '';
				for (var i = 0; i < $('.infoschaward').length; i++) {
					text = text + $('.infoschaward .mt_schawradList').eq(i).html() + '; '
				}
				$('textarea[name=\"cc_CCF4_6_1\"]').val(text)
			}
			if ($('textarea[name=\"cc_CCF2_6_1\"]').length && $('#cc_CCF2_6_1').attr('cname') == '校内活动经历') {
				var text = '';
				for (var i = 0; i < $('.infoschoolclub').length; i++) {
					text = text + $('.infoschoolclub .mt_schClubList').eq(i).html() + '; '
				}
				$('textarea[name=\"cc_CCF2_6_1\"]').val(text)
			}
			
			if ($('h1').html() == '教育经历') {
				var length = $('#edu-list').find('.infopl').length;
				var i = length - 1;
				var j = length - 2;
				if ($('#cc_Degree_1_1') && $('#edu-list').find('.mt_degree').eq(i).html()) {
					let studly_level = $('#cc_Degree_1_1')[0];
					switch ($('#edu-list').find('.mt_degree').eq(i).html()) {
					case '大学专科':
						studly_level.options[5].selected = true;
						break;
					case '海外本科':
					case '大学本科-一本':
					case '大学本科-二本':
					case '大学本科-三本':
						studly_level.options[6].selected = true;
						break;
					case 'MPA':
					case 'MBA':
					case '硕士研究生':
						studly_level.options[7].selected = true;
						break;
					case '博士研究生':
						studly_level.options[8].selected = true;
						break
					}
				}
				if ($('#cc_CCA1_1_1') && $('#edu-list').find('.mt_degree').eq(j).html()) {
					let studly_level = $('#cc_CCA1_1_1')[0];
					switch ($('#edu-list').find('.mt_degree').eq(j).html()) {
					case '大学专科':
						studly_level.options[5].selected = true;
						break;
					case '海外本科':
					case '大学本科-一本':
					case '大学本科-二本':
					case '大学本科-三本':
						studly_level.options[6].selected = true;
						break;
					case 'MPA':
					case 'MBA':
					case '硕士研究生':
						studly_level.options[7].selected = true;
						break;
					case '博士研究生':
						studly_level.options[8].selected = true;
						break
					}
				}
				if ($('#cc_GradDate_3_1') && $('#edu-list').find('.mt_endYear').eq(i).html()) {
					$('#cc_GradDate_3_1').val(formatDate($('#edu-list').find('.mt_endYear').eq(i).html(), 2) + '-01')
				}
				if ($('#cc_CCC1_3_1') && $('#edu-list').find('.mt_endYear').eq(j).html()) {
					$('#cc_CCC1_3_1').val(formatDate($('#edu-list').find('.mt_endYear').eq(j).html(), 2) + '-01')
				}
				if ($('#cc_Score_1_1') && $('#edu-list').find('.mt_professionalranking').eq(i).html()) {
					let educationRank = $('#cc_Score_1_1')[0];
					switch ($('#edu-list').find('.mt_professionalranking').eq(i).html()) {
					case '前5%':
						educationRank.options[1].selected = true;
						break;
					case '前10%':
						educationRank.options[2].selected = true;
						break;
					case '前20%':
						educationRank.options[2].selected = true;
						break;
					case '前30%':
					case '前40%':
					case '前50%':
						educationRank.options[3].selected = true;
						break;
					case '前60%':
					case '前70%':
					case '前80%':
						educationRank.options[4].selected = true;
						break
					}
				}
				if ($('#cc_CCA14_1_1') && $('#edu-list').find('.mt_professionalranking').eq(j).html()) {
					let educationRank = $('#cc_CCA14_1_1')[0];
					switch ($('#edu-list').find('.mt_professionalranking').eq(j).html()) {
					case '前5%':
						educationRank.options[1].selected = true;
						break;
					case '前10%':
						educationRank.options[2].selected = true;
						break;
					case '前20%':
						educationRank.options[2].selected = true;
						break;
					case '前30%':
					case '前40%':
					case '前50%':
						educationRank.options[3].selected = true;
						break;
					case '前60%':
					case '前70%':
					case '前80%':
						educationRank.options[4].selected = true;
						break
					}
				}
				if ($('#cc_Course_6_1') && $('#edu-list').find('.mt_major').eq(i).html()) {
					$('#cc_Course_6_1').val($('#edu-list').find('.mt_major').eq(i).html())
				}
				if ($('#cc_CCF1_6_1') && $('#edu-list').find('.mt_major').eq(j).html()) {
					$('#cc_CCF1_6_1').val($('#edu-list').find('.mt_major').eq(j).html())
				}
			}
		} else if ($('#container h1').eq(0).text() == '最高学历') {
			var skilllevel = 0;
			var maxlevel = 0;
			for (var i = 0; i < $('.infoEnglishSkill').length; i++) {
				if ($('.mt_skillEngLevel').eq(i).html() == '专业八级') {
					skilllevel = 6
				} else if ($('.mt_skillEngLevel').eq(i).html() == '专业四级') {
					skilllevel = 3
				} else if ($('.mt_skillEngLevel').eq(i).html() == '大学英语六级') {
					skilllevel = 2
				} else {
					skilllevel = 1
				}
				if (skilllevel > maxlevel) {
					maxlevel = skilllevel
				}
			}
			for (var i = 0; i < $('.infoOtEnglishSkil').length; i++) {
				if ($('.mt_otherSkillEngLevel').eq(i).html() == '托福') {
					skilllevel = 5
				} else if ($('.mt_otherSkillEngLevel').eq(i).html() == '雅思') {
					skilllevel = 4
				}
				if (skilllevel > maxlevel) {
					maxlevel = skilllevel
				}
			}
			if ($('#ddl_EnglishLevel_5_1').length) {
				var engskill = document.getElementById('ddl_EnglishLevel_5_1');
				if (maxlevel == 6) {
					engskill.options[4].selected = true
				} else if (maxlevel == 5) {
					engskill.options[5].selected = true
				} else if (maxlevel == 4) {
					engskill.options[6].selected = true
				} else if (maxlevel == 3) {
					engskill.options[3].selected = true
				} else if (maxlevel == 2) {
					engskill.options[2].selected = true
				} else if (maxlevel == 1) {
					engskill.options[1].selected = true
				}
				engskill.dispatchEvent(event)
			}
			if ($('#ddl_OtherLanguage_5_1').length && $('.infoOtherSkill .mt_skillOtherLang').eq(0).html()) {
				var osk = document.getElementById('ddl_OtherLanguage_5_1');
				switch ($('.infoOtherSkill .mt_skillOtherLang').eq(0).html()) {
				case '德语':
					osk.options[1].selected = true;
					break;
				case '日语':
					osk.options[3].selected = true;
					break;
				case '法语':
					osk.options[2].selected = true;
					break;
				default:
					osk.options[4].selected = true;
					break
				}
				osk.dispatchEvent(event)
			}
		} else if ($('#container h1').eq(0).text() == '语言能力及IT技能') {
			var skilllevel = 0;
			var maxlevel = 0;
			for (var i = 0; i < $('.infoEnglishSkill').length; i++) {
				if ($('.mt_skillEngLevel').eq(i).html() == '专业八级') {
					skilllevel = 6
				} else if ($('.mt_skillEngLevel').eq(i).html() == '专业四级') {
					skilllevel = 3
				} else if ($('.mt_skillEngLevel').eq(i).html() == '大学英语六级') {
					skilllevel = 2
				} else {
					skilllevel = 1
				}
				if (skilllevel > maxlevel) {
					maxlevel = skilllevel
				}
			}
			for (var i = 0; i < $('.infoOtEnglishSkil').length; i++) {
				if ($('.mt_otherSkillEngLevel').eq(i).html() == '托福') {
					skilllevel = 5
				} else if ($('.mt_otherSkillEngLevel').eq(i).html() == '雅思') {
					skilllevel = 4
				}
				if (skilllevel > maxlevel) {
					maxlevel = skilllevel
				}
			}
			if ($('#ddl_EnglishLevel_5_1').length) {
				var engskill = document.getElementById('ddl_EnglishLevel_5_1');
				if (maxlevel == 6) {
					engskill.options[3].selected = true
				} else if (maxlevel == 5) {
					engskill.options[4].selected = true
				} else if (maxlevel == 4) {
					engskill.options[5].selected = true
				} else if (maxlevel == 3) {
					engskill.options[7].selected = true
				} else if (maxlevel == 2) {
					engskill.options[2].selected = true
				} else if (maxlevel == 1) {
					engskill.options[1].selected = true
				}
				engskill.dispatchEvent(event)
			}
			if ($('#ddl_OtherLanguage_5_1').length && $('.infoOtherSkill .mt_skillOtherLang').eq(0).html()) {
				var osk = document.getElementById('ddl_OtherLanguage_5_1');
				switch ($('.infoOtherSkill .mt_skillOtherLang').eq(0).html()) {
				case '德语':
					osk.options[1].selected = true;
					break;
				case '日语':
					osk.options[3].selected = true;
					break;
				case '法语':
					osk.options[2].selected = true;
					break;
				default:
					osk.options[4].selected = true;
					break
				}
				osk.dispatchEvent(event)
			}
		} else if ($('#container h1').eq(0).text() == '语言能力' || $('#container h1').eq(0).text() == '技能/荣誉' || $('#container h1').eq(0).text() == '技能') {
			var skilllevel = 0;
			var maxlevel = 0;
			var maxscore;
			for (var i = 0; i < $('.infoEnglishSkill').length; i++) {
				if ($('.mt_skillEngLevel').eq(i).html() == '专业八级') {
					skilllevel = 6
				} else if ($('.mt_skillEngLevel').eq(i).html() == '专业四级') {
					skilllevel = 3
				} else if ($('.mt_skillEngLevel').eq(i).html() == '大学英语六级') {
					skilllevel = 2
				} else {
					skilllevel = 1
				}
				if (skilllevel > maxlevel) {
					maxlevel = skilllevel;
					maxscore = $('.infoEnglishSkill .mt_skillEngSorce').eq(i).html()
				}
			}
			if ($('#cc_CCA25_1_1').length && $('#cc_CCA25_1_1').attr('cname') == '英语水平') {
				var engskill = document.getElementById('cc_CCA25_1_1');
				if (maxlevel == 6) {
					engskill.options[4].selected = true
				} else if (maxlevel == 3) {
					engskill.options[3].selected = true
				} else if (maxlevel == 2) {
					engskill.options[2].selected = true
				} else if (maxlevel == 1) {
					engskill.options[1].selected = true
				}
				engskill.dispatchEvent(event);
				if ($('#cc_CCA9_1_1') && $('#cc_CCA9_1_1').attr('cname') == '分数' && maxscore) {
					$('#cc_CCA9_1_1').val(maxscore)
				}
			}
			for (var i = 0; i < $('.infoOtEnglishSkil').length; i++) {
				if ($('.mt_otherSkillEngLevel').eq(i).html() == '托福') {
					skilllevel = 5
				} else if ($('.mt_otherSkillEngLevel').eq(i).html() == '雅思') {
					skilllevel = 4
				}
				if (skilllevel > maxlevel) {
					maxlevel = skilllevel;
					maxscore = $('.infoOtEnglishSkil .mt_otherSkillEngSorce').eq(i).html()
				}
			}
			if ($('#ddl_CCE10_5_1').length && $('#ddl_CCE10_5_1').parent().prev().html() == '其他英语考试') {
				var engskill = document.getElementById('ddl_CCE10_5_1');
				if ($('.infoOtEnglishSkill .mt_otherSkillEngLevel').html() == '托福') {
					engskill.options[1].selected = true
				} else if ($('.infoOtEnglishSkill .mt_otherSkillEngLevel').html() == '雅思') {
					engskill.options[2].selected = true
				}
				engskill.dispatchEvent(event);
				if ($('#cc_CCF2_6_1').length) {
					$('#cc_CCF2_6_1').val($('.infoOtEnglishSkill .mt_otherSkillEngSorce').html())
				}
			}
			if ($('#ddl_EnglishLevel_5_1').length && $('#ddl_EnglishLevel_5_1').parent('dd').prev('dt').length && $('#ddl_EnglishLevel_5_1').parent('dd').prev('dt').text() != '其他外语') {
				var engskill = document.getElementById('ddl_EnglishLevel_5_1');
				if ($('#ddl_EnglishLevel_5_1').parent('dd').prev('dt').text() == '* 英语水平') {
					if (maxlevel == 6) {
						engskill.options[3].selected = true
					} else if (maxlevel == 5) {
						engskill.options[4].selected = true
					} else if (maxlevel == 4) {
						engskill.options[5].selected = true
					} else if (maxlevel == 3) {
						engskill.options[7].selected = true
					} else if (maxlevel == 2) {
						engskill.options[2].selected = true
					} else if (maxlevel == 1) {
						engskill.options[1].selected = true
					}
					engskill.dispatchEvent(event)
				} else {
					if (maxlevel == 6) {
						engskill.options[4].selected = true
					} else if (maxlevel == 5) {
						engskill.options[5].selected = true
					} else if (maxlevel == 4) {
						engskill.options[6].selected = true
					} else if (maxlevel == 3) {
						engskill.options[3].selected = true
					} else if (maxlevel == 2) {
						engskill.options[2].selected = true
					} else if (maxlevel == 1) {
						engskill.options[1].selected = true
					}
					engskill.dispatchEvent(event)
				}
				if ($('#cc_CCA40_1_1') && maxscore) {
					$('#cc_CCA40_1_1').val(maxscore)
				}
				if ($('#cc_CCA21_1_1') && maxscore) {
					$('#cc_CCA21_1_1').val(maxscore)
				}
				if ($('#cc_CCA34_1_1') && maxscore) {
					$('#cc_CCA34_1_1').val(maxscore)
				}
				if ($('#cc_CCA9_1_1') && maxscore) {
					$('#cc_CCA9_1_1').val(maxscore)
				}
				if ($('#cc_CCA7_1_1') && maxscore) {
					$('#cc_CCA7_1_1').val(maxscore)
				}
				if ($('#cc_CCB4_2_1') && maxscore) {
					$('#cc_CCB4_2_1').val(maxscore)
				}
				if ($('#cc_CCA30_1_1') && $('.infoOtherSkill .mt_skillOtherLang').eq(0).html()) {
					$('#cc_CCA30_1_1').val($('.infoOtherSkill .mt_skillOtherLang').eq(0).html())
				}
				if ($('#cc_CCA41_1_1').length) {
					var oth = $('#cc_CCA41_1_1').get(0).options;
					for (var i in oth) {
						if (oth[i].innerHTML == $('.infoOtherSkill .mt_skillGraspLevel').eq(0).html()) {
							oth[i].selected = true;
							break
						}
					}
				}
			}
			if ($('#ddl_CCE2_5_1').length) {
				var engskill = document.getElementById('ddl_CCE2_5_1');
				if (maxlevel == 1) {
					engskill.options[1].selected = true
				} else if (maxlevel == 6) {
					engskill.options[4].selected = true
				} else if (maxlevel == 3) {
					engskill.options[3].selected = true
				} else if (maxlevel == 2) {
					engskill.options[2].selected = true
				}
				engskill.dispatchEvent(event)
			}
			if ($('#ddl_OtherLanguage_5_1').length && $('.infoOtherSkill .mt_skillOtherLang').eq(0).html()) {
				var osk = document.getElementById('ddl_OtherLanguage_5_1');
				switch ($('.infoOtherSkill .mt_skillOtherLang').eq(0).html()) {
				case '德语':
					osk.options[1].selected = true;
					break;
				case '日语':
					osk.options[3].selected = true;
					break;
				case '法语':
					osk.options[2].selected = true;
					break;
				default:
					osk.options[4].selected = true;
					break
				}
				osk.dispatchEvent(event)
			}
			if ($('#ddl_EnglishLevel_5_1').length && $('.infoOtherSkill .mt_skillOtherLang').eq(0).html() && $('#ddl_EnglishLevel_5_1').parent('dd').prev('dt').text() == '其他外语') {
				var osk = document.getElementById('ddl_EnglishLevel_5_1');
				switch ($('.infoOtherSkill .mt_skillOtherLang').eq(0).html()) {
				case '德语':
					osk.options[1].selected = true;
					break;
				case '日语':
					osk.options[3].selected = true;
					break;
				case '法语':
					osk.options[2].selected = true;
					break;
				default:
					osk.options[4].selected = true;
					break
				}
				osk.dispatchEvent(event)
			}
			if ($('#ddl_CCE3_5_1').length && $('.infoOtherSkill .mt_skillOtherLang').eq(0).html()) {
				var osk = document.getElementById('ddl_CCE3_5_1');
				switch ($('.infoOtherSkill .mt_skillOtherLang').eq(0).html()) {
				case '德语':
					osk.options[1].selected = true;
					break;
				case '日语':
					osk.options[3].selected = true;
					break;
				case '法语':
					osk.options[2].selected = true;
					break;
				case '韩语':
					osk.options[4].selected = true;
					break;
				default:
					osk.options[5].selected = true;
					break
				}
				osk.dispatchEvent(event)
			}
			if ($('#ddl_CCE4_5_1').length && $('.infoEnglishSkill .mt_skillEngLevel').html()) {
				var ctype = $('#ddl_CCE4_5_1')[0];
				switch ($('.infoEnglishSkill .mt_skillEngLevel').html()) {
					case '大学英语四级':
						ctype.options[1].selected = true;
						ctype.dispatchEvent(event);
						break;
					case '大学英语六级':
						ctype.options[2].selected = true;
						ctype.dispatchEvent(event);
						break;
					case '专业四级':
						ctype.options[3].selected = true;
						ctype.dispatchEvent(event);
						break;
					case '专业八级':
						ctype.options[4].selected = true;
						ctype.dispatchEvent(event);
						break
				}
			}
			if ($('#ddl_CCE12_5_1').length && $('.infoOtEnglishSkill .mt_otherSkillEngLevel').html()) {
				var ctype = $('#ddl_CCE12_5_1')[0];
				switch ($('.infoOtEnglishSkill .mt_otherSkillEngLevel').html()) {
				case '雅思':
					ctype.options[1].selected = true;
					ctype.dispatchEvent(event);
					break;
				case '托福':
					ctype.options[2].selected = true;
					ctype.dispatchEvent(event);
					break;
				case '托业':
					ctype.options[3].selected = true;
					ctype.dispatchEvent(event);
					break
				}
			}
			if ($('#ddl_CCE5_5_1').length && $('.infoOtherSkill .mt_skillOtherLang').html()) {
				var ctype = $('#ddl_CCE5_5_1')[0];
				switch ($('.infoOtherSkill .mt_skillOtherLang').html()) {
				case '德语':
					ctype.options[1].selected = true;
					ctype.dispatchEvent(event);
					break;
				case '法语':
					ctype.options[2].selected = true;
					ctype.dispatchEvent(event);
					break;
				case '日语':
					ctype.options[3].selected = true;
					ctype.dispatchEvent(event);
					break;
				default:
					ctype.options[4].selected = true;
					ctype.dispatchEvent(event);
					break
				}
			}
			if ($('#cc_CCF12_6_1') && $('.infoOtherSkill .mt_skillOtherLang').eq(0).html()) {
				$('#cc_CCF12_6_1').val($('.infoOtherSkill .mt_skillOtherLang').eq(0).html())
			}
			if ($('#cc_CCF4_6_1') && $('.infoschaward .mt_schawradList').eq(0).html()) {
				$('#cc_CCF4_6_1').val($('.infoschaward .mt_schawradList').eq(0).html())
			}
			if ($('#cc_CCA16_1_1').length && $('#cc_CCA16_1_1').attr('cname') == '其他语种' && $('.infoOtherSkill .mt_skillOtherLang').eq(0).html()) {
				$('#cc_CCA16_1_1').val($('.infoOtherSkill .mt_skillOtherLang').eq(0).html())
			}
		} else if ($('#container h1').eq(0).text() == '技能及特长') {
			var skilllevel = 0;
			var maxlevel = 0;
			for (var i = 0; i < $('.infoEnglishSkill').length; i++) {
				if ($('.mt_skillEngLevel').eq(i).html() == '专业八级') {
					skilllevel = 6
				} else if ($('.mt_skillEngLevel').eq(i).html() == '专业四级') {
					skilllevel = 3
				} else if ($('.mt_skillEngLevel').eq(i).html() == '大学英语六级') {
					skilllevel = 2
				} else {
					skilllevel = 1
				}
				if (skilllevel > maxlevel) {
					maxlevel = skilllevel
				}
			}
			if ($('#ddl_EnglishLevel_5_1').length) {
				var engskill = document.getElementById('ddl_EnglishLevel_5_1');
				if (maxlevel == 6) {
					engskill.options[4].selected = true
				} else if (maxlevel == 3) {
					engskill.options[3].selected = true
				} else if (maxlevel == 2) {
					engskill.options[2].selected = true
				} else if (maxlevel == 1) {
					engskill.options[1].selected = true
				}
				engskill.dispatchEvent(event)
			}
			if ($('textarea[name=\"cc_CCF2_6_1\"]') && $('textarea[name=\"cc_CCF2_6_1\"]').eq(0).attr('cname') == '其他特长情况') {
				$('textarea[name=\"cc_CCF2_6_1\"]').val($('#mt_hobbies').html())
			}
		} else if ($('#container h1').eq(0).text() == '学生实践经验' || $('#container h1').eq(0).text() == '学生期间实践经验' || $('#container h1').eq(0).text() == '项目经验' || $('#container h1').eq(0).text() == '社团实习经历' || $('#container h1').eq(0).text() == 'Internship/Working Experience' || $('#container h1').eq(0).text() == 'Experience') {
			for (var i = 0; i < $('.infoproject').length; i++) {
				if ($('#cc_CCC1_3_' + (i + 1))) {
					if ($('#cc_CCC1_3_' + (i + 1)).attr('cname') == '项目结束时间 ' && $('.infoproject .mt_proenddate').eq(i).html()) {
						$('#cc_CCC1_3_' + (i + 1)).val(addZero($('.infoproject .mt_proenddate').eq(i).html()))
					} else if ($('.infoproject .mt_prostartdate').eq(i).html()) {
						$('#cc_CCC1_3_' + (i + 1)).val(addZero($('.infoproject .mt_prostartdate').eq(i).html()))
					}
				}
				if ($('#cc_CCC2_3_' + (i + 1))) {
					if ($('#cc_CCC2_3_' + (i + 1)).attr('cname') == '项目开始时间' && $('.infoproject .mt_prostartdate').eq(i).html()) {
						$('#cc_CCC2_3_' + (i + 1)).val(addZero($('.infoproject .mt_prostartdate').eq(i).html()))
					} else if ($('.infoproject .mt_proenddate').eq(i).html()) {
						$('#cc_CCC2_3_' + (i + 1)).val(addZero($('.infoproject .mt_proenddate').eq(i).html()))
					}
				}
				if ($('#cc_CCF2_6_' + (i + 1))) {
					if ($('#cc_CCF2_6_' + (i + 1)).attr('cname') == '项目描述及职责' && $('.infoproject .mt_projectRemark').eq(i).html()) {
						$('#cc_CCF2_6_' + (i + 1)).val($('.infoproject .mt_projectRemark').eq(i).html())
					} else if ($('#cc_CCF2_6_' + (i + 1)).attr('cname') == '项目描述' && $('.infoproject .mt_projectRemark').eq(i).html()) {
						$('#cc_CCF2_6_' + (i + 1)).val($('.infoproject .mt_projectRemark').eq(i).html())
					}  else if ($('.infoproject .mt_positionName').eq(i).html()) {
						$('#cc_CCF2_6_' + (i + 1)).val($('.infoproject .mt_positionName').eq(i).html())
					}
				}
				if ($('#cc_CCF1_6_' + (i + 1))) {
					if ($('#cc_CCF1_6_' + (i + 1)).attr('cname') == '项目职责 ' && $('.infoproject .mt_projectDuty').eq(i).html()) {
						$('#cc_CCF1_6_' + (i + 1)).val($('.infoproject .mt_projectDuty').eq(i).html())
					} else if ($('.infoproject .mt_projectRemark').eq(i).html()) {
						$('#cc_CCF1_6_' + (i + 1)).val($('.infoproject .mt_projectRemark').eq(i).html())
					}
				}
				if ($('#cc_CCA1_1_' + (i + 1)).length) {
					if ($('#cc_CCA1_1_' + (i + 1)).attr('cname') == '担任职务' && $('.infoproject .mt_positionName').eq(i).html()) {
						$('#cc_CCA1_1_' + (i + 1)).val($('.infoproject .mt_positionName').eq(i).html())
					} else if ($('#cc_CCA1_1_' + (i + 1)).attr('cname') == '职务' && $('.infoproject .mt_positionName').eq(i).html()) {
						$('#cc_CCA1_1_' + (i + 1)).val($('.infoproject .mt_positionName').eq(i).html())
					} else if ($('#cc_CCA1_1_' + (i + 1)).attr('cname') == '项目名称' && $('.infoproject .mt_projectName').eq(i).html()) {
						$('#cc_CCA1_1_' + (i + 1)).val($('.infoproject .mt_projectName').eq(i).html())
					} else if ($('.infoproject .mt_reterenceName').eq(i).html()) {
						$('#cc_CCA1_1_' + (i + 1)).val($('.infoproject .mt_reterenceName').eq(i).html())
					}
				}
				if ($('#cc_CCA2_1_' + (i + 1)) && $('.infoproject .mt_reterencePhone').eq(i).html()) {
					$('#cc_CCA2_1_' + (i + 1)).val($('.infoproject .mt_reterencePhone').eq(i).html())
				}
			}
			if ($('#cc_Degree_1_1').length && $('#cc_Degree_1_1').attr('cname') != '项目名称' && $.trim($('#cc_Degree_1_1').parent().prev().text()) != '社会实践名称' && $.trim($('#cc_Degree_1_1').parent().prev().text()) != '证明人' && $.trim($('#cc_Degree_1_1').parent().prev().text()) != '担任职务') {
				for (var i = 0; i < $('.infoparttimejobs').length; i++) {
					if ($('#cc_CCC1_3_' + (i + 1)) && $('.infoparttimejobs .mt_startDate').eq(i).html()) {
						$('#cc_CCC1_3_' + (i + 1)).val(addZero($('.infoparttimejobs .mt_startDate').eq(i).html()))
					}
					if ($('#cc_CCC2_3_' + (i + 1)) && $('.infoparttimejobs .mt_endDate').eq(i).html()) {
						$('#cc_CCC2_3_' + (i + 1)).val(addZero($('.infoparttimejobs .mt_endDate').eq(i).html()))
					}
					if ($('#cc_CCA1_1_' + (i + 1)) && $('.infoparttimejobs .mt_companyName').eq(i).html()) {
						$('#cc_CCA1_1_' + (i + 1)).val($('.infoparttimejobs .mt_companyName').eq(i).html())
					}
					if ($('#cc_CCA2_1_' + (i + 1)) && $('.infoparttimejobs .mt_companyproperty').eq(i).html()) {
						$('#cc_CCA2_1_' + (i + 1)).val($('.infoparttimejobs .mt_companyproperty').eq(i).html())
					}
					if ($('#cc_CCF2_6_' + (i + 1)) && $('.infoparttimejobs .mt_positionName').eq(i).html()) {
						$('#cc_CCF2_6_' + (i + 1)).val($('.infoparttimejobs .mt_positionName').eq(i).html())
					}
					if ($('#cc_CCF1_6_' + (i + 1)) && $('.infoparttimejobs .mt_workContent .workContent').eq(i).text()) {
						$('#cc_CCF1_6_' + (i + 1)).val($('.infoparttimejobs .mt_workContent .workContent').eq(i).text())
					}
				}
			}
			if ($('#cc_CCF2_6_1').length && $.trim($('#cc_CCF2_6_1').parent().prev().text()) == '实习公司名称') {
				for (var i = 0; i < $('.infoparttimejobs').length; i++) {
					if ($('#cc_CCC3_3_' + (i + 1)) && $('.infoparttimejobs .mt_startDate').eq(i).html()) {
						$('#cc_CCC3_3_' + (i + 1)).val(addZero($('.infoparttimejobs .mt_startDate').eq(i).html()))
					}
					if ($('#cc_CCC4_3_' + (i + 1)) && $('.infoparttimejobs .mt_endDate').eq(i).html()) {
						$('#cc_CCC4_3_' + (i + 1)).val(addZero($('.infoparttimejobs .mt_endDate').eq(i).html()))
					}
					if ($('#cc_CCF2_6_' + (i + 1)) && $('.infoparttimejobs .mt_companyName').eq(i).html()) {
						$('#cc_CCF2_6_' + (i + 1)).val($('.infoparttimejobs .mt_companyName').eq(i).html())
					}
					if ($('#cc_CCF3_6_' + (i + 1)) && $('.infoparttimejobs .workDes').eq(i).text()) {
						$('#cc_CCF3_6_' + (i + 1)).val($('.infoparttimejobs .workDes').eq(i).text())
					}
					if ($('#cc_CCF4_6_' + (i + 1)) && $('.infoparttimejobs .workContent').eq(i).text()) {
						$('#cc_CCF4_6_' + (i + 1)).val($('.infoparttimejobs .workContent').eq(i).text())
					}
				}
			}
			if ($('#cc_Degree_1_1').length && $.trim($('#cc_Degree_1_1').parent().prev().text()) == '社会实践名称') {
				for (var i = 0; i < $('.infoschoolclub').length; i++) {
					if ($('#cc_CCC1_3_' + (i + 1)) && $('.infoschoolclub .mt_startDate').eq(i).html()) {
						$('#cc_CCC1_3_' + (i + 1)).val(addZero($('.infoschoolclub .mt_startDate').eq(i).html()))
					}
					if ($('#cc_CCC2_3_' + (i + 1)) && $('.infoschoolclub .mt_endDate').eq(i).html()) {
						$('#cc_CCC2_3_' + (i + 1)).val(addZero($('.infoschoolclub .mt_endDate').eq(i).html()))
					}
					if ($('#cc_CCA1_1_' + (i + 1)) && $('.infoschoolclub .mt_schClubName').eq(i).html()) {
						$('#cc_CCA1_1_' + (i + 1)).val($('.infoschoolclub .mt_schClubName').eq(i).html())
					}
					if ($('#cc_CCF1_6_' + (i + 1)) && $('.infoschoolclub .mt_workDes').eq(i).html()) {
						$('#cc_CCF1_6_' + (i + 1)).val($('.infoschoolclub .mt_workDes').eq(i).html())
					}
				}
			}
			if ($('#cc_CCA8_1_1').length) {
				var schOpt = $('#cc_CCA8_1_1').get(0).options;
				if ($('.infoschoolclub').length) {
					schOpt[1].selected = true;
					var schcon = '';
					$('#cc_CCF2_6_1').val('');
					$('.infoschoolclub').each(function(i, val) {
						schcon = $('#cc_CCF2_6_1').val();
						schcon = schcon + $('.infoschoolclub .mt_schClubList').eq(i).html() + '\\n\\n';
						$('#cc_CCF2_6_1').val(schcon)
					})
				} else {
					schOpt[2].selected = true
				}
			}
			if ($('#cc_CCA16_1_1').length) {
				var jobOpt = $('#cc_CCA16_1_1').get(0).options;
				if ($('.infoparttimejobs').length) {
					jobOpt[1].selected = true;
					$('.infoparttimejobs').each(function(i, val) {
						var st = addZero($('.infoparttimejobs .mt_startDate').eq(i).html());
						var et = addZero($('.infoparttimejobs .mt_endDate').eq(i).html());
						var cpname = $('.infoparttimejobs .mt_companyName').eq(i).html();
						var cdes = $('.infoparttimejobs .mt_workDes .workDes').eq(i).html();
						if (i == 0) {
							$('#cc_CCC12_3_1').val(st);
							$('#cc_CCC2_3_1').val(et);
							$('#cc_CCF3_6_1').val(cpname);
							$('#cc_CCF4_6_1').val(cdes)
						} else if (i == 1) {
							$('#cc_CCC11_3_1').val(st);
							$('#cc_CCC3_3_1').val(et);
							$('#cc_CCF5_6_1').val(cpname);
							$('#cc_CCF6_6_1').val(cdes)
						}
					})
				}
			}
		} else if ($('#container h1').eq(0).text() == '校内职务及奖励' && $('#container h1').eq(0).text() == '奖励、奖学金') {
			if ($('select[name=\"cc_CCA21_1_1\"]')) {
				selectFacc($('.infoschoolclub .mt_schClubLevel').html(), $('select[name=\"cc_CCA21_1_1\"]'));
				var pro = document.getElementById('cc_CCA21_1_1');
				pro.dispatchEvent(event)
			}
			if ($('#cc_CCC11_3_1').length && $('#cc_CCC11_3_1').attr('cname') == '担任在校职务的开始时间' && $('.infoschoolclub .mt_startDate').html()) {
				$('#cc_CCC11_3_1').val(addZero($('.infoschoolclub .mt_startDate').html()))
			}
			if ($('#cc_CCC12_3_1').length && $('#cc_CCC12_3_1').attr('cname') == '担任在校职务的结束时间' && $('.infoschoolclub .mt_endDate').html()) {
				$('#cc_CCC12_3_1').val(addZero($('.infoschoolclub .mt_endDate').html()))
			}
			if ($('#cc_CCF3_6_1').length && $('#cc_CCF3_6_1').attr('cname') == '获得奖励名称' && $('.infoschaward .mt_awardsName').html()) {
				$('#cc_CCF3_6_1').val($('.infoschaward .mt_awardsName').html())
			}
			if ($('select[name=\"cc_CCA12_1_1\"]')) {
				selectFacc($('.infoschaward .mt_awardsType').html(), $('select[name=\"cc_CCA12_1_1\"]'));
				var pro = document.getElementById('cc_CCA12_1_1');
				pro.dispatchEvent(event)
			}
			if ($('#cc_CCC2_3_1').length && $('#cc_CCC2_3_1').attr('cname') == '奖励时间' && $('.infoschaward .mt_awardsDate').html()) {
				$('#cc_CCC2_3_1').val(addZero($('.infoschaward .mt_awardsDate').html()))
			}
			if ($('#cc_CCA11_1_1').length && $('#schawards-list mt_awardsName').eq(0).html()) {
				$('#cc_CCA11_1_1').val($('#schawards-list mt_awardsName').eq(0).html())
			}
			if ($('#cc_CCC12_3_1').length && $('#schawards-list mt_awardsDate').eq(0).html()) {
				$('#cc_CCC12_3_1').val(formatDate($('#schawards-list mt_awardsDate').eq(0).html(), 2) + '-01')
			}
		} else if ($('#container h1').eq(0).text() == '校内外社会实践活动') {
			if ($('#cc_CCF2_6_1').length && $('#cc_CCF2_6_1').attr('cname') == '校内外社会实践活动描述') {
				for (var i = 0; i < $('.infoschoolclub').length; i++) {
					if ($('#cc_CCC1_3_' + (i + 1)).length) {
						if ($('#cc_CCC1_3_' + (i + 1)) && $('.infoschoolclub .mt_startDate').eq(i).html()) {
							$('#cc_CCC1_3_' + (i + 1)).val(addZero($('.infoschoolclub .mt_startDate').eq(i).html()))
						}
						if ($('#cc_CCC2_3_' + (i + 1)) && $('.infoschoolclub .mt_endDate').eq(i).html()) {
							$('#cc_CCC2_3_' + (i + 1)).val(addZero($('.infoschoolclub .mt_endDate').eq(i).html()))
						}
						if ($('#cc_CCA1_1_' + (i + 1)) && $('.infoschoolclub .mt_positionName').eq(i).html()) {
							$('#cc_CCA1_1_' + (i + 1)).val($('.infoschoolclub .mt_positionName').eq(i).html())
						}
						if ($('#cc_CCF1_6_' + (i + 1)) && $('.infoschoolclub .mt_schClubName').eq(i).html()) {
							$('#cc_CCF1_6_' + (i + 1)).val($('.infoschoolclub .mt_schClubName').eq(i).html())
						}
						if ($('#cc_CCF2_6_' + (i + 1)) && $('.infoschoolclub .mt_workDes').eq(i).html()) {
							$('#cc_CCF2_6_' + (i + 1)).val($('.infoschoolclub .mt_workDes').eq(i).html())
						}
					}
				}
			}
		} else if ($('#container h1').eq(0).text() == '学生会、社团经验' || $('#container h1').eq(0).text() == '社团活动经历') {
			for (var i = 0; i < $('.infoschoolclub .mt_positionName').length; i++) {
				if ($('#cc_CCA1_1_' + (i + 1))) {
					$('#cc_CCA1_1_' + (i + 1)).val($('.infoschoolclub .mt_positionName').eq(i).html())
				}
				if ($('#cc_CCC1_3_' + (i + 1))) {
					$('#cc_CCC1_3_' + (i + 1)).val(addZero($('.infoschoolclub .mt_startDate').eq(i).html()))
				}
				if ($('#cc_CCC2_3_' + (i + 1))) {
					$('#cc_CCC2_3_' + (i + 1)).val(addZero($('.infoschoolclub .mt_endDate').eq(i).html()))
				}
				if ($('#cc_CCA2_1_' + (i + 1))) {
					$('#cc_CCA2_1_' + (i + 1)).val(addZero($('.infoschoolclub .mt_positionName').eq(i).html()))
				}
				if ($('#cc_CCF1_6_' + (i + 1))) {
					$('#cc_CCF1_6_' + (i + 1)).val($('.infoschoolclub .mt_workDes').eq(i).html())
				}
			}
		} else if ($('#container h1').eq(0).text() == '奖励信息' || $('#container h1').eq(0).text() == '学生奖励') {
			for (var i = 0; i < $('.infoschaward').length; i++) {
				if (i <= 2) {
					var schatime = $('.infoschaward .mt_awardsDate').eq(i).html();
					var schaary = schatime.split('-');
					var y = 2018 - parseInt(schaary[0]);
					var d = parseInt(schaary[1]);
					var l = 0;
					switch ($('.infoschaward .mt_awardsLevel').eq(i).html()) {
					case '特等奖':
						l = 0;
						break;
					case '一等奖':
						l = 1;
						break;
					case '二等奖':
						l = 2;
						break;
					case '三等奖':
						l = 3;
						break
					}
					if ($('#cc_ResumeSubID_7_' + (i + 1)).next().find('select').eq(0).length) {
						$('#cc_ResumeSubID_7_' + (i + 1)).next().find('select').eq(0).get(0).options[y].selected = true;
						$('#cc_ResumeSubID_7_' + (i + 1)).next().find('select').eq(1).get(0).options[d].selected = true
					}
					$('#cc_CCA2_1_' + (i + 1)).val($('.infoschaward .mt_awardsName').eq(i).html());
					if ($('#ddl_CCE1_5_' + (i + 1)).length) {
						var adtype = $('#ddl_CCE1_5_' + (i + 1)).get(0);
						for (var j = 0; j < 6; j++) {
							if (adtype.options[j].innerHTML == $('.infoschaward .mt_awardsType').eq(i).html()) {
								adtype.options[j].selected = true;
								$('#ddl_CCE1_5_' + (i + 1)).trigger('change');
								$('#cc_CCE1_5_' + (i + 1)).get(0).options[l].selected = true;
								break
							}
						}
					}
				} else {
					break
				}
			}
			if ($('#cc_CCA18_1_1').length) {
				var adtype = $('#cc_CCA18_1_1').get(0);
				for (var j = 0; j < 6; j++) {
					if ($('.infoschaward .mt_awardsType').html().indexOf(adtype.options[j].innerHTML) != -1) {
						adtype.options[j].selected = true;
						break
					}
				}
			}
			if ($('#cc_CCF3_6_1').length && $('.infoschaward .mt_schawradList').html()) {
				$('#cc_CCF3_6_1').val($('.infoschaward .mt_schawradList').html())
			}
		} else if ($('#container h1').eq(0).text() == '家庭关系') {
			if ($('#cc_Degree_1_1').length && $('#cc_Degree_1_1').attr('cname') == '姓名' && $('#mt_fmname').html()) {
				$('#cc_Degree_1_1').val($('#mt_fmname').html())
			}
			if ($('select[name=\"cc_CCA2_1_1\"]').length && $('#cc_CCA2_1_1').attr('cname') == '关系' && $('#mt_fmrelation').html()) {
				var opt = $('#cc_CCA2_1_1').get(0);
				switch ($('#mt_fmrelation').html()) {
				case '父亲':
				case '父子':
					opt.options[1].selected = true;
					break;
				case '母亲':
				case '母子':
					opt.options[2].selected = true;
					break;
				default:
					break
				}
			}
			if ($('#cc_CCA3_1_1').length && $('#cc_CCA3_1_1').attr('cname') == '职位' && $('#mt_fmposition').html()) {
				$('#cc_CCA3_1_1').val($('#mt_fmposition').html())
			}
			if ($('#cc_CCF1_6_1').length && $('#cc_CCF1_6_1').attr('cname') == '工作单位' && $('#mt_fmwork').html()) {
				$('#cc_CCF1_6_1').val($('#mt_fmwork').html())
			}
		} else if ($('#container h1').eq(0).text() == '家庭成员') {
			if ($('#cc_CCA28_1_1').length) {
				if ($('#mt_fmrelation').html() == '父亲' || $('#mt_fmrelation').html() == '父子') {
					$('#cc_CCA6_1_1').val($('#mt_fmname').html());
					$('#cc_CCF4_6_1').val($('#mt_fmwork').html());
					$('#cc_CCF5_6_1').val($('#mt_fmposition').html())
				} else if ($('#mt_fmrelation').html() == '母亲' || $('#mt_fmrelation').html() == '母子') {
					$('#cc_CCA16_1_1').val($('#mt_fmname').html());
					$('#cc_CCF6_6_1').val($('#mt_fmwork').html());
					$('#cc_CCF7_6_1').val($('#mt_fmposition').html())
				}
			} else if ($('#cc_CCA18_1_1').length && $('#cc_CCA18_1_1').attr('cname') == '姓名（父）') {
				if ($('#mt_fmrelation').html() == '父亲' || $('#mt_fmrelation').html() == '父子') {
					$('#cc_CCA18_1_1').val($('#mt_fmname').html());
					$('#cc_CCF3_6_1').val($('#mt_fmwork').html());
					$('#cc_CCA19_1_1').val($('#mt_fmposition').html());
					$('#cc_CCA10_1_1').val($('#mt_fmphone').html())
				} else if ($('#mt_fmrelation').html() == '母亲' || $('#mt_fmrelation').html() == '母子') {
					$('#cc_CCA11_1_1').val($('#mt_fmname').html());
					$('#cc_CCF4_6_1').val($('#mt_fmwork').html());
					$('#cc_CCA20_1_1').val($('#mt_fmposition').html());
					$('#cc_CCA12_1_1').val($('#mt_fmphone').html())
				}
			} else if ($('#cc_Degree_1_1').length && $('#cc_Degree_1_1').attr('cname') == '姓名') {
				$('#cc_Degree_1_1').val($('#mt_fmname').html());
				$('#cc_CCA2_1_1').val($('#mt_fmrelation').html());
				$('#cc_CCA4_1_1').val($('#mt_fmwork').html());
				$('#cc_CCA5_1_1').val($('#mt_fmphone').html())
			} else {
				if ($('#cc_CCA6_1_1') && $('#mt_fmname').html()) {
					$('#cc_CCA6_1_1').val($('#mt_fmname').html())
				}
				if ($('#cc_CCA7_1_1') && $('#mt_fmrelation').html()) {
					$('#cc_CCA7_1_1').val($('#mt_fmrelation').html())
				}
				if ($('#cc_CCA8_1_1') && $('#mt_fmwork').html()) {
					$('#cc_CCA8_1_1').val($('#mt_fmwork').html())
				}
				if ($('#cc_CCA9_1_1') && $('#mt_fmphone').html()) {
					$('#cc_CCA9_1_1').val($('#mt_fmphone').html())
				}
			}
		} else if ($('#container h1').eq(0).text() == '家庭背景') {
			if ($('#cc_CCA22_1_1').length && $('#mt_fmname').html()) {
				$('#cc_CCA22_1_1').val($('#mt_fmname').html())
			}
			if ($('#cc_CCA23_1_1').length && $('#mt_fmrelation').html()) {
				$('#cc_CCA23_1_1').val($('#mt_fmrelation').html())
			}
			if ($('#cc_CCA24_1_1').length && $('#mt_fmwork').html()) {
				$('#cc_CCA24_1_1').val($('#mt_fmwork').html())
			}
			if ($('#cc_CCA25_1_1').length && $('#mt_fmposition').html()) {
				$('#cc_CCA25_1_1').val($('#mt_fmposition').html())
			}
			if ($('#cc_CCA26_1_1').length && $('#mt_fmphone').html()) {
				$('#cc_CCA26_1_1').val($('#mt_fmphone').html())
			}
			if ($('#cc_CCF1_6_1').length && $('#mt_fmname').html()) {
				$('#cc_CCF1_6_1').val($('#mt_fmname').html())
			}
			if ($('#cc_Degree_1_1').length && $('#mt_fmrelation').html()) {
				$('#cc_Degree_1_1').val($('#mt_fmrelation').html())
			}
			if ($('#cc_CCA3_1_1').length && $('#mt_fmwork').html()) {
				$('#cc_CCA3_1_1').val($('#mt_fmwork').html())
			}
			if ($('#cc_CCA4_1_1').length && $('#mt_fmposition').html()) {
				$('#cc_CCA4_1_1').val($('#mt_fmposition').html())
			}
		} else if ($('#container h1').eq(0).text() == '培训经历') {
			if ($('#cc_CCF1_6_1').length) {
				for (var i = 0; i < $('.infotraining').length; i++) {
					if ($('#cc_CCC1_3_' + (i + 1)) && $('.infotraining .mt_startDate').eq(i).html()) {
						$('#cc_CCC1_3_' + (i + 1)).val(addZero($('.infotraining .mt_startDate').eq(i).html()))
					}
					if ($('#cc_CCC2_3_' + (i + 1)) && $('.infotraining .mt_endDate').eq(i).html()) {
						$('#cc_CCC2_3_' + (i + 1)).val(addZero($('.infotraining .mt_endDate').eq(i).html()))
					}
					if ($('#cc_CCA1_1_' + (i + 1)) && $('.mt_trainingName').eq(i).html()) {
						if ($('#cc_CCA1_1_' + (i + 1)).attr('cname') == '培训机构') {
							$('#cc_CCA1_1_' + (i + 1)).val($('.mt_trainingCompany').eq(i).html())
						} else {
							$('#cc_CCA1_1_' + (i + 1)).val($('.mt_trainingName').eq(i).html())
						}
					}
					if ($('#cc_CCA2_1_' + (i + 1)) && $('.mt_trainingCompany').eq(i).html()) {
						$('#cc_CCA2_1_' + (i + 1)).val($('.mt_trainingCompany').eq(i).html())
					}
					if ($('#cc_CCF1_6_' + (i + 1)) && $('.mt_trainingDes').eq(i).html()) {
						$('#cc_CCF1_6_' + (i + 1)).val($('.mt_trainingDes').eq(i).html())
					}
					if ($('#cc_CCA2_1_' + (i + 1)).parents('dl').next('dl').find('select').eq(0).length) {
						var tratime = $('.infotraining .mt_startDate').eq(i).html();
						var traary = tratime.split('-');
						var tray = 2018 - parseInt(traary[0]);
						var tram = parseInt(traary[1]);
						$('#cc_CCA2_1_1').parents('dl').next('dl').find('select').eq(0).get(0).options[tray].selected = true;
						$('#cc_CCA2_1_1').parents('dl').next('dl').find('select').eq(1).get(0).options[tram].selected = true
					}
				}
			}
		} else if ($('#container h1').eq(0).text() == '培训情况') {
			if ($('#cc_CCF1_6_1').length) {
				for (var i = 0; i < $('.ci').length; i++) {
					if ($('.infotraining').length > i) {
						if ($('#cc_CCC1_3_' + (i + 1)) && $('.infotraining .mt_startDate').eq(i).html()) {
							$('#cc_CCC1_3_' + (i + 1)).val(addZero($('.infotraining .mt_startDate').eq(i).html()))
						}
						if ($('#cc_CCA1_1_' + (i + 1)) && $('.infotraining .mt_trainingName').eq(i).html()) {
							$('#cc_CCA1_1_' + (i + 1)).val($('.infotraining .mt_trainingName').eq(i).html())
						}
						if ($('#cc_CCF1_6_' + (i + 1)) && $('.infotraining .mt_trainingCompany').eq(i).html()) {
							$('#cc_CCF1_6_' + (i + 1)).val($('.infotraining .mt_trainingCompany').eq(i).html())
						}
						if ($('#cc_CCF2_6_' + (i + 1)) && $('.infotraining .mt_certificateName').eq(i).html()) {
							$('#cc_CCF2_6_' + (i + 1)).val($('.infotraining .mt_certificateName').eq(i).html())
						}
					} else {
						break
					}
				}
			}
		} else if ($('#container h1').eq(0).text() == '工作经验') {
			if ($('#cc_CCC1_3_1').length) {
				if ($('#cc_Degree_1_1').attr('cname') == '工作类型') {
					var j = $('.infofulltimejobs').length;
					for (var i = 0; i < $('.infofulltimejobs').length; i++) {
						if (i < $('.ci').length) {
							if ($('#cc_CCC1_3_' + (i + 1)) && $('.infofulltimejobs .mt_startDate').eq(i).html()) {
								$('#cc_CCC1_3_' + (i + 1)).val(addZero($('.infofulltimejobs .mt_startDate').eq(i).html()))
							}
							if ($('#cc_CCC2_3_' + (i + 1)) && $('.infofulltimejobs .mt_endDate').eq(i).html()) {
								$('#cc_CCC2_3_' + (i + 1)).val(addZero($('.infofulltimejobs .mt_endDate').eq(i).html()))
							}
							if ($('#cc_CCA3_1_' + (i + 1)) && $('.infofulltimejobs .mt_companyName').eq(i).html()) {
								$('#cc_CCA3_1_' + (i + 1)).val($('.infofulltimejobs .mt_companyName').eq(i).html())
							}
							if ($('#cc_CCA2_1_' + (i + 1)) && $('.infofulltimejobs .mt_positionName').eq(i).html()) {
								$('#cc_CCA2_1_' + (i + 1)).val($('.infofulltimejobs .mt_positionName').eq(i).html())
							}
							if ($('#cc_CCF1_6_' + (i + 1)) && $('.infofulltimejobs .workDes').eq(i).html()) {
								$('#cc_CCF1_6_' + (i + 1)).val($('.infofulltimejobs .workDes').eq(i).html())
							}
							if ($('#cc_CCA1_1_' + (i + 1)).length && $('#cc_CCA1_1_' + (i + 1)).attr('cname') == '工作类型' && $('.infofulltimejobs .mt_workcat').eq(i).html()) {
								var opt = $('#cc_CCA1_1_' + (i + 1)).get(0);
								opt.options[2].selected = true
							}
						} else {
							break
						}
					}
					for (var i = j; i < $('.infoparttimejobs').length + j; i++) {
						if (i < $('.ci').length) {
							if ($('#cc_CCC1_3_' + (i + 1)) && $('.infoparttimejobs .mt_startDate').eq(i - j).html()) {
								$('#cc_CCC1_3_' + (i + 1)).val(addZero($('.infoparttimejobs .mt_startDate').eq(i - j).html()))
							}
							if ($('#cc_CCC2_3_' + (i + 1)) && $('.infoparttimejobs .mt_endDate').eq(i - j).html()) {
								$('#cc_CCC2_3_' + (i + 1)).val(addZero($('.infoparttimejobs .mt_endDate').eq(i - j).html()))
							}
							if ($('#cc_CCA3_1_' + (i + 1)) && $('.infoparttimejobs .mt_companyName').eq(i - j).html()) {
								$('#cc_CCA3_1_' + (i + 1)).val($('.infoparttimejobs .mt_companyName').eq(i - j).html())
							}
							if ($('#cc_CCA2_1_' + (i + 1)) && $('.infoparttimejobs .mt_positionName').eq(i - j).html()) {
								$('#cc_CCA2_1_' + (i + 1)).val($('.infoparttimejobs .mt_positionName').eq(i - j).html())
							}
							if ($('#cc_CCF1_6_' + (i + 1)) && $('.infoparttimejobs .workDes').eq(i - j).html()) {
								$('#cc_CCF1_6_' + (i + 1)).val($('.infoparttimejobs .workDes').eq(i - j).html())
							}
							if ($('#cc_CCA1_1_' + (i + 1)).length && $('#cc_CCA1_1_' + (i + 1)).attr('cname') == '工作类型' && $('.infoparttimejobs .mt_workcat').eq(i - j).html()) {
								var opt = $('#cc_CCA1_1_' + (i + 1)).get(0);
								opt.options[1].selected = true
							}
						} else {
							break
						}
					}
				} else {
					for (var i = 0; i < $('.infofulltimejobs').length; i++) {
						if ($('#cc_CCC1_3_' + (i + 1)) && $('.infofulltimejobs .mt_startDate').eq(i).html()) {
							$('#cc_CCC1_3_' + (i + 1)).val(addZero($('.infofulltimejobs .mt_startDate').eq(i).html()))
						}
						if ($('#cc_CCC2_3_' + (i + 1)) && $('.infofulltimejobs .mt_endDate').eq(i).html()) {
							$('#cc_CCC2_3_' + (i + 1)).val(addZero($('.infofulltimejobs .mt_endDate').eq(i).html()))
						}
						if ($('#cc_CCA1_1_' + (i + 1)) && $('.infofulltimejobs .mt_companyName').eq(i).html()) {
							$('#cc_CCA1_1_' + (i + 1)).val($('.infofulltimejobs .mt_companyName').eq(i).html())
						}
						if ($('#cc_CCA2_1_' + (i + 1)).length) {
							var csize = $('#cc_CCA2_1_' + (i + 1)).get(0);
							switch ($('.infofulltimejobs .mt_companySize').eq(i).html()) {
							case '少于50人':
								csize.options[1].selected = true;
								break;
							case '50-149人':
								csize.options[2].selected = true;
								break;
							case '150-499人':
								csize.options[3].selected = true;
								break;
							default:
								csize.options[4].selected = true;
								break
							}
						}
						if ($('#cc_CCA4_1_' + (i + 1)) && $('.infofulltimejobs .mt_department').eq(i).html()) {
							$('#cc_CCA4_1_' + (i + 1)).val($('.infofulltimejobs .mt_department').eq(i).html())
						}
						if ($('#cc_CCF1_6_' + (i + 1)) && $('.infofulltimejobs .mt_workContent').eq(i).text()) {
							$('#cc_CCF1_6_' + (i + 1)).val($('.infofulltimejobs .mt_workContent').eq(i).text())
						}
						if ($('#cc_CCE1_1_' + (i + 1)).length) {
							var ctype = $('#cc_CCE1_1_' + (i + 1)).get(0);
							switch ($('.infofulltimejobs .mt_companyCat').eq(i).html()) {
							case '互联网/游戏/软件':
								ctype.options[1].selected = true;
								break;
							case '电子/通信/硬件':
								ctype.options[2].selected = true;
								break;
							case '房地产/建筑/物业':
								ctype.options[24].selected = true;
								break;
							case '金融':
								ctype.options[3].selected = true;
								break;
							case '消费品':
								ctype.options[5].selected = true;
								break;
							case '汽车/机械/制造':
								ctype.options[13].selected = true;
								break;
							case '服务/外包/中介':
								ctype.options[7].selected = true;
								break;
							case '广告/媒体/教育/文化':
								ctype.options[11].selected = true;
								break;
							case '交通/贸易/物流':
								ctype.options[21].selected = true;
								break;
							case '制药/医疗':
								ctype.options[8].selected = true;
								break;
							case '能源/化工/环保':
								ctype.options[61].selected = true;
								break
							}
						}
					}
				}
			}
		} else if ($('#container h1').eq(0).text() == '在校期间实习经验') {
			if ($('#cc_CCC1_3_1').length) {
				for (var i = 0; i < $('.infoparttimejobs').length; i++) {
					if (i <= 2) {
						if ($('#cc_CCC1_3_' + (i + 1)) && $('.infoparttimejobs .mt_startDate').eq(i).html()) {
							$('#cc_CCC1_3_' + (i + 1)).val(addZero($('.infoparttimejobs .mt_startDate').eq(i).html()))
						}
						if ($('#cc_CCC2_3_' + (i + 1)) && $('.infoparttimejobs .mt_endDate').eq(i).html()) {
							$('#cc_CCC2_3_' + (i + 1)).val(addZero($('.infoparttimejobs .mt_endDate').eq(i).html()))
						}
						if ($('#cc_CCA1_1_' + (i + 1)) && $('.infoparttimejobs .mt_companyName').eq(i).html()) {
							$('#cc_CCA1_1_' + (i + 1)).val($('.infoparttimejobs .mt_companyName').eq(i).html())
						}
						if ($('#cc_CCA2_1_' + (i + 1)).length) {
							var csize = $('#cc_CCA2_1_' + (i + 1)).get(0);
							switch ($('.infoparttimejobs .mt_companySize').eq(i).html()) {
							case '少于50人':
								csize.options[1].selected = true;
								break;
							case '50-149人':
								csize.options[2].selected = true;
								break;
							case '150-499人':
								csize.options[3].selected = true;
								break;
							default:
								csize.options[4].selected = true;
								break
							}
						}
						if ($('#cc_CCA4_1_' + (i + 1)) && $('.infoparttimejobs .mt_department').eq(i).html()) {
							$('#cc_CCA4_1_' + (i + 1)).val($('.infoparttimejobs .mt_department').eq(i).html())
						}
						if ($('#cc_CCF1_6_' + (i + 1)) && $('.infoparttimejobs .mt_workContent').eq(i).text()) {
							$('#cc_CCF1_6_' + (i + 1)).val($('.infoparttimejobs .mt_workContent').eq(i).text())
						}
						if ($('#cc_CCE1_1_' + (i + 1)).length) {
							var ctype = $('#cc_CCE1_1_' + (i + 1)).get(0);
							switch ($('.infoparttimejobs .mt_companyCat').eq(i).html()) {
							case '互联网/游戏/软件':
								ctype.options[1].selected = true;
								break;
							case '电子/通信/硬件':
								ctype.options[2].selected = true;
								break;
							case '房地产/建筑/物业':
								ctype.options[24].selected = true;
								break;
							case '金融':
								ctype.options[3].selected = true;
								break;
							case '消费品':
								ctype.options[5].selected = true;
								break;
							case '汽车/机械/制造':
								ctype.options[13].selected = true;
								break;
							case '服务/外包/中介':
								ctype.options[7].selected = true;
								break;
							case '广告/媒体/教育/文化':
								ctype.options[11].selected = true;
								break;
							case '交通/贸易/物流':
								ctype.options[21].selected = true;
								break;
							case '制药/医疗':
								ctype.options[8].selected = true;
								break;
							case '能源/化工/环保':
								ctype.options[61].selected = true;
								break
							}
						}
					} else {
						break
					}
				}
			}
		} else if ($('#container h1').eq(0).text() == '获得证书') {
			if ($('#cc_CCA2_1_1').length) {
				for (var i = 0; i < $('.infoplcerti').length; i++) {
					if (i <= 2) {
						if ($('#cc_CCA2_1_' + (i + 1)) && $('.infoplcerti .mt_certificateName').eq(i).html()) {
							$('#cc_CCA2_1_' + (i + 1)).val($('.infoplcerti .mt_certificateName').eq(i).html())
						}
						var certime = $('.infoplcerti .mt_getDate').eq(i).html();
						var cerary = certime.split('-');
						var cery = 2018 - parseInt(cerary[0]);
						var cerm = parseInt(cerary[1]);
						$('#cc_CCA2_1_' + (i + 1)).parents('dl').prev('dl').find('select').eq(0).get(0).options[cery].selected = true;
						$('#cc_CCA2_1_' + (i + 1)).parents('dl').prev('dl').find('select').eq(1).get(0).options[cerm].selected = true
					} else {
						break
					}
				}
			}
		}
		if ($('#cc_SelfAssessment_6_1').length && $('#mt_selfIntro').html()) {
			$('#cc_SelfAssessment_6_1').val($('#mt_selfIntro').html())
		}
		if ($('#container h1').eq(0).text() == '项目/课题经验') {
			for (var i = 0; i < $('.infoproject').length; i++) {
				if ($('#cc_CCF1_6_' + (i + 1)) && $('.infoproject .mt_projectName').eq(i).html()) {
					$('#cc_CCF1_6_' + (i + 1)).val($('.infoproject .mt_projectName').eq(i).html())
				}
				if ($('#cc_CCF2_6_' + (i + 1)) && $('.infoproject .mt_projectRemark').eq(i).html()) {
					$('#cc_CCF2_6_' + (i + 1)).val($('.infoproject .mt_projectRemark').eq(i).html())
				}
			}
		} else if ($('#container h1').eq(0).text() == '实习经历' || $('#container h1').eq(0).text() == '实践经验') {
			if ($('#cc_CCA12_1_1').length && $('.infoparttimejobs .mt_companyName').eq(0).length) {
				$('#cc_CCA12_1_1').val($('.infoparttimejobs .mt_companyName').eq(0).html())
			}
			if ($('#cc_CCC3_3_1').length && $('.infoparttimejobs .mt_startDate').eq(0).length) {
				$('#cc_CCC3_3_1').val(addZero($('.infoparttimejobs .mt_startDate').eq(0).html()))
			}
			if ($('#cc_CCC14_3_1').length && $('.infoparttimejobs .mt_endDate').eq(0).length) {
				$('#cc_CCC14_3_1').val(addZero($('.infoparttimejobs .mt_endDate').eq(0).html()))
			}
			if ($('#cc_CCF8_6_1').length && $('.infoparttimejobs .mt_workContent').eq(0).length) {
				$('#cc_CCF8_6_1').val($('.infoparttimejobs .mt_workContent').eq(0).text())
			}
			if ($('#cc_CCA22_1_1').length && $('.infoparttimejobs .mt_positionName').eq(0).length) {
				$('#cc_CCA22_1_1').val($('.infoparttimejobs .mt_positionName').eq(0).html())
			}
			if ($('#cc_CCA21_1_1').length && $('.infoparttimejobs .mt_companyproperty').eq(0).html()) {
				var ctype = $('#cc_CCA21_1_1').get(0);
				switch ($('.infoparttimejobs .mt_companyproperty').eq(0).html()) {
				case '国企':
					ctype.options[1].selected = true;
					break;
				case '民营公司':
					ctype.options[2].selected = true;
					break;
				case '外资-欧美':
				case '外资-非欧美':
					ctype.options[3].selected = true;
					break;
				default:
					ctype.options[4].selected = true;
					break
				}
			}
			if ($('#cc_CCA48_1_1').length && $('.infoparttimejobs .mt_companySize').eq(0).html().length) {
				var ctype = $('#cc_CCA48_1_1').get(0);
				switch ($('.infoparttimejobs .mt_companySize').eq(0).html()) {
				case '少于50人':
					ctype.options[5].selected = true;
					break;
				case '50-149人':
					ctype.options[3].selected = true;
					break;
				case '150-499人':
					ctype.options[2].selected = true;
					break;
				default:
					ctype.options[1].selected = true;
					break
				}
			}
			if ($('#cc_CCA42_1_1').length && $('.infoparttimejobs .mt_companyName').eq(1).length) {
				$('#cc_CCA42_1_1').val($('.infoparttimejobs .mt_companyName').eq(1).html())
			}
			if ($('#cc_CCC7_3_1').length && $('.infoparttimejobs .mt_startDate').eq(1).length) {
				if ($('.infoparttimejobs .mt_startDate').eq(1).html().length < 7) {
					$('#cc_CCC7_3_1').val($('.infoparttimejobs .mt_startDate').eq(1).html().split('-').join('-0'))
				} else {
					$('#cc_CCC7_3_1').val($('.infoparttimejobs .mt_startDate').eq(1).html())
				}
			}
			if ($('#cc_CCC8_3_1').length && $('.infoparttimejobs .mt_endDate').eq(1).length) {
				if ($('.infoparttimejobs .mt_endDate').eq(0).html().length < 7) {
					$('#cc_CCC8_3_1').val($('.infoparttimejobs .mt_endDate').eq(1).html().split('-').join('-0'))
				} else {
					$('#cc_CCC8_3_1').val($('.infoparttimejobs .mt_endDate').eq(1).html())
				}
			}
			if ($('#cc_CCF7_6_1').length && $('.infoparttimejobs .mt_workContent').eq(1).length) {
				$('#cc_CCF7_6_1').val($('.infoparttimejobs .mt_workContent').eq(1).text())
			}
			if ($('#cc_CCA33_1_1').length && $('.infoparttimejobs .mt_positionName').eq(1).length) {
				$('#cc_CCA33_1_1').val($('.infoparttimejobs .mt_positionName').eq(1).html())
			}
			if ($('#cc_CCA41_1_1').length && $('.infoparttimejobs .mt_companyproperty').eq(1).html()) {
				var ctype = $('#cc_CCA41_1_1').get(0);
				switch ($('.infoparttimejobs .mt_companyproperty').eq(1).html()) {
				case '国企':
					ctype.options[1].selected = true;
					break;
				case '民营公司':
					ctype.options[2].selected = true;
					break;
				case '外资-欧美':
				case '外资-非欧美':
					ctype.options[3].selected = true;
					break;
				default:
					ctype.options[4].selected = true;
					break
				}
			}
			if ($('#cc_CCA13_1_1').length && $('.infoparttimejobs .mt_companySize').eq(1).html().length) {
				var ctype = $('#cc_CCA13_1_1').get(0);
				switch ($('.infoparttimejobs .mt_companySize').eq(1).html()) {
				case '少于50人':
					ctype.options[5].selected = true;
					break;
				case '50-149人':
					ctype.options[3].selected = true;
					break;
				case '150-499人':
					ctype.options[2].selected = true;
					break;
				default:
					ctype.options[1].selected = true;
					break
				}
			}
			if ($('#cc_CCA44_1_1') && $('.infoparttimejobs .mt_companyName').eq(2).length) {
				$('#cc_CCA44_1_1').val($('.infoparttimejobs .mt_companyName').eq(2).html())
			}
			if ($('#cc_CCC18_3_1').length && $('.infoparttimejobs .mt_startDate').eq(2).length) {
				if ($('.infoparttimejobs .mt_startDate').eq(1).html().length < 7) {
					$('#cc_CCC18_3_1').val($('.infoparttimejobs .mt_startDate').eq(2).html().split('-').join('-0'))
				} else {
					$('#cc_CCC18_3_1').val($('.infoparttimejobs .mt_startDate').eq(2).html())
				}
			}
			if ($('#cc_CCC9_3_1').length && $('.infoparttimejobs .mt_endDate').eq(2).length) {
				if ($('.infoparttimejobs .mt_endDate').eq(0).html().length < 7) {
					$('#cc_CCC9_3_1').val($('.infoparttimejobs .mt_endDate').eq(2).html().split('-').join('-0'))
				} else {
					$('#cc_CCC9_3_1').val($('.infoparttimejobs .mt_endDate').eq(2).html())
				}
			}
			if ($('#cc_CCF13_6_1').length && $('.infoparttimejobs .mt_workContent').eq(2).length) {
				$('#cc_CCF13_6_1').val($('.infoparttimejobs .mt_workContent').eq(2).text())
			}
			if ($('#cc_CCA35_1_1').length && $('.infoparttimejobs .mt_positionName').eq(2).length) {
				$('#cc_CCA35_1_1').val($('.infoparttimejobs .mt_positionName').eq(2).html())
			}
			if ($('#cc_CCA43_1_1').length && $('.infoparttimejobs .mt_companyproperty').eq(2).html()) {
				var ctype = $('#cc_CCA43_1_1').get(0);
				switch ($('.infoparttimejobs .mt_companyproperty').eq(2).html()) {
				case '国企':
					ctype.options[1].selected = true;
					break;
				case '民营公司':
					ctype.options[2].selected = true;
					break;
				case '外资-欧美':
				case '外资-非欧美':
					ctype.options[3].selected = true;
					break;
				default:
					ctype.options[4].selected = true;
					break
				}
			}
			if ($('#cc_CCA50_1_1').length && $('.infoparttimejobs .mt_companySize').eq(2).html().length) {
				var ctype = $('#cc_CCA50_1_1').get(0);
				switch ($('.infoparttimejobs .mt_companySize').eq(2).html()) {
				case '少于50人':
					ctype.options[5].selected = true;
					break;
				case '50-149人':
					ctype.options[3].selected = true;
					break;
				case '150-499人':
					ctype.options[2].selected = true;
					break;
				default:
					ctype.options[1].selected = true;
					break
				}
			}
			for (var i = 0; i < $('.infoparttimejobs').length; i++) {
				if ($('#cc_CCC1_3_' + (i + 1)) && $('.infoparttimejobs .mt_startDate').eq(i).html()) {
					$('#cc_CCC1_3_' + (i + 1)).val(addZero($('.infoparttimejobs .mt_startDate').eq(i).html()))
				}
				if ($('#cc_CCC2_3_' + (i + 1)) && $('.infoparttimejobs .mt_endDate').eq(i).html()) {
					$('#cc_CCC2_3_' + (i + 1)).val(addZero($('.infoparttimejobs .mt_endDate').eq(i).html()))
				}
				if ($('#cc_CCA1_1_' + (i + 1))) {
					$('#cc_CCA1_1_' + (i + 1)).val($('.infoparttimejobs .mt_companyName').eq(i).html())
				}
				if ($('#cc_CCA2_1_' + (i + 1))) {
					$('#cc_CCA2_1_' + (i + 1)).val($('.infoparttimejobs .mt_positionName').eq(i).html())
				}
				if ($('#cc_CCF2_6_' + (0 + 1)).parent().prev().html() == '实习描述' || $('#cc_CCF2_6_' + (i + 1)).attr('cname') == '工作描述') {
					if ($('#cc_CCF2_6_' + (i + 1)) && $('.infoparttimejobs .mt_workContent').eq(i).text()) {
						$('#cc_CCF2_6_' + (i + 1)).val($('.infoparttimejobs .mt_workContent').eq(i).text())
					}
				} else if ($('#cc_CCF2_6_' + (i + 1)) && $('.infoparttimejobs .mt_companyName').eq(i).html() && $('#cc_CCF2_6_' + (i + 1)).attr('cname') != '岗位职责') {
					$('#cc_CCF2_6_' + (i + 1)).val($('.infoparttimejobs .mt_companyName').eq(i).html())
				}
				if ($('#cc_CCF1_6_' + (0 + 1)).parent().prev().html() == '实习单位' || $('#cc_CCF1_6_' + (0 + 1)).attr('cname') == '公司名称') {
					if ($('#cc_CCF1_6_' + (i + 1)) && $('.infoparttimejobs .mt_companyName').eq(i).html()) {
						$('#cc_CCF1_6_' + (i + 1)).val($('.infoparttimejobs .mt_companyName').eq(i).html())
					}
				} else if ($('#cc_CCF1_6_' + (i + 1)) && $('.infoparttimejobs .mt_workContent').eq(i).text() && $('#cc_CCF1_6_' + (i + 1)).attr('cname') != '实习公司') {
					$('#cc_CCF1_6_' + (i + 1)).val($('.infoparttimejobs .mt_workContent').eq(i).text())
				} else if ($('#cc_CCF1_6_' + (i + 1)) && $('.infoparttimejobs .mt_workContent').eq(i).text() && $('#cc_CCF1_6_' + (i + 1)).attr('cname') != '工作内容') {
					$('#cc_CCF1_6_' + (i + 1)).val($('.infoparttimejobs .mt_workContent').eq(i).text())
				} else if ($('#cc_CCF1_6_' + (i + 1)) && $('.infoparttimejobs .mt_workContent').eq(i).text() && $('#cc_CCF1_6_' + (i + 1)).attr('cname') != '项目描述') {
					$('#cc_CCF1_6_' + (i + 1)).val('')
				}
				if ($('#cc_CCA2_1_' + (i + 1)).length && $('#cc_CCA2_1_' + (i + 1)).attr('cname') == '实习公司') {
					$('#cc_CCA2_1_' + (i + 1)).val($('.infoparttimejobs .mt_companyName').eq(i).html())
				}
				if ($('#cc_CCA1_1_' + (i + 1)).length && $('#cc_CCA1_1_' + (i + 1)).attr('cname') == '担任职位') {
					$('#cc_CCA1_1_' + (i + 1)).val($('.infoparttimejobs .mt_positionName').eq(i).html())
				}
				if ($('.ci').eq(i).find('dl').eq(0).find('select').length == 2) {
					date = addZero($('.infoparttimejobs .mt_startDate').eq(i).html()).split('-');
					selectFac(date[0], $('.ci').eq(i).find('dl').eq(0).find('select').eq(0));
					selectFac(date[1], $('.ci').eq(i).find('dl').eq(0).find('select').eq(1))
				}
				if ($('.ci').eq(i).find('dl').eq(1).find('select').length == 2) {
					date = addZero($('.infoparttimejobs .mt_endDate').eq(i).html()).split('-');
					selectFac(date[0], $('.ci').eq(i).find('dl').eq(1).find('select').eq(0));
					selectFac(date[1], $('.ci').eq(i).find('dl').eq(1).find('select').eq(1))
				}
				if ($('#cc_CCA3_1_' + (i + 1)) && $('.infoparttimejobs .mt_companyCat').eq(i).html() && $('#cc_CCA3_1_' + (i + 1)).attr('cname') == '所属行业') {
					$('#cc_CCA3_1_' + (i + 1)).val($('.infoparttimejobs .mt_companyCat').eq(i).html())
				}
				if ($('#cc_CCA4_1_' + (i + 1)) && $('.infoparttimejobs .mt_department').eq(i).html() && $('#cc_CCA4_1_' + (i + 1)).attr('cname') == '所在部门') {
					$('#cc_CCA4_1_' + (i + 1)).val($('.infoparttimejobs .mt_department').eq(i).html())
				}
				if ($('#cc_CCA5_1_' + (i + 1)) && $('.infoparttimejobs .mt_positionName').eq(i).html() && $('#cc_CCA5_1_' + (i + 1)).attr('cname') == '职位名称') {
					$('#cc_CCA5_1_' + (i + 1)).val($('.infoparttimejobs .mt_positionName').eq(i).html())
				}
				if ($('#cc_CCA6_1_' + (i + 1)) && $('.infoparttimejobs .mt_reterenceName').eq(i).html() && $('#cc_CCA6_1_' + (i + 1)).attr('cname') == '证明人') {
					$('#cc_CCA6_1_' + (i + 1)).val($('.infoparttimejobs .mt_reterenceName').eq(i).html())
				}
				if ($('#cc_CCA7_1_' + (i + 1)) && $('.infoparttimejobs .mt_reterence_phone').eq(i).html() && $('#cc_CCA7_1_' + (i + 1)).attr('cname') == '联系方式') {
					$('#cc_CCA7_1_' + (i + 1)).val($('.infoparttimejobs .mt_reterence_phone').eq(i).html())
				}
			}
			if ($('#cc_CCF1_6_1').length && $('#cc_CCF1_6_1').attr('cname') == '实习公司') {
				for (var i = 0; i < $('.ci').length; i++) {
					if ($('.infoparttimejobs').length > i) {
						$('#cc_CCF1_6_' + (i + 1)).val($('.infoparttimejobs .mt_companyName').eq(i).html());
						$('#cc_CCA1_1_' + (i + 1)).val($('.infoparttimejobs .mt_positionName').eq(i).html());
						date = addZero($('.infoparttimejobs .mt_startDate').eq(i).html()).split('-');
						selectFac(date[0], $('.ci').eq(i).find('dl').eq(2).find('select').eq(0));
						selectFac(date[1], $('.ci').eq(i).find('dl').eq(2).find('select').eq(1));
						date = addZero($('.infoparttimejobs .mt_endDate').eq(i).html()).split('-');
						selectFac(date[0], $('.ci').eq(i).find('dl').eq(3).find('select').eq(0));
						selectFac(date[1], $('.ci').eq(i).find('dl').eq(3).find('select').eq(1));
						$('#cc_CCF2_6_' + (i + 1)).val($('.infoparttimejobs .workDes').eq(i).html())
					}
				}
			}
		} else if ($('#container h1').eq(0).text() == '社团或组织任职') {
			if ($('#cc_Degree_1_1').length && $('#cc_Degree_1_1').attr('cname') == '担任职务') {
				for (var i = 0; i < $('.ci').length; i++) {
					if ($('.infoschoolclub').length > i) {
						$('#cc_CCA1_1_' + (i + 1)).val($('.infoschoolclub .mt_positionName').eq(i).html());
						date = addZero($('.infoschoolclub .mt_startDate').eq(i).html()).split('-');
						selectFac(date[0], $('.ci').eq(i).find('dl').eq(1).find('select').eq(0));
						selectFac(date[1], $('.ci').eq(i).find('dl').eq(1).find('select').eq(1));
						date = addZero($('.infoschoolclub .mt_endDate').eq(i).html()).split('-');
						selectFac(date[0], $('.ci').eq(i).find('dl').eq(2).find('select').eq(0));
						selectFac(date[1], $('.ci').eq(i).find('dl').eq(2).find('select').eq(1));
						$('#cc_CCF2_6_' + (i + 1)).val($('.infoparttimejobs .workDes').eq(i).html());
						$('#cc_CCF1_6_' + (i + 1)).val($('.infoschoolclub .mt_workDes').eq(i).html())
					}
				}
			}
		} else if ($('#container h1').eq(0).text() == '社团经验') {
			for (var i = 0; i < $('.infoschoolclub').length; i++) {
				if (i < 3) {
					if ($('#cc_CCC1_3_' + (i + 1)) && $('.infoschoolclub .mt_startDate').eq(i).html()) {
						$('#cc_CCC1_3_' + (i + 1)).val(addZero($('.infoschoolclub .mt_startDate').eq(i).html()))
					}
					if ($('#cc_CCC2_3_' + (i + 1)) && $('.infoschoolclub .mt_endDate').eq(i).html()) {
						$('#cc_CCC2_3_' + (i + 1)).val(addZero($('.infoschoolclub .mt_endDate').eq(i).html()))
					}
					if ($('#cc_CCF1_6_' + (i + 1)) && $('.infoschoolclub .mt_positionName').eq(i).html()) {
						$('#cc_CCF1_6_' + (i + 1)).val($('.infoschoolclub .mt_positionName').eq(i).html())
					}
					if ($('#cc_CCF2_6_' + (i + 1)) && $('.infoschoolclub .mt_workDes').eq(i).html()) {
						$('#cc_CCF2_6_' + (i + 1)).val($('.infoschoolclub .mt_workDes').eq(i).html())
					}
				} else {
					break
				}
			}
		} else if ($('#container h1').eq(0).text() == '社团经历') {
			if ($('#cc_CCC1_3_1').length && $('#cc_CCC1_3_1').attr('cname') == '开始日期') {
				for (var i = 0; i < $('.ci').length; i++) {
					if ($('.infoschoolclub').length > i) {
						$('#cc_CCC1_3_' + (i + 1)).val(addZero($('.infoschoolclub .mt_startDate').eq(i).html()));
						$('#cc_CCC2_3_' + (i + 1)).val(addZero($('.infoschoolclub .mt_endDate').eq(i).html()));
						$('#cc_CCF1_6_' + (i + 1)).val($('.infoschoolclub .mt_workDes').eq(i).html())
					}
				}
			}
		} else if ($('#container h1').eq(0).text() == '学生社团与项目经验') {
			var j = 0;
			for (var i = 0; i < $('.infoproject').length; i++) {
				if ($('#cc_CCC1_3_' + (i + 1)).length && $('#cc_CCC1_3_' + (i + 1)).attr('cname') == '开始日期') {
					$('#cc_CCC1_3_' + (i + 1)).val(addZero($('.infoproject .mt_prostarttime').eq(i).html()))
				}
				if ($('#cc_CCC2_3_' + (i + 1)).length && $('#cc_CCC2_3_' + (i + 1)).attr('cname') == '结束日期') {
					$('#cc_CCC2_3_' + (i + 1)).val(addZero($('.infoproject .mt_proendtime').eq(i).html()))
				}
				if ($('#cc_CCF1_6_' + (i + 1)).length && $('#cc_CCF1_6_' + (i + 1)).attr('cname') == '项目描述') {
					$('#cc_CCF1_6_' + (i + 1)).val($('.infoproject .mt_projectRemark').eq(i).html())
				}
			}
			if ($('.infoproject').length < $('.ci').length) {
				var j = $('.infoproject').length;
				for (var i = 0; i < $('.infoschoolclub').length; i++) {
					if ($('#cc_CCC1_3_' + (i + j + 1)).length && $('#cc_CCC1_3_' + (i + j + 1)).attr('cname') == '开始日期') {
						$('#cc_CCC1_3_' + (i + j + 1)).val(addZero($('.infoschoolclub .mt_startDate').eq(i).html()))
					}
					if ($('#cc_CCC2_3_' + (i + j + 1)).length && $('#cc_CCC2_3_' + (i + j + 1)).attr('cname') == '结束日期') {
						$('#cc_CCC2_3_' + (i + j + 1)).val(addZero($('.infoschoolclub .mt_endDate').eq(i).html()))
					}
					if ($('#cc_CCF1_6_' + (i + j + 1)).length && $('#cc_CCF1_6_' + (i + j + 1)).attr('cname') == '项目描述') {
						$('#cc_CCF1_6_' + (i + j + 1)).val($('.infoschoolclub .mt_workDes').eq(i).html())
					}
				}
			}
		} else if ($('#container h1').eq(0).text() == '所获奖励或证书') {
			if ($('.infoschaward').length) {
				if ($('#cc_CCC2_3_1').length && $('.infoschaward .mt_awardsDate').eq(0).html()) {
					$('#cc_CCC2_3_1').val(addZero($('.infoschaward .mt_awardsDate').eq(0).html()))
				}
				if ($('#cc_CCF2_6_1').length) {
					$('#cc_CCF2_6_1').val($('.infoschaward .mt_schawradList').eq(0).html())
				}
				if ($('.infoschaward').length > 1) {
					if ($('#cc_CCC11_3_1').length && $('.infoschaward .mt_awardsDate').eq(1).html()) {
						$('#cc_CCC11_3_1').val(addZero($('.infoschaward .mt_awardsDate').eq(1).html()))
					}
					if ($('#cc_CCF3_6_1').length) {
						$('#cc_CCF3_6_1').val($('.infoschaward .mt_schawradList').eq(1).html())
					}
					if ($('.infoschaward').length > 2) {
						if ($('#cc_CCC12_3_1').length && $('.infoschaward .mt_awardsDate').eq(2).html()) {
							$('#cc_CCC12_3_1').val(addZero($('.infoschaward .mt_awardsDate').eq(2).html()))
						}
						if ($('#cc_CCF4_6_1').length) {
							$('#cc_CCF4_6_1').val($('.infoschaward .mt_schawradList').eq(2).html())
						}
						if ($('.infoschaward').length > 3) {
							if ($('#cc_CCC3_3_1').length && $('.infoschaward .mt_awardsDate').eq(3).html()) {
								$('#cc_CCC3_3_1').val(addZero($('.infoschaward .mt_awardsDate').eq(3).html()))
							}
							if ($('#cc_CCF5_6_1').length) {
								$('#cc_CCF5_6_1').val($('.infoschaward .mt_schawradList').eq(3).html())
							}
						}
					}
				}
			}
			if ($('.infoplcerti').length) {
				if ($('#cc_CCA6_1_1').length && $('.infoplcerti .mt_certificateName').eq(0).html()) {
					$('#cc_CCA6_1_1').val($('.infoplcerti .mt_certificateName').eq(0).html())
				}
				if ($('#cc_CCC13_3_1').length) {
					$('#cc_CCC13_3_1').val(addZero($('.infoplcerti .mt_getDate').eq(0).html()))
				}
				if ($('.infoplcerti').length > 1) {
					if ($('#cc_CCA7_1_1').length && $('.infoplcerti .mt_certificateName').eq(1).html()) {
						$('#cc_CCA7_1_1').val($('.infoplcerti .mt_certificateName').eq(1).html())
					}
					if ($('#cc_CCC14_3_1').length) {
						$('#cc_CCC14_3_1').val(addZero($('.infoplcerti .mt_getDate').eq(1).html()))
					}
					if ($('.infoplcerti').length > 2) {
						if ($('#cc_CCA8_1_1').length && $('.infoplcerti .mt_certificateName').eq(2).html()) {
							$('#cc_CCA8_1_1').val($('.infoplcerti .mt_certificateName').eq(2).html())
						}
						if ($('#cc_CCC4_3_1').length) {
							$('#cc_CCC4_3_1').val(addZero($('.infoplcerti .mt_getDate').eq(2).html()))
						}
						if ($('.infoplcerti').length > 3) {
							if ($('#cc_CCA16_1_1').length && $('.infoplcerti .mt_certificateName').eq(3).html()) {
								$('#cc_CCA16_1_1').val($('.infoplcerti .mt_certificateName').eq(3).html())
							}
							if ($('#cc_CCC15_3_1').length) {
								$('#cc_CCC15_3_1').val(addZero($('.infoplcerti .mt_getDate').eq(3).html()))
							}
						}
					}
				}
			}
		} else if ($('#container h1').eq(0).text() == '竞赛/奖励' || $('#container h1').eq(0).text() == '奖学金和奖励' || $('#container h1').eq(0).text() == '获奖情况') {
			if ($('#ddl_CCE1_5_1').length && $.trim($('#ddl_CCE1_5_1').parent().prev().text()) == '奖学金等级' && $('.infoschaward .mt_awardsType').eq(0).html()) {
				var engskill = document.getElementById('ddl_CCE1_5_1');
				for (var i = 0; i < engskill.options.length; i++) {
					if (engskill.options[i].innerHTML.indexOf($('.infoschaward .mt_awardsType').eq(0).html()) != -1) {
						engskill.options[i].selected = true
					}
					engskill.dispatchEvent(event)
				}
			}
			if ($('#ddl_CCE1_5_1').length && $.trim($('#cc_CCC11_3_1').parent().prev().text()) == '获奖时间' && $('.infoschaward .mt_awardsDate').eq(0).html()) {
				$('#cc_CCC11_3_1').val(addZero($('.infoschaward .mt_awardsDate').eq(0).html()))
			}
			if ($('#cc_CCF2_6_1').length && $.trim($('#cc_CCF2_6_1').parent().prev().text()) == '奖学金名称' && $('.infoschaward .mt_awardsName').eq(0).html()) {
				$('#cc_CCF2_6_1').val($('.infoschaward .mt_awardsName').eq(0).html())
			}
			if ($('#cc_CCF3_6_1').length && $.trim($('#cc_CCF3_6_1').parent().prev().text()) == '奖励描述' && $('.infoschaward .mt_awardsDes').eq(0).html()) {
				$('#cc_CCF3_6_1').val($('.infoschaward .mt_awardsDes').eq(0).html())
			}
			if ($('#ddl_CCE3_5_1').length && $.trim($('#ddl_CCE3_5_1').parent().prev().text()) == '奖学金等级' && $('.infoschaward .mt_awardsType').eq(1).html()) {
				var engskill = document.getElementById('ddl_CCE3_5_1');
				for (var i = 0; i < engskill.options.length; i++) {
					if (engskill.options[i].innerHTML.indexOf($('.infoschaward .mt_awardsType').eq(1).html()) != -1) {
						engskill.options[i].selected = true
					}
					engskill.dispatchEvent(event)
				}
			}
			if ($('#cc_CCC6_3_1').length && $.trim($('#cc_CCC6_3_1').parent().prev().text()) == '获奖时间2' && $('.infoschaward .mt_awardsDate').eq(1).html()) {
				$('#cc_CCC6_3_1').val(addZero($('.infoschaward .mt_awardsDate').eq(1).html()))
			}
			if ($('#cc_CCF8_6_1').length && $.trim($('#cc_CCF8_6_1').parent().prev().text()) == '奖学金名称2' && $('.infoschaward .mt_awardsName').eq(1).html()) {
				$('#cc_CCF8_6_1').val($('.infoschaward .mt_awardsName').eq(1).html())
			}
			if ($('#cc_CCF9_6_1').length && $.trim($('#cc_CCF9_6_1').parent().prev().text()) == '奖励描述2' && $('.infoschaward .mt_awardsDes').eq(1).html()) {
				$('#cc_CCF9_6_1').val($('.infoschaward .mt_awardsDes').eq(1).html())
			}
			if ($('#ddl_CCE12_5_1').length && $.trim($('#ddl_CCE12_5_1').parent().prev().text()) == '奖学金等级3' && $('.infoschaward .mt_awardsType').eq(2).html()) {
				var engskill = document.getElementById('ddl_CCE12_5_1');
				for (var i = 0; i < engskill.options.length; i++) {
					if (engskill.options[i].innerHTML.indexOf($('.infoschaward .mt_awardsType').eq(2).html()) != -1) {
						engskill.options[i].selected = true
					}
					engskill.dispatchEvent(event)
				}
			}
			if ($('#cc_CCC16_3_1').length && $.trim($('#cc_CCC16_3_1').parent().prev().text()) == '获奖时间3' && $('.infoschaward .mt_awardsDate').eq(2).html()) {
				$('#cc_CCC16_3_1').val(addZero($('.infoschaward .mt_awardsDate').eq(2).html()))
			}
			if ($('#cc_CCF10_6_1').length && $.trim($('#cc_CCF10_6_1').parent().prev().text()) == '奖学金名称3' && $('.infoschaward .mt_awardsName').eq(2).html()) {
				$('#cc_CCF10_6_1').val($('.infoschaward .mt_awardsName').eq(2).html())
			}
			if ($('#cc_CCF11_6_1').length && $.trim($('#cc_CCF11_6_1').parent().prev().text()) == '奖励描述3' && $('.infoschaward .mt_awardsDes').eq(2).html()) {
				$('#cc_CCF11_6_1').val($('.infoschaward .mt_awardsDes').eq(2).html())
			}
			for (var i = 0; i < $('.infoschaward').length; i++) {
				if ($('#cc_CCC1_3_' + (i + 1)) && $('.infoschaward .mt_awardsDate').eq(i).html()) {
					$('#cc_CCC1_3_' + (i + 1)).val(addZero($('.infoschaward .mt_awardsDate').eq(i).html()))
				}
				if ($('#cc_CCA1_1_' + (i + 1)) && $('.infoschaward .mt_awardsName').eq(i).html()) {
					$('#cc_CCA1_1_' + (i + 1)).val($('.infoschaward .mt_awardsName').eq(i).html())
				}
				if ($('#cc_CCA2_1_' + (i + 1)) && $('.infoschaward .mt_awardsType').eq(i).html() && $('#cc_CCA2_1_' + (i + 1)).attr('cname') == '获奖级别') {
					$('#cc_CCA2_1_' + (i + 1)).val($('.infoschaward .mt_awardsType').eq(i).html())
				}
				if ($('.ci').eq(i).length) {
					if ($('.ci').eq(i).find('dl').eq(2).find('dt').eq(0).length && $('.ci').eq(i).find('dl').eq(2).find('dt').eq(0).text() == '获奖时间') {
						var text0 = parseInt($('.infoschaward .mt_awardsDate').eq(i).html().substring(5));
						if (text0 < 10) {
							text0 = '0' + text0
						}
						selectFac($('.infoschaward .mt_awardsDate').eq(i).html().substring(0, 4), $('.ci').eq(i).find('dl').eq(2).find('dd').eq(0).find('select').eq(0));
						selectFac(text0, $('.ci').eq(i).find('dl').eq(2).find('dd').eq(0).find('select').eq(1))
					}
				}
				if ($('#cc_CCF1_6_' + (i + 1)).length) {
					if ($('#cc_CCF1_6_' + (0 + 1)).parent().prev().html() == '获奖描述' && $('.infoschaward .mt_awardsDes').eq(i).html()) {
						$('#cc_CCF1_6_' + (i + 1)).val($('.infoschaward .mt_awardsDes').eq(i).html())
					} else if ($('#cc_CCF1_6_' + (0 + 1)).attr('cname') == '奖励描述' && $('.infoschaward .mt_awardsDes').eq(i).html()) {
						$('#cc_CCF1_6_' + (i + 1)).val($('.infoschaward .mt_awardsDes').eq(i).html())
					} else {
						$('#cc_CCF1_6_' + (i + 1)).val($('.infoschaward .mt_awardsName').eq(i).html())
					}
				}
				if ($('#cc_CCF2_6_' + (i + 1)) && $('.infoschaward .mt_awardsDes').eq(i).html()) {
					$('#cc_CCF2_6_' + (i + 1)).val($('.infoschaward .mt_awardsDes').eq(i).html())
				}
				if ($('select[name=\"cc_CCA3_1_1\"]').length && $('#cc_CCA3_1_' + (i + 1)).attr('cname') != '证明人联系方式') {
					var osk = document.getElementById('cc_CCA3_1_' + (i + 1));
					switch ($('.infoschaward .mt_awardsType').eq(i).html()) {
					case '国际级':
						osk.options[1].selected = true;
						break;
					case '国家级':
						osk.options[2].selected = true;
						break;
					case '省市级':
						osk.options[3].selected = true;
						break;
					case '院系级':
						osk.options[5].selected = true;
						break;
					default:
						osk.options[4].selected = true;
						break
					}
					osk.dispatchEvent(event)
				}
			}
		} else if ($('#container h1').eq(0).text() == '技能证书' || $('#container h1').eq(0).text() == '相关证书') {
			if ($('#cc_CCF1_6_1').length) {
				for (var i = 0; i < $('.ci').length; i++) {
					if ($('.infoplcerti').length > i) {
						if ($('#cc_CCF1_6_' + (i + 1)) && $('.infoplcerti .mt_certificateName').eq(i).html()) {
							if ($('#cc_CCF1_6_' + (i + 1)).attr('cname') == '证书描述') {
								$('#cc_CCF1_6_' + (i + 1)).val($('.infoplcerti .mt_certificateDes').eq(i).html())
							} else {
								$('#cc_CCF1_6_' + (i + 1)).val($('.infoplcerti .mt_certificateName').eq(i).html())
							}
						}
						if ($('#cc_CCC1_3_' + (i + 1)) && $('.infoplcerti .mt_getDate').eq(i).html()) {
							$('#cc_CCC1_3_' + (i + 1)).val(addZero($('.infoplcerti .mt_getDate').eq(i).html()))
						}
						if ($('#cc_CCF2_6_' + (i + 1)) && $('.infoplcerti .mt_issuing').eq(i).html()) {
							$('#cc_CCF2_6_' + (i + 1)).val($('.infoplcerti .mt_issuing').eq(i).html())
						}
					} else {
						break
					}
				}
			}
			if ($('#cc_Degree_1_1').length && $('#cc_Degree_1_1').attr('cname') == '证书名称') {
				for (var i = 0; i < $('.ci').length; i++) {
					if ($('.infoplcerti').length > i) {
						date = addZero($('.infoplcerti .mt_getDate').eq(i).html()).split('-');
						if ($('#cc_CCA1_1_' + (i + 1)) && $('.infoplcerti .mt_certificateName').eq(i).html()) {
							$('#cc_CCA1_1_' + (i + 1)).val($('.infoplcerti .mt_certificateName').eq(i).html())
						}
						if ($('.ci').eq(i).find('select').eq(0) && date[0]) {
							selectFac(date[0], $('.ci').eq(i).find('select').eq(0))
						}
						if ($('.ci').eq(i).find('select').eq(1) && date[1]) {
							selectFac(date[1], $('.ci').eq(i).find('select').eq(1))
						}
					} else {
						break
					}
				}
			}
		} else if ($('#container h1').eq(0).text() == '职称/资格证书') {
			if ($('#cc_Degree_1_1').length && $('#cc_Degree_1_1').attr('cname') == '证书') {
				for (var i = 0; i < $('.ci').length; i++) {
					if ($('.infoplcerti').length > i) {
						if ($('#cc_CCA1_1_' + (i + 1)) && $('.infoplcerti .mt_certificateName').eq(i).html()) {
							$('#cc_CCA1_1_' + (i + 1)).val($('.infoplcerti .mt_certificateName').eq(i).html())
						}
						if ($('#cc_CCC1_3_' + (i + 1)) && $('.infoplcerti .mt_getDate').eq(i).html()) {
							$('#cc_CCC1_3_' + (i + 1)).val(addZero($('.infoplcerti .mt_getDate').eq(i).html()))
						}
					} else {
						break
					}
				}
			}
		} else if ($('#container h1').eq(0).text() == '获证情况') {
			var skilllevel = 0;
			var maxlevel = 0;
			for (var i = 0; i < $('.infoEnglishSkill').length; i++) {
				if ($('.mt_skillEngLevel').eq(i).html() == '专业八级') {
					skilllevel = 6
				} else if ($('.mt_skillEngLevel').eq(i).html() == '专业四级') {
					skilllevel = 3
				} else if ($('.mt_skillEngLevel').eq(i).html() == '大学英语六级') {
					skilllevel = 2
				} else {
					skilllevel = 1
				}
				if (skilllevel > maxlevel) {
					maxlevel = skilllevel
				}
			}
			for (var i = 0; i < $('.infoOtEnglishSkil').length; i++) {
				if ($('.mt_otherSkillEngLevel').eq(i).html() == '托福') {
					skilllevel = 5
				} else if ($('.mt_otherSkillEngLevel').eq(i).html() == '雅思') {
					skilllevel = 4
				}
				if (skilllevel > maxlevel) {
					maxlevel = skilllevel
				}
			}
			if ($('#ddl_CCE4_5_1').length) {
				var engskill = document.getElementById('ddl_CCE4_5_1');
				if (maxlevel == 6) {
					engskill.options[3].selected = true
				} else if (maxlevel == 5) {
					engskill.options[4].selected = true
				} else if (maxlevel == 4) {
					engskill.options[5].selected = true
				} else if (maxlevel == 3) {
					engskill.options[7].selected = true
				} else if (maxlevel == 2) {
					engskill.options[2].selected = true
				} else if (maxlevel == 1) {
					engskill.options[1].selected = true
				}
				engskill.dispatchEvent(event)
			}
			if ($('#ddl_CCE12_5_1').length && $('.infoOtherSkill .mt_skillOtherLang').eq(0).html()) {
				var osk = document.getElementById('ddl_CCE12_5_1');
				switch ($('.infoOtherSkill .mt_skillOtherLang').eq(0).html()) {
				case '德语':
					osk.options[1].selected = true;
					break;
				case '日语':
					osk.options[3].selected = true;
					break;
				case '法语':
					osk.options[2].selected = true;
					break;
				default:
					osk.options[4].selected = true;
					break
				}
				osk.dispatchEvent(event)
			}
		} else if ($('#container h1').eq(0).text() == '实习经验') {
			for (var i = 0; i < $('.infoparttimejobs').length; i++) {
				if ($('#cc_CCA1_1_' + (i + 1)).length) {
//					$('#cc_CCA1_1_' + (i + 1))[0].options[1].selected = true
				}
				if ($('#cc_CCF1_6_' + (i + 1)) && $('.infoparttimejobs .mt_positionName').eq(i).html()) {
					$('#cc_CCF1_6_' + (i + 1)).val($('.infoparttimejobs .mt_positionName').eq(i).html())
				}
				var stime = $('.infoparttimejobs .mt_startDate').eq(i).html();
				var etime = $('.infoparttimejobs .mt_endDate').eq(i).html();
				var stary = stime.split('-');
				var edary = etime.split('-');
				stime = stary.join('/') + '/1';
				etime = edary.join('/') + '/1';
				if ($('#cc_CCF2_6_' + (i + 1))) {
					$('#cc_CCF2_6_' + (i + 1)).val(stime + '-' + etime)
				}
				if ($('#cc_CCF3_6_' + (i + 1)) && $('.infoparttimejobs .mt_workContent').eq(i).text()) {
					$('#cc_CCF3_6_' + (i + 1)).val($('.infoparttimejobs .mt_workContent').eq(i).text())
				}
				if ($('#cc_CCA2_1_' + (i + 1)).length && $('.infoparttimejobs .mt_companyproperty').eq(i).html()) {
					var ctype = $('#cc_CCA2_1_' + (i + 1))[0];
					switch ($('.infoparttimejobs .mt_companyproperty').eq(i).html()) {
					case '外资-欧美':
						ctype.options[1].selected = true;
						break;
					case '外资-非欧美':
						ctype.options[2].selected = true;
						break;
					case '合资-欧美':
					case '合资-非欧美':
						ctype.options[3].selected = true;
						break;
					case '国企':
						ctype.options[4].selected = true;
						break;
					case '民营公司':
						ctype.options[5].selected = true;
						break;
					case '外企代表处':
						ctype.options[6].selected = true;
						break;
					case '政府机关':
						ctype.options[7].selected = true;
						break;
					case '事业单位':
						ctype.options[8].selected = true;
						break;
					case '非盈利机构':
						ctype.options[9].selected = true;
						break;
					case '上市公司':
						ctype.options[10].selected = true;
						break;
					case '创业公司':
						// ctype.options[11].selected = true;
						break
					}
				}
			}
		} else if ($('#container h1').eq(0).text() == '实践经验') {
			var numpartjob = $('.infoparttimejobs').length;
			var numproject = $('.infoproject').length;
			if ($('#cc_CCA23_1_1').length) {
				if (numpartjob + numproject == 0) {
					document.getElementById('cc_CCA23_1_1').options[1].selected = true
				} else if (numproject + numpartjob >= 1 && numproject + numpartjob < 3) {
					document.getElementById('cc_CCA23_1_1').options[2].selected = true
				} else {
					document.getElementById('cc_CCA23_1_1').options[3].selected = true
				}
			}
			$('#cc_CCF6_6_1').val('');
			for (var i = 0; i < $('.infoparttimejobs').length; i++) {
				if ($('.infoparttimejobs .mt_workList').eq(i).text()) {
					$('#cc_CCF6_6_1').val($('#cc_CCF6_6_1').val() + $('.infoparttimejobs .mt_workList').eq(i).text() + '\\n')
				}
			}
			for (var i = 0; i < $('.infoproject').length; i++) {
				if ($('.infoproject .mt_proList').eq(i).text()) {
					$('#cc_CCF6_6_1').val($('#cc_CCF6_6_1').val() + $('.infoproject .mt_proList').eq(i).text() + '\\n')
				}
			}
			if ($('.infoschoolclub').length > 0) {
				if ($('#cc_CCA20_1_1').length) {
					document.getElementById('cc_CCA20_1_1').options[1].selected = true
				}
				$('#cc_CCF13_6_1').val('');
				for (var i = 0; i < $('.infoschoolclub').length; i++) {
					$('#cc_CCF13_6_1').val($('#cc_CCF13_6_1').val() + $('.infoschoolclub .mt_workDes').eq(i).html() + '\\n')
				}
			} else {
				document.getElementById('cc_CCA8_1_1').options[2].selected = true
			}
			var numschawd = $('.infoschaward').length;
			if ($('#cc_CCA17_1_1').length) {
				if (numschawd == 0) {
					document.getElementById('cc_CCA17_1_1').options[2].selected = true
				} else {
					document.getElementById('cc_CCA17_1_1').options[1].selected = true;
					$('#cc_CCF8_6_1').val('');
					for (var i = 0; i < $('.infoschaward').length; i++) {
						$('#cc_CCF8_6_1').val($('#cc_CCF8_6_1').val() + $('.infoschaward .mt_schawradList').eq(i).text() + '\\n')
					}
				}
			}
			if ($('#cc_CCA22_1_1').length) {
				if (numschawd == 0) {
					document.getElementById('cc_CCA22_1_1').options[2].selected = true
				} else {
					document.getElementById('cc_CCA22_1_1').options[1].selected = true;
					$('#cc_CCF24_6_1').val('');
					for (var i = 0; i < $('.infoschaward').length; i++) {
						$('#cc_CCF24_6_1').val($('#cc_CCF24_6_1').val() + $('.infoschaward .mt_schawradList').eq(i).text() + '\\n')
					}
				}
			}
			if ($('#cc_Degree_1_1').length && $('.infoparttimejobs').length > 0) {
				for (var i = 0; i < $('.infoparttimejobs').length; i++) {
					if ($('#cc_CCC1_3_' + (i + 1)) && $('.infoparttimejobs .mt_startDate').eq(i).html()) {
						$('#cc_CCC1_3_' + (i + 1)).val(addZero($('.infoparttimejobs .mt_startDate').eq(i).html()) + '-1')
					}
					if ($('#cc_CCC2_3_' + (i + 1)) && $('.infoparttimejobs .mt_endDate').eq(i).html()) {
						$('#cc_CCC2_3_' + (i + 1)).val(addZero($('.infoparttimejobs .mt_endDate').eq(i).html()) + '-1')
					}
					if ($('#cc_CCA1_1_' + (i + 1)).length) {
						$('#cc_CCA1_1_' + (i + 1)).get(0).options[2].selected = true
					}
					if ($('#cc_CCF1_6_' + (i + 1)) && $('#cc_CCF1_6_' + (i + 1)).attr('cname') == '工作内容') {
						$('#cc_CCF1_6_' + (i + 1)).val($('.infoparttimejobs .mt_workContent').eq(i).text())
					}
				}
			} else if ($('.infoparttimejobs').length == 0 && $('.infoproject').length > 0) {
				for (var i = 0; i < $('.infoproject').length; i++) {
					if (i > 2) {
						break
					} else {
						if ($('#cc_CCC1_3_' + (i + 1)) && $('.infoproject .mt_prostartdate').eq(i).html()) {
							$('#cc_CCC1_3_' + (i + 1)).val($('.infoproject .mt_prostartdate').eq(i).html() + '-1')
						}
						if ($('#cc_CCC2_3_' + (i + 1)) && $('.infoproject .mt_proenddate').eq(i).html()) {
							$('#cc_CCC2_3_' + (i + 1)).val($('.infoproject .mt_proenddate').eq(i).html() + '-1')
						}
						if ($('#cc_CCF1_6_' + (i + 1)) && $('.infoproject .mt_projectRemark').eq(i).html()) {
							$('#cc_CCF1_6_' + (i + 1)).val($('.infoproject .mt_projectRemark').eq(i).html())
						}
					}
				}
			}
			if ($('#cc_CCA8_1_1').length) {
				var schOpt = $('#cc_CCA8_1_1').get(0).options;
				if ($('.infoschoolclub').length) {
					schOpt[1].selected = true;
					var schcon = '';
					$('#cc_CCF2_6_1').val('');
					$('.infoschoolclub').each(function(i, val) {
						schcon = $('#cc_CCF2_6_1').val();
						schcon = schcon + $('.infoschoolclub .mt_schClubList').eq(i).html() + '\\n\\n';
						$('#cc_CCF2_6_1').val(schcon)
					})
				} else {
					schOpt[2].selected = true
				}
			}
			if ($('#cc_CCA16_1_1').length) {
				var jobOpt = $('#cc_CCA16_1_1').get(0).options;
				if ($('.infoparttimejobs').length) {
					jobOpt[1].selected = true;
					$('.infoparttimejobs').each(function(i, val) {
						var st = addZero($('.infoparttimejobs .mt_startDate').eq(i).html());
						var et = addZero($('.infoparttimejobs .mt_endDate').eq(i).html());
						var cpname = $('.infoparttimejobs .mt_companyName').eq(i).html();
						var cdes = $('.infoparttimejobs .mt_workDes .workDes').eq(i).html();
						if (i == 0) {
							$('#cc_CCC12_3_1').val(st);
							$('#cc_CCC2_3_1').val(et);
							$('#cc_CCF3_6_1').val(cpname);
							$('#cc_CCF4_6_1').val(cdes)
						} else if (i == 1) {
							$('#cc_CCC11_3_1').val(st);
							$('#cc_CCC3_3_1').val(et);
							$('#cc_CCF5_6_1').val(cpname);
							$('#cc_CCF6_6_1').val(cdes)
						}
					})
				}
			}
		} else if ($('#container h1').eq(0).text() == '实践经验和获奖经历') {
			if ($('#cc_CCF2_6_1').length && $('#cc_CCF2_6_1').attr('cname') == '担任职务/社会实践') {
				var text1 = '';
				for (var i = 0; i < $('.infoschoolclub').length; i++) {
					text1 = text1 + $('.mt_schClubList').eq(i).html()
				}
				$('#cc_CCF2_6_1').val(text1)
			}
			if ($('#cc_CCF4_6_1').length && $('#cc_CCF4_6_1').attr('cname') == '奖学金情况/其他荣誉') {
				var text2 = '';
				for (var i = 0; i < $('.infoschaward').length; i++) {
					text2 = text2 + $('.mt_schawradList').eq(i).html()
				}
				$('#cc_CCF4_6_1').val(text2)
			}
		} else if ($('#container h1').eq(0).text() == '全职工作经验') {
			for (var i = 0; i < $('.infofulltimejobs').length; i++) {
				if ($('#cc_CCA1_1_' + (i + 1)) && $('.infofulltimejobs .mt_companyName').eq(i).html()) {
					$('#cc_CCA1_1_' + (i + 1)).val($('.infofulltimejobs .mt_companyName').eq(i).html())
				}
				if ($('#cc_CCA2_1_' + (i + 1)) && $('.infofulltimejobs .mt_positionName').eq(i).html()) {
					$('#cc_CCA2_1_' + (i + 1)).val($('.infofulltimejobs .mt_positionName').eq(i).html())
				}
				if ($('#cc_CCC1_3_' + (i + 1)) && $('.infofulltimejobs .mt_startDate').eq(i).html()) {
					$('#cc_CCC1_3_' + (i + 1)).val(addZero($('.infofulltimejobs .mt_startDate').eq(i).html()) + '-1')
				}
				if ($('#cc_CCC2_3_' + (i + 1)) && $('.infofulltimejobs .mt_endDate').eq(i).html()) {
					$('#cc_CCC2_3_' + (i + 1)).val(addZero($('.infofulltimejobs .mt_endDate').eq(i).html()) + '-1')
				}
				if ($('#cc_CCF1_6_' + (i + 1)) && $('.infofulltimejobs .workContent').eq(i).html()) {
					$('#cc_CCF1_6_' + (i + 1)).val($('.infofulltimejobs .workContent').eq(i).html())
				}
			}
		} else if ($('#container h1').eq(0).text() == '校园活动') {
			for (var i = 0; i < $('.infoschoolclub').length; i++) {
				if ($('#cc_CCA1_1_' + (i + 1)).length) {
					if ($('#cc_CCA1_1_' + (i + 1)).parent().prev().html() == '校园活动担任角色') {
						$('#cc_CCA1_1_' + (i + 1)).val($('.infoschoolclub .mt_positionName').eq(i).html())
					} else {
						$('#cc_CCA1_1_' + (i + 1))[0].options[1].selected = true
					}
				}
				if ($('#cc_CCC1_3_' + (i + 1)) && $('.infoschoolclub .mt_startDate').eq(i).html()) {
					if ($('.infoschoolclub .mt_startDate').eq(i).html().length < 7) {
						$('#cc_CCC1_3_' + (i + 1)).val($('.infoschoolclub .mt_startDate').eq(i).html().split('-').join('-0'))
					} else {
						$('#cc_CCC1_3_' + (i + 1)).val($('.infoschoolclub .mt_startDate').eq(i).html())
					}
				}
				if ($('#cc_CCC2_3_' + (i + 1)) && $('.infoschoolclub .mt_endDate').eq(i).html()) {
					if ($('.infoschoolclub .mt_endDate').eq(i).html().length < 7) {
						$('#cc_CCC2_3_' + (i + 1)).val($('.infoschoolclub .mt_endDate').eq(i).html().split('-').join('-0'))
					} else {
						$('#cc_CCC2_3_' + (i + 1)).val($('.infoschoolclub .mt_endDate').eq(i).html())
					}
				}
				if ($('#cc_CCF1_6_' + (i + 1)).length) {
					if ($('#cc_CCF1_6_' + (i + 1)).parent().prev().html() == '项目描述') {
						$('#cc_CCF1_6_' + (i + 1)).val($('.infoschoolclub .mt_workDes').eq(i).html())
					} else {
						$('#cc_CCF1_6_' + (i + 1)).val($('.infoschoolclub .mt_schClubName').eq(i).html())
					}
				}
				if ($('#cc_CCA2_1_' + (i + 1)) && $('.infoschoolclub .mt_positionName').eq(i).html()) {
					$('#cc_CCA2_1_' + (i + 1)).val($('.infoschoolclub .mt_positionName').eq(i).html())
				}
				if ($('#cc_CCF2_6_' + (i + 1)) && $('.infoschoolclub .mt_workDes').eq(i).html()) {
					$('#cc_CCF2_6_' + (i + 1)).val($('.infoschoolclub .mt_workDes').eq(i).html())
				}
			}
		} else if ($('#container h1').eq(0).text() == '校内职务') {
			if ($('#cc_Degree_1_1').length && $('#cc_Degree_1_1').attr('cname') == '职务名称') {
				for (var i = 0; i < $('.ci').length; i++) {
					if (i < $('.infoschoolclub').length) {
						if ($('#cc_CCA1_1_' + (i + 1)) && $('.infoschoolclub .mt_positionName').eq(i).html()) {
							$('#cc_CCA1_1_' + (i + 1)).val($('.infoschoolclub .mt_positionName').eq(i).html())
						}
						date = addZero($('.infoschoolclub .mt_startDate').eq(i).html()).split('-');
						if ($('.ci').eq(i).find('select').eq(0) && date[0]) {
							selectFac(date[0], $('.ci').eq(i).find('select').eq(0))
						}
						if ($('.ci').eq(i).find('select').eq(1) && date[1]) {
							selectFac(date[1], $('.ci').eq(i).find('select').eq(1))
						}
						if ($('#cc_CCF1_6_' + (i + 1)) && $('.infoschoolclub .mt_workDes').eq(i).html()) {
							$('#cc_CCF1_6_' + (i + 1)).val($('.infoschoolclub .mt_workDes').eq(i).html())
						}
					}
				}
			}
		} else if ($('#container h1').eq(0).text() == '奖学金') {
			for (var i = 0; i < $('.infoschaward').length; i++) {
				if ($('#cc_CCA3_1_' + (i + 1)) && $('.infoschaward .mt_awardsName').eq(i).html()) {
					$('#cc_CCA3_1_' + (i + 1)).val($('.infoschaward .mt_awardsName').eq(i).html())
				}
				if ($('#ddl_CCE2_5_' + (i + 1)).length && $('.infoschaward .mt_awardsType').eq(i).html()) {
					var schatype = $('#ddl_CCE2_5_' + (i + 1))[0];
					for (var j = 0; j < schatype.options.length; j++) {
						if (schatype.options[j].text == $('.infoschaward .mt_awardsType').eq(i).html()) {
							schatype.options[j].selected = true;
							schatype.dispatchEvent(event);
							break
						}
					}
				}
				if ($('#cc_CCE2_5_' + (i + 1)).length && $('.infoschaward .mt_awardsLevel').eq(i).html()) {
					var schalevl = $('#cc_CCE2_5_' + (i + 1))[0];
					for (var j = 0; j < schalevl.options.length; j++) {
						if (schalevl.options[j].text.indexOf($('.infoschaward .mt_awardsLevel').eq(i).html()) != -1) {
							schalevl.options[j].selected = true;
							break
						}
					}
				}
				if ($('#cc_CCC2_3_' + (i + 1)) && $('.infoschaward .mt_awardsDate').eq(i).html()) {
					$('#cc_CCC2_3_' + (i + 1)).val(addZero($('.infoschaward .mt_awardsDate').eq(i).html()))
				}
			}
		} else if ($('#container h1').eq(0).text() == '奖学金及奖励') {
			for (var i = 0; i < $('.infoschaward').length; i++) {
				if ($('#cc_CCC1_3_' + (i + 1)) && $('.infoschaward .mt_awardsDate').eq(i).html()) {
					$('#cc_CCC1_3_' + (i + 1)).val(addZero($('.infoschaward .mt_awardsDate').eq(i).html()))
				}
				if ($('#cc_CCF1_6_' + (i + 1)) && $('.infoschaward .mt_awardsName').eq(i).html()) {
					$('#cc_CCF1_6_' + (i + 1)).val($('.infoschaward .mt_awardsName').eq(i).html())
				}
				if ($('#ddl_CCE1_5_' + (i + 1)).length && $('.infoschaward .mt_awardsType').eq(i).html()) {
					var schatype = $('#ddl_CCE1_5_' + (i + 1))[0];
					for (var j = 0; j < schatype.options.length; j++) {
						if (schatype.options[j].text == $('.infoschaward .mt_awardsType').eq(i).html()) {
							schatype.options[j].selected = true;
							schatype.dispatchEvent(event);
							break
						}
					}
				}
				if ($('#cc_CCE1_5_' + (i + 1)).length && $('.infoschaward .mt_awardsLevel').eq(i).html()) {
					var schalevl = $('#cc_CCE1_5_' + (i + 1))[0];
					for (var j = 0; j < schalevl.options.length; j++) {
						if (schalevl.options[j].text.indexOf($('.infoschaward .mt_awardsLevel').eq(i).html()) != -1) {
							schalevl.options[j].selected = true;
							break
						}
					}
				}
				if ($('#cc_CCF2_6_' + (i + 1)) && $('.infoschaward .mt_awardsDes').eq(i).html()) {
					$('#cc_CCF2_6_' + (i + 1)).val($('.infoschaward .mt_awardsDes').eq(i).html())
				}
			}
		} else if ($('#container h1').eq(0).text() == '获奖经历' || $('#container h1').eq(0).text() == '奖励荣誉' || $('#container h1').eq(0).text() == '奖项荣誉' || $('#container h1').eq(0).text() == '荣誉/奖项' || $('#container h1').eq(0).text() == '校内获奖' || $('#container h1').eq(0).text() == '特长/奖项' || $('#container h1').eq(0).text() == '获奖信息' || $('#container h1').eq(0).text() == '获奖情况') {
			for (var i = 0; i < $('.infoschaward').length; i++) {
				if ($('#cc_CCA1_1_' + (i + 1)) && $('.infoschaward .mt_awardsName').eq(i).html()) {
					$('#cc_CCA1_1_' + (i + 1)).val($('.infoschaward .mt_awardsName').eq(i).html())
				}
				if ($('#cc_CCC1_3_' + (i + 1)) && $('.infoschaward .mt_awardsDate').eq(i).html()) {
					$('#cc_CCC1_3_' + (i + 1)).val(addZero($('.infoschaward .mt_awardsDate').eq(i).html()))
				}
				if ($('#cc_CCA2_1_' + (i + 1)).length && $('.infoschaward .mt_awardsType').eq(i).html()) {
					$('#cc_CCA2_1_' + (i + 1)).val($('.infoschaward .mt_awardsType').eq(i).html())
				}
				if ($('#cc_CCF1_6_' + (i + 1)) && $('.infoschaward .mt_awardsDes').eq(i).html()) {
					$('#cc_CCF1_6_' + (i + 1)).val($('.infoschaward .mt_awardsDes').eq(i).html())
				}
				if ($('#cc_CCF1_6_' + (i + 1)) && $('#cc_CCF1_6_' + (i + 1)).attr('cname') == '荣誉名称' && $('.infoschaward .mt_awardsName').eq(i).html()) {
					$('#cc_CCF1_6_' + (i + 1)).val($('.infoschaward .mt_awardsName').eq(i).html())
				}
				if ($('#cc_CCF1_6_' + (i + 1)) && $('#cc_CCF1_6_' + (i + 1)).attr('cname') == '获奖名称' && $('.infoschaward .mt_awardsName').eq(i).html()) {
					$('#cc_CCF1_6_' + (i + 1)).val($('.infoschaward .mt_awardsName').eq(i).html())
				}
				if ($('#cc_CCC1_3_' + (i + 1)) && $('#cc_CCC1_3_' + (i + 1)).attr('cname') == '获奖时间' && $('.infoschaward .mt_awardsDate').eq(i).html()) {
					$('#cc_CCC1_3_' + (i + 1)).val(formatDate($('.infoschaward .mt_awardsDate').eq(i).html(),2) + '-01')
				}
				if ($('input[cname=\"奖项名称' + (i + 1) + '\"]') && $('.infoschaward .mt_awardsName').eq(i).html()) {
					$('input[cname=\"奖项名称' + (i + 1) + '\"]').val($('.infoschaward .mt_awardsName').eq(i).html())
				}
				if ($('input[cname=\"获奖时间' + (i + 1) + '\"]') && $('.infoschaward .mt_awardsDate').eq(i).html()) {
					$('input[cname=\"获奖时间' + (i + 1) + '\"]').val(addZero($('.infoschaward .mt_awardsDate').eq(i).html()))
				}
				if ($('input[cname=\"获奖时间' + (i + 1) + '\"]') && $('.infoschaward .mt_awardsDate').eq(i).html()) {
					$('input[cname=\"获奖时间' + (i + 1) + '\"]').val(addZero($('.infoschaward .mt_awardsDate').eq(i).html()))
				}
				if ($('#cc_CCA1_1_' + (i + 1)) && $('#cc_CCA1_1_' + (i + 1)).attr('cname') == '荣誉级别' && $('.infoschaward .mt_awardsType').eq(i).html()) {
					let awardsType = $('#cc_CCA1_1_' + (i + 1))[0];
					switch($('.infoschaward .mt_awardsType').eq(i).html()){
						case '国际级':
						case '国家级':
							awardsType.options[1].selected = true;
							break;
						case '省市级':
							awardsType.options[2].selected = true;
							break;
						case '学校级':
							awardsType.options[3].selected = true;
							break;
						case '院系级':
							awardsType.options[4].selected = true;
							break
					}
				}
				
			}
		} else if ($('#container h1').eq(0).text() == '在校获奖学金及其他重要奖励情况') {
			for (var i = 0; i < $('.infoschaward').length; i++) {
				if ($('#cc_CCC' + (i + 1) + '_3_1') && $('.infoschaward .mt_awardsDate').eq(i).html()) {
					$('#cc_CCC' + (i + 1) + '_3_1').val(formatDate($('.infoschaward .mt_awardsDate').eq(i).html(),2) + '-01')
				}
				if ($('#cc_CCF' + (i + 1) + '_6_1') && $('.infoschaward .mt_awardsName').eq(i).html()) {
					$('#cc_CCF' + (i + 1) + '_6_1').val($('.infoschaward .mt_awardsName').eq(i).html())
				}
				if ($('#cc_CCA' + (i + 1) + '_1_1') && $('.infoschaward .mt_awardsType').eq(i).html()) {
					let awardsType = $('#cc_CCA' + (i + 1) + '_1_1')[0];
					switch($('.infoschaward .mt_awardsType').eq(i).html()){
						case '国际级':
						case '国家级':
							awardsType.options[1].selected = true;
							break;
						case '省市级':
							awardsType.options[2].selected = true;
							break;
						case '学校级':
							awardsType.options[3].selected = true;
							break;
						case '院系级':
							awardsType.options[4].selected = true;
							break
					}
				}
				
			}
		} else if ($('#container h1').eq(0).text() == '专长') {
			if ($('#cc_CCF3_6_1') && $('#mt_skill').html()) {
				$('#cc_CCF3_6_1').val($('#mt_skill').html())
			}
		} else if ($('#container h1').eq(0).text() == '工作经历') {
			var len = $('.infofulltimejobs').length;
			$('.infofulltimejobs').each(function(i, item) {
				if ($('#cc_CCC1_3_' + (i + 1)) && $('.infofulltimejobs .mt_startDate').eq(i).html()) {
					$('#cc_CCC1_3_' + (i + 1)).val(addZero($('.infofulltimejobs .mt_startDate').eq(i).html()))
				}
				if ($('#cc_CCC2_3_' + (i + 1)) && $('.infofulltimejobs .mt_endDate').eq(i).html()) {
					$('#cc_CCC2_3_' + (i + 1)).val(addZero($('.infofulltimejobs .mt_endDate').eq(i).html()))
				}
				if ($('#cc_CCA3_1_' + (i + 1)).length) {
					$('#cc_CCA3_1_' + (i + 1)).get(0).options[1].selected = true
				}
				if ($('#cc_CCA1_1_' + (i + 1)) && $('.infofulltimejobs .mt_companyName').eq(i).html()) {
					$('#cc_CCA1_1_' + (i + 1)).val($('.infofulltimejobs .mt_companyName').eq(i).html())
				}
				if ($('#cc_CCA4_1_' + (i + 1)) && $('.infofulltimejobs .mt_companyName').eq(i).html()) {
					$('#cc_CCA4_1_' + (i + 1)).val($('.infofulltimejobs .mt_companyName').eq(i).html())
				}
				if ($('#cc_CCA5_1_' + (i + 1)) && $('.infofulltimejobs .mt_workCity').eq(i).html()) {
					$('#cc_CCA5_1_' + (i + 1)).val($('.infofulltimejobs .mt_workCity').eq(i).html())
				}
				if ($('#cc_CCF1_6_' + (i + 1)) && $('.infofulltimejobs .mt_workContent .workContent').eq(i).html()) {
					$('#cc_CCF1_6_' + (i + 1)).val($('.infofulltimejobs .mt_workContent .workContent').eq(i).html())
				}
				if ($('#cc_CCA6_1_' + (i + 1)) && $('.infofulltimejobs .mt_reterenceName').eq(i).html()) {
					$('#cc_CCA6_1_' + (i + 1)).val($('.infofulltimejobs .mt_reterenceName').eq(i).html())
				}
				if ($('#cc_CCA7_1_' + (i + 1)) && $('.infofulltimejobs .mt_reterence_phone').eq(i).html()) {
					$('#cc_CCA7_1_' + (i + 1)).val($('.infofulltimejobs .mt_reterence_phone').eq(i).html())
				}
			});
			$('.infoparttimejobs').each(function(i, item) {
				if ($('#cc_CCC1_3_' + (i + 1 + len)) && $('.infoparttimejobs .mt_startDate').eq(i).html()) {
					$('#cc_CCC1_3_' + (i + 1 + len)).val(addZero($('.infoparttimejobs .mt_startDate').eq(i).html()))
				}
				if ($('#cc_CCC2_3_' + (i + 1 + len)) && $('.infoparttimejobs .mt_endDate').eq(i).html()) {
					$('#cc_CCC2_3_' + (i + 1 + len)).val(addZero($('.infoparttimejobs .mt_endDate').eq(i).html()))
				}
				if ($('#cc_CCA3_1_' + (i + 1 + len)).length) {
					$('#cc_CCA3_1_' + (i + 1 + len)).get(0).options[2].selected = true
				}
				if ($('#cc_CCA4_1_' + (i + 1 + len)) && $('.infoparttimejobs .mt_companyName').eq(i).html()) {
					$('#cc_CCA4_1_' + (i + 1 + len)).val($('.infoparttimejobs .mt_companyName').eq(i).html())
				}
				if ($('#cc_CCA1_1_' + (i + 1 + len)) && $('.infoparttimejobs .mt_companyName').eq(i).html()) {
					$('#cc_CCA1_1_' + (i + 1 + len)).val($('.infoparttimejobs .mt_companyName').eq(i).html())
				}
				if ($('#cc_CCA5_1_' + (i + 1 + len)) && $('.infoparttimejobs .mt_workCity').eq(i).html()) {
					$('#cc_CCA5_1_' + (i + 1 + len)).val($('.infoparttimejobs .mt_workCity').eq(i).html())
				}
				if ($('#cc_CCF1_6_' + (i + 1 + len)) && $('.infoparttimejobs .mt_workContent .workContent').eq(i).html()) {
					$('#cc_CCF1_6_' + (i + 1 + len)).val($('.infoparttimejobs .mt_workContent .workContent').eq(i).html())
				}
				if ($('#cc_CCA6_1_' + (i + 1 + len)) && $('.infoparttimejobs .mt_reterenceName').eq(i).html()) {
					$('#cc_CCA6_1_' + (i + 1 + len)).val($('.infoparttimejobs .mt_reterenceName').eq(i).html())
				}
				if ($('#cc_CCA7_1_' + (i + 1 + len)) && $('.infoparttimejobs .mt_reterence_phone').eq(i).html()) {
					$('#cc_CCA7_1_' + (i + 1)).val($('.infoparttimejobs .mt_reterence_phone').eq(i).html())
				}
			})
		} else if ($('#container h1').eq(0).text() == '学生活动/项目经验' || $('#container h1').eq(0).text() == '社会实践') {
			if ($('#cc_CCF1_6_1').length && $('#cc_CCF1_6_1').attr('cname') == '实践名称') {
				for (var i = 0; i < $('.ci').length; i++) {
					if ($('.infoproject').length > i) {
						$('#cc_CCF1_6_' + (i + 1)).val($('.infoproject .mt_projectName').eq(i).html());
						date = addZero($('.infoproject .mt_prostarttime').eq(i).html()).split('-');
						selectFac(date[0], $('.ci').eq(i).find('dl').eq(1).find('select').eq(0));
						selectFac(date[1], $('.ci').eq(i).find('dl').eq(1).find('select').eq(1));
						date = addZero($('.infoproject .mt_proendtime').eq(i).html()).split('-');
						selectFac(date[0], $('.ci').eq(i).find('dl').eq(2).find('select').eq(0));
						selectFac(date[1], $('.ci').eq(i).find('dl').eq(2).find('select').eq(1));
						$('#cc_CCF2_6_' + (i + 1)).val($('.infoproject .mt_projectRemark').eq(i).html())
					}
				}
			} else {
				var len = $('.infoproject').length;
				$('.infoproject').each(function(i, val) {
					if ($('#cc_CCC1_3_' + (i + 1)) && $('.infoproject .mt_prostartdate').eq(i).html()) {
						$('#cc_CCC1_3_' + (i + 1)).val(addZero($('.infoproject .mt_prostartdate').eq(i).html()))
					}
					if ($('#cc_CCC2_3_' + (i + 1)) && $('.infoproject .mt_proenddate').eq(i).html()) {
						$('#cc_CCC2_3_' + (i + 1)).val(addZero($('.infoproject .mt_proenddate').eq(i).html()))
					}
					if ($('#cc_CCC3_3_' + (i + 1)) && $('.infoproject .mt_prostartdate').eq(i).html()) {
						$('#cc_CCC3_3_' + (i + 1)).val(addZero($('.infoproject .mt_prostartdate').eq(i).html()))
					}
					if ($('#cc_CCC4_3_' + (i + 1)) && $('.infoproject .mt_proenddate').eq(i).html()) {
						$('#cc_CCC4_3_' + (i + 1)).val(addZero($('.infoproject .mt_proenddate').eq(i).html()))
					}
					if ($('#cc_CCA1_1_' + (i + 1)) && $('.infoproject .mt_projectName').eq(i).html() && $('#cc_CCA1_1_' + (i + 1).attr('cname') != '开始日期')) {
						$('#cc_CCA1_1_' + (i + 1)).val($('.infoproject .mt_projectName').eq(i).html())
					}
					if ($('#cc_CCA2_1_' + (i + 1)) && $('.infoproject .mt_positionName').eq(i).html() && $('#cc_CCA2_1_' + (i + 1).attr('cname') != '结束日期')) {
						$('#cc_CCA2_1_' + (i + 1)).val($('.infoproject .mt_positionName').eq(i).html())
					}
					if ($('#cc_CCF1_6_' + (i + 1)) && $('.infoproject .mt_projectRemark').eq(i).html() && $('#cc_CCF1_6_' + (i + 1)).attr('cname') != '实践名称') {
						$('#cc_CCF1_6_' + (i + 1)).val($('.infoproject .mt_projectRemark').eq(i).html())
					}
					if ($('#cc_CCF2_6_' + (i + 1)) && $('.infoproject .mt_projectRemark').eq(i).html() && $('#cc_CCF2_6_' + (i + 1)).attr('cname') != '项目描述') {
						$('#cc_CCF2_6_' + (i + 1)).val($('.infoproject .mt_projectRemark').eq(i).html())
					}
				});
				$('.infoschoolclub').each(function(i, val) {
					if ($('#cc_CCC1_3_' + (i + 1 + len)) && $('.infoschoolclub .mt_startDate').eq(i).html()) {
						$('#cc_CCC1_3_' + (i + 1 + len)).val(addZero($('.infoschoolclub .mt_startDate').eq(i).html()))
					}
					if ($('#cc_CCC2_3_' + (i + 1 + len)) && $('.infoschoolclub .mt_endDate').eq(i).html()) {
						$('#cc_CCC2_3_' + (i + 1 + len)).val(addZero($('.infoschoolclub .mt_endDate').eq(i).html()))
					}
					if ($('#cc_CCC3_3_' + (i + 1 + len)) && $('.infoschoolclub .mt_startDate').eq(i).html()) {
						$('#cc_CCC3_3_' + (i + 1 + len)).val(addZero($('.infoschoolclub .mt_startDate').eq(i).html()))
					}
					if ($('#cc_CCC4_3_' + (i + 1 + len)) && $('.infoschoolclub .mt_endDate').eq(i).html()) {
						$('#cc_CCC4_3_' + (i + 1 + len)).val(addZero($('.infoschoolclub .mt_endDate').eq(i).html()))
					}
					if ($('#cc_CCA1_1_' + (i + 1 + len)) && $('.infoschoolclub .mt_schClubName').eq(i).html() && $('#cc_CCA1_1_' + (i + 1).attr('cname') != '开始日期')) {
						$('#cc_CCA1_1_' + (i + 1 + len)).val($('.infoschoolclub .mt_schClubName').eq(i).html())
					}
					if ($('#cc_CCA2_1_' + (i + 1 + len)) && $('.infoschoolclub .mt_positionName').eq(i).html() && $('#cc_CCA2_1_' + (i + 1).attr('cname') != '结束日期')) {
						$('#cc_CCA2_1_' + (i + 1 + len)).val($('.infoschoolclub .mt_positionName').eq(i).html())
					}
					if ($('#cc_CCF1_6_' + (i + 1 + len)) && $('.infoschoolclub .mt_workDes').eq(i).html() && $('#cc_CCF1_6_' + (i + 1)).attr('cname') != '实践名称') {
						$('#cc_CCF1_6_' + (i + 1 + len)).val($('.infoschoolclub .mt_workDes').eq(i).html())
					}
					if ($('#cc_CCF2_6_' + (i + 1)) && $('.infoschoolclub .mt_workDes').eq(i).html() && $('#cc_CCF2_6_' + (i + 1)).attr('cname') != '项目描述') {
						$('#cc_CCF2_6_' + (i + 1)).val($('.infoschoolclub .mt_workDes').eq(i).html())
					}
				})
			}
		} else if ($('#container h1').eq(0).text() == '技能/获奖证书') {
			if ($('#cc_CCC1_3_1') && $('.infoschaward .mt_awardsDate').eq(0).html()) {
				$('#cc_CCC1_3_1').val(addZero($('.infoschaward .mt_awardsDate').eq(0).html()))
			}
			if ($('#cc_CCA4_1_1') && $('.infoschaward .mt_awardsName').eq(0).html()) {
				$('#cc_CCA4_1_1').val($('.infoschaward .mt_awardsName').eq(0).html())
			}
		} else if ($('#container h1').eq(0).text() == '其他') {
			if ($('#cc_CCA44_1_1') && $('#mt_fmname').html()) {
				$('#cc_CCA44_1_1').val($('#mt_fmname').html())
			}
			if ($('#cc_CCA34_1_1') && $('#mt_fmrelation').html() && $('#cc_CCA34_1_1').attr('cname') != '所获技能证书') {
				$('#cc_CCA34_1_1').val($('#mt_fmrelation').html())
			}
			if ($('#cc_CCA45_1_1') && $('#mt_fmwork').html()) {
				$('#cc_CCA45_1_1').val($('#mt_fmwork').html())
			}
			if ($('#cc_CCA35_1_1') && $('#mt_fmposition').html()) {
				$('#cc_CCA35_1_1').val($('#mt_fmposition').html())
			}
			if ($('#cc_CCF4_6_1') && $('#mt_skill').html() && $('#cc_CCF4_6_1').attr('cname') == '其他招聘信息来源渠道') {
				$('#cc_CCF4_6_1').val($('#mt_skill').html())
			}
			if ($('#cc_CCF2_6_1') && $('#mt_selfIntro').html()) {
				if ($('#cc_CCF2_6_1').attr('cname') == '兴趣/特长') {
					$('#cc_CCF2_6_1').val($('#mt_skill').html())
				} else if ($('#cc_CCF2_6_1').attr('cname') == '所获奖励') {
					var text = '';
					for (var i = 0; i < $('.infoschaward').length; i++) {
						text = text + $('.infoschaward .mt_schawradList').eq(i).html() + ';'
					}
					$('#cc_CCF2_6_1').val(text)
				} else if ($('#cc_CCF2_6_1').attr('cname') == '学生干部及社团活动经历') {
					var text = '';
					for (var i = 0; i < $('.infoschoolclub').length; i++) {
						text = text + $('.infoschoolclub .mt_schClubList').eq(i).html() + ';\\n'
					}
					$('#cc_CCF2_6_1').val(text)
				} else if ($('#cc_CCF2_6_1').attr('cname') == '兴趣爱好') {
					$('#cc_CCF2_6_1').val($('#mt_skill').html())
				} else if ($('#cc_CCF2_6_1').attr('cname') != '奖学金信息') {
					$('#cc_CCF2_6_1').val($('#mt_selfIntro').html())
				}
			}
			if ($('#cc_CCA16_1_1') && $('#mt_fmname').html() && $('#cc_CCA16_1_1').attr('cname') == '姓名1') {
				$('#cc_CCA16_1_1').val($('#mt_fmname').html())
			}
			if ($('#cc_CCA8_1_1') && $('#mt_fmrelation').html() && $('#cc_CCA8_1_1').attr('cname') == '关系1') {
				$('#cc_CCA8_1_1').val($('#mt_fmrelation').html())
			}
			if ($('#cc_CCA17_1_1') && $('#mt_fmposition').html() && $('#cc_CCA17_1_1').attr('cname') == '职务1') {
				$('#cc_CCA17_1_1').val($('#mt_fmposition').html())
			}
			if ($('#cc_CCA9_1_1') && $('#mt_fmphone').html() && $('#cc_CCA9_1_1').attr('cname') == '联系方式1') {
				$('#cc_CCA9_1_1').val($('#mt_fmphone').html())
			}
			if ($('#ddl_CCE2_5_1').length && $('#cc_CCE2_5_1').length && $('#mt_expectcity').html() && $('#mt_expectcity_city').html()) {
				var pro = document.getElementById('ddl_CCE2_5_1');
				var city = document.getElementById('cc_CCE2_5_1');
				var nowpro = $('#mt_expectcity').html();
				var nowcity = $('#mt_expectcity_city').html();
				var prostr;
				var citystr;
				if ($('#mt_expectcity_city').html() == '深圳' && pro.options[4].innerHTML.indexOf($('#mt_expectcity_city').html() == '深圳') != -1) {
					pro.options[4].selected = true;
					pro.dispatchEvent(event)
				} else {
					for (var i = 0; i < pro.options.length; i++) {
						prostr = $.trim(pro.options[i].innerHTML);
						if (prostr.indexOf(nowpro, 0) != -1) {
							pro.options[i].selected = true;
							pro.dispatchEvent(event);
							for (var j = 0; j < city.options.length; j++) {
								citystr = $.trim(city.options[j].innerHTML);
								if (citystr.indexOf(nowcity, 0) != -1) {
									city.options[j].selected = true;
									break
								}
							};
							break
						}
					}
				}
			}
			if ($('#cc_CCA6_1_1').length && $('#cc_CCA6_1_1').attr('cname') != '姓名1') {
				switch ($('.infoschaward .mt_awardsType').eq(0).html()) {
				case '国际级':
				case '国家级':
				case '省市级':
					$('#cc_CCA6_1_1').get(0).options[1].selected = true;
					break;
				case '学校级':
					$('#cc_CCA6_1_1').get(0).options[2].selected = true;
					break;
				case '院系级':
					$('#cc_CCA6_1_1').get(0).options[3].selected = true;
					break
				}
			}
			if ($('#cc_CCA17_1_1').length && $('#cc_CCA17_1_1').parent().prev().text() != '* 期望从事的职业一' && $('#cc_CCA17_1_1').attr('cname') != '职务1') {
				$('#cc_CCA17_1_1').val($('.infoschaward .mt_awardsName').eq(1).html())
			}
			if ($('#cc_CCA16_1_1').length) {
				if ($('#cc_CCA16_1_1').parent().prev().html() == '获奖名称1') {
					$('#cc_CCA16_1_1').val($('.infoschaward .mt_awardsName').eq(0).html())
				} else {
					switch ($('.infoschaward .mt_awardsType').eq(1).html()) {
					case '国际级':
					case '国家级':
					case '省市级':
						$('#cc_CCA16_1_1').get(0).options[1].selected = true;
						break;
					case '学校级':
						$('#cc_CCA16_1_1').get(0).options[2].selected = true;
						break;
					case '院系级':
						$('#cc_CCA16_1_1').get(0).options[3].selected = true;
						break
					}
				}
			}
			if ($('#cc_CCC12_3_1').length && $('.infoschaward .mt_awardsDate').eq(0).html()) {
				$('#cc_CCC12_3_1').val(addZero($('.infoschaward .mt_awardsDate').eq(0).html()))
			}
			if ($('#cc_CCC2_3_1').length && $('.infoschaward .mt_awardsDate').eq(1).html()) {
				$('#cc_CCC2_3_1').val(addZero($('.infoschaward .mt_awardsDate').eq(1).html()))
			}
			if ($('#cc_CCA8_1_1').length && $('.infoschaward .mt_awardsDes').eq(0).html()) {
				$('#cc_CCA8_1_1').val($('.infoschaward .mt_awardsDes').eq(0).html())
			}
			if ($('#cc_CCF3_6_1').length && $('#cc_CCF3_6_1').attr('cname') != '健康状况') {
				if ($('#cc_CCF3_6_1').attr('cname') == '兴趣特长' || $('#cc_CCF3_6_1').attr('cname') == '特长或兴趣爱好') {
					$('#cc_CCF3_6_1').val($('#mt_skill').html())
				} else if ($('#cc_CCF3_6_1').attr('cname').indexOf('奖') != -1) {
					var text = '';
					for (var i = 0; i < $('.infoschaward').length; i++) {
						text = text + $('.infoschaward .mt_schawradList').eq(i).html() + ';\\n'
					}
					$('#cc_CCF3_6_1').val(text)
				}
			}
		} else if ($('#container h1').eq(0).text() == '实习/项目经验') {
			$('.infoparttimejobs').each(function(i, val) {
				if (i < 3) {
					var $div = $('#cc_ResumeSubID_7_' + (i + 1));
					var $stsel = $div.nextAll('dl').eq(0).find('select');
					var $etsel = $div.nextAll('dl').eq(1).find('select');
					var st = $(val).find('.mt_startDate').html().split('-');
					var et = $(val).find('.mt_endDate').html().split('-');
					var name = $(val).find('.mt_companyName').html();
					var des = $(val).find('.mt_workContent .workContent').html();
					selectFac(st[0], $stsel.eq(0));
					$stsel.eq(1).get(0).options[st[1] - 0].selected = true;
					selectFac(et[0], $etsel.eq(0));
					$etsel.eq(1).get(0).options[et[1] - 0].selected = true;
					if ($('#cc_CCF2_6_' + (i + 1)) && name) {
						$('#cc_CCF2_6_' + (i + 1)).val(name)
					}
					if ($('#cc_CCF1_6_' + (i + 1)) && des) {
						$('#cc_CCF1_6_' + (i + 1)).val(des)
					}
				}
			})
		} else if ($('#container h1').eq(0).text() == '实习及项目经历') {
			if ($('#cc_CCC1_3_1').length && $('#cc_CCC2_3_1').length && $('#cc_CCC1_3_1').attr('cname') == '开始日期' && $('#cc_CCC2_3_1').attr('cname') == '结束日期') {
				var j = 0;
				for (var i = 0; i < $('.infoparttimejobs').length; i++) {
					if ($('.ci').eq(i).length) {
						if ($('#cc_CCC1_3_' + (i + 1)) && $('.infoparttimejobs .mt_startDate').eq(i).html()) {
							$('#cc_CCC1_3_' + (i + 1)).val(addZero($('.infoparttimejobs .mt_startDate').eq(i).html()))
						}
						if ($('#cc_CCC2_3_' + (i + 1)) && $('.infoparttimejobs .mt_endDate').eq(i).html()) {
							$('#cc_CCC2_3_' + (i + 1)).val(addZero($('.infoparttimejobs .mt_endDate').eq(i).html()))
						}
						if ($('#cc_CCF2_6_' + (i + 1)) && $('.infoparttimejobs .mt_companyName').eq(i).html()) {
							$('#cc_CCF2_6_' + (i + 1)).val($('.infoparttimejobs .mt_companyName').eq(i).html())
						}
						if ($('#cc_CCF3_6_' + (i + 1)) && $('.infoparttimejobs .mt_positionName').eq(i).html()) {
							$('#cc_CCF3_6_' + (i + 1)).val($('.infoparttimejobs .mt_positionName').eq(i).html())
						}
						if ($('#cc_CCF1_6_' + (i + 1)) && $('.infoparttimejobs .workDes').eq(i).html()) {
							$('#cc_CCF1_6_' + (i + 1)).val($('.infoparttimejobs .workDes').eq(i).html())
						}
						j = i + 1
					} else {
						break
					}
				}
				for (var i = 0; i < $('.infoproject').length; i++) {
					if ($('.ci').eq(i + j).length) {
						if ($('#cc_CCC1_3_' + (i + j + 1)) && $('.infoproject .mt_prostarttime').eq(i).html()) {
							$('#cc_CCC1_3_' + (i + j + 1)).val(addZero($('.infoproject .mt_prostarttime').eq(i).html()))
						}
						if ($('#cc_CCC2_3_' + (i + j + 1)) && $('.infoproject .mt_proendtime').eq(i).html()) {
							$('#cc_CCC2_3_' + (i + j + 1)).val(addZero($('.infoproject .mt_proendtime').eq(i).html()))
						}
						if ($('#cc_CCF2_6_' + (i + j + 1)) && $('.infoproject .mt_projectName').eq(i).html()) {
							$('#cc_CCF2_6_' + (i + j + 1)).val($('.infoproject .mt_projectName').eq(i).html())
						}
						if ($('#cc_CCF3_6_' + (i + j + 1)) && $('.infoproject .mt_positionName').eq(i).html()) {
							$('#cc_CCF3_6_' + (i + j + 1)).val($('.infoproject .mt_positionName').eq(i).html())
						}
						if ($('#cc_CCF1_6_' + (i + j + 1)) && $('.infoproject .mt_projectRemark').eq(i).html()) {
							$('#cc_CCF1_6_' + (i + j + 1)).val($('.infoproject .mt_projectRemark').eq(i).html())
						}
					} else {
						break
					}
				}
			}
		} else if ($('#container h1').eq(0).text() == '实习或实践经验') {
			if ($('#cc_CCC1_3_1').length && $('#cc_CCC2_3_1').length && $('#cc_CCC1_3_1').attr('cname') == '开始日期' && $('#cc_CCC2_3_1').attr('cname') == '结束日期') {
				var j = 0;
				for (var i = 0; i < $('.infoparttimejobs').length; i++) {
					if ($('.ci').eq(i).length) {
						if ($('#cc_CCC1_3_' + (i + 1)) && $('.infoparttimejobs .mt_startDate').eq(i).html()) {
							$('#cc_CCC1_3_' + (i + 1)).val(addZero($('.infoparttimejobs .mt_startDate').eq(i).html()))
						}
						if ($('#cc_CCC2_3_' + (i + 1)) && $('.infoparttimejobs .mt_endDate').eq(i).html()) {
							$('#cc_CCC2_3_' + (i + 1)).val(addZero($('.infoparttimejobs .mt_endDate').eq(i).html()))
						}
						if ($('#cc_CCF1_6_' + (i + 1)) && $('.infoparttimejobs .workDes').eq(i).html()) {
							$('#cc_CCF1_6_' + (i + 1)).val($('.infoparttimejobs .workDes').eq(i).html())
						}
						if ($('#cc_CCA1_1_' + (i + 1)) && $('.infoparttimejobs .mt_companyName').eq(i).html()) {
							$('#cc_CCA1_1_' + (i + 1)).val($('.infoparttimejobs .mt_companyName').eq(i).html())
						}
						if ($('#cc_CCA2_1_' + (i + 1)) && $('.infoparttimejobs .mt_positionName').eq(i).html()) {
							$('#cc_CCA2_1_' + (i + 1)).val($('.infoparttimejobs .mt_positionName').eq(i).html())
						}
						j = i + 1
					} else {
						break
					}
				}
				for (var i = 0; i < $('.infoproject').length; i++) {
					if ($('.ci').eq(i + j).length) {
						if ($('#cc_CCC1_3_' + (i + j + 1)) && $('.infoproject .mt_prostarttime').eq(i).html()) {
							$('#cc_CCC1_3_' + (i + j + 1)).val(addZero($('.infoproject .mt_prostarttime').eq(i).html()))
						}
						if ($('#cc_CCC2_3_' + (i + j + 1)) && $('.infoproject .mt_proendtime').eq(i).html()) {
							$('#cc_CCC2_3_' + (i + j + 1)).val(addZero($('.infoproject .mt_proendtime').eq(i).html()))
						}
						if ($('#cc_CCF1_6_' + (i + j + 1)) && $('.infoproject .mt_projectRemark').eq(i).html()) {
							$('#cc_CCF1_6_' + (i + j + 1)).val($('.infoproject .mt_projectRemark').eq(i).html())
						}
						if ($('#cc_CCA1_1_' + (i + 1)) && $('.infoparttimejobs .mt_companyName').eq(i).html()) {
							$('#cc_CCA1_1_' + (i + 1)).val($('.infoparttimejobs .mt_companyName').eq(i).html())
						}
						if ($('#cc_CCA2_1_' + (i + 1)) && $('.infoparttimejobs .mt_positionName').eq(i).html()) {
							$('#cc_CCA2_1_' + (i + 1)).val($('.infoparttimejobs .mt_positionName').eq(i).html())
						}
					} else {
						break
					}
				}
			}
		} else if ($('#container h1').eq(0).text() == '兴趣特长') {
			if ($('#cc_CCF2_6_1') && $('#mt_skill').html()) {
				$('#cc_CCF2_6_1').val($('#mt_skill').html())
			}
		} else if ($('#container h1').eq(0).text() == '家庭情况' || $('#container h1').eq(0).text() == '家庭情况（直系亲属必填）') {
			if ($('#cc_CCA18_1_1') && $('#mt_fmname').html()) {
				$('#cc_CCA18_1_1').val($('#mt_fmname').html())
			}
			if ($('#cc_CCA18_1_1') && $('#mt_fmrelation').html()) {
				$('#cc_CCA10_1_1').val($('#mt_fmrelation').html())
			}
			if ($('#cc_CCA19_1_1') && $('#mt_fmposition').html()) {
				$('#cc_CCA19_1_1').val($('#mt_fmposition').html())
			}
			if ($('#cc_CCF8_6_1') && $('#mt_fmwork').html()) {
				$('#cc_CCF8_6_1').val($('#mt_fmwork').html())
			}
			if ($('#cc_CCA20_1_1') && $('#mt_fmphone').html()) {
				$('#cc_CCA20_1_1').val($('#mt_fmphone').html())
			}
			if ($('#cc_Degree_1_1') && $('#mt_fmrelation').html() && $('#cc_Degree_1_1').attr('cname') != '姓名') {
				$('#cc_Degree_1_1').val($('#mt_fmrelation').html())
			}
			if ($('#cc_Degree_1_1') && $('#mt_fmname').html() && $('#cc_Degree_1_1').attr('cname') == '姓名') {
				$('#cc_Degree_1_1').val($('#mt_fmname').html())
			}
			if ($('#cc_CCA2_1_1') && $('#mt_fmname').html() && $('#cc_CCA2_1_1').attr('cname') == '姓名') {
				$('#cc_CCA2_1_1').val($('#mt_fmname').html())
			}
			if ($('#cc_CCA2_1_1') && $('#mt_fmrelation').html() && $('#cc_CCA2_1_1').attr('cname') == '与本人关系') {
				$('#cc_CCA2_1_1').val($('#mt_fmrelation').html())
			}
			if ($('#cc_CCA1_1_1') && $('#mt_fmrelation').html() && $('#cc_CCA1_1_1').attr('cname') == '关系') {
				$('#cc_CCA1_1_1').val($('#mt_fmrelation').html())
			}
			if ($('#cc_CCF1_6_1') && $('#mt_fmwork').html() && $('#mt_fmposition').html() && $('#cc_CCF1_6_1').attr('cname') != '工作单位') {
				$('#cc_CCF1_6_1').val($('#mt_fmwork').html() + ' ' + $('#mt_fmposition').html())
			}
			if ($('#cc_CCF1_6_1') && $('#mt_fmwork').html() && $('#cc_CCF1_6_1').attr('cname') == '工作单位') {
				$('#cc_CCF1_6_1').val($('#mt_fmwork').html())
			}
			if ($('#cc_CCA3_1_1') && $('#mt_fmphone').html() && $('#cc_CCA3_1_1').attr('cname') != '职务') {
				$('#cc_CCA3_1_1').val($('#mt_fmphone').html())
			}
			if ($('#cc_CCA3_1_1') && $('#mt_fmposition').html() && $('#cc_CCA3_1_1').attr('cname') == '职务') {
				$('#cc_CCA3_1_1').val($('#mt_fmposition').html())
			}
			if ($('#cc_CCA5_1_1') && $('#mt_fmposition').html() && $('#cc_CCA5_1_1').attr('cname') == '现工作单位及职务') {
				$('#cc_CCA5_1_1').val($('#mt_fmposition').html())
			}
			if ($('#cc_CCA4_1_1') && $('#mt_fmphone').html() && $('#cc_CCA4_1_1').attr('cname') == '联系电话') {
				$('#cc_CCA4_1_1').val($('#mt_fmphone').html())
			}
		} else if ($('#container h1').eq(0).text() == '家庭状况') {
			if ($('#mt_fmrelation').html() == '父亲' || $('#mt_fmrelation').html() == '父子') {
				if ($('#cc_CCA16_1_1') && $('#mt_fmname').html()) {
					$('#cc_CCA16_1_1').val($('#mt_fmname').html())
				}
				if ($('#cc_CCA9_1_1') && $('#mt_fmwork').html()) {
					$('#cc_CCA9_1_1').val($('#mt_fmwork').html())
				}
				if ($('#cc_CCA17_1_1') && $('#mt_fmposition').html()) {
					$('#cc_CCA17_1_1').val($('#mt_fmposition').html())
				}
				if ($('#cc_CCA18_1_1') && $('#mt_fmphone').html()) {
					$('#cc_CCA18_1_1').val($('#mt_fmphone').html())
				}
			} else if ($('#mt_fmrelation').html() == '母亲' || $('#mt_fmrelation').html() == '母子') {
				if ($('#cc_CCA19_1_1') && $('#mt_fmname').html()) {
					$('#cc_CCA19_1_1').val($('#mt_fmname').html())
				}
				if ($('#cc_CCA10_1_1') && $('#mt_fmwork').html()) {
					$('#cc_CCA10_1_1').val($('#mt_fmwork').html())
				}
				if ($('#cc_CCA20_1_1') && $('#mt_fmposition').html()) {
					$('#cc_CCA20_1_1').val($('#mt_fmposition').html())
				}
				if ($('#cc_CCA11_1_1') && $('#mt_fmphone').html()) {
					$('#cc_CCA11_1_1').val($('#mt_fmphone').html())
				}
			} else if ($('#mt_fmrelation').html() == '夫妻' || $('#mt_fmrelation').html() == '妻子') {
				if ($('#cc_CCA21_1_1') && $('#mt_fmname').html()) {
					$('#cc_CCA21_1_1').val($('#mt_fmname').html())
				}
				if ($('#cc_CCA12_1_1') && $('#mt_fmwork').html()) {
					$('#cc_CCA12_1_1').val($('#mt_fmwork').html())
				}
				if ($('#cc_CCA13_1_1') && $('#mt_fmposition').html()) {
					$('#cc_CCA13_1_1').val($('#mt_fmposition').html())
				}
				if ($('#cc_CCA22_1_1') && $('#mt_fmphone').html()) {
					$('#cc_CCA22_1_1').val($('#mt_fmphone').html())
				}
			}
		} else if ($('#container h1').eq(0).text() == '校内经历') {
			if ($('#cc_CCC2_3_1').length && $('.infoschoolclub .mt_endDate').eq(0).length && $('#cc_CCC2_3_1').parent().prev().html() == '结束时间') {
				if ($('.infoschoolclub .mt_endDate').eq(0).html().length < 7) {
					$('#cc_CCC2_3_1').val($('.infoschoolclub .mt_endDate').eq(0).html().split('-').join('-0'))
				} else {
					$('#cc_CCC2_3_1').val($('.infoschoolclub .mt_endDate').eq(0).html())
				}
			}
			if ($('#cc_CCC2_3_1').length && $('.infoschoolclub .mt_startDate').eq(0).length && $('#cc_CCC2_3_1').parent().prev().html() != '结束时间') {
				if ($('.infoschoolclub .mt_startDate').eq(0).html().length < 7) {
					$('#cc_CCC2_3_1').val($('.infoschoolclub .mt_startDate').eq(0).html().split('-').join('-0'))
				} else {
					$('#cc_CCC2_3_1').val($('.infoschoolclub .mt_startDate').eq(0).html())
				}
			}
			if ($('#cc_CCC1_3_1').length && $('.infoschoolclub .mt_startDate').eq(0).length) {
				if ($('.infoschoolclub .mt_startDate').eq(0).html().length < 7) {
					$('#cc_CCC1_3_1').val($('.infoschoolclub .mt_startDate').eq(0).html().split('-').join('-0'))
				} else {
					$('#cc_CCC1_3_1').val($('.infoschoolclub .mt_startDate').eq(0).html())
				}
			}
			if ($('#cc_Degree_1_1').length && $('.infoschoolclub .mt_schClubName').eq(0).length) {
				$('#cc_Degree_1_1').val($('.infoschoolclub .mt_schClubName').eq(0).html())
			}
			if ($('#cc_CCA2_1_1').length && $('.infoschoolclub .mt_positionName').eq(0).length) {
				$('#cc_CCA2_1_1').val($('.infoschoolclub .mt_positionName').eq(0).html())
			}
			if ($('#cc_CCF1_6_1').length && $('.infoschoolclub .mt_workDes').eq(0).length) {
				$('#cc_CCF1_6_1').val($('.infoschoolclub .mt_workDes').eq(0).html())
			}
			if ($('#cc_CCC12_3_1').length && $('.infoschoolclub .mt_endDate').eq(0).length) {
				if ($('.infoschoolclub .mt_endDate').eq(0).html().length < 7) {
					$('#cc_CCC12_3_1').val($('.infoschoolclub .mt_endDate').eq(0).html().split('-').join('-0'))
				} else {
					$('#cc_CCC12_3_1').val($('.infoschoolclub .mt_endDate').eq(0).html())
				}
			}
			if ($('#cc_CCF5_6_1').length && $('.infoschoolclub .mt_workDes').eq(0).length) {
				$('#cc_CCF5_6_1').val($('.infoschoolclub .mt_workDes').eq(0).html())
			}
			if ($('#cc_CCC15_3_1').length && $('.infoschoolclub .mt_startDate').eq(1).length) {
				if ($('.infoschoolclub .mt_startDate').eq(1).html().length < 7) {
					$('#cc_CCC15_3_1').val($('.infoschoolclub .mt_startDate').eq(1).html().split('-').join('-0'))
				} else {
					$('#cc_CCC15_3_1').val($('.infoschoolclub .mt_startDate').eq(1).html())
				}
			}
			if ($('#cc_CCC16_3_1').length && $('.infoschoolclub .mt_endDate').eq(1).length) {
				if ($('.infoschoolclub .mt_endDate').eq(0).html().length < 7) {
					$('#cc_CCC16_3_1').val($('.infoschoolclub .mt_endDate').eq(1).html().split('-').join('-0'))
				} else {
					$('#cc_CCC16_3_1').val($('.infoschoolclub .mt_endDate').eq(1).html())
				}
			}
			if ($('#cc_CCF22_6_1').length && $('.infoschoolclub .mt_workDes').eq(1).length) {
				$('#cc_CCF22_6_1').val($('.infoschoolclub .mt_workDes').eq(1).html())
			}
			if ($('#cc_CCC6_3_1').length && $('.infoschoolclub .mt_startDate').eq(2).length) {
				if ($('.infoschoolclub .mt_startDate').eq(1).html().length < 7) {
					$('#cc_CCC6_3_1').val($('.infoschoolclub .mt_startDate').eq(2).html().split('-').join('-0'))
				} else {
					$('#cc_CCC6_3_1').val($('.infoschoolclub .mt_startDate').eq(2).html())
				}
			}
			if ($('#cc_CCC17_3_1').length && $('.infoschoolclub .mt_endDate').eq(2).length) {
				if ($('.infoschoolclub .mt_endDate').eq(0).html().length < 7) {
					$('#cc_CCC17_3_1').val($('.infoschoolclub .mt_endDate').eq(2).html().split('-').join('-0'))
				} else {
					$('#cc_CCC17_3_1').val($('.infoschoolclub .mt_endDate').eq(2).html())
				}
			}
			if ($('#cc_CCF23_6_1').length && $('.infoschoolclub .mt_workDes').eq(2).length) {
				$('#cc_CCF23_6_1').val($('.infoschoolclub .mt_workDes').eq(2).html())
			}
		} else if ($('#container h1').eq(0).text() == '校内主要活动经历') {
			for (var i = 0; i < $('#container').find('.ci').length; i++) {
				if ($('.infoschoolclub').length > i) {
					$('#container').find('.ci').eq(i).find('dl').eq(0).find('input').eq(0).val(addZero($('.infoschoolclub .mt_startDate').eq(i).html()));
					$('#container').find('.ci').eq(i).find('dl').eq(1).find('input').eq(0).val(addZero($('.infoschoolclub .mt_endDate').eq(i).html()));
					$('#container').find('.ci').eq(i).find('dl').eq(2).find('input').eq(0).val($('.infoschoolclub .mt_positionName').eq(i).html());
					$('#container').find('.ci').eq(i).find('dl').eq(3).find('textarea').eq(0).val($('.infoschoolclub .mt_workDes').eq(i).html())
				}
			}
		} else if ($('#container h1').eq(0).text() == '项目经历') {
			if ($('#cc_CCF14_6_1').length && $('.infoproject .mt_projectName').eq(0).length) {
				$('#cc_CCF14_6_1').val($('.infoproject .mt_projectName').eq(0).html())
			}
			if ($('#cc_CCC11_3_1').length && $('.infoproject .mt_prostarttime').eq(0).length) {
				if ($('.infoproject .mt_prostarttime').eq(1).html().length < 7) {
					$('#cc_CCC11_3_1').val($('.infoproject .mt_prostarttime').eq(0).html().split('-').join('-0'))
				} else {
					$('#cc_CCC11_3_1').val($('.infoproject .mt_prostarttime').eq(0).html())
				}
			}
			if ($('#cc_CCC13_3_1').length && $('.infoproject .mt_proendtime').eq(0).length) {
				if ($('.infoproject .mt_proendtime').eq(0).html().length < 7) {
					$('#cc_CCC13_3_1').val($('.infoproject .mt_proendtime').eq(0).html().split('-').join('-0'))
				} else {
					$('#cc_CCC13_3_1').val($('.infoproject .mt_proendtime').eq(0).html())
				}
			}
			if ($('#cc_CCF6_6_1').length && $('.infoproject .mt_projectRemark').eq(0).length) {
				$('#cc_CCF6_6_1').val($('.infoproject .mt_projectRemark').eq(0).html())
			}
			if ($('#cc_CCF24_6_1').length && $('.infoproject .mt_projectName').eq(1).length) {
				$('#cc_CCF24_6_1').val($('.infoproject .mt_projectName').eq(1).html())
			}
			if ($('#cc_CCC19_3_1').length && $('.infoproject .mt_prostarttime').eq(1).length) {
				if ($('.infoproject .mt_prostarttime').eq(1).html().length < 7) {
					$('#cc_CCC19_3_1').val($('.infoproject .mt_prostarttime').eq(1).html().split('-').join('-0'))
				} else {
					$('#cc_CCC19_3_1').val($('.infoproject .mt_prostarttime').eq(1).html())
				}
			}
			if ($('#cc_CCA28_1_1').length && $('.infoproject .mt_proendtime').eq(1).length) {
				if ($('.infoproject .mt_proendtime').eq(0).html().length < 7) {
					$('#cc_CCA28_1_1').val($('.infoproject .mt_proendtime').eq(1).html().split('-').join('-0'))
				} else {
					$('#cc_CCA28_1_1').val($('.infoproject .mt_proendtime').eq(1).html())
				}
			}
			if ($('#cc_CCF25_6_1').length && $('.infoproject .mt_projectRemark').eq(1).length) {
				$('#cc_CCF25_6_1').val($('.infoproject .mt_projectRemark').eq(1).html())
			}
			if ($('#cc_CCF15_6_1') && $('.infoproject .mt_projectName').eq(2).length) {
				$('#cc_CCF15_6_1').val($('.infoproject .mt_projectName').eq(2).html())
			}
			if ($('#cc_CCC20_3_1').length && $('.infoproject .mt_prostarttime').eq(2).length) {
				if ($('.infoproject .mt_prostarttime').eq(1).html().length < 7) {
					$('#cc_CCC20_3_1').val($('.infoproject .mt_prostarttime').eq(2).html().split('-').join('-0'))
				} else {
					$('#cc_CCC20_3_1').val($('.infoproject .mt_prostarttime').eq(2).html())
				}
			}
			if ($('#cc_CCC10_3_1').length && $('.infoproject .mt_proendtime').eq(2).length) {
				if ($('.infoproject .mt_proendtime').eq(0).html().length < 7) {
					$('#cc_CCC10_3_1').val($('.infoproject .mt_proendtime').eq(2).html().split('-').join('-0'))
				} else {
					$('#cc_CCC10_3_1').val($('.infoproject .mt_proendtime').eq(2).html())
				}
			}
			if ($('#cc_CCF26_6_1').length && $('.infoproject .mt_projectRemark').eq(2).length) {
				$('#cc_CCF26_6_1').val($('.infoproject .mt_projectRemark').eq(2).html())
			}
			$('.infoproject').each(function(i, val) {
				if ($('#cc_CCC1_3_' + (i + 1)) && $('.infoproject .mt_prostartdate').eq(i).html()) {
					$('#cc_CCC1_3_' + (i + 1)).val(addZero($('.infoproject .mt_prostartdate').eq(i).html()))
				}
				if ($('#cc_CCC2_3_' + (i + 1)) && $('.infoproject .mt_proenddate').eq(i).html()) {
					$('#cc_CCC2_3_' + (i + 1)).val(addZero($('.infoproject .mt_proenddate').eq(i).html()))
				}
				if ($('#cc_CCF2_6_' + (i + 1)) && $('.infoproject .mt_projectName').eq(i).html()) {
					$('#cc_CCF2_6_' + (i + 1)).val($('.infoproject .mt_projectName').eq(i).html())
				}
				if ($('#cc_CCF1_6_' + (i + 1)) && $('.infoproject .mt_projectRemark').eq(i).html()) {
					$('#cc_CCF1_6_' + (i + 1)).val($('.infoproject .mt_projectRemark').eq(i).html())
				}
			})
		} else if ($('#container h1').eq(0).text() == '个人技能') {
			var skilllevel = 0;
			var maxlevel = 0;
			var maxscore;
			for (var i = 0; i < $('.infoEnglishSkill').length; i++) {
				if ($('.mt_skillEngLevel').eq(i).html() == '专业八级') {
					skilllevel = 6
				} else if ($('.mt_skillEngLevel').eq(i).html() == '专业四级') {
					skilllevel = 3
				} else if ($('.mt_skillEngLevel').eq(i).html() == '大学英语六级') {
					skilllevel = 2
				} else {
					skilllevel = 1
				}
				if (skilllevel > maxlevel) {
					maxlevel = skilllevel;
					maxscore = $('.infoEnglishSkill .mt_skillEngSorce').eq(i).html()
				}
			}
			for (var i = 0; i < $('.infoOtEnglishSkil').length; i++) {
				if ($('.mt_otherSkillEngLevel').eq(i).html() == '托福') {
					skilllevel = 5
				} else if ($('.mt_otherSkillEngLevel').eq(i).html() == '雅思') {
					skilllevel = 4
				}
				if (skilllevel > maxlevel) {
					maxlevel = skilllevel;
					maxscore = $('.infoOtEnglishSkil .mt_otherSkillEngSorce').eq(i).html()
				}
			}
			if ($('#ddl_EnglishLevel_5_1').length) {
				var engskill = document.getElementById('ddl_EnglishLevel_5_1');
				if (maxlevel == 6) {
					engskill.options[4].selected = true
				} else if (maxlevel == 5) {
					engskill.options[5].selected = true
				} else if (maxlevel == 4) {
					engskill.options[6].selected = true
				} else if (maxlevel == 3) {
					engskill.options[3].selected = true
				} else if (maxlevel == 2) {
					engskill.options[2].selected = true
				} else if (maxlevel == 1) {
					engskill.options[1].selected = true
				}
				engskill.dispatchEvent(event);
				selectFac($('.infoOtherSkill .mt_skillOtherLang').eq(0).html(), $('#cc_CCA25_1_1'))
			}
			if ($('#ddl_CCE2_5_1').length) {
				var engskill = document.getElementById('ddl_CCE2_5_1');
				if (maxlevel == 1) {
					engskill.options[1].selected = true
				} else if (maxlevel == 6) {
					engskill.options[4].selected = true
				} else if (maxlevel == 3) {
					engskill.options[3].selected = true
				} else if (maxlevel == 2) {
					engskill.options[2].selected = true
				}
				engskill.dispatchEvent(event)
			}
			if ($('#ddl_OtherLanguage_5_1').length && $('.infoOtherSkill .mt_skillOtherLang').eq(0).html()) {
				var osk = document.getElementById('ddl_OtherLanguage_5_1');
				switch ($('.infoOtherSkill .mt_skillOtherLang').eq(0).html()) {
				case '德语':
					osk.options[1].selected = true;
					break;
				case '日语':
					osk.options[3].selected = true;
					break;
				case '法语':
					osk.options[2].selected = true;
					break;
				default:
					osk.options[4].selected = true;
					break
				}
				osk.dispatchEvent(event)
			}
		} else if ($('#container h1').eq(0).text() == '求职意向') {
			if ($('#ddl_CCE10_5_1').length && $('#mt_expectcity').html()) {
				for (var i = 0; i < $('#ddl_CCE10_5_1').get(0).options.length; i++) {
					if ($('#ddl_CCE10_5_1').get(0).options[i].innerHTML.indexOf($('#mt_expectcity').html()) != -1) {
						$('#ddl_CCE10_5_1').get(0).options[i].selected = true;
						$('#ddl_CCE10_5_1').get(0).dispatchEvent(event)
					}
				}
			}
			if ($('#ddl_CCE1_5_1').length && $('#mt_expectcity').html()) {
				for (var i = 0; i < $('#ddl_CCE1_5_1').get(0).options.length; i++) {
					if ($('#ddl_CCE1_5_1').get(0).options[i].innerHTML.indexOf($('#mt_expectcity').html()) != -1) {
						$('#ddl_CCE1_5_1').get(0).options[i].selected = true;
						$('#ddl_CCE1_5_1').get(0).dispatchEvent(event)
					}
				}
			}
			if ($('#cc_CCE1_5_1').length && $('#mt_expectcity').html()) {
				for (var i = 0; i < $('#cc_CCE1_5_1').get(0).options.length; i++) {
					if ($('#cc_CCE1_5_1').get(0).options[i].innerHTML.indexOf($('#mt_expectcity_city').html()) != -1) {
						$('#cc_CCE1_5_1').get(0).options[i].selected = true;
						$('#cc_CCE1_5_1').get(0).dispatchEvent(event)
					}
				}
			}
			window.setTimeout(function() {
				if ($('#cc_CCE10_5_1').length && $('#mt_expectcity_city').html()) {
					for (var i = 0; i < $('#cc_CCE10_5_1').get(0).options.length; i++) {
						if ($('#cc_CCE10_5_1').get(0).options[i].innerHTML == $('#mt_expectcity_city').html()) {
							$('#cc_CCE10_5_1').get(0).options[i].selected = true;
							$('#cc_CCE10_5_1').get(0).dispatchEvent(event)
						}
					}
				}
			},
			200)
		} else if ($('#container h1').eq(0).text() == '导师信息') {
			if ($('#cc_CCA46_1_1') && $('.infopledu .mt_tutorname').eq(0).html()) {
				$('#cc_CCA46_1_1').val($('.infopledu .mt_tutorname').eq(0).html())
			}
			if ($('#cc_CCA38_1_1') && $('.infopledu .mt_tutorphone').eq(0).html()) {
				$('#cc_CCA38_1_1').val($('.infopledu .mt_tutorphone').eq(0).html())
			}
		} else if ($('#container h1').eq(0).text() == '其他信息') {
			if ($('#cc_CCF9_6_1')) {
				var awards = '';
				for (var i = 0; i < $('.mt_awardsName').length; i++) {
					awards = awards + ';' + $('.mt_awardsName').eq(i).html() + ':' + $('.mt_awardsDes').eq(i).html()
				}
				$('#cc_CCF9_6_1').val(awards)
			}
			if ($('#cc_CCF5_6_1') && $('#mt_skill').eq(0).html()) {
				$('#cc_CCF5_6_1').val($('#mt_skill').eq(0).html())
			}
		} else if ($('#container h1').eq(0).text() == '社会实践经历') {
			$('.infoparttimejobs').each(function(i, val) {
				if ($('#cc_CCC1_3_' + (i + 1)) && $('.infoparttimejobs .mt_startDate').eq(i).html()) {
					$('#cc_CCC1_3_' + (i + 1)).val(addZero($('.infoparttimejobs .mt_startDate').eq(i).html()))
				}
				if ($('#cc_CCC2_3_' + (i + 1)) && $('.infoparttimejobs .mt_endDate').eq(i).html()) {
					$('#cc_CCC2_3_' + (i + 1)).val(addZero($('.infoparttimejobs .mt_endDate').eq(i).html()))
				}
				if ($('#cc_CCA2_1_' + (i + 1)).length && $.trim($('#cc_CCA2_1_' + (0 + 1)).parent().prev().text()) == '实践职位/岗位') {
					$('#cc_CCA2_1_' + (i + 1)).val($('.infoparttimejobs .mt_positionName').eq(i).html())
				}
				if ($('#cc_CCA2_1_' + (i + 1)) && $('.infoparttimejobs .mt_companyName').eq(i).html() && $.trim($('#cc_CCA2_1_' + (0 + 1)).parent().prev().text()) != '实践职位/岗位') {
					$('#cc_CCA2_1_' + (i + 1)).val($('.infoparttimejobs .mt_companyName').eq(i).html())
				}
				if ($('#cc_CCA1_1_' + (i + 1)).length && $.trim($('#cc_CCA1_1_' + (0 + 1)).parent().prev().text()) == '实践单位') {
					$('#cc_CCA1_1_' + (i + 1)).val($('.infoparttimejobs .mt_companyName').eq(i).html())
				}
				if ($('#cc_CCF1_6_' + (i + 1)) && $('.infoparttimejobs .mt_workContent').eq(i).text()) {
					$('#cc_CCF1_6_' + (i + 1)).val($('.infoparttimejobs .mt_workContent').eq(i).text())
				}
				if ($('#cc_CCA3_1_' + (i + 1)) && $('.infoparttimejobs .mt_reterenceName').eq(i).html()) {
					$('#cc_CCA3_1_' + (i + 1)).val($('.infoparttimejobs .mt_reterenceName').eq(i).html())
				}
				if ($('#cc_CCB1_2_' + (i + 1)) && $('.infoparttimejobs .mt_reterence_phone').eq(i).html()) {
					$('#cc_CCB1_2_' + (i + 1)).val($('.infoparttimejobs .mt_reterence_phone').eq(i).html())
				}
				if ($('#cc_CCA1_1_' + (i + 1)).length && $.trim($('#cc_CCA1_1_' + (0 + 1)).parent().prev().text()) != '实践单位') {
					$('#cc_CCA1_1_' + (i + 1)).get(0).options[4].selected = true
				}
			})
		} else if ($('#container h1').eq(0).text() == '֤证书/技能' || $('#container h1').eq(0).text() == '֤所获证书') {
			for (var i = 0; i < $('.infoplcerti .infopl').length; i++) {
				if ($('#cc_CCA5_1_' + (i + 1)).length && $('.infoplcerti .mt_certificateName').eq(i).html()) {
					$('#cc_CCA5_1_' + (i + 1)).val($('.infoplcerti .mt_certificateName').eq(i).html())
				}
				if ($('#cc_CCC1_3_' + (i + 1)) && $('.infoplcerti .mt_getDate').eq(i).html()) {
					$('#cc_CCC1_3_' + (i + 1)).val(addZero($('.infoplcerti .mt_getDate').eq(i).html()))
				}
				if ($('#cc_CCA6_1_' + (i + 1)) && $('.infoplcerti .mt_issuing').eq(i).html()) {
					$('#cc_CCA6_1_' + (i + 1)).val($('.infoplcerti .mt_issuing').eq(i).html())
				}
				if ($('#cc_CCF1_6_' + (i + 1)).length && $('#cc_CCF1_6_' + (i + 1)).attr('cname') == '证书名称' && $('.infoplcerti .mt_certificateName').eq(i).html()) {
					$('#cc_CCF1_6_' + (i + 1)).val($('.infoplcerti .mt_certificateName').eq(i).html())
				}
				if ($('#cc_CCF2_6_' + (i + 1)) && $('.infoplcerti .mt_issuing').eq(i).html()) {
					$('#cc_CCF2_6_' + (i + 1)).val($('.infoplcerti .mt_issuing').eq(i).html())
				}
			}
		} else if ($('#container h1').eq(0).text() == '语言及IT技能') {
			if ($('#cc_Degree_1_1').length) {
				var engskill = document.getElementById('cc_Degree_1_1');
				if ($('.infoEnglishSkill .mt_skillEngLevel').html() == '大学英语四级') {
					engskill.options[1].selected = true
				} else if ($('.infoEnglishSkill .mt_skillEngLevel').html() == '大学英语六级') {
					engskill.options[2].selected = true
				} else if ($('.infoEnglishSkill .mt_skillEngLevel').html() == '专业四级') {
					engskill.options[3].selected = true
				} else if ($('.infoEnglishSkill .mt_skillEngLevel').html() == '专业八级') {
					engskill.options[4].selected = true
				}
				engskill.dispatchEvent(event)
			}
			if ($('#cc_CCA2_1_1').length && $('.infoEnglishSkill .mt_skillEngSorce').html()) {
				$('#cc_CCA2_1_1').val($('.infoEnglishSkill .mt_skillEngSorce').html())
			}
			if ($('#cc_CCA3_1_1').length) {
				var engskill = document.getElementById('cc_CCA3_1_1');
				for (var i = 0; i < engskill.options.length; i++) {
					if (engskill.options[i].innerHTML.indexOf($('.infoOtEnglishSkill .mt_otherSkillEngLevel').html(), 0) != -1) {
						engskill.options[i].selected = true
					}
					engskill.dispatchEvent(event)
				}
			}
			if ($('#cc_CCA4_1_1').length && $('.infoOtEnglishSkill .mt_otherSkillEngSorce').html()) {
				$('#cc_CCA4_1_1').val($('.infoOtEnglishSkill .mt_otherSkillEngSorce').html())
			}
		} else if ($('#container h1').eq(0).text() == '在校实践经历') {
			$('.infoschoolclub').each(function(i, val) {
				if ($('#cc_CCC1_3_' + (i + 1)) && $('.infoschoolclub .mt_startDate').eq(i).html()) {
					$('#cc_CCC1_3_' + (i + 1)).val(addZero($('.infoschoolclub .mt_startDate').eq(i).html()))
				}
				if ($('#cc_CCC2_3_' + (i + 1)) && $('.infoschoolclub .mt_endDate').eq(i).html()) {
					$('#cc_CCC2_3_' + (i + 1)).val(addZero($('.infoschoolclub .mt_endDate').eq(i).html()))
				}
				if ($('#cc_CCA1_1_' + (i + 1)) && $('.infoschoolclub .mt_schClubName').eq(i).html()) {
					$('#cc_CCA1_1_' + (i + 1)).val($('.infoschoolclub .mt_schClubName').eq(i).html())
				}
				if ($('#cc_CCA2_1_' + (i + 1)) && $('.infoschoolclub .mt_positionName').eq(i).html()) {
					$('#cc_CCA2_1_' + (i + 1)).val($('.infoschoolclub .mt_positionName').eq(i).html())
				}
				if ($('#cc_CCF1_6_' + (i + 1)) && $('.infoschoolclub .mt_workDes').eq(i).html()) {
					$('#cc_CCF1_6_' + (i + 1)).val($('.infoschoolclub .mt_workDes').eq(i).html())
				}
			})
		} else if ($('#container h1').eq(0).text() == '校内实践经验') {
			if ($('#cc_CCC15_3_1').length && $('.infoschoolclub .mt_startDate').length) {
				if ($('.infoschoolclub .mt_startDate').html().length < 7) {
					$('#cc_CCC15_3_1').val($('.infoschoolclub .mt_startDate').html().split('-').join('-0'))
				} else {
					$('#cc_CCC15_3_1').val($('.infoschoolclub .mt_startDate').html())
				}
			}
			if ($('#cc_CCC5_3_1').length && $('.infoschoolclub .mt_endDate').length) {
				if ($('.infoschoolclub .mt_endDate').eq(0).html().length < 7) {
					$('#cc_CCC5_3_1').val($('.infoschoolclub .mt_endDate').html().split('-').join('-0'))
				} else {
					$('#cc_CCC5_3_1').val($('.infoschoolclub .mt_endDate').html())
				}
			}
			if ($('#cc_CCF7_6_1').length && $('.infoschoolclub .mt_workDes').length) {
				$('#cc_CCF7_6_1').val($('.infoschoolclub .mt_workDes').html())
			}
		} else if ($('#container h1').eq(0).text() == '在校期间实践活动') {
			for (var i = 0; i < $('.infoschoolclub .mt_startDate').length; i++) {
				if ($('#cc_CCC1_3_' + (i + 1)).length && $('.infoschoolclub .mt_startDate').eq(i).html()) {
					$('#cc_CCC1_3_' + (i + 1)).val(addZero($('.infoschoolclub .mt_startDate').eq(i).html()))
				}
				if ($('#cc_CCC2_3_' + (i + 1)).length && $('.infoschoolclub .mt_endDate').eq(i).html()) {
					$('#cc_CCC2_3_' + (i + 1)).val(addZero($('.infoschoolclub .mt_endDate').eq(i).html()))
				}
				if ($('#cc_CCF1_6_' + (i + 1)).length && $('.infoschoolclub .mt_workDes').eq(i).html()) {
					$('#cc_CCF1_6_' + (i + 1)).val($('.infoschoolclub .mt_workDes').eq(i).html())
				}
			}
		} else if ($('#container h1').eq(0).text() == '社会实践经验') {
			if ($('.infoparttimejobs').length) {
				if ($('#cc_CCC12_3_1').length && $('.infoparttimejobs .mt_startDate').eq(0).html()) {
					$('#cc_CCC12_3_1').val(addZero($('.infoparttimejobs .mt_startDate').eq(0).html()))
				}
				if ($('#cc_CCC3_3_1').length && $('.infoparttimejobs .mt_startDate').eq(1).html()) {
					$('#cc_CCC3_3_1').val(addZero($('.infoparttimejobs .mt_startDate').eq(1).html()))
				}
				if ($('#cc_CCC4_3_1').length && $('.infoparttimejobs .mt_startDate').eq(2).html()) {
					$('#cc_CCC4_3_1').val(addZero($('.infoparttimejobs .mt_startDate').eq(2).html()))
				}
				if ($('#cc_CCC2_3_1') && $('.infoparttimejobs .mt_endDate').eq(0).html()) {
					$('#cc_CCC2_3_1').val(addZero($('.infoparttimejobs .mt_endDate').eq(0).html()))
				}
				if ($('#cc_CCC13_3_1') && $('.infoparttimejobs .mt_endDate').eq(1).html()) {
					$('#cc_CCC13_3_1').val(addZero($('.infoparttimejobs .mt_endDate').eq(1).html()))
				}
				if ($('#cc_CCC14_3_1') && $('.infoparttimejobs .mt_endDate').eq(2).html()) {
					$('#cc_CCC14_3_1').val(addZero($('.infoparttimejobs .mt_endDate').eq(2).html()))
				}
				if ($('#cc_CCF4_6_1') && $('.infoparttimejobs .workContent').eq(0).html()) {
					$('#cc_CCF4_6_1').val($('.infoparttimejobs .workContent').eq(0).html())
				}
				if ($('#cc_CCF5_6_1') && $('.infoparttimejobs .workContent').eq(1).html()) {
					$('#cc_CCF5_6_1').val($('.infoparttimejobs .workContent').eq(1).html())
				}
				if ($('#cc_CCF6_6_1') && $('.infoparttimejobs .workContent').eq(2).html()) {
					$('#cc_CCF6_6_1').val($('.infoparttimejobs .workContent').eq(2).html())
				}
			}
		} else if ($('#container h1').eq(0).text() == '学生干部经历') {
			if ($('input[name=\"cc_CCF4_6_1\"]').length && $('input[name=\"cc_CCF5_6_1\"]').length) {
				if ($('.infoschoolclub').length) {
					$('input[name=\"cc_CCF4_6_1\"]').val($('.infoschoolclub .mt_schClubName').eq(0).html());
					$('input[name=\"cc_CCA13_1_1\"]').val($('.infoschoolclub .mt_positionName').eq(0).html());
					if ($('.infoschoolclub').length > 1) {
						$('input[name=\"cc_CCF5_6_1\"]').val($('.infoschoolclub .mt_schClubName').eq(1).html());
						$('input[name=\"cc_CCA23_1_1\"]').val($('.infoschoolclub .mt_positionName').eq(1).html())
					}
				}
			} else if ($('input[name=\"cc_CCF5_6_1\"]').length && $('input[name=\"cc_CCA26_1_1\"]').length) {
				if ($('.infoschoolclub').length) {
					$('input[name=\"cc_CCF5_6_1\"]').val($('.infoschoolclub .mt_schClubName').eq(0).html());
					$('textarea[name=\"cc_CCF2_6_1\"]').val($('.infoschoolclub .mt_workDes').eq(0).html());
					if ($('.infoschoolclub').length > 1) {
						$('input[name=\"cc_CCA26_1_1\"]').val($('.infoschoolclub .mt_schClubName').eq(1).html());
						$('textarea[name=\"cc_CCF3_6_1\"]').val($('.infoschoolclub .mt_workDes').eq(1).html())
					}
				}
			}
		} else if ($('#container h1').eq(0).text() == '学生实习经历' || $('#container h1').eq(0).text() == '实习/工作经验') {
			$('input[name=\"cc_CCC2_3_1\"]').val(addZero($('.infoparttimejobs .mt_endDate').eq(0).html()));
			$('textarea[name=\"cc_CCF10_6_1\"]').val($('.infoparttimejobs .workContent').eq(0).html());
			if ($('.infoparttimejobs').length) {
				$('input[name=\"cc_CCC11_3_1\"]').val(addZero($('.infoparttimejobs .mt_startDate').eq(0).html()));
				$('input[name=\"cc_CCC12_3_1\"]').val(addZero($('.infoparttimejobs .mt_endDate').eq(0).html()));
				$('input[name=\"cc_CCF6_6_1\"]').val($('.infoparttimejobs .mt_companyName').eq(0).html());
				$('textarea[name=\"cc_CCF7_6_1\"]').val($('.infoparttimejobs .workDes').eq(0).html());
				if ($('.infoparttimejobs').length > 1) {
					$('input[name=\"cc_CCC12_3_1\"]').val(addZero($('.infoparttimejobs .mt_startDate').eq(1).html()));
					$('input[name=\"cc_CCC3_3_1\"]').val(addZero($('.infoparttimejobs .mt_endDate').eq(1).html()));
					$('input[name=\"cc_CCF8_6_1\"]').val($('.infoparttimejobs .mt_companyName').eq(1).html());
					$('textarea[name=\"cc_CCF11_6_1\"]').val($('.infoparttimejobs .workDes').eq(1).html())
				}
			}
		} else if ($('#container h1').eq(0).text() == '学生实习经验') {
			for (var i = 0; i < $('.infoproject .mt_projectName').length; i++) {
				if ($('#cc_CCA1_1_' + (i + 1)) && $('#cc_CCA1_1_' + (i + 1)).attr('cname') == '项目名称') {
					$('#cc_CCA1_1_' + (i + 1)).val($('.infoproject .mt_projectName').eq(i).html())
				}
				if ($('#cc_CCC1_3_' + (i + 1)) && $('#cc_CCC1_3_' + (i + 1)).attr('cname') == '开始日期') {
					$('#cc_CCC1_3_' + (i + 1)).val(addZero($('.infoproject .mt_prostarttime').eq(i).html()))
				}
				if ($('#cc_CCC2_3_' + (i + 1)) && $('#cc_CCC2_3_' + (i + 1)).attr('cname') == '结束日期') {
					$('#cc_CCC2_3_' + (i + 1)).val(addZero($('.infoproject .mt_proendtime').eq(i).html()))
				}
				if ($('#cc_CCF1_6_' + (i + 1)) && $('#cc_CCF1_6_' + (i + 1)).attr('cname') == '项目描述') {
					$('#cc_CCF1_6_' + (i + 1)).val($('.infoproject .mt_projectRemark').eq(i).html())
				}
			}
		}  else if ($('#container h1').eq(0).text() == '实践经历') {
			for (var i = 0; i < $('.infoproject .mt_projectName').length; i++) {
				if ($('#cc_CCC1_3_' + (i + 1)) && $('#cc_CCC1_3_' + (i + 1)).attr('cname') == '开始日期') {
					$('#cc_CCC1_3_' + (i + 1)).val(addZero($('.infoproject .mt_prostarttime').eq(i).html()))
				}
				if ($('#cc_CCC2_3_' + (i + 1)) && $('#cc_CCC2_3_' + (i + 1)).attr('cname') == '结束日期') {
					$('#cc_CCC2_3_' + (i + 1)).val(addZero($('.infoproject .mt_proendtime').eq(i).html()))
				}
				if ($('#cc_CCF1_6_' + (i + 1)) && $('#cc_CCF1_6_' + (i + 1)).attr('cname') == '项目描述') {
					$('#cc_CCF1_6_' + (i + 1)).val($('.infoproject .mt_projectRemark').eq(i).html())
				}
			}
		} else if ($('#container h1').eq(0).text() == '所获奖励') {
			if ($('.infoschaward').length) {
				$('input[name=\"cc_CCF10_6_1\"]').val($('.infoschaward .mt_awardsName').eq(0).html());
				$('input[name=\"cc_CCC14_3_1\"]').val(addZero($('.infoschaward .mt_awardsDate').eq(0).html()));
				var opt = $('select[name=\"cc_CCA24_1_1\"]').get(0).options;
				if ($('.infoschaward .mt_awardsName').eq(0).html() == '国家级') {
					opt[1].selected = true
				} else if ($('.infoschaward .mt_awardsName').eq(0).html() == '学校级') {
					opt[3].selected = true
				} else if ($('.infoschaward .mt_awardsName').eq(0).html() == '院系级') {
					opt[4].selected = true
				}
				if ($('.infoschaward').length > 1) {
					$('input[name=\"cc_CCF11_6_1\"]').val($('.infoschaward .mt_awardsName').eq(1).html());
					$('input[name=\"cc_CCC4_3_1\"]').val(addZero($('.infoschaward .mt_awardsDate').eq(1).html()));
					var opt = $('select[name=\"cc_CCA25_1_1\"]').get(0).options;
					if ($('.infoschaward .mt_awardsName').eq(1).html() == '国家级') {
						opt[1].selected = true
					} else if ($('.infoschaward .mt_awardsName').eq(1).html() == '学校级') {
						opt[3].selected = true
					} else if ($('.infoschaward .mt_awardsName').eq(1).html() == '院系级') {
						opt[4].selected = true
					}
					if ($('.infoschaward').length > 2) {
						$('input[name=\"cc_CCF21_6_1\"]').val($('.infoschaward .mt_awardsName').eq(2).html());
						$('input[name=\"cc_CCC15_3_1\"]').val(addZero($('.infoschaward .mt_awardsDate').eq(2).html()));
						var opt = $('select[name=\"cc_CCA22_1_1\"]').get(0).options;
						if ($('.infoschaward .mt_awardsName').eq(1).html() == '国家级') {
							opt[1].selected = true
						} else if ($('.infoschaward .mt_awardsName').eq(1).html() == '学校级') {
							opt[3].selected = true
						} else if ($('.infoschaward .mt_awardsName').eq(1).html() == '院系级') {
							opt[4].selected = true
						}
					}
				}
			}
		} else if ($('#container h1').eq(0).text() == '工作或实习经历') {
			var j = 0;
			for (var i = 0; i < $('#container').find('.ci').length; i++) {
				if ($('.infofulltimejobs').length > i) {
					$('#container').find('.ci').eq(i).find('dl').eq(0).find('input').eq(0).val(addZero($('.infofulltimejobs .mt_startDate').eq(i).html()));
					$('#container').find('.ci').eq(i).find('dl').eq(1).find('input').eq(0).val(addZero($('.infofulltimejobs .mt_endDate').eq(i).html()));
					$('#container').find('.ci').eq(i).find('dl').eq(2).find('input').eq(0).val($('.infofulltimejobs .mt_companyName').eq(i).html());
					$('#container').find('.ci').eq(i).find('dl').eq(3).find('input').eq(0).val($('.infofulltimejobs .mt_department').eq(i).html());
					$('#container').find('.ci').eq(i).find('dl').eq(4).find('textarea').eq(0).val($('.infofulltimejobs .workContent').eq(i).html())
				} else {
					if ($('.infoparttimejobs').eq(j)) {
						$('#container').find('.ci').eq(i).find('dl').eq(0).find('input').eq(0).val(addZero($('.infoparttimejobs .mt_startDate').eq(j).html()));
						$('#container').find('.ci').eq(i).find('dl').eq(1).find('input').eq(0).val(addZero($('.infoparttimejobs .mt_endDate').eq(j).html()));
						$('#container').find('.ci').eq(i).find('dl').eq(2).find('input').eq(0).val($('.infoparttimejobs .mt_companyName').eq(j).html());
						$('#container').find('.ci').eq(i).find('dl').eq(3).find('input').eq(0).val($('.infoparttimejobs .mt_department').eq(j).html());
						$('#container').find('.ci').eq(i).find('dl').eq(4).find('textarea').eq(0).val($('.infoparttimejobs .workContent').eq(j).html());
						j++
					}
				}
			}
		} else if ($('#container h1').eq(0).text() == '实习或工作经历') {
			var j = 0;
			for (var i = 0; i < $('#container').find('.ci').length; i++) {
				if ($('.infofulltimejobs').length > i) {
					$('#container').find('.ci').eq(i).find('dl').eq(0).find('input').eq(0).val(addZero($('.infofulltimejobs .mt_startDate').eq(i).html()));
					$('#container').find('.ci').eq(i).find('dl').eq(1).find('input').eq(0).val(addZero($('.infofulltimejobs .mt_endDate').eq(i).html()));
					$('#container').find('.ci').eq(i).find('dl').eq(2).find('input').eq(0).val($('.infofulltimejobs .mt_companyName').eq(i).html());
					$('#container').find('.ci').eq(i).find('dl').eq(3).find('input').eq(0).val($('.infofulltimejobs .mt_positionName').eq(i).html());
					$('#container').find('.ci').eq(i).find('dl').eq(4).find('input').eq(0).val($('.infofulltimejobs .workDes').eq(i).html());
					$('#container').find('.ci').eq(i).find('dl').eq(5).find('textarea').eq(0).val($('.infofulltimejobs .workContent').eq(i).html())
				} else {
					if ($('.infoparttimejobs').eq(j)) {
						$('#container').find('.ci').eq(i).find('dl').eq(0).find('input').eq(0).val(addZero($('.infoparttimejobs .mt_startDate').eq(j).html()));
						$('#container').find('.ci').eq(i).find('dl').eq(1).find('input').eq(0).val(addZero($('.infoparttimejobs .mt_endDate').eq(j).html()));
						$('#container').find('.ci').eq(i).find('dl').eq(2).find('input').eq(0).val($('.infoparttimejobs .mt_companyName').eq(j).html());
						$('#container').find('.ci').eq(i).find('dl').eq(3).find('input').eq(0).val($('.infoparttimejobs .mt_positionName').eq(j).html());
						$('#container').find('.ci').eq(i).find('dl').eq(4).find('input').eq(0).val($('.infoparttimejobs .workDes').eq(j).html());
						$('#container').find('.ci').eq(i).find('dl').eq(5).find('textarea').eq(0).val($('.infoparttimejobs .workContent').eq(j).html());
						j++
					}
				}
			}
		} else if ($('#container h1').eq(0).text() == '奖惩情况') {
			for (var i = 0; i < $('#container').find('.ci').length; i++) {
				if ($('.infoschaward').length > i) {
					$('#container').find('.ci').eq(i).find('dl').eq(0).find('input').eq(0).val(addZero($('.infoschaward .mt_awardsDate').eq(i).html()));
					$('#container').find('.ci').eq(i).find('dl').eq(1).find('input').eq(0).val($('.infoschaward .mt_awardsName').eq(i).html());
					$('#container').find('.ci').eq(i).find('dl').eq(2).find('input').eq(0).val($('.infoschaward .mt_awardsType').eq(i).html());
					$('#container').find('.ci').eq(i).find('dl').eq(3).find('input').eq(0).val($('.infoschaward .mt_awardsDes').eq(i).html())
				}
			}
		} else if ($('#container h1').eq(0).text() == '所获荣誉') {
			if ($('#cc_CCF1_6_1').length && $('#cc_CCF1_6_1').attr('cname') == '荣誉名称') {
				for (var i = 0; i < $('.ci').length; i++) {
					if ($('.infoschaward').length > i) {
						$('#cc_CCF1_6_' + (i + 1)).val($('.infoschaward .mt_awardsName').eq(i).html());
						switch ($('.infoschaward .mt_awardsType').eq(i).html()) {
						case '国际级':
							document.getElementById('cc_Degree_1_1').options[1].selected = true;
							break;
						case '国家级':
							document.getElementById('cc_Degree_1_1').options[2].selected = true;
							break;
						case '省市级':
							document.getElementById('cc_Degree_1_1').options[3].selected = true;
							break;
						case '学校级':
							document.getElementById('cc_Degree_1_1').options[5].selected = true;
							break;
						case '院系级':
							document.getElementById('cc_Degree_1_1').options[6].selected = true;
							break;
						default:
							break
						}
						date = addZero($('.infoschaward .mt_awardsDate').eq(i).html()).split('-');
						selectFac(date[0], $('.ci').eq(i).find('dl').eq(2).find('select').eq(0));
						selectFac(date[1], $('.ci').eq(i).find('dl').eq(2).find('select').eq(1))
					}
				}
			}
		} else if ($('#container h1').eq(0).text() == '专业技能') {
			if ($('#ddl_CCE2_5_1').length && $('#ddl_CCE2_5_1').parent('dd').prev('dt').text() == '英语水平') {
				var maxlevel = 0;
				var skilllevel = 0;
				for (var i = 0; i < $('.infoEnglishSkill').length; i++) {
					if ($('.mt_skillEngLevel').eq(i).html() == '专业八级') {
						skilllevel = 6
					} else if ($('.mt_skillEngLevel').eq(i).html() == '专业四级') {
						skilllevel = 3
					} else if ($('.mt_skillEngLevel').eq(i).html() == '大学英语六级') {
						skilllevel = 2
					} else {
						skilllevel = 1
					}
					if (skilllevel > maxlevel) {
						maxlevel = skilllevel
					}
				}
				for (var i = 0; i < $('.infoOtEnglishSkil').length; i++) {
					if ($('.mt_otherSkillEngLevel').eq(i).html() == '托福') {
						skilllevel = 5
					} else if ($('.mt_otherSkillEngLevel').eq(i).html() == '雅思') {
						skilllevel = 4
					}
					if (skilllevel > maxlevel) {
						maxlevel = skilllevel
					}
				}
				var engskill = document.getElementById('ddl_CCE2_5_1');
				if (maxlevel == 6) {
					engskill.options[3].selected = true
				} else if (maxlevel == 5) {
					engskill.options[4].selected = true
				} else if (maxlevel == 4) {
					engskill.options[5].selected = true
				} else if (maxlevel == 3) {
					engskill.options[7].selected = true
				} else if (maxlevel == 2) {
					engskill.options[2].selected = true
				} else if (maxlevel == 1) {
					engskill.options[1].selected = true
				}
				for (var i = 0; i < $('.infoOtherSkill .mt_skillOtherLang').length; i++) {
					if (i == 0 && $('#ddl_CCE3_5_1').length && $('.infoOtherSkill .mt_skillOtherLang').eq(i).html()) {
						var osk = document.getElementById('ddl_CCE3_5_1');
						switch ($('.infoOtherSkill .mt_skillOtherLang').eq(i).html()) {
						case '德语':
							osk.options[1].selected = true;
							break;
						case '日语':
							osk.options[3].selected = true;
							break;
						case '法语':
							osk.options[2].selected = true;
							break;
						default:
							osk.options[4].selected = true;
							break
						}
						osk.dispatchEvent(event)
					} else if (i == 1 && $('#ddl_CCE4_5_1').length && $('.infoOtherSkill .mt_skillOtherLang').eq(i).html()) {
						var osk = document.getElementById('ddl_CCE4_5_1');
						switch ($('.infoOtherSkill .mt_skillOtherLang').eq(i).html()) {
						case '德语':
							osk.options[1].selected = true;
							break;
						case '日语':
							osk.options[3].selected = true;
							break;
						case '法语':
							osk.options[2].selected = true;
							break;
						default:
							osk.options[4].selected = true;
							break
						}
						osk.dispatchEvent(event)
					}
				}
				if ($('#cc_CCF2_6_1').length && $('#cc_CCF2_6_1').attr('cname') == '专业证书') {
					var text = '';
					for (var i = 0; i < $('.infoplcerti').length; i++) {
						text = text + '证书名称:' + $('.infoplcerti .mt_certificateName').eq(i).html() + ' 获得时间:' + $('.infoplcerti .mt_getDate').eq(i).html() + ' 颁发机构:' + $('.infoplcerti .mt_issuing').eq(i).html() + ' 证书描述:' + $('.infoplcerti .mt_certificateDes').eq(i).html() + ';'
					}
					$('#cc_CCF2_6_1').val(text)
				}
				if ($('#cc_CCF1_6_1').length && $('#cc_CCF1_6_1').attr('cname') == '其它技能') {
					$('#cc_CCF1_6_1').val($('#mt_hobbies').html())
				}
			}
		} else if ($('#container h1').eq(0).text() == '资格证书') {
			if ($('#cc_CCF7_6_1').length && $('#cc_CCF7_6_1').attr('cname') == '已取得资格证书') {
				var text = '';
				for (var i = 0; i < $('.infoplcerti').length; i++) {
					text = text + '证书名称:' + $('.infoplcerti .mt_certificateName').eq(i).html() + ' 获得时间:' + $('.infoplcerti .mt_getDate').eq(i).html() + ' 颁发机构:' + $('.infoplcerti .mt_issuing').eq(i).html() + ' 证书描述:' + $('.infoplcerti .mt_certificateDes').eq(i).html() + ';\\n'
				}
				$('#cc_CCF7_6_1').val(text)
			}
		} else if ($('#container h1').eq(0).text() == '自我评价') {
			if ($('#cc_CCF7_6_1').length && $('#cc_CCF7_6_1').attr('cname') == '兴趣爱好') {
				$('#cc_CCF7_6_1').val($('#mt_skill').html())
			}
			if ($('#cc_CCF8_6_1').length && $('#cc_CCF8_6_1').attr('cname') == '特长') {
				$('#cc_CCF8_6_1').val($('#mt_hobbies').html())
			}
		} else if ($('#container h1').eq(0).text() == 'Basic Information') {
			if ($('input[name=\"cc_CCA8_1_1\"]') && $('#realnameEn').html()) {
				$('input[name=\"cc_CCA8_1_1\"]').val($('#realnameEn').html())
			}
			if ($('input[name=\"cc_CCA9_1_1\"]') && $('#englishNameEn').html()) {
				$('input[name=\"cc_CCA9_1_1\"]').val($('#englishNameEn').html())
			}
			if ($('select[name=\"cc_CCA17_1_1\"]').length) {
				if ($('#mt_sexEn').html() && $('#mt_sexEn').html() == '男') {
					document.getElementById('cc_CCA17_1_1').options[1].selected = true
				}
				if ($('#mt_sexEn').html() && $('#mt_sexEn').html() == '女') {
					document.getElementById('cc_CCA17_1_1').options[2].selected = true
				}
			}
			if ($('input[name=\"cc_CCC11_3_1\"]') && $('#mt_birthEn').html()) {
				$('input[name=\"cc_CCC11_3_1\"]').val(addZero($('#mt_birthEn').html()))
			}
			if ($('select[name=\"cc_CCA18_1_1\"]').length) {
				if ($('#mt_maritalstatus').html() && $('#mt_maritalstatus').html() == '未婚') {
					document.getElementById('cc_CCA18_1_1').options[1].selected = true
				}
				if ($('#mt_maritalstatus').html() && $('#mt_maritalstatus').html() == '已婚') {
					document.getElementById('cc_CCA18_1_1').options[2].selected = true
				}
				if ($('#mt_maritalstatus').html() && $('#mt_maritalstatus').html() == '离婚') {
					document.getElementById('cc_CCA18_1_1').options[3].selected = true
				}
			}
			if ($('input[name=\"cc_CCA10_1_1\"]') && $('#mt_idCardEn').html()) {
				$('input[name=\"cc_CCA10_1_1\"]').val($('#mt_idCardEn').html())
			}
			if ($('select[name=\"cc_CCA19_1_1\"]').length) {
				if ($('#mt_polistatus').html() && $('#mt_polistatus').html() == '中共党员' || $('#mt_polistatus').html() && $('#mt_polistatus').html() == '中共预备党员') {
					document.getElementById('cc_CCA19_1_1').options[1].selected = true
				} else if ($('#mt_polistatus').html() && $('#mt_polistatus').html() == '共青团员') {
					document.getElementById('cc_CCA19_1_1').options[2].selected = true
				} else if ($('#mt_polistatus').html() && $('#mt_polistatus').html() == '无党派民主人士') {
					document.getElementById('cc_CCA19_1_1').options[3].selected = true
				} else {
					document.getElementById('cc_CCA19_1_1').options[4].selected = true
				}
			}
			if ($('#ddl_CCE10_5_1').length && $('#cc_CCE10_5_1').length && $('#mt_hukoucitynowEn').html() && $('#mt_hukoucitynowCityEn').html()) {
				var pro = document.getElementById('ddl_CCE10_5_1');
				var city = document.getElementById('cc_CCE10_5_1');
				var nowpro = $('#mt_hukoucitynowEn').html().toLowerCase();
				var nowcity = $('#mt_hukoucitynowCityEn').html().toLowerCase();
				var prostr;
				var citystr;
				if ($('#mt_hukoucitynowCityEn').html() == '深圳') {
					pro.options[4].selected = true;
					pro.dispatchEvent(event)
				} else {
					for (var i = 0; i < pro.options.length; i++) {
						prostr = $.trim(pro.options[i].innerHTML).toLowerCase();
						if (prostr.indexOf(nowpro, 0) != -1) {
							pro.options[i].selected = true;
							pro.dispatchEvent(event);
							for (var j = 0; j < city.options.length; j++) {
								citystr = $.trim(city.options[j].innerHTML).toLowerCase();
								if (citystr.indexOf(nowcity, 0) != -1) {
									city.options[j].selected = true;
									break
								}
							};
							break
						}
					}
				}
			}
			if ($('#ddl_CCE2_5_1').length && $('#cc_CCE2_5_1').length && $('#mt_livecityProEn').html() && $('#mt_livecityCityEn').html()) {
				var pro = document.getElementById('ddl_CCE2_5_1');
				var city = document.getElementById('cc_CCE2_5_1');
				var nowpro = $('#mt_livecityProEn').html().toLowerCase();
				var nowcity = $('#mt_livecityCityEn').html().toLowerCase();
				var prostr;
				var citystr;
				if ($('#mt_livecityCityEn').html() == '深圳' && pro.options[4].value == '深圳') {
					pro.options[4].selected = true;
					pro.dispatchEvent(event)
				} else {
					for (var i = 0; i < pro.options.length; i++) {
						prostr = $.trim(pro.options[i].innerHTML).toLowerCase();
						if (prostr.indexOf(nowpro, 0) != -1) {
							pro.options[i].selected = true;
							pro.dispatchEvent(event);
							for (var j = 0; j < city.options.length; j++) {
								citystr = $.trim(city.options[j].innerHTML).toLowerCase();
								if (citystr.indexOf(nowcity, 0) != -1) {
									city.options[j].selected = true;
									break
								}
							};
							break
						}
					}
				}
			}
			if ($('input[name=\"cc_CCA20_1_1\"]') && $('#mt_emailEn').html()) {
				$('input[name=\"cc_CCA20_1_1\"]').val($('#mt_emailEn').html())
			}
			if ($('input[name=\"cc_CCA11_1_1\"]') && $('#mt_phoneEn').html()) {
				$('input[name=\"cc_CCA11_1_1\"]').val($('#mt_phoneEn').html())
			}
			if ($('input[name=\"cc_CCA21_1_1\"]') && $('#mt_gudingtelEn').html()) {
				$('input[name=\"cc_CCA21_1_1\"]').val($('#mt_gudingtelEn').html())
			}
			if ($('input[name=\"cc_CCF3_6_1\"]') && $('#mt_addressEn1').html()) {
				$('input[name=\"cc_CCF3_6_1\"]').val($('#mt_addressEn1').html())
			}
			if ($('input[name=\"cc_CCA12_1_1\"]') && $('#mt_zipEn').html()) {
				$('input[name=\"cc_CCA12_1_1\"]').val($('#mt_zipEn').html())
			}
			if ($('input[name=\"cc_CCA22_1_1\"]') && $('#mt_jjlxr').html()) {
				$('input[name=\"cc_CCA22_1_1\"]').val($('#mt_jjlxr').html())
			}
			if ($('input[name=\"cc_CCA13_1_1\"]') && $('#mt_jjlxrtel').html()) {
				$('input[name=\"cc_CCA13_1_1\"]').val($('#mt_jjlxrtel').html())
			}
			if ($('input[name=\"cc_Cname_1_1\"]') && $('#realnameEn').html()) {
				$('input[name=\"cc_Cname_1_1\"]').val($('#realnameEn').html())
			}
			if ($('input[name=\"cc_Ename_1_1\"]') && $('#englishNameEn').html()) {
				$('input[name=\"cc_Ename_1_1\"]').val($('#englishNameEn').html())
			}
			if ($('select[name=\"cc_Gender_1_1\"]').length) {
				if ($('#mt_sexEn').html() && $('#mt_sexEn').html() == '男') {
					document.getElementById('cc_Gender_1_1').options[1].selected = true
				}
				if ($('#mt_sexEn').html() && $('#mt_sexEn').html() == '女') {
					document.getElementById('cc_Gender_1_1').options[2].selected = true
				}
			}
			if ($('input[name=\"cc_Birthday_3_1\"]') && $('#mt_birthEn').html()) {
				$('input[name=\"cc_Birthday_3_1\"]').val(addZero($('#mt_birthEn').html()))
			}
			if ($('select[name=\"cc_Marriage_1_1\"]').length) {
				if ($('#mt_maritalstatus').html() && $('#mt_maritalstatus').html() == '未婚') {
					document.getElementById('cc_Marriage_1_1').options[1].selected = true
				}
				if ($('#mt_maritalstatus').html() && $('#mt_maritalstatus').html() == '已婚') {
					document.getElementById('cc_Marriage_1_1').options[2].selected = true
				}
				if ($('#mt_maritalstatus').html() && $('#mt_maritalstatus').html() == '离婚') {
					document.getElementById('cc_Marriage_1_1').options[3].selected = true
				}
			}
			if ($('input[name=\"cc_IDCard_1_1\"]') && $('#mt_idCardEn').html()) {
				$('input[name=\"cc_IDCard_1_1\"]').val($('#mt_idCardEn').html())
			}
			if ($('select[name=\"cc_Party_1_1\"]').length) {
				if ($('#mt_polistatus').html() && $('#mt_polistatus').html() == '中共党员' || $('#mt_polistatus').html() && $('#mt_polistatus').html() == '中共预备党员') {
					document.getElementById('cc_Party_1_1').options[1].selected = true
				} else if ($('#mt_polistatus').html() && $('#mt_polistatus').html() == '共青团员') {
					document.getElementById('cc_Party_1_1').options[2].selected = true
				} else if ($('#mt_polistatus').html() && $('#mt_polistatus').html() == '无党派民主人士') {
					document.getElementById('cc_Party_1_1').options[3].selected = true
				} else {
					document.getElementById('cc_Party_1_1').options[4].selected = true
				}
			}
			if ($('#ddl_Hukou_1_1').length && $('#cc_Hukou_1_1').length && $('#mt_hukoucitynowEn').html() && $('#mt_hukoucitynowCityEn').html()) {
				var pro = document.getElementById('ddl_Hukou_1_1');
				var city = document.getElementById('cc_Hukou_1_1');
				var nowpro = $('#mt_hukoucitynowEn').html().toLowerCase();
				var nowcity = $('#mt_hukoucitynowCityEn').html().toLowerCase();
				var prostr;
				var citystr;
				if ($('#mt_hukoucitynowCityEn').html() == '深圳') {
					pro.options[4].selected = true;
					pro.dispatchEvent(event)
				} else {
					for (var i = 0; i < pro.options.length; i++) {
						prostr = $.trim(pro.options[i].innerHTML).toLowerCase();
						if (prostr.indexOf(nowpro, 0) != -1) {
							pro.options[i].selected = true;
							pro.dispatchEvent(event);
							for (var j = 0; j < city.options.length; j++) {
								citystr = $.trim(city.options[j].innerHTML).toLowerCase();
								if (citystr.indexOf(nowcity, 0) != -1) {
									city.options[j].selected = true;
									break
								}
							};
							break
						}
					}
				}
			}
			if ($('#ddl_City_1_1').length && $('#cc_City_1_1').length && $('#mt_livecityProEn').html() && $('#mt_livecityCityEn').html()) {
				var pro = document.getElementById('ddl_City_1_1');
				var city = document.getElementById('cc_City_1_1');
				var nowpro = $('#mt_livecityProEn').html().toLowerCase();
				var nowcity = $('#mt_livecityCityEn').html().toLowerCase();
				var prostr;
				var citystr;
				if ($('#mt_livecityCityEn').html() == '深圳' && pro.options[4].value == '深圳') {
					pro.options[4].selected = true;
					pro.dispatchEvent(event)
				} else {
					for (var i = 0; i < pro.options.length; i++) {
						prostr = $.trim(pro.options[i].innerHTML).toLowerCase();
						if (prostr.indexOf(nowpro, 0) != -1) {
							pro.options[i].selected = true;
							pro.dispatchEvent(event);
							for (var j = 0; j < city.options.length; j++) {
								citystr = $.trim(city.options[j].innerHTML).toLowerCase();
								if (citystr.indexOf(nowcity, 0) != -1) {
									city.options[j].selected = true;
									break
								}
							};
							break
						}
					}
				}
			}
			if ($('input[name=\"cc_Email_1_1\"]') && $('#mt_emailEn').html()) {
				$('input[name=\"cc_Email_1_1\"]').val($('#mt_emailEn').html())
			}
			if ($('input[name=\"cc_MobilePhone_1_1\"]') && $('#mt_phoneEn').html()) {
				$('input[name=\"cc_MobilePhone_1_1\"]').val($('#mt_phoneEn').html())
			}
			if ($('input[name=\"cc_Phone_1_1\"]') && $('#mt_gudingtelEn').html()) {
				$('input[name=\"cc_Phone_1_1\"]').val($('#mt_gudingtelEn').html())
			}
			if ($('input[name=\"cc_Address_5_1\"]') && $('#mt_addressEn1').html()) {
				$('input[name=\"cc_Address_5_1\"]').val($('#mt_addressEn1').html())
			}
			if ($('input[name=\"cc_ZipCode_1_1\"]') && $('#mt_zipEn').html()) {
				$('input[name=\"cc_ZipCode_1_1\"]').val($('#mt_zipEn').html())
			}
			if ($('input[name=\"cc_EmergentContact_1_1\"]') && $('#mt_jjlxr').html()) {
				$('input[name=\"cc_EmergentContact_1_1\"]').val($('#mt_jjlxr').html())
			}
			if ($('input[name=\"cc_Contact_1_1\"]') && $('#mt_jjlxrtel').html()) {
				$('input[name=\"cc_Contact_1_1\"]').val($('#mt_jjlxrtel').html())
			}
		} else if ($('#container h1').eq(0).text() == 'Education') {
			var eduary = [];
			for (var i = 0; i < $('.infopleduEn').length; i++) {
				eduary.push({
					id: i,
					year: $('.infopleduEn .mt_endYearY').eq(i).html()
				})
			}
			eduary.sort(function(a, b) {
				return b.year - a.year
			});
			eduary.forEach(function(item, index) {
				var id = item['id'];
				var eduinfo = $('.infopleduEn');
				var et = addZero(eduinfo.find('.mt_endYear').eq(id).html());
				var edu = eduinfo.find('.mt_degreeEn').eq(id).html();
				var rank0 = eduinfo.find('.mt_professionalranking').eq(id).html();
				var rank = getRankEn(rank0);
				var gpa = eduinfo.find('.mt_gpascore').eq(id).html();
				var major = eduinfo.find('.mt_majorEn').eq(id).html();
				if (index == 0) {
					if (edu.length > 0) {
						if ($('#cc_CCA1_1_1').length) {
							switch (edu) {
							case '学士':
							case '双学士':
								document.getElementById('cc_CCA1_1_1').options[6].selected = true;
								break;
							case '硕士':
								document.getElementById('cc_CCA1_1_1').options[7].selected = true;
								break;
							case '博士':
								document.getElementById('cc_CCA1_1_1').options[8].selected = true;
								break;
							default:
								document.getElementById('cc_CCA1_1_1').options[0].selected = true;
								break
							}
						}
						if ($('#cc_CCA23_1_1').length) {
							switch (edu) {
							case '学士':
							case '双学士':
								document.getElementById('cc_CCA23_1_1').options[6].selected = true;
								break;
							case '硕士':
								document.getElementById('cc_CCA23_1_1').options[7].selected = true;
								break;
							case '博士':
								document.getElementById('cc_CCA23_1_1').options[8].selected = true;
								break;
							default:
								document.getElementById('cc_CCA23_1_1').options[0].selected = true;
								break
							}
						}
					}
					if (et.length > 0) {
						if ($('#cc_GradDate_3_1').length) {
							$('#cc_GradDate_3_1').val(et)
						}
						if ($('#cc_CCC2_3_1').length) {
							$('#cc_CCC2_3_1').val(et)
						}
					}
					if (rank.length > 0) {
						if ($('#cc_Score_1_1').length) {
							selectFacc(rank, $('#cc_Score_1_1'))
						}
						if ($('#cc_CCA27_1_1').length) {
							selectFacc(rank, $('#cc_CCA27_1_1'))
						}
					}
					if (gpa.length > 0) {
						if ($('select[name=\"cc_CCA26_1_1\"]').length && $('#cc_CCA26_1_1').attr('cname') == 'GPA') {
							if (gpa >= 1 && gpa < 2) {
								document.getElementById('cc_CCA26_1_1').options[5].selected = true
							} else if (gpa >= 2 && gpa < 2.5) {
								document.getElementById('cc_CCA26_1_1').options[4].selected = true
							} else if (gpa >= 2.5 && gpa < 3) {
								document.getElementById('cc_CCA26_1_1').options[3].selected = true
							} else if (gpa >= 3 && gpa < 3.5) {
								document.getElementById('cc_CCA26_1_1').options[2].selected = true
							} else if (gpa > 3.5 && gpa <= 4.0) {
								document.getElementById('cc_CCA26_1_1').options[1].selected = true
							}
							document.getElementById('cc_CCA26_1_1').dispatchEvent(event)
						}
						if ($('#cc_CCA47_1_1') && $('#cc_CCA47_1_1').attr('cname') == 'Please specify your exact GPA') {
							$('#cc_CCA47_1_1').val(gpa)
						}
					}
					if (major.length > 0) {
						if ($('#cc_CCF4_6_1') && $('#cc_CCF4_6_1').attr('cname') == 'Main Courses') {
							$('#cc_CCF4_6_1').val(major)
						}
					}
				} else if (index == 1) {
					if (edu.length > 0) {
						if ($('#cc_Degree_1_1').length) {
							switch (edu) {
							case '学士':
							case '双学士':
								document.getElementById('cc_Degree_1_1').options[6].selected = true;
								break;
							case '硕士':
								document.getElementById('cc_Degree_1_1').options[7].selected = true;
								break;
							case '博士':
								document.getElementById('cc_Degree_1_1').options[8].selected = true;
								break;
							default:
								document.getElementById('cc_Degree_1_1').options[0].selected = true;
								break
							}
						}
						if ($('#cc_CCA29_1_1').length) {
							switch (edu) {
							case '学士':
							case '双学士':
								document.getElementById('cc_CCA29_1_1').options[6].selected = true;
								break;
							case '硕士':
								document.getElementById('cc_CCA29_1_1').options[7].selected = true;
								break;
							case '博士':
								document.getElementById('cc_CCA29_1_1').options[8].selected = true;
								break;
							default:
								document.getElementById('cc_CCA29_1_1').options[0].selected = true;
								break
							}
						}
					}
					if (et.length > 0) {
						if ($('#cc_CCC1_3_1').length) {
							$('#cc_CCC1_3_1').val(et)
						}
						if ($('#cc_CCC12_3_1').length) {
							$('#cc_CCC12_3_1').val(et)
						}
					}
					if (rank.length > 0) {
						if ($('#cc_CCA14_1_1').length) {
							selectFacc(rank, $('#cc_CCA14_1_1'))
						}
						if ($('#cc_CCA42_1_1').length) {
							selectFacc(rank, $('#cc_CCA42_1_1'))
						}
					}
					if (gpa.length > 0) {
						if ($('select[name=\"cc_CCA31_1_1\"]').length && $('#cc_CCA31_1_1').attr('cname') == 'GPA2') {
							if (gpa >= 1 && gpa < 2) {
								document.getElementById('cc_CCA31_1_1').options[5].selected = true
							} else if (gpa >= 2 && gpa < 2.5) {
								document.getElementById('cc_CCA31_1_1').options[4].selected = true
							} else if (gpa >= 2.5 && gpa < 3) {
								document.getElementById('cc_CCA31_1_1').options[3].selected = true
							} else if (gpa >= 3 && gpa < 3.5) {
								document.getElementById('cc_CCA31_1_1').options[2].selected = true
							} else if (gpa > 3.5 && gpa <= 4.0) {
								document.getElementById('cc_CCA31_1_1').options[1].selected = true
							}
							document.getElementById('cc_CCA31_1_1').dispatchEvent(event)
						}
						if ($('#cc_CCA37_1_1') && $('#cc_CCA37_1_1').attr('cname') == 'Please specify your exact GPA2') {
							$('#cc_CCA37_1_1').val(gpa)
						}
					}
					if (major.length > 0) {
						if ($('#cc_CCF5_6_1') && $('#cc_CCF5_6_1').attr('cname') == 'Main Courses2') {
							$('#cc_CCF5_6_1').val(major)
						}
					}
				}
			})
		} else if ($('#container h1').eq(0).text() == 'Other Information') {
			if ($('#cc_CCF6_6_1').length && $('#cc_CCF6_6_1').attr('cname') == 'Self Assessment') {
				$('#cc_CCF6_6_1').val($('#mt_selfIntro').html())
			}
			if ($('#cc_CCF7_6_1').length && $('#cc_CCF7_6_1').attr('cname') == 'Scholarship Information') {
				var str = '';
				for (var i = 0; i < $('.infoschawardEn').length; i++) {
					str = str + '获奖名称：' + $('.infoschawardEn .mt_awardsNameEn').eq(i).html() + ';获奖类型：' + $('.infoschawardEn .mt_awardsTypeEn').eq(i).html() + ';获奖时间：' + $('.infoschawardEn .mt_awardsDate').eq(i).html() + '; '
				}
				$('#cc_CCF7_6_1').val(str)
			}
		}
		if ($('.Fm').length) {
			if ($('#base_name').length) {
				$('input[id=\"base_name\"]').val($('#mt_name').html());
				if ($('#mt_sex').html() == '男') {
					$($('#base_sex_0').click())
				} else {
					$($('#base_sex_1').click())
				}
				$('input[id=\"base_birthday_input\"]').val($('#mt_birth').html());
				$('input[id=\"tele\"]').val($('#mt_tel').html());
				$('input[id=\"base_email\"]').val($('#mt_email').html())
			}
			if ($('#edu_schoolname_index').length) {
				var index = $('#education').find('.bd').length - 1;
				$('input[id=\"edu_timefrom_input\"]').val($('.infopledu .mt_startYear').eq(index).html());
				$('input[id=\"edu_timeto_input\"]').val($('.infopledu .mt_endYear').eq(index).html());
				switch ($('.mt_education').eq(index).html()) {
				case '大学本科-一本':
				case '大学本科-二本':
				case '大学本科-三本':
				case '海外本科':
					$('#edu_degree_list').find('input').eq(0).val('本科');
					break;
				case '硕士研究生':
					$('#edu_degree_list').find('input').eq(0).val('硕士');
					break;
				case '博士研究生':
					$('#edu_degree_list').find('input').eq(0).val('博士');
					break;
				case 'MBA':
					$('#edu_degree_list').find('input').eq(0).val('MBA');
					break;
				case '大学专科':
					$('#edu_degree_list').find('input').eq(0).val('大专');
					break;
				default:
					break
				}
				$('input[id=\"edu_schoolname\"]').val($('.infopledu .mt_schoolName').eq(index).html());
				$('input[id=\"edu_majordes\"]').val($('.infopledu .mt_professional').eq(index).html())
			}
			if ($('#work_compname').length) {
				var index = $('#work').find('.bd').length - 1;
				if (index >= $('.infoparttimejobs').length) {
					$('input[id=\"work_timefrom_input\"]').val($('.infofulltimejobs .mt_startDate').eq(index - $('.infoparttimejobs').length).html());
					$('input[id=\"work_timeto_input\"]').val($('.infofulltimejobs .mt_endDate').eq(index - $('.infoparttimejobs').length).html());
					$('input[id=\"work_compname\"]').val($('.infofulltimejobs .mt_companyName').eq(index - $('.infoparttimejobs').length).html());
					$('input[id=\"work_position\"]').val($('.infofulltimejobs .mt_positionName').eq(index - $('.infoparttimejobs').length).html());
					switch ($('.infofulltimejobs .mt_companySize').eq(index - $('.infoparttimejobs').length).html()) {
					case '少于50人':
						$('#work_companysize_list').find('input').eq(0).val('少于50人');
						break;
					case '50-149人':
						$('#work_companysize_list').find('input').eq(0).val('50-150人');
						break;
					case '150-499人':
						$('#work_companysize_list').find('input').eq(0).val('150-500人');
						break;
					case '500-999人':
						$('#work_companysize_list').find('input').eq(0).val('500-1000人');
						break;
					case '1000-9999人':
						$('#work_companysize_list').find('input').eq(0).val('1000-5000人');
						break;
					case '10000人以上':
						$('#work_companysize_list').find('input').eq(0).val('10000人以上');
						break;
					default:
						break
					}
					$('input[id=\"work_department\"]').val($('.infofulltimejobs .mt_department').eq(index - $('.infoparttimejobs').length).html());
					switch ($('.infofulltimejobs .mt_companyproperty').eq(index - $('.infoparttimejobs').length).html()) {
					case '外资-欧美':
						$('#work_companytype_list').find('input').eq(0).val('外资（欧美）');
						break;
					case '外资-非欧美':
						$('#work_companytype_list').find('input').eq(0).val('外资（非欧美）');
						break;
					case '合资-欧美':
					case '合资-非欧美':
						$('#work_companytype_list').find('input').eq(0).val('合资');
						break;
					case '国企':
						$('#work_companytype_list').find('input').eq(0).val('国企');
						break;
					case '民营公司':
						$('#work_companytype_list').find('input').eq(0).val('民营公司');
						break;
					case '上市公司':
						$('#work_companytype_list').find('input').eq(0).val('上市公司');
						break;
					case '创业公司':
						$('#work_companytype_list').find('input').eq(0).val('创业公司');
						break;
					default:
						break
					}
					$('textarea[id=\"work_describe\"]').val($('.infofulltimejobs .workDes').eq(index - $('.infoparttimejobs').length).html())
				} else {
					$('input[id=\"work_timefrom_input\"]').val($('.infoparttimejobs .mt_startDate').eq(index).html());
					$('input[id=\"work_timeto_input\"]').val($('.infoparttimejobs .mt_endDate').eq(index).html());
					$('input[id=\"work_compname\"]').val($('.infoparttimejobs .mt_companyName').eq(index).html());
					$('input[id=\"work_position\"]').val($('.infoparttimejobs .mt_positionName').eq(index).html());
					switch ($('.infoparttimejobs .mt_companySize').eq(index).html()) {
					case '少于50人':
						$('#work_companysize_list').find('input').eq(0).val('少于50人');
						break;
					case '50-149人':
						$('#work_companysize_list').find('input').eq(0).val('50-150人');
						break;
					case '150-499人':
						$('#work_companysize_list').find('input').eq(0).val('150-500人');
						break;
					case '500-999人':
						$('#work_companysize_list').find('input').eq(0).val('500-1000人');
						break;
					case '1000-9999人':
						$('#work_companysize_list').find('input').eq(0).val('1000-5000人');
						break;
					case '10000人以上':
						$('#work_companysize_list').find('input').eq(0).val('10000人以上');
						break;
					default:
						break
					}
					$('input[id=\"work_department\"]').val($('.infoparttimejobs .mt_department').eq(index).html());
					switch ($('.infoparttimejobs .mt_companyproperty').eq(index).html()) {
					case '外资-欧美':
						$('#work_companytype_list').find('input').eq(0).val('外资（欧美）');
						break;
					case '外资-非欧美':
						$('#work_companytype_list').find('input').eq(0).val('外资（非欧美）');
						break;
					case '合资-欧美':
					case '合资-非欧美':
						$('#work_companytype_list').find('input').eq(0).val('合资');
						break;
					case '国企':
						$('#work_companytype_list').find('input').eq(0).val('国企');
						break;
					case '民营公司':
						$('#work_companytype_list').find('input').eq(0).val('民营公司');
						break;
					case '上市公司':
						$('#work_companytype_list').find('input').eq(0).val('上市公司');
						break;
					case '创业公司':
						$('#work_companytype_list').find('input').eq(0).val('创业公司');
						break;
					default:
						break
					}
					$('textarea[id=\"work_describe\"]').val($('.infoparttimejobs .workDes').eq(index).html())
				}
			}
			if ($('#pro_name').length) {
				var index = $('#project').find('.bd').length - 1;
				$('input[id=\"pro_starttime_input\"]').val($('.infoproject .mt_prostarttime').eq(index).html());
				$('input[id=\"pro_endtime_input\"]').val($('.infoproject .mt_proendtime').eq(index).html());
				$('input[id=\"pro_name\"]').val($('.infoproject .mt_projectName').eq(index).html());
				$('textarea[id=\"pro_describe\"]').val($('.infoproject .mt_projectRemark').eq(index).html());
				$('textarea[id=\"pro_function\"]').val($('.infoproject .mt_projectDuty').eq(index).html())
			}
			if ($('#bonus_name').length) {
				var index = $('#schoolaward').find('.bd').length - 1;
				$('input[id=\"bonus_time_input\"]').val($('.infoschaward .mt_awardsDate').eq(index).html());
				$('input[id=\"bonus_name\"]').val($('.infoschaward .mt_awardsName').eq(index).html());
				$('input[id=\"bonus_class\"]').val($('.infoschaward .mt_awardsType').eq(index).html())
			}
			if ($('#prac_name').length) {
				var index = $('#schooljob').find('.bd').length - 1;
				var datestart = $('.infoschoolclub .mt_startDate').eq(index).html().split('-');
				$('input[id=\"prac_starttime_input\"]').val(datestart[0] + '-' + datestart[1]);
				var dateend = $('.infoschoolclub .mt_endDate').eq(index).html().split('-');
				$('input[id=\"prac_endtime_input\"]').val(dateend[0] + '-' + dateend[1]);
				$('input[id=\"prac_name\"]').val($('.infoschoolclub .mt_positionName').eq(index).html());
				$('textarea[id=\"prac_describe\"]').val($('.infoschoolclub .mt_workDes').eq(index).html())
			}
			if ($('#cert_name').length) {
				var index = $('#skillcertification').find('.bd').length - 1;
				$('input[id=\"cert_getdate_input\"]').val($('.infoplcerti .mt_getDate').eq(index).html());
				$('input[id=\"cert_name\"]').val($('.infoplcerti .mt_certificateName').eq(index).html())
			}
			if ($('#train_lesson').length) {
				var index = $('#skilltrain').find('.bd').length - 1;
				$('input[id=\"train_timefrom_input\"]').val($('.infotraining .mt_startDate').eq(index).html());
				$('input[id=\"train_timeto_input\"]').val($('.infotraining .mt_endDate').eq(index).html());
				$('input[id=\"train_lesson\"]').val($('.infotraining .mt_trainingName').eq(index).html());
				$('input[id=\"train_name\"]').val($('.infotraining .mt_trainingCompany').eq(index).html());
				$('input[id=\"train_place\"]').val($('.infotraining .mt_trainingPlace').eq(index).html());
				$('textarea[id=\"train_describe\"]').val($('.infotraining .mt_trainingDes').eq(index).html())
			}
		}
		$('#base_area_click').trigger('click');
		if ($('#base_area_input') && $('#mt_livecity_city').html()) {
			var length = $('#base_area_click_center_right_list_000000').find('em').length;
			for (var i = 0; i < length; i++) {
				if ($('#mt_livecity_city').html() == $('#base_area_click_center_right_list_000000').find('em').eq(i).html()) {
					$('#base_area_click_center_right_list_000000').find('em').eq(i).trigger('click');
					$('#base_area_click_center_right_list_000000').find('em').eq(i).parent().parent().next().find('em').eq(0).trigger('click')
				}
			}
		}
		$('#base_workyear_input').trigger('click');
		var startData = $('#exp-list').find('.mt_startDate').eq(0).html().split('-');
		var startYear = startData[0];
		var length = $('#base_workyear_calendar_yeardiv').find('span').length;
		for (var i = 0; i < length; i++) {
			if ($('#base_workyear_calendar_yeardiv').find('span').eq(i).html() == startYear) {
				$('#base_workyear_calendar_yeardiv').find('span').eq(i).trigger('click')
			}
		}
		if ($('#int_expectarea_input') && $('#mt_expectcity_city').html()) {
			$('#int_expectarea_input').val($('#mt_expectcity_city').html())
		}
		if ($('#int_selfintro') && $('#mt_selfIntro').html()) {
			$('#int_selfintro').val($('#mt_selfIntro').html())
		}
		if ($('#base_country_input') && $('#mt_native_city').html()) {
			$('#base_country_input').val($('#mt_native_city').html())
		}
		if ($('#base_marriage_list').find('input') && $('#mt_maritalstatus').html()) {
			$('#base_marriage_list').find('input').val($('#mt_maritalstatus').html())
		}
		if ($('#base_idcard') && $('#mt_id').html()) {
			$('#base_idcard').val($('#mt_id').html())
		}
		if ($('#base_politicsstatus_list').find('input') && $('#mt_polistatus').html()) {
			$('#base_politicsstatus_list').find('input').val($('#mt_polistatus').html())
		}
		if ($('#base_contacttype_list')) {
			switch ($('#base_contacttype_list').find('input').val()) {
			case '家庭电话':
				$('#base_othercontact').val($('#mt_gudingtel').html());
				break;
			case '公司电话':
				$('#base_othercontact').val();
				break;
			case 'QQ号':
				$('#base_othercontact').val($('#mt_qqname').html());
				break;
			case '微信':
				$('#base_othercontact').val($('#mt_wxname').html());
				break
			}
		}
		if ($('#base_stature') && $('#mt_height').html()) {
			$('#base_stature').val($('#mt_height').html())
		}
		if ($('#base_address') && $('#mt_livecity_city').html()) {
			$('#base_address').val($('#mt_livecity_city').html())
		}
		if ($('#base_zipcode') && $('#mt_zip').html()) {
			$('#base_zipcode').val($('#mt_zip').html())
		}
		if ($('#base_homepage') && $('#mt_profile').html()) {
			$('#base_homepage').val($('#mt_profile').html())
		}
		if ($('select[cname=\"英语水平\"]') && $('#skill-list .mt_skillEngLevel').last().html()) {
			let engLevel = $('select[cname=\"英语水平\"]')[0];
			switch ($('#skill-list .mt_skillEngLevel').last().html()) {
			case '大学英语四级':
				engLevel.options[1].selected = true;
				engLevel.dispatchEvent(event);
				break;
			case '大学英语六级':
				engLevel.options[2].selected = true;
				engLevel.dispatchEvent(event);
				break;
			case '专业四级':
				engLevel.options[3].selected = true;
				engLevel.dispatchEvent(event);
				break;
			case '专业八级':
				break
			}
		}
		if ($('input[cname=\"英语分数\"]') && $('#skill-list .mt_skillEngSorce').last().html()) {
			$('input[cname=\"英语分数\"]').val($('#skill-list .mt_skillEngSorce').last().html())
		}
		if ($('#container h1').eq(0).text() == '奖励、奖学金') {
			if ($('#ddl_CCE1_5_1').length && $('#schawards-list .mt_awardsType').eq(0).html()) {
				let awardsType = $('#ddl_CCE1_5_1')[0];
				switch ($('#schawards-list .mt_awardsType').eq(0).html()) {
				case '国际级':
					awardsType.options[1].selected = true;
					break;
				case '国家级':
					awardsType.options[2].selected = true;
					break;
				case '省市级':
					awardsType.options[3].selected = true;
					break;
				case '学校级':
					awardsType.options[4].selected = true;
					break;
				case '院系级':
					awardsType.options[4].selected = true;
					break
				}
			}
			if ($('#cc_CCA11_1_1').length && $('#schawards-list .mt_awardsName').eq(0).html()) {
				$('#cc_CCA11_1_1').val($('#schawards-list .mt_awardsName').eq(0).html())
			}
			if ($('#cc_CCC12_3_1').length && $('#schawards-list .mt_awardsDate').eq(0).html()) {
				$('#cc_CCC12_3_1').val(formatDate($('#schawards-list .mt_awardsDate').eq(0).html(), 2) + '-01')
			}
		}
		if ($('#container h1').eq(0).text() == '实习/全职工作经验') {
			if ($('#cc_CCA1_1_1').length && $('#exp-list .mt_workcat').eq(0).html()) {
				let workcat = $('#cc_CCA1_1_1')[0];
				switch ($('#exp-list .mt_workcat').eq(0).html()) {
				case '实习':
					workcat.options[3].selected = true;
					break;
				case '全职':
					workcat.options[1].selected = true;
					break
				}
			}
			if ($('#cc_CCA2_1_1').length && $('#exp-list .mt_positionName').eq(0).html()) {
				$('#cc_CCA2_1_1').val($('#exp-list .mt_positionName').eq(0).html())
			}
			if ($('#cc_CCC1_3_1').length && $('#exp-list .mt_startDate').eq(0).html()) {
				$('#cc_CCC1_3_1').val(formatDate($('#exp-list .mt_startDate').eq(0).html(), 2) + '-01')
			}
			if ($('#cc_CCC2_3_1').length && $('#exp-list .mt_endDate').eq(0).html()) {
				$('#cc_CCC2_3_1').val(formatDate($('#exp-list .mt_endDate').eq(0).html(), 2) + '-01')
			}
			if ($('#cc_CCF1_6_1').length && $('#exp-list .workDes').eq(0).html()) {
				$('#cc_CCF1_6_1').val($('#exp-list .workDes').eq(0).html())
			}
		}
		if ($('#container h1').html() == '校园活动经历' || $('#container h1').html() == '学生实践/项目经验') {
			let length = $('#pro-list .infopl').length;
			for (let i = 0; i < length; i++) {
				if ($('input[ename=\"Start Date\"]').eq(i) && $('#pro-list .mt_prostarttime').eq(i).html()) {
					$('input[ename=\"Start Date\"]').eq(i).val(formatDate($('#pro-list .mt_prostarttime').eq(i).html()))
				}
				if ($('input[ename=\"End Date\"]').eq(i) && $('#pro-list .mt_proendtime').eq(i).html()) {
					$('input[ename=\"End Date\"]').eq(i).val(formatDate($('#pro-list .mt_proendtime').eq(i).html()))
				}
				if ($('input[cname=\"实践活动/项目名称\"]').eq(i) && $('#pro-list .mt_proendtime').eq(i).html()) {
					$('input[cname=\"实践活动/项目名称\"]').eq(i).val(formatDate($('#pro-list .mt_proendtime').eq(i).html()))
				}
				if ($('textarea[ename=\"Responsibility\"]').eq(i) && $('#pro-list .mt_proList').eq(i).html()) {
					$('textarea[ename=\"Responsibility\"]').eq(i).val($('#pro-list .mt_proList').eq(i).html())
				}
			}
		}
		if ($('#container h1').html() == '社会实习经验') {
			let length = $('#exp-list .infopl').length;
			if ($('#container input').eq(0) && $('#exp-list .mt_startDate').eq(0).html()) {
				$('#container input').eq(0).val(formatDate($('#exp-list .mt_startDate').eq(0).html()))
			}
			if ($('#container input').eq(1) && $('#exp-list .mt_endDate').eq(0).html()) {
				$('#container input').eq(1).val(formatDate($('#exp-list .mt_endDate').eq(0).html()))
			}
			if ($('#container input').eq(2) && $('#exp-list .mt_startDate').eq(1).html()) {
				$('#container input').eq(2).val(formatDate($('#exp-list .mt_startDate').eq(1).html()))
			}
			if ($('#container input').eq(3) && $('#exp-list .mt_endDate').eq(1).html()) {
				$('#container input').eq(3).val(formatDate($('#exp-list .mt_endDate').eq(1).html()))
			}
			if ($('#container textarea').eq(0) && $('#exp-list .mt_workList').eq(0).html()) {
				$('#container textarea').eq(0).val(formatDate($('#exp-list .mt_workList').eq(0).html()))
			}
			if ($('#container textarea').eq(1) && $('#exp-list .mt_workList').eq(1).html()) {
				$('#container textarea').eq(1).val(formatDate($('#exp-list .mt_workList').eq(1).html()))
			}
		}
		if ($('textarea[cname=\"自我评价\"]')) {
			$('textarea[cname=\"自我评价\"]').val($('#mt_selfIntro').html())
		}
		if($('#container h1').text() == '教育经历'){
			let length = $('#edu-list .mt_education').length;
			for(let i=0; i<length; i++){
				switch($('#edu-list .mt_education').eq(i).html()){
					case '博士研究生':
		                $('#ddl_School_1_1')[0].options[0].selected = true;
		            	if($('input[cname=\"博士其他学校\"]')){
		                	$('input[cname=\"博士其他学校\"]').val('');
		                }
		                if($('input[cname=\"开始时间（博士）\"]') && $('#edu-list .mt_startYear').eq(i).html()){
		                	$('input[cname=\"开始时间（博士）\"]').val(formatDate($('#edu-list .mt_startYear').eq(i).html(), 2) + '-01');
		                }
		                if($('input[cname=\"毕业时间（博士）\"]') && $('#edu-list .mt_endYear').eq(i).html()){
		                	$('input[cname=\"毕业时间（博士）\"]').val(formatDate($('#edu-list .mt_endYear').eq(i).html(), 2) + '-01');
		                }
		                if($('input[cname=\"博士开始时间\"]') && $('#edu-list .mt_startYear').eq(i).html()){
		                	$('input[cname=\"博士开始时间\"]').val(formatDate($('#edu-list .mt_startYear').eq(i).html(), 2) + '-01');
		                }
		                if($('input[cname=\"博士毕业时间\"]') && $('#edu-list .mt_endYear').eq(i).html()){
		                	$('input[cname=\"博士毕业时间\"]').val(formatDate($('#edu-list .mt_endYear').eq(i).html(), 2) + '-01');
		                }
		                if($('input[cname=\"学院（博士）\"]') && $('#edu-list .mt_academy').eq(i).html()){
		                	$('input[cname=\"学院（博士）\"]').val($('#edu-list .mt_academy').eq(i).html());
		                }
		                if($('input[cname=\"博士学院\"]') && $('#edu-list .mt_academy').eq(i).html()){
		                	$('input[cname=\"博士学院\"]').val($('#edu-list .mt_academy').eq(i).html());
		                }
		                if($('input[cname=\"博士第一专业\"]') && $('#edu-list .mt_professional').eq(i).html()){
		                	$('input[cname=\"博士第一专业\"]').val($('#edu-list .mt_professional').eq(i).html());
		                }
		                if($('select[cname=\"博士学习成绩排名\"]') && $('#edu-list .mt_classranking').eq(i).html()){
		                	let level = $('select[cname=\"博士学习成绩排名\"]')[0].options;
		                	switch($('#edu-list .mt_classranking').eq(i).html()){
		                		case '前5%':
			                        level[1].selected = true;
			                        break;
			                    case '前10%':
			                    case '前20%':
			                        level[2].selected = true;
			                        break;
			                    case '前30%':
			                    case '前40%':
			                    case '前50%':
			                        level[3].selected = true;
			                        break;
			                    default:
			                        level[4].selected = true;
			                        break
		                	}
		                	
		                }
		                if($('input[cname=\"博士第二专业\"]')){
		                	$('input[cname=\"博士第二专业\"]').val('');
		                }
		                break;
		            case '硕士研究生':
		                $('#ddl_School_1_1')[0].options[0].selected = true;
		            	if($('input[cname=\"硕士其他学校\"]')){
		                	$('input[cname=\"硕士其他学校\"]').val('');
		                }
		                if($('input[cname=\"开始时间（硕士）\"]') && $('#edu-list .mt_startYear').eq(i).html()){
		                	$('input[cname=\"开始时间（硕士）\"]').val(formatDate($('#edu-list .mt_startYear').eq(i).html(), 2) + '-01');
		                }
		                if($('input[cname=\"毕业时间（硕士）\"]') && $('#edu-list .mt_endYear').eq(i).html()){
		                	$('input[cname=\"毕业时间（硕士）\"]').val(formatDate($('#edu-list .mt_endYear').eq(i).html(), 2) + '-01');
		                }
		                if($('input[cname=\"硕士开始时间\"]') && $('#edu-list .mt_startYear').eq(i).html()){
		                	$('input[cname=\"硕士开始时间\"]').val(formatDate($('#edu-list .mt_startYear').eq(i).html(), 2) + '-01');
		                }
		                if($('input[cname=\"硕士毕业时间\"]') && $('#edu-list .mt_endYear').eq(i).html()){
		                	$('input[cname=\"硕士毕业时间\"]').val(formatDate($('#edu-list .mt_endYear').eq(i).html(), 2) + '-01');
		                }
		                if($('input[cname=\"学院（硕士）\"]') && $('#edu-list .mt_academy').eq(i).html()){
		                	$('input[cname=\"学院（硕士）\"]').val($('#edu-list .mt_academy').eq(i).html());
		                }
		                if($('input[cname=\"硕士学院\"]') && $('#edu-list .mt_academy').eq(i).html()){
		                	$('input[cname=\"硕士学院\"]').val($('#edu-list .mt_academy').eq(i).html());
		                }
		                if($('input[cname=\"硕士第一专业\"]') && $('#edu-list .mt_professional').eq(i).html()){
		                	$('input[cname=\"硕士第一专业\"]').val($('#edu-list .mt_professional').eq(i).html());
		                }
		                if($('select[cname=\"硕士学习成绩排名\"]') && $('#edu-list .mt_classranking').eq(i).html()){
		                	let level = $('select[cname=\"硕士学习成绩排名\"]')[0].options;
		                	switch($('#edu-list .mt_classranking').eq(i).html()){
		                		case '前5%':
			                        level[1].selected = true;
			                        break;
			                    case '前10%':
			                    case '前20%':
			                        level[2].selected = true;
			                        break;
			                    case '前30%':
			                    case '前40%':
			                    case '前50%':
			                        level[3].selected = true;
			                        break;
			                    default:
			                        level[4].selected = true;
			                        break
		                	}
		                	
		                }
		                if($('input[cname=\"硕士第二专业\"]')){
		                	$('input[cname=\"硕士第二专业\"]').val('');
		                }
		                break;
		            case '海外本科':
		            case '大学本科-一本':
		            case '大学本科-二本':
		            case '大学本科-三本':
		            	$('#ddl_School_1_1')[0].options[0].selected = true;
		            	if($('input[cname=\"本科其他学校\"]')){
		                	$('input[cname=\"本科其他学校\"]').val('');
		                }
		                if($('input[cname=\"本科开始时间\"]') && $('#edu-list .mt_startYear').eq(i).html()){
		                	$('input[cname=\"本科开始时间\"]').val(formatDate($('#edu-list .mt_startYear').eq(i).html(), 2) + '-01');
		                }
		                if($('input[cname=\"开始时间（本科）\"]') && $('#edu-list .mt_startYear').eq(i).html()){
		                	$('input[cname=\"开始时间（本科）\"]').val(formatDate($('#edu-list .mt_startYear').eq(i).html(), 2) + '-01');
		                }
		                if($('input[cname=\"本科结束时间\"]') && $('#edu-list .mt_endYear').eq(i).html()){
		                	$('input[cname=\"本科结束时间\"]').val(formatDate($('#edu-list .mt_endYear').eq(i).html(), 2) + '-01');
		                }
		                if($('input[cname=\"毕业时间（本科）\"]') && $('#edu-list .mt_endYear').eq(i).html()){
		                	$('input[cname=\"毕业时间（本科）\"]').val(formatDate($('#edu-list .mt_endYear').eq(i).html(), 2) + '-01');
		                }
		                if($('input[cname=\"本科学院\"]') && $('#edu-list .mt_academy').eq(i).html()){
		                	$('input[cname=\"本科学院\"]').val($('#edu-list .mt_academy').eq(i).html());
		                }
		                if($('input[cname=\"学院（本科）\"]') && $('#edu-list .mt_academy').eq(i).html()){
		                	$('input[cname=\"学院（本科）\"]').val($('#edu-list .mt_academy').eq(i).html());
		                }
		                if($('input[cname=\"本科第一专业\"]') && $('#edu-list .mt_professional').eq(i).html()){
		                	$('input[cname=\"本科第一专业\"]').val($('#edu-list .mt_professional').eq(i).html());
		                }
		                if($('select[cname=\"本科学历\"]')){
		                	$('select[cname=\"本科学历\"]')[0].options[1].selected = true;
		                }
		                if($('select[cname=\"本科学习成绩排名\"]') && $('#edu-list .mt_classranking').eq(i).html()){
		                	let level = $('select[cname=\"本科学习成绩排名\"]')[0].options;
		                	switch($('#edu-list .mt_classranking').eq(i).html()){
		                		case '前5%':
			                        level[1].selected = true;
			                        break;
			                    case '前10%':
			                    case '前20%':
			                        level[2].selected = true;
			                        break;
			                    case '前30%':
			                    case '前40%':
			                    case '前50%':
			                        level[3].selected = true;
			                        break;
			                    default:
			                        level[4].selected = true;
			                        break
		                	}
		                	
		                }
		                if($('input[cname=\"本科第二专业\"]')){
		                	$('input[cname=\"本科第二专业\"]').val('');
		                }
		                break;
		            
				}
			}
			
		}
		
		//家庭信息
		if($('#container h1').text() == '家庭信息' || $('#container h1').text() == '家庭及身体情况' || $('#container h1').text() == '直系亲属' || $('#container h1').text() == '家庭关系' || $('#container h1').text() == '家庭情况及主要社会关系' || $('#container h1').text() == '家庭关系'){
			if($('#cc_CCF1_6_1') && $('#mt_fmname').html()){
				$('#cc_CCF1_6_1').val($('#mt_fmname').html());
			}
			if($('#cc_CCF2_6_1') && $('#mt_fmrelation').html()){
				$('#cc_CCF2_6_1').val($('#mt_fmrelation').html());
			}
			if($('#cc_CCF3_6_1') && $('#mt_fmwork').html()){
				$('#cc_CCF3_6_1').val($('#mt_fmwork').html());
			}
			if($('#cc_CCA1_1_1').attr('cname') == '成员关系' && $('#mt_fmrelation').html()){
				$('#cc_CCA1_1_1').val($('#mt_fmrelation').html());
			}
			if($('#cc_CCA1_1_1') && $('#cc_CCA1_1_1').attr('cname') == '姓名' && $('#mt_fmname').html()){
				$('#cc_CCA1_1_1').val($('#mt_fmname').html());
			}
			if($('#cc_CCA2_1_1') && $('#cc_CCA2_1_1').attr('cname') == '姓名' && $('#mt_fmname').html()){
				$('#cc_CCA2_1_1').val($('#mt_fmname').html());
			}
			if($('#cc_CCF2_6_1') && $('#cc_CCF2_6_1').attr('cname') == '姓名1' && $('#mt_fmname').html()){
				$('#cc_CCF2_6_1').val($('#mt_fmname').html());
			}
			if($('#cc_CCA18_1_1') && $('#cc_CCA18_1_1').attr('cname') == '关系1' && $('#mt_fmrelation').html()){
				$('#cc_CCA18_1_1').val($('#mt_fmrelation').html());
			}
			if($('#cc_CCA2_1_1') && $('#cc_CCA2_1_1').attr('cname') =='亲属关系' && $('#mt_fmrelation').html()){
				$('#cc_CCA2_1_1').val($('#mt_fmrelation').html());
			}
			if($('#cc_CCF1_6_1') && $('#cc_CCF1_6_1').attr('cname') =='亲属工作单位' && $('#mt_fmwork').html()){
				$('#cc_CCF1_6_1').val($('#mt_fmwork').html());
			}
			if($('#cc_CCA4_1_1') && $('#cc_CCA4_1_1').attr('cname') =='工作单位' && $('#mt_fmwork').html()){
				$('#cc_CCA4_1_1').val($('#mt_fmwork').html());
			}
			if($('#cc_CCF3_6_1') && $('#cc_CCF3_6_1').attr('cname') =='工作单位及职务1' && $('#mt_fmwork').html()){
				$('#cc_CCF3_6_1').val($('#mt_fmwork').html());
			}
			if($('#cc_CCA5_1_1') && $('#cc_CCA5_1_1').attr('cname') =='单位名称' && $('#mt_fmwork').html()){
				$('#cc_CCA5_1_1').val($('#mt_fmwork').html());
			}
			if($('#cc_CCA3_1_1') && $('#cc_CCA3_1_1').attr('cname') =='工作单位' && $('#mt_fmwork').html()){
				$('#cc_CCA3_1_1').val($('#mt_fmwork').html());
			}
			if($('#cc_CCA6_1_1') && $('#cc_CCA6_1_1').attr('cname') =='联系方式' && $('#mt_fmphone').html()){
				$('#cc_CCA6_1_1').val($('#mt_fmphone').html());
			}
			if($('#cc_CCA19_1_1') && $('#cc_CCA19_1_1').attr('cname') =='联系电话1' && $('#mt_fmphone').html()){
				$('#cc_CCA19_1_1').val($('#mt_fmphone').html());
			}
			if($('#cc_CCF4_6_1') && $('#mt_fmposition').html()){
				$('#cc_CCF4_6_1').val($('#mt_fmposition').html());
			}
			if($('#cc_CCA4_1_1').attr('cname') == '职务' && $('#mt_fmposition').html()){
				$('#cc_CCA4_1_1').val($('#mt_fmposition').html());
			}
			if($('#cc_CCA5_1_1').attr('cname') == '职务' && $('#mt_fmposition').html()){
				$('#cc_CCA5_1_1').val($('#mt_fmposition').html());
			}
			if($('#cc_CCA6_1_1').attr('cname') == '职务' && $('#mt_fmposition').html()){
				$('#cc_CCA6_1_1').val($('#mt_fmposition').html());
			}
		}
		//学生实践经验
		if($('#container h1').text() == '学生实践经验' || $('#container h1').text() == '实践或项目经验' || $('#container h1').text() == '校外实习经历' || $('#container h1').text() == '工作/实习经历' || $('#container h1').text() == '学生工作及实践经验'){
			let length = $('.infoparttimejobs .infopl').length;
			for(let i=0; i<length; i++){
				if($('input[name=\"cc_CCC1_3_' + (i+1) + '\"]').length && $('.infoparttimejobs .mt_startDate').eq(i).html()){
					$('input[name=\"cc_CCC1_3_' + (i+1) + '\"]').val(formatDate($('.infoparttimejobs .mt_startDate').eq(i).html(), 2) + '-01')
				}
				if($('input[name=\"cc_CCC2_3_' + (i+1) + '\"]') && $('.infoparttimejobs .mt_endDate').eq(i).html()){
					$('input[name=\"cc_CCC2_3_' + (i+1) + '\"]').val(formatDate($('.infoparttimejobs .mt_endDate').eq(i).html(), 2) + '-01')
				}
				if($('input[name=\"cc_CCF2_6_' + (i+1) + '\"]') && $('.infoparttimejobs .mt_companyName').eq(i).html()){
					$('input[name=\"cc_CCF2_6_' + (i+1) + '\"]').val($('.infoparttimejobs .mt_companyName').eq(i).html())
				}
				if($('input[name=\"cc_CCA1_1_' + (i+1) + '\"]') && $('.infoparttimejobs .mt_positionName').eq(i).html()){
					$('input[name=\"cc_CCA1_1_' + (i+1) + '\"]').val($('.infoparttimejobs .mt_positionName').eq(i).html())
				}
				if($('input[name=\"cc_CCA2_1_' + (i+1) + '\"]') && $('.infoparttimejobs .mt_department').eq(i).html()){
					$('input[name=\"cc_CCA2_1_' + (i+1) + '\"]').val($('.infoparttimejobs .mt_department').eq(i).html())
				}
				if($('textarea[name=\"cc_CCF1_6_' + (i+1) + '\"]') && $('.infoparttimejobs .workContent').eq(i).html()){
					$('textarea[name=\"cc_CCF1_6_' + (i+1) + '\"]').val($('.infoparttimejobs .workContent').eq(i).html())
				}
				if($('textarea[name=\"cc_CCF2_6_' + (i+1) + '\"]') && $('.infoparttimejobs .workContent').eq(i).html()){
					$('textarea[name=\"cc_CCF2_6_' + (i+1) + '\"]').val($('.infoparttimejobs .workContent').eq(i).html())
				}
				if($('textarea[name=\"cc_CCF3_6_' + (i+1) + '\"]') && $('.infoparttimejobs .workContent').eq(i).html()){
					$('textarea[name=\"cc_CCF3_6_' + (i+1) + '\"]').val($('.infoparttimejobs .workContent').eq(i).html())
				}
				if($('input[name=\"cc_CCF1_6_' + (i+1) + '\"]') && $('.infoparttimejobs .mt_companyName').eq(i).html()){
					$('input[name=\"cc_CCF1_6_' + (i+1) + '\"]').val($('.infoparttimejobs .mt_companyName').eq(i).html())
				}
				if($('input[name=\"cc_CCA1_1_' + (i+1) + '\"]') && $('input[name=\"cc_CCA1_1_' + (i+1) + '\"]').attr('cname') == '公司名称' && $('.infoparttimejobs .mt_companyName').eq(i).html()){
					$('input[name=\"cc_CCA1_1_' + (i+1) + '\"]').val($('.infoparttimejobs .mt_companyName').eq(i).html())
				}
				if($('input[name=\"cc_CCA1_1_' + (i+1) + '\"]') && $('input[name=\"cc_CCA1_1_' + (i+1) + '\"]').attr('cname') == '实践单位/项目' && $('.infoparttimejobs .mt_companyName').eq(i).html()){
					$('input[name=\"cc_CCA1_1_' + (i+1) + '\"]').val($('.infoparttimejobs .mt_companyName').eq(i).html())
				}
				if($('input[name=\"cc_CCA4_1_' + (i+1) + '\"]') && $('input[name=\"cc_CCA4_1_' + (i+1) + '\"]').attr('cname') == '担任职务' && $('.infoparttimejobs .mt_positionName').eq(i).html()){
					$('input[name=\"cc_CCA4_1_' + (i+1) + '\"]').val($('.infoparttimejobs .mt_positionName').eq(i).html())
				}
				if($('input[name=\"cc_CCF2_6_' + (i+1) + '\"]') && $('input[name=\"cc_CCF2_6_' + (i+1) + '\"]').attr('cname') == '担任职务' && $('.infoparttimejobs .mt_positionName').eq(i).html()){
					$('input[name=\"cc_CCF2_6_' + (i+1) + '\"]').val($('.infoparttimejobs .mt_positionName').eq(i).html())
				}
				if($('input[name=\"cc_CCA3_1_' + (i+1) + '\"]') && $('input[name=\"cc_CCA3_1_' + (i+1) + '\"]').attr('cname') == '岗位' && $('.infoparttimejobs .mt_positionName').eq(i).html()){
					$('input[name=\"cc_CCA3_1_' + (i+1) + '\"]').val($('.infoparttimejobs .mt_department').eq(i).html())
				}
				if($('input[name=\"cc_CCA3_1_' + (i+1) + '\"]') && $('input[name=\"cc_CCA3_1_' + (i+1) + '\"]').attr('cname') == '所属部门' && $('.infoparttimejobs .mt_department').eq(i).html()){
					$('input[name=\"cc_CCA3_1_' + (i+1) + '\"]').val($('.infoparttimejobs .mt_department').eq(i).html())
				}
				if($('select[name=\"cc_CCA6_1_' + (i+1) + '\"]').length && $('.infoparttimejobs .mt_workcat').eq(i).html()){
					let workcat = $('select[name=\"cc_CCA6_1_' + (i+1) + '\"]')[0];
					switch($('.infoparttimejobs .mt_workcat').eq(i).html()){
						case '实习': workcat.options[1].selected = true;workcat.dispatchEvent(event);break;
						case '全职': workcat.options[2].selected = true;workcat.dispatchEvent(event);break;
					}
				}
				if($('select[name=\"cc_CCA2_1_' + (i+1) + '\"]').length && $('.infoparttimejobs .mt_companySize').eq(i).html()){
					let csize = $('select[name=\"cc_CCA2_1_' + (i+1) + '\"]')[0];
					switch($('.infoparttimejobs .mt_companySize').eq(i).html()){
						case '少于50人':
							csize.options[1].selected = true;
							break;
							csize.dispatchEvent(event);
						case '50-149人':
							csize.options[2].selected = true;
							csize.dispatchEvent(event);
							break;
						case '150-499人':
							csize.options[3].selected = true;
							csize.dispatchEvent(event);
							break;
						default:
							csize.options[4].selected = true;
							csize.dispatchEvent(event);
							break
					}
				}
				if($('select[name=\"cc_CCA3_1_' + (i+1) + '\"]').length && $('.infoparttimejobs .mt_companySize').eq(i).html()){
					let csize = $('select[name=\"cc_CCA3_1_' + (i+1) + '\"]')[0];
					switch($('.infoparttimejobs .mt_companySize').eq(i).html()){
						case '少于50人':
							csize.options[1].selected = true;
							break;
							csize.dispatchEvent(event);
						case '50-149人':
							csize.options[2].selected = true;
							csize.dispatchEvent(event);
							break;
						case '150-499人':
							csize.options[4].selected = true;
							csize.dispatchEvent(event);
							break;
						default:
							csize.options[5].selected = true;
							csize.dispatchEvent(event);
							break
					}
				}
			}
		}
		//最高学历
		if($('.main_title').text().trim() == '最高学历'){
			if($('select[name=\"cc_Degree_1_1\"]').length && $('.infopledu .mt_education').last().html()){
				let edu = $('select[name=\"cc_Degree_1_1\"]')[0];
				switch($('.infopledu .mt_education').last().html()){
					case 'MPA':
					case 'EMBA':
					case 'MBA':
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
			if($('input[name=\"cc_EduStartDate_3_1\"]').prev().prev().length && $('.infopledu .mt_startYearY').last().html()){
				let startYear = $('input[name=\"cc_EduStartDate_3_1\"]').prev().prev()[0].options;
				let length = $('input[name=\"cc_EduStartDate_3_1\"]').prev().prev()[0].options.length;
				for(let i=0; i<length; i++){
					if(startYear[i].innerText == $('.infopledu .mt_startYearY').last().html()){
						startYear[i].selected = true;
					}
				}
			}
			if($('input[name=\"cc_EduStartDate_3_1\"]').prev().length && $('.infopledu .mt_startYearM').last().html()){
				let startMouth = $('input[name=\"cc_EduStartDate_3_1\"]').prev()[0].options;
				let length = $('input[name=\"cc_EduStartDate_3_1\"]').prev()[0].options.length;
				for(let i=0; i<length; i++){
					if(startMouth[i].innerText == formatDate($('.infopledu .mt_startYear').last().html(),2).split('-')[1]){
						startMouth[i].selected = true;
					}
				}
			}
			if($('input[name=\"cc_GradDate_3_1\"]').prev().prev().length && $('.infopledu .mt_endYearY').last().html()){
				let endYear = $('input[name=\"cc_GradDate_3_1\"]').prev().prev()[0].options;
				let length = $('input[name=\"cc_GradDate_3_1\"]').prev().prev()[0].options.length;
				for(let i=0; i<length; i++){
					if(endYear[i].innerText == $('.infopledu .mt_endYearY').last().html()){
						endYear[i].selected = true;
					}
				}
			}
			if($('input[name=\"cc_GradDate_3_1\"]').prev().length && $('.infopledu .mt_endYearM').last().html()){
				let endMouth = $('input[name=\"cc_GradDate_3_1\"]').prev()[0].options;
				let length = $('input[name=\"cc_GradDate_3_1\"]').prev()[0].options.length;
				for(let i=0; i<length; i++){
					if(endMouth[i].innerText == formatDate($('.infopledu .mt_endYear').last().html(),2).split('-')[1]){
						endMouth[i].selected = true;
					}
				}
			}
			if($('input[name=\"cc_CCA18_1_1\"]').length && $('.infopledu .mt_academy').last().html()){
				$('input[name=\"cc_CCA18_1_1\"]').val($('.infopledu .mt_academy').last().html())
			}
		}
		//教育经历 --年月分开写
		if($('.main_title').text().trim() == '教育经历'){
			let length1 = $('.infopledu .infopl').length;
			for(let i=0; i<length1; i++){
				if($('select[name=\"cc_CCA1_1_' + (i+1) + '\"]') && $('.infopledu .mt_education').eq(i).html()){
					let edu = $('select[name=\"cc_CCA1_1_' + (i+1) + '\"]')[0];
					switch($('.infopledu .mt_education').eq(i).html()){
						case 'MPA':
						case 'EMBA':
						case 'MBA':
						case '博士研究生':
							edu.options[3].selected = true;
							break;
						case '硕士研究生':
							edu.options[2].selected = true;
							break;
						case '双学士':
						case '大学本科-一本':
						case '大学本科-二本':
						case '大学本科-三本':
							edu.options[1].selected = true;
							break;
						default: break;
					}
				}
				if($('input[name=\"cc_CCC1_3_' + (i+1) + '\"]').prev().prev().length && $('.infopledu .mt_startYearY').eq(i).html()){
					let startYear = $('input[name=\"cc_CCC1_3_' + (i+1) + '\"]').prev().prev()[0].options;
					let length = $('input[name=\"cc_CCC1_3_' + (i+1) + '\"]').prev().prev()[0].options.length;
					for(let j=0; j<length; j++){
						if(startYear[j].innerText == $('.infopledu .mt_startYearY').eq(i).html()){
							startYear[j].selected = true;
						}
					}
				}
				if($('input[name=\"cc_CCC1_3_' + (i+1) + '\"]').prev().length && $('.infopledu .mt_startYearM').eq(i).html()){
					let startMouth = $('input[name=\"cc_CCC1_3_' + (i+1) + '\"]').prev()[0].options;
					let length = $('input[name=\"cc_CCC1_3_' + (i+1) + '\"]').prev()[0].options.length;
					for(let j=0; j<length; j++){
						if(startMouth[j].innerText == formatDate($('.infopledu .mt_startYear').eq(i).html(),2).split('-')[1]){
							startMouth[j].selected = true;
						}
					}
				}
				if($('input[name=\"cc_CCC2_3_' + (i+1) + '\"]').prev().prev().length && $('.infopledu .mt_endYearY').eq(i).html()){
					let endYear = $('input[name=\"cc_CCC2_3_' + (i+1) + '\"]').prev().prev()[0].options;
					let length = $('input[name=\"cc_CCC2_3_' + (i+1) + '\"]').prev().prev()[0].options.length;
					for(let j=0; j<length; j++){
						if(endYear[j].innerText == $('.infopledu .mt_endYearY').eq(i).html()){
							endYear[j].selected = true;
						}
					}
				}
				if($('input[name=\"cc_CCC2_3_' + (i+1) + '\"]').length && $('.infopledu .mt_endYearM').eq(i).html()){
					let endMouth = $('input[name=\"cc_CCC2_3_' + (i+1) + '\"]').prev()[0].options;
					let length = $('input[name=\"cc_CCC2_3_' + (i+1) + '\"]').prev()[0].options.length;
					for(let j=0; j<length; j++){
						if(endMouth[j].innerText == formatDate($('.infopledu .mt_endYear').eq(i).html(),2).split('-')[1]){
							endMouth[j].selected = true;
						}
					}
				}
				if($('input[name=\"cc_CCA4_1_' + (i+1) + '\"]').length && $('.infopledu .mt_academy').eq(i).html()){
					$('input[name=\"cc_CCA4_1_' + (i+1) + '\"]').val($('.infopledu .mt_academy').eq(i).html())
				}
			}
		}
		//工作经历 -- 年月分开写
		if($('.main_title').text().trim() == '工作（实习）经历'){
			let length1 = $('.infoparttimejobs .infopl').length;
			for(let i=0; i<length1; i++){
				if($('select[name=\"cc_CCA2_1_' + (i+1) + '\"]') && $('.infoparttimejobs .mt_workcat').eq(i).html()){
					let workcat = $('select[name=\"cc_CCA2_1_' + (i+1) + '\"]')[0];
					switch($('.infoparttimejobs .mt_workcat').eq(i).html()){
						case '全职': workcat.options[1].selected = true;
						case '实习': workcat.options[2].selected = true;
					}
				}
				if($('input[name=\"cc_CCC1_3_' + (i+1) + '\"]').prev().prev().length && $('.infoparttimejobs .mt_startDate').eq(i).html()){
					let startYear = $('input[name=\"cc_CCC1_3_' + (i+1) + '\"]').prev().prev()[0].options;
					let length = $('input[name=\"cc_CCC1_3_' + (i+1) + '\"]').prev().prev()[0].options.length;
					for(let j=0; j<length; j++){
						if(startYear[j].innerText == formatDate($('.infoparttimejobs .mt_startDate').eq(i).html(),2).split('-')[0]){
							startYear[j].selected = true;
						}
					}
				}
				if($('input[name=\"cc_CCC1_3_' + (i+1) + '\"]').prev().length && $('.infoparttimejobs .mt_startDate').eq(i).html()){
					let startMouth = $('input[name=\"cc_CCC1_3_' + (i+1) + '\"]').prev()[0].options;
					let length = $('input[name=\"cc_CCC1_3_' + (i+1) + '\"]').prev()[0].options.length;
					for(let j=0; j<length; j++){
						if(startMouth[j].innerText == formatDate($('.infoparttimejobs .mt_startDate').eq(i).html(),2).split('-')[1]){
							startMouth[j].selected = true;
						}
					}
				}
				if($('input[name=\"cc_CCC2_3_' + (i+1) + '\"]').prev().prev().length && $('.infoparttimejobs .mt_endDate').eq(i).html()){
					let endYear = $('input[name=\"cc_CCC2_3_' + (i+1) + '\"]').prev().prev()[0].options;
					let length = $('input[name=\"cc_CCC2_3_' + (i+1) + '\"]').prev().prev()[0].options.length;
					for(let j=0; j<length; j++){
						if(endYear[j].innerText == formatDate($('.infoparttimejobs .mt_endDate').eq(i).html(),2).split('-')[0]){
							endYear[j].selected = true;
						}
					}
				}
				if($('input[name=\"cc_CCC2_3_' + (i+1) + '\"]').length && $('.infoparttimejobs .mt_endDate').eq(i).html()){
					let endMouth = $('input[name=\"cc_CCC2_3_' + (i+1) + '\"]').prev()[0].options;
					let length = $('input[name=\"cc_CCC2_3_' + (i+1) + '\"]').prev()[0].options.length;
					for(let j=0; j<length; j++){
						if(endMouth[j].innerText == formatDate($('.infoparttimejobs .mt_endDate').eq(i).html(),2).split('-')[1]){
							endMouth[j].selected = true;
						}
					}
				}
				if($('input[name=\"cc_CCA1_1_' + (i+1) + '\"]').length && $('.infoparttimejobs .mt_companyName').eq(i).html()){
					$('input[name=\"cc_CCA1_1_' + (i+1) + '\"]').val($('.infoparttimejobs .mt_companyName').eq(i).html())
				}
				if($('input[name=\"cc_CCA6_1_' + (i+1) + '\"]').length && $('.infoparttimejobs .mt_department').eq(i).html()){
					$('input[name=\"cc_CCA6_1_' + (i+1) + '\"]').val($('.infoparttimejobs .mt_department').eq(i).html())
				}
				if($('input[name=\"cc_CCA4_1_' + (i+1) + '\"]').length && $('.infoparttimejobs .mt_positionName').eq(i).html()){
					$('input[name=\"cc_CCA4_1_' + (i+1) + '\"]').val($('.infoparttimejobs .mt_positionName').eq(i).html())
				}
				if($('textarea[name=\"cc_CCF1_6_' + (i+1) + '\"]').length && $('.infoparttimejobs .workDes').eq(i).html()){
					$('textarea[name=\"cc_CCF1_6_' + (i+1) + '\"]').val($('.infoparttimejobs .workDes').eq(i).html())
				}
				if($('input[name=\"cc_CCA3_1_' + (i+1) + '\"]').length && $('.infoparttimejobs .mt_reasons').eq(i).html()){
					$('input[name=\"cc_CCA3_1_' + (i+1) + '\"]').val($('.infoparttimejobs .mt_reasons').eq(i).html())
				}
			}
		}
		//证书 -- 年月分开写
		if($('.main_title').text().trim() == '职业资格或证书'){
			let length1 = $('.infoplcerti .infopl').length;
			for(let i=0; i<length1; i++){
				if($('input[name=\"cc_CCC1_3_' + (i+1) + '\"]').prev().prev().length && $('.infoplcerti .mt_getDate').eq(i).html()){
					let startYear = $('input[name=\"cc_CCC1_3_' + (i+1) + '\"]').prev().prev()[0].options;
					let length = $('input[name=\"cc_CCC1_3_' + (i+1) + '\"]').prev().prev()[0].options.length;
					for(let j=0; j<length; j++){
						if(startYear[j].innerText == formatDate($('.infoplcerti .mt_getDate').eq(i).html(),2).split('-')[0]){
							startYear[j].selected = true;
						}
					}
				}
				if($('input[name=\"cc_CCC1_3_' + (i+1) + '\"]').prev().length && $('.infoplcerti .mt_getDate').eq(i).html()){
					let startMouth = $('input[name=\"cc_CCC1_3_' + (i+1) + '\"]').prev()[0].options;
					let length = $('input[name=\"cc_CCC1_3_' + (i+1) + '\"]').prev()[0].options.length;
					for(let j=0; j<length; j++){
						if(startMouth[j].innerText == formatDate($('.infoplcerti .mt_getDate').eq(i).html(),2).split('-')[1]){
							startMouth[j].selected = true;
						}
					}
				}
				if($('input[name=\"cc_CCA1_1_' + (i+1) + '\"]').length && $('.infoplcerti .mt_certificateName').eq(i).html()){
					$('input[name=\"cc_CCA1_1_' + (i+1) + '\"]').val($('.infoplcerti .mt_certificateName').eq(i).html())
				}
				if($('input[name=\"cc_CCA2_1_' + (i+1) + '\"]').length && $('.infoplcerti .mt_issuing').eq(i).html()){
					$('input[name=\"cc_CCA2_1_' + (i+1) + '\"]').val($('.infoplcerti .mt_issuing').eq(i).html())
				}
				
			}
		}
		//获奖经历 -- 年月分开写
		if($('.main_title').text().trim() == '奖励或活动'){
			let length1 = $('.infoschaward .infopl').length;
			for(let i=0; i<length1; i++){
				if($('input[name=\"cc_CCC1_3_' + (i+1) + '\"]').prev().prev().length && $('.infoschaward .mt_awardsDate').eq(i).html()){
					let startYear = $('input[name=\"cc_CCC1_3_' + (i+1) + '\"]').prev().prev()[0].options;
					let length = $('input[name=\"cc_CCC1_3_' + (i+1) + '\"]').prev().prev()[0].options.length;
					for(let j=0; j<length; j++){
						if(startYear[j].innerText == formatDate($('.infoschaward .mt_awardsDate').eq(i).html(),2).split('-')[0]){
							startYear[j].selected = true;
						}
					}
				}
				if($('input[name=\"cc_CCC1_3_' + (i+1) + '\"]').prev().length && $('.infoschaward .mt_awardsDate').eq(i).html()){
					let startMouth = $('input[name=\"cc_CCC1_3_' + (i+1) + '\"]').prev()[0].options;
					let length = $('input[name=\"cc_CCC1_3_' + (i+1) + '\"]').prev()[0].options.length;
					for(let j=0; j<length; j++){
						if(startMouth[j].innerText == formatDate($('.infoschaward .mt_awardsDate').eq(i).html(),2).split('-')[1]){
							startMouth[j].selected = true;
						}
					}
				}
				if($('input[name=\"cc_CCA2_1_' + (i+1) + '\"]').length && $('.infoschaward .mt_awardsName').eq(i).html()){
					$('input[name=\"cc_CCA2_1_' + (i+1) + '\"]').val($('.infoschaward .mt_awardsName').eq(i).html())
				}
				if($('textarea[name=\"cc_CCF1_6_' + (i+1) + '\"]').length && $('.infoschaward .mt_awardsDes').eq(i).html()){
					$('textarea[name=\"cc_CCF1_6_' + (i+1) + '\"]').val($('.infoschaward .mt_awardsDes').eq(i).html())
				}
			}
		}
		//项目经历 -- 年月分开写
		if($('.main_title').text().trim() == '课题或项目经验'){
			let length1 = $('.infoproject .infopl').length;
			for(let i=0; i<length1; i++){
				if($('input[name=\"cc_CCC1_3_' + (i+1) + '\"]').prev().prev().length && $('.infoproject .mt_prostarttime').eq(i).html()){
					let startYear = $('input[name=\"cc_CCC1_3_' + (i+1) + '\"]').prev().prev()[0].options;
					let length = $('input[name=\"cc_CCC1_3_' + (i+1) + '\"]').prev().prev()[0].options.length;
					for(let j=0; j<length; j++){
						if(startYear[j].innerText == formatDate($('.infoproject .mt_prostarttime').eq(i).html(),2).split('-')[0]){
							startYear[j].selected = true;
						}
					}
				}
				if($('input[name=\"cc_CCC1_3_' + (i+1) + '\"]').prev().length && $('.infoproject .mt_prostarttime').eq(i).html()){
					let startMouth = $('input[name=\"cc_CCC1_3_' + (i+1) + '\"]').prev()[0].options;
					let length = $('input[name=\"cc_CCC1_3_' + (i+1) + '\"]').prev()[0].options.length;
					for(let j=0; j<length; j++){
						if(startMouth[j].innerText == formatDate($('.infoproject .mt_prostarttime').eq(i).html(),2).split('-')[1]){
							startMouth[j].selected = true;
						}
					}
				}
				if($('input[name=\"cc_CCC2_3_' + (i+1) + '\"]').prev().prev().length && $('.infoproject .mt_proendtime').eq(i).html()){
					let endYear = $('input[name=\"cc_CCC2_3_' + (i+1) + '\"]').prev().prev()[0].options;
					let length = $('input[name=\"cc_CCC2_3_' + (i+1) + '\"]').prev().prev()[0].options.length;
					for(let j=0; j<length; j++){
						if(endYear[j].innerText == formatDate($('.infoproject .mt_proendtime').eq(i).html(),2).split('-')[0]){
							endYear[j].selected = true;
						}
					}
				}
				if($('input[name=\"cc_CCC2_3_' + (i+1) + '\"]').length && $('.infoproject .mt_proendtime').eq(i).html()){
					let endMouth = $('input[name=\"cc_CCC2_3_' + (i+1) + '\"]').prev()[0].options;
					let length = $('input[name=\"cc_CCC2_3_' + (i+1) + '\"]').prev()[0].options.length;
					for(let j=0; j<length; j++){
						if(endMouth[j].innerText == formatDate($('.infoproject .mt_proendtime').eq(i).html(),2).split('-')[1]){
							endMouth[j].selected = true;
						}
					}
				}
				if($('input[name=\"cc_CCA1_1_' + (i+1) + '\"]').length && $('.infoproject .mt_projectName').eq(i).html()){
					$('input[name=\"cc_CCA1_1_' + (i+1) + '\"]').val($('.infoproject .mt_projectName').eq(i).html())
				}
				if($('textarea[name=\"cc_CCF1_6_' + (i+1) + '\"]').length && $('.infoproject .mt_projectRemark').eq(i).html()){
					$('textarea[name=\"cc_CCF1_6_' + (i+1) + '\"]').val($('.infoproject .mt_projectRemark').eq(i).html())
				}
			}
		}
		//教育经历
		if($('#container h1').text() == '其他教育经历' || $('#container h1').text() == '学习经历'){
			let length = $('.infopledu .infopl').length;
			for(let i=0; i<length; i++){
				if($('select[name=\"cc_CCA1_1_' + (i+1) + '\"]') && $('.infopledu .mt_education').eq(i).html()){
					let edu = $('select[name=\"cc_CCA1_1_' + (i+1) + '\"]')[0];
					switch($('.infopledu .mt_education').eq(i).html()){
						case 'MPA':
						case 'EMBA':
						case 'MBA':
						case '博士研究生':
							edu.options[9].selected = true;
							break;
						case '硕士研究生':
							edu.options[8].selected = true;
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
				if($('input[name=\"cc_CCC1_3_' + (i+1) + '\"]') && $('.infopledu .mt_startYear').eq(i).html()){
					$('input[name=\"cc_CCC1_3_' + (i+1) + '\"]').val(formatDate($('.infopledu .mt_startYear').eq(i).html(), 2) + '-01')
				}
				if($('input[name=\"cc_CCC2_3_' + (i+1) + '\"]') && $('.infopledu .mt_endYear').eq(i).html()){
					$('input[name=\"cc_CCC2_3_' + (i+1) + '\"]').val(formatDate($('.infopledu .mt_endYear').eq(i).html(), 2) + '-01')
				}
				if($('input[name=\"cc_CCA2_1_' + (i+1) + '\"]').length && $('.infopledu .mt_schoolName').eq(i).html()){
					$('input[name=\"cc_CCA2_1_' + (i+1) + '\"]').val($('.infopledu .mt_schoolName').eq(i).html())
				}
				if($('input[name=\"cc_CCA5_1_' + (i+1) + '\"]').length && $('.infopledu .mt_schoolName').eq(i).html()){
					$('input[name=\"cc_CCA5_1_' + (i+1) + '\"]').val($('.infopledu .mt_schoolName').eq(i).html())
				}
				if($('input[name=\"cc_CCA6_1_' + (i+1) + '\"]').length && $('.infopledu .mt_professional').eq(i).html()){
					$('input[name=\"cc_CCA6_1_' + (i+1) + '\"]').val($('.infopledu .mt_professional').eq(i).html())
				}
				if($('input[name=\"cc_CCA3_1_' + (i+1) + '\"]').length && $('.infopledu .mt_professional').eq(i).html()){
					$('input[name=\"cc_CCA3_1_' + (i+1) + '\"]').val($('.infopledu .mt_professional').eq(i).html())
				}
				if($('select[name=\"cc_CCA4_1_' + (i+1) + '\"]').length && $('.infopledu .mt_professionalranking').eq(i).html()){
					let level = $('select[name=\"cc_CCA4_1_' + (i+1) + '\"]')[0].options;
                	switch($('.infopledu .mt_professionalranking').eq(i).html()){
                		case '前5%':
	                        level[1].selected = true;
	                        break;
	                    case '前10%':
	                    case '前20%':
	                        level[2].selected = true;
	                        break;
	                    case '前30%':
	                    case '前40%':
	                    case '前50%':
	                        level[3].selected = true;
	                        break;
	                    default:
	                        level[4].selected = true;
	                        break
                	}
				}
			}
		}
		if($('#container h1').text() == '专业项目经历' || $('#container h1').text() == '项目经历' || $('#container h1').text() == '校园实践'){
			let length = $('.infoproject .infopl').length;
			for(let i=0; i<length; i++){
				if($('input[name=\"cc_CCC1_3_' + (i+1) + '\"]') && $('.infoproject .mt_prostarttime').eq(i).html()){
					$('input[name=\"cc_CCC1_3_' + (i+1) + '\"]').val(formatDate($('.infoproject .mt_prostarttime').eq(i).html(), 2) + '-01')
				}
				if($('input[name=\"cc_CCC2_3_' + (i+1) + '\"]') && $('.infoproject .mt_proendtime').eq(i).html()){
					$('input[name=\"cc_CCC2_3_' + (i+1) + '\"]').val(formatDate($('.infoproject .mt_proendtime').eq(i).html(), 2) + '-01')
				}
				if($('input[name=\"cc_CCF2_6_' + (i+1) + '\"]') && $('.infoproject .mt_projectName').eq(i).html()){
					$('input[name=\"cc_CCF2_6_' + (i+1) + '\"]').val($('.infoproject .mt_projectName').eq(i).html())
				}
				if($('textarea[name=\"cc_CCF1_6_' + (i+1) + '\"]') && $('.infoproject .mt_proList').eq(i).html()){
					$('textarea[name=\"cc_CCF1_6_' + (i+1) + '\"]').val($('.infoproject .mt_proList').eq(i).html())
				}
				if($('input[name=\"cc_CCA1_1_' + (i+1) + '\"]').attr('cname') == '项目名称' && $('.infoproject .mt_projectName').eq(i).html()){
					$('input[name=\"cc_CCA1_1_' + (i+1) + '\"]').val($('.infoproject .mt_projectName').eq(i).html())
				}
				if($('input[name=\"cc_CCA2_1_' + (i+1) + '\"]').attr('cname') == '担任职务' && $('.infoproject .mt_projectName').eq(i).html()){
					$('input[name=\"cc_CCA2_1_' + (i+1) + '\"]').val($('.infoproject .mt_projectName').eq(i).html())
				}
			}
		}
		//项目经历
		if($('#container h1').text() == '项目/实践经验' || $('#container h1').text() == '校内实践活动' || $('#container h1').text() == '项目经验' || $('#container h1').text() == '实习工作及项目经验'){
			let length = $('.infoproject .infopl').length;
			for(let i=0; i<length; i++){
				if($('input[name=\"cc_CCC3_3_' + (i+1) + '\"]') && $('.infoproject .mt_prostarttime').eq(i).html()){
					$('input[name=\"cc_CCC3_3_' + (i+1) + '\"]').val(formatDate($('.infoproject .mt_prostarttime').eq(i).html(), 2) + '-01')
				}
				if($('input[name=\"cc_CCC4_3_' + (i+1) + '\"]') && $('.infoproject .mt_proendtime').eq(i).html()){
					$('input[name=\"cc_CCC4_3_' + (i+1) + '\"]').val(formatDate($('.infoproject .mt_proendtime').eq(i).html(), 2) + '-01')
				}
				if($('input[name=\"cc_CCC1_3_' + (i+1) + '\"]') && $('.infoproject .mt_prostarttime').eq(i).html()){
					$('input[name=\"cc_CCC1_3_' + (i+1) + '\"]').val(formatDate($('.infoproject .mt_prostarttime').eq(i).html(), 2) + '-01')
				}
				if($('input[name=\"cc_CCC4_3_' + (i+1) + '\"]') && $('.infoproject .mt_proendtime').eq(i).html()){
					$('input[name=\"cc_CCC4_3_' + (i+1) + '\"]').val(formatDate($('.infoproject .mt_proendtime').eq(i).html(), 2) + '-01')
				}
				if($('input[name=\"cc_CCC2_3_' + (i+1) + '\"]') && $('.infoproject .mt_proendtime').eq(i).html()){
					$('input[name=\"cc_CCC2_3_' + (i+1) + '\"]').val(formatDate($('.infoproject .mt_proendtime').eq(i).html(), 2) + '-01')
				}
				if($('input[name=\"cc_CCA3_1_' + (i+1) + '\"]') && $('.infoproject .mt_projectName').eq(i).html()){
					$('input[name=\"cc_CCA3_1_' + (i+1) + '\"]').val($('.infoproject .mt_projectName').eq(i).html())
				}
				if($('input[name=\"cc_CCF3_6_' + (i+1) + '\"]') && $('input[cname=\"项目名称\"]') && $('.infoproject .mt_projectName').eq(i).html()){
					$('input[name=\"cc_CCF3_6_' + (i+1) + '\"]').val($('.infoproject .mt_projectName').eq(i).html())
				}
				if($('input[name=\"cc_CCA1_1_' + (i+1) + '\"]') && $('input[cname=\"项目名称\"]') && $('.infoproject .mt_projectName').eq(i).html()){
					$('input[name=\"cc_CCA1_1_' + (i+1) + '\"]').val($('.infoproject .mt_projectName').eq(i).html())
				}
				if($('input[name=\"cc_CCA1_1_' + (i+1) + '\"]') && $('input[cname=\"担任职务（校内）\"]') && $('.infoproject .mt_positionName').eq(i).html()){
					$('input[name=\"cc_CCA1_1_' + (i+1) + '\"]').val($('.infoproject .mt_positionName').eq(i).html())
				}
				if($('input[name=\"cc_CCA2_1_' + (i+1) + '\"]') && $('input[cname=\"证明人\"]') && $('.infoproject .mt_reterenceName').eq(i).html()){
					$('input[name=\"cc_CCA2_1_' + (i+1) + '\"]').val($('.infoproject .mt_reterenceName').eq(i).html())
				}
				if($('input[name=\"cc_CCA3_1_' + (i+1) + '\"]') && $('input[cname=\"证明人联系方式\"]') && $('.infoproject .mt_reterencePhone').eq(i).html()){
					$('input[name=\"cc_CCA3_1_' + (i+1) + '\"]').val($('.infoproject .mt_reterencePhone').eq(i).html())
				}
				if($('input[name=\"cc_CCF4_6_' + (i+1) + '\"]') && $('input[cname=\"职务\"]') && $('.infoproject .mt_projectDuty').eq(i).html()){
					$('input[name=\"cc_CCF4_6_' + (i+1) + '\"]').val($('.infoproject .mt_projectDuty').eq(i).html())
				}
				if($('textarea[name=\"cc_CCF1_6_' + (i+1) + '\"]') && $('.infoproject .mt_proList').eq(i).html()){
					$('textarea[name=\"cc_CCF1_6_' + (i+1) + '\"]').val($('.infoproject .mt_proList').eq(i).html())
				}
				if($('input[cname=\"开始时间' + (i+1) + '\"]') && $('.infoproject .mt_prostarttime').eq(i).html()){
					$('input[cname=\"开始时间' + (i+1) + '\"]').val(formatDate($('.infoproject .mt_prostarttime').eq(i).html(), 2) + '-01');
				}
				if($('input[cname=\"结束时间' + (i+1) + '\"]') && $('.infoproject .mt_proendtime').eq(i).html()){
					$('input[cname=\"结束时间' + (i+1) + '\"]').val(formatDate($('.infoproject .mt_proendtime').eq(i).html(), 2) + '-01');
				}
				if($('textarea[cname=\"项目描述' + (i+1) + '\"]') && $('.infoproject .mt_projectRemark').eq(i).html()){
					$('textarea[cname=\"项目描述' + (i+1) + '\"]').val($('.infoproject .mt_projectRemark').eq(i).html());
				}
				if($('input[name=\"cc_CCA1_1_' + (i+1) + '\"]') && $('input[name=\"cc_CCA1_1_' + (i+1) + '\"]').attr('cname') == '联系电话' && $('.infoproject .mt_positionName').eq(i).html()){
					$('input[name=\"cc_CCA1_1_' + (i+1) + '\"]').val('')
				}
			}
		}
		//社团经历
		if($('#container h1').text() == '学生社团经验' || $('#container h1').text() == '社团/活动经历' || $('#container h1').text() == '在校实践经验' || $('#container h1').text() == '在校任职' || $('#container h1').text() == '学生会和社团' || $('#container h1').text() == '在校职务' || $('#container h1').text() == '学生干部任职情况' || $('#container h1').text() == '社团活动/工作实习情况' || $('#container h1').text() == '在校活动' || $('#container h1').text() == '校内活动经历' || $('#container h1').text() == '校内职务' || $('#container h1').text() == '学生干部经历' ||  $('#container h1').text() == '学生工作' || $('#container h1').text() == '校内实践经验' ){
			let length = $('.infoschoolclub .infopl').length;
			for(let i=0; i<length; i++){
				if($('input[name=\"cc_CCC1_3_' + (i+1) + '\"]') && $('.infoschoolclub .mt_startDate').eq(i).html()){
					$('input[name=\"cc_CCC1_3_' + (i+1) + '\"]').val(formatDate($('.infoschoolclub .mt_startDate').eq(i).html(), 2) + '-01')
				}
				if($('input[name=\"cc_CCC2_3_' + (i+1) + '\"]') && $('.infoschoolclub .mt_endDate').eq(i).html()){
					$('input[name=\"cc_CCC2_3_' + (i+1) + '\"]').val(formatDate($('.infoschoolclub .mt_endDate').eq(i).html(), 2) + '-01')
				}
				if($('input[name=\"cc_CCA1_1_' + (i+1) + '\"]') && $('.infoschoolclub .mt_schClubName').eq(i).html()){
					$('input[name=\"cc_CCA1_1_' + (i+1) + '\"]').val($('.infoschoolclub .mt_schClubName').eq(i).html())
				}
				if($('input[name=\"cc_CCA2_1_' + (i+1) + '\"]') && $('.infoschoolclub .mt_positionName').eq(i).html()){
					$('input[name=\"cc_CCA2_1_' + (i+1) + '\"]').val($('.infoschoolclub .mt_positionName').eq(i).html())
				}
				if($('textarea[name=\"cc_CCF1_6_' + (i+1) + '\"]') && $('.infoschoolclub .mt_schClubList').eq(i).html()){
					$('textarea[name=\"cc_CCF1_6_' + (i+1) + '\"]').val($('.infoschoolclub .mt_schClubList').eq(i).html())
				}
				if($('textarea[name=\"cc_CCF1_6_' + (i+1) + '\"]') && $('.infoschoolclub .mt_schClubList').eq(i).html()){
					$('textarea[name=\"cc_CCF1_6_' + (i+1) + '\"]').val($('.infoschoolclub .mt_schClubList').eq(i).html())
				}
				if($('input[name=\"cc_CCA1_1_' + (i+1) + '\"]').attr('cname') == '职务名称' && $('.infoschoolclub .mt_positionName').eq(i).html()){
					$('input[name=\"cc_CCA1_1_' + (i+1) + '\"]').val($('.infoschoolclub .mt_positionName').eq(i).html())
				}
				if($('input[name=\"cc_CCA1_1_' + (i+1) + '\"]').attr('cname') == '在校职务名称' && $('.infoschoolclub .mt_positionName').eq(i).html()){
					$('input[name=\"cc_CCA1_1_' + (i+1) + '\"]').val($('.infoschoolclub .mt_positionName').eq(i).html())
				}
				if($('input[name=\"cc_CCF3_6_' + (i+1) + '\"]').attr('cname') == '所任职务' && $('.infoschoolclub .mt_positionName').eq(i).html()){
					$('input[name=\"cc_CCF3_6_' + (i+1) + '\"]').val($('.infoschoolclub .mt_positionName').eq(i).html())
				}
				if($('input[name=\"cc_CCA2_1_' + (i+1) + '\"]').attr('cname') == '组织名称' && $('.infoschoolclub .mt_schClubName').eq(i).html()){
					$('input[name=\"cc_CCA2_1_' + (i+1) + '\"]').val($('.infoschoolclub .mt_schClubName').eq(i).html())
				}
				if($('input[name=\"cc_CCF2_6_' + (i+1) + '\"]').attr('cname') == '所在社团/参与项目' && $('.infoschoolclub .mt_schClubName').eq(i).html()){
					$('input[name=\"cc_CCF2_6_' + (i+1) + '\"]').val($('.infoschoolclub .mt_schClubName').eq(i).html())
				}
				if($('input[name=\"cc_CCF1_6_' + (i+1) + '\"]') && $('input[name=\"cc_CCF1_6_' + (i+1) + '\"]').attr('cname') == '社团/单位名称' && $('.infoschoolclub .mt_schClubName').eq(i).html()){
					$('input[name=\"cc_CCF1_6_' + (i+1) + '\"]').val($('.infoschoolclub .mt_schClubName').eq(i).html())
				}
				if($('input[name=\"cc_CCF1_6_' + (i+1) + '\"]') && $('input[name=\"cc_CCF1_6_' + (i+1) + '\"]').attr('cname') == '校内活动名称' && $('.infoschoolclub .mt_schClubName').eq(i).html()){
					$('input[name=\"cc_CCF1_6_' + (i+1) + '\"]').val('加入了：' + $('.infoschoolclub .mt_schClubName').eq(i).html())
				}
				if($('input[name=\"cc_CCF1_6_' + (i+1) + '\"]') && $('input[name=\"cc_CCF1_6_' + (i+1) + '\"]').attr('cname') == '所任职务' && $('.infoschoolclub .mt_positionName').eq(i).html()){
					$('input[name=\"cc_CCF1_6_' + (i+1) + '\"]').val($('.infoschoolclub .mt_positionName').eq(i).html())
				}
				if($('input[name=\"cc_CCF2_6_' + (i+1) + '\"]') && $('input[name=\"cc_CCF2_6_' + (i+1) + '\"]').attr('cname') == '担任职务' && $('.infoschoolclub .mt_positionName').eq(i).html()){
					$('input[name=\"cc_CCF2_6_' + (i+1) + '\"]').val($('.infoschoolclub .mt_positionName').eq(i).html())
				}
				if($('input[name=\"cc_CCA2_1_' + (i+1) + '\"]') && $('input[name=\"cc_CCA2_1_' + (i+1) + '\"]').attr('cname') == '在校组织' && $('.infoschoolclub .mt_schClubName').eq(i).html()){
					$('input[name=\"cc_CCA2_1_' + (i+1) + '\"]').val($('.infoschoolclub .mt_schClubName').eq(i).html())
				}
				if($('textarea[name=\"cc_CCF2_6_' + (i+1) + '\"]') && $('textarea[name=\"cc_CCF2_6_' + (i+1) + '\"]').attr('cname') == '校内活动描述' && $('.infoschoolclub .mt_schClubList').eq(i).html()){
					$('textarea[name=\"cc_CCF2_6_' + (i+1) + '\"]').val($('.infoschoolclub .mt_schClubList').eq(i).html())
				}
				if($('textarea[name=\"cc_CCF2_6_' + (i+1) + '\"]') && $('textarea[name=\"cc_CCF2_6_' + (i+1) + '\"]').attr('cname') == '工作内容' && $('.infoschoolclub .mt_schClubList').eq(i).html()){
					$('textarea[name=\"cc_CCF2_6_' + (i+1) + '\"]').val($('.infoschoolclub .mt_schClubList').eq(i).html())
				}
				if($('input[name=\"cc_CCC11_3_' + (i+1) + '\"]') && $('input[name=\"cc_CCC11_3_' + (i+1) + '\"]').attr('cname') == '担任时间' && $('.infoschoolclub .mt_startDate').eq(i).html()){
					$('input[name=\"cc_CCC11_3_' + (i+1) + '\"]').val(formatDate($('.infoschoolclub .mt_startDate').eq(i).html(), 2) + '-01')
				}
				if($('input[cname=\"担任时间' + (i+1) + '\"]') && $('.infoschoolclub .mt_startDate').eq(i).html()){
					$('input[cname=\"担任时间' + (i+1) + '\"]').val(formatDate($('.infoschoolclub .mt_startDate').eq(i).html(), 2) + '-01')
				}
				if($('input[name=\"cc_CCA9_1_' + (i+1) + '\"]') && $('input[name=\"cc_CCA9_1_' + (i+1) + '\"]').attr('cname') == '校内职务' && $('.infoschoolclub .mt_positionName').eq(i).html()){
					$('input[name=\"cc_CCA9_1_' + (i+1) + '\"]').val($('.infoschoolclub .mt_positionName').eq(i).html())
				}
				if($('input[name=\"cc_CCA17_1_' + (i+1) + '\"]') && $('input[name=\"cc_CCA17_1_' + (i+1) + '\"]').attr('cname') == '校内活动/职位描述' && $('.infoschoolclub .mt_schClubList').eq(i).html()){
					$('input[name=\"cc_CCA17_1_' + (i+1) + '\"]').val($('.infoschoolclub .mt_schClubList').eq(i).html())
				}
				if($('input[cname=\"校内职务' + (i+1) + '\"]') && $('.infoschoolclub .mt_positionName').eq(i).html()){
					$('input[cname=\"校内职务' + (i+1) + '\"]').val($('.infoschoolclub .mt_positionName').eq(i).html())
				}
				if($('input[cname=\"校内活动/职位描述' + (i+1) + '\"]') && $('.infoschoolclub .mt_schClubList').eq(i).html()){
					$('input[cname=\"校内活动/职位描述' + (i+1) + '\"]').val($('.infoschoolclub .mt_schClubList').eq(i).html())
				}
			}
		}
		//其他信息
		if($('#container h1').text() == '其他信息'){
			if($('select[name=\"ddl_EnglishLevel_5_1\"]') && $('#skill-list .mt_skillEngLevel').last().html()){
            	let ctype = $('select[name=\"ddl_EnglishLevel_5_1\"]')[0];
            	switch($('#skill-list .mt_skillEngLevel').last().html()){
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
			if($('select[name=\"ddl_CCE2_5_1\"]') && $('#skill-list .mt_skillOtherLang').html()){
            	let skillOtherLang = $('select[name=\"ddl_CCE2_5_1\"]')[0];
            	switch($('#skill-list .mt_skillOtherLang').html()){
            		case '德语':
						skillOtherLang.options[1].selected = true;
						break;
					case '法语':
						skillOtherLang.options[2].selected = true;
						break;
					case '日语':
						skillOtherLang.options[3].selected = true;
						break;
					default:
						skillOtherLang.options[4].selected = true;
						break
            	}
            	
            }
		}
		if($('select[cname=\"最高学历\"]').length && $('#mt_edu').html()){
			let edu = $('select[cname=\"最高学历\"]')[0];
			switch($('#mt_edu').html()){
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
		if($('select[cname=\"学位\"]').length && $('#mt_edu').html()){
			let edu = $('select[cname=\"学位\"]')[0];
			switch($('#mt_edu').html()){
				case '博士研究生':
					edu.options[3].selected = true;
					break;
				case '硕士研究生':
					edu.options[2].selected = true;
					break;
				case '双学士':
					edu.options[4].selected = true;
					break;
				case '大学本科-一本':
				case '大学本科-二本':
				case '大学本科-三本':
					edu.options[1].selected = true;
					break;
			}
		}
		//家庭情况
		if($('#container h1').html() == '家庭成员' || $('#container h1').html() == '家庭背景' || $('#container h1').html() == '家庭成员信息' || $('#container h1').html() == '其他' || $('#container h1').html() == '家庭情况' || $('#container h1').html() == '家庭成员情况' || $('#container h1').html() == '家庭成员及主要社会关系'){
			if($('input[cname=\"姓名\"]') && $('#mt_fmname').html()){
				$('input[cname=\"姓名\"]').val($('#mt_fmname').html());
			}
			if($('input[cname=\"亲属姓名\"]') && $('#mt_fmname').html()){
				$('input[cname=\"亲属姓名\"]').val($('#mt_fmname').html());
			}
			if($('input[cname=\"家庭成员姓名\"]') && $('#mt_fmname').html()){
				$('input[cname=\"家庭成员姓名\"]').val($('#mt_fmname').html());
			}
			if($('input[cname=\"称谓\"]') && $('#mt_fmrelation').html()){
				$('input[cname=\"称谓\"]').val($('#mt_fmrelation').html());
			}
			if($('input[cname=\"关系\"]') && $('#mt_fmrelation').html()){
				$('input[cname=\"关系\"]').val($('#mt_fmrelation').html());
			}
			if($('input[cname=\"与本人关系\"]') && $('#mt_fmrelation').html()){
				$('input[cname=\"与本人关系\"]').val($('#mt_fmrelation').html());
			}
			if($('input[cname=\"亲属关系\"]') && $('#mt_fmrelation').html()){
				$('input[cname=\"亲属关系\"]').val($('#mt_fmrelation').html());
			}
			if($('input[cname=\"工作单位\"]') && $('#mt_fmwork').html()){
				$('input[cname=\"工作单位\"]').val($('#mt_fmwork').html());
			}
			if($('input[cname=\"亲属工作单位\"]') && $('#mt_fmwork').html()){
				$('input[cname=\"亲属工作单位\"]').val($('#mt_fmwork').html());
			}
			if($('input[cname=\"工作单位/职务\"]') && $('#mt_fmwork').html()){
				$('input[cname=\"工作单位/职务\"]').val($('#mt_fmwork').html());
			}
			if($('input[cname=\"岗位\"]') && $('#mt_fmposition').html()){
				$('input[cname=\"岗位\"]').val($('#mt_fmposition').html());
			}
			if($('input[cname=\"职务\"]') && $('#mt_fmposition').html()){
				$('input[cname=\"职务\"]').val($('#mt_fmposition').html());
			}
			if($('input[cname=\"职位\"]') && $('#mt_fmposition').html()){
				$('input[cname=\"职位\"]').val($('#mt_fmposition').html());
			}
			if($('input[cname=\"亲属职务\"]') && $('#mt_fmposition').html()){
				$('input[cname=\"亲属职务\"]').val($('#mt_fmposition').html());
			}
			if($('input[cname=\"任职职务\"]') && $('#mt_fmposition').html()){
				$('input[cname=\"任职职务\"]').val($('#mt_fmposition').html());
			}
			if($('input[cname=\"亲属联系方式\"]') && $('#mt_fmphone').html()){
				$('input[cname=\"亲属联系方式\"]').val($('#mt_fmphone').html());
			}
			if($('input[cname=\"电话\"]') && $('#mt_fmphone').html()){
				$('input[cname=\"电话\"]').val($('#mt_fmphone').html());
			}
		}
		//自我鉴定
		if($('#container h1').html() == '自我鉴定'){
			if($('textarea[cname=\"本人特点\"]') && $('#mt_skill').html()){
				$('textarea[cname=\"本人特点\"]').val($('#mt_skill').html())
			}
			if($('textarea[cname=\"获奖经历\"]') && $('.infoschaward .infopl').length){
				let awardMess = '';
				let length = $('.infoschaward .infopl').length;
				for(let i=0; i<length; i++){
					awardMess += $('.infoschaward .mt_awardsName').eq(i).html() + '\\n'
								 + $('.infoschaward .mt_awardsType').eq(i).html() + '\\n'
								 + $('.infoschaward .mt_awardsDate').eq(i).html() + '\\n'
								 + $('.infoschaward .mt_awardsDes').eq(i).html() + '\\n\\n';
				}
				$('textarea[cname=\"获奖经历\"]').val(awardMess);
			}
			if($('textarea[cname=\"担任社团干部经历\"]') && $('.infoschoolclub .infopl').length){
				let schoolclubMess = '';
				let length = $('.infoschoolclub .infopl').length;
				for(let i=0; i<length; i++){
					schoolclubMess += '部门名称：' + $('.infoschoolclub .mt_schClubName').eq(i).html() + '\\n'
								   + '开始时间：' + $('.infoschoolclub .mt_startDate').eq(i).html() + '\\n'
								   + '担任职务：' + $('.infoschoolclub .mt_positionName').eq(i).html() + '\\n'
								   + '职责：' + $('.infoschoolclub .mt_workDes').eq(i).html() + '\\n\\n';								 
				}
				$('textarea[cname=\"担任社团干部经历\"]').val(schoolclubMess);
			}
			if($('textarea[cname=\"社会实践\"]') && $('#exp-list .infopl').length){
				let jobMess = '';
				let length = $('#exp-list .infopl').length;
				for(let i=0; i<length; i++){
					jobMess += '公司名称：' + $('#exp-list .mt_companyName').eq(i).html() + '\\n'
								   + '开始时间：' + $('#exp-list .mt_startDate').eq(i).html() + '\\n'
								   + '担任职务：' + $('#exp-list .mt_positionName').eq(i).html() + '\\n'
								   + '工作内容：' + $('#exp-list .workContent').eq(i).html() + '\\n\\n';							 
				}
				$('textarea[cname=\"社会实践\"]').val(jobMess);
			}
		}
		//获奖经历
		if($('#container h1').html() == '资格证书/其他技能' || $('#container h1').html() == '获奖情况' || $('#container h1').html() == '获奖描述'){
			if($('.infoschaward .infopl').length){
				let awardMess = '';
				let length = $('.infoschaward .infopl').length;
				for(let i=0; i<length; i++){
					awardMess = $('.infoschaward .mt_awardsName').eq(i).html() + '\\n'
								 + $('.infoschaward .mt_awardsType').eq(i).html() + '\\n'
								 + $('.infoschaward .mt_awardsDate').eq(i).html() + '\\n'
								 + $('.infoschaward .mt_awardsDes').eq(i).html() + '\\n';
					$('textarea[name=\"cc_CCF1_6_' + (i+1) + '\"]').val(awardMess);
					if($('input[name=\"cc_CCC1_3_' + (i+1) + '\"]').length && $('.infoschaward .mt_awardsDate').eq(i).html()){
						$('input[name=\"cc_CCC1_3_' + (i+1) + '\"]').val(formatDate($('.infoschaward .mt_awardsDate').eq(i).html(),2) + '-01');
					}
					if($('input[name=\"cc_CCA1_1_' + (i+1) + '\"]').length && $('.infoschaward .mt_awardsDate').eq(i).html()){
						$('input[name=\"cc_CCA1_1_' + (i+1) + '\"]').val(formatDate($('.infoschaward .mt_awardsDate').eq(i).html(),2) + '-01');
					}
					if($('input[name=\"cc_CCF1_6_' + (i+1) + '\"]').attr('cname') == '奖项名称' && $('.infoschaward .mt_awardsName').eq(i).html()){
						$('input[name=\"cc_CCF1_6_' + (i+1) + '\"]').val($('.infoschaward .mt_awardsName').eq(i).html());
					}
					if($('input[name=\"cc_CCA2_1_' + (i+1) + '\"]').attr('cname') == '获奖名称' && $('.infoschaward .mt_awardsName').eq(i).html()){
						$('input[name=\"cc_CCA2_1_' + (i+1) + '\"]').val($('.infoschaward .mt_awardsName').eq(i).html());
					}
					if($('select[name=\"cc_CCA2_1_' + (i+1) + '\"]').length && $('select[name=\"cc_CCA2_1_' + (i+1) + '\"]').attr('cname') == '级别' && $('.infoschaward .mt_awardsType').eq(i).html()){
						let level = $('select[name=\"cc_CCA2_1_' + (i+1) + '\"]')[0].options;
						switch($('.infoschaward .mt_awardsType').eq(i).html()){
							case '学校级': level[2].selected = true;break;
							case '院系级': level[3].selected = true;break;
							default: break;
						}
					}
					if($('select[name=\"cc_CCA1_1_' + (i+1) + '\"]').length && $('select[name=\"cc_CCA1_1_' + (i+1) + '\"]').attr('cname') == '获奖情况' && $('.infoschaward .mt_awardsType').eq(i).html()){
						let level = $('select[name=\"cc_CCA1_1_' + (i+1) + '\"]')[0].options;
						switch($('.infoschaward .mt_awardsType').eq(i).html()){
							case '学校级': level[5].selected = true;break;
							case '院系级': level[4].selected = true;break;
							case '省市级': level[3].selected = true;break;
							case '国家级': level[2].selected = true;break;
							case '国际级': level[1].selected = true;break;
							default: break;
						}
					}
				}
			}
		}
		//在校经历
		if($('#container h1').html() == '在校经历' || $('#container h1').html() == '校内活动经历' || $('#container h1').html() == '校内经历' || $('#container h1').html() == '成绩、语言能力' || $('#container h1').html() == '奖励及证书获得情况'){
			let schoolclubMess = '';
			let schoolclubMessages = '';
			let length = $('.infoschoolclub .infopl').length;
			let awardMess = '';
			let length1 = $('.infoschaward .infopl').length;
			for(let i=0; i<length; i++){
				var j = i+1;
				if(i==0){
					j='';
				}
				schoolclubMess = '部门名称：' + $('.infoschoolclub .mt_schClubName').eq(i).html() + '\\n'
							   + '开始时间：' + $('.infoschoolclub .mt_startDate').eq(i).html() + '\\n'
							   + '担任职务：' + $('.infoschoolclub .mt_positionName').eq(i).html() + '\\n'
							   + '职责：' + $('.infoschoolclub .mt_workDes').eq(i).html() + '\\n';
				schoolclubMessages += '部门名称：' + $('.infoschoolclub .mt_schClubName').eq(i).html() + '\\n'
							       + '开始时间：' + $('.infoschoolclub .mt_startDate').eq(i).html() + '\\n'
							       + '担任职务：' + $('.infoschoolclub .mt_positionName').eq(i).html() + '\\n'
							       + '职责：' + $('.infoschoolclub .mt_workDes').eq(i).html() + '\\n';	
				$('textarea[cname=\"课外活动经历' + (i+1) + '描述\"]').val(schoolclubMess);
				$('textarea[cname=\"活动项目描述' + j + '\"]').val(schoolclubMess);
			}
			$('textarea[cname=\"校内活动\"]').val(schoolclubMessages);		
			for(let i=0; i<length1; i++){
				awardMess += $('.infoschaward .mt_awardsName').eq(i).html() + '\\n'
							 + $('.infoschaward .mt_awardsType').eq(i).html() + '\\n'
							 + $('.infoschaward .mt_awardsDate').eq(i).html() + '\\n'
							 + $('.infoschaward .mt_awardsDes').eq(i).html() + '\\n\\n';								 
			}
			$('textarea[cname=\"获得奖励\"]').val(awardMess);
			$('textarea[cname=\"奖励/证书\"]').val(awardMess);
			
		}

		//校外经历
		if($('#container h1').html() == '校外经历'){
			let jobMess = '';
			let length = $('#exp-list .infopl').length;
			for(let i=0; i<length; i++){
				jobMess += '公司名称：' + $('#exp-list .mt_companyName').eq(i).html() + '\\n'
							   + '开始时间：' + $('#exp-list .mt_startDate').eq(i).html() + '\\n'
							   + '担任职务：' + $('#exp-list .mt_positionName').eq(i).html() + '\\n'
							   + '工作内容：' + $('#exp-list .workContent').eq(i).html() + '\\n';
				$('textarea[cname=\"实习经历' + (i+1) + '描述\"]').val(jobMess);							 
			}
			
		} 
		//工作经历
		if ($('#container h1').eq(0).text() == '实习/工作经历' || $('#container h1').eq(0).text() == '实习经验' || $('#container h1').eq(0).text() == '校外实习' || $('#container h1').eq(0).text() == '主要实习/兼职经历或校内外职务' || $('#container h1').eq(0).text() == '校外经历' || $('#container h1').eq(0).text() == '实践实习经历' || $('#container h1').eq(0).text() == '实践经历' || $('#container h1').eq(0).text() == '在校情况' || $('#container h1').eq(0).text() == '全职工作记录' || $('#container h1').eq(0).text() == '工作经验' || $('#container h1').eq(0).text() == '社会实践经验' || $('#container h1').eq(0).text() == '校内外实习经验/工作经历' || $('#container h1').eq(0).text() == '学生工作/实习经历') {
			for (var i = 0; i < $('.infoparttimejobs .mt_companyName').length; i++) {
				if ($('#cc_CCA1_1_' + (i + 1))) {
					$('#cc_CCA1_1_' + (i + 1)).val($('.infoparttimejobs .mt_companyName').eq(i).html())
				}
				if ($('#cc_CCA1_1_' + (i + 1)) && $('#cc_CCA1_1_' + (i + 1)).attr('cname') == '任职单位及部门') {
					$('#cc_CCA1_1_' + (i + 1)).val($('.infoparttimejobs .mt_companyName').eq(i).html())
				}
				if ($('#cc_CCA13_1_' + (i + 1)) && $('#cc_CCA13_1_' + (i + 1)).attr('cname') == '公司名称') {
					$('#cc_CCA13_1_' + (i + 1)).val($('.infoparttimejobs .mt_companyName').eq(i).html())
				}
				if ($('#cc_CCA2_1_' + (i + 1))) {
					$('#cc_CCA2_1_' + (i + 1)).val($('.infoparttimejobs .mt_positionName').eq(i).html())
				}
				if ($('#cc_CCC1_3_' + (i + 1)).length) {
					$('#cc_CCC1_3_' + (i + 1)).val(addZero($('.infoparttimejobs .mt_startDate').eq(i).html()))
				}
				if ($('#cc_CCA3_1_' + (i + 1)) && $('#cc_CCA3_1_' + (i + 1)).attr('cname') == '起始日期') {
					$('#cc_CCA3_1_' + (i + 1)).val(addZero($('.infoparttimejobs .mt_startDate').eq(i).html()))
				}
				if ($('#cc_CCC2_3_' + (i + 1)).length) {
					$('#cc_CCC2_3_' + (i + 1)).val(addZero($('.infoparttimejobs .mt_startDate').eq(i).html()))
				}
				if ($('#cc_CCA4_1_' + (i + 1)) && $('#cc_CCA4_1_' + (i + 1)).attr('cname') == '结束日期') {
					$('#cc_CCA4_1_' + (i + 1)).val(addZero($('.infoparttimejobs .mt_startDate').eq(i).html()))
				}
				if ($('#cc_CCF1_6_' + (i + 1))) {
					$('#cc_CCF1_6_' + (i + 1)).val($('.infoparttimejobs .workDes').eq(i).html())
				}
				if ($('#cc_CCA2_1_' + (i + 1)) && $('#cc_CCA2_1_' + (i + 1)).attr('cname') == '担任职务') {
					$('#cc_CCA2_1_' + (i + 1)).val($('.infoparttimejobs .mt_positionName').eq(i).html())
				}
				if ($('#cc_CCF1_6_' + (i + 1)) && $('#cc_CCF1_6_' + (i + 1)).attr('cname') == '担任职务') {
					$('#cc_CCF1_6_' + (i + 1)).val($('.infoparttimejobs .mt_positionName').eq(i).html())
				}
				if ($('#cc_CCC1_3_' + (i + 1)) && $('#cc_CCC1_3_' + (i + 1)).attr('cname') == '开始日期') {
					$('#cc_CCC1_3_' + (i + 1)).val(addZero($('.infoparttimejobs .mt_startDate').eq(i).html()))
				}
				if ($('#cc_CCC2_3_' + (i + 1)) && $('#cc_CCC2_3_' + (i + 1)).attr('cname') == '结束日期') {
					$('#cc_CCC2_3_' + (i + 1)).val(addZero($('.infoparttimejobs .mt_startDate').eq(i).html()))
				}
				if ($('#cc_CCF1_6_' + (i + 1)) && $('#cc_CCF1_6_' + (i + 1)).attr('cname') == '工作职责') {
					$('#cc_CCF1_6_' + (i + 1)).val($('.infoparttimejobs .workDes').eq(i).html())
				}
				if ($('#cc_CCA1_1_' + (i + 1)) && $('#cc_CCA1_1_' + (i + 1)).attr('cname') == '担任职务') {
					$('#cc_CCA1_1_' + (i + 1)).val($('.infoparttimejobs .mt_positionName').eq(i).html())
				}
				if ($('#cc_CCA1_1_' + (i + 1)) && $('#cc_CCA1_1_' + (i + 1)).attr('cname') == '担任职务（社会）') {
					$('#cc_CCA1_1_' + (i + 1)).val($('.infoparttimejobs .mt_positionName').eq(i).html())
				}
				if ($('#cc_CCA2_1_' + (i + 1)) && $('#cc_CCA2_1_' + (i + 1)).attr('cname') == '担任职位') {
					$('#cc_CCA2_1_' + (i + 1)).val($('.infoparttimejobs .mt_positionName').eq(i).html())
				}
				if ($('#cc_CCA1_1_' + (i + 1)) && $('#cc_CCA1_1_' + (i + 1)).attr('cname') == '职务') {
					$('#cc_CCA1_1_' + (i + 1)).val($('.infoparttimejobs .mt_positionName').eq(i).html())
				}
				if ($('#cc_CCF1_6_' + (i + 1)).length) {
					$('#cc_CCF1_6_' + (i + 1)).val($('.infoparttimejobs .workDes').eq(i).html())
				}
				if ($('#cc_CCF1_6_' + (i + 1)) && $('#cc_CCF1_6_' + (i + 1)).attr('cname') == '任职内容描述') {
					$('#cc_CCF1_6_' + (i + 1)).val($('.infoparttimejobs .workDes').eq(i).html())
				}
				if ($('#cc_CCA1_6_' + (i + 1)) && $('#cc_CCA1_6_' + (i + 1)).attr('cname') == '公司名称') {
					$('#cc_CCA1_6_' + (i + 1)).val($('.infoparttimejobs .mt_companyName').eq(i).html())
				}
				if ($('#cc_CCA1_1_' + (i + 1)) && $('#cc_CCA1_1_' + (i + 1)).attr('cname') == '所在部门') {
					$('#cc_CCA1_1_' + (i + 1)).val($('.infoparttimejobs .mt_department').eq(i).html())
				}
				if ($('#cc_CCA22_1_' + (i + 1)) && $('#cc_CCA22_1_' + (i + 1)).attr('cname') == '实习部门') {
					$('#cc_CCA22_1_' + (i + 1)).val($('.infoparttimejobs .mt_department').eq(i).html())
				}
				if ($('#cc_CCF2_6_' + (i + 1))) {
					$('#cc_CCF2_6_' + (i + 1)).val($('.infoparttimejobs .workDes').eq(i).html())
				}
				if ($('#cc_CCF2_6_' + (i + 1)).attr('cname') == '活动名称') {
					$('#cc_CCF2_6_' + (i + 1)).val($('.infoparttimejobs .mt_companyName').eq(i).html())
				}
				if ($('#cc_CCF2_6_' + (i + 1)).attr('cname') == '工作单位/社团') {
					$('#cc_CCF2_6_' + (i + 1)).val($('.infoparttimejobs .mt_companyName').eq(i).html())
				}
				if ($('#cc_CCF2_6_' + (i + 1)).attr('cname') == '公司名称') {
					$('#cc_CCF2_6_' + (i + 1)).val($('.infoparttimejobs .mt_companyName').eq(i).html())
				}
				if ($('#cc_CCF3_6_' + (i + 1)).attr('cname') == '所任职务') {
					$('#cc_CCF3_6_' + (i + 1)).val($('.infoparttimejobs .mt_positionName').eq(i).html())
				}
				if ($('#cc_CCF4_6_' + (i + 1)).attr('cname') == '主要成果') {
					$('#cc_CCF4_6_' + (i + 1)).val($('.infoparttimejobs .workContent').eq(i).html())
				}
				if ($('#cc_CCF5_6_' + (i + 1)).attr('cname') == '实习内容') {
					$('#cc_CCF5_6_' + (i + 1)).val($('.infoparttimejobs .workContent').eq(i).html())
				}
				
			}
		}
		
		//获奖经历
		if($('#container h1').html() == '奖励/活动' || $('#container h1').html() == '校内活动/竞赛' || $('#container h1').html() == '校内经历' || $('#container h1').html() == '在校情况'){
			let length = $('.infoschaward .infopl').length;
			for(let i=0; i<length; i++){
				if($('select[cname=\"所获奖学金' + (i+1) + '\"]').prev().length && $('.infoschaward .mt_awardsType').eq(i).html()){
					let osk = $('select[cname=\"所获奖学金' + (i+1) + '\"]').prev()[0];
					switch($('.infoschaward .mt_awardsType').eq(i).html()){
						case '国际级':
							osk.options[1].selected = true;
							break;
						case '国家级':
							osk.options[1].selected = true;
							break;
						case '学校级':
							osk.options[2].selected = true;
							break;
						case '院系级':
							osk.options[3].selected = true;
							break;
					}
				}
				if($('select[name=\"cc_CCA26_1_' + (i+1) + '\"]').length && $('.infoschaward .mt_awardsType').eq(i).html()){
					let osk = $('select[name=\"cc_CCA26_1_' + (i+1) + '\"]')[0];
					switch($('.infoschaward .mt_awardsType').eq(i).html()){
						case '国际级':
							osk.options[1].selected = true;
							break;
						case '国家级':
							osk.options[1].selected = true;
							break;
						case '学校级':
							osk.options[2].selected = true;
							break;
						case '院系级':
							osk.options[3].selected = true;
							break;
					}
				}
				if($('input[cname=\"奖学金名称' + (i+1) + '\"]').length && $('.infoschaward .mt_awardsName').eq(i).html()){
					$('input[cname=\"奖学金名称' + (i+1) + '\"]').val($('.infoschaward .mt_awardsName').eq(i).html());
				}
				if($('textarea[cname=\"cc_CCF1_6_' + (i+1) + '\"]').length && $('.infoschaward .mt_awardsName').eq(i).html()){
					$('textarea[cname=\"cc_CCF1_6_' + (i+1) + '\"]').val($('.infoschaward .mt_awardsName').eq(i).html());
				}
				if($('input[cname=\"获得时间' + (i+1) + '\"]').length && $('.infoschaward .mt_awardsDate').eq(i).html()){
					$('input[cname=\"获得时间' + (i+1) + '\"]').val(formatDate($('.infoschaward .mt_awardsDate').eq(i).html(), 2) + '-01');
				}
				if($('input[cname=\"cc_CCC1_3_' + (i+1) + '\"]').length && $('.infoschaward .mt_awardsDate').eq(i).html()){
					$('input[cname=\"cc_CCC1_3_' + (i+1) + '\"]').val(formatDate($('.infoschaward .mt_awardsDate').eq(i).html(), 2) + '-01');
				}
				if($('input[name=\"cc_CCF3_6_' + (i+1) + '\"]').length && $('input[name=\"cc_CCF3_6_' + (i+1) + '\"]').attr('cname') == '奖项名称' && $('.infoschaward .mt_awardsName').eq(i).html()){
					$('input[name=\"cc_CCF3_6_' + (i+1) + '\"]').val($('.infoschaward .mt_awardsName').eq(i).html());
				}
				if($('input[name=\"cc_CCC3_3_' + (i+1) + '\"]').length && $('input[name=\"cc_CCC3_3_' + (i+1) + '\"]').attr('cname') == '获奖时间' && $('.infoschaward .mt_awardsDate').eq(i).html()){
					$('input[name=\"cc_CCC3_3_' + (i+1) + '\"]').val(formatDate($('.infoschaward .mt_awardsDate').eq(i).html(), 2) + '-01');
				}
				if($('input[name=\"cc_CCF4_6_' + (i+1) + '\"]').length && $('input[name=\"cc_CCF4_6_' + (i+1) + '\"]').attr('cname') == '获奖级别' && $('.infoschaward .mt_awardsType').eq(i).html()){
					$('input[name=\"cc_CCF4_6_' + (i+1) + '\"]').val($('.infoschaward .mt_awardsType').eq(i).html());
				}
				if($('textarea[name=\"cc_CCF5_6_' + (i+1) + '\"]').length && $('input[name=\"cc_CCF5_6_' + (i+1) + '\"]').attr('cname') == '获奖描述' && $('.infoschaward .mt_awardsDes').eq(i).html()){
					$('textarea[name=\"cc_CCF5_6_' + (i+1) + '\"]').val($('.infoschaward .mt_awardsDes').eq(i).html());
				}
				if($('input[name=\"cc_CCA16_1_' + (i+1) + '\"]').length && $('input[name=\"cc_CCA16_1_' + (i+1) + '\"]').attr('cname') == '奖学金名称' && $('.infoschaward .mt_awardsName').eq(i).html()){
					$('input[name=\"cc_CCA16_1_' + (i+1) + '\"]').val($('.infoschaward .mt_awardsName').eq(i).html());
				}
			}
		}
		//获奖经历
		if($('#container h1').html() == '奖惩情况' && $('.infoschaward .infopl').length){
			let length = $('.infoschaward .infopl').length;
			if($('select[cname=\"所获奖励\"]').prev().length && $('.infoschaward .mt_awardsType').html()){
				let osk = $('select[cname=\"所获奖励\"]').prev()[0];
				switch($('.infoschaward .mt_awardsType').html()){
					case '国际级':
						osk.options[1].selected = true;
						break;
					case '国家级':
						osk.options[2].selected = true;
						break;
					case '学校级':
						osk.options[4].selected = true;
						break;
					case '院系级':
						osk.options[5].selected = true;
						break;
				}
			}
			if($('textarea[cname=\"所获奖励情况\"]').length && $('.infoschaward .mt_awardsDes').html()){
				$('textarea[cname=\"所获奖励情况\"]').val($('.infoschaward .mt_awardsDes').html());
			}
			if($('input[cname=\"获奖时间\"]').length && $('.infoschaward .mt_awardsDate').html()){
				let len2 = $('input[cname=\"获奖时间\"]').prev()[0].options.length;
				let mouthOptions = $('input[cname=\"获奖时间\"]').prev()[0].options;
				let YearOptions = $('input[cname=\"获奖时间\"]').prev().prev()[0].options;
				let len1 = $('input[cname=\"获奖时间\"]').prev().prev()[0].options.length;
				let Year = formatDate($('.infoschaward .mt_awardsDate').html(), 2).substring(0,4);
				let mouth = formatDate($('.infoschaward .mt_awardsDate').html(), 2).substring(5,7);
				for(let i=0; i<len1; i++){
					if(YearOptions[i].innerText == Year){
						YearOptions[i].selected = true;
					}
				}
				for(let i=0; i<len2; i++){
					if(mouthOptions[i].innerText == mouth){
						mouthOptions[i].selected = true;
					}
				}
			}
			if(length>1){
				for(let i=1; i<length; i++){
					if($('select[cname=\"所获奖励' + (i+1) + '\"]').prev().length && $('.infoschaward .mt_awardsType').eq(i).html()){
						let osk = $('select[cname=\"所获奖励' + (i+1) + '\"]').prev()[0];
						switch($('.infoschaward .mt_awardsType').eq(i).html()){
							case '国际级':
								osk.options[1].selected = true;
								break;
							case '国家级':
								osk.options[2].selected = true;
								break;
							case '学校级':
								osk.options[4].selected = true;
								break;
							case '院系级':
								osk.options[5].selected = true;
								break;
						}
					}
					if($('textarea[cname=\"所获奖励情况' + (i+1) + '\"]').length && $('.infoschaward .mt_awardsDes').eq(i).html()){
						$('textarea[cname=\"所获奖励情况' + (i+1) + '\"]').val($('.infoschaward .mt_awardsDes').eq(i).html());
					}
					if($('input[cname=\"获奖时间' + (i+1) + '\"]').length && $('.infoschaward .mt_awardsDate').eq(i).html()){
						let len2 = $('input[cname=\"获奖时间' + (i+1) + '\"]').prev()[0].options.length;
						let mouthOptions = $('input[cname=\"获奖时间' + (i+1) + '\"]').prev()[0].options;
						let YearOptions = $('input[cname=\"获奖时间' + (i+1) + '\"]').prev().prev()[0].options;
						let len1 = $('input[cname=\"获奖时间' + (i+1) + '\"]').prev().prev()[0].options.length;
						let Year = formatDate($('.infoschaward .mt_awardsDate').eq(i).html(), 2).substring(0,4);
						let mouth = formatDate($('.infoschaward .mt_awardsDate').eq(i).html(), 2).substring(5,7);
						for(let i=0; i<len1; i++){
							if(YearOptions[i].innerText == Year){
								YearOptions[i].selected = true;
							}
						}
						for(let i=0; i<len2; i++){
							if(mouthOptions[i].innerText == mouth){
								mouthOptions[i].selected = true;
							}
						}
					}
				}
			}
		}
		//工作经历
		if($('#container h1').html() == '相关实习经验' || $('#container h1').html() == '实习经历'){
			let length = $('.infoparttimejobs .infopl').length;
			if($('input[cname=\"实习开始时间\"]') && $('.infoparttimejobs .mt_startDate').html()){
				$('input[cname=\"实习开始时间\"]').val(formatDate($('.infoparttimejobs .mt_startDate').html(),2) + '-01');
			}
			if($('input[cname=\"实习结束时间\"]') && $('.infoparttimejobs .mt_endDate').html()){
				$('input[cname=\"实习结束时间\"]').val(formatDate($('.infoparttimejobs .mt_endDate').html(),2) + '-01');
			}
			if($('input[cname=\"实习单位名称\"]') && $('.infoparttimejobs .mt_companyName').html()){
				$('input[cname=\"实习单位名称\"]').val($('.infoparttimejobs .mt_companyName').html());
			}
			if($('textarea[cname=\"相关实习描述\"]') && $('.infoparttimejobs .mt_workList').html()){
				$('textarea[cname=\"相关实习描述\"]').val($('.infoparttimejobs .mt_workList').html());
			}
			if($('input[cname=\"开始时间\"]') && $('.infoparttimejobs .mt_startDate').html()){
				$('input[cname=\"开始时间\"]').val(formatDate($('.infoparttimejobs .mt_startDate').html(),2) + '-01');
			}
			if($('input[cname=\"结束时间\"]') && $('.infoparttimejobs .mt_endDate').html()){
				$('input[cname=\"结束时间\"]').val(formatDate($('.infoparttimejobs .mt_endDate').html(),2) + '-01');
			}
			if($('input[cname=\"实习公司名称\"]') && $('.infoparttimejobs .mt_companyName').html()){
				$('input[cname=\"实习公司名称\"]').val($('.infoparttimejobs .mt_companyName').html());
			}
			if($('textarea[cname=\"职责描述\"]') && $('.infoparttimejobs .mt_workList').html()){
				$('textarea[cname=\"职责描述\"]').val($('.infoparttimejobs .mt_workList').html());
			}
			if(length>1){
				for(let i=1; i<length; i++){
					if($('input[cname=\"实习开始时间' + (i+1) + '\"]') && $('.infoparttimejobs .mt_startDate').eq(i).html()){
						$('input[cname=\"实习开始时间' + (i+1) + '\"]').val(formatDate($('.infoparttimejobs .mt_startDate').eq(i).html(),2) + '-01');
					}
					if($('input[cname=\"实习结束时间' + (i+1) + '\"]') && $('.infoparttimejobs .mt_endDate').eq(i).html()){
						$('input[cname=\"实习结束时间' + (i+1) + '\"]').val(formatDate($('.infoparttimejobs .mt_endDate').eq(i).html(),2) + '-01');
					}
					if($('input[cname=\"实习单位名称' + (i+1) + '\"]') && $('.infoparttimejobs .mt_companyName').eq(i).html()){
						$('input[cname=\"实习单位名称' + (i+1) + '\"]').val($('.infoparttimejobs .mt_companyName').eq(i).html());
					}
					if($('textarea[cname=\"相关实习描述' + (i+1) + '\"]') && $('.infoparttimejobs .mt_workList').eq(i).html()){
						$('textarea[cname=\"相关实习描述' + (i+1) + '\"]').val($('.infoparttimejobs .mt_workList').eq(i).html());
					}
					if($('input[cname=\"开始时间' + (i+1) + '\"]') && $('.infoparttimejobs .mt_startDate').html()){
						$('input[cname=\"开始时间' + (i+1) + '\"]').val(formatDate($('.infoparttimejobs .mt_startDate').html(),2) + '-01');
					}
					if($('input[cname=\"结束时间' + (i+1) + '\"]') && $('.infoparttimejobs .mt_endDate').html()){
						$('input[cname=\"结束时间' + (i+1) + '\"]').val(formatDate($('.infoparttimejobs .mt_endDate').html(),2) + '-01');
					}
					if($('input[cname=\"实习公司名称' + (i+1) + '\"]') && $('.infoparttimejobs .mt_companyName').html()){
						$('input[cname=\"实习公司名称' + (i+1) + '\"]').val($('.infoparttimejobs .mt_companyName').html());
					}
					if($('textarea[cname=\"职责描述' + (i+1) + '\"]') && $('.infoparttimejobs .mt_workList').html()){
						$('textarea[cname=\"职责描述' + (i+1) + '\"]').val($('.infoparttimejobs .mt_workList').html());
					}
				}
			}
			
		}
		//项目经历
		if($('#container h1').html() == '学生实践经验' || $('#container h1').html() == '学生项目经验'){
			let length = $('.infoproject .infopl').length;
			if($('input[cname=\"开始日期\"]') && $('.infoproject .mt_prostarttime').html()){
				$('input[cname=\"开始日期\"]').val(formatDate($('.infoproject .mt_prostarttime').html(),2) + '-01');
			}
			if($('input[cname=\"结束日期\"]') && $('.infoproject .mt_proendtime').html()){
				$('input[cname=\"结束日期\"]').val(formatDate($('.infoproject .mt_proendtime').html(),2) + '-01');
			}
			if($('input[cname=\"项目名称\"]') && $('.infoproject .mt_projectName').html()){
				$('input[cname=\"项目名称\"]').val($('.infoproject .mt_projectName').html());
			}
			if($('textarea[cname=\"项目描述\"]') && $('.infoproject .mt_projectRemark').html()){
				$('textarea[cname=\"项目描述\"]').val($('.infoproject .mt_projectRemark').html());
			}
			if($('input[cname=\"项目开始时间\"]') && $('.infoproject .mt_prostarttime').html()){
				$('input[cname=\"项目开始时间\"]').val(formatDate($('.infoproject .mt_prostarttime').html(),2) + '-01');
			}
			if($('input[cname=\"项目结束时间\"]') && $('.infoproject .mt_proendtime').html()){
				$('input[cname=\"项目结束时间\"]').val(formatDate($('.infoproject .mt_proendtime').html(),2) + '-01');
			}
			if($('input[cname=\"项目负责名称\"]') && $('.infoproject .mt_projectName').html()){
				$('input[cname=\"项目负责名称\"]').val($('.infoproject .mt_projectName').html());
			}
			if($('textarea[cname=\"项目描述内容\"]') && $('.infoproject .mt_projectRemark').html()){
				$('textarea[cname=\"项目描述内容\"]').val($('.infoproject .mt_projectRemark').html());
			}
			if(length>1){
				for(let i=1; i<length; i++){
					if($('input[cname=\"开始日期' + (i+1) + '\"]') && $('.infoproject .mt_prostarttime').eq(i).html()){
						$('input[cname=\"开始日期' + (i+1) + '\"]').val(formatDate($('.infoproject .mt_prostarttime').eq(i).html(),2) + '-01');
					}
					if($('input[cname=\"结束日期' + (i+1) + '\"]') && $('.infoproject .mt_proendtime').eq(i).html()){
						$('input[cname=\"结束日期' + (i+1) + '\"]').val(formatDate($('.infoproject .mt_proendtime').eq(i).html(),2) + '-01');
					}
					if($('input[cname=\"项目名称' + (i+1) + '\"]') && $('.infoproject .mt_projectName').eq(i).html()){
						$('input[cname=\"项目名称' + (i+1) + '\"]').val($('.infoproject .mt_projectName').eq(i).html());
					}
					if($('textarea[cname=\"项目描述' + (i+1) + '\"]') && $('.infoproject .mt_projectRemark').eq(i).html()){
						$('textarea[cname=\"项目描述' + (i+1) + '\"]').val($('.infoproject .mt_projectRemark').eq(i).html());
					}
					if($('input[cname=\"项目开始时间' + (i+1) + '\"]') && $('.infoproject .mt_prostarttime').html()){
						$('input[cname=\"项目开始时间' + (i+1) + '\"]').val(formatDate($('.infoproject .mt_prostarttime').html(),2) + '-01');
					}
					if($('input[cname=\"项目结束时间' + (i+1) + '\"]') && $('.infoproject .mt_proendtime').html()){
						$('input[cname=\"项目结束时间' + (i+1) + '\"]').val(formatDate($('.infoproject .mt_proendtime').html(),2) + '-01');
					}
					if($('input[cname=\"项目负责名称' + (i+1) + '\"]') && $('.infoproject .mt_projectName').html()){
						$('input[cname=\"项目负责名称' + (i+1) + '\"]').val($('.infoproject .mt_projectName').html());
					}
					if($('textarea[cname=\"项目描述内容' + (i+1) + '\"]') && $('.infoproject .mt_projectRemark').html()){
						$('textarea[cname=\"项目描述内容' + (i+1) + '\"]').val($('.infoproject .mt_projectRemark').html());
					}
				}
			}
			
		}
		//技能/爱好
		if($('#container h1').html() == '技能/爱好' || $('#container h1').html() == '附加信息' || $('#container h1').html() == '其他' || $('#container h1').html() == '兴趣爱好' || $('#container h1').html() == '兴趣爱好及特长'){
			if($('textarea[cname=\"个人爱好\"]') && $('#mt_skill').html()){
				$('textarea[cname=\"个人爱好\"]').val($('#mt_skill').html())
			}
			if($('input[cname=\"兴趣爱好\"]') && $('#mt_skill').html()){
				$('input[cname=\"兴趣爱好\"]').val($('#mt_skill').html())
			}
			if($('textarea[cname=\"兴趣爱好\"]') && $('#mt_skill').html()){
				$('textarea[cname=\"兴趣爱好\"]').val($('#mt_skill').html())
			}
			if($('textarea[cname=\"个人特长\"]') && $('#achievement').html()){
				$('textarea[cname=\"个人特长\"]').val($('#achievement').html())
			}
			if($('textarea[cname=\"特长\"]') && $('#achievement').html()){
				$('textarea[cname=\"特长\"]').val($('#achievement').html())
			}
			if($('textarea[cname=\"最关键的两项兴趣爱好\"]') && $('#mt_skill').html()){
				$('textarea[cname=\"最关键的两项兴趣爱好\"]').val($('#mt_skill').html())
			}
			if($('input[cname=\"具备何种特长\"]') && $('#achievement').html()){
				$('input[cname=\"具备何种特长\"]').val($('#achievement').html())
			}
		}
		//cname + 数字
		//教育背景
		if($('#container h1').text() == '教育背景'){
			let length = $('.infopledu .infopl').length;
			for(let i=0; i<length; i++){
				let j = '';
				if(i>0){
					j=i+1;
				}
				if($('select[cname=\"学历' + j + '\"]').length && $('.infopledu .mt_education').eq(i).html()){
					let edu = $('select[cname=\"学历' + j + '\"]')[0];
					switch($('.infopledu .mt_education').eq(i).html()){
						case 'MPA':
						case 'EMBA':
						case 'MBA':
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
				if($('input[cname=\"开始时间' + j + '\"]').length && $('.infopledu .mt_startYear').eq(i).html()){
					$('input[cname=\"开始时间' + j + '\"]').val(formatDate($('.infopledu .mt_startYear').eq(i).html(),2) + '-01')
				}
				if($('input[cname=\"结束时间' + j + '\"]').length && $('.infopledu .mt_endYear').eq(i).html()){
					$('input[cname=\"结束时间' + j + '\"]').val(formatDate($('.infopledu .mt_endYear').eq(i).html(),2) + '-01')
				}
				if($('input[cname=\"学校名称' + j + '\"]').length && $('.infopledu .mt_schoolName').eq(i).html()){
					$('input[cname=\"学校名称' + j + '\"]').val($('.infopledu .mt_schoolName').eq(i).html())
				}
				if($('input[cname=\"专业' + j + '\"]').length && $('.infopledu .mt_professional').eq(i).html()){
					$('input[cname=\"专业' + j + '\"]').val($('.infopledu .mt_professional').eq(i).html())
				}
			}
		}
		//工作经历
		if($('#container h1').text() == '最关键的三项实习、兼职或工作经历' || $('#container h1').text() == '学生实习经验' || $('#container h1').text() == '校外实习/兼职经历'){
			let length = $('.infoparttimejobs .infopl').length;
			for(let i=0; i<length; i++){
				let j = '';
				if(i>0){
					j=i+1;
				}
				if($('input[cname=\"开始日期' + j + '\"]').length && $('.infoparttimejobs .mt_startDate').eq(i).html()){
					$('input[cname=\"开始日期' + j + '\"]').val(formatDate($('.infoparttimejobs .mt_startDate').eq(i).html(),2) + '-01')
				}
				if($('input[cname=\"实习开始时间' + j + '\"]').length && $('.infoparttimejobs .mt_startDate').eq(i).html()){
					$('input[cname=\"实习开始时间' + j + '\"]').val(formatDate($('.infoparttimejobs .mt_startDate').eq(i).html(),2) + '-01')
				}
				if($('input[cname=\"结束日期' + j + '\"]').length && $('.infoparttimejobs .mt_endDate').eq(i).html()){
					$('input[cname=\"结束日期' + j + '\"]').val(formatDate($('.infoparttimejobs .mt_endDate').eq(i).html(),2) + '-01')
				}
				if($('input[cname=\"实习结束时间' + j + '\"]').length && $('.infoparttimejobs .mt_endDate').eq(i).html()){
					$('input[cname=\"实习结束时间' + j + '\"]').val(formatDate($('.infoparttimejobs .mt_endDate').eq(i).html(),2) + '-01')
				}
				if($('input[cname=\"工作单位' + j + '\"]').length && $('.infoparttimejobs .mt_companyName').eq(i).html()){
					$('input[cname=\"工作单位' + j + '\"]').val($('.infoparttimejobs .mt_companyName').eq(i).html())
				}
				if($('input[cname=\"实习/兼职单位' + j + '\"]').length && $('.infoparttimejobs .mt_companyName').eq(i).html()){
					$('input[cname=\"实习/兼职单位' + j + '\"]').val($('.infoparttimejobs .mt_companyName').eq(i).html())
				}
				if($('input[cname=\"实习公司名称' + j + '\"]').length && $('.infoparttimejobs .mt_companyName').eq(i).html()){
					$('input[cname=\"实习公司名称' + j + '\"]').val($('.infoparttimejobs .mt_companyName').eq(i).html())
				}
				if($('input[cname=\"职业' + j + '\"]').length && $('.infoparttimejobs .mt_positionName').eq(i).html()){
					$('input[cname=\"职业' + j + '\"]').val($('.infoparttimejobs .mt_positionName').eq(i).html())
				}
				if($('textarea[cname=\"主要职责、成绩、收获' + j + '\"]').length && $('.infoparttimejobs .workContent').eq(i).html()){
					$('textarea[cname=\"主要职责、成绩、收获' + j + '\"]').val($('.infoparttimejobs .workContent').eq(i).html())
				}
				if($('textarea[cname=\"实习描述内容' + j + '\"]').length && $('.infoparttimejobs .workContent').eq(i).html()){
					$('textarea[cname=\"实习描述内容' + j + '\"]').val($('.infoparttimejobs .workContent').eq(i).html())
				}
				if($('textarea[cname=\"实习/兼职项目描述' + j + '\"]').length && $('.infoparttimejobs .workContent').eq(i).html()){
					$('textarea[cname=\"实习/兼职项目描述' + j + '\"]').val($('.infoparttimejobs .workContent').eq(i).html())
				}
				if($('input[cname=\"证明人' + j + '\"]').length && $('.infoparttimejobs .mt_reterenceName').eq(i).html()){
					$('input[cname=\"证明人' + j + '\"]').val($('.infoparttimejobs .mt_reterenceName').eq(i).html())
				}
			}
		}
		//社团经历
		if($('#container h1').text() == '校园职务/活动' || $('#container h1').text() == '社团经历'){
			let length = $('.infoschoolclub .infopl').length;
			for(let i=0; i<length; i++){
				let j = '';
				if(i>0){
					j=i;
				}
				if($('input[cname=\"开始时间' + j + '\"]').length && $('.infoschoolclub .mt_startDate').eq(i).html()){
					$('input[cname=\"开始时间' + j + '\"]').val(formatDate($('.infoschoolclub .mt_startDate').eq(i).html(),2) + '-01')
				}
				if($('input[cname=\"结束时间' + j + '\"]').length && $('.infoschoolclub .mt_endDate').eq(i).html()){
					$('input[cname=\"结束时间' + j + '\"]').val(formatDate($('.infoschoolclub .mt_endDate').eq(i).html(),2) + '-01')
				}
				if($('textarea[cname=\"职责描述' + j + '\"]').length && $('.infoschoolclub .mt_schClubList').eq(i).html()){
					$('textarea[cname=\"职责描述' + j + '\"]').val($('.infoschoolclub .mt_schClubList').eq(i).html())
				}
				if($('input[cname=\"社团名称' + j + '\"]').length && $('.infoschoolclub .mt_schClubName').eq(i).html()){
					$('input[cname=\"社团名称' + j + '\"]').val($('.infoschoolclub .mt_schClubName').eq(i).html())
				}
				if($('input[cname=\"职务' + j + '\"]').length && $('.infoschoolclub .mt_positionName').eq(i).html()){
					$('input[cname=\"职务' + j + '\"]').val($('.infoschoolclub .mt_positionName').eq(i).html())
				}
				if($('textarea[cname=\"工作内容/成绩' + j + '\"]').length && $('.infoschoolclub .mt_schClubList').eq(i).html()){
					$('textarea[cname=\"工作内容/成绩' + j + '\"]').val($('.infoschoolclub .mt_schClubList').eq(i).html())
				}
			}
		}
		//获奖经历
		if($('#container h1').text() == '个人技能及奖学金' || $('#container h1').text() == '奖项荣誉'){
			let length = $('.infoschaward .infopl').length;
			for(let i=0; i<length; i++){
				let j = '';
				if(i>0){
					j=i+1;
				}
				if($('input[cname=\"获奖时间' + j + '\"]').length && $('.infoschaward .mt_awardsDate').eq(i).html()){
					$('input[cname=\"获奖时间' + j + '\"]').val(formatDate($('.infoschaward .mt_awardsDate').eq(i).html(),2) + '-01')
				}
				
			}
		}
		//语言能力
		if($('#container h1').text() == '语言能力'){
			let endLevel = $('#ddl_CCE1_5_1')[0].options;
			switch($('.infoEnglishSkill .mt_skillEngLevel').last().html()){
				case '大学英语四级':
					endLevel[1].selected = true;
					endLevel[1].dispatchEvent(event);
					endSorDom.val(endSorce);
					break;
				case '大学英语六级':
					endLevel[2].selected = true;
					endLevel[2].dispatchEvent(event);
					break;
				case '专业四级':
					endLevel[7].selected = true;
					endLevel[7].dispatchEvent(event);
					break;
				case '专业八级':
					endLevel[3].selected = true;
					endLevel[3].dispatchEvent(event);
					break;
			}
			if($('#cc_CCA1_1_1').length && $('.infoEnglishSkill .mt_skillEngSorce').last().html()){
				$('#cc_CCA1_1_1').val($('.infoEnglishSkill .mt_skillEngSorce').last().html());	
			}
		}
		//工作经历
		if($('#container h1').text() == '实习经历'){
			let length = $('.infoparttimejobs .infopl').length;
			for(let i=0; i<length; i++){
				let j = 1;
				if(i>0){
					j=i+1;
				}
				if($('input[cname=\"开始时间' + j + '\"]').length && $('.infoparttimejobs .mt_startDate').eq(i).html()){
					$('input[cname=\"开始时间' + j + '\"]').val(formatDate($('.infoparttimejobs .mt_startDate').eq(i).html(),2) + '-01')
				}
				if($('input[cname=\"结束时间' + j + '\"]').length && $('.infoparttimejobs .mt_endDate').eq(i).html()){
					$('input[cname=\"结束时间' + j + '\"]').val(formatDate($('.infoparttimejobs .mt_endDate').eq(i).html(),2) + '-01')
				}
				if($('input[cname=\"企业名称' + j + '\"]').length && $('.infoparttimejobs .mt_companyName').eq(i).html()){
					$('input[cname=\"企业名称' + j + '\"]').val($('.infoparttimejobs .mt_companyName').eq(i).html())
				}
				if($('select[cname=\"企业规模' + j + '\"]').length && $('.infoparttimejobs .mt_companySize').eq(i).html()){
					let size = $('select[cname=\"企业规模' + j + '\"]')[0].options;
					switch($('.infoparttimejobs .mt_companySize').eq(i).html()){
						case '少于50人':size[5].selected = true;break;
						case '50-149人':size[4].selected = true;break;
						case '150-499人':size[3].selected = true;break;
						case '500-999人':size[2].selected = true;break;
						default :size[1].selected = true;break;
					}
				}
				if($('input[cname=\"实习职位' + j + '\"]').length && $('.infoparttimejobs .mt_positionName').eq(i).html()){
					$('input[cname=\"实习职位' + j + '\"]').val($('.infoparttimejobs .mt_positionName').eq(i).html())
				}
				if($('textarea[cname=\"实习描述' + j + '\"]').length && $('.infoparttimejobs .workContent').eq(i).html()){
					$('textarea[cname=\"实习描述' + j + '\"]').val($('.infoparttimejobs .workContent').eq(i).html())
				}
			}
		}
		//社团经历
		if($('#container h1').text() == '校内经历'){
			let length = $('.infoschoolclub .infopl').length;
			for(let i=0; i<length; i++){
				let j = 1;
				if(i>0){
					j=i+1;
				}
				if($('input[cname=\"开始时间' + j + '\"]').length && $('.infoschoolclub .mt_startDate').eq(i).html()){
					$('input[cname=\"开始时间' + j + '\"]').val(formatDate($('.infoschoolclub .mt_startDate').eq(i).html(),2) + '-01')
				}
				if($('input[cname=\"结束时间' + j + '\"]').length && $('.infoschoolclub .mt_endDate').eq(i).html()){
					$('input[cname=\"结束时间' + j + '\"]').val(formatDate($('.infoschoolclub .mt_endDate').eq(i).html(),2) + '-01')
				}
				if($('textarea[cname=\"职责描述' + j + '\"]').length && $('.infoschoolclub .mt_schClubList').eq(i).html()){
					$('textarea[cname=\"职责描述' + j + '\"]').val($('.infoschoolclub .mt_schClubList').eq(i).html())
				}
			}
		}
		//项目经历
		if($('#container h1').text() == '项目经历' || $('#container h1').text() == '实践经验和获奖经历'){
			let length = $('.infoproject .infopl').length;
			for(let i=0; i<length; i++){
				let j = 1;
				if(i>0){
					j=i+1;
				}
				if($('input[cname=\"项目名称' + j + '\"]').length && $('.infoproject .mt_projectName').eq(i).html()){
					$('input[cname=\"项目名称' + j + '\"]').val($('.infoproject .mt_projectName').eq(i).html())
				}
				if($('input[cname=\"开始时间' + j + '\"]').length && $('.infoproject .mt_prostarttime').eq(i).html()){
					$('input[cname=\"开始时间' + j + '\"]').val(formatDate($('.infoproject .mt_prostarttime').eq(i).html(),2) + '-01')
				}
				if($('input[cname=\"结束时间' + j + '\"]').length && $('.infoproject .mt_proendtime').eq(i).html()){
					$('input[cname=\"结束时间' + j + '\"]').val(formatDate($('.infoproject .mt_proendtime').eq(i).html(),2) + '-01')
				}
				if($('textarea[cname=\"项目描述' + j + '\"]').length && $('.infoproject .mt_proList').eq(i).html()){
					$('textarea[cname=\"项目描述' + j + '\"]').val($('.infoproject .mt_proList').eq(i).html())
				}
			}
		}

	})
})()