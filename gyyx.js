if(KISSY.one('#jm_qiuck_cover')){KISSY.one('#jm_qiuck_cover').fadeIn();
setTimeout(function(){KISSY.one('#jm_qiuck_cover').fadeOut()},1000)}

if (KISSY.one('input[name=\"name\"]')&& KISSY.one('#mt_name').html()) {
    KISSY.one('input[name=\"name\"]').val(KISSY.one('#mt_name').html());
}
if (document.getElementsByName('sex') && KISSY.one('#mt_sex').html() == '男') {
    document.getElementsByTagName('option')[0].selected = true;
}
if (document.getElementsByName('sex') && KISSY.one('#mt_sex').html() == '女') {
    document.getElementsByTagName('option')[1].selected = true;
}
if (KISSY.one('#birth') && KISSY.one('#mt_birth').html()) {
    KISSY.one('#birth').val(KISSY.one('#mt_birth').html());
}
if (KISSY.one('textarea[name=\"speciality\"]')&& KISSY.one('#mt_skill').html()) {
    KISSY.one('textarea[name=\"speciality\"]').val('特长: '+KISSY.one('#mt_skill').html()+'  技能: '+KISSY.one('#mt_hobbies').html());
}
var a=true;
if (document.getElementsByName('highEducation')){
    if (KISSY.one('#mt_edu').html() =='大学本科-一本'||KISSY.one('#mt_edu').html() =='大学本科-二本'
        ||$('#mt_edu').html() =='大学本科-三本'||KISSY.one('#mt_edu').html() =='海外本科'){
        document.getElementsByTagName('option')[2].selected = true;
    }
    if (KISSY.one('#mt_edu').html()=='硕士研究生'){
        document.getElementsByTagName('option')[3].selected = true;
    }
    if (KISSY.one('#mt_edu').html()=='博士研究生'){
        document.getElementsByTagName('option')[4].selected = true;
    }
    if (KISSY.one('#mt_edu').html()=='大学专科'){
        document.getElementsByTagName('option')[5].selected = true;
    }
    a=false;
}
if (document.getElementsByName('highEducation')&& a ){
    document.getElementsByTagName('option')[6].selected = true;
}
if (KISSY.one('input[name=\"finishSchool\"]')&& $('.mt_schoolName').html()) {
    KISSY.one('input[name=\"finishSchool\"]').val($('.mt_schoolName').html());
}
if (KISSY.one('input[name=\"major\"]')&& $('.mt_professional').html()) {
    KISSY.one('input[name=\"major\"]').val($('.mt_professional').html());
}

if (document.getElementsByName('joinSchoolWay')){
    if (KISSY.one('#mt_edutype').html()=='全日制统分统招'){
        document.getElementsByTagName('option')[7].selected = true;
    }
    if (KISSY.one('#mt_edutype').html()=='自费'){
        document.getElementsByTagName('option')[8].selected = true;
    }
    if (KISSY.one('#mt_edutype').html()=='成人教育'){
        document.getElementsByTagName('option')[9].selected = true;
    }
    if (KISSY.one('#mt_edutype').html()=='海外留学'){
        document.getElementsByTagName('option')[10].selected = true;
    }
}
if (KISSY.one('input[name=\"finishTime\"]')&& KISSY.one('#mt_gradutetime').html()) {
    KISSY.one('input[name=\"finishTime\"]').val(KISSY.one('#mt_gradutetime').html()+'-01');
}
if (KISSY.one('input[name=\"email\"]')&& KISSY.one('#mt_email').html()) {
    KISSY.one('input[name=\"email\"]').val(KISSY.one('#mt_email').html());
}
if (KISSY.one('input[name=\"phoneNumber\"]')&& KISSY.one('#mt_tel').html()) {
    KISSY.one('input[name=\"phoneNumber\"]').val(KISSY.one('#mt_tel').html());
}
if (document.getElementById('homeName')){
    for (var i =1; i <= 70; i++) {
        if (document.getElementById('homeName').options[i].text == KISSY.one('#mt_nativeplace').html() ){
            document.getElementById('homeName').options[i].selected = true;
            break;
        }
        if (document.getElementById('homeName').options[i].text == KISSY.one('#mt_nativeplace').html()+'省' ){
            document.getElementById('homeName').options[i].selected = true;
            break;
        }
    }
}
if (KISSY.one('input[name=\"nativePlaceDetail\"]')&& $('#mt_native_city').html()) {
    KISSY.one('input[name=\"nativePlaceDetail\"]').val($('#mt_native_city').html());
}

if (document.getElementById('homeNow')){
    for (var i =1; i <= 70; i++) {
        if (document.getElementById('homeNow').options[i].text == KISSY.one('#mt_livecity_pro').html() ){
            document.getElementById('homeNow').options[i].selected = true;
            break;
        }
        if (document.getElementById('homeNow').options[i].text == KISSY.one('#mt_livecity_pro').html()+'省' ){
            document.getElementById('homeNow').options[i].selected = true;
            break;
        }
    }
}
if (KISSY.one('input[name=\"addressDetail\"]')&& KISSY.one('#mt_livecity_city').html()) {
    KISSY.one('input[name=\"addressDetail\"]').val(KISSY.one('#mt_livecity_city').html()+KISSY.one('#mt_add').html());
}

