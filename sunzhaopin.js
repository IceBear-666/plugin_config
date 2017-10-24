if ($('#jm_qiuck_cover')) {$('#jm_qiuck_cover').fadeIn();setTimeout(function(){$('#jm_qiuck_cover').fadeOut()},1000)}

if($('input[name=\"lastName\"]').length){
	$('input[name=\"lastName\"]').val($('#mt_name').html()); 
}
if($('#birthdateStrAdd').length && $('#mt_birth').html()){
	var birth = $('#mt_birth').html().split('-');
	for (var i in birth) {
	    if (birth[i].length < 2) {
	        birth[i] = '0'+birth[i];
	    }
	    var birthr=birth.join('-');
	}
	$('#birthdateStrAdd').val(birthr); 
} 
if($('#sigHightAdd').length){
	$('#sigHightAdd').val($('#mt_height').html()); 
} 
if($('select[name=\"sigNation\"]').length && $('#mt_national').html()){
	var sigNation = document.getElementById('sigNation');  
	var mt_national = $('#mt_national').html();   
	for(var i=0; i<sigNation.options.length; i++){
	   if(sigNation.options[i].innerHTML == mt_national){
	   sigNation.options[i].selected = true; break; }  
	}
}
if($('select[name=\"politicalStaChn\"]').length && $('#mt_polistatus').html()){
	if($('#mt_polistatus').html() == '中共党员'){
		document.getElementById('politicalStaChn').options[1].selected=true; }
	else if($('#mt_polistatus').html() == '中共预备党员'){
		document.getElementById('politicalStaChn').options[0].selected=true;  }
	else if($('#mt_polistatus').html() == '共青团员'){
		document.getElementById('politicalStaChn').options[2].selected=true; }
    else if($('#mt_polistatus').html() == '群众'){
		document.getElementById('politicalStaChn').options[3].selected=true;  }
	else if($('#mt_polistatus').html() == '无党派民主人士'){
		document.getElementById('politicalStaChn').options[4].selected=true;  }
}
if($('select[name=\"nationalIdType\"]').length && $('#mt_idtype').html()){
	if($('#mt_idtype').html() == '身份证'){
		if ($('#mt_id').html().length <16 ) {
			document.getElementById('nationalIdType').options[0].selected=true;
		}
		else{document.getElementById('nationalIdType').options[1].selected=true;}
	}
	else if($('#mt_idtype').html() == '护照'){
		document.getElementById('nationalIdType').options[4].selected=true;  }
	else if($('#mt_idtype').html() == '军官证'){
		document.getElementById('nationalIdType').options[5].selected=true; }
    else if($('#mt_idtype').html() == '台胞证'){
		document.getElementById('nationalIdType').options[2].selected=true;  }
	else{document.getElementById('nationalIdType').options[3].selected=true;  }
}
if($('#nationalId').length){
	$('#nationalId').val($('#mt_id').html()); 
} 
if($('input[name=\"emailAddr\"]')){
	$('input[name=\"emailAddr\"]').val($('#mt_email').html()); 
} 
if($('input[name=\"phone\"]')){
	$('input[name=\"phone\"]').val($('#mt_tel').html()); 
} 
if($('select[name=\"sex\"]').length && $('#mt_sex').html() && $('#mt_sex').html() == '男'){
	document.getElementById('sex').options[1].selected=true;  
}
if($('select[name=\"sex\"]').length && $('#mt_sex').html() && $('#mt_sex').html() == '女'){
	document.getElementById('sex').options[2].selected=true;  
}
if($('select[name=\"marStatus\"]').length && $('#mt_maritalstatus').html() && $('#mt_maritalstatus').html() == '未婚'){
	document.getElementById('marStatus').options[1].selected=true;  
}
if($('select[name=\"marStatus\"]').length && $('#mt_maritalstatus').html() && $('#mt_maritalstatus').html() == '已婚'){
	document.getElementById('marStatus').options[2].selected=true;  
}
if($('select[name=\"marStatus\"]').length && $('#mt_maritalstatus').html() && $('#mt_maritalstatus').html() == '离婚'){
	document.getElementById('marStatus').options[3].selected=true;  
}
if($('select[name=\"ethnicGrpCd\"]').length && $('#mt_nation').html()){
	var ethnicGrpCd = document.getElementById('ethnicGrpCd');  
	var mt_nation = $('#mt_nation').html();   
	for(var i=0; i<ethnicGrpCd.options.length; i++){
	   if(ethnicGrpCd.options[i].innerHTML == mt_nation){
	   ethnicGrpCd.options[i].selected = true; break; }  
	}
}
if($('#startdtchnStrAdd') && $('.infofulltimejobs .mt_startDate').html()){
			if ($('.infofulltimejobs .mt_startDate').html().length <7) {
				$('#startdtchnStrAdd').val($('.infofulltimejobs .mt_startDate').html().split('-').join('-0')+'-01');}
			else{$('#startdtchnStrAdd').val($('.infofulltimejobs .mt_startDate').html()+'-01')}
}
var ev = document.createEvent('HTMLEvents');
ev.initEvent('change', true, false);
if($('select[name=\"sigOrigState\"]').length && $('#mt_nativeplace').html()) {
	var sigOrigState = document.getElementById('sigOrigState');  
	var mt_nativeplace = $('#mt_nativeplace').html();   
	for(var i=0; i<sigOrigState.options.length; i++){
	   if(sigOrigState.options[i].innerHTML == mt_nativeplace){
	   sigOrigState.options[i].selected = true; 
	   document.getElementById('sigOrigState').dispatchEvent(ev);
	   break; }  
	}
}
window.setTimeout(function(){
	if($('select[name=\"sigOrigHome\"]').length && $('#mt_native_city').html()){
		var sigOrigHome = document.getElementById('sigOrigHome');    
		for(var i=0; i<sigOrigHome.options.length; i++){
		   if(sigOrigHome.options[i].innerHTML.indexOf($('#mt_native_city').html(),0) !=-1){
		   sigOrigHome.options[i].selected = true; break; }  
		}
	}
 },200);
