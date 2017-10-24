//基本信息
if(KISSY.one('#jm_qiuck_cover')){KISSY.one('#jm_qiuck_cover').fadeIn();
setTimeout(function(){KISSY.one('#jm_qiuck_cover').fadeOut()},1000)}

if (KISSY.one('input[name=\"TB_REC_RESUME-C_NAME-TEXT-1\"]')) {
    KISSY.one('input[name=\"TB_REC_RESUME-C_NAME-TEXT-1\"]').val(KISSY.one('#mt_name').html());
}
if (KISSY.one('#TB_REC_RESUME-C_GENDER-CONSTANT-1') && KISSY.one('#mt_sex').html() == '男') {
    document.getElementById('TB_REC_RESUME-C_GENDER-CONSTANT-1').options[1].selected = true;
}
if (KISSY.one('#TB_REC_RESUME-C_GENDER-CONSTANT-1') && KISSY.one('#mt_sex').html() == '女') {
    document.getElementById('TB_REC_RESUME-C_GENDER-CONSTANT-1').options[2].selected = true;
}

if (KISSY.one('input[name=\"TB_REC_RESUME-C_CTF_NO-TEXT-1\"]')&& KISSY.one('#mt_id').html()) {
    KISSY.one('input[name=\"TB_REC_RESUME-C_CTF_NO-TEXT-1\"]').val(KISSY.one('#mt_id').html());
}
if (KISSY.one('input[name=\"TB_REC_RESUME-C_BIRTH_DATE-DATE-1\"]')&& KISSY.one('#mt_birth').html()) {
    KISSY.one('input[name=\"TB_REC_RESUME-C_BIRTH_DATE-DATE-1\"]').val(KISSY.one('#mt_birth').html());
}
if (KISSY.one('input[name=\"TB_REC_RESUME-C_HEIGHT-TEXTAREA-1\"]')&&KISSY.one('#mt_height').html()) {
    KISSY.one('input[name=\"TB_REC_RESUME-C_HEIGHT-TEXTAREA-1\"]').val(KISSY.one('#mt_height').html());
}
if (KISSY.one('input[name=\"TB_REC_RESUME-C_WEIGHT-TEXTAREA-1\"]')&&KISSY.one('#mt_weight').html()) {
    KISSY.one('input[name=\"TB_REC_RESUME-C_WEIGHT-TEXTAREA-1\"]').val(KISSY.one('#mt_weight').html());
}
//目前所在地
if (document.getElementById('curentAddress1')) {
	for (var i = 0; i < 35; i++){
		if (document.getElementById('curentAddress1').options[i].text == KISSY.one('#mt_hukoucitynow').html()) {
		    document.getElementById('curentAddress1').options[i].selected = true;
		    break;
	    }
	    if (KISSY.one('#mt_hukoucitynow').html()=='香港' && document.getElementById('curentAddress1').options[32]) {
	        document.getElementById('curentAddress1').options[32].selected = true;
	        break;
	    }
	    if (KISSY.one('#mt_hukoucitynow').html()=='澳门' && document.getElementById('curentAddress1').options[33]) {
	        document.getElementById('curentAddress1').options[33].selected = true;
	        break;
	    }
	    var a=KISSY.one('#mt_hukoucitynow').html()+'省';
	    if (a == document.getElementById('curentAddress1').options[i].text ) {
	            document.getElementById('curentAddress1').options[i].selected = true;
	            break;
	    }
	    var b=KISSY.one('#curentAddress1').html()+'市';
	    if (b == document.getElementById('curentAddress1').options[i].text ) {
	            document.getElementById('curentAddress1').options[i].selected = true;
	            break;
	    }
	}
}
//民族
if (document.getElementById('TB_REC_RESUME-C_NATION-CONSTANT-1')){
    for (var i =1; i <= 56; i++) {
        if (document.getElementById('TB_REC_RESUME-C_NATION-CONSTANT-1').options[i].text == KISSY.one('#mt_nation').html() ){
            document.getElementById('TB_REC_RESUME-C_NATION-CONSTANT-1').options[i].selected = true;
        }
    }
}
//籍贯
if (document.getElementById('nativeAddress1')) {
	for (var i = 0; i < 35; i++){
		if (document.getElementById('nativeAddress1').options[i].text == KISSY.one('#mt_hukoucitynow').html()) {
		    document.getElementById('nativeAddress1').options[i].selected = true;
		    break;
	    }
	    if (KISSY.one('#mt_hukoucitynow').html()=='香港') {
	        document.getElementById('nativeAddress1').options[
	        32].selected = true;
	        break;
	    }
	    if (KISSY.one('#mt_hukoucitynow').html()=='澳门') {
	        document.getElementById('nativeAddress1').options[33].selected = true;
	        break;
	    }
	    var a=KISSY.one('#mt_hukoucitynow').html()+'省';
	    if (a == document.getElementById('nativeAddress1').options[i].text ) {
	            document.getElementById('nativeAddress1').options[i].selected = true;
	            break;
	    }
	    var b=KISSY.one('#nativeAddress1').html()+'市';
	    if (b == document.getElementById('nativeAddress1').options[i].text ) {
	            document.getElementById('nativeAddress1').options[i].selected = true;
	            break;
	    }
	}		
}
//生源地
if (document.getElementById('birAddress1')) {
	for (var i = 0; i < 35; i++){
		if (document.getElementById('birAddress1').options[i].text == KISSY.one('#mt_hukoucitynow').html()) {
		    document.getElementById('birAddress1').options[i].selected = true;
		    break;
	    }
	    if (KISSY.one('#mt_hukoucitynow').html()=='香港' && document.getElementById('birAddress1').options[32]) {
	        document.getElementById('birAddress1').options[32].selected = true;
	        break;
	    }
	    if (KISSY.one('#mt_hukoucitynow').html()=='澳门' && document.getElementById('birAddress1').options[33]) {
	        document.getElementById('birAddress1').options[33].selected = true;
	        break;
	    }
	    var a=KISSY.one('#mt_hukoucitynow').html()+'省';
	    if (a == document.getElementById('birAddress1').options[i].text ) {
	            document.getElementById('birAddress1').options[i].selected = true;
	            break;
	    }
	    var b=KISSY.one('#birAddress1').html()+'市';
	    if (b == document.getElementById('birAddress1').options[i].text ) {
	            document.getElementById('birAddress1').options[i].selected = true;
	            break;
	    }
	}
}
//最终毕业院校？
if (document.getElementById('graduaSchoolProvince')) {
	for (var i = 0; i < 35; i++){
		if (document.getElementById('graduaSchoolProvince').options[i].text == KISSY.one('#mt_livecity_pro').html()) {
		    document.getElementById('graduaSchoolProvince').options[i].selected = true;
		    break;
	    }
	    if (KISSY.one('#mt_livecity_pro').html()=='香港' && document.getElementById('graduaSchoolProvince').options[32]) {
	        document.getElementById('graduaSchoolProvince').options[32].selected = true;
	        break;
	    }
	    if (KISSY.one('#mt_livecity_pro').html()=='广西' && document.getElementById('graduaSchoolProvince').options[11]) {
	        document.getElementById('graduaSchoolProvince').options[11].selected = true;
	        break;
	    }
	    if (KISSY.one('#mt_livecity_pro').html()=='宁夏' && document.getElementById('graduaSchoolProvince').options[8]) {
	        document.getElementById('graduaSchoolProvince').options[8].selected = true;
	        break;
	    }
	    if (KISSY.one('#mt_livecity_pro').html()=='新疆' && document.getElementById('graduaSchoolProvince').options[30]) {
	        document.getElementById('graduaSchoolProvince').options[30].selected = true;
	        break;
	    }
	    if (KISSY.one('#mt_livecity_pro').html()=='澳门' && document.getElementById('graduaSchoolProvince').options[33]) {
	        document.getElementById('graduaSchoolProvince').options[33].selected = true;
	        break;
	    }
	    var a=KISSY.one('#mt_livecity_pro').html()+'省';
	    if (a == document.getElementById('graduaSchoolProvince').options[i].text ) {
	            document.getElementById('graduaSchoolProvince').options[i].selected = true;
	            break;
	    }

	    var c=KISSY.one('#mt_livecity_pro').html()+'自治区';
	    if (c == document.getElementById('graduaSchoolProvince').options[i].text ) {
	            document.getElementById('graduaSchoolProvince').options[i].selected = true;
	            break;
	    }
	    var b=KISSY.one('#mt_livecity_pro').html()+'市';
	    if (b == document.getElementById('graduaSchoolProvince').options[i].text ) {
	            document.getElementById('graduaSchoolProvince').options[i].selected = true;
	            break;
	    }
	}
}/*
for (var i =0; i<100; i++) {
	if ($('.mt_schoolName').html()== document.getElementById('graduaSchoolName').options[i].text) {
	    document.getElementById('graduaSchoolName').options[i].selected = true;
	break;
	}
}*/
//最高学历
if (document.getElementById('TB_REC_RESUME-C_HIGHEST_EDU-CONSTANT-1')) {
	for (var i =0; i<10; i++) {
		if (document.getElementById('TB_REC_RESUME-C_HIGHEST_EDU-CONSTANT-1').options[i].text==KISSY.one('#mt_edu').html()) {
		    document.getElementById('TB_REC_RESUME-C_HIGHEST_EDU-CONSTANT-1').options[i].selected = true;
		    break;
		}
		if (KISSY.one('#mt_edu').html()=='大学本科-一本'||$('#mt_edu').html()=='大学本科-二本'|| 
	        KISSY.one('#mt_edu').html()=='大学本科-三本' ||$('#mt_edu').html()=='海外本科' ) {
			if (document.getElementById('TB_REC_RESUME-C_HIGHEST_EDU-CONSTANT-1').options[3]) {
			    document.getElementById('TB_REC_RESUME-C_HIGHEST_EDU-CONSTANT-1').options[3].selected = true;
			}
		break;
		}
		if (KISSY.one('#mt_edu').html()=='初中及以下' && document.getElementById('TB_REC_RESUME-C_HIGHEST_EDU-CONSTANT-1').options[8]) {
		    document.getElementById('TB_REC_RESUME-C_HIGHEST_EDU-CONSTANT-1').options[8].selected = true;
		break;
		}
		if (KISSY.one('#mt_edu').html()=='技校/职高' && document.getElementById('TB_REC_RESUME-C_HIGHEST_EDU-CONSTANT-1').options[6]) {
		    document.getElementById('TB_REC_RESUME-C_HIGHEST_EDU-CONSTANT-1').options[6].selected = true;
		break;
		}
	}
}
//最高学位
if (document.getElementById('TB_REC_RESUME-C_HIGHEST_DEGREE-CONSTANT-1')) {
	for (var i =0; i<$('.infopledu').html().length; i++) {
		if (KISSY.one('#mt_edu').html()==$('.infopledu .mt_education').html()) {
			if (document.getElementById('TB_REC_RESUME-C_HIGHEST_DEGREE-CONSTANT-1').options[i].text==$('.mt_degree').html()) {
		    document.getElementById('TB_REC_RESUME-C_HIGHEST_DEGREE-CONSTANT-1').options[i].selected = true;
		    break;
			}
		}
	}
}
//招生性质
if (KISSY.one('#mt_edutype').html()=='全日制统分统招' && document.getElementById('TB_REC_RESUME-C_RECRUITMENT_PROPERTY-TEXT-1')) {
    document.getElementById('TB_REC_RESUME-C_RECRUITMENT_PROPERTY-TEXT-1').options[1].selected = true;
}
if (KISSY.one('#mt_edutype').html()=='海外留学' && document.getElementById('TB_REC_RESUME-C_RECRUITMENT_PROPERTY-TEXT-1')) {
    document.getElementById('TB_REC_RESUME-C_RECRUITMENT_PROPERTY-TEXT-1').options[7].selected = true;
}
if (KISSY.one('#mt_edutype').html()=='成人教育' && document.getElementById('TB_REC_RESUME-C_RECRUITMENT_PROPERTY-TEXT-1')) {
    document.getElementById('TB_REC_RESUME-C_RECRUITMENT_PROPERTY-TEXT-1').options[3].selected = true;
}
else{
	if (document.getElementById('TB_REC_RESUME-C_RECRUITMENT_PROPERTY-TEXT-1')) {
	    document.getElementById('TB_REC_RESUME-C_RECRUITMENT_PROPERTY-TEXT-1').options[8].selected = true;
	}
}

