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
		if (KISSY.one('input[name=\"user.name\"]')) {
			KISSY.one('input[name=\"user.name\"]').val(KISSY.one('#mt_name').html());
		}
		if (KISSY.one('input[name=\"user.familyAddr\"]')) {
			KISSY.one('input[name=\"user.familyAddr\"]').val(KISSY.one('#mt_postadd').html());
		}
		if (KISSY.one('input[name=\"user.height\"]')) {
			KISSY.one('input[name=\"user.height\"]').val(KISSY.one('#mt_height').html());
		}
		if (KISSY.one('input[name=\"resume_address\"]')) {
			KISSY.one('input[name=\"resume_address\"]').val(KISSY.one('#mt_postadd').html());
		}
		if (KISSY.one('#radiosex_0') && KISSY.one('#mt_sex').html() == '男') {
			document.getElementById('radiosex_0').click();
		}
		if (KISSY.one('#radiosex_1') && KISSY.one('#mt_sex').html() == '女') {
			document.getElementById('radiosex_1').click();
		}
		if (KISSY.one('#birthYear') && KISSY.one('#mt_birth').html()) {
			KISSY.one('#birthYear').val(KISSY.one('#mt_birth').html());
		}
		if (KISSY.one('input[name=\"resume_mobile\"]')) {
			KISSY.one('input[name=\"resume_mobile\"]').val(KISSY.one('#mt_tel').html());
		}
		if (KISSY.one('input[name=\"resume_certificate\"]') && KISSY.one('#mt_id').html()) {
			KISSY.one('input[name=\"resume_certificate\"]').val(KISSY.one('#mt_id').html());
		}
		if (KISSY.one('input[name=\"user.mobileNum\"]')) {
			KISSY.one('input[name=\"user.mobileNum\"]').val(KISSY.one('#mt_email').html());
		}
		if (KISSY.one('input[name=\"emergencyContactPerson\"]') && KISSY.one('#mt_jjlxr').html()) {
			KISSY.one('input[name=\"emergencyContactPerson\"]').val(KISSY.one('#mt_jjlxr').html());
		}
		if (KISSY.one('input[name=\"Textsecondtel\"]') && KISSY.one('#mt_jjlxrtel').html()) {
			KISSY.one('input[name=\"Textsecondtel\"]').val(KISSY.one('#mt_jjlxrtel').html());
		}
		if($('input[name=\"user.schoolAddr\"]') && $('#mt_add').html()){
			$('input[name=\"user.schoolAddr\"]').val($('#mt_add').html());
		}
		if($('select[name=\"user.nationId\"]') && $('#mt_nation').html()){
			let length = $('select[name=\"user.nationId\"]')[0].options.length;
			for(let i=0; i<length; i++){
				if($('select[name=\"user.nationId\"]')[0].options[i].innerText == $('#mt_nation').html()){
					$('select[name=\"user.nationId\"]')[0].options[i].selected = true;
				}
			}
		}
		if($('select[name=\"user.province\"]') && $('#mt_nativeplace').html()){
			let length = $('select[name=\"user.province\"]')[0].options.length;
			for(let i=0; i<length; i++){
				if($('select[name=\"user.province\"]')[0].options[i].innerText.substring(0,2) == $('#mt_nativeplace').html()){
					$('select[name=\"user.province\"]')[0].options[i].selected = true;
				}
			}
		}
		if($('input[name=\"user.sourceLocal\"]') && $('#mt_native_city').html()){
			$('input[name=\"user.sourceLocal\"]').val($('#mt_native_city').html());
		}
		if($('select[name=\"user.marriageId\"]') && $('#mt_maritalstatus').html()){
			let marriage = $('select[name=\"user.marriageId\"]')[0].options;
			switch($('#mt_maritalstatus').html()){
				case '未婚': marriage[1].selected = true;break;
				case '已婚': marriage[2].selected = true;break;
				case '离婚': marriage[3].selected = true;break;
			}
		}
		if($('select[name=\"user.visageId\"]') && $('#mt_polistatus').html()){
			let plo = $('select[name=\"user.visageId\"]')[0].options;
			switch($('#mt_polistatus').html()){
				case '中共党员':
					plo[1].selected = true;
					break;
				case '群众':
					plo[4].selected = true;
					break;
				case '共青团员':
					plo[3].selected = true;
					break;
				default:
					plo[2].selected = true;
					break
			}
		}
		//教育信息
		if($('#mt_edu').html()){
			let length = $('#edu-list .infopl').length;
			for(let i=0; i<length; i++){
				if($('#edu-list .mt_education').eq(i).html() == $('#mt_edu').html()){
					if($('select[name=\"user.graduYear\"]') && $('#edu-list .mt_startYearY').eq(i).html()){
						let len = $('select[name=\"user.graduYear\"]')[0].options.length;
						for(let j=0; j<len; j++){
							if($('select[name=\"user.graduYear\"]')[0].options[j].innerText == $('#edu-list .mt_startYearY').eq(i).html() + '年'){
								$('select[name=\"user.graduYear\"]')[0].options[j].selected = true;
							}
						}
					}
					if($('input[name=\"user.firstSpec\"]') && $('#edu-list .mt_professional').eq(i).html()){
						$('input[name=\"user.firstSpec\"]').val($('#edu-list .mt_professional').eq(i).html());
					}
					if($('select[name=\"user.eduLevelId\"]') && $('#edu-list .mt_education').eq(i).html()){
						let edu = $('select[name=\"user.eduLevelId\"]')[0];
						let degree = $('select[name=\"user.degreeId\"]')[0];
						switch($('#edu-list .mt_education').eq(i).html()){
							case 'EMBA':
							case 'MBA':
							case '博士研究生':
								edu.options[1].selected = true;
								degree.options[1].selected = true;
								break;
							case 'MPA':
							case '硕士研究生':
								edu.options[2].selected = true;
								degree.options[2].selected = true;
								break;
							case '双学士':
								edu.options[3].selected = true;
								degree.options[3].selected = true;
								break;
							case '大学本科-一本':
							case '大学本科-二本':
							case '大学本科-三本':
								edu.options[4].selected = true;
								degree.options[4].selected = true;
								break;
							default:
								edu.options[5].selected = true;
								degree.options[5].selected = true;
								break
						}
					}
					if($('select[name=\"user.specComp\"]') && $('#edu-list .mt_professionalranking').eq(i).html()){
						let rank = $('select[name=\"user.specComp\"]')[0].options;
						switch($('#edu-list .mt_professionalranking').eq(i).html()){
							case '前5%':
							case '前10%':
							case '前20%':
								rank[1].selected = true;
								break;
							case '前30%':
							case '前40%':
							case '前50%':
								rank[2].selected = true;
								break;
							default:
								rank[3].selected = true;
								break
						}
					}
				}
			}
			if ($('#engLevelId').length && $('.infoEnglishSkill .mt_skillEngLevel').last().html()) {
				var ctype = $('#engLevelId')[0];
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
		}
		
		//教育经历
		if($('#eduTr')){
			let length = $('#eduTr tr').length/5;
			for(let i=1; i<=length; i++){
				if($('input[name=\"info.edu' + i +'.school\"]') && $('.infopledu .mt_schoolName').eq(i-1).html()){
					$('input[name=\"info.edu' + i +'.school\"]').val($('.infopledu .mt_schoolName').eq(i-1).html())
				}
				if($('input[name=\"info.edu' + i +'.spec\"]') && $('.infopledu .mt_professional').eq(i-1).html()){
					$('input[name=\"info.edu' + i +'.spec\"]').val($('.infopledu .mt_professional').eq(i-1).html())
				}
				if($('input[name=\"info.edu' + i +'.startTime\"]') && $('.infopledu .mt_startYear').eq(i-1).html()){
					$('input[name=\"info.edu' + i +'.startTime\"]').val(formatDate($('.infopledu .mt_startYear').eq(i-1).html(), 2) + '-01')
				}
				if($('input[name=\"info.edu' + i +'.endTime\"]') && $('.infopledu .mt_endYear').eq(i-1).html()){
					$('input[name=\"info.edu' + i +'.endTime\"]').val(formatDate($('.infopledu .mt_endYear').eq(i-1).html(), 2) + '-01')
				}
				if($('select[name=\"info.edu' + i +'.eduId\"]') && $('.infopledu .mt_education').eq(i-1).html()){
					let edu = $('select[name=\"info.edu' + i +'.eduId\"]')[0];
					let degree = $('select[name=\"info.edu' + i +'.degreeId\"]')[0];
					switch($('.infopledu .mt_education').eq(i-1).html()){
						case 'EMBA':
						case 'MBA':
						case '博士研究生':
							edu.options[1].selected = true;
							degree.options[1].selected = true;
							break;
						case 'MPA':
						case '硕士研究生':
							edu.options[2].selected = true;
							degree.options[2].selected = true;
							break;
						case '双学士':
							edu.options[3].selected = true;
							degree.options[3].selected = true;
							break;
						case '大学本科-一本':
						case '大学本科-二本':
						case '大学本科-三本':
							edu.options[4].selected = true;
							degree.options[4].selected = true;
							break;
						default:
							edu.options[5].selected = true;
							degree.options[5].selected = true;
							break
					}
				}
				if($('textarea[name=\"info.edu' + i +'.describe\"]') && $('.infopledu .mt_major').eq(i-1).html()){
					$('textarea[name=\"info.edu' + i +'.describe\"]').val($('.infopledu .mt_major').eq(i-1).html())
				}
			}
		}
		//工作经历
		if($('#experTable')){
			let length = $('.infoparttimejobs .infopl').length;
			for(let i=1; i<=length; i++){
				if($('input[name=\"info.exper' + i +'.company\"]') && $('.infoparttimejobs .mt_companyName').eq(i-1).html()){
					$('input[name=\"info.exper' + i +'.company\"]').val($('.infoparttimejobs .mt_companyName').eq(i-1).html())
				}
				if($('input[name=\"info.exper' + i +'.job\"]') && $('.infoparttimejobs .mt_positionName').eq(i-1).html()){
					$('input[name=\"info.exper' + i +'.job\"]').val($('.infoparttimejobs .mt_positionName').eq(i-1).html())
				}
				if($('input[name=\"info.exper' + i +'.startTime\"]') && $('.infoparttimejobs .mt_startDate').eq(i-1).html()){
					$('input[name=\"info.exper' + i +'.startTime\"]').val(formatDate($('.infoparttimejobs .mt_startDate').eq(i-1).html(), 2) + '-01')
				}
				if($('input[name=\"info.exper' + i +'.endTime\"]') && $('.infoparttimejobs .mt_endDate').eq(i-1).html()){
					$('input[name=\"info.exper' + i +'.endTime\"]').val(formatDate($('.infoparttimejobs .mt_endDate').eq(i-1).html(), 2) + '-01')
				}
				if($('input[name=\"info.exper' + i +'.dept\"]') && $('.infoparttimejobs .mt_department').eq(i-1).html()){
					$('input[name=\"info.exper' + i +'.dept\"]').val(formatDate($('.infoparttimejobs .mt_department').eq(i-1).html(), 2) + '-01')
				}
				if($('input[name=\"info.exper' + i +'.calling\"]') && $('.infoparttimejobs .mt_companyCat').eq(i-1).html()){
					$('input[name=\"info.exper' + i +'.calling\"]').val(formatDate($('.infoparttimejobs .mt_companyCat').eq(i-1).html(), 2) + '-01')
				}
				if($('textarea[name=\"info.exper' + i +'.description\"]') && $('.infoparttimejobs .mt_workList').eq(i-1).html()){
					$('textarea[name=\"info.exper' + i +'.description\"]').val($('.infoparttimejobs .mt_workList').eq(i-1).html())
				}
			}
		}
		
		//获奖经历
		if($('#encourageTable')){
			let length = $('.infoschaward .infopl').length;
			for(let i=1; i<=length; i++){
				if($('input[name=\"info.encourage' + i +'.name\"]') && $('.infoschaward .mt_awardsName').eq(i-1).html()){
					$('input[name=\"info.encourage' + i +'.name\"]').val($('.infoschaward .mt_awardsName').eq(i-1).html())
				}
				if($('input[name=\"info.encourage' + i +'.time\"]') && $('.infoschaward .mt_awardsDate').eq(i-1).html()){
					$('input[name=\"info.encourage' + i +'.time\"]').val(formatDate($('.infoschaward .mt_awardsDate').eq(i-1).html(), 2) + '-01')
				}
				if($('textarea[name=\"info.encourage' + i +'.description\"]') && $('.infoschaward .mt_awardsDes').eq(i-1).html()){
					$('textarea[name=\"info.encourage' + i +'.description\"]').val($('.infoschaward .mt_awardsDes').eq(i-1).html())
				}
			}
		}
		
		//家庭成员
		if($('#familyTr')){
			if($('input[name=\"info.family1.name\"]') && $('#mt_fmname').html()){
				$('input[name=\"info.family1.name\"]').val($('#mt_fmname').html())
			}
			if($('input[name=\"info.family1.job\"]') && $('#mt_fmposition').html()){
				$('input[name=\"info.family1.job\"]').val($('#mt_fmposition').html())
			}
			if($('input[name=\"info.family1.telephone\"]') && $('#mt_fmphone').html()){
				$('input[name=\"info.family1.telephone\"]').val($('#mt_fmphone').html())
			}
			if($('input[name=\"info.family1.company\"]') && $('#mt_fmwork').html()){
				$('input[name=\"info.family1.company\"]').val($('#mt_fmwork').html())
			}
		}
		
		//自我评价
		if($('#selfEval_2')){
			if($('textarea[name=\"user.selfEval\"]') && $('#mt_selfIntro').html()){
				$('textarea[name=\"user.selfEval\"]').val($('#mt_selfIntro').html())
			}
		}
		
		
		
	});
})()