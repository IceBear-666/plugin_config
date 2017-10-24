if(KISSY.one('#jm_qiuck_cover')){KISSY.one('#jm_qiuck_cover').fadeIn();
setTimeout(function(){KISSY.one('#jm_qiuck_cover').fadeOut()},1000)}
if (KISSY.one('input[name=\"enName\"]')) {
    KISSY.one('input[name=\"enName\"]').val(KISSY.one('#englishNameEn').html());
}
if (KISSY.one('input[name=\"zhName\"]')) {
    KISSY.one('input[name=\"zhName\"]').val(KISSY.one('#mt_name').html());
}
if (KISSY.one('input[name=\"email\"]')) {
    KISSY.one('input[name=\"email\"]').val(KISSY.one('#mt_email').html());
}
if (KISSY.one('input[name=\"mobile\"]')) {
    $('input[name=\"mobile\"]').val(KISSY.one('#mt_tel').html());
}
if (KISSY.one('input[name=\"birthday\"]') && KISSY.one('#mt_birth').html()) {
    KISSY.one('input[name=\"birthday\"]').val(KISSY.one('#mt_birth').html());
}
if (KISSY.one('input[name=\"expectedLocation\"]')) {
    KISSY.one('input[name=\"expectedLocation\"]').val($('.mt_expectcity').html()+$('.mt_expectcity_city').html());
}
if ($('#gender') && $('#mt_sex').html() == '男') {
    document.getElementsByName('gender')[0].checked = true;
}
if ($('#gender') && $('#mt_sex').html() == '女') {
    document.getElementsByName('gender')[1].checked = true;
} 
if (KISSY.one('input[name=\"nationality\"]')) {
    KISSY.one('input[name=\"nationality\"]').val(KISSY.one('#mt_national').html());
}
if (KISSY.one('input[name=\"homeLocation\"]') && KISSY.one('#mt_native_city').html()) {
    KISSY.one('input[name=\"homeLocation\"]').val(KISSY.one('#mt_native_city').html());
}
if (KISSY.one('input[name=\"location\"]')) {
    KISSY.one('input[name=\"location\"]').val(KISSY.one('#mt_livecity_pro').html()+KISSY.one('#mt_livecity_city').html()+KISSY.one('#mt_add').html());
}
if (KISSY.one('input[name=\"currentSalary\"]') && $('.mt_salaryMonth').html()) {
    KISSY.one('input[name=\"currentSalary\"]').val($('.mt_salaryMonth').html());
}
if (KISSY.one('input[name=\"latest_startDate\"]')) {
    KISSY.one('input[name=\"latest_startDate\"]').val($('.mt_startDate').html());
}
if (KISSY.one('input[id=\"latest_endDate_picker\"]') && $('.mt_endDate').html()) {
    KISSY.one('input[id=\"latest_endDate_picker\"]').val($('.mt_endDate').html());
}
if (KISSY.one('input[name=\"latestCompany\"]')) {
    KISSY.one('input[name=\"latestCompany\"]').val($('.mt_companyName').html());
}
if (KISSY.one('input[name=\"jobTitle\"]') && $('.mt_positionName').html()) {
    KISSY.one('input[name=\"jobTitle\"]').val($('.mt_positionName').html());
}
if (KISSY.one('textarea[name=\"responsibility\"]') && $('.mt_workContent .workContent').html()) {
    KISSY.one('textarea[name=\"responsibility\"]').val($('.mt_workContent .workContent').html());
}
//Iducation information

if (KISSY.one('input[name=\"startDate\"]')&& $('.infopledu .mt_startYear').html() ) {
    KISSY.one('input[name=\"startDate\"]').val($('.infopledu .mt_startYear').html())
}
if (KISSY.one('input[id=\"endDate_picker\"]')&& $('.infopledu .mt_endYear').html()) {
    KISSY.one('input[id=\"endDate_picker\"]').val($('.infopledu .mt_endYear').html())
}
if (KISSY.one('input[name=\"major\"]')&& $('.mt_professional').html()) {
    KISSY.one('input[name=\"major\"]').val($('.mt_professional').html())
}
if (KISSY.one('input[name=\"universityName\"]')&& $('.infopledu .mt_schoolName').html()) {
    KISSY.one('input[name=\"universityName\"]').val($('.infopledu .mt_schoolName').html())
}

for (var i = 0; i<7; i++) {
    if ($('.infopledu .mt_education').html()=='海外本科' ) {
        document.getElementsByTagName('option')[18].selected= true;
        break;
    }
    if ($('.infopledu .mt_education').html()=='大学本科-一本'||$('.infopledu .mt_education').html()=='大学本科-二本'|| 
        $('.infopledu .mt_education').html()=='大学本科-三本') {
        document.getElementsByTagName('option')[13].selected= true;
        break;
    }
    if ($('.infopledu .mt_education').html()=='硕士研究生' ) {
        document.getElementsByTagName('option')[15].selected= true;
        break;
    }
    if ($('.infopledu .mt_education').html()=='博士研究生' ) {
        document.getElementsByTagName('option')[17].selected= true;
        break;
    }
    if ($('.infopledu .mt_education').html()=='双学位' ) {
        document.getElementsByTagName('option')[14].selected= true;
        break;
    }
    if ($('.infopledu .mt_degree').html()=='MBA' ) {
        document.getElementsByTagName('option')[16].selected= true;
        break;
    }
    else{
        document.getElementsByTagName('option')[19].selected= true;
        break;
    }
}
