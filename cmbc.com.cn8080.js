
if(KISSY.one('#jm_qiuck_cover')){KISSY.one('#jm_qiuck_cover').fadeIn();
setTimeout(function(){KISSY.one('#jm_qiuck_cover').fadeOut()},1000)}


if (KISSY.one('input[data-fieldid=\"name\"]') && KISSY.one('#mt_name').html()) {
    KISSY.one('input[data-fieldid=\"name\"]').val(KISSY.one('#mt_name').html());
}
if (KISSY.one('input[data-fieldid=\"birthday\"]') && KISSY.one('#mt_birth').html()) {
    KISSY.one('input[data-fieldid=\"birthday\"]').val(KISSY.one('#mt_birth').html());
}

if (KISSY.one('input[data-fieldid=\"sex\"][value=\"1\"]') && KISSY.one('#mt_sex').html() == '男') {
    $('.radio-inline ').find('input')[0].checked = true;
}
if (KISSY.one('input[data-fieldid=\"sex\"][value=\"0\"]')&& KISSY.one('#mt_sex').html() == '女') {
    $('.radio-inline ').find('input')[1].checked = true;
}

if ($('select[data-fieldid=\"nationality\"]')){
    for (var i =0; i <= 60; i++) {
        if ($('.qx-field-control').find('option')[i].text == KISSY.one('#mt_nation').html() ){
            $('.qx-field-control').find('option')[i].selected = true;
            break;
        }
    }
}
if (KISSY.one('input[data-fieldid=\"certificateId\"]')&& KISSY.one('#mt_id').html()) {
    KISSY.one('input[data-fieldid=\"certificateId\"]').val(KISSY.one('#mt_id').html());
}
if (KISSY.one('input[data-fieldid=\"regUser.email\"]') && KISSY.one('#mt_email').html()) {
    KISSY.one('input[data-fieldid=\"regUser.email\"]').val(KISSY.one('#mt_email').html());
}
if (KISSY.one('input[data-fieldid=\"contacttel2\"]') && KISSY.one('#mt_gudingtel').html()) {
    KISSY.one('input[data-fieldid=\"contacttel2\"]').val(KISSY.one('#mt_gudingtel').html());
}
if (KISSY.one('input[data-fieldid=\"contacttel1\"]') && KISSY.one('#mt_tel').html()) {
    KISSY.one('input[data-fieldid=\"contacttel1\"]').val(KISSY.one('#mt_tel').html());
}
if (KISSY.one('input[data-fieldid=\"postcode\"]') && KISSY.one('#mt_zip').html()) {
    KISSY.one('input[data-fieldid=\"postcode\"]').val(KISSY.one('#mt_zip').html());
}
if (KISSY.one('input[data-fieldid=\"country\"]') && KISSY.one('#mt_national').html()) {
    KISSY.one('input[data-fieldid=\"country\"]').val(KISSY.one('#mt_national').html());
}
if (KISSY.one('input[data-fieldid=\"address\"]') && KISSY.one('#mt_add').html()) {
    KISSY.one('input[data-fieldid=\"address\"]').val(KISSY.one('#mt_add').html());
}
if ($('select[data-fieldid=\"educationalStatus\"]')){
    for (var i =81; i < 90; i++) {
        if ($('.qx-field-control').find('option')[i].text == KISSY.one('#mt_edu').html() ){
            $('.qx-field-control').find('option')[i].selected = true;
            break;
        }
        if (KISSY.one('#mt_edu').html()=='大学本科-一本'||KISSY.one('#mt_edu').html()=='大学本科-二本'
            ||KISSY.one('#mt_edu').html()=='大学本科-三本'||KISSY.one('#mt_edu').html()=='海外本科'){
            $('.qx-field-control').find('option')[84].selected = true;
            break;
        }
    }
}
if ($('select[data-fieldid=\"maritalStatus\"]')){
    for (var i =91; i <= 93; i++) {
        if ($('.qx-field-control').find('option')[i].text == KISSY.one('#mt_maritalstatus').html() ){
            $('.qx-field-control').find('option')[i].selected = true;
            break;
        }
        if ('离婚'== KISSY.one('#mt_maritalstatus').html() ){
            $('.qx-field-control').find('option')[93].selected = true;
            break;
        }
    }
}
if ($('select[data-fieldid=\"domicile.id\"]')){
    for (var i =110; i <= 142; i++) {
        if ($('.qx-field-control').find('option')[i].text == KISSY.one('#mt_hukoucitynow').html() ){
            $('.qx-field-control').find('option')[i].selected = true;
            break;
        }
        if ($('.qx-field-control').find('option')[i].text == KISSY.one('#mt_hukoucitynow').html()+'自治区' ){
            $('.qx-field-control').find('option')[i].selected = true;
            break;
        }
        if ($('.qx-field-control').find('option')[i].text == KISSY.one('#mt_hukoucitynow').html()+'省' ){
            $('.qx-field-control').find('option')[i].selected = true;
            break;
        }
    }
}
if (KISSY.one('input[data-fieldid=\"domicileName\"]') && KISSY.one('#mt_hukoucitynow_city').html()) {
    KISSY.one('input[data-fieldid=\"domicileName\"]').val(KISSY.one('#mt_hukoucitynow_city').html());
}

