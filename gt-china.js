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
		}
		if($('#ContentPlaceHolder1_txtName').length && $('#mt_name').html()){
			$('#ContentPlaceHolder1_txtName').val($('#mt_name').html())
		}
		if($('#ContentPlaceHolder1_ddlGender').length && $('#mt_sex').html()){
			if($('#mt_sex').html() == '男'){
				$('#ContentPlaceHolder1_ddlGender')[0].options[1].selected = true;
			}
			if($('#mt_sex').html() == '女'){
				$('#ContentPlaceHolder1_ddlGender')[0].options[2].selected = true;
			}
		}
		if($('#ContentPlaceHolder1_ddlProvince').length && $('#mt_hukoucitynow').html()){
			let pro = $('#ContentPlaceHolder1_ddlProvince')[0].options;
			let length = pro.length;
			for(let i=0; i<length; i++){
				if(pro[i].innerText.substring(0,2) == $('#mt_hukoucitynow').html().substring(0,2)){
					pro[i].selected = true;
					pro[i].dispatchEvent(event);
					setTimeout(function(){
						let city = $('#ddlCity')[0].options;
						let len = city.length;
						for(let j=0; j<len; j++){
							if(city[j].innerText.substring(0,2) == $('#mt_hukoucitynow_city').html().substring(0,2)){
								city[j].selected = true;
								city[j].dispatchEvent(event);
							}
						}
					},200)
				}
			}
		}
		if($('#ContentPlaceHolder1_ddlRProvince').length && $('#mt_hukoucity').html()){
			let pro = $('#ContentPlaceHolder1_ddlRProvince')[0].options;
			let length = pro.length;
			for(let i=0; i<length; i++){
				if(pro[i].innerText.substring(0,2) == $('#mt_hukoucity').html().substring(0,2)){
					pro[i].selected = true;
					pro[i].dispatchEvent(event);
					setTimeout(function(){
						let city = $('#ddlRCity')[0].options;
						let len = city.length;
						for(let j=0; j<len; j++){
							if(city[j].innerText.substring(0,2) == $('#mt_hukoucity_city').html().substring(0,2)){
								city[j].selected = true;
								city[j].dispatchEvent(event);
							}
						}
					},200)
				}
			}
		}
		if($('#ContentPlaceHolder1_txtAddress').length && $('#mt_add').html()){
			$('#ContentPlaceHolder1_txtAddress').val($('#mt_add').html())
		}
		if($('#ContentPlaceHolder1_txtHPhone').length && $('#mt_gudingtel').html()){
			$('#ContentPlaceHolder1_txtHPhone').val($('#mt_gudingtel').html())
		}
		if($('#ContentPlaceHolder1_txtLinkMan').length && $('#mt_jjlxr').html()){
			$('#ContentPlaceHolder1_txtLinkMan').val($('#mt_jjlxr').html())
		}
		if($('#ContentPlaceHolder1_txtLinkAddress').length && $('#mt_jjlxrtel').html()){
			$('#ContentPlaceHolder1_txtLinkAddress').val($('#mt_jjlxrtel').html())
		}
		
		//教育信息
		if($('#position').next().html().trim().substring(2,6) == '教育经历' || $('#position').next().html().trim().substring(2,6) == '研究生教'){
			for(let k=0; k<$('.infopledu .mt_education').length; k++){
				switch($('.infopledu .mt_education').eq(k).html()){
					case 'MPA':
					case 'EMBA':
					case 'MBA':
					case '博士研究生':
						education(k);
						break;
					case '硕士研究生':
						education(k);
						break;
					case '双学士':
					case '大学本科-一本':
					case '大学本科-二本':
					case '大学本科-三本':
						education(k);
						break;
					default:
						break
				}
			}
			
			function education(i){
				if($('select[name=\"ctl00$ContentPlaceHolder1$ddlbeginYear\"]').length && $('.infopledu .mt_startYearY').eq(i).html()){
					let startYear = $('select[name=\"ctl00$ContentPlaceHolder1$ddlbeginYear\"]')[0].options;
					let length = startYear.length;
					for(let j=0; j<length; j++){
						if(startYear[j].innerText == $('.infopledu .mt_startYearY').eq(i).html()){
							startYear[j].selected = true;
						}
					}
				}
				if($('select[name=\"ctl00$ContentPlaceHolder1$ddlBeginMonth\"]').length && $('.infopledu .mt_startYearM').eq(i).html()){
					let startMouth = $('select[name=\"ctl00$ContentPlaceHolder1$ddlBeginMonth\"]')[0].options;
					let length = startMouth.length;
					for(let j=0; j<length; j++){
						if(startMouth[j].innerText == $('.infopledu .mt_startYearM').eq(i).html()){
							startMouth[j].selected = true;
						}
					}
				}
				if($('select[name=\"ctl00$ContentPlaceHolder1$ddlEndYear\"]').length && $('.infopledu .mt_endYearY').eq(i).html()){
					let endYear = $('select[name=\"ctl00$ContentPlaceHolder1$ddlEndYear\"]')[0].options;
					let length = endYear.length;
					for(let j=0; j<length; j++){
						if(endYear[j].innerText == $('.infopledu .mt_endYearY').eq(i).html()){
							endYear[j].selected = true;
						}
					}
				}
				if($('select[name=\"ctl00$ContentPlaceHolder1$ddlEndMonth\"]').length && $('.infopledu .mt_endYearM').eq(i).html()){
					let endMouth = $('select[name=\"ctl00$ContentPlaceHolder1$ddlEndMonth\"]')[0].options;
					let length = endMouth.length;
					for(let j=0; j<length; j++){
						if(endMouth[j].innerText == $('.infopledu .mt_endYearM').eq(i).html()){
							endMouth[j].selected = true;
						}
					}
				}
				if($('input[name=\"ctl00$ContentPlaceHolder1$txtCollege\"]').length && $('.infopledu .mt_academy').eq(i).html()){
					$('input[name=\"ctl00$ContentPlaceHolder1$txtCollege\"]').val($('.infopledu .mt_academy').eq(i).html())
				}
				if($('input[name=\"ctl00$ContentPlaceHolder1$txtSubject\"]').length && $('.infopledu .mt_professional').eq(i).html()){
					$('input[name=\"ctl00$ContentPlaceHolder1$txtSubject\"]').val($('.infopledu .mt_professional').eq(i).html())
				}
			}
		}
		
		//证书语言
		if($('#position').next().html().trim().substring(2,6) == '证书'){
			for(let k=0; k<$('.infoEnglishSkill .mt_skillEngLevel').length; k++){
				switch ($('.infoEnglishSkill .mt_skillEngLevel').eq(k).html()) {
					case '大学英语四级':
						$('input[name=\"ctl00$ContentPlaceHolder1$txtFourScore\"]').val($('.infoEnglishSkill .mt_skillEngSorce').eq(k).html());
						break;
					case '大学英语六级':
						$('input[name=\"ctl00$ContentPlaceHolder1$txtSixScore\"]').val($('.infoEnglishSkill .mt_skillEngSorce').eq(k).html());
						break;
					case '专业四级':
						$('input[name=\"ctl00$ContentPlaceHolder1$txtPFourScore\"]').val($('.infoEnglishSkill .mt_skillEngSorce').eq(k).html());
						break;
					case '专业八级':
						$('input[name=\"ctl00$ContentPlaceHolder1$txtPSixScore\"]').val($('.infoEnglishSkill .mt_skillEngSorce').eq(k).html());
						break
				}
			}
			if($('input[name=\"ctl00$ContentPlaceHolder1$txtOtherName\"]').length && $('.infoOtEnglishSkill .mt_otherSkillEngLevel').html()){
				$('input[name=\"ctl00$ContentPlaceHolder1$txtOtherName\"]').val($('.infoOtEnglishSkill .mt_otherSkillEngLevel').html());
				$('input[name=\"ctl00$ContentPlaceHolder1$txtOtherScore\"]').val($('.infoOtEnglishSkill .mt_otherSkillEngSorce').html());
			}
			if($('select[name=\"ctl00$ContentPlaceHolder1$ddlOtherLan\"]').length && $('.infoOtherSkill .mt_skillOtherLang').html()){
				let otherSkill = $('select[name=\"ctl00$ContentPlaceHolder1$ddlOtherLan\"]')[0].options;
				let length = otherSkill.length;
				for(let i=0; i<length; i++){
					if(otherSkill[i].innerText == $('.infoOtherSkill .mt_skillOtherLang').html()){
						otherSkill[i].selected = true;
					}
				}
			}
		}
		
		//实习经历
		if($('#position').next().html().trim().substring(2,6) == '写你认为'){
			let length = $('.infoparttimejobs .infopl').length;
			let k = '';
			for(let i=0; i<length; i++){
				if(i>0){
					k = i+1;
				}
				if($('select[name=\"ctl00$ContentPlaceHolder1$ddlBeginYear' + k + '\"]').length && $('.infoparttimejobs .mt_startDate').eq(i).html()){
					let startYear = $('select[name=\"ctl00$ContentPlaceHolder1$ddlBeginYear' + k + '\"]')[0].options;
					let length = startYear.length;
					for(let j=0; j<length; j++){
						if(startYear[j].innerText == $('.infoparttimejobs .mt_startDate').eq(i).html().substring(0,4)){
							startYear[j].selected = true;
						}
					}
				}
				if($('select[name=\"ctl00$ContentPlaceHolder1$ddlBeginMonth' + k + '\"]').length && $('.infoparttimejobs .mt_startDate').eq(i).html()){
					let startMouth = $('select[name=\"ctl00$ContentPlaceHolder1$ddlBeginMonth' + k + '\"]')[0].options;
					let length = startMouth.length;
					for(let j=0; j<length; j++){
						if(startMouth[j].innerText == $('.infoparttimejobs .mt_startDate').eq(i).html().substring(5,6)){
							startMouth[j].selected = true;
						}
					}
				}
				if($('select[name=\"ctl00$ContentPlaceHolder1$ddlEndYear' + k + '\"]').length && $('.infoparttimejobs .mt_endDate').eq(i).html()){
					let endYear = $('select[name=\"ctl00$ContentPlaceHolder1$ddlEndYear' + k + '\"]')[0].options;
					let length = endYear.length;
					for(let j=0; j<length; j++){
						if(endYear[j].innerText == $('.infoparttimejobs .mt_endDate').eq(i).html().substring(0,4)){
							endYear[j].selected = true;
						}
					}
				}
				if($('select[name=\"ctl00$ContentPlaceHolder1$ddlEndMonth' + k + '\"]').length && $('.infoparttimejobs .mt_endDate').eq(i).html()){
					let endMouth = $('select[name=\"ctl00$ContentPlaceHolder1$ddlEndMonth' + k + '\"]')[0].options;
					let length = endMouth.length;
					for(let j=0; j<length; j++){
						if(endMouth[j].innerText == $('.infoparttimejobs .mt_endDate').eq(i).html().substring(5,6)){
							endMouth[j].selected = true;
						}
					}
				}
				if($('input[name=\"ctl00$ContentPlaceHolder1$txtCompany' + k + '\"]').length && $('.infoparttimejobs .mt_companyName').eq(i).html()){
					$('input[name=\"ctl00$ContentPlaceHolder1$txtCompany' + k + '\"]').val($('.infoparttimejobs .mt_companyName').eq(i).html());
				}
				if($('input[name=\"ctl00$ContentPlaceHolder1$txtPosition' + k + '\"]').length && $('.infoparttimejobs .mt_positionName').eq(i).html()){
					$('input[name=\"ctl00$ContentPlaceHolder1$txtPosition' + k + '\"]').val($('.infoparttimejobs .mt_positionName').eq(i).html());
				}
				if($('textarea[name=\"ctl00$ContentPlaceHolder1$txtResponse' + k + '\"]').length && $('.infoparttimejobs .workDes').eq(i).html()){
					$('textarea[name=\"ctl00$ContentPlaceHolder1$txtResponse' + k + '\"]').val($('.infoparttimejobs .workDes').eq(i).html());
				}
			}
		}
		//更多信息
		if($('#position').next().html().trim().substring(2,6) == '你的更多'){
			if($('textarea[name=\"ctl00$ContentPlaceHolder1$txtMorInfo1\"]').length && $('#mt_selfIntro').html()){
				$('textarea[name=\"ctl00$ContentPlaceHolder1$txtMorInfo1\"]').val($('#mt_selfIntro').html());
			}
			if($('textarea[name=\"ctl00$ContentPlaceHolder1$txtMorInfo2\"]').length && $('#mt_skill').html()){
				$('textarea[name=\"ctl00$ContentPlaceHolder1$txtMorInfo2\"]').val($('#mt_skill').html());
			}
			if($('textarea[name=\"ctl00$ContentPlaceHolder1$txtMorInfo3\"]').length && $('#mt_hobbies').html()){
				$('textarea[name=\"ctl00$ContentPlaceHolder1$txtMorInfo3\"]').val($('#mt_hobbies').html());
			}
		}
		
	})
})()