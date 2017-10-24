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
            //�õ������ҵ���
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
//������Ϣ
autoWrite.textWrite($('#mt_livecity_pro').html()+'ʡ'+$('#mt_livecity_city').html()+'��', _('objData.location'));//��ǰ���ڵ�
autoWrite.textWrite($('#mt_name').html(), _('objData.username'));//����
var maxGra = help.getGraguate();
autoWrite.textWrite($('.mt_schoolName').eq(maxGra).html(), _('objData.uniname'));//ѧУ
autoWrite.textWrite($('.mt_professional').eq(maxGra).html(), _('objData.major'));//רҵ
autoWrite.selectFacc($('#mt_sex').html(), $('select[name=\"objData.sex\"]'));//�Ա�
autoWrite.textWrite($('#mt_nativeplace').html(),_('objData.nativeplace'));//����
autoWrite.textWrite($('#mt_tel').html(), _('objData.mobile'));//�ֻ�
autoWrite.textWrite($('#mt_email').html(), _('objData.email'));//�����ʼ�
autoWrite.custonFun(function() {//ѧ��
    var polis = $('select[name=\"objData.exambatch\"]');
    if (polis.length) {
        switch ($('.mt_education').eq(maxGra).html()) {
            case '��ѧ����-һ��':
                polis.get(0).options[0].selected=true;
                break;
            case '��ѧ����-����':
                polis.get(0).options[1].selected=true;
                break;
            case '��ѧ����-����':
                polis.get(0).options[2].selected=true;
                break;
            case '˶ʿ�о���':
                polis.get(0).options[3].selected=true;
                break;
            default:
                break;
        }
    }
});
//רҵ�������س�����
$('textarea[name="objData.skilldesc"]').val($('#mt_skill').html()+$('#mt_hobbies').html());


