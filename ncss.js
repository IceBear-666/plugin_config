if($('#jm_qiuck_cover')){$('#jm_qiuck_cover').fadeIn();
setTimeout(function(){$('#jm_qiuck_cover').fadeOut()},1000)}

if ($('input[name=\"realName\"]')) {
    $('input[name=\"realName\"]').val($('#mt_name').html())
}
if ($('input[name=\"height\"]')) {
    $('input[name=\"height\"]').val($('#mt_height').html())
}
if ($('select[name=\"gender\"]').html() && $('#mt_sex').html() == '男') {
    document.getElementById('gender').option(1).selected = true;
}
if ($('select[name=\"gender\"]').html() && $('#mt_sex').html() == '女') {
    document.getElementById('gender').options[2].selected = true;
}
if ($('input[name=\"startYear\"]') && $('#mt_birthdaydot').html()) {
    $('input[name=\"startYear\"]').val($('#mt_birthdaydot').html().split('.')[0])
}
if ($('input[name=\"majorName\"]') && $('.mt_professional').html()) {
    $('input[name=\"majorName\"]').val($('.mt_professional').html())
}
if ($('input[name=\"eendYear\"]') && $('.infopledu .mt_endYearY').html()) {
    $('input[name=\"eendYear\"]').val($('.infopledu .mt_endYearY').html())
}
if ($('input[name=\"idNo\"]') && $('#mt_id').html()) {
    $('input[name=\"idNo\"]').val($('#mt_id').html())
}
if ($('input[name=\"qualificationName\"]')) {
    if ($('#mt_gradutetime').html().split('-')[0]>2016) {
        $('input[name=\"qualificationName\"]').val('学生')
    }
    else(
        $('input[name=\"qualificationName\"]').val('在职员工')
        )
}
if ($('input[name=\"homeAddress\"]')) {
    $('input[name=\"homeAddress\"]').val($('#mt_postadd').html())
}

if ($('input[name=\"mobilephone\"]')) {
    $('input[name=\"mobilephone\"]').val($('#mt_tel').html())
}
if ($('input[name=\"telephone\"]')) {
    $('input[name=\"telephone\"]').val($('#mt_gudingtel').html())
}
if ($('input[name=\"email\"]')) {
    $('input[name=\"email\"]').val($('#mt_email').html())
}
if ($('input[name=\"contactAddress\"]') && $('#mt_livecity_pro').html()) {
    $('input[name=\"contactAddress\"]').val($('#mt_livecity_pro').html()+$('#mt_livecity_city').html()+$('#mt_add').html())
}
if ($('input[name=\"zipCode\"]') && $('#mt_zip').html()) {
    $('input[name=\"zipCode\"]').val($('#mt_zip').html())
}

if ($('#mt_fmrelation').html()=='母亲' || $('#mt_tel').html()=='父亲') {
    if ($('input[name=\"namef\"]')) {
        $('input[name=\"namef\"]').val($('#mt_fmname').html())
    }
    if ($('input[name=\"workinfof\"]')) {
    $('input[name=\"workinfof\"]').val($('#mt_fmwork').html()+$('#mt_fmposition').html())
    }
}
else {
    if ($('input[name=\"title1\"]')) {
        $('input[name=\"title1\"]').val($('#mt_fmrelation').html())
    }
    if ($('input[name=\"name1\"]')) {
        $('input[name=\"name1\"]').val($('#mt_fmname').html())
    }
    if ($('input[name=\"workinfo1\"]')) {
    $('input[name=\"workinfo1\"]').val($('#mt_fmwork').html()+$('#mt_fmposition').html())
    }
}

var k0='奖状名称：'+$('.infoschaward .mt_awardsName').eq(0).html()+'。  奖状描述：'+$('.infoschaward .mt_awardsDes').eq(0).html()+';  ';
if ($('textarea[id=\"honors\"]') && $('.infoschaward .mt_awardsName').eq(0).html()) {
    $('textarea[id=\"honors\"]').val(k0);
}
for (var i = 1; i < $('.infoschaward').html().length; i++) {
    if ($('.infoschaward .mt_awardsName').eq(i).html()) {
        var k1='奖状名称：'+$('.infoschaward .mt_awardsName').eq(i).html()+'。  奖状描述：'+$('.infoschaward .mt_awardsDes').eq(i).html()+';  ';
        k0=k0+k1;
    }
}
$('textarea[id=\"honors\"]').val(k0);

var z0='证书名称：'+$('.infoplcerti .mt_certificateName').eq(0).html()+'。  证书描述：'
                   +$('.infoplcerti .mt_certificateDes').eq(0).html()+';  ';
if ($('textarea[id=\"otherSkill\"]') && $('.infoplcerti .mt_certificateName').eq(0).html()) {
    $('textarea[id=\"otherSkill\"]').val(z0);
}
for (var i = 1; i < $('.infoplcerti').html().length; i++) {
    if ($('.infoplcerti .mt_certificateName').eq(i).html()) {
        var z1='奖状名称：'+$('.infoplcerti .mt_certificateName').eq(i).html()+'。  证书描述：'
                           +$('.infoplcerti .mt_certificateDes').eq(i).html()+';  ';
        z0=z0+z1;
    }
}

