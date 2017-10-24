if(KISSY.one('#jm_qiuck_cover')){KISSY.one('#jm_qiuck_cover').fadeIn();
setTimeout(function(){KISSY.one('#jm_qiuck_cover').fadeOut()},1000)}

if (KISSY.one('input[name=\"name1\"]')) {
    KISSY.one('input[name=\"name1\"]').val(KISSY.one('#mt_name').html());
}
if (KISSY.one('input[name=\"tall\"]')) {
    KISSY.one('input[name=\"tall\"]').val(KISSY.one('#mt_height').html());
}
if (KISSY.one('input[name=\"birthday\"]') && KISSY.one('#mt_birth').html()) {
    KISSY.one('input[name=\"birthday\"]').val(KISSY.one('#mt_birth').html());
}
if (KISSY.one('input[name=\"home_town\"]')) {
    KISSY.one('input[name=\"home_town\"]').val(KISSY.one('#mt_nativeplace').html());
}

if (KISSY.one('#mt_sex').html() == '男') {
    document.getElementsByTagName('option')[1].selected=true;
}
if (KISSY.one('#mt_sex').html() == '女') {
    document.getElementsByTagName('option')[2].selected=true;
} 

for (var i = 4; i<65; i++) {
	if (KISSY.one('#mt_nation').html() == document.getElementsByTagName('option')[i].value ) {
	    document.getElementsByTagName('option')[i].selected=true;
	}
}

for (var i = 0; i < 30; i++){
    var a=$('.infopl .mt_hukoucity').html();
    if (a == document.getElementById('hukou').options[i].text ) {
            document.getElementById('hukou').options[i].selected = true;
    } 
}

if (KISSY.one('#mt_polistatus').html()=='中共党员') {
    document.getElementsByTagName('option')[99].selected = true;
}if (KISSY.one('#mt_polistatus').html()=='中共预备党员') {
    document.getElementsByTagName('option')[100].selected = true;
}if (KISSY.one('#mt_polistatus').html()=='共青团员') {
    document.getElementsByTagName('option')[101].selected = true;
}if (KISSY.one('#mt_polistatus').html()=='中国国民党革命委员会') {
    document.getElementsByTagName('option')[102].selected = true;
}if (KISSY.one('#mt_polistatus').html()=='中国民主同盟') {
    document.getElementsByTagName('option')[103].selected = true;
}if (KISSY.one('#mt_polistatus').html()=='中国民主建国会') {
    document.getElementsByTagName('option')[104].selected = true;
}if (KISSY.one('#mt_polistatus').html()=='中国民主促进会') {
    document.getElementsByTagName('option')[105].selected = true;
}if (KISSY.one('#mt_polistatus').html()=='中国农工民主党') {
    document.getElementsByTagName('option')[106].selected = true;
}if (KISSY.one('#mt_polistatus').html()=='中国致公党'){
    document.getElementsByTagName('option')[107].selected = true;
}if (KISSY.one('#mt_polistatus').html()=='九三学社'){
    document.getElementsByTagName('option')[108].selected = true;
}if (KISSY.one('#mt_polistatus').html()=='台湾民主自治同盟') {
    document.getElementsByTagName('option')[109].selected = true;
}if (KISSY.one('#mt_polistatus').html()=='无党派民主人士') {
    document.getElementsByTagName('option')[110].selected = true;
}if (KISSY.one('#mt_polistatus').html()=='群众') {
    document.getElementsByTagName('option')[111].selected = true;
}

if (KISSY.one('input[name=\"graduation\"]')) {
    KISSY.one('input[name=\"graduation\"]').val(KISSY.one('#mt_gradutetime').html());
}

if (KISSY.one('#mt_edu').html()=='博士研究生') {
    document.getElementsByTagName('option')[137].selected = true;
}if (KISSY.one('#mt_edu').html()=='硕士研究生') {
    document.getElementsByTagName('option')[134].selected = true;
}if (KISSY.one('#mt_edu').html()=='双学士') {
    document.getElementsByTagName('option')[131].selected = true;
}if (KISSY.one('#mt_edu').html()=='大学本科-一本' || KISSY.one('#mt_edu').html()=='大学本科-二本' || KISSY.one('#mt_edu').html()=='大学本科-三本') {
    document.getElementsByTagName('option')[130].selected = true;
}if (KISSY.one('#mt_edu').html()=='大学专科') {
    document.getElementsByTagName('option')[127].selected = true;
}if (KISSY.one('#mt_edu').html()=='中专') {
    document.getElementsByTagName('option')[124].selected = true;
}

