if ($('#jm_qiuck_cover')) {
    $('#jm_qiuck_cover').fadeIn();
    setTimeout(function() {
        $('#jm_qiuck_cover').fadeOut()
    }, 1000)
}
var event = document.createEvent('HTMLEvents');
event.initEvent('change', true, false);

function addZero(date) {
    date = date.split('-');
    for (var i in date) {
        date[i] = date[i] < 10 ? '0' + date[i] : date[i];
    }
    return date.join('-');
}
function selectFac(content, obj) {
    if (content && obj.length) {
        var opt = obj.get(0).options;
        for (var i in opt) {
            if (content.indexOf(opt[i].innerHTML) != -1) {
                opt[i].selected = true;
                break;
            }
        }
    }
}
function selectFaccc(content, obj) {
    if (content && obj.length) {
        var opt = obj.options;
        for(var i=1;i<opt.length;i++){
            if (content.indexOf(opt[i].value) != -1) {
                opt[i].selected = true;
                break;
            }
        }
    }
}

if ($('#person_info_name').length) {
    $('#person_info_name').val($('#mt_name').html())
}
if ($('#person_info_gender').length && $('#mt_sex').html() && $('#mt_sex').html() == 'Ů') {
    $('#person_info_gender').prev().find('div').eq(4).click()
}
if ($('#person_info_gender').length && $('#mt_sex').html() && $('#mt_sex').html() == '��') {
    $('#person_info_gender').prev().find('div').eq(3).click()
}
if ($('textarea[name=\"filed_204\"]').length && $.trim($('#person_info_filed_204').parent().prev().text()) == '���֤��ַ') {
    $('textarea[name=\"filed_204\"]').val($('#mt_hukoucitynow').html() + $('#mt_hukoucitynow_city').html())
}
if ($('textarea[name=\"filed_213\"]').length && $('#mt_skill').html() && $.trim($('textarea[name=\"filed_213\"]').parent().prev().text()) == '�����س�') {
    $('textarea[name=\"filed_213\"]').val($('#mt_skill').html())
}
if ($('input[name=\"birth\"]').length && $('#mt_birth').html()) {
    var birth = $('#mt_birth').html().split('-');
    for (var i in birth) {
        if (birth[i].length < 2) {
            birth[i] = '0' + birth[i]
        }
        var birthr = birth.join('-')
    }
    $('input[name=\"birth\"]').val(birthr)
}
if ($('#person_info_nation').length && $('#mt_nation').html()) {
    var sigNation = $('#person_info_nation').prev().find('.selectList div');
    var mt_nation = $('#mt_nation').html();
    for (var i = 0; i < sigNation.length; i++) {
        if (sigNation.eq(i).html() == mt_nation) {
            sigNation.eq(i).click();
            break
        }
    }
}
if ($('#person_info_filed_203').length && $('#mt_national').html() && $.trim($('#person_info_filed_203').parent().prev().text()) == '����') {
    var sigNation = $('#person_info_filed_203').prev().find('.selectList div');
    var mt_nation = $('#mt_national').html();
    for (var i = 0; i < sigNation.length; i++) {
        if (sigNation.eq(i).html() == mt_nation) {
            sigNation.eq(i).click();
            break
        }
    }
}
if ($('#person_info_native_place').length) {
    $('#person_info_native_place').val($('#mt_nativeplace').html() + $('#mt_native_city').html())
}
if ($('#person_info_graduation_date').length && $('#mt_gradutetime').html()) {
    if ($('#mt_gradutetime').html().length < 7) {
        $('#person_info_graduation_date').val($('#mt_gradutetime').html().split('-').join('-0') + '-01')
    } else {
        $('#person_info_graduation_date').val($('#mt_gradutetime').html() + '-01')
    }
}
if ($('#person_info_id_card_type').length && $('#mt_idtype').html()) {
    var sigNation = $('#person_info_id_card_type').prev().find('.selectList div');
    if ($('#mt_idtype').html() == '���֤') {
        sigNation.eq(1).click()
    } else {
        sigNation.eq(2).click()
    }
    if ($('#person_info_id_card').length) {
        $('#person_info_id_card').val($('#mt_id').html())
    }
}
if ($('#person_info_filed_200').length && $.trim($('#person_info_filed_200').parent().prev().text()) != 'Ӣ����' && $.trim($('#person_info_filed_200').parent().prev().text()) != '����') {
    $('#person_info_filed_200').val($('#mt_add').html())
}
if ($('#contact_info_address').length) {
    $('#contact_info_address').val($('#mt_add').html())
}
if ($('input[name=\"mobile_number\"]').length) {
    $('input[name=\"mobile_number\"]').val($('#mt_tel').html())
}
if ($('#contact_info_email').length) {
    $('#contact_info_email').val($('#mt_email').html())
}
if ($('input[name=\"emergency_number\"]').length) {
    $('input[name=\"emergency_number\"]').val($('#mt_jjlxrtel').html())
}
if ($('#contact_info_filed_201').length) {
    $('#contact_info_filed_201').val($('#mt_qqname').html())
}
for (var i = 0; i < $('.infopledu').length; i++) {
    if ($('select[name=\"education_degree\"]').eq(i).length && $('.infopledu .mt_education').eq(i).html()) {
        if ($('.infopledu .mt_education').eq(i).html() == '˶ʿ�о���') {
            $('select[name=\"education_degree\"]').eq(i).prev().find('.selectList div').eq(3).click()
        } else if ($('.infopledu .mt_education').eq(i).html() == '��ʿ�о���') {
            $('select[name=\"education_degree\"]').eq(i).prev().find('.selectList div').eq(1).click()
        } else if ($('.infopledu .mt_education').eq(i).html() == 'MBA') {
            $('select[name=\"education_degree\"]').eq(i).prev().find('.selectList div').eq(2).click()
        } else if ($('.infopledu .mt_education').eq(i).html() == '��ѧר��') {
            $('select[name=\"education_degree\"]').eq(i).prev().find('.selectList div').eq(5).click()
        } else if (($('.infopledu .mt_education').eq(i).html() == '��ѧ����-һ��' || $('.infopledu .mt_education').eq(i).html() == '��ѧ����-����' || $('.infopledu .mt_education').eq(i).html() == '��ѧ����-����' || $('.infopledu .mt_education').eq(i).html() == '���Ȿ��')) {
            $('select[name=\"education_degree\"]').eq(i).prev().find('.selectList div').eq(4).click()
        } else {
            $('select[name=\"education_degree\"]').eq(i).prev().find('.selectList div').eq(9).click()
        }
    }
    if ($('select[name=\"filed_206\"]').eq(i).length && $('.infopledu .mt_education').eq(i).html()) {
        if ($('.infopledu .mt_education').eq(i).html() == '˶ʿ�о���') {
            $('select[name=\"filed_206\"]').eq(i).prev().find('.selectList div').eq(2).click()
        } else if ($('.infopledu .mt_education').eq(i).html() == '��ʿ�о���') {
            $('select[name=\"filed_206\"]').eq(i).prev().find('.selectList div').eq(1).click()
        } else if (($('.infopledu .mt_education').eq(i).html() == '��ѧ����-һ��' || $('.infopledu .mt_education').eq(i).html() == '��ѧ����-����' || $('.infopledu .mt_education').eq(i).html() == '��ѧ����-����' || $('.infopledu .mt_education').eq(i).html() == '���Ȿ��')) {
            $('select[name=\"filed_206\"]').eq(i).prev().find('.selectList div').eq(3).click()
        }
    }
    if ($('input[name=\"college_name\"]').eq(i).length && $('.infopledu .mt_academy').eq(i).html()) {
        $('input[name=\"college_name\"]').eq(i).val($('.infopledu .mt_academy').eq(i).html())
    }
    if ($('input[name=\"main_course\"]').eq(i).length && $('.infopledu .mt_major').eq(i).html()) {
        $('input[name=\"main_course\"]').eq(i).val($('.infopledu .mt_major').eq(i).html())
    }
    if ($('textarea[name=\"filed_224\"]').eq(i).length && $('.infopledu .mt_major').eq(i).html() && $.trim($('#education_experience_filed_224').parent().prev().text()) == '���޿γ�') {
        $('textarea[name=\"filed_224\"]').eq(i).val($('.infopledu .mt_major').eq(i).html())
    }
    if ($('textarea[name=\"filed_213\"]').eq(i).length && $('.infopledu .mt_major').eq(i).html() && $.trim($('#education_experience_filed_213').parent().prev().text()) == '���޿γ�') {
        $('textarea[name=\"filed_213\"]').eq(i).val($('.infopledu .mt_major').eq(i).html())
    }
    if ($('input[name=\"major_name\"]').eq(i).length && $('.infopledu .mt_professional').eq(i).html()) {
        $('input[name=\"major_name\"]').eq(i).val($('.infopledu .mt_professional').eq(i).html())
    }
    if ($('input[name=\"filed_234\"]').eq(i).length && $('.infopledu .mt_classranking').eq(i).html() && $.trim($('input[name=\"filed_234\"]').parent().prev().text()) != '���������' && $.trim($('input[name=\"filed_234\"]').parent().prev().text()).substring(0, 7) != 'ְҵ/����֤��') {
        $('input[name=\"filed_234\"]').eq(i).val($('.infopledu .mt_classranking').eq(i).html())
    }
    if ($('select[name=\"education_level\"]').eq(i).length && $('.infopledu .mt_degree').eq(i).html()) {
        if ($('.infopledu .mt_degree').eq(i).html() == '˶ʿ') {
            $('select[name=\"education_level\"]').eq(i).prev().find('.selectList div').eq(3).click()
        } else if ($('.infopledu .mt_degree').eq(i).html() == '��ʿ') {
            $('select[name=\"education_level\"]').eq(i).prev().find('.selectList div').eq(1).click()
        } else if ($('.infopledu .mt_degree').eq(i).html() == 'MBA') {
            $('select[name=\"education_level\"]').eq(i).prev().find('.selectList div').eq(2).click()
        } else if ($('.infopledu .mt_degree').eq(i).html() == 'ѧʿ') {
            $('select[name=\"education_level\"]').eq(i).prev().find('.selectList div').eq(5).click()
        } else if ($('.infopledu .mt_degree').eq(i).html() == '˫ѧʿ') {
            $('select[name=\"education_level\"]').eq(i).prev().find('.selectList div').eq(4).click()
        } else if ($('.infopledu .mt_degree').eq(i).html() == '��') {
            $('select[name=\"education_level\"]').eq(i).prev().find('.selectList div').eq(7).click()
        } else {
            $('select[name=\"education_level\"]').eq(i).prev().find('.selectList div').eq(6).click()
        }
    }
    if ($('select[name=\"filed_205\"]').eq(i).length && $('.infopledu .mt_degree').eq(i).html()) {
        if ($('.infopledu .mt_degree').eq(i).html() == '˶ʿ') {
            $('select[name=\"filed_205\"]').eq(i).prev().find('.selectList div').eq(2).click()
        } else if ($('.infopledu .mt_degree').eq(i).html() == '��ʿ') {
            $('select[name=\"filed_205\"]').eq(i).prev().find('.selectList div').eq(1).click()
        } else if ($('.infopledu .mt_degree').eq(i).html() == 'ѧʿ') {
            $('select[name=\"filed_205\"]').eq(i).prev().find('.selectList div').eq(4).click()
        } else if ($('.infopledu .mt_degree').eq(i).html() == '˫ѧʿ') {
            $('select[name=\"filed_205\"]').eq(i).prev().find('.selectList div').eq(3).click()
        }
    }
    if ($('input[name=\"edu_date_start\"]').eq(i) && $('.infopledu .mt_startYear').eq(i).html()) {
        if ($('.infopledu .mt_startYear').eq(i).html().length < 7) {
            $('input[name=\"edu_date_start\"]').eq(i).val($('.infopledu .mt_startYear').eq(i).html().split('-').join('-0') + '-01')
        } else {
            $('input[name=\"edu_date_start\"]').eq(i).val($('.infopledu .mt_startYear').eq(i).html() + '-01')
        }
    }
    if ($('input[name=\"edu_date_end\"]').eq(i) && $('.infopledu .mt_endYear').eq(i).html()) {
        if ($('.infopledu .mt_endYear').eq(i).html().length < 7) {
            $('input[name=\"edu_date_end\"]').eq(i).val($('.infopledu .mt_endYear').eq(i).html().split('-').join('-0') + '-01')
        } else {
            $('input[name=\"edu_date_end\"]').eq(i).val($('.infopledu .mt_endYear').eq(i).html() + '-01')
        }
    }
    if ($('input[name=\"filed_216\"]').eq(i) && $('.infopledu .mt_endYear').eq(i).html() && $.trim($('input[name=\"filed_216\"]').parent().prev().text()).substring(0, 4) != 'רҵ����') {
        if ($('.infopledu .mt_endYear').eq(i).html().length < 7) {
            $('input[name=\"filed_216\"]').eq(i).val($('.infopledu .mt_endYear').eq(i).html().split('-').join('-0') + '-01')
        } else {
            $('input[name=\"filed_216\"]').eq(i).val($('.infopledu .mt_endYear').eq(i).html() + '-01')
        }
    }
    if ($('input[name=\"filed_216\"]').eq(i) && $('.infopledu .mt_major').eq(i).html() && $.trim($('input[name=\"filed_216\"]').parent().prev().text()).substring(0, 4) == 'רҵ����') {
        $('input[name=\"filed_216\"]').eq(i).val($('.infopledu .mt_major').eq(i).html())
    }
    if ($('input[name=\"school_name\"]').eq(i).length && $('.infopledu .mt_schoolName').eq(i).html()) {
        $('input[name=\"school_name\"]').eq(i).val($('.infopledu .mt_schoolName').eq(i).html())
    }
    if ($('select[name=\"grade_rank\"]').eq(i).length && $('.infopledu .mt_professionalranking').eq(i).html()) {
        if ($('.infopledu .mt_professionalranking').eq(i).html() == 'ǰ5%') {
            $('select[name=\"grade_rank\"]').eq(i).prev().find('.selectList div').eq(1).click()
        } else if ($('.infopledu .mt_professionalranking').eq(i).html() == 'ǰ10%') {
            $('select[name=\"grade_rank\"]').eq(i).prev().find('.selectList div').eq(2).click()
        } else if ($('.infopledu .mt_professionalranking').eq(i).html() == 'ǰ20%') {
            $('select[name=\"grade_rank\"]').eq(i).prev().find('.selectList div').eq(3).click()
        } else if ($('.infopledu .mt_professionalranking').eq(i).html() == 'ǰ30%') {
            $('select[name=\"grade_rank\"]').eq(i).prev().find('.selectList div').eq(4).click()
        } else {
            $('select[name=\"grade_rank\"]').eq(i).prev().find('.selectList div').eq(5).click()
        }
    }
    if ($('select[name=\"filed_215\"]').eq(i).length && $('.infopledu .mt_professionalranking').eq(i).html()) {
        if ($('.infopledu .mt_professionalranking').eq(i).html() == 'ǰ5%') {
            $('select[name=\"filed_215\"]').eq(i).prev().find('.selectList div').eq(1).click()
        } else if ($('.infopledu .mt_professionalranking').eq(i).html() == 'ǰ10%') {
            $('select[name=\"filed_215\"]').eq(i).prev().find('.selectList div').eq(2).click()
        } else if ($('.infopledu .mt_professionalranking').eq(i).html() == 'ǰ20%') {
            $('select[name=\"filed_215\"]').eq(i).prev().find('.selectList div').eq(3).click()
        } else {
            $('select[name=\"filed_215\"]').eq(i).prev().find('.selectList div').eq(4).click()
        }
    }
    if ($('select[name=\"filed_219\"]').eq(i).length && $('.infopledu .mt_professionalranking').eq(i).html() && $.trim($('select[name=\"filed_219\"]').parent().prev().text()).substring(0, 6) == 'ѧϰ�ɼ�����') {
        if ($('.infopledu .mt_professionalranking').eq(i).html() == 'ǰ5%') {
            $('select[name=\"filed_219\"]').eq(i).prev().find('.selectList div').eq(1).click()
        } else if ($('.infopledu .mt_professionalranking').eq(i).html() == 'ǰ10%') {
            $('select[name=\"filed_219\"]').eq(i).prev().find('.selectList div').eq(2).click()
        } else if ($('.infopledu .mt_professionalranking').eq(i).html() == 'ǰ20%') {
            $('select[name=\"filed_219\"]').eq(i).prev().find('.selectList div').eq(3).click()
        } else if ($('.infopledu .mt_professionalranking').eq(i).html() == 'ǰ30%') {
            $('select[name=\"filed_219\"]').eq(i).prev().find('.selectList div').eq(4).click()
        } else if ($('.infopledu .mt_professionalranking').eq(i).html() == 'ǰ40%' || $('.infopledu .mt_professionalranking').eq(i).html() == 'ǰ50%') {
            $('select[name=\"filed_219\"]').eq(i).prev().find('.selectList div').eq(5).click()
        } else {
            $('select[name=\"filed_219\"]').eq(i).prev().find('.selectList div').eq(6).click()
        }
    }
}
for (var i = 0; i < $('#project_experience .j_project_date_start').length - 1; i++) {
    if ($('input[name=\"project_name\"]').eq(i).length && $('.infoproject .mt_projectName').eq(i).html()) {
        $('input[name=\"project_name\"]').eq(i).val($('.infoproject .mt_projectName').eq(i).html())
    }
    if ($('input[name=\"project_date_start\"]').eq(i) && $('.infoproject .mt_prostarttime').eq(i).html()) {
        if ($('.infoproject .mt_prostarttime').eq(i).html().length < 7) {
            $('input[name=\"project_date_start\"]').eq(i).val($('.infoproject .mt_prostarttime').eq(i).html().split('-').join('-0') + '-01')
        } else {
            $('input[name=\"project_date_start\"]').eq(i).val($('.infoproject .mt_prostarttime').eq(i).html() + '-01')
        }
    }
    if ($('input[name=\"project_date_end\"]').eq(i) && $('.infoproject .mt_proendtime').eq(i).html()) {
        if ($('.infoproject .mt_proendtime').eq(i).html().length < 7) {
            $('input[name=\"project_date_end\"]').eq(i).val($('.infoproject .mt_proendtime').eq(i).html().split('-').join('-0') + '-01')
        } else {
            $('input[name=\"project_date_end\"]').eq(i).val($('.infoproject .mt_proendtime').eq(i).html() + '-01')
        }
    }
    if ($('input[name=\"filed_207\"]').eq(i).length && $('.infoproject .mt_projectNumber').eq(i).html()) {
        $('input[name=\"filed_207\"]').eq(i).val($('.infoproject .mt_projectNumber').eq(i).html())
    }
    if ($('input[name=\"project_title\"]').eq(i).length && $('.infoproject .mt_positionName').eq(i).html()) {
        $('input[name=\"project_title\"]').eq(i).val($('.infoproject .mt_positionName').eq(i).html())
    }
    if ($('input[name=\"responsibility\"]').eq(i).length && $('.infoproject .mt_projectDuty').eq(i).html()) {
        $('input[name=\"responsibility\"]').eq(i).val($('.infoproject .mt_projectDuty').eq(i).html())
    }
    if ($('textarea[name=\"description\"]').eq(i).length && $('.infoproject .mt_projectRemark').eq(i).html()) {
        $('textarea[name=\"description\"]').eq(i).val($('.infoproject .mt_projectRemark').eq(i).html())
    }
}
if ($('textarea[name=\"duty_description\"]').length && $('.infoschoolclub .mt_schClubName').html()) {
    var allactive = [];
    for (var i = 0; i < $('.infoschoolclub').length; i++) {
        var active = $('.infoschoolclub .mt_startDateDot').eq(i).html() + '-' + $('.infoschoolclub .mt_endDateDot').eq(i).html() + '\\n' + $('.infoschoolclub .mt_schClubName').eq(i).html() + '\\n' + $('.infoschoolclub .mt_positionName').eq(i).html() + '\\n' + $('.infoschoolclub .mt_workDes').eq(i).html() + '\\n';
        allactive.push(active)
    }
    $('textarea[name=\"duty_description\"]').val(allactive)
}
if ($('textarea[name=\"filed_225\"]').length && $('.infoschoolclub .mt_schClubName').html() && $.trim($('textarea[name=\"filed_225\"]').parent().prev().text()) == 'У�ڻ/ְ������') {
    var allactive = [];
    for (var i = 0; i < $('.infoschoolclub').length; i++) {
        var active = $('.infoschoolclub .mt_startDateDot').eq(i).html() + '-' + $('.infoschoolclub .mt_endDateDot').eq(i).html() + '\\n' + $('.infoschoolclub .mt_schClubName').eq(i).html() + '\\n' + $('.infoschoolclub .mt_positionName').eq(i).html() + '\\n' + $('.infoschoolclub .mt_workDes').eq(i).html() + '\\n';
        allactive.push(active)
    }
    $('textarea[name=\"filed_225\"]').val(allactive)
}
if ($('textarea[name=\"awards\"]').length && $('.infoschaward .mt_awardsName').html()) {
    var allaward = [];
    for (var i = 0; i < $('.infoschaward').length; i++) {
        var award = $('.infoschaward .mt_awardsDate').eq(i).html() + '\\n' + $('.infoschaward .mt_awardsName').eq(i).html() + '\\n' + $('.infoschaward .mt_awardsType').eq(i).html() + '\\n' + $('.infoschaward .mt_awardsLevel').eq(i).html() + '\\n';
        allaward.push(award)
    }
    $('textarea[name=\"awards\"]').val(allaward)
}
if ($('textarea[name=\"filed_226\"]').length && $('.infoschaward .mt_awardsName').html() && $.trim($('textarea[name=\"filed_226\"]').parent().prev().text()) == '�ܵ�����������') {
    var allaward = [];
    for (var i = 0; i < $('.infoschaward').length; i++) {
        var award = $('.infoschaward .mt_awardsDate').eq(i).html() + '\\n' + $('.infoschaward .mt_awardsName').eq(i).html() + '\\n' + $('.infoschaward .mt_awardsType').eq(i).html() + '\\n' + $('.infoschaward .mt_awardsLevel').eq(i).html() + '\\n';
        allaward.push(award)
    }
    $('textarea[name=\"filed_226\"]').val(allaward)
}
if ($('textarea[name=\"professional_award\"]').length && $('.infoplcerti .mt_certificateName').html()) {
    var allplcerti = [];
    for (var i = 0; i < $('.infoplcerti').length; i++) {
        var plcerti = $('.infoplcerti .mt_getDate').eq(i).html() + '\\n' + $('.infoplcerti .mt_certificateName').eq(i).html() + '\\n' + $('.infoplcerti .mt_certificateDes').eq(i).html() + '\\n' + $('.infoplcerti .mt_issuing').eq(i).html() + '\\n';
        allplcerti.push(plcerti)
    }
    $('textarea[name=\"professional_award\"]').val(allplcerti)
}
for (var i = 0; i < $('.infoparttimejobs').length; i++) {
    if ($('input[name=\"company_name\"]').eq(i).length && $('.infoparttimejobs .mt_companyName').eq(i).html()) {
        $('input[name=\"company_name\"]').eq(i).val($('.infoparttimejobs .mt_companyName').eq(i).html())
    }
    if ($('input[name=\"filed_201\"]').eq(i).length && $('.infoparttimejobs .mt_companyName').eq(i).html()) {
        $('input[name=\"filed_201\"]').eq(i).val($('.infoparttimejobs .mt_companyName').eq(i).html())
    }
    if ($('input[name=\"filed_204\"]').eq(i).length && $.trim($('#work_ecperience_filed_204').parent().prev().text()) == 'ʵϰ��λ') {
        $('input[name=\"filed_204\"]').eq(i).val($('.infoparttimejobs .mt_companyName').eq(i).html())
    }
    if ($('input[name=\"filed_205\"]').eq(i).length && $.trim($('#work_ecperience_filed_205').parent().prev().text()) == 'ְλ') {
        $('input[name=\"filed_205\"]').eq(i).val($('.infoparttimejobs .mt_positionName').eq(i).html())
    }
    if ($('input[name=\"filed_227\"]').eq(i).length && $.trim($('#work_ecperience_filed_227').parent().prev().text()) == '������ʵϰ�����ż���λ/ְ��') {
        $('input[name=\"filed_227\"]').eq(i).val($('.infoparttimejobs .mt_positionName').eq(i).html())
    }
    if ($('select[name=\"job_type\"]').eq(i).length && $('.mt_workcat').eq(i).html() == 'ʵϰ') {
        $('select[name=\"job_type\"]').eq(i).prev().find('.selectList div').eq(3).click()
    }
    if ($('input[name=\"job_title\"]').eq(i).length && $('.infoparttimejobs .mt_positionName').eq(i).html()) {
        $('input[name=\"job_title\"]').eq(i).val($('.infoparttimejobs .mt_positionName').eq(i).html())
    }
    if ($('input[name=\"filed_220\"]').eq(i).length && $('.infoparttimejobs .mt_department').eq(i).html() && $.trim($('input[name=\"filed_220\"]').parent().prev().text()).substring(0, 4) == 'ʵϰ����') {
        $('input[name=\"filed_220\"]').eq(i).val($('.infoparttimejobs .mt_department').eq(i).html())
    }
    if ($('input[name=\"filed_206\"]').eq(i).length && $('.infoparttimejobs .mt_department').eq(i).html() && $.trim($('input[name=\"filed_206\"]').parent().prev().text()).substring(0, 4) == '���ڲ���') {
        $('input[name=\"filed_206\"]').eq(i).val($('.infoparttimejobs .mt_department').eq(i).html())
    }
    if ($('input[name=\"filed_205\"]').eq(i).length && $('.infoparttimejobs .mt_companyCat').eq(i).html() && $.trim($('input[name=\"filed_205\"]').parent().prev().text()).substring(0, 4) == '������ҵ') {
        $('input[name=\"filed_205\"]').eq(i).val($('.infoparttimejobs .mt_companyCat').eq(i).html())
    }
    if ($('input[name=\"filed_229\"]').eq(i).length && $.trim($('#work_ecperience_filed_229').parent().prev().text()) == '֤��������') {
        $('input[name=\"filed_229\"]').eq(i).val($('.infoparttimejobs .mt_reterenceName').eq(i).html())
    }
    if ($('input[name=\"filed_230\"]').eq(i).length && $.trim($('#work_ecperience_filed_230').parent().prev().text()) == '��֤���˹�ϵ') {
        $('input[name=\"filed_230\"]').eq(i).val($('.infoparttimejobs .mt_reterenceRelation').eq(i).html())
    }
    if ($('input[name=\"filed_231\"]').eq(i).length && $.trim($('#work_ecperience_filed_231').parent().prev().text()) == '֤���˹�����λ') {
        $('input[name=\"filed_231\"]').eq(i).val($('.infoparttimejobs .mt_reterenceCompany').eq(i).html())
    }
    if ($('input[name=\"filed_232\"]').eq(i).length && $.trim($('#work_ecperience_filed_232').parent().prev().text()) == '֤����ְλ') {
        $('input[name=\"filed_232\"]').eq(i).val($('.infoparttimejobs .mt_reterencePosition').eq(i).html())
    }
    if ($('input[name=\"filed_233\"]').eq(i).length && $.trim($('#work_ecperience_filed_233').parent().prev().text()) == '֤������ϵ��ʽ') {
        $('input[name=\"filed_233\"]').eq(i).val($('.infoparttimejobs .mt_reterence_phone').eq(i).html())
    }
    if ($('input[name=\"job_date_start\"]').eq(i).length && $('.infoparttimejobs .mt_startDate').eq(i).html()) {
        if ($('.infoparttimejobs .mt_startDate').eq(i).html().length < 7) {
            $('input[name=\"job_date_start\"]').eq(i).val($('.infoparttimejobs .mt_startDate').eq(i).html().split('-').join('-0') + '-01')
        } else {
            $('input[name=\"job_date_start\"]').eq(i).val($('.infoparttimejobs .mt_startDate').eq(i).html() + '-01')
        }
    }
    if ($('input[name=\"filed_202\"]').eq(i).length && $('.infoparttimejobs .mt_startDate').eq(i).html() && $.trim($('input[name=\"filed_202\"]').parent().prev().text()).substring(0, 4) != '��������' && $.trim($('input[name=\"filed_202\"]').parent().prev().text()).substring(0, 2) != '����') {
        if ($('.infoparttimejobs .mt_startDate').eq(i).html().length < 7) {
            $('input[name=\"filed_202\"]').eq(i).val($('.infoparttimejobs .mt_startDate').eq(i).html().split('-').join('-0') + '-01')
        } else {
            $('input[name=\"filed_202\"]').eq(i).val($('.infoparttimejobs .mt_startDate').eq(i).html() + '-01')
        }
    }
    if ($('input[name=\"job_date_end\"]').eq(i).length && $('.infoparttimejobs .mt_endDate').eq(i).html()) {
        if ($('.infoparttimejobs .mt_endDate').eq(i).html().length < 7) {
            $('input[name=\"job_date_end\"]').eq(i).val($('.infoparttimejobs .mt_endDate').eq(i).html().split('-').join('-0') + '-01')
        } else {
            $('input[name=\"job_date_end\"]').eq(i).val($('.infoparttimejobs .mt_endDate').eq(i).html() + '-01')
        }
    }
    if ($('input[name=\"filed_203\"]').eq(i).length && $('.infoparttimejobs .mt_endDate').eq(i).html() && $.trim($('input[name=\"filed_203\"]').parent().prev().text()).substring(0, 2) != 'ְ��' && $.trim($('input[name=\"filed_203\"]').parent().prev().text()).substring(0, 2) != '��ϵ') {
        if ($('.infoparttimejobs .mt_endDate').eq(i).html().length < 7) {
            $('input[name=\"filed_203\"]').eq(i).val($('.infoparttimejobs .mt_endDate').eq(i).html().split('-').join('-0') + '-01')
        } else {
            $('input[name=\"filed_203\"]').eq(i).val($('.infoparttimejobs .mt_endDate').eq(i).html() + '-01')
        }
    }
    if ($('input[name=\"filed_217\"]').eq(i).length && $('.infoparttimejobs .mt_startDate').eq(i).html() && $.trim($('input[name=\"filed_217\"]').parent().prev().text()).substring(0, 4) == '��ְʱ��') {
        if ($('.infoparttimejobs .mt_startDate').eq(i).html().length < 7) {
            $('input[name=\"filed_217\"]').eq(i).val($('.infoparttimejobs .mt_startDate').eq(i).html().split('-').join('-0'))
        } else {
            $('input[name=\"filed_217\"]').eq(i).val($('.infoparttimejobs .mt_startDate').eq(i).html())
        }
    }
    if ($('input[name=\"filed_218\"]').eq(i).length && $('.infoparttimejobs .mt_endDate').eq(i).html() && $.trim($('input[name=\"filed_218\"]').parent().prev().text()).substring(0, 4) == '��ְʱ��') {
        if ($('.infoparttimejobs .mt_endDate').eq(i).html().length < 7) {
            $('input[name=\"filed_218\"]').eq(i).val($('.infoparttimejobs .mt_endDate').eq(i).html().split('-').join('-0'))
        } else {
            $('input[name=\"filed_218\"]').eq(i).val($('.infoparttimejobs .mt_endDate').eq(i).html())
        }
    }
    if ($('textarea[name=\"work_description\"]').eq(i).length && $('.infoparttimejobs .workContent').eq(i).html()) {
        $('textarea[name=\"work_description\"]').eq(i).val($('.infoparttimejobs .workContent').eq(i).html())
    }
    if ($('textarea[name=\"filed_225\"]').eq(i).length && $('.infoparttimejobs .workContent').eq(i).html() && $.trim($('textarea[name=\"filed_225\"]').parent().prev().text()) != '��������' && $.trim($('textarea[name=\"filed_225\"]').parent().prev().text()) != 'У�ڻ/ְ������') {
        $('textarea[name=\"filed_225\"]').eq(i).val($('.infoparttimejobs .workContent').eq(i).html())
    }
    if ($('textarea[name=\"filed_201\"]').eq(i).length && $('.infoparttimejobs .workContent').eq(i).html() && $.trim($('textarea[name=\"filed_201\"]').parent().prev().text()) != 'ӦƸ����') {
        $('textarea[name=\"filed_201\"]').eq(i).val($('.infoparttimejobs .workContent').eq(i).html())
    }
    if ($('textarea[name=\"filed_226\"]').eq(i).length && $('.infoparttimejobs .mt_reasons').eq(i).html() && $.trim($('textarea[name=\"filed_226\"]').parent().prev().text()) != '�ܵ�����������') {
        $('textarea[name=\"filed_226\"]').eq(i).val($('.infoparttimejobs .mt_reasons').eq(i).html())
    }
    if ($('select[name=\"is_references\"]').eq(i).length && $('.infoparttimejobs .mt_reterenceName').eq(i).html().length) {
        $('select[name=\"is_references\"]').eq(i).prev().find('.selectList div').eq(1).click();
        if ($('input[name=\"references_name\"]').eq(i).length) {
            $('input[name=\"references_name\"]').eq(i).val($('.infoparttimejobs .mt_reterenceName').eq(i).html())
        }
        if ($('input[name=\"references_relation\"]').eq(i).length) {
            $('input[name=\"references_relation\"]').eq(i).val($('.infoparttimejobs .mt_reterenceRelation').eq(i).html())
        }
        if ($('input[name=\"references_position\"]').eq(i).length) {
            $('input[name=\"references_position\"]').eq(i).val($('.infoparttimejobs .mt_reterencePosition').eq(i).html())
        }
        if ($('input[name=\"references_company\"]').eq(i).length) {
            $('input[name=\"references_company\"]').eq(i).val($('.infoparttimejobs .mt_reterenceCompany').eq(i).html())
        }
        if ($('input[name=\"references_contact\"]').eq(i).length) {
            $('input[name=\"references_contact\"]').eq(i).val($('.infoparttimejobs .mt_reterence_phone').eq(i).html())
        }
    } else {
        $('select[name=\"is_references\"]').eq(i).prev().find('.selectList div').eq(2).click()
    }
}
if ($('input[name=\"family_name\"]').length && $('#mt_fmname').html().length) {
    $('input[name=\"family_name\"]').val($('#mt_fmname').html())
}
if ($('input[name=\"family_relation\"]').length && $('#mt_fmrelation').html().length) {
    $('input[name=\"family_relation\"]').val($('#mt_fmrelation').html())
}
if ($('input[name=\"family_company\"]').length && $('#mt_fmwork').html().length) {
    $('input[name=\"family_company\"]').val($('#mt_fmwork').html())
}
if ($('input[name=\"family_position\"]').length && $('#mt_fmposition').html().length) {
    $('input[name=\"family_position\"]').val($('#mt_fmposition').html())
}
if ($('select[name=\"english_level\"]').length && $('.infoEnglishSkill .mt_skillEngLevel').html().length) {
    if ($('.infoEnglishSkill .mt_skillEngLevel').html() == '��ѧӢ���ļ�') {
        $('select[name=\"english_level\"]').prev().find('.selectList div').eq(1).click()
    } else if ($('.infoEnglishSkill .mt_skillEngLevel').html() == 'רҵ�ļ�') {
        $('select[name=\"english_level\"]').prev().find('.selectList div').eq(2).click()
    } else if ($('.infoEnglishSkill .mt_skillEngLevel').html() == '��ѧӢ������') {
        $('select[name=\"english_level\"]').prev().find('.selectList div').eq(3).click()
    } else if ($('.infoEnglishSkill .mt_skillEngLevel').html() == 'רҵ����') {
        $('select[name=\"english_level\"]').prev().find('.selectList div').eq(4).click()
    }
    if ($('.infoEnglishSkill .mt_skillEngSorce').html().length && $('input[name=\"english_score\"]').length) {
        $('input[name=\"english_score\"]').val($('.infoEnglishSkill .mt_skillEngSorce').html())
    }
}
if ($('select[name=\"filed_214\"]').length && $('.infoEnglishSkill .mt_skillEngLevel').html() && $.trim($('#module_51_filed_214').parent().prev().text()) == 'Ӣ��ˮƽ') {
    if ($('.infoEnglishSkill .mt_skillEngLevel').html() == '��ѧӢ���ļ�') {
        $('select[name=\"filed_214\"]').prev().find('.selectList div').eq(1).click()
    } else if ($('.infoEnglishSkill .mt_skillEngLevel').html() == 'רҵ�ļ�') {
        $('select[name=\"filed_214\"]').prev().find('.selectList div').eq(2).click()
    } else if ($('.infoEnglishSkill .mt_skillEngLevel').html() == '��ѧӢ������') {
        $('select[name=\"filed_214\"]').prev().find('.selectList div').eq(3).click()
    } else if ($('.infoEnglishSkill .mt_skillEngLevel').html() == 'רҵ����') {
        $('select[name=\"filed_214\"]').prev().find('.selectList div').eq(4).click()
    }
}
if ($('.infoEnglishSkill .mt_skillEngSorce').html() && $('input[name=\"filed_215\"]').length && $.trim($('#module_51_filed_215').parent().prev().text()) == 'Ӣ�����') {
    $('input[name=\"filed_215\"]').val($('.infoEnglishSkill .mt_skillEngSorce').html())
}
if ($('.infoOtherSkill .mt_skillOtherLang').html() && $('#module_51_filed_216').length) {
    $('#module_51_filed_216').val($('.infoOtherSkill .mt_skillOtherLang').html())
}
for (var j = 0; j < $('#skill_favorite .j_certificate_itemWrap .j_selectList').length - 1; j++) {
    var EnglishSkill = $('#skill_favorite .j_certificate_itemWrap .j_selectList').eq(j).find('div');
    for (var k = 0; k < EnglishSkill.length; k++) {
        if ($('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(j).html() == '�и�') {
            EnglishSkill.eq(1).click()
        } else if (EnglishSkill.eq(k).html().indexOf($('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(j).html(), 0) != -1) {
            EnglishSkill.eq(k).click()
        }
    }
    if ($('input[name=\"certificate_level\"]').eq(j).length && $('.infoOtEnglishSkill .mt_otherSkillEngSorce').eq(j).html()) {
        $('input[name=\"certificate_level\"]').eq(j).val($('.infoOtEnglishSkill .mt_otherSkillEngSorce').eq(j).html())
    }
}
for (var i = 0; i < $('.infoOtherSkill').length; i++) {
    if ($('.infoOtherSkill .mt_skillListenLevel').eq(i).html() == '�˽�') {
        $('select[name=\"language_skill_listen_say\"]').eq(i).prev().find('.selectList div').eq(1).click()
    } else if ($('.infoOtherSkill .mt_skillListenLevel').eq(i).html() == 'һ��') {
        $('select[name=\"language_skill_listen_say\"]').eq(i).prev().find('.selectList div').eq(2).click()
    } else if ($('.infoOtherSkill .mt_skillListenLevel').eq(i).html() == '����') {
        $('select[name=\"language_skill_listen_say\"]').eq(i).prev().find('.selectList div').eq(3).click()
    } else if ($('.infoOtherSkill .mt_skillListenLevel').eq(i).html() == '��ͨ') {
        $('select[name=\"language_skill_listen_say\"]').eq(i).prev().find('.selectList div').eq(4).click()
    }
    if ($('.infoOtherSkill .mt_skillWriteLevel').eq(i).html() == '�˽�') {
        $('select[name=\"language_skill_read_write\"]').eq(i).prev().find('.selectList div').eq(1).click()
    } else if ($('.infoOtherSkill .mt_skillWriteLevel').eq(i).html() == 'һ��') {
        $('select[name=\"language_skill_read_write\"]').eq(i).prev().find('.selectList div').eq(2).click()
    } else if ($('.infoOtherSkill .mt_skillWriteLevel').eq(i).html() == '����') {
        $('select[name=\"language_skill_read_write\"]').eq(i).prev().find('.selectList div').eq(3).click()
    } else if ($('.infoOtherSkill .mt_skillWriteLevel').eq(i).html() == '��ͨ') {
        $('select[name=\"language_skill_read_write\"]').eq(i).prev().find('.selectList div').eq(4).click()
    }
    var langskill = $('select[name=\"language_skill_language_skill\"]').eq(i).prev().find('.selectList div');
    for (var j = 0; j < langskill.length; j++) {
        if (langskill.eq(j).html().indexOf($('.infoOtherSkill .mt_skillOtherLang').eq(i).html(), 0) != -1) {
            langskill.eq(j).click()
        }
    }
}
if ($('textarea[name=\"other_skill\"]').length && $('#mt_hobbies').html().length) {
    $('textarea[name=\"other_skill\"]').val($('#mt_hobbies').html())
}
if ($('textarea[name=\"personal_favorite\"]').length && $('#mt_skill').html().length) {
    $('textarea[name=\"personal_favorite\"]').val($('#mt_skill').html())
}
if ($('#person_info_politics_bg').length && $('#mt_polistatus').html()) {
    var polistatus = $('#person_info_politics_bg').prev().find('.selectList div');
    switch ($('#mt_polistatus').html()) {
        case '������Ա':
            polistatus.eq(1).click();
            break;
        case '�й���Ա':
        case '�й�Ԥ����Ա':
            polistatus.eq(2).click();
            break;
        case '�й�����ͬ��':
        case '�й�����������':
        case '�й������ٽ���':
        case '̨����������ͬ��':
            polistatus.eq(3).click();
            break;
        case '�޵���������ʿ':
        case 'Ⱥ��':
            polistatus.eq(4).click();
            break
    }
}
if ($('#person_info_filed_200').length && $.trim($('#person_info_filed_200').parent().prev().text()) == '���ѧ��' && $('#mt_edu').html()) {
    var sigNation = $('#person_info_filed_200').prev().find('.selectList div');
    switch ($('#mt_edu').html()) {
        case '��ʿ�о���':
            sigNation.eq(1).click();
            break;
        case 'MBA':
            sigNation.eq(2).click();
            break;
        case '˶ʿ�о���':
            sigNation.eq(3).click();
            break;
        case '��ѧ����-һ��':
        case '��ѧ����-����':
        case '��ѧ����-����':
        case '˫ѧʿ':
            sigNation.eq(4).click();
            break;
        case '��ѧר��':
            sigNation.eq(5).click();
            break;
        case '��ר':
        case '��У/ְ��':
            sigNation.eq(6).click();
            break;
        case '����':
            sigNation.eq(7).click();
            break;
        case '���м�����':
            sigNation.eq(8).click();
            break;
        default:
            sigNation.eq(9).click();
            break
    }
}
if ($('#person_info_filed_201').length && $.trim($('#person_info_filed_201').parent().prev().text()) == '���ѧ����ҵʱ��') {
    if ($('#person_info_filed_201').length.length < 7) {
        $('#person_info_filed_201').val($('#mt_gradutetime').html().split('-').join('-0') + '-01')
    } else {
        $('#person_info_filed_201').val($('#mt_gradutetime').html() + '-01')
    }
}
if ($('#person_info_marital_status').length && $('#mt_maritalstatus').html() && $.trim($('#person_info_marital_status').parent().prev().text()) == '����״��') {
    var sigNation = $('#person_info_marital_status').prev().find('.selectList div');
    if ($('#mt_maritalstatus').html() == 'δ��') {
        sigNation.eq(1).click()
    }
    if ($('#mt_maritalstatus').html() == '�ѻ�') {
        sigNation.eq(2).click()
    }
    if ($('#mt_maritalstatus').html() == '����') {
        sigNation.eq(3).click()
    }
}
if ($('#person_info_filed_200').length && $.trim($('#person_info_filed_200').parent().prev().text()) != 'Ӣ����' && ($.trim($('#person_info_filed_200').parent().prev().text()) == '������ϵ��' || $.trim($('#person_info_filed_200').parent().prev().text()) != '����')) {
    $('#person_info_filed_200').val($('#mt_jjlxr').html())
}
if ($('input[name=\"stature\"]').length && $('#mt_height').html().length) {
    $('input[name=\"stature\"]').val($('#mt_height').html())
}
if ($('input[name=\"avoirdupois\"]').length && $('#mt_weight').html() && $.trim($('input[name=\"avoirdupois\"]').parent().prev().text()) == '����(KG)') {
    $('input[name=\"avoirdupois\"]').val($('#mt_weight').html())
}
if ($('#person_info_filed_201').length && $.trim($('#person_info_filed_201').parent().prev().text()) == '����Ա����') {
    $('#person_info_filed_201').val($('.infopledu .mt_tutorname').html())
}
if ($('#person_info_filed_202').length && $.trim($('#person_info_filed_202').parent().prev().text()) == '����Ա�绰') {
    $('#person_info_filed_202').val($('.infopledu .mt_tutorphone').html())
}
if ($('textarea[name=\"comment_content\"]').length && $('#mt_selfIntro').html()) {
    $('textarea[name=\"comment_content\"]').val($('#mt_selfIntro').html())
}
if ($('input[name=\"filed_204\"]').length && $.trim($('#contact_info_filed_204').parent().prev().text()) == '������ϵ��') {
    $('input[name=\"filed_204\"]').val($('#mt_jjlxr').html())
}
if ($('#person_info_filed_202').length && $.trim($('#person_info_filed_202').parent().prev().text()) == '������') {
    $('#person_info_filed_202').val($('#mt_nativeplace').html() + $('#mt_native_city').html())
}
if ($('#person_info_filed_203').length && $.trim($('#person_info_filed_203').parent().prev().text()) == '���ü��س�') {
    $('#person_info_filed_203').val($('#mt_skill').html())
}
if ($('#contact_info_filed_230').length && $.trim($('#contact_info_filed_230').parent().prev().text()) == '�־ӵ�ַ') {
    $('#contact_info_filed_230').val($('#mt_add').html())
}
if ($('#contact_info_filed_206').length && $.trim($('#contact_info_filed_206').parent().prev().text()) == '�ʱ�') {
    $('#contact_info_filed_206').val($('#mt_zip').html())
}
if ($('#contact_info_filed_210').length && $.trim($('#contact_info_filed_210').parent().prev().text()) == '������ϵ��') {
    $('#contact_info_filed_210').val($('#mt_jjlxr').html())
}
if ($('#contact_info_filed_207').length && $.trim($('#contact_info_filed_207').parent().prev().text()) == '�̶��绰') {
    $('#contact_info_filed_207').val($('#mt_gudingtel').html())
}
if ($('#contact_info_filed_208').length && $.trim($('#contact_info_filed_208').parent().prev().text()) == '��ͥ��ַ') {
    $('#contact_info_filed_208').val($('#mt_postadd').html())
}
if ($('#contact_info_filed_219').length && $.trim($('#contact_info_filed_219').parent().prev().text()) == '��ͥ�绰') {
    $('#contact_info_filed_219').val($('#mt_fmphone').html())
}
if ($('#contact_info_filed_218').length && $.trim($('#contact_info_filed_218').parent().prev().text()) == '�ʱ�') {
    $('#contact_info_filed_218').val($('#mt_zip').html())
}
if ($('#module_50_filed_214').length && $('.infoschaward .mt_awardsName').html() && $.trim($('#module_50_filed_214').parent().prev().text()) != '������Ҫ˵��������') {
    $('#module_50_filed_214').val($('.infoschaward .mt_schawradList').html())
}
if ($('#contact_info_postal_code').length && $.trim($('#contact_info_postal_code').parent().prev().text()) == '��������') {
    $('#contact_info_postal_code').val($('#mt_zip').html())
}
if ($('#contact_info_blog').length && $.trim($('#contact_info_blog').parent().prev().text()) == '������ҳ/����') {
    $('#contact_info_blog').val($('#mt_profile').html())
}
if ($('#mt_hobbies').html() && $('#skill_favorite_filed_217').length) {
    $('#skill_favorite_filed_217').val($('#mt_hobbies').html())
}
for (var i = 0; i < $('.infoproject').length; i++) {
    if ($('input[name=\"filed_219\"]').eq(i) && $('.infoproject .mt_prostarttime').eq(i).html() && $.trim($('input[name=\"filed_219\"]').parent().prev().text()) != 'CET6�÷�' && $.trim($('input[name=\"filed_219\"]').parent().prev().text()) != '��ѵ����') {
        if ($('.infoproject .mt_prostarttime').eq(i).html().length < 7) {
            $('input[name=\"filed_219\"]').eq(i).val($('.infoproject .mt_prostarttime').eq(i).html().split('-').join('-0') + '-01')
        } else {
            $('input[name=\"filed_219\"]').eq(i).val($('.infoproject .mt_prostarttime').eq(i).html() + '-01')
        }
    }
    if ($('input[name=\"filed_220\"]').eq(i).length && $('.infoproject .mt_proendtime').eq(i).html() && $.trim($('input[name=\"filed_220\"]').parent().prev().text()) != 'ʵϰ����ʵϰ����') {
        if ($('.infoproject .mt_proendtime').eq(i).html().length < 7) {
            $('input[name=\"filed_220\"]').eq(i).val($('.infoproject .mt_proendtime').eq(i).html().split('-').join('-0') + '-01')
        } else {
            $('input[name=\"filed_220\"]').eq(i).val($('.infoproject .mt_proendtime').eq(i).html() + '-01')
        }
    }
    if ($('textarea[name=\"filed_221\"]').eq(i).length && $('.infoproject .mt_projectRemark').eq(i).html() && $.trim($('textarea[name=\"filed_221\"]').parent().prev().text()) != '��ѵ�γ�') {
        $('textarea[name=\"filed_221\"]').eq(i).val($('.infoproject .mt_projectRemark').eq(i).html())
    }
}
if ($('textarea[name=\"filed_234\"]').length && $('.infoparttimejobs .mt_workList').html() && $.trim($('textarea[name=\"filed_234\"]').parent().prev().text()) == 'ʵϰ����') {
    $('textarea[name=\"filed_234\"]').val($('.infoparttimejobs .mt_workList').html())
}
if ($('textarea[name=\"filed_225\"]').length && $('#mt_selfIntro').html() && $.trim($('textarea[name=\"filed_225\"]').parent().prev().text()) == '��������') {
    $('textarea[name=\"filed_225\"]').val($('#mt_selfIntro').html())
}
for (var i = 0; i < $('.infoplcerti').length; i++) {
    if ($('input[name=\"filed_212\"]').eq(i).length && $('.infoplcerti .mt_certificateName').eq(i).html() && $.trim($('input[name=\"filed_212\"]').parent().prev().text()).substring(0, 4) == 'רҵ֤��') {
        $('input[name=\"filed_212\"]').eq(i).val($('.infoplcerti .mt_certificateName').eq(i).html())
    }
    if ($('input[name=\"filed_206\"]').eq(i).length && $('.infoplcerti .mt_getDate').eq(i).html() && $.trim($('input[name=\"filed_206\"]').parent().prev().text()).substring(0, 6) == '���֤��ʱ��') {
        if ($('.infoplcerti .mt_getDate').eq(i).html().length < 7) {
            $('input[name=\"filed_206\"]').eq(i).val($('.infoplcerti .mt_getDate').eq(i).html().split('-').join('-0'))
        } else {
            $('input[name=\"filed_206\"]').eq(i).val($('.infoplcerti .mt_getDate').eq(i).html())
        }
    }
}
for (var i = 0; i < $('.infoschaward').length; i++) {
    if ($('input[name=\"filed_203\"]').eq(i).length && $('.infoschaward .mt_awardsName').eq(i).html() && $.trim($('input[name=\"filed_203\"]').parent().prev().text()).substring(0, 4) == '������') {
        $('input[name=\"filed_203\"]').eq(i).val($('.infoschaward .mt_awardsName').eq(i).html())
    }
    if ($('input[name=\"filed_204\"]').eq(i).length && $('.infoschaward .mt_awardsDate').eq(i).html() && $.trim($('input[name=\"filed_204\"]').parent().prev().text()).substring(0, 4) == '��ʱ��') {
        if ($('.infoschaward .mt_awardsDate').eq(i).html().length < 7) {
            $('input[name=\"filed_204\"]').eq(i).val($('.infoschaward .mt_awardsDate').eq(i).html().split('-').join('-0'))
        } else {
            $('input[name=\"filed_204\"]').eq(i).val($('.infoschaward .mt_awardsDate').eq(i).html())
        }
    }
    if ($('textarea[name=\"filed_205\"]').eq(i).length && $('.infoschaward .mt_awardsDes').eq(i).html() && $.trim($('textarea[name=\"filed_205\"]').parent().prev().text()).substring(0, 4) == '��������') {
        $('textarea[name=\"filed_205\"]').eq(i).val($('.infoschaward .mt_awardsDes').eq(i).html())
    }
}
if ($('input[name=\"filed_204\"]').length && $.trim($('#contact_info_filed_204').parent().prev().text()) == '������ϵ������') {
    $('input[name=\"filed_204\"]').val($('#mt_jjlxr').html())
}
if ($('#person_info_filed_202').length && $.trim($('#person_info_filed_202').parent().prev().text()) == '����') {
    $('#person_info_filed_202').val($('#mt_national').html())
}
if ($('#person_info_filed_203').length && $('#mt_polistatus').html() && $.trim($('#person_info_filed_203').parent().prev().text()) == '������ò') {
    var polistatus = $('#person_info_filed_203').prev().find('.selectList div');
    switch ($('#mt_polistatus').html()) {
        case '������Ա':
            polistatus.eq(1).click();
            break;
        case '�й���Ա':
        case '�й�Ԥ����Ա':
            polistatus.eq(2).click();
            break;
        case '�й�����ͬ��':
        case '�й�����������':
        case '�й������ٽ���':
        case '̨����������ͬ��':
            polistatus.eq(3).click();
            break;
        case '�޵���������ʿ':
        case 'Ⱥ��':
            polistatus.eq(4).click();
            break
    }
}
if ($('#contact_info_filed_205').length && $.trim($('#contact_info_filed_205').parent().prev().text()) == '��ͥסַ') {
    $('#contact_info_filed_205').val($('#mt_postadd').html())
}
if ($('h3').eq(7).html() == '��ѵ����' || $('h3').eq(10).html() == '��ѵ����') {
    for (var i = 0; i < $('.infotraining').length; i++) {
        if ($('input[name=\"filed_237\"]').eq(i).length && $('.infotraining .mt_trainingName').eq(i).html()) {
            $('input[name=\"filed_237\"]').eq(i).val($('.infotraining .mt_trainingName').eq(i).html())
        }
        if ($('input[name=\"filed_258\"]').eq(i).length && $('.infotraining .mt_trainingName').eq(i).html()) {
            $('input[name=\"filed_258\"]').eq(i).val($('.infotraining .mt_trainingName').eq(i).html())
        }
        if ($('input[name=\"filed_235\"]').eq(i) && $('.infotraining .mt_startDate').eq(i).html()) {
            if ($('.infotraining .mt_startDate').eq(i).html().length < 7) {
                $('input[name=\"filed_235\"]').eq(i).val($('.infotraining .mt_startDate').eq(i).html().split('-').join('-0') + '-01')
            } else {
                $('input[name=\"filed_235\"]').eq(i).val($('.infotraining .mt_startDate').eq(i).html() + '-01')
            }
        }
        if ($('input[name=\"filed_256\"]').eq(i) && $('.infotraining .mt_startDate').eq(i).html()) {
            if ($('.infotraining .mt_startDate').eq(i).html().length < 7) {
                $('input[name=\"filed_256\"]').eq(i).val($('.infotraining .mt_startDate').eq(i).html().split('-').join('-0') + '-01')
            } else {
                $('input[name=\"filed_256\"]').eq(i).val($('.infotraining .mt_startDate').eq(i).html() + '-01')
            }
        }
        if ($('input[name=\"filed_236\"]').eq(i) && $('.infotraining .mt_endDate').eq(i).html()) {
            if ($('.infotraining .mt_endDate').eq(i).html().length < 7) {
                $('input[name=\"filed_236\"]').eq(i).val($('.infotraining .mt_endDate').eq(i).html().split('-').join('-0') + '-01')
            } else {
                $('input[name=\"filed_236\"]').eq(i).val($('.infotraining .mt_endDate').eq(i).html() + '-01')
            }
        }
        if ($('input[name=\"filed_257\"]').eq(i) && $('.infotraining .mt_endDate').eq(i).html()) {
            if ($('.infotraining .mt_endDate').eq(i).html().length < 7) {
                $('input[name=\"filed_257\"]').eq(i).val($('.infotraining .mt_endDate').eq(i).html().split('-').join('-0') + '-01')
            } else {
                $('input[name=\"filed_257\"]').eq(i).val($('.infotraining .mt_endDate').eq(i).html() + '-01')
            }
        }
        if ($('input[name=\"filed_238\"]').eq(i).length && $('.infotraining .mt_trainingDes').eq(i).html()) {
            $('input[name=\"filed_238\"]').eq(i).val($('.infotraining .mt_trainingDes').eq(i).html() + $('.infotraining .mt_certificateName').eq(i).html())
        }
        if ($('input[name=\"filed_259\"]').eq(i).length && $('.infotraining .mt_trainingDes').eq(i).html()) {
            $('input[name=\"filed_259\"]').eq(i).val($('.infotraining .mt_trainingDes').eq(i).html() + $('.infotraining .mt_certificateName').eq(i).html())
        }
    }
}
if ($('h3').eq(5).html() == 'Ӣ��ˮƽ') {
    var EnglishSkill = $('.infoOtEnglishSkill');
    var EnglishSkills = $('.infoEnglishSkill');
    for (var k = 0; k < EnglishSkill.length; k++) {
        if ($('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(k).html() == '�и�' && $('#module_50_filed_241').length) {
            $('#module_50_filed_241').val($('.infoOtEnglishSkill .mt_otherSkillEngSorce').eq(k).html())
        } else if ($('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(k).html() == '��˼' && $('#module_50_filed_239').length) {
            $('#module_50_filed_239').val($('.infoOtEnglishSkill .mt_otherSkillEngSorce').eq(k).html())
        }
    }
    for (var k = 0; k < EnglishSkills.length; k++) {
        if ($('.infoEnglishSkill .mt_skillEngLevel').eq(k).html() == '��ѧӢ���ļ�' && $('#module_50_filed_217').length) {
            $('#module_50_filed_217').val($('.infoEnglishSkill .mt_skillEngSorce').eq(k).html())
        } else if ($('.infoEnglishSkill .mt_skillEngLevel').eq(k).html() == '��ѧӢ������' && $('#module_50_filed_219').length) {
            $('#module_50_filed_219').val($('.infoEnglishSkill .mt_skillEngSorce').eq(k).html())
        }
    }
}
if ($('h3').eq(6).length && $('h3').eq(6).html() == '��ͥ��ϵ') {
    if ($('#family_relationship_filed_220').length && $('#mt_fmname').html()) {
        $('#family_relationship_filed_220').val($('#mt_fmname').html())
    }
    if ($('#family_relationship_filed_221').length && $('#mt_fmrelation').html()) {
        $('#family_relationship_filed_221').val($('#mt_fmrelation').html())
    }
    if ($('#family_relationship_filed_222').length && $('#mt_fmwork').html()) {
        $('#family_relationship_filed_222').val($('#mt_fmwork').html())
    }
    if ($('#family_relationship_filed_223').length && $('#mt_fmposition').html()) {
        $('#family_relationship_filed_223').val($('#mt_fmposition').html())
    }
    if ($('#module_75_filed_287').length && $('#mt_fmname').html()) {
        $('#module_75_filed_287').val($('#mt_fmname').html())
    }
    if ($('#module_75_filed_286').length && $('#mt_fmrelation').html()) {
        $('#module_75_filed_286').val($('#mt_fmrelation').html())
    }
    if ($('#module_75_filed_289').length && $('#mt_fmwork').html()) {
        $('#module_75_filed_289').val($('#mt_fmwork').html() + $('#mt_fmposition').html())
    }
}
if ($('h3').eq(17).length && $('h3').eq(17).html().substring(0, 4) == '��ͥ��Ա') {
    if ($('#family_relationship_filed_220').length && $('#mt_fmname').html()) {
        $('#family_relationship_filed_220').val($('#mt_fmname').html())
    }
    if ($('#family_relationship_filed_221').length && $('#mt_fmrelation').html()) {
        $('#family_relationship_filed_221').val($('#mt_fmrelation').html())
    }
    if ($('#family_relationship_filed_222').length && $('#mt_fmwork').html()) {
        $('#family_relationship_filed_222').val($('#mt_fmwork').html())
    }
    if ($('#family_relationship_filed_223').length && $('#mt_fmposition').html()) {
        $('#family_relationship_filed_223').val($('#mt_fmposition').html())
    }
    if ($('#module_75_filed_287').length && $('#mt_fmname').html()) {
        $('#module_75_filed_287').val($('#mt_fmname').html())
    }
    if ($('#module_75_filed_286').length && $('#mt_fmrelation').html()) {
        $('#module_75_filed_286').val($('#mt_fmrelation').html())
    }
    if ($('#module_75_filed_289').length && $('#mt_fmwork').html()) {
        $('#module_75_filed_289').val($('#mt_fmwork').html() + $('#mt_fmposition').html())
    }
}
if ($('#awards_activity_filed_228').length && $('#mt_skill').html() && $.trim($('#awards_activity_filed_228').parent().prev().text()) == '������Ȥ�򰮺�') {
    $('#awards_activity_filed_228').val($('#mt_skill').html())
}
if ($('#module_51_filed_233').length && $('#mt_selfIntro').html() && $.trim($('#module_51_filed_233').parent().prev().text()) == '��������') {
    $('#module_51_filed_233').val($('#mt_selfIntro').html())
}
if ($('#person_info_filed_207').length && $('#mt_email').html() && $.trim($('#person_info_filed_207').parent().prev().text()) == '��������') {
    $('#person_info_filed_207').val($('#mt_email').html())
}
if ($('#person_info_filed_208').length && $('#mt_tel').html() && $.trim($('#person_info_filed_208').parent().prev().text()) == '�ֻ�����') {
    $('#person_info_filed_208').val($('#mt_tel').html())
}
if ($('#person_info_filed_209').length && $('#mt_jjlxr').html() && $.trim($('#person_info_filed_209').parent().prev().text()) == '������ϵ������') {
    $('#person_info_filed_209').val($('#mt_jjlxr').html())
}
if ($('#person_info_filed_210').length && $('#mt_jjlxrtel').html() && $.trim($('#person_info_filed_210').parent().prev().text()) == '������ϵ�绰') {
    $('#person_info_filed_210').val($('#mt_jjlxrtel').html())
}
if ($('#person_info_filed_212').length && $('#mt_fmphone').html() && $.trim($('#person_info_filed_212').parent().prev().text()) == '��ϵ�绰����ͥ��') {
    $('#person_info_filed_212').val($('#mt_fmphone').html())
}
if ($('#person_info_filed_213').length && $('#mt_add').html() && $.trim($('#person_info_filed_213').parent().prev().text()) == '��סַ��ַ���ʱ�') {
    $('#person_info_filed_213').val($('#mt_add').html() + $('#mt_zip').html())
}
if ($('#person_info_filed_214').length && $('#mt_postadd').html() && $.trim($('#person_info_filed_214').parent().prev().text()) == '��ͥסַ���ʱ�') {
    $('#person_info_filed_214').val($('#mt_postadd').html() + $('#mt_zip').html())
}
if ($('#module_79_filed_303').length && $('#mt_skill').html() && $.trim($('#module_79_filed_303').parent().prev().text()) == '�س�����') {
    $('#module_79_filed_303').val($('#mt_skill').html())
}
if ($('#module_77_filed_298').length && $('#mt_selfIntro').html() && $.trim($('#module_77_filed_298').parent().prev().text()) == '�������ۺ���Ҫ��������') {
    $('#module_77_filed_298').val($('#mt_selfIntro').html())
}
if ($('h3').eq(4).length&&$('h3').eq(4).html().substring(0, 6) == 'Ӣ����������') {
    for (var i = 0; i < $('.infoEnglishSkill').length; i++) {
        if ($('select[name=\"filed_225\"]').eq(i).length && $('.infoEnglishSkill .mt_skillEngLevel').eq(i).html()) {
            if ($('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() == '��ѧӢ���ļ�') {
                $('select[name=\"filed_225\"]').eq(i).prev().find('.selectList div').eq(1).click()
            } else if ($('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() == 'רҵ�ļ�') {
                $('select[name=\"filed_225\"]').eq(i).prev().find('.selectList div').eq(3).click()
            } else if ($('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() == '��ѧӢ������') {
                $('select[name=\"filed_225\"]').eq(i).prev().find('.selectList div').eq(2).click()
            } else if ($('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() == 'רҵ�˼�') {
                $('select[name=\"filed_225\"]').eq(i).prev().find('.selectList div').eq(4).click()
            }
        }
        if ($('.infoEnglishSkill .mt_skillEngSorce').eq(i).html() && $('input[name=\"filed_226\"]').eq(i).length) {
            $('input[name=\"filed_226\"]').eq(i).val($('.infoEnglishSkill .mt_skillEngSorce').eq(i).html())
        }
    }
}
if ($('h3').eq(6).length&&$('h3').eq(6).html() == 'רҵ����') {
    for (var i = 0; i < $('.infoplcerti').length; i++) {
        if ($('.infoplcerti .mt_certificateName').eq(i).html() && $('input[name=\"filed_234\"]').eq(i).length) {
            $('input[name=\"filed_234\"]').eq(i).val($('.infoplcerti .mt_certificateName').eq(i).html())
        }
        if ($('.infoplcerti .mt_issuing').eq(i).html() && $('input[name=\"filed_237\"]').eq(i).length) {
            $('input[name=\"filed_237\"]').eq(i).val($('.infoplcerti .mt_issuing').eq(i).html())
        }
        if ($('input[name=\"filed_235\"]').eq(i).length && $('.infoplcerti .mt_getDate').eq(i).html() && $.trim($('input[name=\"filed_235\"]').parent().prev().text()).substring(0, 4) == 'ȡ��ʱ��') {
            if ($('.infoplcerti .mt_getDate').eq(i).html().length < 7) {
                $('input[name=\"filed_235\"]').eq(i).val($('.infoplcerti .mt_getDate').eq(i).html().split('-').join('-0') + '-01')
            } else {
                $('input[name=\"filed_235\"]').eq(i).val($('.infoplcerti .mt_getDate').eq(i).html() + '-01')
            }
        }
    }
}
if ($('h3').eq(7).length&&$('h3').eq(7).html() == '���ʵ�������Ż�����У�⣩') {
    for (var i = 0; i < $('.infoparttimejobs').length; i++) {
        if ($('input[name=\"filed_240\"]').eq(i).length && $('.infoparttimejobs .mt_companyName').eq(i).html()) {
            $('input[name=\"filed_240\"]').eq(i).val($('.infoparttimejobs .mt_companyName').eq(i).html() + $('.infoparttimejobs .mt_department').eq(i).html())
        }
        if ($('input[name=\"filed_241\"]').eq(i).length) {
            $('input[name=\"filed_241\"]').eq(i).val($('.infoparttimejobs .mt_positionName').eq(i).html())
        }
        if ($('input[name=\"filed_238\"]').eq(i).length && $('.infoparttimejobs .mt_startDate').eq(i).html()) {
            if ($('.infoparttimejobs .mt_startDate').eq(i).html().length < 7) {
                $('input[name=\"filed_238\"]').eq(i).val($('.infoparttimejobs .mt_startDate').eq(i).html().split('-').join('-0') + '-01')
            } else {
                $('input[name=\"filed_238\"]').eq(i).val($('.infoparttimejobs .mt_startDate').eq(i).html() + '-01')
            }
        }
        if ($('input[name=\"filed_239\"]').eq(i).length && $('.infoparttimejobs .mt_endDate').eq(i).html()) {
            if ($('.infoparttimejobs .mt_endDate').eq(i).html().length < 7) {
                $('input[name=\"filed_239\"]').eq(i).val($('.infoparttimejobs .mt_endDate').eq(i).html().split('-').join('-0') + '-01')
            } else {
                $('input[name=\"filed_239\"]').eq(i).val($('.infoparttimejobs .mt_endDate').eq(i).html() + '-01')
            }
        }
        if ($('textarea[name=\"filed_242\"]').eq(i).length && $('.infoparttimejobs .workContent').eq(i).html()) {
            $('textarea[name=\"filed_242\"]').eq(i).val($('.infoparttimejobs .workContent').eq(i).html())
        }
    }
}
if ($('h3').eq(8).length&&$('h3').eq(8).html() == '���ʵ�������Ż�����У�ڣ�') {
    for (var i = 0; i < $('.infoschoolclub').length; i++) {
        if ($('input[name=\"filed_245\"]').eq(i).length && $('.infoschoolclub .mt_schClubName').eq(i).html()) {
            $('input[name=\"filed_245\"]').eq(i).val($('.infoschoolclub .mt_schClubName').eq(i).html())
        }
        if ($('input[name=\"filed_246\"]').eq(i).length && $('.infoschoolclub .mt_positionName').eq(i).html()) {
            $('input[name=\"filed_246\"]').eq(i).val($('.infoschoolclub .mt_positionName').eq(i).html())
        }
        if ($('input[name=\"filed_243\"]').eq(i).length && $('.infoschoolclub .mt_startDate').eq(i).html()) {
            if ($('.infoschoolclub .mt_startDate').eq(i).html().length < 7) {
                $('input[name=\"filed_243\"]').eq(i).val($('.infoschoolclub .mt_startDate').eq(i).html().split('-').join('-0') + '-01')
            } else {
                $('input[name=\"filed_243\"]').eq(i).val($('.infoschoolclub .mt_startDate').eq(i).html() + '-01')
            }
        }
        if ($('input[name=\"filed_244\"]').eq(i).length && $('.infoschoolclub .mt_endDate').eq(i).html()) {
            if ($('.infoschoolclub .mt_endDate').eq(i).html().length < 7) {
                $('input[name=\"filed_244\"]').eq(i).val($('.infoschoolclub .mt_endDate').eq(i).html().split('-').join('-0') + '-01')
            } else {
                $('input[name=\"filed_244\"]').eq(i).val($('.infoschoolclub .mt_endDate').eq(i).html() + '-01')
            }
        }
        if ($('textarea[name=\"filed_247\"]').eq(i).length && $('.infoschoolclub .mt_workDes').eq(i).html()) {
            $('textarea[name=\"filed_247\"]').eq(i).val($('.infoschoolclub .mt_workDes').eq(i).html())
        }
    }
}
if ($('h3').eq(9).length&&$('h3').eq(9).html() == '��������') {
    for (var i = 0; i < $('.infoparttimejobs').length; i++) {
        if ($('select[name=\"filed_302\"]').eq(i).length && $('.mt_workcat').eq(i).html() == 'ʵϰ') {
            $('select[name=\"filed_302\"]').eq(i).prev().find('.selectList div').eq(3).click()
        }
        if ($('input[name=\"filed_250\"]').eq(i).length && $('.infoparttimejobs .mt_companyName').eq(i).html()) {
            $('input[name=\"filed_250\"]').eq(i).val($('.infoparttimejobs .mt_companyName').eq(i).html() + $('.infoparttimejobs .mt_department').eq(i).html())
        }
        if ($('input[name=\"filed_251\"]').eq(i).length && $('.infoparttimejobs .mt_positionName').eq(i).html()) {
            $('input[name=\"filed_251\"]').eq(i).val($('.infoparttimejobs .mt_positionName').eq(i).html())
        }
        if ($('input[name=\"filed_248\"]').eq(i).length && $('.infoparttimejobs .mt_startDate').eq(i).html()) {
            if ($('.infoparttimejobs .mt_startDate').eq(i).html().length < 7) {
                $('input[name=\"filed_248\"]').eq(i).val($('.infoparttimejobs .mt_startDate').eq(i).html().split('-').join('-0') + '-01')
            } else {
                $('input[name=\"filed_248\"]').eq(i).val($('.infoparttimejobs .mt_startDate').eq(i).html() + '-01')
            }
        }
        if ($('input[name=\"filed_249\"]').eq(i).length && $('.infoparttimejobs .mt_endDate').eq(i).html()) {
            if ($('.infoparttimejobs .mt_endDate').eq(i).html().length < 7) {
                $('input[name=\"filed_249\"]').eq(i).val($('.infoparttimejobs .mt_endDate').eq(i).html().split('-').join('-0') + '-01')
            } else {
                $('input[name=\"filed_249\"]').eq(i).val($('.infoparttimejobs .mt_endDate').eq(i).html() + '-01')
            }
        }
        if ($('textarea[name=\"filed_255\"]').eq(i).length && $('.infoparttimejobs .workContent').eq(i).html()) {
            $('textarea[name=\"filed_255\"]').eq(i).val($('.infoparttimejobs .workContent').eq(i).html())
        }
    }
}
if ($('h3').eq(13).length&&$('h3').eq(13).html() == '��������/�������') {
    for (var i = 0; i < $('.infoschaward').length; i++) {
        if ($('.infoschaward .mt_awardsName').eq(i).html() && $('input[name=\"filed_266\"]').eq(i).length) {
            $('input[name=\"filed_266\"]').eq(i).val($('.infoschaward .mt_awardsName').eq(i).html())
        }
        if ($('.infoschaward .mt_awardsType').eq(i).html() && $('input[name=\"filed_267\"]').eq(i).length) {
            $('input[name=\"filed_267\"]').eq(i).val($('.infoschaward .mt_awardsType').eq(i).html() + $('.infoschaward .mt_awardsLevel').eq(i).html())
        }
        if ($('input[name=\"filed_265\"]').eq(i).length && $('.infoschaward .mt_awardsDate').eq(i).html()) {
            if ($('.infoschaward .mt_awardsDate').eq(i).html().length < 7) {
                $('input[name=\"filed_265\"]').eq(i).val($('.infoschaward .mt_awardsDate').eq(i).html().split('-').join('-0') + '-01')
            } else {
                $('input[name=\"filed_265\"]').eq(i).val($('.infoschaward .mt_awardsDate').eq(i).html() + '-01')
            }
        }
        if ($('.infoschaward .mt_awardsDes').eq(i).html() && $('textarea[name=\"filed_269\"]').eq(i).length) {
            $('textarea[name=\"filed_269\"]').eq(i).val($('.infoschaward .mt_awardsDes').eq(i).html() + $('.infoschaward .mt_awardsLevel').eq(i).html())
        }
    }
}
var maxid = 0;
var maxedutime;

for (var i = 0; i < $('.infopledu').length; i++) {
    var endyear = parseInt($('#edu-list .mt_endYearY').eq(i).html());
    if (i == 0) {
        maxedutime = endyear;
        maxid = 0
    } else {
        if (endyear > maxedutime) {
            maxedutime = endyear;
            maxid = i
        }
    }
}
if ($('#person_info_filed_209').length && $('.infopledu .mt_schoolName').eq(maxid).html() && $.trim($('#person_info_filed_209').parent().prev().text()) == '��ҵԺУ') {
    $('#person_info_filed_209').val($('.infopledu .mt_schoolName').eq(maxid).html())
}
if ($('#person_info_filed_211').length && $('.infopledu .mt_degree').eq(maxid).html() && $.trim($('#person_info_filed_211').parent().prev().text()) == 'ѧλ') {
    $('#person_info_filed_211').val($('.infopledu .mt_degree').eq(maxid).html())
}
if ($('#person_info_filed_210').length && $('.infopledu .mt_education').eq(maxid).html() && $.trim($('#person_info_filed_210').parent().prev().text()) == 'ѧ��') {
    $('#person_info_filed_210').val($('.infopledu .mt_education').eq(maxid).html())
}
if ($('#person_info_filed_213').length && $('.infopledu .mt_professional').eq(maxid).html() && $.trim($('#person_info_filed_213').parent().prev().text()) == 'רҵ') {
    $('#person_info_filed_213').val($('.infopledu .mt_professional').eq(maxid).html())
}
if ($('#comment_byself_filed_246').length && $('#mt_selfIntro').html() && $.trim($('#comment_byself_filed_246').parent().prev().text()) == '��������') {
    $('#comment_byself_filed_246').val($('#mt_selfIntro').html())
}
if ($('#module_50_filed_200').length && $('#mt_skill').html() && $.trim($('#module_50_filed_200').parent().prev().text()) == 'ҵ�మ��') {
    $('#module_50_filed_200').val($('#mt_skill').html())
}
if ($('h3').eq(5).length && $('h3').eq(5).html() == '��ѵ����') {
    for (var i = 0; i < $('.infotraining').length; i++) {
        if ($('input[name=\"filed_219\"]').eq(i).length && $('.infotraining .mt_trainingCompany').eq(i).html()) {
            $('input[name=\"filed_219\"]').eq(i).val($('.infotraining .mt_trainingCompany').eq(i).html())
        }
        if ($('input[name=\"filed_217\"]').eq(i) && $('.infotraining .mt_startDate').eq(i).html()) {
            if ($('.infotraining .mt_startDate').eq(i).html().length < 7) {
                $('input[name=\"filed_217\"]').eq(i).val($('.infotraining .mt_startDate').eq(i).html().split('-').join('-0') + '-01')
            } else {
                $('input[name=\"filed_217\"]').eq(i).val($('.infotraining .mt_startDate').eq(i).html() + '-01')
            }
        }
        if ($('input[name=\"filed_218\"]').eq(i) && $('.infotraining .mt_endDate').eq(i).html()) {
            if ($('.infotraining .mt_endDate').eq(i).html().length < 7) {
                $('input[name=\"filed_218\"]').eq(i).val($('.infotraining .mt_endDate').eq(i).html().split('-').join('-0') + '-01')
            } else {
                $('input[name=\"filed_218\"]').eq(i).val($('.infotraining .mt_endDate').eq(i).html() + '-01')
            }
        }
        if ($('textarea[name=\"filed_221\"]').eq(i).length && $('.infotraining .mt_trainingName').eq(i).html()) {
            $('textarea[name=\"filed_221\"]').eq(i).val($('.infotraining .mt_trainingName').eq(i).html())
        }
        if ($('textarea[name=\"filed_223\"]').eq(i).length && $('.infotraining .mt_trainingDes').eq(i).html()) {
            $('textarea[name=\"filed_223\"]').eq(i).val($('.infotraining .mt_trainingDes').eq(i).html())
        }
        if ($('textarea[name=\"filed_222\"]').eq(i).length && $('.infotraining .mt_certificateName').eq(i).html()) {
            $('textarea[name=\"filed_222\"]').eq(i).val($('.infotraining .mt_certificateName').eq(i).html())
        }
    }
}
if ($('h3').eq(6).length && $('h3').eq(6).html() == '��������') {
    for (var i = 0; i < $('.infoparttimejobs').length; i++) {
        if ($('input[name=\"filed_226\"]').eq(i).length && $('.infoparttimejobs .mt_companyName').eq(i).html()) {
            $('input[name=\"filed_226\"]').eq(i).val($('.infoparttimejobs .mt_companyName').eq(i).html())
        }
        if ($('input[name=\"filed_224\"]').eq(i) && $('.infoparttimejobs .mt_startDate').eq(i).html()) {
            if ($('.infoparttimejobs .mt_startDate').eq(i).html().length < 7) {
                $('input[name=\"filed_224\"]').eq(i).val($('.infoparttimejobs .mt_startDate').eq(i).html().split('-').join('-0') + '-01')
            } else {
                $('input[name=\"filed_224\"]').eq(i).val($('.infoparttimejobs .mt_startDate').eq(i).html() + '-01')
            }
        }
        if ($('input[name=\"filed_225\"]').eq(i) && $('.infoparttimejobs .mt_endDate').eq(i).html()) {
            if ($('.infoparttimejobs .mt_endDate').eq(i).html().length < 7) {
                $('input[name=\"filed_225\"]').eq(i).val($('.infoparttimejobs .mt_endDate').eq(i).html().split('-').join('-0') + '-01')
            } else {
                $('input[name=\"filed_225\"]').eq(i).val($('.infoparttimejobs .mt_endDate').eq(i).html() + '-01')
            }
        }
        if ($('input[name=\"filed_227\"]').eq(i).length && $('.infoparttimejobs .mt_department').eq(i).html()) {
            $('input[name=\"filed_227\"]').eq(i).val($('.infoparttimejobs .mt_department').eq(i).html())
        }
        if ($('input[name=\"filed_228\"]').eq(i).length && $('.infoparttimejobs .mt_positionName').eq(i).html()) {
            $('input[name=\"filed_228\"]').eq(i).val($('.infoparttimejobs .mt_positionName').eq(i).html())
        }
        if ($('textarea[name=\"filed_230\"]').eq(i).length && $('.infoparttimejobs .workContent').eq(i).html()) {
            $('textarea[name=\"filed_230\"]').eq(i).val($('.infoparttimejobs .workContent').eq(i).html())
        }
        if ($('input[name=\"filed_231\"]').eq(i).length && $('.infoparttimejobs .mt_reasons').eq(i).html()) {
            $('input[name=\"filed_231\"]').eq(i).val($('.infoparttimejobs .mt_reasons').eq(i).html())
        }
    }
}
if ($('h3').eq(8).length && $('h3').eq(8).html() == 'ѧ����Ϣ') {
    if ($('#module_52_filed_233').length && $('.infoschoolclub .mt_schClubName').html()) {
        var allactive = [];
        for (var i = 0; i < $('.infoschoolclub').length; i++) {
            var active = $('.infoschoolclub .mt_startDateDot').eq(i).html() + '-' + $('.infoschoolclub .mt_endDateDot').eq(i).html() + '\\n' + $('.infoschoolclub .mt_schClubName').eq(i).html() + '\\n' + $('.infoschoolclub .mt_positionName').eq(i).html() + '\\n' + $('.infoschoolclub .mt_workDes').eq(i).html() + '\\n';
            allactive.push(active)
        }
        $('#module_52_filed_233').val(allactive)
    }
    if ($('#module_52_filed_234').length && $('.infoschoolclub .mt_schClubName').html()) {
        var allactive = [];
        for (var i = 0; i < $('.infoschoolclub').length; i++) {
            var active = $('.infoschoolclub .mt_startDateDot').eq(i).html() + '-' + $('.infoschoolclub .mt_endDateDot').eq(i).html() + '\\n' + $('.infoschoolclub .mt_schClubName').eq(i).html() + '\\n' + $('.infoschoolclub .mt_positionName').eq(i).html() + '\\n' + $('.infoschoolclub .mt_workDes').eq(i).html() + '\\n';
            allactive.push(active)
        }
        $('#module_52_filed_234').val(allactive)
    }
    if ($('#module_52_filed_232').length && $('.infoschaward .mt_awardsName').html()) {
        var allaward = [];
        for (var i = 0; i < $('.infoschaward').length; i++) {
            var award = $('.infoschaward .mt_awardsDate').eq(i).html() + '\\n' + $('.infoschaward .mt_awardsName').eq(i).html() + '\\n' + $('.infoschaward .mt_awardsType').eq(i).html() + '\\n' + $('.infoschaward .mt_awardsLevel').eq(i).html() + '\\n';
            allaward.push(award)
        }
        $('#module_52_filed_232').val(allaward)
    }
}
if ($('h3').eq(10).length && $('h3').eq(10).html() == '֤��') {
    for (var i = 0; i < $('.infoplcerti').length; i++) {
        if ($('.infoplcerti .mt_certificateName').eq(i).html() && $('input[name=\"filed_238\"]').eq(i).length) {
            $('input[name=\"filed_238\"]').eq(i).val($('.infoplcerti .mt_certificateName').eq(i).html())
        }
        if ($('.infoplcerti .mt_certificateDes').eq(i).html() && $('textarea[name=\"filed_240\"]').eq(i).length) {
            $('textarea[name=\"filed_240\"]').eq(i).val($('.infoplcerti .mt_certificateDes').eq(i).html())
        }
        if ($('input[name=\"filed_239\"]').eq(i).length && $('.infoplcerti .mt_getDate').eq(i).html() && $.trim($('input[name=\"filed_239\"]').parent().prev().text()).substring(0, 4) == '���ʱ��') {
            if ($('.infoplcerti .mt_getDate').eq(i).html().length < 7) {
                $('input[name=\"filed_239\"]').eq(i).val($('.infoplcerti .mt_getDate').eq(i).html().split('-').join('-0') + '-01')
            } else {
                $('input[name=\"filed_239\"]').eq(i).val($('.infoplcerti .mt_getDate').eq(i).html() + '-01')
            }
        }
    }
}
if ($('h3').eq(11).length && $('h3').eq(11).html() == '��������') {
    for (var i = 0; i < $('.infoOtherSkill').length; i++) {
        if ($('.infoOtherSkill .mt_skillListenLevel').eq(i).html() && $('input[name=\"filed_242\"]').eq(i).length) {
            $('input[name=\"filed_242\"]').eq(i).val($('.infoOtherSkill .mt_skillListenLevel').eq(i).html())
        }
        if ($('.infoOtherSkill .mt_skillWriteLevel').eq(i).html() && $('input[name=\"filed_243\"]').eq(i).length) {
            $('input[name=\"filed_243\"]').eq(i).val($('.infoOtherSkill .mt_skillWriteLevel').eq(i).html())
        }
        if ($('.infoOtherSkill .mt_skillOtherLang').eq(i).html() && $('input[name=\"filed_241\"]').eq(i).length) {
            $('input[name=\"filed_241\"]').eq(i).val($('.infoOtherSkill .mt_skillOtherLang').eq(i).html())
        }
    }
}
if ($('h3').eq(5).length && $('h3').eq(5).html().substring(0, 4) == '���ž���') {
    for (var i = 0; i < $('.infoschoolclub').length; i++) {
        if ($('input[name=\"filed_202\"]').eq(i).length && $('.infoschoolclub .mt_schClubName').eq(i).html() && $.trim($('#module_50_filed_202').parent().prev().text()) == '��������') {
            $('input[name=\"filed_202\"]').eq(i).val($('.infoschoolclub .mt_schClubName').eq(i).html())
        }
        if ($('input[name=\"filed_203\"]').eq(i).length && $('.infoschoolclub .mt_positionName').eq(i).html() && $.trim($('#module_50_filed_203').parent().prev().text()) == 'ְ��') {
            $('input[name=\"filed_203\"]').eq(i).val($('.infoschoolclub .mt_positionName').eq(i).html())
        }
        if ($('textarea[name=\"filed_204\"]').eq(i).length && $.trim($('#module_50_filed_204').parent().prev().text()) == '��������') {
            $('textarea[name=\"filed_204\"]').eq(i).val($('.infoschoolclub .mt_workDes').eq(i).html())
        }
    }
}
if ($('h3').eq(6).length && $('h3').eq(6).html().substring(0, 4) == 'У��ְ��') {
    for (var i = 0; i < $('.infoschoolclub').length; i++) {
        if ($('input[name=\"filed_209\"]').eq(i).length && $('.infoschoolclub .mt_positionName').eq(i).html() && $.trim($('#module_50_filed_209').parent().prev().text()) == 'ְ������') {
            $('input[name=\"filed_209\"]').eq(i).val($('.infoschoolclub .mt_positionName').eq(i).html())
        }
    }
    for (var i = 0; i < $('.infoschaward').length; i++) {
        if ($('input[name=\"filed_210\"]').eq(i).length && $('.infoschaward .mt_awardsDate').eq(i).html()) {
            if ($('.infoschaward .mt_awardsDate').eq(i).html().length < 7) {
                $('input[name=\"filed_210\"]').eq(i).val($('.infoschaward .mt_awardsDate').eq(i).html().split('-').join('-0') + '-01')
            } else {
                $('input[name=\"filed_210\"]').eq(i).val($('.infoschaward .mt_awardsDate').eq(i).html() + '-01')
            }
        }
        if ($('.infoschaward .mt_awardsDes').eq(i).html() && $('input[name=\"filed_212\"]').eq(i).length) {
            $('input[name=\"filed_212\"]').eq(i).val($('.infoschaward .mt_awardsDes').eq(i).html() + $('.infoschaward .mt_awardsLevel').eq(i).html())
        }
    }
}
if ($('h3').eq(7).length && $('h3').eq(7).html() == '������ʵϰ����') {
    if($('.infofulltimejobs').length>0){
        $('#module_51').find($('input[name=\"filed_210\"]')).val($('.infofulltimejobs .mt_companyName').eq(0).html());
        $('#module_51').find($('select[name=\"filed_211\"]')).prev().find('div').eq(3).click();
        $('#module_51').find($('input[name=\"filed_212\"]')).val($('.infofulltimejobs .mt_positionName').eq(0).html());
        $('#module_51').find($('input[name=\"filed_213\"]')).val(addZero($('.infofulltimejobs .mt_startDate').eq(0).html())+'-01');
        $('#module_51').find($('input[name=\"filed_214\"]')).val(addZero($('.infofulltimejobs .mt_endDate').eq(0).html())+'-01');
        $('#module_51').find($('textarea[name=\"work_description\"]')).val($('.infofulltimejobs .workContent').eq(0).html());
        $('#module_51').find($('input[name=\"filed_215\"]')).val($('.infofulltimejobs .mt_reterenceName').eq(0).html());
        $('#module_51').find($('input[name=\"filed_216\"]')).val($('.infofulltimejobs .mt_reterenceRelation').eq(0).html());
        $('#module_51').find($('input[name=\"filed_217\"]')).val($('.infofulltimejobs .mt_reterenceCompany').eq(0).html());
        $('#module_51').find($('input[name=\"filed_218\"]')).val($('.infofulltimejobs .mt_reterencePosition').eq(0).html());
        $('#module_51').find($('input[name=\"filed_219\"]')).val($('.infofulltimejobs .mt_reterence_phone').eq(0).html());
        if($('.infofulltimejobs').length>1){
            $('#module_51').find($('input[name=\"filed_220\"]')).val($('.infofulltimejobs .mt_companyName').eq(0).html());
            $('#module_51').find($('select[name=\"filed_221\"]')).prev().find('div').eq(3).click();
            $('#module_51').find($('input[name=\"filed_222\"]')).val($('.infofulltimejobs .mt_positionName').eq(0).html());
            $('#module_51').find($('input[name=\"filed_223\"]')).val(addZero($('.infofulltimejobs .mt_startDate').eq(0).html())+'-01');
            $('#module_51').find($('input[name=\"filed_224\"]')).val(addZero($('.infofulltimejobs .mt_endDate').eq(0).html())+'-01');
            $('#module_51').find($('textarea[name=\"225\"]')).val($('.infofulltimejobs .workContent').eq(0).html());
            $('#module_51').find($('input[name=\"filed_226\"]')).val($('.infofulltimejobs .mt_reterenceName').eq(0).html());
            $('#module_51').find($('input[name=\"filed_227\"]')).val($('.infofulltimejobs .mt_reterenceRelation').eq(0).html());
            $('#module_51').find($('input[name=\"filed_228\"]')).val($('.infofulltimejobs .mt_reterenceCompany').eq(0).html());
            $('#module_51').find($('input[name=\"filed_229\"]')).val($('.infofulltimejobs .mt_reterencePosition').eq(0).html());
            $('#module_51').find($('input[name=\"filed_230\"]')).val($('.infofulltimejobs .mt_reterence_phone').eq(0).html());
        }
        else if($('.infoparttimejobs').length>0){
            $('#module_51').find($('input[name=\"filed_220\"]')).val($('.infoparttimejobs .mt_companyName').eq(0).html());
            $('#module_51').find($('select[name=\"filed_221\"]')).prev().find('div').eq(4).click();
            $('#module_51').find($('input[name=\"filed_222\"]')).val($('.infoparttimejobs .mt_positionName').eq(0).html());
            $('#module_51').find($('input[name=\"filed_223\"]')).val(addZero($('.infoparttimejobs .mt_startDate').eq(0).html())+'-01');
            $('#module_51').find($('input[name=\"filed_224\"]')).val(addZero($('.infoparttimejobs .mt_endDate').eq(0).html())+'-01');
            $('#module_51').find($('textarea[name=\"225\"]')).val($('.infoparttimejobs .workContent').eq(0).html());
            $('#module_51').find($('input[name=\"filed_226\"]')).val($('.infoparttimejobs .mt_reterenceName').eq(0).html());
            $('#module_51').find($('input[name=\"filed_227\"]')).val($('.infoparttimejobs .mt_reterenceRelation').eq(0).html());
            $('#module_51').find($('input[name=\"filed_228\"]')).val($('.infoparttimejobs .mt_reterenceCompany').eq(0).html());
            $('#module_51').find($('input[name=\"filed_229\"]')).val($('.infoparttimejobs .mt_reterencePosition').eq(0).html());
            $('#module_51').find($('input[name=\"filed_230\"]')).val($('.infoparttimejobs .mt_reterence_phone').eq(0).html());
        }
    }
    else if($('.infoparttimejobs').length>0){
        $('#module_51').find($('input[name=\"filed_210\"]')).val($('.infoparttimejobs .mt_companyName').eq(0).html());
        $('#module_51').find($('select[name=\"filed_211\"]')).prev().find('div').eq(5).click();
        $('#module_51').find($('input[name=\"filed_212\"]')).val($('.infoparttimejobs .mt_positionName').eq(0).html());
        $('#module_51').find($('input[name=\"filed_213\"]')).val(addZero($('.infoparttimejobs .mt_startDate').eq(0).html())+'-01');
        $('#module_51').find($('input[name=\"filed_214\"]')).val(addZero($('.infoparttimejobs .mt_endDate').eq(0).html())+'-01');
        $('#module_51').find($('textarea[name=\"work_description\"]')).val($('.infoparttimejobs .workContent').eq(0).html());
        $('#module_51').find($('input[name=\"filed_215\"]')).val($('.infoparttimejobs .mt_reterenceName').eq(0).html());
        $('#module_51').find($('input[name=\"filed_216\"]')).val($('.infoparttimejobs .mt_reterenceRelation').eq(0).html());
        $('#module_51').find($('input[name=\"filed_217\"]')).val($('.infoparttimejobs .mt_reterenceCompany').eq(0).html());
        $('#module_51').find($('input[name=\"filed_218\"]')).val($('.infoparttimejobs .mt_reterencePosition').eq(0).html());
        $('#module_51').find($('input[name=\"filed_219\"]')).val($('.infoparttimejobs .mt_reterence_phone').eq(0).html());
        if($('.infoparttimejobs').length>1){
            $('#module_51').find($('input[name=\"filed_220\"]')).val($('.infoparttimejobs .mt_companyName').eq(0).html());
            $('#module_51').find($('select[name=\"filed_221\"]')).prev().find('div').eq(4).click();
            $('#module_51').find($('input[name=\"filed_222\"]')).val($('.infoparttimejobs .mt_positionName').eq(0).html());
            $('#module_51').find($('input[name=\"filed_223\"]')).val(addZero($('.infoparttimejobs .mt_startDate').eq(0).html())+'-01');
            $('#module_51').find($('input[name=\"filed_224\"]')).val(addZero($('.infoparttimejobs .mt_endDate').eq(0).html())+'-01');
            $('#module_51').find($('textarea[name=\"225\"]')).val($('.infoparttimejobs .workContent').eq(0).html());
            $('#module_51').find($('input[name=\"filed_226\"]')).val($('.infoparttimejobs .mt_reterenceName').eq(0).html());
            $('#module_51').find($('input[name=\"filed_227\"]')).val($('.infoparttimejobs .mt_reterenceRelation').eq(0).html());
            $('#module_51').find($('input[name=\"filed_228\"]')).val($('.infoparttimejobs .mt_reterenceCompany').eq(0).html());
            $('#module_51').find($('input[name=\"filed_229\"]')).val($('.infoparttimejobs .mt_reterencePosition').eq(0).html());
            $('#module_51').find($('input[name=\"filed_230\"]')).val($('.infoparttimejobs .mt_reterence_phone').eq(0).html());
        }
    }
}

if($('.top').length){
    if($('input[name=\"username\"]').length){
        if($('input[name=\"marital\"]').length==0) {
            if ($('input[name=\"username\"]').length) {
                $('input[name=\"username\"]').focus();
                $('input[name=\"username\"]').val($('#mt_name').html());
                $('input[name=\"username\"]').blur();
            }
            if ($('#mt_sex').html() === '��' && $('input[name=\"gender\"]').length) {
                $('.widcheck').eq(0).find('a').get(0).click();
            } else {
                $('.widcheck').eq(1).find('a').get(0).click();
            }
            if ($('input[name=\"birth_date_y\"]').length) {
                $('input[name=\"birth_date_y\"]').click();
                $('input[name=\"birth_date_y\"]').val($('#mt_biryear').html() + "��");
                $('input[name=\"birth_date_y\"]').blur();
            }
            if ($('input[name=\"birth_date_m\"]').length) {
                $('input[name=\"birth_date_m\"]').click();
                $('input[name=\"birth_date_m\"]').val($('#mt_birmonth').html() + "��");
                $('input[name=\"birth_date_m\"]').blur();
            }
            if ($('input[name=\"contact_num0\"]').length && $('input[name=\"contact_num0\"]').html() == '') {
                $('input[name=\"contact_num0\"]').click();
                $('input[name=\"contact_num0\"]').val($('#mt_tel').html());
                $('input[name=\"contact_num0\"]').blur();
            }
            if ($('input[name=\"emailshow\"]').length && $('input[name=\"emailshow\"]').html() == '') {
                $('input[name=\"emailshow\"]').click();
                $('input[name=\"emailshow\"]').val($('#mt_email').html());
                $('input[name=\"emailshow\"]').blur();
            }
        }
        if($('input[name=\"marital\"]').length){
            switch ($('#mt_maritalstatus').html()){
                case 'δ��':
                    $('input[name=\"marital\"]').eq(0).click();
                    break;
                case '�ѻ�':
                    $('input[name=\"marital\"]').eq(1).click();
                    break;
                case '���':
                    $('input[name=\"marital\"]').eq(2).click();
                    break;
                default :
                    break;
            }
        }
        if($('select[name=\"id_type\"]').length){
            selectFac($('#mt_idtype').html(),$('select[name=\"id_type\"]'));
        }
        if($('input[name=\"id_number\"]').length&&$('input[name=\"id_number\"]').html()==''){
            $('input[name=\"id_number\"]').val($('#mt_id').html());
        }
        if($('input[name=\"political_status\"]').length){
            switch ($('#mt_polistatus').html()){
                case '�й���Ա':
                case '�й�Ԥ����Ա':
                    $('input[name=\"political_status\"]').eq(0).click();
                    break;
                case '������Ա':
                    $('input[name=\"political_status\"]').eq(1).click();
                    break;
                case 'Ⱥ��':
                    $('input[name=\"political_status\"]').eq(2).click();
                    break;
                case '�޵���������ʿ':
                    $('input[name=\"political_status\"]').eq(4).click();
                    break;
                default :
                    $('input[name=\"political_status\"]').eq(3).click();
                    break;
            }
        }
    }
    else if($('#CommentContent').length){
        $('#CommentContent').val($('#mt_selfIntro').html());
    }
    else if($('#cmpany_name').length){
        var len_full = $('.infofulltimejobs').length;
        var i=0;
        if($('.table1').find('tbody').length){
            i = ($('.table1').find('tbody').find('tr').length)/2;
        }
        else{
            i = 0;
        }
        if($('.infofulltimejobs .mt_companyName').eq(i).length&&$('.infofulltimejobs .mt_companyName').eq(i).html()!=''){
            $('#cmpany_name').val($('.infofulltimejobs .mt_companyName').eq(i).html());
            $('#customSubJobtype').val($('.infofulltimejobs .mt_positionName').eq(i).html());
            var date1 = $('.infofulltimejobs .mt_startDate').eq(i).html().split('-');
            $('#startdateyear').val(date1[0]);
            $('#startdatemonth').val(date1[1]);
            var date2 = $('.infofulltimejobs .mt_endDate').eq(i).html().split('-');
            $('#enddateyear').val(date2[0]);
            $('#enddatemonth').val(date2[1]);
            var opt1 = document.getElementById('salary');
            switch ($('.infofulltimejobs .mt_salaryMonth').eq(i).html()){
                case '1000����':
                    opt1.options[1].selected = true
                    break;
                case '1000-1499':
                case '1500-1999':
                    opt1.options[2].selected = true
                    break;
                case '2000-2999':
                    opt1.options[3].selected = true
                    break;
                case '3000-4499':
                case '4500-5999':
                    opt1.options[4].selected = true
                    break;
                case '6000-7999':
                    opt1.options[5].selected = true
                    break;
                case '8000-9999':
                    opt1.options[6].selected = true
                    break;
                case '10000-11999':
                case '12000-14999':
                    opt1.options[7].selected = true
                    break;
                case '15000-24999':
                    opt1.options[8].selected = true
                    break;
                case '25000����':
                    opt1.options[9].selected = true
                    break;
                default :
                    break;
            }
            $('#job_description').val($('.infofulltimejobs .workDes').eq(i).html());
            var opt2 = document.getElementById('company_size');
            switch ($('.infofulltimejobs .mt_companySize').eq(i).html()){
                case '����50��':
                case '50-149��':
                    opt2.options[2].selected = true
                    break;
                case '150-499��':
                    opt2.options[3].selected = true
                    break;
                case '500-999��':
                    opt2.options[4].selected = true
                    break;
                case '1000-9999��':
                    opt2.options[5].selected = true
                    break;
                case '10000������':
                    opt2.options[6].selected = true
                    break;
                default :
                    break;
            }
            var opt3 = document.getElementById('company_type');
            switch ($('.infofulltimejobs .mt_companyproperty').eq(i).html()){
                case '����-ŷ��':
                case '����-��ŷ��':
                    opt3.options[4].selected = true
                    break;
                case '����-ŷ��':
                case '����-��ŷ��':
                    opt3.options[3].selected = true
                    break;
                case '����':
                    opt3.options[1].selected = true
                    break;
                case '��Ӫ��˾':
                    opt3.options[2].selected = true
                    break;
                case '�������':
                    opt3.options[7].selected = true
                    break;
                case '��������':
                    opt3.options[8].selected = true
                    break;
                case '��ҵ��λ':
                    opt3.options[9].selected = true
                    break;
                case '���й�˾':
                    opt3.options[6].selected = true
                    break;
                default :
                    opt3.options[10].selected = true
                    break;
            }
        }
        else if($('.infoparttimejobs .mt_companyName').eq(i-len_full).length&&$('.infoparttimejobs .mt_companyName').eq(i-len_full).html()!=''){
            $('#cmpany_name').val($('.infoparttimejobs .mt_companyName').eq(i-len_full).html());
            $('#customSubJobtype').val($('.infoparttimejobs .mt_positionName').eq(i-len_full).html());
            var date1 = $('.infoparttimejobs .mt_startDate').eq(i-len_full).html().split('-');
            $('#startdateyear').val(date1[0]);
            $('#startdatemonth').val(date1[1]);
            var date2 = $('.infoparttimejobs .mt_endDate').eq(i-len_full).html().split('-');
            $('#enddateyear').val(date2[0]);
            $('#enddatemonth').val(date2[1]);
            var opt1 = document.getElementById('salary');
            switch ($('.infoparttimejobs .mt_salaryMonth').eq(i-len_full).html()){
                case '1000����':
                    opt1.options[1].selected = true
                    break;
                case '1000-1499':
                case '1500-1999':
                    opt1.options[2].selected = true
                    break;
                case '2000-2999':
                    opt1.options[3].selected = true
                    break;
                case '3000-4499':
                case '4500-5999':
                    opt1.options[4].selected = true
                    break;
                case '6000-7999':
                    opt1.options[5].selected = true
                    break;
                case '8000-9999':
                    opt1.options[6].selected = true
                    break;
                case '10000-11999':
                case '12000-14999':
                    opt1.options[7].selected = true
                    break;
                case '15000-24999':
                    opt1.options[8].selected = true
                    break;
                case '25000����':
                    opt1.options[9].selected = true
                    break;
                default :
                    break;
            }
            $('#job_description').val($('.infoparttimejobs .workDes').eq(i-len_full).html());
            var opt2 = document.getElementById('company_size');
            switch ($('.infoparttimejobs .mt_companySize').eq(i-len_full).html()){
                case '����50��':
                case '50-149��':
                    opt2.options[2].selected = true
                    break;
                case '150-499��':
                    opt2.options[3].selected = true
                    break;
                case '500-999��':
                    opt2.options[4].selected = true
                    break;
                case '1000-9999��':
                    opt2.options[5].selected = true
                    break;
                case '10000������':
                    opt2.options[6].selected = true
                    break;
                default :
                    break;
            }
            var opt3 = document.getElementById('company_type');
            switch ($('.infoparttimejobs .mt_companyproperty').eq(i-len_full).html()){
                case '����-ŷ��':
                case '����-��ŷ��':
                    opt3.options[4].selected = true
                    break;
                case '����-ŷ��':
                case '����-��ŷ��':
                    opt3.options[3].selected = true;
                    break;
                case '����':
                    opt3.options[1].selected = true;
                    break;
                case '��Ӫ��˾':
                    opt3.options[2].selected = true;
                    break;
                case '�������':
                    opt3.options[7].selected = true;
                    break;
                case '��������':
                    opt3.options[8].selected = true;
                    break;
                case '��ҵ��λ':
                    opt3.options[9].selected = true;
                    break;
                case '���й�˾':
                    opt3.options[6].selected = true;
                    break;
                default :
                    opt3.options[10].selected = true;
                    break;
            }
        }
    }

    else if($('.table5').length&&$('.table5').find('#school_name').length){
        var i=0;
        if($('.table1').find('tbody').length){
            i = ($('.table1').find('tbody').eq(0).children('tr').length);
        }
        else{
            i = 0;
        }
        $('input[name=\"start_date_y\"]').val($('.infopledu .mt_startYearY').eq(i).html());
        $('input[name=\"start_date_m\"]').val($('.infopledu .mt_startYearM').eq(i).html());
        $('input[name=\"end_date_y\"]').val($('.infopledu .mt_endYearY').eq(i).html());
        $('input[name=\"end_date_m\"]').val($('.infopledu .mt_endYearM').eq(i).html());
        $('input[name=\"school_name\"]').val($('.infopledu .mt_schoolName').eq(i).html());
        var opt1 = $('select[name=\"degree\"]').get(0);
        switch ($('.infopledu .mt_degree').eq(i).html()){
            case 'ѧʿ':
            case '˫ѧʿ':
                opt1.options[2].selected = true;
                break;
            case '˶ʿ':
                opt1.options[3].selected = true;
                break;
            case '��ʿ':
                opt1.options[4].selected = true;
                break;
            case 'MBA':
                opt1.options[5].selected = true;
                break;
            case '����':
                opt1.options[11].selected = true;
                break;
            default :
                break;
        }
    }
    else if($('.table5').length&&$('.table5').find('#institution').length){
        var i=0;
        if($('.table1').find('tbody').length){
            i = ($('.table1').find('tbody').eq(0).children('tr').length);
        }
        else{
            i = 0;
        }
        var date1 = $('.infotraining .mt_startDate').eq(i).html().split('-');
        var date2 = $('.infotraining .mt_endDate').eq(i).html().split('-');
        $('input[name=\"start_date_y\"]').val(date1[0]);
        $('input[name=\"start_date_m\"]').val(date1[1]);
        $('input[name=\"end_date_y\"]').val(date2[0]);
        $('input[name=\"end_date_m\"]').val(date2[1]);
        $('input[name=\"institution\"]').val($('.infotraining .mt_trainingCompany').eq(i).html());
        $('input[name=\"course\"]').val($('.infotraining .mt_trainingName').eq(i).html());
        $('input[name=\"city\"]').val($('.infotraining .mt_trainingPlace').eq(i).html());
        $('input[name=\"certificate\"]').val($('.infotraining .mt_certificateName').eq(i).html());
        $('textarea[name=\"details\"]').val($('.infotraining .mt_trainingDes').eq(i).html());
    }
    else if($('.table5').length&&$('.table5').find($('select[name=\"languages0\"]')).length){
        var i=0;
        if($('.table1').find('tbody').length){
            i = ($('.table1').find('tbody').eq(0).children('tr').length);
        }
        else{
            i = 0;
        }
        if(($('.infoEnglishSkill').length||$('.infoOtEnglishSkill').length)&&i==0){
            $('select[name=\"languages0\"]').get(0).options[1].selected = true;
            $('select[name=\"languages0\"]').get(0).dispatchEvent(event);
        }
        else if(($('.infoEnglishSkill').length||$('.infoOtEnglishSkill').length)&&$('.infoOtherSkill').length&&$('.infoOtherSkill').html()){
            selectFac($('.infoOtherSkill .mt_skillOtherLang').eq(i-1).html(),$('select[name=\"languages0\"]'));
            $('select[name=\"languages0\"]').get(0).dispatchEvent(event);
            selectFac($('.infoOtherSkill .mt_skillWriteLevel').eq(i-1).html(),$('select[name=\"read0\"]'));
            selectFac($('.infoOtherSkill .mt_skillListenLevel').eq(i-1).html(),$('select[name=\"spoken0\"]'));
        }
        else if($('.infoEnglishSkill').length==0&&$('.infoOtEnglishSkill').length==0&&$('.infoOtherSkill').length&&$('.infoOtherSkill').html()){
            selectFac($('.infoOtherSkill .mt_skillOtherLang').eq(i).html(),$('select[name=\"languages0\"]'));
            $('select[name=\"languages0\"]').get(0).dispatchEvent(event);
            selectFac($('.infoOtherSkill .mt_skillWriteLevel').eq(i).html(),$('select[name=\"read0\"]'));
            selectFac($('.infoOtherSkill .mt_skillListenLevel').eq(i).html(),$('select[name=\"spoken0\"]'));
        }
    }
    else if($('.table5').length&&$('.table5').find($('select[name=\"certification_type\"]')).length){
        var i=0;
        if($('.table1').find('tbody').length){
            i = ($('.table1').find('tbody').eq(0).children('tr').length);
        }
        else{
            i = 0;
        }
        if($('.mt_certificateName').length&&$('.mt_certificateName').html()){
            var date = $('.infoplcerti .mt_getDate').eq(i).html().split('-');
            selectFac(date[0],$('select[name=\"start_date_y\"]'));
            selectFac(date[1],$('select[name=\"start_date_m\"]'));
        }
    }
    else if($('.table5').length&&$('.table5').find($('textarea[name=\"description\"]')).length&&$('.table5').length&&!$('.table5').find($('#project_name')).length&&$('.table5').length&&!$('.table5').find($('#rewards0')).length){
        $('textarea[name=\"description\"]').val($('#mt_skill').html());
    }
    else if($('.table5').length&&$('.table5').find($('#project_name')).length){
        var i=0;
        if($('.table1').find('tbody').length){
            i = ($('.table1').find('tbody').eq(0).children('tr').length);
        }
        else{
            i = 0;
        }
        if($('.infoproject .mt_projectName').eq(i).html()){
            $('input[name=\"project_name\"]').val($('.infoproject .mt_projectName').eq(i).html());
            var date1 = $('.infoproject .mt_prostarttime').eq(i).html().split('-');
            var date2 = $('.infoproject .mt_proendtime').eq(i).html().split('-');
            $('input[name=\"start_date_y\"]').val(date1[0]);
            $('input[name=\"start_date_m\"]').val(date1[1]);
            $('input[name=\"end_date_y\"]').val(date2[0]);
            $('input[name=\"end_date_m\"]').val(date2[1]);
            $('textarea[name=\"responsibilities\"]').val($('.infoproject .mt_projectDuty').eq(i).html());
            $('textarea[name=\"description\"]').val($('.infoproject .mt_projectRemark').eq(i).html());
        }
    }
    else if($('.table5').length&&$('.table5').find($('#rewards0')).length){
        for(var i=0;i<3;i++){
            if($('.infoschaward .mt_awardsName').eq(i).html()){
                var rewards = document.getElementsByName('rewards'+i);
                rewards[0].value =$('.infoschaward .mt_awardsName').eq(i).html();
                var opt = document.getElementsByName('rewards_level'+i);
                switch ($('.infoschaward .mt_awardsType').eq(i).html()){
                    case '���ʼ�':
                        opt[0].options[6].selected = true;
                        break;
                    case '���Ҽ�':
                        opt[0].options[5].selected = true;
                        break;
                    case 'ʡ�м�':
                        opt[0].options[4].selected = true;
                        break;
                    case 'ѧУ��':
                    case 'Ժϵ��':
                        opt[0].options[2].selected = true;
                        break;
                    default :
                        break;
                }
                var date = $('.infoschaward .mt_awardsDate').eq(i).html().split('-');
                var date_y = document.getElementsByName('date_y'+i);
                var date_m = document.getElementsByName('date_m'+i);
                selectFaccc(date[0],date_y[0]);
                selectFaccc(date[1],date_m[0]);
                var description_rewards = document.getElementsByName('description_rewards'+i);
                description_rewards[0].value = ($('.infoschaward .mt_awardsDes').eq(i).html());
            }
        }
    }
    else if($('.table5').length&&$('.table5').find($('#practice_name')).length){
        var i=0;
        if($('.table1').find('tbody').length){
            i = ($('.table1').find('tbody').eq(0).children('tr').length);
        }
        else{
            i = 0;
        }
        if($('.infoschoolclub .mt_schClubName').eq(i).html()){
            $('input[name=\"practice_name\"]').val($('.infoschoolclub .mt_schClubName').eq(i).html());
            var date1 = $('.infoschoolclub .mt_startDate').eq(i).html().split('-');
            var date2 = $('.infoschoolclub .mt_endDate').eq(i).html().split('-');
            $('input[name=\"practice_start_date_y\"]').val(date1[0]);
            $('input[name=\"practice_start_date_m\"]').val(date1[1]);
            $('input[name=\"practice_end_date_y\"]').val(date2[0]);
            $('input[name=\"practice_end_date_m\"]').val(date2[1]);
            $('textarea[name=\"description_practice\"]').val($('.infoschoolclub .mt_workDes').eq(i).html());
        }

    }

    else if($('.tiggleDiv').length){
        if($('.infofulltimejobs .mt_companyName').length&&$('.infofulltimejobs .mt_companyName').html()!=''){
            if($('input[name=\"CompanyName\"]').length){
                $('input[name=\"CompanyName\"]').focus();
                $('input[name=\"CompanyName\"]').val($('.infofulltimejobs .mt_companyName').eq(0).html());
                $('input[name=\"CompanyName\"]').blur();
            }
            if($('input[name=\"JobTitle\"]').length){
                $('input[name=\"JobTitle\"]').focus();
                $('input[name=\"JobTitle\"]').val($('.infofulltimejobs .mt_positionName').eq(0).html());
                $('input[name=\"JobTitle\"]').blur();
            }
            var date1 = $('.infofulltimejobs .mt_startDate').eq(0).html().split('-');
            if($('input[name=\"WorkDateStartYear\"]').length){
                $('input[name=\"WorkDateStartYear\"]').click();
                $('input[name=\"WorkDateStartYear\"]').val(date1[0]+"��");
                $('input[name=\"WorkDateStartYear\"]').blur();
            }
            if($('input[name=\"WorkDateStartMonth\"]').length){
                $('input[name=\"WorkDateStartMonth\"]').click();
                $('input[name=\"WorkDateStartMonth\"]').val(date1[1]+"��");
                $('input[name=\"WorkDateStartMonth\"]').blur();
            }
            var date2 = $('.infofulltimejobs .mt_endDate').eq(0).html().split('-');
            if($('input[name=\"WorkDateEndYear\"]').length){
                $('input[name=\"WorkDateEndYear\"]').click();
                $('input[name=\"WorkDateEndYear\"]').val(date2[0]+"��");
                $('input[name=\"WorkDateEndYear\"]').blur();
            }
            if($('input[name=\"WorkDateEndMonth\"]').length){
                $('input[name=\"WorkDateEndMonth\"]').click();
                $('input[name=\"WorkDateEndMonth\"]').val(date2[1]+"��");
                $('input[name=\"WorkDateEndMonth\"]').blur();
            }
            if($('#simOption01').length){
                $('#simOption01').click();
                switch ($('.infofulltimejobs .mt_salaryMonth').eq(0).html()){
                    case '1000����':
                        $('.eleOption1').eq(0).find('li').eq(1).click();
                        break;
                    case '1000-1499':
                    case '1500-1999':
                        $('.eleOption1').eq(0).find('li').eq(2).click();
                        break;
                    case '2000-2999':
                        $('.eleOption1').eq(0).find('li').eq(3).click();
                        break;
                    case '3000-4499':
                    case '4500-5999':
                        $('.eleOption1').eq(0).find('li').eq(4).click();
                        break;
                    case '6000-7999':
                        $('.eleOption1').eq(0).find('li').eq(5).click();
                        break;
                    case '8000-9999':
                        $('.eleOption1').eq(0).find('li').eq(6).click();
                        break;
                    case '10000-11999':
                    case '12000-14999':
                        $('.eleOption1').eq(0).find('li').eq(7).click();
                        break;
                    case '15000-24999':
                        $('.eleOption1').eq(0).find('li').eq(8).click();
                        break;
                    case '25000����':
                        $('.eleOption1').eq(0).find('li').eq(9).click();
                        break;
                    default :
                        break;
                }
                $('#simOption01').blur();
            }
            if($('#comment').length){
                $('#comment').click();
                $('#comment').val($('.infofulltimejobs .workContent').eq(0).html());
                $('#comment').blur();
            }
        }
        else if($('.infoparttimejobs .mt_companyName').length&&$('.infoparttimejobs .mt_companyName').html()!=''){
            if($('input[name=\"CompanyName\"]').length){
                $('input[name=\"CompanyName\"]').focus();
                $('input[name=\"CompanyName\"]').val($('.infoparttimejobs .mt_companyName').eq(0).html());
                $('input[name=\"CompanyName\"]').blur();
            }
            if($('input[name=\"JobTitle\"]').length){
                $('input[name=\"JobTitle\"]').focus();
                $('input[name=\"JobTitle\"]').val($('.infoparttimejobs .mt_positionName').eq(0).html());
                $('input[name=\"JobTitle\"]').blur();
            }
            var date1 = $('.infoparttimejobs .mt_startDate').eq(0).html().split('-');
            if($('input[name=\"WorkDateStartYear\"]').length){
                $('input[name=\"WorkDateStartYear\"]').click();
                $('input[name=\"WorkDateStartYear\"]').val(date1[0]+"��");
                $('input[name=\"WorkDateStartYear\"]').blur();
            }
            if($('input[name=\"WorkDateStartMonth\"]').length){
                $('input[name=\"WorkDateStartMonth\"]').click();
                $('input[name=\"WorkDateStartMonth\"]').val(date1[1]+"��");
                $('input[name=\"WorkDateStartMonth\"]').blur();
            }
            var date2 = $('.infoparttimejobs .mt_endDate').eq(0).html().split('-');
            if($('input[name=\"WorkDateEndYear\"]').length){
                $('input[name=\"WorkDateEndYear\"]').click();
                $('input[name=\"WorkDateEndYear\"]').val(date2[0]+"��");
                $('input[name=\"WorkDateEndYear\"]').blur();
            }
            if($('input[name=\"WorkDateEndMonth\"]').length){
                $('input[name=\"WorkDateEndMonth\"]').click();
                $('input[name=\"WorkDateEndMonth\"]').val(date2[1]+"��");
                $('input[name=\"WorkDateEndMonth\"]').blur();
            }
            if($('#simOption01').length){
                $('#simOption01').click();
                switch ($('.infoparttimejobs .mt_salaryMonth').eq(0).html()){
                    case '1000����':
                        $('.eleOption1').eq(0).find('li').eq(1).click();
                        break;
                    case '1000-1499':
                    case '1500-1999':
                        $('.eleOption1').eq(0).find('li').eq(2).click();
                        break;
                    case '2000-2999':
                        $('.eleOption1').eq(0).find('li').eq(3).click();
                        break;
                    case '3000-4499':
                    case '4500-5999':
                        $('.eleOption1').eq(0).find('li').eq(4).click();
                        break;
                    case '6000-7999':
                        $('.eleOption1').eq(0).find('li').eq(5).click();
                        break;
                    case '8000-9999':
                        $('.eleOption1').eq(0).find('li').eq(6).click();
                        break;
                    case '10000-11999':
                    case '12000-14999':
                        $('.eleOption1').eq(0).find('li').eq(7).click();
                        break;
                    case '15000-24999':
                        $('.eleOption1').eq(0).find('li').eq(8).click();
                        break;
                    case '25000����':
                        $('.eleOption1').eq(0).find('li').eq(9).click();
                        break;
                    default :
                        break;
                }
                $('#simOption01').click();
                $('#simOption01').blur();
            }
            if($('#comment').length){
                $('#comment').click();
                $('#comment').val($('.infoparttimejobs .workContent').eq(0).html());
                $('#comment').blur();
            }
        }
        else{
            $('#work_experience_no').get(0).click();
        }
        if($('#simOption02').length){
            $('#simOption02').click();
            switch ($('.infopledu .mt_degree').eq(0).html()){
                case 'ѧʿ':
                case '˫ѧʿ':
                    $('.eleOption2').eq(0).find('li').eq(1).click();
                    break;
                case '˶ʿ':
                    $('.eleOption2').eq(0).find('li').eq(2).click();
                    break;
                case '��ʿ':
                    $('.eleOptieleOption2on1').eq(0).find('li').eq(3).click();
                    break;
                case 'MBA':
                    $('.eleOption2').eq(0).find('li').eq(4).click();
                    break;
                case '����':
                    $('.eleOption2').eq(0).find('li').eq(10).click();
                    break;
                default :
                    break;
            }
            $('#simOption02').click();
            $('#simOption02').blur();
        }
        if($('input[name=\"EduDateStartYear\"]').length){
            $('input[name=\"EduDateStartYear\"]').click();
            $('input[name=\"EduDateStartYear\"]').val($('.infopledu .mt_startYearY').eq(0).html()+"��");
            $('input[name=\"EduDateStartYear\"]').blur();
        }
        if($('input[name=\"EduDateStartMonth\"]').length){
            $('input[name=\"EduDateStartMonth\"]').click();
            $('input[name=\"EduDateStartMonth\"]').val($('.infopledu .mt_startYearM').eq(0).html()+"��");
            $('input[name=\"EduDateStartMonth\"]').blur();
        }
        if($('input[name=\"EduDateEndYear\"]').length){
            $('input[name=\"EduDateEndYear\"]').click();
            $('input[name=\"EduDateEndYear\"]').val($('.infopledu .mt_endYearY').eq(0).html()+"��");
            $('input[name=\"EduDateEndYear\"]').blur();
        }
        if($('input[name=\"EduDateEndMonth\"]').length){
            $('input[name=\"EduDateEndMonth\"]').click();
            $('input[name=\"EduDateEndMonth\"]').val($('.infopledu .mt_endYearM').eq(0).html()+"��");
            $('input[name=\"EduDateEndMonth\"]').blur();
        }
        if($('input[name=\"SchoolName\"]').length){
            $('input[name=\"SchoolName\"]').focus();
            $('input[name=\"SchoolName\"]').val($('.infopledu .mt_schoolName').eq(0).html());
            $('input[name=\"SchoolName\"]').blur();
        }
        if($('input[name=\"MajorName\"]').length){
            $('input[name=\"MajorName\"]').focus();
            $('input[name=\"MajorName\"]').val($('.infopledu .mt_professional').eq(0).html());
            $('input[name=\"MajorName\"]').blur();
        }
    }
}



