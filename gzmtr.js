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
//������Ϣ
autoWrite.textWrite($('#mt_name').html(), _('form.userName'));//����
autoWrite.custonFun(function() {
    if ($('#mt_sex').html() === '��' && _('form.sex').length) {
        _('form.sex').eq(0).click()
    } else {
        _('form.sex').eq(1).click()
    }
});
autoWrite.textWrite($('#mt_nation').html(), _('form.nation'));//����
autoWrite.textWrite($('#mt_nativeplace').html(),_('form.homeTown'));//����
autoWrite.textWrite($('#mt_id').html(), _('form.idCardNum'));//���֤
//��֤����
autoWrite.textWrite($('#mt_birth').html(), _('form.birthDate'));//����
//����
autoWrite.textWrite($('#mt_height').html(), _('form.height'));//���
autoWrite.textWrite($('#mt_weight').html(), _('form.weight'));//����
autoWrite.custonFun(function() {//����״��
    if ($('#mt_maritalstatus').html() === 'δ��') {
        _('form.maritalStatus').eq(0).click();
    }else if($('#mt_maritalstatus').html() === '�ѻ�'){
        _('form.maritalStatus').eq(1).click();
    }else if($('#mt_maritalstatus').html() === '���'){
        _('form.maritalStatus').eq(2).click();
    }
});
autoWrite.custonFun(function() {//������ò
    var polis = $('select[name=\"form.politicalStatus\"]');
    if (polis.length) {
        switch ($('#mt_polistatus').html()) {
            case '�й���Ա':
                polis.get(0).options[2].selected=true;
                break;
            case '������Ա':
                polis.get(0).options[1].selected=true;
                break;
            case 'Ⱥ��':
                polis.get(0).options[0].selected=true;
                break;
            default:
                polis.get(0).options[4].selected=true;
                break;
        }
    }
});
//�뵳��ʱ��
autoWrite.textWrite($('#mt_postadd').html(), _('form.birthPlace'));//������
//�μӹ���ʱ��
autoWrite.custonFun(function() {//�������ڵ�
    var polis = $('select[name=\"form.accountPlace\"]');
    for (var i=0;i<polis.get(0).options.length;i++) {
        if(($('#mt_hukoucitynow').html()+'ʡ')==polis.get(0).options[i].innerHTML){
            polis.get(0).options[i].selected=true;
            break;
        }
    }
});
//��������
autoWrite.textWrite($('#mt_postadd').html(), _('form.accountThinAddress'));//���ڱ���ַ
var maxGra = help.getGraguate();
autoWrite.textWrite($('.infopledu .mt_professional').eq(maxGra).html(), _('form.professional'));//רҵ
autoWrite.custonFun(function() {//ѧ��
    var polis = $('select[name=\"form.degree\"]');
    if (polis.length) {
        switch ($('.infopledu .mt_education').eq(maxGra).html()) {
            case '��ѧ����-һ��':
            case '��ѧ����-����':
            case '��ѧ����-����':
            case '���Ȿ��':
                polis.get(0).options[2].selected=true;
                break;
            case '��ʿ�о���':
                polis.get(0).options[0].selected=true;
                break;
            case '˶ʿ�о���':
                polis.get(0).options[1].selected=true;
                break;
            case '��ѧר��':
                polis.get(0).options[3].selected=true;
                break;
            default:
                break;
        }
    }
});
autoWrite.custonFun(function() {//ѧλ
    var polis = $('select[name=\"form.academicDegree\"]');
    if (polis.length) {
        switch ($('.infopledu .mt_degree').eq(maxGra).html()) {
            case 'ѧʿ':
                polis.get(0).options[1].selected=true;
                break;
            case '˫ѧʿ':
                polis.get(0).options[2].selected=true;
                break;
            case '˶ʿ':
                polis.get(0).options[3].selected=true;
                break;
            case '��ʿ':
                polis.get(0).options[4].selected=true;
                break;
            default:
                polis.get(0).options[0].selected=true;
                break;
        }
    }
});
//ѧϰ����
autoWrite.textWrite($('.infopledu .mt_schoolName').eq(maxGra).html(), _('form.graduationSchool'));//��ҵԺУ
//��������
autoWrite.textWrite($('#mt_tel').html(), _('form.mobile'));//�����ֻ�
autoWrite.textWrite($('#mt_gudingtel').html(), _('form.telephone'));//�̶��绰
autoWrite.textWrite($('#mt_jjlxr').html(), _('form.emergencyContact'));//������ϵ��
autoWrite.textWrite($('#mt_jjlxrtel').html(), _('form.emergencyContactPhone'));//������ϵ�绰
autoWrite.textWrite($('#mt_postadd').html(), _('form.homeAddress'));//��ͥסַ
autoWrite.textWrite($('#mt_add').html(), _('form.contactAddress'));//ͨѶ��ַ
autoWrite.textWrite($('#mt_zip').html(), _('form.postCode'));//��������

