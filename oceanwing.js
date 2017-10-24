
if(KISSY.one('#jm_qiuck_cover')){KISSY.one('#jm_qiuck_cover').fadeIn();
setTimeout(function(){KISSY.one('#jm_qiuck_cover').fadeOut()},1000)}

if (KISSY.one('input[name=\"name\"]') && KISSY.one('#mt_name').html()) {
    KISSY.one('input[name=\"name\"]').val(KISSY.one('#mt_name').html());
}
if (document.getElementsByName('sex')&& KISSY.one('#mt_sex').html() == '男') {
    document.getElementsByTagName('option')[1].selected = true;
}
if (document.getElementsByName('sex')&& KISSY.one('#mt_sex').html() == '女') {
    document.getElementsByTagName('option')[2].selected = true;
}

if (KISSY.one('input[name=\"cardId\"]')&& KISSY.one('#mt_id').html()) {
    KISSY.one('input[name=\"cardId\"]').val(KISSY.one('#mt_id').html());
}
if (KISSY.one('input[name=\"email\"]') && KISSY.one('#mt_email').html()) {
    KISSY.one('input[name=\"email\"]').val(KISSY.one('#mt_email').html());
}
if (KISSY.one('input[name=\"tel\"]') && KISSY.one('#mt_tel').html()) {
    KISSY.one('input[name=\"tel\"]').val(KISSY.one('#mt_tel').html());
}
if (KISSY.one('input[name=\"birthDay\"]') && KISSY.one('#mt_birth').html()) {
    KISSY.one('input[name=\"birthDay\"]').val(KISSY.one('#mt_birth').html());
}
if (KISSY.one('input[name=\"nativePlace\"]') && KISSY.one('#mt_nativeplace').html()) {
    KISSY.one('input[name=\"nativePlace\"]').val(KISSY.one('#mt_nativeplace').html());
}
if (KISSY.one('input[name=\"national\"]') && KISSY.one('#mt_nation').html()) {
    KISSY.one('input[name=\"national\"]').val(KISSY.one('#mt_nation').html());
}
if (KISSY.one('input[name=\"height\"]') && KISSY.one('#mt_height').html()) {
    KISSY.one('input[name=\"height\"]').val(KISSY.one('#mt_height').html());
}

if (KISSY.one('input[name=\"weight\"]') && KISSY.one('#mt_weight').html()) {
    KISSY.one('input[name=\"weight\"]').val(KISSY.one('#mt_weight').html());
}
if (KISSY.one('input[name=\"address\"]') && KISSY.one('#mt_livecity_pro').html()) {
    KISSY.one('input[name=\"address\"]').val(KISSY.one('#mt_livecity_pro').html()+KISSY.one('#mt_livecity_city').html()+KISSY.one('#mt_add').html());
}
if (document.getElementsByName('intentionCity')){
    for (var i =4; i <= 8; i++) {
        if (document.getElementsByTagName('option')[i].text == KISSY.one('#mt_expectcity_city').html() ){
            document.getElementsByTagName('option')[i].selected = true;
            break;
        }
    }
}
if (document.getElementsByName('education')){
    if ('博士研究生'== KISSY.one('#mt_edu').html() ){
        document.getElementsByTagName('option')[9].selected = true;
    }
    if ('硕士研究生' == KISSY.one('#mt_edu').html() ){
        document.getElementsByTagName('option')[10].selected = true;
    }
    if (KISSY.one('#mt_edu').html()=='大学本科-一本'||KISSY.one('#mt_edu').html()=='大学本科-二本'
            ||KISSY.one('#mt_edu').html()=='大学本科-三本'||KISSY.one('#mt_edu').html()=='海外本科'){
        document.getElementsByTagName('option')[11].selected = true;
    }
    if ('大学专科'== KISSY.one('#mt_edu').html() ){
        document.getElementsByTagName('option')[i].selected = true;
    }
}
if (KISSY.one('input[name=\"emergencyContactName\"]') && KISSY.one('#mt_jjlxr').html()) {
    KISSY.one('input[name=\"emergencyContactName\"]').val(KISSY.one('#mt_jjlxr').html());
}
if (KISSY.one('input[name=\"emergencyContactTel\"]') && KISSY.one('#mt_jjlxrtel').html()) {
    KISSY.one('input[name=\"emergencyContactTel\"]').val(KISSY.one('#mt_jjlxrtel').html());
}

