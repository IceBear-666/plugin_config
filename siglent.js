if(KISSY.one('#jm_qiuck_cover')){KISSY.one('#jm_qiuck_cover').fadeIn();
setTimeout(function(){KISSY.one('#jm_qiuck_cover').fadeOut()},1000)}
if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$jjs1\"]')) {
    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$jjs1\"]').val(KISSY.one('#mt_name').html());
}
if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$jjs2\"]')) {
    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$jjs2\"]').val(KISSY.one('#mt_birth').html());
}
//性别
if (KISSY.one('#ContentPlaceHolder1_jjs3') && KISSY.one('#mt_sex').html() == '男') {
    document.getElementById('ContentPlaceHolder1_jjs3').checked = true;
}
if (KISSY.one('#ContentPlaceHolder1_jjs3_1') && KISSY.one('#mt_sex').html() == '女') {
    document.getElementById('ContentPlaceHolder1_jjs3_1').checked = true;
} 
//政治面貌
if (KISSY.one('#ContentPlaceHolder1_jjs4') && KISSY.one('#mt_polistatus').html() == '群众') {
    document.getElementById('ContentPlaceHolder1_jjs4').options[1].selected = true;
}
if (KISSY.one('#ContentPlaceHolder1_jjs4') && KISSY.one('#mt_polistatus').html() == '共青团员') {
    document.getElementById('ContentPlaceHolder1_jjs4').options[2].selected = true;
} 
if ($('#ContentPlaceHolder1_jjs4') && KISSY.one('#mt_polistatus').html() == '中共党员'
	||KISSY.one('#ContentPlaceHolder1_jjs4') && KISSY.one('#mt_polistatus').html() == '中共预备党员') {
    document.getElementById('ContentPlaceHolder1_jjs4').options[3].selected = true;
}

if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$jjs5\"]')&& KISSY.one('#mt_nation').html()) {
    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$jjs5\"]').val(KISSY.one('#mt_nation').html());
}

if (KISSY.one('#ContentPlaceHolder1_jjs6') && KISSY.one('#mt_maritalstatus').html() == '未婚') {
    document.getElementById('ContentPlaceHolder1_jjs6').checked = true;
}
if (KISSY.one('#ContentPlaceHolder1_jjs6_1') && KISSY.one('#mt_maritalstatus').html() == '已婚') {
    document.getElementById('ContentPlaceHolder1_jjs6_1').checked = true;
}

if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$jjs7\"]') && KISSY.one('#mt_height').html()) {
    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$jjs7\"]').val(KISSY.one('#mt_height').html());
}
if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$jjs8\"]') && KISSY.one('#mt_hukoucitynow').html()) {
    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$jjs8\"]').val(KISSY.one('#mt_hukoucitynow').html()+KISSY.one('#mt_hukoucitynow_city').html());
}
if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$jjs9\"]') && KISSY.one('#mt_add').html()) {
    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$jjs9\"]').val(KISSY.one('#mt_add').html());
}

if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$jjs10\"]') && $('.mt_professional').html()) {
    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$jjs10\"]').val($('.mt_professional').html());
}

if (document.getElementById('ContentPlaceHolder1_jjs11') && KISSY.one('#mt_edu').html()) {
	if (KISSY.one('#mt_edu').html() == '初中及以下') {
	    document.getElementById('ContentPlaceHolder1_jjs11').options[2].selected = true;
	}
	if (KISSY.one('#mt_edu').html() == '高中') {
	    document.getElementById('ContentPlaceHolder1_jjs11').options[3].selected = true;
	}
	if (KISSY.one('#mt_edu').html() == '中专') {
	    document.getElementById('ContentPlaceHolder1_jjs11').options[4].selected = true;
	}
	if (KISSY.one('#mt_edu').html() == '大学本科-一本'||KISSY.one('#mt_edu').html() == '大学本科-二本'||KISSY.one('#mt_edu').html() == '大学本科-三本') {
	    document.getElementById('ContentPlaceHolder1_jjs11').options[5].selected  = true;
	}
	if (KISSY.one('#mt_edu').html() == '硕士研究生') {
	    document.getElementById('ContentPlaceHolder1_jjs11').options[6].selected = true;
	}
	if (KISSY.one('#mt_edu').html() == '博士研究生') {
	    document.getElementById('ContentPlaceHolder1_jjs11').options[7].selected = true;
	}
}

