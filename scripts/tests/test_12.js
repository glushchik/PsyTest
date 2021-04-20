/*
    ТЕСТ НОМЕР 12
    Ориентир
*/

//Я ХОЧУ
setCookie("scale_1", 0); 
setCookie("scale_2", 0); 
setCookie("scale_3", 0); 
setCookie("scale_4", 0); 
setCookie("scale_5", 0);
setCookie("scale_6", 0);
setCookie("scale_7", 0);

//Я МОГУ 
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


function cook(q, v) {
    /*
        Номер вопроса равен индексу в массиве, ссылаясь на объект массива, мы получаем значение следующего массива
        в котором идет ссылка на элемент шкалы, то есть на шкалу 1 или 2.
    */
    let mas1 = [0, 0 ,0 ,0 ,0 , 1 ,1 ,1 ,1 ,1 ,2 ,2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13];
    let mas2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    let buc = mas1[q]; //Получаем ссылку на шкалу
    let sNum; //Переменная шкалы
    let value; //Перменная значения

    sNum = "scale_" + mas2[buc]; //Устанавливаем имя шкалы

    let cValue = Number.parseInt(getCookie(sNum)); //Получаем её по куки
    cValue += v;
    setCookie(sNum, cValue);
};
//Класс, который представляет сам тест
class Quiz {

    constructor(type, questions, results) {
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

    Click(index) {
        //Добавляем очки
        let value = this.questions[this.current].Click(index);
        let indexQue = this.current;
        cook(indexQue, value);
        let correct = -1;

        //Если было добавлено хотя одно очко, то считаем, что ответ верный
        if (value >= 1) {
            correct = index;
        } else {
            //Иначе ищем, какой ответ может быть правильным
            for (let i = 0; i < this.questions[this.current].answers.length; i++) {
                if (this.questions[this.current].answers[i].value >= 1) {
                    correct = i;
                    break;
                }
            }
        }

        this.Next();

        return correct;
    }

    //Переход к следующему вопросу
    Next() {
        this.current++;

        if (this.current >= this.questions.length) {
            this.End();
        }
    }

    //Если вопросы кончились, этот метод проверит, какой результат получил пользователь
    End() {
    }
}

//Класс, представляющий вопрос
class Question {
    constructor(text, answers) {
        this.text = text;
        this.answers = answers;
    }

