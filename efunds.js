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
    shunxu_edu: function(){
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
    },
    shunxu_job: function(){
        var time = new Array($('.mt_companyName').length);
        for(var i=0;i<$('.infofulltimejobs .mt_startDate').length;i++){
            time[i] = X($('.infofulltimejobs .mt_startDate').eq(i).html());
        }
        var x = 0;
        for(var i=$('.infofulltimejobs .mt_startDate').length;i<$('.mt_companyName').length;i++){
            time[i] = X($('.infoparttimejobs .mt_startDate').eq(x).html());
            x++;
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
        return time;
    },
    shunxu_pro: function(){
        var time = new Array($('.mt_projectName').length);
        for(var i=0;i<$('.mt_projectName').length;i++){
            time[i] = X($('.mt_proendtime').eq(i).html());
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
        var big = new Array($('.mt_projectName').length);
        for(var i=0;i<$('.mt_projectName').length;i++){
            for(var j=0;j<$('.mt_proendtime').length;j++) {
                if(X($('.mt_proendtime').eq(j).html())===time[i]){
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
var X = function(date){
    if (date) {
        date = date.split('-');
        if (date.length > 2) {
            for(var i in date){
                if(date[i]<10){
                    date[i]='0'+date[i];
                }
            }
            date=date.join('');
        } else{
            for(var i in date){
                if(date[i]<10){
                    date[i]='0'+date[i];
                }
            }
            date=date.join('') + '01';
        }
    }
    return date;
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
var team0 = $('.rowContainer').eq(0).find('.sectionPart');
autoWrite.textWrite($('#mt_name').html(), team0.eq(0).find('.row').eq(0).find('input').eq(0));
autoWrite.selectFacc($('#mt_sex').html(),team0.eq(0).find('.row').eq(0).find('select').eq(0));
autoWrite.adddataZero($('#mt_birth').html(),team0.eq(0).find('.row').eq(1).find('input').eq(0));
autoWrite.selectFac($('#mt_nation').html(),team0.eq(0).find('.row').eq(1).find('select').eq(0));
autoWrite.selectFac($('#mt_idtype').html(),team0.eq(0).find('.row').eq(2).find('select').eq(0));
autoWrite.textWrite($('#mt_id').html(),  team0.eq(0).find('.row').eq(2).find('input').eq(0));
var maxGra = help.getGraguate();
autoWrite.custonFun(function() {
    var polis = team0.eq(0).find('.row').eq(3).find('select').eq(0);
    if (polis.length) {
        switch ($('.infopledu .mt_education').eq(maxGra).html()) {
            case '大学本科-一本':
            case '大学本科-二本':
            case '大学本科-三本':
            case '海外本科':
                polis.get(0).options[5].selected=true;
                break;
            case '硕士研究生':
                polis.get(0).options[3].selected=true;
                break;
            case '博士研究生':
                polis.get(0).options[2].selected=true;
                break;
            case '大学专科':
                polis.get(0).options[6].selected=true;
                break;
            default:
                polis.get(0).options[0].selected=true;
                break;
        }
    }
});
autoWrite.selectFacc($('.infopledu .mt_degree').eq(maxGra).html(),team0.eq(0).find('.row').eq(3).find('select').eq(1));
autoWrite.selectFacc($('#mt_polistatus').html(),team0.eq(0).find('.row').eq(4).find('select').eq(0));
autoWrite.selectFac($('#mt_maritalstatus').html(),team0.eq(0).find('.row').eq(4).find('select').eq(1));
autoWrite.textWrite($('#mt_national').html(), team0.eq(0).find('.row').eq(5).find('input').eq(0));
autoWrite.textWrite($('#mt_nativeplace').html(),  team0.eq(0).find('.row').eq(5).find('input').eq(1));
autoWrite.textWrite($('#mt_livecity_city').html(), team0.eq(0).find('.row').eq(6).find('input').eq(0));
autoWrite.textWrite($('#mt_hukoucitynow').html()+$('#mt_hukoucitynow_city').html(),team0.eq(0).find('.row').eq(6).find('input').eq(1));
autoWrite.textWrite($('#mt_tel').html(), team0.eq(0).find('.row').eq(7).find('input').eq(0));
autoWrite.textWrite($('#mt_email').html(),team0.eq(0).find('.row').eq(7).find('input').eq(1));
if($('#mt_national').html()=='中国'){
    autoWrite.textWrite("汉语", team0.eq(0).find('.row').eq(8).find('input').eq(0));
}
autoWrite.adddataZero($('.infopledu .mt_endYear').eq(maxGra).html(),team0.eq(0).find('.row').eq(8).find('input').eq(1));
autoWrite.textWrite($('#mt_gudingtel').html(), team0.eq(0).find('.row').eq(11).find('input').eq(0));
autoWrite.textWrite($('#mt_zip').html(), team0.eq(0).find('.row').eq(11).find('input').eq(1));
autoWrite.textWrite($('#mt_postadd').html(),team0.eq(0).find('.row').eq(12).find('input').eq(0));
//教育背景
var which_edu = help.shunxu_edu();
var team = $('.rowContainer').eq(2).find('.sectionPart');
if(team&&team.eq(0).find($('.row')).eq(1).find('input').length == 1){
    for(var i=0;i<team.length;i++){
        autoWrite.adddataZero($('.infopledu .mt_startYear').eq(which_edu[i]).html(), team.eq(i).find($('.row')).eq(0).find('input').eq(0));
        autoWrite.adddataZero($('.infopledu .mt_endYear').eq(which_edu[i]).html(), team.eq(i).find($('.row')).eq(0).find('input').eq(1));
        autoWrite.textWrite($('.infopledu .mt_schoolName').eq(which_edu[i]).html(), team.eq(i).find($('.row')).eq(0).find('input').eq(3));
        autoWrite.textWrite($('.infopledu .mt_professional').eq(which_edu[i]).html(), team.eq(i).find($('.row')).eq(0).find('input').eq(4));
        autoWrite.custonFun(function() {
            var polis = team.eq(i).find($('.row')).eq(0).find('select').eq(1);
            if (polis.length) {
                switch ($('.infopledu .mt_education').eq(which_edu[i]).html()) {
                    case '大学本科-一本':
                    case '大学本科-二本':
                    case '大学本科-三本':
                    case '海外本科':
                        polis.get(0).options[5].selected=true;
                        break;
                    case '硕士研究生':
                        polis.get(0).options[3].selected=true;
                        break;
                    case '博士研究生':
                        polis.get(0).options[2].selected=true;
                        break;
                    case '大学专科':
                        polis.get(0).options[6].selected=true;
                        break;
                    default:
                        polis.get(0).options[0].selected=true;
                        break;
                }
            }
        });
        autoWrite.selectFacc($('.infopledu .mt_degree').eq(which_edu[i]).html(),team.eq(i).find($('.row')).eq(0).find('select').eq(2));
        autoWrite.textWrite($('.infopledu .mt_tutorname').eq(which_edu[i]).html(), team.eq(i).find($('.row')).eq(1).find('input').eq(0));
    }
}
else{
    for(var i=0;i<team.length;i++){
        autoWrite.adddataZero($('.infopledu .mt_startYear').eq(which_edu[i]).html(), team.eq(i).find($('.row')).eq(0).find('input').eq(0));
        autoWrite.adddataZero($('.infopledu .mt_endYear').eq(which_edu[i]).html(), team.eq(i).find($('.row')).eq(0).find('input').eq(1));
        autoWrite.textWrite($('.infopledu .mt_schoolName').eq(which_edu[i]).html(), team.eq(i).find($('.row')).eq(1).find('input').eq(0));
        autoWrite.textWrite($('.infopledu .mt_professional').eq(which_edu[i]).html(), team.eq(i).find($('.row')).eq(1).find('input').eq(1));
        autoWrite.custonFun(function() {
            var polis = team.eq(i).find($('.row')).eq(1).find('select').eq(1);
            if (polis.length) {
                switch ($('.infopledu .mt_education').eq(which_edu[i]).html()) {
                    case '大学本科-一本':
                    case '大学本科-二本':
                    case '大学本科-三本':
                    case '海外本科':
                        polis.get(0).options[5].selected=true;
                        break;
                    case '硕士研究生':
                        polis.get(0).options[3].selected=true;
                        break;
                    case '博士研究生':
                        polis.get(0).options[2].selected=true;
                        break;
                    case '大学专科':
                        polis.get(0).options[6].selected=true;
                        break;
                    default:
                        polis.get(0).options[0].selected=true;
                        break;
                }
            }
        });
        autoWrite.selectFacc($('.infopledu .mt_degree').eq(which_edu[i]).html(),team.eq(i).find($('.row')).eq(1).find('select').eq(2));
        autoWrite.textWrite($('.infopledu .mt_tutorname').eq(which_edu[i]).html(), team.eq(i).find($('.row')).eq(1).find('input').eq(4));
    }
}
//工作经历
var team2 = $('.rowContainer').eq(3).find('.sectionPart');
var number1 = ($('.infofulltimejobs'));
var number2 = ($('.infoparttimejobs'));
var which_time = help.shunxu_job();

for(var i=0;i<number1.length+number2.length;i++){
    var x=0,y=0;
    for(var j=0;;j++){
        if(number1.eq(x)&&X(number1.eq(x).find($('.mt_startDate')).html())==which_time[i]){
            autoWrite.adddataZero(number1.eq(x).find($('.mt_startDate')).html(), team2.eq(i).find($('.row')).eq(0).find('input').eq(0));
            autoWrite.adddataZero(number1.eq(x).find($('.mt_endDate')).html(), team2.eq(i).find($('.row')).eq(0).find('input').eq(1));
            autoWrite.textWrite(number1.eq(x).find($('.mt_companyName')).html(), team2.eq(i).find($('.row')).eq(0).find('input').eq(3));
            autoWrite.textWrite(number1.eq(x).find($('.mt_positionName')).html(), team2.eq(i).find($('.row')).eq(0).find('input').eq(4));
            autoWrite.textWrite(number1.eq(x).find($('.mt_department')).html(), team2.eq(i).find($('.row')).eq(0).find('input').eq(5));
            autoWrite.textWrite(number1.eq(x).find($('.mt_workCity')).html(), team2.eq(i).find($('.row')).eq(0).find('input').eq(6));
            autoWrite.textWrite(number1.eq(x).find($('.mt_companyproperty')).html(), team2.eq(i).find($('.row')).eq(0).find('input').eq(7));
            autoWrite.textWrite(number1.eq(x).find($('.mt_companySize')).html(), team2.eq(i).find($('.row')).eq(0).find('input').eq(8));
            autoWrite.textWrite(number1.eq(x).find($('.workContent')).html(), team2.eq(i).find($('.row')).eq(1).find('textarea').eq(0));
            autoWrite.textWrite(number1.eq(x).find($('.mt_reasons')).html(), team2.eq(i).find($('.row')).eq(3).find('textarea').eq(0));
            x++;
            break;
        }
        else if(number2.eq(y)&&X(number2.eq(y).find($('.mt_startDate')).html())==which_time[i]){
            autoWrite.adddataZero(number2.eq(y).find($('.mt_startDate')).html(), team2.eq(i).find($('.row')).eq(0).find('input').eq(0));
            autoWrite.adddataZero(number2.eq(y).find($('.mt_endDate')).html(), team2.eq(i).find($('.row')).eq(0).find('input').eq(1));
            autoWrite.textWrite(number2.eq(y).find($('.mt_companyName')).html(), team2.eq(i).find($('.row')).eq(0).find('input').eq(3));
            autoWrite.textWrite(number2.eq(y).find($('.mt_positionName')).html(), team2.eq(i).find($('.row')).eq(0).find('input').eq(4));
            autoWrite.textWrite(number2.eq(y).find($('.mt_department')).html(), team2.eq(i).find($('.row')).eq(0).find('input').eq(5));
            autoWrite.textWrite(number2.eq(y).find($('.mt_workCity')).html(), team2.eq(i).find($('.row')).eq(0).find('input').eq(6));
            autoWrite.textWrite(number2.eq(y).find($('.mt_companyproperty')).html(), team2.eq(i).find($('.row')).eq(0).find('input').eq(7));
            autoWrite.textWrite(number2.eq(y).find($('.mt_companySize')).html(), team2.eq(i).find($('.row')).eq(0).find('input').eq(8));
            autoWrite.textWrite(number2.eq(y).find($('.workContent')).html(), team2.eq(i).find($('.row')).eq(1).find('textarea').eq(0));
            autoWrite.textWrite(number2.eq(y).find($('.mt_reasons')).html(), team2.eq(i).find($('.row')).eq(3).find('textarea').eq(0));
            y++;
            break;
        }
        else{
            x++;
            y++;
        }
    }
}
//项目管理经验
var which_pro = help.shunxu_pro();
var team3 = $('.rowContainer').eq(4).find('.sectionPart');
for(var i=0;i<team3.length;i++){
    autoWrite.adddataZero($('.mt_prostarttime').eq(which_pro[i]).html(), team3.eq(i).find($('.row')).eq(0).find('input').eq(0));
    autoWrite.adddataZero($('.mt_proendtime').eq(which_pro[i]).html(), team3.eq(i).find($('.row')).eq(0).find('input').eq(1));
    autoWrite.textWrite($('.mt_projectName').eq(which_pro[i]).html(), team3.eq(i).find($('.row')).eq(0).find('input').eq(3));
    autoWrite.textWrite($('.mt_projectDuty').eq(which_pro[i]).html(), team3.eq(i).find($('.row')).eq(1).find('input').eq(0));
    autoWrite.textWrite($('.mt_projectRemark').eq(which_pro[i]).html(), team3.eq(i).find($('.row')).eq(2).find('textarea').eq(0));
}
//技能爱好
var team4 = $('.rowContainer').eq(5).find('.sectionPart');
autoWrite.textWrite($('.mt_skillEngLevel').html(), team4.find($('.row')).eq(0).find('input').eq(0));
autoWrite.textWrite($('.mt_skillEngSorce').html(), team4.find($('.row')).eq(0).find('input').eq(1));
autoWrite.textWrite($('.mt_skillOtherLang').html()+"掌握程度:"+$('.mt_skillGraspLevel').html()+";听说能力:"+$('.mt_skillListenLevel').html()+";读写能力:"+$('.mt_skillWriteLevel').html(), team3.find($('.row')).eq(3).find('textarea').eq(0));
autoWrite.textWrite($('.mt_skill').html(), team3.find($('.row')).eq(4).find('textarea').eq(0));
autoWrite.textWrite($('.mt_hobbies').html(), team3.find($('.row')).eq(5).find('textarea').eq(0));
//培训经历
var team5 = $('.rowContainer').eq(8).find('.sectionPart');
if($('.mt_trainingCompany').length>0){
    autoWrite.adddataZero($('.infotraining .mt_startDate').eq(0).html(), team5.eq(0).find($('.row')).eq(0).find('input').eq(0));
    autoWrite.adddataZero($('.infotraining .mt_endDate').eq(0).html(), team5.eq(0).find($('.row')).eq(0).find('input').eq(1));
    autoWrite.textWrite($('.mt_trainingCompany').eq(0).html(), team5.eq(0).find($('.row')).eq(0).find('input').eq(4));
    autoWrite.textWrite($('.mt_trainingName').eq(0).html(), team5.eq(0).find($('.row')).eq(0).find('input').eq(3));
    autoWrite.textWrite($('.mt_trainingDes').eq(0).html(), team5.eq(0).find($('.row')).eq(1).find('textarea').eq(0));
}
//奖惩状况
var team6 = $('.rowContainer').eq(9).find('.sectionPart');
for(var i=0;i<team6.length;i++){
    autoWrite.adddataZero($('.mt_awardsDate').eq(i).html(), team6.eq(i).find($('.row')).eq(0).find('input').eq(0));
    autoWrite.textWrite($('.mt_awardsType').eq(i).html(), team6.eq(i).find($('.row')).eq(0).find('input').eq(1));
    autoWrite.textWrite($('.mt_schawradList').eq(i).html(), team6.eq(i).find($('.row')).eq(1).find('textarea').eq(0));
}
//家庭成员
var team7 = $('.rowContainer').eq(10).find('.sectionPart');
if(team7.length>0){
    autoWrite.textWrite($('#mt_fmname').html(), team7.eq(0).find($('.row')).eq(0).find('input').eq(0));
    autoWrite.textWrite($('#mt_fmrelation').html(), team7.eq(0).find($('.row')).eq(0).find('input').eq(1));
    autoWrite.textWrite($('#mt_fmphone').html(), team7.eq(0).find($('.row')).eq(0).find('input').eq(2));
    autoWrite.textWrite($('#mt_fmwork').html(), team7.eq(0).find($('.row')).eq(0).find('input').eq(4));
    autoWrite.textWrite($('#mt_fmposition').html(), team7.eq(0).find($('.row')).eq(0).find('input').eq(5));
}
//自我评价
var team8 = $('.rowContainer').eq(11).find('.sectionPart');
autoWrite.textWrite($('#mt_selfIntro').html(), team8.eq(0).find($('.row')).eq(0).find('textarea').eq(0));


