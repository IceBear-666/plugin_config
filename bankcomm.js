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
		};

		if($('#name').length && $('#mt_name').html()){
			$('#name').val($('#mt_name').html())
		}
		if($('#gender').length && $('#mt_sex').html()){
			if($('#mt_sex').html() == '男'){
				$('#gender').parent().next().find('li').eq(1).click();
			}else if($('#mt_sex').html() == '女'){
				$('#gender').parent().find('li').eq(2).click();
			}
		}
		if($('#birthday').length && $('#mt_birth').html()){
			$('#birthday').val(formatDate($('#mt_birth').html(), 2) + '-01');
		}
		if($('#height').length && $('#mt_height').html()){
			$('#height').val($('#mt_height').html())
		}
		if($('#marriage').length && $('#mt_maritalstatus').html()){
			switch($('#mt_maritalstatus').html()){
				case '已婚': $('#marriage').parent().next().find('li').eq(1).click();break;
				case '未婚': $('#marriage').parent().next().find('li').eq(2).click();break;
				case '离婚': $('#marriage').parent().next().find('li').eq(3).click();break;
			}
		}
		if($('#politics').length && $('#mt_polistatus').html()){
			let politics = $('#politics').parent().next().find('li');
			let length = politics.length;
			for(let i=0; i<length; i++){
				console.log(politics[i].innerText.trim());
				if(politics[i].innerText.trim() == $('#mt_polistatus').html()){
					politics.eq(i).click();
				}
			}
		}
		if($('#graduateDate').length && $('.infopledu .mt_endYear').last().html()){
			$('#graduateDate').val(formatDate($('.infopledu .mt_endYear').last().html(), 2) + '-01');
		}
		if($('#workdate').length && $('.infofulltimejobs .mt_startDate').html()){
			$('#workdate').val(formatDate($('.infofulltimejobs .mt_startDate').html(), 2) + '-01');
		}
		if($('#homeDetailPlace').length && $('#mt_hukoucitynow').html()){
			$('#homeDetailPlace').val($('#mt_hukoucitynow').html() + $('#mt_hukoucitynow_city').html())
		}
		if($('#homeDetailPlaceimg').length && $('#mt_add').html()){
			$('#homeDetailPlaceimg').val($('#mt_add').html())
		}
		if($('#homeAddr').length && $('#mt_add').html()){
			$('#homeAddr').val($('#mt_add').html())
		}
		if($('#homePost').length && $('#mt_zip').html()){
			$('#homePost').val($('#mt_zip').html())
		}
		if($('#homePhone').length && $('#mt_gudingtel').html()){
			$('#homePhone').val($('#mt_gudingtel').html())
		}
		if($('#contactorExtra').length && $('#mt_jjlxrtel').html()){
			$('#contactorExtra').val($('#mt_jjlxrtel').html())
		}

		//教育信息
		if($('#addNewEduSituation').length){
			let hadSave = $('#eduSituationlistss').children().length;
			let len = $('.infopledu .infopl').length;
			let i = len - hadSave - 1;
			if($('#addstartDate').length && $('.infopledu .mt_startYear').eq(i).html()){
				$('#addstartDate').val(formatDate($('.infopledu .mt_startYear').eq(i).html(), 2) + '-01')
			}
			if($('#addendDate').length && $('.infopledu .mt_endYear').eq(i).html()){
				$('#addendDate').val(formatDate($('.infopledu .mt_endYear').eq(i).html(), 2) + '-01')
			}
			if($('#addeduPhase').length && $('.infopledu .mt_education').eq(i).html()){
				let edu = $('#addeduPhase').parent().next().find('li');
				let degree = $('#adddiploma').parent().next().find('li');
				let level = $('#adddegree').parent().next().find('li');
				switch ($('.infopledu .mt_education').eq(i).html()) {
					case 'MBA':
					case 'MPA':
					case '博士研究生':
						edu.eq(0).click();
						degree.eq(0).click();
						level.eq(0).click();
						break;
					case '硕士研究生':
						edu.eq(1).click();
						degree.eq(1).click();
						level.eq(1).click();
						break;
					case '海外本科':
					case '大学本科-一本':
					case '大学本科-二本':
					case '大学本科-三本':
						edu.eq(2).click();
						degree.eq(2).click();
						level.eq(2).click();
						break;
					case '大学专科':
						edu.eq(4).click();
						degree.eq(4).click();
						break;
					default:
						break
				}
			}
			if($('#addorder').length && $('.infopledu .mt_classranking').eq(i).html()){
				let addorder = $('#addorder').parent().next().find('li');
				switch ($('.infopledu .mt_professionalranking').eq(i).html()) {
					case '前5%':
						addorder.eq(0).click();
						break;
					case '前10%':
						addorder.eq(1).click();
						break;
					case '前20%':
					case '前30%':
						addorder.eq(2).click();
						break;
					case '前40%':
					case '前50%':
						addorder.eq(3).click();
						break;
					default:
						break
				}
			}
			if($('#addprimryCourse').length && $('.infopledu .mt_major').eq(i).html()){
				$('#addprimryCourse').val($('.infopledu .mt_major').eq(i).html());
			}
		}
		//获奖情况
		if($('#awardss').length){
			let hadSave = $('#awardss').children().length;
			let len = $('.infoschaward .infopl').length;
			let i = hadSave;
			if($('#addname').length && $('.infoschaward .mt_awardsName').eq(i).html()){
				$('#addname').val($('.infoschaward .mt_awardsName').eq(i).html())
			}
			if($('#addawardType').length && $('.infoschaward .mt_awardsType').eq(i).html()){
				$('#addawardType').parent().next().find('li').eq(0).click();
				setTimeout(function(){
					let level = $('#addlevel').parent().next().find('li');
					switch($('.infoschaward .mt_awardsType').eq(i).html()){
						case '国际级':
						case '国家级':
							level.eq(0).click();
							break;
						case '省市级':
							level.eq(1).click();
							break;
						case '院系级':
							level.eq(3).click();
							break;
						default:
							break
					}
				},300);
			}
		}
		//工作经历
		if($('#workExperiencelists').length){
			let hadSave = $('#workExperiencelists').children().length;
			let len = $('.infofulltimejobs .infopl').length;
			let i = hadSave;
			if($('#addstartDate').length && $('.infoparttimejobs .mt_startDate').eq(i).html()){
				$('#addstartDate').val(formatDate($('.infoparttimejobs .mt_startDate').eq(i).html(), 2) + '-01')
			}
			if($('#addendDate').length && $('.infoparttimejobs .mt_endDate').eq(i).html()){
				$('#addendDate').val(formatDate($('.infoparttimejobs .mt_endDate').eq(i).html(), 2) + '-01')
			}
			if($('#addworkType').length && $('.infoparttimejobs .mt_workcat').eq(i).html()){
				let workType = $('#addworkType').parent().next().find('li');
				switch($('.infofulltimejobs .mt_workcat').eq(i).html()){
					case '全职':workType.eq(0).click();
					case '实习':workType.eq(4).click();
				}
			}
			if($('#addcorpName').length && $('.infoparttimejobs .mt_positionName').eq(i).html()){
				$('#addcorpName').val($('.infoparttimejobs .mt_positionName').eq(i).html())
			}
			if($('#adddept').length && $('.infoparttimejobs .mt_department').eq(i).html()){
				$('#adddept').val($('.infoparttimejobs .mt_department').eq(i).html())
			}
			if($('#addjobName').length && $('.infoparttimejobs .mt_positionName').eq(i).html()){
				$('#addjobName').val($('.infoparttimejobs .mt_positionName').eq(i).html())
			}
			if($('#addjobAddress').length && $('.infoparttimejobs .mt_workCity').eq(i).html()){
				$('#addjobAddress').val($('.infoparttimejobs .mt_workCity').eq(i).html())
			}
			if($('#addworkResp').length && $('.infoparttimejobs .workDes').eq(i).html()){
				$('#addworkResp').val($('.infoparttimejobs .workDes').eq(i).html())
			}
		}
		//培训经历
		if($('#trainingInfo').length){
			let hadSave = $('#trainingInfo').children().length;
			let len = $('.infotraining .infopl').length;
			let i = hadSave;
			
			if($('#addcourseName').length && $('.infotraining .mt_trainingName').eq(i).html()){
				$('#addcourseName').val($('.infotraining .mt_trainingName').eq(i).html())
			}
			if($('#addstartDate').length && $('.infotraining .mt_startDate').eq(i).html()){
				$('#addstartDate').val(formatDate($('.infotraining .mt_startDate').eq(i).html(), 2) + '-01')
			}
			if($('#addendDate').length && $('.infotraining .mt_endDate').eq(i).html()){
				$('#addendDate').val(formatDate($('.infotraining .mt_endDate').eq(i).html(), 2) + '-01')
			}
			if($('#addtraiContent').length && $('.infoschaward .mt_trainingDes').eq(i).html()){
				$('#addtraiContent').val('培训内容：' + $('.infoschaward .mt_trainingDes').eq(i).html() + '\\n' + '获得证书：' + $('.infoschaward .mt_certificateName').eq(i).html() + '\\n')
			}
		}
		//外语水平证书
		if($('#foreignLevelInfo').length){
			let hadSave = $('#foreignLevelInfo').children().length;
			let len = $('.infoEnglishSkill .infopl').length;
			let i = hadSave;
			$('#addlangTypeName').parent().next().find('li').eq(1).click();
			setTimeout(function(){
				let engLevel = $('#addrankExam').parent().next().find('li');
				switch($('.infoEnglishSkill .mt_skillEngLevel').eq(i).html()){
					case '大学英语四级':
						engLevel.eq(1).click();
						$('#addexamResult').val($('.infoEnglishSkill .mt_skillEngSorce').eq(i).html());
						break;
					case '大学英语六级':
						engLevel.eq(2).click();
						$('#addexamResult').val($('.infoEnglishSkill .mt_skillEngSorce').eq(i).html());
						break;
					case '专业四级':
						engLevel.eq(4).click();
						$('#addexamResult').val($('.infoEnglishSkill .mt_skillEngSorce').eq(i).html());
						break;
					case '专业八级':
						engLevel.eq(5).click();
						$('#addexamResult').val($('.infoEnglishSkill .mt_skillEngSorce').eq(i).html());
						break;
				}
			},500)
		}
		//家庭信息
		if($('#familyInfo').length){
			if($('#addRelaName').length && $('#mt_fmname').html()){
				$('#addRelaName').val($('#mt_fmname').html())
			}
			if($('#addWorkOrg').length && $('#mt_fmwork').html()){
				$('#addWorkOrg').val($('#mt_fmwork').html())
			}
			if($('#addPosition').length && $('#mt_fmposition').html()){
				$('#addPosition').val($('#mt_fmposition').html())
			}
			if($('#addContactPhone').length && $('#mt_fmphone').html()){
				$('#addContactPhone').val($('#mt_fmphone').html())
			}
			
		}

	})
})()