if($('select[name=\"hukoustate\"]').length && $('#mt_hukoucitynow').html()) {
	var hukoustate = document.getElementById('state');  
	var mt_hukoucitynow = $('#mt_hukoucitynow').html();   
	for(var i=0; i<hukoustate.options.length; i++){
	   if(hukoustate.options[i].innerHTML == mt_hukoucitynow){
	   hukoustate.options[i].selected = true; 
	   document.getElementById('state').dispatchEvent(ev);
	   break; }  
	}
}
window.setTimeout(function(){
	if($('select[name=\"contribAreaChn\"]').length && $('#mt_hukoucitynow_city').html()){
		var contribAreaChn = document.getElementById('city');    
		for(var i=0; i<contribAreaChn.options.length; i++){
		   if(contribAreaChn.options[i].innerHTML.indexOf($('#mt_hukoucitynow_city').html(),0) !=-1){
		   contribAreaChn.options[i].selected = true; break; }  
		}
	}
 },200);
if($('select[name=\"sigAddrNowState\"]').length && $('#mt_livecity_pro').html()) {
	var sigAddrNowState = document.getElementById('sigaddrnowstate');  
	var mt_livecity_pro = $('#mt_livecity_pro').html();   
	for(var i=0; i<sigAddrNowState.options.length; i++){
	   if(sigAddrNowState.options[i].innerHTML == mt_livecity_pro){
	   sigAddrNowState.options[i].selected = true; 
	   document.getElementById('sigaddrnowstate').dispatchEvent(ev);
	   break; }  
	}
}
window.setTimeout(function(){
	if($('select[name=\"sigAddrNow\"]').length && $('#mt_livecity_city').html()){
		var sigAddrNow = document.getElementById('sigaddrnow');    
		for(var i=0; i<sigAddrNow.options.length; i++){
		   if(sigAddrNow.options[i].innerHTML.indexOf($('#mt_livecity_city').html(),0) !=-1){
		   sigAddrNow.options[i].selected = true; break; }  
		}
	}
 },200);