//国籍
if (document.getElementById('TB_REC_RESUME-C_NATIONALITY-TEXT-1')) {
	for (var i =0; i <895; i++) {
		if (document.getElementById('TB_REC_RESUME-C_NATIONALITY-TEXT-1').options[i].text==KISSY.one('#mt_national').html()) {
		    document.getElementById('TB_REC_RESUME-C_NATIONALITY-TEXT-1').options[i].selected = true;
		break;
		}
	}
}
//毕业专业
if (document.getElementById('major1')) {
	document.getElementById('major1').options[3].selected = true;
}
if (KISSY.one('input[name=\"TB_REC_RESUME-C_OTHER_MAJOR-TEXT-1\"]')&& $('.mt_professional').html()) {
    KISSY.one('input[name=\"TB_REC_RESUME-C_OTHER_MAJOR-TEXT-1\"]').val($('.mt_professional').html());
}
//专业排名
if (KISSY.one('input[name=\"TB_REC_RESUME-C_SPECPM-TEXT-1\"]')&& $('.mt_professionalranking').html()) {
    KISSY.one('input[name=\"TB_REC_RESUME-C_SPECPM-TEXT-1\"]').val($('.mt_professionalranking').html());
}
//毕业时间
if (KISSY.one('input[name=\"TB_REC_RESUME-C_GRADUATE_TIME-DATE-1\"]')&& $('.mt_gradutetime').html()) {
    KISSY.one('input[name=\"TB_REC_RESUME-C_GRADUATE_TIME-DATE-1\"]').val($('.mt_gradutetime').html()+'-1'
    	);
}
//学分绩点
if (KISSY.one('input[name=\"TB_REC_RESUME-C_SCOPE-TEXT-1\"]') && $('.mt_gpascore').html()) {
    KISSY.one('input[name=\"TB_REC_RESUME-C_SCOPE-TEXT-1\"]').val($('.mt_gpascore').html());
}
//政治面貌
if(document.getElementById('TB_REC_RESUME-C_POLITICAL_STATUS-CONSTANT-1')){
	for (var i =0; i <7; i++) {
		if (document.getElementById('TB_REC_RESUME-C_POLITICAL_STATUS-CONSTANT-1').options[i].text==KISSY.one('#mt_polistatus').html()) {
		    document.getElementById('TB_REC_RESUME-C_POLITICAL_STATUS-CONSTANT-1').options[i].selected = true;
		break;
		}
		if ('中国农工民主党'==KISSY.one('#mt_polistatus').html()) {
		    document.getElementById('TB_REC_RESUME-C_POLITICAL_STATUS-CONSTANT-1').options[6].selected = true;
		break;
		}
		else{
			document.getElementById('TB_REC_RESUME-C_POLITICAL_STATUS-CONSTANT-1').options[4].selected = true;
			break;
		}
	}
}
//婚宴状况
if (document.getElementById('TB_REC_RESUME-C_MARITAL_STATUS-CONSTANT-1')) {
	for (var i =0; i <5; i++) {
		if (document.getElementById('TB_REC_RESUME-C_MARITAL_STATUS-CONSTANT-1').options[i].text==KISSY.one('#mt_maritalstatus').html()) {
		    document.getElementById('TB_REC_RESUME-C_MARITAL_STATUS-CONSTANT-1').options[i].selected = true;
		break;
		}
	}
}

