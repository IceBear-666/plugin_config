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
    events: function() {
        var ev = document.createEvent('HTMLEvents');
        ev.initEvent('change', true, false);
        return ev
    },   
    delay: function(fn) {
        window.setTimeout(fn, 200)
    }
};

if (KISSY.one('#jm_qiuck_cover')) {
    KISSY.one('#jm_qiuck_cover').fadeIn();
    setTimeout(function() {
        KISSY.one('#jm_qiuck_cover').fadeOut()
    },
    1000)
}
// 基本信息下拉框列表组

	function basicInfo(){
	// 姓名
		if (KISSY.one('input[name=\"ctl00$ContentMain$BaseInfoControl1$txtBasePersonName\"]')) {
		    KISSY.one('input[name=\"ctl00$ContentMain$BaseInfoControl1$txtBasePersonName\"]').val(KISSY.one('#mt_name').html())
		}
		 // 性别radio
		if (KISSY.one('#ctl00_ContentMain_BaseInfoControl1_radListSex_0') && KISSY.one('#ctl00_ContentMain_BaseInfoControl1_radListSex_0').html() == '男') {
		    document.getElementById('radSex_0').click();
		}
		if (KISSY.one('#ctl00_ContentMain_BaseInfoControl1_radListSex_1') && KISSY.one('#mt_sex').html() == '女') {
		    document.getElementById('ctl00_ContentMain_BaseInfoControl1_radListSex_1').click();
		}

		// 民族
		for(var i = 1 ; i<57; i++){
			// console.log(document.getElementsByTagName('option')[i]);
			// console.log(document.getElementsByTagName('option')[i].text);
			// console.log(KISSY.one('#mt_nation').html());
		    if (document.getElementsByTagName('option')[i].text == KISSY.one('#mt_nation').html()) {
		        document.getElementsByTagName('option')[i].selected = true;
		        // console.log(i);
		    }
		}
		// for (var i = 4; i < 65; i++) {
		//     if (KISSY.one('#mt_nation').html() == document.getElementsByTagName('option')[i].value) {
		//         document.getElementsByTagName('option')[i].selected = true
		//     }
		// }

		// 出生地
		if (KISSY.one('input[name=\"ctl00$ContentMain$BaseInfoControl1$txtBirthPlace\"]')) {
			KISSY.one('input[name=\"ctl00$ContentMain$BaseInfoControl1$txtBirthPlace\"]').val(document.getElementById('mt_nativeplace').innerText+document.getElementById('mt_native_city').innerText);
			// console.log('place');
			// console.log(document.getElementById('mt_nativeplace').innerText+document.getElementById('mt_native_city').innerText);
			// console.log(KISSY.one('#mt_nativeCityEn').html());
			// console.log(document.getElementById('mt_nativeplace'));
		}
		// 
		if (KISSY.one('input[name=\"ctl00$ContentMain$BaseInfoControl1$txtDisease\"]')) {
			KISSY.one('input[name=\"ctl00$ContentMain$BaseInfoControl1$txtDisease\"]').val('无');
		}


			// 政治面貌
		function ctl00_ContentMain_BaseInfoControl1_drpListPolitical(){
			for (var i = 0; i < $('#ctl00_ContentMain_BaseInfoControl1_drpListPolitical').children('option').length; i++) {
					// if ($('#ctl00_ContentMain_BaseInfoControl1_drpListPolitical').children('option')[i].text == $('#mt_polistatus').html()) {

						if ($('#ctl00_ContentMain_BaseInfoControl1_drpListPolitical').children('option')[i].text == '预备党员'&&$('#mt_polistatus').html() == '中共预备党员') {
							$('#ctl00_ContentMain_BaseInfoControl1_drpListPolitical').children('option')[i].selected = true;
							// console.log('polist');
						}
						else if($('#ctl00_ContentMain_BaseInfoControl1_drpListPolitical').children('option')[i].text == '九三学社社员' && $('#mt_polistatus').html() == '九三学社'){
							$('#ctl00_ContentMain_BaseInfoControl1_drpListPolitical').children('option')[i].selected = true;
							// console.log('polist');
						}
						else if($('#ctl00_ContentMain_BaseInfoControl1_drpListPolitical').children('option')[i].text == '中国民盟' && $('#mt_polistatus').html() == '中国民主同盟'){
							$('#ctl00_ContentMain_BaseInfoControl1_drpListPolitical').children('option')[i].selected = true;
							// console.log('polist');
						}
						else if($('#ctl00_ContentMain_BaseInfoControl1_drpListPolitical').children('option')[i].text == '民建会员' && $('#mt_polistatus').html() == '中国民主建国会'){
							$('#ctl00_ContentMain_BaseInfoControl1_drpListPolitical').children('option')[i].selected = true;
							// console.log('polist');
						}
						else if($('#ctl00_ContentMain_BaseInfoControl1_drpListPolitical').children('option')[i].text == '民革会员' && $('#mt_polistatus').html() == '中国国民党革命委员会'){
							$('#ctl00_ContentMain_BaseInfoControl1_drpListPolitical').children('option')[i].selected = true;
							// console.log('polist');
						}
						else if($('#ctl00_ContentMain_BaseInfoControl1_drpListPolitical').children('option')[i].text == '农工党党员' && $('#mt_polistatus').html() == '中国农工民主党'){
							$('#ctl00_ContentMain_BaseInfoControl1_drpListPolitical').children('option')[i].selected = true;
							// console.log('polist');
						}
						else if($('#ctl00_ContentMain_BaseInfoControl1_drpListPolitical').children('option')[i].text == '致公党党员' && $('#mt_polistatus').html() == '中国致公党'){
							$('#ctl00_ContentMain_BaseInfoControl1_drpListPolitical').children('option')[i].selected = true;
							// console.log('polist');
						}
						else if($('#ctl00_ContentMain_BaseInfoControl1_drpListPolitical').children('option')[i].text == '台盟盟员' && $('#mt_polistatus').html() == '台湾民主自治同盟'){
							$('#ctl00_ContentMain_BaseInfoControl1_drpListPolitical').children('option')[i].selected = true;
							// console.log('polist');
						}
						else if($('#ctl00_ContentMain_BaseInfoControl1_drpListPolitical').children('option')[i].text == $('#mt_polistatus').html()){
							$('#ctl00_ContentMain_BaseInfoControl1_drpListPolitical').children('option')[i].selected = true;
						}
																	
						
					// }
					// console.log($('#ctl00_ContentMain_BaseInfoControl1_drpListPolitical').children('option')[i]);
					// console.log($('#ctl00_ContentMain_BaseInfoControl1_drpListPolitical').children('option')[i].text);
					// console.log($('#mt_polistatus').html());
			}
		};

		ctl00_ContentMain_BaseInfoControl1_drpListPolitical();

		// 婚姻状态
		function ctl00_ContentMain_BaseInfoControl1_drpListMarriage(){
			for (var i = 0; i < $('#ctl00_ContentMain_BaseInfoControl1_drpListMarriage').children('option').length; i++) {
				// console.log($('#ctl00_ContentMain_BaseInfoControl1_drpListMarriage').children('option').length);
				if ($('#ctl00_ContentMain_BaseInfoControl1_drpListMarriage').children('option')[i].text  == $('#mt_maritalstatus').html()) {
				$('#ctl00_ContentMain_BaseInfoControl1_drpListMarriage').children('option')[i].selected = true;
				}
			}
		};
		ctl00_ContentMain_BaseInfoControl1_drpListMarriage();


		//身高体重
		if (KISSY.one('input[name=\"ctl00$ContentMain$BaseInfoControl1$txtBodyHeight\"]')) {
		    KISSY.one('input[name=\"ctl00$ContentMain$BaseInfoControl1$txtBodyHeight\"]').val(KISSY.one('#mt_height').html());
		}
		if (KISSY.one('input[name=\"ctl00$ContentMain$BaseInfoControl1$txtBodyWeight\"]')) {
		    KISSY.one('input[name=\"ctl00$ContentMain$BaseInfoControl1$txtBodyWeight\"]').val(KISSY.one('#mt_weight').html());
		}
		// 紧急联系人
		if (KISSY.one('input[name=\"ctl00$ContentMain$BaseInfoControl1$txtLinkPhone\"]')) {
		    KISSY.one('input[name=\"ctl00$ContentMain$BaseInfoControl1$txtLinkPhone\"]').val(KISSY.one('#mt_jjlxr').html());
		}

		// 爱好特长
		if (KISSY.one('input[name=\"ctl00$ContentMain$BaseInfoControl1$txtReliveLove\"]')) {
		    KISSY.one('input[name=\"ctl00$ContentMain$BaseInfoControl1$txtReliveLove\"]').val(KISSY.one('#mt_skill').html());
		}
	};
	basicInfo();

		// 生源地————省
	// 激活
	function ctl00_ContentMain_BaseInfoControl1_drpListProvince(){
		var helps = {
		    getActiveId: function() {
		        var item = document.querySelectorAll('.leftMenuList li');
		        for (var i in item) {
		            if (item[i].className.indexOf('active') != -1) {
		                return i
		            }
		        }
		    },
		    events: function() {
		        var eve = document.createEvent('HTMLEvents');
		        eve.initEvent('change', true, false);
		        return eve
		    },
		    delay: function(fn) {
		        window.setTimeout(fn, 200)
		    }
		};


		for (var i = 0; i < $('#ctl00_ContentMain_BaseInfoControl1_drpListProvince').children('option').length; i++) {
			// console.log(i);

			if ($('#ctl00_ContentMain_BaseInfoControl1_drpListProvince').children('option')[i].text == $('#mt_hukoucity     ').html()+'省') {
				// console.log('bingo——————————————————');
				// console.log(i);
				$('#ctl00_ContentMain_BaseInfoControl1_drpListProvince').children('option')[i].selected = true;
				// $('#ctl00_ContentMain_BaseInfoControl1_drpListProvince').children('option')[i].click();
				// dispatchEvent($('#ctl00_ContentMain_BaseInfoControl1_drpListCity').get(0))
				$('#ctl00_ContentMain_BaseInfoControl1_drpListProvince').children('option')[i].dispatchEvent(help.event());
				break;
			}
			// console.log($('#mt_hukoucity').html()+'省');
			// console.log($('#ctl00_ContentMain_BaseInfoControl1_drpListProvince').children('option')[i].text);
		}
		function  ctl00_ContentMain_BaseInfoControl1_drpListCity(){
			for (var j = 0; j < $('#ctl00_ContentMain_BaseInfoControl1_drpListCity').children('option').length; j++) {
				// console.log(j);
			if ($('#ctl00_ContentMain_BaseInfoControl1_drpListCity').children('option')[j].text  == $('#mt_hukoucity_city').html()+'市') {
				$('#ctl00_ContentMain_BaseInfoControl1_drpListCity').children('option')[j].selected = true;
				$('#ctl00_ContentMain_BaseInfoControl1_drpListCity').children('option')[j].dispatchEvent(help.event())
			}
			// console.log($('#ctl00_ContentMain_BaseInfoControl1_drpListCity').children('option')[i].text);
			// console.log($('#mt_hukoucity_city').html()+'市');
			}
		}

		window.setTimeout(ctl00_ContentMain_BaseInfoControl1_drpListCity,3000);
	};




