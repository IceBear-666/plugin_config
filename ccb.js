if ($('#jm_qiuck_cover')) {
	$('#jm_qiuck_cover').fadeIn();
	setTimeout(function() {
		$('#jm_qiuck_cover').fadeOut()
	}, 1000);
}
var event = document.createEvent('HTMLEvents');
event.initEvent('change', true, false);
var help = {
    maxEngLevel: function() {
        var level = 0,
        maxLevel = 0,
        index = -1;
        for (var i = 0; i < $('.infoEnglishSkill').length; i++) {
            switch ($('.infoEnglishSkill .mt_skillEngLevel').eq(i).html()) {
            case '大学英语四级':
                level = 1;
                break;
            case '大学英语六级':
                level = 2;
                break;
            case '专业四级':
                level = 3;
                break;
            case '专业八级':
                level = 6;
                break;
            }
            if (level > maxLevel) {
                maxLevel = level;
                index = i;
            }
        }
        for (var i = 0; i < $('.infoOtEnglishSkill').length; i++) {
            if ($('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html() == '托福') {
                level = 7;
            } else if ($('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html() == '雅思') {
                level = 4;
            } else if ($('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html() == '剑桥商务英语证书1级' || $('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html() == '剑桥商务英语证书2级' || $('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html() == '剑桥商务英语证书3级') {
                level = 5;
            } else if ($('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html() == '托业') {
                level = 8;
            } 
            if (level > maxLevel) {
                maxLevel = level;
                index = i;
            }
        }
        return {
            id: index,
            level: maxLevel
        }
    },
    selectAll: function() {
            var allword = [];
        if ($('.infoschaward').length) {
            for (var i = 0; i < $('.infoschaward').length; i++) {
                var word = $('.infoschaward .mt_awardsDate').eq(i).html()+$('.infoschaward .mt_awardsName').eq(i).html()+'\\n'+$('.infoschaward .mt_awardsType').eq(i).html()+'\\n'+$('.infoschaward .mt_awardsLevel').eq(i).html()+'\\n'+$('.infoschaward .mt_awardsDes').eq(i).html()+'\\n';
                allword.push(word);    
            } 
        }
        return  allword;
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
            for(var i in date){
                if(date[i]<10){
                    date[i]='0'+date[i];
                }
            }
            date=date.join('-');
            obj.val(date)
        }
    },
    custonFun: function(callback) {
        callback()
    }
};
//基本信息
autoWrite.textWrite($('#mt_name').html(), _('userName'));
autoWrite.selectFac($('#mt_idtype').html(),$('#user_NmbTy'));
autoWrite.textWrite($('#mt_id').html(), _('userNmb'));
autoWrite.custonFun(function() {
    if ($('#mt_sex').html() === '男' && _('userSex').length) {
        _('userSex').eq(0).click()
    } else {
        _('userSex').eq(1).click()
    }
});
autoWrite.adddataZero($('#mt_birth').html(), _('userBirthDay'));
autoWrite.selectFac($('#mt_nation').html(),$('#user_Nation'));
autoWrite.selectFacc($('#mt_polistatus').html(),$('#user_Poly'));
autoWrite.selectFac($('#mt_maritalstatus').html(), $('#user_marry'));
autoWrite.textWrite($('#mt_height').html(), _('userStature'));
autoWrite.textWrite($('#mt_weight').html(), _('userAvoirdupois'));
autoWrite.custonFun(function() {
    if ($('#user_Elgh').length) {
        var maxEng = help.maxEngLevel();
        var engskill = document.getElementById('user_Elgh');
        switch (maxEng['level']) {
        case 1:
            engskill.options[1].selected = true;
            break;
        case 2:
            engskill.options[2].selected = true;
            break;
        case 3:
            engskill.options[3].selected = true;
            break;
        case 4:
            engskill.options[5].selected = true;
            break;
        case 5:
            engskill.options[6].selected = true;
            break;
        case 6:
            engskill.options[4].selected = true;
            break;
        case 7:
            engskill.options[7].selected = true;
            break;
        case 8:
            engskill.options[8].selected = true;
            break;
        }
        engskill.dispatchEvent(event)
        // if (maxEng['level'] <= 4) {
        //     autoWrite.textWrite($('.infoEnglishSkill .mt_skillEngSorce').eq(maxEng['id']).html(), _('userElghScor'));
        // }
        // else{
        //     autoWrite.textWrite($('.infoOtEnglishSkill .mt_otherSkillEngSorce').eq(maxEng['id']).html(), _('userElghScor'));
        // }
    }
});
autoWrite.selectFac($('.infoOtherSkill .mt_skillOtherLang').html(), $('#user_OtherLang'));
autoWrite.textWrite($('.infoOtherSkill .mt_skillGraspLevel').html(), $('#user_otherLangLevel'));
autoWrite.textWrite($('#mt_tel').html(), _('userMobile'));
autoWrite.textWrite($('#mt_email').html(), _('userEmail'));
autoWrite.textWrite($('#mt_fmphone').html(), _('userHomePh'));
autoWrite.textWrite($('#mt_postadd').html(), _('userHomeDress'));
//教育
if ($('form[name=\"add_edu_resume\"]').length) {
    autoWrite.adddataZero($('.infopledu .mt_startYear').html(), _('d322'));
    autoWrite.adddataZero($('.infopledu .mt_endYear').html(), _('d323'));
    autoWrite.textWrite($('.infopledu .mt_academy').html(), _('_deptName'));
}
//工作
if ($('form[name=\"work_resume\"]').length) {
    autoWrite.adddataZero($('.infoparttimejobs .mt_startDate').html(), _('d322'));
    autoWrite.adddataZero($('.infoparttimejobs .mt_endDate').html(), _('d323'));
    autoWrite.textWrite($('.infoparttimejobs .mt_companyName').html(), _('_company'));
    autoWrite.textWrite($('.infoparttimejobs .mt_positionName').html(), _('_work_duty'));
    autoWrite.textWrite($('.infoparttimejobs .workContent').html(), $('textarea[name=\"_description\"]'));
}
autoWrite.selectFacc($('#mt_fmposition').html(), _('relation'));
autoWrite.textWrite($('#mt_fmname').html(), _('name'));
autoWrite.textWrite($('#mt_fmwork').html(), _('company'));
autoWrite.textWrite($('#mt_fmposition').html(), _('duty'));
var allList = help.selectAll();
autoWrite.textWrite(allList, $('textarea[name=\"_hortation\"]'));





