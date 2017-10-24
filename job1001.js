if(KISSY.one('#jm_qiuck_cover')){KISSY.one('#jm_qiuck_cover').fadeIn();
setTimeout(function(){KISSY.one('#jm_qiuck_cover').fadeOut()},1000)}
//基本资料
if (KISSY.one('input[name=\"iname\"]')) {
    KISSY.one('input[name=\"iname\"]').val(KISSY.one('#mt_name').html());
}
if (KISSY.one('input[name=\"shouji\"]')) {
    KISSY.one('input[name=\"shouji\"]').val(KISSY.one('#mt_tel').html());
}
if (KISSY.one('input[name=\"email\"]')) {
    KISSY.one('input[name=\"email\"]').val(KISSY.one('#mt_email').html());
}
if (KISSY.one('input[name=\"bday\"]')) {
    KISSY.one('input[name=\"bday\"]').val(KISSY.one('#mt_birth').html());
}
if (KISSY.one('input[name=\"gznum\"]')) {
    KISSY.one('input[name=\"gznum\"]').val('2017'-$('.mt_startDate').html().split('-')[0]);
}
if (KISSY.one('input[name=\"code\"]')) {
    KISSY.one('input[name=\"code\"]').val(KISSY.one('#mt_id').html());
}
if (KISSY.one('input[name=\"tizhong\"]')) {
    KISSY.one('input[name=\"tizhong\"]').val(KISSY.one('#mt_weight').html());
}
if (KISSY.one('input[name=\"http\"]')) {
    KISSY.one('input[name=\"http\"]').val(KISSY.one('#mt_wbname').html());
}
if (KISSY.one('input[name=\"phone\"]')) {
    KISSY.one('input[name=\"phone\"]').val(KISSY.one('#mt_gudingtel').html());
}
if (KISSY.one('input[name=\"oicq\"]')) {
    KISSY.one('input[name=\"oicq\"]').val(KISSY.one('#mt_qqname').html());
}
if (KISSY.one('input[name=\"posts\"]')) {
    KISSY.one('input[name=\"posts\"]').val(KISSY.one('#mt_zip').html());
}
if (KISSY.one('input[name=\"address\"]')) {
    KISSY.one('input[name=\"address\"]').val(KISSY.one('#mt_add').html());
}
if (KISSY.one('input[name=\"shengao\"]')) {
    KISSY.one('input[name=\"shengao\"]').val(KISSY.one('#mt_height').html());
}
if (KISSY.one('#mt_sex').html()=='男') {
	document.getElementsByTagName('input')[7].checked=true;
}
if (KISSY.one('#mt_sex').html()=='女') {
	document.getElementsByTagName('input')[8].checked=true;
}
if (KISSY.one('input[name=\"school\"]')) {
    KISSY.one('input[name=\"school\"]').val($('.mt_schoolName').html());
}
if (KISSY.one('textarea[name=\"edus\"]')) {
    KISSY.one('textarea[name=\"edus\"]').val('主修课程有：'+$('.mt_major').html());
}
if (KISSY.one('input[name=\"jtzw\"]')) {
    KISSY.one('input[name=\"jtzw\"]').val($('.mt_positionName').html());
}
if (KISSY.one('input[name=\"salarymonth\"]')) {
    KISSY.one('input[name=\"salarymonth\"]').val($('.mt_salaryMonth').html());
}
if (KISSY.one('textarea[name=\"workdesc\"]')) {
    KISSY.one('textarea[name=\"workdesc\"]').val($('.mt_workContent .workContent').html());
}
if (KISSY.one('input[name=\"company\"]')) {
    KISSY.one('input[name=\"company\"]').val($('.mt_companyName').html());
}
if (KISSY.one('input[name=\"person_projectName\"]')) {
    KISSY.one('input[name=\"person_projectName\"]').val($('.mt_projectName').html());
}
if (KISSY.one('textarea[name=\"person_projectDesc\"]')) {
    KISSY.one('textarea[name=\"person_projectDesc\"]').val($('.mt_projectRemark').html());
}
if (KISSY.one('input[name=\"train_institution\"]')) {
    KISSY.one('input[name=\"train_institution\"]').val($('.mt_trainingCompany').html());
}

