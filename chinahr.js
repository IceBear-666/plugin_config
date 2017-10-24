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
		if (location.host == 'campus.chinahr.com') {
			var _ = function(index, i) {
				if (typeof i === 'undefined') {
					return document.querySelectorAll(index)[0]
				}
				return document.querySelectorAll(index)[i]
			};
			var _v = function(index, i) {
				if (typeof i === 'undefined') {
					return document.querySelectorAll(index)[0] ? document.querySelectorAll(index)[0].innerText: ''
				}
				return document.querySelectorAll(index)[i] ? document.querySelectorAll(index)[i].innerText: ''
			};
			if (_('#userName') && _v('#mt_name')) {
				_('#userName').value = _v('#mt_name')
			}
			if (_('#resumeBirthday') && _v('#mt_birth')) {
				_('#resumeBirthday').value = _v('#mt_birth')
			}
			if (_v('#mt_sex')) {
				if (_v('#mt_sex') == '男') {
					_('#rdoNan').click()
				}
				if (_v('#mt_sex') == '女') {
					_('#rdoNv').click()
				}
			}
			if (_('#phoneNumber') && _v('#mt_tel')) {
				_('#phoneNumber').value = _v('#mt_tel')
			}
			if (_('#email') && _v('#mt_email')) {
				_('#email').value = _v('#mt_email')
			}
			if (_('.expected-work')) {
				if (_('#txtCity') && _v('#mt_expectcity_city')) {
					_('#txtCity').value = _v('#mt_expectcity_city')
				}
			}
			if (_('.edu-experiences')) {
				var length = document.querySelectorAll('#edu-list .mt_schoolName').length;
				var hadSave = document.querySelectorAll('.edu-experiences h3 dl').length;
				var i = length - hadSave - 1;
				if (_('#txtSchool') && _v('#edu-list .mt_schoolName', i)) {
					_('#txtSchool').value = _v('#edu-list .mt_schoolName', i)
				}
				if (_('#txtProfessial') && _v('#edu-list .mt_professional', i)) {
					_('#txtProfessial').value = _v('#edu-list .mt_professional', i)
				}
				if (_('#starSchoolResume') && _v('#edu-list .mt_startYear', i)) {
					_('#starSchoolResume').value = _v('#edu-list .mt_startYear', i)
				}
				if (_('#endSchoolResume') && _v('#edu-list .mt_endYear', i)) {
					_('#endSchoolResume').value = _v('#edu-list .mt_endYear', i)
				}
				if (_('#xueliTextID') && _v('#edu-list .mt_education', i)) {
					switch (_v('#edu-list .mt_education', i)) {
					case '大学本科-一本':
					case '大学本科-二本':
					case '大学本科-三本':
					case '海外本科':
						document.querySelectorAll('[data-val=\"本科\"]')[0].click();
						break;
					case '硕士研究生':
						document.querySelectorAll('[data-val=\"硕士研究生\"]')[0].click();
						break;
					case '博士研究生':
						document.querySelectorAll('[data-val=\"博士研究生\"]')[0].click();
						break;
					case 'MBA':
						document.querySelectorAll('[data-val=\"硕士研究生\"]')[0].click();
						break;
					case 'MPA':
						document.querySelectorAll('[data-val=\"硕士研究生\"]')[0].click();
						break;
					case '大学专科':
						document.querySelectorAll('[data-val=\"专科\"]')[0].click();
						break;
					default:
						document.querySelectorAll('[data-val=\"无\"]')[0].click();
						break
					}
				}
				if (_('#xueweiTextID') && _v('#edu-list .mt_degree', i)) {
					switch (_v('#edu-list .mt_degree', i)) {
					case '学士':
						document.querySelectorAll('[data-val=\"学士\"]')[0].click();
						break;
					case '双学士':
						document.querySelectorAll('[data-val=\"双学士\"]')[0].click();
						break;
					case '硕士':
						document.querySelectorAll('[data-val=\"硕士\"]')[0].click();
						break;
					case '博士':
						document.querySelectorAll('[data-val=\"博士\"]')[0].click();
						break;
					case 'MPA':
						document.querySelectorAll('[data-val=\"硕士\"]')[0].click();
						break;
					case 'MBA':
						document.querySelectorAll('[data-val=\"MBA\"]')[0].click();
						break;
					default:
						document.querySelectorAll('[data-val=\"无\"]')[0].click();
						break
					}
				}
			}
			if (_('.work-experience')) {
				let length = document.querySelectorAll('#exp-list .mt_companyName').length;
				let hadSave = document.querySelectorAll('.work-experience h3 dl').length;
				let i = length - hadSave - 1;
				if (_('#jobStartResume') && _v('#exp-list .mt_startDate', i)) {
					_('#jobStartResume').value = _v('#exp-list .mt_startDate', i)
				}
				if (_('#jobEndResume') && _v('#exp-list .mt_endDate', i)) {
					_('#jobEndResume').value = _v('#exp-list .mt_endDate', i)
				}
				if (_('#txtComName') && _v('#exp-list .mt_companyName', i)) {
					_('#txtComName').value = _v('#exp-list .mt_companyName', i)
				}
				if (_('#txtJobTitle') && _v('#exp-list .mt_positionName', i)) {
					_('#txtJobTitle').value = _v('#exp-list .mt_positionName', i)
				}
				if (_('#txtJobContent') && _v('#exp-list .workContent', i)) {
					_('#txtJobContent').value = _v('#exp-list .workContent', i)
				}
			}
			if (_('#txtcard_no') && _v('#mt_id')) {
				_('#txtcard_no').value = _v('#mt_id')
			}
			if (_('#homeCity') && _v('#mt_native_city')) {
				_('#homeCity').value = _v('#mt_native_city')
			}
			if (_('#nowCity') && _v('#mt_livecity_city')) {
				_('#nowCity').value = _v('#mt_livecity_city')
			}
			if (_('#txtaddress') && _v('#mt_add')) {
				_('#txtaddress').value = _v('#mt_add')
			}
			if (_('#txtpostcode') && _v('#mt_zip')) {
				_('#txtpostcode').value = _v('#mt_zip')
			}
		}
		if ($('#userName') && $('#mt_name').html()) {
			$('#userName').val($('#mt_name').html())
		}
		if ($('#userAge') && $('#mt_birth').html()) {
			$('#userAge').val($('#mt_birth').html())
		}
		if ($('.sex') && $('#mt_sex').html()) {
			if ($('#mt_sex').html() == '男') {
				$('.sex').find('span').eq(0).trigger('click')
			}
			if ($('#mt_sex').html() == '女') {
				$('.sex').find('span').eq(1).trigger('click')
			}
		}
		if ($('#userIndru') && $('#mt_livecity_city').html()) {
			$('#userIndru').val($('#mt_livecity_city').html())
		}
		if ($('#jobTime') && $('#exp-list').find('.mt_startDate').eq(0).html()) {
			$('#jobTime').val($('#exp-list').find('.mt_startDate').eq(0).html())
		}
		if ($('#userPhone') && $('#mt_tel').html()) {
			$('#userPhone').val($('#mt_tel').html())
		}
		if ($('.work-mr')) {
			let length = $('#exp-list').find('.mt_companyName').length;
			let hadSave = $('.conWork').length;
			let i = length - hadSave - 1;
			if ($('#getExpStartTime') && $('#exp-list').find('.mt_startDate').eq(i).html()) {
				$('#getExpStartTime').val($('#exp-list').find('.mt_startDate').eq(i).html())
			}
			if ($('#getExpEndTime') && $('#exp-list').find('.mt_endDate').eq(i).html()) {
				$('#getExpEndTime').val($('#exp-list').find('.mt_endDate').eq(i).html())
			}
			if ($('input[name=\"experience.comName\"]') && $('#exp-list').find('.mt_companyName').eq(i).html()) {
				$('input[name=\"experience.comName\"]').val($('#exp-list').find('.mt_companyName').eq(i).html())
			}
			if ($('#expIndu') && $('#exp-list').find('.mt_companyCat').eq(i).html()) {
				$('#expIndu').val($('#exp-list').find('.mt_companyCat').eq(i).html())
			}
			if ($('input[name=\"experience.inputJobName\"]') && $('#exp-list').find('.mt_positionName').eq(i).html()) {
				$('input[name=\"experience.inputJobName\"]').val($('#exp-list').find('.mt_positionName').eq(i).html())
			}
			if ($('input[name=\"experience.department\"]') && $('#exp-list').find('.mt_department').eq(i).html()) {
				$('input[name=\"experience.department\"]').val($('#exp-list').find('.mt_department').eq(i).html())
			}
			if ($('textarea[name=\"experience.workDesc\"]') && $('#exp-list').find('.workContent').eq(i).html()) {
				$('textarea[name=\"experience.workDesc\"]').val($('#exp-list').find('.workContent').eq(i).html())
			}
		}
		if ($('.edu-mr')) {
			let length = $('#edu-list').find('.mt_schoolName').length;
			let hadSave = $('.inforEdu').find('.ctInfor').length;
			let i = length - hadSave - 1;
			if ($('#getEduStartTime') && $('#edu-list').find('.mt_startYear').eq(i).html()) {
				$('#getEduStartTime').val($('#edu-list').find('.mt_startYear').eq(i).html())
			}
			if ($('#getEduEndTime') && $('#edu-list').find('.mt_endYear').eq(i).html()) {
				$('#getEduEndTime').val($('#edu-list').find('.mt_endYear').eq(i).html())
			}
			if ($('input[name=\"education.college\"]') && $('#edu-list').find('.mt_schoolName').eq(i).html()) {
				$('input[name=\"education.college\"]').val($('#edu-list').find('.mt_schoolName').eq(i).html())
			}
			if ($('#eduDegree') && $('#edu-list').find('.mt_education').eq(i).html()) {
				switch ($('#edu-list').find('.mt_education').eq(i).html()) {
				case '大学本科-一本':
				case '大学本科-二本':
				case '大学本科-三本':
					$('#eduDegree').find('li').eq(4).trigger('click');
					break;
				case '海外本科':
					$('#eduDegree').find('li').eq(4).trigger('click');
					break;
				case '硕士研究生':
					$('#eduDegree').find('li').eq(3).trigger('click');
					break;
				case '博士研究生':
					$('#eduDegree').find('li').eq(0).trigger('click');
					break;
				case 'MBA':
					$('#eduDegree').find('li').eq(2).trigger('click');
					break;
				case '大学专科':
					$('#eduDegree').find('li').eq(5).trigger('click');
					break;
				default:
					$('#eduDegree').find('li').eq(13).trigger('click');
					break
				}
			}
			if ($('input[name=\"education.major\"]') && $('#edu-list').find('.mt_professional').eq(i).html()) {
				$('input[name=\"education.major\"]').val($('#edu-list').find('.mt_professional').eq(i).html())
			}
		}
		if ($('#intenLoc') && $('#mt_expectcity_city').html()) {
			$('#intenLoc').val($('#mt_expectcity_city').html())
		}
		if ($('.project-mr')) {
			let length = $('#pro-list').find('.mt_projectName').length;
			let hadSave = $('.inforProject').find('.ctInfor').length;
			let i = length - hadSave - 1;
			if ($('#getProjectStartTime') && $('#pro-list').find('.mt_prostarttime').eq(i).html()) {
				$('#getProjectStartTime').val($('#pro-list').find('.mt_prostarttime').eq(i).html())
			}
			if ($('#getProjectEndTime') && $('#pro-list').find('.mt_proenddate').eq(i).html()) {
				$('#getProjectEndTime').val($('#pro-list').find('.mt_proenddate').eq(i).html())
			}
			if ($('input[name=\"project.name\"]') && $('#pro-list').find('.mt_projectName').eq(i).html()) {
				$('input[name=\"project.name\"]').val($('#pro-list').find('.mt_projectName').eq(i).html())
			}
			if ($('textarea[name=\"project.resp\"]') && $('#pro-list').find('.mt_projectDuty').eq(i).html()) {
				$('textarea[name=\"project.resp\"]').val($('#pro-list').find('.mt_projectDuty').eq(i).html())
			}
			if ($('textarea[name=\"project.projDesc\"]') && $('#pro-list').find('.mt_proList').eq(i).html()) {
				$('textarea[name=\"project.projDesc\"]').val($('#pro-list').find('.mt_proList').eq(i).html())
			}
		}
		if ($('.train-mr')) {
			let length = $('#training-list').find('.mt_trainingName').length;
			let hadSave = $('.inforTrain').find('.ctInfor').length;
			let i = length - hadSave - 1;
			if ($('#getTrainStartTime') && $('#training-list').find('.mt_startDate').eq(i).html()) {
				$('#getTrainStartTime').val($('#training-list').find('.mt_startDate').eq(i).html())
			}
			if ($('#getTrainEndTime') && $('#training-list').find('.mt_endDate').eq(i).html()) {
				$('#getTrainEndTime').val($('#training-list').find('.mt_endDate').eq(i).html())
			}
			if ($('input[name=\"training.course\"]') && $('#training-list').find('.mt_trainingName').eq(i).html()) {
				$('input[name=\"training.course\"]').val($('#training-list').find('.mt_trainingName').eq(i).html())
			}
			if ($('input[name=\"training.school\"]') && $('#training-list').find('.mt_trainingCompany').eq(i).html()) {
				$('input[name=\"training.school\"]').val($('#training-list').find('.mt_trainingCompany').eq(i).html())
			}
			if ($('textarea[name=\"training.desc\"]') && $('#training-list').find('.mt_trainingDes').eq(i).html()) {
				$('textarea[name=\"training.desc\"]').val($('#training-list').find('.mt_trainingDes').eq(i).html())
			}
		}
		if ($('.lang-mr')) {
			let length = $('.infoOtherSkill').find('.mt_skillOtherLang').length;
			let hadSave = $('.inforLang').find('.ctInfor').length;
			let i = length - hadSave - 1;
			if ($('#langType') && $('.infoOtherSkill').find('.mt_skillOtherLang').eq(i).html()) {
				switch ($('.infoOtherSkill').find('.mt_skillOtherLang').eq(i).html()) {
				case '日语':
					$('#langType').find('li').eq(0).trigger('click');
					$('#langVal').find('li').eq(3).trigger('click');
					break;
				case '法语':
					$('#langType').find('li').eq(0).trigger('click');
					$('#langVal').find('li').eq(1).trigger('click');
					break;
				case '德语':
					$('#langType').find('li').eq(0).trigger('click');
					$('#langVal').find('li').eq(5).trigger('click');
					break;
				case '俄语':
					$('#langType').find('li').eq(0).trigger('click');
					$('#langVal').find('li').eq(6).trigger('click');
					break;
				case '韩语':
					$('#langType').find('li').eq(0).trigger('click');
					$('#langVal').find('li').eq(9).trigger('click');
					break;
				case '西班牙语':
					$('#langType').find('li').eq(0).trigger('click');
					$('#langVal').find('li').eq(2).trigger('click');
					break;
				case '葡萄牙语':
					$('#langType').find('li').eq(0).trigger('click');
					$('#langVal').find('li').eq(7).trigger('click');
					break;
				case '朝鲜语':
					$('#langType').find('li').eq(0).trigger('click');
					$('#langVal').find('li').eq(4).trigger('click');
					break;
				case '意大利语':
					$('#langType').find('li').eq(0).trigger('click');
					$('#langVal').find('li').eq(9).trigger('click');
					break;
				case '粤语':
					$('#langType').find('li').eq(1).trigger('click');
					$('#langVal').find('li').eq(0).trigger('click');
					break;
				case '上海话':
					$('#langType').find('li').eq(1).trigger('click');
					$('#langVal').find('li').eq(2).trigger('click');
					break;
				case '闽南话':
					$('#langType').find('li').eq(1).trigger('click');
					$('#langVal').find('li').eq(1).trigger('click');
					break
				}
			}
			if ($('#langLevel') && $('.infoOtherSkill').find('.mt_skillGraspLevel').eq(i).html()) {
				switch ($('.infoOtherSkill').find('.mt_skillGraspLevel').eq(i).html()) {
				case '精通':
					$('#langLevel').find('li').eq(0).trigger('click');
					break;
				case '熟练':
					$('#langLevel').find('li').eq(1).trigger('click');
					break;
				case '一般':
					$('#langLevel').find('li').eq(3).trigger('click');
					break;
				case '了解':
					$('#langLevel').find('li').eq(2).trigger('click');
					break
				}
			}
		}
		if ($('.cert-mr')) {
			let length = $('#certificate-list').find('.mt_certificateName').length;
			let hadSave = $('.inforCert ').find('.conInCert').length;
			let i = length - hadSave - 1;
			if ($('input[name=\"cert.certName\"]') && $('#certificate-list').find('.mt_certificateName').eq(i).html()) {
				$('input[name=\"cert.certName\"]').val($('#certificate-list').find('.mt_certificateName').eq(i).html())
			}
			if ($('input[name=\"cert.school\"]') && $('#certificate-list').find('.mt_issuing').eq(i).html()) {
				$('input[name=\"cert.school\"]').val($('#certificate-list').find('.mt_issuing').eq(i).html())
			}
			if ($('#getCertTime') && $('#certificate-list').find('.mt_getDate').eq(i).html()) {
				$('#getCertTime').val($('#certificate-list').find('.mt_getDate').eq(i).html())
			}
		}
		if ($('.evalue-mr')) {
			if ($('.evalue-mr').find('textarea') && $('#mt_selfIntro').html()) {
				$('.evalue-mr').find('textarea').val($('#mt_selfIntro').html())
			}
		}
		if ($('.base-mr')) {
			if ($('input[name=\"basicInfo.name\"]') && $('#mt_name').html()) {
				$('input[name=\"basicInfo.name\"]').val($('#mt_name').html())
			}
			if ($('#birthDay') && $('#mt_birth').html()) {
				$('#birthDay').val($('#mt_birth').html())
			}
			if ($('.base-mr').find('.edBase01').eq(0).find('a') && $('#mt_sex').html()) {
				if ($('#mt_sex').html() == '男') {
					$('.base-mr').find('.edBase01').eq(0).find('a').eq(0).trigger('click')
				}
				if ($('#mt_sex').html() == '女') {
					$('.base-mr').find('.edBase01').eq(0).find('a').eq(1).trigger('click')
				}
			}
			if ($('#height') && $('#mt_height').html()) {
				$('#height').val($('#mt_height').html())
			}
			if ($('.base-mr').find('.edBase01').eq(2).find('a') && $('#mt_maritalstatus').html()) {
				if ($('#mt_maritalstatus').html() == '未婚') {
					$('.base-mr').find('.edBase01').eq(2).find('a').eq(0).trigger('click')
				}
				if ($('#mt_maritalstatus').html() == '已婚' || $('#mt_maritalstatus').html() == '离婚') {
					$('.base-mr').find('.edBase01').eq(2).find('a').eq(1).trigger('click')
				}
			}
			if ($('#nowLive') && $('#mt_livecity_city').html()) {
				$('#nowLive').val($('#mt_livecity_city').html())
			}
			if ($('#rpr') && $('#mt_native_city').html()) {
				$('#rpr').val($('#mt_native_city').html())
			}
			if ($('#workTime') && $('#exp-list').find('.mt_startDate').eq(0).html()) {
				$('#workTime').val($('#exp-list').find('.mt_startDate').eq(0).html())
			}
			if ($('input[name=\"basicInfo.mobile\"]') && $('#mt_tel').html()) {
				$('input[name=\"basicInfo.mobile\"]').val($('#mt_tel').html())
			}
			if ($('input[name=\"basicInfo.email\"]') && $('#mt_email').html()) {
				$('input[name=\"basicInfo.email\"]').val($('#mt_email').html())
			}
			if ($('input[name=\"basicInfo.weixin\"]') && $('#mt_wxname').html()) {
				$('input[name=\"basicInfo.weixin\"]').val($('#mt_wxname').html())
			}
			if ($('input[name=\"basicInfo.qq\"]') && $('#mt_qqname').html()) {
				$('input[name=\"basicInfo.qq\"]').val($('#mt_qqname').html())
			}
			if ($('textarea[name=\"wonderfullPoint\"]') && $('#mt_selfIntro').html()) {
				$('textarea[name=\"wonderfullPoint\"]').val($('#mt_selfIntro').html())
			}
			if ($('#hEducation') && $('#mt_edu').html()) {
				switch ($('#mt_edu').html()) {
				case '博士研究生':
					$('#hEducation').find('li').eq(0).trigger('click');
					break;
				case 'EMBA':
					$('#hEducation').find('li').eq(1).trigger('click');
					break;
				case 'MBA':
					$('#hEducation').find('li').eq(2).trigger('click');
					break;
				case 'MPA':
					$('#hEducation').find('li').eq(3).trigger('click');
					break;
				case '硕士研究生':
					$('#hEducation').find('li').eq(3).trigger('click');
					break;
				case '双学士':
					$('#hEducation').find('li').eq(4).trigger('click');
					break;
				case '大学本科-一本':
				case '大学本科-二本':
				case '大学本科-三本':
					$('#hEducation').find('li').eq(4).trigger('click');
					break;
				case '大学专科':
					$('#hEducation').find('li').eq(5).trigger('click');
					break;
				case '中专':
					$('#hEducation').find('li').eq(6).trigger('click');
					break;
				case '技校/职高':
					$('#hEducation').find('li').eq(8).trigger('click');
					break;
				case '高中':
					$('#hEducation').find('li').eq(7).trigger('click');
					break;
				case '初中及以下':
					$('#hEducation').find('li').eq(12).trigger('click');
					break;
				case '其他':
					$('#hEducation').find('li').eq(13).trigger('click');
					break;
				case '无':
					$('#hEducation').find('li').eq(13).trigger('click');
					break
				}
			}
		}
		if($('#cv_basic-edu_schol-1') && $('#edu-list').find('.mt_schoolName').last().html()){
			$('#cv_basic-edu_schol-1').val($('#edu-list').find('.mt_schoolName').last().html());
		}
		
		//新增58集团
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
		//个人信息
		if($('#container').find('.application-group').eq(0)){
			let list = $('#container').find('.application-group').eq(0).find('.application-field-wrap');
			if(list.eq(0).find('input') && $('#mt_name').html()){
				list.eq(0).find('input').val($('#mt_name').html());
			}
			if(list.eq(1).find('input') && $('#mt_sex').html()){
				if(list.eq(1).find('input').eq(0) && $('#mt_sex').html() == '男'){
					list.eq(1).find('input').eq(0).click();
				}
				if(list.eq(1).find('input').eq(1) && $('#mt_sex').html() == '女'){
					list.eq(1).find('input').eq(1).click();
				}
			}
			if(list.eq(2).find('a') && $('#mt_birth').html()){
				list.eq(2).find('a').html(formatDate($('#mt_birth').html()));
			}
			if(list.eq(3).find('a').eq(0) && $('#mt_id').html()){
				let test1=document.querySelectorAll('.application-field-wrap')[3].querySelector('.application-field-category-content-wrap.select a');
				setTimeout(function(){
					dispatch(test1,'click')
				},100);
				setTimeout(function(){
					let test2=document.querySelectorAll('.application-field-combo-list a')[0];
					dispatch(test2,'click')
				},200);
				list.eq(3).find('input').val($('#mt_id').html())
			}
			if(list.eq(4).find('a') && $('#edu-list').find('.mt_endYear').last().html()){
				list.eq(4).find('a').html(formatDate($('#edu-list').find('.mt_endYear').last().html()));
			}
			if(list.eq(6).find('input') && $('#mt_email').html()){
				list.eq(6).find('input').val($('#mt_email').html());
			}
			if(list.eq(7).find('input') && $('#mt_tel').html()){
				list.eq(7).find('input').val($('#mt_tel').html());
			}
		}
		//教育经历
		if($('#container').find('.application-group').eq(1)){
			var length = $('#container').find('.application-group').eq(1).find('.application-frame').length;
			var i = length - 1;
			var list = $('#container').find('.application-group').eq(1).find('.application-frame').eq(i);
			if(list.find('.application-field-wrap').eq(0) && $('#edu-list').find('.mt_startYear').eq(i)){
				list.find('.application-field-wrap').eq(0).find('a').html(formatDate($('#edu-list').find('.mt_startYear').eq(i).html() + '-1'));
			}
			if(list.find('.application-field-wrap').eq(1) && $('#edu-list').find('.mt_endYear').eq(i)){
				list.find('.application-field-wrap').eq(1).find('a').html(formatDate($('#edu-list').find('.mt_endYear').eq(i).html() + '-1'));
			}
//			if(list.find('.application-field-wrap').eq(4) && $('#edu-list').find('.mt_education').eq(i)){
//				var test1=list.find('.application-field-wrap').eq(4)[0].querySelector('a');
//				setTimeout(function(){
//					dispatch(test1,'click')
//				},300);
//				setTimeout(function(){
//					var test2=document.querySelectorAll('.application-field-combo-list a')[0];
//					switch($('#edu-list').find('.mt_education').eq(i).html()){
//						case '博士研究生':
//							test2=document.querySelectorAll('.application-field-combo-list a')[1];
//							break;
//						case 'MBA':
//							test2=document.querySelectorAll('.application-field-combo-list a')[2];
//							break;
//						case 'MPA':
//						case '硕士研究生':
//							test2=document.querySelectorAll('.application-field-combo-list a')[3];
//							break;
//						case '双学士':
//							test2=document.querySelectorAll('.application-field-combo-list a')[4];
//							break;
//						case '大学本科-一本':
//						case '大学本科-二本':
//						case '大学本科-三本':
//						case '海外本科':
//							test2=document.querySelectorAll('.application-field-combo-list a')[5];
//							break;
//						case '大学专科':
//							test2=document.querySelectorAll('.application-field-combo-list a')[6];
//							break;
//						default:
//							test2=document.querySelectorAll('.application-field-combo-list a')[9];
//							break;
//					}
//					console.log(test2);
//					dispatch(test2,'click')
//				},700);	
//			}

//			if(list.find('.application-field-wrap').eq(5) && $('#edu-list').find('.mt_degree').eq(i)){
//				var test1=list.find('.application-field-wrap').eq(5)[0].querySelector('a');
//				setTimeout(function(){
//					dispatch(test1,'click')
//				},100);
//				setTimeout(function(){
//					var test2=document.querySelectorAll('.application-field-combo-list a')[0];
//					switch($('#edu-list').find('.mt_degree').eq(i).html()){
//						case '学士':
//							test2=document.querySelectorAll('.application-field-combo-list a')[4];
//							break;
//						case '双学士':
//							test2=document.querySelectorAll('.application-field-combo-list a')[3];
//							break;
//						case 'MPA':
//						case '硕士':
//							test2=document.querySelectorAll('.application-field-combo-list a')[2];
//							break;
//						case '博士':
//							test2=document.querySelectorAll('.application-field-combo-list a')[0];
//							break;
//						case 'MBA':
//							test2=document.querySelectorAll('.application-field-combo-list a')[1];
//							break;
//						default:
//							test2=document.querySelectorAll('.application-field-combo-list a')[5];
//							break;
//					}
//					console.log(test2);
//					dispatch(test2,'click')
//				},200);	
//				
//			}
//			
//		}
		//语言能力
		if($('#container').find('.application-group').eq(2)){
			var list = $('#container').find('.application-group').eq(2).find('.application-field-wrap');
			if(list.eq(0).find('a').eq(0) && $('#skill-list .mt_skillEngLevel').last().html()){
				let test1=list[0].querySelector('a');
				setTimeout(function(){
					dispatch(test1,'click')
				},100);
				setTimeout(function(){
					let test2;
					switch($('#skill-list .mt_skillEngLevel').last().html()){
						case '大学英语四级':
							test2=document.querySelectorAll('.application-field-combo-list a')[1];
							break;
						case '大学英语六级':
							test2=document.querySelectorAll('.application-field-combo-list a')[2];
							break;
						case '专业四级':
							test2=document.querySelectorAll('.application-field-combo-list a')[3];
							break;
						case '专业八级':
							test2=document.querySelectorAll('.application-field-combo-list a')[4];
							break;
					}
					dispatch(test2,'click')
				},300);
				list.eq(0).find('input').val($('#skill-list .mt_skillEngSorce').last().html())
			}
		}
		//实习经历
		if($('#container').find('.application-group').eq(3)){
			var length = $('#container').find('.application-group').eq(3).find('.application-frame').length;
			var i = length - 1;
			var list = $('#container').find('.application-group').eq(3).find('.application-frame').eq(i);
			if(list.find('.application-field-wrap').eq(0) && $('#exp-list').find('.mt_startDate').eq(i)){
				list.find('.application-field-wrap').eq(0).find('a').html(formatDate($('#exp-list').find('.mt_startDate').eq(i).html()));
			}
			if(list.find('.application-field-wrap').eq(1) && $('#exp-list').find('.mt_endDate').eq(i)){
				list.find('.application-field-wrap').eq(1).find('a').html(formatDate($('#exp-list').find('.mt_endDate').eq(i).html()));
			}
			if(list.find('input').eq(0) && $('#exp-list').find('.mt_companyName').eq(i).html()){
				list.find('input').eq(0).val($('#exp-list').find('.mt_companyName').eq(i).html());
			}
			if(list.find('input').eq(1) && $('#exp-list').find('.mt_department').eq(i).html()){
				list.find('input').eq(1).val($('#exp-list').find('.mt_department').eq(i).html());
			}
			if(list.find('input').eq(2) && $('#exp-list').find('.mt_positionName').eq(i).html()){
				list.find('input').eq(2).val($('#exp-list').find('.mt_positionName').eq(i).html());
			}
			if(list.find('textarea').eq(0) && $('#exp-list').find('.mt_workDes').eq(i).html()){
				list.find('textarea').eq(0).val($('#exp-list').find('.workDes').eq(i).html());
			}
		}
		
		//项目经验
		if($('#container').find('.application-group').eq(4)){
			var length = $('#container').find('.application-group').eq(4).find('.application-frame').length;
			var i = length - 1;
			var list = $('#container').find('.application-group').eq(4).find('.application-frame').eq(i);
			if(list.find('.application-field-wrap').eq(0) && $('#pro-list').find('.mt_prostarttime').eq(i)){
				list.find('.application-field-wrap').eq(0).find('a').html(formatDate($('#pro-list').find('.mt_prostarttime').eq(i).html()));
			}
			if(list.find('.application-field-wrap').eq(1) && $('#pro-list').find('.mt_proendtime').eq(i)){
				list.find('.application-field-wrap').eq(1).find('a').html(formatDate($('#pro-list').find('.mt_proendtime').eq(i).html()));
			}
			if(list.find('input').eq(0) && $('#pro-list').find('.mt_projectName').eq(i).html()){
				list.find('input').eq(0).val($('#pro-list').find('.mt_projectName').eq(i).html());
			}
			if(list.find('input').eq(1) && $('#pro-list').find('.mt_positionName').eq(i).html()){
				list.find('input').eq(1).val($('#pro-list').find('.mt_positionName').eq(i).html());
			}
			if(list.find('textarea').eq(0) && $('#pro-list').find('.mt_projectDuty').eq(i).html()){
				list.find('textarea').eq(0).val($('#pro-list').find('.mt_projectDuty').eq(i).html());
			}
		}
		
		//个人评价
		if($('#container').find('.application-group').eq(6)){
			var list = $('#container').find('.application-group').eq(6);
			if(list.find('textarea').eq(0) && $('#mt_selfIntro').html()){
				list.find('textarea').eq(0).val($('#mt_selfIntro').html());
			}
		}
		
		//家庭成员
		if($('#container').find('.application-group').eq(7)){
			var list = $('#container').find('.application-group').eq(7);
			if(list.find('input').eq(0) && $('#mt_fmname').html()){
				list.find('input').eq(0).val($('#mt_fmname').html());
			}
			if(list.find('input').eq(1) && $('#mt_fmrelation').html()){
				list.find('input').eq(1).val($('#mt_fmrelation').html());
			}
			if(list.find('input').eq(2) && $('#mt_fmwork').html()){
				list.find('input').eq(2).val($('#mt_fmwork').html());
			}
			if(list.find('input').eq(3) && $('#mt_fmphone').html()){
				list.find('input').eq(3).val($('#mt_fmphone').html());
			}
		}
		
		
	});
})()