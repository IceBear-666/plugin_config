if (KISSY.one('input[name=\"name\"]')) {
    KISSY.one('input[name=\"name\"]').val(KISSY.one('#mt_name').html())
}
if (KISSY.one('input[name=\"height\"]')) {
    KISSY.one('input[name=\"height\"]').val(KISSY.one('#mt_height').html())
}
if (KISSY.one('input[name=\"sex\"]').html() && KISSY.one('#mt_sex').html() == '男') {
    document.getElementById('sex0').click()
}
if (KISSY.one('input[name=\"sex\"]').html() && KISSY.one('#mt_sex').html() == '女') {
    document.getElementById('sex1').click()
}
if (KISSY.one('#birthdayString') && KISSY.one('#mt_birthdaydot').html()) {
    KISSY.one('#birthdayString').val(KISSY.one('#mt_birthdaydot').html())
}
if (KISSY.one('input[name=\"mobile\"]')) {
    KISSY.one('input[name=\"mobile\"]').val(KISSY.one('#mt_tel').html())
}
if (KISSY.one('input[name=\"idNo\"]') && KISSY.one('#mt_id').html()) {
    KISSY.one('input[name=\"idNo\"]').val(KISSY.one('#mt_id').html())
}
if (KISSY.one('input[name=\"email\"]')) {
    KISSY.one('input[name=\"email\"]').val(KISSY.one('#mt_email').html())
}
if (KISSY.one('input[name=\"emergencyContactPerson\"]') && KISSY.one('#mt_jjlxr').html()) {
    KISSY.one('input[name=\"emergencyContactPerson\"]').val(KISSY.one('#mt_jjlxr').html())
}
if (KISSY.one('input[name=\"emergencyContract\"]') && KISSY.one('#mt_jjlxrtel').html()) {
    KISSY.one('input[name=\"emergencyContract\"]').val(KISSY.one('#mt_jjlxrtel').html())
}
if (KISSY.one('input[name=\"weight\"]') && KISSY.one('#mt_weight').html()) {
    KISSY.one('input[name=\"weight\"]').val(KISSY.one('#mt_weight').html())
}
if (KISSY.one('#maritalStatus0') && KISSY.one('#mt_maritalstatus').html() && KISSY.one('#mt_maritalstatus').html() == '未婚') {
    document.getElementById('maritalStatus0').click()
}
if (KISSY.one('#maritalStatus1') && KISSY.one('#mt_maritalstatus').html() && KISSY.one('#mt_maritalstatus').html() == '已婚') {
    document.getElementById('maritalStatus1').click()
}
if (KISSY.one('#maritalStatus2') && KISSY.one('#mt_maritalstatus').html() && KISSY.one('#mt_maritalstatus').html() == '离婚') {
    document.getElementById('maritalStatus2').click()
}
if (KISSY.one('select[name=\"politicsStatus\"]') && KISSY.one('#mt_polistatus').html()) {
    KISSY.one('select[name=\"politicsStatus\"]').val(KISSY.one('#mt_polistatus').html())
}
if (KISSY.one('input[name=\"country\"]') && KISSY.one('#mt_national').html()) {
    KISSY.one('input[name=\"country\"]').val(KISSY.one('#mt_national').html())
}
if (KISSY.one('select[name=\"nationality\"]') && KISSY.one('#mt_nation').html()) {
    var nationality = document.getElementById('nationality');
    var mt_nation = KISSY.one('#mt_nation').html();
    for (var i = 0; i < nationality.options.length; i++) {
        if (nationality.options[i].innerHTML == mt_nation) {
            nationality.options[i].selected = true;
            break
        }
    }
}
if (KISSY.one('select[name=\"politicsStatus\"]') && KISSY.one('#mt_polistatus').html() && KISSY.one('#mt_polistatus').html() == '中共党员') {
    document.getElementById('politicsStatus').options[0].selected = true
}
if (KISSY.one('select[name=\"politicsStatus\"]') && KISSY.one('#mt_polistatus').html() && KISSY.one('#mt_polistatus').html() == '中共预备党员') {
    document.getElementById('politicsStatus').options[1].selected = true
}
if (KISSY.one('select[name=\"politicsStatus\"]') && KISSY.one('#mt_polistatus').html() && KISSY.one('#mt_polistatus').html() == '共青团员') {
    document.getElementById('politicsStatus').options[2].selected = true
}
if (KISSY.one('select[name=\"politicsStatus\"]') && KISSY.one('#mt_polistatus').html() && KISSY.one('#mt_polistatus').html() == '无党派民主人士') {
    document.getElementById('politicsStatus').options[3].selected = true
}
if (KISSY.one('select[name=\"politicsStatus\"]') && KISSY.one('#mt_polistatus').html() && KISSY.one('#mt_polistatus').html() == '群众') {
    document.getElementById('politicsStatus').options[4].selected = true
}
if (KISSY.one('textarea[name=\"selfEvaluation\"]') && KISSY.one('#mt_selfIntro').html()) {
    KISSY.one('textarea[name=\"selfEvaluation\"]').val(KISSY.one('#mt_selfIntro').html())
}
if ($('select[name=\"city\"]') && $('#mt_livecity_city').html()) {
    var city = document.getElementById('city');
    var mt_livecity_city = $('#mt_livecity_city').html();
    var mt_livecity_provice = $('#mt_livecity_pro').html();
    if (city.options.length == 50) {
        for (var i = 0; i < city.options.length; i++) {
            thiscity = $.trim(city.options[i].innerHTML);
            if (thiscity == mt_livecity_city) {
                city.options[i].selected = true;
                break;
            } else if (thiscity == mt_livecity_provice) {
                city.options[i].selected = true;
                break;
            } else if (mt_livecity_provice == '澳门' || mt_livecity_provice=='香港' || mt_livecity_provice=='台湾'){
                city.options[45].selected=true;break
            } else if (mt_livecity_provice == '不限' ){
            city.options[47].selected=true;break}
            }
    }else{
        for(var i=0;i<city.options.length;i++){
            thiscity=$.trim(city.options[i].innerHTML);
            if(thiscity==mt_livecity_city){
                city.options[i].selected=true;break;
            }
            else if(thiscity==mt_livecity_provice){
                city.options[i].selected=true;break;
            }
            else if(mt_livecity_provice=='澳门'||mt_livecity_provice=='香港'||mt_livecity_provice=='台湾'){
                city.options[44].selected=true;break;
            }
            else if(mt_livecity_provice == '不限' ){
                city.options[46].selected=true;break;
            }
        }
    }
}
if($('#englishLevel')  && $('#skill-list').find('.mt_skillEngLevel')){
	switch($('#skill-list').find('.mt_skillEngLevel').html()){
		case '大学英语四级': $('#englishLevel')[0].options[1].selected = true;break;
		case '大学英语六级': $('#englishLevel')[0].options[2].selected = true;break;
		case '专业四级': $('#englishLevel')[0].options[3].selected = true;break;
		case '专业八级': $('#englishLevel')[0].options[4].selected = true;break;
		default: $('#englishLevel')[0].options[0].selected = true;break;
	}
	$('#englishScore').val($('#skill-list').find('.mt_skillEngSorce').html());
	
	if($('#schoolOrInterviewLocus') && $('#mt_expectcity').html()){
		$('#schoolOrInterviewLocus').val($('#mt_expectcity').html());
	}
	if($('#schoolOrInterviewCity') && $('#mt_expectcity_city').html()){
		$('#schoolOrInterviewCity').val($('#mt_expectcity_city').html());
	}
	$('#schoolOrInterviewLocus').val('广东');
	$('#schoolOrInterviewCity').val('深圳');
}