if (KISSY.one('input[name=\"train_cource\"]')) {
    KISSY.one('input[name=\"train_cource\"]').val($('.mt_trainingName').html());
}
if (KISSY.one('input[name=\"train_region\"]')) {
    KISSY.one('input[name=\"train_region\"]').val($('.mt_trainingPlace').html());
}
if (KISSY.one('textarea[name=\"train_desc\"]')) {
    KISSY.one('textarea[name=\"train_desc\"]').val($('.mt_trainingDes').html());
}
if (KISSY.one('textarea[name=\"othertc\"]')) {
    KISSY.one('textarea[name=\"othertc\"]').val($('#mt_hobbies').html());
}
if (KISSY.one('textarea[name=\"grzz\"]')) {
    KISSY.one('textarea[name=\"grzz\"]').val($('#mt_selfIntro').html());
}

if (KISSY.one('input[name=\"studentLeaderjob\"]')) {
    KISSY.one('input[name=\"studentLeaderjob\"]').val($('.infoschoolclub .mt_positionName').html());
}
if (KISSY.one('textarea[name=\"studentLeaderjobdesc\"]')) {
    KISSY.one('textarea[name=\"studentLeaderjobdesc\"]').val('社团名称：'+$('.infoschoolclub .mt_schClubName').html()+'工作职责：'+$('.infoschoolclub .mt_workDes').html());
}
if (KISSY.one('input[name=\"awardesc\"]')) {
    KISSY.one('input[name=\"awardesc\"]').val($('.mt_awardsName').html());
}

//户籍
if ($('input[name=\"da_before\"]').next('div').find('.totali_list li')) {
	var opt=$('input[name=\"da_before\"]').next('div').find('.totali_list li');
	console.log(opt);
	for(var i=0;i<=opt.length;i++){
		if(opt[i].innerHTML==$('#mt_nativeplace').html()){
			opt[i].click();
			break;
		}
	}
}
//现居住地
if ($('input[name=\"sheng_before\"]').next('div').find('.totali_list li')) {
	var opt=$('input[name=\"sheng_before\"]').next('div').find('.totali_list li');
	console.log(opt);
	for(var i=0;i<=opt.length;i++){
		if(opt[i].innerHTML==$('#mt_livecity_pro').html()){
			opt[i].click();
			break;
		}
	}
}
//国籍
if ($('input[name=\"guoji_before\"]').next('div').find('.totali_list li')) {
	var GJ=$('input[name=\"guoji_before\"]').next('div').find('.totali_list li');
	console.log(GJ);
	for(var i=0;i<=GJ.length;i++){
		if(GJ[i].innerHTML==$('#mt_national').html()){
			GJ[i].click();
			break;
		}
	}
}
//民族
if ($('input[name=\"mzhu_before\"]').next('div').find('.totali_list li')) {
	var Nation=$('input[name=\"mzhu_before\"]').next('div').find('.totali_list li');
	console.log(Nation);
	for(var i=0;i<=Nation.length;i++){
		if(Nation[i].innerHTML==$('#mt_nation').html()){
			Nation[i].click();
			break;
		}
	}
}
//证件类型
if ($('input[name=\"certId_before\"]').next('div').find('.totali_list li')) {
	var ZJ_Type=$('input[name=\"certId_before\"]').next('div').find('.totali_list li');
	console.log(ZJ_Type);
	if($('#mt_idtype').html()=='身份证'){
		ZJ_Type[1].click();
	}
	if($('#mt_idtype').html()=='香港永久居民身份证'){
		ZJ_Type[2].click();
	}
	if($('#mt_idtype').html()=='澳门永久居民身份证'){
		ZJ_Type[3].click();
	}
	if($('#mt_idtype').html()=='台胞证'){
		ZJ_Type[5].click();
	}
}

