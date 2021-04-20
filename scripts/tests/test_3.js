/*
	ТЕСТ НОМЕР 3
	Диагностика «эмоционального интеллекта» (Н. Холл)
*/

setCookie("scale_1", 0);
setCookie("scale_2", 0);
setCookie("scale_3", 0);
setCookie("scale_4", 0);
setCookie("scale_5", 0);

const headElem = document.getElementById("head");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");

//Класс, который представляет сам тест
class Quiz
{

	constructor(type, questions, results)
	{
		//Тип теста: 1 - классический тест с правильными ответами, 2 - тест без правильных ответов
		this.type = type;

		//Массив с вопросами
		this.questions = questions;

		//Массив с возможными результатами
		this.results = results;

		//Количество набранных очков
		this.score = 0;

		//Номер результата из массива
		this.result = 0;

		//Номер текущего вопроса
		this.current = 0;
	}

	Click(index)
	{
		//Добавляем очки
		let value = this.questions[this.current].Click(index);
		let indexQue = this.current;
		if((indexQue == 1 )||(indexQue == 2)||(indexQue == 4)||(indexQue == 17 )||(indexQue == 19)||(indexQue == 25)){
			let coockieValue = Number.parseInt(getCookie("scale_1"));
			coockieValue += value;
			setCookie("scale_1", coockieValue);
		}
		if((indexQue == 3)||(indexQue == 7)||(indexQue == 8)||(indexQue == 10)||(indexQue == 18)||(indexQue == 30)){
			let coockieValue = Number.parseInt(getCookie("scale_2"));
			coockieValue += value;
			setCookie("scale_2", coockieValue);
		}
		if((indexQue == 5)||(indexQue == 6)||(indexQue == 13)||(indexQue == 14)||(indexQue == 16)||(indexQue == 27)){
			let coockieValue = Number.parseInt(getCookie("scale_3"));
			coockieValue += value;
			setCookie("scale_3", coockieValue);
		}
		if((indexQue == 9)||(indexQue == 11)||(indexQue == 20)||(indexQue == 21)||(indexQue == 23)||(indexQue == 28)){
			let coockieValue = Number.parseInt(getCookie("scale_4"));
			coockieValue += value;
			setCookie("scale_4", coockieValue);
		}
		if((indexQue == 12)||(indexQue == 15)||(indexQue == 24)||(indexQue == 26)||(indexQue == 27)||(indexQue == 29)){
			let coockieValue = Number.parseInt(getCookie("scale_5"));
			coockieValue += value;
			setCookie("scale_5", coockieValue);
		}

		let correct = -1;

		//Если было добавлено хотя одно очко, то считаем, что ответ верный
		if(value >= 1)
		{
			correct = index;
		}
		else
		{
			//Иначе ищем, какой ответ может быть правильным
			for(let i = 0; i < this.questions[this.current].answers.length; i++)
			{
				if(this.questions[this.current].answers[i].value >= 1)
				{
					correct = i;
					break;
				}
			}
		}

		this.Next();

		return correct;
	}

	//Переход к следующему вопросу
	Next()
	{
		this.current++;
		
		if(this.current >= this.questions.length) 
		{
			this.End();
		}
	}

	//Если вопросы кончились, этот метод проверит, какой результат получил пользователь
	End()
	{
		for(let i = 0; i < this.results.length; i++)
		{
			if(this.results[i].Check(this.score))
			{
				this.result = i;

			}
		}
	}
} 

//Класс, представляющий вопрос
class Question 
{
	constructor(text, answers)
	{
		this.text = text; 
		this.answers = answers; 
	}

	Click(index) 
	{
		return this.answers[index].value; 
	}
}

//Класс, представляющий ответ
class Answer 
{
	constructor(text, value) 
	{
		this.text = text; 
		this.value = value; 
	}
}

//Класс, представляющий результат
class Result 
{
	constructor(text, value)
	{
		this.text = text;
		this.value = value;
	}

	//Этот метод проверяет, достаточно ли очков набрал пользователь
	Check(value)
	{
		if(this.value <= value)
		{
			return true;
		}
		else 
		{
			return false;
		}
	}
}


const results = 
[
	new Result("Коммуникативные мотивы.", 7),
];

