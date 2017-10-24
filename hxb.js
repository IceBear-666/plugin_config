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
		
		function formatDate(value, length) {
			if (length == undefined || length == 3) {
				let newDate = value.split('-');
				for (let i = 0; i < newDate.length; i++) {
					if (parseInt(newDate[i]) < 10) {
						newDate[i] = '0' + newDate[i];
					}
				}
				return newDate.join('-')
			}
			if (length == 2) {
				let newDate = value.split('-');
				for (let i = 0; i < newDate.length; i++) {
					if (parseInt(newDate[i]) < 10) {
						newDate[i] = '0' + newDate[i];
					}
				}
				newDate = newDate.slice(0, 2);
				return newDate.join('-')
			}
		}
		
		if($('#name').length && $('#mt_name').html()){
			$('#name').val($('#mt_name').html());
		}
		if($('#height').length && $('#mt_height').html()){
			$('#height').val($('#mt_height').html());
		}
		if($('#weight').length && $('#mt_weight').html()){
			$('#weight').val($('#mt_weight').html());
		}
		if($('#englishScore').length && $('.infoEnglishSkill .mt_skillEngSorce').last().html()){
			$('#englishScore').val($('.infoEnglishSkill .mt_skillEngSorce').last().html());
		}
		if($('#moblPhone').length && $('#mt_tel').html()){
			$('#moblPhone').val($('#mt_tel').html());
		}
		if($('#exPhone').length && $('#mt_jjlxrtel').html()){
			$('#exPhone').val($('#mt_jjlxrtel').html());
		}
		if($('#contactAddress').length && $('#mt_add').html()){
			$('#contactAddress').val($('#mt_add').html());
		}
		if($('#exPhone').length && $('#mt_jjlxrtel').html()){
			$('#exPhone').val($('#mt_jjlxrtel').html());
		}
		
		//工作经历
		if($('#YKTabMu_13').html().trim() == '工作及实习经历'){
			if($('.note_font').html().trim() == '工作经历请连续填写'){
				let workMess = $('.note_font').parent().parent().parent();
				if(workMess.find('input[name=\"unit\"]').length && $('.infoparttimejobs .mt_companyName').html()){
					workMess.find('input[name=\"unit\"]').val($('.infoparttimejobs .mt_companyName').html());
				}
				if(workMess.find('input[name=\"dept\"]').length && $('.infoparttimejobs .mt_department').html()){
					workMess.find('input[name=\"dept\"]').val($('.infoparttimejobs .mt_department').html());
				}
				if(workMess.find('input[name=\"job\"]').length && $('.infoparttimejobs .mt_positionName').html()){
					workMess.find('input[name=\"job\"]').val($('.infoparttimejobs .mt_positionName').html());
				}
				if(workMess.find('input[name=\"position\"]').length && $('.infoparttimejobs .mt_workCity').html()){
					workMess.find('input[name=\"position\"]').val($('.infoparttimejobs .mt_workCity').html());
				}
				if(workMess.find('textarea[name=\"jobContent\"]').length && $('.infoparttimejobs .mt_workList').html()){
					workMess.find('textarea[name=\"jobContent\"]').val($('.infoparttimejobs .mt_workList').html());
				}
			}
		}
		
		//家庭情况
		if($('#YKTabMu_14').html().trim() == '家庭成员及主要社会关系'){
			if($('.note_font').html().trim() == '请完整填写父母、配偶、子女等亲属信息'){
				let familyMess = $('.note_font').parent().parent().parent();
				if(familyMess.find('input[name=\"name\"]').length && $('#mt_fmname').html()){
					familyMess.find('input[name=\"name\"]').val($('#mt_fmname').html());
				}
				if(familyMess.find('input[name=\"job\"]').length && $('#mt_fmwork').html()){
					familyMess.find('input[name=\"job\"]').val($('#mt_fmwork').html());
				}
				if(familyMess.find('input[name=\"title\"]').length && $('#mt_fmposition').html()){
					familyMess.find('input[name=\"title\"]').val($('#mt_fmposition').html());
				}
			}
		}
		
		//获奖经历
		if($('#YKTabMu_16').html().trim() == '奖惩情况'){
			if($('input[name=\"rewardDetail\"]').length && $('.infoschaward .mt_awardsDes').html()){
				$('input[name=\"rewardDetail\"]').val($('.infoschaward .mt_awardsDes').html());
			}
			if($('input[name=\"rewardCompany\"]').length && $('.infoschaward .mt_awardsName').html()){
				$('input[name=\"rewardCompany\"]').val($('.infoschaward .mt_awardsName').html());
			}
			
		}
		//其他信息
		if($('#YKTabMu_15').html().trim() == '其他信息'){
			if($('textarea[name=\"analyse\"]').length && $('#mt_selfIntro').length){
				$('textarea[name=\"analyse\"]').val($('#mt_selfIntro').html())
			}
		}
		
		
	});
})()