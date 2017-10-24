
if($('#jm_qiuck_cover')){$('#jm_qiuck_cover').fadeIn();
setTimeout(function(){$('#jm_qiuck_cover').fadeOut()},1000)}

if ($('input[name=\"userName\"]') && $('#mt_name').html()) {
    $('input[name=\"userName\"]').val($('#mt_name').html());
}
if (document.getElementsByName('sex')&& $('#mt_sex').html() == '男') {
    document.getElementsByTagName('option')[0].selected = true;
}
if (document.getElementsByName('sex')&& $('#mt_sex').html() == '女') {
    document.getElementsByTagName('option')[1].selected = true;
}
if ($('input[name=\"birthday\"]') && $('#mt_birth').html()) {
    $('input[name=\"birthday\"]').val($('#mt_birth').html());
}
if ($('input[name=\"nation\"]') && $('#mt_nation').html()) {
    $('input[name=\"nation\"]').val($('#mt_nation').html());
}
if (document.getElementsByName('poliStatus')){
    for (var i = 2; i<6; i++) {
        if (document.getElementsByTagName('option')[i].text== $('#mt_polistatus').html() ){
            document.getElementsByTagName('option')[i].selected = true;
            break;
        }
    }
}
if ($('input[name=\"certCode\"]')&& $('#mt_id').html()) {
    $('input[name=\"certCode\"]').val($('#mt_id').html());
}
if ($('input[name=\"email\"]') && $('#mt_email').html()) {
    $('input[name=\"email\"]').val($('#mt_email').html());
}
if ($('input[name=\"phone\"]') && $('#mt_tel').html()) {
    $('input[name=\"phone\"]').val($('#mt_tel').html());
}
if ($('input[name=\"origin1\"]') && $('#mt_nativeplace').html()) {
    $('input[name=\"origin1\"]').val($('#mt_nativeplace').html());
}
if ($('input[name=\"origin2\"]') && $('#mt_native_city').html()) {
    $('input[name=\"origin2\"]').val($('#mt_native_city').html());
}
if ($('input[name=\"regAddr\"]') && $('#mt_hukoucitynow').html()) {
    $('input[name=\"regAddr\"]').val($('#mt_hukoucitynow').html()+$('#mt_hukoucitynow_city').html());
}
if ($('input[name=\"commAddr\"]') && $('#mt_livecity_pro').html()) {
    $('input[name=\"commAddr\"]').val($('#mt_livecity_pro').html()+$('#mt_livecity_city').html()+$('#mt_add').html());
}