//Массив с вопросами
const questions = 
[
	new Question("Для меня как отрицательные, так и положительные эмоции служат источником знания о том, как поступать в жизни.",     
	[
		new Answer("Полностью согласен", 3),
		new Answer("В основном согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Отчасти не согласен", -1),
		new Answer("В основном не согласен", -2),
		new Answer("Полностью не согласен", -3),
	]),

	new Question("Отрицательные эмоции помогают мне понять, что я должен изменить в своей жизни.",     
	[
		new Answer("Полностью согласен", 3),
		new Answer("В основном согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Отчасти не согласен", -1),
		new Answer("В основном не согласен", -2),
		new Answer("Полностью не согласен", -3),
	]),

	new Question("Я спокоен, когда испытываю давление со стороны.",     
	[
		new Answer("Полностью согласен", 3),
		new Answer("В основном согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Отчасти не согласен", -1),
		new Answer("В основном не согласен", -2),
		new Answer("Полностью не согласен", -3),
	]),

	new Question("Я способен наблюдать изменение своих чувств.",     
	[
		new Answer("Полностью согласен", 3),
		new Answer("В основном согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Отчасти не согласен", -1),
		new Answer("В основном не согласен", -2),
		new Answer("Полностью не согласен", -3),
	]),

	new Question("Когда необходимо, я могу быть спокойным и сосредоточенным, чтобы действовать в соответствии с запросами жизни.",     
	[
		new Answer("Полностью согласен", 3),
		new Answer("В основном согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Отчасти не согласен", -1),
		new Answer("В основном не согласен", -2),
		new Answer("Полностью не согласен", -3),
	]),

	new Question("Когда необходимо, я могу вызвать у себя широкий спектр положительных эмоций, такие, как веселье, радость, внутренний подъем и юмор.",     
	[
		new Answer("Полностью согласен", 3),
		new Answer("В основном согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Отчасти не согласен", -1),
		new Answer("В основном не согласен", -2),
		new Answer("Полностью не согласен", -3),
	]),
	new Question("Я слежу за тем, как я себя чувствую.",     
	[
		new Answer("Полностью согласен", 3),
		new Answer("В основном согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Отчасти не согласен", -1),
		new Answer("В основном не согласен", -2),
		new Answer("Полностью не согласен", -3),
	]),

	new Question("После того как что-то расстроило меня, я могу легко совладать со своими чувствами.",     
	[
		new Answer("Полностью согласен", 3),
		new Answer("В основном согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Отчасти не согласен", -1),
		new Answer("В основном не согласен", -2),
		new Answer("Полностью не согласен", -3),
	]),

	new Question("Я способен выслушивать проблемы других людей.",     
	[
		new Answer("Полностью согласен", 3),
		new Answer("В основном согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Отчасти не согласен", -1),
		new Answer("В основном не согласен", -2),
		new Answer("Полностью не согласен", -3),
	]),

	new Question("Я не зацикливаюсь на отрицательных эмоциях.",     
	[
		new Answer("Полностью согласен", 3),
		new Answer("В основном согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Отчасти не согласен", -1),
		new Answer("В основном не согласен", -2),
		new Answer("Полностью не согласен", -3),
	]),

	new Question("Я чувствителен к эмоциональным потребностям других.",     
	[
		new Answer("Полностью согласен", 3),
		new Answer("В основном согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Отчасти не согласен", -1),
		new Answer("В основном не согласен", -2),
		new Answer("Полностью не согласен", -3),
	]),

	new Question("Я могу действовать на других людей успокаивающе.",     
	[
		new Answer("Полностью согласен", 3),
		new Answer("В основном согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Отчасти не согласен", -1),
		new Answer("В основном не согласен", -2),
		new Answer("Полностью не согласен", -3),
	]),

	new Question("Я могу заставить себя снова и снова встать перед лицом препятствия.",     
	[
		new Answer("Полностью согласен", 3),
		new Answer("В основном согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Отчасти не согласен", -1),
		new Answer("В основном не согласен", -2),
		new Answer("Полностью не согласен", -3),
	]),

	new Question("Я стараюсь подходить к жизненным проблемам творчески.",     
	[
		new Answer("Полностью согласен", 3),
		new Answer("В основном согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Отчасти не согласен", -1),
		new Answer("В основном не согласен", -2),
		new Answer("Полностью не согласен", -3),
	]),

	new Question("Я адекватно реагирую на настроения, побуждения и желания других людей.",     
	[
		new Answer("Полностью согласен", 3),
		new Answer("В основном согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Отчасти не согласен", -1),
		new Answer("В основном не согласен", -2),
		new Answer("Полностью не согласен", -3),
	]),

	new Question("Я могу легко входить в состояние спокойствия, готовности и сосредоточенности.",     
	[
		new Answer("Полностью согласен", 3),
		new Answer("В основном согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Отчасти не согласен", -1),
		new Answer("В основном не согласен", -2),
		new Answer("Полностью не согласен", -3),
	]),

	new Question("Когда позволяет время, я обращаюсь к своим негативным чувствам и разбираюсь, в чем проблема.",     
	[
		new Answer("Полностью согласен", 3),
		new Answer("В основном согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Отчасти не согласен", -1),
		new Answer("В основном не согласен", -2),
		new Answer("Полностью не согласен", -3),
	]),

	new Question("Я способен быстро успокоиться после неожиданного огорчения.",     
	[
		new Answer("Полностью согласен", 3),
		new Answer("В основном согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Отчасти не согласен", -1),
		new Answer("В основном не согласен", -2),
		new Answer("Полностью не согласен", -3),
	]),

	new Question("Знание моих истинных чувств важно для поддержания «хорошей формы».",     
	[
		new Answer("Полностью согласен", 3),
		new Answer("В основном согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Отчасти не согласен", -1),
		new Answer("В основном не согласен", -2),
		new Answer("Полностью не согласен", -3),
	]),

	new Question("Я хорошо понимаю эмоции других людей, даже если они не выражены открыто.",     
	[
		new Answer("Полностью согласен", 3),
		new Answer("В основном согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Отчасти не согласен", -1),
		new Answer("В основном не согласен", -2),
		new Answer("Полностью не согласен", -3),
	]),

	new Question("Я могу хорошо распознавать эмоции по выражению лица.",     
	[
		new Answer("Полностью согласен", 3),
		new Answer("В основном согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Отчасти не согласен", -1),
		new Answer("В основном не согласен", -2),
		new Answer("Полностью не согласен", -3),
	]),

	new Question("Я могу легко отбросить негативные чувства, когда необходимо действовать.",     
	[
		new Answer("Полностью согласен", 3),
		new Answer("В основном согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Отчасти не согласен", -1),
		new Answer("В основном не согласен", -2),
		new Answer("Полностью не согласен", -3),
	]),

	new Question("Я хорошо улавливаю знаки в общении, которые указывают на то, в чем другие нуждаются.",     
	[
		new Answer("Полностью согласен", 3),
		new Answer("В основном согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Отчасти не согласен", -1),
		new Answer("В основном не согласен", -2),
		new Answer("Полностью не согласен", -3),
	]),

	new Question("Люди считают меня хорошим знатоком переживаний других людей.",     
	[
		new Answer("Полностью согласен", 3),
		new Answer("В основном согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Отчасти не согласен", -1),
		new Answer("В основном не согласен", -2),
		new Answer("Полностью не согласен", -3),
	]),

	new Question("Люди, осознающие свои истинные чувства, лучше управляют своей жизнью.",     
	[
		new Answer("Полностью согласен", 3),
		new Answer("В основном согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Отчасти не согласен", -1),
		new Answer("В основном не согласен", -2),
		new Answer("Полностью не согласен", -3),
	]),

	new Question("Я способен улучшить настроение других людей.",     
	[
		new Answer("Полностью согласен", 3),
		new Answer("В основном согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Отчасти не согласен", -1),
		new Answer("В основном не согласен", -2),
		new Answer("Полностью не согласен", -3),
	]),

	new Question("Со мной можно посоветоваться по вопросам отношений между людьми.",     
	[
		new Answer("Полностью согласен", 3),
		new Answer("В основном согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Отчасти не согласен", -1),
		new Answer("В основном не согласен", -2),
		new Answer("Полностью не согласен", -3),
	]),

	new Question("Я хорошо настраиваюсь на эмоции других людей.",     
	[
		new Answer("Полностью согласен", 3),
		new Answer("В основном согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Отчасти не согласен", -1),
		new Answer("В основном не согласен", -2),
		new Answer("Полностью не согласен", -3),
	]),

	new Question("Я помогаю другим использовать их побуждения для достижения личных целей.",     
	[
		new Answer("Полностью согласен", 3),
		new Answer("В основном согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Отчасти не согласен", -1),
		new Answer("В основном не согласен", -2),
		new Answer("Полностью не согласен", -3),
	]),

	new Question("Я могу легко отключиться от переживания неприятностей.",     
	[
		new Answer("Полностью согласен", 3),
		new Answer("В основном согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Отчасти не согласен", -1),
		new Answer("В основном не согласен", -2),
		new Answer("Полностью не согласен", -3),
	]),

];

