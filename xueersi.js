(function(){
	$('.quick-write').on('click',function(){
		if($('input[name=\"realName\"]') && $('#mt_name').html()){
			$('input[name=\"realName\"]').val($('#mt_name').html());
		}
		if($('input[name=\"sex\"]') && $('#mt_sex').html()){
			if($('#mt_sex').html() == '男'){
				$('input[name=\"sex\"]').eq(0).trigger('click');
			}
			if($('#mt_sex').html() == '女'){
				$('input[name=\"sex\"]').eq(1).trigger('click');
			}
		}
		if($('input[name=\"email\"]') && $('#mt_email').html()){
			$('input[name=\"email\"]').val($('#mt_email').html());
		}
		if($('input[name=\"age\"]') && $('#mt_biryear').html()){
			$('input[name=\"age\"]').val(new Date().getFullYear() - $('#mt_biryear').html());
		}	
		if($('input[name=\"idCard\"]') && $('#mt_id').html()){
			$('input[name=\"idCard\"]').val($('#mt_id').html());	
		}
		if($('input[name=\"emConPersonName\"]') && $('#mt_jjlxr').html()){
			$('input[name=\"emConPersonName\"]').val($('#mt_jjlxr').html());
		}
		if($('input[name=\"emConPersonPhone\"]') && $('#mt_jjlxrtel').html()){
			$('input[name=\"emConPersonPhone\"]').val($('#mt_jjlxrtel').html());
		}
		if($('input[name=\"wxNum\"]') && $('#mt_wxname').html()){
			$('input[name=\"wxNum\"]').val($('#mt_wxname').html());
		}
		if($('input[name=\"qqNum\"]') && $('#mt_qqname').html()){
			$('input[name=\"qqNum\"]').val($('#mt_qqname').html());
		}
		if($('textarea[name=\"hobby\"]') && $('#mt_skill').html()){
			$('textarea[name=\"hobby\"]').val($('#mt_skill').html());
		}
		if($('input[name=\"englishLevelSpecName\"]').eq(0) && $('.mt_skillEngLevel').eq(0).html()){
			$('input[name=\"englishLevelSpecName\"]').trigger('click');
		}
		
		
		
		var $social = $('.contant_social');
		var $exp_list = $('#exp-list');
		if($social && $('#exp-list').find('.mt_companyName').html()){
			for(var i=0; i<$('#exp-list').find('.mt_companyName').length; i++){
				$social.find('input[name=\"startDate\"]').val($exp_list.find('.mt_startDate').html());
				$social.find('input[name=\"endDate\"]').val($exp_list.find('.mt_endDate').html());
				$social.find('input[name=\"typeName\"]').val($exp_list.find('.mt_companyName').eq(i).html());
				$social.find('input[name=\"actPart\"]').val($exp_list.find('.mt_positionName').eq(i).html());
				$social.find('textarea[name=\"account\"]').val($exp_list.find('.workContent').eq(i).html());
			}
		}
		var $school = $('.contant_school');
		var $schclub_list = $('#schclub-list');
		if($school && $('#schclub-list').find('.mt_schClubName').html()){
			for(var i=0; i<$('#schclub-list').find('.mt_schClubName').length; i++){
				$school.find('input[name=\"startDate\"]').val($schclub_list.find('.mt_startDate').html());
				$school.find('input[name=\"endDate\"]').val($schclub_list.find('.mt_endDate').html());
				$school.find('input[name=\"typeName\"]').val($schclub_list.find('.mt_schClubName').eq(i).html());
				$school.find('input[name=\"actPart\"]').val($schclub_list.find('.mt_positionName').eq(i).html());
				$school.find('textarea[name=\"account\"]').val($schclub_list.find('.mt_schClubList').eq(i).html());
			}
		}
		
		if($('input[name=\"provinceCityBo\"]') && $('#mt_nativeplace').html()){
			var provinceCityBo = $('#mt_nativeplace').html() + ' ' + $('#mt_native_city').html() + '市';
			$('input[name=\"provinceCityBo\"]').val(provinceCityBo);
			
		}
		
		if($('input[name=\"educationLevelName\"]') && $('#edu-list').find('.mt_education').eq(0).html()){
			var length = $('#edu-list').find('.mt_education').length;
			for(var i=0; i<length; i++){
				if(i>0){
					$('.contant_education').find('.education_con').next().find('a').trigger('click');
				}
				switch($('#edu-list').find('.mt_education').eq(i).html()){
					case '大学本科-一本': 
						$('input[name=\"educationLevelName\"]').eq(i).val('本科');
						$('input[name=\"universityName\"]').eq(i).val($('#edu-list').find('.mt_schoolName').eq(i).html());
						$('input[name=\"major\"]').eq(i).val($('#edu-list').find('.mt_academy').eq(i).html());
						$('input[name=\"graduationDate\"]').eq(i).val($('#edu-list').find('.mt_endYear').eq(i).html());
						break;
					case '大学本科-二本': 
						$('input[name=\"educationLevelName\"]').eq(i).val('本科');
						$('input[name=\"universityName\"]').eq(i).val($('#edu-list').find('.mt_schoolName').eq(i).html());
						$('input[name=\"major\"]').eq(i).val($('#edu-list').find('.mt_academy').eq(i).html());
						$('input[name=\"graduationDate\"]').eq(i).val($('#edu-list').find('.mt_endYear').eq(i).html());
						break;
					case '大学本科-三本': 
						$('input[name=\"educationLevelName\"]').eq(i).val('专科');
						$('input[name=\"universityName\"]').eq(i).val($('#edu-list').find('.mt_schoolName').eq(i).html());
						$('input[name=\"major\"]').eq(i).val($('#edu-list').find('.mt_academy').eq(i).html());
						$('input[name=\"graduationDate\"]').eq(i).val($('#edu-list').find('.mt_endYear').eq(i).html());
						break;
					case '大学专科': 
						$('input[name=\"educationLevelName\"]').eq(i).val('专科');
						$('input[name=\"universityName\"]').eq(i).val($('#edu-list').find('.mt_schoolName').eq(i).html());
						$('input[name=\"major\"]').eq(i).val($('#edu-list').find('.mt_academy').eq(i).html());
						$('input[name=\"graduationDate\"]').eq(i).val($('#edu-list').find('.mt_endYear').eq(i).html());
						break;
					case '硕士研究生': 
						$('input[name=\"educationLevelName\"]').eq(i).val('硕士');
						$('input[name=\"universityName\"]').eq(i).val($('#edu-list').find('.mt_schoolName').eq(i).html());
						$('input[name=\"major\"]').eq(i).val($('#edu-list').find('.mt_academy').eq(i).html());
						$('input[name=\"graduationDate\"]').eq(i).val($('#edu-list').find('.mt_endYear').eq(i).html());
						break;
					case '博士研究生': 
						$('input[name=\"educationLevelName\"]').eq(i).val('博士');
						$('input[name=\"universityName\"]').eq(i).val($('#edu-list').find('.mt_schoolName').eq(i).html());
						$('input[name=\"major\"]').eq(i).val($('#edu-list').find('.mt_academy').eq(i).html());
						$('input[name=\"graduationDate\"]').eq(i).val($('#edu-list').find('.mt_endYear').eq(i).html());
						break;
					default: 
						$('input[name=\"educationLevelName\"]').eq(i).val('本科');
						$('input[name=\"universityName\"]').eq(i).val($('#edu-list').find('.mt_schoolName').eq(i).html());
						$('input[name=\"major\"]').eq(i).val($('#edu-list').find('.mt_academy').eq(i).html());
						$('input[name=\"graduationDate\"]').eq(i).val($('#edu-list').find('.mt_endYear').eq(i).html());
						break;
				}
			}
			
		}
		
		var length = $('.mt_skillEngLevel').length;
		for(let i=0; i<length; i++){
			if($('input[name=\"englishLevelSpecName\"]').eq(i) && $('.mt_skillEngLevel').eq(i).html()){
					if(i>0){
						$('.contant_english').find('.add_more').children().trigger('click');
					}
					if($('.mt_skillEngLevel').eq(i).html() == '大学英语四级'){
						$('input[name=\"englishLevelSpecName\"]').eq(i).val('大学英语4级(CET-4)');
						$('input[name=\"englishLevelSpecName\"]').eq(i).parent().parent().next().find('input[name=\"score\"]').val($('.mt_skillEngSorce').eq(i).html());
					}
					if($('.mt_skillEngLevel').eq(i).html() == '大学英语六级'){
						$('input[name=\"englishLevelSpecName\"]').eq(i).val('大学英语6级(CET-6)');
						$('input[name=\"englishLevelSpecName\"]').eq(i).parent().parent().next().find('input[name=\"score\"]').val($('.mt_skillEngSorce').eq(i).html());
					}
					if($('.mt_skillEngLevel').eq(i).html() == '专业四级'){
						$('input[name=\"englishLevelSpecName\"]').eq(i).val('英语专业四级(TEM-4)');
						$('input[name=\"englishLevelSpecName\"]').eq(i).parent().parent().next().find('input[name=\"score\"]').val($('.mt_skillEngSorce').eq(i).html());
					}
					if($('.mt_skillEngLevel').eq(i).html() == '专业八级'){
						$('input[name=\"englishLevelSpecName\"]').eq(i).val('英语专业八级(TEM-8)')
						$('input[name=\"englishLevelSpecName\"]').eq(i).parent().parent().next().find('input[name=\"score\"]').val($('.mt_skillEngSorce').eq(i).html());
					}
			}
		}
		
		
		
	})
})()
