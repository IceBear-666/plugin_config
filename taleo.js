$(function() {
	$('.quick-write').click(function() {
		if ($('#jm_qiuck_cover')) {
			$('#jm_qiuck_cover').fadeIn();
			setTimeout(function() {
				$('#jm_qiuck_cover').fadeOut()
			}, 3000);
		};
		
		var help = {
			// 帮助函数
			// 赋值属性
			// extend({a:1}, {b:1, a:2}) -> {a:1, b:1}
			extend: function(o1, o2) {
				for (var i in o2)

					if (typeof o1[i] === 'undefined') {
						o1[i] = o2[i]
					}	

				return o1
			},
			//2013-9-8 -> 2013-09-08
			addZero: function(date) {
				date = date.split('-');
				for (var i = 0; i < date.length; i++) {
					if (date[i] < 10 && date[i].length < 2) {
						date[i] = '0' + date[i];
					}
				}
				return date.join('-');
			},
			//change the word 'abc' to 'Abc'
			toUpper: function(value){
				if (value) {
					var first = value.substr(0,1).toUpperCase();
					first += value.substring(1);  
					return first ;
				}	else{
					return '' ;
				}
			}
		};

		function AutoWrite(obj) {
			help.extend(this, obj);
		}

		help.extend(AutoWrite.prototype, {
			textWrite: function(callback) {
				if (callback) {
					if (this.from && this.to) {
						callback();
					}
				} else {
					if (this.from && this.to) {
						this.to.val(this.from.html());
					}
				}
			},
			valueWrite: function(value) {
				if (this.from.length > 0 && this.to.length > 0) {
					this.to.val(value);
				}

			},
			checkWrite: function(callback) {
				console.log(this.to);
				if (this.from && this.to && this.to != 'undefined') {
					callback();
				}
			},
			selectWrite: function() {

			}
		});
		// email
		var email = new AutoWrite({
			from: $('#mt_emailEn'),
			to: $('input[name=\"et-ef-content-ftf-gp-j_id_id15pc9-page_0-cpi-cfrmsub-frm-dv_cs_candidate_personal_info_EmailAddress\"]'),
		});
		email.textWrite();

		// First Name
		var fname = new AutoWrite({
			from: $('#firstnameEn'),
			to: $('input[name=\"et-ef-content-ftf-gp-j_id_id15pc9-page_0-cpi-cfrmsub-frm-dv_cs_candidate_personal_info_FirstName\"]'),
		});
		fname.textWrite();

		// Last Name
		var lname = new AutoWrite({
			from: $('#lastNameEn'),
			to: $('input[name=\"et-ef-content-ftf-gp-j_id_id15pc9-page_0-cpi-cfrmsub-frm-dv_cs_candidate_personal_info_LastName\"]'),
		});
		lname.textWrite();

		// Address
		var address = new AutoWrite({
			from: $('#mt_addressEn1'),
			to: $('input[name=\"et-ef-content-ftf-gp-j_id_id15pc9-page_0-cpi-cfrmsub-frm-dv_cs_candidate_personal_info_Address\"]'),
		});
		address.textWrite();

		// Address2
		var address2 = new AutoWrite({
			from: $('#mt_addressEn2'),
			to: $('input[name=\"et-ef-content-ftf-gp-j_id_id15pc9-page_0-cpi-cfrmsub-frm-dv_cs_candidate_personal_info_Address2\"]'),
		});
		address2.textWrite();

		// City
		var city = new AutoWrite({
			from: $('#mt_livecityCityEn'),
			to: $('input[name=\"et-ef-content-ftf-gp-j_id_id15pc9-page_0-cpi-cfrmsub-frm-dv_cs_candidate_personal_info_City\"]'),
		});
		city.textWrite();

		// zip
		var zip = new AutoWrite({
			from: $('#mt_zipEn'),
			to: $('input[name=\"et-ef-content-ftf-gp-j_id_id15pc9-page_0-cpi-cfrmsub-frm-dv_cs_candidate_personal_info_ZipCode\"]'),
		});
		zip.textWrite();

		// Secondary Phone
		var secphone = new AutoWrite({
			from: $('#mt_phoneEn'),
			to: $('input[name=\"et-ef-content-ftf-gp-j_id_id15pc9-page_0-cpi-cfrmsub-frm-dv_cs_candidate_personal_info_HomePhone\"]'),
		});
		secphone.textWrite(function(){
			if (secphone.from && secphone.to) {
				secphone.to.val('+86'+secphone.from.html());
			}
		});

		// Primary Phone
		var priphone = new AutoWrite({
			from: $('#mt_gudingtelEn'),
			to: $('input[name=\"et-ef-content-ftf-gp-j_id_id15pc9-page_0-cpi-cfrmsub-frm-dv_cs_candidate_personal_info_MobilePhone\"]'),
		});
		priphone.textWrite();

		var region = new AutoWrite({
			from: $('#mt_livecityProEn'),
			to: $('select[name=\"et-ef-content-ftf-gp-j_id_id15pc9-page_0-cpi-cfrmsub-frm-dv_cs_candidate_personal_info_ResidenceLocation-0\"]'),
		});
		region.checkWrite(function() {
			var eventObj = document.createEvent('HTMLEvents');
			eventObj.initEvent('change', true, false);
			var checkRegin = 0;
			var optObj = document.getElementById('et-ef-content-ftf-gp-j_id_id15pc9-page_0-cpi-cfrmsub-frm-dv_cs_candidate_personal_info_ResidenceLocation-0');
			var opt = region.to.get(0).options;
			var place = region.from.html();
			switch(place){
				case 'other':
				case '':
					opt[0].selected = true;
					break;
				case 'HongKong':
					opt[95].selected = true;
					break;
				case 'Taiwan':
					opt[203].selected = true;
					break;	
				default:
					opt[46].selected = true;
					checkRegin = 1;
					optObj.dispatchEvent(eventObj);
					break;		
			}

			if (checkRegin) {
				setTimeout(function() {
				var province = help.toUpper(region.from.html());
				var optObj2 = document.getElementById('et-ef-content-ftf-gp-j_id_id15pc9-page_0-cpi-cfrmsub-frm-dv_cs_candidate_personal_info_ResidenceLocation-1');
				var opt2 = $('select[name=\"et-ef-content-ftf-gp-j_id_id15pc9-page_0-cpi-cfrmsub-frm-dv_cs_candidate_personal_info_ResidenceLocation-1\"]').get(0).options;
				for (var i = 0; i < opt2.length; i++) {
					if (opt2[i].innerHTML == province) {
						opt2[i].selected = true;
						optObj2.dispatchEvent(eventObj);
						break;
					}
				}
				}, 900);

				setTimeout(function() {
				var city = help.toUpper($('#mt_livecityCityEn').html());
				var optObj3 = document.getElementById('et-ef-content-ftf-gp-j_id_id15pc9-page_0-cpi-cfrmsub-frm-dv_cs_candidate_personal_info_ResidenceLocation-2');
				var opt3 = $('select[name=\"et-ef-content-ftf-gp-j_id_id15pc9-page_0-cpi-cfrmsub-frm-dv_cs_candidate_personal_info_ResidenceLocation-2\"]').get(0).options;
				for (var i = 0; i < opt3.length; i++) {
					if (opt3[i].innerHTML == city) {
						opt3[i].selected = true;
						optObj3.dispatchEvent(eventObj);
						break;
					}
				}
				}, 1800);
				
			}
			
		});

	
		// Education   delete
		var edu = new AutoWrite({
			from: $('.infopleduEn'),
			to: $('.no-border')
		});

		edu.textWrite(function() {
			var length = edu.from.length;
			edu.to.each(function(index, ele) {
				var nextContent = '#et-ef-content-ftf-gp-j_id_id15pc9-page_0-csef-efi-'+index+'-frm';
				if (length < index ) {
					return false;
				} else {
					var name = edu.from.eq(index).find('.mt_schoolNameEn').html();
					var startTime = edu.from.eq(index).find('.mt_startYear').html();
					var endTime = edu.from.eq(index).find('.mt_endYear').html();
					var endTimeYear = edu.from.eq(index).find('.mt_endYearY').html();
					var endTimeMonth = edu.from.eq(index).find('.mt_endYearM').html();
					var major = edu.from.eq(index).find('.mt_majorEn').html();
					var degree = edu.from.eq(index).find('.mt_degreeEn').html();
					var rank = edu.from.eq(index).find('.mt_professionalranking').html();
					
					//$(ele).find(nextContent).find('input[name=\"et-ef-content-ftf-gp-j_id_id15pc9-page_0-csef-efi-'+index+'-frm-dv_cs_education_Institution\"]').val(name);
					//$(ele).find(nextContent).find('input[name=\"et-ef-content-ftf-gp-j_id_id15pc9-page_0-csef-efi-'+index+'-frm-dv_cs_education_Program\"]').val(major);

					var opt1 = $(ele).find(nextContent).find('select[name=\"et-ef-content-ftf-gp-j_id_id15pc9-page_0-csef-efi-'+index+'-frm-dv_cs_education_StudyLevel\"]').get(0).options;
					switch (degree) {
						case '学士':
							opt1[6].selected = true;
							break;
						case '硕士':
							opt1[7].selected = true;
							break;
						case '博士':
							opt1[8].selected = true;
							break;
						case 'MBA':
							opt1[9].selected = true;
							break;
						default:
							opt1[10].selected = true;
							break;
					}

					var opt2 = $(ele).find(nextContent).find('select[name=\"et-ef-content-ftf-gp-j_id_id15pc9-page_0-csef-efi-'+index+'-frm-dv_cs_education_graduationDate.month\"]').get(0).options;
					for (var i = 0; i < opt2.length; i++) {
						if (i == endTimeMonth) {
							opt2[i].selected = true;
							break;
						} else {
							opt2[0].selected = true;
						}
					}

					var opt3 = $(ele).find(nextContent).find('select[name=\"et-ef-content-ftf-gp-j_id_id15pc9-page_0-csef-efi-'+index+'-frm-dv_cs_education_graduationDate.year\"]').get(0).options;
					for (var i = 0; i < opt3.length; i++) {
						if (opt3[i].innerHTML == endTimeYear) {
							opt3[i].selected = true;
							break;
						} else {
							opt3[0].selected = true;
						}
					}
				}
			});
		});


	});
});