// 地址信息下拉框列表组


	// 详细地址——现联系地址
	if (KISSY.one('input[name=\"ctl00$ContentMain$AddressInfoControl1$txtDetailAddress1\"]')) {
	    KISSY.one('input[name=\"ctl00$ContentMain$AddressInfoControl1$txtDetailAddress1\"]').val(KISSY.one('#mt_add').html());
	}

	// 邮编
	if (KISSY.one('input[name=\"ctl00$ContentMain$AddressInfoControl1$txtPostNumber1\"]')) {
	    KISSY.one('input[name=\"ctl00$ContentMain$AddressInfoControl1$txtPostNumber1\"]').val(KISSY.one('#mt_zip').html());
	}

	function ctl00_ContentMain_AddressInfoControl1_drpListProvince(){
		for (var i = 0; i < $('#ctl00_ContentMain_AddressInfoControl1_drpListProvince').children('option').length; i++) {
			// console.log(i);

			if ($('#ctl00_ContentMain_AddressInfoControl1_drpListProvince').children('option')[i].text == $('#mt_livecity_pro').html()+'省') {
				// console.log('bingo——————————————————');
				// console.log(i);
				$('#ctl00_ContentMain_AddressInfoControl1_drpListProvince').children('option')[i].selected = true;
				// $('#ctl00_ContentMain_BaseInfoControl1_drpListProvince').children('option')[i].click();
				// dispatchEvent($('#ctl00_ContentMain_BaseInfoControl1_drpListCity').get(0))
				$('#ctl00_ContentMain_AddressInfoControl1_drpListProvince').children('option')[i].dispatchEvent(help.events());
				break;
			}
			// console.log($('#mt_hukoucity').html()+'省');
			// console.log($('#ctl00_ContentMain_BaseInfoControl1_drpListProvince').children('option')[i].text);
		}
		function  ctl00_ContentMain_AddressInfoControl1_drpListCity(){
			for (var j = 0; j < $('#ctl00_ContentMain_AddressInfoControl1_drpListCity').children('option').length; j++) {
				// console.log(j);
			if ($('#ctl00_ContentMain_AddressInfoControl1_drpListCity').children('option')[j].text  == $('#mt_livecity_city').html()+'市') {
				$('#ctl00_ContentMain_AddressInfoControl1_drpListCity').children('option')[j].selected = true;
				$('#ctl00_ContentMain_AddressInfoControl1_drpListCity').children('option')[j].dispatchEvent(help.events())
			}
			// console.log($('#ctl00_ContentMain_AddressInfoControl1_drpListCity').children('option')[i].text);
			// console.log($('#mt_hukoucity_city').html()+'市');
			}
		}

		window.setTimeout(ctl00_ContentMain_AddressInfoControl1_drpListCity,3000);
	};
	ctl00_ContentMain_AddressInfoControl1_drpListProvince();

	// // 详细地址——家庭地址
	if (KISSY.one('input[name=\"ctl00$ContentMain$AddressInfoControl1$txtDetailAddress2\"]')) {
	    KISSY.one('input[name=\"ctl00$ContentMain$AddressInfoControl1$txtDetailAddress2\"]').val(KISSY.one('#mt_postadd').html());
	}



	function ctl00_ContentMain_AddressInfoControl1_drpListProvince0(){
		for (var i = 0; i < $('#ctl00_ContentMain_AddressInfoControl1_drpListProvince0').children('option').length; i++) {
			// console.log(i);

			if ($('#ctl00_ContentMain_AddressInfoControl1_drpListProvince0').children('option')[i].text == $('#mt_hukoucity').html()+'省') {
				// console.log('bingo——————————————————');
				// console.log(i);
				$('#ctl00_ContentMain_AddressInfoControl1_drpListProvince0').children('option')[i].selected = true;
				// $('#ctl00_ContentMain_AddressInfoControl1_drpListProvince0').children('option')[i].click();
				// dispatchEvent($('#ctl00_ContentMain_BaseInfoControl1_drpListCity').get(0))
				$('#ctl00_ContentMain_AddressInfoControl1_drpListProvince0').children('option')[i].dispatchEvent(help.events());
				break;
			}
			// console.log($('#mt_hukoucity').html()+'省');
			// console.log($('#ctl00_ContentMain_BaseInfoControl1_drpListProvince').children('option')[i].text);
		}
		function  ctl00_ContentMain_AddressInfoControl1_drpListCity0(){
			for (var j = 0; j < $('#ctl00_ContentMain_AddressInfoControl1_drpListCity0').children('option').length; j++) {
				// console.log(j);
			if ($('#ctl00_ContentMain_AddressInfoControl1_drpListCity0').children('option')[j].text  == $('#mt_hukoucity_city').html()+'市') {
				$('#ctl00_ContentMain_AddressInfoControl1_drpListCity0').children('option')[j].selected = true;
				$('#ctl00_ContentMain_AddressInfoControl1_drpListCity0').children('option')[j].dispatchEvent(help.events())
			}
			// console.log($('#ctl00_ContentMain_AddressInfoControl1_drpListCity0').children('option')[i].text);
			// console.log($('#mt_hukoucity_city').html()+'市');
			}
		}

		window.setTimeout(ctl00_ContentMain_AddressInfoControl1_drpListCity0,3000);
	};
	ctl00_ContentMain_AddressInfoControl1_drpListProvince0();