//联系方式
if (KISSY.one('input[name=\"TB_REC_COMMUNICATION-C_CONTACT-TEXT-1\"]') && KISSY.one('#mt_tel').html()) {
    KISSY.one('input[name=\"TB_REC_COMMUNICATION-C_CONTACT-TEXT-1\"]').val(KISSY.one('#mt_tel').html());
}
if (KISSY.one('input[name=\"TB_REC_COMMUNICATION-C_MOBILE_TEL-TEXT-1\"]') && KISSY.one('#mt_tel').html()) {
    KISSY.one('input[name=\"TB_REC_COMMUNICATION-C_MOBILE_TEL-TEXT-1\"]').val(KISSY.one('#mt_tel').html());
}
if (KISSY.one('input[name=\"TB_REC_COMMUNICATION-C_PER_EMAIL-TEXT-1\"]') && KISSY.one('#mt_email').html()) {
    KISSY.one('input[name=\"TB_REC_COMMUNICATION-C_PER_EMAIL-TEXT-1\"]').val(KISSY.one('#mt_email').html());
}
if (KISSY.one('input[name=\"TB_REC_COMMUNICATION-C_HOME_TEL-TEXT-1\"]') && KISSY.one('#mt_gudingtel').html()) {
    KISSY.one('input[name=\"TB_REC_COMMUNICATION-C_HOME_TEL-TEXT-1\"]').val(KISSY.one('#mt_gudingtel').html());
}
if (KISSY.one('input[name=\"TB_REC_COMMUNICATION-C_HOME_ADDR-TEXT-1\"]') && KISSY.one('#mt_add').html()) {
    KISSY.one('input[name=\"TB_REC_COMMUNICATION-C_HOME_ADDR-TEXT-1\"]').val(KISSY.one('#mt_add').html());
}
if (KISSY.one('input[name=\"TB_REC_COMMUNICATION-C_POSTCODE-TEXT-1\"]') && KISSY.one('#mt_zip').html()) {
    KISSY.one('input[name=\"TB_REC_COMMUNICATION-C_POSTCODE-TEXT-1\"]').val(KISSY.one('#mt_zip').html());
}


//教育经历
if (KISSY.one('input[name=\"TB_REC_EDU-C_UNIVERSITY-TEXT-1\"]') && $('.mt_schoolName').eq(0).html()) {
	if (KISSY.one('input[name=\"TB_REC_EDU-C_UNIVERSITY-TEXT-1\"]') && $('.mt_schoolName').eq(0).html()) {
	    KISSY.one('input[name=\"TB_REC_EDU-C_UNIVERSITY-TEXT-1\"]').val($('.mt_schoolName').eq(0).html());
	}
	if (KISSY.one('input[name=\"TB_REC_EDU-C_MAJOR_NAME-TEXT-1\"]') && $('.mt_professional').eq(0).html()) {
	    KISSY.one('input[name=\"TB_REC_EDU-C_MAJOR_NAME-TEXT-1\"]').val($('.mt_professional').eq(0).html());
	}
	if (KISSY.one('input[name=\"TB_REC_EDU-C_MAJOR_COURSE-TEXT-1\"]') && $('.mt_major').eq(0).html()) {
	    KISSY.one('input[name=\"TB_REC_EDU-C_MAJOR_COURSE-TEXT-1\"]').val($('.mt_major').eq(0).html());
	}
	if (KISSY.one('input[name=\"TB_REC_EDU-C_ADMISSION_DATE-DATE-1\"]') && $('.mt_startYear').eq(0).html()) {
	    KISSY.one('input[name=\"TB_REC_EDU-C_ADMISSION_DATE-DATE-1\"]').val($('.mt_startYear').eq(0).html()+'-01');
	}
	if (KISSY.one('input[name=\"TB_REC_EDU-C_GRADUATION_DATE-DATE-1\"]') && $('.infopledu .mt_endYear').eq(0)) {
	    KISSY.one('input[name=\"TB_REC_EDU-C_GRADUATION_DATE-DATE-1\"]').val($('.infopledu .mt_endYear').eq(0).html()+'-01');
	}
	if (document.getElementById('TB_REC_EDU-C_DEGREE-CONSTANT-1').options[0].text && $('.mt_degree').eq(0).html()) {
		for (var i =0; i<10; i++) {
			if (document.getElementById('TB_REC_EDU-C_DEGREE-CONSTANT-1').options[i].text==$('.mt_degree').eq(0).html()) {
			    document.getElementById('TB_REC_EDU-C_DEGREE-CONSTANT-1').options[i].selected = true;
			    break;
			}
		}
	}
	if (document.getElementById('TB_REC_EDU-C_EDU_GRADE-CONSTANT-1').options[0].text && $('.mt_education').eq(0)) {
		for (var i =0; i<10; i++) {
			if (document.getElementById('TB_REC_EDU-C_EDU_GRADE-CONSTANT-1').options[i].text==$('.mt_education').eq(0).html()) {
			    document.getElementById('TB_REC_EDU-C_EDU_GRADE-CONSTANT-1').options[i].selected = true;
			    break;
			}
			if ($('.mt_education').eq(0).html()=='大学本科-一本'||$('.mt_education').eq(0).html()=='大学本科-二本'|| 
		        $('.mt_education').eq(0).html()=='大学本科-三本' ||$('.mt_education').eq(0).html()=='海外本科' ) {
			    document.getElementById('TB_REC_EDU-C_EDU_GRADE-CONSTANT-1').options[3].selected = true;
				break;
			}
		}
	}
}
if (KISSY.one('input[name=\"TB_REC_EDU-C_UNIVERSITY-TEXT-2\"]') && $('.mt_schoolName').eq(1).html()) {
	if (KISSY.one('input[name=\"TB_REC_EDU-C_UNIVERSITY-TEXT-2\"]')) {
	    KISSY.one('input[name=\"TB_REC_EDU-C_UNIVERSITY-TEXT-2\"]').val($('.mt_schoolName').eq(1).html());
	}
	if (KISSY.one('input[name=\"TB_REC_EDU-C_MAJOR_NAME-TEXT-2\"]')) {
	    KISSY.one('input[name=\"TB_REC_EDU-C_MAJOR_NAME-TEXT-2\"]').val($('.mt_professional').eq(1).html());
	}
	if (KISSY.one('input[name=\"TB_REC_EDU-C_MAJOR_COURSE-TEXT-2\"]')) {
	    KISSY.one('input[name=\"TB_REC_EDU-C_MAJOR_COURSE-TEXT-2\"]').val($('.mt_major').eq(1).html());
	}
	if (KISSY.one('input[name=\"TB_REC_EDU-C_ADMISSION_DATE-DATE-2\"]')) {
	    KISSY.one('input[name=\"TB_REC_EDU-C_ADMISSION_DATE-DATE-2\"]').val($('.mt_startYear').eq(1).html()+'-01');
	}
	if (KISSY.one('input[name=\"TB_REC_EDU-C_GRADUATION_DATE-DATE-2\"]')) {
	    KISSY.one('input[name=\"TB_REC_EDU-C_GRADUATION_DATE-DATE-2\"]').val($('.infopledu .mt_endYear').eq(1).html()+'-01');
	}
	if (document.getElementById('TB_REC_EDU-C_DEGREE-CONSTANT-2').options[0].text) {
		for (var i =0; i<8; i++) {
			if (document.getElementById('TB_REC_EDU-C_DEGREE-CONSTANT-2').options[i].text==$('.mt_degree').eq(1).html()) {
			    document.getElementById('TB_REC_EDU-C_DEGREE-CONSTANT-2').options[i].selected = true;
			    break;
			}
		}
		
	}
	if (document.getElementById('TB_REC_EDU-C_EDU_GRADE-CONSTANT-2').options[0].text) {
		for (var i =0; i<10; i++) {
			if (document.getElementById('TB_REC_EDU-C_EDU_GRADE-CONSTANT-2').options[i].text==$('.mt_education').eq(1).html()) {
			    document.getElementById('TB_REC_EDU-C_EDU_GRADE-CONSTANT-2').options[i].selected = true;
			    break;
			}
			if ($('.mt_education').eq(1).html()=='大学本科-一本'||$('.mt_education').eq(1).html()=='大学本科-二本'|| 
		        $('.mt_education').eq(1).html()=='大学本科-三本' ||$('.mt_education').eq(1).html()=='海外本科' ) {
			    document.getElementById('TB_REC_EDU-C_EDU_GRADE-CONSTANT-2').options[3].selected = true;
				break;
			}
			else{
			document.getElementById('TB_REC_EDU-C_EDU_GRADE-CONSTANT-2').options[6].selected = true;
			    break;
			}
		}
	}
}