autoWrite.textWrite($('.mt_base.mt_major').eq(maxGra).html(), _('form.mainCourses'));//���޿γ�
//רҵ��ҵ����
if ($('.mt_professionalranking').eq(maxGra).html()!=null) {//רҵ����
    switch ($('.mt_professionalranking').eq(maxGra).html()) {
        case 'ǰ5%':
            autoWrite.textWrite('5', _('form.performanceRanking'));
            break;
        case 'ǰ10%':
            autoWrite.textWrite('10', _('form.performanceRanking'));
            break;
        case 'ǰ20%':
            autoWrite.textWrite('20', _('form.performanceRanking'));
            break;
        case 'ǰ30%':
            autoWrite.textWrite('30', _('form.performanceRanking'));
            break;
        case 'ǰ40%':
            autoWrite.textWrite('40', _('form.performanceRanking'));
            break;
        case 'ǰ50%':
            autoWrite.textWrite('50', _('form.performanceRanking'));
            break;
        case 'ǰ60%':
            autoWrite.textWrite('60', _('form.performanceRanking'));
            break;
        case 'ǰ70%':
            autoWrite.textWrite('70', _('form.performanceRanking'));
            break;
        case 'ǰ80%':
            autoWrite.textWrite('80', _('form.performanceRanking'));
            break;
        default:
            autoWrite.textWrite('100', _('form.performanceRanking'));
            break;
    }
}
//��������
var len0 = $('.mt_base.mt_degree').length;
for(var i=0;i<len0;i++){
    if($('.mt_base.mt_degree').eq(i).html()=='ѧʿ'){
        var j=0;
        for(var k=0;k<len0;k++){
            if($('.mt_base.mt_degree').eq(k).html()!='˫ѧʿ'){
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
    }else if($('.mt_base.mt_degree').eq(i).html()== '˫ѧʿ') {
        _('edu8.selected').eq(0).click();
        autoWrite.selectFac($('.mt_base.mt_startYearY').eq(i).html(), $('select[name=\"form.edu8.startYear\"]'));
        autoWrite.selectFac($('.mt_base.mt_startYearM').eq(i).html(), $('select[name=\"form.edu8.startMonth\"]'));
        autoWrite.selectFac($('.mt_base.mt_endYearY').eq(i).html(), $('select[name=\"form.edu8.endYear\"]'));
        autoWrite.selectFac($('.mt_base.mt_endYearM').eq(i).html(), $('select[name=\"form.edu8.endMonth\"]'));
        autoWrite.textWrite($('.mt_base.mt_schoolName').eq(i).html(), _('form.edu8.schoolName'));
        autoWrite.textWrite($('.mt_base.mt_professional').eq(i).html(), _('form.edu8.professional'));
    }else if($('.mt_base.mt_degree').eq(i).html()=='˶ʿ') {
        _('edu9.selected').eq(0).click();
        autoWrite.selectFac($('.mt_base.mt_startYearY').eq(i).html(), $('select[name=\"form.edu9.startYear\"]'));
        autoWrite.selectFac($('.mt_base.mt_startYearM').eq(i).html(), $('select[name=\"form.edu9.startMonth\"]'));
        autoWrite.selectFac($('.mt_base.mt_endYearY').eq(i).html(), $('select[name=\"form.edu9.endYear\"]'));
        autoWrite.selectFac($('.mt_base.mt_endYearM').eq(i).html(), $('select[name=\"form.edu9.endMonth\"]'));
        autoWrite.textWrite($('.mt_base.mt_schoolName').eq(i).html(), _('form.edu9.schoolName'));
        autoWrite.textWrite($('.mt_base.mt_professional').eq(i).html(), _('form.edu9.professional'));
    }else if($('.mt_base.mt_degree').eq(i).html()=='��ʿ') {
        _('edu10.selected').eq(0).click();
        autoWrite.selectFac($('.mt_base.mt_startYearY').eq(i).html(), $('select[name=\"form.edu10.startYear\"]'));
        autoWrite.selectFac($('.mt_base.mt_startYearM').eq(i).html(), $('select[name=\"form.edu10.startMonth\"]'));
        autoWrite.selectFac($('.mt_base.mt_endYearY').eq(i).html(), $('select[name=\"form.edu10.endYear\"]'));
        autoWrite.selectFac($('.mt_base.mt_endYearM').eq(i).html(), $('select[name=\"form.edu10.endMonth\"]'));
        autoWrite.textWrite($('.mt_base.mt_schoolName').eq(i).html(), _('form.edu10.schoolName'));
        autoWrite.textWrite($('.mt_base.mt_professional').eq(i).html(), _('form.edu10.professional'));
    }
}

//��������
var l1=_('form.workVO.cmopnayName').length;
var l2=$('.mt_base.mt_companyName').length;
var l=l1>l2?l2:l1;
for(var i=0;i<l;i++){
    autoWrite.selectFac($('.mt_base.mt_startDate').eq(i).html().substr(0,4)+'��', $('select[name=\"form.workVO.startYear\"]').eq(i));
    autoWrite.selectFac($('.mt_base.mt_startDate').eq(i).html().substr(5)+'��', $('select[name=\"form.workVO.startMonth\"]').eq(i));
    autoWrite.selectFac($('.mt_base.mt_endDate').eq(i).html().substr(0,4)+'��', $('select[name=\"form.workVO.endYear\"]').eq(i));
    autoWrite.selectFac($('.mt_base.mt_endDate').eq(i).html().substr(5)+'��', $('select[name=\"form.workVO.endMonth\"]').eq(i));
    autoWrite.textWrite($('.mt_base.mt_companyName').eq(i).html(), _('form.workVO.cmopnayName').eq(i));
    autoWrite.textWrite($('.mt_base.mt_positionName').eq(i).html(), _('form.workVO.post').eq(i));
    autoWrite.textWrite($('.mt_base.mt_reasons').eq(i).html(), _('form.workVO.hadDepartResean').eq(i));
    $('textarea[name="form.workVO.workDesc"]').eq(i).val($('.workDes').eq(i).html());
}
//�����س�
var l3=_('form.skillsVO.name').length;
var l4=$('.infoplcerti').eq(0).find('.mt_certificateName').length;
var l5=l3>l4?l4:l3;
for(var i=0;i<l5;i++){
    autoWrite.textWrite($('.mt_certificateName').eq(i).html(), _('form.skillsVO.name').eq(i));
}
//��������
var polis = $('select[name=\"form.englishLevel\"]');
for(var i=0;i<$('.mt_skillEngLevel').length;i++){
    if($('.mt_skillEngLevel').eq(i).html()=="��ѧӢ������"){
        polis.get(0).options[5].selected=true;
        break;
    } else if($('.mt_skillEngLevel').eq(i).html()=="��ѧӢ���ļ�"){
        polis.get(0).options[4].selected=true;
    }
}
//��������
$('textarea[name="form.evaluateVO.shefEvaluateDesc"]').val($('#mt_selfIntro').html());


