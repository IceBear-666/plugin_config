(function() {
	$('.quick-write').on('click',
	function() {
		$('#jm_qiuck_cover').fadeIn();
		setTimeout(function() {
			$('#jm_qiuck_cover').fadeOut()
		},
		1000);
		
		var event = document.createEvent('HTMLEvents');
		event.initEvent('change', true, false);
		
		formatDate = function(value, length) {
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
		};
		
		if ($('#aplName') && $('#mt_name').html()) {
			$('#aplName').val($('#mt_name').html())
		}
		if ($('input[name=\"stature\"]').length && $('#mt_height').html()) {
			$('input[name=\"stature\"]').val($('#mt_height').html());
		}
		if ($('input[name=\"birth\"]').length && $('#mt_birth').html()) {
			$('input[name=\"birth\"]').val(formatDate($('#mt_birth').html(),2) + '-01');
		}
		if ($('input[name=\"email\"]').length && $('#mt_email').html()) {
			$('input[name=\"email\"]').val($('#mt_email').html());
		}
		if ($('#titleSelect').length) {
			if ($('#mt_sex').html() && $('#mt_sex').html() == '男') {
				$('#titleSelect')[0].options[0].selected = true
			}
			if ($('#mt_sex').html() && $('#mt_sex').html() == '女') {
				$('#titleSelect')[0].options[1].selected = true
			}
		}
		
		if ($('#avoirdupois') && $('#mt_weight').html()) {
			$('#avoirdupois').val($('#mt_weight').html())
		}
		if ($('select[name=\"hukou\"]').length && $('#mt_hukoucitynow').html()) {
			let hukou = $('select[name=\"hukou\"]')[0].options;
			let length = hukou.length;
			for(let i=0; i<length; i++){
				if(hukou[i].innerText.substring(0,2) == $('#mt_hukoucitynow').html().substring(0,2)){
					hukou[i].selected = true;
				}
			}
			
		}
		if ($('select[name=\"people\"]').length && $('#mt_nation').html()) {
			let plo = $('select[name=\"people\"]')[0];
			switch($('#mt_nation').html()){
				case '中共党员':
					plo.options[1].selected = true;
					break;
				case '中共预备党员':
					plo.options[1].selected = true;
					break;
				case '群众':
					plo.options[0].selected = true;
					break;
				case '共青团员':
					plo.options[6].selected = true;
					break;
				default:
					break;
			}
		}
		if ($('select[name=\"nativePlace\"]').length && $('#mt_nativeplace').html()) {
			let nativePlace = $('select[name=\"nativePlace\"]')[0].options;
			let length = nativePlace.length;
			for(let i=0; i<length; i++){
				if(nativePlace[i].innerText.substring(0,2) == $('#mt_nativeplace').html().substring(0,2)){
					nativePlace[i].selected = true;
				}
			}
			if ($('input[name=\"county\"]') && $('#mt_native_city').html()) {
				$('input[name=\"county\"]').val($('#mt_native_city').html())
			}
		}
		if ($('select[name=\"party\"]').length && $('#mt_polistatus').html()) {
			switch($('#mt_polistatus').html()){
				case '未婚':
					$('select[name=\"party\"]')[0].options[0].selected = true;
					break;
				case '已婚':
					$('select[name=\"party\"]')[0].options[1].selected = true;
					break;
			}
		}
		if ($('select[name=\"topEdu\"]').length && $('#mt_edu').html()) {
			let edu = $('select[name=\"topEdu\"]')[0];
			let degreee = $('select[name=\"topDegree\"]')[0];
			switch($('#mt_edu').html()){
				case 'MPA':
				case 'EMBA':
				case 'MBA':
				case '博士研究生':
					edu.options[6].selected = true;
					degreee.options[3].selected = true;
					break;
				case '硕士研究生':
					edu.options[5].selected = true;
					degreee.options[2].selected = true;
					break;
				case '双学士':
				case '大学本科-一本':
				case '大学本科-二本':
				case '大学本科-三本':
					edu.options[4].selected = true;
					degreee.options[1].selected = true;
					break;
				case '大学专科':
					edu.options[3].selected = true;
					degreee.options[0].selected = true;
					break;
				case '中专':
					edu.options[2].selected = true;
					break;
				case '技校/职高':
					edu.options[2].selected = true;
					break;
				case '高中':
					edu.options[1].selected = true;
					break;
				case '初中及以下':
					edu.options[0].selected = true;
					break;
				default:
					break
			}
		}
		if ($('select[name=\"secondLang\"]').length && $('select[name=\"secondLangGrade\"]').length && $('.infoEnglishSkill .mt_skillEngLevel').last().html()) {
			$('select[name=\"secondLang\"]')[0].options[0].selected = true;
			let ctype = $('select[name=\"secondLangGrade\"]')[0];
			switch($('.infoEnglishSkill .mt_skillEngLevel').last().html()){
				case '大学英语四级':
					ctype.options[2].selected = true;
					break;
				case '大学英语六级':
					ctype.options[4].selected = true;
					break;
				case '专业四级':
					ctype.options[5].selected = true;
					break;
				case '专业八级':
					ctype.options[6].selected = true;
					break
			}
		}
		if ($('input[name=\"address\"]').length && $('#mt_add').html()) {
			$('input[name=\"address\"]').val($('#mt_add').html());
		}
		if ($('input[name=\"postCode\"]').length && $('#mt_zip').html()) {
			$('input[name=\"postCode\"]').val($('#mt_zip').html());
		}
		if ($('input[name=\"officeTel\"]').length && $('#mt_gudingtel').html()) {
			$('input[name=\"officeTel\"]').val($('#mt_gudingtel').html());
		}
		if ($('input[name=\"mobile\"]').length && $('#mt_tel').html()) {
			$('input[name=\"mobile\"]').val($('#mt_tel').html());
		}
		
		if($('.grid_title').html() == '教育背景'){
			let length = $('.infopledu .infopl').length;
			let i = $('.grid_table_col tr').length - 1;
			if(i<length){
				if($('select[name=\"studyEdu\"]').length && $('.infopledu .mt_education').eq(i).html()){
					let edu = $('select[name=\"studyEdu\"]')[0].options;
					switch($('.infopledu .mt_education').eq(i).html()){
						case 'MPA':
						case 'EMBA':
						case 'MBA':
						case '博士研究生':
							edu[6].selected = true;
							edu[6].dispatchEvent(event);
							break;
						case '硕士研究生':
							edu[5].selected = true;
							edu[5].dispatchEvent(event);
							break;
						case '双学士':
						case '大学本科-一本':
						case '大学本科-二本':
						case '大学本科-三本':
							edu[4].selected = true;
							edu[4].dispatchEvent(event);
							break;
						case '大学专科':
							edu[3].selected = true;
							edu[3].dispatchEvent(event);
							break;
						case '中专':
							edu[2].selected = true;
							edu[2].dispatchEvent(event);
							break;
						case '技校/职高':
							edu[2].selected = true;
							edu[2].dispatchEvent(event);
							break;
						case '高中':
							edu[1].selected = true;
							edu[1].dispatchEvent(event);
							break;
						case '初中及以下':
							edu[0].selected = true;
							edu[0].dispatchEvent(event);
							break;
					}
				}
				if($('input[name=\"start_date\"]').length && $('.infopledu .mt_startYear').eq(i).html()){
					$('input[name=\"start_date\"]').val(formatDate($('.infopledu .mt_startYear').eq(i).html(),2));
				}
				if($('input[name=\"end_date\"]').length && $('.infopledu .mt_endYear').eq(i).html()){
					$('input[name=\"end_date\"]').val(formatDate($('.infopledu .mt_endYear').eq(i).html(),2));
				}
				if($('input[name=\"rewardZheng\"]').length && $('.infopledu .mt_tutorname').eq(i).html()){
					$('input[name=\"rewardZheng\"]').val($('.infopledu .mt_tutorname').eq(i).html() + '联系方式：' +$('.infopledu .mt_tutorphone').eq(i).html());
				}
				if($('textarea[name=\"mainCourse\"]').length && $('.infopledu .mt_major').eq(i).html()){
					$('textarea[name=\"mainCourse\"]').val($('.infopledu .mt_major').eq(i).html());
				}
			}
			if($('input[name=\"CLASS_RANK1\"]').length && $('.infopledu .mt_professionalranking').eq(i).html()){
				let rank1 = $('input[name=\"CLASS_RANK1\"]');
				let rank2 = $('input[name=\"CLASS_RANK2\"]');
				switch($('.infopledu .mt_professionalranking').eq(i).html()){
					case '前5%':
                        rank1.val('1');
                        rank2.val('20');
                        break;
                    case '前10%':
                    	rank1.val('1');
                        rank2.val('10');
                        break;
                    case '前20%':
                        rank1.val('1');
                        rank2.val('5');
                        break;
                    case '前30%':
                    	rank1.val('3');
                        rank2.val('10');
                        break;
                    case '前40%':
                    	rank1.val('2');
                        rank2.val('5');
                        break;
                    case '前50%':
                        rank1.val('1');
                        rank2.val('2');
                        break;
                    case '前60%':
                        rank1.val('3');
                        rank2.val('5');
                        break;
                    case '前70%':
                        rank1.val('7');
                        rank2.val('10');
                        break;
                    case '前80%':
                        rank1.val('4');
                        rank2.val('5');
                        break;
				}
			}
			
		}
		//家庭成员
		if($('.grid_title').html() == '家庭成员'){
			if($('input[name=\"relationMem1\"]') && $('#mt_fmrelation').html()){
				$('input[name=\"relationMem1\"]').val($('#mt_fmrelation').html());
			}
			if($('input[name=\"nameMem1\"]') && $('#mt_fmname').html()){
				$('input[name=\"nameMem1\"]').val($('#mt_fmname').html());
			}
			if($('input[name=\"companyMem1\"]') && $('#mt_fmwork').html()){
				$('input[name=\"companyMem1\"]').val($('#mt_fmwork').html());
			}
			if($('input[name=\"positionMem1\"]') && $('#mt_fmposition').html()){
				$('input[name=\"positionMem1\"]').val($('#mt_fmposition').html());
			}
		}
		
		//语言及实习经历
		if($('h4').eq(0).html() == '语言水平'){
			let length = $('.infoOtherSkill .infopl').length;
			let i = $('.grid_table_col').eq(0).find('tr').length - 1;
			if(i<length){
				if($('input[name=\"lang1\"]').length && $('.infoOtherSkill .mt_skillOtherLang').eq(i).html()){
					$('input[name=\"lang1\"]').val($('.infoOtherSkill .mt_skillOtherLang').eq(i).html());
				}
				if($('select[name=\"langListen1\"]').length && $('.infoOtherSkill .mt_skillListenLevel').eq(i).html()){
					let listenSkill = $('select[name=\"langListen1\"]')[0].options;
					switch($('.infoOtherSkill .mt_skillListenLevel').eq(i).html()){
						case '精通': listenSkill[1].selected = true; break;
						case '熟练': listenSkill[2].selected = true; break;
						case '一般': listenSkill[3].selected = true; break;
						case '了解': listenSkill[3].selected = true; break;
					}
				}
				if($('select[name=\"langSpeak1\"]').length && $('.infoOtherSkill .mt_skillListenLevel').eq(i).html()){
					let speakSkill = $('select[name=\"langSpeak1\"]')[0].options;
					switch($('.infoOtherSkill .mt_skillListenLevel').eq(i).html()){
						case '精通': speakSkill[1].selected = true; break;
						case '熟练': speakSkill[2].selected = true; break;
						case '一般': speakSkill[3].selected = true; break;
						case '了解': speakSkill[3].selected = true; break;
					}
				}
				if($('select[name=\"langRead1\"]').length && $('.infoOtherSkill .mt_skillWriteLevel').eq(i).html()){
					let readSkill = $('select[name=\"langRead1\"]')[0].options;
					switch($('.infoOtherSkill .mt_skillWriteLevel').eq(i).html()){
						case '精通': readSkill[1].selected = true; break;
						case '熟练': readSkill[2].selected = true; break;
						case '一般': readSkill[3].selected = true; break;
						case '了解': readSkill[3].selected = true; break;
					}
				}
				if($('select[name=\"langWrite1\"]').length && $('.infoOtherSkill .mt_skillWriteLevel').eq(i).html()){
					let writeSkill = $('select[name=\"langWrite1\"]')[0].options;
					switch($('.infoOtherSkill .mt_skillWriteLevel').eq(i).html()){
						case '精通': writeSkill[1].selected = true; break;
						case '熟练': writeSkill[2].selected = true; break;
						case '一般': writeSkill[3].selected = true; break;
						case '了解': writeSkill[3].selected = true; break;
					}
				}
				
			}
		}
		if($('h4').eq(1).html() == '工作经历（或社会实践）'){
			let length = $('.infoparttimejobs .infopl').length;
			let i = $('.grid_table_col').eq(1).find('tr').length - 1;
			if(i<length){
				if($('input[name=\"from\"]').length && $('.infoparttimejobs .mt_startDate').eq(i).html()){
					$('input[name=\"from\"]').val(formatDate($('.infoparttimejobs .mt_startDate').eq(i).html(),2));
				}
				if($('input[name=\"to\"]').length && $('.infoparttimejobs .mt_endDate').eq(i).html()){
					$('input[name=\"to\"]').val(formatDate($('.infoparttimejobs .mt_endDate').eq(i).html(),2));
				}
				if($('input[name=\"workCompany1\"]').length && $('.infoparttimejobs .mt_companyName').eq(i).html()){
					$('input[name=\"workCompany1\"]').val($('.infoparttimejobs .mt_companyName').eq(i).html());
				}
				
			}
		}
		if($('.grid_title').html() == '回答问题'){
			if($('textarea[name=\"introClob\"]').length && $('#mt_profile').html()){
				$('textarea[name=\"introClob\"]').val($('#mt_profile').html())
			}
		}
		
		
	})
})()