//奖励信息（校级以上）下拉框列表组



// 家庭成员信息下拉框列表组
	function famliyinfos(){
		if (KISSY.one('input[name=\"ctl00$ContentMain$FamilyMemberControl1$txtFamilyMemberName\"]')) {
			KISSY.one('input[name=\"ctl00$ContentMain$FamilyMemberControl1$txtFamilyMemberName\"]').val($('#mt_fmname').html())
		}
		for (var i = 0; i < $('#ctl00_ContentMain_FamilyMemberControl1_drpLstRelation').children('option').length; i++) {

			if ($('#ctl00_ContentMain_FamilyMemberControl1_drpLstRelation').children('option')[i].text == $('#mt_fmrelation').html()) {
				$('#ctl00_ContentMain_FamilyMemberControl1_drpLstRelation').children('option')[i].selected = true;
			}
		}
		if (KISSY.one('input[name=\"ctl00$ContentMain$FamilyMemberControl1$txtWorkUnit\"]')) {
			KISSY.one('input[name=\"ctl00$ContentMain$FamilyMemberControl1$txtWorkUnit\"]').val($('#mt_fmwork').html())
		}
		if (KISSY.one('input[name=\"ctl00$ContentMain$FamilyMemberControl1$txtMemberDuty\"]')) {
			KISSY.one('input[name=\"ctl00$ContentMain$FamilyMemberControl1$txtMemberDuty\"]').val($('#mt_fmposition').html())
		}
		if (KISSY.one('input[name=\"ctl00$ContentMain$FamilyMemberControl1$txtLinkPhone\"]')) {
			KISSY.one('input[name=\"ctl00$ContentMain$FamilyMemberControl1$txtLinkPhone\"]').val($('#mt_fmphone').html())
		}
	};
	famliyinfos();

