if (KISSY.one('input[name=\"onecity\"]') ) {
    KISSY.one('input[name=\"onecity\"]').val($('#mt_expectcity_city').html())
}

if (KISSY.one('input[name=\"seekername\"]') ) {
    KISSY.one('input[name=\"seekername\"]').val($('#mt_name').html())
}


if($('#mt_sex').html()=='男'){
    document.getElementsByTagName('input')[5].checked=true;
}
if($('#mt_sex').html()=='女'){
    document.getElementsByTagName('input')[6].checked=true;
}

     
if($('#mt_maritalstatus').html()=='未婚'){
    document.getElementsByTagName('input')[14].checked=true;
}
if($('#mt_maritalstatus').html()=='已婚'){
    document.getElementsByTagName('input')[15].checked=true;
}
        

if (KISSY.one('input[id=\"zjbh\"]')&& $('#mt_id').html() ) {
    KISSY.one('input[id=\"zjbh\"]').val($('#mt_id').html())
}
if (KISSY.one('input[id=\"birthday\"]')&& $('#mt_birth').html() ) {
    KISSY.one('input[id=\"birthday\"]').val($('#mt_birth').html())
}
if (KISSY.one('input[id=\"higeducation\"]')&& $('.infopledu .mt_education').html()) {
    KISSY.one('input[id=\"higeducation\"]').val($('.infopledu .mt_education').html())
}
if (KISSY.one('input[id=\"nation\"]')&& $('#mt_nation').html()) {
    KISSY.one('input[id=\"nation\"]').val($('#mt_nation').html())
}
if (KISSY.one('input[id=\"mobile\"]')&& $('#mt_tel').html()) {
    KISSY.one('input[id=\"mobile\"]').val($('#mt_tel').html())
}
if (KISSY.one('input[id=\"email\"]')&& $('#mt_email').html()) {
    KISSY.one('input[id=\"email\"]').val($('#mt_email').html())
}
if (KISSY.one('input[id=\"nationality\"]')&& $('#mt_national').html()) {
    KISSY.one('input[id=\"nationality\"]').val($('#mt_national').html())
}
if (KISSY.one('input[id=\"hjaddr\"]')&& $('#mt_hukoucitynow').html()&& $('#mt_hukoucitynow_city').html()) {
    KISSY.one('input[id=\"hjaddr\"]').val($('#mt_hukoucitynow').html()+ $('#mt_hukoucitynow_city').html())
}
if (KISSY.one('input[id=\"political\"]')&& $('#mt_polistatus').html() ) {
    KISSY.one('input[id=\"political\"]').val($('#mt_polistatus').html())
}

for (var i = 0; i < $('.infopledu').length; i++) {
    if ($('.infopledu .mt_education').html()&& $('.infopledu .mt_degree').html()) {
        if ($('.infopledu .mt_education').html()== $('.infopl .mt_edu').html()) {
            KISSY.one('input[id=\"higdegree\"]').val($('.infopledu .mt_degree').html())
        }
    }
}

for (var i = 0; i < $('.infoparttimejobs').length; i++) {
    if (KISSY.one('input[id=\"cjwork\"]')&& $('.infoparttimejobs .mt_startDate').eq(i).html()) {
        KISSY.one('input[id=\"cjwork\"]').val($('.infoparttimejobs .mt_startDate').eq(i).html() )
    }
}


for(var i = 0; i < $('.infopledu').length; i++){
    if ($('.infopledu .mt_education').eq(i).html()== $('#mt_edu').eq(i).html()) {
        KISSY.one('input[id=\"higzy\"]').val($('.infopledu .mt_professional').eq(i).html())
    }
}

for(var i = 0; i < $('.infopledu').length; i++){
    if ($('.infopledu .mt_education').eq(i).html()== $('#mt_edu').eq(i).html()) {
        KISSY.one('input[id=\"higyx\"]').val($('.infopledu .mt_academy').eq(i).html())
    }
}