//Сам тест
const quiz = new Quiz(2, questions, results);

Update();

//Обновление теста
function Update()
{
	//Проверяем, есть ли ещё вопросы
	if(quiz.current < quiz.questions.length) 
	{
		//Если есть, меняем вопрос в заголовке
		headElem.innerHTML = quiz.questions[quiz.current].text;

		//Удаляем старые варианты ответов
		buttonsElem.innerHTML = "";

		//Создаём кнопки для новых вариантов ответов
		for(let i = 0; i < quiz.questions[quiz.current].answers.length; i++)
		{
			let btn = document.createElement("button");
			btn.className = "button";

			btn.innerHTML = quiz.questions[quiz.current].answers[i].text;

			btn.setAttribute("index", i);

			buttonsElem.appendChild(btn);
		}
		
		//Выводим номер текущего вопроса
		pagesElem.innerHTML = (quiz.current + 1) + " / " + quiz.questions.length;

		//Вызываем функцию, которая прикрепит события к новым кнопкам
		Init();
	}
	else
	{
		//Если это конец, то выводим результат
		buttonsElem.innerHTML = "";

		var coockieScore = 0;
		headElem.innerHTML = "";
		buttonsElem.innerHTML = "";
		for(let i = 1; i < 6; i++){
			var wrap = document.createElement("div");
            wrap.setAttribute('class', 'progressWrap');
            var progressTitle = document.createElement("h3");
            progressTitle.setAttribute('class', 'progress-title')
            var mainDiv = document.createElement("div");
            mainDiv.setAttribute('class', 'progress blue');
            var progressBar = document.createElement("div");
            progressBar.setAttribute('class', 'progress-bar');
            var progressValue = document.createElement("div");
            progressValue.setAttribute('class', 'progress-value');

			if(i == 1){
				var progressInfill = getCookie("scale_1");
				progressTitle.innerHTML = "Эмоциональная осведомленность: "+progressInfill + " из 18";
				coockieScore += Number.parseInt(progressInfill);
				progressInfill = Number.parseInt((progressInfill/18)*100);
				progressBar.setAttribute('style','width:'+progressInfill+'%');
				progressValue.innerHTML = progressInfill;
			}
			if(i == 2){
				var progressInfill = getCookie("scale_2");
				progressTitle.innerHTML = "Управление своими эмоциями: "+progressInfill + " из 18";
				coockieScore += Number.parseInt(progressInfill);
				progressInfill = Number.parseInt((progressInfill/18)*100);
				progressBar.setAttribute('style','width:'+progressInfill+'%');
				progressValue.innerHTML = progressInfill;
			}
			if(i == 3){
				var progressInfill = getCookie("scale_3");
				progressTitle.innerHTML = "Самомотивация: "+progressInfill + " из 18";
				coockieScore += Number.parseInt(progressInfill);
				progressInfill = Number.parseInt((progressInfill/18)*100);
				progressBar.setAttribute('style','width:'+progressInfill+'%');
				progressValue.innerHTML = progressInfill;
			}
			if(i == 4){
				var progressInfill = getCookie("scale_4");
				progressTitle.innerHTML = "Эмпатия: "+progressInfill + " из 18";
				coockieScore += Number.parseInt(progressInfill);
				progressInfill = Number.parseInt((progressInfill/18)*100);
				progressBar.setAttribute('style','width:'+progressInfill+'%');
				progressValue.innerHTML = progressInfill;
			}
			if(i == 5){
				var progressInfill = getCookie("scale_5");
				progressTitle.innerHTML = "Распознавание эмоций других людей: "+progressInfill + " из 18";
				coockieScore += Number.parseInt(progressInfill);
				progressInfill = Number.parseInt((progressInfill/18)*100);
				progressBar.setAttribute('style','width:'+progressInfill+'%');
				progressValue.innerHTML = progressInfill;
			}
			progressBar.appendChild(progressValue);
			mainDiv.appendChild(progressBar);
			wrap.appendChild(progressTitle);
			wrap.appendChild(mainDiv);
			headElem.appendChild(wrap);
		}

		let TEST3 = Number.parseInt((coockieScore/90)*100);
		setCookie("TEST3",TEST3);
		setCookie("TEST3_PER", 90)
		pagesElem.innerHTML = "Конец теста.";
	}
}

function Init()
{
	//Находим все кнопки
	let btns = document.getElementsByClassName("button");

	for(let i = 0; i < btns.length; i++)
	{
		//Прикрепляем событие для каждой отдельной кнопки
		//При нажатии на кнопку будет вызываться функция Click()
		btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
	}
}

function Click(index) 
{
	//Получаем номер правильного ответа
	let correct = quiz.Click(index);

	//Находим все кнопки
	let btns = document.getElementsByClassName("button");

	//Делаем кнопки серыми
	for(let i = 0; i < btns.length; i++)
	{
		btns[i].className = "button button_passive";
	}

	//Если это тест с правильными ответами, то мы подсвечиваем правильный ответ зелёным, а неправильный - красным
	if(quiz.type == 1)
	{
		if(correct >= 0)
		{
			btns[correct].className = "button button_correct";
		}

		if(index != correct) 
		{
			btns[index].className = "button button_wrong";
		} 
	}
	else
	{
		//Иначе просто подсвечиваем зелёным ответ пользователя
		btns[index].className = "button button_correct";
	}

	//Ждём секунду и обновляем тест
	setTimeout(Update, 1000);
}