if (KISSY.one('input[name=\"TB_REC_EDU-C_UNIVERSITY-TEXT-3\"]')&& $('.mt_schoolName').eq(2).html()) {
	if (KISSY.one('input[name=\"TB_REC_EDU-C_UNIVERSITY-TEXT-3\"]')) {
	    KISSY.one('input[name=\"TB_REC_EDU-C_UNIVERSITY-TEXT-3\"]').val($('.mt_schoolName').eq(2).html());
	}
	if (KISSY.one('input[name=\"TB_REC_EDU-C_MAJOR_NAME-TEXT-3\"]')) {
	    KISSY.one('input[name=\"TB_REC_EDU-C_MAJOR_NAME-TEXT-3\"]').val($('.mt_professional').eq(2).html());
	}
	if (KISSY.one('input[name=\"TB_REC_EDU-C_MAJOR_COURSE-TEXT-3\"]')) {
	    KISSY.one('input[name=\"TB_REC_EDU-C_MAJOR_COURSE-TEXT-3\"]').val($('.mt_major').eq(2).html());
	}
	if (KISSY.one('input[name=\"TB_REC_EDU-C_ADMISSION_DATE-DATE-3\"]')) {
	    KISSY.one('input[name=\"TB_REC_EDU-C_ADMISSION_DATE-DATE-3\"]').val($('.mt_startYear').eq(2).html()+'-01');
	}
	if (KISSY.one('input[name=\"TB_REC_EDU-C_GRADUATION_DATE-DATE-3\"]')) {
	    KISSY.one('input[name=\"TB_REC_EDU-C_GRADUATION_DATE-DATE-3\"]').val($('.infopledu .mt_endYear').eq(2).html()+'-01');
	}
	if (document.getElementById('TB_REC_EDU-C_DEGREE-CONSTANT-3').options[0].text) {
		for (var i =0; i<8; i++) {
			if (document.getElementById('TB_REC_EDU-C_DEGREE-CONSTANT-3').options[i].text==$('.mt_degree').eq(2).html()) {
			    document.getElementById('TB_REC_EDU-C_DEGREE-CONSTANT-3').options[i].selected = true;
			    break;
			}
		}
		
	}
	if (document.getElementById('TB_REC_EDU-C_EDU_GRADE-CONSTANT-3').options[0].text) {
		for (var i =0; i<10; i++) {
			if (document.getElementById('TB_REC_EDU-C_EDU_GRADE-CONSTANT-3').options[i].text==$('.mt_education').eq(2).html()) {
			    document.getElementById('TB_REC_EDU-C_EDU_GRADE-CONSTANT-3').options[i].selected = true;
			    break;
			}
			if ($('.mt_education').eq(2).html()=='大学本科-一本'||$('.mt_education').eq(2).html()=='大学本科-二本'|| 
		        $('.mt_education').eq(2).html()=='大学本科-三本' ||$('.mt_education').eq(2).html()=='海外本科' ) {
			    document.getElementById('TB_REC_EDU-C_EDU_GRADE-CONSTANT-3').options[3].selected = true;
				break;
			}
		}
	}
}


//外语水平
if (KISSY.one('input[name=\"TB_REC_FROLANGUA-C_SCORE-TEXT-1\"]')&& $('.mt_skillEngLevel').eq(0).html()) {
	if (document.getElementById('TB_REC_FROLANGUA-C_TYPE-CONSTANT-1').options[1]&& $('.mt_skillEngLevel').eq(0).html()) {
	    document.getElementById('TB_REC_FROLANGUA-C_TYPE-CONSTANT-1').options[1].selected = true;
	}
	if (document.getElementById('level1').options[1]) {
	    for (var i =0; i<8; i++) {
	    	if (document.getElementById('level1').options[i].text==$('.mt_skillEngLevel').eq(0).html()) {
	    		document.getElementById('level1').options[i].selected=true;
	    	}
	    }
	}
	if (KISSY.one('input[name=\"TB_REC_FROLANGUA-C_SCORE-TEXT-1\"]') && $('.mt_skillEngSorce').eq(0).html()) {
	    KISSY.one('input[name=\"TB_REC_FROLANGUA-C_SCORE-TEXT-1\"]').val($('.mt_skillEngSorce').eq(0).html());
	}
}
if (KISSY.one('input[name=\"TB_REC_FROLANGUA-C_SCORE-TEXT-2\"]')&& $('.mt_skillEngLevel').eq(1).html()) {
	if (document.getElementById('TB_REC_FROLANGUA-C_TYPE-CONSTANT-2')&& $('.mt_skillEngLevel').eq(1).html()) {
	    document.getElementById('TB_REC_FROLANGUA-C_TYPE-CONSTANT-2').options[1].selected = true;
	}
	if (document.getElementById('level2').options[1]) {
	    for (var i =0; i<8; i++) {
	    	if (document.getElementById('level2').options[i].text==$('.mt_skillEngLevel').eq(1).html()) {
	    		document.getElementById('level2').options[i].selected=true;
	    	}
	    }
	}
	if (KISSY.one('input[name=\"TB_REC_FROLANGUA-C_SCORE-TEXT-2\"]') && $('.mt_skillEngSorce').eq(1).html()) {
	    KISSY.one('input[name=\"TB_REC_FROLANGUA-C_SCORE-TEXT-2\"]').val($('.mt_skillEngSorce').eq(1).html());
	}
}


if (KISSY.one('input[name=\"TB_REC_FROLANGUA-C_SCORE-TEXT-3\"]')&& $('.mt_skillEngLevel').eq(2).html()) {
	if (document.getElementById('TB_REC_FROLANGUA-C_TYPE-CONSTANT-3')&& $('.mt_skillEngLevel').eq(2).html()) {
	    document.getElementById('TB_REC_FROLANGUA-C_TYPE-CONSTANT-3').options[1].selected = true;
	}
	if (document.getElementById('level3').options[1]) {
	    for (var i =0; i<8; i++) {
	    	if (document.getElementById('level3').options[i].text==$('.mt_skillEngLevel').eq(2).html()) {
	    		document.getElementById('level3').options[i].selected=true;
	    	}
	    }
	}
	if (KISSY.one('input[name=\"TB_REC_FROLANGUA-C_SCORE-TEXT-3\"]') && $('.mt_skillEngSorce').eq(2).html()) {
	    KISSY.one('input[name=\"TB_REC_FROLANGUA-C_SCORE-TEXT-3\"]').val($('.mt_skillEngSorce').eq(2).html());
	}
}
if (KISSY.one('input[name=\"TB_REC_FROLANGUA-C_SCORE-TEXT-4\"]')&& $('.mt_skillEngLevel').eq(3).html()) {
	if (document.getElementById('TB_REC_FROLANGUA-C_TYPE-CONSTANT-4')&& $('.mt_skillEngLevel').eq(3).html()) {
	    document.getElementById('TB_REC_FROLANGUA-C_TYPE-CONSTANT-4').options[1].selected = true;
	}
	if (document.getElementById('level4').options[1]) {
	    for (var i =0; i<8; i++) {
	    	if (document.getElementById('level4').options[i].text==$('.mt_skillEngLevel').eq(3).html()) {
	    		document.getElementById('level4').options[i].selected=true;
	    	}
	    }
	}
	if (KISSY.one('input[name=\"TB_REC_FROLANGUA-C_SCORE-TEXT-4\"]') && $('.mt_skillEngSorce').eq(3).html()) {
	    KISSY.one('input[name=\"TB_REC_FROLANGUA-C_SCORE-TEXT-4\"]').val($('.mt_skillEngSorce').eq(3).html());
	}
}