if ($('select[data-fieldid=\"studentOrigin.id\"]')){
    for (var i =144; i <= 176; i++) {
        if ($('.qx-field-control').find('option')[i].text == KISSY.one('#mt_hukoucity').html() ){
            $('.qx-field-control').find('option')[i].selected = true;
            break;
        }
        if ($('.qx-field-control').find('option')[i].text == KISSY.one('#mt_hukoucity').html()+'自治区' ){
            $('.qx-field-control').find('option')[i].selected = true;
            break;
        }
        if ($('.qx-field-control').find('option')[i].text == KISSY.one('#mt_hukoucity').html()+'省' ){
            $('.qx-field-control').find('option')[i].selected = true;
            break;
        }
    }
}
if (KISSY.one('input[data-fieldid=\"studentOriginName\"]') && KISSY.one('#mt_hukoucity_city').html()) {
    KISSY.one('input[data-fieldid=\"studentOriginName\"]').val(KISSY.one('#mt_hukoucity_city').html());
}
if ($('select[data-fieldid=\"membership\"]')){
    for (var i =95; i <= 108; i++) {
        if ($('.qx-field-control').find('option')[i].text == KISSY.one('#mt_polistatus').html() ){
            $('.qx-field-control').find('option')[i].selected = true;
            break;
        }
    }
}

if (KISSY.one('input[data-fieldid=\"address\"]') && KISSY.one('#mt_add').html()) {
    KISSY.one('input[data-fieldid=\"address\"]').val(KISSY.one('#mt_add').html());
}



//教育背景
var input=2;
for (var i =0; i<$('.infopledu').length; i++) {
    if ($('#sectioncontainer-zh_CN-socialResumeEducations').find('input')[input] && $('.infopledu .mt_startYear').eq(i).html()) {
        $('#sectioncontainer-zh_CN-socialResumeEducations').find('input')[input].value=$('.infopledu .mt_startYear').eq(i).html()+'-01';
    }input++;
    if ($('#sectioncontainer-zh_CN-socialResumeEducations').find('input')[input]  && $('.infopledu .mt_endYear').eq(i).html()) {
        $('#sectioncontainer-zh_CN-socialResumeEducations').find('input')[input].value=$('.infopledu .mt_endYear').eq(i).html()+'-01';
    }input++;
    if ($('#sectioncontainer-zh_CN-socialResumeEducations').find('input')[input] && $('.infopledu .mt_schoolName').eq(i).html()) {
        $('#sectioncontainer-zh_CN-socialResumeEducations').find('input')[input].value=$('.infopledu .mt_schoolName').eq(i).html();
    }input++;
    if ($('#sectioncontainer-zh_CN-socialResumeEducations').find('input')[input] && $('.infopledu .mt_academy').eq(i).html()) {
        $('#sectioncontainer-zh_CN-socialResumeEducations').find('input')[input].value=$('.infopledu .mt_academy').eq(i).html();
    }input++;
    if ($('#sectioncontainer-zh_CN-socialResumeEducations').find('input')[input] && $('.infopledu .mt_professional').eq(i).html()) {
        $('#sectioncontainer-zh_CN-socialResumeEducations').find('input')[input].value=$('.infopledu .mt_professional').eq(i).html();
    }input++;
    if ($('#sectioncontainer-zh_CN-socialResumeEducations').find('option')[i*10]) {
        if ($('select[data-fieldid=\"education\"]')){
            for (var j =0; j < 10; j++) {
                if ($('#sectioncontainer-zh_CN-socialResumeEducations').find('option')[i*10+j].text == $('.infopledu .mt_education').eq(i).html() ){
                    $('#sectioncontainer-zh_CN-socialResumeEducations').find('option')[i*10+j].selected = true;
                    break;
                }
                if ($('.infopledu .mt_education').eq(i).html()=='大学本科-一本'||$('.infopledu .mt_education').eq(i).html()=='大学本科-二本'
                    ||$('.infopledu .mt_education').eq(i).html()=='大学本科-三本'||$('.infopledu .mt_education').eq(i).html()=='海外本科'){
                    $('#sectioncontainer-zh_CN-socialResumeEducations').find('option')[i*10+4].selected = true;
                    break;
                }
            }
        }
    }
    if($('#sectioncontainer-zh_CN-socialResumeEducations').find('input')[input]){
    $('#sectioncontainer-zh_CN-socialResumeEducations').find('input')[input].checked=true;
    }input=input+3;
}

