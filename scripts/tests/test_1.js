/*
	ТЕСТ НОМЕР 1 
	Методика диагностики учебной мотивации студентов
*/
setCookie("scale_1", 0);
setCookie("scale_2", 0);
setCookie("scale_3", 0);
setCookie("scale_4", 0);
setCookie("scale_5", 0);
setCookie("scale_6", 0);
setCookie("scale_7", 0);

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
		if(((indexQue >= 0)&&(indexQue <= 4))||(indexQue == 25)){
			let coockieValue = Number.parseInt(getCookie("scale_4"));
			coockieValue += value;
			setCookie("scale_4", coockieValue);
		}
		if((indexQue == 6)||(indexQue == 9)||(indexQue == 13)||(indexQue == 31)){
			let coockieValue = Number.parseInt(getCookie("scale_1"));
			coockieValue += value;
			setCookie("scale_1", coockieValue);
		}
		if((indexQue == 5)||(indexQue == 11)||(indexQue == 12)||(indexQue == 14)||(indexQue == 18)){
			let coockieValue = Number.parseInt(getCookie("scale_2"));
			coockieValue += value;
			setCookie("scale_2", coockieValue);
		}
		if((indexQue == 7)||(indexQue == 8)||(indexQue == 28)||(indexQue == 29)||(indexQue == 33)){
			let coockieValue = Number.parseInt(getCookie("scale_3"));
			coockieValue += value;
			setCookie("scale_3", coockieValue);
		}
		if((indexQue == 26)||(indexQue == 27)){
			let coockieValue = Number.parseInt(getCookie("scale_5"));
			coockieValue += value;
			setCookie("scale_5", coockieValue);
		}
		if((indexQue == 16)||(indexQue == 17)||((indexQue >= 19)&&( indexQue <= 23))){
			let coockieValue = Number.parseInt(getCookie("scale_6"));
			coockieValue += value;
			setCookie("scale_6", coockieValue);
		}
		if((indexQue == 10)||(indexQue == 15)||(indexQue == 24)||(indexQue == 30)||(indexQue == 32)){
			let coockieValue = Number.parseInt(getCookie("scale_7"));
			coockieValue += value;
			setCookie("scale_7", coockieValue);
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


//Массив с результатами
const results = 
[
	new Result("Коммуникативные мотивы.<br>Cвязаны с потребностями в общении.", 7),
];


//Массив с вопросами
const questions = 
[
	new Question("Учусь, потому что мне нравится избранная профессия.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
	]),

	new Question("Чтобы обеспечить успешность будущей профессиональной деятельности.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
	]),

	new Question("Хочу стать специалистом.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
	]),

	new Question("Чтобы дать ответы на актуальные вопросы, относящиеся к сфере будущейм профессиональной деятельности.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
	]),

	new Question("Хочу в полной мере использовать имеющиеся у меня задатки, способности и склонности к выбранной профессии.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
	]),

	new Question("Чтобы не отставать от друзей.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
	]),

	new Question("Чтобы работать с людьми, надо иметь глубокие и всесторонние знания.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
	]),

	new Question("Потому что хочу быть в числе лучших студентов.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
	]),

	new Question("Потому что хочу, чтобы наша учебная группа стала лучшей в институте.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
	]),

	new Question("Чтобы заводить знакомства и общаться с интересными людьми.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
	]),

	new Question("Потому что полученные знания позволят мне добиться всего необходимого.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
	]),

	new Question("Необходимо окончить институт, чтобы у знакомых не изменилось мнение обо мне, как способном, перспективном человеке.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
	]),

	new Question("Чтобы избежать осуждения и наказания за плохую учебу.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
	]),

	new Question("Хочу быть уважаемым человеком учебного коллектива.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
	]),

	new Question("Не хочу отставать от сокурсников, не желаю оказаться среди отстающих.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
	]),

	new Question("Потому что от успехов в учебе зависит уровень моей материальной обеспеченности в будущем.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
	]),

	new Question("Успешно учиться, сдавать экзамены на «4» и «5».",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
	]),

	new Question("Просто нравится учиться",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
	]),

	new Question("Попав в институт, вынужден учиться, чтобы окончить его",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
	]),

	new Question("Быть постоянно готовым к очередным занятиям.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
	]),

	new Question("Успешно продолжить обучение на последующих курсах, чтобы дать ответы на конкретные учебные вопросы.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
	]),

	new Question("Чтобы приобрести глубокие и прочные знания",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
	]),

	new Question("Потому что в будущем думаю заняться научной деятельностью поспециальности.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
	]),

	new Question("Любые знания пригодятся в будущей профессии",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
	]),

	new Question("Потому что хочу принести больше пользы обществу.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
	]),

	new Question("Стать высококвалифицированным специалистом.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
	]),

	new Question("Чтобы узнавать новое, заниматься творческой деятельностью.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
	]),

	new Question("Чтобы дать ответы на проблемы развития общества, жизнедеятельностилюдей.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
	]),

	new Question("Быть на хорошем счету у преподавателей",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
	]),

	new Question("Добиться одобрения родителей и окружающих",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
	]),

	new Question("Учусь ради исполнения долга перед родителями, школой.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
	]),

	new Question("Потому что знания придают мне уверенность в себе",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
	]),

	new Question("Потому что от успехов в учебе зависит мое будущее служебное положение.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
	]),

	new Question("Хочу получить диплом с хорошими оценками, чтобы иметь преимущество перед другими.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
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
		var coockieScore = 0;
		headElem.innerHTML = "";
		headElem.innerHTML = "Результаты теста:";
		buttonsElem.innerHTML = "";
		for(let i = 1; i < 8; i++){
			var wrap =  document.createElement("div");
			wrap.setAttribute('class','progressWrap');
			var progressTitle =  document.createElement("h3");
			progressTitle.setAttribute('class','progress-title')
			var mainDiv = document.createElement("div");
			mainDiv.setAttribute('class','progress blue');
			var progressBar = document.createElement("div");
			progressBar.setAttribute('class','progress-bar');
			var	progressValue =  document.createElement("div");
			progressValue.setAttribute('class','progress-value');

			if(i == 1){
				var progressInfill = getCookie("scale_1");
				progressTitle.innerHTML = "Коммуникативные мотивы: "+progressInfill + " из 20";
				coockieScore += Number.parseInt(progressInfill);
				progressInfill = Number.parseInt((progressInfill/20)*100);
				progressBar.setAttribute('style','width:'+progressInfill+'%');
				progressValue.innerHTML = progressInfill;			
			}
			if(i == 2){
				var progressInfill = getCookie("scale_2");
				progressTitle.innerHTML = "Мотивы избегания: "+progressInfill + " из 25";
				coockieScore += Number.parseInt(progressInfill);
				progressInfill = Number.parseInt((progressInfill/25)*100);
				progressBar.width = progressInfill+"%";
				progressBar.setAttribute('style','width:'+progressInfill+'%');
				progressValue.innerHTML = progressInfill;
			}
			if(i == 3){
				var progressInfill = getCookie("scale_3");
				progressTitle.innerHTML = "Мотивы престижа: "+progressInfill + " из 25";
				coockieScore += Number.parseInt(progressInfill);
				progressInfill = Number.parseInt((progressInfill/25)*100);
				progressBar.width = progressInfill+"%";
				progressBar.setAttribute('style','width:'+progressInfill+'%');
				progressValue.innerHTML = progressInfill;
			}
			if(i == 4){
				var progressInfill = getCookie("scale_4");
				progressTitle.innerHTML = "Профессиональные мотивы: "+progressInfill + " из 30";
				coockieScore += Number.parseInt(progressInfill);
				progressInfill = Number.parseInt((progressInfill/30)*100);
				progressBar.width = progressInfill+"%";
				progressBar.setAttribute('style','width:'+progressInfill+'%');
				progressValue.innerHTML = progressInfill;
			}
			if(i == 5){
				var progressInfill = getCookie("scale_5");
				progressTitle.innerHTML = "Мотивы творческой самореализации: "+progressInfill + " из 10";
				coockieScore += Number.parseInt(progressInfill);
				progressInfill = Number.parseInt((progressInfill/10)*100);
				progressBar.width = progressInfill+"%";
				progressBar.setAttribute('style','width:'+progressInfill+'%');
				progressValue.innerHTML = progressInfill;
			}
			if(i == 6){
				var progressInfill = getCookie("scale_6");
				progressTitle.innerHTML = "Учебно-познавательные мотивы: "+progressInfill + " из 35";
				coockieScore += Number.parseInt(progressInfill);
				progressInfill = Number.parseInt((progressInfill/35)*100);
				progressBar.width = progressInfill+"%";
				progressBar.setAttribute('style','width:'+progressInfill+'%');
				progressValue.innerHTML = progressInfill;
			}
			if(i == 7){
				var progressInfill = getCookie("scale_7");
				progressTitle.innerHTML = "Социальные мотивы: "+progressInfill + " из 25";
				coockieScore += Number.parseInt(progressInfill);
				progressInfill = Number.parseInt((progressInfill/25)*100);
				progressBar.width = progressInfill+"%";
				progressBar.setAttribute('style','width:'+progressInfill+'%');
				progressValue.innerHTML = progressInfill;
			}			
			progressBar.appendChild(progressValue);
			mainDiv.appendChild(progressBar);
			wrap.appendChild(progressTitle);
			wrap.appendChild(mainDiv);
			headElem.appendChild(wrap);
		}

		let percentOf = Number.parseInt((coockieScore/160)*100);
		setCookie("TEST1", percentOf);
		pagesElem.innerHTML = "Конец теста.";
		setCookie("end",1);
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
