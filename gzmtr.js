if ($('#jm_qiuck_cover')) {
        $('#jm_qiuck_cover').fadeIn();
        setTimeout(function() {
            $('#jm_qiuck_cover').fadeOut()
        }, 1000);
    }

var event = document.createEvent('HTMLEvents');
event.initEvent('change', true, false);
var help = {
    getGraguate: function() {
        var maxid=0;
        var maxedutime;
        for(var i=0;i<$('.infopledu').length;i++){
            //得到最晚毕业年份
            var endyear=parseInt($('#edu-list .mt_endYearY').eq(i).html());
            if(i==0){
                maxedutime=endyear;
                maxid=0;
            }else{
                if(endyear>maxedutime){
                    maxedutime=endyear;
                    maxid=i;
                }
            }
        }
        return maxid;
    },
    selectAll: function() {
        if ($('.infoschoolclub').length) {
            club = 0;
            job = 0;
            ject = 0;
            word = 0;
            var allclub = [];
            var alljob = [];
            var allject = [];
            var allword = [];
            for (var i = 0; i < $('.infoschoolclub').length; i++) {
                var club = $('.infoschoolclub .mt_startDateDot').eq(i).html()+'-'+$('.infoschoolclub .mt_endDateDot').eq(i).html()+'\\n'+$('.infoschoolclub .mt_schClubName').eq(i).html()+'\\n'+$('.infoschoolclub .mt_positionName').eq(i).html()+'\\n'+$('.infoschoolclub .mt_workDes').eq(i).html()+'\\n';
                allclub.push(club);
            }
            club = allclub;
        }
        if ($('.infoparttimejobs').length) {
            for (var i = 0; i < $('.infoparttimejobs').length; i++) {
                var job = $('.infoparttimejobs .mt_startDate').eq(i).html()+'-'+$('.infoparttimejobs .mt_endDate').eq(i).html()+'\\n'+$('.infoparttimejobs .mt_companyName').eq(i).html()+'\\n'+$('.infoparttimejobs .mt_positionName').eq(i).html()+'\\n'+$('.infoparttimejobs .workContent').eq(i).html()+'\\n';
                alljob.push(job);
            }
            job = alljob;
        }
        if ($('.infoproject').length) {
            for (var i = 0; i < $('.infoproject').length; i++) {
                var ject = $('.infoproject .mt_prostarttime').eq(i).html()+'-'+$('.infoproject .mt_proendtime').eq(i).html()+'\\n'+$('.infoproject .mt_projectName').eq(i).html()+'\\n'+$('.infoproject .mt_positionName').eq(i).html()+'\\n'+$('.infoproject .mt_projectRemark').eq(i).html()+'\\n';
                allject.push(ject);
            }
            ject = allject;
        }
        if ($('.infoschaward').length) {
            for (var i = 0; i < $('.infoschaward').length; i++) {
                var word = $('.infoschaward .mt_awardsDate').eq(i).html()+$('.infoschaward .mt_awardsName').eq(i).html()+'\\n'+$('.infoschaward .mt_awardsType').eq(i).html()+'\\n'+$('.infoschaward .mt_awardsLevel').eq(i).html()+'\\n'+$('.infoschaward .mt_awardsDes').eq(i).html()+'\\n';
                allword.push(word);
            }
            word = allword;
        }
        return {
            c: club,
            j: job,
            e: ject,
            w: word
        }
    }
};
var _ = function(objname, i) {
    if (typeof i === 'undefined') {
        return $('input[name=\"' + objname + '\"]')
    }
    return $('input[name=\"' + objname + '\"]').eq(i)
};
autoWrite = {
    textWrite: function(content, obj) {
        if (content && obj.length) {
            obj.val(content)
        }
    },
    selectFac: function(content, obj) {
        if (content && obj.length) {
            var opt = obj.get(0).options;
            for (var i=0;i<opt.length;i++) {
                if (opt[i].innerHTML.indexOf(content) != -1) {
                    opt[i].selected = true;
                    break;
                }
            }
            obj.get(0).dispatchEvent(event)
        }
    },
    selectFacc: function(content, obj) {
        if (content && obj.length) {
            var opt = obj.get(0).options;
            for (var i=0;i<opt.length;i++) {
                if (content==opt[i].innerHTML) {
                    opt[i].selected = true;
                    break;
                }
            }
            obj.get(0).dispatchEvent(event)
        }
    },
    adddataZero: function (date, obj){
        if (date && obj.length) {
            date = date.split('-');
            if (date.length > 2) {
                for(var i in date){
                    if(date[i]<10){
                        date[i]='0'+date[i];
                    }
                }
                date=date.join('-');
            } else{
                for(var i in date){
                    if(date[i]<10){
                        date[i]='0'+date[i];
                    }
                }
                date=date.join('-') + '-01';
            }
            obj.val(date)
        }
    },
    custonFun: function(callback) {
        callback()
    }
};
//基本信息
autoWrite.textWrite($('#mt_name').html(), _('form.userName'));//姓名
autoWrite.custonFun(function() {
    if ($('#mt_sex').html() === '男' && _('form.sex').length) {
        _('form.sex').eq(0).click()
    } else {
        _('form.sex').eq(1).click()
    }
});
autoWrite.textWrite($('#mt_nation').html(), _('form.nation'));//民族
autoWrite.textWrite($('#mt_nativeplace').html(),_('form.homeTown'));//籍贯
autoWrite.textWrite($('#mt_id').html(), _('form.idCardNum'));//身份证
//发证机关
autoWrite.textWrite($('#mt_birth').html(), _('form.birthDate'));//生日
//年龄
autoWrite.textWrite($('#mt_height').html(), _('form.height'));//身高
autoWrite.textWrite($('#mt_weight').html(), _('form.weight'));//体重
autoWrite.custonFun(function() {//婚姻状况
    if ($('#mt_maritalstatus').html() === '未婚') {
        _('form.maritalStatus').eq(0).click();
    }else if($('#mt_maritalstatus').html() === '已婚'){
        _('form.maritalStatus').eq(1).click();
    }else if($('#mt_maritalstatus').html() === '离婚'){
        _('form.maritalStatus').eq(2).click();
    }
});
autoWrite.custonFun(function() {//政治面貌
    var polis = $('select[name=\"form.politicalStatus\"]');
    if (polis.length) {
        switch ($('#mt_polistatus').html()) {
            case '中共党员':
                polis.get(0).options[2].selected=true;
                break;
            case '共青团员':
                polis.get(0).options[1].selected=true;
                break;
            case '群众':
                polis.get(0).options[0].selected=true;
                break;
            default:
                polis.get(0).options[4].selected=true;
                break;
        }
    }
});
//入党团时间
autoWrite.textWrite($('#mt_postadd').html(), _('form.birthPlace'));//出生地
//参加工作时间
autoWrite.custonFun(function() {//户口所在地
    var polis = $('select[name=\"form.accountPlace\"]');
    for (var i=0;i<polis.get(0).options.length;i++) {
        if(($('#mt_hukoucitynow').html()+'省')==polis.get(0).options[i].innerHTML){
            polis.get(0).options[i].selected=true;
            break;
        }
    }
});
//户口类型
autoWrite.textWrite($('#mt_postadd').html(), _('form.accountThinAddress'));//户口薄地址
var maxGra = help.getGraguate();
autoWrite.textWrite($('.infopledu .mt_professional').eq(maxGra).html(), _('form.professional'));//专业
autoWrite.custonFun(function() {//学历
    var polis = $('select[name=\"form.degree\"]');
    if (polis.length) {
        switch ($('.infopledu .mt_education').eq(maxGra).html()) {
            case '大学本科-一本':
            case '大学本科-二本':
            case '大学本科-三本':
            case '海外本科':
                polis.get(0).options[2].selected=true;
                break;
            case '博士研究生':
                polis.get(0).options[0].selected=true;
                break;
            case '硕士研究生':
                polis.get(0).options[1].selected=true;
                break;
            case '大学专科':
                polis.get(0).options[3].selected=true;
                break;
            default:
                break;
        }
    }
});
autoWrite.custonFun(function() {//学位
    var polis = $('select[name=\"form.academicDegree\"]');
    if (polis.length) {
        switch ($('.infopledu .mt_degree').eq(maxGra).html()) {
            case '学士':
                polis.get(0).options[1].selected=true;
                break;
            case '双学士':
                polis.get(0).options[2].selected=true;
                break;
            case '硕士':
                polis.get(0).options[3].selected=true;
                break;
            case '博士':
                polis.get(0).options[4].selected=true;
                break;
            default:
                polis.get(0).options[0].selected=true;
                break;
        }
    }
});
//学习类型
autoWrite.textWrite($('.infopledu .mt_schoolName').eq(maxGra).html(), _('form.graduationSchool'));//毕业院校
//视力问题
autoWrite.textWrite($('#mt_tel').html(), _('form.mobile'));//个人手机
autoWrite.textWrite($('#mt_gudingtel').html(), _('form.telephone'));//固定电话
autoWrite.textWrite($('#mt_jjlxr').html(), _('form.emergencyContact'));//紧急联系人
autoWrite.textWrite($('#mt_jjlxrtel').html(), _('form.emergencyContactPhone'));//紧急联系电话
autoWrite.textWrite($('#mt_postadd').html(), _('form.homeAddress'));//家庭住址
autoWrite.textWrite($('#mt_add').html(), _('form.contactAddress'));//通讯地址
autoWrite.textWrite($('#mt_zip').html(), _('form.postCode'));//邮政编码