if (document.getElementsByName('fullEdu')){
    if ('博士研究生'== $('#mt_edu').html() ){
        document.getElementsByTagName('option')[17].selected = true;
    }
    if ('硕士研究生' == $('#mt_edu').html() ){
        document.getElementsByTagName('option')[16].selected = true;
    }
    if ($('#mt_edu').html()=='大学本科-一本'||$('#mt_edu').html()=='大学本科-二本'
            ||$('#mt_edu').html()=='大学本科-三本'||$('#mt_edu').html()=='海外本科'){
        document.getElementsByTagName('option')[15].selected = true;
    }
    if ('大学专科'== $('#mt_edu').html() ){
        document.getElementsByTagName('option')[14].selected = true;
    }
    if ('中专'== $('#mt_edu').html() || '高中'== $('#mt_edu').html()){
        document.getElementsByTagName('option')[13].selected = true;
    }
    if ('初中及以下'== $('#mt_edu').html() ){
        document.getElementsByTagName('option')[12].selected = true;
    }
}
if (document.getElementsByName('collegeEmpBat')){
    if ($('#mt_edu').html()=='大学本科-一本'){
        document.getElementsByTagName('option')[20].selected = true;
    }
    if ($('#mt_edu').html()=='大学本科-二本' ){
        document.getElementsByTagName('option')[21].selected = true;
    }
    if ($('#mt_edu').html()=='大学本科-三本'){
        document.getElementsByTagName('option')[22].selected = true;
    }
}
if (document.getElementsByName('isGraduate')){
    document.getElementsByTagName('option')[24].selected = true;
}
if ($('input[name=\"fullSchool\"]') && $('.mt_schoolName').html()) {
    $('input[name=\"fullSchool\"]').val($('.mt_schoolName').html());
}
if ($('input[name=\"fullSpec\"]') && $('.mt_professional').html()) {
    $('input[name=\"fullSpec\"]').val($('.mt_professional').html());
}
if ($('input[name=\"fullGPA\"]') && $('.mt_gpascore').html()) {
    $('input[name=\"fullGPA\"]').val($('.mt_gpascore').html());
}
if ($('input[name=\"fullClassOrder\"]') && $('.mt_classranking').html()) {
    $('input[name=\"fullClassOrder\"]').val($('.mt_classranking').html());
}
if (document.getElementsByName('jobDegree')){
    if ('博士研究生'== $('#mt_edu').html() ){
        document.getElementsByTagName('option')[30].selected = true;
    }
    if ('硕士研究生' == $('#mt_edu').html() ){
        document.getElementsByTagName('option')[29].selected = true;
    }
    if ($('#mt_edu').html()=='大学本科-一本'||$('#mt_edu').html()=='大学本科-二本'
            ||$('#mt_edu').html()=='大学本科-三本'||$('#mt_edu').html()=='海外本科'){
        document.getElementsByTagName('option')[28].selected = true;
    }
    if ('大学专科'== $('#mt_edu').html() ){
        document.getElementsByTagName('option')[27].selected = true;
    }
}
if ($('input[name=\"jobSchool\"]') && $('.mt_academy').html()) {
    $('input[name=\"jobSchool\"]').val($('.mt_schoolName').html()+(':')+$('.mt_academy').html());
}
if ($('input[name=\"jobSpec\"]') && $('.mt_professional').html()) {
    $('input[name=\"jobSpec\"]').val($('.mt_professional').html());
}
if ($('input[name=\"jobDegree\"]') && $('#mt_edutype').html()) {
    $('input[name=\"jobDegree\"]').val($('#mt_edutype').html());
}
if ($('input[name=\"foreignGrade\"]') && $('.mt_skillEngLevel').html()) {
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
    $('input[name=\"foreignGrade\"]').val(language);
}

//教育经历
for (var i =0; i<$('.infopledu').length; i++) {
    if ($('input[name=\"edustory['+i+'].startDate\"]') && $('.mt_startYear').eq(i).html()) {
        $('input[name=\"edustory['+i+'].startDate\"]').val($('.mt_startYear').eq(i).html());
    }
    if ($('input[name=\"edustory['+i+'].endDate\"]') && $('.mt_endYear').eq(i).html()) {
        $('input[name=\"edustory['+i+'].endDate\"]').val($('.mt_endYear').eq(i).html());
    }
    if ($('input[name=\"edustory['+i+'].school\"]') && $('.mt_schoolName').eq(i).html()) {
        $('input[name=\"edustory['+i+'].school\"]').val($('.mt_schoolName').eq(i).html());
    }
    if ($('input[name=\"edustory['+i+'].eduSpec\"]') && $('.mt_professional').eq(i).html()) {
        $('input[name=\"edustory['+i+'].eduSpec\"]').val($('.mt_professional').eq(i).html());
    }
    if ($('input[name=\"edustory['+i+'].eduBack\"]') && $('.mt_education').eq(i).html()) {
        $('input[name=\"edustory['+i+'].eduBack\"]').val($('.mt_education').eq(i).html());
    }
}

