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
		if ($('input[name=\"resume_name\"]')) {
			$('input[name=\"resume_name\"]').val($('#mt_name').html());
		}
		if ($('input[name=\"resume_height\"]')) {
			$('input[name=\"resume_height\"]').val($('#mt_height').html());
		}
		if ($('input[name=\"resume_address\"]')) {
			$('input[name=\"resume_address\"]').val($('#mt_postadd').html());
		}
		if ($('input[name=\"resume_gender\"]') && $('#mt_sex').html() == '男') {
			$('input[name=\"resume_gender\"]').eq(1).click();
		}
		if ($('input[name=\"resume_gender\"]') && $('#mt_sex').html() == '女') {
			$('input[name=\"resume_gender\"]').eq(0).click();
		}
		if ($('#birthYear') && $('#mt_birth').html()) {
			$('#birthYear').val($('#mt_birth').html());
		}
		if ($('input[name=\"resume_mobile\"]')) {
			$('input[name=\"resume_mobile\"]').val($('#mt_tel').html());
		}
		if ($('input[name=\"resume_certificate\"]') && $('#mt_id').html()) {
			$('input[name=\"resume_certificate\"]').val($('#mt_id').html());
		}
		if ($('input[name=\"resume_email\"]')) {
			$('input[name=\"resume_email\"]').val($('#mt_email').html());
		}
		if ($('input[name=\"emergencyContactPerson\"]') && $('#mt_jjlxr').html()) {
			$('input[name=\"emergencyContactPerson\"]').val($('#mt_jjlxr').html());
		}
		if ($('input[name=\"Textsecondtel\"]') && $('#mt_jjlxrtel').html()) {
			$('input[name=\"Textsecondtel\"]').val($('#mt_jjlxrtel').html());
		}
		if($('select[name=\"resume_birthday_year\"]').length && $('#mt_biryear').html()){
			let biryear = $('select[name=\"resume_birthday_year\"]')[0].options;
			let length = biryear.length;
			for(let i=0; i<length; i++){
				if(biryear[i].innerText == $('#mt_biryear').html()){
					biryear[i].selected = true;
				}
			}
		}
		if($('select[name=\"resume_birthday_month\"]').length && $('#mt_birmonth').html()){
			let birmonth = $('select[name=\"resume_birthday_month\"]')[0].options;
			let length = birmonth.length;
			for(let i=0; i<length; i++){
				if(birmonth[i].innerText == $('#mt_birmonth').html()){
					birmonth[i].selected = true;
				}
			}
		}
		if($('select[name=\"g_marital_status_id\"]').length && $('#mt_maritalstatus').html()){
			let marry = $('select[name=\"g_marital_status_id\"]')[0].options;
			switch($('#mt_maritalstatus').html()){
				case '未婚': marry[2].selected = true;break;
				case '已婚': marry[3].selected = true;break;
				case '离婚': marry[4].selected = true;break;
			}
		}
		if($('select[name=\"g_certificate_id\"]').length && $('#mt_idtype').html()){
			let idType = $('select[name=\"g_certificate_id\"]')[0].options;
			switch($('#mt_idtype').html()){
				case '身份证': idType[1].selected = true;break;
				case '护照': idType[5].selected = true;break;
				default: break;
			}
		}
		if($('select[name=\"resume_nation\"]').length && $('#mt_nation').html()){
			let nation = $('select[name=\"resume_nation\"]')[0].options;
			let length = nation.length;
			for(let i=0; i<length; i++){
				if(nation[i].innerText == $('#mt_nation').html()){
					nation[i].selected = true;
				}
			}
		}
		if($('select[name=\"resume_political\"]').length && $('#mt_polistatus').html()){
			let idType = $('select[name=\"resume_political\"]')[0].options;
			switch($('#mt_polistatus').html()){
				case '中共党员':
					idType[1].selected = true;
					break;
				case '中共预备党员':
					idType[1].selected = true;
					break;
				case '群众':
					idType[3].selected = true;
					break;
				case '共青团员':
					idType[2].selected = true;
					break;
				default:
					idType[4].selected = true;
					break
			}
		}
		if($('textarea[name=\"system_custom_253\"]').length && $('#mt_add').html()){
			$('textarea[name=\"system_custom_253\"]').val($('#mt_add').html())
		}
		if($('textarea[name=\"resume_jobdesc\"]').length && $('#mt_selfIntro').html()){
			$('textarea[name=\"resume_jobdesc\"]').val($('#mt_selfIntro').html())
		}
		if($('select[name=\"g_diploma_id\"]').length && $('select[name=\"system_custom_240\"]').length && $('#mt_edu').html()){
			let edu = $('select[name=\"g_diploma_id\"]')[0];
			let degree = $('select[name=\"system_custom_240\"]')[0].options;
			switch($('#mt_edu').html()){
				case 'MPA':
					edu.options[10].selected = true;
					degree[3].selected = true;
					break;
				case 'EMBA':
					edu.options[10].selected = true;
					degree[3].selected = true;
					break;
				case 'MBA':
					edu.options[9].selected = true;
					degree[3].selected = true;
					break;
				case '博士研究生':
					degree[3].selected = true;
					edu.options[10].selected = true;
					break;
				case '硕士研究生':
					edu.options[8].selected = true;
					degree[2].selected = true;
					break;
				case '双学士':
				case '大学本科-一本':
				case '大学本科-二本':
				case '大学本科-三本':
					edu.options[7].selected = true;
					degree[1].selected = true;
					break;
				case '大学专科':
					edu.options[6].selected = true;
					break;
				case '中专':
					edu.options[5].selected = true;
					break;
				case '技校/职高':
					edu.options[4].selected = true;
					break;
				case '高中':
					edu.options[3].selected = true;
					break;
				case '初中及以下':
					edu.options[2].selected = true;
					break;
				default:
					break
			}
		}
		if($('select[name=\"system_custom_178_year\"]').length && $('#mt_gradutetime').html()){
			let year = $('select[name=\"system_custom_178_year\"]')[0].options;
			let mouth = $('select[name=\"system_custom_178_month\"]')[0].options;
			let graduteYear = $('#mt_gradutetime').html().split('-')[0];
			let graduteMouth = $('#mt_gradutetime').html().split('-')[1];
			let len1 = year.length;
			let len2 = mouth.length;
			for(let i=0; i<len1; i++){
				if(year[i].innerText == graduteYear){
					year[i].selected = true;
				}
			}
			for(let i=0; i<len2; i++){
				if(mouth[i].innerText == graduteMouth){
					mouth[i].selected = true;
				}
			}
		}
		if ($('input[name=\"resume_postcode\"]') && $('#mt_zip').html()) {
			$('input[name=\"resume_postcode\"]').val($('#mt_zip').html());
		}
		if ($('input[name=\"system_custom_257\"]') && $('#mt_gudingtel').html()) {
			$('input[name=\"system_custom_257\"]').val($('#mt_gudingtel').html());
		}
		if ($('select[name=\"system_custom_236\"]').length && $('#mt_expectcity_city').html()) {
			let nation = $('select[name=\"system_custom_236\"]')[0].options;
			let length = nation.length;
			for(let i=0; i<length; i++){
				if(nation[i].innerText == $('#mt_expectcity_city').html()){
					nation[i].selected = true;
				}
			}
		}
		//教育经历
		if($('.infopledu').length){
			let len = $('.infopledu .infopl').length;
			for(let i=0; i<len; i++){
				if($('input[name=\"resume_education_school\"]').length && $('.infopledu .mt_schoolName').eq(i).html()){
					$('input[name=\"resume_education_school\"]').eq(i).val($('.infopledu .mt_schoolName').eq(i).html());
				}
				if($('select[name=\"resume_education_year_from\"]').eq(i).length && $('.infopledu .mt_startYearY').eq(i).html()){
					let startYear = $('select[name=\"resume_education_year_from\"]').eq(i)[0].options;
					let length = startYear.length;
					for(let j=0; j<length; j++){
						if(startYear[j].innerText == $('.infopledu .mt_startYearY').eq(i).html()){
							startYear[j].selected = true;
						}
					}
				}
				if($('select[name=\"resume_education_month_from\"]').eq(i).length && $('.infopledu .mt_startYearM').eq(i).html()){
					let startMouth = $('select[name=\"resume_education_month_from\"]').eq(i)[0].options;
					let length = startMouth.length;
					for(let j=0; j<length; j++){
						if(startMouth[j].innerText == $('.infopledu .mt_startYearM').eq(i).html()){
							startMouth[j].selected = true;
						}
					}
				}
				if($('select[name=\"resume_education_year_to\"]').eq(i).length && $('.infopledu .mt_endYearY').eq(i).html()){
					let endYear = $('select[name=\"resume_education_year_to\"]').eq(i)[0].options;
					let length = endYear.length;
					for(let j=0; j<length; j++){
						if(endYear[j].innerText == $('.infopledu .mt_endYearY').eq(i).html()){
							endYear[j].selected = true;
						}
					}
				}
				if($('select[name=\"resume_education_month_to\"]').eq(i).length && $('.infopledu .mt_endYearM').eq(i).html()){
					let endMouth = $('select[name=\"resume_education_month_to\"]').eq(i)[0].options;
					let length = endMouth.length;
					for(let j=0; j<length; j++){
						if(endMouth[j].innerText == $('.infopledu .mt_endYearM').eq(i).html()){
							endMouth[j].selected = true;
						}
					}
				}
				if($('select[name=\"g_degree_id\"]').eq(i).length && $('.infopledu .mt_degree').eq(i).html()){
					let degree = $('select[name=\"g_degree_id\"]').eq(i)[0].options;
					switch($('.infopledu .mt_degree').eq(i).html()){
						case '学士':degree[1].selected = true;break;
						case '双学士':degree[2].selected = true;break;
						case '硕士':degree[3].selected = true;break;
						case '博士':degree[5].selected = true;break;
					}
				}
				if($('input[name=\"resume_education_major_name\"]').length && $('.infopledu .mt_professional').eq(i).html()){
					$('input[name=\"resume_education_major_name\"]').eq(i).val($('.infopledu .mt_professional').eq(i).html());
				}
				if($('input[name=\"system_custom_210\"]').length && $('.infopledu .mt_professionalranking').eq(i).html()){
					$('input[name=\"system_custom_210\"]').eq(i).val($('.infopledu .mt_professionalranking').eq(i).html());
				}
				if($('textarea[name=\"resume_education_major_desc\"]').length && $('.infopledu .mt_major').eq(i).html()){
					$('textarea[name=\"resume_education_major_desc\"]').eq(i).val($('.infopledu .mt_major').eq(i).html());
				}
			}
		}
		//实习经历
		if($('.infoparttimejobs').length){
			let length = $('.infoparttimejobs .infopl').length;
			for(let i=0; i<length; i++){
				if($('select[name=\"system_custom_215_year_from\"]').eq(i).length && $('.infoparttimejobs .mt_startDate').eq(i).html()){
					let startYear = $('select[name=\"system_custom_215_year_from\"]').eq(i)[0].options;
					let length = startYear.length;
					for(let j=0; j<length; j++){
						if(startYear[j].innerText == $('.infoparttimejobs .mt_startDate').eq(i).html().split('-')[0]){
							startYear[j].selected = true;
						}
					}
				}
				if($('select[name=\"system_custom_215_month_from\"]').eq(i).length && $('.infoparttimejobs .mt_startDate').eq(i).html()){
					let startMouth = $('select[name=\"system_custom_215_month_from\"]').eq(i)[0].options;
					let length = startMouth.length;
					for(let j=0; j<length; j++){
						if(startMouth[j].innerText == $('.infoparttimejobs .mt_startDate').eq(i).html().split('-')[1]){
							startMouth[j].selected = true;
						}
					}
				}
				if($('select[name=\"system_custom_215_year_to\"]').eq(i).length && $('.infoparttimejobs .mt_endDate').eq(i).html()){
					let endYear = $('select[name=\"system_custom_215_year_to\"]').eq(i)[0].options;
					let length = endYear.length;
					for(let j=0; j<length; j++){
						if(endYear[j].innerText == $('.infoparttimejobs .mt_endDate').eq(i).html().split('-')[0]){
							endYear[j].selected = true;
						}
					}
				}
				if($('select[name=\"system_custom_215_month_to\"]').eq(i).length && $('.infoparttimejobs .mt_endDate').eq(i).html()){
					let endMouth = $('select[name=\"system_custom_215_month_to\"]').eq(i)[0].options;
					let length = endMouth.length;
					for(let j=0; j<length; j++){
						if(endMouth[j].innerText == $('.infoparttimejobs .mt_endDate').eq(i).html().split('-')[1]){
							endMouth[j].selected = true;
						}
					}
				}
				if($('input[name=\"system_custom_216\"]').length && $('.infoparttimejobs .mt_companyName').eq(i).html()){
					$('input[name=\"system_custom_216\"]').eq(i).val($('.infoparttimejobs .mt_companyName').eq(i).html());
				}
				if($('input[name=\"system_custom_217\"]').length && $('.infoparttimejobs .mt_positionName').eq(i).html()){
					$('input[name=\"system_custom_217\"]').eq(i).val($('.infoparttimejobs .mt_positionName').eq(i).html());
				}
				if($('select[name=\"system_custom_218\"]').eq(i).length && $('.infoparttimejobs .mt_workcat').eq(i).html()){
					let type = $('select[name=\"system_custom_218\"]').eq(i)[0].options;
					switch($('.infoparttimejobs .mt_workcat').eq(i).html()){
						case '实习':type[1].selected = true;break;
						case '全职':type[2].selected = true;break;
					}
				}
				if($('textarea[name=\"system_custom_219\"]').length && $('.infoparttimejobs .workContent').eq(i).html()){
					$('textarea[name=\"system_custom_219\"]').eq(i).val($('.infoparttimejobs .workContent').eq(i).html());
				}
			}
		}
		//项目经历
		if($('.infoproject').length){
			let length = $('.infoproject .infopl').length;
			for(let i=0; i<length; i++){
				if($('select[name=\"system_custom_220_year_from\"]').eq(i).length && $('.infoproject .mt_prostarttime').eq(i).html()){
					let startYear = $('select[name=\"system_custom_220_year_from\"]').eq(i)[0].options;
					let length = startYear.length;
					for(let j=0; j<length; j++){
						if(startYear[j].innerText == $('.infoproject .mt_prostarttime').eq(i).html().split('-')[0]){
							startYear[j].selected = true;
						}
					}
				}
				if($('select[name=\"system_custom_220_month_from\"]').eq(i).length && $('.infoproject .mt_prostarttime').eq(i).html()){
					let startMouth = $('select[name=\"system_custom_220_month_from\"]').eq(i)[0].options;
					let length = startMouth.length;
					for(let j=0; j<length; j++){
						if(startMouth[j].innerText == $('.infoproject .mt_prostarttime').eq(i).html().split('-')[1]){
							startMouth[j].selected = true;
						}
					}
				}
				if($('select[name=\"system_custom_220_year_to\"]').eq(i).length && $('.infoproject .mt_proendtime').eq(i).html()){
					let endYear = $('select[name=\"system_custom_220_year_to\"]').eq(i)[0].options;
					let length = endYear.length;
					for(let j=0; j<length; j++){
						if(endYear[j].innerText == $('.infoproject .mt_proendtime').eq(i).html().split('-')[0]){
							endYear[j].selected = true;
						}
					}
				}
				if($('select[name=\"system_custom_220_month_to\"]').eq(i).length && $('.infoproject .mt_proendtime').eq(i).html()){
					let endMouth = $('select[name=\"system_custom_220_month_to\"]').eq(i)[0].options;
					let length = endMouth.length;
					for(let j=0; j<length; j++){
						if(endMouth[j].innerText == $('.infoproject .mt_proendtime').eq(i).html().split('-')[1]){
							endMouth[j].selected = true;
						}
					}
				}
				if($('input[name=\"system_custom_221\"]').length && $('.infoproject .mt_projectName').eq(i).html()){
					$('input[name=\"system_custom_221\"]').eq(i).val($('.infoproject .mt_projectName').eq(i).html());
				}
				if($('textarea[name=\"system_custom_222\"]').length && $('.infoproject .mt_proList').eq(i).html()){
					$('textarea[name=\"system_custom_222\"]').eq(i).val($('.infoproject .mt_proList').eq(i).html());
				}
			}
		}
		//社团活动
		if($('.infoschoolclub').length){
			let length = $('.infoschoolclub .infopl').length;
			for(let i=0; i<length; i++){
				if($('textarea[name=\"system_custom_223\"]').length && $('.infoschaward .infopl').eq(i).html()){
					let awardList = '获奖名称：' + $('.infoschaward .mt_awardsName').eq(i).html() + '\\n'
								  + '获奖类型：' + $('.infoschaward .mt_awardsType').eq(i).html() + '\\n'
								  + '获奖描述：' + $('.infoschaward .mt_awardsDes').eq(i).html() + '\\n';
					$('textarea[name=\"system_custom_223\"]').eq(i).val(awardList);
				}
				if($('textarea[name=\"system_custom_224\"]').length && $('.infoschoolclub .infopl').eq(i).html()){
					let schoolClub = '社团名称：' + $('.infoschoolclub .mt_schClubName').eq(i).html() + '\\n'
								   + '担任职务：' + $('.infoschoolclub .mt_positionName').eq(i).html() + '\\n'
								   + '工作职责：' + $('.infoschoolclub .mt_workDes').eq(i).html() + '\\n';
					$('textarea[name=\"system_custom_224\"]').eq(i).val(schoolClub);
				}
			}
		}
		//技能、爱好
		if($('.infoEnglishSkill').length){
			if($('select[name=\"system_custom_237\"]').length && $('.infoEnglishSkill .mt_skillEngLevel').last().html()){
				let engLevel = $('select[name=\"system_custom_237\"]')[0].options;
				switch($('.infoEnglishSkill .mt_skillEngLevel').last().html()){
					case '大学英语四级':
						engLevel[4].selected = true;
						break;
					case '大学英语六级':
						engLevel[3].selected = true;
						break;
					case '专业四级':
						engLevel[2].selected = true;
						break;
					case '专业八级':
						engLevel[1].selected = true;
						break;
				}
			}
			if($('input[name=\"system_custom_229\"]').length && $('#mt_skill').html()){
				$('input[name=\"system_custom_229\"]').val($('#mt_skill').html())
			}
		}
		//家庭成员
		if($('input[name=\"resume_family_name\"]').length && $('#mt_fmname').html()){
			$('input[name=\"resume_family_name\"]').val($('#mt_fmname').html())
		}
		if($('input[name=\"resume_family_work\"]').length && $('#mt_fmwork').html()){
			$('input[name=\"resume_family_work\"]').val($('#mt_fmwork').html())
		}
		if($('input[name=\"resume_family_position\"]').length && $('#mt_fmposition').html()){
			$('input[name=\"resume_family_position\"]').val($('#mt_fmposition').html())
		}
		if($('input[name=\"resume_family_contact\"]').length && $('#mt_fmphone').html()){
			$('input[name=\"resume_family_contact\"]').val($('#mt_fmphone').html())
		}
	});
})()