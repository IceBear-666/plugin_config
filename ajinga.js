(function() {
	$('.quick-write').on('click',
	function() {
		if ($('#jm_qiuck_cover')) {
			$('#jm_qiuck_cover').fadeIn();
			setTimeout(function() {
				$('#jm_qiuck_cover').fadeOut()
			},1000)
		}
		if($('#id_salutation').length && $('#mt_sex').html()){
			let sex = $('#id_salutation')[0].options;
			if($('#mt_sex').html() == '男'){
				sex[1].selected = true;
			}else if($('#mt_sex').html() == '女'){
				sex[3].selected = true;
			}
		}
		if($('#id_gender').length && $('#mt_sex').html()){
			let sex = $('#id_gender')[0].options;
			if($('#mt_sex').html() == '男'){
				sex[1].selected = true;
			}else if($('#mt_sex').html() == '女'){
				sex[2].selected = true;
			}
		}
		if($('#id_birthday_month').length && $('#mt_birth').html()){
			let mouth = $('#id_birthday_month')[0].options;
			switch($('#mt_birth').html().split('-')[1]){
				case '1': mouth[1].selected = true;break;
				case '2': mouth[2].selected = true;break;
				case '3': mouth[3].selected = true;break;
				case '4': mouth[4].selected = true;break;
				case '5': mouth[5].selected = true;break;
				case '6': mouth[6].selected = true;break;
				case '7': mouth[7].selected = true;break;
				case '8': mouth[8].selected = true;break;
				case '9': mouth[9].selected = true;break;
				case '10': mouth[10].selected = true;break;
				case '11': mouth[11].selected = true;break;
				case '12': mouth[12].selected = true;break;
			}
		}
		if($('#id_birthday_day').length && $('#mt_birth').html()){
			let day = $('#id_birthday_day')[0].options;
			let length = day.length;
			for(let i=0; i<length; i++){
				if(day[i].innerText == $('#mt_birth').html().split('-')[2]){
					day[i].selected = true;
				}
			}
		}
		if($('#id_birthday_year').length && $('#mt_birth').html()){
			let year = $('#id_birthday_year')[0].options;
			let length = year.length;
			for(let i=0; i<length; i++){
				if(year[i].innerText == $('#mt_birth').html().split('-')[0]){
					year[i].selected = true;
				}
			}
		}
		if($('#id_address1').length && $('#mt_add').html()){
			$('#id_address1').val($('#mt_add').html())
		}
		if($('#id_personal_statement').length && $('#mt_selfIntro').html()){
			$('#id_personal_statement').val($('#mt_selfIntro').html())
		}
		
		//教育背景
		if($('#candidate-education-form').length){
			let length = $('.infopledu .infopl').length;
			let hadSaved = $('#education_display tr').length;
			let i = length - hadSaved - 1;
			if($('#id_degree_level').length && $('.infopledu .mt_education').eq(i).html()){
				let edu = $('#id_degree_level')[0];
				switch($('.infopledu .mt_education').eq(i).html()){
					case 'MPA':
					case 'EMBA':
					case 'MBA':
					case '博士研究生':
						edu.options[7].selected = true;
						break;
					case '硕士研究生':
						edu.options[6].selected = true;
						break;
					case '双学士':
					case '大学本科-一本':
					case '大学本科-二本':
					case '大学本科-三本':
						edu.options[5].selected = true;
						break;
					case '大学专科':
						edu.options[4].selected = true;
						break;
					case '中专':
						edu.options[3].selected = true;
						break;
					case '技校/职高':
						edu.options[3].selected = true;
						break;
					case '高中':
						edu.options[2].selected = true;
						break;
					case '初中及以下':
						edu.options[1].selected = true;
						break;
					default:
						break
				}
			}
			if($('#id_start_date_month').length && $('.infopledu .mt_startYearM').eq(i).html()){
				let mouth = $('#id_start_date_month')[0].options;
				switch($('.infopledu .mt_startYearM').eq(i).html()){
					case '1': mouth[1].selected = true;break;
					case '2': mouth[2].selected = true;break;
					case '3': mouth[3].selected = true;break;
					case '4': mouth[4].selected = true;break;
					case '5': mouth[5].selected = true;break;
					case '6': mouth[6].selected = true;break;
					case '7': mouth[7].selected = true;break;
					case '8': mouth[8].selected = true;break;
					case '9': mouth[9].selected = true;break;
					case '10': mouth[10].selected = true;break;
					case '11': mouth[11].selected = true;break;
					case '12': mouth[12].selected = true;break;
				}
			}
			if($('#id_start_date_year').length && $('.infopledu .mt_startYearY').eq(i).html()){
				let year = $('#id_start_date_year')[0].options;
				let length = year.length;
				for(let j=0; j<length; j++){
					if(year[j].innerText == $('.infopledu .mt_startYearY').eq(i).html()){
						year[j].selected = true;
					}
				}
			}
			if($('#id_end_date_month').length && $('.infopledu .mt_endYearM').eq(i).html()){
				let mouth = $('#id_end_date_month')[0].options;
				switch($('.infopledu .mt_endYearM').eq(i).html()){
					case '1': mouth[1].selected = true;break;
					case '2': mouth[2].selected = true;break;
					case '3': mouth[3].selected = true;break;
					case '4': mouth[4].selected = true;break;
					case '5': mouth[5].selected = true;break;
					case '6': mouth[6].selected = true;break;
					case '7': mouth[7].selected = true;break;
					case '8': mouth[8].selected = true;break;
					case '9': mouth[9].selected = true;break;
					case '10': mouth[10].selected = true;break;
					case '11': mouth[11].selected = true;break;
					case '12': mouth[12].selected = true;break;
				}
			}
			if($('#id_end_date_year').length && $('.infopledu .mt_endYearY').eq(i).html()){
				let year = $('#id_end_date_year')[0].options;
				let length = year.length;
				for(let j=0; j<length; j++){
					if(year[j].innerText == $('.infopledu .mt_endYearY').eq(i).html()){
						year[j].selected = true;
					}
				}
			}
			if($('#id_academic_rating').length && $('.infopledu .mt_professionalranking').eq(i).html()){
				let level = $('#id_academic_rating')[0];
				switch($('.infopledu .mt_professionalranking').eq(i).html()){
					case '前5%':
                        level[1].selected = true;
                        break;
                    case '前10%':
                    	level[2].selected = true;
                        break;
                    case '前20%':
                        level[3].selected = true;
                        break;
                    case '前30%':
                    	level[4].selected = true;
                        break; 
                    default:
                        level[5].selected = true;
                        break
				}
			}
			if($('#id_gpa').length && $('.infopledu .mt_gpascore').eq(i).html()){
				$('#id_gpa').val($('.infopledu .mt_gpascore').eq(i).html())
			}
		}
		//工作经历
		if($('#candidate-intern-form').length){
			let length = $('.infoparttimejobs .infopl').length;
			let hadSaved = $('#intern_display tr').length;
			let i = length - hadSaved - 1;
			if($('#id_job_title').length && $('.infoparttimejobs .mt_positionName').eq(i).html()){
				$('#id_job_title').val($('.infoparttimejobs .mt_positionName').eq(i).html())
			}
			if($('#id_company_name').length && $('.infoparttimejobs .mt_companyName').eq(i).html()){
				$('#id_company_name').val($('.infoparttimejobs .mt_companyName').eq(i).html())
			}
			if($('#id_start_date_month').length && $('.infoparttimejobs .mt_startDate').eq(i).html().split('-')[1]){
				let mouth = $('#id_start_date_month')[0].options;
				switch($('.infoparttimejobs .mt_startDate').eq(i).html().split('-')[1]){
					case '1': mouth[1].selected = true;break;
					case '2': mouth[2].selected = true;break;
					case '3': mouth[3].selected = true;break;
					case '4': mouth[4].selected = true;break;
					case '5': mouth[5].selected = true;break;
					case '6': mouth[6].selected = true;break;
					case '7': mouth[7].selected = true;break;
					case '8': mouth[8].selected = true;break;
					case '9': mouth[9].selected = true;break;
					case '10': mouth[10].selected = true;break;
					case '11': mouth[11].selected = true;break;
					case '12': mouth[12].selected = true;break;
				}
			}
			if($('#id_start_date_year').length && $('.infoparttimejobs .mt_startDate').eq(i).html().split('-')[0]){
				let year = $('#id_start_date_year')[0].options;
				let length = year.length;
				for(let j=0; j<length; j++){
					if(year[j].innerText == $('.infoparttimejobs .mt_startDate').eq(i).html().split('-')[0]){
						year[j].selected = true;
					}
				}
			}
			if($('#id_end_date_month').length && $('.infoparttimejobs .mt_endDate').eq(i).html().split('-')[1]){
				let mouth = $('#id_end_date_month')[0].options;
				switch($('.infoparttimejobs .mt_endDate').eq(i).html().split('-')[1]){
					case '1': mouth[1].selected = true;break;
					case '2': mouth[2].selected = true;break;
					case '3': mouth[3].selected = true;break;
					case '4': mouth[4].selected = true;break;
					case '5': mouth[5].selected = true;break;
					case '6': mouth[6].selected = true;break;
					case '7': mouth[7].selected = true;break;
					case '8': mouth[8].selected = true;break;
					case '9': mouth[9].selected = true;break;
					case '10': mouth[10].selected = true;break;
					case '11': mouth[11].selected = true;break;
					case '12': mouth[12].selected = true;break;
				}
			}
			if($('#id_end_date_year').length && $('.infoparttimejobs .mt_endDate').eq(i).html().split('-')[0]){
				let year = $('#id_end_date_year')[0].options;
				let length = year.length;
				for(let j=0; j<length; j++){
					if(year[j].innerText == $('.infoparttimejobs .mt_endDate').eq(i).html().split('-')[0]){
						year[j].selected = true;
					}
				}
			}
			if($('#id_summary').length && $('.infoparttimejobs .workDes').eq(i).html()){
				$('#id_summary').val($('.infoparttimejobs .workDes').eq(i).html())
			}
		}
		//社团经历
		if($('#id_professional_member').length){
			let schoolclubMess = '';
			let length = $('.infoschoolclub .infopl').length;
			for(let i=0; i<length; i++){
				schoolclubMess += '部门名称：' + $('.infoschoolclub .mt_schClubName').eq(i).html() + '\\n'
							   + '开始时间：' + $('.infoschoolclub .mt_startDate').eq(i).html() + '\\n'
							   + '担任职务：' + $('.infoschoolclub .mt_positionName').eq(i).html() + '\\n'
							   + '职责：' + $('.infoschoolclub .mt_workDes').eq(i).html() + '\\n\\n';								 
			}
			$('#id_professional_member').val(schoolclubMess);
		}
		//获奖经历
		if($('#id_awards').length && $('.infoschaward .infopl').length){
			let awardMess = '';
			let length = $('.infoschaward .infopl').length;
			for(let i=0; i<length; i++){
				awardMess += $('.infoschaward .mt_awardsName').eq(i).html() + '\\n'
							 + $('.infoschaward .mt_awardsType').eq(i).html() + '\\n'
							 + $('.infoschaward .mt_awardsDate').eq(i).html() + '\\n'
							 + $('.infoschaward .mt_awardsDes').eq(i).html() + '\\n\\n';
			}
			$('#id_awards').val(awardMess);
		}
		//兴趣爱好
		if($('#id_hobbies').length){
			$('#id_hobbies').val($('#mt_skill').html())
		}
	});
})()