//婚宴状况
if ($('input[name=\"marry_before\"]').next('div').find('.totali_list li')) {
	var opt=$('input[name=\"marry_before\"]').next('div').find('.totali_list li');
	console.log(opt);
	for(var i=0;i<opt.length;i++){
		if(opt[i].innerHTML=='已婚'){
			opt[i].click();
			break;
		}
		if(opt[i].innerHTML=='离异'){
			opt[i].click();
			break;
		}
		if(opt[i].innerHTML=='未婚'){
			opt[i].click();
			break;
		}
	}
}
//政治面貌
if ($('input[name=\"zzmm_before\"]').next('div').find('.totali_list li')) {
	var GJ=$('input[name=\"zzmm_before\"]').next('div').find('.totali_list li');
	console.log(GJ);
	for(var i=0;i<=GJ.length;i++){
		if(GJ[i].innerHTML=='中共'+$('#mt_polistatus').html()){
			GJ[i].click();
			break;
		}
		if(GJ[i].innerHTML=='共青'+$('#mt_polistatus').html()){
			GJ[i].click();
			break;
		}
		if(GJ[i].innerHTML==$('#mt_polistatus').html()){
			GJ[i].click();
			break;
		}
	}
}
if ($('input[name=\"language_before\"]').next('div').find('.totali_list li')) {
	var GJ=$('input[name=\"language_before\"]').next('div').find('.totali_list li');
	console.log(GJ);
	for(var i=0;i<=GJ.length;i++){
		if(GJ[i].innerHTML=='英语'){
			GJ[i].click();
			break;
		}
	}
}
if ($('input[name=\"languages_before\"]').next('div').find('.totali_list li')) {
	var GJ=$('input[name=\"languages_before\"]').next('div').find('.totali_list li');
	console.log(GJ);
	for(var i=0;i<=GJ.length;i++){
		if(GJ[i].innerHTML==$('.mt_skillOtherLang').html()){
			GJ[i].click();
			break;
		}
	}
}
if ($('input[name=\"lanlevels_before\"]').next('div').find('.totali_list li')) {
	var GJ=$('input[name=\"lanlevels_before\"]').next('div').find('.totali_list li');
	console.log(GJ);
	for(var i=0;i<=GJ.length;i++){
		if(GJ[i].innerHTML==$('.mt_skillGraspLevel').html()){
			GJ[i].click();
			break;
		}
	}
}
if ($('input[name=\"person_rs_type_before\"]').next('div').find('.totali_list li')) {
	var GJ=$('input[name=\"person_rs_type_before\"]').next('div').find('.totali_list li');
	console.log(GJ);
	GJ[1].click();

	var GJ=$('input[name=\"lanlevel_before\"]').next('div').find('.totali_list li');
	console.log(GJ);
	for(var i=0;i<=GJ.length;i++){
		if($('.mt_skillEngLevel').html()=='大学英语'+GJ[i].innerHTML) {
			GJ[i].click();
			break;
		}
		if($('.mt_skillEngLevel').html()=='专业'+GJ[i].innerHTML){
			GJ[i].click();
			break;
		}
	}
}

if ($('input[name=\"zhong_before\"]').next('div').find('.totali_list li')) {
	var opt_city=$('input[name=\"zhong_before\"]').next('div').find('.totali_list li');
	console.log(opt_city);
	for(var i=0;i<=opt_city.length;i++){
		if(opt_city[i].innerHTML==$('#mt_native_city').html()+'市'){
			opt_city[i].click();
			break;
		}
		if(opt_city[i].innerHTML==$('#mt_native_city').html()+'地区'){
			opt_city[i].click();
			break;
		}
		if(opt_city[i].innerHTML==$('#mt_native_city').html()+'州'){
			opt_city[i].click();
			break;
		}
	}
}

if ($('input[name=\"shi_before\"]').next('div').find('.totali_list li')) {
	var opt_city=$('input[name=\"shi_before\"]').next('div').find('.totali_list li');
	console.log(opt_city);
	for(var i=0;i<=opt_city.length;i++){
		if(opt_city[i].innerHTML==$('.mt_livecity_city').html()+'市'){
			opt_city[i].click();
			break;
		}
		if(opt_city[i].innerHTML==$('.mt_livecity_city').html()+'地区'){
			opt_city[i].click();
			break;
		}
		if(opt_city[i].innerHTML==$('.mt_livecity_city').html()+'州'){
			opt_city[i].click();
			break;
		}
	}
}


