/*
	ТЕСТ НОМЕР 8 ОСД
*/
setCookie("scale_1", 0);
setCookie("scale_2", 0);
setCookie("scale_3", 0);
setCookie("scale_4", 0);
setCookie("scale_5", 0);
setCookie("scale_6", 0);

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
		if((indexQue == 2)||(indexQue == 4 )||(indexQue ==8 )||(indexQue == 11)){
			let coockieValue = Number.parseInt(getCookie("scale_1"));
			coockieValue += value;
			setCookie("scale_1", coockieValue);
		}
		if((indexQue == 7)||(indexQue == 14 )||(indexQue == 18 )||(indexQue == 20)||(indexQue == 23)||(indexQue == 25)){
			let coockieValue = Number.parseInt(getCookie("scale_2"));
			coockieValue += value;
			setCookie("scale_2", coockieValue);
		}
		if((indexQue == 1)||(indexQue ==5)||(indexQue ==10)||(indexQue ==15)||(indexQue == 21)){
			let coockieValue = Number.parseInt(getCookie("scale_3"));
			coockieValue += value;
			setCookie("scale_3", coockieValue);
		}
		if((indexQue ==3)||(indexQue ==6)||(indexQue ==13)||(indexQue ==17)||(indexQue ==24)){
			let coockieValue = Number.parseInt(getCookie("scale_4"));
			coockieValue += value;
			setCookie("scale_4", coockieValue);
		}
		if((indexQue == 16)||(indexQue == 19)||(indexQue == 22)){
			let coockieValue = Number.parseInt(getCookie("scale_5"));
			coockieValue += value;
			setCookie("scale_5", coockieValue);
		}
		if((indexQue == 9)||(indexQue == 12)){
			let coockieValue = Number.parseInt(getCookie("scale_6"));
			coockieValue += value;
			setCookie("scale_6", coockieValue);
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
	
	new Question("Мне требуется много времени, чтобы “раскачаться” и начать действовать.",     
	[
		new Answer("1", 7),
		new Answer("2", 6),
		new Answer("3", 5),
		new Answer("4", 4),
		new Answer("5", 3),
		new Answer("6", 2),
		new Answer("7", 1),
	]),
	new Question("Я планирую мои дела ежедневно.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
		new Answer("6", 6),
		new Answer("7", 7),
	]),
	new Question("Меня выводят из себя и выбивают из привычного графика непредвиденные дела.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
		new Answer("6", 6),
		new Answer("7", 7),
	]),
	new Question("Обычно я намечаю программу на день и стараюсь её выполнить.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
		new Answer("6", 6),
		new Answer("7", 7),
	]),
	new Question("Мне бывает трудно завершить начатое.",     
	[
		new Answer("1", 7),
		new Answer("2", 6),
		new Answer("3", 5),
		new Answer("4", 4),
		new Answer("5", 3),
		new Answer("6", 2),
		new Answer("7", 1),
	]),
	new Question("Я не могу отказаться от начатого дел, даже если оно мне 'не позубам'.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
		new Answer("6", 6),
		new Answer("7", 7),
	]),
	new Question("Я знаю, чего хочу, и делаю все, чтобы этого добиться.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
		new Answer("6", 6),
		new Answer("7", 7),
	]),
	new Question("Я заранее выстраиваю план предстоящего дня.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
		new Answer("6", 6),
		new Answer("7", 7),
	]),
	new Question("Мне более важно то, что я делаю и переживаю в данный момент, а не то, что будет или было.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
		new Answer("6", 6),
		new Answer("7", 7),
	]),
	new Question("Я могу начать делать несколько дел и ни одно из них не закончить.",     
	[
		new Answer("1", 7),
		new Answer("2", 6),
		new Answer("3", 5),
		new Answer("4", 4),
		new Answer("5", 3),
		new Answer("6", 2),
		new Answer("7", 1),
	]),
	new Question("Я планирую мои повседневные дела согласно определенным принципам.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
		new Answer("6", 6),
		new Answer("7", 7),
	]),
	new Question("Я считаю себя человеком, живущим 'Здесь и сейчас'.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
		new Answer("6", 6),
		new Answer("7", 7),
	]),
	new Question("Я не могу перейти к другому делу, если не завершил предыдущего.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
		new Answer("6", 6),
		new Answer("7", 7),
	]),
	new Question("Я считаю себя целенаправленным человеком.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
		new Answer("6", 6),
		new Answer("7", 7),
	]),
	new Question("Вместо того, чтобы заниматься делами, я попросту трачу время.",     
	[
		new Answer("1", 7),
		new Answer("2", 6),
		new Answer("3", 5),
		new Answer("4", 4),
		new Answer("5", 3),
		new Answer("6", 2),
		new Answer("7", 1),
	]),
	new Question("Мне нравится вести дневник и фиксировать в нем происходящее со мной.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
		new Answer("6", 6),
		new Answer("7", 7),
	]),
	new Question("Иногда я даже заснуть не могу, вспомнив о недоделанных делах.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
		new Answer("6", 6),
		new Answer("7", 7),
	]),
	new Question("У меня есть к чему стремится.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
		new Answer("6", 6),
		new Answer("7", 7),
	]),
	new Question("Мне нравится пользоваться ежедневником и иными средствами планирования времени.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
		new Answer("6", 6),
		new Answer("7", 7),
	]),
	new Question("Моя жизнь направлена на достижение определенных результатов.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
		new Answer("6", 6),
		new Answer("7", 7),
	]),
	new Question("У меня бывают трудности с упорядочением моих дел.",     
	[
		new Answer("1", 7),
		new Answer("2", 6),
		new Answer("3", 5),
		new Answer("4", 4),
		new Answer("5", 3),
		new Answer("6", 2),
		new Answer("7", 1),
	]),
	new Question("Мне нравится писать отчеты по итогам работы.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
		new Answer("6", 6),
		new Answer("7", 7),
	]),
	new Question("Я ни к чему не стремлюсь.",     
	[
		new Answer("1", 7),
		new Answer("2", 6),
		new Answer("3", 5),
		new Answer("4", 4),
		new Answer("5", 3),
		new Answer("6", 2),
		new Answer("7", 1),
	]),
	new Question("Если я не закончил какое-то дело, то это не выходит у меня из головы.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
		new Answer("6", 6),
		new Answer("7", 7),
	]),
	new Question("У меня есть главная цель в жизни.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
		new Answer("6", 6),
		new Answer("7", 7),
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
				progressTitle.innerHTML = "Планомерность: "+progressInfill + " из 20";
				coockieScore += Number.parseInt(progressInfill);
				progressInfill = Number.parseInt((progressInfill/28)*100);
				progressBar.setAttribute('style','width:'+progressInfill+'%');
				progressValue.innerHTML = progressInfill;			
			}
			if(i == 2){
				var progressInfill = getCookie("scale_2");
				progressTitle.innerHTML = "Целеустремленность: "+progressInfill + " из 25";
				coockieScore += Number.parseInt(progressInfill);
				progressInfill = Number.parseInt((progressInfill/42)*100);
				progressBar.width = progressInfill+"%";
				progressBar.setAttribute('style','width:'+progressInfill+'%');
				progressValue.innerHTML = progressInfill;
			}
			if(i == 3){
				var progressInfill = getCookie("scale_3");
				progressTitle.innerHTML = "Настойчивость: "+progressInfill + " из 25";
				coockieScore += Number.parseInt(progressInfill);
				progressInfill = Number.parseInt((progressInfill/35)*100);
				progressBar.width = progressInfill+"%";
				progressBar.setAttribute('style','width:'+progressInfill+'%');
				progressValue.innerHTML = progressInfill;
			}
			if(i == 4){
				var progressInfill = getCookie("scale_4");
				progressTitle.innerHTML = "Фиксация( фиксация на структурировании деятельности): "+progressInfill + " из 30";
				coockieScore += Number.parseInt(progressInfill);
				progressInfill = Number.parseInt((progressInfill/35)*100);
				progressBar.width = progressInfill+"%";
				progressBar.setAttribute('style','width:'+progressInfill+'%');
				progressValue.innerHTML = progressInfill;
			}
			if(i == 5){
				var progressInfill = getCookie("scale_5");
				progressTitle.innerHTML = "Самоорганизация: "+progressInfill + " из 10";
				coockieScore += Number.parseInt(progressInfill);
				progressInfill = Number.parseInt((progressInfill/21)*100);
				progressBar.width = progressInfill+"%";
				progressBar.setAttribute('style','width:'+progressInfill+'%');
				progressValue.innerHTML = progressInfill;
			}
			if(i == 6){
				var progressInfill = getCookie("scale_6");
				progressTitle.innerHTML = "Ориентация на настоящее: "+progressInfill + " из 35";
				coockieScore += Number.parseInt(progressInfill);
				progressInfill = Number.parseInt((progressInfill/14)*100);
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

		let percentOf = Number.parseInt((coockieScore/165)*100);
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