if (KISSY.one('input[name=\"school\"]')) {
    KISSY.one('input[name=\"school\"]').val($('.mt_schoolName').html());
}
if (KISSY.one('input[name=\"major1\"]')) {
    KISSY.one('input[name=\"major1\"]').val($('.mt_professional').html());
}
if (KISSY.one('input[name=\"tutor\"]')) {
    KISSY.one('input[name=\"tutor\"]').val($('.mt_tutorname').html());
}

document.getElementsByTagName('option')[141].selected = true;

if (KISSY.one('input[name=\"id_number\"]')) {
    KISSY.one('input[name=\"id_number\"]').val(KISSY.one('#mt_id').html());
}
if (KISSY.one('input[name=\"waiyu\"]')) {
    KISSY.one('input[name=\"waiyu\"]').val($('.mt_skillEngLevel').html()+'('+$('.mt_skillEngSorce').html()+'),'+$('.mt_skillOtherLang').html());
}
if (KISSY.one('input[name=\"health\"]')) {
    KISSY.one('input[name=\"health\"]').val('健康');
}
if (KISSY.one('input[name=\"marry\"]')) {
    KISSY.one('input[name=\"marry\"]').val(KISSY.one('#mt_maritalstatus').html());
}

if (KISSY.one('input[name=\"habit\"]')) {
    KISSY.one('input[name=\"habit\"]').val(KISSY.one('#mt_skill').html());
}
if (KISSY.one('input[name=\"mobilephone\"]')) {
    KISSY.one('input[name=\"mobilephone\"]').val(KISSY.one('#mt_tel').html());
}
if (KISSY.one('input[name=\"email\"]')) {
    KISSY.one('input[name=\"email\"]').val(KISSY.one('#mt_email').html());
}
if (KISSY.one('input[name=\"tel\"]')) {
    KISSY.one('input[name=\"tel\"]').val(KISSY.one('#mt_jjlxrtel').html());
}
if (KISSY.one('input[name=\"address\"]')) {
    KISSY.one('input[name=\"address\"]').val(KISSY.one('#mt_postadd').html());
}


if (KISSY.one('input[name=\"edu_time_begin\"]') && $('.mt_startYear').html() ) {
	KISSY.one('input[name=\"edu_time_begin\"]').val($('.mt_startYear').html());
}
if (KISSY.one('input[name=\"edu_time_end\"]') && $('.mt_endYear').html() ) {
	KISSY.one('input[name=\"edu_time_end\"]').val($('.mt_endYear').html());
}
if (KISSY.one('input[name=\"edu_school\"]') && $('.mt_schoolName').html() ) {
	KISSY.one('input[name=\"edu_school\"]').val($('.mt_schoolName').html());
}
if (KISSY.one('input[name=\"edu_department\"]') && $('.mt_academy').html() ) {
	KISSY.one('input[name=\"edu_department\"]').val($('.mt_academy').html());
}
if (KISSY.one('input[name=\"edu_major\"]') && $('.mt_professional').html() ) {
	KISSY.one('input[name=\"edu_major\"]').val($('.mt_professional').html());
}
if (KISSY.one('input[name=\"edu_rank\"]') && $('.infopledu .mt_classranking').html() ) {
	KISSY.one('input[name=\"edu_rank\"]').val($('.infopledu .mt_classranking').html());
}

if ($('.mt_degree').html()=='博士'){
	document.getElementsByTagName('option')[144].selected = true;}
if ($('.mt_degree').html()=='硕士'){
	document.getElementsByTagName('option')[145].selected = true;
	document.getElementsByTagName('option')[150].selected = true;}
if ($('.mt_degree').html()=='学士'){
	document.getElementsByTagName('option')[146].selected = true;
	document.getElementsByTagName('option')[154].selected = true;}
