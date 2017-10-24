if($('#jm_qiuck_cover')){$('#jm_qiuck_cover').fadeIn();
setTimeout(function(){$('#jm_qiuck_cover').fadeOut()},1000)}

if (KISSY.one('input[name=\"name\"]')) {
    KISSY.one('input[name=\"name\"]').val(KISSY.one('#mt_name').html());
}
if (KISSY.one('input[name=\"birth_date\"]')) {
    KISSY.one('input[name=\"birth_date\"]').val(KISSY.one('#mt_birth').html());
}

if (KISSY.one('input[name=\"school\"]')) {
    KISSY.one('input[name=\"school\"]').val($('.mt_schoolName').html());
}
if (KISSY.one('#gender') && KISSY.one('#mt_sex').html() == '男') {
    document.getElementsByTagName('input')[3].checked = true;
}
if (KISSY.one('#gender') && KISSY.one('#mt_sex').html() == '女') {
    document.getElementsByTagName('input')[4].checked = true;
} 

if (KISSY.one('input[name=\"tel\"]')) {
    KISSY.one('input[name=\"tel\"]').val(KISSY.one('#mt_tel').html());
}
if (KISSY.one('input[name=\"email\"]')) {
    KISSY.one('input[name=\"email\"]').val(KISSY.one('#mt_email').html());
}
if (KISSY.one('input[name=\"communicationAddress\"]')) {
    KISSY.one('input[name=\"communicationAddress\"]').val(KISSY.one('#mt_postadd').html());
}
if (KISSY.one('input[name=\"major\"]')) {
    KISSY.one('input[name=\"major\"]').val($('.infopledu .mt_professional').html());
}
if (KISSY.one('input[name=\"guaduateTime\"]')) {
    KISSY.one('input[name=\"guaduateTime\"]').val($('.infopledu .mt_endYear').html());
}
if (KISSY.one('input[name=\"degree\"]')) {
    KISSY.one('input[name=\"degree\"]').val(KISSY.one('#mt_edu').html());
}

