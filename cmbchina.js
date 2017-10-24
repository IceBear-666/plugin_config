(function() {
	KISSY.one('.quick-write').on('click',
	function() {
		var event = document.createEvent('HTMLEvents');
		event.initEvent('change', true, false);
		
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
		
		if (KISSY.one('input[name=\"ctl00$right$tbTrueName\"]')) {
			KISSY.one('input[name=\"ctl00$right$tbTrueName\"]').val(KISSY.one('#mt_name').html());
		}
		if (KISSY.one('input[name=\"englishName\"]')) {
			KISSY.one('input[name=\"englishName\"]').val(KISSY.one('#mt_name').html());
		}
		if (KISSY.one('#gender1') && KISSY.one('#mt_sex').html() == '男') {
			document.getElementById('gender1').click();
		}
		if (KISSY.one('#gender2') && KISSY.one('#mt_sex').html() == '女') {
			document.getElementById('gender2').click();
		}
		if (KISSY.one('input[name=\"ctl00$right$tbBOD\"]')) {
			KISSY.one('input[name=\"ctl00$right$tbBOD\"]').val(formatDate(KISSY.one('#mt_birth').html(),2) + '-01');
		}
		if (KISSY.one('input[name=\"ctl00$right$tbMobile\"]')) {
			KISSY.one('input[name=\"ctl00$right$tbMobile\"]').val(KISSY.one('#mt_tel').html());
		}
		if (KISSY.one('input[name=\"ctl00$right$tbWeight\"]')) {
			KISSY.one('input[name=\"ctl00$right$tbWeight\"]').val(KISSY.one('#mt_weight').html());
		}
		if (KISSY.one('input[name=\"ctl00$right$tbHeight\"]')) {
			KISSY.one('input[name=\"ctl00$right$tbHeight\"]').val(KISSY.one('#mt_height').html());
		}
		if (KISSY.one('input[name=\"idNumber\"]') && KISSY.one('#mt_id').html()) {
			KISSY.one('input[name=\"idNumber\"]').val(KISSY.one('#mt_id').html());
		}
		if (KISSY.one('input[name=\"ctl00$right$tbCurPlace\"]')) {
			KISSY.one('input[name=\"ctl00$right$tbCurPlace\"]').val(KISSY.one('#mt_add').html());
		}
		if (KISSY.one('input[name=\"ctl00$right$tbEmail\"]')) {
			KISSY.one('input[name=\"ctl00$right$tbEmail\"]').val(KISSY.one('#mt_email').html());
		}
		if (KISSY.one('input[name=\"ctl00$right$tbAddress\"]') && KISSY.one('#mt_jjlxr').html()) {
			KISSY.one('input[name=\"ctl00$right$tbAddress\"]').val(KISSY.one('#mt_postadd').html());
		}
		if (KISSY.one('input[name=\"EmergencyContact\"]') && KISSY.one('#mt_jjlxr').html()) {
			KISSY.one('input[name=\"EmergencyContact\"]').val(KISSY.one('#mt_jjlxr').html());
		}
		if (KISSY.one('input[name=\"EmergencyContactPhone\"]') && KISSY.one('#mt_jjlxrtel').html()) {
			KISSY.one('input[name=\"EmergencyContactPhone\"]').val(KISSY.one('#mt_jjlxrtel').html());
		}
		if($('select[name=\"ctl00$right$ddSex\"]').length && $('#mt_sex').html()){
			let sex = $('select[name=\"ctl00$right$ddSex\"]')[0].options;
			if($('#mt_sex').html() == '男'){
				sex[1].selected = true;
			}else if($('#mt_sex').html() == '女'){
				sex[2].selected = true;
			}
			
		}
		if($('select[name=\"ctl00$right$ddMarriage\"]').length && $('#mt_maritalstatus').html()){
			let marriage = $('select[name=\"ctl00$right$ddMarriage\"]')[0].options;
			if($('#mt_maritalstatus').html() == '未婚'){
				marriage[1].selected = true;
			}else if($('#mt_maritalstatus').html() == '已婚'){
				marriage[2].selected = true;
			}else{
				marriage[0].selected = true;
			}
		}
		if($('select[name=\"ctl00$right$ddPolitical\"]').length && $('#mt_polistatus').html()){
			let polistatus = $('select[name=\"ctl00$right$ddPolitical\"]')[0].options;
			switch($('#mt_polistatus').html()){
				case '群众': 
					polistatus[1].selected = true;
					break;
				case '中共党员': 
					polistatus[2].selected = true;
					break;
				case '中共预备党员': 
					polistatus[3].selected = true;
					break;
				case '共青团员': 
					polistatus[3].selected = true;
					break;
				default : 
					polistatus[0].selected = true;
					break;
			}
		}
		if($('select[name=\"ctl00$right$ddTopDegree\"]').length && $('#mt_edu').html()){
			let studly_level = $('select[name=\"ctl00$right$ddTopDegree\"]')[0];
			switch ($('#mt_edu').html()) {
				case '大学专科':
					studly_level.options[5].selected = true;
					break;
				case '海外本科':
				case '大学本科-一本':
				case '大学本科-二本':
				case '大学本科-三本':
					studly_level.options[4].selected = true;
					break;
				case 'MPA':
				case 'MBA':
				case '硕士研究生':
					studly_level.options[2].selected = true;
					break;
				case '博士研究生':
					studly_level.options[1].selected = true;
					break
			}
		
		}
		if($('select[name=\"ctl00$right$ddNativeProvince\"]').length && $('#mt_nativeplace').html()){
			let length = $('select[name=\"ctl00$right$ddNativeProvince\"]')[0].options.length;
			for(let i=0;i<length;i++){
				if($('select[name=\"ctl00$right$ddNativeProvince\"]')[0].options[i].innerText = $('#mt_nativeplace').html()){
					$('select[name=\"ctl00$right$ddNativeProvince\"]')[0].options[i].selected = true;
					$('input[name=\"ctl00$right$tbNativeCity\"]').val($('#mt_native_city').html());
				}
			}
		}
		if($('input[name=\"ctl00$right$tbPhone\"]').length && $('#mt_gudingtel').html()){
			$('input[name=\"ctl00$right$tbPhone\"]').val($('#mt_gudingtel').html());
		}
		if($('input[name=\"ctl00$right$tbGraduatedDate\"]').length && $('#mt_gradutetime').html()){
			$('input[name=\"ctl00$right$tbGraduatedDate\"]').val(formatDate($('#mt_gradutetime').html(),2) + '-01');
		}
		if($('input[name=\"ctl00$right$tbFromProvince\"]').length && $('#mt_hukoucity').html()){
			$('input[name=\"ctl00$right$tbFromProvince\"]').val($('#mt_hukoucity').html());
		}
		if($('input[name=\"ctl00$right$tbZipCode\"]').length && $('#mt_zip').html()){
			$('input[name=\"ctl00$right$tbZipCode\"]').val($('#mt_zip').html());
		}
		if($('select[name=\"ctl00$right$ddLanguageType1\"]').length){
			$('select[name=\"ctl00$right$ddLanguageType1\"]')[0].options[1].selected = true;
			$('select[name=\"ctl00$right$ddLanguageType1\"]')[0].options[1].dispatchEvent(event);
			setTimeout(function(){
				let ctype = $('select[name=\"ctl00$right$ddLanguageLevel1\"]')[0].options;
				switch($('.infoEnglishSkill .mt_skillEngLevel').last().html()){
					case '大学英语四级':
						ctype[1].selected = true;
						ctype[1].dispatchEvent(event);
						break;
					case '大学英语六级':
						ctype[2].selected = true;
						ctype[2].dispatchEvent(event);
						break;
					case '专业四级':
						ctype[9].selected = true;
						ctype[9].dispatchEvent(event);
						break;
					case '专业八级':
						ctype[10].selected = true;
						ctype[10].dispatchEvent(event);
						break;
				}
				$('input[name=\"ctl00$right$tbScore1\"]').val($('.infoEnglishSkill .mt_skillEngSorce').last().html())
			},200);
		}
		
		//教育背景
		if($('#edu1').length){
			let length = $('.infopledu .infopl').length;
			let n=0;
			for(let i=length-1; i>=0; i--){
				n++;
				if($('input[name=\"ctl00$right$tbStartDate' + n + '\"]').length && $('.infopledu .mt_startYear').eq(i).html()){
					$('input[name=\"ctl00$right$tbStartDate' + n + '\"]').val(formatDate($('.infopledu .mt_startYear').eq(i).html(),2) + '-01');
				}
				if($('input[name=\"ctl00$right$tbEndDate' + n + '\"]').length && $('.infopledu .mt_endYear').eq(i).html()){
					$('input[name=\"ctl00$right$tbEndDate' + n + '\"]').val(formatDate($('.infopledu .mt_endYear').eq(i).html(),2) + '-01');
				}
				if($('select[name=\"ctl00$right$ddDegree' + n + '\"]').length && $('.infopledu .mt_education').eq(i).html()){
					let studly_degree = $('select[name=\"ctl00$right$ddDegree' + n + '\"]')[0];
					let studly_level = $('select[name=\"ctl00$right$ddGetLevel' + n + '\"]')[0];
					switch ( $('.infopledu .mt_education').eq(i).html()) {
						case '大学专科':
							studly_degree.options[5].selected = true;
							studly_level.options[4].selected = true;
							break;
						case '海外本科':
						case '大学本科-一本':
						case '大学本科-二本':
						case '大学本科-三本':
							studly_degree.options[4].selected = true;
							studly_level.options[4].selected = true;
							break;
						case 'MPA':
						case 'MBA':
						case '硕士研究生':
							studly_degree.options[2].selected = true;
							studly_level.options[2].selected = true;
							break;
						case '博士研究生':
							studly_degree.options[1].selected = true;
							studly_level.options[1].selected = true;
							break
					}
				
				}
				if($('input[name=\"ctl00$right$tbEndDate' + n + '\"]').length && $('.infopledu .mt_endYear').eq(i).html()){
					$('input[name=\"ctl00$right$tbEndDate' + n + '\"]').val(formatDate($('.infopledu .mt_endYear').eq(i).html(),2) + '-01');
				}
				if($('select[name=\"ctl00$right$ddSchool' + n + '\"]').length && $('.infopledu .mt_schoolName').eq(i).html()){
					let school = $('select[name=\"ctl00$right$ddSchool' + n + '\"]')[0].options;
					let len = school.length;
					for(let j=0; j<len; j++){
						if(school[j].innerText == $('.infopledu .mt_schoolName').eq(i).html()){
							school[j].selected = true;
							school[j].dispatchEvent(event);
						}else{
							school[1].selected = true;
							school[1].dispatchEvent(event);
							$('input[name=\"ctl00$right$tbSchoolNotInList' + n + '\"]').val($('.infopledu .mt_schoolName').eq(i).html());
						}
					}
				}
				if($('input[name=\"ctl00$right$tbMajorName' + n + '\"]').length && $('.infopledu .mt_professional').eq(i).html()){
					$('input[name=\"ctl00$right$tbMajorName' + n + '\"]').val(formatDate($('.infopledu .mt_professional').eq(i).html(),2) + '-01');
				}
				if($('input[name=\"ctl00$right$tbCollege' + n + '\"]').length && $('.infopledu .mt_academy').eq(i).html()){
					$('input[name=\"ctl00$right$tbCollege' + n + '\"]').val(formatDate($('.infopledu .mt_academy').eq(i).html(),2) + '-01');
				}
			}
		}
		//学生工作
		if($('#schooljob1').length){
			let length = $('.infoschoolclub .infopl').length;
			for(let i=0; i<length; i++){
				if($('input[name=\"role' + (i+1) + '\"]').length && $('.infoschoolclub .mt_positionName').eq(i).html()){
					$('input[name=\"role' + (i+1) + '\"]').val($('.infoschoolclub .mt_positionName').eq(i).html());
				}
				if($('input[name=\"startdate' + (i+1) + '\"]').length && $('.infoschoolclub .mt_startDate').eq(i).html()){
					$('input[name=\"startdate' + (i+1) + '\"]').val(formatDate($('.infoschoolclub .mt_startDate').eq(i).html(),2) + '-01');
				}
				if($('input[name=\"enddate' + (i+1) + '\"]').length && $('.infoschoolclub .mt_endDate').eq(i).html()){
					$('input[name=\"enddate' + (i+1) + '\"]').val(formatDate($('.infoschoolclub .mt_endDate').eq(i).html(),2) + '-01');
				}
				if($('textarea[name=\"achievement' + (i+1) + '\"]').length && $('.infoschoolclub .mt_workDes').eq(i).html()){
					$('textarea[name=\"achievement' + (i+1) + '\"]').val($('.infoschoolclub .mt_workDes').eq(i).html());
				}
			}
		}
		//实习经历
		if($('#job1').length){
			let length = $('.infoparttimejobs .infopl').length;
			for(let i=0; i<length; i++){
				if($('input[name=\"companyname' + (i+1) + '\"]').length && $('.infoparttimejobs .mt_companyName').eq(i).html()){
					$('input[name=\"companyname' + (i+1) + '\"]').val($('.infoparttimejobs .mt_companyName').eq(i).html());
				}
				if($('input[name=\"startdate' + (i+1) + '\"]').length && $('.infoparttimejobs .mt_startDate').eq(i).html()){
					$('input[name=\"startdate' + (i+1) + '\"]').val(formatDate($('.infoparttimejobs .mt_startDate').eq(i).html(),2) + '-01');
				}
				if($('input[name=\"enddate' + (i+1) + '\"]').length && $('.infoparttimejobs .mt_endDate').eq(i).html()){
					$('input[name=\"enddate' + (i+1) + '\"]').val(formatDate($('.infoparttimejobs .mt_endDate').eq(i).html(),2) + '-01');
				}
				if($('input[name=\"role' + (i+1) + '\"]').length && $('.infoparttimejobs .mt_positionName').eq(i).html()){
					$('input[name=\"role' + (i+1) + '\"]').val($('.infoparttimejobs .mt_positionName').eq(i).html());
				}
				if($('input[name=\"department' + (i+1) + '\"]').length && $('.infoparttimejobs .mt_department').eq(i).html()){
					$('input[name=\"department' + (i+1) + '\"]').val($('.infoparttimejobs .mt_department').eq(i).html());
				}
				if($('textarea[name=\"achievement' + (i+1) + '\"]').length && $('.infoparttimejobs .workDes').eq(i).html()){
					$('textarea[name=\"achievement' + (i+1) + '\"]').val($('.infoparttimejobs .workDes').eq(i).html());
				}
			}
		}
		//其他信息
		if($('#reward1').length){
			let length = $('.infoschaward .infopl').length;
			for(let i=0; i<length; i++){
				if($('input[name=\"rewarddate' + (i+1) + '\"]').length && $('.infoschaward .mt_awardsDate').eq(i).html()){
					$('input[name=\"rewarddate' + (i+1) + '\"]').val(formatDate($('.infoschaward .mt_awardsDate').eq(i).html(),2) + '-01');
				}
				if($('input[name=\"rewardname' + (i+1) + '\"]').length && $('.infoschaward .mt_awardsName').eq(i).html()){
					$('input[name=\"rewardname' + (i+1) + '\"]').val($('.infoschaward .mt_awardsName').eq(i).html());
				}
			}
		}
		if($('#qs1').length){
			if($('input[name=\"qsname1\"]').length && $('#mt_fmname').html()){
				$('input[name=\"qsname1\"]').val($('#mt_fmname').html());
			}
			if($('input[name=\"qscompany1\"]').length && $('#mt_fmwork').html()){
				$('input[name=\"qscompany1\"]').val($('#mt_fmwork').html());
			}
			if($('input[name=\"qspost1\"]').length && $('#mt_fmposition').html()){
				$('input[name=\"qspost1\"]').val($('#mt_fmposition').html());
			}
		}
		if($('#advantage').length && $('#mt_skill').html()){
			$('#advantage').val($('#mt_skill').html())
		}
		if($('#selfintro').length && $('#mt_selfIntro').html()){
			$('#selfintro').val($('#mt_selfIntro').html())
		}
	});
})()