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
    getGraguate_late: function() {
        var minid=0;
        var minedutime;
        for(var i=0;i<$('.infopledu').length;i++){
            //得到最早毕业年份
            var endyear=parseInt($('#edu-list .mt_endYearY').eq(i).html());
            if(i==0){
                minedutime=endyear;
                minid=0;
            }else{
                if(endyear<minedutime){
                    minedutime=endyear;
                    minid=i;
                }
            }
        }
        return minid;
    }
};
var _ = function(objname, i) {
    if (typeof i === 'undefined') {
        return $('iframe[name=\"iframe_id\"]').contents().find('input[name=\"' + objname + '\"]')
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
if($('iframe[name=\"iframe_id\"]').contents().find('form[name=\"hrResumeForm\"]').length>0){
    autoWrite.textWrite($('#mt_name').html(), _('name'));
    autoWrite.custonFun(function() {
        if ($('#mt_sex').html() === '男' && _('gender').length) {
            _('gender').eq(0).click()
        } else {
            _('gender').eq(1).click()
        }
    });
    autoWrite.adddataZero($('#mt_birth').html(), _('birthday'));
    autoWrite.textWrite($('#mt_id').html(), _('idcard'));
    autoWrite.selectFacc($('#mt_nativeplace').html()+'省',$('iframe[name=\"iframe_id\"]').contents().find('select[name=\"birthplace\"]').eq(0));
    autoWrite.selectFacc($('#mt_native_city').html()+'市',$('iframe[name=\"iframe_id\"]').contents().find('select[name=\"birthplace\"]').eq(1));

    autoWrite.selectFac($('#mt_maritalstatus').html(),$('iframe[name=\"iframe_id\"]').contents().find('select[name=\"marital\"]'));
    autoWrite.selectFac($('#mt_polistatus').html(),$('iframe[name=\"iframe_id\"]').contents().find('select[name=\"polity\"]'));
    autoWrite.selectFac($('#mt_national').html(),$('iframe[name=\"iframe_id\"]').contents().find('select[name=\"nation\"]'));
    autoWrite.selectFac($('#mt_nation').html(),$('iframe[name=\"iframe_id\"]').contents().find('select[name=\"nationality\"]'));

    autoWrite.selectFac($('#mt_nativeplace').html(),$('iframe[name=\"iframe_id\"]').contents().find('select[name=\"familyregisterinfo\"]').eq(0));
    autoWrite.selectFac($('#mt_native_city').html(),$('iframe[name=\"iframe_id\"]').contents().find('select[name=\"familyregisterinfo\"]').eq(1));

    var maxGra = help.getGraguate();
    autoWrite.custonFun(function() {
        var polis = $('iframe[name=\"iframe_id\"]').contents().find('select[name=\"degree\"]');
        if (polis.length) {
            switch ($('.mt_degree').eq(maxGra).html()) {
                case '学士':
                case '双学士':
                    polis.get(0).options[5].selected=true;
                    break;
                case '博士':
                    polis.get(0).options[3].selected=true;
                    break;
                case '硕士':
                    polis.get(0).options[4].selected=true;
                    break;
                default:
                    polis.get(0).options[6].selected=true;
                    break;
            }
        }
    });
    autoWrite.custonFun(function() {
        var polis = $('iframe[name=\"iframe_id\"]').contents().find('select[name=\"knowledge\"]');
        if (polis.length) {
            switch ($('.mt_education').eq(maxGra).html()) {
                case '大学本科-一本':
                case '大学本科-二本':
                case '大学本科-三本':
                case '海外本科':
                    polis.get(0).options[2].selected=true;
                    break;
                case '硕士研究生':
                    polis.get(0).options[1].selected=true;
                    break;
                case '博士研究生':
                    polis.get(0).options[11].selected=true;
                    break;
                case '大学专科':
                    polis.get(0).options[3].selected=true;
                    break;
                default:
                    polis.get(0).options[10].selected=true;
                    break;
            }
        }
    });
    var minGra = help.getGraguate_late();
    autoWrite.custonFun(function() {
        var polis = $('iframe[name=\"iframe_id\"]').contents().find('select[name=\"firstdegree\"]');
        if (polis.length) {
            switch ($('.mt_education').eq(minGra).html()) {
                case '大学本科-一本':
                case '大学本科-二本':
                case '大学本科-三本':
                case '海外本科':
                    polis.get(0).options[2].selected=true;
                    break;
                case '硕士研究生':
                    polis.get(0).options[1].selected=true;
                    break;
                case '博士研究生':
                    polis.get(0).options[11].selected=true;
                    break;
                case '大学专科':
                    polis.get(0).options[3].selected=true;
                    break;
                default:
                    polis.get(0).options[10].selected=true;
                    break;
            }
        }
    });
    autoWrite.selectFac($('#mt_livecity_pro').html(),$('iframe[name=\"iframe_id\"]').contents().find('select[name=\"residence\"]').eq(0));
    autoWrite.selectFac($('#mt_livecity_city').html(),$('iframe[name=\"iframe_id\"]').contents().find('select[name=\"residence\"]').eq(1));
}
//教育经历
else if($('iframe[name=\"iframe_id\"]').contents().find('form[name=\"hrEduForm\"]').length>0){
    var len = $('iframe[name=\"iframe_id\"]').eq(0).contents().find('form[name=\"hrEduForm\"]').eq(0).find('table').eq(0).find('tr').length;
    var i=len-2;
    if(i<$('.mt_schoolName').length){
        autoWrite.textWrite($('.mt_schoolName').eq(i).html(), _('school'));
        autoWrite.textWrite($('.mt_professional').eq(i).html(), _('speciality'));
        autoWrite.textWrite($('.mt_academy').eq(i).html(), _('department'));
        autoWrite.adddataZero($('.mt_startYear').eq(i).html(), _('schooldate'));
        autoWrite.adddataZero($('.infopledu .mt_endYear').eq(i).html(), _('graduatedate'));
        autoWrite.custonFun(function() {
            var polis = $('iframe[name=\"iframe_id\"]').contents().find('select[name=\"degree\"]');
            if (polis.length) {
                switch ($('.mt_degree').eq(i).html()) {
                    case '学士':
                    case '双学士':
                        polis.get(0).options[5].selected=true;
                        break;
                    case '博士':
                        polis.get(0).options[3].selected=true;
                        break;
                    case '硕士':
                        polis.get(0).options[4].selected=true;
                        break;
                    default:
                        polis.get(0).options[6].selected=true;
                        break;
                }
            }
        });
        autoWrite.custonFun(function() {
            var polis = $('iframe[name=\"iframe_id\"]').contents().find('select[name=\"grade\"]');
            if (polis.length) {
                switch ($('.mt_education').eq(i).html()) {
                    case '大学本科-一本':
                    case '大学本科-二本':
                    case '大学本科-三本':
                    case '海外本科':
                        polis.get(0).options[2].selected=true;
                        break;
                    case '硕士研究生':
                        polis.get(0).options[1].selected=true;
                        break;
                    case '博士研究生':
                        polis.get(0).options[11].selected=true;
                        break;
                    case '大学专科':
                        polis.get(0).options[3].selected=true;
                        break;
                    default:
                        polis.get(0).options[10].selected=true;
                        break;
                }
            }
        });
    }
}
//外语水平
else if($('iframe[name=\"iframe_id\"]').contents().find('form[name=\"hrLanuageForm\"]').length>0){
    var len = $('iframe[name=\"iframe_id\"]').eq(0).contents().find('form[name=\"hrLanuageForm\"]').eq(0).find('table').eq(0).find('tr').length;
    var i=len-2;
    if(i<$('.mt_skillEngLevel').length) {
        var polis = $('iframe[name=\"iframe_id\"]').contents().find('select[name=\"name\"]');
        var polis1 = $('iframe[name=\"iframe_id\"]').contents().find('select[name=\"grade\"]');
        switch ($('.mt_skillEngLevel').eq(i).html()) {
            case '专业八级':
                polis.get(0).options[2].selected = true;
                autoWrite.textWrite($('.mt_skillEngSorce').eq(i).html(), _('score'));
                polis1.get(0).options[18].selected = true;
                break;
            case '专业四级':
                polis.get(0).options[2].selected = true;
                autoWrite.textWrite($('.mt_skillEngSorce').eq(i).html(), _('score'));
                polis1.get(0).options[17].selected = true;
                break;
            case '大学英语六级':
                polis.get(0).options[2].selected = true;
                autoWrite.textWrite($('.mt_skillEngSorce').eq(i).html(), _('score'));
                polis1.get(0).options[16].selected = true;
                break;
            case '大学英语四级':
                polis.get(0).options[2].selected = true;
                autoWrite.textWrite($('.mt_skillEngSorce').eq(i).html(), _('score'));
                polis1.get(0).options[15].selected = true;
                break;
            default :
                break;
        }

    }
}
//工作经历
else if($('iframe[name=\"iframe_id\"]').contents().find('form[name=\"hrWorkForm\"]').length>0){
    var len = $('iframe[name=\"iframe_id\"]').eq(0).contents().find('form[name=\"hrWorkForm\"]').eq(0).find('table').eq(0).find('tr').length;
    var i=len-2;
    if(i<$('.mt_companyName').length) {
        autoWrite.textWrite($('.mt_companyName').eq(i).html(), _('company'));
        autoWrite.textWrite($('.mt_department').eq(i).html(), _('departmeng'));
        autoWrite.adddataZero($('.mt_startDate').eq(i).html(), _('begindate'));
        autoWrite.adddataZero($('.mt_endDate').eq(i).html(), _('enddate'));
        autoWrite.textWrite("姓名：" + $('.mt_reterenceName').eq(i).html() + ";职务：" + $('.mt_reterencePosition').eq(i).html(), _('witness'));
        autoWrite.textWrite($('.mt_reterence_phone').eq(i).html(), _('witnesscontact'));
        autoWrite.textWrite($('.mt_salaryMonth').eq(i).html(), _('salary'));
        autoWrite.textWrite($('.mt_reasons').eq(i).html(), _('leavereason'));
        $('iframe[name=\"iframe_id\"]').contents().find('textarea[name=\"achievement\"]').val($('.workDes').eq(i).html());
    }
}
//社会关系
else if($('iframe[name=\"iframe_id\"]').contents().find('form[name=\"hrResumeFamilyForm\"]').length>0){
    autoWrite.textWrite($('#mt_fmname').html(), _('name'));
    autoWrite.textWrite($('#mt_fmrelation').html(), _('relation'));
    autoWrite.textWrite($('#mt_fmposition').html(), _('profession'));
    autoWrite.textWrite($('#mt_fmwork').html(), _('company'));
}
//通讯信息
else if($('iframe[name=\"iframe_id\"]').contents().find('form[name=\"hrEmpcontantForm\"]').length>0){
    autoWrite.textWrite($('#mt_gudingtel').html(), _('hometel'));
    autoWrite.textWrite($('#mt_tel').html(), _('mobile'));
    autoWrite.textWrite($('#mt_email').html(), _('privatemail'));
    autoWrite.textWrite($('#mt_postadd').html(), _('address'));
    autoWrite.textWrite($('#mt_livecity_pro').html()+$('#mt_livecity_city').html(), _('nowaddress'));
    autoWrite.textWrite($('#mt_zip').html(), _('postalcode'));
}



