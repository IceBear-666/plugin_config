if($('#jm_qiuck_cover')){$('#jm_qiuck_cover').fadeIn();
setTimeout(function(){$('#jm_qiuck_cover').fadeOut()},1000)}

if ($('input[id=\"RealName\"]')) {
    $('input[id=\"RealName\"]').val($('#mt_name').html());
}
if ($('input[name=\"ctl00$cont_right$resumebase$bb08ShengG\"]')) {
    $('input[name=\"ctl00$cont_right$resumebase$bb08ShengG\"]').val($('#mt_height').html());
}
if ($('input[name=\"ctl00$cont_right$resumebase$bb09Tiz\"]')) {
    $('input[name=\"ctl00$cont_right$resumebase$bb09Tiz\"]').val($('#mt_weight').html());
}
if ($('input[name=\"ctl00$cont_right$resumebase$bb01Chusrq\"]')) {
    $('input[name=\"ctl00$cont_right$resumebase$bb01Chusrq\"]').val($('#mt_birth').html());
}
if ($('input[name=\"ctl00$cont_right$resumebase$IdCard\"]')) {
    $('input[name=\"ctl00$cont_right$resumebase$IdCard\"]').val($('#mt_id').html());
}
if ($('input[name=\"ctl00$cont_right$resumebase$bb06Jig\"]')) {
    $('input[name=\"ctl00$cont_right$resumebase$bb06Jig\"]').val($('#mt_nativeplace').html());
}
if ($('input[name=\"ctl00$cont_right$resumebase$bb11Hukszd\"]')) {
    $('input[name=\"ctl00$cont_right$resumebase$bb11Hukszd\"]').val($('#mt_hukoucitynow').html()+$('#mt_hukoucitynow_city').html());
}
if ($('input[name=\"ctl00$cont_right$resumebase$bb12Xianzz\"]')) {
    $('input[name=\"ctl00$cont_right$resumebase$bb12Xianzz\"]').val($('#mt_livecity_pro').html()+$('#mt_livecity_city').html()+$('#mt_add').html());
}
if ($('input[name=\"ctl00$cont_right$resumebase$bb13Tec\"]')) {
    $('input[name=\"ctl00$cont_right$resumebase$bb13Tec\"]').val($('.mt_certificateName').html());
}
if ($('input[name=\"ctl00$cont_right$resumebase$bb14Qiwgzdd\"]')) {
    $('input[name=\"ctl00$cont_right$resumebase$bb14Qiwgzdd\"]').val($('#mt_expectcity_city').html());
}
if ($('input[name=\"ctl00$cont_right$resumebase$Email\"]')) {
    $('input[name=\"ctl00$cont_right$resumebase$Email\"]').val($('#mt_email').html());
}
if ($('input[name=\"ctl00$cont_right$resumebase$Mobile\"]')) {
    $('input[name=\"ctl00$cont_right$resumebase$Mobile\"]').val($('#mt_tel').html());
}
if ($('input[name=\"ctl00$cont_right$resumebase$bb17Jiatdh\"]')) {
    $('input[name=\"ctl00$cont_right$resumebase$bb17Jiatdh\"]').val($('#mt_jjlxrtel').html());
}
if ($('input[name=\"ctl00$cont_right$resumebase$bb19Aih\"]')) {
    $('input[name=\"ctl00$cont_right$resumebase$bb19Aih\"]').val($('#mt_skill').html());
}
if ($('textarea[name=\"ctl00$cont_right$resumebase$bx32Gexpj\"]')) {
    $('textarea[name=\"ctl00$cont_right$resumebase$bx32Gexpj\"]').val($('#mt_selfIntro').html());
}
if ($('input[name=\"ctl00$cont_right$resumeotschool$txbst_zypm\"]')&& $('.mt_professionalranking').html()) {
    $('input[name=\"ctl00$cont_right$resumeotschool$txbst_zypm\"]').val($('.mt_professionalranking').html())
}
if ($('input[name=\"ctl00$cont_right$resumeotschool$txbst_zymc\"]')&& $('.infopledu .mt_professional').html()) {
    $('input[name=\"ctl00$cont_right$resumeotschool$txbst_zymc\"]').val($('.infopledu .mt_professional').html())
}

if ($('#mt_maritalstatus').html() == '未婚') {
    document.getElementById('cont_right_resumebase_Marriage_0').checked = true;
}
if ($('#mt_maritalstatus').html() == '已婚') {
    document.getElementById('cont_right_resumebase_Marriage_1').checked = true;
}

if ($('#mt_polistatus').html()=='群众') {
    document.getElementById('cont_right_resumebase_bb04Zhengzmm').options[0].selected = true;
}if ($('#mt_polistatus').html()=='共青团员') {
    document.getElementById('cont_right_resumebase_bb04Zhengzmm').options[1].selected = true;
}if ($('#mt_polistatus').html()=='中共党员') {
    document.getElementById('cont_right_resumebase_bb04Zhengzmm').options[2].selected = true;
}if ($('#mt_polistatus').html()=='其他') {
    document.getElementById('cont_right_resumebase_bb04Zhengzmm').options[3].selected = true;
}

if ($('#cont_right_resumebase_bb03Minz')){
    for (var i =1; i <= 56; i++) {
        if (document.getElementById('cont_right_resumebase_bb03Minz').options[i].text == $('#mt_nation').html() ){
            document.getElementById('cont_right_resumebase_bb03Minz').options[i].selected = true;
        }
    }
}