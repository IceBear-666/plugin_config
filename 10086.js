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
            }
        }
        for (var i = 0; i < $('.infoOtEnglishSkill').length; i++) {
            if ($('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html() == '托福') {
                level = 5
            } else if ($('.infoOtEnglishSkill .mt_otherSkillEngLevel').eq(i).html() == '雅思') {
                level = 4
            }
            if (level > maxLevel) {
                maxLevel = level;
            }
        }
        return maxLevel;
     },
    selectAll: function() {
        if ($('.infoschoolclub').length) {
            club = 0;
            job = 0;
            var allclub = [];
            var alljob = [];
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
        return {
            c: club,
            j: job
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
			for (var i=1;i<opt.length;i++) {
				if (opt[i].innerHTML.indexOf(content) != -1) {
					opt[i].selected = true;
					break;
				}
			}
		}
	},
    selectFacc: function(content, obj) {
        if (content && obj.length) {
            var opt = obj.get(0).options;
            for (var i=1;i<opt.length;i++) {
                if (content.indexOf(opt[i].innerHTML) != -1) {
                    opt[i].selected = true;
                    break;
                }
            }
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
autoWrite.textWrite($('#mt_name').html(), _('username'));
autoWrite.textWrite($('#mt_nation').html(), _('nation'));
autoWrite.selectFac($('#mt_sex').html(), $('#sex'));
autoWrite.selectFac($('#mt_polistatus').html(), $('#politics_features'));
autoWrite.textWrite($('#mt_height').html(), _('height'));
autoWrite.textWrite($('#mt_weight').html(), _('weight'));
autoWrite.textWrite(($('#mt_nativeplace').html()+$('#mt_native_city').html()), _('birth_place'));
autoWrite.adddataZero($('#mt_birth').html(), _('birthday')); 
var maxGra = help.getGraguate();
autoWrite.textWrite($('.infopledu .mt_schoolName').eq(maxGra).html(), _('graduate_colleage'));
autoWrite.textWrite($('.infopledu .mt_academy').eq(maxGra).html(), _('belong_faculty'));
autoWrite.textWrite($('.infopledu .mt_professional').eq(maxGra).html(), _('speciality'));
autoWrite.selectFac($('.infopledu .mt_education').eq(maxGra).html(), $('#education_qualification'));
autoWrite.selectFac($('.infopledu .mt_degree').eq(maxGra).html(), $('#degree'));
autoWrite.adddataZero($('.infopledu .mt_endYear').eq(maxGra).html(), _('graduate_date')); 
autoWrite.custonFun(function() {
    var maxGra = help.getGraguate();
    var rank = document.getElementById('speciality_rank');
    if (rank.length && $('.infopledu .mt_professionalranking').eq(maxGra).html()) {
        switch ($('.infopledu .mt_professionalranking').eq(maxGra).html()) {
        case '前5%':
        case '前10%':
            rank.options[1].selected=true;
            break;
        case '前20%':
        case '前30%':
            rank.options[2].selected=true;
            break;
        case '前40%':
        case '前50%':
            rank.options[3].selected=true;
            break;
        default:
            rank.options[4].selected=true;
        }
    }
});
autoWrite.custonFun(function() {
    if ($('#foreign_language_level').length) {
        var maxEng = help.maxEngLevel();
        var engskill = document.getElementById('foreign_language_level');
        switch (maxEng) {
        case 1:
            engskill.options[2].selected = true;
            break;
        case 2:
            engskill.options[1].selected = true;
            break;
        case 3:
            engskill.options[4].selected = true;
            break;
        case 4:
            engskill.options[5].selected = true;
            break;
        case 5:
            engskill.options[6].selected = true;
            break;
        case 6:
            engskill.options[3].selected = true;
            break;
        }
        engskill.dispatchEvent(event)
    }
});
autoWrite.textWrite($('.infoschaward .mt_schawradList').html(), $('#wyty_desc'));
autoWrite.textWrite($('#mt_add').html()+$('#mt_zip').html(), $('#now_address'));
autoWrite.textWrite($('#mt_tel').html(), $('#mobile'));
autoWrite.textWrite($('#mt_jjlxrtel').html(), $('#other_linkway'));
autoWrite.textWrite($('#mt_postadd').html(), $('#parents_address'));
autoWrite.textWrite($('#mt_email').html(), $('#mail'));
autoWrite.textWrite($('#mt_fmname').html(), _('name'));
autoWrite.selectFac($('#mt_fmrelation').html(), _('relation'));
autoWrite.textWrite($('#mt_fmwork').html(), _('family_company_name'));
autoWrite.textWrite($('#mt_fmposition').html(), _('duty'));
autoWrite.custonFun(function() {
    var edu = $('select[name=\"studyexceprice_type\"]');
    for (var i = 0; i < edu.length; i++) {
        autoWrite.selectFacc($('.infopledu .mt_education').eq(i).html(), edu.eq(i));
        autoWrite.adddataZero($('.infopledu .mt_startYear').eq(i).html(),  _('enter_school_date').eq(i));
        autoWrite.adddataZero($('.infopledu .mt_endYear').eq(i).html(),  _('finish_school_date').eq(i));
        autoWrite.textWrite($('.infopledu .mt_schoolName').eq(i).html(),  _('school_name').eq(i));
        autoWrite.textWrite($('.infopledu .mt_professional').eq(i).html(),  _('study_sepical').eq(i));
        autoWrite.textWrite($('.infopledu .mt_tutorname').eq(i).html(),  _('prove_man').eq(i));
        autoWrite.textWrite($('.infopledu .mt_tutorphone').eq(i).html(),  _('proveman_link').eq(i));
    }
});
autoWrite.custonFun(function() {
    var ward = $('select[name=\"level\"]');
    var level = $('select[name=\"readonly_jxdz\"]');
    for (var i = 0; i < ward.length; i++) {
        autoWrite.selectFacc($('.infoschaward .mt_awardsType').eq(i).html(), ward.eq(i));
        autoWrite.adddataZero($('.infoschaward .mt_awardsDate').eq(i).html(),  _('readonly_date').eq(i));
        autoWrite.textWrite($('.infoschaward .mt_awardsName').eq(i).html(),  _('readonly_name').eq(i));
        autoWrite.selectFacc($('.infoschaward .mt_awardsLevel').eq(i).html(),  level.eq(i));
        autoWrite.textWrite($('.infoschaward .mt_awardsDes').eq(i).html(),  _('readonly_work').eq(i));
    }
});
autoWrite.custonFun(function() {
    for (var i = 0; i < $('input[name=\"certificate_localtion\"]').length; i++) {
        autoWrite.textWrite($('.infoplcerti .mt_issuing').eq(i).html(), _('certificate_localtion').eq(i));
        autoWrite.adddataZero($('.infoplcerti .mt_getDate').eq(i).html(),  _('certificate_date').eq(i));
        autoWrite.textWrite($('.infoplcerti .mt_certificateName').eq(i).html(),  _('awards_name').eq(i));
    }
});
var allList = help.selectAll();
autoWrite.textWrite(allList['c'], $('#school_stsj_desc'));
autoWrite.textWrite(allList['j'], $('#society_stsj_desc'));