// 教育信息下拉框列表组
	function educationInfo(){
		// 学历
		for (var i = 0; i < $('#ctl00_ContentMain_EduCationInfoControl1_drpListEduHistory').children('option').length; i++) {
			if ($('#ctl00_ContentMain_EduCationInfoControl1_drpListEduHistory').children('option')[i].text == '本科'&&   $('#mt_edu').html() == '大学本科-一本') {
				$('#ctl00_ContentMain_EduCationInfoControl1_drpListEduHistory').children('option')[i].selected = true;
				// console.log('edu');
			}
			else if ($('#ctl00_ContentMain_EduCationInfoControl1_drpListEduHistory').children('option')[i].text == '本科'&&   $('#mt_edu').html() == '大学本科-二本') {
				$('#ctl00_ContentMain_EduCationInfoControl1_drpListEduHistory').children('option')[i].selected = true;
				// console.log('edu');
			}
			else if ($('#ctl00_ContentMain_EduCationInfoControl1_drpListEduHistory').children('option')[i].text == '本科'&&   $('#mt_edu').html() == '大学本科-三本') {
				$('#ctl00_ContentMain_EduCationInfoControl1_drpListEduHistory').children('option')[i].selected = true;
				// console.log('edu');
			}
			else if ($('#ctl00_ContentMain_EduCationInfoControl1_drpListEduHistory').children('option')[i].text == $('#mt_edu').html()) {
				$('#ctl00_ContentMain_EduCationInfoControl1_drpListEduHistory').children('option')[i].selected = true;
				// console.log('edu');
			}
			else if ($('#ctl00_ContentMain_EduCationInfoControl1_drpListEduHistory').children('option')[i].text == '专科' &&  $('#mt_edu').html() == '大学专科') {
				$('#ctl00_ContentMain_EduCationInfoControl1_drpListEduHistory').children('option')[i].selected = true;
				// console.log('edu');
			}
			else if( ($('#mt_edu').html() == '其他'||$('#mt_edu').html() == '海外本科'||$('#mt_edu').html() == 'MBA'||$('#mt_edu').html() == 'MPA')&& $('#ctl00_ContentMain_EduCationInfoControl1_drpListEduHistory').children('option')[i].text == '请选择'){
				$('#ctl00_ContentMain_EduCationInfoControl1_drpListEduHistory').children('option')[i].selected = true;
				// console.log('edu');
			}
		}
		// 学历类别
		for (var i = 0; i < $('#ctl00_ContentMain_EduCationInfoControl1_drpListEduType').children('option').length; i++) {
			if ($('#ctl00_ContentMain_EduCationInfoControl1_drpListEduType').children('option')[i].text == '普通高等学校学历'&&   $('#mt_edutype').html() == '全日制统分统招') {
				$('#ctl00_ContentMain_EduCationInfoControl1_drpListEduType').children('option')[i].selected = true;
				// console.log('edu1');
			}
			else if ($('#ctl00_ContentMain_EduCationInfoControl1_drpListEduType').children('option')[i].text == '成人高等学校学历'&&   $('#mt_edutype').html() == '成人教育') {
				$('#ctl00_ContentMain_EduCationInfoControl1_drpListEduType').children('option')[i].selected = true;
				// console.log('edu1');
			}
		}
		// 学位等级
		for (var i = 0; i < $('#ctl00_ContentMain_EduCationInfoControl1_drpListDegradGrade').children('option').length; i++) {
			if ($('#ctl00_ContentMain_EduCationInfoControl1_drpListDegradGrade').children('option')[i].text == $('.mt_degree').html()) {
				$('#ctl00_ContentMain_EduCationInfoControl1_drpListDegradGrade').children('option')[i].selected = true;
				// console.log('edu2');
			}
		}
		//学校名称
		if (KISSY.one('input[name=\"ctl00$ContentMain$EduCationInfoControl1$txtSchoolName\"]')) {
			KISSY.one('input[name=\"ctl00$ContentMain$EduCationInfoControl1$txtSchoolName\"]').val($('#edu-list').children('.infopledu').children('div:eq(1)').children('table').children('tbody').children('tr:eq(0)').children('td:eq(1)').html())
				// console.log('stuOrgInfo');

		}
	};
	educationInfo();

