//Установим cookie для просмотра количесва проходов.
const title = document.getElementById("Title");
const desc = document.getElementById("Desc");

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
		title.innerHTML = "";
		desc.description.innerHTML = "";
		include("scripts/tests/test_5.js");
		setCookie("count",5)
	}
	if(smth == 5 ){
		title.innerHTML = "";
		desc.description.innerHTML = "";
		include("");
		setCookie("count",6);
	}
	if(smth == 6 ){
		include("");
		setCookie("count",7);
	}
	if(smth == 7 ){
		include("");
		setCookie("count",8);
	}
	if(smth == 8 ){
		include("");
		setCookie("count",9);
	}
	if(smth == 9 ){
		include("");
		setCookie("count",10);
	}
	if(smth == 10 ){
		include("");
		setCookie("count",11);
	}
	if(smth == 11 ){
		include("");
		setCookie("count",12);
	}
	if(smth == 12 ){
		include("");
		setCookie("count",13);
	}
	if(smth == 13 ){
		console.log("THATS ALL");
	}
}