/*
	ТЕСТ НОМЕР 2 
	Методика «Потребность в достижении цели» 
*/

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
		this.score += value;

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
];

//Массив с вопросами
const questions = 
[

	new Question("Прочитав хорошую книгу, я всегда потом долго думаю о ней; хочется ее с кем-нибудь обсудить.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
		new Answer("6", 6),
		new Answer("7", 7),

	]),
	new Question("Когда меня вдруг неожиданно о чем-то спросят, я могу ответить первое, что пришло в голову.",     
	[
		new Answer("1", 7),
		new Answer("2", 6),
		new Answer("3", 5),
		new Answer("4", 4),
		new Answer("5", 3),
		new Answer("6", 2),
		new Answer("7", 1),

	]),
	new Question("Прежде чем снять трубку телефона, чтобы позвонить по делу, я обычно мысленно планирую предстоящий разговор.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
		new Answer("6", 6),
		new Answer("7", 7),

	]),
	new Question("Совершив какой-то промах, я долго потом не могу отвлечься от мыслей о нем.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
		new Answer("6", 6),
		new Answer("7", 7),

	]),
	new Question("Когда я размышляю над чем-то или беседую с другим человеком, мне бывает интересно вдруг вспомнить, что послужило началом цепочки лей.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
		new Answer("6", 6),
		new Answer("7", 7),

	]),
	new Question("Приступая к трудному заданию, я стараюсь не думать о предстоящих трудностях.",     
	[
		new Answer("1", 7),
		new Answer("2", 6),
		new Answer("3", 5),
		new Answer("4", 4),
		new Answer("5", 3),
		new Answer("6", 2),
		new Answer("7", 1),

	]),
	new Question("Главное для меня – представить конечную цель своей деятельности, а детали имеют второстепенное значение.",     
	[
		new Answer("1", 7),
		new Answer("2", 6),
		new Answer("3", 5),
		new Answer("4", 4),
		new Answer("5", 3),
		new Answer("6", 2),
		new Answer("7", 1),

	]),
	new Question("Бывает, что я не могу понять, почему кто-либо недоволен мною.",     
	[
		new Answer("1", 7),
		new Answer("2", 6),
		new Answer("3", 5),
		new Answer("4", 4),
		new Answer("5", 3),
		new Answer("6", 2),
		new Answer("7", 1),

	]),
	new Question("Я часто ставлю себя на место другого человека.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
		new Answer("6", 6),
		new Answer("7", 7),

	]),
	new Question("Для меня важно в деталях представлять себе ход предстоящей работы.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
		new Answer("6", 6),
		new Answer("7", 7),

	]),
	new Question("Мне было бы трудно написать серьезное письмо, если бы я заранее не составил план.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
		new Answer("6", 6),
		new Answer("7", 7),

	]),
	new Question("Я предпочитаю действовать, а не размышлять над причинами своих неудач.",     
	[
		new Answer("1", 7),
		new Answer("2", 6),
		new Answer("3", 5),
		new Answer("4", 4),
		new Answer("5", 3),
		new Answer("6", 2),
		new Answer("7", 1),

	]),
	new Question("Я довольно легко принимаю решение относительно дорогой покупки.",     
	[
		new Answer("1", 7),
		new Answer("2", 6),
		new Answer("3", 5),
		new Answer("4", 4),
		new Answer("5", 3),
		new Answer("6", 2),
		new Answer("7", 1),

	]),
	new Question("Как правило, что-то задумав, я прокручиваю в голове свои замыслы, уточняя детали, рассматривая все варианты.",     
	[
		new Answer("1", 7),
		new Answer("2", 6),
		new Answer("3", 5),
		new Answer("4", 4),
		new Answer("5", 3),
		new Answer("6", 2),
		new Answer("7", 1),

	]),
	new Question("Я беспокоюсь о своем будущем.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
		new Answer("6", 6),
		new Answer("7", 7),

	]),
	new Question("Думаю, что во множестве ситуаций надо действовать быстро, руководствуясь первой пришедшей в голову мыслью.",     
	[
		new Answer("1", 7),
		new Answer("2", 6),
		new Answer("3", 5),
		new Answer("4", 4),
		new Answer("5", 3),
		new Answer("6", 2),
		new Answer("7", 1),

	]),
	new Question("Порой я принимаю необдуманные решения.",     
	[
		new Answer("1", 7),
		new Answer("2", 6),
		new Answer("3", 5),
		new Answer("4", 4),
		new Answer("5", 3),
		new Answer("6", 2),
		new Answer("7", 1),

	]),
	new Question("Закончив разговор, я, бывает, продолжаю вести его мысленно, приводя все новые и новые аргументы в защиту своей точки зрения.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
		new Answer("6", 6),
		new Answer("7", 7),

	]),
	new Question("Если происходит конфликт, то, размышляя над тем, кто в нем виноват, я в первую очередь начинаю с себя.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
		new Answer("6", 6),
		new Answer("7", 7),

	]),
	new Question("Прежде чем принять решение, я всегда стараюсь все тщательно обдумать и взвесить.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
		new Answer("6", 6),
		new Answer("7", 7),

	]),
	new Question("У меня бывают конфликты от того, что я порой не могу предугадать, какого поведения ожидают от меня окружающие.",     
	[
		new Answer("1", 7),
		new Answer("2", 6),
		new Answer("3", 5),
		new Answer("4", 4),
		new Answer("5", 3),
		new Answer("6", 2),
		new Answer("7", 1),

	]),
	new Question("Бывает, что, обдумывая разговор с другим человеком, я как бы мыс ленно веду с ним диалог.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
		new Answer("6", 6),
		new Answer("7", 7),

	]),
	new Question("Я стараюсь не задумываться над тем, какие мысли и чувства вызывают в других людях мои слова и поступки.",     
	[
		new Answer("1", 7),
		new Answer("2", 6),
		new Answer("3", 5),
		new Answer("4", 4),
		new Answer("5", 3),
		new Answer("6", 2),
		new Answer("7", 1),

	]),
	new Question("Прежде чем сделать замечание другому человеку, я обязательно подумаю, в каких словах это лучше сделать, чтобы его не обидеть.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
		new Answer("6", 6),
		new Answer("7", 7),

	]),
	new Question("Решая трудную задачу, я думаю над ней даже тогда, когда занимаюсь другими делами.",     
	[
		new Answer("1", 1),
		new Answer("2", 2),
		new Answer("3", 3),
		new Answer("4", 4),
		new Answer("5", 5),
		new Answer("6", 6),
		new Answer("7", 7),

	]),
	new Question("Если я с кем-то ссорюсь, то в большинстве случаев не считаю себя виноватым.",     
	[
		new Answer("1", 7),
		new Answer("2", 6),
		new Answer("3", 5),
		new Answer("4", 4),
		new Answer("5", 3),
		new Answer("6", 2),
		new Answer("7", 1),

	]),
	new Question("Редко бывает так, что я жалею о сказанном",     
	[
		new Answer("1", 7),
		new Answer("2", 6),
		new Answer("3", 5),
		new Answer("4", 4),
		new Answer("5", 3),
		new Answer("6", 2),
		new Answer("7", 1),

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
		headElem.innerHTML = "";
		headElem.innerHTML = "Результаты теста";
		let x = quiz.score;
		if((x < 80)||((x>80)&&(x<113))){
			headElem.innerHTML = "Низкий уровень развития рефлексивности."
		}
		if((x>113)&&(x<147)){
			headElem.innerHTML = "Средний уровень развития рефлексивности."
		}
		if(x>147){
			headElem.innerHTML = "Высокий уровень развития рефлексивности."
		}
		//Если это конец, то выводим результат
		buttonsElem.innerHTML = "";
		var TEST11 = Number.parseInt(quiz.score);
		setCookie("TEST11",TEST11);
		setCookie("TEST11_PER",189);
		pagesElem.innerHTML = "Очки: " + quiz.score;
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