var y0;
if ( $('.mt_skillEngLevel').html()) {
    y0='大学英语等级：'+$('.mt_skillEngLevel').html()+'。分数：'+$('.mt_skillEngSorce').html();
}                   

if ( $('.mt_otherSkillEngLevel').html()) {
    y0=y0+';   其他英语等级：$'+$('.mt_otherSkillEngLevel').html()+'。分数：'+$('.mt_otherSkillEngSorce').html();
} 
if ( $('.mt_skillOtherLang').html()) {
    y0=y0+';   其他外语：'+$('.mt_skillOtherLang').html()+'。  掌握程度：'+$('.mt_skillGraspLevel').html();
} 

$('textarea[id=\"otherSkill\"]').val(z0+y0+'。');

if ($('textarea[id=\"hobby\"]') && $('.infootherinfo').html()) {
    $('textarea[id=\"hobby\"]').val('自我评价：'+$('#mt_selfIntro').html()+'  爱好特长：'+$('#mt_skill').html()+'   其他技能：'
        +$('#mt_hobbies').html()+'  个人成就：'+$('#achievement').html());
}

document.getElementById('appAgree').checked=true;
if ($('#ethnicGroup')){
    for (var i = 0; i <56; i++) {
        if (document.getElementById('ethnicGroup').options[i].text== $('#mt_nation').html() ) {
            document.getElementById('ethnicGroup').options[i].selected = true;
            break;
        }
    }
}
if ($('input[id=\"aendYear\"]') && $('#mt_gradutetime').html().split('-')[0]) {
    $('input[id=\"aendYear\"]').val($('#mt_gradutetime').html().split('-')[0])
}
if ($('#startMonth')){
    for (var i = 0; i <12; i++) {
        if (document.getElementById('startMonth').options[i].text== $('#mt_birthdaydot').html().split('.')[1]) {
            document.getElementById('startMonth').options[i].selected = true;
            break;
        }
        if (document.getElementById('startMonth').options[i].text== '0'+$('#mt_birthdaydot').html().split('.')[1]) {
            document.getElementById('startMonth').options[i].selected = true;
            break;
        }
    }
}

if ($('#degreeCode')){
    for (var i = 0; i <5; i++) {
        if (document.getElementById('degreeCode').options[i].text==$('#mt_edu').html()) {
            document.getElementById('degreeCode').options[i].selected = true;
            break;
        }
        if ($('#mt_edu').html()=='大学专科') {
            document.getElementById('degreeCode').options[1].selected = true;
            break;
        }
        if ($('#mt_edu').html()=='大学本科-一本'|| $('#mt_edu').html()=='大学本科-二本'|| $('#mt_edu').html()=='大学本科-三本') {
            document.getElementById('degreeCode').options[2].selected = true;
            break;
        }
    }
}
if ($('input[id=\"aendYear\"]') && $('#mt_gradutetime').html().split('-')[0]) {
    $('input[id=\"aendYear\"]').val($('#mt_gradutetime').html().split('-')[0])
}
if ($('#aendMonth')){
    for (var i = 0; i <12; i++) {
        if (document.getElementById('aendMonth').options[i].text==$('.mt_endYearM').html()) {
            document.getElementById('aendMonth').options[i].selected = true;
            break;
        }
        if (document.getElementById('aendMonth').options[i].text== '0'+$('.mt_endYearM').html()) {
            document.getElementById('aendMonth').options[i].selected = true;
            break;
        }
    }
}

for (var i = 0; i < 40; i++){
    if ($('#mt_nativeplace').html()=='内蒙古') {
        document.getElementById('homePlace').options[5].selected = true;
        break;
    }
    if ($('#mt_nativeplace').html()=='广西') {
        document.getElementById('homePlace').options[20].selected = true;
        break;
    }
    if ($('#mt_nativeplace').html()=='宁夏') {
        document.getElementById('homePlace').options[30].selected = true;
        break;
    }
    if ($('#mt_nativeplace').html()=='新疆') {
        document.getElementById('homePlace').options[31].selected = true;
        break;
    }
    if ($('#mt_nativeplace').html()=='香港') {
        document.getElementById('homePlace').options[32].selected = true;
        break;
    }
    if ($('#mt_nativeplace').html()=='澳门') {
        document.getElementById('homePlace').options[33].selected = true;
        break;
    }
    if (document.getElementById('homePlace').options[i].text ==$('#mt_nativeplace').html()+'省') {
        document.getElementById('homePlace').options[i].selected = true;
        break;
    }
    if (document.getElementById('homePlace').options[i].text==$('#mt_nativeplace').html()+'市' ) {
        document.getElementById('homePlace').options[i].selected = true;
        break;
    } 
}


