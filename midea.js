(function () {
    KISSY.one('.quick-write').on('click', function () {
        if ($('#jm_qiuck_cover')) {
            $('#jm_qiuck_cover').fadeIn();
            setTimeout(function () {
                $('#jm_qiuck_cover').fadeOut()
            }, 1000)
        }
        if($('#expect-city-box') && $('#mt_expectcity_city').html()){
        	let length = $('#expect-city-box').find('li').length;
        	for(let i=0; i<length; i++){
        		if($('#expect-city-box').find('li').eq(i).html() == $('#mt_expectcity_city').html() + '市'){
        			$('#expect-city-box').find('li').eq(i).trigger('click');
        		}
        	}
        }
        //个人信息
        if($('input[name=\"personalName\"]') && $('#mt_name').html()){
        	$('input[name=\"personalName\"]').val($('#mt_name').html());
        }
        if($('input[name=\"idCard\"]') && $('#mt_id').html()){
        	$('input[name=\"idCard\"]').val($('#mt_id').html());
        }
        if($('#isGril') && $('#mt_sex').html() == '女'){
        	$('#isGril').trigger('click')
        }
        if($('#isMan') && $('#mt_sex').html() == '男'){
        	$('#isMan').trigger('click')
        }
        if($('input[name=\"email\"]') && $('#mt_email').html()){
        	$('input[name=\"email\"]').val($('#mt_email').html());
        }
       	if($('#birth-year') && $('#mt_biryear').html()){
        	let length = $('#birth-year').find('li').length;
        	for(let i=0; i<length; i++){
        		if($('#birth-year').find('li').eq(i).html() == $('#mt_biryear').html()){
        			$('#birth-year').find('li').eq(i).trigger('click');
        		}
        	}
        }
       	if($('#birth-mon') && $('#mt_birmonth').html()){
        	let length = $('#birth-mon').find('li').length;
        	for(let i=0; i<length; i++){
        		if($('#birth-mon').find('li').eq(i).html() == $('#mt_birmonth').html()){
        			$('#birth-mon').find('li').eq(i).trigger('click');
        		}
        	}
        }
       	if($('#birth-day') && $('#mt_birday').html()){
        	let length = $('#birth-day').find('li').length;
        	for(let i=0; i<length; i++){
        		if($('#birth-day').find('li').eq(i).html() == $('#mt_birday').html()){
        			$('#birth-day').find('li').eq(i).trigger('click');
        		}
        	}
        }
       	if($('#nativePlace') && $('#mt_nativeplace').html()){
        	let length = $('#nativePlace').find('li').length;
        	for(let i=0; i<length; i++){
        		if($('#nativePlace').find('li').eq(i).html() == $('#mt_nativeplace').html()){
        			$('#nativePlace').find('li').eq(i).trigger('click');
        		}
        	}
        }
       	if($('#graduate-year') && $('#edu-list .mt_endYearY').last().html()){
        	let length = $('#graduate-year').find('li').length;
        	for(let i=0; i<length; i++){
        		if($('#graduate-year').find('li').eq(i).html() == $('#edu-list .mt_endYearY').last().html()){
        			$('#graduate-year').find('li').eq(i).trigger('click');
        		}
        	}
        }
       	if($('#graduate-mon') && $('#edu-list .mt_endYearM').last().html()){
        	let length = $('#graduate-mon').find('li').length;
        	for(let i=0; i<length; i++){
        		if($('#graduate-mon').find('li').eq(i).html() == $('#edu-list .mt_endYearM').last().html()){
        			$('#graduate-mon').find('li').eq(i).trigger('click');
        		}
        	}
        }
        if($('input[name=\"phone\"]') && $('#mt_tel').html()){
        	$('input[name=\"phone\"]').val($('#mt_tel').html());
        }
		if($('input[name=\"linkman\"]') && $('#mt_jjlxr').html()){
        	$('input[name=\"linkman\"]').val($('#mt_jjlxr').html());
        }  
        if($('input[name=\"linkmanMobile\"]') && $('#mt_jjlxrtel').html()){
        	$('input[name=\"linkmanMobile\"]').val($('#mt_jjlxrtel').html());
        }
        if($('#english-type') && $('#skill-list .mt_skillEngLevel').last().html()){
    		switch($('#skill-list .mt_skillEngLevel').last().html()){
    			case '大学英语四级':
                    $('#english-type').find('li').eq(1).trigger('click');
                    break;
                case '大学英语六级':
                    $('#english-type').find('li').eq(2).trigger('click');
                    break;
                case '专业四级':
                    $('#english-type').find('li').eq(3).trigger('click');
                    break;
                case '专业八级':
                   $('#english-type').find('li').eq(4).trigger('click');
                    break;
    		}
        	
        }
        if($('#otherForeign') && $('.mt_skillOtherLang').html()){
        	$('#otherForeign').val($('.mt_skillOtherLang').html());
        }
        
        //教育背景
        if($('#eduBgMsg')){
        	if($('#education-background01') && $('#edu-list .infopledu')){
	        	switch($('#edu-list .infopledu').last().find('.mt_education').html()){
	        		case '大学专科':
		                $('#education-background01').find('li').eq(1).trigger('click');
		                break;
		            case '海外本科':
		            case '大学本科-一本':
		            case '大学本科-二本':
		            case '大学本科-三本':
		                $('#education-background01').find('li').eq(2).trigger('click');
		                break;
		            case 'MPA':
		            case 'MBA':
		            case '硕士研究生':
		                $('#education-background01').find('li').eq(3).trigger('click');
		                break;
		            case '博士研究生':
		                $('#education-background01').find('li').eq(4).trigger('click');
		                break;
	        	}
	        }
	        if($('#education-bg-graduate-year01') && $('#edu-list .infopledu')){
	        	let length = $('#education-bg-graduate-year01').find('li').length;
	        	for(let i=0; i<length; i++){
	        		if($('#education-bg-graduate-year01').find('li').eq(i).html() == $('#edu-list .infopledu').last().find('.mt_startYearY').html()){
	        			$('#education-bg-graduate-year01').find('li').eq(i).trigger('click');
	        		}
	        	}
	        }
	        if($('#education-bg-graduate-mon01') && $('#edu-list .infopledu')){
	        	let length = $('#education-bg-graduate-mon01').find('li').length;
	        	for(let i=0; i<length; i++){
	        		if($('#education-bg-graduate-mon01').find('li').eq(i).html() == $('#edu-list .infopledu').last().find('.mt_startYearM').html()){
	        			$('#education-bg-graduate-mon01').find('li').eq(i).trigger('click');
	        		}
	        	}
	        }
	        if($('#school01') && $('#edu-list .infopledu').last().find('.mt_schoolName').html()){
	        	$('#school01').val($('#edu-list .infopledu').last().find('.mt_schoolName').html());
	        }
	        if($('#major01') && $('#edu-list .infopledu').last().find('.mt_professional').html()){
	        	$('#major01').val($('#edu-list .infopledu').last().find('.mt_professional').html());
	        }
	        
	        if($('#education-background02') && $('#edu-list .infopledu')){
	        	switch($('#edu-list .infopledu').last().prev().find('.mt_education').html()){
	        		case '大学专科':
		                $('#education-background02').find('li').eq(1).trigger('click');
		                break;
		            case '海外本科':
		            case '大学本科-一本':
		            case '大学本科-二本':
		            case '大学本科-三本':
		                $('#education-background02').find('li').eq(2).trigger('click');
		                break;
		            case 'MPA':
		            case 'MBA':
		            case '硕士研究生':
		                $('#education-background02').find('li').eq(3).trigger('click');
		                break;
		            case '博士研究生':
		                $('#education-background02').find('li').eq(4).trigger('click');
		                break;
	        	}
	        }
	        if($('#education-bg-graduate-year02') && $('#edu-list .infopledu')){
	        	let length = $('#education-bg-graduate-year02').find('li').length;
	        	for(let i=0; i<length; i++){
	        		if($('#education-bg-graduate-year02').find('li').eq(i).html() == $('#edu-list .infopledu').last().prev().find('.mt_startYearY').html()){
	        			$('#education-bg-graduate-year02').find('li').eq(i).trigger('click');
	        		}
	        	}
	        }
	        if($('#education-bg-graduate-mon02') && $('#edu-list .infopledu')){
	        	let length = $('#education-bg-graduate-mon02').find('li').length;
	        	for(let i=0; i<length; i++){
	        		if($('#education-bg-graduate-mon02').find('li').eq(i).html() == $('#edu-list .infopledu').last().prev().find('.mt_startYearM').html()){
	        			$('#education-bg-graduate-mon02').find('li').eq(i).trigger('click');
	        		}
	        	}
	        }
	        if($('#school2') && $('#edu-list .infopledu').last().prev().find('.mt_schoolName').html()){
	        	$('#school2').val($('#edu-list .infopledu').last().prev().find('.mt_schoolName').html());
	        }
	        if($('#major2') && $('#edu-list .infopledu').last().prev().find('.mt_professional').html()){
	        	$('#major2').val($('#edu-list .infopledu').last().prev().find('.mt_professional').html());
	        }
        }
        
       
        
    });
})()