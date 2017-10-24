if ($('#jm_qiuck_cover')) {
	$('#jm_qiuck_cover').fadeIn();
	setTimeout(function() {
		$('#jm_qiuck_cover').fadeOut()
	}, 1000)
}
if ($('input[name=\"realName\"]').length) {
	$('input[name=\"realName\"]').val($('#mt_name').html());
}
if ($('input[name=\"sex\"]').length && $('#mt_sex').html() == '男') {
	$('input[name=\"sex\"]').eq(0).click();
}
if ($('input[name=\"sex\"]').length && $('#mt_sex').html() == '女') {
	$('input[name=\"sex\"]').eq(1).click();
}
if ($('input[name=\"collage\"]').length) {
	$('input[name=\"collage\"]').val($('.infopledu .mt_schoolName').eq(0).html());
}
if ($('input[name=\"profession\"]').length) {
	$('input[name=\"profession\"]').val($('.infopledu .mt_professional').eq(0).html());
}
if ($('select[name=\"degree\"]').length && $('.infopledu .mt_education').eq(0).html()) {
	if ($('.infopledu .mt_education').eq(0).html() == '大学专科') {
		$('select[name=\"degree\"]').get(0).options[2].selected=true;
	}
	if ($('.infopledu .mt_education').eq(0).html() == '博士研究生') {
		$('select[name=\"degree\"]').get(0).options[5].selected=true;
	}
	if ($('.infopledu .mt_education').eq(0).html() == '硕士研究生') {
		$('select[name=\"degree\"]').get(0).options[4].selected=true;
	}
	if ($('.infopledu .mt_education').eq(0).html() == '大学本科-一本' || $('.infopledu .mt_education').eq(0).html() == '大学本科-二本' || $('.infopledu .mt_education').eq(0).html() == '大学本科-三本' || $('.infopledu .mt_education').eq(0).html() == '海外本科') {
		$('select[name=\"degree\"]').get(0).options[3].selected=true;
	}
}
// if($('j-datepicker[name=\"birth\"]').length && $('#mt_birth').html()){
// 	var birth = $('#mt_birth').html().split('-');
// 	$('j-datepicker[name=\"birth\"] span span').val(birth[0]+'年'+birth[1]+'月'+birth[2]+'日');
// } 
if ($('input[name=\"cardNum\"]').length) {
	$('input[name=\"cardNum\"]').val($('#mt_id').html());
}
if ($('input[name=\"phone\"]').length) {
	$('input[name=\"phone\"]').val($('#mt_tel').html());
}
if ($('input[name=\"email\"]').length) {
	$('input[name=\"email\"]').val($('#mt_email').html());
}
if ($('textarea[name=\"internedCompany\"]').length && $('.infoparttimejobs').html()){
    var job = [];
    for (var i = 0; i < $('.infoparttimejobs').length; i++) {
        var award = $('.infoparttimejobs .mt_companyName').eq(i).html()+'\\n'+$('.infoparttimejobs .mt_startDatedot').eq(i).html()+'-'+$('.infoparttimejobs .mt_endDatedot').eq(i).html()+'\\n'+$('.infoparttimejobs .mt_department').eq(i).html()+'\\n'+$('.infoparttimejobs .mt_positionName').eq(i).html()+'\\n'+$('.infoparttimejobs .workContent').eq(i).html()+'\\n';
        job.push(award);    
    } 
    $('textarea[name=\"internedCompany\"]').val(job); 
}
if ($('j-cities[name=\"household\"]').length) {
	var house = $('j-cities[name=\"household\"] select').get(0);
	for (var i = 0; i < house.options.length; i++) {
		if (house.options[i].innerHTML == $('#mt_hukoucitynow').html()) {
			house.options[i].selected=true;
		}
	}
}
if ($('select[name=\"cardType\"]').length && $('#mt_idtype').html()) {
	if ($('#mt_idtype').html() == '身份证') {
		$('select[name=\"cardType\"]').get(0).options[0].selected=true;
	}
	if ($('#mt_idtype').html() == '护照') {
		$('select[name=\"cardType\"]').get(0).options[1].selected=true;
	}
	if ($('#mt_idtype').html() == '军官证') {
		$('select[name=\"cardType\"]').get(0).options[2].selected=true;
	}
	if ($('#mt_idtype').html() == '香港永久居民身份证' || $('#mt_idtype').html() == '香港非永久居民身份证' || $('#mt_idtype').html() == '澳门非永久居民身份证' || $('#mt_idtype').html() == '澳门永久居民身份证') {
		$('select[name=\"cardType\"]').get(0).options[3].selected=true;
	}
	if ($('#mt_idtype').html() == '台胞证') {
		$('select[name=\"cardType\"]').get(0).options[4].selected=true;
	}
}

