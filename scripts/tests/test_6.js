/*
	ТЕСТ НОМЕР 3
	Диагностика «эмоционального интеллекта» (Н. Холл)
*/

setCookie("scale_1", 0);
setCookie("scale_2", 0);
setCookie("scale_3", 0);
setCookie("scale_4", 0);

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
		if((indexQue == 2)||(indexQue == 3)||(indexQue == 11)||(indexQue == 12)||(indexQue == 19)||(indexQue == 27)||(indexQue == 33)||(indexQue == 37)||(indexQue == 38)||(indexQue == 47)||(indexQue == 49)||(indexQue == 28)){
			let coockieValue = Number.parseInt(getCookie("scale_1"));
			coockieValue += value;
			setCookie("scale_1", coockieValue);
		}
		if((indexQue == 13)||(indexQue ==16)||(indexQue ==23)||(indexQue ==30)||(indexQue ==31)||(indexQue ==40)||(indexQue ==45)||(indexQue ==46)||(indexQue ==14)||(indexQue ==20)||(indexQue ==39)){
			let coockieValue = Number.parseInt(getCookie("scale_2"));
			coockieValue += value;
			setCookie("scale_2", coockieValue);
		}
		if((indexQue == 7)||(indexQue == 15)||(indexQue == 18)||(indexQue == 26)||(indexQue == 47)||(indexQue == 50)||(indexQue == 4)||(indexQue == 9)||(indexQue == 10)||(indexQue == 17)||(indexQue == 24)||(indexQue == 41)||(indexQue == 48)){
			let coockieValue = Number.parseInt(getCookie("scale_3"));
			coockieValue += value;
			setCookie("scale_3", coockieValue);
		}
		if((indexQue == 1)||(indexQue == 21)||(indexQue == 25)||(indexQue == 35)||(indexQue == 36)||(indexQue == 43)||(indexQue == 44)||(indexQue == 5)||(indexQue == 8)||(indexQue == 27)||(indexQue == 29)||(indexQue == 32)||(indexQue == 34)){
			let coockieValue = Number.parseInt(getCookie("scale_4"));
			coockieValue += value;
			setCookie("scale_4", coockieValue);
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
	//1
	new Question("Когда я не знаю правильного ответа, я попробую о нём догадаться",     
	[
		new Answer("Согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 0),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//2
	new Question("Мне нравится рассматривать предметы во всех деталях, чтобы обнаружить нечто новое",     
	[
		new Answer("Согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 0),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//3
	new Question("Когда я чего-то не знаю, я всегда спрашиваю об этом",     
	[
		new Answer("Согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 0),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//4
	new Question("Я не люблю планировать свои дела преждевременно",     
	[
		new Answer("Согласен", 0),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 2),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//5
	new Question("Если я собираюсь играть в какую-то игру, я должен быть уверен, что выиграю",     
	[
		new Answer("Согласен", 0),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 2),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//6
	new Question("Я люблю представлять что-то, что мне предстоит сделать или узнать",     
	[
		new Answer("Согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 2),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//7
	new Question("Если у меня что-то не получается сразу, я буду делать это, пока не получится",     
	[
		new Answer("Согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 0),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//8
	new Question("Я никогда не буду играть в такую игру, которую не знают другие",     
	[
		new Answer("Согласен", 0),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 2),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//9
	new Question("Лучше делать всё привычным способом, чем искать новые",     
	[
		new Answer("Согласен", 0),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 2),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//10
	new Question("Мне нравится выяснять, обстоит ли что-то так, как об этом говорят",     
	[
		new Answer("Согласен", 0),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 2),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//11
	new Question("Я люблю открывать для себя новые виды деятельности",     
	[
		new Answer("Согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 0),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//12
	new Question("Мне всегда очень нравится заводить новых друзей",     
	[
		new Answer("Согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 0),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//13
	new Question("Я люблю представлять то, чего со мной никогда не было",     
	[
		new Answer("Согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 0),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//14
	new Question("Я никогда не мечтаю о том, что смогу стать известной творческой личностью",     
	[
		new Answer("Согласен", 0),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 2),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//15
	new Question("Иногда мои идеи так интересны мне, что я могу позабыть про всё на свете",     
	[
		new Answer("Согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 0),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//16
	new Question("Жить и работать на космической станции было бы гораздо лучше, чем на Земле",     
	[
		new Answer("Согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 0),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//17
	new Question("Когда я не знаю, что будет дальше, я начинаю нервничать",     
	[
		new Answer("Согласен", 0),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 2),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//18
	new Question("Мне нравится всё необычное, всё то, что не похоже на привычные вещи",     
	[
		new Answer("Согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 0),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//19
	new Question("Часто я пытаюсь представить себе мысли других людей",     
	[
		new Answer("Согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 0),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//20
	new Question("Я люблю читать рассказы и смотреть передачи о событиях прошлого",     
	[
		new Answer("Согласен", 0),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 2),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//21
	new Question("Я люблю обсуждать свои идеи вместе со своими друзьями",     
	[
		new Answer("Согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 0),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//22
	new Question("Даже если я ошибаюсь или делаю что-то неправильно, я остаюсь спокоен",     
	[
		new Answer("Согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 2),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//23
	new Question("В будущем я бы хотел сделать нечто такое, чего никто не делал прежде",     
	[
		new Answer("Согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 0),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//24
	new Question("Я подбираю себе друзей, которые делают всё, как обычно",     
	[
		new Answer("Согласен", 0),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 2),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//25
	new Question("Меня часто не устраивают многие из существующих правил и ограниченийы",     
	[
		new Answer("Согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 0),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//26
	new Question("Я люблю решать даже такие задачи, в которых нет правильного ответа",     
	[
		new Answer("Согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 0),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//27
	new Question("Есть много всего, с чем я хотел бы провести эксперименты",     
	[
		new Answer("Согласен", 0),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 0),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//28
	new Question("Если однажды я найду ответ на вопрос, я больше не стану искать других ответов",     
	[
		new Answer("Согласен", 0),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 2),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//29
	new Question("Мне никогда не нравились публичные выступления",     
	[
		new Answer("Согласен", 0),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 2),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//30
	new Question("Во время чтения книги или просмотра фильма я представляю себя главным героем",     
	[
		new Answer("Согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 0),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//31
	new Question("Мне нравится представлять, как жили люди в прошлом",     
	[
		new Answer("Согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 0),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//32
	new Question("Я не люблю, когда мои товарищи проявляют нерешительность",     
	[
		new Answer("Согласен", 0),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 2),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//33
	new Question("Мне нравится разбирать старые коробки и чемоданы просто ради любопытства",     
	[
		new Answer("Согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 0),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//34
	new Question("Я бы хотел, чтобы мои родители и наставники никогда не менялись",     
	[
		new Answer("Согласен", 0),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 2),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//35
	new Question("Я всегда стараюсь доверять своей интуиции и внутреннему чутью",     
	[
		new Answer("Согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 0),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//36
	new Question("Мне нравится что-то предполагать, а затем поверять, был ли я прав",     
	[
		new Answer("Согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 0),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//37
	new Question("Я люблю играть в игры, в которых нужно просчитывать свои действия",     
	[
		new Answer("Согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 0),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//38
	new Question("Мне всегда было интересно устройство различных механизмов",     
	[
		new Answer("Согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 0),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//39
	new Question("Мои лучшие друзья всегда критикуют глупые идеи",     
	[
		new Answer("Согласен", 0),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 2),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//40
	new Question("Мне нравится придумывать что-то, пусть даже это и неприменимо на практике",     
	[
		new Answer("Согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 0),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//41
	new Question("Я люблю, когда всегда и везде соблюдается порядок",     
	[
		new Answer("Согласен", 0),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 2),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//42
	new Question("Я бы хотел искать ответы на вопросы, которые могут возникнуть позже",     
	[
		new Answer("Согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 0),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//43
	new Question("Мне нравится делать что-то новое, чтобы узнать, что получится",     
	[
		new Answer("Согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 0),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//44
	new Question("В любимые игры я играю ради удовольствия, а не чтобы выиграть",     
	[
		new Answer("Согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 0),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//45
	new Question("Я люблю думать о чём-то таком, что никому ещё не приходило в голову",     
	[
		new Answer("Согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 0),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//46
	new Question("Если я вижу картину, на которой кто-то изображён, я хочу узнать, кто это",     
	[
		new Answer("Согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен",0),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//47
	new Question("Мне нравится перелистывать журналы и книги просто ради интереса",     
	[
		new Answer("Согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 0),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//48
	new Question("Мне кажется, что на многие вопросы можно дать один верный ответ",     
	[
		new Answer("Согласен", 0),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 2),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//49
	new Question("Мне нравится спрашивать о чём-то таком, о чём другие обычно не спрашивают",     
	[
		new Answer("Согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 0),
		new Answer("Затрудняюсь ответить", -1),
	]),
	//50
	new Question("	И на работе и дома у меня всегда есть много интересных дел",     
	[
		new Answer("Согласен", 2),
		new Answer("Отчасти согласен", 1),
		new Answer("Не согласен", 0),
		new Answer("Затрудняюсь ответить", -1),
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
			var wrap =  document.createElement("div");
			wrap.setAttribute('class','progressWrap');progressBar.setAttribute('style','width:'+progressInfill+'%');
			progressValue.innerHTML = progressInfill;e =  document.createElement("h3");
			progressTitle.setAttribute('class','progress-title')
			var mainDiv = document.createElement("div");
			mainDiv.setAttribute('class','progress blue');
			var progressBar = document.createElement("div");
			progressBar.setAttribute('class','progress-bar');
			var	progressValue =  document.createElement("div");
			progressValue.setAttribute('class','progress-value');

			if(i == 1){
				var progressInfill = getCookie("scale_1");
				progressValue.innerHTML = "Любознательность: "+progressInfill + " из 24";
				coockieScore += Number.parseInt(progressInfill);
				progressInfill = Number.parseInt((progressInfill/24)*100);
				progressBar.setAttribute('style','width:'+progressInfill+'%');
				progressValue.innerHTML = progressInfill;
			}
			if(i == 2){
				var progressInfill = getCookie("scale_2");
				progressValue.innerHTML = "Сложность : "+progressInfill + " из 22";
				coockieScore += Number.parseInt(progressInfill);
				progressInfill = Number.parseInt((progressInfill/22)*100);
				progressBar.setAttribute('style','width:'+progressInfill+'%');
				progressValue.innerHTML = progressInfill;
			}
			if(i == 3){
				var progressInfill = getCookie("scale_3");
				progressValue.innerHTML = "Воображение: "+progressInfill + " из 26";
				coockieScore += Number.parseInt(progressInfill);
				progressInfill = Number.parseInt((progressInfill/26)*100);
				progressBar.setAttribute('style','width:'+progressInfill+'%');
				progressValue.innerHTML = progressInfill;
			}
			if(i == 4){
				var progressInfill = getCookie("scale_4");
				progressValue.innerHTML = "Склонность к риску: "+progressInfill + " из 26";
				coockieScore += Number.parseInt(progressInfill);
				progressInfill = Number.parseInt((progressInfill/26)*100);
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
		console.log("percentOf2: " + percentOf);
		setCookie("percentOfCoockieScore2", percentOf);
		setCookie("end",2);
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