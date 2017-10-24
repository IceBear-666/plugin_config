
		
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

		var formatDate = function (value,length) {
			if(length == undefined || length == 3){
				let newDate = value.split('-');
				for (let i = 0; i < newDate.length; i++) {
					if (parseInt(newDate[i]) < 10) {
						newDate[i] = '0' + newDate[i]
					}
				}
				return newDate.join('-');
			}
			if(length == 2){
				let newDate = value.split('-');
				for (let i = 0; i < newDate.length; i++) {
					if (parseInt(newDate[i]) < 10) {
						newDate[i] = '0' + newDate[i]
					}
				}
				newDate = newDate.slice(0,2);
				return newDate.join('-');
			}
		};

		var autoWrite = {
			textWrite: function(content, obj) {
				if (content && obj) {
					obj.value = content;
				}
			},
			sexWrite: function() {
				if (_v('#mt_sex') === '男') {
					_('#male').click();
				} else {
					_('#famale').click();
				}
			},
			custonFun: function(callback) {
				callback();
			}
		};

		//基本信息
		if(_('#infoEditBox')){
			if(_('[name=\"userName\"]') && _v('#mt_name')){
				autoWrite.textWrite(_v('#mt_name'), _('[name=\"userName\"]'));
			}
			if(_('[name=\"userSex\"]') && _v('#mt_sex')){
				if(_v('#mt_sex') == '男'){
					_('[name=\"userSex\"]').click();
				}else if(_v('#mt_sex') == '女'){
					_('[name=\"userSex\"]', 1).click();
				}
			}
			if(_('[name=\"userBirthday\"]') && _v('#mt_birth')){
				autoWrite.textWrite(formatDate(_v('#mt_birth')), _('[name=\"userBirthday\"]'));
			}
			if(_('[name=\"email\"]') && _v('#mt_email')){
				autoWrite.textWrite(_v('#mt_email'), _('[name=\"email\"]'));
			}
			if(_('[name=\"telephone\"]') && _v('#mt_tel')){
				autoWrite.textWrite(formatDate(_v('#mt_tel')), _('[name=\"telephone\"]'));
			}
			if(_('[name=\"telephone\"]') && _v('#mt_tel')){
				autoWrite.textWrite(formatDate(_v('#mt_tel')), _('[name=\"telephone\"]'));
			}
			if(_('[name=\"marriage\"]') && _v('#mt_maritalstatus')){
				let marriage = _('[name=\"marriage\"]').options;
				switch(_v('#mt_maritalstatus')){
					case '未婚': marriage[1].selected=true;break;
					case '已婚': marriage[2].selected=true;break;
					case '离婚': marriage[3].selected=true;break;
				}
			}
			if(_('[name=\"nation\"]') && _v('#mt_nation')){
				let length = _('[name=\"nation\"]').options.length;
				for(let i=0; i<length; i++){
					if(_('[name=\"nation\"]').options[i].innerText == _v('#mt_nation')){
						_('[name=\"nation\"]').options[i].selected=true;
					}
				}
			}
			if(_('#certificates') && _v('#mt_id')){
				let idtype = _('#certificates').options;
				switch(_v('#mt_idtype')){
					case '身份证': 
						idtype[0].selected=true;
						autoWrite.textWrite(_v('#mt_id'), _('[name=\"userIdcard\"]'));
						break;
					case '护照': 
						idtype[1].selected=true;
						autoWrite.textWrite(_v('#mt_id'), _('[name=\"userIdcard\"]'));
						break;
				}
			}
			if(_('[name=\"politicalStatus\"]') && _v('#mt_polistatus')){
				let polistatus = _('[name=\"politicalStatus\"]').options;
				switch(_v('#mt_polistatus')){
					case '中共党员': polistatus[3].selected=true;break;
					case '共青团员': polistatus[2].selected=true;break;
					case '群众': polistatus[1].selected=true;break;
					default : polistatus[4].selected=true;break;
				}
			}
			if(_('[name=\"emergenceCall\"]') && _v('#mt_jjlxrtel')){
				autoWrite.textWrite(_v('#mt_jjlxrtel'), _('[name=\"emergenceCall\"]'));
			}
			if(_('[name=\"mailingAddress\"]') && _v('#mt_add')){
				autoWrite.textWrite(_v('#mt_add'), _('[name=\"mailingAddress\"]'));
			}
			if(_('[name=\"highestEducation\"]') && _v('#mt_edu')){
				let edu = _('[name=\"highestEducation\"]');
				switch(_v('#mt_edu')){
					case '中专':
					case '技校/职高':
					case '大学专科':
						edu.options[2].selected = true;
						break;
					case '大学本科-一本':
					case '大学本科-二本':
					case '大学本科-三本':
					case '海外本科':
						edu.options[3].selected = true;
						break;
					case '硕士研究生':
						edu.options[5].selected = true;
						break;
					case 'MBA':
						edu.options[5].selected = true;
						break;
					case '博士研究生':
						edu.options[6].selected = true;
						break;
					default: 
						edu.options[0].selected = true;
						break;
				}
			}
			
			if(_('[name=\"preSchoolAddressProvince\"]') && _v('#mt_nativeplace')){
				let length = _('[name=\"preSchoolAddressProvince\"]').options.length;
				for(let i=0; i<length; i++){
					if(_('[name=\"preSchoolAddressProvince\"]').options[i].innerText.substring(0,2) == _v('#mt_nativeplace').substring(0,2)){
						_('[name=\"preSchoolAddressProvince\"]').options[i].selected=true;
					}
				}
			}
			
			window.setTimeout(function(){
				let length2 = _('[name=\"preSchoolAddressCity\"]').options.length;
				// console.log(length2);
				for(let j=0; j<length2; j++){
					if(_('[name=\"preSchoolAddressCity\"]').options[j].innerText.substring(0,2) == _v('#mt_native_city').substring(0,2)){
						_('[name=\"preSchoolAddressCity\"]').options[j].selected=true;
					}
				}
			},200)
		}

		//教育经历
		if(_('#educationEditDataInit')){
			let length = document.querySelectorAll('#edu-list .mt_startYear').length;
			for(let i=0; i<length; i++){
				if(_('[name=\"startDate\"]', i) && _v('#edu-list .mt_startYear', i)){
					autoWrite.textWrite(formatDate(_v('#edu-list .mt_startYear', i), 2) + '-01', _('[name=\"startDate\"]', i));
				}
				if(_('[name=\"endTime\"]') && _v('#edu-list .mt_endYear')){
					autoWrite.textWrite(formatDate(_v('#edu-list .mt_endYear', i), 2) + '-01', _('[name=\"endTime\"]', i));
				}
				if(_('[name=\"educational\"]', i) && _v('#edu-list .mt_education', i)){
					let edu = _('[name=\"educational\"]', i);
					switch(_v('#edu-list .mt_education', i)){
						case '中专':
						case '技校/职高':
						case '大学专科':
							edu.options[2].selected = true;
							break;
						case '大学本科-一本':
						case '大学本科-二本':
						case '大学本科-三本':
						case '海外本科':
							edu.options[3].selected = true;
							break;
						case '硕士研究生':
							edu.options[5].selected = true;
							break;
						case 'MBA':
							edu.options[5].selected = true;
							break;
						case '博士研究生':
							edu.options[6].selected = true;
							break;
						default: 
							edu.options[0].selected = true;
							break;
					}
				}
				// if(_('[name=\"degree\"]', i) && _v('#edu-list .mt_degree', i)){
				// 	let degree = _('[name=\"degree\"]', i);
				// 	switch(_v('#edu-list .mt_degree', i)){
				// 		case '学士':
    //                     case '双学士':
    //                         degree.options[3].selected = true;
    //                         break;
    //                     case 'MPA':
    //                     case 'MBA':
    //                     case '硕士':
    //                         degree.options[4].selected = true;
    //                         break;
    //                     case '博士':
    //                         degree.options[5].selected = true;
    //                         break;
    //                     default:
    //                         degree.options[2].selected = true;
    //                         break;
				// 	}
				// }
				if(_('[name=\"rank\"]', i) && _v('#edu-list .mt_classranking', i)){
					let rank = _('[name=\"rank\"]', i);
					switch(_v('#edu-list .mt_classranking', i)){
						case '前5%':
							rank.options[1].selected = true;
							break;
						case '前10%':
							rank.options[2].selected = true;
							break;
						case '前20%':
							rank.options[3].selected = true;
							break;
						case '前30%':
							rank.options[4].selected = true;
							break;
						default:
							rank.options[5].selected = true;
							break
					}
				}
				if(_('[name=\"majorCourse\"]') && _v('#edu-list .mt_major')){
					autoWrite.textWrite(_v('#edu-list .mt_major', i), _('[name=\"majorCourse\"]', i));
				}
			}
		}
		//奖励
		if(_('#J_rewardEdit')){
			let length = document.querySelectorAll('#schawards-list .mt_awardsType').length;
			for(let i=0; i<length; i++){
				if(_('[name=\"effectPriority\"]', i) && _v('#schawards-list .mt_awardsType', i)){
					let awardsType = _('[name=\"effectPriority\"]', i).options;
					switch(_v('#schawards-list .mt_awardsType', i)){
						case '国际级': awardsType[5].selected=true;break;
						case '国家级': awardsType[4].selected=true;break;
						case '省市级': awardsType[3].selected=true;break;
						case '学校级': awardsType[2].selected=true;break;
						case '院系级': awardsType[1].selected=true;break;
					}
				}
				if(_('[name=\"rewardTime\"]', i) && _v('#schawards-list .mt_awardsDate', i)){
					autoWrite.textWrite(formatDate(_v('#schawards-list .mt_awardsDate', i), 2) + '-01', _('[name=\"rewardTime\"]', i));
				}
			}	
		}
		//实习经历
		if(_('#J_internshipExEdit')){
			let length = document.querySelectorAll('#exp-list .mt_companyName').length;
			for(let i=0; i<length; i++){
				if(_('#J_internshipExEdit [name=\"startDate\"]', i) && _v('#exp-list .mt_startDate', i)){
					autoWrite.textWrite(formatDate(_v('#exp-list .mt_startDate', i)), _('#J_internshipExEdit [name=\"startDate\"]', i));
				}
				if(_('#J_internshipExEdit [name=\"endDate\"]', i) && _v('#exp-list .mt_endDate', i)){
					autoWrite.textWrite(formatDate(_v('#exp-list .mt_endDate', i)), _('#J_internshipExEdit [name=\"endDate\"]', i));
				}
				if(_('[name=\"company\"]') && _v('#exp-list .mt_companyName')){
					autoWrite.textWrite(_v('#exp-list .mt_companyName', i), _('[name=\"company\"]', i));
				}
				if(_('[name=\"companySize\"]', i) && _v('#exp-list .mt_companySize', i)){
					let companySize = _('[name=\"companySize\"]', i).options;
					switch(_v('#exp-list .mt_companySize', i)){
						case '少于50人': companySize[1].selected=true;break;
						case '50-149人': companySize[2].selected=true;break;
						case '150-499人': companySize[3].selected=true;break;
						case '500-999人': companySize[4].selected=true;break;
						case '1000-9999人': companySize[5].selected=true;break;
						case '10000人以上': companySize[5].selected=true;break;
					}
				}
				if(_('[name=\"job\"]') && _v('#exp-list .mt_positionName')){
					autoWrite.textWrite(_v('#exp-list .mt_positionName', i), _('[name=\"job\"]', i));
				}
				if(_('[name=\"jobKind\"]', i) && _v('#exp-list .mt_workcat', i)){
					let jobKind = _('[name=\"jobKind\"]', i).options;
					switch(_v('#exp-list .mt_workcat', i)){
						case '全职': jobKind[1].selected=true;break;
						case '兼职': jobKind[2].selected=true;break;
						case '实习': jobKind[3].selected=true;break;
					}
				}
				if(_('#J_internshipExEdit [name=\"duty\"]') && _v('#exp-list .workDes')){
					autoWrite.textWrite(_v('#exp-list .workDes', i), _('#J_internshipExEdit [name=\"duty\"]', i));
				}

			}
		}

		//项目经验
		if(_('#projectEditInit')){
			let length = document.querySelectorAll('#pro-list .mt_prostarttime').length;
			for(let i=0; i<length; i++){
				if(_('#projectEditInit [name=\"startDate\"]', i) && _v('#pro-list .mt_prostarttime', i)){
					autoWrite.textWrite(formatDate(_v('#pro-list .mt_prostarttime', i)), _('#projectEditInit [name=\"startDate\"]', i));
				}
				if(_('#projectEditInit [name=\"endDate\"]', i) && _v('#pro-list .mt_proendtime', i)){
					autoWrite.textWrite(formatDate(_v('#pro-list .mt_proendtime', i)), _('#projectEditInit [name=\"endDate\"]', i));
				}
				if(_('[name=\"projectName\"]') && _v('#pro-list .mt_projectName')){
					autoWrite.textWrite(_v('#pro-list .mt_projectName', i), _('[name=\"projectName\"]', i));
				}
				if(_('#projectEditInit [name=\"duty\"]') && _v('#pro-list .mt_projectDuty')){
					autoWrite.textWrite(_v('#pro-list .mt_projectDuty', i), _('#projectEditInit [name=\"duty\"]', i));
				}
				if(_('#projectEditInit [name=\"projectDesc\"]') && _v('#pro-list .mt_proList')){
					autoWrite.textWrite(_v('#pro-list .mt_proList', i), _('#projectEditInit [name=\"projectDesc\"]', i));
				}
			}
		}

		//语言能力
		if(_('#J_languageEdit')){
			let i = document.querySelectorAll('#skill-list .mt_skillEngLevel').length;
			if(_('[name=\"examLevel\"]') && _v('#skill-list .mt_skillEngLevel', i - 1)){
				let examLevel = _('[name=\"examLevel\"]').options;
				switch(_v('#skill-list .mt_skillEngLevel', i - 1)){
					case '大学英语四级': 
						examLevel[1].selected = true;
						autoWrite.textWrite(_v('#skill-list .mt_skillEngSorce', i - 1), _('[name=\"examScore\"]'));
						break;
					case '大学英语六级': 
						examLevel[2].selected = true;
						autoWrite.textWrite(_v('#skill-list .mt_skillEngSorce', i - 1), _('[name=\"examScore\"]'));
						break;
					case '专业四级': 
						examLevel[3].selected = true;
						autoWrite.textWrite(_v('#skill-list .mt_skillEngSorce', i - 1), _('[name=\"examScore\"]'));
						break;
					case '专业八级': 
						examLevel[4].selected = true;
						autoWrite.textWrite(_v('#skill-list .mt_skillEngSorce', i - 1), _('[name=\"examScore\"]'));
						break;
				}
			}
		}

		//其他说明
		if(_('#J_otherExplainEdit')){
			if(_('#J_otherExplainEdit [name=\"evaluate\"]') && _v('#mt_selfIntro')){
				autoWrite.textWrite(_v('#mt_selfIntro'), _('#J_otherExplainEdit [name=\"evaluate\"]'));
			}
			if(_('#J_otherExplainEdit [name=\"hobby\"]') && _v('#mt_skill')){
				autoWrite.textWrite(_v('#mt_skill'), _('#J_otherExplainEdit [name=\"hobby\"]'));
			}
			if(_('#J_otherExplainEdit [name=\"otherSkill\"]') && _v('#mt_hobbies')){
				autoWrite.textWrite(_v('#mt_hobbies'), _('#J_otherExplainEdit [name=\"otherSkill\"]'));
			}
		}

