if (KISSY.one('input[name=\"RecruitmentPortalPersonProfile_Name\"]')) {
    KISSY.one('input[name=\"RecruitmentPortalPersonProfile_Name\"]').val(KISSY.one('#mt_name').html());
}
if(KISSY.one('select[name=\"RecruitmentPortalPersonProfile_CertificateType\"]') && KISSY.one('#mt_idtype').html() == '身份证'){
	document.getElementById('RecruitmentPortalPersonProfile_CertificateType').options[1].selected=true; }

if (KISSY.one('input[name=\"RecruitmentPortalPersonProfile_CertificateNumber\"]')) {
    KISSY.one('input[name=\"RecruitmentPortalPersonProfile_CertificateNumber\"]').val(KISSY.one('#mt_id').html());
}
if (KISSY.one('input[name=\"RecruitmentPortalPersonProfile_gender\"]').val() == '0' && KISSY.one('#mt_sex').html() == '男') {
    $('input[name=\"RecruitmentPortalPersonProfile_gender\"]')[0].click();
}
if (KISSY.one('input[name=\"RecruitmentPortalPersonProfile_gender\"]').val() == '1' && KISSY.one('#mt_sex').html() == '女') {
    $('input[name=\"RecruitmentPortalPersonProfile_gender\"]')[1].click();
}
if (KISSY.one('input[name=\"RecruitmentPortalPersonProfile_Birthday\"]')) {
    KISSY.one('input[name=\"RecruitmentPortalPersonProfile_Birthday\"]').val(KISSY.one('#mt_birth').html());
}
if (KISSY.one('input[name=\"RecruitmentPortalPersonProfile_Mobile\"]')) {
    KISSY.one('input[name=\"RecruitmentPortalPersonProfile_Mobile\"]').val(KISSY.one('#mt_tel').html());
}
if (KISSY.one('input[name=\"RecruitmentPortalPersonProfile_email\"]')) {
    KISSY.one('input[name=\"RecruitmentPortalPersonProfile_email\"]').val(KISSY.one('#mt_email').html());
}
if (KISSY.one('input[name=\"RecruitmentPortalPersonProfile_EmergencyContact\"]') && KISSY.one('#mt_jjlxr').html()) {
    KISSY.one('input[name=\"RecruitmentPortalPersonProfile_EmergencyContact\"]').val(KISSY.one('#mt_jjlxr').html());
}
if (KISSY.one('input[name=\"RecruitmentPortalPersonProfile_EmergencyPhone\"]') && KISSY.one('#mt_jjlxrtel').html()) {
    KISSY.one('input[name=\"RecruitmentPortalPersonProfile_EmergencyPhone\"]').val(KISSY.one('#mt_jjlxrtel').html());
}
if($('#RecruitmentPortalPersonProfile_EducationLevel').length>0 && $('#mt_edu').html()){
	var national=$('#RecruitmentPortalPersonProfile_EducationLevel').get(0);
	switch($('#mt_edu').html()){
		case '初中及以下':national.options[1].selected=true;break;
		case '中专':
		case '技校/职高':
		case '高中':national.options[2].selected=true;break;
		case '大学专科':national.options[3].selected=true;break;
		case '大学本科-一本':case '大学本科-二本':case '大学本科-三本':national.options[4].selected=true;break;
		case '硕士研究生':national.options[5].selected=true;break;
		case '博士研究生':national.options[6].selected=true;break;
	}
}
if($('#RecruitmentPortalPersonProfile_EducationStudyMode').length>0 && $('#mt_edutype').html()){
	var edutype=$('#RecruitmentPortalPersonProfile_EducationStudyMode').get(0);
	switch($('#mt_edutype').html()){
		case '全日制统分统招':edutype.options[1].selected=true;break;
		case '成人教育':edutype.options[2].selected=true;break;
		case '大学专科':edutype.options[3].selected=true;break;
		case '大学本科-一本':case '大学本科-二本':case '大学本科-三本':edutype.options[4].selected=true;break;
		case '硕士研究生':edutype.options[5].selected=true;break;
		case '博士研究生':edutype.options[6].selected=true;break;
	}
}
if (KISSY.one('input[name=\"RecruitmentPortalPersonProfile_GraduationDate\"]')) {
    KISSY.one('input[name=\"RecruitmentPortalPersonProfile_GraduationDate\"]').val(KISSY.one('#mt_gradutetime').html());
}