//教育
for (var i = 0; i <$('.infopledu').length; i++) {
    var ev = document.createEvent('HTMLEvents');
    ev.initEvent('change', true, false);
    if($('input[name=\"appStudyIds.jpmDate1\"]').eq(i+1) && $('.infopledu .mt_startYear').eq(i).html()){
                if ($('.infopledu .mt_startYear').eq(i).html().length <7) {
                    $('input[name=\"appStudyIds.jpmDate1\"]').eq(i+1).val($('.infopledu .mt_startYear').eq(i).html().split('-').join('-0')+'-01');}
                else{$('input[name=\"appStudyIds.jpmDate1\"]').eq(i+1).val($('.infopledu .mt_startYear').eq(i).html()+'-01')}
    }
    if($('input[name=\"effdt\"]').eq(i+1) && $('.infopledu .mt_endYear').eq(i).html()){
                if ($('.infopledu .mt_endYear').eq(i).html().length <7) {
                    $('input[name=\"effdt\"]').eq(i+1).val($('.infopledu .mt_endYear').eq(i).html().split('-').join('-0')+'-01');}
                else{$('input[name=\"effdt\"]').eq(i+1).val($('.infopledu .mt_endYear').eq(i).html()+'-01')}
    }
    var eduList= $('select[name=\"jpmCatItemId\"]').eq(i+1);
    //学历
    if(eduList.length && $('.infopledu .mt_education').eq(i).html() && $('.infopledu .mt_education').eq(i).html() == '大学专科'){
        eduList.get(0).options[4].selected=true; document.getElementsByName('jpmCatItemId')[i+1].dispatchEvent(ev);}
    if(eduList.length && $('.infopledu .mt_education').eq(i).html() && ($('.infopledu .mt_education').eq(i).html() == '大学本科-一本' || $('.infopledu .mt_education').eq(i).html() == '大学本科-二本' || $('.infopledu .mt_education').eq(i).html() == '大学本科-三本' || $('.infopledu .mt_education').eq(i).html() == '海外本科')){
        eduList.get(0).options[3].selected=true; document.getElementsByName('jpmCatItemId')[i+1].dispatchEvent(ev);}
    if(eduList.length && $('.infopledu .mt_education').eq(i).html() && $('.infopledu .mt_education').eq(i).html() == '硕士研究生'){
        eduList.get(0).options[2].selected=true; document.getElementsByName('jpmCatItemId')[i+1].dispatchEvent(ev);}
    if(eduList.length && $('.infopledu .mt_education').eq(i).html() && ($('.infopledu .mt_education').eq(i).html() == 'MBA' || $('.infopledu .mt_education').eq(i).html() == 'MPA' || $('.infopledu .mt_education').eq(i).html() == '其他')){
        eduList.get(0).options[9].selected=true; document.getElementsByName('jpmCatItemId')[i+1].dispatchEvent(ev);}  
    if(eduList.length && $('.infopledu .mt_education').eq(i).html() && $('.infopledu .mt_education').eq(i).html() == '博士研究生'){
        eduList.get(0).options[1].selected=true;  document.getElementsByName('jpmCatItemId')[i+1].dispatchEvent(ev);} 
    if($('input[name=\"majorDescr\"]')){
        $('input[name=\"majorDescr\"]').eq(i+1).val($('.infopledu .mt_professional').eq(i).html()); 
    } 
}
//家庭
if($('select[name=\"appFamilyIds.relationship\"]').eq(1).length && $('#mt_fmrelation').html()) {
	var relationship = $('select[name=\"appFamilyIds.relationship\"]').eq(1).get(0);  
	var mt_fmrelation = $('#mt_fmrelation').html();   
	for(var i=0; i<relationship.options.length; i++){
	   if($('#mt_fmrelation').html().indexOf(relationship.options[i].innerHTML,0) !=-1){
	   relationship.options[i].selected = true; 
	   break; }  
	}
}
if($('input[name=\"lastName\"]').eq(1) && $('#mt_fmname').html()) {
	$('input[name=\"lastName\"]').eq(1).val($('#mt_fmname').html());
}
if($('input[name=\"employer\"]').eq(1) && $('#mt_fmwork').html()) {
	$('input[name=\"employer\"]').eq(1).val($('#mt_fmwork').html());
}
if($('input[name=\"occupation\"]').eq(1) && $('#mt_fmposition').html()) {
	$('input[name=\"occupation\"]').eq(1).val($('#mt_fmposition').html());
}
//实习经历
for (var i = 0; i <$('.infoparttimejobs').length; i++) {
	if($('input[name=\"appsxWorkIds.sxsatartDt\"]').eq(i+1) && $('.infoparttimejobs .mt_startDate').eq(i).html()){
		if ($('.infoparttimejobs .mt_startDate').eq(i).html().length <7) {
			$('input[name=\"appsxWorkIds.sxsatartDt\"]').eq(i+1).val($('.infoparttimejobs .mt_startDate').eq(i).html().split('-').join('-0')+'-01');}
		else{$('input[name=\"appsxWorkIds.sxsatartDt\"]').eq(i+1).val($('.infoparttimejobs .mt_startDate').eq(i).html()+'-01')}
	}
    if($('input[name=\"sxendDt\"]').eq(i+1) && $('.infoparttimejobs .mt_endDate').eq(i).html()){
		if ($('.infoparttimejobs .mt_endDate').eq(i).html().length <7) {
			$('input[name=\"sxendDt\"]').eq(i+1).val($('.infoparttimejobs .mt_endDate').eq(i).html().split('-').join('-0')+'-01');}
		else{$('input[name=\"sxendDt\"]').eq(i+1).val($('.infoparttimejobs .mt_endDate').eq(i).html()+'-01')}
	}
	if($('input[name=\"sxemployer\"]').eq(i+1) && $('.infoparttimejobs .mt_companyName').eq(i).html()){
		$('input[name=\"sxemployer\"]').eq(i+1).val($('.infoparttimejobs .mt_companyName').eq(i).html()); 
	}
	if($('input[name=\"sxdeptname\"]').eq(i+1) && $('.infoparttimejobs .mt_department').eq(i).html()){
		$('input[name=\"sxdeptname\"]').eq(i+1).val($('.infoparttimejobs .mt_department').eq(i).html()); 
	}
	if($('input[name=\"sxposnDescr\"]').eq(i+1) && $('.infoparttimejobs .mt_positionName').eq(i).html()){
		$('input[name=\"sxposnDescr\"]').eq(i+1).val($('.infoparttimejobs .mt_positionName').eq(i).html()); 
	}
	if($('input[name=\"sigsxVerifyName\"]').eq(i+1) && $('.infoparttimejobs .mt_reterenceName').eq(i).html()){
		$('input[name=\"sigsxVerifyName\"]').eq(i+1).val($('.infoparttimejobs .mt_reterenceName').eq(i).html()); 
	}
	if($('input[name=\"sxphone\"]').eq(i+1) && $('.infoparttimejobs .mt_reterence_phone').eq(i).html()){
		$('input[name=\"sxphone\"]').eq(i+1).val($('.infoparttimejobs .mt_reterence_phone').eq(i).html()); 
	}
	if($('select[name=\"sigsxRelationship\"]').eq(i+1).length && $('.infoparttimejobs .mt_reterenceRelation').eq(i).html()) {
		var relationship = $('select[name=\"sigsxRelationship\"]').eq(i+1).get(0);  
		for(var j=0; j<relationship.options.length; j++){
		   if($('.infoparttimejobs .mt_reterenceRelation').eq(i).html().indexOf(relationship.options[j].innerHTML,0) !=-1){
		   relationship.options[j].selected = true; 
		   break; }  
		}
	}
	if($('textarea[name=\"sxdescrlong\"]').eq(i+1) && $('.infoparttimejobs .mt_workContent').eq(i).text()){
		$('textarea[name=\"sxdescrlong\"]').eq(i+1).val($('.infoparttimejobs .mt_workContent').eq(i).text()); 
	}
}
//工作经历
for (var i = 0; i <$('.infofulltimejobs').length; i++) {
	if($('input[name=\"appWorkIds.satartDt\"]').eq(i+1) && $('.infofulltimejobs .mt_startDate').eq(i).html()){
		if ($('.infofulltimejobs .mt_startDate').eq(i).html().length <7) {
			$('input[name=\"appWorkIds.satartDt\"]').eq(i+1).val($('.infofulltimejobs .mt_startDate').eq(i).html().split('-').join('-0')+'-01');}
		else{$('input[name=\"appWorkIds.satartDt\"]').eq(i+1).val($('.infofulltimejobs .mt_startDate').eq(i).html()+'-01')}
	}
    if($('input[name=\"endDt\"]').eq(i+1) && $('.infofulltimejobs .mt_endDate').eq(i).html()){
		if ($('.infofulltimejobs .mt_endDate').eq(i).html().length <7) {
			$('input[name=\"endDt\"]').eq(i+1).val($('.infofulltimejobs .mt_endDate').eq(i).html().split('-').join('-0')+'-01');}
		else{$('input[name=\"endDt\"]').eq(i+1).val($('.infofulltimejobs .mt_endDate').eq(i).html()+'-01')}
	}
	if($('input[name=\"employer\"]').eq(i+1) && $('.infofulltimejobs .mt_companyName').eq(i).html()){
		$('input[name=\"employer\"]').eq(i+1).val($('.infofulltimejobs .mt_companyName').eq(i).html()); 
	}
	if($('input[name=\"deptname\"]').eq(i+1) && $('.infofulltimejobs .mt_department').eq(i).html()){
		$('input[name=\"deptname\"]').eq(i+1).val($('.infofulltimejobs .mt_department').eq(i).html()); 
	}
	if($('input[name=\"posnDescr\"]').eq(i+1) && $('.infofulltimejobs .mt_positionName').eq(i).html()){
		$('input[name=\"posnDescr\"]').eq(i+1).val($('.infofulltimejobs .mt_positionName').eq(i).html()); 
	}
	if($('input[name=\"endingTitle\"]').eq(i+1) && $('.infofulltimejobs .mt_positionName').eq(i).html()){
		$('input[name=\"endingTitle\"]').eq(i+1).val($('.infofulltimejobs .mt_positionName').eq(i).html()); 
	}
	if($('input[name=\"sigVerifyName\"]').eq(i+1) && $('.infofulltimejobs .mt_reterenceName').eq(i).html()){
		$('input[name=\"sigVerifyName\"]').eq(i+1).val($('.infofulltimejobs .mt_reterenceName').eq(i).html()); 
	}
	if($('input[name=\"phone\"]').eq(i+1) && $('.infofulltimejobs .mt_reterence_phone').eq(i).html()){
		$('input[name=\"phone\"]').eq(i+1).val($('.infofulltimejobs .mt_reterence_phone').eq(i).html()); 
	}
	if($('select[name=\"sigRelationship\"]').eq(i+1).length && $('.infofulltimejobs .mt_reterenceRelation').eq(i).html()) {
		var relationship = $('select[name=\"sigRelationship\"]').eq(i+1).get(0);  
		for(var j=0; j<relationship.options.length; j++){
		   if($('.infofulltimejobs .mt_reterenceRelation').eq(i).html().indexOf(relationship.options[j].innerHTML,0) !=-1){
		   relationship.options[j].selected = true; 
		   break; }  
		}
	}
	if($('textarea[name=\"descrlong\"]').eq(i+1) && $('.infofulltimejobs .mt_workContent').eq(i).text()){
		$('textarea[name=\"descrlong\"]').eq(i+1).val($('.infofulltimejobs .mt_workContent').eq(i).text()); 
	}
}
//培训
for (var i = 0; i <$('.infotraining').length; i++) {
	if($('input[name=\"appTrainIds.courseStartDt\"]').eq(i+1) && $('.infotraining .mt_startDate').eq(i).html()){
		if ($('.infotraining .mt_startDate').eq(i).html().length <7) {
			$('input[name=\"appTrainIds.courseStartDt\"]').eq(i+1).val($('.infotraining .mt_startDate').eq(i).html().split('-').join('-0')+'-01');}
		else{$('input[name=\"appTrainIds.courseStartDt\"]').eq(i+1).val($('.infotraining .mt_startDate').eq(i).html()+'-01')}
	}
    if($('input[name=\"courseEndDt\"]').eq(i+1) && $('.infotraining .mt_endDate').eq(i).html()){
		if ($('.infotraining .mt_endDate').eq(i).html().length <7) {
			$('input[name=\"courseEndDt\"]').eq(i+1).val($('.infotraining .mt_endDate').eq(i).html().split('-').join('-0')+'-01');}
		else{$('input[name=\"courseEndDt\"]').eq(i+1).val($('.infotraining .mt_endDate').eq(i).html()+'-01')}
	}
	if($('input[name=\"school\"]').eq(i+1) && $('.infotraining .mt_trainingCompany').eq(i).html()){
			$('input[name=\"school\"]').eq(i+1).val($('.infotraining .mt_trainingCompany').eq(i).html()); 
	}
	if($('input[name=\"sigCertification\"]').eq(i+1) && $('.infotraining .mt_certificateName').eq(i).html()){
		$('input[name=\"sigCertification\"]').eq(i+1).val($('.infotraining .mt_certificateName').eq(i).html()); 
	}
	if($('textarea[name=\"appTrainIds.courseTitle\"]').eq(i+1) && $('.infotraining .mt_trainingDes').eq(i).text()){
		$('textarea[name=\"appTrainIds.courseTitle\"]').eq(i+1).val($('.infotraining .mt_trainingDes').eq(i).text()); 
	}
}
//获奖
for (var i = 0; i <$('.infoschaward').length; i++) {
	if($('input[name=\"appJcinfoIds.jpmText2541\"]').eq(i+1) && $('.infoschaward .mt_awardsName').eq(i).html()){
		$('input[name=\"appJcinfoIds.jpmText2541\"]').eq(i+1).val($('.infoschaward .mt_awardsName').eq(i).html()); 
	}
	if($('input[name=\"appJcinfoIds.effdt\"]').eq(i+1) && $('.infoschaward .mt_awardsDate').eq(i).html()){
		if ($('.infoschaward .mt_awardsDate').eq(i).html().length <7) {
			$('input[name=\"appJcinfoIds.effdt\"]').eq(i+1).val($('.infoschaward .mt_awardsDate').eq(i).html().split('-').join('-0')+'-01');}
		else{$('input[name=\"appJcinfoIds.effdt\"]').eq(i+1).val($('.infoschaward .mt_awardsDate').eq(i).html()+'-01')}
	}
	if($('input[name=\"jpmText2542\"]').eq(i+1) && $('.infoschaward .mt_awardsDes').eq(i).html()){
		$('input[name=\"jpmText2542\"]').eq(i+1).val($('.infoschaward .mt_awardsDes').eq(i).html()); 
	}
}
//语言能力
for (var i = 0; i <$('.infoOtherSkill').length; i++) {
	var Language = $('select[name=\"appLanguageIds.jpmCatItemId\"]').eq(i+1).get(0);  
	var jpmRating = $('select[name=\"jpmRating1\"]').eq(i+1).get(0);  
	if($('select[name=\"appLanguageIds.jpmCatItemId\"]').eq(i+1).length && $('.infoOtherSkill .mt_skillOtherLang').eq(i).html()) {
		if($('.infoOtherSkill .mt_skillOtherLang').eq(i).html() == '德语'){
			Language.options[1].selected=true; }
		else if($('.infoOtherSkill .mt_skillOtherLang').eq(i).html() == '西班牙语' ){
			Language.options[3].selected=true; }
		else if($('.infoOtherSkill .mt_skillOtherLang').eq(i).html() == '法语'){
			Language.options[4].selected=true; }
		else if($('.infoOtherSkill .mt_skillOtherLang').eq(i).html() == '日语' ){
			Language.options[5].selected=true; }
		else if($('.infoOtherSkill .mt_skillOtherLang').eq(i).html() == '俄语'){
			Language.options[6].selected=true; }
		else{Language.options[7].selected=true; }
	}
	if($('select[name=\"appLanguageIds.jpmCatItemId\"]').eq(i+1).length && $('.infoOtherSkill .mt_skillGraspLevel').eq(i).html()) {
		if($('.infoOtherSkill .mt_skillGraspLevel').eq(i).html() == '了解'){
			jpmRating.options[1].selected=true; }
		else if($('.infoOtherSkill .mt_skillGraspLevel').eq(i).html() == '一般' ){
			jpmRating.options[2].selected=true; }
		else if($('.infoOtherSkill .mt_skillGraspLevel').eq(i).html() == '熟练'){
			jpmRating.options[3].selected=true; }
		else if($('.infoOtherSkill .mt_skillGraspLevel').eq(i).html() == '精通' ){
			jpmRating.options[4].selected=true; }
	}
		
}
//项目
for (var i = 0; i <$('.infoproject').length; i++) {
	if($('input[name=\"appProgrameIds.effdt\"]').eq(i+1) && $('.infoproject .mt_prostarttime').eq(i).html()){
		if ($('.infoproject .mt_prostarttime').eq(i).html().length <7) {
			$('input[name=\"appProgrameIds.effdt\"]').eq(i+1).val($('.infoproject .mt_prostarttime').eq(i).html().split('-').join('-0')+'-01');}
		else{$('input[name=\"appProgrameIds.effdt\"]').eq(i+1).val($('.infoproject .mt_prostarttime').eq(i).html()+'-01')}
	}
    if($('input[name=\"jpmDate1\"]').eq(i+1) && $('.infoproject .mt_proendtime').eq(i).html()){
		if ($('.infoproject .mt_proendtime').eq(i).html().length <7) {
			$('input[name=\"jpmDate1\"]').eq(i+1).val($('.infoproject .mt_proendtime').eq(i).html().split('-').join('-0')+'-01');}
		else{$('input[name=\"jpmDate1\"]').eq(i+1).val($('.infoproject .mt_proendtime').eq(i).html()+'-01')}
	}
	if($('input[name=\"appProgrameIds.jpmAdhocDescr\"]').eq(i+1) && $('.infoproject .mt_projectName').eq(i).html()){
		$('input[name=\"appProgrameIds.jpmAdhocDescr\"]').eq(i+1).val($('.infoproject .mt_projectName').eq(i).html()); 
	}
	if($('input[name=\"jpmText2541\"]').eq(i+1) && $('.infoproject .mt_positionName').eq(i).html()){
		$('input[name=\"jpmText2541\"]').eq(i+1).val($('.infoproject .mt_positionName').eq(i).html()); 
	}
	if($('textarea[name=\"jpmText13252\"]').eq(i+1) && $('.infoproject .mt_projectRemark').eq(i).html()){
		$('textarea[name=\"jpmText13252\"]').eq(i+1).val($('.infoproject .mt_projectRemark').eq(i).html()); 
	}
	if($('textarea[name=\"jpmText2542\"]').eq(i+1) && $('.infoproject .mt_projectDuty').eq(i).text()){
		$('textarea[name=\"jpmText2542\"]').eq(i+1).val($('.infoproject .mt_projectDuty').eq(i).text()); 
	}
}
//职业资格
for (var i = 0; i <$('.infoplcerti').length; i++) {
	if($('input[name=\"appZyzgIds.effdt\"]').eq(i+1) && $('.infoplcerti .mt_getDate').eq(i).html()){
		if ($('.infoplcerti .mt_getDate').eq(i).html().length <7) {
			$('input[name=\"appZyzgIds.effdt\"]').eq(i+1).val($('.infoplcerti .mt_getDate').eq(i).html().split('-').join('-0')+'-01');}
		else{$('input[name=\"appZyzgIds.effdt\"]').eq(i+1).val($('.infoplcerti .mt_getDate').eq(i).html()+'-01')}
	}
	if($('input[name=\"jpmText2542\"]').eq(i+1) && $('.infoplcerti .mt_issuing').eq(i).html()){
		$('input[name=\"jpmText2542\"]').eq(i+1).val($('.infoplcerti .mt_issuing').eq(i).html()); 
	}
	if($('textarea[name=\"jpmText2544\"]').eq(i+1) && $('.infoplcerti .mt_certificateDes').eq(i).html()){
		$('textarea[name=\"jpmText2544\"]').eq(i+1).val($('.infoplcerti .mt_certificateDes').eq(i).html()); 
	}
}