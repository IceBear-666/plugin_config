//新增
if($('#recruitCity') && $('#mt_expectcity_city').html()){
	switch($('#mt_expectcity_city').html()){
		case '广州': $('#recruitCity')[0].options[1].selected=true;break;
		case '珠海': $('#recruitCity')[0].options[2].selected=true;break;
		case '武汉': $('#recruitCity')[0].options[3].selected=true;break;
		case '西安': $('#recruitCity')[0].options[4].selected=true;break;
		default: break;
	}
}

