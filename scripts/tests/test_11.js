/*
	ТЕСТ НОМЕР 11 
	Методика «Рекфлексивности» 
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

//Массив с вопросами
const questions = 
[

	//1
	new Question("Одинадцатый месяц года - это ",     
	[
		new Answer("Октябрь ", 0),
		new Answer("Май", 0),
		new Answer("Ноябрь", 1),
		new Answer("Февраль", 0),

	]),
	//2
	new Question("Суровый является противоположным по значению слову:",     
	[
		new Answer("Резкий", 0),
		new Answer("Строгий", 0),
		new Answer("Мягкий", 1),
		new Answer("Жесткий", 0),
		new Answer("Неподатливый", 0),
	]),
	//3
	new Question("Какое из приведенных ниже слов отлично от других?",     
	[
		new Answer("Определенный", 0),
		new Answer("Сомнительный", 1),
		new Answer("Уверенный", 0),
		new Answer("Доверие", 0),
		new Answer("Верный", 0),
	]),
	//4
	new Question("Верно ли что н.э. означает «нашей эры» («новой эры»)?",     
	[
		new Answer("Да", 1),
		new Answer("Нет", 0),
	]),

	//5
	new Question("Какое из следующих слов отлично от других?",     
	[
		new Answer("Звонить", 0),
		new Answer("Болтать", 0),
		new Answer("Слушать", 1),
		new Answer("Говорить", 0),
		new Answer("Нет отличающихся слов", 0),
	]),
	//6
	new Question("Слово безукоризненный является противоположным по своему значению слову:",     
	[
		new Answer("Незапятнанный", 0),
		new Answer("Непристойный", 2),
		new Answer("Неподкупный", 0),
		new Answer("Невинный", 0),
		new Answer("Класический", 0),
	]),
	//7
	new Question("Какое из приведенных ниже слов относится к слову жевать как обоняние к нос?",     
	[
		new Answer("Сладкий", 0),
		new Answer("Язык", 0),
		new Answer("Запах", 0),
		new Answer("Зубы", 1),
		new Answer("Чистый", 0),
	]),
	//8
	new Question("Сколько из приведенных ниже пар слов являются полностью идентичными?<br>Sharp, М.С. Sharp, М.С. <br>Fielder, Е.Н. Filder, E.N. <br>Connor, М.С. Conner, M.G. <br>Woesner, O.W. Woerner, O.W. <br>Soderquist, P.E. Soderquist, B.E. <br>",     
	[
		new Answer("1", 1),
		new Answer("2", 0),
		new Answer("3", 0),
		new Answer("4", 0),
		new Answer("5", 0),
	]),

	//9
	new Question("Ясный является противоположным по смыслу слову:",     
	[
		new Answer("Очевидный", 0),
		new Answer("Явный", 0),
		new Answer("Недвусмысленный", 0),
		new Answer("Отчетливый", 0),
		new Answer("Тусклый", 1),
	]),
	//10
	new Question("Предприниматель купил несколько подержанных автомобилей за 3500 долларов, а продал их за 5500, заработав на этом 50 долларов за автомобиль. Сколько автомобилей он перепродал?",     
	[
		new Answer("10", 0),
		new Answer("50", 0),
		new Answer("20", 0),
		new Answer("40", 1),
		new Answer("70", 0),
	]),
	//11
	new Question("Слова стук и сток имеют:",     
	[
		new Answer("Сходное значение", 0),
		new Answer("Противоположное", 0),
		new Answer("Ни сходное, ни противоположное", 1),
	]),
	//12
	new Question("Три лимона стоят 45 копеек. Сколько (в копейках) стоят 1,5 дюжины?",     
	[
		new Answer("10", 0),
		new Answer("485", 0),
		new Answer("270", 1),
		new Answer("675", 0),
		new Answer("225", 0),
	]),
	//13
	new Question("Сколько из этих 6 пар чисел являются полностью одинаковыми?<br>5296   5296<br>66986    69686 <br>	834426    834426 <br>7354256    7354256 <br>61197172    61197172 <br>83238324    83238234 <br>",     
	[
		new Answer("1", 0),
		new Answer("2", 0),
		new Answer("3", 0),
		new Answer("4", 1),
		new Answer("5", 0),
		new Answer("Все", 0),
	]),
	//14
	new Question(".Близкий является противоположным по значению слову:",     
	[
		new Answer("Дружеский", 0),
		new Answer("Приятельский", 0),
		new Answer("Чужой", 1),
		new Answer("Родной", 0),
		new Answer("Иной", 0),
	]),
	//15
	new Question("Какое число является наименьшим?",     
	[
		new Answer("0.7", 0),
		new Answer("9", 0),
		new Answer("36", 0),
		new Answer("0.31", 1),
		new Answer("5", 0),
	]),
	//16
	new Question("Расставьте предлагаемые ниже слова в таком порядке, чтобы получилось правильное предложение. В качестве ответа введите номер последнего слова:<br>есть(1), соль(2), любовь(3), жизни(4)",     
	[
		new Answer("1", 0),
		new Answer("2", 0),
		new Answer("3", 0),
		new Answer("4", 1),
	]),
	//18
	new Question("Два рыбака поймали 36 рыб. Первый поймал в 8 раз больше, чем второй. Сколько поймал второй?",     
	[
		new Answer("1", 0),
		new Answer("3", 0),
		new Answer("4", 1),
		new Answer("5", 0),
		new Answer("2", 0),
	]),
	//19
	new Question("Слова восходить и возродить имеют:",     
	[
		new Answer("Сходное значение", 0),
		new Answer("Противоположное", 0),
		new Answer("Ни сходное, ни противоположное", 1),
	]),
	//20
	new Question(" Расставьте предлагаемые ниже слова в таком порядке, чтобы получилось утверждение. Если оно правильно, то ответом будет 1, если неправильно, — 2:<br>мхом обороты камень набирает заросший.",     
	[
		new Answer("1", 0),
		new Answer("2", 1),
	]),
	//21
	new Question("Какие две из приведенных ниже фраз имеют одинаковый смысл:",     
	[
		new Answer("Держать нос по ветру.<br>Не все то золото, что блестит", 0),
		new Answer("Трое докторов не лучше одного<br>У семи нянек дитя без глаза", 1),
	]),
	//22
	new Question("Какое число должно стоять вместо знака «?»?<br>73  66  59  52  45  38 ?",     
	[
		new Answer("21", 0),
		new Answer("24", 0),
		new Answer("31", 1),
		new Answer("45", 0),
	]),
	//23
	new Question("Длительность дня и ночи в сентябре почти такая же, как и в:",     
	[
		new Answer("Июне", 0),
		new Answer("Марте", 1),
		new Answer("Мае", 0),
		new Answer("Ноябре", 0),
	]),
	//24
	new Question("Предположим, что первые два утверждения верны. Тогда заключительное будет: 1 — верно; 2 — неверно; 3 — неопределенно.",     
	[
		new Answer("Все передовые люди — члены партии.", 1),
		new Answer("Все передовые люди занимают крупные посты.", 0),
		new Answer("Некоторые члены партии занимают крупные посты.", 0),
	]),
	//25
	new Question("Поезд проходит 75 см за 1/4 с. Если он будет двигаться с той же скоростью, то какое расстояние (в сантиметрах) он пройдет за 5 с?",     
	[
		new Answer("250", 0),
		new Answer("2700", 0),
		new Answer("1700", 0),
		new Answer("1500", 1),
		new Answer("800", 0),
	]),
	//26
	new Question("Если предположить, что два первых утверждения верны, то последнее: 1 — верно; 2 — неверно; 3 — неопределенно.",     
	[
		new Answer("Боре столько же лет, сколько Маше", 1),
		new Answer("Маша моложе Жени", 0),
		new Answer("Боря моложе Жени", 0),
	]),
	//27
	new Question("Пять полукилограммовых пачек мясного фарша стоят 2 рубля. Сколько килограммов фарша можно купить за 80 копеек?",     
	[
		new Answer("1", 1),
		new Answer("2", 0),
		new Answer("3", 0),
		new Answer("5", 0),
	]),
	//28
	new Question("Слова расстилать и растянуть имеют:",     
	[
		new Answer("Сходное значение", 1),
		new Answer("Противоположное", 0),
		new Answer("Ни сходное, ни противоположное", 0),
	]),
	//30
	new Question("Предположим, что первые два утверждения верны. Тогда последнее: 1 — верно; 2 — неверно; 3 — неопределенно.",     
	[
		new Answer("Саша поздоровался с Машей.", 0),
		new Answer("Маша поздоровалась с Дашей.", 0),
		new Answer("Саша не поздоровался с Дашей.", 1),
	]),
	//31
	new Question("Автомобиль «Жигули» стоимостью 2400 рублей был уценен во время сезонной распродажи на З3 1/3% Сколько стоил автомобиль во время распродажи?",     
	[
		new Answer("1200", 0),
		new Answer("1600", 1),
		new Answer("1800", 0),
		new Answer("1860", 0),
		new Answer("1733", 0),
	]),
	//33
	new Question("На платье требуется 2 1/3 м ткани. Сколько платьев можно сшить из 42 м?",     
	[
		new Answer("12", 0),
		new Answer("19", 0),
		new Answer("22", 0),
		new Answer("20", 0),
		new Answer("18", 1),
	]),
	//34
	new Question("Значения следующих двух предложений:<br>1.Трое докторов не лучше одного<br>2.Чем больше докторов, тем больше болезней",     
	[
		new Answer("Схож", 0),
		new	Answer("Противоположен",0),
		new Answer("Ни схож, ни противоположен", 1),
	]),
	//35
	new Question("Слова увеличивать и расширять имеют:",     
	[
		new Answer("Схожее", 1),
		new Answer("Противоположное;", 0),
		new Answer("ни сходное, ни противоположное", 0),
	]),
	//36
	new Question("Смысл двух английских пословиц:<br>1.Швартоваться лучше двумя якорями.<br>2.Не клади все яйца в одну корзину.",     
	[
		new Answer("Схож", 1),
		new	Answer("Противоположен",0),
		new Answer("Ни схож, ни противоположен", 0),
	]),
	//37
	new Question("Бакалейщик купил ящик с апельсинами за 36 рублей. В ящике их было 12 дюжин. Он знает, что 2 дюжины испортятся еще до того, как он продаст все апельсины. По какой цене за дюжину (в копейках) ему нужно продавать апельсины, чтобы получить прибыль в 1/3 закупочной цены?",     
	[
		new Answer("580", 0),
		new Answer("250", 0),
		new Answer("480", 1),
		new Answer("350", 0),
		new Answer("120", 0),
	]),
	//38
	new Question("Слова претензия и претенциозный имеют:",     
	[
		new Answer("Сходное значение", 1),
		new Answer("Противоположное", 0),
		new Answer("Ни сходное, ни противоположное", 0),
	]),
	//39
	new Question("Если бы полкило картошки стоило 0,0125 руб., то сколько килограммов можно было бы купить за 50 копеек?",     
	[
		new Answer("20", 1),
		new Answer("30", 0),
		new Answer("40", 0),
		new Answer("50", 0),
		new Answer("60", 0),
	]),
	//40
	new Question("Один из членов ряда не подходит к другим. Каким числом вы бы его заменили?<br>¼, 1/3, 1/8, ¼, 1/8, 1/8, ¼, 1/8, 1/6.",     
	[
		new Answer("1/8", 1),
		new Answer("¼", 0),
		new Answer("1/3", 0),
		new Answer("1/6", 0),
	]),
	//41
	new Question("Слова отражаемый и воображаемый имеют:",     
	[
		new Answer("Cходное значение", 0),
		new Answer("Противоположное", 0),
		new Answer("Ни сходное, ни противоположное", 1),
	]),
	//42
	new Question("Сколько соток составляет участок 70 х 20 м?",     
	[
		new Answer("12", 0),
		new Answer("25", 0),
		new Answer("37", 0),
		new Answer("18", 0),
		new Answer("14", 1),
	]),
	//43
	new Question("Следующие две фразы по значению:<br>Хорошие вещи дешевы, плохие дороги.<br>Хорошее качество обеспечивается простотой, плохое — сложностью.",     
	[
		new Answer("Сходны", 1),
		new Answer("Противоположны", 0),
		new Answer("Ни сходны, ни проитивоположны", 0),
	]),
	//44
	new Question("Солдат, стреляя в цель, поразил ее в 12,5% случая. Сколько раз солдат должен выстрелить, чтобы поразить ее сто раз?",     
	[
		new Answer("1200", 0),
		new Answer("800", 1),
		new Answer("950", 0),
	]),
	//46
	new Question("Три партнера по акционерному обществу «Интенсивник» решили поделить прибыль поровну. Т. вложил в дело 4500 руб., К. — 3500 руб., П. — 2000 руб. Если прибыль составит 2400 руб., то на сколько меньше прибыли получит Т. по сравнению с тем, как если бы прибыль была разделена пропорционально вкладам?",     
	[
		new Answer("280", 1),
		new Answer("370", 0),
		new Answer("420", 0),
		new Answer("1200", 0),
		new Answer("380", 0),
	]),
	//47
	new Question("Какие две из приведенных ниже пословиц имеют сходный смысл?",     
	[
		new Answer("Куй железо, пока горячо.<br>Один в поле не воин.", 0),
		new Answer("Не все то золото, что блестит.<br>Не по виду гляди, а по делам суди.", 0),
	]),
	//48
	new Question("Значения следующих фраз:<br>Лес рубят, щепки летят<br>Большое дело не бывает без потерь.",     
	[
		new Answer("Сходны", 1),
		new Answer("Противоположны", 0),
		new Answer("Ни сходны, ни противоположны", 0),
	]),
	//50
	new Question("В печатающейся статье 24 000 слов. Редактор решил использовать шрифт двух размеров. При использовании шрифта большего размера на странице умещается 900 слов, меньшего — 1200. Статья должна занять 21 полную страницу в журнале. Сколько страниц должно быть напечатано мелким шрифтом?",     
	[
		new Answer("12", 0),
		new Answer("35", 0),
		new Answer("17", 1),
		new Answer("20", 0),
		new Answer("15", 0),
	]),

];
//Сам тест
const quiz = new Quiz(2, questions);

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
		if(quiz.score < 17){
			headElem.innerHTML = "Низкий уровень интеллектуальных способностей»";
		}else if(quiz.score > 16 &&  quiz.score < 25){
			headElem.innerHTML = "Средний уровень интеллектуальных способностей!<br>Вы можете гордится собой,уровень ваших интеллектуальных способностей позволяет вам хоть сейчас приступить к освоению широкого круга профессий. Кроме того, уровень вашего интеллектуального развития достаточен для того, чтобы вы могли рассчитывать на довольно высокую успешность выполнения деятельности в любой профессии творческого класса.";
		}else if(quiz.score > 29){
			headElem.innerHTML = "А если ваша оценка превосходит 30 баллов, то вы можете гордиться своими результатами. Мало кто из людей достигает такого высокого уровня развития интеллектуальных способностей.";
		}
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