if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$jjs13\"]') && KISSY.one('#mt_email').html()) {
    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$jjs13\"]').val(KISSY.one('#mt_email').html());
}
if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$jjs14\"]') && KISSY.one('#mt_gudingtel').html()) {
    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$jjs14\"]').val(KISSY.one('#mt_gudingtel').html().substr(0, 4));
}
if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$jjs15\"]') && KISSY.one('#mt_gudingtel').html()) {
    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$jjs15\"]').val(KISSY.one('#mt_gudingtel').html().substr(4));
}
if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$jjs16\"]') && KISSY.one('#mt_tel').html()) {
    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$jjs16\"]').val(KISSY.one('#mt_tel').html());
}
if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$jjs17\"]') && KISSY.one('#mt_add').html()) {
    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$jjs17\"]').val(KISSY.one('#mt_add').html());
}
if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$jjs18\"]') && KISSY.one('#mt_zip').html()) {
    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$jjs18\"]').val(KISSY.one('#mt_zip').html());
}
if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$jjs21\"]') && KISSY.one('#mt_expectcity').html()) {
    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$jjs21\"]').val(KISSY.one('#mt_expectcity').html()+KISSY.one('#mt_expectcity_city').html());
}

//教育经历
var k=25;
 for (var i =0; i<$('.infopledu').length; i++) {
 	if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]')&& $('.infopledu .mt_startYear').eq(i).html()) {
	    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]').val($('.infopledu .mt_startYear').eq(i).html()+'-01');
	}k++;
	if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]')&& $('.infopledu .mt_endYear').eq(i).html()) {
	    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]').val($('.infopledu .mt_endYear').eq(i).html()+'-01');
	}k++;
	if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]') && $('.infopledu .mt_schoolName').eq(i).html()) {
	    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]').val($('.infopledu .mt_schoolName').eq(i).html());
	}k++;
	if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]') && $('.infopledu .mt_professional').eq(i).html()) {
	    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]').val($('.infopledu .mt_professional').eq(i).html());
	}k++;
	if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]') && $('.infopledu .mt_education').eq(i).html()) {
	    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]').val($('.infopledu .mt_education').eq(i).html());
	}k++;
 }

 //工作经历
