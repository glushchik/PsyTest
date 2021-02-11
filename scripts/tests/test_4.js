/*
	ТЕСТ НОМЕР 3
	МТЖЦ
*/

setCookie("scale_1", 0);
setCookie("scale_2", 0);
setCookie("scale_3", 0);
setCookie("scale_4", 0);
setCookie("scale_5", 0);

setCookie("scale_6", 0);
setCookie("scale_7", 0);
setCookie("scale_8", 0);


setCookie("scale_9", 0);
setCookie("scale_10", 0);
setCookie("scale_11", 0);
setCookie("scale_12", 0);
setCookie("scale_13", 0);
setCookie("scale_14", 0);

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
		if((indexQue == 1)||(indexQue ==15) || (indexQue ==27)||(indexQue ==37) || (indexQue ==45)||(indexQue ==51) || (indexQue ==57)||(indexQue ==71) || (indexQue ==83)||(indexQue ==93)||(indexQue ==101)||(indexQue ==107)){
			
			//Дублируем вопросы в ветки связанные со сферами жизни
			if((indexQue == 1)||(indexQue == 57)){
				let coockieValue = Number.parseInt(getCookie("scale_9"));
				coockieValue += value;
				setCookie("scale_9", coockieValue);
			}
			if((indexQue == 15)||(indexQue == 71)){
				let coockieValue = Number.parseInt(getCookie("scale_10"));
				coockieValue += value;
				setCookie("scale_10", coockieValue);
			}
			if((indexQue == 27)||(indexQue == 83)){
				let coockieValue = Number.parseInt(getCookie("scale_11"));
				coockieValue += value;
				setCookie("scale_11", coockieValue);
			}
			if((indexQue == 37)||(indexQue == 93)){
				let coockieValue = Number.parseInt(getCookie("scale_12"));
				coockieValue += value;
				setCookie("scale_12", coockieValue);
			}
			if((indexQue == 45)||(indexQue == 101)){
				let coockieValue = Number.parseInt(getCookie("scale_13"));
				coockieValue += value;
				setCookie("scale_14", coockieValue);
			}
			if((indexQue == 51)||(indexQue == 107)){
				let coockieValue = Number.parseInt(getCookie("scale_14"));
				coockieValue += value;
				setCookie("scale_41", coockieValue);
			}
			

			let coockieValue = Number.parseInt(getCookie("scale_1"));
			coockieValue += value;
			setCookie("scale_1", coockieValue);
		}
		if((indexQue ==8)||(indexQue ==2)||(indexQue ==16)||(indexQue ==28)||(indexQue ==38)||(indexQue ==46)||(indexQue ==64)||(indexQue ==58)||(indexQue ==72)||(indexQue ==84)||(indexQue ==94)||(indexQue ==102)){
			//Дублируем вопросы в ветки связанные со сферами жизни
			if((indexQue == 8)||(indexQue == 64)){
				let coockieValue = Number.parseInt(getCookie("scale_9"));
				coockieValue += value;
				setCookie("scale_9", coockieValue);
			}
			if((indexQue == 2)||(indexQue == 58)){
				let coockieValue = Number.parseInt(getCookie("scale_10"));
				coockieValue += value;
				setCookie("scale_10", coockieValue);
			}
			if((indexQue == 16)||(indexQue == 72)){
				let coockieValue = Number.parseInt(getCookie("scale_11"));
				coockieValue += value;
				setCookie("scale_11", coockieValue);
			}
			if((indexQue == 28)||(indexQue == 84)){
				let coockieValue = Number.parseInt(getCookie("scale_12"));
				coockieValue += value;
				setCookie("scale_12", coockieValue);
			}
			if((indexQue == 38)||(indexQue == 94)){
				let coockieValue = Number.parseInt(getCookie("scale_13"));
				coockieValue += value;
				setCookie("scale_13", coockieValue);
			}
			if((indexQue == 46)||(indexQue == 102)){
				let coockieValue = Number.parseInt(getCookie("scale_14"));
				coockieValue += value;
				setCookie("scale_14", coockieValue);
			}
			

			let coockieValue = Number.parseInt(getCookie("scale_2"));
			coockieValue += value;
			setCookie("scale_2", coockieValue);
		}	
		if((indexQue ==21)||(indexQue ==9)||(indexQue ==3)||(indexQue ==17)||(indexQue ==29)||(indexQue ==39)||(indexQue ==77)||(indexQue ==65)||(indexQue ==59)||(indexQue ==73)||(indexQue ==85)||(indexQue ==95)){
			if((indexQue == 21)||(indexQue == 77)){
				let coockieValue = Number.parseInt(getCookie("scale_9"));
				coockieValue += value;
				setCookie("scale_9", coockieValue);
			}
			if((indexQue == 9)||(indexQue == 65)){
				let coockieValue = Number.parseInt(getCookie("scale_10"));
				coockieValue += value;
				setCookie("scale_10", coockieValue);
			}
			if((indexQue == 3)||(indexQue == 59)){
				let coockieValue = Number.parseInt(getCookie("scale_11"));
				coockieValue += value;
				setCookie("scale_11", coockieValue);
			}
			if((indexQue == 17)||(indexQue == 73)){
				let coockieValue = Number.parseInt(getCookie("scale_12"));
				coockieValue += value;
				setCookie("scale_12", coockieValue);
			}
			if((indexQue == 29)||(indexQue == 85)){
				let coockieValue = Number.parseInt(getCookie("scale_13"));
				coockieValue += value;
				setCookie("scale_13", coockieValue);
			}
			if((indexQue == 39)||(indexQue == 95)){
				let coockieValue = Number.parseInt(getCookie("scale_14"));
				coockieValue += value;
				setCookie("scale_14", coockieValue);
			}
			

			let coockieValue = Number.parseInt(getCookie("scale_3"));
			coockieValue += value;
			setCookie("scale_3", coockieValue);
		}
		if((indexQue ==32)||(indexQue ==22)||(indexQue ==10)||(indexQue ==4)||(indexQue ==18)||(indexQue ==30)||(indexQue ==88)||(indexQue ==78)||(indexQue ==66)||(indexQue ==60)||(indexQue ==74)||(indexQue ==86)){
			if((indexQue == 32)||(indexQue == 88)){
				let coockieValue = Number.parseInt(getCookie("scale_9"));
				coockieValue += value;
				setCookie("scale_9", coockieValue);
			}
			if((indexQue == 22)||(indexQue == 78)){
				let coockieValue = Number.parseInt(getCookie("scale_10"));
				coockieValue += value;
				setCookie("scale_10", coockieValue);
			}
			if((indexQue == 10)||(indexQue == 66)){
				let coockieValue = Number.parseInt(getCookie("scale_11"));
				coockieValue += value;
				setCookie("scale_11", coockieValue);
			}
			if((indexQue == 4)||(indexQue == 60)){
				let coockieValue = Number.parseInt(getCookie("scale_12"));
				coockieValue += value;
				setCookie("scale_12", coockieValue);
			}
			if((indexQue == 18)||(indexQue == 74)){
				let coockieValue = Number.parseInt(getCookie("scale_13"));
				coockieValue += value;
				setCookie("scale_13", coockieValue);
			}
			if((indexQue == 30)||(indexQue == 86)){
				let coockieValue = Number.parseInt(getCookie("scale_14"));
				coockieValue += value;
				setCookie("scale_14", coockieValue);
			}
			

			let coockieValue = Number.parseInt(getCookie("scale_4"));
			coockieValue += value;
			setCookie("scale_4", coockieValue);
		}
		if((indexQue ==41)||(indexQue ==33)||(indexQue ==23)||(indexQue ==11)||(indexQue ==5)||(indexQue ==19)||(indexQue ==97)||(indexQue ==89)||(indexQue ==79)||(indexQue ==67)||(indexQue ==61)||(indexQue ==75)){
			if((indexQue == 41)||(indexQue == 97)){
				let coockieValue = Number.parseInt(getCookie("scale_9"));
				coockieValue += value;
				setCookie("scale_9", coockieValue);
			}
			if((indexQue == 33)||(indexQue == 89)){
				let coockieValue = Number.parseInt(getCookie("scale_10"));
				coockieValue += value;
				setCookie("scale_10", coockieValue);
			}
			if((indexQue == 23)||(indexQue == 79)){
				let coockieValue = Number.parseInt(getCookie("scale_11"));
				coockieValue += value;
				setCookie("scale_11", coockieValue);
			}
			if((indexQue == 11)||(indexQue == 67)){
				let coockieValue = Number.parseInt(getCookie("scale_12"));
				coockieValue += value;
				setCookie("scale_12", coockieValue);
			}
			if((indexQue == 5)||(indexQue == 61)){
				let coockieValue = Number.parseInt(getCookie("scale_13"));
				coockieValue += value;
				setCookie("scale_13", coockieValue);
			}
			if((indexQue == 19)||(indexQue == 75)){
				let coockieValue = Number.parseInt(getCookie("scale_14"));
				coockieValue += value;
				setCookie("scale_14", coockieValue);
			}
			

			let coockieValue = Number.parseInt(getCookie("scale_5"));
			coockieValue += value;
			setCookie("scale_5", coockieValue);
		}
		if((indexQue ==48)||(indexQue ==42)||(indexQue ==34)||(indexQue ==24)||(indexQue ==12)||(indexQue ==6)||(indexQue ==104)||(indexQue ==98)||(indexQue ==90)||(indexQue ==80)||(indexQue ==68)||(indexQue ==62)){
			if((indexQue == 48)||(indexQue == 104)){
				let coockieValue = Number.parseInt(getCookie("scale_9"));
				coockieValue += value;
				setCookie("scale_9", coockieValue);
			}
			if((indexQue == 42)||(indexQue == 98)){
				let coockieValue = Number.parseInt(getCookie("scale_10"));
				coockieValue += value;
				setCookie("scale_10", coockieValue);
			}
			if((indexQue == 34)||(indexQue == 90)){
				let coockieValue = Number.parseInt(getCookie("scale_11"));
				coockieValue += value;
				setCookie("scale_11", coockieValue);
			}
			if((indexQue == 24)||(indexQue == 80)){
				let coockieValue = Number.parseInt(getCookie("scale_12"));
				coockieValue += value;
				setCookie("scale_12", coockieValue);
			}
			if((indexQue == 12)||(indexQue == 68)){
				let coockieValue = Number.parseInt(getCookie("scale_13"));
				coockieValue += value;
				setCookie("scale_13", coockieValue);
			}
			if((indexQue == 6)||(indexQue == 62)){
				let coockieValue = Number.parseInt(getCookie("scale_14"));
				coockieValue += value;
				setCookie("scale_14", coockieValue);
			}
			

			let coockieValue = Number.parseInt(getCookie("scale_1"));
			coockieValue += value;
			setCookie("scale_5", coockieValue);
		}	
		if((indexQue ==53)||(indexQue ==49)||(indexQue ==43)||(indexQue ==35)||(indexQue ==25)||(indexQue ==13)||(indexQue ==109)||(indexQue ==105)||(indexQue ==99)||(indexQue ==91)||(indexQue ==81)||(indexQue ==69)){
			if((indexQue == 53)||(indexQue ==109)){
				let coockieValue = Number.parseInt(getCookie("scale_9"));
				coockieValue += value;
				setCookie("scale_9", coockieValue);
			}
			if((indexQue == 49)||(indexQue == 105)){
				let coockieValue = Number.parseInt(getCookie("scale_10"));
				coockieValue += value;
				setCookie("scale_10", coockieValue);
			}
			if((indexQue == 43)||(indexQue == 99)){
				let coockieValue = Number.parseInt(getCookie("scale_11"));
				coockieValue += value;
				setCookie("scale_11", coockieValue);
			}
			if((indexQue == 35)||(indexQue == 91)){
				let coockieValue = Number.parseInt(getCookie("scale_12"));
				coockieValue += value;
				setCookie("scale_12", coockieValue);
			}
			if((indexQue == 25)||(indexQue == 81)){
				let coockieValue = Number.parseInt(getCookie("scale_13"));
				coockieValue += value;
				setCookie("scale_13", coockieValue);
			}
			if((indexQue == 13)||(indexQue == 69)){
				let coockieValue = Number.parseInt(getCookie("scale_14"));
				coockieValue += value;
				setCookie("scale_14", coockieValue);
			}
			

			let coockieValue = Number.parseInt(getCookie("scale_1"));
			coockieValue += value;
			setCookie("scale_6", coockieValue);
		}
		if((indexQue ==56)||(indexQue ==54)||(indexQue ==50)||(indexQue ==44)||(indexQue ==36)||(indexQue ==26)||(indexQue ==112)||(indexQue ==110)||(indexQue ==106)||(indexQue ==100)||(indexQue ==92)||(indexQue ==82)){
			if((indexQue == 56)||(indexQue == 112)){
				let coockieValue = Number.parseInt(getCookie("scale_9"));
				coockieValue += value;
				setCookie("scale_9", coockieValue);
			}
			if((indexQue == 54)||(indexQue == 110)){
				let coockieValue = Number.parseInt(getCookie("scale_10"));
				coockieValue += value;
				setCookie("scale_10", coockieValue);
			}
			if((indexQue == 50)||(indexQue == 106)){
				let coockieValue = Number.parseInt(getCookie("scale_11"));
				coockieValue += value;
				setCookie("scale_11", coockieValue);
			}
			if((indexQue == 44)||(indexQue == 100)){
				let coockieValue = Number.parseInt(getCookie("scale_12"));
				coockieValue += value;
				setCookie("scale_12", coockieValue);
			}
			if((indexQue == 36)||(indexQue == 92)){
				let coockieValue = Number.parseInt(getCookie("scale_13"));
				coockieValue += value;
				setCookie("scale_13", coockieValue);
			}
			if((indexQue == 26)||(indexQue == 82)){
				let coockieValue = Number.parseInt(getCookie("scale_14"));
				coockieValue += value;
				setCookie("scale_14", coockieValue);
			}
			

			let coockieValue = Number.parseInt(getCookie("scale_1"));
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


const results = 
[
	new Result("Коммуникативные мотивы.", 7),
];

//Массив с вопросами
const questions = 
[
	new Question("Постоянно повышать свою профессиональную квалификацию",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),

	new Question("",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Учиться, чтобы узнавать что-то новое в изучаемой области знании ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Чтобы облик моего жилища постоянно изменялся ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Общаться с разными людьми, участвовать в общественной деятельности ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Чтобы люди, с которыми я провожу свободное время, увлекались тем же чем и я",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Чтобы участие в спортивных состязаниях помогало мне в установлении личных рекордов ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Испытывать антипатии к другим ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Иметь интересную работу, полностью поглощающую меня ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Создавать что-то новое в изучаемой мною области знании ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Быть лидером в моей семье ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Не отставать от времени, интересоваться общественно-политической жизнью ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("В своем увлечении быстро достигать намеченных целей",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Чтобы физическая подготовленность позволяла надежно выполнять работу, дающую хороший заработок ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Позлословить, когда у людей неприятности ",     
	[
		new Answer("Не имеет никакого значения", 5),
		new Answer("Имеет небольшое значение", 4),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 2),
		new Answer("Очень важно", 1),
	]),
	new Question("Учиться чтобы «не зарывать свой талант в землю ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Вместе с семьей посещать концерты, театры, выставки ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Применять свои собственные методы в общественной деятельности ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Состоять членом какого-либо клуба по интересам ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Чтобы окружающие замечали мою спортивную подтянутость ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Не испытывать чувства досады, когда высказывают мнение, противоположное моему ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Изобретать, совершенствовать, придумывать новое в своей профессии ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Чтобы уровень моей образованности позволял чувствовать себя уверенно в общении с самыми разными людьми ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Вести такой образ семейной жизни, который ценится обществом ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Добиваться конкретных целей, занимаясь общественной деятельностью ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Чтобы мое увлечение помогало укрепить мое материальное положение ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Чтобы физическая подготовленность делала меня независимым в любых ситуациях ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Чтобы семейная жизнь исправила некоторые недостатки моей натуры ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Находить внутреннее удовлетворение в активной общественной жизни ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("В свободное время создавать нечто новое, ранее не существовавшее ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Чтобы моя физическая форма позволяла мне уверенно общаться в любой компании ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Не испытывать колебаний, когда кому-то нужно помочь в беде ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Иметь приятельские отношения с коллегами по работе ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Учиться, чтобы не отстать от людей моего круга ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Чтобы мои дети опережали в своем развитии сверстников ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Получать материальное вознаграждение за общественную деятельность ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Чтобы мое увлечение подчеркивало мою индивидуальность ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Развивать свои организаторские способности, занимаясь общественной деятельностью ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Полностью сосредоточиться на своем увлечении, проводя свободное время за хобби ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Придумывать новые упражнения для физической разминки ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Перед длительной поездкой всегда продумывать, что взять с собой ",     
	[
		new Answer("Не имеет никакого значения", 5),
		new Answer("Имеет небольшое значение", 4),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 2),
		new Answer("Очень важно", 1),
	]),
	new Question("Какое впечатление моя работа оказывает на других людей ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Получить высшее образование или поступить в аспирантуру, получить ученую степень ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Чтобы моя семья обладала очень высоким уровнем материального благосостояния ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Твердо отстаивать определенную точку зрения в общественно-политических вопросах ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Знать свои способности в сфере хобби ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Получать удовольствие даже от тяжелой физической нагрузки ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Внимательно слушать собеседника, кто бы он ни был ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("В работе быстро достигать намеченных целей ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Чтобы уровень образования помог бы мне укрепить мое материальное положение ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),


	new Question("Сохранять полную свободу и независимость от членов моей семьи ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Чтобы активная физическая деятельность позволяла изменять мой характер ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Не думать, когда у людей неприятности, что они получили по заслугам ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Чтобы на работе была возможность получения дополнительных материальных благ (премии, путевки, выгодные командировки и т.п.) ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Учиться, чтобы «не затеряться в толпе» ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Бросать что-то делать, когда не уверен в своих силах ",     
	[
		new Answer("Не имеет никакого значения", 5),
		new Answer("Имеет небольшое значение", 4),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 2),
		new Answer("Очень важно", 1),
	]),
	new Question("Чтобы моя профессия подчеркивала индивидуальность ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Заниматься изучением новых веяний в моей профессиональной деятельности ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Учиться, получая при этом удовольствие ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),

	new Question("Постоянно интересоваться новыми методами обучения и воспитания детей в семье ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Участвуя в общественной жизни, взаимодействовать с опытными людьми ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Завоевать уважение у людей благодаря своему увлечению ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Всегда достигать намеченных спортивных разрядов и званий ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Не бросать что-то делать, если нет уверенности в своих силах ",     
	[
		new Answer("Не имеет никакого значения", 5),
		new Answer("Имеет небольшое значение", 4),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 2),
		new Answer("Очень важно", 1),
	]),
	new Question("Получать удовольствие не от результатов работы, а от самого процесса ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Повышать уровень своего образования, чтобы внести вклад в изучаемую дисциплину ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Чтобы для меня не имело значения, что лидер в семье - кто-то другой ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Чтобы мои общественно-политические взгляды совпадали с мнением авторитетных для меня людей ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Занимаясь на досуге любимым делом, детально продумывать свои действия ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Участвуя в различных соревнованиях, завоевать какой-либо приз, вознаграждение ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),

	new Question("Не говорить с умыслом неприятных вещей ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Знать, какого уровня образования можно достичь с моими способностями, чтобы их совершенствовать ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("В супружестве быть всегда абсолютно надежным ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Чтобы жизнь моего окружения постоянно изменялась ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Увлекаться чем-то в свободное время, общаясь с людьми, увлекающимися тем же ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Участвовать в спортивных соревнованиях, чтобы продемонстрировать свое превосходство ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Не испытывать внутреннего протеста, когда меня просят оказать услугу ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Чтобы приемы моей работы изменялись ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Повышать уровень своего образования, чтобы быть вхожим в круг умных и интересных людей ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Иметь супруга (супругу) из семьи высокого социального положения ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),

	new Question("Достигать поставленной цели в своей общественной деятельности ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("В своем увлечении создавать необходимые в жизни вещи (одежду, мебель, технику и т. п.) ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Чтобы физическая подготовка, давая свободу в движениях, создавала и ощущение личной свободы ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Научиться понимать характер моей супруги (супруга), чтобы избежать семейных конфликтов ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Быть полезным для общества ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Вносить различные усовершенствования в сферу моего хобби ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Чтобы среди членов моей спортивной секции (клуба, команды) было много друзей ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Внимательно следить за тем, как я одет ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Чтобы во время работы постоянно была возможность общаться с сослуживцами ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Чтобы уровень моего образования соответствовал уровню образования человека, мнение которого я ценю ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),

	new Question("Тщательно планировать свою семейную жизнь ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Занимать такое место в обществе, которое укрепляло бы мое материальное положение ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Чтобы мои взгляды на жизнь проявлялись в моем увлечении ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Заниматься общественной деятельностью, учиться убеждать людей в своей точке зрения ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Чтобы увлечение занимало большую часть моего свободного времени ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Чтобы моя выдумка проявлялась даже в утренней зарядке ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Всегда охотно признавать свои ошибки ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Чтобы моя работа была на уровне и даже лучше, чем у других ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Чтобы уровень моего образования помог бы мне занять желаемую должность ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Чтобы супруг (супруга) получала высокую зарплату ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),

	new Question("Иметь собственные политические убеждения ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Чтобы круг моих увлечений постоянно расширялся ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),



	new Question("Иметь, прежде всего, моральное удовлетворение от достигнутых успехов в спорте ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Не придумывать вескую причину, чтобы оправдаться ",     
	[
		new Answer("Не имеет никакого значения", 5),
		new Answer("Имеет небольшое значение", 4),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 2),
		new Answer("Очень важно", 1),
	]),
	new Question("Перед началом работы четко ее распланировать ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Чтобы мое образование давало возможность получения дополнительных материальных благ (гонорары, льготы) ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("В семейной жизни опираться лишь на собственные взгляды, даже если они противоречат общественному мнению ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Тратить много времени на чтение литературы, просмотр передач и фильмов о спорте ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Не завидовать удаче других ",     
	[
		new Answer("Не имеет никакого значения", 5),
		new Answer("Имеет небольшое значение", 4),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 2),
		new Answer("Очень важно", 1),
	]),
	new Question("Иметь высокооплачиваемую работу ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Выбрать редкую, уникальную специальность для обучения, чтобы лучше проявить свою индивидуальность ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
	]),
	new Question("Вести себя за столом дома так же, как и на людях ",     
	[
		new Answer("Не имеет никакого значения", 5),
		new Answer("Имеет небольшое значение", 4),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 2),
		new Answer("Очень важно", 1),
	]),
	new Question("Чтобы моя работа не противоречила моим жизненным принципам ",     
	[
		new Answer("Не имеет никакого значения", 1),
		new Answer("Имеет небольшое значение", 2),
		new Answer("Имеет определенное значение", 3),
		new Answer("Важно", 4),
		new Answer("Очень важно", 5),
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
				progressValue.innerHTML = "Развитие себя: "+progressInfill + " из 30";
				coockieScore += Number.parseInt(progressInfill);
				progressInfill = Number.parseInt((progressInfill/18)*100);
				progressBar.setAttribute('style','width:'+progressInfill+'%');
				progressValue.innerHTML = progressInfill;
			}
			if(i == 2){
				ar progressInfill = getCookie("scale_2");
				progressValue.innerHTML = "Духовное удовлетворение: "+progressInfill + " из 30";
				coockieScore += Number.parseInt(progressInfill);
				progressInfill = Number.parseInt((progressInfill/18)*100);
				progressBar.setAttribute('style','width:'+progressInfill+'%');
				progressValue.innerHTML = progressInfill;
			}
			if(i == 3){
				ar progressInfill = getCookie("scale_3");
				progressValue.innerHTML = "Креативность": "+progressInfill + " из 30";
				coockieScore += Number.parseInt(progressInfill);
				progressInfill = Number.parseInt((progressInfill/18)*100);
				progressBar.setAttribute('style','width:'+progressInfill+'%');
				progressValue.innerHTML = progressInfill;
			}
			if(i == 4){
				ar progressInfill = getCookie("scale_4");
				progressValue.innerHTML = "Социальные контакты: "+progressInfill + " из 30";
				coockieScore += Number.parseInt(progressInfill);
				progressInfill = Number.parseInt((progressInfill/18)*100);
				progressBar.setAttribute('style','width:'+progressInfill+'%');
				progressValue.innerHTML = progressInfill;
			}
			if(i == 5){
				ar progressInfill = getCookie("scale_5");
				progressValue.innerHTML = "Собственный престиж: "+progressInfill + " из 30";
				coockieScore += Number.parseInt(progressInfill);
				progressInfill = Number.parseInt((progressInfill/18)*100);
				progressBar.setAttribute('style','width:'+progressInfill+'%');
				progressValue.innerHTML = progressInfill;
			}
			if(i == 6){
				ar progressInfill = getCookie("scale_6");
				progressValue.innerHTML = "Достижения: "+progressInfill + " из 30";
				coockieScore += Number.parseInt(progressInfill);
				progressInfill = Number.parseInt((progressInfill/18)*100);
				progressBar.setAttribute('style','width:'+progressInfill+'%');
				progressValue.innerHTML = progressInfill;
			}
			if(i == 7){
				ar progressInfill = getCookie("scale_7");
				progressValue.innerHTML = "Материальное положение: "+progressInfill + " из 30";
				coockieScore += Number.parseInt(progressInfill);
				progressInfill = Number.parseInt((progressInfill/18)*100);
				progressBar.setAttribute('style','width:'+progressInfill+'%');
				progressValue.innerHTML = progressInfill;
			}
			if(i == 8){
				ar progressInfill = getCookie("scale_8");
				progressValue.innerHTML = "Сохранение индивидуальности: "+progressInfill + " из 30";
				coockieScore += Number.parseInt(progressInfill);
				progressInfill = Number.parseInt((progressInfill/18)*100);
				progressBar.setAttribute('style','width:'+progressInfill+'%');
				progressValue.innerHTML = progressInfill;
			}


			if(i == 9){
				ar progressInfill = getCookie("scale_9");
				progressValue.innerHTML = "Профессиональная жизнь: "+progressInfill + " из 35";
				coockieScore += Number.parseInt(progressInfill);
				progressInfill = Number.parseInt((progressInfill/18)*100);
				progressBar.setAttribute('style','width:'+progressInfill+'%');
				progressValue.innerHTML = progressInfill;
			}
			if(i == 10){
				ar progressInfill = getCookie("scale_10");
				progressValue.innerHTML = "Обучение и образование: "+progressInfill + " из 35";
				coockieScore += Number.parseInt(progressInfill);
				progressInfill = Number.parseInt((progressInfill/18)*100);
				progressBar.setAttribute('style','width:'+progressInfill+'%');
				progressValue.innerHTML = progressInfill;
			}
			if(i == 11){
				ar progressInfill = getCookie("scale_11");
				progressValue.innerHTML = "Семейная жизнь: "+progressInfill + " из 35";
				coockieScore += Number.parseInt(progressInfill);
				progressInfill = Number.parseInt((progressInfill/18)*100);
				progressBar.setAttribute('style','width:'+progressInfill+'%');
				progressValue.innerHTML = progressInfill;
			}
			if(i == 12){
				ar progressInfill = getCookie("scale_12");
				progressValue.innerHTML = "Общественная жизнь: "+progressInfill + " из 35";
				coockieScore += Number.parseInt(progressInfill);
				progressInfill = Number.parseInt((progressInfill/18)*100);
				progressBar.setAttribute('style','width:'+progressInfill+'%');
				progressValue.innerHTML = progressInfill;
			}
			if(i == 13){
				ar progressInfill = getCookie("scale_13");
				progressValue.innerHTML = "Увлечения: "+progressInfill + " из 35";
				coockieScore += Number.parseInt(progressInfill);
				progressInfill = Number.parseInt((progressInfill/18)*100);
				progressBar.setAttribute('style','width:'+progressInfill+'%');
				progressValue.innerHTML = progressInfill;
			}
			if(i ==14){
				ar progressInfill = getCookie("scale_14");
				progressValue.innerHTML = "Физическая активность: "+progressInfill + " из 35";
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

		let percentOf = Number.parseInt((coockieScore/160)*100);
		console.log("TEST4: " + percentOf);
		setCookie("TEST4", percentOf);
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