// 
// 学生组织信息下拉框列表组
	function stuOrgInfo(){
		// 学生组织
		if (KISSY.one('input[name=\"ctl00$ContentMain$StudentOrganControl1$txtStudentOrganName\"]')) {
			KISSY.one('input[name=\"ctl00$ContentMain$StudentOrganControl1$txtStudentOrganName\"]').val($('#schclub-list').children('.infoschoolclub').children('div:eq(1)').children('table').children('tbody').children('tr:eq(0)').children('td:eq(1)').html())
			// console.log('stuOrgInfo');
		}
		// 担任职务
		if (KISSY.one('input[name=\"ctl00$ContentMain$StudentOrganControl1$txtDuty\"]')) {
			KISSY.one('input[name=\"ctl00$ContentMain$StudentOrganControl1$txtDuty\"]').val($('#schclub-list').children('.infoschoolclub').children('div:eq(1)').children('table').children('tbody').children('tr:eq(2)').children('td:eq(1)').html())
				// console.log('stuOrgInfo');
		}
		// 活动内容
		if (KISSY.one('textarea[name=\"ctl00$ContentMain$StudentOrganControl1$TxtActivedContent\"]')) {
			KISSY.one('textarea[name=\"ctl00$ContentMain$StudentOrganControl1$TxtActivedContent\"]').val($('#schclub-list').children('.infoschoolclub').children('div:eq(1)').children('table').children('tbody').children('tr:eq(3)').children('td:eq(1)').html())
			// console.log('stuOrgInfo');
		}
		// console.log('stuOrgInfoBegin');
	};	
	stuOrgInfo();

