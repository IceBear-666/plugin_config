if ($('#jm_qiuck_cover')) {
	$('#jm_qiuck_cover').fadeIn();
	setTimeout(function() {
		$('#jm_qiuck_cover').fadeOut()
	}, 1000);
}
//个人信息
if ($('.left_top span').html() == '个人信息') {
	if($('#Realname').length){
		$('#Realname').val($('#mt_name').html()); 
	} 
	if( $('input[name=\"Sex\"]').length && $('#mt_sex').html() == '女' && $('#mt_sex').html() == '女' ){
		$('input[name=\"Sex\"]').eq(1).click();
	}
	if( $('input[name=\"Sex\"]').length && $('#mt_sex').html() == '男' && $('#mt_sex').html() == '男' ){
		$('input[name=\"Sex\"]').eq(2).click();
	}

	//政治面貌
	var event = document.createEvent('HTMLEvents');
	event.initEvent('change', true, false);
	if ($('select[name=\"Polity\"]').length) {
		if($('#mt_polistatus').html() && $('#mt_polistatus').html() == '群众'){
		document.getElementById('Polity').options[3].selected=true; }
	else if($('#mt_polistatus').html() && $('#mt_polistatus').html() == '中共党员'){
		document.getElementById('Polity').options[1].selected=true; }
	else if($('#mt_polistatus').html() && $('#mt_polistatus').html() == '共青团员'){
		document.getElementById('Polity').options[2].selected=true; }
	else 
		{document.getElementById('Polity').options[0].selected=true;}
	document.getElementById('Polity').dispatchEvent(event);
	}
	if($('#Hometown')){
		$('#Hometown').val($('#mt_nativeplace').html()+$('#mt_native_city').html());}
	if($('#Contact')){
		$('#Contact').val($('#mt_tel').html()); }
	if($('#birthday') && $('#mt_birth').html()){
		var birth = $('#mt_birth').html().split('-');
		for (var i in birth) {
		    if (birth[i].length < 2) {
		        birth[i] = '0'+birth[i];
		    }
		    var birthr=birth.join('-');
		}
		$('#Birthrate').val(birthr); }  
	if ($('select[name=\"Studly_Level\"]').length) {
		if($('#mt_edu').html() && $('#mt_edu').html() == '中专'){
			document.getElementById('Studly_Level').options[1].selected=true; }
		else if($('#mt_edu').html() && ($('#mt_edu').html() == '大学专科' || $('#mt_edu').html() == '技校/职高')){
			document.getElementById('Studly_Level').options[2].selected=true; }
		else if($('#mt_edu').html() && ($('#mt_edu').html() == '大学本科-一本' || $('#mt_edu').html() == '大学本科-二本' || $('#mt_edu').html() == '大学本科-三本' || $('#mt_edu').html() == '双学士')){
			document.getElementById('Studly_Level').options[3].selected=true; }
		else if($('#mt_edu').html() && ($('#mt_edu').html() == '博士研究生' || $('#mt_edu').html() == '硕士研究生' || $('#mt_edu').html() == 'MBA' || $('#mt_edu').html() == 'MPA' || $('#mt_edu').html() == 'EMBA')){
			document.getElementById('Studly_Level').options[4].selected=true; }
		else{document.getElementById('Studly_Level').options[0].selected=true;}
	}
	if($('#subjects')){
		$('#subjects').val($('.mt_professional').html()); }
	if($('#Gruadte_School')){
		$('#Gruadte_School').val($('.mt_schoolName').html()); }
	if($('#BigAddress')){
		$('#BigAddress').val($('#mt_livecity_pro').html());}
	if($('#Address')){
		$('#Address').val($('#mt_livecity_city').html());}
	if($('input[name=\"Card_Num\"]') && $('#mt_id').html()){
		$('input[name=\"Card_Num\"]').val($('#mt_id').html()); } 
	if ($('#First_Person')) {
		$('#First_Person').val($('#mt_jjlxr').html());} 
	if ($('#First_Contact')) {
		$('#First_Contact').val($('#mt_jjlxrtel').html());} 
	if($('#Weibo_Url')){
		$('#Weibo_Url').val($('#mt_wbname').html());}
	if($('#Homepage')){
		$('#Homepage').val($('#mt_profile').html());}
	if($('input[name=\"Stature\"]')){
		$('input[name=\"Stature\"]').val($('#mt_height').html()); } 
	if($('input[name=\"Weight\"]')){
		$('input[name=\"Weight\"]').val($('#mt_weight').html()); } 
	if($('textarea[name=\"My_Descript\"]') && $('#mt_selfIntro').html()){
		$('textarea[name=\"My_Descript\"]').val($('#mt_selfIntro').html()); }
}

