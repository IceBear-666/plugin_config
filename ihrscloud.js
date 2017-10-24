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
		
		if($('textarea[name=\"selfComm\"]').length && $('#mt_selfIntro').html()){
			$('textarea[name=\"selfComm\"]').val($('#mt_selfIntro').html());
		}
		if($('input[name=\"name\"]').length && $('#mt_name').html()){
			$('input[name=\"name\"]').val($('#mt_name').html());
		}
		if($('input[name=\"currentCityOfWork\"]').length && $('#mt_livecity_city').html()){
			$('input[name=\"currentCityOfWork\"]').val($('#mt_livecity_city').html());
		}
		if($('select[name=\"gender\"]').length && $('#mt_sex').html()){
			switch($('#mt_sex').html()){
				case '男':$('select[name=\"gender\"]')[0].options[1].selected = true;break;
				case '女':$('select[name=\"gender\"]')[0].options[2].selected = true;break;
			}
		}
		if($('select[name=\"hasMarried\"]').length && $('#mt_maritalstatus').html()){
			switch($('#mt_maritalstatus').html()){
				case '已婚':$('select[name=\"hasMarried\"]')[0].options[1].selected = true;break;
				case '未婚':$('select[name=\"hasMarried\"]')[0].options[2].selected = true;break;
			}
		}
		if($('input[name=\"selfComm\"]').length && $('#mt_selfIntro').html()){
			$('input[name=\"selfComm\"]').val($('#mt_selfIntro').html());
		}
		
		//工作经历
		if($('.sec-header h1').text() == '工作经历'){
			let i = $('.works .des-content').length;
			if($('input[name=\"prefixForRf120.companyName\"]').length && $('.infoparttimejobs .mt_companyName').eq(i).html()){
				$('input[name=\"prefixForRf120.companyName\"]').val($('.infoparttimejobs .mt_companyName').eq(i).html());
			}
			if($('input[name=\"starDate\"]').length && $('.infoparttimejobs .mt_startDate').eq(i).html()){
				$('input[name=\"starDate\"]').val(formatDate($('.infoparttimejobs .mt_startDate').eq(i).html(),2));
			}
			if($('input[name=\"endDate\"]').length && $('.infoparttimejobs .mt_endDate').eq(i).html()){
				$('input[name=\"endDate\"]').val(formatDate($('.infoparttimejobs .mt_endDate').eq(i).html(),2));
			}
			if($('textarea[name=\"prefixForRf120.description\"]').length && $('.infoparttimejobs .workDes').eq(i).html()){
				$('textarea[name=\"prefixForRf120.description\"]').val($('.infoparttimejobs .workDes').eq(i).html());
			}
			if($('input[name=\"prefixForRf120.position\"]').length && $('.infoparttimejobs .mt_positionName').eq(i).html()){
				$('input[name=\"prefixForRf120.position\"]').val($('.infoparttimejobs .mt_positionName').eq(i).html());
			}
			if($('input[name=\"prefixForRf120.department\"]').length && $('.infoparttimejobs .mt_department').eq(i).html()){
				$('input[name=\"prefixForRf120.department\"]').val($('.infoparttimejobs .mt_department').eq(i).html());
			}
			if($('input[name=\"prefixForRf120.industry\"]').length && $('.infoparttimejobs .mt_companyCat').eq(i).html()){
				$('input[name=\"prefixForRf120.industry\"]').val($('.infoparttimejobs .mt_companyCat').eq(i).html());
			}
		}
		
		//教育经历
		if($('.sec-header h1').text() == '教育经历'){
			let i = $('.education .des-content').length;
			if($('input[name=\"prefixForRf220.major\"]').length && $('.infopledu .mt_professional').eq(i).html()){
				$('input[name=\"prefixForRf220.major\"]').val($('.infopledu .mt_professional').eq(i).html());
			}
			if($('input[name=\"starDate\"]').length && $('.infopledu .mt_startYear').eq(i).html()){
				$('input[name=\"starDate\"]').val(formatDate($('.infopledu .mt_startYear').eq(i).html(),2));
			}
			if($('input[name=\"endDate\"]').length && $('.infopledu .mt_endYear').eq(i).html()){
				$('input[name=\"endDate\"]').val(formatDate($('.infopledu .mt_endYear').eq(i).html(),2));
			}
			if($('select[name=\"prefixForRf220.degree\"]').length && $('.infopledu .mt_education').eq(i).html()){
				let edu = $('select[name=\"prefixForRf220.degree\"]')[0];
				switch($('.infopledu .mt_education').eq(i).html()){					
					case 'EMBA':
						edu.options[10].selected = true;
						break;
					case 'MBA':
						edu.options[9].selected = true;
						break;
					case 'MPA':
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
			if($('input[name=\"prefixForRf220.school\"]').length && $('.infopledu .mt_schoolName').eq(i).html()){
				$('input[name=\"prefixForRf220.school\"]').val($('.infopledu .mt_schoolName').eq(i).html());
			}
			if($('input[name=\"prefixForRf220.major\"]').length && $('.infopledu .mt_professional').eq(i).html()){
				$('input[name=\"prefixForRf220.major\"]').val($('.infopledu .mt_professional').eq(i).html());
			}
			if($('textarea[name=\"prefixForRf220.description\"]').length && $('.infopledu .mt_professionaldes').eq(i).html()){
				$('textarea[name=\"prefixForRf220.description\"]').val($('.infopledu .mt_professionaldes').eq(i).html());
			}
		}
		//语言能力
		if($('.sec-header h1').text() == '语言能力'){
			let length = $('.infoEnglishSkill .infopl').length;
			let languageContent = '';
			for(let i=0; i<length; i++){
				languageContent += $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() + '\\n'
								+ '分数：' + $('.infoEnglishSkill .mt_skillEngSorce').eq(i).html() + '\\n\\n';
			}
			if($('textarea[name=\"languageAbilitiesContent\"]').length){
				$('textarea[name=\"languageAbilitiesContent\"]').val(languageContent);
			}
		}
		//项目经历
		if($('.sec-header h1').text() == '项目经历'){
			let length = $('.infoproject .infopl').length;
			let project = '';
			for(let i=0; i<length; i++){
				project += '项目名称：' + $('.infoproject .mt_projectName').eq(i).html() + '\\n'
						 + '开始时间：' + $('.infoproject .mt_prostarttime').eq(i).html() + '\\n'
						 + '项目描述：' + $('.infoproject .mt_projectRemark').eq(i).html() + '\\n'
						 + '项目职责：' + $('.infoproject .mt_projectDuty').eq(i).html() + '\\n\\n';
			}
			if($('textarea[name=\"projectExpContent\"]').length){
				$('textarea[name=\"projectExpContent\"]').val(project);
			}
		}
		//培训经历
		if($('.sec-header h1').text() == '培训经历'){
			let length = $('.infotraining .infopl').length;
			let train = '';
			for(let i=0; i<length; i++){
				train += '培训名称：' + $('.infotraining .mt_trainingName').eq(i).html() + '\\n'
					   + '开始时间：' + $('.infotraining .mt_startDate').eq(i).html() + '\\n'
				       + '培训内容：' + $('.infotraining .mt_trainingDes').eq(i).html() + '\\n'
					   + '获得证书：' + $('.infotraining .mt_certificateName').eq(i).html() + '\\n\\n';
			}
			if($('textarea[name=\"projectExpContent\"]').length){
				$('textarea[name=\"projectExpContent\"]').val(train);
			}
		}
		
	})
})()