// 获奖信息下拉框列表组
	function rewardSch(){
		// 奖励名称
		if (KISSY.one('input[name=\"ctl00$ContentMain$RewardInfoControl1$txtRewardName\"]')) {
		    KISSY.one('input[name=\"ctl00$ContentMain$RewardInfoControl1$txtRewardName\"]').val($('#schawards-list').children('div.infoschaward').children('div.infopl').children('table').children('tbody').children('tr:eq(0)').children('td:eq(1)').html());
		}
		// 获奖类型————奖励类别
		for (var i = 0; i < $('#ctl00_ContentMain_RewardInfoControl1_drpListRewardClass').children('option').length; i++) {
			if ($('#ctl00_ContentMain_RewardInfoControl1_drpListRewardClass').children('option')[i].text == '国家级（行业级）'&& $('#schawards-list').children('div.infoschaward').children('div.infopl').children('table').children('tbody').children('tr:eq(1)').children('td:eq(1)').html() == '国家级') {
				$('#ctl00_ContentMain_RewardInfoControl1_drpListRewardClass').children('option')[i].selected = true;
			}
			if ($('#ctl00_ContentMain_RewardInfoControl1_drpListRewardClass').children('option')[i].text == '省部级(集团公司级)'&& $('#schawards-list').children('div.infoschaward').children('div.infopl').children('table').children('tbody').children('tr:eq(1)').children('td:eq(1)').html() == '省市级') {
				$('#ctl00_ContentMain_RewardInfoControl1_drpListRewardClass').children('option')[i].selected = true;
			}	
			if ($('#ctl00_ContentMain_RewardInfoControl1_drpListRewardClass').children('option')[i].text == '地市级(分子公司级)'&& $('#schawards-list').children('div.infoschaward').children('div.infopl').children('table').children('tbody').children('tr:eq(1)').children('td:eq(1)').html() == '学校级') {
				$('#ctl00_ContentMain_RewardInfoControl1_drpListRewardClass').children('option')[i].selected = true;
			}	

		}

		// —获奖描述———备注
		if (KISSY.one('input[name=\"ctl00$ContentMain$RewardInfoControl1$txtRemark\"]')) {
		    KISSY.one('input[name=\"ctl00$ContentMain$RewardInfoControl1$txtRemark\"]').val($('#schawards-list').children('div.infoschaward').children('div.infopl').children('table').children('tbody').children('tr:eq(5)').children('td:eq(1)').html());
		}
	};
	rewardSch();

// 工作和实习经历下拉框列表组
	function pracOrWorkInfo(){
		// 工作单位
		if (KISSY.one('input[name=\"ctl00$ContentMain$WorkHistoryControl1$txtWorkOrgan\"]')) {
		    KISSY.one('input[name=\"ctl00$ContentMain$WorkHistoryControl1$txtWorkOrgan\"]').val($('#exp-list').children('div:eq(0)').children('.infopl').children('table').children('tbody').children('tr:eq(0)').children('td:eq(1)').html());
		    // console.log($('#exp-list').children('div:eq(0)').children('.infopl').children('table').children('tbody').children('tr:eq(0)').children('td:eq(1)').html());
		}
		// 部门
		if (KISSY.one('input[name=\"ctl00$ContentMain$WorkHistoryControl1$txtDeptName\"]')) {
			KISSY.one('input[name=\"ctl00$ContentMain$WorkHistoryControl1$txtDeptName\"]').val($('#exp-list').children('div:eq(0)').children('.infopl').children('table').children('tbody').children('tr:eq(6)').children('td:eq(1)').html());
			// console.log($('#exp-list').children('div:eq(0)').children('.infopl').children('table').children('tbody').children('tr:eq(6)').children('td:eq(1)').html());
		}
		// 职责
		if (KISSY.one('input[name=\"ctl00$ContentMain$WorkHistoryControl1$txtDuty\"]')) {
			KISSY.one('input[name=\"ctl00$ContentMain$WorkHistoryControl1$txtDuty\"]').val($('#exp-list').children('div:eq(0)').children('.infopl').children('table').children('tbody').children('tr:eq(5)').children('td:eq(1)').html());
			// console.log($('#exp-list').children('div:eq(0)').children('.infopl').children('table').children('tbody').children('tr:eq(5)').children('td:eq(1)').html());
		}
		// 证明人姓名
		if (KISSY.one('input[name=\"ctl00$ContentMain$WorkHistoryControl1$txtPrevePerson\"]')) {
			KISSY.one('input[name=\"ctl00$ContentMain$WorkHistoryControl1$txtPrevePerson\"]').val($('#exp-list').children('div:eq(0)').children('.infopl').children('table').children('tbody').children('tr:eq(18)').children('td:eq(1)').html());
			// console.log($('#exp-list').children('div:eq(0)').children('.infopl').children('table').children('tbody').children('tr:eq(18)').children('td:eq(1)').html());
		}
		// 备注——
		if (KISSY.one('input[name=\"ctl00$ContentMain$WorkHistoryControl1$txtRemark\"]')) {
			KISSY.one('input[name=\"ctl00$ContentMain$WorkHistoryControl1$txtRemark\"]').val($('#exp-list').children('div:eq(0)').children('.infopl').children('table').children('tbody').children('tr:eq(16)').children('td').children('pre').html());
			// console.log($('#exp-list').children('div:eq(0)').children('.infopl').children('table').children('tbody').children('tr:eq(16)').children('td').children('pre').html());
		}
	};
	pracOrWorkInfo();



