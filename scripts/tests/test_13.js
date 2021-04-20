/*
	ТЕСТ НОМЕР 1 
	Методика диагностики учебной мотивации студентов
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
		if(indexQue == 1){	
			if(value == 1){//a

				let coockieValue = Number.parseInt(getCookie("scale_1"));
				coockieValue += 2;
				setCookie("scale_1", coockieValue);
			}else if(value == 2){//b

				let coockieValue = Number.parseInt(getCookie("scale_2"));
				coockieValue += 1;
				setCookie("scale_2", coockieValue);
			}else if(value == 3){//c

				let coockieValue = Number.parseInt(getCookie("scale_4"));
				coockieValue += 1;
				setCookie("scale_4", coockieValue);
			}else if(value == 4){//d

				let coockieValue = Number.parseInt(getCookie("scale_3"));
				coockieValue += 1;
				setCookie("scale_3", coockieValue);
			}
		}
		if(indexQue == 2){	
			if(value == 1){//a

				let coockieValue = Number.parseInt(getCookie("scale_3"));
				coockieValue += 2;
				setCookie("scale_3", coockieValue);
			}else if(value == 2){//b

				let coockieValue = Number.parseInt(getCookie("scale_2"));
				coockieValue += 1;
				setCookie("scale_2", coockieValue);
			}else if(value == 3){//c

				let coockieValue = Number.parseInt(getCookie("scale_1"));
				coockieValue += 1;
				setCookie("scale_1", coockieValue);
			}else if(value == 4){//d

				let coockieValue = Number.parseInt(getCookie("scale_4"));
				coockieValue += 1;
				setCookie("scale_4", coockieValue);
			}
		}
		if(indexQue == 3){	
			if(value == 1){//a

				let coockieValue = Number.parseInt(getCookie("scale_3"));
				coockieValue += 2;
				setCookie("scale_3", coockieValue);
			}else if(value == 2){//b

				let coockieValue = Number.parseInt(getCookie("scale_2"));
				coockieValue += 1;
				setCookie("scale_2", coockieValue);
			}else if(value == 3){//c

				let coockieValue = Number.parseInt(getCookie("scale_1"));
				coockieValue += 1;
				setCookie("scale_1", coockieValue);
			}else if(value == 4){//d

				let coockieValue = Number.parseInt(getCookie("scale_4"));
				coockieValue += 1;
				setCookie("scale_4", coockieValue);
			}
		}
		if(indexQue == 4){	
			if(value == 1){//a

				let coockieValue = Number.parseInt(getCookie("scale_2"));
				coockieValue += 2;
				setCookie("scale_2", coockieValue);
			}else if(value == 2){//b

				let coockieValue = Number.parseInt(getCookie("scale_3"));
				coockieValue += 1;
				setCookie("scale_3", coockieValue);
			}else if(value == 3){//c

				let coockieValue = Number.parseInt(getCookie("scale_1"));
				coockieValue += 1;
				setCookie("scale_1", coockieValue);
			}else if(value == 4){//d

				let coockieValue = Number.parseInt(getCookie("scale_4"));
				coockieValue += 1;
				setCookie("scale_4", coockieValue);
			}
		}
		if(indexQue == 5){	
			if(value == 1){//a

				let coockieValue = Number.parseInt(getCookie("scale_2"));
				coockieValue += 2;
				setCookie("scale_2", coockieValue);
			}else if(value == 2){//b

				let coockieValue = Number.parseInt(getCookie("scale_3"));
				coockieValue += 1;
				setCookie("scale_3", coockieValue);
			}else if(value == 3){//c

				let coockieValue = Number.parseInt(getCookie("scale_1"));
				coockieValue += 1;
				setCookie("scale_1", coockieValue);
			}else if(value == 4){//d

				let coockieValue = Number.parseInt(getCookie("scale_4"));
				coockieValue += 1;
				setCookie("scale_4", coockieValue);
			}
		}
		if(indexQue == 6){	
			if(value == 1){//a

				let coockieValue = Number.parseInt(getCookie("scale_2"));
				coockieValue += 1;
				setCookie("scale_2", coockieValue);
			}else if(value == 2){//b

				let coockieValue = Number.parseInt(getCookie("scale_4"));
				coockieValue += 2;
				setCookie("scale_4", coockieValue);
			}else if(value == 3){//c

				let coockieValue = Number.parseInt(getCookie("scale_1"));
				coockieValue += 1;
				setCookie("scale_1", coockieValue);
			}else if(value == 4){//d

				let coockieValue = Number.parseInt(getCookie("scale_3"));
				coockieValue += 1;
				setCookie("scale_3", coockieValue);
			}
		}
		if(indexQue == 7){	
			if(value == 1){//a

				let coockieValue = Number.parseInt(getCookie("scale_1"));
				coockieValue += 1;
				setCookie("scale_1", coockieValue);
			}else if(value == 2){//b

				let coockieValue = Number.parseInt(getCookie("scale_2"));
				coockieValue += 2;
				setCookie("scale_2", coockieValue);
			}else if(value == 3){//c

				let coockieValue = Number.parseInt(getCookie("scale_3"));
				coockieValue += 1;
				setCookie("scale_3", coockieValue);
			}else if(value == 4){//d

				let coockieValue = Number.parseInt(getCookie("scale_4"));
				coockieValue += 1;
				setCookie("scale_4", coockieValue);
			}
		}
		if(indexQue == 8){	
			if(value == 1){//a

				let coockieValue = Number.parseInt(getCookie("scale_2"));
				coockieValue += 1;
				setCookie("scale_2", coockieValue);
			}else if(value == 2){//b

				let coockieValue = Number.parseInt(getCookie("scale_3"));
				coockieValue += 2;
				setCookie("scale_3", coockieValue);
			}else if(value == 3){//c

				let coockieValue = Number.parseInt(getCookie("scale_1"));
				coockieValue += 1;
				setCookie("scale_1", coockieValue);
			}else if(value == 4){//d

				let coockieValue = Number.parseInt(getCookie("scale_4"));
				coockieValue += 1;
				setCookie("scale_4", coockieValue);
			}
		}
		if(indexQue == 9){	
			if(value == 1){//a

				let coockieValue = Number.parseInt(getCookie("scale_1"));
				coockieValue += 1;
				setCookie("scale_1", coockieValue);
			}else if(value == 2){//b

				let coockieValue = Number.parseInt(getCookie("scale_4"));
				coockieValue += 2;
				setCookie("scale_4", coockieValue);
			}else if(value == 3){//c

				let coockieValue = Number.parseInt(getCookie("scale_2"));
				coockieValue += 1;
				setCookie("scale_2", coockieValue);
			}else if(value == 4){//d

				let coockieValue = Number.parseInt(getCookie("scale_3"));
				coockieValue += 1;
				setCookie("scale_3", coockieValue);
			}
		}
		if(indexQue == 10){	
			if(value == 1){//a

				let coockieValue = Number.parseInt(getCookie("scale_3"));
				coockieValue += 1;
				setCookie("scale_3", coockieValue);
			}else if(value == 2){//b

				let coockieValue = Number.parseInt(getCookie("scale_2"));
				coockieValue += 1;
				setCookie("scale_2", coockieValue);
			}else if(value == 3){//c

				let coockieValue = Number.parseInt(getCookie("scale_1"));
				coockieValue += 1;
				setCookie("scale_1", coockieValue);
			}else if(value == 4){//d

				let coockieValue = Number.parseInt(getCookie("scale_4"));
				coockieValue += 1;
				setCookie("scale_4", coockieValue);
			}
		}
		if(indexQue == 11){	
			if(value == 1){//a

				let coockieValue = Number.parseInt(getCookie("scale_4"));
				coockieValue += 1;
				setCookie("scale_4", coockieValue);
			}else if(value == 2){//b

				let coockieValue = Number.parseInt(getCookie("scale_2"));
				coockieValue += 1;
				setCookie("scale_2", coockieValue);
			}else if(value == 3){//c

				let coockieValue = Number.parseInt(getCookie("scale_1"));
				coockieValue += 2;
				setCookie("scale_1", coockieValue);
			}else if(value == 4){//d

				let coockieValue = Number.parseInt(getCookie("scale_3"));
				coockieValue += 1;
				setCookie("scale_3", coockieValue);
			}
		}
		if(indexQue == 12){	
			if(value == 1){//a

				let coockieValue = Number.parseInt(getCookie("scale_3"));
				coockieValue += 1;
				setCookie("scale_3", coockieValue);
			}else if(value == 2){//b

				let coockieValue = Number.parseInt(getCookie("scale_1"));
				coockieValue += 1;
				setCookie("scale_1", coockieValue);
			}else if(value == 3){//c

				let coockieValue = Number.parseInt(getCookie("scale_2"));
				coockieValue += 2;
				setCookie("scale_2", coockieValue);
			}else if(value == 4){//d

				let coockieValue = Number.parseInt(getCookie("scale_4"));
				coockieValue += 1;
				setCookie("scale_4", coockieValue);
			}
		}
		if(indexQue == 13){	
			if(value == 1){//a

				let coockieValue = Number.parseInt(getCookie("scale_3"));
				coockieValue += 1;
				setCookie("scale_3", coockieValue);
			}else if(value == 2){//b

				let coockieValue = Number.parseInt(getCookie("scale_2"));
				coockieValue += 1;
				setCookie("scale_2", coockieValue);
			}else if(value == 3){//c

				let coockieValue = Number.parseInt(getCookie("scale_1"));
				coockieValue += 2;
				setCookie("scale_1", coockieValue);
			}else if(value == 4){//d

				let coockieValue = Number.parseInt(getCookie("scale_4"));
				coockieValue += 1;
				setCookie("scale_4", coockieValue);
			}
		}
		if(indexQue == 14){	
			if(value == 1){//a

				let coockieValue = Number.parseInt(getCookie("scale_2"));
				coockieValue += 1;
				setCookie("scale_2", coockieValue);
			}else if(value == 2){//b

				let coockieValue = Number.parseInt(getCookie("scale_4"));
				coockieValue += 1;
				setCookie("scale_4", coockieValue);
			}else if(value == 3){//c

				let coockieValue = Number.parseInt(getCookie("scale_3"));
				coockieValue += 2;
				setCookie("scale_3", coockieValue);
			}else if(value == 4){//d

				let coockieValue = Number.parseInt(getCookie("scale_1"));
				coockieValue += 1;
				setCookie("scale_1", coockieValue);
			}
		}
		if(indexQue == 15){	
			if(value == 1){//a

				let coockieValue = Number.parseInt(getCookie("scale_2"));
				coockieValue += 1;
				setCookie("scale_2", coockieValue);
			}else if(value == 2){//b

				let coockieValue = Number.parseInt(getCookie("scale_1"));
				coockieValue += 1;
				setCookie("scale_1", coockieValue);
			}else if(value == 3){//c

				let coockieValue = Number.parseInt(getCookie("scale_4"));
				coockieValue += 2;
				setCookie("scale_4", coockieValue);
			}else if(value == 4){//d

				let coockieValue = Number.parseInt(getCookie("scale_3"));
				coockieValue += 1;
				setCookie("scale_3", coockieValue);
			}
		}
		if(indexQue == 16){	
			if(value == 1){//a

				let coockieValue = Number.parseInt(getCookie("scale_2"));
				coockieValue += 1;
				setCookie("scale_2", coockieValue);
			}else if(value == 2){//b

				let coockieValue = Number.parseInt(getCookie("scale_1"));
				coockieValue += 1;
				setCookie("scale_1", coockieValue);
			}else if(value == 3){//c

				let coockieValue = Number.parseInt(getCookie("scale_4"));
				coockieValue += 1;
				setCookie("scale_4", coockieValue);
			}else if(value == 4){//d

				let coockieValue = Number.parseInt(getCookie("scale_3"));
				coockieValue += 2;
				setCookie("scale_3", coockieValue);
			}
		}
		if(indexQue == 17){	
			if(value == 1){//a

				let coockieValue = Number.parseInt(getCookie("scale_2"));
				coockieValue += 1;
				setCookie("scale_2", coockieValue);
			}else if(value == 2){//b

				let coockieValue = Number.parseInt(getCookie("scale_4"));
				coockieValue += 1;
				setCookie("scale_4", coockieValue);
			}else if(value == 3){//c

				let coockieValue = Number.parseInt(getCookie("scale_3"));
				coockieValue += 1;
				setCookie("scale_3", coockieValue);
			}else if(value == 4){//d

				let coockieValue = Number.parseInt(getCookie("scale_1"));
				coockieValue += 2;
				setCookie("scale_1", coockieValue);
			}
		}

		if(indexQue == 18){	
			if(value == 1){//a

				let coockieValue = Number.parseInt(getCookie("scale_2"));
				coockieValue += 1;
				setCookie("scale_2", coockieValue);
			}else if(value == 2){//b

				let coockieValue = Number.parseInt(getCookie("scale_4"));
				coockieValue += 1;
				setCookie("scale_4", coockieValue);
			}else if(value == 3){//c

				let coockieValue = Number.parseInt(getCookie("scale_1"));
				coockieValue += 1;
				setCookie("scale_1", coockieValue);
			}else if(value == 4){//d

				let coockieValue = Number.parseInt(getCookie("scale_3"));
				coockieValue += 4;
				setCookie("scale_3", coockieValue);
			}
		}
		if(indexQue == 19){	
			if(value == 1){//a

				let coockieValue = Number.parseInt(getCookie("scale_3"));
				coockieValue += 1;
				setCookie("scale_3", coockieValue);
			}else if(value == 2){//b

				let coockieValue = Number.parseInt(getCookie("scale_2"));
				coockieValue += 1;
				setCookie("scale_2", coockieValue);
			}else if(value == 3){//c

				let coockieValue = Number.parseInt(getCookie("scale_1"));
				coockieValue += 1;
				setCookie("scale_1", coockieValue);
			}else if(value == 4){//d

				let coockieValue = Number.parseInt(getCookie("scale_4"));
				coockieValue += 4;
				setCookie("scale_4", coockieValue);
			}
		}
		if(indexQue == 20){	
			if(value == 1){//a

				let coockieValue = Number.parseInt(getCookie("scale_1"));
				coockieValue += 1;
				setCookie("scale_1", coockieValue);
			}else if(value == 2){//b

				let coockieValue = Number.parseInt(getCookie("scale_3"));
				coockieValue += 1;
				setCookie("scale_3", coockieValue);
			}else if(value == 3){//c

				let coockieValue = Number.parseInt(getCookie("scale_2"));
				coockieValue += 1;
				setCookie("scale_2", coockieValue);
			}else if(value == 4){//d

				let coockieValue = Number.parseInt(getCookie("scale_4"));
				coockieValue += 2;
				setCookie("scale_4", coockieValue);
			}
		}

		this.Next();
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
	new Question("Меня не беспокоит мое профессиональное будущее.",     
	[
		new Answer("Согласен: еще не пришло время решать, где мне дальше учиться или работать.", 1),
		new Answer("Согласен, я уверен, что мои родители помогут мне в моем профессиональном будущем.", 2),
		new Answer("Согласен, так как я уже давно все решил по поводу своего профессионального будущего, и нет смысла беспокоиться.", 3),
		new Answer("He согласен, ведь если о будущем не беспокоиться сейчас, то потом будет слишком поздно.", 4),
	]),

	new Question("Мне трудно принять решение, куда пойти получать дальнейшее образование.",
	[
		new Answer("Согласен, так как меня интересует сразу несколько специальностей, которые хотелось бы получить.", 1),
		new Answer("Согласен, поэтому я лучше прислушаюсь к мнению авторитетного человека (родителя, хорошего знакомого, друга).", 2),
		new Answer("Не согласен, я уже принял решение о том, где я буду учиться или работать в дальнейшем.", 3),
		new Answer("He согласен, поскольку еще пока не задумывался над этой проблемой.", 4),
	]),

	new Question("Я регулярно изучаю спрос на представителей той специальности, которую я планирую получить.",
	[
		new Answer("Согласен, ведь от спроса на рынке труда зависит, какую специальность я выберу.", 1),
		new Answer("Не согласен, поскольку родители знают лучше, какую специальность мне предложить.", 2),
		new Answer("Не согласен, так как время анализировать спрос на профессии еще не пришло.", 3),
		new Answer("He согласен, я уже решил, что все равно получу ту специальность, которую я хочу.", 4),
	]),

	new Question("Я до сих пор не обсуждал с родителями свои будущие профессиональные планы.",
	[
		new Answer("Согласен, так как моими родителями уже давно решено, кем я буду, и со мной не советовались по данному вопросу.", 1),
		new Answer("Не согласен, мои родители как раз постоянно со мной обсуждают мои профессиональные предпочтения.", 2),
		new Answer("Согласен, у нас в семье не принято обсуждать мои профессиональные планы.", 3),
		new Answer("He согласен, мы с родителями давно все обсудили, и я принял решение по поводу своей будущей профессии.", 4),
	]),

	new Question("Мои родители выбрали мне дальнейшую специальность.",
	[
		new Answer("Согласен, и надо признать, что они вообще лучше меня разбираются в этом вопросе.", 1),
		new Answer("Не согласен, но мы регулярно обсуждаем вопрос моей будущей специальности.", 2),
		new Answer("Не согласен, поскольку родители не вмешиваются в мои проблемы с выбором профессии", 3),
		new Answer("He согласен, так как выбор специальности был скорее моим самостоятельным решением, чем их.", 4),
	]),

	new Question("Мне вполне ясны мои будущие профессиональные планы.",
	[
		new Answer("Согласен, так как выстроить их мне помогли родители (знакомые), которые являются специалистами в этой профессиональной области.", 1),
		new Answer("Согласен, поскольку я построил их самостоятельно, основываясь на собственном жизненном опыте.", 2),
		new Answer("Не согласен, так как у меня пока отсутствуют профессиональные планы.", 3),
		new Answer("He согласен, но как раз сейчас я пытаюсь выстроить эти профессиональные планы", 4),
	]),

	new Question("На мои профессиональные цели сильно влияет мнение моих родителей.",
	[
		new Answer("Не согласен, у моих родителей никогда не возникало желания ставить мне профессиональные цели.", 1),
		new Answer("Согласен, поскольку мои родители с детства говорили мне, кем я должен стать.", 2),
		new Answer("Согласен, цели еще сформулированы слабо, но окончательное решение будет все-таки принято мной, а не родителями.", 3),
		new Answer("Согласен, так как родители, конечно, приняли участие в обсуждении этого вопроса, но все-таки решение уже принято мной самостоятельно.", 4),
	]),

	new Question("Думаю, мне еще слишком рано задумываться над вопросами построения своей карьеры.",
	[
		new Answer("Согласен, так как моя карьера все равно будет зависеть отрешения моей семьи.", 1),
		new Answer("Согласен, мне и раньше в жизни не приходилось сталкиваться с вопросами построения карьеры.", 2),
		new Answer("Не согласен, уже настал тот момент, когда нужно выбирать путь своей дальнейшей карьеры.", 3),
		new Answer("He согласен, я уже давно и точно решил, каким образом я буду выстраивать свою карьеру.", 4),
	]),

	new Question("Уже точно решено, какую специальность я хочу получить после окончания школы.",
	[
		new Answer("Не согласен, так как я еще не думал над своей конкретной специальностью.", 1),
		new Answer("Согласен, и я могу точно назвать учебное заведение и специальность, которую я получу.", 2),
		new Answer("Согласен, так как мои родители уже сообщили мне, на кого и где я буду дальше учиться,", 3),
		new Answer("He согласен, мне трудно понять, какая специальность подходит именно мне.", 4),
	]),

	new Question("Друзья советуют мне, какое образование лучше получить.",
	[
		new Answer("Согласен, мы с ними часто обсуждаем этот вопрос, но я пытаюсь строить свои профессиональные планы самостоятельно.", 1),
		new Answer("Согласен, и я собираюсь вместе с другом получить одинаковое образование, прислушавшись к его мнению.", 2),
		new Answer("Не согласен, так как обдумывать свою будущую карьеру нам с друзьями некогда, у нас есть много более интересных дел.", 3),
		new Answer("He согласен, я уже принял решение относительно своего будущего без помощи друзей.", 4),
	]),

	new Question("Для меня не принципиально, где именно учиться в дальнейшем.",
	[
		new Answer("Согласен, так как для меня главное — получить специальность, о которой давно мечтаешь, а не конкретное место учебы.", 1),
		new Answer("Согласен, поскольку уверен, что родители все равно «устроят» меня на хорошую работу после учебы.", 2),
		new Answer("Согласен, поскольку профессиональная учеба — не главное в жизни.", 3),
		new Answer("He согласен, так как от выбора учебного заведения зависит качество моего образования.", 4),
	]),

	new Question("Я боюсь без совета моих родителей принимать ответственные решения по поводу моей дальнейшей профессиональной деятельности.",
	[
		new Answer("Согласен, я делаю попытки сориентироваться в профессиональной жизни, но пока затрудняюсь выбрать что-то одно.", 1),
		new Answer("Не согласен, так как мои родители все равно не хотят и не могут мне ничего посоветовать.", 2),
		new Answer("Согласен, поскольку мои родители с детства помогают мне, контролируя многие события в моей жизни, в том числе и в плане выбора профессии.", 3),
		new Answer("He согласен, свои решения по этому вопросу я уже принял абсолютно самостоятельно.", 4),
	]),

	new Question("Я не часто думаю о своем профессиональном будущем.",
	[
		new Answer("Не согласен, над этой проблемой я думаю довольно часто.", 1),
		new Answer("Согласен, так как я знаю, мои родители сделают так, чтобы у меня в жизни все устроилось отлично.", 2),
		new Answer("Согласен, думаю мне еще рано над этим размышлять.", 3),
		new Answer("Согласен, так как я все уже решил для себя и сейчас концентрирую свое внимание на других проблемах.", 4),
	]),

	new Question("У меня на примете несколько учебных заведений, куда я мог бы пойти учиться.",
	[
		new Answer("Не согласен, так как мои родители уже определили меня в конкретное учебное заведение, где я дальше и буду учиться.", 1),
		new Answer("Не согласен, я сам хочу учиться только в одном, вполне определенном учебном заведении.", 2),
		new Answer("Согласен, я как раз выбираю одно из профессиональных учебных заведений.", 3),
		new Answer("He согласен, иногда мне кажется, что я сам не знаю, чего я хочу от будущего.", 4),
	]),

	new Question("Никакие жизненные проблемы не смогут мне помешать достигнуть поставленных профессиональных целей.",
	[
		new Answer("Согласен, поскольку знаю, что мои родители сделают все, чтобы эти цели осуществились.", 1),
		new Answer("Не согласен, у меня пока еще нет профессиональных целей.", 2),
		new Answer("Согласен, так как я хорошо осознаю свои профессиональные цели и стремлюсь к ним.", 3),
		new Answer("He согласен, я еще не до конца понимаю, в чем состоят эти цели.", 4),
	]),

	new Question("У нас дома часто разгораются бурные дискуссии по поводу моей будущей карьеры.",
	[
		new Answer("Не согласен, поскольку мои родители по этому вопросу все уже решили и с ними уже бесполезно спорить.", 1),
		new Answer("Не согласен, так как мои родители не особо интересуются вопросом моей карьеры.", 2),
		new Answer("Не согласен, ведь по поводу карьеры я все уже решил сам и спорить со мной все равно бесполезно.", 3),
		new Answer("Согласен, я советуюсь с родителями, хотя иногда наши взгляды относительно моего будущего могут расходиться.", 4),
	]),

	new Question("Меня мало интересует информация о том, как выстраивать карьеру в различных профессиональных областях.",
	[
		new Answer("Согласен, так как мои родители уже выбрали мне будущую сферу деятельности и нет надобности собирать какую-либо дополнительную информацию.", 1),
		new Answer("Согласен, потому что я уже принял решение о том, кем я буду и где буду учиться.", 2),
		new Answer("Не согласен, я как раз сейчас активно анализирую возможности карьерного роста в различных областях деятельности.", 3),
		new Answer("Согласен, меня вообще мало интересует информация о том, где и как можно выстраивать карьеру.", 4),
	]),

	new Question("Я держу на примете несколько профессиональных целей.",
	[
		new Answer("Согласен, но они были определены заранее моими родителями.", 1),
		new Answer("Не согласен, у меня всего одна профессиональная цель.", 2),
		new Answer("Не согласен, я о них пока еще не задумывался.", 3),
		new Answer("Согласен, таких целей пока несколько, и я не решил, какая из них для меня основная.", 4),
	]),

	new Question("Я очень хорошо представляю свой дальнейший карьерный рост.",
	[
		new Answer("Не согласен, пока мое профессиональное будущее — это множество альтернативных вариантов выбора.", 1),
		new Answer("Не согласен, но я уверен, что мои родители устроят меня на хорошую работу, где карьера мне будет обеспечена.", 2),
		new Answer("Не согласен, так как мне не хочется вникать, какая карьера подходит именно мне, у меня есть и более важные проблемы.", 3),
		new Answer("Согласен, и я уже могу назвать основные шаги моей профsессиональной жизни.", 4),
	]),

	new Question("Родители предоставили мне возможность сделать свой профессиональный выбор самостоятельно.",
	[
		new Answer("Не согласен, потому что мои родители вообще не участвуют в моем профессиональном выборе.", 1),
		new Answer("Согласен, но мы все равно еще обсуждаем мой профессиональный выбор.", 2),
		new Answer("Не согласен, так как родители считают, что при самостоятельном выборе я могу ошибиться.", 3),
		new Answer("Согласен, и я уже сделал свой профессиональный выбор.", 4),
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
		var coockieScore = 0;
		headElem.innerHTML = "";
		headElem.innerHTML = "Результаты теста:";
		buttonsElem.innerHTML = "";
		for(let i = 1; i <= 4; i++){
			var wrap =  document.createElement("div");
			wrap.setAttribute('class','progressWrap');
			var progressTitle =  document.createElement("h3");
			progressTitle.setAttribute('class','progress-title')
			if(i == 1){
				var progressInfill = getCookie("scale_1");
				progressTitle.innerHTML = "Неопределенная идентичность: "+progressInfill;		
			}
			if(i == 2){
				var progressInfill = getCookie("scale_2");
				progressTitle.innerHTML = "Навязанная идентичность: "+progressInfill;
			}
			if(i == 3){
				var progressInfill = getCookie("scale_3");
				progressTitle.innerHTML = "Мораторий(Кризис выбора): "+progressInfill;
			}
			if(i == 4){
				var progressInfill = getCookie("scale_4");
				progressTitle.innerHTML = "Сформированная идентичность: "+progressInfill;
			}	

            wrap.appendChild(progressTitle);
            headElem.appendChild(wrap);
		}

		let percentOf = Number.parseInt((coockieScore/170)*100);
		setCookie("TEST13", percentOf);
		setCookie("TEST13_PER",170);
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
