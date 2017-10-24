if ($('#jm_qiuck_cover')) {
	$('#jm_qiuck_cover').fadeIn();
	setTimeout(function() {
		$('#jm_qiuck_cover').fadeOut()
	}, 1000);
}

/* get location pathname*/
var pathname = window.location.pathname;

// get dom obj like [name="..."]
var _ = function(index, i) {
	if (typeof i === 'undefined') {
		return $('[name=\"' + index + '\"]');
	}
	return $('[name=\"' + index + '\"]').eq(i);
};

// get my info
var _v = function(name, i) {
	if (typeof i === 'undefined') {
		return document.querySelectorAll(name)[0].innerHTML ? document.querySelectorAll(name)[0].innerHTML : '';
	}
	return document.querySelectorAll(name)[i].innerHTML ? document.querySelectorAll(name)[i].innerHTML : '';
};

// getsession
function getSession(key){
	return sessionStorage.getItem(key)?sessionStorage.getItem(key):'';
}
// setsession
function setSession(key,value){
	sessionStorage.setItem(key,value);
}

// done object
var done = {
	get: function(key){
		return getSession(key)?parseInt(getSession(key)):0;
	},
	update: function(key){
		var oldval = this.get(key);
		var val = oldval+1+'';
		setSession(key,val);
	}
};



// help object
var help = (function() {

	var f1 = function() {
		var ary = [];
		$('.infopledu').each(function(i, val) {
			var year = _v('.infopledu .mt_endYearY', i);
			year = parseInt(year);
			ary.push({
				id: i,
				y: year
			});
		});

		ary.sort(function(a, b) {
			return b.y - a.y;
		});

		return {
			id: ary[0]['id'],
			year: ary[0]['y']
		};
	};

	var f2 = function(content) {
		switch (content) {
			case '初中及以下':
				return 1;
			case '大学专科':
				return 3;
			case '大学本科-一本':
			case '大学本科-二本':
			case '大学本科-三本':
				return 5;
			case '博士研究生':
			case '硕士研究生':
				return 6;
			default:
				return 2;
		}
	};

	var f3 = function(content) {
		switch (content) {
			case '无':
				return 1;
			case '硕士':
				return 3;
			case '博士':
				return 4;
			default:
				return 2;
		}
	};

	var f4 = function(){
		var ev = document.createEvent('HTMLEvents');
		ev.initEvent('change', true, false);
		return ev;
	};

	var f5 = function(obj){
		obj.get(0).dispatchEvent(f4());
	};

	var f6 = function(){
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
					break;
			}
			if (level > maxLevel) {
				maxLevel = level;
				index = i;
			}
		}
		return {
			id: index,
			level: maxLevel
		};
	};

	return {
		maxEduIndex: f1,
		getEduType: f2,
		getDegType: f3,
		event: f4,
		changes: f5,
		maxEngLevel: f6
	};

})();

// autoWrite object
var autoWrite = {
	textWrite: function(content, obj) {
		if (content && obj.length) {
			obj.val(content);
			help.changes(obj);
		}
	},
	textArrWrite: function(items) {
		var arrCon = items.items1;
		var arrObj = items.items2;
		for (var i in arrCon) {
			autoWrite.textWrite(arrCon[i], arrObj[i]);
		}
	},
	sexWrite: function() {
		if (_v('#mt_sex') === '男') {
			_('resume_gender').eq(1).click();
		} else {
			_('resume_gender').eq(0).click();
		}
	},
	selWrite: function(content, obj) {
		if (content && obj.length) {
			var opt = obj.get(0).options;
			for (var i in opt) {
				if (opt[i].innerHTML.indexOf(content) != -1) {
					opt[i].selected = true;
					help.changes(obj);
					break;
				}
			}
		}
	},
	custonFun: function(callback) {
		callback();
	}
};

