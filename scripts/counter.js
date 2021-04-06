//Установим cookie для просмотра количесва проходов.
function include(url) {
        var script = document.createElement('script');
        script.src = url;
        document.getElementsByTagName('footer')[0].appendChild(script);
}
//Устанавливаем нейтральное значение и получаем куки
var TestCookie = "";
TestCookie = getCookie("count");

if((TestCookie == "") || (TestCookie == null)){
	setCookie("count",1);
	include("scripts/tests/test_1.js");
}else{
	let smth = TestCookie;
	if(smth == 1 ){
		include("scripts/tests/test_2.js");
		setCookie("count",2);
	}
	if(smth == 2 ){
		include("scripts/tests/test_3.js");
		setCookie("count",3);
	}
	if(smth == 3 ){
		include("scripts/tests/test_4.js");
		setCookie("count",4);
	}
	if(smth == 4 ){
		include("scripts/tests/test_5.js");
		setCookie("count",5)
	}
	if(smth == 5 ){
		include("scripts/tests/test_6.js");
		setCookie("count",6);
	}
	if(smth == 6 ){
		include("scripts/tests/test_7.js");
		setCookie("count",7);
	}
	if(smth == 7 ){
		include("scripts/tests/test_8.js");
		setCookie("count",8);
	}
	if(smth == 8 ){
		include("scripts/tests/test_9.js");
		setCookie("count",9);
	}
	if(smth == 9 ){
		include("scripts/tests/test_10.js");
		setCookie("count",10);
	}
	if(smth == 10 ){
		include("scripts/tests/test_11.js");
		setCookie("count",11);
	}
	if(smth == 11 ){
		include("scripts/tests/test_12.js");
		setCookie("count",12);
	}
	if(smth == 12 ){
		include("scripts/tests/test_13.js");
		setCookie("count",13);
	}

}