//教育经历

if ($('input[name=\"eduId_before\"]').next('div').find('.totali_list li')) {
	var JiaoYu=$('input[name=\"eduId_before\"]').next('div').find('.totali_list li');
	console.log(JiaoYu);
	if('学士'==$('.mt_degree').html()){
			JiaoYu[5].click();
	}
	if('MBA'==$('.mt_education').html()){
			JiaoYu[7].click();
	}
	if('博士'==$('.mt_degree').html()){
			JiaoYu[8].click();
	}
	if('硕士'==$('.mt_degree').html()){
			JiaoYu[6].click();
	}
}/*
if ($('input[name=\"zyeli_before\"]').next('div').find('.totali_list li')) {
	if ($('input[name=\"zyname_before\"]').next('div').find('.totali_list li')) {
		var JiaoYu=$('input[name=\"zyname_before\"]').next('div').find('.totali_list li');
		console.log(JiaoYu);
		for(var i=0;i<=JiaoYu.length;i++){
			if(JiaoYu[i].innerHTML==$('.mt_professional').html()){
				JiaoYu[i].click();
				break;
			}
		}
	}
	if ($('input[name=\"edus_start_year_before\"]').next('div').find('.totali_list li')) {
		var JiaoYu=$('input[name=\"edus_start_year_before\"]').next('div').find('.totali_list li');
		console.log(JiaoYu);
		for(var i=0;i<=JiaoYu.length;i++){
			if(JiaoYu[i].innerHTML==$('.mt_startYearY').html()){
				JiaoYu[i].click();
				break;
			}
		}

		for(var i=0;i<=JiaoYu.length;i++){
			if(JiaoYu[i].innerHTML==$('.mt_endYearY').html()){
				JiaoYu[i].click();
				break;
			}
		}
	}
}
*/
//工作经历

if ($('input[name=\"work_start_year_before\"]').next('div').find('.totali_list li')) {
	var GJ=$('input[name=\"work_start_year_before\"]').next('div').find('.totali_list li');
	console.log(GJ);
	for(var i=0;i<=GJ.length;i++){
		if(GJ[i].innerHTML==$('.mt_startDate').html().split('-')[0]){
			GJ[i].click();
			break;
		}
	}
}
if ($('input[name=\"work_start_month_before\"]').next('div').find('.totali_list li')) {
	var GJ=$('input[name=\"work_start_month_before\"]').next('div').find('.totali_list li');
	console.log(GJ);
	for(var i=0;i<=GJ.length;i++){
		if(GJ[i].innerHTML==$('.mt_startDate').html().split('-')[1]){
			GJ[i].click();
			break;
		}
	}
}
if ($('input[name=\"work_stop_year_before\"]').next('div').find('.totali_list li')) {
	var GJ=$('input[name=\"work_stop_year_before\"]').next('div').find('.totali_list li');
	console.log(GJ);
	for(var i=0;i<=GJ.length;i++){
		if(GJ[i].innerHTML==$('.mt_endDate').html().split('-')[0]){
			GJ[i].click();
			break;
		}
	}
}
if ($('input[name=\"work_stop_month_before\"]').next('div').find('.totali_list li')) {
	var GJ=$('input[name=\"work_stop_month_before\"]').next('div').find('.totali_list li');
	console.log(GJ);
	for(var i=0;i<=GJ.length;i++){
		if(GJ[i].innerHTML==$('.mt_endDate').html().split('-')[1]){
			GJ[i].click();
			break;
		}
	}
}

if ($('input[name=\"yuangong_before\"]').next('div').find('.totali_list li')) {
	var GJ=$('input[name=\"yuangong_before\"]').next('div').find('.totali_list li');
	console.log(GJ);
	if ($('.mt_companySize').html()=='少于50人') {
		GJ[0].click();
	}
	if ($('.mt_companySize').html()=='50-149人') {
		GJ[1].click();
	}
	if ($('.mt_companySize').html()=='150-499人') {
		GJ[2].click();
	}
	if ($('.mt_companySize').html()=='500-999人') {
		GJ[3].click();
	}
	if ($('input[name=\"yuangong_before\"]')==0){
		GJ[4].click();
	}
}

