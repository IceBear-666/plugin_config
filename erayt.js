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
    custonFun: function(callback) {
        callback()
    }
};
//基本信息
autoWrite.textWrite($('#mt_livecity_pro').html()+'省'+$('#mt_livecity_city').html()+'市', _('objData.location'));//当前所在地
autoWrite.textWrite($('#mt_name').html(), _('objData.username'));//姓名
var maxGra = help.getGraguate();
autoWrite.textWrite($('.mt_schoolName').eq(maxGra).html(), _('objData.uniname'));//学校
autoWrite.textWrite($('.mt_professional').eq(maxGra).html(), _('objData.major'));//专业
autoWrite.selectFacc($('#mt_sex').html(), $('select[name=\"objData.sex\"]'));//性别
autoWrite.textWrite($('#mt_nativeplace').html(),_('objData.nativeplace'));//籍贯
autoWrite.textWrite($('#mt_tel').html(), _('objData.mobile'));//手机
autoWrite.textWrite($('#mt_email').html(), _('objData.email'));//电子邮件
autoWrite.custonFun(function() {//学历
    var polis = $('select[name=\"objData.exambatch\"]');
    if (polis.length) {
        switch ($('.mt_education').eq(maxGra).html()) {
            case '大学本科-一本':
                polis.get(0).options[0].selected=true;
                break;
            case '大学本科-二本':
                polis.get(0).options[1].selected=true;
                break;
            case '大学本科-三本':
                polis.get(0).options[2].selected=true;
                break;
            case '硕士研究生':
                polis.get(0).options[3].selected=true;
                break;
            default:
                break;
        }
    }
});
//专业技能与特长描述
$('textarea[name="objData.skilldesc"]').val($('#mt_skill').html()+$('#mt_hobbies').html());


