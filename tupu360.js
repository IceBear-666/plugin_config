(function() {
	$('.quick-write').on('click',
	function() {
		$('#jm_qiuck_cover').fadeIn();
		setTimeout(function() {
			$('#jm_qiuck_cover').fadeOut()
		},
		1000);
		
		var formatDate = function(value, length) {
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
		
		var event = document.createEvent('HTMLEvents');
		event.initEvent('change', true, false);
		
		if($('input[name=\"basic.name\"]').length && $('#mt_name').html()){
			$('input[name=\"basic.name\"]').val($('#mt_name').html());
		}
		if($('input[name=\"basic.mobile\"]').length && $('#mt_tel').html()){
			$('input[name=\"basic.mobile\"]').val($('#mt_tel').html());
		}
		if($('input[name=\"basic.email\"]').length && $('#mt_email').html()){
			$('input[name=\"basic.email\"]').val($('#mt_email').html());
		}
		if($('input[name=\"basic.birthday\"]').length && $('#mt_birth').html()){
			$('input[name=\"basic.birthday\"]').val(formatDate($('#mt_birth').html()));
		}
		if($('input[name=\"basic.height\"]').length && $('#mt_height').html()){
			$('input[name=\"basic.height\"]').val($('#mt_height').html());
		}
		if($('input[name=\"basic.weight\"]').length && $('#mt_weight').html()){
			$('input[name=\"basic.weight\"]').val($('#mt_weight').html());
		}
		if($('textarea[name=\"basic.selfComment\"]').length && $('#mt_selfIntro').html()){
			$('textarea[name=\"basic.selfComment\"]').val($('#mt_selfIntro').html());
		}
		if($('input[name=\"basic.ethnic\"]').length && $('#mt_nation').html()){
			$('input[name=\"basic.ethnic\"]').val($('#mt_nation').html());
		}
		if($('input[name=\"basic.hobby\"]').length && $('#mt_skill').html()){
			$('input[name=\"basic.hobby\"]').val($('#mt_skill').html());
		}
		if($('input[name=\"basic.personalId\"]').length && $('#mt_id').html()){
			$('input[name=\"basic.personalId\"]').val($('#mt_id').html());
		}
		if($('input[name=\"basic.graduateDate\"]').length && $('#mt_gradutetime').html()){
			$('input[name=\"basic.graduateDate\"]').val(formatDate($('#mt_gradutetime').html()));
		}
		if($('select[name=\"basic.hasWorkExp\"]').length && $('.infoparttimejobs .infopl').length){
			let hasWorkExp = $('select[name=\"basic.hasWorkExp\"]')[0].options;
			if($('.infoparttimejobs .infopl').length){
				hasWorkExp[1].selected = true;
				hasWorkExp[1].dispatchEvent(event);
			} else {
				hasWorkExp[2].selected = true;
				hasWorkExp[2].dispatchEvent(event);
			}
		}
		if($('select[name=\"basic.hasProjectExp\"]').length && $('.infoproject .infopl').length){
			let hasProjectExp = $('select[name=\"basic.hasProjectExp\"]')[0].options;
			if($('.infoproject .infopl').length){
				hasProjectExp[1].selected = true;
				hasProjectExp[1].dispatchEvent(event);
			} else {
				hasProjectExp[2].selected = true;
				hasProjectExp[2].dispatchEvent(event);
			}
		}
		if($('input[name=\"basic.correspondenceAddr\"]').length && $('#mt_add').html()){
			$('input[name=\"basic.correspondenceAddr\"]').val($('#mt_add').html());
		}
		if($('input[name=\"basic.紧急联系电话\"]').length && $('#mt_jjlxrtel').html()){
			$('input[name=\"basic.紧急联系电话\"]').val($('#mt_jjlxrtel').html());
		}
		if($('select[name=\"basic.politicalStatus\"]').length && $('#mt_polistatus').html()){
			let politicalStatus = $('select[name=\"basic.politicalStatus\"]')[0].options;
			switch($('#mt_polistatus').html()){
				case '中共党员': 
				case '中共预备党员': 
					politicalStatus[2].selected = true;
					politicalStatus[2].dispatchEvent(event);
					break;
				case '共青团员': 
					politicalStatus[1].selected = true;
					politicalStatus[1].dispatchEvent(event);
					break;
				default: 
					politicalStatus[3].selected = true;
					politicalStatus[3].dispatchEvent(event);
					break;
			}
		}
		if($('select[name=\"basic.maritalStatus\"]').length && $('#mt_maritalstatus').html()){
			let maritalStatus = $('select[name=\"basic.maritalStatus\"]')[0].options;
			if($('#mt_maritalstatus').html() == '未婚'){
				maritalStatus[1].selected = true;
				maritalStatus[1].dispatchEvent(event);
			} else if($('#mt_maritalstatus').html() == '已婚') {
				maritalStatus[2].selected = true;
				maritalStatus[2].dispatchEvent(event);
			}
		}
		
		//教育经历
		if($('#eduExp_form_box').length){
			let hadSaved = $('#eduExp_form_box').find('.resume-show-area>dl').length;
			let i = hadSaved;
			if($('input[name=\"eduExp.school\"]').length && $('.infopledu .mt_schoolName').eq(i).html()){
				$('input[name=\"eduExp.school\"]').val($('.infopledu .mt_schoolName').eq(i).html());
			}
			if($('input[name=\"eduExp.major\"]').length && $('.infopledu .mt_professional').eq(i).html()){
				$('input[name=\"eduExp.major\"]').val($('.infopledu .mt_professional').eq(i).html());
			}
			if($('input[name=\"eduExp.credit\"]').length && $('.infopledu .mt_gpascore').eq(i).html()){
				$('input[name=\"eduExp.credit\"]').val($('.infopledu .mt_gpascore').eq(i).html());
			}
			if($('select[name=\"eduExp.degree\"]').length && $('.infopledu .mt_education').eq(i).html()){
				let edu = $('select[name=\"eduExp.degree\"]')[0];
				switch($('.infopledu .mt_education').eq(i).html()){
					case 'EMBA':
						edu.options[10].selected = true;
						edu.options[10].dispatchEvent(event);
						break;
					case 'MBA':
						edu.options[9].selected = true;
						edu.options[9].dispatchEvent(event);
						break;
					case 'MPA':
					case '博士研究生':
						edu.options[8].selected = true;
						edu.options[8].dispatchEvent(event);
						break;
					case '硕士研究生':
						edu.options[7].selected = true;
						edu.options[7].dispatchEvent(event);
						break;
					case '双学士':
					case '大学本科-一本':
					case '大学本科-二本':
					case '大学本科-三本':
						edu.options[6].selected = true;
						edu.options[6].dispatchEvent(event);
						break;
					case '大学专科':
						edu.options[5].selected = true;
						edu.options[5].dispatchEvent(event);
						break;
					case '中专':
						edu.options[4].selected = true;
						edu.options[4].dispatchEvent(event);
						break;
					case '技校/职高':
						edu.options[3].selected = true;
						edu.options[3].dispatchEvent(event);
						break;
					case '高中':
						edu.options[2].selected = true;
						edu.options[2].dispatchEvent(event);
						break;
					case '初中及以下':
						edu.options[1].selected = true;
						edu.options[1].dispatchEvent(event);
						break;
					default:
						break;
				}
			}
			if($('select[name=\"eduExp.专业排名\"]').length && $('.infopledu .mt_professionalranking').eq(i).html()){
				let professionalranking = $('select[name=\"eduExp.专业排名\"]')[0].options;
				switch($('.infopledu .mt_professionalranking').eq(i).html()) {
					case '前5%':
						professionalranking[1].selected = true;
						professionalranking[1].dispatchEvent(event);
						break;
					case '前10%':
						professionalranking[2].selected = true;
						professionalranking[2].dispatchEvent(event);
					case '前20%':
						professionalranking[3].selected = true;
						professionalranking[3].dispatchEvent(event);
						break;
					case '前30%':
						professionalranking[4].selected = true;
						professionalranking[4].dispatchEvent(event);
					default:
						break
				}
			}
		}
		
		//工作经历
		if($('#workExp_form_box').length){
			let hadSaved = $('#workExp_form_box').find('.resume-show-area>dl').length;
			let i = hadSaved;
			if($('input[name=\"workExp.company\"]').length && $('.infoparttimejobs .mt_companyName').eq(i).html()){
				$('input[name=\"workExp.company\"]').val($('.infoparttimejobs .mt_companyName').eq(i).html());
			}
			if($('input[name=\"workExp.department\"]').length && $('.infoparttimejobs .mt_department').eq(i).html()){
				$('input[name=\"workExp.department\"]').val($('.infoparttimejobs .mt_department').eq(i).html());
			}
			if($('input[name=\"workExp.position\"]').length && $('.infoparttimejobs .mt_positionName').eq(i).html()){
				$('input[name=\"workExp.position\"]').val($('.infoparttimejobs .mt_positionName').eq(i).html());
			}
			if($('textarea[name=\"workExp.detail\"]').length && $('.infoparttimejobs .workContent').eq(i).html()){
				$('textarea[name=\"workExp.detail\"]').val($('.infoparttimejobs .workContent').eq(i).html());
			}
		}
		
		//奖励证书
		if($('#award_form_box').length){
			let hadSaved = $('#award_form_box').find('.resume-show-area>dl').length;
			let i = hadSaved;
			if($('input[name=\"award.date\"]').length && $('.infoschaward .mt_awardsDate').eq(i).html()){
				$('input[name=\"award.date\"]').val(formatDate($('.infoschaward .mt_awardsDate').eq(i).html()));
			}
			if($('input[name=\"award.awardName\"]').length && $('.infoschaward .mt_awardsName').eq(i).html()){
				$('input[name=\"award.awardName\"]').val($('.infoschaward .mt_awardsName').eq(i).html());
			}
			if($('select[name=\"award.scholarship\"]').length && $('.infoschaward .mt_awardsType').eq(i).html()){
				let osk = $('select[name=\"award.scholarship\"]')[0].options;
				switch ($('.infoschaward .mt_awardsType').eq(i).html()) {
					case '国际级':
					case '国家级':
						osk[2].selected = true;
						osk[2].dispatchEvent(event);
						break;
					case '省市级':
						osk[3].selected = true;
						osk[3].dispatchEvent(event);
						break;
					case '院系级':
					case '学校级':
						osk[4].selected = true;
						osk[4].dispatchEvent(event);
						break;
					default:
						break
				}
			}
			if($('select[name=\"award.scholarshipLevel\"]').length && $('.infoschaward .mt_awardsLevel').eq(i).html()){
				let level = $('select[name=\"award.scholarshipLevel\"]')[0].options;
				switch ($('.infoschaward .mt_awardsLevel').eq(i).html()) {
					case '特等奖':
					case '一等奖':
						level[1].selected = true;
						level[1].dispatchEvent(event);
						break;
					case '二等奖':
						level[2].selected = true;
						level[2].dispatchEvent(event);
						break;
					case '三等奖':
						level[3].selected = true;
						level[3].dispatchEvent(event);
						break;
					default:
						level[4].selected = true;
						level[4].dispatchEvent(event);
						break
				}
			}
		}
		
		//社团经历
		if($('#activity_form_box').length){
			let hadSaved = $('#activity_form_box').find('.resume-show-area>dl').length;
			let i = hadSaved;
			if($('input[name=\"activity.managementTitle\"]').length && $('.infoschoolclub .mt_positionName').eq(i).html()){
				$('input[name=\"activity.managementTitle\"]').val($('.infoschoolclub .mt_positionName').eq(i).html());
			}
			if($('input[name=\"activity.detail\"]').length && $('.infoschoolclub .mt_workDes').eq(i).html()){
				$('input[name=\"activity.detail\"]').val($('.infoschoolclub .mt_workDes').eq(i).html());
			}
		}
		
		//社团经历
		if($('#trainingExp_form_box').length){
			let hadSaved = $('#trainingExp_form_box').find('.resume-show-area>dl').length;
			let i = hadSaved;
			if($('textarea[name=\"trainingExp.detail\"]').length && $('.infotraining .mt_trainingName').eq(i).html()){
				let text = $('.infotraining .mt_trainingName').eq(i).html() + '\\n'
						 + $('.infotraining .mt_trainingDes').eq(i).html() + '\\n'
						 + $('.infotraining .mt_trainingCompany').eq(i).html() + '\\n'
						 + $('.infotraining .mt_certificateName').eq(i).html() + '\\n';
				$('textarea[name=\"trainingExp.detail\"]').val(text);
			}
		}
		
		//项目经历
		if($('#projectExp_form_box').length){
			let hadSaved = $('#projectExp_form_box').find('.resume-show-area>dl').length;
			let i = hadSaved;
			if($('input[name=\"projectExp.name\"]').length && $('.infoproject .mt_projectName').eq(i).html()){
				$('input[name=\"projectExp.name\"]').val($('.infoproject .mt_projectName').eq(i).html());
			}
			if($('textarea[name=\"projectExp.detail\"]').length && $('.infoproject .mt_proList').eq(i).html()){
				$('textarea[name=\"projectExp.detail\"]').val($('.infoproject .mt_proList').eq(i).html());
			}
		}
		
		//语言能力
		if($('#langAbility_form_box').length){
			let hadSaved = $('#langAbility_form_box').find('.resume-show-area>dl').length;
			let i = hadSaved;
			if($('select[name=\"langAbility.type\"]').length && $('.infoOtherSkill .mt_skillOtherLang').eq(i).html()){
				let type = $('select[name=\"langAbility.type\"]')[0].options;
				let length = type.length;
				for(let j=0; j<length; j++){
					if(type[j].innerText.substring(0,2) == $('.infoOtherSkill .mt_skillOtherLang').eq(i).html().substring(0,2)){
						type[j].selected = true;
						type[j].dispatchEvent(event);
					}
				}
			}
			if($('select[name=\"langAbility.LS\"]').length && $('.infoOtherSkill .mt_skillListenLevel').eq(i).html()){
				let listenSkill = $('select[name=\"langAbility.LS\"]')[0].options;
				switch ($('.infoOtherSkill .mt_skillListenLevel').eq(i).html()) {
					case '精通': listenSkill[4].selected = true; listenSkill[4].dispatchEvent(event); break;
					case '熟练': listenSkill[3].selected = true; listenSkill[3].dispatchEvent(event); break;
					case '一般': listenSkill[2].selected = true; listenSkill[2].dispatchEvent(event); break;
					case '了解': listenSkill[1].selected = true; listenSkill[1].dispatchEvent(event); break;
				}
			}
			if($('select[name=\"langAbility.RW\"]').length && $('.infoOtherSkill .mt_skillWriteLevel').eq(i).html()){
				let listenSkill = $('select[name=\"langAbility.RW\"]')[0].options;
				switch ($('.infoOtherSkill .mt_skillWriteLevel').eq(i).html()) {
					case '精通': listenSkill[4].selected = true; listenSkill[4].dispatchEvent(event); break;
					case '熟练': listenSkill[3].selected = true; listenSkill[3].dispatchEvent(event); break;
					case '一般': listenSkill[2].selected = true; listenSkill[2].dispatchEvent(event); break;
					case '了解': listenSkill[1].selected = true; listenSkill[1].dispatchEvent(event); break;
				}
			}
		}
		
		//项目经历
		if($('#englishSkill_form_box').length){
			let hadSaved = $('#englishSkill_form_box').find('.resume-show-area>dl').length;
			let i = hadSaved;
			if($('input[name=\"englishSkill.score\"]').length && $('.infoEnglishSkill .mt_skillEngSorce').eq(i).html()){
				$('input[name=\"englishSkill.score\"]').val($('.infoEnglishSkill .mt_skillEngSorce').eq(i).html());
			}
			if($('select[name=\"englishSkill.type\"]').length && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html()){
				let engLevel = $('select[name=\"englishSkill.type\"]')[0];
				switch ($('.infoEnglishSkill .mt_skillEngLevel').eq(i).html()) {
					case '大学英语四级':
						engLevel.options[1].selected = true;
						engLevel.options[1].dispatchEvent(event);
						break;
					case '大学英语六级':
						engLevel.options[3].selected = true;
						engLevel.options[3].dispatchEvent(event);
						break;
					case '专业四级':
						engLevel.options[2].selected = true;
						engLevel.options[2].dispatchEvent(event);
						break;
					case '专业八级':
						engLevel.options[4].selected = true;
						engLevel.options[4].dispatchEvent(event);
						break
				}
			}
		}
		
		//家庭成员
		if($('#familyInfo_form_box').length){
			if($('input[name=\"familyInfo.name\"]').length && $('#mt_fmname').html()){
				$('input[name=\"familyInfo.name\"]').val($('#mt_fmname').html());
			}
			if($('input[name=\"familyInfo.Relation\"]').length && $('#mt_fmrelation').html()){
				$('input[name=\"familyInfo.Relation\"]').val($('#mt_fmrelation').html());
			}
			if($('input[name=\"familyInfo.adress\"]').length && $('#mt_fmwork').html()){
				$('input[name=\"familyInfo.adress\"]').val($('#mt_fmwork').html());
			}
			if($('input[name=\"familyInfo.job\"]').length && $('#mt_fmposition').html()){
				$('input[name=\"familyInfo.job\"]').val($('#mt_fmposition').html());
			}
			
		}
		
		
	})
})()