// 外语和计算机水平信息下拉框列表组
function CETinfo(){
		// 外语语种
	// for (var i = 0; i < 7; i++) {
	// 	if ($('#skill-list').children('div:eq(i)').children('div.infopl').children('table').children('tbody').children('tr').children('td.mt_skillEngLevel') == '大学英语六级') {
	// 		for (var j = 0; j < $('#ctl00_ContentMain_ForeignComputerControl1_drpListForeignLanguage').children('option').length; j++) {
	// 				if ($('#ctl00_ContentMain_ForeignComputerControl1_drpListForeignLanguage').children('option')[j].text == '英语'&&   $('#skill-list').children('div.infoEnglishSkill').children('div.infopl').children('table').children('tbody').children('tr').children('td.mt_skillEngLevel') == '大学英语六级') {
	// 					$('#ctl00_ContentMain_ForeignComputerControl1_drpListForeignLanguage').children('option')[j].selected = true;
	// 					console.log('CET');
	// 				}
	// 			}
	// 		}


	// 	if ($('#skill-list').children('div.infoEnglishSkill').children('div.infopl').children('table').children('tbody').children('tr').children('td.mt_skillEngLevel') == '大学英语四级') {
	// 		for (var z = 0; z < $('#ctl00_ContentMain_ForeignComputerControl1_drpListForeignLanguage').children('option').length; z++) {
	// 			if ($('#ctl00_ContentMain_ForeignComputerControl1_drpListForeignLanguage').children('option')[z].text == '英语'&&   $('#skill-list').children('div.infoEnglishSkill').children('div.infopl').children('table').children('tbody').children('tr').children('td.mt_skillEngLevel') == '大学英语四级') {
	// 			$('#ctl00_ContentMain_ForeignComputerControl1_drpListForeignLanguage').children('option')[z].selected = true;
	// 				console.log('CET');
	// 			}
	// 		}
	// 	}
	// }
// console.log($('#ctl00_ContentMain_ForeignComputerControl1_drpListForeignLanguage').children('option').length);
	// 外语语种
	for (var i = 0; i < $('#ctl00_ContentMain_ForeignComputerControl1_drpListForeignLanguage').children('option').length; i++) {

	// console.log($('#ctl00_ContentMain_ForeignComputerControl1_drpListForeignLanguage').children('option')[i].text);
	// console.log($('#skill-list').children('div:eq(0)').children('div.infopl').children('table').children('tbody').children('tr').children('td.mt_skillEngLevel').html());

		if ( $('#skill-list').children('div:eq(0)').children('div.infopl').children('table').children('tbody').children('tr').children('td.mt_skillEngLevel').html() == '大学英语四级'&& $('#ctl00_ContentMain_ForeignComputerControl1_drpListForeignLanguage').children('option')[i].text == '英语') {
			$('#ctl00_ContentMain_ForeignComputerControl1_drpListForeignLanguage').children('option')[i].selected = true;


		}

		if (  $('#skill-list').children('div:eq(0)').children('div.infopl').children('table').children('tbody').children('tr').children('td.mt_skillEngLevel').html() =='大学英语六级' && $('#ctl00_ContentMain_ForeignComputerControl1_drpListForeignLanguage').children('option')[i].text == '英语') {
			$('#ctl00_ContentMain_ForeignComputerControl1_drpListForeignLanguage').children('option')[i].selected = true;
			// console.log('大学英语六级');
		}

		if (  $('#skill-list').children('div:eq(0)').children('div.infopl').children('table').children('tbody').children('tr').children('td.mt_skillEngLevel').html() =='专业四级' && $('#ctl00_ContentMain_ForeignComputerControl1_drpListForeignLanguage').children('option')[i].text == '英语') {
			$('#ctl00_ContentMain_ForeignComputerControl1_drpListForeignLanguage').children('option')[i].selected = true;
		}

		if (  $('#skill-list').children('div:eq(0)').children('div.infopl').children('table').children('tbody').children('tr').children('td.mt_skillEngLevel').html() =='专业八级' && $('#ctl00_ContentMain_ForeignComputerControl1_drpListForeignLanguage').children('option')[i].text == '英语') {
			$('#ctl00_ContentMain_ForeignComputerControl1_drpListForeignLanguage').children('option')[i].selected = true;
		}

		// $('#skill-list').children('div:eq(0)').children('div.infopl').children('table').children('tbody').children('tr').children('td.mt_skillEngLevel')
	};
	// 外语级别
	for (var j = 0; j < $('#ctl00_ContentMain_ForeignComputerControl1_drpListForeignClass').children('option').length; j++) {
		// console.log('chenge');
		if ($('#skill-list').children('div:eq(0)').children('div.infopl').children('table').children('tbody').children('tr').children('td.mt_skillEngLevel').html() =='大学英语四级'  &&  $('#ctl00_ContentMain_ForeignComputerControl1_drpListForeignClass').children('option')[j].text =='四级（CET-4）' ) {
			$('#ctl00_ContentMain_ForeignComputerControl1_drpListForeignClass').children('option')[j].selected = true;
		}

		if ($('#skill-list').children('div:eq(0)').children('div.infopl').children('table').children('tbody').children('tr').children('td.mt_skillEngLevel').html() =='大学英语六级'  &&  $('#ctl00_ContentMain_ForeignComputerControl1_drpListForeignClass').children('option')[j].text =='六级（CET-6）' ) {
			$('#ctl00_ContentMain_ForeignComputerControl1_drpListForeignClass').children('option')[j].selected = true;
		}

		if ($('#skill-list').children('div:eq(0)').children('div.infopl').children('table').children('tbody').children('tr').children('td.mt_skillEngLevel').html() =='专业四级'  &&  $('#ctl00_ContentMain_ForeignComputerControl1_drpListForeignClass').children('option')[j].text =='专业四级（TEM4）' ) {
			$('#ctl00_ContentMain_ForeignComputerControl1_drpListForeignClass').children('option')[j].selected = true;
		}

		if ($('#skill-list').children('div:eq(0)').children('div.infopl').children('table').children('tbody').children('tr').children('td.mt_skillEngLevel').html() =='专业八级'  &&  $('#ctl00_ContentMain_ForeignComputerControl1_drpListForeignClass').children('option')[j].text =='专业八级（TEM8）' ) {
			$('#ctl00_ContentMain_ForeignComputerControl1_drpListForeignClass').children('option')[j].selected = true;
		}

	}
	// 得分
	if (KISSY.one('input[name=\"ctl00$ContentMain$ForeignComputerControl1$txtScore\"]')) {
		KISSY.one('input[name=\"ctl00$ContentMain$ForeignComputerControl1$txtScore\"]').val($('#skill-list').children('div:eq(0)').children('div.infopl').children('table').children('tbody').children('tr').children('td.mt_skillEngSorce').html())
	}

	// 计算机级别
	for (var i = 0; i < $('#ctl00_ContentMain_ForeignComputerControl1_drpListComputerClass').children('option').length; i++) {
		if ($('#ctl00_ContentMain_ForeignComputerControl1_drpListComputerClass').children('option')[i].text == $('#certificate-list').children('div.infoplcerti').children('div.infopl').children('table').children('tbody').children('tr:eq(0)').children('td.mt_certificateName').html()) {
			$('#ctl00_ContentMain_ForeignComputerControl1_drpListComputerClass').children('option')[i].selected = true;
		}
		
	}



};
CETinfo();

// 自我评价下拉框列表组
	if (KISSY.one('textarea[name=\"ctl00$ContentMain$txtAssess\"]')) {
	    KISSY.one('textarea[name=\"ctl00$ContentMain$txtAssess\"]').val(KISSY.one('#mt_selfIntro').html());
	}

// 身份证以及全身照下拉框列表组
// 身份证
	if (KISSY.one('input[name=\"ctl00$ContentMain$OtherCertificateControlSFZ$txtCertifyNumber\"]')) {
	    KISSY.one('input[name=\"ctl00$ContentMain$OtherCertificateControlSFZ$txtCertifyNumber\"]').val(KISSY.one('#mt_id').html());
	}
	
//实现基本信息身份二级联动调用
	ctl00_ContentMain_BaseInfoControl1_drpListProvince();