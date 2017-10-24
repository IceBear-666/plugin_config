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
		function dispatch(el, type){      
		   	let evt = document.createEvent('Event');    
		    evt.initEvent('click',true,true);    
		    el.dispatchEvent(evt);  
		}
		function formatDate(value,length) {
			if(length == undefined || length == 3){
				let newDate = value.split('-');
				for (let i = 0; i < newDate.length; i++) {
					if (parseInt(newDate[i]) < 10) {
						newDate[i] = '0' + newDate[i]
					}
				}
				return newDate.join('-')
			}
			if(length == 2){
				let newDate = value.split('-');
				for (let i = 0; i < newDate.length; i++) {
					if (parseInt(newDate[i]) < 10) {
						newDate[i] = '0' + newDate[i]
					}
				}
				newDate = newDate.slice(0,2);
				return newDate.join('-')
			}
		}

		var event = document.createEvent('HTMLEvents');
		event.initEvent('change', true, false);
		
		var date = new Date();
		if ($('#personInfo').prev().html() == '个人信息') {
			if ($('input[name=\"NAME\"]').length) {
				$('input[name=\"NAME\"]').val($('#mt_name').html())
			}
			if ($('input[name=\"FREE6\"]').length) {
				$('input[name=\"FREE6\"]').val(date.getFullYear() - $('#mt_biryear').html())
			}
			if ($('li[data-name=\"GENDER\"]').length && $('#mt_sex').html() == '男') {
				$('li[data-name=\"GENDER\"] span i').eq(0).click()
			}
			if ($('li[data-name=\"GENDER\"]').length && $('#mt_sex').html() == '女') {
				$('li[data-name=\"GENDER\"] span i').eq(1).click()
			}
			if ($('input[name=\"BIRTHDAY\"]').length && $('#mt_birth').html()) {
				var birth = $('#mt_birth').html().split('-');
				for (var i in birth) {
					if (birth[i].length < 2) {
						birth[i] = '0' + birth[i]
					}
					var birthr = birth.join('-')
				}
				$('input[name=\"BIRTHDAY\"]').val(birthr)
			}
			if ($('#divselect').length && $('#mt_idtype').html()) {
				switch ($('#mt_idtype').html()) {
				case '身份证':
					var btn1 = $('#divselect ul li a').eq(0)[0];  
					dispatch(btn1, 'click');
					break;
				case '护照':
					var btn1 = $('#divselect ul li a').eq(1)[0];  
					dispatch(btn1, 'click');
					break;
				case '军官证':
					var btn1 = $('#divselect ul li a').eq(2)[0];  
					dispatch(btn1, 'click');
					break;
				default:
					var btn1 = $('#divselect ul li a').eq(3)[0];  
					dispatch(btn1, 'click');
					break
				}
			}
			if($('#citySelectFREE14 ul') && $('#mt_nativeplace').html()){
				let length = $('#citySelectFREE14 ul li').length;
				for(let i=0; i<length; i++){
					if($('#citySelectFREE14 ul li').eq(i).text() == $('#mt_nativeplace').html()){
						let test1 = $('#citySelectFREE14 ul li a').eq(i)[0];
						dispatch(test1, 'click');
						setTimeout(function(){
							let len = $('#city2SelectFREE14 ul li').length;
							for(let j=0; j<len; j++){
								if($('#city2SelectFREE14 ul li').eq(j).text() == $('#mt_native_city').html()){
									let test2 = $('#city2SelectFREE14 ul li a').eq(j)[0];
									dispatch(test2, 'click');
								}
							}	
						},200)
					}
				}
			}
			if($('#divselect101 ul').length && $('#mt_expectcity_city').html()){
				let length = $('#divselect101 ul li').length;
				for(let i=0; i<length; i++){
					if($('#divselect101 ul li').eq(i).text().substring(0,2) == $('#mt_expectcity_city').html().substring(0,2)){
						let test1 = $('#divselect101 ul li a').eq(i)[0];
						dispatch(test1, 'click');
					}
				}
			}
			if ($('input[name=\"DOCUMENT_NUMBER\"]').length) {
				$('input[name=\"DOCUMENT_NUMBER\"]').val($('#mt_id').html())
			}
			if ($('#nation_name').length) {
				$('#nation_name').val($('#mt_nation').html())
			}
			if ($('input[name=\"FREE8\"]').length) {
				$('input[name=\"FREE8\"]').val($('#mt_jjlxr').html())
			}
			if ($('input[name=\"FREE9\"]').length) {
				$('input[name=\"FREE9\"]').val($('#mt_jjlxrtel').html())
			}
			if ($('input[name=\"FREE10\"]').length) {
				$('input[name=\"FREE10\"]').val($('#mt_wxname').html())
			}
			if ($('input[name=\"FREE11\"]').length) {
				$('input[name=\"FREE11\"]').val($('#mt_qqname').html())
			}
			if ($('input[name=\"FREE12\"]').length) {
				$('input[name=\"FREE12\"]').val($('#mt_skill').html())
			}
			if ($('input[name=\"FREE4\"]').length && $('#mt_gradutetime').html()) {
				if ($('#mt_gradutetime').html().length < 7) {
					$('input[name=\"FREE4\"]').val($('#mt_gradutetime').html().split('-').join('-0') + '-01')
				} else {
					$('input[name=\"FREE4\"]').val($('#mt_gradutetime').html() + '-01')
				}
			}
			if ($('input[name=\"HEIGHT\"]').length) {
				$('input[name=\"HEIGHT\"]').val($('#mt_height').html())
			}
			if ($('input[name=\"WEIGHT\"]').length) {
				$('input[name=\"WEIGHT\"]').val($('#mt_weight').html())
			}
			if ($('input[name=\"EMAIL\"]').length) {
				$('input[name=\"EMAIL\"]').val($('#mt_email').html())
			}
			if ($('li[data-name=\"IS_MARRIED\"]').length && $('#mt_maritalstatus').html() == '未婚') {
				$('li[data-name=\"IS_MARRIED\"] span i').eq(0).click()
			}
			if ($('li[data-name=\"IS_MARRIED\"]').length && $('#mt_maritalstatus').html() == '已婚') {
				$('li[data-name=\"IS_MARRIED\"] span i').eq(1).click()
			}
			if ($('li[data-name=\"IS_MARRIED\"]').length && $('#mt_maritalstatus').html() == '离异') {
				$('li[data-name=\"IS_MARRIED\"] span i').eq(2).click()
			}
			if ($('#divselect3').length && $('#mt_polistatus').html()) {
				switch ($('#mt_polistatus').html()) {
				case '群众':
					var btn1 = $('#divselect3 ul li a').eq(1)[0];  
					dispatch(btn1, 'click');
					break;
				case '共青团员':
					var btn1 = $('#divselect3 ul li a').eq(2)[0];  
					dispatch(btn1, 'click');
					break;
				case '中共党员':
				case '中共预备党员':
					var btn1 = $('#divselect3 ul li a').eq(3)[0];  
					dispatch(btn1, 'click');
					break;
				case '中国民主同盟':
				case '中国民主建国会':
				case '中国民主促进会':
				case '台湾民主自治同盟':
					var btn1 = $('#divselect3 ul li a').eq(4)[0];  
					dispatch(btn1, 'click');
					break;
				default:
					var btn1 = $('#divselect3 ul li a').eq(5)[0];  
					dispatch(btn1, 'click');
					break
				}
			}
			if ($('#divselect4').length && $('#mt_livecity_pro').html()) {
				for (var i = 0; i < $('#divselect4 ul li a').length; i++) {
					if ($('#divselect4 ul li a').eq(i).html() == $('#mt_livecity_pro').html()) {
						var btn1 = $('#divselect4 ul li a').eq(i)[0];  
						dispatch(btn1, 'click');
					}
				}
			}
			window.setTimeout(function() {
				if ($('#divselect5').length && $('#mt_livecity_city').html()) {
					for (var i = 0; i < $('#divselect5 ul li a').length; i++) {
						if ($('#divselect5 ul li a').eq(i).html() == $('#mt_livecity_city').html()) {
							var btn1 = $('#divselect5 ul li a').eq(i)[0];  
							dispatch(btn1, 'click');
						}
					}
				}
			},
			200);
			if ($('#divselect6').length && $('#mt_hukoucitynow').html()) {
				for (var i = 0; i < $('#divselect6 ul li a').length; i++) {
					if ($('#divselect6 ul li a').eq(i).html() == $('#mt_hukoucitynow').html()) {
						var btn1 = $('#divselect6 ul li a').eq(i)[0];  
						dispatch(btn1, 'click');
					}
				}
			}
			window.setTimeout(function() {
				if ($('#divselect7').length && $('#mt_hukoucitynow_city').html()) {
					for (var i = 0; i < $('#divselect7 ul li a').length; i++) {
						if ($('#divselect7 ul li a').eq(i).html() == $('#mt_hukoucitynow_city').html()) {
							var btn1 = $('#divselect7 ul li a').eq(i)[0];  
							dispatch(btn1, 'click');
						}
					}
				}
			},
			200);
			if ($('#personal_evaluation').length) {
				$('#personal_evaluation').val($('#mt_selfIntro').html())
			}
			if ($('input[name=\"MOBILE_NO\"]').length) {
				$('input[name=\"MOBILE_NO\"]').val($('#mt_tel').html())
			}
		}
		if ($('#personInfo').parent().find('h5').html() == '教育经历' || $('#personInfo').parent().find('h5').html() == '教育背景') {
			for (var i = 0; i < $('.infopledu').length; i++) {
				var j = $('.educate_top li').length;
				if ($('input[name=\"BEGIN_TIME_b\"]').length) {
					$('input[name=\"BEGIN_TIME_b\"]').val($('.infopledu .mt_startYearY').eq(j - 2).html())
				}
				if ($('input[name=\"BEGIN_TIME_e\"]').length) {
					$('input[name=\"BEGIN_TIME_e\"]').val($('.infopledu .mt_startYearM').eq(j - 2).html())
				}
				if ($('input[name=\"END_TIME_b\"]').length) {
					$('input[name=\"END_TIME_b\"]').val($('.infopledu .mt_endYearY').eq(j - 2).html())
				}
				if ($('input[name=\"END_TIME_e\"]').length) {
					$('input[name=\"END_TIME_e\"]').val($('.infopledu .mt_endYearM').eq(j - 2).html())
				}
				if ($('input[name=\"FREE6\"]').length) {
					$('input[name=\"FREE6\"]').val(formatDate($('.infopledu .mt_endYear').eq(j - 2).html(), 2) + '-01')
				}
				if ($('input[name=\"SCHOOL\"]').length) {
					$('input[name=\"SCHOOL\"]').val($('.infopledu .mt_schoolName').eq(j - 2).html())
				}
				if ($('input[name=\"FREE7\"]').length) {
					$('input[name=\"FREE7\"]').val($('.infopledu .mt_academy').eq(j - 2).html())
				}
				if ($('input[name=\"MAJOR_NAME\"]').length) {
					$('input[name=\"MAJOR_NAME\"]').val($('.infopledu .mt_professional').eq(j - 2).html())
				}
				if ($('input[name=\"GPA\"]').length) {
					$('input[name=\"GPA\"]').val($('.infopledu .mt_gpascore').eq(j - 2).html())
				}
				if ($('textarea[name=\"personal_evaluation\"]').length) {
					$('textarea[name=\"personal_evaluation\"]').val($('.infopledu .mt_major').eq(j - 2).html())
				}
				if ($('input[name=\"PROVE_PERSON\"]').length) {
					$('input[name=\"PROVE_PERSON\"]').val($('.infopledu .mt_tutorname').eq(j - 2).html() + $('.infopledu .mt_tutorphone').eq(j - 2).html())
				}
				if ($('#divselect6 ul li').length && $('.infopledu .mt_education').eq(j - 2).html()) {
					switch ($('.infopledu .mt_education').eq(j - 2).html()) {
						case '博士研究生':
							var btn1 = $('#divselect6 ul li a').eq(1)[0];  
							dispatch(btn1, 'click');
							break;
						case '硕士研究生':
							var btn1 = $('#divselect6 ul li a').eq(2)[0];  
							dispatch(btn1, 'click');
							break;
						case '大学本科-一本':
						case '大学本科-二本':
						case '大学本科-三本':
						case '海外本科':
							var btn1 = $('#divselect6 ul li a').eq(3)[0];  
							dispatch(btn1, 'click');
							break;
						case '大学专科':
							var btn1 = $('#divselect6 ul li a').eq(4)[0];  
							dispatch(btn1, 'click');
							break;
						default:
							var btn1 = $('#divselect6 ul li a').eq(5)[0];  
							dispatch(btn1, 'click');
							break
					}
				}
				if ($('#personInfo>ul>li').eq(7).find('a').length && $('.infopledu .mt_education').eq(j - 2).html()) {
					switch ($('.infopledu .mt_education').eq(j - 2).html()) {
						case '博士研究生':
							var btn1 = $('#personInfo>ul>li').eq(7).find('a').eq(1)[0];  
							dispatch(btn1, 'click');
							break;
						case '硕士研究生':
							var btn1 = $('#personInfo>ul>li').eq(7).find('a').eq(2)[0];  
							dispatch(btn1, 'click');
							break;
						case '大学本科-一本':
						case '大学本科-二本':
						case '大学本科-三本':
						case '海外本科':
							var btn1 = $('#personInfo>ul>li').eq(7).find('a').eq(3)[0];  
							dispatch(btn1, 'click');
							break;
						case '大学专科':
							var btn1 = $('#personInfo>ul>li').eq(7).find('a').eq(4)[0];  
							dispatch(btn1, 'click');
							break;
						default:
							var btn1 = $('#personInfo>ul>li').eq(7).find('a').eq(5)[0];  
							dispatch(btn1, 'click');
							break
					}
				}
				if ($('#personInfo>ul>li').eq(8).find('a').length && $('.infopledu .mt_degree').eq(j - 2).html()) {
					for (var k = 0; k < $('#personInfo>ul>li').eq(8).find('a').length; k++) {
						if ($('#personInfo>ul>li').eq(8).find('a').eq(k).html() == $('.infopledu .mt_degree').eq(j - 2).html()) {
							var btn1 = $('#personInfo>ul>li').eq(8).find('a').eq(k)[0];  
							dispatch(btn1, 'click');
						}
					}
				}
				if ($('#personInfo>ul>li').eq(8).find('a').length && $('.infopledu .mt_education').eq(j - 2).html()) {
					switch ($('.infopledu .mt_education').eq(j - 2).html()) {
					case '博士研究生':
						var btn1 = $('#personInfo>ul>li').eq(8).find('a').eq(1)[0];  
						dispatch(btn1, 'click');
						break;
					case '硕士研究生':
						var btn1 = $('#personInfo>ul>li').eq(8).find('a').eq(2)[0];  
						dispatch(btn1, 'click');
						break;
					case '大学本科-一本':
					case '大学本科-二本':
					case '大学本科-三本':
					case '海外本科':
						var btn1 = $('#personInfo>ul>li').eq(8).find('a').eq(3)[0];  
						dispatch(btn1, 'click');
						break;
					case '大学专科':
						var btn1 = $('#personInfo>ul>li').eq(8).find('a').eq(4)[0];  
						dispatch(btn1, 'click');
						break;
					default:
						var btn1 = $('#personInfo>ul>li').eq(8).find('a').eq(5)[0];  
						dispatch(btn1, 'click');
						break
					}
				}
				if ($('#personInfo>ul>li').eq(9).find('a').length && $('.infopledu .mt_degree').eq(j - 2).html()) {
					for (var k = 0; k < $('#personInfo>ul>li').eq(9).find('a').length; k++) {
						if ($('#personInfo>ul>li').eq(9).find('a').eq(k).html() == $('.infopledu .mt_degree').eq(j - 2).html()) {
							var btn1 = $('#personInfo>ul>li').eq(9).find('a').eq(k)[0];  
							dispatch(btn1, 'click');
						}
					}
				}
				if ($('#divselect8').length && $('.infopledu .mt_professionalranking').eq(j - 2).html()) {
					for (var k = 0; k < $('#divselect8 ul li a').length; k++) {
						if ($('.infopledu .mt_professionalranking').eq(j - 2).html().indexOf($('#divselect8 ul li a').eq(k).html()) != -1) {
							var btn1 = $('#divselect8 ul li a').eq(k)[0];  
							dispatch(btn1, 'click');
						}
						if ($('.infopledu .mt_professionalranking').eq(j - 2).html() == '前40%' || $('.infopledu .mt_professionalranking').eq(j - 2).html() == '前50%' || $('.infopledu .mt_professionalranking').eq(j - 2).html() == '前60%' || $('.infopledu .mt_professionalranking').eq(j - 2).html() == '前70%') {
							var btn1 = $('#divselect8 ul li a').eq(4)[0];  
							dispatch(btn1, 'click');
						}
					}
				}
				if ($('input[name=\"FREE2\"]').length && $('.infopledu .mt_endYear').eq(j - 2).html()) {
					if ($('.infopledu .mt_endYear').eq(j - 2).html().length < 7) {
						$('input[name=\"FREE2\"]').val($('.infopledu .mt_endYear').eq(j - 2).html().split('-').join('-0') + '-01')
					} else {
						$('input[name=\"FREE2\"]').val($('.infopledu .mt_endYear').eq(j - 2).html() + '-01')
					}
				}
			}
		}
		if ($('#personInfo').parent().find('h5').html() == '语言能力' || $('#personInfo').parent().find('h5').html() == '英语水平' || $('#personInfo').parent().find('h5').html() == '语言及计算机能力') {
			if ($('#divselect1').length && $('.infoEnglishSkill .mt_skillEngLevel').html()) {
				switch ($('.infoEnglishSkill .mt_skillEngLevel').html()) {
					case '大学英语四级':
						var btn1 = $('#divselect1').find('ul li a').eq(1)[0];  
						dispatch(btn1, 'click');
						break;
					case '大学英语六级':
						var btn1 = $('#divselect1').find('ul li a').eq(2)[0];  
						dispatch(btn1, 'click');
						break;
					case '专业四级':
						var btn1 = $('#divselect1').find('ul li a').eq(3)[0];  
						dispatch(btn1, 'click');
						break;
					default:
						var btn1 = $('#divselect1').find('ul li a')[0];  
						dispatch(btn1, 'click');
						break
				}
			}
			if ($('input[name=\"ENG_SCORE\"]').length) {
				$('input[name=\"ENG_SCORE\"]').val($('.infoEnglishSkill .mt_skillEngSorce').html())
			}
			for (var i = 0; i < $('.infoOtEnglishSkill').length; i++) {
				if ($('input[name=\"TOEFL\"]').length && $('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html() == '托福') {
					$('input[name=\"TOEFL\"]').val($('.infoOtEnglishSkill .mt_otherSkillEngSorce').eq(i).html())
				}
				if ($('input[name=\"GRE\"]').length && $('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html() == 'GRE') {
					$('input[name=\"GRE\"]').val($('.infoOtEnglishSkill .mt_otherSkillEngSorce').eq(i).html())
				}
				if ($('input[name=\"GMAT\"]').length && $('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html() == 'GMAT') {
					$('input[name=\"GMAT\"]').val($('.infoOtEnglishSkill .mt_otherSkillEngSorce').eq(i).html())
				}
				if ($('input[name=\"IELTS\"]').length && $('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html() == '雅思') {
					$('input[name=\"IELTS\"]').val($('.infoOtEnglishSkill .mt_otherSkillEngSorce').eq(i).html())
				}
				if ($('input[name=\"TOEIC\"]').length && $('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html() == '托业') {
					$('input[name=\"TOEIC\"]').val($('.infoOtEnglishSkill .mt_otherSkillEngSorce').eq(i).html())
				}
			}
			for (var i = 0; i < $('.educate_top,.li_ul').find('ul li').length; i++) {
				if ($('#divselect4').eq(i - 1).length && $('.infoOtherSkill .mt_skillWriteLevel').eq(i - 1).html()) {
					switch ($('.infoOtherSkill .mt_skillWriteLevel').eq(i - 1).html()) {
					case '入门':
						var btn1 = $('#divselect4').eq(i - 1).find('ul li a').eq(1)[0];  
						dispatch(btn1, 'click');
						break;
					case '一般':
						var btn1 = $('#divselect4').eq(i - 1).find('ul li a').eq(2)[0];  
						dispatch(btn1, 'click');
						break;
					case '熟练':
						var btn1 = $('#divselect4').eq(i - 1).find('ul li a').eq(3)[0];  
						dispatch(btn1, 'click');
						break;
					case '精通':
						var btn1 = $('#divselect4').eq(i - 1).find('ul li a').eq(4)[0];  
						dispatch(btn1, 'click');
						break
					}
				}
				if ($('#divselect5').eq(i - 1).length && $('.infoOtherSkill .mt_skillListenLevel').eq(i - 1).html()) {
					switch ($('.infoOtherSkill .mt_skillListenLevel').eq(i - 1).html()) {
					case '入门':
						var btn1 = $('#divselect5').eq(i - 1).find('ul li a').eq(1)[0];  
						dispatch(btn1, 'click');
						break;
					case '一般':
						var btn1 = $('#divselect5').eq(i - 1).find('ul li a').eq(2)[0];  
						dispatch(btn1, 'click');
						break;
					case '熟练':
						var btn1 = $('#divselect5').eq(i - 1).find('ul li a').eq(3)[0];  
						dispatch(btn1, 'click');
						break;
					case '精通':
						var btn1 = $('#divselect5').eq(i - 1).find('ul li a').eq(4)[0];  
						dispatch(btn1, 'click');
						break
					}
				}
				if ($('#divselect2').eq(i - 1).length && $('.infoOtherSkill .mt_skillOtherLang').eq(i - 1).html()) {
					for (var j = 0; j < $('#divselect2 ul li a').length; j++) {
						if ($('#divselect2 ul li a').eq(j).html() == $('.infoOtherSkill .mt_skillOtherLang').eq(i - 1).html()) {
							var btn1 = $('#divselect2').eq(i - 1).find('ul li a').eq(j)[0];  
							dispatch(btn1, 'click');
						}
					}
				}
			}
		}
		if ($('#personInfo').parent().find('h5').html() == '技能等级') {
			if($('li[data-name=\"ENG_LEVEL\"]') && $('#skill-list .mt_skillEngLevel').last().html()){
				switch($('#skill-list .mt_skillEngLevel').last().html()){
					case '大学英语四级':
						var test = $('li[data-name=\"ENG_LEVEL\"]').find('a').eq(1)[0];
						dispatch(test, 'click');
						break;
					case '大学英语六级':
						var test = $('li[data-name=\"ENG_LEVEL\"]').find('a').eq(2)[0];
						dispatch(test, 'click');
						break;
					case '专业四级':
						var test = $('li[data-name=\"ENG_LEVEL\"]').find('a').eq(3)[0];
						dispatch(test, 'click');
						break;
					case '专业八级':
						var test = $('li[data-name=\"ENG_LEVEL\"]').find('a').eq(4)[0];
						dispatch(test, 'click');
						break;
				}
			}
			if($('input[name=\"ENG_SCORE\"]') && $('#skill-list .mt_skillEngSorce').last().html()) {
				$('input[name=\"ENG_SCORE\"]').val($('#skill-list .mt_skillEngSorce').last().html());
			}

		}
		if ($('#personInfo').parent().find('h5').html() == '校内经历'){
			if($('input[name=\"FREE6\"]') && $('.infoschoolclub .mt_startDate').html()){
				$('input[name=\"FREE6\"]').val(formatDate($('.infoschoolclub .mt_startDate').html(), 2) + '-01');
			}
			if($('input[name=\"FREE7\"]') && $('.infoschoolclub .mt_endDate').html()){
				$('input[name=\"FREE7\"]').val(formatDate($('.infoschoolclub .mt_endDate').html(), 2) + '-01');
			}
			if($('input[name=\"FREE8\"]') && $('.infoschoolclub .mt_schClubName').html()){
				$('input[name=\"FREE8\"]').val(formatDate($('.infoschoolclub .mt_schClubName').html(), 2) + '-01');
			}
			if($('input[name=\"FREE9\"]') && $('.infoschoolclub .mt_positionName').html()){
				$('input[name=\"FREE9\"]').val(formatDate($('.infoschoolclub .mt_positionName').html(), 2) + '-01');
			}
			if($('li[data-name=\"FREE10\"] textarea') && $('.infoschoolclub .mt_workDes').html()){
				$('li[data-name=\"FREE10\"] textarea').val(formatDate($('.infoschoolclub .mt_workDes').html(), 2) + '-01');
			}
		}
		if ($('#personInfo').parent().find('h5').html() == '奖励、活动' ||  $('#personInfo').parent().find('h5').html() == '奖励活动') {
			if ($('#textarea_school').length && $('.infoschoolclub .mt_positionName').html()) {
				var allactive = [];
				for (var i = 0; i < $('.infoschoolclub').length; i++) {
					if ($('#divselect1').length && ($('.infoschoolclub .mt_positionName').eq(i).html() == '学生会主席' || $('.infoschoolclub .mt_positionName').eq(i).html() == '学生会副主席')) {
						var btn1 = $('#divselect1 ul li a').eq(1)[0];  
						dispatch(btn1, 'click');
					} else if ($('#divselect1').length && $('.infoschoolclub .mt_positionName').eq(i).html() == '学生会部长') {
						var btn1 = $('#divselect1 ul li a').eq(2)[0];  
						dispatch(btn1, 'click');
					} else if ($('#divselect1').length && $('.infoschoolclub .mt_positionName').eq(i).html() == '学生会干事') {
						var btn1 = $('#divselect1 ul li a').eq(5)[0];  
						dispatch(btn1, 'click');
					} else if ($('#divselect1').length && $('.infoschoolclub .mt_positionName').eq(i).html() == '班长团支书') {
						var btn1 = $('#divselect1 ul li a').eq(6)[0];  
						dispatch(btn1, 'click');
					} else if ($('#divselect1').length && $('.infoschoolclub .mt_positionName').eq(i).html() == '班干部') {
						var btn1 = $('#divselect1 ul li a').eq(7)[0];  
						dispatch(btn1, 'click');
					}
					var active = $('.infoschoolclub .mt_startDateDot').eq(i).html() + '-' + $('.infoschoolclub .mt_endDateDot').eq(i).html() + '\\n' + $('.infoschoolclub .mt_schClubName').eq(i).html() + '\\n' + $('.infoschoolclub .mt_workDes').eq(i).html() + '\\n';
					allactive.push(active)
				}
				$('#textarea_school').val(allactive)
			}
			if ($('#textarea_reward').length && $('.infoschaward .mt_awardsName').html()) {
				var allaward = [];
				for (var i = 0; i < $('.infoschaward').length; i++) {
					var award = $('.infoschaward .mt_awardsDate').eq(i).html() + '\\n' + $('.infoschaward .mt_awardsName').eq(i).html() + '\\n' + $('.infoschaward .mt_awardsType').eq(i).html() + '\\n' + $('.infoschaward .mt_awardsLevel').eq(i).html() + '\\n';
					allaward.push(award)
				}
				$('#textarea_reward').val(allaward)
			}
			for (var i = 0; i < $('.educate_top,.li_ul').find('ul li').length; i++) {
				if ($('#divselect2').length && $('.infoschaward .mt_awardsType').eq(i - 1).html()) {
					for (var j = 0; j < $('#divselect2 ul li a').length; j++) {
						if ($('.infoschaward .mt_awardsType').eq(i - 1).html().indexOf($('#divselect2 ul li a').eq(j).html(), 0) != -1) {
							var btn1 = $('#divselect2 ul li a').eq(j)[0];  
							dispatch(btn1, 'click');
						}
					}
				}
				if ($('#divselect4').length && $('.infoschaward .mt_awardsLevel').eq(i - 1).html()) {
					for (var j = 0; j < $('#divselect4 ul li a').length; j++) {
						if ($('.infoschaward .mt_awardsLevel').eq(i - 1).html().indexOf($('#divselect4 ul li a').eq(j).html(), 0) != -1) {
							var btn1 = $('#divselect4 ul li a').eq(j)[0];  
							dispatch(btn1, 'click');
						}
					}
				}
				if ($('input[name=\"RECEIVE_TIME\"]').length && $('.infoschaward .mt_awardsDate').eq(i - 1).html()) {
					if ($('.infoschaward .mt_awardsDate').html().length < 7) {
						$('input[name=\"RECEIVE_TIME\"]').val($('.infoschaward .mt_awardsDate').eq(i - 1).html().split('-').join('-0') + '-01')
					} else {
						$('input[name=\"RECEIVE_TIME\"]').val($('.infoschaward .mt_awardsDate').eq(i - 1).html() + '-01')
					}
				}
			}
			if($('input[name=\"FREE9\"]') && $('#schawards-list .mt_awardsName').eq(0).html()){
				$('input[name=\"FREE9\"]').val($('#schawards-list .mt_awardsName').eq(0).html());
			}
			if($('input[name=\"FREE10\"]') && $('#schawards-list .mt_awardsDate').eq(0).html()){
				$('input[name=\"FREE10\"]').val(formatDate($('#schawards-list .mt_awardsDate').eq(0).html()));
			}
			if($('li[data-name=\"FREE11\"]') && $('#schawards-list .mt_awardsType').eq(0).html()){
				switch($('#schawards-list .mt_awardsType').eq(0).html()){
					case '国际级': $('li[data-name=\"FREE11\"]').find('i').eq(5).click();break;
					case '国家级': $('li[data-name=\"FREE11\"]').find('i').eq(4).click();break;
					case '省市级': $('li[data-name=\"FREE11\"]').find('i').eq(3).click();break;
					case '学校级': $('li[data-name=\"FREE11\"]').find('i').eq(2).click();break;
					case '院系级': $('li[data-name=\"FREE11\"]').find('i').eq(1).click();break;
				}
			}
			if($('li[data-name=\"FREE13\"]') && $('#schawards-list .mt_awardsDes').eq(0).html()){
				$('li[data-name=\"FREE13\"]').val($('#schawards-list .mt_awardsDes').eq(0).html());
			}
		}
		if ($('#personInfo').parent().find('h5').html() == '实习经验' || $('#personInfo').parent().find('h5').html() == '社会经历' || $('#personInfo').parent().find('h5').html() == '实习经历/ 项目经验') {
			if ($('.educate_top').find('ul li').length == 0) {
				if ($('input[name=\"BEGIN_TIME_b\"]').length && $('.infoparttimejobs .mt_startDatedot').eq(0).html()) {
					$('input[name=\"BEGIN_TIME_b\"]').val($('.infoparttimejobs .mt_startDatedot').eq(0).html().split('.')[0])
				}
				if ($('input[name=\"BEGIN_TIME_e\"]').length && $('.infoparttimejobs .mt_startDatedot').eq(0).html()) {
					$('input[name=\"BEGIN_TIME_e\"]').val($('.infoparttimejobs .mt_startDatedot').eq(0).html().split('.')[1])
				}
				if ($('input[name=\"END_TIME_b\"]').length && $('.infoparttimejobs .mt_endDatedot').eq(0).html()) {
					$('input[name=\"END_TIME_b\"]').val($('.infoparttimejobs .mt_endDatedot').eq(0).html().split('.')[0])
				}
				if ($('input[name=\"END_TIME_e\"]').length && $('.infoparttimejobs .mt_endDatedot').eq(0).html()) {
					$('input[name=\"END_TIME_e\"]').val($('.infoparttimejobs .mt_endDatedot').eq(0).html().split('.')[1])
				}
				if ($('input[name=\"CORP_NAME\"]').length && $('.infoparttimejobs .mt_companyName').eq(0).html()) {
					$('input[name=\"CORP_NAME\"]').val($('.infoparttimejobs .mt_companyName').eq(0).html())
				}
				if ($('#divselect').length && $('.infoparttimejobs .mt_companySize').eq(0).html()) {
					
					switch ($('.infoparttimejobs .mt_companySize').eq(0).html()) {
					case '少于50人':
						var btn1 = $('#divselect ul li a').eq(0)[0];  
						dispatch(btn1, 'click');
						break;
					case '50-149人':
						var btn1 = $('#divselect ul li a').eq(1)[0];  
						dispatch(btn1, 'click');
						break;
					case '150-499人':
						var btn1 = $('#divselect ul li a').eq(2)[0];  
						dispatch(btn1, 'click');
						break;
					case '500-999人':
						var btn1 = $('#divselect ul li a').eq(3)[0];  
						dispatch(btn1, 'click');
						break;
					default: 
						var btn1 = $('#divselect ul li a').eq(4)[0];  
						dispatch(btn1, 'click');
						break
					}
				}
				if ($('#divselect2').length && $('.infoparttimejobs .mt_companyproperty').eq(0).html()) {
					switch ($('.infoparttimejobs .mt_companyproperty').eq(0).html()) {
					case '外资-欧美':
					case '外资-非欧美':
					case '合资-欧美':
					case '合资-非欧美':
						var btn1 = $('#divselect2 ul li a').eq(0)[0];  
						dispatch(btn1, 'click');
						break;
					case '民营公司':
					case '上市公司':
					case '创业公司':
						var btn1 = $('#divselect2 ul li a').eq(1)[0];  
						dispatch(btn1, 'click');
						break;
					case '国企':
						var btn1 = $('#divselect2 ul li a').eq(2)[0];  
						dispatch(btn1, 'click');
						break;
					case '事业单位':
					case '非盈利机构':
						var btn1 = $('#divselect2 ul li a').eq(3)[0];  
						dispatch(btn1, 'click');
						break;
					default:
						var btn1 = $('#divselect2 ul li a').eq(4)[0];  
						dispatch(btn1, 'click');
						break
					}
				}
				if ($('input[name=\"DEPT\"]').length && $('.infoparttimejobs .mt_department').eq(0).html()) {
					$('input[name=\"DEPT\"]').val($('.infoparttimejobs .mt_department').eq(0).html())
				}
				if ($('input[name=\"FREE14\"]').length && $('.infoparttimejobs .mt_department').eq(0).html()) {
					$('input[name=\"FREE14\"]').val($('.infoparttimejobs .mt_department').eq(0).html())
				}
				if ($('input[name=\"JOB_NAME\"]').length && $('.infoparttimejobs .mt_positionName').eq(0).html()) {
					$('input[name=\"JOB_NAME\"]').val($('.infoparttimejobs .mt_positionName').eq(0).html())
				}
				if ($('input[name=\"FREE12\"]').length && $('.infoparttimejobs .mt_positionName').eq(0).html()) {
					$('input[name=\"FREE12\"]').val($('.infoparttimejobs .mt_positionName').eq(0).html())
				}
				if ($('textarea[name=\"personal_evaluation\"]').length && $('.infoparttimejobs .mt_workContent').eq(0).text()) {
					$('textarea[name=\"personal_evaluation\"]').val($('.infoparttimejobs .mt_workContent').eq(0).text())
				}
				if ($('li[data-name=\"FREE13\"]').find('textarea').length && $('.infoparttimejobs .mt_workContent').eq(0).text()) {
					$('li[data-name=\"FREE13\"]').find('textarea').val($('.infoparttimejobs .mt_workContent').eq(0).text())
				}
				if ($('input[name=\"PROVE_PERSON\"]').length && $('.infoparttimejobs .mt_reterenceName').eq(0).html()) {
					$('input[name=\"PROVE_PERSON\"]').val($('.infoparttimejobs .mt_reterenceName').eq(0).html() + $('.infoparttimejobs .mt_reterence_phone').eq(0).html())
				}
			}
			if ($('.educate_top').find('ul li').length != 0) {
				for (var i = 1; i < $('.infoparttimejobs').length; i++) {
					var j = $('.educate_top').find('ul li').length;
					if ($('input[name=\"BEGIN_TIME_b\"]').length && $('.infoparttimejobs .mt_startDatedot').eq(j - 1).html()) {
						$('input[name=\"BEGIN_TIME_b\"]').val($('.infoparttimejobs .mt_startDatedot').eq(j - 1).html().split('.')[0])
					}
					if ($('input[name=\"BEGIN_TIME_e\"]').length && $('.infoparttimejobs .mt_startDatedot').eq(j - 1).html()) {
						$('input[name=\"BEGIN_TIME_e\"]').val($('.infoparttimejobs .mt_startDatedot').eq(j - 1).html().split('.')[1])
					}
					if ($('input[name=\"END_TIME_b\"]').length && $('.infoparttimejobs .mt_endDatedot').eq(j - 1).html()) {
						$('input[name=\"END_TIME_b\"]').val($('.infoparttimejobs .mt_endDatedot').eq(j - 1).html().split('.')[0])
					}
					if ($('input[name=\"END_TIME_e\"]').length && $('.infoparttimejobs .mt_endDatedot').eq(j - 1).html()) {
						$('input[name=\"END_TIME_e\"]').val($('.infoparttimejobs .mt_endDatedot').eq(j - 1).html().split('.')[1])
					}
					if ($('input[name=\"CORP_NAME\"]').length && $('.infoparttimejobs .mt_companyName').eq(j - 1).html()) {
						$('input[name=\"CORP_NAME\"]').val($('.infoparttimejobs .mt_companyName').eq(j - 1).html())
					}
					if ($('#divselect').length && $('.infoparttimejobs .mt_companySize').eq(j - 1).html()) {
						switch ($('.infoparttimejobs .mt_companySize').eq(j - 1).html()) {
						case '少于50人':
							var btn1 = $('#divselect ul li a').eq(0)[0];  
							dispatch(btn1, 'click');
							break;
						case '50-149人':
							var btn1 = $('#divselect ul li a').eq(1)[0];  
							dispatch(btn1, 'click');
							break;
						case '150-499人':
							var btn1 = $('#divselect ul li a').eq(2)[0];  
							dispatch(btn1, 'click');
							break;
						case '500-999人':
							var btn1 = $('#divselect ul li a').eq(3)[0];  
							dispatch(btn1, 'click');
							break;
						default:
							var btn1 = $('#divselect ul li a').eq(4)[0];  
							dispatch(btn1, 'click');
							break
						}
					}
					if ($('#divselect2').length && $('.infoparttimejobs .mt_companyproperty').eq(j - 1).html()) {
						switch ($('.infoparttimejobs .mt_companyproperty').eq(j - 1).html()) {
						case '外资-欧美':
						case '外资-非欧美':
						case '合资-欧美':
						case '合资-非欧美':
							var btn1 = $('#divselect2 ul li a').eq(0)[0];  
							dispatch(btn1, 'click');
							break;
						case '民营公司':
						case '上市公司':
						case '创业公司':
							var btn1 = $('#divselect2 ul li a').eq(1)[0];  
							dispatch(btn1, 'click');
							break;
						case '国企':
							var btn1 = $('#divselect2 ul li a').eq(2)[0];  
							dispatch(btn1, 'click');
							break;
						case '事业单位':
						case '非盈利机构':
							var btn1 = $('#divselect2 ul li a').eq(3)[0];  
							dispatch(btn1, 'click');
							break;
						default:
							var btn1 = $('#divselect2 ul li a').eq(4)[0];  
							dispatch(btn1, 'click');
							break
						}
					}
					if ($('input[name=\"DEPT\"]').length && $('.infoparttimejobs .mt_department').eq(j - 1).html()) {
						$('input[name=\"DEPT\"]').val($('.infoparttimejobs .mt_department').eq(j - 1).html())
					}
					if ($('input[name=\"JOB_NAME\"]').length && $('.infoparttimejobs .mt_positionName').eq(j - 1).html()) {
						$('input[name=\"JOB_NAME\"]').val($('.infoparttimejobs .mt_positionName').eq(j - 1).html())
					}
					if ($('textarea[name=\"personal_evaluation\"]').length && $('.infoparttimejobs .mt_workContent').eq(j - 1).text()) {
						$('textarea[name=\"personal_evaluation\"]').val($('.infoparttimejobs .mt_workContent').eq(j - 1).text())
					}
					if ($('input[name=\"PROVE_PERSON\"]').length && $('.infoparttimejobs .mt_reterenceName').eq(j - 1).html()) {
						$('input[name=\"PROVE_PERSON\"]').val($('.infoparttimejobs .mt_reterenceName').eq(j - 1).html() + $('.infoparttimejobs .mt_reterence_phone').eq(i).html())
					}
				}
			}
		}
		if ($('#personInfo').parent().find('h5').html() == '项目经验' || $('#personInfo').parent().find('h5').html() == '实习经历/ 项目经验') {
			if ($('.educate_top').find('ul li').length == 0) {
				if ($('input[name=\"BEGIN_TIME_b\"]').length && $('.infoproject .mt_proStartDateDot').eq(0).html()) {
					$('input[name=\"BEGIN_TIME_b\"]').val($('.infoproject .mt_proStartDateDot').eq(0).html().split('.')[0])
				}
				if ($('input[name=\"BEGIN_TIME_e\"]').length && $('.infoproject .mt_proStartDateDot').eq(0).html()) {
					$('input[name=\"BEGIN_TIME_e\"]').val($('.infoproject .mt_proStartDateDot').eq(0).html().split('.')[1])
				}
				if ($('input[name=\"END_TIME_b\"]').length && $('.infoproject .mt_proEndDateDot').eq(0).html()) {
					$('input[name=\"END_TIME_b\"]').val($('.infoproject .mt_proEndDateDot').eq(0).html().split('.')[0])
				}
				if ($('input[name=\"END_TIME_e\"]').length && $('.infoproject .mt_proEndDateDot').eq(0).html()) {
					$('input[name=\"END_TIME_e\"]').val($('.infoproject .mt_proEndDateDot').eq(0).html().split('.')[1])
				}
				if ($('input[name=\"PROJECT_NAME\"]').length && $('.infoproject .mt_projectName').eq(0).html()) {
					$('input[name=\"PROJECT_NAME\"]').val($('.infoproject .mt_projectName').eq(0).html())
				}
				if ($('input[name=\"JOB_NAME\"]').length && $('.infoproject .mt_positionName').eq(0).html()) {
					$('input[name=\"JOB_NAME\"]').val($('.infoproject .mt_positionName').eq(0).html())
				}
				if ($('textarea[name=\"personal_evaluation\"]').length && $('.infoproject .mt_projectRemark').eq(0).text()) {
					$('textarea[name=\"personal_evaluation\"]').val($('.infoproject .mt_projectRemark').eq(0).text())
				}
				if ($('input[name=\"PROVE_PERSON\"]').length && $('.infoproject .mt_reterenceName').eq(0).html()) {
					$('input[name=\"PROVE_PERSON\"]').val($('.infoproject .mt_reterenceName').eq(0).html() + $('.infoproject .mt_reterencePhone').eq(0).html())
				}
				if ($('input[name=\"FREE6\"]').length && $('.infoproject .mt_projectNumber').eq(0).html()) {
					$('input[name=\"FREE6\"]').val($('.infoproject .mt_projectNumber').eq(0).html())
				}
				if ($('input[name=\"FREE7\"]').length && $('.infoproject .mt_positionName').eq(0).html()) {
					$('input[name=\"FREE7\"]').val($('.infoproject .mt_positionName').eq(0).html())
				}
				if ($('li[data-name=\"FREE8\"]').length && $('.infoproject .mt_projectRemark').eq(0).html()) {
					$('li[data-name=\"FREE8\"]').find('textarea').val($('.infoproject .mt_projectRemark').eq(0).html())
				}
			}
			if ($('.educate_top').find('ul li').length != 0) {
				for (var i = 0; i < $('.educate_top').find('ul li').length; i++) {
					if ($('input[name=\"BEGIN_TIME_b\"]').length && $('.infoproject .mt_proStartDateDot').eq(i).html()) {
						$('input[name=\"BEGIN_TIME_b\"]').val($('.infoproject .mt_proStartDateDot').eq(i).html().split('.')[0])
					}
					if ($('input[name=\"BEGIN_TIME_e\"]').length && $('.infoproject .mt_proStartDateDot').eq(i).html()) {
						$('input[name=\"BEGIN_TIME_e\"]').val($('.infoproject .mt_proStartDateDot').eq(i).html().split('.')[1])
					}
					if ($('input[name=\"END_TIME_b\"]').length && $('.infoproject .mt_proEndDateDot').eq(i).html()) {
						$('input[name=\"END_TIME_b\"]').val($('.infoproject .mt_proEndDateDot').eq(i).html().split('.')[0])
					}
					if ($('input[name=\"END_TIME_e\"]').length && $('.infoproject .mt_proEndDateDot').eq(i).html()) {
						$('input[name=\"END_TIME_e\"]').val($('.infoproject .mt_proEndDateDot').eq(i).html().split('.')[1])
					}
					if ($('input[name=\"PROJECT_NAME\"]').length && $('.infoproject .mt_projectName').eq(i).html()) {
						$('input[name=\"PROJECT_NAME\"]').val($('.infoproject .mt_projectName').eq(i).html())
					}
					if ($('input[name=\"JOB_NAME\"]').length && $('.infoproject .mt_positionName').eq(i).html()) {
						$('input[name=\"JOB_NAME\"]').val($('.infoproject .mt_positionName').eq(i).html())
					}
					if ($('textarea[name=\"personal_evaluation\"]').length && $('.infoproject .mt_projectRemark').eq(i).text()) {
						$('textarea[name=\"personal_evaluation\"]').val($('.infoproject .mt_projectRemark').eq(i).text())
					}
					if ($('input[name=\"PROVE_PERSON\"]').length && $('.infoproject .mt_reterenceName').eq(i).html()) {
						$('input[name=\"PROVE_PERSON\"]').val($('.infoproject .mt_reterenceName').eq(i).html() + $('.infoproject .mt_reterencePhone').eq(i).html())
					}
				}
			}
			
		}
		if ($('#personInfo').parent().find('h5').html() == '家庭成员') {
			if ($('input[name=\"NAME\"]').length && $('#mt_fmname').html()) {
				$('input[name=\"NAME\"]').val($('#mt_fmname').html())
			}
			if ($('input[name=\"RELATION\"]').length && $('#mt_fmrelation').html()) {
				$('input[name=\"RELATION\"]').val($('#mt_fmrelation').html())
			}
			if ($('input[name=\"CORP\"]').length && $('#mt_fmwork').html()) {
				$('input[name=\"CORP\"]').val($('#mt_fmwork').html())
			}
			if ($('input[name=\"DUTIES\"]').length && $('#mt_fmposition').html()) {
				$('input[name=\"DUTIES\"]').val($('#mt_fmposition').html())
			}
			if ($('input[name=\"TEL\"]').length && $('#mt_fmphone').html()) {
				$('input[name=\"TEL\"]').val($('#mt_fmphone').html())
			}
		}
		if ($('#personInfo').parent().find('h5').html() == '其他信息') {
			if ($('#divselect4').length && $('#mt_expectcity').html()) {
				for (var j = 0; j < $('#divselect4 ul li a').length; j++) {
					if ($('#mt_expectcity').html().indexOf($('#divselect4 ul li a').eq(j).html(), 0) != -1) {
						var btn1 = $('#divselect4 ul li a').eq(j)[0];  
						dispatch(btn1, 'click');
					}
				}
			}
			window.setTimeout(function() {
				if ($('#divselect5').length && $('#mt_expectcity_city').html()) {
					for (var j = 0; j < $('#divselect5 ul li a').length; j++) {
						if ($('#mt_expectcity_city').html().indexOf($('#divselect5 ul li a').eq(j).html(), 0) != -1) {
							var btn1 = $('#divselect5 ul li a').eq(j)[0];  
							dispatch(btn1, 'click');
						}
					}
				}
			},
			200)
		}
		
		//新增
		if($('input[name=\"name\"]') && $('#mt_name').html()) {
			$('input[name=\"name\"]').val($('#mt_name').html())
		}
		if($('input[name=\"schoolName\"]') && $('#edu-list .mt_schoolName').last().html()) {
			$('input[name=\"schoolName\"]').val($('#edu-list .mt_schoolName').last().html())
		}
		if($('input[name=\"college\"]') && $('#edu-list .mt_academy').last().html()) {
			$('input[name=\"college\"]').val($('#edu-list .mt_academy').last().html())
		}
		if($('input[name=\"majorName\"]') && $('#edu-list .mt_professional').last().html()) {
			$('input[name=\"majorName\"]').val($('#edu-list .mt_professional').last().html())
		}
		if($('input[name=\"degree_name\"]').parent().next().find('li') && $('#edu-list .mt_education').last().html()) {
			let degree_name = $('input[name=\"degree_name\"]').parent().next().find('li');
			switch($('#edu-list .mt_education').last().html()){
				case '大学专科':
	                degree_name.eq(0).trigger('click');
	                break;
	            case '海外本科':
	            case '大学本科-一本':
	            case '大学本科-二本':
	            case '大学本科-三本':
	                degree_name.eq(1).trigger('click');
	                break;
	            case 'MBA':
	            case 'MPA':
	            case '硕士研究生':
	                degree_name.eq(2).trigger('click');
	                break;
	            case '博士研究生':
	                degree_name.eq(3).trigger('click');
	                break;
			}
		}
		
		
		if($('input[name=\"gender\"]').parent().find('a') && $('#mt_sex').html() == '男') {
			$('input[name=\"gender\"]').parent().find('a').eq(0).trigger('click');
		}
		if($('input[name=\"gender\"]').parent().find('a') && $('#mt_sex').html() == '女') {
			$('input[name=\"gender\"]').parent().find('a').eq(1).trigger('click');
		}
		
		//2017-8-30
		if($('#citySelectFREE11 ul') && $('#mt_nativeplace').html()){
			let length = $('#citySelectFREE11 ul li').length;
			for(let i=0; i<length; i++){
				if($('#citySelectFREE11 ul li').eq(i).text() == $('#mt_nativeplace').html()){
					let test1 = $('#citySelectFREE11 ul li a').eq(i)[0];
					dispatch(test1, 'click');
					setTimeout(function(){
						let len = $('#city2SelectFREE11 ul li').length;
						for(let j=0; j<len; j++){
							if($('#city2SelectFREE11 ul li').eq(j).text() == $('#mt_native_city').html()){
								let test2 = $('#city2SelectFREE11 ul li a').eq(j)[0];
								dispatch(test2, 'click');
							}
						}	
					},200)
				}
			}
		}
		
		if($('#divselect101 ul') && $('#skill-list .mt_skillEngLevel').html()){
			let length = $('#divselect101 ul li').length;
			switch($('#skill-list .mt_skillEngLevel').last().html()){
				case '大学英语四级':
					var btn1 = $('#divselect101').find('ul li a').eq(1)[0];  
					dispatch(btn1, 'click');
					break;
				case '大学英语六级':
					var btn1 = $('#divselect101').find('ul li a').eq(2)[0];  
					dispatch(btn1, 'click');
					break;
				case '专业四级':
					var btn1 = $('#divselect101').find('ul li a').eq(3)[0];  
					dispatch(btn1, 'click');
					break;
				case '专业八级':
					var btn1 = $('#divselect101').find('ul li a').eq(4)[0];  
					dispatch(btn1, 'click');
					break;
				default:
					var btn1 = $('#divselect101').find('ul li a')[0];  
					dispatch(btn1, 'click');
					break
			}
			$('input[name=\"FREE13\"]').val($('#skill-list .mt_skillEngSorce').last().html());
		}
		//
		
	});
})()