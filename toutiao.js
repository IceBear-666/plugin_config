var logo = document.getElementById('jm_qiuck_cover');
if(logo){
	logo.style.display = 'block';
	window.setTimeout(function(){
		logo.style.display = 'none';
	},1500);
}



var _ = function(index, i) {
	if (typeof i === 'undefined') {
		return document.querySelectorAll(index)[0];
	}
	return document.querySelectorAll(index)[i];
};


var _v = function(index, i) {
	if (typeof i === 'undefined') {
		return document.querySelectorAll(index)[0] ? document.querySelectorAll(index)[0].innerText : '';
	}
	return document.querySelectorAll(index)[i] ? document.querySelectorAll(index)[i].innerText : '';
};



var help = (function() {
	var f1 = function(date) {
		date = date.split('-');
		for (var i in date) {
			date[i] = date[i] < 10 ? '0' + date[i] : date[i];
		}
		return date = date.join('-');
	};

	var f2 = function() {
		var event = document.createEvent('HTMLEvents');
		event.initEvent('change', true, false);
		return event;
	};

	return {
		addZero: f1,
		event: f2
	};

})();


var autoWrite = {
	textWrite: function(content, obj) {
		if (content && obj) {
			obj.value = content;
		}
	},
	sexWrite: function(){
		if(_v('#mt_sex') === '男'){
			_('#male').click();
		}
		else{
			_('#famale').click();
		}
	},
	custonFun: function(callback) {
		callback();
	}
};

autoWrite.textWrite(_v('#mt_name'), _('[name=\"name\"]'));

var educationWrite = function() {
	var eduContent = document.querySelectorAll('.education-container');

	eduContent.forEach(function(val, i) {
		var eduOpt = eduContent[i].querySelector('select').options;
		if (_v('.infopledu .mt_education', i)) {
			for (var j = 0; j < eduOpt.length; j++) {
				if (_v('.infopledu .mt_education', i).indexOf(eduOpt[j].text) != -1) {
					eduOpt[j].selected = true;
					break;
				}
			}
		}

		if (_v('.infopledu .mt_startYear', i)) {
			var sdate = help.addZero(_v('.infopledu .mt_startYear', i)) + '-01';
			autoWrite.textWrite(sdate, _('#eduStartTime' + (i + 1)));
		}

		if (_v('.infopledu .mt_endYear', i)) {
			var edate = help.addZero(_v('.infopledu .mt_endYear', i)) + '-01';
			autoWrite.textWrite(edate, _('#eduEndTime' + (i + 1)));
		}

		autoWrite.textWrite(_v('.infopledu .mt_schoolName', i), _('[name=\"school\"]', i));
		autoWrite.textWrite(_v('.infopledu .mt_professional', i), _('[name=\"major\"]', i));

		if (_v('.infopledu .mt_professionalranking', i)) {
			var rank;
			switch (_v('.infopledu .mt_professionalranking', i)) {
				case '前5%':
				case '前10%':
					rank = 1;
					break;
				case '前20%':
					rank = 2;
					break;
				case '前30%':
					rank = 3;
					break;
				case '前40%':
					rank = 4;
					break;
				case '前50%':
					rank = 5;
					break;
				default:
					rank = 6;
					break;
			}
			_('#rank' + i + rank).click();
		}

	});

};

autoWrite.custonFun(educationWrite);

autoWrite.custonFun(function() {
	var schCon = '';
	var camCon = _('[name=\"campusExperience\"]');
	camCon.value = '';
	for (var i = 0; i < document.querySelectorAll('.infoschoolclub').length; i++) {
		schCon = camCon.value;
		schCon = schCon + _v('.infoschoolclub .mt_schClubList', i) + '\\n';
		camCon.value = schCon;
	}
});

autoWrite.custonFun(function() {
	var jobOpt = _('[name=\"internship\"]');
	var len = document.querySelectorAll('.infoparttimejobs').length;

	if (len > 0) {
		jobOpt.options[1].selected = true;
		jobOpt.dispatchEvent(help.event());
		var jobContent = document.querySelectorAll('.experience-container');

		jobContent.forEach(function(val, i) {
			if (_v('.infoparttimejobs .mt_startDate', i)) {
				var st = help.addZero(_v('.infoparttimejobs .mt_startDate', i)) + '-01';
				autoWrite.textWrite(st, _('#expStartTime' + (i + 1)));
			}
			if (_v('.infoparttimejobs .mt_endDate', i)) {
				var et = help.addZero(_v('.infoparttimejobs .mt_endDate', i)) + '-01';
				autoWrite.textWrite(et, _('#expEndTime' + (i + 1)));
			}
			autoWrite.textWrite(_v('.infoparttimejobs .mt_companyName', i), _('[name=\"company\"]', i));
			autoWrite.textWrite(_v('.infoparttimejobs .mt_workList', i), jobContent[i].querySelector('textarea'));
		});
	} else {
		jobOpt.options[2].selected = true;
	}

});

autoWrite.custonFun(function(){
	var idType = _('[name=\"idType\"]').options;
	switch(_v('#mt_idtype')){
		case '身份证':
			idType[1].selected=true;
			break;
		case '护照':
			idType[2].selected=true;
			break;
		case '香港永久居民身份证':
		case '香港非永久居民身份证':
			idType[3].selected=true;
			break;
		case '台胞证':
			idType[4].selected=true;
			break;
		default:
			idtype[5].selected=true;
	}

	autoWrite.textWrite(_v('#mt_id'),_('[name=\"idNumber\"]',1));
	autoWrite.sexWrite();
	var birth = help.addZero(_v('#mt_birth'));
	autoWrite.textWrite(birth,_('#birthdayDatePicker'));
	autoWrite.textWrite(_v('#mt_tel'),_('[name=\"mobile\"]'));
	autoWrite.textWrite(_v('#mt_email'),_('[name=\"email\"]'));

});