// personal info
function personalInfo() {

	autoWrite.textArrWrite({
		items1: [
			_v('#mt_name'),
			_v('#mt_height'),
			_v('#mt_weight'),
			_v('#mt_hukoucity_city'),
			_v('#mt_selfIntro'),
			_v('#mt_email'),
			_v('#mt_tel'),
			_v('#mt_gudingtel'),
			_v('#mt_id')
		],
		items2: [
			_('resume_name'),
			_('resume_height'),
			_('resume_body_weight'),
			_('system_custom_214'),
			_('resume_jobdesc'),
			_('resume_email'),
			_('resume_mobile'),
			_('resume_phone'),
			_('resume_certificate')
		]
	});

	autoWrite.sexWrite();
	autoWrite.selWrite(_v('#mt_nation'), _('resume_nation'));
	autoWrite.selWrite(_v('#mt_biryear'), _('resume_birthday_year'));
	autoWrite.selWrite(_v('#mt_birmonth'), _('resume_birthday_month'));
	autoWrite.selWrite(_v('#mt_hukoucity'), _('resume_bf_education'));

	var marry = _v('#mt_maritalstatus');
	if (marry === '离婚') {
		marry = '其他';
	}
	autoWrite.selWrite(marry, _('g_marital_status_id'));

	var plot = _('resume_political');
	if (plot.length) {
		plot = plot.get(0).options;
		switch (_v('#mt_polistatus')) {
			case '中共党员':
				plot[1].selected = true;
				break;
			case '共青团员':
				plot[2].selected = true;
				break;
			case '群众':
				plot[3].selected = true;
				break;
			default:
				plot[4].selected = true;
				break;
		}
		help.changes(_('resume_political'));
	}

	var eduId = help.maxEduIndex()['id'];
	if (_('g_diploma_id').length) {
		var hedu = help.getEduType(_v('#mt_edu'));
		_('g_diploma_id').get(0).options[hedu].selected = true;
		help.changes(_('g_diploma_id'));
	}
	if (_('g_degree_id').length) {
		var hdeg = help.getDegType(_v('.infopledu .mt_degree', eduId));
		_('g_degree_id').get(0).options[hdeg].selected = true;
		help.changes(_('g_degree_id'));
	}

	var gradate = _v('#mt_gradutetime').split('-');
	autoWrite.selWrite(gradate[0],_('resume_graduation_time_year'));
	autoWrite.selWrite(gradate[1],_('resume_graduation_time_month'));

};

autoWrite.custonFun(personalInfo);

// education experence
function educationExp(){
	var id = done.get('eduDone');
	var len = $('.infopledu').length;

	if(id < len){
		var sdate = _v('.infopledu .mt_startYear',id).split('-');
		var edate = _v('.infopledu .mt_endYear',id).split('-');
		autoWrite.selWrite(sdate[0],_('resume_education_year_from'));
		autoWrite.selWrite(sdate[1],_('resume_education_month_from'));
		autoWrite.selWrite(edate[0],_('resume_education_year_to'));
		autoWrite.selWrite(edate[1],_('resume_education_month_to'));

		autoWrite.textWrite(_v('.infopledu .mt_academy',id),_('system_custom_202'));
		autoWrite.textWrite(_v('.infopledu .mt_professional',id),_('system_custom_220'));

		if(_('g_diploma_id').length){
			var eduType = help.getEduType(_v('.infopledu .mt_education',id));
			_('g_diploma_id').get(0).options[eduType].selected=true;
		}
		if(_('g_degree_id').length){
			var degType = help.getEduType(_v('.infopledu .mt_degree',id));
			_('g_degree_id').get(0).options[degType].selected=true;
		}
		if(_('resume_education_rank').length){
			var rank = _('resume_education_rank').get(0).options;
			switch(_v('.infopledu .mt_classranking',id)){
				case '前5%':
				case '前10%':
				case '前20%':
					rank[1].selected=true;
					break;
				case '前30%':
				case '前40%':
				case '前50%':
					rank[2].selected=true;
					break;
				case '前60%':
				case '前70%':
					rank[3].selected=true;
					break;
				default:
					rank[4].selected=true;
			}
		}
		autoWrite.textWrite(_v('.infopledu .mt_major',id),_('system_custom_190'));	
		done.update('eduDone');
	}
	
};

if(pathname.indexOf('/recruitment/resume/add/t/resume_education/')!=-1){
	autoWrite.custonFun(educationExp);
}