//教育经历
if ($('.left_top span').html() == '教育经验') {
	for (var i = 0; i <$('.infopledu').length; i++) {
		var eduList=$('#Level'+i);
	    //学历
		if(eduList.length && $('.infopledu .mt_education').eq(i).html() && $('.infopledu .mt_education').eq(i).html() == '大学专科'){
			eduList.get(0).options[4].selected=true; }
		if(eduList.length && $('.infopledu .mt_education').eq(i).html() && ($('.infopledu .mt_education').eq(i).html() == '大学本科-一本' || $('.infopledu .mt_education').eq(i).html() == '大学本科-二本' || $('.infopledu .mt_education').eq(i).html() == '大学本科-三本' || $('.infopledu .mt_education').eq(i).html() == '海外本科')){
			eduList.get(0).options[5].selected=true;  }
		if(eduList.length && $('.infopledu .mt_education').eq(i).html() && $('.infopledu .mt_education').eq(i).html() == '硕士研究生'){
			eduList.get(0).options[7].selected=true; }
		if(eduList.length && $('.infopledu .mt_education').eq(i).html() && $('.infopledu .mt_education').eq(i).html() == 'MBA'){
			eduList.get(0).options[6].selected=true; }  
		if(eduList.length && $('.infopledu .mt_education').eq(i).html() && $('.infopledu .mt_education').eq(i).html() == '博士研究生'){
			eduList.get(0).options[8].selected=true;  }

		if($('#Start_Time'+i) && $('.infopledu .mt_startYear').eq(i).html()){
			if ($('.infopledu .mt_startYear').eq(i).html().length <7) {
				$('#Start_Time'+i).val($('.infopledu .mt_startYear').eq(i).html().split('-').join('-0'));}
			else{$('#Start_Time'+i).eq(i).val($('.infopledu .mt_startYear').eq(i).html())}}
		if($('#End_Time'+i) && $('.infopledu .mt_endYear').eq(i).html()){
			if ($('.infopledu .mt_endYear').eq(i).html().length <7) {
				$('#End_Time'+i).val($('.infopledu .mt_endYear').eq(i).html().split('-').join('-0'));}
			else{$('#End_Time'+i).val($('.infopledu .mt_endYear').eq(i).html())}}
		if($('#Gruadte_School'+i) && $('.infopledu .mt_schoolName').eq(i).html()){
			$('#Gruadte_School'+i).val($('.infopledu .mt_schoolName').eq(i).html()); }
		if($('#Specialty'+i) && $('.infopledu .mt_professional').eq(i).html()){
			$('#Specialty'+i).val($('.infopledu .mt_professional').eq(i).html()); }
		if($('#Spe_Descript'+i) && $('.mt_major').eq(i).html()){
		$('#Spe_Descript'+i).val($('.mt_major').eq(i).html()); }
	}
}
//实习经历
if ($('.left_top span').html() == '实习经验') {
	for (var i = 0; i < $('.infofulltimejobs').length; i++) {
		var jobsList=$('#Comp_Character'+i);
		var sizeList=$('#Comp_Level'+i);
		if(jobsList.length && $('.infofulltimejobs .mt_companyproperty').eq(i).html() && $('.infofulltimejobs .mt_companyproperty').eq(i).html() == '创业公司' || $('.infofulltimejobs .mt_companyproperty').eq(i).html() == '民营公司'){
			jobsList.get(0).options[0].selected=true; }  
		else if(jobsList.length && $('.infofulltimejobs .mt_companyproperty').eq(i).html() && $('.infofulltimejobs .mt_companyproperty').eq(i).html() == '外资-欧美' || $('.infofulltimejobs .mt_companyproperty').eq(i).html() == '外资-非欧美'){
			jobsList.get(0).options[1].selected=true; }	
		else if(jobsList.length && $('.infofulltimejobs .mt_companyproperty').eq(i).html() && $('.infofulltimejobs .mt_companyproperty').eq(i).html() == '国企'){
			jobsList.get(0).options[2].selected=true; }
		else if(jobsList.length && $('.infofulltimejobs .mt_companyproperty').eq(i).html() && $('.infofulltimejobs .mt_companyproperty').eq(i).html() == '合资-欧美' || $('.infofulltimejobs .mt_companyproperty').eq(i).html() == '合资-非欧美'){
			jobsList.get(0).options[3].selected=true;  }	
		else if(jobsList.length && $('.infofulltimejobs .mt_companyproperty').eq(i).html() && $('.infofulltimejobs .mt_companyproperty').eq(i).html() == '政府机关'){
			jobsList.get(0).options[4].selected=true;  }
		else if(jobsList.length && $('.infofulltimejobs .mt_companyproperty').eq(i).html() && $('.infofulltimejobs .mt_companyproperty').eq(i).html() == '上市公司' || $('.infofulltimejobs .mt_companyproperty').eq(i).html() == '事业单位' || $('.infofulltimejobs .mt_companyproperty').eq(i).html() == '外企代表处' || $('.infofulltimejobs .mt_companyproperty').eq(i).html() == '非盈利机构'){
			jobsList.get(0).options[5].selected=true;  }

		if(sizeList.length && $('.infofulltimejobs .mt_companySize').eq(i).html() && $('.infofulltimejobs .mt_companySize').eq(i).html() == '少于50人'){
			sizeList.get(0).options[0].selected=true; }  
		else if(sizeList.length && $('.infofulltimejobs .mt_companySize').eq(i).html() && $('.infofulltimejobs .mt_companySize').eq(i).html() == '50-149人'){
			sizeList.get(0).options[1].selected=true; }	
		else if(sizeList.length && $('.infofulltimejobs .mt_companySize').eq(i).html() && $('.infofulltimejobs .mt_companySize').eq(i).html() == '150-499人'){
			sizeList.get(0).options[2].selected=true; }
		else if(sizeList.length && $('.infofulltimejobs .mt_companySize').eq(i).html() && $('.infofulltimejobs .mt_companySize').eq(i).html() == '500-999人'){
			sizeList.get(0).options[3].selected=true;  }	
		else if(sizeList.length && $('.infofulltimejobs .mt_companySize').eq(i).html() && $('.infofulltimejobs .mt_companySize').eq(i).html() == '1000-9999人'){
			sizeList.get(0).options[4].selected=true;  }
	    
	    if($('#Job_Character'+i).length && $('.infofulltimejobs .mt_workcat').eq(i).html() && $('.infofulltimejobs .mt_workcat').eq(i).html() == '实习'){
			$('#Job_Character'+i).get(0).options[3].selected=true; }  

		if($('#Start_Time'+i) && $('.infofulltimejobs .mt_startDate').eq(i).html()){
			if ($('.infofulltimejobs .mt_startDate').eq(i).html().length <7) {
				$('#Start_Time'+i).val($('.infofulltimejobs .mt_startDate').eq(i).html().split('-').join('-0'));}
			else{$('#Start_Time'+i).val($('.infofulltimejobs .mt_startDate').eq(i).html())}}
	    if($('#End_Time'+i) && $('.infofulltimejobs .mt_endDate').eq(i).html()){
			if ($('.infofulltimejobs .mt_endDate').eq(i).html().length <7) {
				$('#End_Time'+i).val($('.infofulltimejobs .mt_endDate').eq(i).html().split('-').join('-0'));}
			else{$('#End_Time'+i).val($('.infofulltimejobs .mt_endDate').eq(i).html())}}
		if ($('#Company'+i) && $('.infofulltimejobs .mt_companyName').eq(i).html()) {
	    	$('#Company'+i).val($('.infofulltimejobs .mt_companyName').eq(i).html());}
	    if ($('#Industry'+i) && $('.infofulltimejobs .mt_companyCat').eq(i).html()) {
	    	$('#Industry'+i).val($('.infofulltimejobs .mt_companyCat').eq(i).html());}
	    if ($('#Dept'+i) && $('.infofulltimejobs .mt_department').eq(i).html()) {
	    	$('#Dept'+i).val($('.infofulltimejobs .mt_department').eq(i).html());}
	    if ($('#Place'+i) && $('.infofulltimejobs .mt_positionName').eq(i).html()) {
	    	$('#Place'+i).val($('.infofulltimejobs .mt_positionName').eq(i).html());}
	    if ($('#Attest'+i) && $('.infofulltimejobs .mt_reterenceName').eq(i).html()) {
	    	$('#Attest'+i).val($('.infofulltimejobs .mt_reterenceName').eq(i).html());}
	    if ($('#Contact'+i) && $('.infofulltimejobs .mt_reterence_phone').eq(i).html()) {
	    	$('#Contact'+i).val($('.infofulltimejobs .mt_reterence_phone').eq(i).html());}
	    if ($('#Left_Reason'+i) && $('.infofulltimejobs .mt_reasons').eq(i).html()) {
	    	$('#Left_Reason'+i).val($('.infofulltimejobs .mt_reasons').eq(i).html());}
	    if ($('#Achievement'+i) && $('.infofulltimejobs .mt_workContent').eq(i).text()) {
	    	$('#Achievement'+i).val($('.infofulltimejobs .mt_workContent').eq(i).text());}
	    if ($('#Job_Descript'+i) && $('.infofulltimejobs .mt_workDes').eq(i).text()) {
	    	$('#Job_Descript'+i).val($('.infofulltimejobs .mt_workDes').eq(i).text());}
	}
}
//实践经历
if ($('.left_top span').html() == '实践经历') {
	for (var i = 0; i <$('.infoschoolclub').length; i++) {
		if($('#Start_Time'+i) && $('.infoschoolclub .mt_startDate').eq(i).html()){
			if ($('.infoschoolclub .mt_startDate').eq(i).html().length <7) {
				$('#Start_Time'+i).val($('.infoschoolclub .mt_startDate').eq(i).html().split('-').join('-0'));}
			else{$('#Start_Time'+i).val($('.infoschoolclub .mt_startDate').eq(i).html())}}
	    if($('#End_Time'+i) && $('.infoschoolclub .mt_endDate').eq(i).html()){
			if ($('.infoschoolclub .mt_endDate').eq(i).html().length <7) {
				$('#End_Time'+i).val($('.infoschoolclub .mt_endDate').eq(i).html().split('-').join('-0'));}
			else{$('#End_Time'+i).val($('.infoschoolclub .mt_endDate').eq(i).html())}}
		if ($('#Gruadte_School'+i) && $('.infoschoolclub .mt_schClubName').eq(i).text()) {
	    	$('#Gruadte_School'+i).val($('.infoschoolclub .mt_schClubName').eq(i).text());}
	    if ($('#Spe_Descript'+i) && $('.infoschoolclub .mt_workDes').eq(i).text()) {
	    	$('#Spe_Descript'+i).val($('.infoschoolclub .mt_workDes').eq(i).text());}
	}
}
//语言能力  
if ($('.left_top span').html() == '语言掌握') {
	for (var i = 0; i <$('.infoOtherSkill').length; i++) {
	    var ClassList = $('#Lang_Class'+i);
	    var SkillList = $('#Lang_Skill'+i);
	    var WriteList = $('#Lang_Write'+i);
	    var ListenList = $('#Lang_Listen'+i);
	    if (ClassList.length) {
	    	if($('.infoOtherSkill .mt_skillOtherLang').eq(i).html() == '日语'){
				ClassList.get(0).options[2].selected=true; }  
			else if($('.infoOtherSkill .mt_skillOtherLang').eq(i).html() == '德语'){
				ClassList.get(0).options[3].selected=true; }	
			else if($('.infoOtherSkill .mt_skillOtherLang').eq(i).html() == '俄语'){
				ClassList.get(0).options[4].selected=true; }
			else if($('.infoOtherSkill .mt_skillOtherLang').eq(i).html() == '西班牙语'){
				ClassList.get(0).options[5].selected=true; }
			else if($('.infoOtherSkill .mt_skillOtherLang').eq(i).html() == '葡萄牙语'){
				ClassList.get(0).options[6].selected=true; }
			else{ClassList.get(0).options[7].selected=true;}
	    }
	    if (SkillList.length) {
			if($('.infoOtherSkill .mt_skillGraspLevel').eq(i).html() == '熟练'){
				SkillList.get(0).options[1].selected=true; }  
			else if($('.infoOtherSkill .mt_skillGraspLevel').eq(i).html() == '精通'){
				SkillList.get(0).options[2].selected=true; }
			else {SkillList.get(0).options[0].selected=true; }
	    }
	    if (WriteList.length) {
	    	if($('.infoOtherSkill .mt_skillWriteLevel').eq(i).html() == '熟练'){
				WriteList.get(0).options[1].selected=true; }  
			else if($('.infoOtherSkill .mt_skillWriteLevel').eq(i).html() == '精通'){
				WriteList.get(0).options[2].selected=true; }
			else {WriteList.get(0).options[0].selected=true; }
	    }
		if (ListenList.length) {
			if($('.infoOtherSkill .mt_skillListenLevel').eq(i).html() == '熟练'){
				ListenList.get(0).options[1].selected=true; }  
			else if($('.infoOtherSkill .mt_skillListenLevel').eq(i).html() == '精通'){
				ListenList.get(0).options[2].selected=true; }
			else {ListenList.get(0).options[0].selected=true; }
		}
	}
}
// 培训经历
if ($('.left_top span').html() == '培训经历') {
	for (var i = 0; i <$('.infotraining').length; i++) {
		if($('#Start_Time'+i) && $('.infotraining .mt_startDate').eq(i).html()){
			if ($('.infotraining .mt_startDate').eq(i).html().length <7) {
				$('#Start_Time'+i).val($('.infotraining .mt_startDate').eq(i).html().split('-').join('-0'));}
			else{$('#Start_Time'+i).val($('.infotraining .mt_startDate').eq(i).html())}}
	    if($('#End_Time'+i) && $('.infotraining .mt_endDate').eq(i).html()){
			if ($('.infotraining .mt_endDate').eq(i).html().length <7) {
				$('#End_Time'+i).val($('.infotraining .mt_endDate').eq(i).html().split('-').join('-0'));}
			else{$('#End_Time'+i).val($('.infotraining .mt_endDate').eq(i).html())}}
		if ($('#Cat_Group'+i) && $('.infotraining .mt_trainingCompany').eq(i).html()) {
	    	$('#Cat_Group'+i).val($('.infotraining .mt_trainingCompany').eq(i).html());}
	    if ($('#Cat_Project'+i) && $('.infotraining .mt_trainingName').eq(i).html()) {
	    	$('#Cat_Project'+i).val($('.infotraining .mt_trainingName').eq(i).html());}
	    if ($('#Cat_Address'+i) && $('.infotraining .mt_trainingPlace').eq(i).html()) {
	    	$('#Cat_Address'+i).val($('.infotraining .mt_trainingPlace').eq(i).html());}
	    if ($('#Cat_Cert'+i) && $('.infotraining .mt_certificateName').eq(i).html()) {
	    	$('#Cat_Cert'+i).val($('.infotraining .mt_certificateName').eq(i).html());}
	    if ($('#Cat_Descript'+i) && $('.infotraining .mt_trainingDes').eq(i).html()) {
	    	$('#Cat_Descript'+i).val($('.infotraining .mt_trainingDes').eq(i).html());}
	}
}
//项目经历
if ($('.left_top span').html() == '项目经验') {
	for (var i = 0; i <$('.infoproject').length; i++) {
		if($('#Start_Time'+i) && $('.infoproject .mt_prostarttime').eq(i).html()){
			if ($('.infoproject .mt_prostarttime').eq(i).html().length <7) {
				$('#Start_Time'+i).val($('.infoproject .mt_prostarttime').eq(i).html().split('-').join('-0'));}
			else{$('#Start_Time'+i).val($('.infoproject .mt_prostarttime').eq(i).html())}}
	    if($('#End_Time'+i) && $('.infoproject .mt_proendtime').eq(i).html()){
			if ($('.infoproject .mt_proendtime').eq(i).html().length <7) {
				$('#End_Time'+i).val($('.infoproject .mt_proendtime').eq(i).html().split('-').join('-0'));}
			else{$('#End_Time'+i).val($('.infoproject .mt_proendtime').eq(i).html())}}
		if ($('#Pro_Name'+i) && $('.infoproject .mt_projectName').eq(i).html()) {
	    	$('#Pro_Name'+i).val($('.infoproject .mt_projectName').eq(i).html());}
	    if ($('#Pro_Num'+i) && $('.infoproject .mt_projectNumber').eq(i).html()) {
	    	$('#Pro_Num'+i).val($('.infoproject .mt_projectNumber').eq(i).html());}
	    if ($('#Pro_Role'+i) && $('.infoproject .mt_projectDuty').eq(i).html()) {
	    	$('#Pro_Role'+i).val($('.infoproject .mt_projectDuty').eq(i).html());}
	    if ($('#Pro_Descript'+i) && $('.infoproject .mt_projectRemark').eq(i).html()) {
	    	$('#Pro_Descript'+i).val($('.infoproject .mt_projectRemark').eq(i).html());}
	}
}
//证书
if ($('.left_top span').html() == '获取证书') {
	for (var i = 0; i <$('.infoplcerti').length; i++) {
		if($('#Start_Time'+i) && $('.infoplcerti .mt_getDate').eq(i).html()){
			if ($('.infoplcerti .mt_getDate').eq(i).html().length <6) {
				$('#Start_Time'+i).val($('.infoplcerti .mt_getDate').eq(i).html().split('-').join('-0')+'-01');}
			else{$('#Start_Time'+i).val($('.infoplcerti .mt_getDate').eq(i).html()+'-01')}}
		if ($('#Cert_Name'+i) && $('.infoplcerti .mt_certificateName').eq(i).html()) {
	    	$('#Cert_Name'+i).val($('.infoplcerti .mt_certificateName').eq(i).html());}
	    if ($('#Cert_Descript'+i) && $('.infoplcerti .mt_certificateDes').eq(i).html()) {
	    	$('#Cert_Descript'+i).val($('.infoplcerti .mt_certificateDes').eq(i).html());}
	}
}
if ($('.left_top span').html() == '技能掌握') {
	if ($('#Gruadte_School0') && $('#mt_hobbies').html()) {
	$('#Gruadte_School0').val($('#mt_hobbies').html());}
}
if ($('.left_top span').html() == '备注信息') {
	if ($('#Rem_Content') && $('#achievement').html()) {
	    $('#Rem_Content').val($('#achievement').html());}
}


	