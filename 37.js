(function () {
    KISSY.one('.quick-write').on('click', function () {
        if ($('#jm_qiuck_cover')) {
            $('#jm_qiuck_cover').fadeIn();
            setTimeout(function () {
                $('#jm_qiuck_cover').fadeOut()
            }, 1000)
        }
        if ($('.mod-h3').html() == '个人信息') {
            if ($('input[name=\"rs_realname\"]').length) {
                $('input[name=\"rs_realname\"]').val($('#mt_name').html())
            }
            if ($('input[name=\"rs_sex\"]') && $('#mt_sex').html() == '男') {
			    $('input[name=\"rs_sex\"]').eq(0).trigger('click');
			}
			if ($('input[name=\"rs_sex\"]') && $('#mt_sex').html() == '女') {
			    $('input[name=\"rs_sex\"]').eq(1).trigger('click');
			}
            var event = document.createEvent('HTMLEvents');
            event.initEvent('change', true, false);
            if ($('select[name=\"rs_polity\"]').length) {
                if ($('#mt_polistatus').html() && $('#mt_polistatus').html() == '群众') {
                    $('select[name=\"rs_polity\"]')[0].options[3].selected = true
                } else if ($('#mt_polistatus').html() && $('#mt_polistatus').html() == '中共党员') {
                    $('select[name=\"rs_polity\"]')[0].options[1].selected = true
                } else if ($('#mt_polistatus').html() && $('#mt_polistatus').html() == '共青团员') {
                    $('select[name=\"rs_polity\"]')[0].options[2].selected = true
                } else {
                    $('select[name=\"rs_polity\"]')[0].options[0].selected = true
                }
                $('select[name=\"rs_polity\"]')[0].dispatchEvent(event)
            }
            if ($('select[name=\"rs_hometown_province\"]')) {
                $('select[name=\"rs_hometown_province\"]').val($('#mt_nativeplace').html())
            }
            //修改
            if ($('select[name=\"rs_hometown_city\"]')) {
                $('select[name=\"rs_hometown_city\"]').val($('#mt_native_city').html())
            }
            if ($('input[name=\"rs_contact\"]')) {
                $('input[name=\"rs_contact\"]').val($('#mt_tel').html())
            }
            if ($('input[name=\"rs_birthday\"]') && $('#mt_birth').html()) {
                $('input[name=\"rs_birthday\"]').val($('#mt_birth').html());
            }
            if ($('input[name=\"rs_email\"]')) {
                $('input[name=\"rs_email\"]').val($('#mt_email').html())
            }
            if ($('select[name=\"rs_studly_level\"]').length && $('#mt_edu').html()) {
            	var studly_level = $('select[name=\"rs_studly_level\"]')[0];
                switch ($('#mt_edu').html()) {
		            case '大学专科':
		                studly_level.options[0].selected = true;
		                break;
		            case '海外本科':
		            case '大学本科-一本':
		            case '大学本科-二本':
		            case '大学本科-三本':
		                studly_level.options[1].selected = true;
		                break;
		            case 'MPA':
		            case 'MBA':
		            case '硕士研究生':
		                studly_level.options[2].selected = true;
		                break;
		            case '博士研究生':
		                studly_level.options[3].selected = true;
		                break
            	}
            }
            if ($('select[name=\"rs_marriage\"]') && $('#mt_maritalstatus').html()) {
            	var marriage = $('select[name=\"rs_marriage\"]')[0];
               	switch($('#mt_maritalstatus').html()){
	               	case '未婚':marriage.options[1].selected=true;break;
	               	case '已婚':marriage.options[3].selected=true;break;
	               	case '离婚':marriage.options[5].selected=true;break;
                }
            }
            if($('select[name=\"rs_job_career\"]') && $('#exp-list').find('.mt_startDate').html() && $('#exp-list').find('.mt_endDate').html()){
            	let workTime = $('#exp-list').find('.mt_startDate').html().split('-')[0] - $('#exp-list').find('.mt_endDate').html().split('-')[0];
            	let job_career = $('select[name=\"rs_job_career\"]')[0].options;
            	switch(workTime){
            		case 0:
            			job_career[1].selected=true;break;
            		case 1:
            			job_career[2].selected=true;break;
            		case 2:
            		case 3:
            		case 4:
            			job_career[3].selected=true;break;
            		case 5:
            		case 6:
            		case 7:
            		case 8:
            		case 9:
            			job_career[4].selected=true;break;
            		default: 
            			job_career[5].selected=true;break;
            	}
            }
            
            if($('input[name=\"rs_subjects\"]') && $('#mt_edu').html()){
            	$('input[name=\"rs_subjects\"]').val($('#mt_edu').html());
            }
            if($('input[name=\"rs_gruadte_school\"]') && $('#edu-list').find('.mt_schoolName').last().html()){
            	$('input[name=\"rs_gruadte_school\"]').val($('#edu-list').find('.mt_schoolName').last().html());
            }
            //居住地待修改
            if($('select[name=\"rs_address_province\"]') && $('#mt_livecity_pro').html()){
            	$('select[name=\"rs_address_province\"]').trigger('click');
            	let length = $('select[name=\"rs_address_province\"]').find('option').length;
            	for(let i=0; i<length; i++){
            		if($('select[name=\"rs_address_province\"]').find('option').eq(i).html() == $('#mt_livecity_pro').html()){
            			$('select[name=\"rs_address_province\"]')[0].options[i].selected=true;
            		}
            	}
            }
            
            if($('input[name=\"rs_card_num\"]') && $('#mt_id').html()){
            	$('input[name=\"rs_card_num\"]').val($('#mt_id').html());
            }
            if($('textarea[name=\"rs_my_description\"]') && $('#mt_selfIntro').html()){
            	$('textarea[name=\"rs_my_description\"]').val($('#mt_selfIntro').html());
            }
        }
        if ($('.mod-h3').html() == '教育经历') {
            let length = $('#edu-list').find('.mt_schoolName').length;
            for(let i=0; i<length; i++){
            	if($('input[name=\"rs_edu_start_time[]\"]') && $('#edu-list').find('.mt_startYear').eq(i).html()){
            		$('input[name=\"rs_edu_start_time[]\"]').eq(i).val($('#edu-list').find('.mt_startYear').eq(i).html());
            	}
            	if($('input[name=\"rs_edu_end_time[]\"]') && $('#edu-list').find('.mt_endYear').eq(i).html()){
            		$('input[name=\"rs_edu_end_time[]\"]').eq(i).val($('#edu-list').find('.mt_endYear').eq(i).html());
            	}
            	if($('input[name=\"rs_school[]\"]') && $('#edu-list').find('.mt_schoolName').eq(i).html()){
            		$('input[name=\"rs_school[]\"]').eq(i).val($('#edu-list').find('.mt_schoolName').eq(i).html());
            	}
            	if($('input[name=\"rs_specialty[]\"]') && $('#edu-list').find('.mt_professional').eq(i).html()){
            		$('input[name=\"rs_specialty[]\"]').eq(i).val($('#edu-list').find('.mt_professional').eq(i).html());
            	}
            	if($('textarea[name=\"rs_spe_descript[]\"]') && $('#edu-list').find('.mt_professionaldes').eq(i).html()){
            		$('textarea[name=\"rs_spe_descript[]\"]').eq(i).val($('#edu-list').find('.mt_professionaldes').eq(i).html());
            	}
            	$rs_level = $('select[name=\"rs_level[]\"]')[i];
            	switch($('#edu-list').find('.mt_education').eq(i).html()){
            		case '大学专科':
		                $rs_level.options[4].selected = true;
		                break;
		            case '海外本科':
		            case '大学本科-一本':
		            case '大学本科-二本':
		            case '大学本科-三本':
		                $rs_level.options[5].selected = true;
		                break;
		            case 'MBA':
		            	$rs_level.options[6].selected = true;
		                break;
		            case 'MPA':
		            case '硕士研究生':
		                $rs_level.options[7].selected = true;
		                break;
		            case '博士研究生':
		                $rs_level.options[8].selected = true;
		                break
            	}
            }
        }
        if ($('.mod-h3').html() == '实习经验') {
            for (let i = 0; i < $('#exp-list').find('.mt_companyName').length; i++) {
            	if($('input[name=\"rs_job_start_time[]\"]').eq(i) && $('#exp-list').find('.mt_startDate').eq(i).html()){
            		$('input[name=\"rs_job_start_time[]\"]').eq(i).val($('#exp-list').find('.mt_startDate').eq(i).html());
            	}
            	if($('input[name=\"rs_job_end_time[]\"]').eq(i) && $('#exp-list').find('.mt_endDate').eq(i).html()){
            		$('input[name=\"rs_job_end_time[]\"]').eq(i).val($('#exp-list').find('.mt_endDate').eq(i).html());
            	}
            	if($('input[name=\"rs_company[]\"]').eq(i) && $('#exp-list').find('.mt_companyName').eq(i).html()){
            		$('input[name=\"rs_company[]\"]').eq(i).val($('#exp-list').find('.mt_companyName').eq(i).html());
            	}
            	if($('input[name=\"rs_industry[]\"]').eq(i) && $('#exp-list').find('.mt_companyCat').eq(i).html()){
            		$('input[name=\"rs_industry[]\"]').eq(i).val($('#exp-list').find('.mt_companyCat').eq(i).html());
            	}
            	if($('input[name=\"rs_dept[]\"]').eq(i) && $('#exp-list').find('.mt_department').eq(i).html()){
            		$('input[name=\"rs_dept[]\"]').eq(i).val($('#exp-list').find('.mt_department').eq(i).html());
            	}
            	if($('input[name=\"rs_place[]\"]').eq(i) && $('#exp-list').find('.mt_positionName').eq(i).html()){
            		$('input[name=\"rs_place[]\"]').eq(i).val($('#exp-list').find('.mt_positionName').eq(i).html());
            	}
            	if($('input[name=\"rs_attest_person[]\"]').eq(i) && $('#exp-list').find('.mt_reterenceName').eq(i).html()){
            		$('input[name=\"rs_attest_person[]\"]').eq(i).val($('#exp-list').find('.mt_reterenceName').eq(i).html());
            	}
            	if($('input[name=\"rs_contact[]\"]').eq(i) && $('#exp-list').find('.mt_reterence_phone').eq(i).html()){
            		$('input[name=\"rs_contact[]\"]').eq(i).val($('#exp-list').find('.mt_reterence_phone').eq(i).html());
            	}
            	if($('select[name=\"rs_job_character[]\"]').eq(i) && $('#exp-list').find('.mt_workcat').eq(i).html()){
            		$rs_job_character = $('select[name=\"rs_job_character[]\"]').eq(i)[0];
            		switch($('#exp-list').find('.mt_workcat').eq(i).html()){
            			case '实习':$rs_job_character.options[2].selected=true;break;
            			case '全职':$rs_job_character.options[0].selected=true;break;
            		}
            	}
            	if($('select[name=\"rs_comp_level[]\"]').eq(i) && $('#exp-list').find('.mt_companySize').eq(i).html()){
            		$rs_comp_level = $('select[name=\"rs_comp_level[]\"]').eq(i)[0];
            		switch($('#exp-list').find('.mt_companySize').eq(i).html()){
            			case '少于50人':$rs_comp_level.options[0].selected=true;break;
            			case '50-149人':$rs_comp_level.options[1].selected=true;break;
            			case '150-499人':$rs_comp_level.options[2].selected=true;break;
            			case '500-999人':$rs_comp_level.options[3].selected=true;break;
            			case '1000-9999人':
            			case '10000人以上':$rs_comp_level.options[4].selected=true;break;
            			
            		}
            	}
            	if($('input[name=\"rs_left_reason[]\"]').eq(i) && $('#exp-list').find('.mt_reasons').eq(i).html()){
            		$('input[name=\"rs_left_reason[]\"]').eq(i).val($('#exp-list').find('.mt_reasons').eq(i).html());
            	}
            	if($('textarea[name=\"rs_job_descript[]\"]').eq(i) && $('#exp-list').find('.mt_workList').eq(i).html()){
            		$('textarea[name=\"rs_job_descript[]\"]').eq(i).val($('#exp-list').find('.mt_workList').eq(i).html());
            	}
            }
        }
        if ($('.mod-h3').html() == '实践经验') {
            for (let i = 0; i < $('#schclub-list').find('.mt_schClubName').length; i++) {
            	if($('input[name=\"rs_pra_name[]\"]').eq(i) && $('#schclub-list').find('.mt_schClubName').eq(i).html()){
            		$('input[name=\"rs_pra_name[]\"]').eq(i).val($('#schclub-list').find('.mt_schClubName').eq(i).html());
            	}
            	if($('input[name=\"rs_pra_time_start[]\"]').eq(i) && $('#schclub-list').find('.mt_startDate').eq(i).html()){
            		$('input[name=\"rs_pra_time_start[]\"]').eq(i).val($('#schclub-list').find('.mt_startDate').eq(i).html());
            	}
            	if($('input[name=\"rs_pra_time_end[]\"]').eq(i) && $('#schclub-list').find('.mt_endDate').eq(i).html()){
            		$('input[name=\"rs_pra_time_end[]\"]').eq(i).val($('#schclub-list').find('.mt_endDate').eq(i).html());
            	}
            	if($('textarea[name=\"rs_pra_descript[]\"]').eq(i) && $('#schclub-list').find('.mt_schClubList').eq(i).html()){
            		$('textarea[name=\"rs_pra_descript[]\"]').eq(i).val($('#schclub-list').find('.mt_schClubList').eq(i).html());
            	}
            	
            }
        }
        if ($('.mod-h3').html() == '语言掌握') {
            for (let i = 0; i < $('.infoOtherSkill').find('.mt_skillOtherLang').length; i++) {
            	if($('select[name=\"rs_lang_class[]\"]').eq(i) && $('.infoOtherSkill').find('.mt_skillOtherLang').eq(i).html()){
            		$rs_lang_class = $('select[name=\"rs_lang_class[]\"]').eq(i)[0];
            		switch($('.infoOtherSkill').find('.mt_skillOtherLang').eq(i).html()){
            			case '粤语':
            			case '上海语':
            			case '闽南话':
            				$rs_lang_class.options[1].selected=true;break;
            			case '英语':$rs_lang_class.options[2].selected=true;break;
            			case '日语':$rs_lang_class.options[3].selected=true;break;
            			case '德语':$rs_lang_class.options[4].selected=true;break;
            			case '俄语':$rs_lang_class.options[5].selected=true;break;
            			case '西班牙语':$rs_lang_class.options[6].selected=true;break;
            			case '葡萄牙语':$rs_lang_class.options[7].selected=true;break;
            			case '法语':
            			case '韩语':
            			case '阿拉伯语':
            			case '意大利语':
            			case '朝鲜语':
            				$rs_lang_class.options[8].selected=true;break;
            		}
            	}
            	if($('select[name=\"rs_lang_skill[]\"]').eq(i) && $('.infoOtherSkill').find('.mt_skillGraspLevel').eq(i).html()){
            		$rs_lang_skill = $('select[name=\"rs_lang_skill[]\"]').eq(i)[0];
            		switch($('.infoOtherSkill').find('.mt_skillGraspLevel').eq(i).html()){
            			case '精通':$rs_lang_skill.options[4].selected=true;break;
            			case '熟练':$rs_lang_skill.options[3].selected=true;break;
            			case '一般':$rs_lang_skill.options[2].selected=true;break;
            			case '了解':$rs_lang_skill.options[1].selected=true;break;
            		}
            	}
            	if($('select[name=\"rs_lang_write[]\"]').eq(i) && $('.infoOtherSkill').find('.mt_skillWriteLevel').eq(i).html()){
            		$rs_lang_write = $('select[name=\"rs_lang_write[]\"]').eq(i)[0];
            		switch($('.infoOtherSkill').find('.mt_skillWriteLevel').eq(i).html()){
            			case '精通':$rs_lang_write.options[4].selected=true;break;
            			case '熟练':$rs_lang_write.options[3].selected=true;break;
            			case '一般':$rs_lang_write.options[2].selected=true;break;
            			case '了解':$rs_lang_write.options[1].selected=true;break;
            		}
            	}
            	if($('select[name=\"rs_lang_listen[]\"]').eq(i) && $('.infoOtherSkill').find('.mt_skillListenLevel').eq(i).html()){
            		$rs_lang_listen = $('select[name=\"rs_lang_listen[]\"]').eq(i)[0];
            		switch($('.infoOtherSkill').find('.mt_skillListenLevel').eq(i).html()){
            			case '精通':$rs_lang_listen.options[4].selected=true;break;
            			case '熟练':$rs_lang_listen.options[3].selected=true;break;
            			case '一般':$rs_lang_listen.options[2].selected=true;break;
            			case '了解':$rs_lang_listen.options[1].selected=true;break;
            		}
            	} 	
            }
        }
		if ($('.mod-h3').html() == '培训经历') {
            let length = $('#training-list').find('.mt_trainingName').length;
            for(let i=0; i<length; i++){
            	if($('input[name=\"rs_start_time[]\"]') && $('#training-list').find('.mt_startDate').eq(i).html()){
            		$('input[name=\"rs_start_time[]\"]').eq(i).val($('#training-list').find('.mt_startDate').eq(i).html());
            	}
            	if($('input[name=\"rs_end_time[]\"]') && $('#training-list').find('.mt_endDate').eq(i).html()){
            		$('input[name=\"rs_end_time[]\"]').eq(i).val($('#training-list').find('.mt_endDate').eq(i).html());
            	}
            	if($('input[name=\"rs_group[]\"]') && $('#training-list').find('.mt_trainingCompany').eq(i).html()){
            		$('input[name=\"rs_group[]\"]').eq(i).val($('#training-list').find('.mt_trainingCompany').eq(i).html());
            	}
            	if($('input[name=\"rs_project[]\"]') && $('#training-list').find('.mt_trainingName').eq(i).html()){
            		$('input[name=\"rs_project[]\"]').eq(i).val($('#training-list').find('.mt_trainingName').eq(i).html());
            	}
            	if($('input[name=\"rs_address[]\"]') && $('#training-list').find('.mt_trainingPlace').eq(i).html()){
            		$('input[name=\"rs_address[]\"]').eq(i).val($('#training-list').find('.mt_trainingPlace').eq(i).html());
            	}
            	if($('input[name=\"rs_cert[]\"]') && $('#training-list').find('.mt_certificateName').eq(i).html()){
            		$('input[name=\"rs_cert[]\"]').eq(i).val($('#training-list').find('.mt_certificateName').eq(i).html());
            	}
            }
        }
		if ($('.mod-h3').html() == '项目经验') {
            let length = $('#pro-list').find('.mt_projectName').length;
            for(let i=0; i<length; i++){
            	if($('input[name=\"rs_pro_start_time[]\"]') && $('#pro-list').find('.mt_prostarttime').eq(i).html()){
            		$('input[name=\"rs_pro_start_time[]\"]').eq(i).val($('#pro-list').find('.mt_prostarttime').eq(i).html());
            	}
            	if($('input[name=\"rs_pro_end_time[]\"]') && $('#pro-list').find('.mt_proendtime').eq(i).html()){
            		$('input[name=\"rs_pro_end_time[]\"]').eq(i).val($('#pro-list').find('.mt_proendtime').eq(i).html());
            	}
            	if($('input[name=\"rs_pro_name[]\"]') && $('#pro-list').find('.mt_projectName').eq(i).html()){
            		$('input[name=\"rs_pro_name[]\"]').eq(i).val($('#pro-list').find('.mt_projectName').eq(i).html());
            	}
            	if($('input[name=\"rs_pro_num[]\"]') && $('#pro-list').find('.mt_projectNumber').eq(i).html()){
            		$('input[name=\"rs_pro_num[]\"]').eq(i).val($('#pro-list').find('.mt_projectNumber').eq(i).html());
            	}
            	if($('textarea[name=\"rs_pro_descript[]\"]') && $('#pro-list').find('.mt_projectRemark').eq(i).html()){
            		$('textarea[name=\"rs_pro_descript[]\"]').eq(i).val($('#pro-list').find('.mt_projectRemark').eq(i).html());
            	}
            	if($('textarea[name=\"rs_pro_role[]\"]') && $('#pro-list').find('.mt_projectDuty').eq(i).html()){
            		$('textarea[name=\"rs_pro_role[]\"]').eq(i).val($('#pro-list').find('.mt_projectDuty').eq(i).html());
            	}
            }
        }
		if ($('.mod-h3').html() == '获取证书') {
            let length = $('#certificate-list').find('.mt_certificateName').length;
            for(let i=0; i<length; i++){
            	if($('input[name=\"rs_cert_time[]\"]') && $('#certificate-list').find('.mt_getDate').eq(i).html()){
            		$('input[name=\"rs_cert_time[]\"]').eq(i).val($('#certificate-list').find('.mt_getDate').eq(i).html());
            	}
            	if($('input[name=\"rs_cert_name[]\"]') && $('#certificate-list').find('.mt_certificateName').eq(i).html()){
            		$('input[name=\"rs_cert_name[]\"]').eq(i).val($('#certificate-list').find('.mt_certificateName').eq(i).html());
            	}
            	if($('textarea[name=\"rs_cert_descript[]\"]') && $('#certificate-list').find('.mt_certificateDes').eq(i).html()){
            		$('textarea[name=\"rs_cert_descript[]\"]').eq(i).val($('#certificate-list').find('.mt_certificateDes').eq(i).html());
            	}
            }
        }

    });
})()