autoWrite.textWrite($('.mt_base.mt_major').eq(maxGra).html(), _('form.mainCourses'));//主修课程
//专业就业方向
if ($('.mt_professionalranking').eq(maxGra).html()!=null) {//专业排名
    switch ($('.mt_professionalranking').eq(maxGra).html()) {
        case '前5%':
            autoWrite.textWrite('5', _('form.performanceRanking'));
            break;
        case '前10%':
            autoWrite.textWrite('10', _('form.performanceRanking'));
            break;
        case '前20%':
            autoWrite.textWrite('20', _('form.performanceRanking'));
            break;
        case '前30%':
            autoWrite.textWrite('30', _('form.performanceRanking'));
            break;
        case '前40%':
            autoWrite.textWrite('40', _('form.performanceRanking'));
            break;
        case '前50%':
            autoWrite.textWrite('50', _('form.performanceRanking'));
            break;
        case '前60%':
            autoWrite.textWrite('60', _('form.performanceRanking'));
            break;
        case '前70%':
            autoWrite.textWrite('70', _('form.performanceRanking'));
            break;
        case '前80%':
            autoWrite.textWrite('80', _('form.performanceRanking'));
            break;
        default:
            autoWrite.textWrite('100', _('form.performanceRanking'));
            break;
    }
}
//教育经历
var len0 = $('.mt_base.mt_degree').length;
for(var i=0;i<len0;i++){
    if($('.mt_base.mt_degree').eq(i).html()=='学士'){
        var j=0;
        for(var k=0;k<len0;k++){
            if($('.mt_base.mt_degree').eq(k).html()!='双学士'){
                j++;
            }
        }
        if(j==len0){
            _('edu8.selected').eq(0).click();
            autoWrite.selectFac($('.mt_base.mt_startYearY').eq(i).html(), $('select[name=\"form.edu8.startYear\"]'));
            autoWrite.selectFac($('.mt_base.mt_startYearM').eq(i).html(), $('select[name=\"form.edu8.startMonth\"]'));
            autoWrite.selectFac($('.mt_base.mt_endYearY').eq(i).html(), $('select[name=\"form.edu8.endYear\"]'));
            autoWrite.selectFac($('.mt_base.mt_endYearM').eq(i).html(), $('select[name=\"form.edu8.endMonth\"]'));
            autoWrite.textWrite($('.mt_base.mt_schoolName').eq(i).html(), _('form.edu8.schoolName'));
            autoWrite.textWrite($('.mt_base.mt_professional').eq(i).html(), _('form.edu8.professional'));
        }
    }else if($('.mt_base.mt_degree').eq(i).html()== '双学士') {
        _('edu8.selected').eq(0).click();
        autoWrite.selectFac($('.mt_base.mt_startYearY').eq(i).html(), $('select[name=\"form.edu8.startYear\"]'));
        autoWrite.selectFac($('.mt_base.mt_startYearM').eq(i).html(), $('select[name=\"form.edu8.startMonth\"]'));
        autoWrite.selectFac($('.mt_base.mt_endYearY').eq(i).html(), $('select[name=\"form.edu8.endYear\"]'));
        autoWrite.selectFac($('.mt_base.mt_endYearM').eq(i).html(), $('select[name=\"form.edu8.endMonth\"]'));
        autoWrite.textWrite($('.mt_base.mt_schoolName').eq(i).html(), _('form.edu8.schoolName'));
        autoWrite.textWrite($('.mt_base.mt_professional').eq(i).html(), _('form.edu8.professional'));
    }else if($('.mt_base.mt_degree').eq(i).html()=='硕士') {
        _('edu9.selected').eq(0).click();
        autoWrite.selectFac($('.mt_base.mt_startYearY').eq(i).html(), $('select[name=\"form.edu9.startYear\"]'));
        autoWrite.selectFac($('.mt_base.mt_startYearM').eq(i).html(), $('select[name=\"form.edu9.startMonth\"]'));
        autoWrite.selectFac($('.mt_base.mt_endYearY').eq(i).html(), $('select[name=\"form.edu9.endYear\"]'));
        autoWrite.selectFac($('.mt_base.mt_endYearM').eq(i).html(), $('select[name=\"form.edu9.endMonth\"]'));
        autoWrite.textWrite($('.mt_base.mt_schoolName').eq(i).html(), _('form.edu9.schoolName'));
        autoWrite.textWrite($('.mt_base.mt_professional').eq(i).html(), _('form.edu9.professional'));
    }else if($('.mt_base.mt_degree').eq(i).html()=='博士') {
        _('edu10.selected').eq(0).click();
        autoWrite.selectFac($('.mt_base.mt_startYearY').eq(i).html(), $('select[name=\"form.edu10.startYear\"]'));
        autoWrite.selectFac($('.mt_base.mt_startYearM').eq(i).html(), $('select[name=\"form.edu10.startMonth\"]'));
        autoWrite.selectFac($('.mt_base.mt_endYearY').eq(i).html(), $('select[name=\"form.edu10.endYear\"]'));
        autoWrite.selectFac($('.mt_base.mt_endYearM').eq(i).html(), $('select[name=\"form.edu10.endMonth\"]'));
        autoWrite.textWrite($('.mt_base.mt_schoolName').eq(i).html(), _('form.edu10.schoolName'));
        autoWrite.textWrite($('.mt_base.mt_professional').eq(i).html(), _('form.edu10.professional'));
    }
}