k=50;
for (var i =0; i<$('.infoparttimejobs').length; i++) {
 	if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]') && $('.infoparttimejobs .mt_startDate').eq(i).html()) {
	    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]').val($('.infoparttimejobs .mt_startDate').eq(i).html()+'-01');
	}k++;
	if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]') && $('.infoparttimejobs .mt_endDate').eq(i).html()) {
	    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]').val($('.infoparttimejobs .mt_endDate').eq(i).html()+'-01');
	}k++;
	if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]') && $('.infoparttimejobs .mt_companyName').eq(i).html()) {
	    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]').val($('.infoparttimejobs .mt_companyName').eq(i).html());
	}k++;
	if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]') && $('.infoparttimejobs .mt_positionName').eq(i).html()) {
	    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]').val($('.infoparttimejobs .mt_positionName').eq(i).html());
	}k++;
	if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]') && $('.infoparttimejobs .mt_reterenceName').eq(i).html()) {
	    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]').val($('.infoparttimejobs .mt_reterenceName').eq(i).html());
	}k++;
	if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]') && $('.infoparttimejobs .mt_reterenceRelation').eq(i).html()) {
	    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]').val($('.infoparttimejobs .mt_reterenceRelation').eq(i).html());
	}k++;
	if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]') && $('.mt_workDes .workDes').eq(i).html()) {
	    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]').val($('.mt_workDes .workDes').eq(i).html());
	}k++;
	if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]') && $('.infoparttimejobs .mt_reasons').eq(i).html()) {
	    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]').val($('.infoparttimejobs .mt_reasons').eq(i).html());
	}k++;
}
for (var i =0; i<$('.infofulltimejobs').length; i++) {
	if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]') && $('.infofulltimejobs .mt_startDate').eq(i).html()) {
	    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]').val($('.infofulltimejobs .mt_startDate').eq(i).html()+'-01');
	}k++;
	if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]') && $('.infofulltimejobs .mt_endDate').eq(i).html()) {
	    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]').val($('.infofulltimejobs .mt_endDate').eq(i).html()+'-01');
	}k++;
	if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]') && $('.infofulltimejobs .mt_companyName').eq(i).html()) {
	    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]').val($('.infofulltimejobs .mt_companyName').eq(i).html());
	}k++;
	if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]') && $('.infofulltimejobs .mt_positionName').eq(i).html()) {
	    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]').val($('.infofulltimejobs .mt_positionName').eq(i).html());
	}k++;
	if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]') && $('.infofulltimejobs .mt_reterenceName').eq(i).html()) {
	    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]').val($('.infofulltimejobs .mt_reterenceName').eq(i).html());
	}k++;
	if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]') && $('.infofulltimejobs .mt_reterenceRelation').eq(i).html()) {
	    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]').val($('.infofulltimejobs .mt_reterenceRelation').eq(i).html());
	}k++;
	if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]') && $('.mt_workDes .workDes').eq(i).html()) {
	    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]').val($('.mt_workDes .workDes').eq(i).html());
	}k++;
	if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]') && $('.infofulltimejobs .mt_reasons').eq(i).html()) {
	    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]').val($('.infofulltimejobs .mt_reasons').eq(i).html());
	}k++;
}

//项目经历
k=90;
for (var i =0; i<$('.infoproject').length; i++) {
 	if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]') && $('.infoproject .mt_prostarttime').eq(i).html()) {
	    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]').val($('.infoproject .mt_prostarttime').eq(i).html()+'-01');
	}k++;
	if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]') && $('.infoproject .mt_proendtime').eq(i).html()) {
	    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]').val($('.infoproject .mt_proendtime').eq(i).html()+'-01');
	}k++;
	if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]') && $('.infoproject .mt_projectName').eq(i).html()) {
	    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]').val($('.infoproject .mt_projectName').eq(i).html());
	}k++;
	if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]') && $('.infoproject .mt_projectRemark').eq(i).html()) {
	    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]').val($('.infoproject .mt_projectRemark').eq(i).html());
	}k++;
	if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]') && $('.infoproject .mt_projectDuty').eq(i).html()) {
	    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]').val($('.infoproject .mt_projectDuty').eq(i).html());
	}k++;
}

//所获证书
k=115;
for (var i =0; i<$('.infoplcerti').length; i++) {
 	if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]') && $('.infoplcerti .mt_getDate').eq(i).html()) {
	    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]').val($('.infoplcerti .mt_getDate').eq(i).html()+'-01');
	}k++;
	if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]') && $('.infoplcerti .mt_certificateName').eq(i).html()) {
	    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]').val($('.infoplcerti .mt_certificateName').eq(i).html());
	}k++;
}

//培训经历
k=123;
for (var i =0; i<$('.infotraining').length; i++) {
 	if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]')&& $('.infotraining .mt_startDate').eq(i).html()) {
	    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]').val($('.infotraining .mt_startDate').eq(i).html()+'-01');
	}k++;
	if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]') && $('.infotraining .mt_endDate').eq(i).html()) {
	    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]').val($('.infotraining .mt_endDate').eq(i).html()+'-01');
	}k++;
	if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]') && $('.infotraining .mt_trainingCompany').eq(i).html()) {
	    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]').val($('.infotraining .mt_trainingCompany').eq(i).html());
	}k++;
	if (KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]') && $('.infotraining .mt_trainingDes').eq(i).html()) {
	    KISSY.one('input[name=\"ctl00$ContentPlaceHolder1$s'+k+'\"]').val($('.infotraining .mt_trainingDes').eq(i).html());
	}k++;
}