for (var i = 0; i < $('.infopledu').length; i++){
        var j=i+1;
        if ($('.infopledu .mt_startYear').eq(i+1).html() ) {
            var EduStartDate=$('.infopledu .mt_startYear').eq(i).html();
            var EduEndDate=$('.infopledu .mt_endYear').eq(i).html();
            $('#education tr:eq('+j+') td').eq(0).html(EduStartDate);
            $('#education tr:eq('+j+') td').eq(1).html(EduEndDate);
        }
        if ($('.infopledu .mt_schoolName').eq(i-4).html()) {       
            var SchoolNamePro=($('.infopledu .mt_schoolName').eq(i-4).html()+' '+$('.infopledu .mt_professional').eq(i-4).html() );
            $('#education tr:eq('+j+') td').eq(2).html(SchoolNamePro);
        }
        if ($('.mt_degree').eq(i+1).html()) {
            var Degree=$('.mt_degree').eq(i).html();
            $('#education tr:eq('+j+') td').eq(4).html(Degree);
        }
}

for (var i = 0; i < $('.infofulltimejobs').length; i++){
    if (KISSY.one('table[id=\"workjl\"]')){
        var j=i+1;
        var WorkStartDate=$('.infofulltimejobs .mt_startDate').eq(i).html();
        var WorkEndDate=$('.infofulltimejobs .mt_endDate').eq(i).html();
        $('#workjl tr:eq('+j+') td').eq(0).html(WorkStartDate);
        $('#workjl tr:eq('+j+') td').eq(1).html(WorkEndDate);
            
        var CompanyNameDepa=($('.infofulltimejobs .mt_companyName').eq(i).html()+' '+$('.infofulltimejobs .mt_department').eq(i).html() );
        $('#workjl tr:eq('+j+') td').eq(2).html(CompanyNameDepa);
    
        var Position=$('.infofulltimejobs .mt_positionName').eq(i).html();
        $('#workjl tr:eq('+j+') td').eq(3).html(Position);

        var WorkDetails=$('.infofulltimejobs .mt_workContent .workContent').eq(i).html();
        $('#workjl tr:eq('+j+') td').eq(4).html(WorkDetails);
    }
}

for (var i = 0; i < $('.infoschaward').length; i++){
    if (KISSY.one('textarea[id=\"jcqk\"]') && $('.mt_schawradList').html() ) {
        document.getElementById('jcqk').value = $('.mt_schawradList').eq(i-1).html();
        document.getElementById('jcqk').value += $('.mt_schawradList').eq(i).html();
    }
}

for (var i = 0; i < $('.infoplcerti').length; i++){
    if (KISSY.one('textarea[id=\"zgzs\"]')) {
        document.getElementById('zgzs').value =$('.mt_certificateName').eq(i-1).html();
        document.getElementById('zgzs').value += $('.mt_certificateName').eq(i).html();
    }
}

for (var i = 0; i < $('.infoparttimejobs').length; i++){
    if (KISSY.one('textarea[id=\"ssjl\"]')) {
        var Pn_Cn_Wc='职位名称：'+ $('.mt_positionName').eq(i-1).html()+'公司名称：'+ $('.mt_companyName').eq(i-1).html()+ '工作内容：'+$('.workContent').eq(i-1).html()+'；';
        document.getElementById('ssjl').value = Pn_Cn_Wc;
        Pn_Cn_Wc=document.getElementById('ssjl').value +'职位名称：'+ $('.mt_positionName').eq(i).html()+'公司名称：' + $('.mt_companyName').eq(i).html()+ '工作内容：'+ $('.workContent').eq(i).html()+'；';
        document.getElementById('ssjl').value =Pn_Cn_Wc;
    }
}
if (KISSY.one('textarea[id=\"qt\"]')) {
    var Si_H_A='自我评价：'+ $('#mt_selfIntro').html()+';   爱好特长：'+
    $('#mt_skill').html()+';   其他技能：'+ 
    $('#mt_hobbies').html()+';   个人成就：'+ 
    $('#achievement').html();
    document.getElementById('qt').value =Si_H_A;
}