if (KISSY.one('textarea[name=\"speciality\"]')&& KISSY.one('#mt_skill').html()) {
    KISSY.one('textarea[name=\"speciality\"]').val('特长: '+KISSY.one('#mt_skill').html()+'  技能: '+KISSY.one('#mt_hobbies').html());
}

//培训经历
if (KISSY.one('input[name=\"receiveCert\"]')) {
    if (KISSY.one('input[name=\"organization\"]')&& $('.infotraining .mt_trainingCompany').html()) {
        KISSY.one('input[name=\"organization\"]').val($('.infotraining .mt_trainingCompany').html());
    }
    if (KISSY.one('input[name=\"startTime\"]')&& $('.infotraining .mt_startDate').html()) {
        KISSY.one('input[name=\"startTime\"]').val($('.infotraining .mt_startDate').html());
    }
    if (KISSY.one('input[name=\"endTime\"]')&& $('.infotraining .mt_endDate').html()) {
        KISSY.one('input[name=\"endTime\"]').val($('.infotraining .mt_endDate').html());
    }
    if (KISSY.one('input[name=\"jobName\"]')&& $('.infotraining .mt_trainingName').html()) {
        KISSY.one('input[name=\"jobName\"]').val($('.infotraining .mt_trainingName').html());
    }
    if (KISSY.one('input[name=\"receiveCert\"]')&& $('.infotraining .mt_certificateName').html()) {
        KISSY.one('input[name=\"receiveCert\"]').val($('.infotraining .mt_certificateName').html());
    }
    if (KISSY.one('textarea[name=\"content\"]')&& $('.infotraining .mt_trainingDes').html()) {
        KISSY.one('textarea[name=\"content\"]').val($('.infotraining .mt_trainingDes').html());
    }
}

//实习经历
if (!KISSY.one('input[name=\"receiveCert\"]') && !KISSY.one('input[name=\"name\"]')) {
    if (KISSY.one('input[name=\"commpanyName\"]')&& $('.infoparttimejobs .mt_companyName').html()) {
        KISSY.one('input[name=\"commpanyName\"]').val($('.infoparttimejobs .mt_companyName').html());
    }
    if (KISSY.one('input[name=\"startTime\"]')&& $('.infoparttimejobs .mt_startDate').html()) {
        KISSY.one('input[name=\"startTime\"]').val($('.infoparttimejobs .mt_startDate').html());
    }
    if (KISSY.one('input[name=\"endTime\"]')&& $('.infoparttimejobs .mt_endDate').html()) {
        KISSY.one('input[name=\"endTime\"]').val($('.infoparttimejobs .mt_endDate').html());
    }

    if (document.getElementById('firms') && $('.infoparttimejobs .mt_companyCat').html()){
        if ($('.infoparttimejobs .mt_companyCat').html()=='互联网/游戏/软件'){
            document.getElementById('firms').options[1].selected = true;
        }
        if ($('.infoparttimejobs .mt_companyCat').html()=='金融'){
            document.getElementById('firms').options[2].selected = true;
        }
        if ($('.infoparttimejobs .mt_companyCat').html()=='房地产/建筑/物业美'){
            document.getElementById('firms').options[3].selected = true;
        }
        if ($('.infoparttimejobs .mt_companyCat').html()=='广告/媒体/教育/文化'){
            document.getElementById('firms').options[6].selected = true;
        }
        if ($('.infoparttimejobs .mt_companyCat').html()=='汽车/机械/制造'){
            document.getElementById('firms').options[7].selected = true;
        }
        if ($('.infoparttimejobs .mt_companyCat').html()=='交通/贸易/物流'){
            document.getElementById('firms').options[8].selected = true;
        }
        if ($('.infoparttimejobs .mt_companyCat').html()=='服务/外包/中介'){
            document.getElementById('firms').options[9].selected = true;
        }
        if ($('.infoparttimejobs .mt_companyCat').html()=='能源/化工/环保'){
            document.getElementById('firms').options[11].selected = true;
        }
        if ($('.infoparttimejobs .mt_companyCat').html()=='政府/公共事业/非营利机构'){
            document.getElementById('firms').options[12].selected = true;
        }
        if (document.getElementById('firms').options[0].selected ){
            document.getElementById('firms').options[15].selected = true;
        }
    }
    if (KISSY.one('input[name=\"jobName\"]')&& $('.infoparttimejobs .mt_positionName').html()) {
        KISSY.one('input[name=\"jobName\"]').val($('.infoparttimejobs .mt_positionName').html());
    }
    if (KISSY.one('textarea[name=\"content\"]')&& $('.infoparttimejobs .mt_workContent').html()) {
        KISSY.one('textarea[name=\"content\"]').val($('.infoparttimejobs .mt_workContent .workContent').html());
    }
}


