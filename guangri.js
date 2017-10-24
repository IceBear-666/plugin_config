        // 姓名
        if (KISSY.one('input[name=\"txtName\"]')) {
            KISSY.one('input[name=\"txtName\"]').val(KISSY.one('#mt_name').html());
        }
        // // 性别radio
        if (KISSY.one('#radSex_0') && KISSY.one('#mt_sex').html() == '男') {
            document.getElementById('radSex_0').click();
        }
        if (KISSY.one('#radSex_1') && KISSY.one('#mt_sex').html() == '女') {
            document.getElementById('radSex_1').click();
        }
        // // 出生日期
        if(KISSY.one('input[name=\"txtBoth\"]')){
        	KISSY.one('input[name=\"txtBoth\"]').val(KISSY.one('#mt_birth').html());
        }
        // 婚姻状况
        if (KISSY.one('#radHy_0') && KISSY.one('#mt_maritalstatus').html() == '未婚') {
            document.getElementById('radHy_0').click();
        }
        if (KISSY.one('#radHy_1') && KISSY.one('#mt_maritalstatus').html() == '已婚') {
            document.getElementById('radHy_1').click();
        }
        // //身高 
        if (KISSY.one('input[name=\"txtsg\"]')) {
            KISSY.one('input[name=\"txtsg\"]').val(KISSY.one('#mt_height').html());
        }
        // 户口所在地
        if (KISSY.one('input[name=\"txthkAddres\"]')) {
            KISSY.one('input[name=\"txthkAddres\"]').val(KISSY.one('#mt_hukoucitynow').html());
        }
 
        // 教育学历
        // Line1
        if(KISSY.one('input[name=\"Text1\"]')){
            KISSY.one('input[name=\"Text1\"]').val(KISSY.one('.mt_education').html());
        }
        if(KISSY.one('input[name=\"Text2\"]')){
        	KISSY.one('input[name=\"Text2\"]').val(KISSY.one('.mt_professional').html());
        }
        if(KISSY.one('.mt_schoolName').html() == '请选择大学（或直接输入学校名称）'){
            KISSY.one('input[name=\"Text3\"]').val(' ')
        }else{
            KISSY.one('input[name=\"Text3\"]').val(KISSY.one('.mt_schoolName').html());
        }
        if ($('#edu-list').children('div:eq(0)').children('div:eq(1)').children('table').children('tbody').children('tr:eq(11)').children('td:eq(1)').get(0).innerHTML == '' ) {
                KISSY.one('input[name=\"Text4\"]').val(' ');
        }else{
            KISSY.one('input[name=\"Text4\"]').val(KISSY.one('.mt_startYeardot').html()+'至'+KISSY.one('.mt_endYeardot').html()); 
        }  



        // line2
        if(KISSY.one('input[name=\"Text5\"]')){
            KISSY.one('input[name=\"Text5\"]').val($('#edu-list').children('div:eq(1)').children('.infopl').children('table').children('tbody').children('tr:eq(1)').children('td:eq(1)').html());
        }
        if(KISSY.one('input[name=\"Text6\"]')){
            KISSY.one('input[name=\"Text6\"]').val($('#edu-list').children('div:eq(1)').children('.infopl').children('table').children('tbody').children('tr:eq(4)').children('td:eq(1)').html());
        }
        if($('#edu-list').children('div:eq(1)').children('.infopl').children('table').children('tbody').children('tr:eq(0)').children('td:eq(1)').html() == '请选择大学（或直接输入学校名称）'){
            KISSY.one('input[name=\"Text7\"]').val(' ')
        }else{
           KISSY.one('input[name=\"Text7\"]').val($('#edu-list').children('div:eq(1)').children('.infopl').children('table').children('tbody').children('tr:eq(0)').children('td:eq(1)').html());
        }
        if ($('#edu-list').children('div:eq(1)').children('.infopl').children('table').children('tbody').children('tr:eq(11)').children('td:eq(1)').get(0) == undefined) {
             KISSY.one('input[name=\"Text8\"]').val(' ');
        }else{
                KISSY.one('input[name=\"Text8\"]').val($('#edu-list').children('div:eq(1)').children('.infopl').children('table').children('tbody').children('tr:eq(11)').children('td:eq(1)').html()+'至'+$('#edu-list').children('div:eq(1)').children('.infopl').children('table').children('tbody').children('tr:eq(12)').children('td:eq(1)').html());
        } 


        // line3
        if(KISSY.one('input[name=\"Text9\"]')){
        	KISSY.one('input[name=\"Text9\"]').val($('#edu-list').children('div:eq(2)').children('.infopl').children('table').children('tbody').children('tr:eq(1)').children('td:eq(1)').html());
        }
        if(KISSY.one('input[name=\"Text10\"]')){
        	KISSY.one('input[name=\"Text10\"]').val($('#edu-list').children('div:eq(2)').children('.infopl').children('table').children('tbody').children('tr:eq(4)').children('td:eq(1)').html());
        }
        if($('#edu-list').children('div:eq(2)').children('.infopl').children('table').children('tbody').children('tr:eq(0)').children('td:eq(1)').html() == '请选择大学（或直接输入学校名称）'){
            KISSY.one('input[name=\"Text11\"]').val(' ')
        }else{
           KISSY.one('input[name=\"Text11\"]').val($('#edu-list').children('div:eq(2)').children('.infopl').children('table').children('tbody').children('tr:eq(0)').children('td:eq(1)').html());
        }
        if ($('#edu-list').children('div:eq(2)').children('.infopl').children('table').children('tbody').children('tr:eq(11)').children('td:eq(1)').get(0) == undefined) {
             KISSY.one('input[name=\"Text12\"]').val(' ');
        }else{
                KISSY.one('input[name=\"Text12\"]').val($('#edu-list').children('div:eq(2)').children('.infopl').children('table').children('tbody').children('tr:eq(11)').children('td:eq(1)').html()+'至'+$('#edu-list').children('div:eq(2)').children('.infopl').children('table').children('tbody').children('tr:eq(12)').children('td:eq(1)').html());
        }          


        // line4
        if(KISSY.one('input[name=\"Text13\"]')){
        	KISSY.one('input[name=\"Text13\"]').val($('#edu-list').children('div:eq(3)').children('.infopl').children('table').children('tbody').children('tr:eq(1)').children('td:eq(1)').html());
        }
        if(KISSY.one('input[name=\"Text14\"]')){
        	KISSY.one('input[name=\"Text14\"]').val($('#edu-list').children('div:eq(3)').children('.infopl').children('table').children('tbody').children('tr:eq(4)').children('td:eq(1)').html());
        }
        if($('#edu-list').children('div:eq(3)').children('.infopl').children('table').children('tbody').children('tr:eq(0)').children('td:eq(1)').html() == '请选择大学（或直接输入学校名称）'){
            KISSY.one('input[name=\"Text11\"]').val(' ')
        }else{
           KISSY.one('input[name=\"Text11\"]').val($('#edu-list').children('div:eq(3)').children('.infopl').children('table').children('tbody').children('tr:eq(0)').children('td:eq(1)').html());
        }
        if ($('#edu-list').children('div:eq(3)').children('.infopl').children('table').children('tbody').children('tr:eq(11)').children('td:eq(1)').get(0) == undefined) {
             KISSY.one('input[name=\"Text16\"]').val(' ');
            // console.log($('#edu-list').children('div:eq(3)').children('.infopl').children('table').children('tbody').children('tr:eq(11)').children('td:eq(1)').get(0));
        }else{
                KISSY.one('input[name=\"Text16\"]').val($('#edu-list').children('div:eq(3)').children('.infopl').children('table').children('tbody').children('tr:eq(11)').children('td:eq(1)').html()+'至'+$('#edu-list').children('div:eq(3)').children('.infopl').children('table').children('tbody').children('tr:eq(12)').children('td:eq(1)').html());
        }          


        // 工作学历
        // var info_companyName = $('.mt_companyName').eq(0).html() + ', '+$('.workContent').eq(0).html() +', '+ $('.mt_positionName') 
        // for(var i = 1; i<4 ; i++){
        //     if($('.mt_companyName').eq(i).html()){
        //         info_companyName = info_companyName + $('.mt_companyName').eq(i).html()
        //     }
        // }

         // line1
        if ($('#exp-list').children('div:eq(0)').children('.infopl').children('table').children('tbody').children('tr:eq(12)').children('td:eq(1)').get(0) == undefined||$('#exp-list').children('div:eq(0)').children('.infopl').children('table').children('tbody').children('tr:eq(12)').children('td:eq(1)').get(0).innerHTML == '') {
             KISSY.one('input[name=\"Text17\"]').val(' ');
        }else{
             KISSY.one('input[name=\"Text17\"]').val($('#exp-list').children('div:eq(0)').children('.infopl').children('table').children('tbody').children('tr:eq(12)').children('td:eq(1)').html()+'至'+$('#exp-list').children('div:eq(0)').children('.infopl').children('table').children('tbody').children('tr:eq(14)').children('td:eq(1)').html());
        }       

        if(KISSY.one('input[name=\"Text18\"]')){
         KISSY.one('input[name=\"Text18\"]').val($('#exp-list').children('div:eq(0)').children('.infopl').children('table').children('tbody').children('tr:eq(5)').children('td:eq(1)').html());
        }    
        if(KISSY.one('input[name=\"Text19\"]')){
         KISSY.one('input[name=\"Text19\"]').val($('#exp-list').children('div:eq(0)').children('.infopl').children('table').children('tbody').children('tr:eq(16)').children('td').children('pre').html());
        } 

        if(KISSY.one('input[name=\"Text20\"]')){
          KISSY.one('input[name=\"Text20\"]').val($('#exp-list').children('div:eq(0)').children('.infopl').children('table').children('tbody').children('tr:eq(0)').children('td:eq(1)').html());
        } 


        // line2
        if ($('#exp-list').children('div:eq(1)').children('.infopl').children('table').children('tbody').children('tr:eq(12)').children('td:eq(1)').get(0) == undefined) {
             KISSY.one('input[name=\"Text21\"]').val(' ');
        }else{
             KISSY.one('input[name=\"Text21\"]').val($('#exp-list').children('div:eq(1)').children('.infopl').children('table').children('tbody').children('tr:eq(12)').children('td:eq(1)').html()+'至'+$('#exp-list').children('div:eq(1)').children('.infopl').children('table').children('tbody').children('tr:eq(14)').children('td:eq(1)').html());
        }    
        if(KISSY.one('input[name=\"Text22\"]')){
         KISSY.one('input[name=\"Text22\"]').val($('#exp-list').children('div:eq(1)').children('.infopl').children('table').children('tbody').children('tr:eq(5)').children('td:eq(1)').html());
        } 
        if(KISSY.one('input[name=\"Text23\"]')){
         KISSY.one('input[name=\"Text23\"]').val($('#exp-list').children('div:eq(1)').children('.infopl').children('table').children('tbody').children('tr:eq(16)').children('td').children('pre').html());
        } 
        if(KISSY.one('input[name=\"Text24\"]')){
         KISSY.one('input[name=\"Text24\"]').val($('#exp-list').children('div:eq(1)').children('.infopl').children('table').children('tbody').children('tr:eq(0)').children('td:eq(1)').html());
        } 


        // line3
        if ($('#exp-list').children('div:eq(2)').children('.infopl').children('table').children('tbody').children('tr:eq(12)').children('td:eq(1)').get(0) == undefined) {
             KISSY.one('input[name=\"Text25\"]').val(' ');
        }else{
             KISSY.one('input[name=\"Text25\"]').val($('#exp-list').children('div:eq(2)').children('.infopl').children('table').children('tbody').children('tr:eq(12)').children('td:eq(1)').html()+'至'+$('#exp-list').children('div:eq(2)').children('.infopl').children('table').children('tbody').children('tr:eq(14)').children('td:eq(1)').html());
        }    
        if(KISSY.one('input[name=\"Text26\"]')){
         KISSY.one('input[name=\"Text26\"]').val($('#exp-list').children('div:eq(2)').children('.infopl').children('table').children('tbody').children('tr:eq(5)').children('td:eq(1)').html());
        } 
        if(KISSY.one('input[name=\"Text27\"]')){
         KISSY.one('input[name=\"Text27\"]').val($('#exp-list').children('div:eq(2)').children('.infopl').children('table').children('tbody').children('tr:eq(16)').children('td').children('pre').html());
        } 
        if(KISSY.one('input[name=\"Text28\"]')){
         KISSY.one('input[name=\"Text28\"]').val($('#exp-list').children('div:eq(2)').children('.infopl').children('table').children('tbody').children('tr:eq(0)').children('td:eq(1)').html());
        } 


        // line4
        if ($('#exp-list').children('div:eq(3)').children('.infopl').children('table').children('tbody').children('tr:eq(12)').children('td:eq(1)').get(0) == undefined) {
             KISSY.one('input[name=\"Text29\"]').val(' ');
        }else{
             KISSY.one('input[name=\"Text29\"]').val($('#exp-list').children('div:eq(3)').children('.infopl').children('table').children('tbody').children('tr:eq(12)').children('td:eq(1)').html()+' 至 '+$('#exp-list').children('div:eq(3)').children('.infopl').children('table').children('tbody').children('tr:eq(14)').children('td:eq(1)').html());
        }   
        if(KISSY.one('input[name=\"Text30\"]')){
         KISSY.one('input[name=\"Text30\"]').val($('#exp-list').children('div:eq(3)').children('.infopl').children('table').children('tbody').children('tr:eq(5)').children('td:eq(1)').html());
        } 
        if(KISSY.one('input[name=\"Text31\"]')){
         KISSY.one('input[name=\"Text31\"]').val($('#exp-list').children('div:eq(3)').children('.infopl').children('table').children('tbody').children('tr:eq(16)').children('td').children('pre').html());
        } 
        if(KISSY.one('input[name=\"Text32\"]')){
         KISSY.one('input[name=\"Text32\"]').val($('#exp-list').children('div:eq(3)').children('.infopl').children('table').children('tbody').children('tr:eq(0)').children('td:eq(1)').html());
        } 

        // 联系地址
        if(KISSY.one('input[name=\"txtlxAddress\"]')){
        	KISSY.one('input[name=\"txtlxAddress\"]').val(KISSY.one('.mt_add').html());
        }
        // 联系电话
        if(KISSY.one('input[name=\"txtMoble\"]')){
        	KISSY.one('input[name=\"txtMoble\"]').val(KISSY.one('.mt_gudingtel').html());
        }
        // 手机号码
        if(KISSY.one('input[name=\"txtPhone\"]')){
        	KISSY.one('input[name=\"txtPhone\"]').val(KISSY.one('.mt_tel').html());
        }
        // 电子信箱
        if(KISSY.one('input[name=\"txtEmail\"]')){
        	KISSY.one('input[name=\"txtEmail\"]').val(KISSY.one('.mt_email').html());
        }