if ($('#degreeAName')){
    for (var i = 0; i <5; i++) {
        if (document.getElementById('degreeAName').options[i].text== $('.mt_degree').html()){
            document.getElementById('degreeAName').options[i].selected = true;
            break;
        }
    }
}
if ($('#politicalStatus')){
    for (var i = 0; i <5; i++) {
        if (document.getElementById('politicalStatus').options[i].text== $('#mt_polistatus').html()){
            document.getElementById('politicalStatus').options[i].selected = true;
            break;
        }
        else{
            document.getElementById('politicalStatus').options[3].selected = true;
        }
    }
}


if ($('#edegree')){
    for (var i = 0; i <5; i++) {
        if (document.getElementById('edegree').options[i].text==$('.mt_edu').html()) {
            document.getElementById('edegree').options[i].selected = true;
            break;
        }
        if ($('.mt_edu').html()=='高中') {
            document.getElementById('edegree').options[0].selected = true;
        }
        if ($('.mt_edu').html()=='大学专科') {
            document.getElementById('edegree').options[1].selected = true;
        }
        if ($('.mt_edu').html()=='大学本科-一本'|| $('.mt_edu').html()=='大学本科-二本'|| $('.mt_edu').html()=='大学本科-三本') {
            document.getElementById('edegree').options[2].selected = true;
        }
    }
}
if ($('input[name=\"eschoolName\"]')&& $('.mt_schoolName').html()) {
    $('input[name=\"eschoolName\"]').val($('.mt_schoolName').html())
}
if ($('input[name=\"estartYear\"]') && $('.infopledu .mt_startYearY').html()) {
    $('input[name=\"estartYear\"]').val($('.infopledu .mt_startYearY').html())
}
if ($('#estartMonth')){
    for (var i = 0; i <12; i++) {
        if (document.getElementById('estartMonth').options[i].text== '0'+$('.mt_startYearM').html()) {
            document.getElementById('estartMonth').options[i].selected = true;
            break;
        }
        if (document.getElementById('estartMonth').options[i].text== $('.mt_startYearM').html()) {
            document.getElementById('estartMonth').options[i].selected = true;
            break;
        }
    }
}
if ($('input[name=\"eendYear\"]') && $('.infopledu .mt_endYearY').html()) {
    $('input[name=\"eendYear\"]').val($('.infopledu .mt_endYearY').html())
}
if ($('#eendMonth')){
    for (var i = 0; i <12; i++) {
        if (document.getElementById('eendMonth').options[i].text== '0'+$('.mt_endYearM').html()) {
            document.getElementById('eendMonth').options[i].selected = true;
            break;
        }
        if (document.getElementById('eendMonth').options[i].text== $('.mt_endYearM').html()) {
            document.getElementById('eendMonth').options[i].selected = true;
            break;
        }
    }
}


if ($('input[name=\"wrecName\"]')) {
        $('input[name=\"wrecName\"]').val($('.mt_companyName').html())
}
if ($('input[name=\"wjobName\"]') ) {
    $('input[name=\"wjobName\"]').val($('.infoparttimejobs .mt_positionName').html()+'; '+$('.mt_workDes .workDes').html())
}
if ($('input[name=\"wstartYear\"]') && $('.infoparttimejobs .mt_startDate').html().split('-')[0]) {
    $('input[name=\"wstartYear\"]').val($('.infoparttimejobs .mt_startDate').html().split('-')[0])
}
if ($('#wstartMonth')){
    for (var i = 0; i <12; i++) {
        if (document.getElementById('wstartMonth').options[i].text==$('.mt_startDate').html().split('-')[1]) {
            document.getElementById('wstartMonth').options[i].selected = true;
            break;
        }
        if (document.getElementById('wstartMonth').options[i].text== '0'+$('.mt_startDate').html().split('-')[1]) {
            document.getElementById('wstartMonth').options[i].selected = true;
            break;
        }
    }
}
if ($('input[id=\"wendYear\"]') && $('.infoparttimejobs .mt_endDate').html().split('-')[0]) {
    $('input[id=\"wendYear\"]').val($('.infoparttimejobs .mt_endDate').html().split('-')[0])
}
if ($('#wendMonth')){
    for (var i = 0; i <12; i++) {
        if (document.getElementById('wendMonth').options[i].text==$('.mt_endDate').html().split('-')[1]) {
            document.getElementById('wendMonth').options[i].selected = true;
            break;
        }
        if (document.getElementById('wendMonth').options[i].text== '0'+$('.mt_endDate').html().split('-')[1]) {
            document.getElementById('wendMonth').options[i].selected = true;
            break;
        }
    }
}
if ($('.mt_maritalstatus').html() == '未婚') {
    document.getElementsByName('maritalStatus')[0].checked = true;
}
if ($('.mt_maritalstatus').html() == '已婚') {
    document.getElementsByName('maritalStatus')[1].checked = true;
}