//计算机水平？？
/*
if (document.getElementById('TB_REC_COMPUTER-C_TEST_NAME-CONSTANT-1')&& $('.mt_certificateName')) {
    document.getElementById('TB_REC_COMPUTER-C_TEST_NAME-CONSTANT-1').options[2].selected = true;
}
if ($('input[name=\"TB_REC_COMPUTER-C_OTHER_LEVEL-TEXT-1\"]')) {
    $('input[name=\"TB_REC_COMPUTER-C_OTHER_LEVEL-TEXT-1\"]').val($('.mt_certificateName').eq(0).html());
}
*/

//证书
if (KISSY.one('input[name=\"TB_REC_COMPETENCY-C_CTF_NAME-TEXT-1\"]')) {
    KISSY.one('input[name=\"TB_REC_COMPETENCY-C_CTF_NAME-TEXT-1\"]').val($('.infoplcerti .mt_certificateName').eq(0).html());
}
if (KISSY.one('input[name=\"TB_REC_COMPETENCY-C_AWARDIND_DATE-DATE-1\"]')) {
    KISSY.one('input[name=\"TB_REC_COMPETENCY-C_AWARDIND_DATE-DATE-1\"]').val($('.infoplcerti .mt_getDate').eq(0).html()+'-01');
}
if (KISSY.one('input[name=\"TB_REC_COMPETENCY-C_AWARDIND_INSTITUTE-TEXT-1\"]')) {
    KISSY.one('input[name=\"TB_REC_COMPETENCY-C_AWARDIND_INSTITUTE-TEXT-1\"]').val($('.infoplcerti .mt_issuing').eq(0).html());
}

if (KISSY.one('input[name=\"TB_REC_COMPETENCY-C_CTF_NAME-TEXT-2\"]')&& $('.infoplcerti .mt_certificateName').eq(1).html()) {
	if (KISSY.one('input[name=\"TB_REC_COMPETENCY-C_CTF_NAME-TEXT-2\"]')) {
	    KISSY.one('input[name=\"TB_REC_COMPETENCY-C_CTF_NAME-TEXT-2\"]').val($('.infoplcerti .mt_certificateName').eq(1).html());
	}
	if (KISSY.one('input[name=\"TB_REC_COMPETENCY-C_AWARDIND_DATE-DATE-2\"]')) {
	    KISSY.one('input[name=\"TB_REC_COMPETENCY-C_AWARDIND_DATE-DATE-2\"]').val($('.infoplcerti .mt_getDate').eq(1).html()+'-01');
	}
	if (KISSY.one('input[name=\"TB_REC_COMPETENCY-C_AWARDIND_INSTITUTE-TEXT-2\"]')) {
	    KISSY.one('input[name=\"TB_REC_COMPETENCY-C_AWARDIND_INSTITUTE-TEXT-2\"]').val($('.infoplcerti .mt_issuing').eq(1).html());
	}
}

if (KISSY.one('input[name=\"TB_REC_COMPETENCY-C_CTF_NAME-TEXT-3\"]')&& $('.infoplcerti .mt_certificateName').eq(2).html()) {
	if (KISSY.one('input[name=\"TB_REC_COMPETENCY-C_CTF_NAME-TEXT-3\"]')) {
	    KISSY.one('input[name=\"TB_REC_COMPETENCY-C_CTF_NAME-TEXT-3\"]').val($('.infoplcerti .mt_certificateName').eq(2).html());
	}
	if (KISSY.one('input[name=\"TB_REC_COMPETENCY-C_AWARDIND_DATE-DATE-3\"]')) {
	    KISSY.one('input[name=\"TB_REC_COMPETENCY-C_AWARDIND_DATE-DATE-3\"]').val($('.infoplcerti .mt_getDate').eq(2).html()+'-01');
	}
	if (KISSY.one('input[name=\"TB_REC_COMPETENCY-C_AWARDIND_INSTITUTE-TEXT-3\"]')) {
	    KISSY.one('input[name=\"TB_REC_COMPETENCY-C_AWARDIND_INSTITUTE-TEXT-3\"]').val($('.infoplcerti .mt_issuing').eq(2).html());
	}
}
if (KISSY.one('input[name=\"TB_REC_COMPETENCY-C_CTF_NAME-TEXT-4\"]')&& $('.infoplcerti .mt_certificateName').eq(3).html()) {
	if (KISSY.one('input[name=\"TB_REC_COMPETENCY-C_CTF_NAME-TEXT-4\"]')) {
	    KISSY.one('input[name=\"TB_REC_COMPETENCY-C_CTF_NAME-TEXT-4\"]').val($('.infoplcerti .mt_certificateName').eq(3).html());
	}
	if (KISSY.one('input[name=\"TB_REC_COMPETENCY-C_AWARDIND_DATE-DATE-4\"]')) {
	    KISSY.one('input[name=\"TB_REC_COMPETENCY-C_AWARDIND_DATE-DATE-4\"]').val($('.infoplcerti .mt_getDate').eq(3).html()+'-01');
	}
	if (KISSY.one('input[name=\"TB_REC_COMPETENCY-C_AWARDIND_INSTITUTE-TEXT-4\"]')) {
	    KISSY.one('input[name=\"TB_REC_COMPETENCY-C_AWARDIND_INSTITUTE-TEXT-4\"]').val($('.infoplcerti .mt_issuing').eq(3).html());
	}
}
//所获奖励
if (KISSY.one('input[name=\"TB_REC_REWARD-C_NAME-TEXT-1\"]')) {
    KISSY.one('input[name=\"TB_REC_REWARD-C_NAME-TEXT-1\"]').val($('.infoschaward .mt_awardsName').eq(0).html());
}
if (KISSY.one('input[name=\"TB_REC_REWARD-C_AWARDIND_DATE-DATE-1\"]')) {
    KISSY.one('input[name=\"TB_REC_REWARD-C_AWARDIND_DATE-DATE-1\"]').val($('.infoschaward .mt_awardsDate').eq(0).html()+'-01');
}
if (KISSY.one('input[name=\"TB_REC_REWARD-C_REMARK-TEXT-1\"]')) {
    KISSY.one('input[name=\"TB_REC_REWARD-C_REMARK-TEXT-1\"]').val($('.infoschaward .mt_awardsDes').eq(0).html());
}


if (KISSY.one('input[name=\"TB_REC_REWARD-C_NAME-TEXT-2\"]')&& $('.mt_awardsName').eq(1).html()) {
	if (KISSY.one('input[name=\"TB_REC_REWARD-C_NAME-TEXT-2\"]')) {
	    KISSY.one('input[name=\"TB_REC_REWARD-C_NAME-TEXT-2\"]').val($('.infoschaward .mt_awardsName').eq(1).html());
	}
	if (KISSY.one('input[name=\"TB_REC_REWARD-C_AWARDIND_DATE-DATE-2\"]')) {
	    KISSY.one('input[name=\"TB_REC_REWARD-C_AWARDIND_DATE-DATE-2\"]').val($('.infoschaward .mt_awardsDate').eq(1).html()+'-01');
	}
	if (KISSY.one('input[name=\"TB_REC_REWARD-C_REMARK-TEXT-2\"]')) {
	    KISSY.one('input[name=\"TB_REC_REWARD-C_REMARK-TEXT-2\"]').val($('.infoschaward .mt_awardsDes').eq(1).html());
	}
}

