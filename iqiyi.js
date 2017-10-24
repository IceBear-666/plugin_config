(function() {
	$('.quick-write').on('click',
	function() {
		$('#jm_qiuck_cover').fadeIn();
		setTimeout(function() {
			$('#jm_qiuck_cover').fadeOut()
		},
		1000);
		
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
		
		function dispatch(el){      
		   	let evt = document.createEvent('Event');    
		    evt.initEvent('click',true,true);    
		    el.dispatchEvent(evt);  
		}
		
		//个人信息
		if($('#PersonalBasicInfoSchool')){
			if($('input[name=\"name\"]') && $('#mt_name').html()){
				$('input[name=\"name\"]').val($('#mt_name').html());
			}
			if ($('input[name=\"gender\"]').parent().find('i').length) {
		        if ($('#mt_sex').html() && $('#mt_sex').html() == '男') {
		            $('input[name=\"gender\"]').parent().find('i').eq(0).click();
		        }
		        if ($('#mt_sex').html() && $('#mt_sex').html() == '女') {
		            $('input[name=\"gender\"]').parent().find('i').eq(0).click();
		        }
		    }
			if($('input[name=\"birthday\"]') && $('#mt_birth').html()){
				$('input[name=\"birthday\"]').val(formatDate($('#mt_birth').html()));
			}
	        if($('input[name=\"idCardType\"]').next().find('li a') && $('#mt_idtype').html()){
				if($('#mt_idtype').html() == '身份证'){
					dispatch($('input[name=\"idCardType\"]').next().find('li a').eq(0)[0]);
					$('input[name=\"idCardNum\"]').val($('#mt_id').html());
				}
				if($('#mt_idtype').html() == '护照'){
					dispatch($('input[name=\"idCardType\"]').next().find('li a').eq(1)[0]);
					$('input[name=\"idCardNum\"]').val($('#mt_id').html());
				}
			}
	        if($('input[name=\"politicsStatus\"]').parent().find('i').length && $('#mt_polistatus').html()){
				switch($('#mt_polistatus').html()){
					case '中共党员':
					case '中共预备党员':
						$('input[name=\"politicsStatus\"]').parent().find('i').eq(0).click();
						break;
					case '共青团员':
						$('input[name=\"politicsStatus\"]').parent().find('i').eq(1).click();
						break;
					case '群众':
						$('input[name=\"politicsStatus\"]').parent().find('i').eq(2).click();
						break;
					default:
						break;
				}
			}
	        if($('input[name=\"highestEducation\"]').next().find('a').length && $('#mt_edu').html()){
	        	switch($('#mt_edu').html()){
		            case '博士研究生':
		                dispatch($('input[name=\"highestEducation\"]').next().find('a').eq(6)[0]);
		                break;
		            case '硕士研究生':
		                dispatch($('input[name=\"highestEducation\"]').next().find('a').eq(5)[0]);
		                break;
		            case '双学士':
		            case '大学本科-一本':
		            case '大学本科-二本':
		            case '大学本科-三本':
		                dispatch($('input[name=\"highestEducation\"]').next().find('a').eq(4)[0]);
		                break;
		            case '大学专科':
		                dispatch($('input[name=\"highestEducation\"]').next().find('a').eq(3)[0]);
		                break;
		            case '中专':
		                dispatch($('input[name=\"highestEducation\"]').next().find('a').eq(1)[0]);
		                break;
		            case '技校/职高':
		                dispatch($('input[name=\"highestEducation\"]').next().find('a').eq(1)[0]);
		                break;
		            case '高中':
		                dispatch($('input[name=\"highestEducation\"]').next().find('a').eq(2)[0]);
		                break;
		            default :
		                break;
		        }
	        }
	        if($('input[name=\"graduationDate\"]') && $('#mt_gradutetime').html()){
				$('input[name=\"graduationDate\"]').val(formatDate($('#mt_gradutetime').html(), 2) + '-01');
			}
	        if($('input[name=\"household\"]') && $('#mt_nativeplace').html()){
				let length = $('input[name=\"household\"]').next().find('a').length;
				for(let i=0; i<length; i++){
					if($('input[name=\"household\"]').next().find('a').eq(i).text().substring(0,2) == $('#mt_nativeplace').html().substring(0,2)){
						let test1 = $('input[name=\"household\"]').next().find('a').eq(i)[0];
						dispatch(test1);
						setTimeout(function(){
							let anotherLength = $('input[name=\"household\"]').next().next().find('a').length;
							for(let j=0; j<anotherLength; j++){
								if($('input[name=\"household\"]').next().next().find('a').eq(j).text().substring(0,2) == $('#mt_native_city').html().substring(0,2)){
									let test2 = $('input[name=\"household\"]').next().next().find('a').eq(j)[0];
									dispatch(test2);
								}
							}							
						},200)
					}
				}
			}
	        if($('input[name=\"residentialAddress\"]') && $('#mt_livecity_pro').html()){
				let length = $('input[name=\"residentialAddress\"]').next().find('a').length;
				for(let i=0; i<length; i++){
					if($('input[name=\"residentialAddress\"]').next().find('a').eq(i).text().substring(0,2) == $('#mt_livecity_pro').html().substring(0,2)){
						let test1 = $('input[name=\"residentialAddress\"]').next().find('a').eq(i)[0];
						dispatch(test1);
						setTimeout(function(){
							let anotherLength = $('input[name=\"residentialAddress\"]').next().next().find('a').length;
							for(let j=0; j<anotherLength; j++){
								if($('input[name=\"residentialAddress\"]').next().next().find('a').eq(j).text().substring(0,2) == $('#mt_livecity_city').html().substring(0,2)){
									let test2 = $('input[name=\"residentialAddress\"]').next().next().find('a').eq(j)[0];
									dispatch(test2);
								}
							}							
						},200)
					}
				}
			}
	        if($('textarea[name=\"extrasInfo\"]') && $('#mt_selfIntro').html()){
				$('textarea[name=\"extrasInfo\"]').val($('#mt_selfIntro').html());
			}
	        if($('input[name=\"email\"]') && $('#mt_email').html()){
				$('input[name=\"email\"]').val($('#mt_email').html());
			}
	        if($('input[name=\"mobileNum\"]') && $('#mt_tel').html()){
				$('input[name=\"mobileNum\"]').val($('#mt_tel').html());
			}
	        if($('input[name=\"nowAddress\"]') && $('#mt_add').html()){
				$('input[name=\"nowAddress\"]').val($('#mt_add').html());
			}
	        if($('input[name=\"postCode\"]') && $('#mt_zip').html()){
				$('input[name=\"postCode\"]').val($('#mt_zip').html());
			}
	        
		}
		
		//教育经历
		if($('#EducationExperienceInfoSchool')){
			let length = $('#edu-list .infopl').length;
			for(let i=0; i<length; i++){
				if($('#EducationExperienceInfoSchool input[data-name=\"startDate\"]').eq(i) && $('#edu-list .mt_startYear').eq(i).html()){
					$('#EducationExperienceInfoSchool input[data-name=\"startDate\"]').eq(i).val(formatDate($('#edu-list .mt_startYear').eq(i).html(), 2) + '-01');
				}
				if($('#EducationExperienceInfoSchool input[data-name=\"endDate\"]').eq(i) && $('#edu-list .mt_endYear').eq(i).html()){
					$('#EducationExperienceInfoSchool input[data-name=\"endDate\"]').eq(i).val(formatDate($('#edu-list .mt_endYear').eq(i).html(), 2) + '-01');
				}
				if($('input[data-name=\"educationBackground\"]').eq(i).next().find('a').length && $('#edu-list .mt_education').eq(i).html()){
		        	let edu_level = $('input[data-name=\"educationBackground\"]').eq(i).next().find('a');
		        	switch($('#edu-list .mt_education').eq(i).html()){
			            case '博士研究生':
			                dispatch(edu_level.eq(6)[0]);
			                break;
			            case '硕士研究生':
			                dispatch(edu_level.eq(5)[0]);
			                break;
			            case '双学士':
			            case '大学本科-一本':
			            case '大学本科-二本':
			            case '大学本科-三本':
			                dispatch(edu_level.eq(4)[0]);
			                break;
			            case '大学专科':
			                dispatch(edu_level.eq(3)[0]);
			                break;
			            case '中专':
			                dispatch(edu_level.eq(1)[0]);
			                break;
			            case '技校/职高':
			                dispatch(edu_level.eq(1)[0]);
			                break;
			            case '高中':
			                dispatch(edu_level.eq(2)[0]);
			                break;
			            default :
			                break;
			        }
		        }
				if($('input[data-name=\"degree\"]').eq(i).next().find('a').length && $('#edu-list .mt_degree').eq(i).html()){
		        	let edu_degree = $('input[data-name=\"degree\"]').eq(i).next().find('a');
		        	switch($('#edu-list .mt_degree').eq(i).html()){
			            case '学士':
			                dispatch(edu_degree.eq(1)[0]);
			                break;
			            case '双学士':
			                dispatch(edu_degree.eq(1)[0]);
			                break;
			            case '硕士':
			                dispatch(edu_degree.eq(2)[0]);
			                break;
			            case '博士':
			                dispatch(edu_degree.eq(3)[0]);
			                break;
			            default :
			                break;
			        }
		       }
			}
		}
		
		//语言能力
		if($('#LanguageSkillInfoSchool')){
			let length = $('#skill-list .mt_skillEngLevel').length;
			for(let i=0; i<length; i++){
				if($('input[data-name=\"englishType\"]').eq(i).next().find('a').length && $('#skill-list .mt_skillEngLevel').eq(i).html()){
		        	let endlist_level = $('input[data-name=\"englishType\"]').eq(i).next().find('a');
		        	switch($('#skill-list .mt_skillEngLevel').eq(i).html()){
			            case '大学英语四级':
			                dispatch(endlist_level.eq(1)[0]);
			                break;
			            case '大学英语六级':
			                dispatch(endlist_level.eq(2)[0]);
			                break;
			            case '专业四级':
			                dispatch(endlist_level.eq(3)[0]);
			                break;
			            case '专业八级':
			                dispatch(endlist_level.eq(4)[0]);
			                break;
			            default :
			                break;
			        }
		        }
				if($('input[data-name=\"englishScore\"]').eq(i) && $('#skill-list .mt_skillEngSorce').eq(i).html()){
					$('input[data-name=\"englishScore\"]').eq(i).val($('#skill-list .mt_skillEngSorce').eq(i).html());
				}
			}
			
		}
		
		//奖励活动
		if($('#AwardInfo')){
			//学生干部
			let len1 = $('#schclub-list .infopl').length;
			for(let i=0; i<len1; i++){
				if($('textarea[data-name=\"studentCadres\"]') && $('#schclub-list .mt_schClubList').eq(i).html()){
					$('textarea[data-name=\"studentCadres\"]').val($('textarea[data-name=\"studentCadres\"]').val() + $('#schclub-list .mt_schClubList').eq(i).html());
				}
			}
			//获得奖励
			let len2 = $('#schawards-list .infopl').length;
			for(let i=0; i<len2; i++){
				if($('textarea[data-name=\"awardName\"]') && $('#schawards-list .mt_schawradList').eq(i).html()){
					$('textarea[data-name=\"awardName\"]').val($('textarea[data-name=\"awardName\"]').val() + $('#schawards-list .mt_schawradList').eq(i).html());
				}
			}			
		}
		
		//项目经验
		if($('#ProjectExperienceInfoSchool')){
			let length = $('#pro-list .infopl').length;
			for(let i=0; i<length; i++){
				if($('#ProjectExperienceInfoSchool input[data-name=\"startTime\"]').eq(i) && $('#pro-list .mt_prostarttime').eq(i).html()){
					$('#ProjectExperienceInfoSchool input[data-name=\"startTime\"]').eq(i).val(formatDate($('#pro-list .mt_prostarttime').eq(i).html(), 2) + '-01');
				}
				if($('#ProjectExperienceInfoSchool input[data-name=\"endTime\"]').eq(i) && $('#pro-list .mt_proendtime').eq(i).html()){
					$('#ProjectExperienceInfoSchool input[data-name=\"endTime\"]').eq(i).val(formatDate($('#pro-list .mt_proendtime').eq(i).html(), 2) + '-01');
				}
				if($('input[data-name=\"projectName\"]').eq(i) && $('#pro-list .mt_projectName').eq(i).html()){
					$('input[data-name=\"projectName\"]').eq(i).val($('#pro-list .mt_projectName').eq(i).html());
				}
				if($('textarea[data-name=\"projectDescription\"]').eq(i) && $('#pro-list .mt_projectRemark').eq(i).html()){
					$('textarea[data-name=\"projectDescription\"]').eq(i).val($('#pro-list .mt_projectRemark').eq(i).html());
				}
				if($('textarea[data-name=\"dutyDescription\"]').eq(i) && $('#pro-list .mt_projectDuty').eq(i).html()){
					$('textarea[data-name=\"dutyDescription\"]').eq(i).val($('#pro-list .mt_projectDuty').eq(i).html());
				}
			}
		}
		
		//实习经验
		if($('#SocialPracticeInfo')){
			let length = $('#exp-list .infopl').length;
			for(let i=0; i<length; i++){
				if($('#SocialPracticeInfo input[data-name=\"startTime\"]').eq(i) && $('#exp-list .mt_startDate').eq(i).html()){
					$('#SocialPracticeInfo input[data-name=\"startTime\"]').eq(i).val(formatDate($('#exp-list .mt_startDate').eq(i).html(), 2) + '-01');
				}
				if($('#SocialPracticeInfo input[data-name=\"endTime\"]').eq(i) && $('#exp-list .mt_endDate').eq(i).html()){
					$('#SocialPracticeInfo input[data-name=\"endTime\"]').eq(i).val(formatDate($('#exp-list .mt_endDate').eq(i).html(), 2) + '-01');
				}
				if($('input[data-name=\"workPlace\"]').eq(i) && $('#exp-list .mt_companyName').eq(i).html()){
					$('input[data-name=\"workPlace\"]').eq(i).val($('#exp-list .mt_companyName').eq(i).html());
				}
				if($('#SocialPracticeInfo input[data-name=\"position\"]').eq(i) && $('#exp-list .mt_positionName').eq(i).html()){
					$('#SocialPracticeInfo input[data-name=\"position\"]').eq(i).val($('#exp-list .mt_positionName').eq(i).html());
				}
				if($('textarea[data-name=\"workDescription\"]').eq(i) && $('#exp-list .workDes').eq(i).html()){
					$('textarea[data-name=\"workDescription\"]').eq(i).val($('#exp-list .workDes').eq(i).html());
				}
			}
		}
		
		//家庭成员
		if($('#FamilyInfo')){
			if($('input[data-name=\"familyName\"]') && $('#mt_fmname').html()){
				$('input[data-name=\"familyName\"]').val($('#mt_fmname').html());
			}
			if($('#FamilyInfo input[data-name=\"relationship\"]') && $('#mt_fmrelation').html()){
				$('#FamilyInfo input[data-name=\"relationship\"]').val($('#mt_fmrelation').html());
			}
			if($('input[data-name=\"familyPhone\"]') && $('#mt_fmphone').html()){
				$('input[data-name=\"familyPhone\"]').val($('#mt_fmphone').html());
			}
		}
		
		
	})
})()