if (KISSY.one('input[name=\"lauguage\"]') && $('.mt_skillEngLevel').html()) {
    var language=$('.infoEnglishSkill .mt_skillEngLevel').html()+'  成绩：'+$('.infoEnglishSkill .mt_skillEngSorce').html();
    for (var i =1; i<$('.infoEnglishSkill').length; i++) {
        language=language+';    '+$('.infoEnglishSkill .mt_skillEngLevel').eq(i).html()+'  成绩：'+$('.infoEnglishSkill .mt_skillEngSorce').eq(i).html()
    }

    for (var i =0; i<$('.infoOtEnglishSkill').length; i++) {
        language=language+';    '+$('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html()+'  成绩：'+$('.infoOtEnglishSkill .mt_otherSkillEngSorce').eq(i).html()
    }

    for (var i =0; i<$('.infoOtherSkill').length; i++) {
        language=language+';    '+$('.infoOtherSkill .mt_skillOtherLang').eq(i).html()+'  成绩：'+$('.infoOtherSkill .mt_skillGraspLevel').eq(i).html()
    }
    KISSY.one('input[name=\"lauguage\"]').val(language);
}


if (KISSY.one('textarea[name=\"hobby\"]') && KISSY.one('#mt_skill').html()) {
    KISSY.one('textarea[name=\"hobby\"]').val(KISSY.one('#mt_skill').html());
}
if (KISSY.one('textarea[name=\"selfEvaluation\"]') && KISSY.one('#mt_selfIntro').html()) {
    KISSY.one('textarea[name=\"selfEvaluation\"]').val(KISSY.one('#mt_selfIntro').html());
}


///////////////////////////
var j=0,l=24;
for (var i =0; i<$('.infopledu').length; i++) {
    if ($('#divEducation').find('input')[j] && $('.infopledu .mt_startYear').eq(i).html()) {
        $('#divEducation').find('input')[j].value=$('.infopledu .mt_startYear').eq(i).html()+'-01';
    }j++;KISSY.one
    if ($('#divEducation').find('input')[j] && $('.infopledu .mt_endYear').eq(i).html()) {
        $('#divEducation').find('input')[j].value=$('.infopledu .mt_endYear').eq(i).html()+'-01';
    }j++;
    if (document.getElementsByName('education')&& $('#divEducation').find('input')[j]){
        if ('博士研究生'== $('.infopledu .mt_education').eq(i).html() ){
            document.getElementsByTagName('option')[l].selected = true;
        }l++;
        if ('硕士研究生' == $('.infopledu .mt_education').eq(i).html() ){
            document.getElementsByTagName('option')[l].selected = true;
        }l++;
        if ($('.infopledu .mt_education').eq(i).html()=='大学本科-一本'||$('.infopledu .mt_education').eq(i).html()=='大学本科-二本'
                ||$('.infopledu .mt_education').eq(i).html()=='大学本科-三本'||$('.infopledu .mt_education').eq(i).html()=='海外本科'){
            document.getElementsByTagName('option')[l].selected = true;
        }l++;
        if ('大学专科'== $('.infopledu .mt_education').eq(i).html() ){
            document.getElementsByTagName('option')[l].selected = true;
        }l=l+2;
    }
    if ($('#divEducation').find('input')[j] && $('.infopledu .mt_schoolName').eq(i).html()) {
        $('#divEducation').find('input')[j].value=$('.infopledu .mt_schoolName').eq(i).html();
    }j++;
    if ($('#divEducation').find('input')[j] && $('.infopledu .mt_professional').eq(i).html()) {
        $('#divEducation').find('input')[j].value=$('.infopledu .mt_professional').eq(i).html();
    }j++;
    if ($('#divEducation').find('input')[j] && $('.infopledu .mt_professionalranking').eq(i).html()) {
        $('#divEducation').find('input')[j].value='专业排名：'+$('.infopledu .mt_professionalranking').eq(i).html();
    }j++;
}

/////////////////
var j=0,k=0;
for (var i =0; i<$('.infoschoolclub').length; i++) {
    if ($('#divPractiveInSchool').find('input')[j] && $('.infoschoolclub .mt_startDate').eq(i).html()) {
        $('#divPractiveInSchool').find('input')[j].value=$('.infoschoolclub .mt_startDate').eq(i).html()+'-01';
    }j++;
    if ($('#divPractiveInSchool').find('input')[j] && $('.infoschoolclub .mt_endDate').eq(i).html()) {
        $('#divPractiveInSchool').find('input')[j].value=$('.infoschoolclub .mt_endDate').eq(i).html()+'-01';
    }j++;
    if ($('#divPractiveInSchool').find('textarea')[k] && $('.infoschoolclub .mt_schClubList').eq(i).html()) {
        $('#divPractiveInSchool').find('textarea')[k].value=$('.infoschoolclub .mt_schClubList').eq(i).html();
    }k++;
}

/////
var j=0,k=0;
for (var i =0; i<$('.infoparttimejobs').length; i++) {
    if ($('#divIntership').find('input')[j] && $('.infoparttimejobs .mt_startDate').eq(i).html()) {
        $('#divIntership').find('input')[j].value=$('.infoparttimejobs .mt_startDate').eq(i).html()+'-01';
    }j++;
    if ($('#divIntership').find('input')[j] && $('.infoparttimejobs .mt_endDate').eq(i).html()) {
        $('#divIntership').find('input')[j].value=$('.infoparttimejobs .mt_endDate').eq(i).html()+'-01';
    }j++;
    if ($('#divIntership').find('input')[j] && $('.infoparttimejobs .mt_companyName').eq(i).html()) {
        $('#divIntership').find('input')[j].value=$('.infoparttimejobs .mt_companyName').eq(i).html();
    }j++;
    if ($('#divIntership').find('input')[j] && $('.infoparttimejobs .mt_positionName').eq(i).html()) {
        $('#divIntership').find('input')[j].value=$('.infoparttimejobs .mt_positionName').eq(i).html();
    }j++;
    if ($('#divIntership').find('textarea')[k] && $('.infoparttimejobs .mt_workDes .workDes').eq(i).html()) {
        $('#divIntership').find('textarea')[k].value=$('.infoparttimejobs .mt_workDes .workDes').eq(i).html();
    }k++;
}

for (var i =0; i<$('.infofulltimejobs').length; i++) {
    if ($('#divIntership').find('input')[j] && $('.infofulltimejobs .mt_startDate').eq(i).html()) {
        $('#divIntership').find('input')[j].value=$('.infofulltimejobs .mt_startDate').eq(i).html()+'-01';
    }j++;
    if ($('#divIntership').find('input')[j] && $('.infofulltimejobs .mt_endDate').eq(i).html()) {
        $('#divIntership').find('input')[j].value=$('.infofulltimejobs .mt_endDate').eq(i).html()+'-01';
    }j++;
    if ($('#divIntership').find('input')[j] && $('.infofulltimejobs .mt_companyName').eq(i).html()) {
        $('#divIntership').find('input')[j].value=$('.infofulltimejobs .mt_companyName').eq(i).html();
    }j++;
    if ($('#divIntership').find('input')[j] && $('.infofulltimejobs .mt_positionName').eq(i).html()) {
        $('#divIntership').find('input')[j].value=$('.infofulltimejobs .mt_positionName').eq(i).html();
    }j++;
    if ($('#divIntership').find('textarea')[k] && $('.infofulltimejobs .mt_workDes .workDes').eq(i).html()) {
        $('#divIntership').find('textarea')[k].value=$('.infofulltimejobs .mt_workDes .workDes').eq(i).html();
    }k++;
}


if (KISSY.one('textarea[name=\"honour\"]') && $('.mt_schawradList').html()) {
    var awards=$('.mt_schawradList').html();
    for (var i =1; i<$('.infoschaward').length; i++) {
        awards=awards+';    '+$('.infoschaward .mt_schawradList').eq(i).html()
    }
    KISSY.one('textarea[name=\"honour\"]').val(awards);
}

if (KISSY.one('#divFamily').find('input')[0] && KISSY.one('#mt_fmname').html()) {
    KISSY.one('#divFamily').find('input')[0].value=KISSY.one('#mt_fmname').html();
}
if (KISSY.one('input[name=\"appellation\"]') && KISSY.one('#mt_fmrelation').html()) {
    KISSY.one('input[name=\"appellation\"]').val(KISSY.one('#mt_fmrelation').html());
}
if (KISSY.one('#divFamily').find('input')[2] && KISSY.one('#mt_fmwork').html()) {
    KISSY.one('#divFamily').find('input')[2].value=KISSY.one('#mt_fmwork').html();
}
if (KISSY.one('#divFamily').find('input')[3] && KISSY.one('#mt_postadd').html()) {
    KISSY.one('#divFamily').find('input')[3].value=KISSY.one('#mt_postadd').html();
}