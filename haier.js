(function() {
	KISSY.one('.quick-write').on('click', function() {
		if ($('#jm_qiuck_cover')) {
			$('#jm_qiuck_cover').fadeIn();
			setTimeout(function() {
				$('#jm_qiuck_cover').fadeOut()
			}, 1000);
		}
		if ($('input[name=\"realname\"]')) {
			$('input[name=\"realname\"]').val($('#mt_name').html())
		}
		if ($('input[name=\"sex\"]').eq(0).next().find('i').length && $('#mt_sex').html() == '男') {
			$('input[name=\"sex\"]').eq(0).next().find('i').trigger('click');
		}
		if ($('input[name=\"sex\"]').eq(1).next().find('i').length && $('#mt_sex').html() == '女') {
			$('input[name=\"sex\"]').eq(1).next().find('i').trigger('click');
		}
		if ($('input[name=\"birthday\"]')) {
			$('input[name=\"birthday\"]').val($('#mt_birth').html())
		}
		if ($('input[name=\"mobile\"]')) {
			$('input[name=\"mobile\"]').val($('#mt_tel').html())
		}
		if ($('input[name=\"idcard\"]') && $('#mt_id').html()) {
			$('input[name=\"idcard\"]').val($('#mt_id').html())
		}
		if ($('input[name=\"email\"]')) {
			$('input[name=\"email\"]').val($('#mt_email').html())
		}
		if ($('input[name=\"nation\"]')) {
			$('input[name=\"nation\"]').val($('#mt_national').html())
		}
		if ($('select[name=\"top_location_school_address\"]').length && $('#mt_nativeplace').html()) {
			let length = $('select[name=\"top_location_school_address\"]').next().find('dd').length;
			for(var i=0; i<length; i++){
				if($('select[name=\"top_location_school_address\"]').next().find('dd').eq(i).html().substring(0,2) == $('#mt_nativeplace').html() + ''){
					$('select[name=\"top_location_school_address\"]').next().find('dd').eq(i).trigger('click');
				}
			}
		}
		window.setTimeout(function(){
			if ($('select[name=\"sub_location_school_address\"]').length && $('#mt_native_city').html()) {
				let length = $('select[name=\"sub_location_school_address\"]').next().find('dd').length;
				for(var i=0; i<length; i++){
					if($('select[name=\"sub_location_school_address\"]').next().find('dd').eq(i).html().substring(0,2) == $('#mt_native_city').html() + ''){
						$('select[name=\"sub_location_school_address\"]').next().find('dd').eq(i).trigger('click');
					}
				}
			}
		},200);

		if ($('input[name=\"bodyheight\"]').length) {
			$('input[name=\"bodyheight\"]').val($('#mt_height').html())
		}
		if ($('input[name=\"bodyweight\"]').length) {
			$('input[name=\"bodyweight\"]').val($('#mt_weight').html())
		}
		if ($('select[name=\"select_english_grade\"]').next().find('dd').length && $('.infoEnglishSkill').find('.mt_skillEngLevel').last().html()) {
			let skillEngLevel = $('.infoEnglishSkill .mt_skillEngLevel').last().html();
			let mt_skillEngSorce = $('.infoEnglishSkill .mt_skillEngSorce').last().html();
			let english_grade = $('select[name=\"select_english_grade\"]').next().find('dd');
			let endlish_score = $('input[name=\"english_score\"]');
			if (skillEngLevel == '大学英语四级') {
				english_grade.eq(1).trigger('click');
				endlish_score.val(mt_skillEngSorce);
			} else if (skillEngLevel == '大学英语六级') {
				english_grade.eq(2).trigger('click');
				endlish_score.val(mt_skillEngSorce);
			} else if (skillEngLevel == '专业四级') {
				english_grade.eq(3).trigger('click');
				endlish_score.val(mt_skillEngSorce);
			} else if (skillEngLevel == '专业八级') {
				english_grade.eq(4).trigger('click');
				endlish_score.val(mt_skillEngSorce);
			}
		}
		if($('select[name=\"political\"]') && $('#mt_polistatus').html()){
			$('select[name=\"political\"]').next().find('input').val($('#mt_polistatus').html());
		}
		if($('textarea[name=\"introduction\"]') && $('#mt_selfIntro').html()){
			$('textarea[name=\"introduction\"]').val($('#mt_selfIntro').html());
		}
		
		//教育经历
		if($('#jyjl')){
			let length = $('#edu-list').find('.mt_schoolName').length;
			let hadSave = $('#jyjl').children().length - 2;
			let i = length - hadSave -1;
			if ($('#jyjl input[name=\"school_name\"]').length && $('#edu-list .mt_schoolName').eq(i).html()) {
				$('#jyjl input[name=\"school_name\"]').val($('#edu-list .mt_schoolName').eq(i).html())
			}
			if ($('#jyjl select[name=\"select_education\"]').next().find('input').length  && $('#edu-list .mt_education').eq(i).html()) {
				let education = $('#jyjl select[name=\"select_education\"]').next().find('dd');
				switch($('#edu-list .mt_education').eq(i).html()){
					case '大学专科':
		                education.eq(4).trigger('click');
		                break;
		            case '海外本科':
		            case '大学本科-一本':
		            case '大学本科-二本':
		            case '大学本科-三本':
		                education.eq(5).trigger('click');
		                break;
		            case 'MPA':
		            	education.eq(6).trigger('click');
		            	break;
		            case 'MBA':
		            	education.eq(7).trigger('click');
		            	break;
		            case '硕士研究生':
		                education.eq(6).trigger('click');
		            	break;
		            case '博士研究生':
		                education.eq(9).trigger('click');
		            	break;
				}
			}
			if ($('#jyjl input[name=\"start_time\"]').length && $('#edu-list .mt_startYear').eq(i).html()) {
				$('#jyjl input[name=\"start_time\"]').val($('#edu-list .mt_startYear').eq(i).html())
			}
			if ($('#jyjl input[name=\"end_time\"]').length && $('#edu-list .mt_endYear').eq(i).html()) {
				$('#jyjl input[name=\"end_time\"]').val($('#edu-list .mt_endYear').eq(i).html())
			}
			if ($('#jyjl input[name=\"major\"]').length && $('#edu-list .mt_major').eq(i).html()) {
				$('#jyjl input[name=\"major\"]').val($('#edu-list .mt_major').eq(i).html())
			}
		}

		//获奖经历
		if($('#hjjl')){
			let length = $('#schawards-list').find('.mt_awardsName').length;
			let hadSave = $('#hjjl').children().length - 2;
			let i = length - hadSave -1;
			if ($('#hjjl input[name=\"awardtime\"]').length && $('#schawards-list .mt_awardsDate').eq(i).html()) {
				$('#hjjl input[name=\"awardtime\"]').val($('#schawards-list .mt_awardsDate').eq(i).html())
			}
			if ($('#hjjll select[name=\"awardlevel\"]').next().find('dd').length  && $('#schawards-list .mt_awardsType').eq(i).html()) {
				let awardlevel = $('#hjjl select[name=\"awardlevel\"]').next().find('dd');
				switch($('#schawards-list .mt_awardsType').eq(i).html()){
					case '国家级':
		                awardlevel.eq(0).trigger('click');
		                break;
		            case '省市级':
		             	awardlevel.eq(1).trigger('click');
		                break;
		            case '学校级':
		            	awardlevel.eq(3).trigger('click');
		                break;
		          	default:break;
				}
			}
			if ($('#hjjl input[name=\"awardname\"]').length && $('#schawards-list .mt_awardsName').eq(i).html()) {
				$('#hjjl input[name=\"awardname\"]').val($('#schawards-list .mt_awardsName').eq(i).html())
			}
		}
		
		//社团经历
		if($('#xsgz')){
			let length = $('#schclub-list').find('.mt_schClubName').length;
			let hadSave = $('#xsgz').children().length - 2;
			let i = length - hadSave -1;
			if ($('#xsgz input[name=\"start_time\"]').length && $('#schclub-list .mt_startDate').eq(i).html()) {
				$('#xsgz input[name=\"start_time\"]').val($('#schclub-list .mt_startDate').eq(i).html())
			}
			if ($('#xsgz input[name=\"end_time\"]').length && $('#schclub-list .mt_endDate').eq(i).html()) {
				$('#xsgz input[name=\"end_time\"]').val($('#schclub-list .mt_endDate').eq(i).html())
			}
			if ($('#xsgz input[name=\"company_name\"]').length && $('#schclub-list .mt_workDes').eq(i).html()) {
				$('#xsgz input[name=\"company_name\"]').val($('#schclub-list .mt_workDes').eq(i).html())
			}
			if ($('#xsgz textarea[name=\"experience\"]').length && $('#schclub-list .mt_schClubList').eq(i).html()) {
				$('#xsgz textarea[name=\"experience\"]').val($('#schclub-list .mt_schClubList').eq(i).html())
			}
		}
		
		//项目经历
		if($('#sxjl')){
			let length = $('#pro-list').find('.mt_projectName').length;
			let hadSave = $('#sxjl').children().length - 2;
			let i = length - hadSave -1;
			if ($('#sxjl input[name=\"start_time\"]').length && $('#pro-list .mt_prostarttime').eq(i).html()) {
				$('#sxjl input[name=\"start_time\"]').val($('#pro-list .mt_prostarttime').eq(i).html())
			}
			if ($('#sxjl input[name=\"end_time\"]').length && $('#pro-list .mt_proendtime').eq(i).html()) {
				$('#sxjl input[name=\"end_time\"]').val($('#pro-list .mt_proendtime').eq(i).html())
			}
			if ($('#sxjl input[name=\"company_name\"]').length && $('#pro-list .mt_projectName').eq(i).html()) {
				$('#sxjl input[name=\"company_name\"]').val($('#pro-list .mt_projectName').eq(i).html())
			}
			if ($('#sxjl textarea[name=\"experience\"]').length && $('#pro-list .mt_proList').eq(i).html()) {
				$('#sxjl textarea[name=\"experience\"]').val($('#pro-list .mt_proList').eq(i).html())
			}
		}
		//外语能力
		if($('#wynl')){
			let length = $('.mt_skillOtherLang').length;
			let hadSave = $('#wynl').children().length - 2;
			let i = length - hadSave -1;
			if ($('#wynl select[name=\"yynl-yuzhong\"]') && $('.mt_skillOtherLang').eq(i).html()) {
				let skillOtherLang = $('#wynl select[name=\"yynl-yuzhong\"]').next().find('dd');
				switch($('.mt_skillOtherLang').eq(i).html()){
					case '日语': skillOtherLang.eq(2).trigger('click');break;
					case '法语': skillOtherLang.eq(1).trigger('click');break;
					case '德语': skillOtherLang.eq(4).trigger('click');break;
					case '俄语': skillOtherLang.eq(5).trigger('click');break;
					case '韩语': skillOtherLang.eq(3).trigger('click');break;
					case '西班牙语': skillOtherLang.eq(5).trigger('click');break;
					case '葡萄牙语': skillOtherLang.eq(7).trigger('click');break;
					case '阿拉伯语': skillOtherLang.eq(8).trigger('click');break;
					case '粤语': skillOtherLang.eq(10).trigger('click');break;
					default : break;
				}
			}
			if ($('#wynl select[name=\"yynl-shuiping\"]') && $('.mt_skillGraspLevel').eq(i).html()) {
				let skillGraspLevel = $('#wynl select[name=\"yynl-shuiping\"]').next().find('dd');
				switch($('.mt_skillGraspLevel').eq(i).html()){
					case '精通': skillGraspLevel.eq(0).trigger('click');break;
					case '熟练': skillGraspLevel.eq(1).trigger('click');break;
					case '一般': skillGraspLevel.eq(2).trigger('click');break;
					case '了解': skillGraspLevel.eq(3).trigger('click');break;
					default : break;
				}
			}
		}
		
		//能力描述
		if($('#nlms')){
			if ($('#nlms textarea[name=\"skills\"]').length && $('#mt_hobbies').html()) {
				$('#nlms textarea[name=\"skills\"]').val($('#mt_hobbies').html())
			}
			if ($('#nlms textarea[name=\"additional\"]').length && $('#mt_skill').html()) {
				$('#nlms textarea[name=\"additional\"]').val($('#mt_skill').html())
			}
		}
	});
})()