if (KISSY.one('textarea[name=\"resume\"]')) {
    var text=('实习经历：')+$('.infoparttimejobs .mt_workList').eq(0).html();
    for (var i = 1; i < $('.infoparttimejobs').length; i++) {
        if ($('.infoparttimejobs .mt_workList').eq(i).html()) {
            text=text+(';    ')+$('.infoparttimejobs .mt_workList').eq(i).html();
        }
    }
    text=text+'\\n'+'教育经历：'+$('.infopledu .mt_schoolName').eq(0).html();
    for (var i = 1; i < $('.infopledu').length; i++) {
        if ($('.infopledu .mt_schoolName').eq(i).html()) {
            text=text+(';  学校: ')+$('.infopledu .mt_schoolName').eq(i).html()
            +(';  学历: ')+$('.infopledu .mt_education').eq(i).html()
            +(';  学位: ')+$('.infopledu .mt_degree').eq(i).html()
            +(';  专业: ')+$('.infopledu .mt_professional').eq(i).html()
            +(';  入学时间: ')+$('.infopledu .mt_startYear').eq(i).html()
            +(';  毕业时间: ')+$('.infopledu .mt_endYear').eq(i).html();
        }
    }
    text=text+'\\n'+'全职经历：'+$('.infofulltimejobs .mt_workList').eq(0).html();
    for (var i = 1; i < $('.infofulltimejobs').length; i++) {
        if ($('.infofulltimejobs .mt_workList').eq(i).html()) {
            text=text+(';    ')+$('.infofulltimejobs .mt_workList').eq(i).html();
        }
    }
    text=text+'\\n'+'项目经历：'+$('.infoproject .mt_proList').eq(0).html();
    for (var i = 1; i < $('.infoproject').length; i++) {
        if ($('.infoproject .mt_proList').eq(i).html()) {
            text=text+(';    ')+$('.infoproject .mt_proList').eq(i).html();
        }
    }
    text=text+'\\n'+'在校实践：'+$('.infoschoolclub .mt_schClubList').eq(0).html();
    for (var i = 1; i < $('.infoschoolclub').length; i++) {
        if ($('.infoschoolclub .mt_schClubList').eq(i).html()) {
            text=text+(';    ')+$('.infoschoolclub .mt_schClubList').eq(i).html();
        }
    }
    text=text+'\\n'+'获奖经历：'+$('.infoschaward .mt_schawradList').eq(0).html();
    for (var i = 1; i < $('.infoschaward').length; i++) {
        if ($('.infoschaward .mt_schawradList').eq(i).html()) {
            text=text+(';    ')+$('.infoschaward .mt_schawradList').eq(i).html();
        }
    }
    text=text+'\\n'+'英语能力：'+$('.infoEnglishSkill .mt_skillEngLevel').eq(0).html()+(', 成绩：')+$('.infoEnglishSkill .mt_skillEngSorce').eq(0).html();
    for (var i = 1; i < $('.infoEnglishSkill').length; i++) {
        if ($('.infoEnglishSkill .mt_skillEngLevel').eq(i).html()) {
            text=text+(';    ')+$('.infoEnglishSkill .mt_skillEngLevel').eq(i).html()+(', 成绩：')+$('.infoEnglishSkill .mt_skillEngSorce').eq(i).html();
        }
    }
    for (var i = 1; i < $('.infoOtEnglishSkill').length; i++) {
        if ($('.infoOtEnglishSkill .mt_skillEngLevel').eq(i).html()) {
            text=text+(';    ')+$('.infoOtEnglishSkill .mt_skillEngLevel').eq(i).html()+(', 成绩：')+$('.infoOtEnglishSkill .mt_skillEngSorce').eq(i).html();
        }
    }
    text=text+'\\n'+'其他语言能力：'+$('.infoOtherSkill .mt_skillGraspLevel').eq(0).html()+(', 掌握程度：')+$('.infoOtherSkill .mt_skillGraspLevel').eq(0).html();
    for (var i = 1; i < $('.infoOtherSkill').length; i++) {
        if ($('.infoOtherSkill .mt_skillGraspLevel').eq(i).html()) {
            text=text+(';    ')+$('.infoOtherSkill .mt_skillGraspLevel').eq(i).html()+(', 掌握程度：')+$('.infoOtherSkill .mt_skillGraspLevel').eq(i).html();
        }
    }
    text=text+'\\n'+'证书：'+$('.infoplcerti .mt_certificateDes').eq(0).html();
    for (var i = 1; i < $('.infoplcerti').length; i++) {
        if ($('.infoplcerti .mt_certificateDes').eq(i).html()) {
            text=text+(';    ')+$('.infoplcerti .mt_certificateDes').eq(i).html();
        }
    }
    text=text+'\\n'+'培训经历：'+$('.infotraining .mt_trainingName').eq(0).html()+(', 培训机构：')+$('.infotraining .mt_trainingCompany').eq(0).html()
            +(', 开始时间：')+$('.infotraining .mt_startDate').eq(0).html()+(', 结束时间：')+$('.infotraining .mt_endDate').eq(0).html();
    for (var i = 1; i < $('.infotraining').length; i++) {
        if ($('.infotraining .mt_trainingName').eq(i).html()) {
            text=text+(';    ')+$('.infotraining .mt_trainingName').eq(i).html()+(', 培训机构：')+$('.infotraining .mt_trainingCompany').eq(i).html()
            +(', 开始时间：')+$('.infotraining .mt_startDate').eq(i).html()+(', 结束时间：')+$('.infotraining .mt_endDate').eq(i).html();
        }
    }
    text=text+'\\n'+'自我评价：'+KISSY.one('#mt_selfIntro').html();
    text=text+'\\n'+'爱好特长：'+KISSY.one('#mt_skill').html();
    text=text+'\\n'+'其他技能: '+KISSY.one('#mt_hobbies').html();
    text=text+'\\n'+'个人成就: '+KISSY.one('#achievement').html();
}
KISSY.one('textarea[name=\"resume\"]').val(text);