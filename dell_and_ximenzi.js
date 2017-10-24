$(function() {
    $('.quick-write').click(function() {
        if ($('#jm_qiuck_cover')) {
            $('#jm_qiuck_cover').fadeIn();
            setTimeout(function() {
                $('#jm_qiuck_cover').fadeOut()
            }, 3000);
        };
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
            // extend({a:1}, {b:1, a:2}) -> {a:1, b:1}
            extend: function(o1, o2) {
                for (var i in o2)
                    if (typeof o1[i] === 'undefined') {
                        o1[i] = o2[i]
                    }
                return o1
            },
            //2013-9-8 -> 2013-09-08
            addZero: function(date) {
                date = date.split('-');
                for (var i = 0; i < date.length; i++) {
                    if (date[i] < 10 && date[i].length < 2) {
                        date[i] = '0' + date[i];
                    }
                }
                return date.join('-');
            }
        };

        function AutoWrite(obj) {
            help.extend(this, obj);
        }

        help.extend(AutoWrite.prototype, {
            textWrite: function(callback) {
                if (callback) {
                    if (this.from && this.to) {
                        callback();
                    }
                } else {
                    if (this.from && this.to) {
                        this.to.val(this.from.html());
                    }
                }
            },
            valueWrite: function(value) {
                if (this.from.length > 0 && this.to.length > 0) {
                    this.to.val(value);
                }

            },
            checkWrite: function(callback) {
                console.log(this.to);
                if (this.from && this.to) {
                    callback();
                }
            },
            selectWrite: function() {

            }
        });


        if($('input[name=\"cntruename\"]').length !=0) {
            //姓名
            var name = new AutoWrite({
                from: $('#mt_name'),
                to: $('input[name=\"cntruename\"]')
            });
            name.textWrite();
            //英文名字
            var ename = new AutoWrite({
                from: $('#mt_ywname'),
                to: $('input[name=\"entruename\"]')
            });
            ename.textWrite();
            //性别
            var sex = new AutoWrite({
                from: $('#mt_sex'),
                to: $('input[name=\"sex\"]')
            });
            sex.checkWrite(function () {
                if (sex.from.html() === '男') {
                    sex.to.eq(0).attr('checked', 'checked');
                } else {
                    sex.to.eq(1).attr('checked', 'checked');
                }
            });
            //出生年月日
            var birthdayyear = new AutoWrite({//年
                from: $('#mt_biryear'),
                to: $('select[name=\"year\"]')
            });
            birthdayyear.checkWrite(function () {
                var opt = birthdayyear.to.get(0).options;
                for (var i = 0; i < opt.length; i++) {
                    if (opt[i].innerHTML == birthdayyear.from.html()) {
                        opt[i].selected = true;
                        break;
                    }
                }
            });
            var birthdaymon = new AutoWrite({//月
                from: $('#mt_birmonth'),
                to: $('select[name=\"month\"]')
            });
            birthdaymon.checkWrite(function () {
                var opt = birthdaymon.to.get(0).options;
                for (var i = 0; i < opt.length; i++) {
                    if (opt[i].innerHTML == birthdaymon.from.html()) {
                        opt[i].selected = true;
                        break;
                    }
                }
            });
            var birthdayday = new AutoWrite({//日
                from: $('#mt_birday'),
                to: $('select[name=\"day\"]')
            });
            birthdayday.checkWrite(function () {
                var opt = birthdayday.to.get(0).options;
                for (var i = 0; i < opt.length; i++) {
                    if (opt[i].innerHTML == birthdayday.from.html()) {
                        opt[i].selected = true;
                        break;
                    }
                }
            });
            //毕业时间
            var maxGra = help.getGraguate();
            var graduation_y = new AutoWrite({//年
                from: $('.infopledu .mt_endYearY').eq(maxGra),
                to: $('select[name=\"gyear\"]')
            });
            graduation_y.checkWrite(function () {
                var opt = graduation_y.to.get(0).options;
                for (var i = 0; i < opt.length; i++) {
                    if (opt[i].innerHTML == graduation_y.from.html()) {
                        opt[i].selected = true;
                        break;
                    }
                }
            });
            var graduation_m = new AutoWrite({//月
                from: $('.infopledu .mt_endYearM').eq(maxGra),
                to: $('select[name=\"gmonth\"]')
            });
            graduation_m.checkWrite(function () {
                var opt = graduation_m.to.get(0).options;
                for (var i = 0; i < opt.length; i++) {
                    if (opt[i].innerHTML == graduation_m.from.html()) {
                        opt[i].selected = true;
                        break;
                    }
                }
            });
            //学历
            var diploma = new AutoWrite({
                from: $('#mt_edu'),
                to: $('span[name=\"#teducation\"]')
            });
            diploma.checkWrite(function () {
                var value = diploma.from.html();
                switch (value) {
                    case '大学本科-一本':
                    case '大学本科-二本':
                    case '大学本科-三本':
                    case '海外本科':
                        $('#teducation').html('本科');
                        break;
                    case '硕士研究生':
                        $('#teducation').html('硕士');
                        break;
                    case '博士研究生':
                        $('#teducation').html('博士');
                        diploma.to.val();
                        break;
                    case '大学专科':
                        $('#teducation').html('大专');
                        break;
                    case 'MBA':
                        $('#teducation').html('MBA');
                        break;
                    case '高中':
                        $('#teducation').html('高中');
                        break;
                    case '中专':
                        $('#teducation').html('中专');
                        break;
                    case '技校/职高':
                        $('#teducation').html('中技');
                        break;
                    case '初中及以下':
                        $('#teducation').html('初中');
                        break;
                    default:
                        $('#teducation').html('其他');
                        break;
                }
            });
            //专业
            var professional = new AutoWrite({
                from: $('.mt_professional').eq(maxGra),
                to: $('input[name=\"cndepartment\"]')
            });
            professional.textWrite();
            //户口所在地
            var hukoucity = new AutoWrite({//省
                from: $('#mt_hukoucity'),
                to: $('span[name=\"#tbpa\"]')
            });
            hukoucity.textWrite(function () {
                $('#tbpa').html(hukoucity.from.html());
            });
            var hukoucity_city = new AutoWrite({//市
                from: $('#mt_hukoucity_city'),
                to: $('span[name=\"#tbpb\"]')
            });
            hukoucity_city.textWrite(function () {
                $('#tbpb').html(hukoucity_city.from.html());
            });
            //目前所在地
            var livecity_pro = new AutoWrite({//省
                from: $('#mt_livecity_pro'),
                to: $('span[name=\"#tpa\"]')
            });
            livecity_pro.textWrite(function () {
                $('#tpa').html(livecity_pro.from.html());
            });
            var livecity_city = new AutoWrite({//市
                from: $('#mt_livecity_city'),
                to: $('span[name=\"#tpb\"]')
            });
            livecity_city.textWrite(function () {
                $('#tpb').html(livecity_city.from.html());
            })
            //身份证号
            var license = new AutoWrite({
                from: $('#mt_id'),
                to: $('input[name=\"sfz\"]')
            });
            license.textWrite();
            // 邮箱
            var email = new AutoWrite({
                from: $('#mt_email'),
                to: $('input[name=\"email\"]')
            });
            email.textWrite();
            // 手机
            var phone = new AutoWrite({
                from: $('#mt_tel'),
                to: $('input[name=\"mobile\"]')
            });
            phone.textWrite();
            //固定电话
            var telphone = new AutoWrite({
                from: $('#mt_gudingtel'),
                to: $('input[name=\"telphone\"]')
            });
            telphone.textWrite();
            //通信地址
            var address = new AutoWrite({
                from: $('#mt_add'),
                to: $('input[name=\"cnaddress\"]')
            });
            address.textWrite();
            //邮政编码
            var zip = new AutoWrite({
                from: $('#mt_zip'),
                to: $('input[name=\"zipcode\"]')
            });
            zip.textWrite();
            //个人主页
            var profile = new AutoWrite({
                from: $('#mt_profile'),
                to: $('input[name=\"homepage\"]')
            });
            profile.textWrite();
        }
        else if($('#submenu').length != 0){
            if($('input[name=\"cnname\"]').length > 0) {
                // 中文姓名~
                var name = new AutoWrite({
                    from: $('#mt_name'),
                    to: $('input[name=\"cnname\"]')
                });
                name.textWrite();
                //姓（拼音）
                //名（拼音）
                // 性别~
                var sex = new AutoWrite({
                    from: $('#mt_sex'),
                    to: $('input[name=\"sex\"]')
                });
                sex.checkWrite(function () {
                    if (sex.from.html() === '男') {
                        sex.to.eq(0).attr('checked', 'checked');
                    } else {
                        sex.to.eq(1).attr('checked', 'checked');
                    }
                });
                // 出生年月日~
                var birthday_year = new AutoWrite({//年~
                    from: $('#mt_biryear'),
                    to: $('select[name=\"byear\"]')
                });
                birthday_year.checkWrite(function () {
                    var opt = birthday_year.to.get(0).options;
                    for (var i = 0; i < opt.length; i++) {
                        if (opt[i].innerHTML == birthday_year.from.html()) {
                            opt[i].selected = true;
                            break;
                        }
                    }
                });
                var birthday_month = new AutoWrite({//月~
                    from: $('#mt_birmonth'),
                    to: $('select[name=\"bmonth\"]')
                });
                birthday_month.checkWrite(function () {
                    var opt = birthday_month.to.get(0).options;
                    for (var i = 0; i < opt.length; i++) {
                        if (opt[i].innerHTML == birthday_month.from.html()) {
                            opt[i].selected = true;
                            break;
                        }
                    }
                });
                var birthday_day = new AutoWrite({//日~
                    from: $('#mt_birday'),
                    to: $('select[name=\"bday\"]')
                });
                birthday_day.checkWrite(function () {
                    var opt = birthday_day.to.get(0).options;
                    for (var i = 0; i < opt.length; i++) {
                        if (opt[i].innerHTML == birthday_day.from.html()) {
                            opt[i].selected = true;
                            break;
                        }
                    }
                });
                //健康状况
                //如有病史请写出
                //证件~
                var idtype = new AutoWrite({
                    from: $('#mt_idtype'),
                    to: $('select[name=\"PersonIDType\"]')
                });
                idtype.checkWrite(function () {
                    var opt = idtype.to.get(0).options;
                    if (idtype.from.html() === '身份证') {
                        opt[1].selected = true;
                    } else if (idtype.from.html() === '护照') {
                        opt[2].selected = true;
                    }
                });
                //证件号码~
                var id = new AutoWrite({
                    from: $('#mt_id'),
                    to: $('input[name=\"PersonID\"]')
                });
                id.textWrite();
                //最高学历~
                var edu = new AutoWrite({
                    from: $('#mt_edu'),
                    to: $('select[name=\"HighDegree\"]')
                });
                edu.checkWrite(function () {
                    var opt = edu.to.get(0).options;
                    if (edu.from.html() == '大学本科-一本' || edu.from.html() == '大学本科-二本' || edu.from.html() == '大学本科-三本') {
                        opt[2].selected = true;
                    }
                    else if (edu.from.html() == '双学士') {
                        opt[3].selected = true;
                    }
                    else if (edu.from.html() == '硕士研究生') {
                        opt[4].selected = true;
                    }
                    else if (edu.from.html() == 'MBA') {
                        opt[5].selected = true;
                    }
                    else if (edu.from.html() == '博士研究生') {
                        opt[6].selected = true;
                    }
                    else {
                        opt[1].selected = true;
                    }
                });
                //最高学历所在学校
                //最高学历专业
                //毕业日期
                //最早到岗时间
                // 户口所在地~
                var nativeplace = new AutoWrite({//省~
                    from: $('#mt_nativeplace'),
                    to: $('#p_area_id2_0')
                });
                nativeplace.checkWrite(function () {
                    var opt = nativeplace.to.get(0).options;
                    for (var i = 0; i < opt.length; i++) {
                        if (opt[i].innerHTML == nativeplace.from.html()) {
                            opt[i].selected = true;
                            break;
                        }
                    }
                });
                var nativecity = new AutoWrite({//市~
                    from: $('#mt_native_city'),
                    to: $('#p_area_id2_1')
                });
                nativecity.checkWrite(function () {
                    var opt = nativecity.to.get(0).options;
                    for (var i = 0; i < opt.length; i++) {
                        if (opt[i].innerHTML == nativecity.from.html()) {
                            opt[i].selected = true;
                            break;
                        }
                    }
                });
                //目前所在地~
                var livecitypro = new AutoWrite({//省~
                    from: $('#mt_livecity_pro'),
                    to: $('#p_area_id3_0')
                });
                livecitypro.checkWrite(function () {
                    var opt = livecitypro.to.get(0).options;
                    for (var i = 0; i < opt.length; i++) {
                        if (opt[i].innerHTML == livecitypro.from.html()) {
                            opt[i].selected = true;
                            break;
                        }
                    }
                });
                var livecitycity = new AutoWrite({//市~
                    from: $('#mt_livecity_city'),
                    to: $('#p_area_id3_1')
                });
                livecitycity.checkWrite(function () {
                    var opt = livecitycity.to.get(0).options;
                    for (var i = 0; i < opt.length; i++) {
                        if (opt[i].innerHTML == livecitycity.from.html() || opt[i].innerHTML == livecitycity.from.html()) {
                            opt[i].selected = true;
                            break;
                        }
                    }
                });
                //期望月薪
                //自我评价~
                var intro = new AutoWrite({
                    from: $('#mt_selfIntro'),
                    to: $('textarea[name=\"improvement\"]')
                });
                intro.textWrite();
                //电子邮箱~
                var email = new AutoWrite({
                    from: $('#mt_email'),
                    to: $('input[name=\"email\"]')
                });
                email.textWrite();
                //联系电话~
                var phone = new AutoWrite({
                    from: $('#mt_tel'),
                    to: $('input[name=\"contact1\"]')
                });
                phone.textWrite();
                //其他联系方式
                //联系地址~
                var address = new AutoWrite({
                    from: $('#mt_add'),
                    to: $('input[name=\"address\"]')
                });
                address.textWrite();
                //邮政编码~
                var zip = new AutoWrite({
                    from: $('#mt_zip'),
                    to: $('input[name=\"zipcode\"]')
                });
                zip.textWrite();
            }

//教育经历
            else if($('input[name=\"reference\"]').length > 0) {
                //开始时间~
                var maxGra = help.getGraguate();
                var startYearY = new AutoWrite({//年~
                    from: $('.mt_startYearY').eq(maxGra),
                    to: $('select[name=\"syear\"]')
                });
                startYearY.checkWrite(function () {
                    var opt = startYearY.to.get(0).options;
                    for (var i = 0; i < opt.length; i++) {
                        if (opt[i].innerHTML == startYearY.from.html()) {
                            opt[i].selected = true;
                            break;
                        }
                    }
                });
                var startYearM = new AutoWrite({//月~
                    from: $('.mt_startYearM').eq(maxGra),
                    to: $('select[name=\"smonth\"]')
                });
                startYearM.checkWrite(function () {
                    var opt = startYearM.to.get(0).options;
                    for (var i = 0; i < opt.length; i++) {
                        if (opt[i].innerHTML == startYearM.from.html()) {
                            opt[i].selected = true;
                            break;
                        }
                    }
                });
                //结束时间~
                var endYearY = new AutoWrite({//年~
                    from: $('.mt_endYearY').eq(maxGra),
                    to: $('select[name=\"eyear\"]')
                });
                endYearY.checkWrite(function () {
                    var opt = endYearY.to.get(0).options;
                    for (var i = 0; i < opt.length; i++) {
                        if (opt[i].innerHTML == endYearY.from.html()) {
                            opt[i].selected = true;
                            break;
                        }
                    }
                });
                var endYearM = new AutoWrite({//月~
                    from: $('.mt_endYearM').eq(maxGra),
                    to: $('select[name=\"emonth\"]')
                });
                endYearM.checkWrite(function () {
                    var opt = endYearM.to.get(0).options;
                    for (var i = 0; i < opt.length; i++) {
                        if (opt[i].innerHTML == endYearM.from.html()) {
                            opt[i].selected = true;
                            break;
                        }
                    }
                });
                //学校
                //专业
                //学位~
                var degree = new AutoWrite({
                    from: $('.mt_degree').eq(maxGra),
                    to: $('select[name=\"degree\"]')
                });
                degree.checkWrite(function () {
                    var opt = degree.to.get(0).options;
                    if (degree.from.html() == '学士') {
                        opt[2].selected = true;
                    }
                    else if (degree.from.html() == '双学士') {
                        opt[3].selected = true;
                    }
                    else if (degree.from.html() == '硕士') {
                        opt[4].selected = true;
                    }
                    else if (degree.from.html() == 'MBA') {
                        opt[5].selected = true;
                    }
                    else if (degree.from.html() == '博士') {
                        opt[6].selected = true;
                    }
                    else {
                        opt[1].selected = true;
                    }
                });
                //GPA~
                var gpascore = new AutoWrite({
                    from: $('.mt_professionalranking').eq(maxGra),
                    to: $('select[name=\"GPA\"]')
                });
                gpascore.checkWrite(function () {
                    var opt = gpascore.to.get(0).options;
                    if (gpascore.from.html() == '前5%') {
                        opt[1].selected = true;
                    }
                    else if (gpascore.from.html() == '前10%') {
                        opt[2].selected = true;
                    }
                    else if (gpascore.from.html() == '前20%') {
                        opt[3].selected = true;
                    }
                    else if (gpascore.from.html() == '前30%') {
                        opt[4].selected = true;
                    }
                    else {
                        opt[5].selected = true;
                    }
                });
                //课程~
                var major = new AutoWrite({
                    from: $('.mt_major').eq(maxGra),
                    to: $('textarea[name=\"courses\"]')
                });
                major.textWrite();
                //证明人姓名~
                var tutorname = new AutoWrite({
                    from: $('.mt_tutorname').eq(maxGra),
                    to: $('input[name=\"reference\"]')
                });
                tutorname.textWrite();
                //联系电话~
                var tutorphone = new AutoWrite({
                    from: $('.mt_tutorphone').eq(maxGra),
                    to: $('input[name=\"phone\"]')
                });
                tutorphone.textWrite();
                //电子邮件账号
            }

//奖励&活动

//项目经验
            else if($('input[name=\"ProjectName\"]').length > 0){
                var pstartdatey = new AutoWrite({
                    from: $('.mt_prostarttime'),
                    to: $('select[name=\"syear\"]')
                });
                pstartdatey.checkWrite(function () {
                    var opt = pstartdatey.to.get(0).options;
                    for (var i = 0; i < opt.length; i++) {
                        if (opt[i].innerHTML == pstartdatey.from.html().substr(0, 4)) {
                            opt[i].selected = true;
                            break;
                        }
                    }
                });
                var pstartdatem = new AutoWrite({
                    from: $('.mt_prostarttime'),
                    to: $('select[name=\"smonth\"]')
                });
                pstartdatem.checkWrite(function () {
                    var opt = pstartdatem.to.get(0).options;
                    for (var i = 0; i < opt.length; i++) {
                        if (opt[i].innerHTML == pstartdatem.from.html().substr(5)) {
                            opt[i].selected = true;
                            break;
                        }
                    }
                });
                //结束时间~
                var penddatey = new AutoWrite({
                    from: $('.mt_proendtime'),
                    to: $('select[name=\"eyear\"]')
                });
                penddatey.checkWrite(function () {
                    var opt = penddatey.to.get(0).options;
                    for (var i = 0; i < opt.length; i++) {
                        if (opt[i].innerHTML == penddatey.from.html().substr(0,4)) {
                            opt[i].selected = true;
                            break;
                        }
                    }
                });
                var penddatem = new AutoWrite({
                    from: $('.mt_proendtime'),
                    to: $('select[name=\"emonth\"]')
                });
                penddatem.checkWrite(function () {
                    var opt = penddatem.to.get(0).options;
                    for (var i = 0; i < opt.length; i++) {
                        if (opt[i].innerHTML == penddatem.from.html().substr(5)) {
                            opt[i].selected = true;
                            break;
                        }
                    }
                });
                //项目名称~
                var projectName = new AutoWrite({
                    from: $('.mt_projectName'),
                    to:$('input[name=\"ProjectName\"]')
                });
                projectName.textWrite();
                //公司名称
                //职责~
                var projectDuty = new AutoWrite({
                    from: $('.mt_projectDuty'),
                    to:$('textarea[name=\"Responsibility\"]')
                });
                projectDuty.textWrite();
                //主要业绩
            }
//工作经验
            else if($('input[name=\"employer\"]').length > 0) {
                //开始时间~
                var startDatey = new AutoWrite({
                    from: $('.mt_startDate'),
                    to: $('select[name=\"sjyear\"]')
                });
                startDatey.checkWrite(function () {
                    var opt = startDatey.to.get(0).options;
                    for (var i = 0; i < opt.length; i++) {
                        if (opt[i].innerHTML == startDatey.from.html().substr(0, 4)) {
                            opt[i].selected = true;
                            break;
                        }
                    }
                });
                var startDatem = new AutoWrite({
                    from: $('.mt_startDate'),
                    to: $('select[name=\"sjmonth\"]')
                });
                startDatem.checkWrite(function () {
                    var opt = startDatem.to.get(0).options;
                    for (var i = 0; i < opt.length; i++) {
                        if (opt[i].innerHTML == startDatem.from.html().substr(5)) {
                            opt[i].selected = true;
                            break;
                        }
                    }
                });
                //结束时间~
                var endDatey = new AutoWrite({
                    from: $('.mt_endDate'),
                    to: $('select[name=\"ejyear\"]')
                });
                endDatey.checkWrite(function () {
                    var opt = endDatey.to.get(0).options;
                    for (var i = 0; i < opt.length; i++) {
                        if (opt[i].innerHTML == endDatey.from.html().substr(0,4)) {
                            opt[i].selected = true;
                            break;
                        }
                    }
                });
                var endDatem = new AutoWrite({
                    from: $('.mt_endDate'),
                    to: $('select[name=\"ejmonth\"]')
                });
                endDatem.checkWrite(function () {
                    var opt = endDatem.to.get(0).options;
                    for (var i = 0; i < opt.length; i++) {
                        if (opt[i].innerHTML == endDatem.from.html().substr(5)) {
                            opt[i].selected = true;
                            break;
                        }
                    }
                });
                //公司名称~
                var companyName = new AutoWrite({
                    from: $('.mt_companyName'),
                    to: $('input[name=\"employer\"]')
                });
                companyName.textWrite();
                //职位~
                var positionName = new AutoWrite({
                    from: $('.mt_positionName'),
                    to: $('input[name=\"PositionHeld\"]')
                });
                positionName.textWrite();
                //职位类型~
                var workcat = new AutoWrite({
                    from: $('.mt_workcat'),
                    to: $('input[name=\"PositionType\"]')
                });
                workcat.checkWrite(function () {
                    if (workcat.from.html() == '全职') {
                        workcat.to.eq(0).attr('checked', 'checked');
                    }
                    else if (workcat.from.html() == '实习') {
                        workcat.to.eq(2).attr('checked', 'checked');
                    }
                    else {
                        workcat.to.eq(1).attr('checked', 'checked');
                    }
                });
                //月薪~
                var salaryMonth = new AutoWrite({
                    from: $('.mt_salaryMonth'),
                    to: $('input[name=\"salary\"]')
                });
                salaryMonth.textWrite();
                //离职原因~
                var reasons = new AutoWrite({
                    from: $('.mt_reasons'),
                    to: $('input[name=\"ReasonOfDemission\"]')
                });
                reasons.textWrite();
                //职责和业绩~
                var workDes = new AutoWrite({
                    from: $('.workDes'),
                    to: $('textarea[name=\"Responsibilities\"]')
                });
                workDes.textWrite();
                //证明人~
                var reterenceName = new AutoWrite({
                    from: $('.mt_reterenceName'),
                    to: $('input[name=\"ReferenceName\"]')
                });
                reterenceName.textWrite();
                //联系电话~
                var reterence_phone = new AutoWrite({
                    from: $('.mt_reterence_phone'),
                    to: $('input[name=\"ContactPhone\"]')
                });
                reterence_phone.textWrite();
                //电子邮件账号
            }
//家庭成员
            else if($('input[name=\"Name\"]').length > 0){
                //姓名~
                var fmname = new AutoWrite({
                    from:$('#mt_fmname'),
                    to:$('input[name=\"Name\"]')
                });
                fmname.textWrite();
                //关系~
                var fmrelation = new AutoWrite({
                    from:$('#mt_fmrelation'),
                    to:$('input[name=\"Relationship\"]')
                });
                fmrelation.textWrite();
                //公司~
                var fmwork = new AutoWrite({
                    from:$('#mt_fmwork'),
                    to:$('input[name=\"Company\"]')
                });
                fmwork.textWrite();
                //职位~
                var fmposition = new AutoWrite({
                    from:$('#mt_fmposition'),
                    to:$('input[name=\"Title\"]')
                });
                fmposition.textWrite();
                //电话~
                var fmphone = new AutoWrite({
                    from:$('#mt_fmphone'),
                    to:$('input[name=\"Telephone\"]')
                });
                fmphone.textWrite();
                //目前住址
            }
//技能
            else if($('input[name=\"Cet4\"]').length > 0) {
                //CET4~
                //CET6~
                //TEM4~
                //TEM8~
                var len = $('.mt_skillEngLevel');
                var len1 = $('.mt_skillEngSorce');
                var length = len.length;
                for (var i = 0; i < length; i++) {
                    if (len.get(i).innerHTML == '大学英语四级') {
                        var English = new AutoWrite({
                            from: len1.get(i),
                            to: $('input[name=\"Cet4\"]')
                        });
                        English.textWrite_english();
                    }
                    else if (len.get(i).innerHTML == '大学英语六级') {
                        var English = new AutoWrite({
                            from: len1.get(i),
                            to: $('input[name=\"Cet6\"]')
                        });
                        English.textWrite_english();
                    }
                    else if (len.get(i).innerHTML == '专业四级') {
                        var English = new AutoWrite({
                            from: len1.get(i),
                            to: $('input[name=\"Tem4\"]')
                        });
                        English.textWrite_english();
                    }
                    else if (len.get(i).innerHTML == '专业八级') {
                        var English = new AutoWrite({
                            from: len1.get(i),
                            to: $('input[name=\"Tem8\"]')
                        });
                        English.textWrite_english();
                    }
                }

                //TOFEL~
                //GRE~
                //GMAT~
                var lenO = $('.mt_otherSkillEngLevel');
                var lenO1 = $('.mt_otherSkillEngSorce');
                var lengthO = lenO.length;
                for (var i = 0; i < lengthO; i++) {
                    if (lenO.get(i).innerHTML == '托福') {
                        var English = new AutoWrite({
                            from: lenO1.get(i),
                            to: $('input[name=\"TOEFL\"]')
                        });
                        English.textWrite_english();
                    }
                    else if (lenO.get(i).innerHTML == 'GRE') {
                        var English = new AutoWrite({
                            from: lenO1.get(i),
                            to: $('input[name=\"GRE\"]')
                        });
                        English.textWrite_english();
                    }
                    else if (lenO.get(i).innerHTML == 'GMAT') {
                        var English = new AutoWrite({
                            from: lenO1.get(i),
                            to: $('input[name=\"GMAT\"]')
                        });
                        English.textWrite_english();
                    }
                }

                //其他英语证书
                //口语水平
                //母语
                //其它母语
                //其他语言~
                var otherlan = new AutoWrite({
                    from: $('.mt_skillOtherLang'),
                    to: $('select[name=\"OtherLanguage\"]')
                });
                otherlan.checkWrite(function () {
                    var opt = otherlan.to.get(0).options;
                    var value = otherlan.from.html();
                    switch (value) {
                        case '法语':
                            opt[1].selected = true;
                            break;
                        case '日语':
                            opt[2].selected = true;
                            break;
                        case '德语':
                            opt[3].selected = true;
                            break;
                        case '西班牙语':
                            opt[4].selected = true;
                            break;
                        case '意大利语':
                            opt[5].selected = true;
                            break;
                        case '韩语':
                            opt[6].selected = true;
                            break;
                        default:
                            opt[0].selected = true;
                            break;
                    }
                });

                //水平

                //计算机技能
                //计算机证书
                //其他技能~
                var hobbies = new AutoWrite({
                    from: $('#mt_hobbies'),
                    to: $('textarea[name=\"OtherSkills\"]')
                });
                hobbies.textWrite();
                //业余爱好~
                var skills = new AutoWrite({
                    from: $('#mt_skill'),
                    to: $('textarea[name=\"Hobbies\"]')
                });
                skills.textWrite();
            }
        }

    });
});