//社团，实习经历
var input=1 ,textarea=0;
for (var i =0; i<$('.infoparttimejobs').length; i++) {
    if ($('#sectionContent-zh_CN-workExperiences').find('input')[input] && $('.infoparttimejobs .mt_startDate').eq(i).html()) {
        $('#sectionContent-zh_CN-workExperiences').find('input')[input].value=$('.infoparttimejobs .mt_startDate').eq(i).html()+'-01';
    }input++;
    if ($('#sectionContent-zh_CN-workExperiences').find('input')[input]  && $('.infoparttimejobs .mt_endDate').eq(i).html()) {
        $('#sectionContent-zh_CN-workExperiences').find('input')[input].value=$('.infoparttimejobs .mt_endDate').eq(i).html()+'-01';
    }input++;
    if ($('#sectionContent-zh_CN-workExperiences').find('input')[input] && $('.infoparttimejobs .mt_companyName').eq(i).html()) {
        $('#sectionContent-zh_CN-workExperiences').find('input')[input].value=$('.infoparttimejobs .mt_companyName').eq(i).html();
    }input++;
    if ($('#sectionContent-zh_CN-workExperiences').find('input')[input] && $('.infoparttimejobs .mt_department').eq(i).html()) {
        $('#sectionContent-zh_CN-workExperiences').find('input')[input].value=$('.infoparttimejobs .mt_department').eq(i).html();
    }input++;
    if ($('#sectionContent-zh_CN-workExperiences').find('input')[input] && $('.infoparttimejobs .mt_positionName').eq(i).html()) {
        $('#sectionContent-zh_CN-workExperiences').find('input')[input].value=$('.infoparttimejobs .mt_positionName').eq(i).html();
    }input=input+2;
    if($('#sectionContent-zh_CN-workExperiences').find('textarea')[textarea] && $('.infoparttimejobs .mt_workDes .workDes').eq(i).html()){
    $('#sectionContent-zh_CN-workExperiences').find('textarea')[textarea].value=$('.infoparttimejobs .mt_workDes .workDes').eq(i).html();
    }textarea++;
}
for (var i =0; i<$('.infofulltimejobs').length; i++) {
    if ($('#sectionContent-zh_CN-workExperiences').find('input')[input] && $('.infofulltimejobs .mt_startDate').eq(i).html()) {
        $('#sectionContent-zh_CN-workExperiences').find('input')[input].value=$('.infofulltimejobs .mt_startDate').eq(i).html()+'-01';
    }input++;
    if ($('#sectionContent-zh_CN-workExperiences').find('input')[input]  && $('.infofulltimejobs .mt_endDate').eq(i).html()) {
        $('#sectionContent-zh_CN-workExperiences').find('input')[input].value=$('.infofulltimejobs .mt_endDate').eq(i).html()+'-01';
    }input++;
    if ($('#sectionContent-zh_CN-workExperiences').find('input')[input] && $('.infofulltimejobs .mt_companyName').eq(i).html()) {
        $('#sectionContent-zh_CN-workExperiences').find('input')[input].value=$('.infofulltimejobs .mt_companyName').eq(i).html();
    }input++;
    if ($('#sectionContent-zh_CN-workExperiences').find('input')[input] && $('.infofulltimejobs .mt_department').eq(i).html()) {
        $('#sectionContent-zh_CN-workExperiences').find('input')[input].value=$('.infofulltimejobs .mt_department').eq(i).html();
    }input++;
    if ($('#sectionContent-zh_CN-workExperiences').find('input')[input] && $('.infofulltimejobs .mt_positionName').eq(i).html()) {
        $('#sectionContent-zh_CN-workExperiences').find('input')[input].value=$('.infofulltimejobs .mt_positionName').eq(i).html();
    }input=input+2;
    if($('#sectionContent-zh_CN-workExperiences').find('textarea')[textarea] && $('.infofulltimejobs .mt_workDes .workDes').eq(i).html()){
    $('#sectionContent-zh_CN-workExperiences').find('textarea')[textarea].value=$('.infofulltimejobs .mt_workDes .workDes').eq(i).html();
    }textarea++;
}
for (var i =0; i<$('.infoschoolclub').length; i++) {
    if ($('#sectionContent-zh_CN-workExperiences').find('input')[input] && $('.infoschoolclub .mt_startDate').eq(i).html()) {
        $('#sectionContent-zh_CN-workExperiences').find('input')[input].value=$('.infoschoolclub .mt_startDate').eq(i).html()+'-01';
    }input++;
    if ($('#sectionContent-zh_CN-workExperiences').find('input')[input]  && $('.infoschoolclub .mt_endDate').eq(i).html()) {
        $('#sectionContent-zh_CN-workExperiences').find('input')[input].value=$('.infoschoolclub .mt_endDate').eq(i).html()+'-01';
    }input++;
    if ($('#sectionContent-zh_CN-workExperiences').find('input')[input] && $('.infoschoolclub .mt_schClubName').eq(i).html()) {
        $('#sectionContent-zh_CN-workExperiences').find('input')[input].value=$('.infoschoolclub .mt_schClubName').eq(i).html();
    }input=input+2;
    if ($('#sectionContent-zh_CN-workExperiences').find('input')[input] && $('.infoschoolclub .mt_positionName').eq(i).html()) {
        $('#sectionContent-zh_CN-workExperiences').find('input')[input].value=$('.infoschoolclub .mt_positionName').eq(i).html();
    }input=input+2;
    if($('#sectionContent-zh_CN-workExperiences').find('textarea')[textarea] && $('.infoschoolclub .mt_workDes').eq(i).html()){
    $('#sectionContent-zh_CN-workExperiences').find('textarea')[textarea].value=$('.infoschoolclub .mt_workDes').eq(i).html();
    }textarea++;
}

