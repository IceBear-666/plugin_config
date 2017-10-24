(function(){
	$('.quick-write').on('click',function(){
		var inputTextArr = [];
		var inputs = $('input[type=text]');
		var length = inputs.length;
		for(let i=0; i<length; i++){
			inputTextArr.push(inputs[i].name);
		}

		//基本信息:
		if($('.userNameformat') && $('#mt_name').html()){
			$('.userNameformat').val($('#mt_name').html());
		}
		if($('#dropdown_0') && $('#mt_sex').html()=='男'){
			$('#dropdown_0_ddl').children().children().find('li').eq(0).trigger('click');
		}
		if($('#dropdown_0') && $('#mt_sex').html()=='女'){
			$('#dropdown_0_ddl').children().children().find('li').eq(1).trigger('click');
		}
		if($('#dropdown_1') && $('#mt_maritalstatus').html()){
			
			switch($('#mt_maritalstatus').html()){
				case '已婚':$('#dropdown_1_ddl').children().next().children().find('li').eq(0).trigger('click');break;
				case '未婚':$('#dropdown_1_ddl').children().next().children().find('li').eq(1).trigger('click');break;
				case '离异':$('#dropdown_1_ddl').children().next().children().find('li').eq(2).trigger('click');break;
				default: $('#dropdown_1_ddl').children().next().children().find('li').eq(3).trigger('click');break;
			}
		}
		if($('#dropdown_2') && $('#mt_national').html()){
			var length = $('#dropdown_2_ddl').find('.jalor-selector-body').children().find('li').length;
			for(var i=0; i<length; i++){
				if($('#mt_national').html() == $('#dropdown_2_ddl').find('.jalor-selector-body').children().find('li').eq(i).children().html()){
					$('#dropdown_2_ddl').find('.jalor-selector-body').children().find('li').eq(i).trigger('click');
				}
			}
		}
		if($('.idcard') && $('#mt_id').html()){
			$('.idcard').val($('#mt_id').html());
		}
		if($('.emailformat') && $('#mt_email').html()){
			$('.emailformat').val($('#mt_email').html());
		}
		if($('#highestDegree') && $('#mt_edu').html()){
			switch($('#mt_edu').html()){
				case '大学本科-一本':$('#highestDegree_ddl').children().next().children().find('li').eq(5).trigger('click');break;
				case '大学本科-二本':$('#highestDegree_ddl').children().next().children().find('li').eq(5).trigger('click');break;
				case '大学本科-三本':$('#highestDegree_ddl').children().next().children().find('li').eq(5).trigger('click');break;
				case '海外本科':$('#highestDegree_ddl').children().next().children().find('li').eq(5).trigger('click');break;
				case '硕士研究生':$('#highestDegree_ddl').children().next().children().find('li').eq(1).trigger('click');break;
				case '博士研究生':$('#highestDegree_ddl').children().next().children().find('li').eq(0).trigger('click');break;
				case 'MBA':$('#highestDegree_ddl').children().next().children().find('li').eq(4).trigger('click');break;
				case 'MPA':$('#highestDegree_ddl').children().next().children().find('li').eq(4).trigger('click');break;
				case '大学专科':$('#highestDegree_ddl').children().next().children().find('li').eq(3).trigger('click');break;
				default: $('#highestDegree_ddl').children().next().children().find('li').eq(4).trigger('click');break;
			}
		}
		if($('#nativePlace') && $('#mt_nativeplace').html()){
			var length = $('#nativePlace_ddl').find('.jalor-selector-body').children().find('li').length;
			for(var i=0; i<length; i++){
				if($('#mt_nativeplace').html() == $('#nativePlace_ddl').find('.jalor-selector-body').children().find('li').eq(i).children().html()){
					$('#nativePlace_ddl').find('.jalor-selector-body').children().find('li').eq(i).trigger('click');
				}
			}
		}
		if($('input[name=\"mobilePhone\"]') && $('#mt_tel').html()){
			console.log($('#mt_tel').html());
			$('input[name=\"mobilePhone\"]').val($('#mt_tel').html());
		}
		if($('textarea[name=\"effort\"]') && $('#schawards-list .mt_awardsName').html()){
			for(var i=0; i<$('.infoschaward').length; i++){
				var awardsText =$('textarea[name=\"effort\"]').val() +  '获奖名称：' + $('#schawards-list .mt_awardsName').eq(i).html() +
							 '获奖类型：' + $('#schawards-list .mt_awardsType').eq(i).html() +
							 '获奖等级：' + $('#schawards-list .mt_awardsLevel').eq(i).html() +
							 '获奖时间：' + $('#schawards-list .mt_awardsDate').eq(i).html();
				$('textarea[name=\"effort\"]').val(awardsText);
			}
		}
		
		if($('#birthDate') && $('#mt_birth').html()){
			$('#birthDate').val($('#mt_birth').html())
		}
		
		if($('#highestDegree') && $('#edu-list').find('.mt_degree').html()){
			var length = $('#edu-list').find('.mt_degree').length;
			$('#highestDegree').val($('#edu-list').find('.mt_degree').eq(length-1).html());
		}
		
		if($('#eduDiv') && $('#edu-list').find('.mt_startYear').html()){
			let i = $('#eduDiv').find('.edu_show').length;
			if($('input[name=\"educationStartDateStr\"]').eq(0) && $('#edu-list').find('.mt_startYear').eq(i).html()){
				$('input[name=\"educationStartDateStr\"]').eq(0).val($('#edu-list').find('.mt_startYear').eq(i).html())
			}
			if($('input[name=\"educationEndDateStr\"]').eq(0) && $('#edu-list').find('.mt_endYear').eq(i).html()){
				$('input[name=\"educationEndDateStr\"]').eq(0).val($('#edu-list').find('.mt_endYear').eq(i).html())
			}
			if($('input[name=\"establishmentId\"]').eq(0) && $('#edu-list').find('.mt_schoolName').eq(i).html()){
				$('input[name=\"establishmentId\"]').eq(0).val($('#edu-list').find('.mt_schoolName').eq(i).html())
			}
			if($('input[name=\"graduationCourtyardId\"]').eq(0) && $('#edu-list').find('.mt_academy').eq(i).html()){
				$('input[name=\"graduationCourtyardId\"]').eq(0).val($('#edu-list').find('.mt_academy').eq(i).html())
			}
			if($('input[name=\"firstMajorId\"]').eq(0) && $('#edu-list').find('.mt_professional').eq(i).html()){
				$('input[name=\"firstMajorId\"]').eq(0).val($('#edu-list').find('.mt_professional').eq(i).html())
			}
			if($('input[name=\"qualification\"]').eq(0) && $('#edu-list').find('.mt_education').eq(i).html()){
				$('input[name=\"qualification\"]').eq(0).val($('#edu-list').find('.mt_education').eq(i).html())
			}
			if($('input[name=\"degree\"]').eq(0) && $('#edu-list').find('.mt_degree').eq(i).html()){
				$('input[name=\"degree\"]').eq(0).val($('#edu-list').find('.mt_degree').eq(i).html())
			}
			if($('input[name=\"teacherName\"]').eq(0) && $('#edu-list').find('.mt_tutorname').eq(i).html()){
				$('input[name=\"teacherName\"]').eq(0).val($('#edu-list').find('.mt_tutorname').eq(i).html())
			}

		}
		
		if($('#prizeDiv') && $('#schawards-list').find('.mt_awardsName').html()){
			let i = $('#prizeDiv').find('.awards_show').length;
			if($('input[name=\"prizeGrade\"]').eq(0) && $('#schawards-list').find('.mt_awardsType').eq(i).html()){
				switch($('#schawards-list').find('.mt_awardsType').eq(i).html()){
					case '国际级': $('#dropdown_2_ddl').find('li').eq(0).trigger('click');break;
					case '国家级': $('#dropdown_2_ddl').find('li').eq(1).trigger('click');break;
					case '省市级': $('#dropdown_2_ddl').find('li').eq(2).trigger('click');break;
					case '学校级': $('#dropdown_2_ddl').find('li').eq(3).trigger('click');break;
					case '院系级': $('#dropdown_2_ddl').find('li').eq(4).trigger('click');break;
				}
			}
			if($('input[name=\"prizeName\"]').eq(0) && $('#schawards-list').find('.mt_awardsName').eq(i).html()){
				$('input[name=\"prizeName\"]').eq(0).val($('#schawards-list').find('.mt_awardsName').eq(i).html())
			}
			if($('input[name=\"prizeLevel\"]').eq(0) && $('#schawards-list').find('.mt_awardsLevel').eq(i).html()){
				$('input[name=\"prizeLevel\"]').eq(0).val($('#schawards-list').find('.mt_awardsLevel').eq(i).html())
			}
			if($('input[name=\"prizeTimeStr\"]').eq(0) && $('#schawards-list').find('.mt_awardsDate').eq(i).html()){
				$('input[name=\"prizeTimeStr\"]').eq(0).val($('#schawards-list').find('.mt_awardsDate').eq(i).html())
			}
			if($('textarea[name=\"prizeParticulars\"]').eq(0) && $('#schawards-list').find('.mt_awardsDes').eq(i).html()){
				$('textarea[name=\"prizeParticulars\"]').eq(0).val($('#schawards-list').find('.mt_awardsDes').eq(i).html())
			}

		}
		
		if($('#languageDiv') && $('#skill-list').find('.mt_skillOtherLang').html()){
			let i = $('#languageDiv').find('.lange_show ').length;
			if($('input[name=\"languageName\"]').eq(0) && $('#skill-list').find('.mt_skillOtherLang').eq(i).html()){
				switch($('#skill-list').find('.mt_skillOtherLang').eq(i).html()){
					case '日语': $('#languageName_ddl').find('li').eq(5).trigger('click');break;
					case '法语': $('#languageName_ddl').find('li').eq(3).trigger('click');break;
					case '德语': $('#languageName_ddl').find('li').eq(1).trigger('click');break;
					case '俄语': $('#languageName_ddl').find('li').eq(8).trigger('click');break;
					case '韩语': $('#languageName_ddl').find('li').eq(7).trigger('click');break;
					case '西班牙语': $('#languageName_ddl').find('li').eq(10).trigger('click');break;
					case '葡萄牙语': $('#languageName_ddl').find('li').eq(13).trigger('click');break;
					case '阿拉伯语': $('#languageName_ddl').find('li').eq(14).trigger('click');break;
					case '意大利语': $('#languageName_ddl').find('li').eq(30).trigger('click');break;
					default : $('#languageName_ddl').find('li').last().trigger('click');break;
				}
			}
			if($('input[name=\"spokenLanguageLevel\"]').eq(0) && $('#skill-list').find('.mt_skillListenLevel').eq(i).html()){
				switch($('#skill-list').find('.mt_skillListenLevel').eq(i).html()){
					case '精通': $('#spokenLanguageLevel_ddl').find('li').eq(2).trigger('click');break;
					case '熟练': $('#spokenLanguageLevel_ddl').find('li').eq(1).trigger('click');break;
					case '一般': $('#spokenLanguageLevel_ddl').find('li').eq(0).trigger('click');break;
					case '了解': $('#spokenLanguageLevel_ddl').find('li').eq(0).trigger('click');break;
				}
			}
			if($('input[name=\"peruseLevel\"]').eq(0) && $('#skill-list').find('.mt_skillListenLevel').eq(i).html()){
				switch($('#skill-list').find('.mt_skillListenLevel').eq(i).html()){
					case '精通': $('#peruseLevel_ddl').find('li').eq(2).trigger('click');break;
					case '熟练': $('#peruseLevel_ddl').find('li').eq(1).trigger('click');break;
					case '一般': $('#peruseLevel_ddl').find('li').eq(0).trigger('click');break;
					case '了解': $('#peruseLevel_ddl').find('li').eq(0).trigger('click');break;
				}
			}
			if($('input[name=\"calligraphLevel\"]').eq(0) && $('#skill-list').find('.mt_skillWriteLevel').eq(i).html()){
				switch($('#skill-list').find('.mt_skillWriteLevel').eq(i).html()){
					case '精通': $('#calligraphLevel_ddl').find('li').eq(2).trigger('click');break;
					case '熟练': $('#calligraphLevel_ddl').find('li').eq(1).trigger('click');break;
					case '一般': $('#calligraphLevel_ddl').find('li').eq(0).trigger('click');break;
					case '了解': $('#calligraphLevel_ddl').find('li').eq(0).trigger('click');break;
				}
			}
		}
		
		//实践经历未修改
		if($('#workExpDiv') && $('#schpra-list').find('.mt_schClubName').html()){
//			let i = $('#languageDiv').find('.lange_show ').length;
			if($('#workExpDiv').find('input[name=\"startDateStr\"]').eq(0) && $('#schpra-list').find('.mt_startDate').eq(i).html()){
				$('#workExpDiv').find('input[name=\"startDateStr\"]').eq(0).val($('#schpra-list').find('.mt_startDate').eq(i).html())
			}
			if($('#workExpDiv').find('input[name=\"endDateStr\"]').eq(0) && $('#schpra-list').find('.mt_endDate').eq(i).html()){
				$('#workExpDiv').find('input[name=\"endDateStr\"]').eq(0).val($('#schpra-list').find('.mt_endDate').eq(i).html())
			}
		}
		
		//工作意向
		if($('#intenDiv') && $('#mt_expectcity_city').html()){
			let length = $('#intentionPlaceOne_ddl').find('li').length;
			for(let i=0; i<length; i++){
				 if($('#intentionPlaceOne_ddl').find('li').eq(i).find('span').html() == $('#mt_expectcity_city').html()){
				 	$('#intentionPlaceOne_ddl').find('li').eq(i).trigger('click');
				 }
			}
		}
		
		//项目经历
		if($('#projectDiv') && $('#pro-list').find('.mt_projectName').html()){
			let i = $('#projectDiv').find('.project_show').length;
			if($('#projectDiv').find('input[name=\"startDateStr\"]').eq(0) && $('#pro-list').find('.mt_prostarttime').eq(i).html()){
				$('#projectDiv').find('input[name=\"startDateStr\"]').eq(0).val($('#pro-list').find('.mt_prostarttime').eq(i).html())
			}
			if($('#projectDiv').find('input[name=\"endDateStr\"]').eq(0) && $('#pro-list').find('.mt_proendtime').eq(i).html()){
				$('#projectDiv').find('input[name=\"endDateStr\"]').eq(0).val($('#pro-list').find('.mt_proendtime').eq(i).html())
			}
			if($('#projectDiv').find('input[name=\"projectName\"]').eq(0) && $('#pro-list').find('.mt_projectName').eq(i).html()){
				$('#projectDiv').find('input[name=\"projectName\"]').eq(0).val($('#pro-list').find('.mt_projectName').eq(i).html())
			}
			if($('#projectDiv').find('input[name=\"projectPart\"]').eq(0) && $('#pro-list').find('.mt_positionName').eq(i).html()){
				$('#projectDiv').find('input[name=\"projectPart\"]').eq(0).val($('#pro-list').find('.mt_positionName').eq(i).html())
			}
			if($('#projectDiv').find('textarea[name=\"achievement\"]').eq(0) && $('#pro-list').find('.mt_proList').eq(i).html()){
				$('#projectDiv').find('textarea[name=\"achievement\"]').eq(0).val($('#pro-list').find('.mt_proList').eq(i).html())
			}
		}
		
		//培训经历
		if($('#trainingDiv') && $('#training-list').find('.mt_trainingName').html()){
			let i = $('#trainingDiv').find('.train_show').length;
			if($('#trainingDiv').find('input[name=\"startDateStr\"]').eq(0) && $('#training-list').find('.mt_startDate').eq(i).html()){
				$('#trainingDiv').find('input[name=\"startDateStr\"]').eq(0).val($('#training-list').find('.mt_startDate').eq(i).html())
			}
			if($('#trainingDiv').find('input[name=\"endDateStr\"]').eq(0) && $('#training-list').find('.mt_endDate').eq(i).html()){
				$('#trainingDiv').find('input[name=\"endDateStr\"]').eq(0).val($('#training-list').find('.mt_endDate').eq(i).html())
			}
			if($('#trainingDiv').find('input[name=\"course\"]').eq(0) && $('#training-list').find('.mt_trainingDes').eq(i).html()){
				$('#trainingDiv').find('input[name=\"course\"]').eq(0).val($('#training-list').find('.mt_trainingDes').eq(i).html())
			}
			if($('#trainingDiv').find('input[name=\"mechanism\"]').eq(0) && $('#training-list').find('.mt_trainingCompany').eq(i).html()){
				$('#trainingDiv').find('input[name=\"mechanism\"]').eq(0).val($('#training-list').find('.mt_trainingCompany').eq(i).html())
			}
			if($('#trainingDiv').find('input[name=\"site\"]').eq(0) && $('#training-list').find('.mt_trainingPlace').eq(i).html()){
				$('#trainingDiv').find('input[name=\"site\"]').eq(0).val($('#training-list').find('.mt_trainingPlace').eq(i).html())
			}
		}
		
		//家庭成员
		if($('#contactDiv')){
			if($('#contactDiv').find('input[name=\"contactName\"]').eq(0) && $('#mt_fmname').html()){
				$('#contactDiv').find('input[name=\"contactName\"]').eq(0).val($('#mt_fmname').html())
			}
			if($('#contactDiv').find('input[name=\"contactEmployer\"]').eq(0) && $('#mt_fmwork').html()){
				$('#contactDiv').find('input[name=\"contactEmployer\"]').eq(0).val($('#mt_fmwork').html())
			}
			if($('#contactDiv').find('input[name=\"contactPosition\"]').eq(0) && $('#mt_fmposition').html()){
				$('#contactDiv').find('input[name=\"contactPosition\"]').eq(0).val($('#mt_fmposition').html())
			}
			if($('#contactDiv').find('input[name=\"contactPhone\"]').eq(0) && $('#mt_fmphone').html()){
				$('#contactDiv').find('input[name=\"contactPhone\"]').eq(0).val($('#mt_fmphone').html())
			}
			if($('#contactDiv').find('input[name=\"contactRelationship\"]').eq(0) && $('#mt_fmrelation').html()){
				$('#contactDiv').find('input[name=\"contactRelationship\"]').eq(0).val($('#mt_fmrelation').html())
			}
				
		}
		
		//其他证件信息
		if($('#otherDiv')){
			if($('#otherDiv').find('input[name=\"attachmentType\"]').eq(0).val()=='身份证' && $('#mt_id').html()){
				$('#otherDiv').find('input[name=\"attrNumb\"]').eq(0).val($('#mt_id').html())
			}
		}
		
		
	})
})()
