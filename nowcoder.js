(function() {
	$('.quick-write').on('click',
	function() {
		$('#jm_qiuck_cover').fadeIn();
		setTimeout(function() {
			$('#jm_qiuck_cover').fadeOut()
		},
		1000);
		
		function formatDate(value,length,type) {
		    if(length == undefined || length == 3){
		    	if(type == null && type == undefined){
		    		type = '-';
		    	}
		        let newDate = value.split('-');
		        for (let i = 0; i < newDate.length; i++) {
		            if (parseInt(newDate[i]) < 10) {
		                newDate[i] = '0' + newDate[i]
		            }
		        }
		        return newDate.join(type)
		    }
	        if(length == 2){
	        	if(type == null && type == undefined){
		    		type = '-';
		    	}
	            let newDate = value.split('-');
	            for (let i = 0; i < newDate.length; i++) {
	                if (parseInt(newDate[i]) < 10) {
	                    newDate[i] = '0' + newDate[i]
	                }
	            }
	            newDate = newDate.slice(0,2);
	            return newDate.join(type);
	        }
	    }
		
		function dispatch(el){      
		   	let evt = document.createEvent('Event');    
		    evt.initEvent('click',true,true);    
		    el.dispatchEvent(evt);  
		}
		
		//基本资料
		if($('.resume-name input') && $('#mt_name').html()){
			$('.resume-name input').val($('#mt_name').html());
		}
		if($('.dropdown-menu').eq(0) && $('#mt_sex').html()){
			if($('#mt_sex').html() == '男'){
				$('.dropdown-menu').eq(0).find('a').eq(0).click();
			}
			if($('#mt_sex').html() == '女'){
				$('.dropdown-menu').eq(0).find('a').eq(1).click();
			}
		}
		if($('.js-birth input') && $('#mt_birthdaydot').html()){
			$('.js-birth input').val(formatDate($('#mt_birthdaydot').html(), 2, '.'));
		}
		if($('.resume-name input') && $('#mt_name').html()){
			$('.resume-name input').val($('#mt_name').html());
		}
		if($('.js-address input') && $('#mt_livecity_city').html()){
			$('.js-address input').val($('#mt_livecity_city').html());
		}
		if($('.dropdown-menu').eq(1) && $('#mt_edu').html()){
			switch($('#mt_edu').html()){
				case '博士研究生':
	                $('.dropdown-menu').eq(1).find('a').eq(1).click();
	                break;
	            case '硕士研究生':
	                $('.dropdown-menu').eq(1).find('a').eq(2).click();
	                break;
	            case '双学士':
	            case '大学本科-一本':
	            case '大学本科-二本':
	            case '大学本科-三本':
	                $('.dropdown-menu').eq(1).find('a').eq(3).click();
	                break;
	            case '大学专科':
	                $('.dropdown-menu').eq(1).find('a').eq(4).click();
	                break;
	            case '中专':
	                $('.dropdown-menu').eq(1).find('a').eq(5).click();
	                break;
	            case '技校/职高':
	                $('.dropdown-menu').eq(1).find('a').eq(5).click();
	                break;
	            case '高中':
	                $('.dropdown-menu').eq(1).find('a').eq(5).click();
	                break;
	            default :
	                break;
			}
		}
		if($('.js-phone input') && $('#mt_tel').html()){
			$('.js-phone input').val($('#mt_tel').html());
		}
		if($('.js-email input') && $('#mt_email').html()){
			$('.js-email input').val($('#mt_email').html());
		}
		
		//教育经历
		if($('h1').text() == '教育经历'){
			let length = $('#edu-list .infopl').length;
			for(let i=0; i<length; i++){
				if($('.js-school input').eq(i) && $('#edu-list .mt_schoolName').eq(i).html()){
					$('.js-school input').eq(i).val($('#edu-list .mt_schoolName').eq(i).html());
				}
				if($('.dropdown-menu').eq(0 + i*2) && $('#edu-list .mt_education').eq(i).html()){
					let edu = $('.dropdown-menu').eq(0 + i*2).find('a');
					switch($('#edu-list .mt_education').eq(i).html()){
						case '博士研究生':
			                edu.eq(1).click();
			                break;
			            case '硕士研究生':
			                edu.eq(2).click();
			                break;
			            case '双学士':
			            case '大学本科-一本':
			            case '大学本科-二本':
			            case '大学本科-三本':
			                edu.eq(3).click();
			                break;
			            case '大学专科':
			                edu.eq(4).click();
			                break;
			            case '中专':
			                edu.eq(5).click();
			                break;
			            case '技校/职高':
			                edu.eq(5).click();
			                break;
			            case '高中':
			                edu.eq(5).click();
			                break;
			            default :
			                break;
					}
				}
				if($('.js-major input').eq(i) && $('#edu-list .mt_professional').eq(i).html()){
					$('.js-major input').eq(i).val($('#edu-list .mt_professional').eq(i).html());
				}
				if($('.dropdown-menu').eq(1 + i*2) && $('#edu-list .mt_professionalranking').eq(i).html()){
					let eduRank = $('.dropdown-menu').eq(1 + i*2).find('a');
					switch($('#edu-list .mt_professionalranking').eq(i).html()){
						case '前5%':
	                        eduRank.eq(2).click();
	                        break;
	                    case '前10%':
	                    case '前20%':
	                        eduRank.eq(3).click();
	                        break;
	                    case '前30%':
	                    case '前40%':
	                    case '前50%':
	                        eduRank.eq(4).click();
	                        break;
	                    case '前60%':
	                    case '前70%':
	                    case '前80%':
	                        eduRank.eq(5).click();
	                        break;
						default:
	                        eduRank.eq(0).click();
	                        break
					}
				}
				if($('.js-time').eq(i).find('input').eq(0) && $('#edu-list .mt_startYear').html()){
					$('.js-time').eq(i).find('input').eq(0).val(formatDate($('#edu-list .mt_startYear').eq(i).html(), 2, '.'));
				}
				if($('.js-time').eq(i).find('input').eq(1) && $('#edu-list .mt_endYear').html()){
					$('.js-time').eq(i).find('input').eq(1).val(formatDate($('#edu-list .mt_endYear').eq(i).html(), 2, '.'));
				}
			}
		}
		
		//校内经历
		if($('h1').html() == '校内经历'){
			let length = $('#schclub-list .infopl').length;
			for(let i=0; i<length; i++){
				if($('.js-organization input').eq(i) && $('#schclub-list .mt_schClubName').eq(i).html()){
					$('.js-organization input').eq(i).val($('#schclub-list .mt_schClubName').eq(i).html());
				}
				if($('.js-position input').eq(i) && $('#schclub-list .mt_positionName').eq(i).html()){
					$('.js-position input').eq(i).val($('#schclub-list .mt_positionName').eq(i).html());
				}
				if($('.js-time').eq(i).find('input').eq(0) && $('#schclub-list .mt_startDate').html()){
					$('.js-time').eq(i).find('input').eq(0).val(formatDate($('#schclub-list .mt_startDate').eq(i).html(), 2, '.'));
				}
				if($('.js-time').eq(i).find('input').eq(1) && $('#schclub-list .mt_endDate').html()){
					$('.js-time').eq(i).find('input').eq(1).val(formatDate($('#schclub-list .mt_endDate').eq(i).html(), 2, '.'));
				}
				if($('.js-description textarea').eq(i) && $('#schclub-list .mt_schClubList').eq(i).html()){
					$('.js-description textarea').eq(i).val($('#schclub-list .mt_schClubList').eq(i).html());
				}
			}
		}
		
		//工作经历
		if($('h1').html() == '工作经历'){
			let length = $('#exp-list .infopl').length;
			for(let i=0; i<length; i++){
				if($('.js-company input').eq(i) && $('#exp-list .mt_companyName').eq(i).html()){
					$('.js-company input').eq(i).val($('#exp-list .mt_companyName').eq(i).html());
				}
				if($('.js-job input').eq(i) && $('#exp-list .mt_positionName').eq(i).html()){
					$('.js-job input').eq(i).val($('#exp-list .mt_positionName').eq(i).html());
				}
				if($('.js-time').eq(i).find('input').eq(0) && $('#exp-list .mt_startDate').html()){
					$('.js-time').eq(i).find('input').eq(0).val(formatDate($('#exp-list .mt_startDate').eq(i).html(), 2, '.'));
				}
				if($('.js-time').eq(i).find('input').eq(1) && $('#exp-list .mt_endDate').html()){
					$('.js-time').eq(i).find('input').eq(1).val(formatDate($('#exp-list .mt_endDate').eq(i).html(), 2, '.'));
				}
				if($('.js-description textarea').eq(i) && $('#exp-list .mt_workList').eq(i).html()){
					$('.js-description textarea').eq(i).val($('#exp-list .mt_workList').eq(i).html());
				}
			}
		}
		
		//项目经历
		if($('h1').html() == '项目经历'){
			let length = $('#pro-list .infopl').length;
			for(let i=0; i<length; i++){
				if($('.js-name input').eq(i) && $('#pro-list .mt_projectName').eq(i).html()){
					$('.js-name input').eq(i).val($('#pro-list .mt_projectName').eq(i).html());
				}
				if($('.js-position input').eq(i) && $('#pro-list .mt_positionName').eq(i).html()){
					$('.js-position input').eq(i).val($('#pro-list .mt_positionName').eq(i).html());
				}
				if($('.js-time').eq(i).find('input').eq(0) && $('#pro-list .mt_prostarttime').html()){
					$('.js-time').eq(i).find('input').eq(0).val(formatDate($('#pro-list .mt_prostarttime').eq(i).html(), 2, '.'));
				}
				if($('.js-time').eq(i).find('input').eq(1) && $('#pro-list .mt_proendtime').html()){
					$('.js-time').eq(i).find('input').eq(1).val(formatDate($('#pro-list .mt_proendtime').eq(i).html(), 2, '.'));
				}
				if($('.js-description textarea').eq(i) && $('#pro-list .mt_proList').eq(i).html()){
					$('.js-description textarea').eq(i).val($('#pro-list .mt_proList').eq(i).html());
				}
			}
		}
		
		//获奖情况
		if($('h1').html() == '获奖情况'){
			let length = $('#schawards-list .infopl').length;
			for(let i=0; i<length; i++){
				if($('.js-name input').eq(i) && $('#schawards-list .mt_awardsName').eq(i).html()){
					$('.js-name input').eq(i).val($('#schawards-list .mt_awardsName').eq(i).html());
				}
				if($('.js-start').eq(i).find('input').eq(0) && $('#schawards-list .mt_awardsDate').html()){
					$('.js-start').eq(i).find('input').eq(0).val(formatDate($('#schawards-list .mt_awardsDate').eq(i).html(), 2, '.'));
				}
			}
		}
		
		//自我评价
		if($('h1').html() == '自我评价'){
			if($('.control-group textarea') && $('#mt_selfIntro').html()){
				$('.control-group textarea').val($('#mt_selfIntro').html());
			}
		}
	})
})()