//干部经理

if ($('input[name=\"student_start_year_before\"]').next('div').find('.totali_list li')) {
	var Ganbu=$('input[name=\"student_start_year_before\"]').next('div').find('.totali_list li');
	console.log(Ganbu);
	for(var i=0;i<=Ganbu.length;i++){
		if(Ganbu[i].innerHTML==$('.infoschoolclub .mt_startDate').html().split('-')[0]){
			Ganbu[i].click();
			break;
		}
	}
}
if ($('input[name=\"student_start_month_before\"]').next('div').find('.totali_list li')) {
	var Ganbu=$('input[name=\"student_start_month_before\"]').next('div').find('.totali_list li');
	console.log(Ganbu);
	for(var i=0;i<=Ganbu.length;i++){
		if(Ganbu[i].innerHTML==$('.infoschoolclub .mt_startDate').html().split('-')[1]){
			Ganbu[i].click();
			break;
		}
	}
}
if ($('input[name=\"student_stop_year_before\"]').next('div').find('.totali_list li')) {
	var Ganbu=$('input[name=\"student_stop_year_before\"]').next('div').find('.totali_list li');
	console.log(Ganbu);
	for(var i=0;i<=Ganbu.length;i++){
		if(Ganbu[i].innerHTML==$('.infoschoolclub .mt_endDate').html().split('-')[0]){
			Ganbu[i].click();
			break;
		}
	}
}
if ($('input[name=\"student_stop_month_before\"]').next('div').find('.totali_list li')) {
	var Ganbu=$('input[name=\"student_stop_month_before\"]').next('div').find('.totali_list li');
	console.log(Ganbu);
	for(var i=0;i<=Ganbu.length;i++){
		if(Ganbu[i].innerHTML==$('.infoschoolclub .mt_endDate').html().split('-')[1]){
			Ganbu[i].click();
			break;
		}
	}
}


//获得奖项

if ($('input[name=\"award_start_year_before\"]').next('div').find('.totali_list li')) {
	var Ganbu=$('input[name=\"award_start_year_before\"]').next('div').find('.totali_list li');
	console.log(Ganbu);
	for(var i=0;i<=Ganbu.length;i++){
		if(Ganbu[i].innerHTML==$('.infoschaward .mt_awardsDate').html().split('-')[0]){
			Ganbu[i].click();
			break;
		}
	}
}
if ($('input[name=\"award_start_month_before\"]').next('div').find('.totali_list li')) {
	var Ganbu=$('input[name=\"award_start_month_before\"]').next('div').find('.totali_list li');
	console.log(Ganbu);
	for(var i=0;i<=Ganbu.length;i++){
		if(Ganbu[i].innerHTML==$('.infoschaward .mt_awardsDate').html().split('-')[1]){
			Ganbu[i].click();
			break;
		}
	}
}


//项目经验

if ($('input[name=\"project_start_year_before\"]').next('div').find('.totali_list li')) {
	var XiangMu=$('input[name=\"project_start_year_before\"]').next('div').find('.totali_list li');
	console.log(XiangMu);
	for(var i=0;i<=XiangMu.length;i++){
		if(XiangMu[i].innerHTML==$('.mt_prostarttime').html().split('-')[0]){
			XiangMu[i].click();
			break;
		}
	}
}
if ($('input[name=\"project_start_month_before\"]').next('div').find('.totali_list li')) {
	var XiangMu=$('input[name=\"project_start_month_before\"]').next('div').find('.totali_list li');
	console.log(XiangMu);
	for(var i=0;i<=XiangMu.length;i++){
		if(XiangMu[i].innerHTML==$('.mt_prostarttime').html().split('-')[1]){
			XiangMu[i].click();
			break;
		}
	}
}
if ($('input[name=\"project_stop_year_before\"]').next('div').find('.totali_list li')) {
	var XiangMu=$('input[name=\"project_stop_year_before\"]').next('div').find('.totali_list li');
	console.log(XiangMu);
	for(var i=0;i<=XiangMu.length;i++){
		if(XiangMu[i].innerHTML==$('.mt_proendtime').html().split('-')[0]){
			XiangMu[i].click();
			break;
		}
	}
}
if ($('input[name=\"project_stop_month_before\"]').next('div').find('.totali_list li')) {
	var XiangMu=$('input[name=\"project_stop_month_before\"]').next('div').find('.totali_list li');
	console.log(XiangMu);
	for(var i=0;i<=XiangMu.length;i++){
		if(XiangMu[i].innerHTML==$('.mt_proendtime').html().split('-')[1]){
			XiangMu[i].click();
			break;
		}
	}
}

