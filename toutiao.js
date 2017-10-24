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

autoWrite.textWrite(_v('#mt_name'), _('[name=\"name\"]'));
autoWrite.textWrite(_v('#mt_tel'),_('[name=\"mobile\"]'));
autoWrite.textWrite(_v('#mt_birth'),_('#birthdayDatePicker'));
autoWrite.textWrite(_v('#mt_email'),_('[name=\"email\"]'));

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
});



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
			var sdate = help.addZero(_v('.infopledu .mt_startYear', i));
			autoWrite.textWrite(sdate, _('#eduStartTime' + (i + 1)));
		}

		if (_v('.infopledu .mt_endYear', i)) {
			var edate = help.addZero(_v('.infopledu .mt_endYear', i));
			autoWrite.textWrite(edate, _('#eduEndTime' + (i + 1)));
		}

		autoWrite.textWrite(_v('.infopledu .mt_schoolName', i), _('[name=\"school\"]', i));
		autoWrite.textWrite(_v('.infopledu .mt_professional', i), _('[name=\"major\"]', i));

	});

};

autoWrite.custonFun(educationWrite);

autoWrite.custonFun(function() {
	var len = document.querySelectorAll('.infoparttimejobs').length;

	var jobContent = document.querySelectorAll('.experience-container');

	jobContent.forEach(function(val, i) {
		if (_v('.infoparttimejobs .mt_startDate', i)) {
			var st = help.addZero(_v('.infoparttimejobs .mt_startDate', i));
			autoWrite.textWrite(st, _('#expStartTime' + (i + 1)));
		}
		if (_v('.infoparttimejobs .mt_endDate', i)) {
			var et = help.addZero(_v('.infoparttimejobs .mt_endDate', i));
			autoWrite.textWrite(et, _('#expEndTime' + (i + 1)));
		}
		autoWrite.textWrite(_v('.infoparttimejobs .mt_companyName', i), _('[name=\"company\"]', i));
		autoWrite.textWrite(_v('.infoparttimejobs .mt_workList', i), jobContent[i].querySelector('textarea'));
	});


});


