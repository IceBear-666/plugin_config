if ($('#jm_qiuck_cover')) {
	$('#jm_qiuck_cover').fadeIn();
	setTimeout(function() {
		$('#jm_qiuck_cover').fadeOut()
	}, 1000);
}
var help = {
    getGraguate: function() {
        var maxid=0;
		var maxedutime;
		for(var i=0;i<$('.infopledu').length;i++){
			//得到最晚毕业年份
			var endyear=parseInt($('#edu-list .mt_endYearY').eq(i).html());
			if(i==0){
				maxedutime=endyear;
				maxid=0;
			}else{
				if(endyear>maxedutime){
					maxedutime=endyear;
					maxid=i;
				}
			}
		}
		return maxid;
    },
    maxEngLevel: function() {
        var level = 0,
        maxLevel = 0,
        index = -1;
        for (var i = 0; i < $('.infoEnglishSkill').length; i++) {
            switch ($('.infoEnglishSkill .mt_skillEngLevel').eq(i).html()) {
            case '大学英语四级':
                level = 1;
                break;
            case '大学英语六级':
                level = 2;
                break;
            case '专业四级':
                level = 3;
                break;
            case '专业八级':
                level = 4;
                break
            }
            if (level > maxLevel) {
                maxLevel = level;
                index = i
            }
        }
        return {
            id: index,
            level: maxLevel
        }
    }
};
var _ = function(objname, i) {
    if (typeof i === 'undefined') {
        return $('input[name=\"' + objname + '\"]')
    }
    return $('input[name=\"' + objname + '\"]').eq(i)
};
autoWrite = {
    textWrite: function(content, obj) {
        if (content && obj.length) {
            obj.val(content)
        }
    },
    selectFac: function(content, obj) {
		if (content && obj.length) {
			var opt = obj.get(0).options;
			for (var i in opt) {
				if (content.indexOf(opt[i].innerHTML) != -1) {
					opt[i].selected = true;
					break
				}
			}
		}
	}
};
autoWrite.textWrite($('#mt_id').html(), _('sfzhm'));
autoWrite.textWrite($('#mt_name').html(), _('yprmane'));
autoWrite.selectFac($('#mt_sex').html(), $('#select'));
autoWrite.textWrite($('#mt_biryear').html(), _('csrqn'));
autoWrite.textWrite($('#mt_birmonth').html(), _('csrqy'));
autoWrite.textWrite($('#mt_birday').html(), _('csrqr'));
autoWrite.textWrite(($('#mt_nativeplace').html()+$('#mt_native_city').html()), _('xg'));
autoWrite.textWrite($('#mt_nation').html(), _('nz'));
autoWrite.textWrite($('#mt_polistatus').html(), _('zzmm'));
autoWrite.textWrite($('#mt_height').html(), _('sg'));
autoWrite.textWrite($('#mt_weight').html(), _('tz'));
autoWrite.textWrite($('#mt_maritalstatus').html(), _('hyzk'));
autoWrite.textWrite($('#mt_tel').html(), _('yddh'));
autoWrite.textWrite($('#mt_gudingtel').html(), _('jtdh'));
autoWrite.textWrite($('#mt_email').html(), _('djyj'));
autoWrite.textWrite($('#mt_postadd').html(), _('jtcxdz'));
autoWrite.textWrite($('#mt_add').html(), _('xbrzz'));

var maxGra = help.getGraguate();
autoWrite.textWrite($('.infopledu .mt_education').eq(maxGra).html(), _('zgsl'));
autoWrite.textWrite($('.infopledu .mt_schoolName').eq(maxGra).html(), _('byxy'));
autoWrite.textWrite($('.infopledu .mt_professional').eq(maxGra).html(), _('zy'));
autoWrite.textWrite($('.infopledu .mt_endYear').eq(maxGra).html(), _('bysj'));
autoWrite.selectFac($('.infopledu .mt_degree').eq(maxGra).html(), $('#xw'));
var maxEng = help.maxEngLevel();
autoWrite.textWrite($('.infoEnglishSkill .mt_skillEngLevel').eq(maxEng['id']).html(), _('wyyz'));
autoWrite.textWrite(($('.infopledu .mt_startYeardot').eq(0).html()+$('.infopledu .mt_endYeardot').eq(0).html()), _('qzsja'));
autoWrite.textWrite(($('.infopledu .mt_startYeardot').eq(1).html()+$('.infopledu .mt_endYeardot').eq(1).html()), _('qzsjb'));
autoWrite.textWrite(($('.infopledu .mt_startYeardot').eq(2).html()+$('.infopledu .mt_endYeardot').eq(2).html()), _('qzsjc'));
autoWrite.textWrite($('.infopledu .mt_schoolName').eq(0).html(), _('sxa'));
autoWrite.textWrite($('.infopledu .mt_schoolName').eq(1).html(), _('sxb'));
autoWrite.textWrite($('.infopledu .mt_schoolName').eq(2).html(), _('sxc'));
autoWrite.textWrite($('.infopledu .mt_professional').eq(0).html(), _('zwa'));
autoWrite.textWrite($('.infopledu .mt_professional').eq(1).html(), _('zwb'));
autoWrite.textWrite($('.infopledu .mt_professional').eq(2).html(), _('zwc'));
autoWrite.textWrite(($('.infoparttimejobs .mt_startDatedot').eq(0).html()+$('.infoparttimejobs .mt_endDatedot').eq(0).html()), _('gzjlqzsja'));
autoWrite.textWrite(($('.infoparttimejobs .mt_startDatedot').eq(1).html()+$('.infoparttimejobs .mt_endDatedot').eq(1).html()), _('gzjlqzsjb'));
autoWrite.textWrite(($('.infoparttimejobs .mt_startDatedot').eq(2).html()+$('.infoparttimejobs .mt_endDatedot').eq(2).html()), _('gzjlqzsjc'));
autoWrite.textWrite($('.infoparttimejobs .mt_positionName').eq(0).html(), _('gzjlzwa'));
autoWrite.textWrite($('.infoparttimejobs .mt_positionName').eq(1).html(), _('gzjlzwb'));
autoWrite.textWrite($('.infoparttimejobs .mt_positionName').eq(2).html(), _('gzjlzwc'));
autoWrite.textWrite($('.infoparttimejobs .mt_companyName').eq(0).html(), _('gzjldwmca'));
autoWrite.textWrite($('.infoparttimejobs .mt_companyName').eq(1).html(), _('gzjldwmcb'));
autoWrite.textWrite($('.infoparttimejobs .mt_companyName').eq(2).html(), _('gzjldwmcc'));
autoWrite.textWrite(($('.infoparttimejobs .mt_reterenceName').eq(0).html()+$('.infoparttimejobs .mt_reterence_phone').eq(0).html()), _('gzjlzmra'));
autoWrite.textWrite(($('.infoparttimejobs .mt_reterenceName').eq(1).html()+$('.infoparttimejobs .mt_reterence_phone').eq(1).html()), _('gzjlzmrb'));
autoWrite.textWrite(($('.infoparttimejobs .mt_reterenceName').eq(2).html()+$('.infoparttimejobs .mt_reterence_phone').eq(2).html()), _('gzjlzmrc'));
autoWrite.textWrite($('#mt_fmrelation').html(), _('jtzkqwa'));
autoWrite.textWrite($('#mt_fmname').html(), _('jtzkmanea'));
autoWrite.textWrite($('#mt_fmwork').html(), _('jtzkgzdwa'));
autoWrite.textWrite($('#mt_fmposition').html(), _('jtzkzwa'));
autoWrite.textWrite($('#mt_fmphone').html(), _('jtzkdha'));








