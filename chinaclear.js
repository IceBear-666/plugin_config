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
		
		if($('input[name=\"graduationPlace\"]').length && $('#mt_hukoucity').html()){
			$('input[name=\"graduationPlace\"]').val($('#mt_hukoucity').html() + $('#mt_hukoucity_city').html())
		}
		if($('input[name=\"sex\"]').length && $('#mt_sex').html()){
			if($('#mt_sex').html() == '男'){
				$('input[name=\"sex\"]').eq(0).click();
			}else if($('#mt_sex').html() == '女'){
				$('input[name=\"sex\"]').eq(1).click();
			}
		}
		if($('input[name=\"birthday\"]').length && $('#mt_birth').html()){
			$('input[name=\"birthday\"]').val(formatDate($('#mt_birth').html()))
		}
		if($('select[name=\"nationality\"]').length && $('#mt_nation').html()){
			let nation = $('select[name=\"nationality\"]')[0].options;
			let length = $('select[name=\"nationality\"]')[0].options.length;
			for(let i=0; i<length; i++){
				if(nation[i].innerText == $('#mt_nation').html()){
					nation[i].selected = true;
				}
			}
		}
		if($('select[name=\"healthInfo\"]').length){
			$('select[name=\"healthInfo\"]')[0].options[1].selected = true;
		}
		if($('select[name=\"politicalAffiliation\"]').length && $('#mt_polistatus').html()){
			let polistatus = $('select[name=\"politicalAffiliation\"]')[0].options;
			switch($('#mt_polistatus').html()){
				case '中共党员':polistatus[1].selected = true; break;
				case '群众':polistatus[2].selected = true; break;
				default :polistatus[3].selected = true; break;
			}
		}
		if($('select[name=\"marriageInfo\"]').length && $('#mt_maritalstatus').html()){
			let maritalstatus = $('select[name=\"marriageInfo\"]')[0].options;
			switch($('#mt_maritalstatus').html()){
				case '已婚':maritalstatus[1].selected = true; break;
				case '未婚':maritalstatus[2].selected = true; break;
				case '离婚' :maritalstatus[3].selected = true; break;
				default : maritalstatus[5].selected = true;break;
			}
		}
		if($('input[name=\"height\"]').length && $('#mt_height').html()){
			$('input[name=\"height\"]').val($('#mt_height').html())
		}
		if($('input[name=\"weight\"]').length && $('#mt_weight').html()){
			$('input[name=\"weight\"]').val($('#mt_weight').html())
		}
		if($('input[name=\"ecName\"]').length && $('#mt_jjlxr').html()){
			$('input[name=\"ecName\"]').val($('#mt_jjlxr').html())
		}
		if($('input[name=\"ecPhone\"]').length && $('#mt_jjlxrtel').html()){
			$('input[name=\"ecPhone\"]').val($('#mt_jjlxrtel').html())
		}
		if($('input[name=\"nativePlace\"]').length && $('#mt_nativeplace').html()){
			$('input[name=\"nativePlace\"]').val($('#mt_nativeplace').html() + $('#mt_native_city').html())
		}
		if($('input[name=\"registeredResidence\"]').length && $('#mt_hukoucitynow').html()){
			$('input[name=\"registeredResidence\"]').val($('#mt_hukoucitynow').html() + $('#mt_hukoucitynow').html())
		}
		if($('input[name=\"address\"]').length && $('#mt_add').html()){
			$('input[name=\"address\"]').val($('#mt_add').html())
		}
		//教育经历
		if($('form[name=\"educationInfoForm\"]').length){
			if($('input[name=\"startTime\"]').length && $('.infopledu .mt_startYear').last().html()){
				$('input[name=\"startTime\"]').val(formatDate($('.infopledu .mt_startYear').last().html(),2));
			}
			if($('input[name=\"endTime\"]').length && $('.infopledu .mt_endYear').last().html()){
				$('input[name=\"endTime\"]').val(formatDate($('.infopledu .mt_endYear').last().html(),2));
			}
			if($('input[name=\"department\"]').length && $('.infopledu .mt_academy').last().html()){
				$('input[name=\"department\"]').val($('.infopledu .mt_academy').last().html());
			}
			if($('input[name=\"school1\"]').length && $('.infopledu .mt_schoolName').last().html()){
				$('input[name=\"school1\"]').val($('.infopledu .mt_schoolName').last().html());
			}
			if($('input[name=\"majorName\"]').length && $('.infopledu .mt_professional').last().html()){
				$('input[name=\"majorName\"]').val($('.infopledu .mt_professional').last().html());
			}
			if($('select[name=\"eduBackground\"]').length && $('.infopledu .mt_education').last().html()){
				let edu = $('select[name=\"eduBackground\"]')[0];
				let degree = $('select[name=\"degree\"]')[0];
				switch($('.infopledu .mt_education').last().html()){
					case 'MPA':
					case 'EMBA':
					case 'MBA':
					case '博士研究生':
						edu.options[1].selected = true;
						degree.options[1].selected = true;
						break;
					case '硕士研究生':
						edu.options[2].selected = true;
						degree.options[2].selected = true;
						break;
					case '双学士':
					case '大学本科-一本':
					case '大学本科-二本':
					case '大学本科-三本':
						edu.options[4].selected = true;
						degree.options[3].selected = true;
						break;
					default:
						break
				}
			}
			if($('input[name=\"hiDegreeDate\"]').length && $('.infopledu .mt_endYear').last().html()){
				$('input[name=\"hiDegreeDate\"]').val(formatDate($('.infopledu .mt_endYear').last().html()));
			}
		}
		//工作经历
		if($('form[name=\"workInfoForm\"]').length){
			if($('input[name=\"startTime\"]').length && $('.infoparttimejobs .mt_startDate').last().html()){
				$('input[name=\"startTime\"]').val(formatDate($('.infoparttimejobs .mt_startDate').last().html(),2));
			}
			if($('input[name=\"endTime\"]').length && $('.infoparttimejobs .mt_endDate').last().html()){
				$('input[name=\"endTime\"]').val(formatDate($('.infoparttimejobs .mt_endDate').last().html(),2));
			}
			if($('input[name=\"company\"]').length && $('.infoparttimejobs .mt_companyName').last().html()){
				$('input[name=\"company\"]').val($('.infoparttimejobs .mt_companyName').last().html());
			}
			if($('input[name=\"workAddress\"]').length && $('.infoparttimejobs .mt_workCity').last().html()){
				$('input[name=\"workAddress\"]').val($('.infoparttimejobs .mt_workCity').last().html());
			}
			if($('input[name=\"job\"]').length && $('.infoparttimejobs .mt_positionName').last().html()){
				$('input[name=\"job\"]').val($('.infoparttimejobs .mt_positionName').last().html());
			}
			if($('input[name=\"industry\"]').length && $('.infoparttimejobs .mt_companyCat').last().html()){
				$('input[name=\"industry\"]').val($('.infoparttimejobs .mt_companyCat').last().html());
			}
			if($('input[name=\"provePerson\"]').length && $('.infoparttimejobs .mt_reterenceName').last().html()){
				$('input[name=\"provePerson\"]').val($('.infoparttimejobs .mt_reterenceName').last().html());
			}
			if($('input[name=\"provePosition\"]').length && $('.infoparttimejobs .mt_reterencePosition').last().html()){
				$('input[name=\"provePosition\"]').val($('.infoparttimejobs .mt_reterencePosition').last().html());
			}
			if($('input[name=\"provePhone\"]').length && $('.infoparttimejobs .mt_reterence_phone').last().html()){
				$('input[name=\"provePhone\"]').val($('.infoparttimejobs .mt_reterence_phone').last().html());
			}
			if($('select[name=\"workType\"]').length && $('.infoparttimejobs .mt_workcat').last().html()){
				let workType = $('select[name=\"workType\"]')[0];
				switch($('.infoparttimejobs .mt_workcat').last().html()){
					case '全职': workType.options[1].selected = true; break;
					case '实习': workType.options[3].selected = true; break;
				}
			}
			if($('textarea[name=\"workDescribe\"]').length && $('.infoparttimejobs .workContent').last().html()){
				$('textarea[name=\"workDescribe\"]').val(formatDate($('.infoparttimejobs .workContent').last().html()));
			}
		}
		//项目经历
		if($('form[name=\"projectInfoForm\"]').length){
			if($('input[name=\"startTime\"]').length && $('.infoproject .mt_prostarttime').last().html()){
				$('input[name=\"startTime\"]').val(formatDate($('.infoproject .mt_prostarttime').last().html(),2));
			}
			if($('input[name=\"endTime\"]').length && $('.infoproject .mt_proendtime').last().html()){
				$('input[name=\"endTime\"]').val(formatDate($('.infoproject .mt_proendtime').last().html(),2));
			}
			if($('input[name=\"projectName\"]').length && $('.infoproject .mt_projectName').last().html()){
				$('input[name=\"projectName\"]').val($('.infoproject .mt_projectName').last().html());
			}
			if($('textarea[name=\"workDescribe\"]').length && $('.infoproject .mt_proList').last().html()){
				$('textarea[name=\"workDescribe\"]').val($('.infoproject .mt_proList').last().html());
			}
			if($('input[name=\"job\"]').length && $('.infoproject .mt_positionName').last().html()){
				$('input[name=\"job\"]').val($('.infoproject .mt_positionName').last().html());
			}
		}
		//语言能力
		if($('form[name=\"languageInfoForm\"]').length){
			if($('select[name=\"level\"]').length && $('.infoOtherSkill .mt_skillGraspLevel').last().html()){
				let level = $('select[name=\"level\"]')[0].options;
				switch($('.infoOtherSkill .mt_skillGraspLevel').last().html()){
					case '精通': level[1].selected = true; break;
					case '熟练': level[2].selected = true; break;
					case '一般': level[3].selected = true; break;
					case '了解': level[4].selected = true; break;
				}
			}
			if($('input[name=\"name\"]').length && $('.infoEnglishSkill .mt_skillEngLevel').last().html()){
				$('input[name=\"name\"]').val($('.infoEnglishSkill .mt_skillEngLevel').last().html());
			}
			if($('input[name=\"score\"]').length && $('.infoEnglishSkill .mt_skillEngSorce').last().html()){
				$('input[name=\"score\"]').val($('.infoEnglishSkill .mt_skillEngSorce').last().html());
			}
			if($('input[name=\"type\"]').length && $('.infoOtherSkill .mt_skillOtherLang').last().html()){
				$('input[name=\"type\"]').val($('.infoOtherSkill .mt_skillOtherLang').last().html());
			}
		}
		//获奖经历
		if($('form[name=\"awardInfoForm\"]').length){
			if($('select[name=\"level\"]').length && $('.infoschaward .mt_awardsType').last().html()){
				let level = $('select[name=\"level\"]')[0].options;
				switch($('.infoschaward .mt_awardsType').last().html()){
					case '国际级': level[6].selected = true; break;
					case '国家级': level[6].selected = true; break;
					case '省市级': level[3].selected = true; break;
					case '学校级': level[2].selected = true; break;
					case '院系级': level[1].selected = true; break;
				}
			}
			if($('input[name=\"name\"]').length && $('.infoschaward .mt_awardsName').last().html()){
				$('input[name=\"name\"]').val($('.infoschaward .mt_awardsName').last().html());
			}
			if($('textarea[name=\"note\"]').length && $('.infoschaward .mt_awardsDes').last().html()){
				$('textarea[name=\"note\"]').val($('.infoschaward .mt_awardsDes').last().html());
			}
			if($('input[name=\"awardDate\"]').length && $('.infoschaward .mt_awardsDate').last().html()){
				$('input[name=\"awardDate\"]').val(formatDate($('.infoschaward .mt_awardsDate').last().html(),2));
			}
		}
		//获奖经历
		if($('form[name=\"familyInfoForm\"]').length){
			if($('input[name=\"relation\"]').length && $('#mt_fmrelation').html()){
				$('input[name=\"relation\"]').val($('#mt_fmrelation').html());
			}
			if($('input[name=\"name\"]').length && $('#mt_fmname').html()){
				$('input[name=\"name\"]').val($('#mt_fmname').html());
			}
			if($('input[name=\"job\"]').length && $('#mt_fmposition').html()){
				$('input[name=\"job\"]').val($('#mt_fmposition').html());
			}
			if($('input[name=\"company\"]').length && $('#mt_fmwork').html()){
				$('input[name=\"company\"]').val($('#mt_fmwork').html());
			}
		}
		//其他信息
		if($('textarea[name=\"interest\"]').length && $('#mt_skill').html()){
			$('textarea[name=\"interest\"]').val($('#mt_skill').html());
		}
		if($('textarea[name=\"evaluation\"]').length && $('#mt_selfIntro').html()){
			$('textarea[name=\"evaluation\"]').val($('#mt_selfIntro').html());
		}
	})
})()