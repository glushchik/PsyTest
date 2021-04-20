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
	new Result("У вас низкая потребность в достижениях. ", 0),
	new Result("У вас низкая потребность в достижениях. ", 1),
	new Result("У вас низкая потребность в достижениях. ", 2),
	new Result("У вас низкая потребность в достижениях. ", 3),
	new Result("У вас низкая потребность в достижениях. ", 4),
	new Result("У вас низкая потребность в достижениях. ", 5),
	new Result("У вас низкая потребность в достижениях. ", 6),

	new Result("У вас пониженная потребность в достижениях. ", 7),
	new Result("У вас пониженная потребность в достижениях. ", 8),
	new Result("У вас пониженная потребность в достижениях. ", 9),

	new Result("У вас средняя потребность в достижениях. ", 10),
	new Result("У вас средняя потребность в достижениях. ", 11),
	new Result("У вас средняя потребность в достижениях. ", 12),
	new Result("У вас средняя потребность в достижениях. ", 13),
	new Result("У вас средняя потребность в достижениях. ", 14),
	new Result("У вас средняя потребность в достижениях. ", 15),

	new Result("У вас повышенная потребность в достижениях. ", 16),
	new Result("У вас повышенная потребность в достижениях. ", 17),
	new Result("У вас повышенная потребность в достижениях. ", 18),
	
	new Result("У вас высокая потребность в достижениях. ", 19),
	new Result("У вас высокая потребность в достижениях. ", 20),
	new Result("У вас высокая потребность в достижениях. ", 21),
	new Result("У вас высокая потребность в достижениях. ", 22),
	new Result("У вас высокая потребность в достижениях. ", 23),
];

//Массив с вопросами
const questions = 
[

	//1
	new Question("Думаю, что успех в жизни, скорее, зависит от случая, чем от расчета. ",     
	[
		new Answer("Да", 0),
		new Answer("Нет", 1),

	]),
	//2
	new Question("Если я лишусь любимого занятия, жизнь для меня потеряет всякий смысл. ",     
	[
		new Answer("Да", 1),
		new Answer("Нет", 0),

	]),
	//3
	new Question("Для меня в любом деле важнее не его исполнение, а конечный результат. ",     
	[
		new Answer("Да", 0),
		new Answer("Нет", 1),

	]),

	//4
	new Question("Считаю, что люди больше страдают от неудач на работе, чем от плохих взаимоотношений с близкими. ",     
	[
		new Answer("Да", 0),
		new Answer("Нет", 1),

	]),
	//5
	new Question("По моему мнению, большинство людей живут далекими целями, а не близкими. ",     
	[
		new Answer("Да", 0),
		new Answer("Нет", 1),

	]),
	//6
	new Question("В жизни у меня было больше успехов, чем неудач. ",     
	[
		new Answer("Да", 1),
		new Answer("Нет", 0),

	]),
	//7
	new Question("Эмоциональные люди мне нравятся больше, чем деятельные. ",     
	[
		new Answer("Да", 1),
		new Answer("Нет", 0),

	]),
	//8
	new Question("Даже в обычной работе я стараюсь усовершенствовать некоторые ее элементы. ",     
	[
		new Answer("Да", 1),
		new Answer("Нет", 0),

	]),
	//9
	new Question("Поглощенный мыслями об успехе, я могу забыть о мерах предосторожности. ",     
	[
		new Answer("Да", 0),
		new Answer("Нет",11),

	]),
	//10 НА ЭТОТ ВОПРОС НЕТ КЛЮЧА В ТЕСТЕ
	new Question("Мои близкие считают меня ленивым. ",     
	[
		new Answer("Да", 1),
		new Answer("Нет", 2),

	]),
	//11
	new Question("Думаю, что в моих неудачах повинны, скорее, обстоятельства, чем я сам. ",     
	[
		new Answer("Да", 0),
		new Answer("Нет", 1),

	]),
	//12
	new Question("Терпения во мне больше, чем способностей. ",     
	[
		new Answer("Да", 0),
		new Answer("Нет", 1),

	]),
	//13
	new Question("Мои родители слишком строго контролировали меня. ",     
	[
		new Answer("Да", 0),
		new Answer("Нет", 1),

	]),
	//14
	new Question("Лень, а не сомнение в успехе вынуждает меня часто отказываться от своих намерений. ",     
	[
		new Answer("Да", 1),
		new Answer("Нет", 0),

	]),
	//15
	new Question("Думаю, что я уверенный в себе человек. ",     
	[
		new Answer("Да", 0),
		new Answer("Нет", 1),

	]),
	//16
	new Question("Ради успеха я могу рискнуть, даже если шансы невелики.",     
	[
		new Answer("Да", 1),
		new Answer("Нет", 0),

	]),
	//17
	new Question("Я усердный человек. ",     
	[
		new Answer("Да", 0),
		new Answer("Нет", 1),

	]),
	//18
	new Question("Когда все идет гладко, моя энергия усиливается. ",     
	[
		new Answer("Да", 1),
		new Answer("Нет", 0),

	]),
	//19
	new Question("Если бы я был журналистом, я писал бы, скорее, об оригинальных изобретениях людей, чем о происшествиях. ",     
	[
		new Answer("Да", 1),
		new Answer("Нет", 0),

	]),
	//20
	new Question("Мои близкие обычно не разделяют моих планов. ",     
	[
		new Answer("Да", 0),
		new Answer("Нет", 1),

	]),
	//21
	new Question("Уровень моих требований к жизни ниже, чем у моих товарищей. ",     
	[
		new Answer("Да", 1),
		new Answer("Нет", 0),

	]),
	//22
	new Question("Мне кажется, что настойчивости во мне больше, чем способностей. ",     
	[
		new Answer("Да", 1),
		new Answer("Нет", 0),

	]),
	//23
	new Question("Я мог бы достичь большего, освободившись от текущих дел.  ",     
	[
		new Answer("Да", 1),
		new Answer("Нет", 0),

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
		//Если это конец, то выводим результат
		buttonsElem.innerHTML = "";
		console.log("test 2 score:" + quiz.score);
		var TEST2 = Number.parseInt(quiz.score);
		setCookie("TEST2",TEST2);
		setCookie("TEST3_PER",23);
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