if ($('.mt_degree').html()=='双学位'){
	document.getElementsByTagName('option')[147].selected = true;
	document.getElementsByTagName('option')[154].selected = true;}
if ($('.mt_degree').html()=='无'){
	document.getElementsByTagName('option')[148].selected = true;}

if (KISSY.one('input[name=\"career_time_begin\"]') && $('.mt_startDate').html() ) {
	KISSY.one('input[name=\"career_time_begin\"]').val($('.mt_startDate').html());
}
if (KISSY.one('input[name=\"career_time_end\"]') && $('.mt_endDate').html() ) {
	KISSY.one('input[name=\"career_time_end\"]').val($('.mt_endDate').html());
}
if (KISSY.one('input[name=\"career_unit\"]') && $('.mt_companyName').html() ) {
	KISSY.one('input[name=\"career_unit\"]').val($('.mt_companyName').html());
}
if (KISSY.one('input[name=\"career_duty\"]') && $('.mt_positionName').html() ) {
	KISSY.one('input[name=\"career_duty\"]').val($('.mt_positionName').html());
}
if (KISSY.one('textarea[name=\"career_responsibility\"]') && $('.infoparttimejobs .workContent').html() ) {
	KISSY.one('textarea[name=\"career_responsibility\"]').val($('.infoparttimejobs .workContent').html());
}
if (KISSY.one('input[name=\"career_type\"]')) {
	KISSY.one('input[name=\"career_type\"]').val('全职');
}

if (KISSY.one('textarea[name=\"lessons\"]')) {
    KISSY.one('textarea[name=\"lessons\"]').val($('.mt_major').html());
}

var info_SchoolClub=$('.mt_schClubList').eq(0).html();
	for (var i =1; i <$('.infoschoolclub').length; i++) {
		if ($('.mt_schClubList').eq(i).html()) {
			info_SchoolClub=info_SchoolClub+$('.mt_schClubList').eq(i).html()+'； '
		}
	}
KISSY.one('textarea[name=\"activities\"]').val(info_SchoolClub);

var info_awards=$('.mt_schawradList').eq(0).html();
	for (var i =1; i <$('.infoschaward').length; i++) {
		if ($('.mt_schawradList').eq(i).html()) {
			info_awards=info_awards+$('.mt_schawradList').eq(i).html()+'； '
		}
	}
KISSY.one('textarea[name=\"honor\"]').val(info_awards);

if (KISSY.one('textarea[name=\"production\"]')) {
    KISSY.one('textarea[name=\"production\"]').val(KISSY.one('#achievement').html());
}

var info_Certification=$('.mt_certificateName').eq(0).html()+', '+$('.mt_certificateName').eq(0).html()+', '+$('.mt_getDate').eq(0).html()+',颁发机构:'+$('.mt_issuing').eq(0).html();
	for (var i =1; i <$('.infoplcerti').length; i++) {
		if ($('.mt_certificateName').eq(i).html()) {
			info_Certification=info_Certification+$('.mt_certificateName').eq(i).html()+', '+$('.mt_certificateName').eq(i).html()+', '+$('.mt_getDate').eq(i).html()+',颁发机构:'+$('.mt_issuing').eq(i).html()+'； '
		}
	}
KISSY.one('textarea[name=\"letter\"]').val(info_Certification);

if (KISSY.one('input[name=\"family_relation\"]')) {
    KISSY.one('input[name=\"family_relation\"]').val($('.mt_fmrelation').html());
}
if (KISSY.one('input[name=\"family_name\"]')) {
    KISSY.one('input[name=\"family_name\"]').val($('.mt_fmname').html());
}
if (KISSY.one('input[name=\"family_duty\"]')) {
    KISSY.one('input[name=\"family_duty\"]').val($('.mt_fmwork').html());
}
if (KISSY.one('input[name=\"family_office\"]')) {
    KISSY.one('input[name=\"family_office\"]').val($('.mt_fmposition').html());
}
if ($('.mt_hukoucitynow').html()  =='北京'){
	document.getElementsByName('other_hukou')[0].click()
    }
else{
    document.getElementsByName('other_hukou')[1].click()
    }