//教育背景
if($('#J-edu-part')){
	let length = $('#edu-list').find('.mt_schoolName').length;
	let hadSave = $('#J-edu-part').find('.resume-exp-table tr').length;
	let i = length - hadSave;
	if($('#startDateString') && $('#edu-list').find('.mt_startYear').eq(i).html()){
		$('#startDateString').val($('#edu-list').find('.mt_startYear').eq(i).html());
	}
	if($('#endDateString') && $('#edu-list').find('.mt_endYear').eq(i).html()){
		$('#endDateString').val($('#edu-list').find('.mt_endYear').eq(i).html());
	}
	if($('#schoolName') && $('#edu-list').find('.mt_schoolName').eq(i).html()){
		$('#schoolName').val($('#edu-list').find('.mt_schoolName').eq(i).html());
	}
	if($('#professionName') && $('#edu-list').find('.mt_professional').eq(i).html()){
		$('#professionName').val($('#edu-list').find('.mt_professional').eq(i).html());
	}
	if($('#educationBackground') && $('#edu-list').find('.mt_education').eq(i).html()){
		studly_level = $('#educationBackground')[0];
		switch($('#edu-list').find('.mt_education').eq(i).html()){
			 case '大学专科':
                studly_level.options[0].selected = true;
                break;
            case '海外本科':
            case '大学本科-一本':
            case '大学本科-二本':
            case '大学本科-三本':
                studly_level.options[1].selected = true;
                break;
            case 'MBA':
            	studly_level.options[4].selected = true;
                break;
            case 'MPA':
            case '硕士研究生':
                studly_level.options[2].selected = true;
                break;
            case '博士研究生':
                studly_level.options[3].selected = true;
                break
		}
	}
	if(hadSave == 1){
		$('#isHighestEducation0').prop('checked', true);
		$('#isHighestEducation0').prop('checked', false);
	}else{
		$('#isHighestEducation0').prop('checked', false);
		$('#isHighestEducation0').prop('checked', true);
	}
	if($('#educationRank') && $('#edu-list').find('.mt_professionalranking').eq(i).html()){
		let educationRank = $('#educationRank')[0];
		switch($('#edu-list').find('.mt_professionalranking').eq(i).html()){
			case '前5%': educationRank.options[0].selected=true;break;
			case '前10%': educationRank.options[1].selected=true;break;
			case '前20%': educationRank.options[2].selected=true;break;
			case '前30%':
			case '前40%':
			case '前50%': 
				educationRank.options[3].selected=true;break;
			case '前60%':
			case '前70%':
			case '前80%':
				educationRank.options[4].selected=true;break;
		}
	}
	if($('#certifier') && $('#edu-list').find('.mt_tutorname').eq(i).html()){
		$('#certifier').val($('#edu-list').find('.mt_tutorname').eq(i).html());
	}
	if($('#certifierContactInfo') && $('#edu-list').find('.mt_tutorphone').eq(i).html()){
		$('#certifierContactInfo').val($('#edu-list').find('.mt_tutorphone').eq(i).html());
	}
	
}
for (var i = 0; i < $('.infoplcerti').length; i++) {
    if (KISSY.one('input[name=\"certificateTitle\"]') && $('.infoplcerti .mt_certificateName').eq(i).html()) {
        KISSY.one('input[name=\"certificateTitle\"]').val($('.infoplcerti .mt_certificateName').eq(i).html())
    }
    if (KISSY.one('input[name=\"acquisitionTimeString\"]') && $('.infoplcerti .mt_getDateDot').eq(i).html()) {
        KISSY.one('input[name=\"acquisitionTimeString\"]').val($('.infoplcerti .mt_getDateDot').eq(i).html())
    }
    if (KISSY.one('textarea[name=\"certificateDesc\"]') && $('.infoplcerti .mt_certificateDes').eq(i).html()) {
        KISSY.one('textarea[name=\"certificateDesc\"]').val($('.infoplcerti .mt_certificateDes').eq(i).html())
    }
}
for (var i = 0; i < $('.infoschoolclub').length; i++) {
    if (KISSY.one('input[name=\"rewardRecords[' + i + '].dutyDescription\"]') && $('.infoschoolclub .mt_schClubName').eq(i).html()) {
        KISSY.one('input[name=\"rewardRecords[' + i + '].dutyDescription\"]').val($('.infoschoolclub .mt_schClubName').eq(i).html())
    }
    if (KISSY.one('select[name=\"rewardRecords[' + i + '].studentUnion\"]') && $('.infoschoolclub .mt_positionName').eq(i).html()) {
        var schoolpo = document.getElementById('rewardRecords[' + i + '].studentUnion');
        var mt_positionName = $('.infoschoolclub .mt_positionName').eq(i).html();
        for (var j = 0; j < schoolpo.options.length; j++) {
            if (schoolpo.options[j].innerHTML == mt_positionName) {
                schoolpo.options[j].selected = true;
                break
            }
        }
    }
}
for (var i = 0; i < $('.infoschaward').length; i++) {
    var mt_awardsName = $('.mt_awardsName').eq(i).html();
    if (mt_awardsName.indexOf(mt_awardsName) >= 0) {
        if (KISSY.one('input[name=\"acquisitionTimeString\"]') && $('.mt_awardsDatedot').eq(i).html()) {
            KISSY.one('#acquisitionTimeString').val($('.mt_awardsDatedot').eq(i).html())
        }
        if (KISSY.one('input[name=\"level\"]') && $('.mt_awardsName').eq(i).html()) {
            KISSY.one('input[name=\"level\"]').val($('.mt_awardsName').eq(i).html())
        }
        if (KISSY.one('select[name=\"source\"]') && $('.mt_awardsType').eq(i).html() && $('.mt_awardsType').eq(i).html() == '院系级') {
            document.getElementById('source').options[2].selected = true
        }
        if (KISSY.one('select[name=\"source\"]') && $('.mt_awardsType').eq(i).html() && $('.mt_awardsType').eq(i).html() == '学校级') {
            document.getElementById('source').options[3].selected = true
        }
        if (KISSY.one('select[name=\"source\"]') && $('.mt_awardsType').eq(i).html() && $('.mt_awardsType').eq(i).html() == '省市级') {
            document.getElementById('source').options[4].selected = true
        }
        if (KISSY.one('select[name=\"source\"]') && $('.mt_awardsType').eq(i).html() && $('.mt_awardsType').eq(i).html() == '国家级') {
            document.getElementById('source').options[5].selected = true
        }
        if (KISSY.one('select[name=\"source\"]') && $('.mt_awardsType').eq(i).html() && $('.mt_awardsType').eq(i).html() == '国际级') {
            document.getElementById('source').options[6].selected = true
        }
    }
}
for (var i = 0; i < $('.infoparttimejobs').length; i++) {
    if (KISSY.one('#workstartDateString') && $('#exp-list .infoparttimejobs .mt_startDatedot').eq(i).html()) {
        KISSY.one('#workstartDateString').val($('#exp-list .infoparttimejobs .mt_startDatedot').eq(i).html())
    }
    if (KISSY.one('#workendDateString') && $('#exp-list .infoparttimejobs .mt_endDatedot').eq(i).html()) {
        KISSY.one('#workendDateString').val($('#exp-list .infoparttimejobs .mt_endDatedot').eq(i).html())
    }
    if (KISSY.one('#workcompanyName') && $('#exp-list .infoparttimejobs .mt_companyName').eq(i).html()) {
        KISSY.one('#workcompanyName').val($('#exp-list .infoparttimejobs .mt_companyName').eq(i).html())
    }
    if (KISSY.one('#workdepartment') && $('#exp-list .infoparttimejobs .mt_department').eq(i).html()) {
        KISSY.one('#workdepartment').val($('#exp-list .infoparttimejobs .mt_department').eq(i).html())
    }
    if (KISSY.one('#workjobTitle') && $('#exp-list .infoparttimejobs .mt_positionName').eq(i).html()) {
        KISSY.one('#workjobTitle').val($('#exp-list .infoparttimejobs .mt_positionName').eq(i).html())
    }
    if (KISSY.one('#workjobDescription') && $('#exp-list .infoparttimejobs .mt_workContent .workContent').eq(i).html()) {
        KISSY.one('#workjobDescription').val($('#exp-list .infoparttimejobs .mt_workContent .workContent').eq(i).html())
    }
    if (KISSY.one('#workcompanyScale') && $('#exp-list .infoparttimejobs .mt_companySize').eq(i).html() && $('#exp-list .infofulltimejobs .mt_companySize').eq(i).html() == '少于50人') {
        document.getElementById('workcompanyScale').options[1].selected = true
    }
    if (KISSY.one('#workcompanyScale') && $('#exp-list .infoparttimejobs .mt_companySize').eq(i).html() && $('#exp-list .infofulltimejobs .mt_companySize').eq(i).html() == '500-999人' || $('#exp-list .infofulltimejobs .mt_companySize').eq(i).html() == '50-149人' || $('#exp-list .infofulltimejobs .mt_companySize').eq(i).html() == '150-499人') {
        document.getElementById('workcompanyScale').options[2].selected = true
    }
    if (KISSY.one('#workcompanyScale') && $('#exp-list .infoparttimejobs .mt_companySize').eq(i).html() && $('#exp-list .infofulltimejobs .mt_companySize').eq(i).html() == '1000-9999人') {
        document.getElementById('workcompanyScale').options[3].selected = true
    }
    if (KISSY.one('#workcompanyScale') && $('#exp-list .infoparttimejobs .mt_companySize').eq(i).html() && $('#exp-list .infofulltimejobs .mt_companySize').eq(i).html() == '10000人以上') {
        document.getElementById('workcompanyScale').options[4].selected = true
    }
    if (KISSY.one('#workcompanyNature') && $('#exp-list .infoparttimejobs .mt_companyproperty').eq(i).html() && $('#exp-list .infofulltimejobs .mt_companyproperty').eq(i).html() == '外资-欧美' || $('#exp-list .infofulltimejobs .mt_companyproperty').eq(i).html() == '外资-非欧美' || $('#exp-list .infofulltimejobs .mt_companyproperty').eq(i).html() == '合资-欧美' || $('#exp-list .infofulltimejobs .mt_companyproperty').eq(i).html() == '合资-非欧美') {
        document.getElementById('workcompanyNature').options[1].selected = true
    }
    if (KISSY.one('#workcompanyNature') && $('#exp-list .infoparttimejobs .mt_companyproperty').eq(i).html() && $('#exp-list .infofulltimejobs .mt_companyproperty').eq(i).html() == '民营公司' || $('#exp-list .infofulltimejobs .mt_companyproperty').eq(i).html() == '创业公司' || $('#exp-list .infofulltimejobs .mt_companyproperty').eq(i).html() == '上市公司') {
        document.getElementById('workcompanyNature').options[2].selected = true
    }
    if (KISSY.one('#workcompanyNature') && $('#exp-list .infoparttimejobs .mt_companyproperty').eq(i).html() && $('#exp-list .infofulltimejobs .mt_companyproperty').eq(i).html() == '国企') {
        document.getElementById('workcompanyNature').options[3].selected = true
    }
    if (KISSY.one('#workcompanyNature') && $('#exp-list .infoparttimejobs .mt_companyproperty').eq(i).html() && $('#exp-list .infofulltimejobs .mt_companyproperty').eq(i).html() == '非盈利机构' || $('#exp-list .infofulltimejobs .mt_companyproperty').eq(i).html() == '事业单位') {
        document.getElementById('workcompanyNature').options[4].selected = true
    }
    if (KISSY.one('#workcompanyNature') && $('#exp-list .infoparttimejobs .mt_companyproperty').eq(i).html() && $('#exp-list .infofulltimejobs .mt_companyproperty').eq(i).html() == '外企代表处' || $('#exp-list .infofulltimejobs .mt_companyproperty').eq(i).html() && $('#exp-list .infofulltimejobs .mt_companyproperty').eq(i).html() == '政府机关') {
        document.getElementById('workcompanyNature').options[5].selected = true
    }
    if (KISSY.one('#workcompanyIndustry') && $('#exp-list .infoparttimejobs .mt_companyCat').eq(i).html()) {
        switch ($('#exp-list .infofulltimejobs .mt_companyCat').eq(i).html()) {
        case '互联网/游戏/软件':
            document.getElementById('workcompanyIndustry').options[1].selected = true;
            break;
        case '金融':
            document.getElementById('workcompanyIndustry').options[2].selected = true;
            break;
        case '广告/媒体/教育/文化':
            document.getElementById('workcompanyIndustry').options[4].selected = true;
            document.getElementById('workcompanyIndustry').options[6].selected = true;
            break;
        case '消费品':
            document.getElementById('workcompanyIndustry').options[5].selected = true;
            break;
        case '房地产/建筑/物业':
            document.getElementById('workcompanyIndustry').options[7].selected = true;
            break;
        case '交通/贸易/物流':
            document.getElementById('workcompanyIndustry').options[8].selected = true;
            break;
        case '汽车/机械/制造':
            document.getElementById('workcompanyIndustry').options[9].selected = true;
            break;
        case '制药/医疗':
            document.getElementById('workcompanyIndustry').options[10].selected = true;
            break;
        case '服务/外包/中介':
            document.getElementById('workcompanyIndustry').options[11].selected = true;
            break;
        default:
            document.getElementById('workcompanyIndustry').options[12].selected = true;
            break
        }
    }
    if (KISSY.one('#internshipCertifier') && $('#exp-list .infoparttimejobs .mt_reterenceName').eq(i).html()) {
        KISSY.one('#internshipCertifier').val($('#exp-list .infoparttimejobs .mt_reterenceName').eq(i).html())
    }
    if (KISSY.one('#internshipCertifierContactInfo') && $('#exp-list .infoparttimejobs .mt_reterence_phone').eq(i).html()) {
        KISSY.one('#internshipCertifierContactInfo').val($('#exp-list .infoparttimejobs .mt_reterence_phone').eq(i).html())
    }
}
if($('J-exp-part')){
	let length = $('#exp-list').find('.mt_companyName').length;
	let hadSave = $('#J-exp-part').find('.resume-exp-table tr').length;
	let i = length - hadSave;
    if (KISSY.one('#internshipstartDateString') && $('#exp-list .infoparttimejobs .mt_startDatedot').eq(i).html()) {
        KISSY.one('#internshipstartDateString').val($('#exp-list .infoparttimejobs .mt_startDatedot').eq(i).html())
    }
    if (KISSY.one('#internshipendDateString') && $('#exp-list .infoparttimejobs .mt_endDatedot').eq(i).html()) {
        KISSY.one('#internshipendDateString').val($('#exp-list .infoparttimejobs .mt_endDatedot').eq(i).html())
    }
    if (KISSY.one('#companyName') && $('#exp-list .infoparttimejobs .mt_companyName').eq(i).html()) {
        KISSY.one('#companyName').val($('#exp-list .infoparttimejobs .mt_companyName').eq(i).html())
    }
    if (KISSY.one('#department') && $('#exp-list .infoparttimejobs .mt_department').eq(i).html()) {
        KISSY.one('#department').val($('#exp-list .infoparttimejobs .mt_department').eq(i).html())
    }
    if (KISSY.one('#jobTitle') && $('#exp-list .infoparttimejobs .mt_positionName').eq(i).html()) {
        KISSY.one('#jobTitle').val($('#exp-list .infoparttimejobs .mt_positionName').eq(i).html())
    }
    if (KISSY.one('#jobDescription') && $('#exp-list .infoparttimejobs .mt_department').eq(i).html()) {
        KISSY.one('#jobDescription').val($('#exp-list .infoparttimejobs .mt_workContent .workContent').eq(i).html())
    }
    if (KISSY.one('#companyScale') && $('#exp-list .infoparttimejobs .mt_companySize').eq(i).html() && $('#exp-list .infoparttimejobs .mt_companySize').eq(i).html() == '少于50人') {
        document.getElementById('companyScale').options[1].selected = true
    }
    if (KISSY.one('#companyScale') && $('#exp-list .infoparttimejobs .mt_companySize').eq(i).html() && $('#exp-list .infoparttimejobs .mt_companySize').eq(i).html() == '1000-9999人') {
        document.getElementById('companyScale').options[3].selected = true
    }
    if (KISSY.one('#companyScale') && $('#exp-list .infoparttimejobs .mt_companySize').eq(i).html() && $('#exp-list .infoparttimejobs .mt_companySize').eq(i).html() == '10000人以上') {
        document.getElementById('companyScale').options[4].selected = true
    }
    if (KISSY.one('#companyNature') && $('#exp-list .infoparttimejobs .mt_companyproperty').eq(i).html() && $('#exp-list .infoparttimejobs .mt_companyproperty').eq(i).html() == '外资-欧美' || $('#exp-list .infoparttimejobs .mt_companyproperty').eq(i).html() == '外资-非欧美' || $('#exp-list .infoparttimejobs .mt_companyproperty').eq(i).html() == '合资-欧美' || $('#exp-list .infoparttimejobs .mt_companyproperty').eq(i).html() == '合资-非欧美') {
        document.getElementById('companyNature').options[1].selected = true
    }
    if (KISSY.one('#companyNature') && $('#exp-list .infoparttimejobs .mt_companyproperty').eq(i).html() && $('#exp-list .infoparttimejobs .mt_companyproperty').eq(i).html() == '民营公司' || $('#exp-list .infoparttimejobs .mt_companyproperty').eq(i).html() == '创业公司' || $('#exp-list .infoparttimejobs .mt_companyproperty').eq(i).html() == '上市公司') {
        document.getElementById('companyNature').options[2].selected = true
    }
    if (KISSY.one('#companyNature') && $('#exp-list .infoparttimejobs .mt_companyproperty').eq(i).html() && $('#exp-list .infoparttimejobs .mt_companyproperty').eq(i).html() == '国企') {
        document.getElementById('companyNature').options[3].selected = true
    }
    if (KISSY.one('#companyNature') && $('#exp-list .infoparttimejobs .mt_companyproperty').eq(i).html() && $('#exp-list .infoparttimejobs .mt_companyproperty').eq(i).html() == '非盈利机构' || $('#exp-list .infoparttimejobs .mt_companyproperty').eq(i).html() == '事业单位') {
        document.getElementById('companyNature').options[4].selected = true
    }
    if (KISSY.one('#companyNature') && $('#exp-list .infoparttimejobs .mt_companyproperty').eq(i).html() && $('#exp-list .infoparttimejobs .mt_companyproperty').eq(i).html() == '外企代表处' || $('#exp-list .infoparttimejobs .mt_companyproperty').eq(i).html() && $('#exp-list .infoparttimejobs .mt_companyproperty').eq(i).html() == '政府机关') {
        document.getElementById('companyNature').options[5].selected = true
    }
    if (KISSY.one('#internshipCertifier') && $('#exp-list .infoparttimejobs .mt_reterenceName').eq(i).html()) {
        KISSY.one('#internshipCertifier').val($('#exp-list .infoparttimejobs .mt_reterenceName').eq(i).html())
    }
    if (KISSY.one('#internshipCertifierContactInfo') && $('#exp-list .infoparttimejobs .mt_reterence_phone').eq(i).html()) {
        KISSY.one('#internshipCertifierContactInfo').val($('#exp-list .infoparttimejobs .mt_reterence_phone').eq(i).html())
    }
}
for (var i = 0; i < $('.infoproject').length; i++) {
    if (KISSY.one('#projectStartDateString') && $('.infoproject .mt_proStartDateDot').eq(i).html()) {
        KISSY.one('#projectStartDateString').val($('.infoproject .mt_proStartDateDot').eq(i).html())
    }
    if (KISSY.one('#projectEndDateString') && $('.infoproject .mt_proEndDateDot').eq(i).html()) {
        KISSY.one('#projectEndDateString').val($('.infoproject .mt_proEndDateDot').eq(i).html())
    }
    if (KISSY.one('#jobName') && $('.infoproject .mt_positionName').eq(i).html()) {
        KISSY.one('#jobName').val($('.infoproject .mt_positionName').eq(i).html())
    }
    if (KISSY.one('#projectName') && $('.infoproject .mt_projectName').eq(i).html()) {
        KISSY.one('#projectName').val($('.infoproject .mt_projectName').eq(i).html())
    }
    if (KISSY.one('#projectDescription') && $('.infoproject .mt_projectRemark').eq(i).html()) {
        KISSY.one('#projectDescription').val($('.infoproject .mt_projectRemark').eq(i).html())
    }
    if (KISSY.one('#proCertifier') && $('.infoproject .mt_reterenceName').eq(i).html()) {
        KISSY.one('#proCertifier').val($('.infoproject .mt_reterenceName').eq(i).html())
    }
    if (KISSY.one('#proCertifierContactInfo') && $('.infoproject .mt_reterencePhone').eq(i).html()) {
        KISSY.one('#proCertifierContactInfo').val($('.infoproject .mt_reterencePhone').eq(i).html())
    }
}
for (var i = 0; i < $('.infoEnglishSkill').length; i++) {
    if (KISSY.one('#englishLevel') && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() == '大学英语四级') {
        document.getElementById('englishLevel').options[1].selected = true
    }
    if (KISSY.one('#englishLevel') && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() == '大学英语六级') {
        document.getElementById('englishLevel').options[2].selected = true
    }
    if (KISSY.one('#englishLevel') && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() == '专业四级') {
        document.getElementById('englishLevel').options[3].selected = true
    }
    if (KISSY.one('#englishLevel') && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() == '专业八级') {
        document.getElementById('englishLevel').options[4].selected = true
    }
    if (KISSY.one('#englishScore') && $('.infoEnglishSkill .mt_skillEngSorce').eq(i).html()) {
        KISSY.one('#englishScore').val($('.infoEnglishSkill .mt_skillEngSorce').eq(i).html())
    }
}
for (var i = 0; i < $('.infoOtEnglishSkill').length; i++) {
    if (KISSY.one('#toefl') && $('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html() && $('.infoOtEnglishSkill .mt_otherSkillEngSorce').eq(i).html() && $('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html() == '托福') {
        KISSY.one('#toefl').val($('.infoOtEnglishSkill .mt_otherSkillEngSorce').eq(i).html())
    }
    if (KISSY.one('#gre') && $('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html() && $('.infoOtEnglishSkill .mt_otherSkillEngSorce').eq(i).html() && $('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html() == 'GRE') {
        KISSY.one('#gre').val($('.infoOtEnglishSkill .mt_otherSkillEngSorce').eq(i).html())
    }
    if (KISSY.one('#gmat') && $('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html() && $('.infoOtEnglishSkill .mt_otherSkillEngSorce').eq(i).html() && $('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html() == 'GMAT') {
        KISSY.one('#gmat').val($('.infoOtEnglishSkill .mt_otherSkillEngSorce').eq(i).html())
    }
    if (KISSY.one('#ielts') && $('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html() && $('.infoOtEnglishSkill .mt_otherSkillEngSorce').eq(i).html() && $('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html() == '雅思') {
        KISSY.one('#ielts').val($('.infoOtEnglishSkill .mt_otherSkillEngSorce').eq(i).html())
    }
    if (KISSY.one('#toeic') && $('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html() && $('.infoOtEnglishSkill .mt_otherSkillEngSorce').eq(i).html() && $('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html() == '托业') {
        KISSY.one('#toeic').val($('.infoOtEnglishSkill .mt_otherSkillEngSorce').eq(i).html())
    }
}
for (var i = 0; i < $('.infoOtherSkill').length; i++) {
    if (KISSY.one('select[name=\"foreignLanguage\"]') && $('.infoOtherSkill .mt_skillOtherLang').eq(i).html()) {
        var otherlang = document.getElementById('foreignLanguage');
        var skillOtherLang = $('.infoOtherSkill .mt_skillOtherLang').eq(i).html();
        var literacy = document.getElementById('literacy');
        var mt_skillWriteLevel = $('.infoOtherSkill .mt_skillWriteLevel').eq(i).html();
        var listeningSpeakingAbility = document.getElementById('listeningSpeakingAbility');
        var mt_skillListenLevel = $('.infoOtherSkill .mt_skillListenLevel').eq(i).html();
        for (var j = 0; j < otherlang.options.length; j++) {
            if (otherlang.options[j].innerHTML == skillOtherLang) {
                otherlang.options[j].selected = true;
                if (KISSY.one('#literacy') && $('.infoOtherSkill .mt_skillWriteLevel').eq(i).html() && $('.infoOtherSkill .mt_skillWriteLevel').eq(i).html() == '精通') {
                    document.getElementById('literacy').options[1].selected = true
                }
                if (KISSY.one('#literacy') && $('.infoOtherSkill .mt_skillWriteLevel').eq(i).html() && $('.infoOtherSkill .mt_skillWriteLevel').eq(i).html() == '熟练') {
                    document.getElementById('literacy').options[2].selected = true
                }
                if (KISSY.one('#literacy') && $('.infoOtherSkill .mt_skillWriteLevel').eq(i).html() && $('.infoOtherSkill .mt_skillWriteLevel').eq(i).html() == '一般' || $('.infoOtherSkill .mt_skillWriteLevel').eq(i).html() == '了解') {
                    document.getElementById('literacy').options[3].selected = true
                }
                if (KISSY.one('#listeningSpeakingAbility') && $('.infoOtherSkill .mt_skillListenLevel').eq(i).html() && $('.infoOtherSkill .mt_skillListenLevel').eq(i).html() == '精通') {
                    document.getElementById('listeningSpeakingAbility').options[1].selected = true
                }
                if (KISSY.one('#listeningSpeakingAbility') && $('.infoOtherSkill .mt_skillListenLevel').eq(i).html() && $('.infoOtherSkill .mt_skillListenLevel').eq(i).html() == '熟练') {
                    document.getElementById('listeningSpeakingAbility').options[2].selected = true
                }
                if (KISSY.one('#listeningSpeakingAbility') && $('.infoOtherSkill .mt_skillListenLevel').eq(i).html() && $('.infoOtherSkill .mt_skillListenLevel').eq(i).html() == '一般' || $('.infoOtherSkill .mt_skillWriteLevel').eq(i).html() == '了解') {
                    document.getElementById('listeningSpeakingAbility').options[3].selected = true
                }
                break
            }
        }
    }
}
if (KISSY.one('#familyMemberName') && $('#base-list #mt_fmname').html()) {
    KISSY.one('#familyMemberName').val($('#base-list #mt_fmname').html())
}
if (KISSY.one('#relation') && $('#base-list #mt_fmrelation').html()) {
    KISSY.one('#relation').val($('#base-list #mt_fmrelation').html())
}
if (KISSY.one('#unit') && $('#base-list #mt_fmwork').html()) {
    KISSY.one('#unit').val($('#base-list #mt_fmwork').html())
}
if (KISSY.one('#duty') && $('#base-list #mt_fmposition').html()) {
    KISSY.one('#duty').val($('#base-list #mt_fmposition').html())
}
if (KISSY.one('#contactNumber') && $('#base-list #mt_fmphone').html()) {
    KISSY.one('#contactNumber').val($('#base-list #mt_fmphone').html())
}
if (KISSY.one('select[name=\"firstHopeCityCode\"]') && KISSY.one('#mt_expectcity_city').html()) {
    var firstHopeCityCode = document.getElementById('firstHopeCityCode');
    var mt_expectcity_city = KISSY.one('#mt_expectcity_city').html();
    for (var i = 0; i < firstHopeCityCode.options.length; i++) {
        thiscity = $.trim(firstHopeCityCode.options[i].innerHTML);
        if (thiscity == mt_expectcity_city) {
            firstHopeCityCode.options[i].selected = true;
            break
        }
    }
}

if($('#englishLevel')  && $('#skill-list').find('.mt_skillEngLevel')){
	switch($('#skill-list').find('.mt_skillEngLevel').html()){
		case '大学英语四级': $('#englishLevel')[0].options[1].selected = true;break;
		case '大学英语六级': $('#englishLevel')[0].options[2].selected = true;break;
		case '专业四级': $('#englishLevel')[0].options[3].selected = true;break;
		case '专业八级': $('#englishLevel')[0].options[4].selected = true;break;
		default: $('#englishLevel')[0].options[0].selected = true;break;
	}
	$('#englishScore').val($('#skill-list').find('.mt_skillEngSorce').html());
}