//证书
if ($('input[name=\"CerListId_before\"]').next('div').find('.totali_list li')) {
	$('input[name=\"CerListId_before\"]').next('div').find('.totali_list li').eq(0).click();
}
var time=$('.infoplcerti .mt_getDate').eq(0).html().split('-')[0];
if ($('input[name=\"Years_before\"]').next('div').find('.totali_list li')) {
	for(var i=0;i<$('input[name=\"Years_before\"]').next('div').find('.totali_list li').length;i++){
		if($('input[name=\"Years_before\"]').next('div').find('.totali_list li').eq(i)==time){
			$('input[name=\"Years_before\"]').next('div').find('.totali_list li').eq(i).click();
			break;
		}
	}
}
if ($('input[name=\"Months_before\"]').next('div').find('.totali_list li')) {
	var GJ=$('input[name=\"Months_before\"]').next('div').find('.totali_list li');
	console.log(GJ);var GJ=$('input[name=\"Years_before\"]').eq(i).next('div').find('.totali_list li');
	console.log(GJ);
	for(var i=0;i<=GJ.length;i++){
		if(GJ[i].innerHTML==$('.infoplcerti .mt_getDate').html().split('-')[0]){
			GJ[i].click();
			break;
		}
	}
}

var Certificate_Name=$('.infoplcerti .mt_certificateName').html();
if (KISSY.one('input[name=\"CertName2\"]')) {
    KISSY.one('input[name=\"CertName2\"]').val();
}

//培训经历

if ($('input[name=\"train_start_year_before\"]').next('div').find('.totali_list li')) {
	var PeiXun=$('input[name=\"train_start_year_before\"]').next('div').find('.totali_list li');
	console.log(PeiXun);
	for(var i=0;i<=PeiXun.length;i++){
		if(PeiXun[i].innerHTML==$('.infotraining .mt_startDate').html().split('-')[0]){
			PeiXun[i].click();
			break;
		}
	}
}
if ($('input[name=\"train_start_month_before\"]').next('div').find('.totali_list li')) {
	var PeiXun=$('input[name=\"train_start_month_before\"]').next('div').find('.totali_list li');
	console.log(PeiXun);
	for(var i=0;i<=PeiXun.length;i++){
		if(PeiXun[i].innerHTML==$('.infotraining .mt_startDate').html().split('-')[1]){
			PeiXun[i].click();
			break;
		}
	}
}
if ($('input[name=\"train_stop_year_before\"]').next('div').find('.totali_list li')) {
	var PeiXun=$('input[name=\"train_stop_year_before\"]').next('div').find('.totali_list li');
	console.log(PeiXun);
	for(var i=0;i<=PeiXun.length;i++){
		if(PeiXun[i].innerHTML==$('.infotraining .mt_endDate').html().split('-')[0]){
			PeiXun[i].click();
			break;
		}
	}
}
if ($('input[name=\"train_stop_month_before\"]').next('div').find('.totali_list li')) {
	var PeiXun=$('input[name=\"train_stop_month_before\"]').next('div').find('.totali_list li');
	console.log(PeiXun);
	for(var i=0;i<=PeiXun.length;i++){
		if(PeiXun[i].innerHTML==$('.infotraining .mt_endDate').html().split('-')[1]){
			PeiXun[i].click();
			break;
		}
	}
}

