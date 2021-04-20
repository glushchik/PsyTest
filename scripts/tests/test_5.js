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
//Массив с вопросами
const questions = 
[

    new Question("<p>Какой из предложенных вариантов подходит для того, чтобы занять следующее место в последовательности?</p><br><img class='inTestImg' src='img/img1.PNG'>",
        [
            new Answer("A", 0),
            new Answer("B", 0),
            new Answer("C", 1),
            new Answer("D", 0),
            new Answer("E", 0),
        ]),
    new Question("<p>Какой из предложенных вариантов подходит для того, чтобы занять следующее место в последовательности?</p><br><img class='inTestImg' src='img/img2.PNG'>",
        [
            new Answer("A", 0),
            new Answer("B", 1),
            new Answer("C", 0),
            new Answer("D", 0),
            new Answer("E", 0),
        ]),
    new Question("<p>Какой из предложенных вариантов подходит для того, чтобы занять следующее место в последовательности?</p><br><img class='inTestImg' src='img/img3.PNG'>",
        [
            new Answer("A", 1),
            new Answer("B", 0),
            new Answer("C", 0),
            new Answer("D", 0),
            new Answer("E", 0),
        ]),
    new Question("<p>Какой из предложенных вариантов подходит для того, чтобы занять следующее место в последовательности?</p><br><img class='inTestImg' src='img/img4.PNG'>",
        [
            new Answer("A", 0),
            new Answer("B", 0),
            new Answer("C", 0),
            new Answer("D", 0),
            new Answer("E", 1),
        ]),
    new Question("<p>Какой из предложенных вариантов подходит для того, чтобы занять следующее место в последовательности?</p><br><img class='inTestImg' src='img/img5.PNG'>",
        [
            new Answer("A", 0),
            new Answer("B", 0),
            new Answer("C", 0),
            new Answer("D", 1),
            new Answer("E", 0),
        ]),
    new Question("<p>Какой из предложенных вариантов подходит для того, чтобы занять следующее место в последовательности?</p><br><img class='inTestImg' src='img/img6.PNG'>",
        [
            new Answer("A", 0),
            new Answer("B", 0),
            new Answer("C", 0),
            new Answer("D", 0),
            new Answer("E", 1),
        ]),
    new Question("<p>Какой из предложенных вариантов подходит для того, чтобы занять следующее место в последовательности?</p><br><img class='inTestImg' src='img/img7.PNG'>",
        [
            new Answer("A", 1),
            new Answer("B", 0),
            new Answer("C", 0),
            new Answer("D", 0),
            new Answer("E", 0),
        ]),
    new Question("<p>Какой из предложенных вариантов подходит для того, чтобы занять следующее место в последовательности?</p><br><img class='inTestImg' src='img/img8.PNG'>",
        [
            new Answer("A", 0),
            new Answer("B", 0),
            new Answer("C", 1),
            new Answer("D", 0),
            new Answer("E", 0),
        ]),
    new Question("<p>Какой из предложенных вариантов подходит для того, чтобы занять следующее место в последовательности?</p><br><img class='inTestImg' src='img/img9.PNG'>",
        [
            new Answer("A", 0),
            new Answer("B", 0),
            new Answer("C", 1),
            new Answer("D", 0),
            new Answer("E", 0),
        ]),
    new Question("<p>Какой из предложенных вариантов подходит для того, чтобы занять следующее место в последовательности?</p><br><img class='inTestImg' src='img/img10.PNG'>",
        [
            new Answer("A", 0),
            new Answer("B", 1),
            new Answer("C", 0),
            new Answer("D", 0),
            new Answer("E", 0),
        ]),
    new Question("<p>Какой из предложенных вариантов подходит для того, чтобы занять следующее место в последовательности?</p><br><img class='inTestImg' src='img/img11.PNG'>",
        [
            new Answer("A", 1),
            new Answer("B", 0),
            new Answer("C", 0),
            new Answer("D", 0),
            new Answer("E", 0),
        ]),
    new Question("<p>Какой из предложенных вариантов подходит для того, чтобы занять следующее место в последовательности?</p><br><img class='inTestImg' src='img/img12.PNG'>",
        [
            new Answer("A", 0),
            new Answer("B", 1),
            new Answer("C", 0),
            new Answer("D", 0),
            new Answer("E", 0),
        ]),
    new Question("<p>Какой из предложенных вариантов подходит для того, чтобы занять следующее место в последовательности?</p><br><img class='inTestImg' src='img/img13.PNG'>",
        [
            new Answer("A", 0),
            new Answer("B", 0),
            new Answer("C", 1),
            new Answer("D", 0),
            new Answer("E", 0),
        ]),
    new Question("<p>Какой из предложенных вариантов подходит для того, чтобы занять следующее место в последовательности?</p><br><img class='inTestImg' src='img/img14.PNG'>",
        [
            new Answer("A", 0),
            new Answer("B", 0),
            new Answer("C", 1),
            new Answer("D", 0),
            new Answer("E", 0),
        ]),
    new Question("<p>Какой из предложенных вариантов подходит для того, чтобы занять следующее место в последовательности?</p><br><img class='inTestImg' src='img/img15.PNG'>",
        [
            new Answer("A", 0),
            new Answer("B", 0),
            new Answer("C", 0),
            new Answer("D", 1),
            new Answer("E", 0),
        ]),
    new Question("<p>Какой из предложенных вариантов подходит для того, чтобы занять следующее место в последовательности?</p><br><img class='inTestImg' src='img/img16.PNG'>",
        [
            new Answer("A", 0),
            new Answer("B", 0),
            new Answer("C", 0),
            new Answer("D", 0),
            new Answer("E", 1),
        ]),
    new Question("<p>Какой из предложенных вариантов подходит для того, чтобы занять следующее место в последовательности?</p><br><img class='inTestImg' src='img/img17.PNG'>",
        [
            new Answer("A", 0),
            new Answer("B", 0),
            new Answer("C", 1),
            new Answer("D", 0),
            new Answer("E", 0),
        ]),
    new Question("<p>Какой из предложенных вариантов подходит для того, чтобы занять следующее место в последовательности?</p><br><img class='inTestImg' src='img/img18.PNG'>",
        [
            new Answer("A", 0),
            new Answer("B", 1),
            new Answer("C", 0),
            new Answer("D", 0),
            new Answer("E", 0),
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
        headElem.innerHTML = "";
        buttonsElem.innerHTML = "";
        if(quiz.score < 9){
            headElem.innerHTML = "Низкий уровень интеллектуальных способностей»";
        }else if(quiz.score > 9 &&  quiz.score < 16){
            headElem.innerHTML = "Средний уровень интеллектуальных способностей!<br>Вы можете гордится собой,уровень ваших интеллектуальных способностей позволяет вам хоть сейчас приступить к освоению широкого круга профессий. Кроме того, уровень вашего интеллектуального развития достаточен для того, чтобы вы могли рассчитывать на довольно высокую успешность выполнения деятельности в любой профессии творческого класса.";
        }else if(quiz.score > 16){
            headElem.innerHTML = "А если ваша оценка превосходит 30 баллов, то вы можете гордиться своими результатами. Мало кто из людей достигает такого высокого уровня развития интеллектуальных способностей.";
        }
        setCookie("TEST5", quiz.score);
        setCookie("TEST5_PER", 18)
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