// reward experence
function rewards(){
	var num = $('.infoschaward').length;
	if(_('resume_awards_times').length){
		var awdOpt = _('resume_awards_times').get(0).options;
		if(num == 0){
			awdOpt[1].selected=true;
		}
		else if(num < 4){
			awdOpt[2].selected=true;
		}
		else if(num < 9){
			awdOpt[3].selected=true;
		}
		else{
			awdOpt[4].selected=true;
		}
		help.changes(_('resume_awards_times'));
	}
	
	var awdcon='';
	$('.infoschaward').each(function(i,val){
		awdcon = awdcon+_v('.infoschaward .mt_awardsDate',i)+':'+_v('.infoschaward .mt_awardsName',i)+'\\n';
	});
	autoWrite.textWrite(awdcon,_('system_custom_191'));

	var schcon='';
	var schList='';
	$('.infoschoolclub').each(function(i,val){
		schcon = schcon + _v('.infoschoolclub .mt_startDate',i)+':'+_v('.infoschoolclub .mt_positionName',i)+'\\n';
		schList = schList + _v('.infoschoolclub .mt_schClubList',i)+'\\n';
	});
	autoWrite.textWrite(schcon,_('system_custom_192'));
	autoWrite.textWrite(schList,_('system_custom_194'));
};
autoWrite.custonFun(rewards);

// you skill
function skill(){
	if(_('resume_en_level').length){
		var eng = help.maxEngLevel();
		var engOpt = _('resume_en_level').get(0).options;
		engOpt[eng['level']+1].selected=true;
		autoWrite.textWrite(_v('.infoEnglishSkill .mt_skillEngSorce',eng['id']),_('resume_en_score'));
	}

	var cet = '';
	$('.infoplcerti').each(function(i,val){
		cet = cet + _v('.infoplcerti .mt_getDate',i)+':'+_v('.infoplcerti .mt_certificateName')+'\\n';
	});
	autoWrite.textWrite(cet,_('system_custom_199'));

	autoWrite.textWrite(_v('#mt_hobbies'),_('system_custom_200'));
	autoWrite.textWrite(_v('#mt_skill'),_('resume_skill_desc'));

};

autoWrite.custonFun(skill);

function parttimeJob(){
	var id = done.get('jobDone');
	var jobnum = $('.infoparttimejobs').length;
	var pronum = $('.infoproject').length;

	if(id < jobnum){
		var st = _v('.infoparttimejobs .mt_startDate',id).split('-');
		var et = _v('.infoparttimejobs .mt_endDate',id).split('-');
		autoWrite.selWrite(st[0],_('resume_internship_year_from'));
		autoWrite.selWrite(st[1],_('resume_internship_month_from'));
		autoWrite.selWrite(et[0],_('resume_internship_year_to'));
		autoWrite.selWrite(et[1],_('resume_internship_month_to'));
		var des='实习单位:'+_v('.infoparttimejobs .mt_companyName',id)+'\\n';
		des = des+'工作职位:'+_v('.infoparttimejobs .mt_positionName',id)+'\\n';
		des = des +'工作内容:'+_v('.infoparttimejobs .mt_workContent .workContent',id)+'\\n';
		autoWrite.textWrite(des,_('resume_internship_content'));
		autoWrite.textWrite(_v('.infoparttimejobs .mt_reterenceName',id),_('resume_internship_witness'));
		autoWrite.textWrite(_v('.infoparttimejobs .mt_reterencePosition',id),_('resume_internship_witness_job'));
		done.update('jobDone');
	}
	else if(id < (jobnum+pronum)){
		id = id -jobnum;
		var st = _v('.infoproject .mt_prostartdate',id).split('-');
		var et = _v('.infoproject .mt_proenddate',id).split('-');
		autoWrite.selWrite(st[0],_('resume_internship_year_from'));
		autoWrite.selWrite(st[1],_('resume_internship_month_from'));
		autoWrite.selWrite(et[0],_('resume_internship_year_to'));
		autoWrite.selWrite(et[1],_('resume_internship_month_to'));
		var des='项目名称:'+_v('.infoproject .mt_projectName',id)+'\\n';
		des = des+'项目职位:'+_v('.infoproject .mt_positionName',id)+'\\n';
		des = des +'项目描述:'+_v('.infoproject .mt_projectRemark',id)+'\\n';
		autoWrite.textWrite(des,_('resume_internship_content'));
		autoWrite.textWrite(_v('.infoproject .mt_reterenceName',id),_('resume_internship_witness'));
		done.update('jobDone');
	}
};

if(pathname.indexOf('/recruitment/resume/add/t/resume_internship/')!=-1){
	autoWrite.custonFun(parttimeJob);
}