    Click(index) {
        return this.answers[index].value;
    }
}

//Класс, представляющий ответ
class Answer {
    constructor(text, value) {
        this.text = text;
        this.value = value;
    }
}

//Массив с вопросами
const questions = [
    //1
    new Question("Обслуживать людей",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Заниматься лечением",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Обучать воспитывать",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Защищать права и безопасность",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Управлять людьми",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Управлять машинами",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Ремонтировать оборудование",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Собирать и налаживать технику",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Обрабатывать материалы ,изготавливать различные предметы",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Заниматься строительством",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Редактировать тексты и таблицы",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Производить расчеты и вычисления",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Обрабатывать информацию",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Работать с чертежами, катами и схемами",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Принимать и передавать сигналы и сообщения",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Заниматься художественным оформлением",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Рисовать, фотографировать",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Создавать произведения искусства",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Выступать на сцене",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Шить, вышивать, вязать",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Ухаживать за животными",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Заготавливать продукты",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Работать на открытом воздухе",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Выращивать овощи и фрукты",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Иметь дело с природой",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Работать руками",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Выполнять решения",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Воспроизводить имеющиеся образцы, размножать, копировать",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Получать конкретный практический результат",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Воплощать идеи в жизнь",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Работать головой",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Принимать решения",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Создавать новые образцы",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Анализировать, изучать, исследовать, наблюдать, измерять, испытывать, контролировать",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Планировать, конструировать, проектировать, разрабатывать, моделировать",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),

    //Я МОГУ
    new Question("Знакомиться с новыми людьми",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Быть чутким и доброжелательным",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Выслушивать людей",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Разбираться в людях",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Хорошо говорить и выступать публично",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Искать и устранять неисправности",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Использовать приборы, машины, механизмы",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Разбираться в технических устройствах",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Ловко обращаться с инструментами",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Хорошо ориентироваться в пространстве",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Быть сосредоточенным и усидчивым",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Хорошо считать в уме",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Преобразовывать информацию",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Оперировать знаками и символами",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Искать и исправлять ошибки",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Создавать красивые со вкусом сделанные вещи",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Разбираться в литературе и искусстве",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Петь, играть на музыкальных инструментах",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Сочинять стихи, писать рассказы",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Рисовать",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Разбираться в животных и растениях",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Разводить растения и животных",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Бороться с болезнями, вредителями",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Ориентироваться в природных явлениях",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    
    new Question("Работать на земле",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Быстро выполнять указания",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Точно следовать инструкциям",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Работать по заданному алгоритму",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Выполнять однообразную работу",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Соблюдать правила и нормативы",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Создавать новые инструкции и давать указания",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Принимать нестандартные решения",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Легко придумывать новые способы деятельности",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Брать на себя ответственность",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
    new Question("Самостоятельно организовывать свою работу",     
    [
        new Answer("Вовсе нет", 0),
        new Answer("Пожалуй так", 1),
        new Answer("Верно", 2),
        new Answer("Совершенно Верно", 3),
    ]),
];

//Сам тест
const quiz = new Quiz(2, questions);

Update();

//Обновление теста
function Update() {
    //Проверяем, есть ли ещё вопросы
    if (quiz.current < quiz.questions.length) {
        //Если есть, меняем вопрос в заголовке
        headElem.innerHTML = quiz.questions[quiz.current].text;

        //Удаляем старые варианты ответов
        buttonsElem.innerHTML = "";

        //Создаём кнопки для новых вариантов ответов
        for (let i = 0; i < quiz.questions[quiz.current].answers.length; i++) {
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
    } else {
        //Если это конец, то выводим результат
        buttonsElem.innerHTML = "";
        headElem.innerHTML = "";
        //Разделяем две шкалы на составные
        //Я хочу и я могу

        var curWant = [0,0];
        var curCan = [0,0];
        var curAbb = [0,0,0,0];

        var m1,m2,m3,m4,m5;
        m1 = getCookie("scale_1");m2 = getCookie("scale_2");m3 = getCookie("scale_3");m4 = getCookie("scale_4");m5 = getCookie("scale_5");
        //Кластер профессий 1(8) человек - человек; 2(9) человек - техника; 3(10) человек - знаковая система; 4(11) человек - художественный образ; 5(12) человек - природа.
        var want = [m1,m2,m3,m4,m5];
        m1 = getCookie("scale_8");m2 = getCookie("scale_9");m3 = getCookie("scale_10");m4 = getCookie("scale_11");m5 = getCookie("scale_12");
        var can = [m1,m2,m3,m4,m5];
        //6,13 - исполнительские; 7,14 - творческие.
        m1 = getCookie("scale_6");m2 = getCookie("scale_7");m3 = getCookie("scale_13");m4 = getCookie("scale_14");
        var abbilites = [m1,m2,m3,m4];
        //Перебираем массивы на наибольшее значение
        for(var i = 0; i <= 4 ; i++){
            console.log("Прогон алгоритма want + can №"+i);
            if(want[i]>curWant[0]){
                console.log("want[i] {"+want[i]+"}");
                console.log("curWant[0] {"+curWant[0]+"}");
                curWant[0] = want[i];
                curWant[1] = i;
            }
            if(can[i]>curCan[0]){
                console.log("can[i] {"+can[i]+"}");
                console.log("curCan[0] {"+curCan[0]+"}");
                curCan[0] = can[i];
                curCan[1] =  i;
            }
        }


        if(abbilites[0] == abbilites[1]){
            console.log("abbilites[0] == abbilites[1]");
            console.log("abbilites[0] {"+abbilites[0]+"}");
            console.log("abbilites[1] {"+abbilites[1]+"}");
            curAbb[0] = 505;
            curAbb[1] = 506;
        }else if(abbilites[0]>abbilites[1]){
            console.log("abbilites[0] {"+abbilites[0]+"}");
            console.log("abbilites[1] {"+abbilites[1]+"}");
            console.log(abbilites[0]+" > "+abbilites[1]);
            curAbb[0] = abbilites[0];
            curAbb[1] = 6;
        }else{
            console.log("abbilites[0] {"+abbilites[0]+"}");
            console.log("abbilites[1] {"+abbilites[1]+"}");
            console.log(abbilites[0]+" < "+abbilites[1]);
            curAbb[0] = abbilites[1];
            curAbb[1] = 7;
        }



        if(abbilites[2] == abbilites[3]){
            console.log("abbilites[2] == abbilites[3]");
            console.log("abbilites[2] {"+abbilites[2]+"}");
            console.log("abbilites[3] {"+abbilites[3]+"}");
            curAbb[3] = 505;
            curAbb[4] = 506;
        }else if(abbilites[2]>abbilites[3]){
            console.log("abbilites[2] {"+abbilites[2]+"}");
            console.log("abbilites[3] {"+abbilites[3]+"}");
            console.log(abbilites[2]+" > "+abbilites[3]);
            curAbb[2] = abbilites[2];
            curAbb[3] = 13;
        }else{
            console.log("abbilites[2] {"+abbilites[2]+"}");
            console.log("abbilites[3] {"+abbilites[3]+"}");
            console.log(abbilites[2]+" < "+abbilites[3]);
            curAbb[2] = abbilites[3];
            curAbb[3] = 14;
        }

        var wantStr;
        var canStr;
        var abbWant;
        var abbCan;

        if(curWant[1] == 1){
            wantStr = "Человек-человек";
        }else if(curWant[1] == 2){
            wantStr = "Человек-техника";
        }else if(curWant[1] == 3){
            wantStr = "Человек-знаковая система";
        }else if(curWant[1] == 4){
            wantStr = "Человек-художественный образ";
        }else if(curWant[1] == 5){
            wantStr = "Человек-природа";
        }else{
            wantStr = "Вы желаете быть всеми типами."
        }

        if(curCan[1] == 1){
            canStr = "Человек-человек";
        }else if(curCan[1] == 2){
            canStr = "Человек-техника";
        }else if(curCan[1] == 3){
            canStr = "Человек-знаковая система";
        }else if(curCan[1] == 4){
            canStr = "Человек-художественный образ";
        }else if(curCan[1] == 5){
            canStr = "Человек-природа";
        }else{
            canStr = "У вас есть способности ко всем профессиям"
        }

        if(curAbb[1] == 6){
            abbWant = "Исполнительного";
        }else if(curAbb[1] == 7){
            abbWant = "Творческого";
        }else if(curAbb[1] == 506){
            abbWant = "В равной степени творческого и исполнительного";
        }else if(curAbb[3] == 13){
            abbCan = "Исполнительного";
        }else if(curAbb[3] ==  14){
            abbCan =  "Творческого";
        }else if(curAbb[3] == 506){
            abbCan = "В равной степени творческого и исполнительного";
        }
        console.log(curAbb);
        console.log(curCan);
        console.log(want,can,abbilites);
        headElem.innerHTML ="<div class='row'><div class='col-md-6'><div class='mainId2'><div class='mainShadow2'> <b style='font-size: 15pt;'> Желания: </b><p style='font-size: 11pt;'> Вы изъявляете желание к категории:<br> <b><i>"+wantStr+"</i></b><br> Вы желаете обладать способностями<br> <b><i>"+abbWant+"</i></b> характера.</p></div></div></div><div class='col-md-6'><div class='mainId2'><div class='mainShadow2'> <b style='font-size: 15pt;'> Возможности: </b><p style='font-size: 11pt;'> Вы предрасположенны к категории:<br> <b><i>"+canStr+"</i></b><br> Вы желаете обладать способностями<br> <b><i>"+abbCan+"</i></b> характера.</p></div></div></div></div>";
        pagesElem.innerHTML = "Конец теста.";
    }
}

function Init() {
    //Находим все кнопки
    let btns = document.getElementsByClassName("button");

    for (let i = 0; i < btns.length; i++) {
        //Прикрепляем событие для каждой отдельной кнопки
        //При нажатии на кнопку будет вызываться функция Click()
        btns[i].addEventListener("click", function(e) {
            Click(e.target.getAttribute("index"));
        });
    }
}

function Click(index) {
    //Получаем номер правильного ответа
    let correct = quiz.Click(index);

    //Находим все кнопки
    let btns = document.getElementsByClassName("button");

    //Делаем кнопки серыми
    for (let i = 0; i < btns.length; i++) {
        btns[i].className = "button button_passive";
    }

    //Если это тест с правильными ответами, то мы подсвечиваем правильный ответ зелёным, а неправильный - красным
    if (quiz.type == 1) {
        if (correct >= 0) {
            btns[correct].className = "button button_correct";
        }

        if (index != correct) {
            btns[index].className = "button button_wrong";
        }
    } else {
        //Иначе просто подсвечиваем зелёным ответ пользователя
        btns[index].className = "button button_correct";
    }

    //Ждём секунду и обновляем тест
    setTimeout(Update, 1000);
}