//工作经历
var j=0;
for (var i =0; i<$('.infofulltimejobs').length; i++) {
    if ($('input[name=\"workStory['+j+'].startDate\"]') && $('.infofulltimejobs .mt_startDate').eq(i).html()) {
        $('input[name=\"workStory['+j+'].startDate\"]').val($('.infofulltimejobs .mt_startDate').eq(i).html());
    }
    if ($('input[name=\"workStory['+j+'].endDate\"]') && $('.infofulltimejobs .mt_endDate').eq(i).html()) {
        $('input[name=\"workStory['+j+'].endDate\"]').val($('.infofulltimejobs .mt_endDate').eq(i).html());
    }
    if ($('input[name=\"workStory['+j+'].workUnit\"]') && $('.infofulltimejobs .mt_companyName').eq(i).html()) {
        $('input[name=\"workStory['+j+'].workUnit\"]').val($('.infofulltimejobs .mt_companyName').eq(i).html());
    }
    if ($('input[name=\"workStory['+j+'].compTrade\"]') && $('.infofulltimejobs .mt_companyCat').eq(i).html()) {
        $('input[name=\"workStory['+j+'].compTrade\"]').val($('.infofulltimejobs .mt_companyCat').eq(i).html());
    }
    if ($('input[name=\"workStory['+j+'].dept\"]') && $('.infofulltimejobs .mt_department').eq(i).html()) {
        $('input[name=\"workStory['+j+'].dept\"]').val($('.infofulltimejobs .mt_department').eq(i).html());
    }
    if ($('input[name=\"workStory['+j+'].station\"]') && $('.infofulltimejobs .mt_positionName').eq(i).html()) {
        $('input[name=\"workStory['+j+'].station\"]').val($('.infofulltimejobs .mt_positionName').eq(i).html());
    }
    j++;
}
for (var i =0; i<$('.infoparttimejobs').length; i++) {
    if ($('input[name=\"workStory['+j+'].startDate\"]') && $('.infoparttimejobs .mt_startDate').eq(i).html()) {
        $('input[name=\"workStory['+j+'].startDate\"]').val($('.infoparttimejobs .mt_startDate').eq(i).html());
    }
    if ($('input[name=\"workStory['+j+'].endDate\"]') && $('.infoparttimejobs .mt_endDate').eq(i).html()) {
        $('input[name=\"workStory['+j+'].endDate\"]').val($('.infoparttimejobs .mt_endDate').eq(i).html());
    }
    if ($('input[name=\"workStory['+j+'].workUnit\"]') && $('.infoparttimejobs .mt_companyName').eq(i).html()) {
        $('input[name=\"workStory['+j+'].workUnit\"]').val($('.infoparttimejobs .mt_companyName').eq(i).html());
    }
    if ($('input[name=\"workStory['+j+'].compTrade\"]') && $('.infoparttimejobs .mt_companyCat').eq(i).html()) {
        $('input[name=\"workStory['+j+'].compTrade\"]').val($('.infoparttimejobs .mt_companyCat').eq(i).html());
    }
    if ($('input[name=\"workStory['+j+'].dept\"]') && $('.infoparttimejobs .mt_department').eq(i).html()) {
        $('input[name=\"workStory['+j+'].dept\"]').val($('.infoparttimejobs .mt_department').eq(i).html());
    }
    if ($('input[name=\"workStory['+j+'].station\"]') && $('.infoparttimejobs .mt_positionName').eq(i).html()) {
        $('input[name=\"workStory['+j+'].station\"]').val($('.infoparttimejobs .mt_positionName').eq(i).html());
    }
    j++;
}

//社团
if ($('input[name=\"jobGrade\"]') && $('.infoschoolclub').html()) {
    var SchoolClub=$('.infoschoolclub .mt_schClubList').eq(0).html();
    for (var i =1; i<$('.infoschoolclub').length; i++) {
        SchoolClub=SchoolClub+'\n'+$('.infoschoolclub .mt_schClubList').eq(i).html();
    }
    $('textarea[name=\"jobGrade\"]').val(SchoolClub);
}

//获奖情况
if ($('input[name=\"rewardSpunStatus\"]') && $('.infoschaward').html()) {
    var Awards=$('.infoschaward .mt_schawradList').eq(0).html();
    for (var i =1; i<$('.infoschaward').length; i++) {
        Awards=Awards+'\n'+$('.infoschaward .mt_schawradList').eq(i).html();
    }
    $('textarea[name=\"rewardSpunStatus\"]').val(Awards);
}

if ($('input[name=\"selfAppraise\"]') && $('#mt_selfIntro').html()) {
    $('textarea[name=\"selfAppraise\"]').val($('#mt_selfIntro').html());
}

if ($('input[name=\"familyMember[0].peopleTitle\"]')&& $('#mt_fmrelation').html()) {
    $('input[name=\"familyMember[0].peopleTitle\"]').val($('#mt_fmrelation').html());
}
if ($('input[name=\"familyMember[0].userName\"]') && $('#mt_fmname').html()) {
    $('input[name=\"familyMember[0].userName\"]').val($('#mt_fmname').html());
}
if ($('input[name=\"familyMember[0].workUnit\"]') && $('#mt_fmwork').html()) {
    $('input[name=\"familyMember[0].workUnit\"]').val($('#mt_fmwork').html());
}
if ($('input[name=\"familyMember[0].station\"]') && $('#mt_fmposition').html()) {
    $('input[name=\"familyMember[0].station\"]').val($('#mt_fmposition').html());
}