if (KISSY.one('input[name=\"TB_REC_REWARD-C_NAME-TEXT-3\"]')&& $('.mt_awardsName').eq(2).html()) {
	if (KISSY.one('input[name=\"TB_REC_REWARD-C_NAME-TEXT-3\"]')) {
	    KISSY.one('input[name=\"TB_REC_REWARD-C_NAME-TEXT-3\"]').val($('.infoschaward .mt_awardsName').eq(2).html());
	}
	if (KISSY.one('input[name=\"TB_REC_REWARD-C_AWARDIND_DATE-DATE-3\"]')) {
	    KISSY.one('input[name=\"TB_REC_REWARD-C_AWARDIND_DATE-DATE-3\"]').val($('.infoschaward .mt_awardsDate').eq(2).html()+'-01');
	}
	if (KISSY.one('input[name=\"TB_REC_REWARD-C_REMARK-TEXT-3\"]')) {
	    KISSY.one('input[name=\"TB_REC_REWARD-C_REMARK-TEXT-3\"]').val($('.infoschaward .mt_awardsDes').eq(2).html());
	}
}

if (KISSY.one('input[name=\"TB_REC_REWARD-C_NAME-TEXT-4\"]')&& $('.mt_awardsName').eq(3).html()) {
	if (KISSY.one('input[name=\"TB_REC_REWARD-C_NAME-TEXT-4\"]')) {
	    KISSY.one('input[name=\"TB_REC_REWARD-C_NAME-TEXT-4\"]').val($('.infoschaward .mt_awardsName').eq(3).html());
	}
	if (KISSY.one('input[name=\"TB_REC_REWARD-C_AWARDIND_DATE-DATE-4\"]')) {
	    KISSY.one('input[name=\"TB_REC_REWARD-C_AWARDIND_DATE-DATE-4\"]').val($('.infoschaward .mt_awardsDate').eq(3).html()+'-01');
	}
	if (KISSY.one('input[name=\"TB_REC_REWARD-C_REMARK-TEXT-4\"]')) {
	    KISSY.one('input[name=\"TB_REC_REWARD-C_REMARK-TEXT-4\"]').val($('.infoschaward .mt_awardsDes').eq(3).html());
	}
}

if (KISSY.one('input[name=\"TB_REC_REWARD-C_NAME-TEXT-4\"]')&& $('.mt_awardsName').eq(4).html()) {
	if (KISSY.one('input[name=\"TB_REC_REWARD-C_NAME-TEXT-4\"]')) {
	    KISSY.one('input[name=\"TB_REC_REWARD-C_NAME-TEXT-4\"]').val($('.infoschaward .mt_awardsName').eq(4).html());
	}
	if (KISSY.one('input[name=\"TB_REC_REWARD-C_AWARDIND_DATE-DATE-4\"]')) {
	    KISSY.one('input[name=\"TB_REC_REWARD-C_AWARDIND_DATE-DATE-4\"]').val($('.infoschaward .mt_awardsDate').eq(4).html()+'-01');
	}
	if (KISSY.one('input[name=\"TB_REC_REWARD-C_REMARK-TEXT-4\"]')) {
	    KISSY.one('input[name=\"TB_REC_REWARD-C_REMARK-TEXT-4\"]').val($('.infoschaward .mt_awardsDes').eq(4).html());
	}
}

//工作经验年
if (KISSY.one('input[name=\"TB_REC_SOCIAL_EXP-C_BEGIN_DATE-DATE-1\"]')) {
    KISSY.one('input[name=\"TB_REC_SOCIAL_EXP-C_BEGIN_DATE-DATE-1\"]').val($('.infoparttimejobs .mt_startDate').eq(0).html()+'-01');
}
if (KISSY.one('input[name=\"TB_REC_SOCIAL_EXP-C_END_DATE-DATE-1\"]')) {
    KISSY.one('input[name=\"TB_REC_SOCIAL_EXP-C_END_DATE-DATE-1\"]').val($('.infoparttimejobs .mt_endDate').eq(0).html()+'-01');
}
if (KISSY.one('input[name=\"TB_REC_SOCIAL_EXP-C_COMPANY-TEXT-1\"]')) {
    KISSY.one('input[name=\"TB_REC_SOCIAL_EXP-C_COMPANY-TEXT-1\"]').val($('.infoparttimejobs .mt_companyName').eq(0).html());
}
if (KISSY.one('input[name=\"TB_REC_SOCIAL_EXP-C_POSITION-TEXT-1\"]')) {
    KISSY.one('input[name=\"TB_REC_SOCIAL_EXP-C_POSITION-TEXT-1\"]').val($('.infoparttimejobs .mt_positionName').eq(0).html());
}
if (document.getElementById('TB_REC_FROLANGUA-C_TYPE-CONSTANT-1')&& $('.mt_companyproperty').eq(0).html()) {
	if ($('.mt_companyproperty').eq(0).html()=='外资-欧美'||$('.mt_companyproperty').eq(0).html()=='外资-非欧美'
		||$('.mt_companyproperty')=='外企代表处') {
	    document.getElementById('TB_REC_FROLANGUA-C_TYPE-CONSTANT-1').options[2].selected = true;
	}
	if ($('.mt_companyproperty').eq(0).html()=='国企') {
	    document.getElementById('TB_REC_FROLANGUA-C_TYPE-CONSTANT-1').options[1].selected = true;
	}
}
if (document.getElementById('TB_REC_SOCIAL_EXP-C_COMPANY_SCOPE-TEXT-1')&& $('.mt_companySize').eq(0).html()) {
	if ($('.mt_companySize').eq(0).html()=='少于50人') {
	    document.getElementById('TB_REC_SOCIAL_EXP-C_COMPANY_SCOPE-TEXT-1').options[1].selected = true;
	}
	if ($('.mt_companySize').eq(0).html()=='50-149人') {
	    document.getElementById('TB_REC_SOCIAL_EXP-C_COMPANY_SCOPE-TEXT-1').options[2].selected = true;
	}
	if ($('.mt_companySize').eq(0).html()=='150-499人') {
	    document.getElementById('TB_REC_SOCIAL_EXP-C_COMPANY_SCOPE-TEXT-1').options[3].selected = true;
	}
	if ($('.mt_companySize').eq(0).html()=='500-999人') {
	    document.getElementById('TB_REC_SOCIAL_EXP-C_COMPANY_SCOPE-TEXT-1').options[4].selected = true;
	}
	if ($('.mt_companySize').eq(0).html()=='1000-9999人'||$('.mt_companySize').eq(0).html()=='10000人以上') {
	    document.getElementById('TB_REC_SOCIAL_EXP-C_COMPANY_SCOPE-TEXT-1').options[5].selected = true;
	}
}
if (KISSY.one('input[name=\"TB_REC_SOCIAL_EXP-C_WORK_TYPE-TEXT-1\"]')) {
    KISSY.one('input[name=\"TB_REC_SOCIAL_EXP-C_WORK_TYPE-TEXT-1\"]').val('实习');
}
if (KISSY.one('input[name=\"TB_REC_SOCIAL_EXP-C_MAIN_RESP-TEXT-1\"]') && $('.mt_workDes .workDes').eq(0).html()) {
    KISSY.one('input[name=\"TB_REC_SOCIAL_EXP-C_MAIN_RESP-TEXT-1\"]').val($('.mt_workDes .workDes').eq(0).html());
}


