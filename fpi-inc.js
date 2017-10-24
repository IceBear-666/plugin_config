
if(KISSY.one('#jm_qiuck_cover')){KISSY.one('#jm_qiuck_cover').fadeIn();
setTimeout(function(){KISSY.one('#jm_qiuck_cover').fadeOut()},1000)}

if (KISSY.one('input[name=\"username\"]')) {
    KISSY.one('input[name=\"username\"]').val(KISSY.one('#mt_name').html());
}
if (KISSY.one('input[name=\"title\"]')) {
    KISSY.one('input[name=\"title\"]').val(KISSY.one('#mt_name').html());
}

if (document.getElementsByName('sex')&& KISSY.one('#mt_sex').html() == '男') {
    document.getElementsByTagName('input')[6].checked = true;
}
if (document.getElementsByName('sex')&& KISSY.one('#mt_sex').html() == '女') {
    document.getElementsByTagName('input')[7].checked = true;
}

if (KISSY.one('input[name=\"code\"]')&& KISSY.one('#mt_id').html()) {
    KISSY.one('input[name=\"code\"]').val(KISSY.one('#mt_id').html());
}
if (KISSY.one('input[name=\"school\"]') && $('.mt_schoolName').html()) {
    KISSY.one('input[name=\"school\"]').val($('.mt_schoolName').html());
}
if (document.getElementsByName('edu')){
    if ('博士研究生'== KISSY.one('#mt_edu').html() ){
        document.getElementsByTagName('option')[1].selected = true;
    }
    if ('硕士研究生' == KISSY.one('#mt_edu').html() ){
        document.getElementsByTagName('option')[2].selected = true;
    }
    if (KISSY.one('#mt_edu').html()=='大学本科-一本'||KISSY.one('#mt_edu').html()=='大学本科-二本'
            ||KISSY.one('#mt_edu').html()=='大学本科-三本'||KISSY.one('#mt_edu').html()=='海外本科'){
        document.getElementsByTagName('option')[3].selected = true;
    }
    if ('大学专科'== KISSY.one('#mt_edu').html() ){
        document.getElementsByTagName('option')[4].selected = true;
    }
}
if (KISSY.one('input[name=\"email\"]') && KISSY.one('#mt_email').html()) {
    KISSY.one('input[name=\"email\"]').val(KISSY.one('#mt_email').html());
}
if (KISSY.one('input[name=\"mobile\"]') && KISSY.one('#mt_tel').html()) {
    KISSY.one('input[name=\"mobile\"]').val(KISSY.one('#mt_tel').html());
}
if (KISSY.one('input[name=\"birth\"]') && KISSY.one('#mt_birth').html()) {
    KISSY.one('input[name=\"birth\"]').val(KISSY.one('#mt_birth').html());
}

if (KISSY.one('input[name=\"major\"]') && $('.mt_professional').html()) {
    KISSY.one('input[name=\"major\"]').val($('.mt_professional').html());
}
if (KISSY.one('input[name=\"biye\"]') && KISSY.one('#mt_gradutetime').html()) {
    KISSY.one('input[name=\"biye\"]').val(KISSY.one('#mt_gradutetime').html());
}

if (KISSY.one('input[name=\"tel\"]') && KISSY.one('#mt_gudingtel').html()) {
    KISSY.one('input[name=\"tel\"]').val(KISSY.one('#mt_gudingtel').html());
}
if (KISSY.one('input[name=\"addr\"]') && KISSY.one('#mt_livecity_pro').html()) {
    KISSY.one('input[name=\"addr\"]').val(KISSY.one('#mt_livecity_pro').html()+KISSY.one('#mt_livecity_city').html()+KISSY.one('#mt_add').html());
}
if (document.getElementsByName('marriage')&& KISSY.one('#mt_maritalstatus').html() == '已婚') {
    document.getElementsByTagName('input')[18].checked = true;
}
if (document.getElementsByName('marriage')&& KISSY.one('#mt_maritalstatus').html() == '未婚') {
    document.getElementsByTagName('input')[19].checked = true;
}
if (KISSY.one('textarea[name=\"content\"]') && KISSY.one('#mt_selfIntro').html()) {
    KISSY.one('textarea[name=\"content\"]').val(KISSY.one('#mt_selfIntro').html());
}
if (KISSY.one('textarea[name=\"intro\"]') && $('.infoparttimejobs').html()) {
    var language=$('.infoparttimejobs .mt_workList').html();
    for (var i =1; i<$('.infoEnglishSkill').length; i++) {
        language=language+';    '+$('.infoparttimejobs .mt_workList').eq(i).html()
    }

    for (var i =0; i<$('.infofulltimejobs').length; i++) {
        language=language+';    '+$('.infofulltimejobs .mt_workList').eq(i).html()
    }

    KISSY.one('textarea[name=\"intro\"]').val(language);
}







