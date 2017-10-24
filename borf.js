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
        if ($('.infoplcerti').length) {
            for (var i = 0; i < $('.infoschaward').length; i++) {
                var word = $('.infoplcerti .mt_getDate').eq(i).html()+"获得"+$('.infoplcerti .mt_certificateName').eq(i).html();
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
    },
    shunxu: function(){
        var time = new Array($('.infopledu .mt_schoolName').length);
        for(var i=0;i<$('.infopledu .mt_schoolName').length;i++){
            time[i] = $('.infopledu .mt_endYearY').eq(i).html();
        }
        for(var i=0;i<time.length;i++){
            for(var j=i+1;j<time.length;j++){
                if(time[i]<time[j]){
                    var tmp = time[i];
                    time[i] = time[j];
                    time[j] = tmp;
                }
            }
        }
        var big = new Array($('.infopledu .mt_schoolName').length);
        for(var i=0;i<$('.infopledu .mt_schoolName').length;i++){
            for(var j=0;j<$('.infopledu .mt_schoolName').length;j++) {
                if($('.infopledu .mt_endYearY').eq(j).html()==time[i]){
                    big[i] = j;
                    break;
                }
            }
        }
        return big;
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
                if (content.indexOf(opt[i].innerHTML) != -1) {
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
autoWrite.textWrite($('#mt_name').html(),$('form[name=\"baseForm\"]').find( _('name')));
autoWrite.selectFacc($('#mt_sex').html(),$('select[name=\"gender\"]'));
autoWrite.adddataZero($('#mt_birth').html(), _('birthday'));
autoWrite.selectFac($('#mt_nation').html(),$('select[name=\"national\"]'));
autoWrite.textWrite($('#mt_height').html(), _('height'));
autoWrite.textWrite($('#mt_weight').html(),  _('weight'));
autoWrite.textWrite($('#mt_id').html(),  _('idNumber'));
autoWrite.selectFacc($('#mt_nativeplace').html(),$('select[class=\"prov\"]').eq(0));
autoWrite.selectFacc($('#mt_native_city').html(),$('select[class=\"city\"]').eq(0));
autoWrite.selectFacc($('#mt_hukoucitynow').html(),$('select[class=\"prov\"]').eq(1));
autoWrite.selectFacc($('#mt_hukoucitynow_city').html(),$('select[class=\"city\"]').eq(1));
autoWrite.selectFacc($('#mt_maritalstatus').html(),$('select[name=\"marriage\"]'));
autoWrite.selectFac($('#mt_polistatus').html(),$('select[name=\"politicsStatus\"]'));
autoWrite.textWrite($('#mt_tel').html(), _('mobile'));
autoWrite.textWrite($('#mt_email').html(), _('email'));
var maxGra = help.getGraguate();
autoWrite.custonFun(function() {
    var polis = $('select[name=\"highestEducation\"]');
    if (polis.length) {
        switch ($('.infopledu .mt_education').eq(maxGra).html()) {
            case '大学本科-一本':
            case '大学本科-二本':
            case '大学本科-三本':
            case '海外本科':
                polis.get(0).options[2].selected=true;
                break;
            case '硕士研究生':
                polis.get(0).options[3].selected=true;
                break;
            case '博士研究生':
                polis.get(0).options[4].selected=true;
                break;
            case '大学专科':
                polis.get(0).options[1].selected=true;
                break;
            default:
                polis.get(0).options[0].selected=true;
                break;
        }
    }
});
autoWrite.selectFacc($('.infopledu .mt_degree').eq(maxGra).html(),$('select[name=\"highestDegree\"]'));
autoWrite.adddataZero($('.infopledu .mt_startYear').eq(maxGra).html(), _('beginSchoolDate'));
autoWrite.adddataZero($('.infopledu .mt_endYear').eq(maxGra).html(), _('graduateDate'));
autoWrite.textWrite($('.infopledu .mt_schoolName').eq(maxGra).html(), _('school'));
autoWrite.textWrite($('.infopledu .mt_professional').eq(maxGra).html(), _('major').eq(0));
autoWrite.textWrite($('#mt_jjlxr').html(), _('emergencyContact'));
autoWrite.textWrite($('#mt_jjlxrtel').html(), _('emergencyMobile'));
if($('#workDiv').length>0){
    autoWrite.selectFacc($('#mt_livecity_pro').html(),$('select[class=\"prov\"]').eq(2));
    autoWrite.selectFacc($('#mt_livecity_city').html(),$('select[class=\"city\"]').eq(2));
    autoWrite.selectFacc($('#mt_add').html(),$('select[class=\"dist\"]').eq(0));
    autoWrite.textWrite($('#mt_add').html(), $('input[class=\"more\"]').eq(0));
    autoWrite.selectFacc($('#mt_postadd').html(),$('select[class=\"prov\"]').eq(3));
    autoWrite.selectFacc($('#mt_postadd').html(),$('select[class=\"city\"]').eq(3));
    autoWrite.selectFacc($('#mt_postadd').html(),$('select[class=\"dist\"]').eq(1));
    autoWrite.textWrite($('#mt_postadd').html(), $('input[class=\"more\"]').eq(1));
}
else{
    autoWrite.selectFacc($('#mt_livecity_pro').html(),$('select[class=\"prov\"]').eq(3));
    autoWrite.selectFacc($('#mt_livecity_city').html(),$('select[class=\"city\"]').eq(2));
    autoWrite.selectFacc($('#mt_add').html(),$('select[class=\"dist\"]').eq(0));
    autoWrite.textWrite($('#mt_add').html(), $('input[class=\"more\"]').eq(0));
    autoWrite.selectFacc($('#mt_postadd').html(),$('select[class=\"prov\"]').eq(4));
    autoWrite.selectFacc($('#mt_postadd').html(),$('select[class=\"city\"]').eq(3));
    autoWrite.selectFacc($('#mt_postadd').html(),$('select[class=\"dist\"]').eq(1));
    autoWrite.textWrite($('#mt_postadd').html(), $('input[class=\"more\"]').eq(1));
}

var allList = help.selectAll();
autoWrite.textWrite(allList['w'], $('textarea[name=\"certificate\"]'));
autoWrite.textWrite($('#mt_skill').html(), $('textarea[name=\"hobby\"]'));
autoWrite.textWrite($('#mt_selfIntro').html(), $('textarea[name=\"personality\"]'));
//教育经历
var which = help.shunxu();
for(var i=0;i<$('#educationDiv').eq(0).find($('form[class=\"duoge\"]')).length;i++){
    autoWrite.textWrite($('.infopledu .mt_schoolName').eq(which[i]).html(), $('form[class=\"duoge\"]').eq(i).find(_('schoolName')));
    autoWrite.textWrite($('.infopledu .mt_professional').eq(which[i]).html(), $('form[class=\"duoge\"]').eq(i).find(_('major')));
    autoWrite.selectFacc($('.infopledu .mt_degree').eq(which[i]).html(),$('form[class=\"duoge\"]').eq(i).find($('select[name=\"degree\"]')));
    autoWrite.custonFun(function() {
        var polis = $('form[class=\"duoge\"]').eq(i).find($('select[name=\"education\"]'));
        if (polis.length) {
            switch ($('.infopledu .mt_education').eq(which[i]).html()) {
                case '大学本科-一本':
                case '大学本科-二本':
                case '大学本科-三本':
                case '海外本科':
                    polis.get(0).options[3].selected=true;
                    break;
                case '硕士研究生':
                    polis.get(0).options[2].selected=true;
                    break;
                case '博士研究生':
                    polis.get(0).options[1].selected=true;
                    break;
                case '大学专科':
                    polis.get(0).options[4].selected=true;
                    break;
                default:
                    polis.get(0).options[0].selected=true;
                    break;
            }
        }
    });
    autoWrite.adddataZero($('.infopledu .mt_startYear').eq(which[i]).html(), $('form[class=\"duoge\"]').eq(i).find(_('beginDate')));
    autoWrite.adddataZero($('.infopledu .mt_endYear').eq(which[i]).html(), $('form[class=\"duoge\"]').eq(i).find(_('endDate')));
}
//工作经历
if($('#workDiv').length>0){
    var number1 = ($('.infofulltimejobs'));
    var number2 = ($('.infoparttimejobs'));
    for(var i=0;i<number1.length;i++){
        autoWrite.textWrite(number1.eq(i).find($('.mt_companyName')).html(), $('#workDiv').eq(0).find(_('company')).eq(i));
        autoWrite.textWrite(number1.eq(i).find($('.mt_department')).html(), $('#workDiv').eq(0).find(_('department')).eq(i));
        autoWrite.textWrite(number1.eq(i).find($('.mt_positionName')).html(), $('#workDiv').eq(0).find(_('job')).eq(i));
        autoWrite.textWrite(number1.eq(i).find($('.mt_workCity')).html(), $('#workDiv').eq(0).find(_('workPlace')).eq(i));
        autoWrite.adddataZero(number1.eq(i).find($('.mt_startDate')).html(), $('#workDiv').eq(0).find(_('beginDate')).eq(i));
        autoWrite.adddataZero(number1.eq(i).find($('.mt_endDate')).html(), $('#workDiv').eq(0).find(_('endDate')).eq(i));
        autoWrite.textWrite(number1.eq(i).find($('.mt_reasons')).html(), $('#workDiv').eq(0).find('textarea[name=\"dimissionReason\"]').eq(i));
        autoWrite.textWrite(number1.eq(i).find($('.workDes')).html(), $('#workDiv').eq(0).find('textarea[name=\"duty\"]').eq(i));
        autoWrite.textWrite(number1.eq(i).find($('.workContent')).html(), $('#workDiv').eq(0).find('textarea[name=\"performance\"]').eq(i));
    }
    for(var i=0;i<number2.length;i++){
        autoWrite.textWrite(number2.eq(i).find($('.mt_companyName')).html(), $('#workDiv').eq(0).find(_('company')).eq(number1.length+i));
        autoWrite.textWrite(number2.eq(i).find($('.mt_department')).html(), $('#workDiv').eq(0).find(_('department')).eq(number1.length+i));
        autoWrite.textWrite(number2.eq(i).find($('.mt_positionName')).html(), $('#workDiv').eq(0).find(_('job')).eq(number1.length+i));
        autoWrite.textWrite(number2.eq(i).find($('.mt_workCity')).html(), $('#workDiv').eq(0).find(_('workPlace')).eq(number1.length+i));
        autoWrite.adddataZero(number2.eq(i).find($('.mt_startDate')).html(), $('#workDiv').eq(0).find(_('beginDate')).eq(number1.length+i));
        autoWrite.adddataZero(number2.eq(i).find($('.mt_endDate')).html(), $('#workDiv').eq(0).find(_('endDate')).eq(number1.length+i));
        autoWrite.textWrite(number2.eq(i).find($('.mt_reasons')).html(), $('#workDiv').eq(0).find('textarea[name=\"dimissionReason\"]').eq(number1.length+i));
        autoWrite.textWrite(number2.eq(i).find($('.workDes')).html(), $('#workDiv').eq(0).find('textarea[name=\"duty\"]').eq(number1.length+i));
        autoWrite.textWrite(number2.eq(i).find($('.workContent')).html(), $('#workDiv').eq(0).find('textarea[name=\"performance\"]').eq(number1.length+i));
    }
}
//外语水平
if($('#foreignLanguageDiv').length>0){
    for(var i=0;i<$('#foreignLanguageDiv').eq(0).find($('form[class=\"duoge\"]')).length;i++){
        autoWrite.custonFun(function() {
            var polis = $('#foreignLanguageDiv').eq(0).find('select[name=\"level\"]').eq(i);
            if (polis.length) {
                switch ($('.mt_skillEngLevel').eq(i).html()) {
                    case '大学英语四级':
                        polis.get(0).options[1].selected=true;
                        break;
                    case '大学英语六级':
                        polis.get(0).options[2].selected=true;
                        break;
                    case '专业四级':
                        polis.get(0).options[3].selected=true;
                        break;
                    case '专业八级':
                        polis.get(0).options[4].selected=true;
                        break;
                    default:
                        polis.get(0).options[0].selected=true;
                        break;
                }
            }
        });
        autoWrite.textWrite($('.mt_skillEngSorce').eq(i).html(), $('#foreignLanguageDiv').eq(0).find(_('score')).eq(i));
    }
}
//奖励记录
if($('#awardDiv').length>0){
    for(var i=0;i<$('#awardDiv').eq(0).find($('form[class=\"duoge\"]')).length;i++){
        autoWrite.textWrite($('.mt_awardsName').eq(i).html(), $('#awardDiv').eq(0).find(_('name')).eq(i));
        autoWrite.adddataZero($('.mt_awardsDate').eq(i).html(), $('#awardDiv').eq(0).find(_('time')).eq(i));
        autoWrite.custonFun(function() {
            var polis = $('#awardDiv').eq(0).find('select[name=\"level\"]').eq(i);
            if (polis.length) {
                switch ($('.mt_awardsType').eq(i).html()) {
                    case '国际级':
                        polis.get(0).options[7].selected=true;
                        break;
                    case '国家级':
                        polis.get(0).options[1].selected=true;
                        break;
                    case '省市级':
                        polis.get(0).options[2].selected=true;
                        break;
                    case '学校级':
                        polis.get(0).options[5].selected=true;
                        break;
                    case '院系级':
                        polis.get(0).options[6].selected=true;
                        break;
                    default:
                        polis.get(0).options[0].selected=true;
                        break;
                }
            }
        });
        autoWrite.textWrite($('.mt_awardsDes').eq(i).html(), $('#awardDiv').eq(0).find('textarea[name=\"description\"]').eq(i));
    }
}
//培训经历
if($('#trainDiv').length>0){
    for(var i=0;i<$('#trainDiv').eq(0).find($('form[class=\"duoge\"]')).length;i++){
        autoWrite.adddataZero($('.infotraining .mt_startDate').eq(i).html(), $('#trainDiv').eq(0).find(_('beginDate')).eq(i));
        autoWrite.adddataZero($('.infotraining .mt_endDate').eq(i).html(), $('#trainDiv').eq(0).find(_('endDate')).eq(i));
        autoWrite.textWrite($('.mt_trainingCompany').eq(i).html(), $('#trainDiv').eq(0).find(_('company')).eq(i));
        autoWrite.textWrite($('.mt_trainingPlace').eq(i).html(), $('#trainDiv').eq(0).find(_('place')).eq(i));
        autoWrite.textWrite($('.mt_trainingName').eq(i).html(), $('#trainDiv').eq(0).find(_('course')).eq(i));
        autoWrite.textWrite($('.mt_trainingDes').eq(i).html(), $('#trainDiv').eq(0).find('textarea[name=\"description\"]').eq(i));
    }
}
//家庭关系
if($('#familyDiv').length>0){
        autoWrite.textWrite($('#mt_fmname').html(), $('#familyDiv').eq(0).find(_('name')).eq(0));
        autoWrite.selectFacc($('#mt_fmrelation').html(),$('#familyDiv').eq(0).find($('select[name=\"relationship\"]')).eq(0));
        autoWrite.textWrite($('#mt_fmwork').html(), $('#familyDiv').eq(0).find(_('workCompany')).eq(0));
        autoWrite.textWrite($('#mt_fmposition').html(), $('#familyDiv').eq(0).find(_('workJob')).eq(0));
}