//培训经历
var input=1,textarea=0;
for (var i =0; i<$('.infotraining').length; i++) {
    if ($('#sectionContent-zh_CN-socialResumeTrainings').find('input')[input] && $('.infotraining .mt_startDate').eq(i).html()) {
        $('#sectionContent-zh_CN-socialResumeTrainings').find('input')[input].value=$('.infotraining .mt_startDate').eq(i).html()+'-01';
    }input++;
    if ($('#sectionContent-zh_CN-socialResumeTrainings').find('input')[input]  && $('.infotraining .mt_endDate').eq(i).html()) {
        $('#sectionContent-zh_CN-socialResumeTrainings').find('input')[input].value=$('.infotraining .mt_endDate').eq(i).html()+'-01';
    }input++;
    if ($('#sectionContent-zh_CN-socialResumeTrainings').find('input')[input] && $('.infotraining .mt_trainingName').eq(i).html()) {
        $('#sectionContent-zh_CN-socialResumeTrainings').find('input')[input].value=$('.infotraining .mt_trainingName').eq(i).html();
    }input++;
    if ($('#sectionContent-zh_CN-socialResumeTrainings').find('input')[input] && $('.infotraining .mt_trainingCompany').eq(i).html()) {
        $('#sectionContent-zh_CN-socialResumeTrainings').find('input')[input].value=$('.infotraining .mt_trainingCompany').eq(i).html();
    }input=input+2;
    if($('#sectionContent-zh_CN-socialResumeTrainings').find('textarea')[textarea] && $('.infotraining .mt_certificateName').eq(i).html()){
       $('#sectionContent-zh_CN-socialResumeTrainings').find('textarea')[textarea].value='获得证书：'+$('.infotraining .mt_certificateName').eq(i).html();
    }textarea++;
}