if (KISSY.one('input[name=\"TB_REC_SOCIAL_EXP-C_BEGIN_DATE-DATE-2\"]')&& $('.infoparttimejobs .mt_companyName').eq(1).html()) {
	if (KISSY.one('input[name=\"TB_REC_SOCIAL_EXP-C_BEGIN_DATE-DATE-2\"]')) {
	    KISSY.one('input[name=\"TB_REC_SOCIAL_EXP-C_BEGIN_DATE-DATE-2\"]').val($('.infoparttimejobs .mt_startDate').eq(1).html()+'-01');
	}
	if (KISSY.one('input[name=\"TB_REC_SOCIAL_EXP-C_END_DATE-DATE-2\"]')) {
	    KISSY.one('input[name=\"TB_REC_SOCIAL_EXP-C_END_DATE-DATE-2\"]').val($('.infoparttimejobs .mt_endDate').eq(1).html()+'-01');
	}
	if (KISSY.one('input[name=\"TB_REC_SOCIAL_EXP-C_COMPANY-TEXT-2\"]')) {
	    KISSY.one('input[name=\"TB_REC_SOCIAL_EXP-C_COMPANY-TEXT-2\"]').val($('.infoparttimejobs .mt_companyName').eq(1).html());
	}
	if (KISSY.one('input[name=\"TB_REC_SOCIAL_EXP-C_POSITION-TEXT-2\"]')) {
	    KISSY.one('input[name=\"TB_REC_SOCIAL_EXP-C_POSITION-TEXT-2\"]').val($('.infoparttimejobs .mt_positionName').eq(1).html());
	}
	if (document.getElementById('TB_REC_FROLANGUA-C_TYPE-CONSTANT-2')&& $('.mt_companyproperty').eq(1).html()) {
		if ($('.mt_companyproperty').eq(1).html()=='外资-欧美'||$('.mt_companyproperty').eq(1).html()=='外资-非欧美'
			||$('.mt_companyproperty')=='外企代表处') {
		    document.getElementById('TB_REC_FROLANGUA-C_TYPE-CONSTANT-2').options[2].selected = true;
		}
		if ($('.mt_companyproperty').eq(1).html()=='国企') {
		    document.getElementById('TB_REC_FROLANGUA-C_TYPE-CONSTANT-2').options[1].selected = true;
		}
	}
	if (document.getElementById('TB_REC_SOCIAL_EXP-C_COMPANY_SCOPE-TEXT-2')&& $('.mt_companySize').eq(1).html()) {
		if ($('.mt_companySize').eq(1).html()=='少于50人') {
		    document.getElementById('TB_REC_SOCIAL_EXP-C_COMPANY_SCOPE-TEXT-2').options[1].selected = true;
		}
		if ($('.mt_companySize').eq(1).html()=='50-149人') {
		    document.getElementById('TB_REC_SOCIAL_EXP-C_COMPANY_SCOPE-TEXT-2').options[2].selected = true;
		}
		if ($('.mt_companySize').eq(1).html()=='150-499人') {
		    document.getElementById('TB_REC_SOCIAL_EXP-C_COMPANY_SCOPE-TEXT-2').options[3].selected = true;
		}
		if ($('.mt_companySize').eq(1).html()=='500-999人') {
		    document.getElementById('TB_REC_SOCIAL_EXP-C_COMPANY_SCOPE-TEXT-2').options[4].selected = true;
		}
		if ($('.mt_companySize').eq(1).html()=='1000-9999人'||$('.mt_companySize').eq(1).html()=='10000人以上') {
		    document.getElementById('TB_REC_SOCIAL_EXP-C_COMPANY_SCOPE-TEXT-2').options[5].selected = true;
		}
	}
	if (KISSY.one('input[name=\"TB_REC_SOCIAL_EXP-C_WORK_TYPE-TEXT-2\"]')) {
	    KISSY.one('input[name=\"TB_REC_SOCIAL_EXP-C_WORK_TYPE-TEXT-2\"]').val('实习');
	}
	if (KISSY.one('input[name=\"TB_REC_SOCIAL_EXP-C_MAIN_RESP-TEXT-2\"]')&& $('.mt_workDes .workDes').eq(1).html()) {
	    KISSY.one('input[name=\"TB_REC_SOCIAL_EXP-C_MAIN_RESP-TEXT-2\"]').val($('.mt_workDes .workDes').eq(1).html());
	}
}



if (KISSY.one('input[name=\"TB_REC_SOCIAL_EXP-C_BEGIN_DATE-DATE-3\"]')&& $('.infoparttimejobs .mt_companyName').eq(2).html()) {
	if (KISSY.one('input[name=\"TB_REC_SOCIAL_EXP-C_BEGIN_DATE-DATE-3\"]')) {
	    KISSY.one('input[name=\"TB_REC_SOCIAL_EXP-C_BEGIN_DATE-DATE-3\"]').val($('.infoparttimejobs .mt_startDate').eq(2).html()+'-01');
	}
	if (KISSY.one('input[name=\"TB_REC_SOCIAL_EXP-C_END_DATE-DATE-3\"]')) {
	    KISSY.one('input[name=\"TB_REC_SOCIAL_EXP-C_END_DATE-DATE-3\"]').val($('.infoparttimejobs .mt_endDate').eq(2).html()+'-01');
	}
	if (KISSY.one('input[name=\"TB_REC_SOCIAL_EXP-C_COMPANY-TEXT-3\"]')) {
	    KISSY.one('input[name=\"TB_REC_SOCIAL_EXP-C_COMPANY-TEXT-3\"]').val($('.infoparttimejobs .mt_companyName').eq(2).html());
	}
	if (KISSY.one('input[name=\"TB_REC_SOCIAL_EXP-C_POSITION-TEXT-3\"]')) {
	    KISSY.one('input[name=\"TB_REC_SOCIAL_EXP-C_POSITION-TEXT-3\"]').val($('.infoparttimejobs .mt_positionName').eq(2).html());
	}
	if (document.getElementById('TB_REC_FROLANGUA-C_TYPE-CONSTANT-3')&& $('.mt_companyproperty').eq(2).html()) {
		if ($('.mt_companyproperty').eq(2).html()=='外资-欧美'||$('.mt_companyproperty').eq(2).html()=='外资-非欧美'
			||$('.mt_companyproperty')=='外企代表处') {
		    document.getElementById('TB_REC_FROLANGUA-C_TYPE-CONSTANT-3').options[2].selected = true;
		}
		if ($('.mt_companyproperty').eq(2).html()=='国企') {
		    document.getElementById('TB_REC_FROLANGUA-C_TYPE-CONSTANT-3').options[1].selected = true;
		}
	}
	if (document.getElementById('TB_REC_SOCIAL_EXP-C_COMPANY_SCOPE-TEXT-3')&& $('.mt_companySize').eq(2).html()) {
		if ($('.mt_companySize').eq(2).html()=='少于50人') {
		    document.getElementById('TB_REC_SOCIAL_EXP-C_COMPANY_SCOPE-TEXT-3').options[1].selected = true;
		}
		if ($('.mt_companySize').eq(2).html()=='50-149人') {
		    document.getElementById('TB_REC_SOCIAL_EXP-C_COMPANY_SCOPE-TEXT-3').options[2].selected = true;
		}
		if ($('.mt_companySize').eq(2).html()=='150-499人') {
		    document.getElementById('TB_REC_SOCIAL_EXP-C_COMPANY_SCOPE-TEXT-3').options[3].selected = true;
		}
		if ($('.mt_companySize').eq(2).html()=='500-999人') {
		    document.getElementById('TB_REC_SOCIAL_EXP-C_COMPANY_SCOPE-TEXT-3').options[4].selected = true;
		}
		if ($('.mt_companySize').eq(2).html()=='1000-9999人'||$('.mt_companySize').eq(2).html()=='10000人以上') {
		    document.getElementById('TB_REC_SOCIAL_EXP-C_COMPANY_SCOPE-TEXT-3').options[5].selected = true;
		}
	}
	if (KISSY.one('input[name=\"TB_REC_SOCIAL_EXP-C_WORK_TYPE-TEXT-3\"]')) {
	    KISSY.one('input[name=\"TB_REC_SOCIAL_EXP-C_WORK_TYPE-TEXT-3\"]').val('实习');
	}
	if (KISSY.one('input[name=\"TB_REC_SOCIAL_EXP-C_MAIN_RESP-TEXT-3\"]')&& $('.mt_workDes .workDes').eq(2).html()) {
	    KISSY.one('input[name=\"TB_REC_SOCIAL_EXP-C_MAIN_RESP-TEXT-3\"]').val($('.mt_workDes .workDes').eq(2).html());
	}
}




