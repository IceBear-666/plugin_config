if ($('#jm_qiuck_cover')) {
    $('#jm_qiuck_cover').fadeIn();
    setTimeout(function() {
        $('#jm_qiuck_cover').fadeOut()
    },
    1000)
}
var _ = function(index, i) {
    if (typeof i === 'undefined') {
        return document.querySelectorAll(index)[0]
    }
    return document.querySelectorAll(index)[i]
};
var _v = function(name, i) {
    if (typeof i === 'undefined') {
        return document.querySelectorAll(name)[0].innerHTML
    }
    return document.querySelectorAll(name)[i].innerHTML
};
var help = {
    getActiveId: function() {
        var item = document.querySelectorAll('.leftMenuList li');
        for (var i in item) {
            if (item[i].className.indexOf('active') != -1) {
                return i
            }
        }
    },
    event: function() {
        var ev = document.createEvent('HTMLEvents');
        ev.initEvent('change', true, false);
        return ev
    },
    delay: function(fn) {
        window.setTimeout(fn, 200)
    },
    getEduType: function(content) {
        switch (content) {
        case '大学本科-一本':
        case '大学本科-二本':
        case '大学本科-三本':
        case '海外本科':
            return 4;
            break;
        case '大学专科':
            return 5;
            break;
        case '硕士研究生':
            return 3;
            break;
        case 'MBA':
            return 2;
            break;
        case '博士研究生':
            return 1;
            break;
        default:
            return 6;
            break
        }
    },
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
                level = 4;
                break
            }
            if (level > maxLevel) {
                maxLevel = level;
                index = i
            }
        }
        return {
            id: index,
            level: maxLevel
        }
    },
    getLanSkill: function(content) {
        switch (content) {
        case '了解':
            return '一般';
            break;
        case '一般':
            return '良好';
            break;
        case '熟练':
            return '熟练';
            break;
        case '精通':
            return '母语';
            break
        }
    },
    getcompySize: function(content) {
        var size;
        switch (content) {
        case '少于50人':
            size = 1;
            break;
        case '50-149人':
            size = 2;
            break;
        case '150-499人':
            size = 3;
            break;
        case '500-999人':
            size = 4;
            break;
        default:
            size = 5
        }
        return size
    },
    getcompyType: function(content) {
        var type;
        switch (content) {
        case '外资-欧美':
        case '外资-非欧美':
            type = 1;
            break;
        case '合资-欧美':
        case '合资-非欧美':
            type = 2;
            break;
        case '国企':
            type = 6;
            break;
        case '民营公司':
            type = 5;
            break;
        case '政府机关':
        case '非盈利机构':
            type = 7;
            break;
        case '事业单位':
            type = 8;
            break;
        case '上市公司':
            type = 4;
            break;
        }
        return type
    }
};
var autoWrite = {
    textWrite: function(content, obj) {
        if (content && obj) {
            obj.value = content
        }
    },
    selWrite: function(content, obj) {
        if (content && obj) {
            var opt = obj.options;
            for (var i in opt) {
                if (opt[i].innerHTML.indexOf(content, 0) != -1) {
                    opt[i].selected = true;
                    break
                }
            }
        }
    },
    sexWrite: function() {
        if (_('#gender1') && _v('#mt_sex') === '男') {
            _('#gender1').click()
        } else {
            _('#gender2').click()
        }
    },
    custonFun: function(callback) {
        callback()
    }
};
var activeId = help.getActiveId();
if (activeId == 0) {
    autoWrite.textWrite(_v('#mt_name'), _('#name'));
    autoWrite.selWrite(_v('#mt_biryear'), _('#birthDateY'));
    _('#birthDateY').dispatchEvent(help.event());
    help.delay(function() {
        autoWrite.selWrite(_v('#mt_birmonth'), _('#birthDateM'));
        _('#birthDateM').dispatchEvent(help.event());
        help.delay(function() {
            autoWrite.selWrite(_v('#mt_birday'), _('#birthDateD'));
            _('#birthDateD').dispatchEvent(help.event())
        })
    });
    autoWrite.sexWrite();
    autoWrite.selWrite(_v('#mt_national'), _('#nationalityId'));
    autoWrite.textWrite(_v('#mt_id'), _('#idNumber'));
    autoWrite.textWrite(_v('#mt_nation'), _('#nationality'));
    autoWrite.textWrite(_v('#mt_email'), _('#email'));
    autoWrite.textWrite(_v('#mt_tel'), _('#mobilePhone'));
    autoWrite.textWrite(_v('#mt_add'), _('#address'));
    autoWrite.textWrite(_v('#mt_zip'), _('#postalCode'));
    autoWrite.textWrite(_v('#mt_gudingtel'), _('#homePhone'));
    autoWrite.textWrite(_v('#mt_hukoucitynow_city'), _('#hukou'));
    autoWrite.textWrite(_v('#mt_selfIntro'), _('#selfAssessment'));
    autoWrite.textWrite(_v('#mt_gudingtel'), _('#otherWayContact'));
    autoWrite.custonFun(function() {
        var idType;
        switch (_v('#mt_idtype')) {
        case '香港永久居民身份证':
        case '香港非永久居民身份证':
        case '澳门永久居民身份证':
        case '澳门非永久居民身份证':
            idType = '港澳身份证';
            break;
        default:
            idType = _v('#mt_idtype');
            break
        }
        autoWrite.selWrite(idType, _('#idType'));
        switch (_v('#mt_maritalstatus')) {
        case '未婚':
            _('#marryState1').click();
            break;
        case '已婚':
            _('#marryState2').click();
            break;
        case '离婚':
            _('#marryState3').click();
            break
        }
        switch (_v('#mt_polistatus')) {
        case '群众':
            _('#politicalStatus1').click();
            break;
        case '共青团员':
            _('#politicalStatus2').click();
            break;
        case '中共党员':
            _('#politicalStatus3').click();
            break
        }
        var maxEdu = help.getEduType(_v('#mt_edu'));
        _('#educationLevel').options[maxEdu].selected = true;
        var graDate = _v('#mt_gradutetime').split('-');
        autoWrite.selWrite(graDate[0], _('#graduateDateY'));
        autoWrite.selWrite(graDate[1], _('#graduateDateM'));
        var eduType;
        switch (_v('#mt_edutype')) {
        case '定向':
        case '委培':
            eduType = '定向培养/委托培养';
            break;
        case '海外留学':
            eduType = '留学生';
            break;
        default:
            eduType = '非定向培养';
            break
        }
        autoWrite.selWrite(eduType, _('#trainType'));
        _('#currentCountryId').options[1].selected = true;
        _('#currentCountryId').dispatchEvent(help.event());
        help.delay(function() {
            autoWrite.selWrite(_v('#mt_livecity_pro'), _('#currentCityIdP'));
            _('#currentCityIdP').dispatchEvent(help.event());
            help.delay(function() {
                autoWrite.selWrite(_v('#mt_livecity_city'), _('#currentCityId'))
            })
        })
    })
} else if (activeId == 1) {
    var ary = [];
    $('.infopledu').each(function(i, val) {
        var edu = help.getEduType(_v('.infopledu .mt_education', i));
        ary.push({
            id: i,
            edu: edu
        })
    });
    ary.sort(function(a, b) {
        return a.edu - b.edu
    });
    ary.forEach(function(val, index) {
        var i = val['id'];
        var st = _v('.infopledu .mt_startYear', i).split('-');
        var et = _v('.infopledu .mt_endYear', i).split('-');
        autoWrite.selWrite(st[0], _('#eduStartDateY' + index));
        autoWrite.selWrite(st[1], _('#eduStartDateM' + index));
        autoWrite.selWrite(et[0], _('#eduEndDateY', index));
        autoWrite.selWrite(et[1], _('#eduEndDateM', index));
        autoWrite.textWrite(_v('.infopledu .mt_academy', i), _('#eduAcademy' + index));
        autoWrite.textWrite(_v('.infopledu .mt_professional', i), _('#eduMajor' + index));
        var myedu = help.getEduType(_v('.infopledu .mt_education', i));
        if (_('#educations' + index)) {
            _('#educations' + index).options[myedu].selected = true;
            if (myedu <= 3) {
                _('#educations' + index).dispatchEvent(help.event());
                help.delay(function() {
                    autoWrite.textWrite(_v('.infopledu .mt_tutorname', i), _('#teacherNames' + index))
                })
            }
        }
        var rank = _v('.infopledu .mt_classranking', i).substr(1);
        switch (_v('.infopledu .mt_classranking', i)) {
        case '前40%':
            rank = '50%';
            break;
        case '前60%':
            rank = '70%';
            break
        }
        autoWrite.selWrite(rank, _('#eduClassOrder' + index));
        autoWrite.textWrite(_v('.infopledu .mt_major', i), _('#eduDescription', index))
    })
} else if (activeId == 2) {
    var maxEng = help.maxEngLevel()['level'];
    if (maxEng > 0) {
        _('#englishLevel').options[maxEng].selected = true
    }
    $('.infoOtherSkill').each(function(i, val) {
        if (i < 2) {
            autoWrite.selWrite(_v('.infoOtherSkill .mt_skillOtherLang', i), _('#otherLanguage' + (i + 1)));
            var skLevel = help.getLanSkill(_v('.infoOtherSkill .mt_skillGraspLevel', i));
            autoWrite.selWrite(skLevel, _('#level' + (i + 1)))
        }
    })
} else if (activeId == 3) {
    _('#cardre').value = '';
    $('.infoschoolclub').each(function(i, val) {
        var schcon = _('#cardre').value;
        schcon = schcon + _v('.infoschoolclub .mt_schClubList', i) + '\\n\\n';
        _('#cardre').value = schcon
    });
    _('#reward').value = '';
    $('.infoschaward').each(function(i, val) {
        var awdcon = _('#reward').value;
        awdcon = awdcon + _v('.infoschaward .mt_schawradList', i) + '\\n\\n';
        _('#reward').value = awdcon
    })
} else if (activeId == 5) {
    $('.infoproject').each(function(i, val) {
        var st = _v('.infoproject .mt_prostartdate', i).split('-');
        var et = _v('.infoproject .mt_proenddate', i).split('-');
        autoWrite.selWrite(st[0], _('#proStartDateY', i));
        autoWrite.selWrite(st[1], _('#proStartDateM', i));
        autoWrite.selWrite(et[0], _('#proEndDateY', i));
        autoWrite.selWrite(et[1], _('#proEndDateM', i));
        autoWrite.textWrite(_v('.infoproject .mt_projectName', i), _('#projectNames', i));
        autoWrite.textWrite(_v('.infoproject .mt_positionName', i), _('#projectPosition', i));
        autoWrite.textWrite(_v('.infoproject .mt_projectRemark', i), _('#projectDescriptions', i));
        autoWrite.textWrite(_v('.infoproject .mt_projectDuty', i), _('#projectResponsibility', i))
    })
} else if (activeId == 6) {
    var len = $('.infofulltimejobs').length;
    $('.infofulltimejobs').each(function(i, val) {
        if (_('#jobTypes', i)) {
            _('#jobTypes', i).options[1].selected = true
        }
        autoWrite.textWrite(_v('.infofulltimejobs .mt_companyName', i), _('#jobCom', i));
        autoWrite.textWrite(_v('.infofulltimejobs .mt_positionName', i), _('#jobPosition', i));
        autoWrite.textWrite(_v('.infofulltimejobs .mt_workDes .workDes', i), _('#jobResponsibility', i));
        autoWrite.textWrite(_v('.infofulltimejobs .mt_reterenceName', i), _('#authenticators', i));
        autoWrite.textWrite(_v('.infofulltimejobs .mt_reterence_phone', i), _('#authenticatorContacts', i));
        var st = _v('.infofulltimejobs .mt_startDate', i).split('-');
        var et = _v('.infofulltimejobs .mt_endDate', i).split('-');
        autoWrite.selWrite(st[0], _('#jobStartDateY', i));
        autoWrite.selWrite(st[1], _('#jobStartDateM', i));
        autoWrite.selWrite(et[0], _('#jobEndDateY', i));
        autoWrite.selWrite(et[1], _('#jobEndDateM', i));

    });
    $('.infoparttimejobs').each(function(i, val) {
        if (_('#jobTypes', i + len)) {
            _('#jobTypes', i + len).options[3].selected = true
        }
        autoWrite.textWrite(_v('.infoparttimejobs .mt_companyName', i), _('#jobCom', i + len));
        autoWrite.textWrite(_v('.infoparttimejobs .mt_positionName', i), _('#jobPosition', i + len));
        autoWrite.textWrite(_v('.infoparttimejobs .mt_workDes .workDes', i), _('#jobResponsibility', i + len));
        autoWrite.textWrite(_v('.infoparttimejobs .mt_reterenceName', i), _('#authenticators', i + len));
        autoWrite.textWrite(_v('.infoparttimejobs .mt_reterence_phone', i), _('#authenticatorContacts', i + len));
        var st = _v('.infoparttimejobs .mt_startDate', i).split('-');
        var et = _v('.infoparttimejobs .mt_endDate', i).split('-');
        autoWrite.selWrite(st[0], _('#jobStartDateY', i + len));
        autoWrite.selWrite(st[1], _('#jobStartDateM', i + len));
        autoWrite.selWrite(et[0], _('#jobEndDateY', i + len));
        autoWrite.selWrite(et[1], _('#jobEndDateM', i + len));
  
    })
} else if (activeId == 7) {
    autoWrite.textWrite(_v('#mt_fmname'), _('#familyName0'));
    autoWrite.textWrite(_v('#mt_fmrelation'), _('#familyRelation'));
    autoWrite.textWrite(_v('#mt_fmwork'), _('#familyCom'));
    autoWrite.textWrite(_v('#mt_fmposition'), _('#familyPosition'));
    autoWrite.textWrite(_v('#mt_fmphone'), _('#familyContactWay'))
}