//技能爱好
if (KISSY.one('input[data-fieldid=\"cet4\"]')) {
    for (var i =0; i<4; i++) {
        if ($('.mt_skillEngLevel').eq(i).html()=='大学英语四级') {
            $('input[data-fieldid=\"cet4\"]').val($('.mt_skillEngSorce').eq(i).html());
            break;
        }
    }
}
if (KISSY.one('input[data-fieldid=\"cet6\"]')) {
    for (var i =0; i<4; i++) {
        if ($('.mt_skillEngLevel').eq(i).html()=='大学英语六级') {
            $('input[data-fieldid=\"cet6\"]').val($('.mt_skillEngSorce').eq(i).html());
        break;
        }
    }
}
if (KISSY.one('input[data-fieldid=\"tem8\"]')) {
    for (var i =0; i<4; i++) {
        if ($('.mt_skillEngLevel').eq(i).html()=='专业八级') {
            $('input[data-fieldid=\"tem8\"]').val($('.mt_skillEngSorce').html());
        break;
        }
    }KISSY.one
}
if ($('#sectioncontainer-zh_CN-socialResumeSkillsHobbiess').find('input')[5] && $('.infoOtEnglishSkill .mt_otherSkillEngLevel').html()) {
    $('#sectioncontainer-zh_CN-socialResumeSkillsHobbiess').find('input')[5].value=$('.infoOtEnglishSkill .mt_otherSkillEngLevel').html()+'成绩：'+$('.infoOtEnglishSkill .mt_otherSkillEngSorce').html();
}
if ($('#sectioncontainer-zh_CN-socialResumeSkillsHobbiess').find('input')[7] && KISSY.one('#mt_skill').html()) {
    $('#sectioncontainer-zh_CN-socialResumeSkillsHobbiess').find('input')[7].value=KISSY.one('#mt_skill').html();
}
if ($('#sectioncontainer-zh_CN-socialResumeSkillsHobbiess').find('input')[8] && KISSY.one('#mt_hobbies').html()) {
    $('#sectioncontainer-zh_CN-socialResumeSkillsHobbiess').find('input')[8].value=KISSY.one('#mt_hobbies').html();
}


//获奖情况
var input=1;
for (var i =0; i<$('.infoschaward').length; i++) {
    if ($('#sectionContent-zh_CN-socialResumeRewardPunishments').find('input')[input] && $('.infoschaward .mt_awardsDate').eq(i).html()) {
        $('#sectionContent-zh_CN-socialResumeRewardPunishments').find('input')[input].value=$('.infoschaward .mt_awardsDate').eq(i).html()+'-01';
    }input++;
    if ($('#sectionContent-zh_CN-socialResumeRewardPunishments').find('input')[input]  && $('.infoschaward .mt_awardsName').eq(i).html()) {
        $('#sectionContent-zh_CN-socialResumeRewardPunishments').find('input')[input].value=$('.infoschaward .mt_awardsName').eq(i).html();
    }input=input+3;
}

//家人情况
if ($('#sectionContent-zh_CN-campusResumeFamilys').find('input')[1] && KISSY.one('#mt_fmname').html()) {
    $('#sectionContent-zh_CN-campusResumeFamilys').find('input')[1].value=KISSY.one('#mt_fmname').html();
}
if ($('select[data-fieldid=\"relationship\"]')){
    for (var i =1; i <= 7; i++) {
        if ($('#sectionContent-zh_CN-campusResumeFamilys').find('option')[i].text == KISSY.one('#mt_fmrelation').html() ){
            $('#sectionContent-zh_CN-campusResumeFamilys').find('option')[i].selected = true;
            break;
        }
    }
}
if ($('#sectionContent-zh_CN-campusResumeFamilys').find('input')[2] && KISSY.one('#mt_fmphone').html()) {
    $('#sectionContent-zh_CN-campusResumeFamilys').find('input')[2].value=KISSY.one('#mt_fmphone').html();
}
if ($('#sectionContent-zh_CN-campusResumeFamilys').find('input')[3] && KISSY.one('#mt_fmwork').html()) {
    $('#sectionContent-zh_CN-campusResumeFamilys').find('input')[3].value=KISSY.one('#mt_fmwork').html();
}

if ($('#sectionContent-zh_CN-campusResumeFamilys').find('input')[4] && KISSY.one('#mt_fmposition').html()) {
    $('#sectionContent-zh_CN-campusResumeFamilys').find('input')[4].value=KISSY.one('#mt_fmposition').html();
}

//自我介绍
if (KISSY.one('textarea[data-fieldid=\"selfAssessment\"]') && KISSY.one('#mt_selfIntro').html()) {
    KISSY.one('textarea[data-fieldid=\"selfAssessment\"]').val(KISSY.one('#mt_selfIntro').html());
}

//求职意向
if ($('#sectionContent-zh_CN-workTarget').find('input')[1] && $('.mt_reasons').html()) {
    $('#sectionContent-zh_CN-workTarget').find('input')[1].value=$('.mt_reasons').html();
}
if ($('#sectionContent-zh_CN-workTarget').find('input')[2] && KISSY.one('#mt_expectcity_city').html()) {
    $('#sectionContent-zh_CN-workTarget').find('input')[2].value=KISSY.one('#mt_expectcity_city').html();
}