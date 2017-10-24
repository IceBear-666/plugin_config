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
if ($('input[data-name=\"name\"]').parent().prev().html() == '真实姓名') {
    autoWrite.textWrite($('#mt_name').html(), _('name'));
    autoWrite.custonFun(function() {
        if ($('#mt_sex').html() === '男' && _('sex').length) {
            _('sex').eq(0).click()
        } else {
            _('sex').eq(1).click()
        }
    });
    autoWrite.adddataZero($('#mt_birth').html(), _('birthday'));
}
autoWrite.selectFac($('#mt_nativeplace').html(),$('select[name=\"province\"]'));
window.setTimeout(function(){
    autoWrite.selectFac($('#mt_native_city').html(),$('select[name=\"city\"]'));
 },200); 
autoWrite.textWrite($('#mt_nativeplace').html()+$('#mt_native_city').html(), _('birthplace'));
autoWrite.selectFac($('#mt_maritalstatus').html(), $('select[name=\"marriage\"]'));
autoWrite.custonFun(function() {
    var polis = $('select[name=\"member\"]');
    if (polis.length) {
        switch ($('#mt_polistatus').html()) {
        case '中共党员':
            polis.get(0).options[0].selected=true;
            break;
        case '中共预备党员':
            polis.get(0).options[1].selected=true;
            break;
        case '共青团员':
            polis.get(0).options[3].selected=true;
            break;
        case '群众':
            polis.get(0).options[4].selected=true;
            break;
        default:
            polis.get(0).options[5].selected=true;
            break;
        }
    }
});
autoWrite.textWrite($('#mt_height').html(), _('stature'));
autoWrite.textWrite($('#mt_weight').html(), $('input[data-name=\"weight\"]'));
autoWrite.selectFac($('#mt_nation').html(),$('select[name=\"national\"]'));
var maxGra = help.getGraguate();
autoWrite.selectFac($('.infopledu .mt_education').eq(maxGra).html(), $('select[name=\"schoolAge\"]'));
autoWrite.adddataZero($('.infopledu .mt_endYear').eq(maxGra).html(), _('dateTo')); 
autoWrite.selectFac($('#mt_expectcity_city').html(),$('select[name=\"expectioncity1\"]'));
autoWrite.textWrite($('#mt_tel').html(), _('contactnumber'));
autoWrite.textWrite($('#mt_email').html(), _('contact2number'));
autoWrite.textWrite($('#mt_add').html(), _('mailaddress'));
autoWrite.textWrite($('#mt_zip').html(), _('postnumber'));
autoWrite.textWrite($('#mt_postadd').html(), _('homeaddress'));
//教育背景
autoWrite.textWrite($('.infopledu .mt_schoolName').eq(maxGra).html(), _('graduate_colleage'));
autoWrite.textWrite($('.infopledu .mt_academy').eq(maxGra).html(), _('department'));
autoWrite.textWrite($('.infopledu .mt_professional').eq(maxGra).html(), _('specialtySpec'));
autoWrite.selectFac($('.infopledu .mt_degree').eq(maxGra).html(), $('select[name=\"degree\"]'));
autoWrite.adddataZero($('.infopledu .mt_startYear').eq(maxGra).html(), _('dateFrom')); 
autoWrite.textWrite($('.infopledu .mt_classranking').eq(maxGra).html(), _('inClass'));
autoWrite.textWrite($('.infopledu .mt_professionalranking').eq(maxGra).html(), _('inGrade'));
autoWrite.textWrite($('.infopledu .mt_major').eq(maxGra).html(), $('textarea[name=\"courseDesc\"]'));
//经历技能
autoWrite.custonFun(function() {
    for (var i = 0; i < $('.infoEnglishSkill').length; i++) {
        if ($('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() == '大学英语四级') {
            autoWrite.textWrite($('.infoEnglishSkill .mt_skillEngSorce').eq(i).html(), _('cet4'));
        }
        if ($('.infoEnglishSkill .mt_skillEngLevel').eq(i).html() == '大学英语六级') {
            autoWrite.textWrite($('.infoEnglishSkill .mt_skillEngSorce').eq(i).html(), _('cet6'));
        }
    }
    autoWrite.textWrite($('.infoOtEnglishSkill .mt_otherSkillEngLevel').html()+$('.infoOtEnglishSkill .mt_otherSkillEngSorce').html(), _('col1'));
});
var allList = help.selectAll();
autoWrite.textWrite(allList['c'], $('textarea[name=\"col3\"]'));
autoWrite.textWrite(allList['j'], $('textarea[name=\"col4\"]'));
autoWrite.textWrite(allList['e'], $('textarea[name=\"col5\"]'));
autoWrite.textWrite(allList['w'], $('textarea[name=\"col6\"]'));
autoWrite.textWrite($('#mt_skill').html(), $('textarea[name=\"col7\"]'));
//家庭状况
autoWrite.textWrite($('#mt_fmrelation').html(), _('relationShip'));
if ($('input[data-name=\"name\"]').parent().prev().html() == '姓名') {
    autoWrite.textWrite($('#mt_fmname').html(), _('name'));
}
autoWrite.textWrite($('#mt_fmwork').html(), $('input[name=\"company\"]'));
autoWrite.textWrite($('#mt_fmposition').html(), _('profession'));


// autoWrite.textWrite($('.infoschaward .mt_schawradList').html(), $('#wyty_desc'));
// autoWrite.textWrite($('#mt_add').html()+$('#mt_zip').html(), $('#now_address'));
// autoWrite.textWrite($('#mt_tel').html(), $('#mobile'));
// autoWrite.textWrite($('#mt_jjlxrtel').html(), $('#other_linkway'));
// autoWrite.textWrite($('#mt_postadd').html(), $('#parents_address'));
// autoWrite.textWrite($('#mt_email').html(), $('#mail'));

// autoWrite.custonFun(function() {
//     var edu = $('select[name=\"studyexceprice_type\"]');
//     for (var i = 0; i < edu.length; i++) {
//         autoWrite.selectFacc($('.infopledu .mt_education').eq(i).html(), edu.eq(i));
//         autoWrite.adddataZero($('.infopledu .mt_startYear').eq(i).html(),  _('enter_school_date').eq(i));
//         autoWrite.adddataZero($('.infopledu .mt_endYear').eq(i).html(),  _('finish_school_date').eq(i));
//         autoWrite.textWrite($('.infopledu .mt_schoolName').eq(i).html(),  _('school_name').eq(i));
//         autoWrite.textWrite($('.infopledu .mt_professional').eq(i).html(),  _('study_sepical').eq(i));
//         autoWrite.textWrite($('.infopledu .mt_tutorname').eq(i).html(),  _('prove_man').eq(i));
//         autoWrite.textWrite($('.infopledu .mt_tutorphone').eq(i).html(),  _('proveman_link').eq(i));
//     }
// });
// autoWrite.custonFun(function() {
//     var ward = $('select[name=\"level\"]');
//     var level = $('select[name=\"readonly_jxdz\"]');
//     for (var i = 0; i < ward.length; i++) {
//         autoWrite.selectFacc($('.infoschaward .mt_awardsType').eq(i).html(), ward.eq(i));
//         autoWrite.adddataZero($('.infoschaward .mt_awardsDate').eq(i).html(),  _('readonly_date').eq(i));
//         autoWrite.textWrite($('.infoschaward .mt_awardsName').eq(i).html(),  _('readonly_name').eq(i));
//         autoWrite.selectFacc($('.infoschaward .mt_awardsLevel').eq(i).html(),  level.eq(i));
//         autoWrite.textWrite($('.infoschaward .mt_awardsDes').eq(i).html(),  _('readonly_work').eq(i));
//     }
// });
// autoWrite.custonFun(function() {
//     for (var i = 0; i < $('input[name=\"certificate_localtion\"]').length; i++) {
//         autoWrite.textWrite($('.infoplcerti .mt_issuing').eq(i).html(), _('certificate_localtion').eq(i));
//         autoWrite.adddataZero($('.infoplcerti .mt_getDate').eq(i).html(),  _('certificate_date').eq(i));
//         autoWrite.textWrite($('.infoplcerti .mt_certificateName').eq(i).html(),  _('awards_name').eq(i));
//     }
// });