//工作经历
var l1=_('form.workVO.cmopnayName').length;
var l2=$('.mt_base.mt_companyName').length;
var l=l1>l2?l2:l1;
for(var i=0;i<l;i++){
    autoWrite.selectFac($('.mt_base.mt_startDate').eq(i).html().substr(0,4)+'年', $('select[name=\"form.workVO.startYear\"]').eq(i));
    autoWrite.selectFac($('.mt_base.mt_startDate').eq(i).html().substr(5)+'月', $('select[name=\"form.workVO.startMonth\"]').eq(i));
    autoWrite.selectFac($('.mt_base.mt_endDate').eq(i).html().substr(0,4)+'年', $('select[name=\"form.workVO.endYear\"]').eq(i));
    autoWrite.selectFac($('.mt_base.mt_endDate').eq(i).html().substr(5)+'月', $('select[name=\"form.workVO.endMonth\"]').eq(i));
    autoWrite.textWrite($('.mt_base.mt_companyName').eq(i).html(), _('form.workVO.cmopnayName').eq(i));
    autoWrite.textWrite($('.mt_base.mt_positionName').eq(i).html(), _('form.workVO.post').eq(i));
    autoWrite.textWrite($('.mt_base.mt_reasons').eq(i).html(), _('form.workVO.hadDepartResean').eq(i));
    $('textarea[name="form.workVO.workDesc"]').eq(i).val($('.workDes').eq(i).html());
}
//技能特长
var l3=_('form.skillsVO.name').length;
var l4=$('.infoplcerti').eq(0).find('.mt_certificateName').length;
var l5=l3>l4?l4:l3;
for(var i=0;i<l5;i++){
    autoWrite.textWrite($('.mt_certificateName').eq(i).html(), _('form.skillsVO.name').eq(i));
}
//其他技能
var polis = $('select[name=\"form.englishLevel\"]');
for(var i=0;i<$('.mt_skillEngLevel').length;i++){
    if($('.mt_skillEngLevel').eq(i).html()=="大学英语六级"){
        polis.get(0).options[5].selected=true;
        break;
    } else if($('.mt_skillEngLevel').eq(i).html()=="大学英语四级"){
        polis.get(0).options[4].selected=true;
    }
}
//自我评价
$('textarea[name="form.evaluateVO.shefEvaluateDesc"]').val($('#mt_selfIntro').html());