//社团经历
if (KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_BEGIN_DATE-DATE-1\"]')) {
    KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_BEGIN_DATE-DATE-1\"]').val($('.infoschoolclub .mt_startDate').eq(0).html()+'-01');
}
if (KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_END_DATE-DATE-1\"]')) {
    KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_END_DATE-DATE-1\"]').val($('.infoschoolclub .mt_endDate').eq(0).html()+'-01');
}
if (KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_COMMUNITY_NAME-TEXT-1\"]')) {
    KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_COMMUNITY_NAME-TEXT-1\"]').val($('.infoschoolclub .mt_schClubName').eq(0).html());
}
if (KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_POST-TEXT-1\"]')) {
    KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_POST-TEXT-1\"]').val($('.infoschoolclub .mt_positionName').eq(0).html());
}
if (KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_WORKCONTENT_RESULT-TEXT-1\"]')) {
    KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_WORKCONTENT_RESULT-TEXT-1\"]').val($('.infoschoolclub .mt_workDes').eq(0).html());
}

if (KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_COMMUNITY_NAME-TEXT-2\"]') && $('.infoschoolclub .mt_schClubName').eq(1).html()) {
	if (KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_BEGIN_DATE-DATE-2\"]')) {
	    KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_BEGIN_DATE-DATE-2\"]').val($('.infoschoolclub .mt_startDate').eq(1).html()+'-01');
	}
	if (KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_END_DATE-DATE-2\"]')) {
	    KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_END_DATE-DATE-2\"]').val($('.infoschoolclub .mt_endDate').eq(1).html()+'-01');
	}
	if (KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_COMMUNITY_NAME-TEXT-2\"]')) {
	    KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_COMMUNITY_NAME-TEXT-2\"]').val($('.infoschoolclub .mt_schClubName').eq(1).html());
	}
	if (KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_POST-TEXT-2\"]')) {
	    KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_POST-TEXT-2\"]').val($('.infoschoolclub .mt_positionName').eq(1).html());
	}
	if (KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_WORKCONTENT_RESULT-TEXT-2\"]')) {
	    KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_WORKCONTENT_RESULT-TEXT-2\"]').val($('.infoschoolclub .mt_workDes').eq(1).html());
	}
}
if (KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_COMMUNITY_NAME-TEXT-3\"]') && $('.infoschoolclub .mt_schClubName').eq(2).html()) {
	if (KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_BEGIN_DATE-DATE-3\"]')) {
	    KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_BEGIN_DATE-DATE-3\"]').val($('.infoschoolclub .mt_startDate').eq(2).html()+'-01');
	}
	if (KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_END_DATE-DATE-3\"]')) {
	    KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_END_DATE-DATE-3\"]').val($('.infoschoolclub .mt_endDate').eq(2).html()+'-01');
	}
	if (KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_COMMUNITY_NAME-TEXT-3\"]')) {
	    KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_COMMUNITY_NAME-TEXT-3\"]').val($('.infoschoolclub .mt_schClubName').eq(2).html());
	}
	if (KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_POST-TEXT-3\"]')) {
	    KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_POST-TEXT-3\"]').val($('.infoschoolclub .mt_positionName').eq(2).html());
	}
	if (KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_WORKCONTENT_RESULT-TEXT-3\"]')) {
	    KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_WORKCONTENT_RESULT-TEXT-3\"]').val($('.infoschoolclub .mt_workDes').eq(2).html());
	}
}
if (KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_COMMUNITY_NAME-TEXT-4\"]') && $('.infoschoolclub .mt_schClubName').eq(3).html()) {
	if (KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_BEGIN_DATE-DATE-4\"]')) {
	    KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_BEGIN_DATE-DATE-4\"]').val($('.infoschoolclub .mt_startDate').eq(3).html()+'-01');
	}
	if (KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_END_DATE-DATE-4\"]')) {
	    KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_END_DATE-DATE-4\"]').val($('.infoschoolclub .mt_endDate').eq(3).html()+'-01');
	}
	if (KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_COMMUNITY_NAME-TEXT-4\"]')) {
	    KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_COMMUNITY_NAME-TEXT-4\"]').val($('.infoschoolclub .mt_schClubName').eq(3).html());
	}
	if (KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_POST-TEXT-4\"]')) {
	    KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_POST-TEXT-4\"]').val($('.infoschoolclub .mt_positionName').eq(3).html());
	}
	if (KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_WORKCONTENT_RESULT-TEXT-4\"]')) {
	    KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_WORKCONTENT_RESULT-TEXT-4\"]').val($('.infoschoolclub .mt_workDes').eq(3).html());
	}
}
if (KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_COMMUNITY_NAME-TEXT-5\"]') && $('.infoschoolclub .mt_schClubName').eq(4).html()) {
	if (KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_BEGIN_DATE-DATE-5\"]')) {
	    KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_BEGIN_DATE-DATE-5\"]').val($('.infoschoolclub .mt_startDate').eq(4).html()+'-01');
	}
	if (KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_END_DATE-DATE-5\"]')) {
	    KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_END_DATE-DATE-5\"]').val($('.infoschoolclub .mt_endDate').eq(4).html()+'-01');
	}
	if (KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_COMMUNITY_NAME-TEXT-5\"]')) {
	    KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_COMMUNITY_NAME-TEXT-5\"]').val($('.infoschoolclub .mt_schClubName').eq(4).html());
	}
	if (KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_POST-TEXT-5\"]')) {
	    KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_POST-TEXT-5\"]').val($('.infoschoolclub .mt_positionName').eq(4).html());
	}
	if (KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_WORKCONTENT_RESULT-TEXT-5\"]')) {
	    KISSY.one('input[name=\"TB_REC_COMMUNITY_EXP-C_WORKCONTENT_RESULT-TEXT-5\"]').val($('.infoschoolclub .mt_workDes').eq(4).html());
	}
}
//家庭成员
if (KISSY.one('input[name=\"TB_REC_FAMILY-C_MEMBER_NAME-TEXT-1\"]')&& KISSY.one('#mt_fmname').html()) {
    KISSY.one('input[name=\"TB_REC_FAMILY-C_MEMBER_NAME-TEXT-1\"]').val(KISSY.one('#mt_fmname').html());
}
if (KISSY.one('input[name=\"TB_REC_FAMILY-C_RELATION-TEXT-1\"]')&& KISSY.one('#mt_fmrelation').html()) {
    KISSY.one('input[name=\"TB_REC_FAMILY-C_RELATION-TEXT-1\"]').val(KISSY.one('#mt_fmrelation').html());
}
if (KISSY.one('input[name=\"TB_REC_FAMILY-C_WORK_PLACE-TEXT-1\"]')&& KISSY.one('#mt_fmwork').html()) {
    KISSY.one('input[name=\"TB_REC_FAMILY-C_WORK_PLACE-TEXT-1\"]').val(KISSY.one('#mt_fmwork').html());
}
if (KISSY.one('input[name=\"TB_REC_FAMILY-C_POSITION-TEXT-1\"]')&& KISSY.one('#mt_fmposition').html()) {
    KISSY.one('input[name=\"TB_REC_FAMILY-C_POSITION-TEXT-1\"]').val(KISSY.one('#mt_fmposition').html());
}
if (KISSY.one('input[name=\"TB_REC_FAMILY-C_CONTACT-TEXT-1\"]')&& KISSY.one('#mt_fmphone').html()) {
    KISSY.one('input[name=\"TB_REC_FAMILY-C_CONTACT-TEXT-1\"]').val(KISSY.one('#mt_fmphone').html());
}