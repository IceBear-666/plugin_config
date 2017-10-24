if ($('#jm_qiuck_cover')) {
	$('#jm_qiuck_cover').fadeIn();
	setTimeout(function() {
		$('#jm_qiuck_cover').fadeOut()
	}, 1000);
}
var event = document.createEvent('HTMLEvents');
event.initEvent('change', true, false);
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
    datePart: function (date, obj1,obj2){
        if (date && obj1.length && obj2.length) {
            var datey;
            var datem;
            date = date.split('-');
            datey = date[0];
            datem = date[1];
            autoWrite.selectFac(datey, obj1);
            autoWrite.selectFac(datem, obj2);
            // obj1.val(datey);
            // obj1.val(datem);
        }
    },
    custonFun: function(callback) {
        callback()
    }
};
//基本信息
autoWrite.textWrite($('#mt_name').html(), _('resume_name'));
autoWrite.custonFun(function() {
    if ($('#mt_sex').html() === '男' && _('resume_gender').length) {
        _('resume_gender').eq(1).click()
    } else {
        _('resume_gender').eq(0).click()
    }
});
autoWrite.selectFac($('#mt_biryear').html(), $('select[name=\"resume_birthday_year\"]'));
autoWrite.selectFac($('#mt_birmonth').html(), $('select[name=\"resume_birthday_month\"]'));
autoWrite.textWrite($('#mt_selfIntro').html(), $('textarea[name=\"resume_jobdesc\"]'));
autoWrite.textWrite($('#mt_email').html(), _('resume_email'));
autoWrite.textWrite($('#mt_tel').html(), _('resume_mobile'));
autoWrite.selectFacc($('#mt_edu').html(), $('select[name=\"g_diploma_id\"]'));
autoWrite.selectFac($('#mt_maritalstatus').html(), $('select[name=\"g_marital_status_id\"]'));
autoWrite.textWrite($('#mt_national').html(), _('resume_country'));
autoWrite.selectFac($('#mt_nation').html(), $('select[name=\"resume_nation\"]'));
autoWrite.selectFacc($('#mt_polistatus').html(), $('select[name=\"resume_political\"]'));
autoWrite.selectFacc($('#mt_idtype').html(), $('select[name=\"g_certificate_id\"]'));
autoWrite.textWrite($('#mt_id').html(), _('resume_certificate'));
autoWrite.textWrite($('#mt_height').html(), _('resume_height'));
autoWrite.textWrite($('#mt_profile').html(), _('resume_keyword'));
autoWrite.textWrite($('#mt_postadd').html(), _('resume_address'));
autoWrite.textWrite($('#mt_qqname').html(), _('resume_qq'));
//教育经历
autoWrite.custonFun(function() {
    var edu = $('.infopledu');
    var club = $('.infoschoolclub');
    for (var i = 0; i < edu.length; i++) {
        autoWrite.textWrite($('.infopledu .mt_schoolName').eq(i).html(),  _('resume_education_school').eq(i));
        autoWrite.selectFac($('.infopledu .mt_startYearY').eq(i).html(), $('select[name=\"resume_education_year_from\"]').eq(i));
        autoWrite.selectFac($('.infopledu .mt_startYearM').eq(i).html(), $('select[name=\"resume_education_month_from\"]').eq(i));
        autoWrite.selectFac($('.infopledu .mt_endYearY').eq(i).html(), $('select[name=\"resume_education_year_to\"]').eq(i));
        autoWrite.selectFac($('.infopledu .mt_endYearM').eq(i).html(), $('select[name=\"resume_education_month_to\"]').eq(i));
        autoWrite.selectFacc($('.infopledu .mt_education').eq(i).html(), $('select[name=\"g_diploma_id\"]').eq(i));
        autoWrite.textWrite($('.infopledu .mt_professional').eq(i).html(),  _('resume_education_major_name').eq(i));
        autoWrite.textWrite($('.infopledu .mt_professionalranking').eq(i).html(),  _('resume_education_grade_rank').eq(i));
        autoWrite.selectFac($('.infopledu .mt_degree').eq(i).html(), $('select[name=\"g_degree_id\"]').eq(i));
        autoWrite.textWrite($('.infopledu .mt_major').eq(i).html(),  $('textarea[name=\"resume_education_major_desc\"]').eq(i));
    }
    for (var i = 0; i < club.length; i++) {
        autoWrite.textWrite($('.infoschoolclub .mt_schClubName').eq(i).html()+'\\n'+$('.infoschoolclub .mt_positionName').eq(i).html()+'\\n'+$('.infoschaward .mt_awardsName').eq(i).html()+'\\n'+$('.infoschaward .mt_awardsType').eq(i).html()+'\\n'+$('.infoschaward .mt_awardsDes').eq(i).html(),  $('textarea[name=\"resume_education_desc\"]').eq(i));
    }
});
//培训经历
autoWrite.custonFun(function() {
    var train = $('.infotraining');
    for (var i = 0; i < train.length; i++) {
        autoWrite.textWrite($('.infotraining .mt_trainingName').eq(i).html(),  _('resume_training_course_name').eq(i));
        autoWrite.datePart($('.infotraining .mt_startDate').eq(i).html(), $('select[name=\"resume_training_year_from\"]').eq(i),$('select[name=\"resume_training_month_from\"]').eq(i));
        autoWrite.datePart($('.infotraining .mt_endDate').eq(i).html(), $('select[name=\"resume_training_year_to\"]').eq(i),$('select[name=\"resume_training_month_to\"]').eq(i));
        autoWrite.textWrite($('.infotraining .mt_trainingCompany').eq(i).html(),  _('resume_training_agent').eq(i));
    }
});
//项目经历
autoWrite.custonFun(function() {
    var ject = $('.infoproject');
    for (var i = 0; i < ject.length; i++) {
        autoWrite.textWrite($('.infoproject .mt_projectName').eq(i).html(),  _('resume_project_name').eq(i));
        autoWrite.datePart($('.infoproject .mt_prostarttime').eq(i).html(), $('select[name=\"resume_project_year_from\"]').eq(i),$('select[name=\"resume_project_month_from\"]').eq(i));
        autoWrite.datePart($('.infoproject .mt_proendtime').eq(i).html(), $('select[name=\"resume_project_year_to\"]').eq(i),$('select[name=\"resume_project_month_to\"]').eq(i));
        autoWrite.textWrite($('.infoproject .mt_projectRemark').eq(i).html(),  $('textarea[name=\"resume_project_desc\"]').eq(i));
        autoWrite.textWrite($('.infoproject .mt_projectDuty').eq(i).html(),  $('textarea[name=\"resume_project_function\"]').eq(i));
        autoWrite.textWrite($('.infoproject .mt_projectNumber').eq(i).html(),  _('resume_project_person').eq(i));
    }
});
//实习
autoWrite.custonFun(function() {
    var job = $('.infoparttimejobs');
    for (var i = 0; i < job.length; i++) {
        autoWrite.textWrite($('.infoparttimejobs .mt_companyName').eq(i).html(),  _('resume_internship_company_name').eq(i));
        autoWrite.datePart($('.infoparttimejobs .mt_startDate').eq(i).html(), $('select[name=\"resume_internship_year_from\"]').eq(i),$('select[name=\"resume_internship_month_from\"]').eq(i));
        autoWrite.datePart($('.infoparttimejobs .mt_endDate').eq(i).html(), $('select[name=\"resume_internship_year_to\"]').eq(i),$('select[name=\"resume_internship_month_to\"]').eq(i));
        autoWrite.textWrite($('.infoparttimejobs .workContent').eq(i).html(),  $('textarea[name=\"resume_internship_content\"]').eq(i));
        autoWrite.textWrite($('.infoparttimejobs .mt_positionName').eq(i).html(),  _('resume_internship_name').eq(i));
    }
});
//特长
autoWrite.textWrite($('#mt_skill').html()+$('#mt_hobbies').html(), $('textarea[name=\"resume_skill_desc\"]'));
//证书
autoWrite.custonFun(function() {
    var certi = $('.infoplcerti');
    for (var i = 0; i < certi.length; i++) {
        autoWrite.textWrite($('.infoplcerti .mt_certificateName').eq(i).html(),  _('resume_certificate_name').eq(i));
        autoWrite.datePart($('.infoplcerti .mt_getDate').eq(i).html(), $('select[name=\"resume_certificate_year\"]').eq(i),$('select[name=\"resume_certificate_month\"]').eq(i));
        autoWrite.textWrite($('.infoplcerti .mt_issuing').eq(i).html(),  _('resume_certificate_agent').eq(i));
    }
});


