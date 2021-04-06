/*
	ТЕСТ НОМЕР 3
	Диагностика «эмоционального интеллекта» (Н. Холл)
*/
setCookie("scale_1", 0); //Шкала 1 
setCookie("scale_2", 0); //Шкала 2

const headElem = document.getElementById("head");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");


function cook(q, v) {
    /*
    	Номер вопроса равен индексу в массиве, ссылаясь на объект массива, мы получаем значение следующего массива
    	в котором идет ссылка на элемент шкалы, то есть на шкалу 1 или 2.
    */
    let mas1 = [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1];
    let mas2 = [1, 2];
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
        cook(index, value);
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
        for (let i = 0; i < this.results.length; i++) {
            if (this.results[i].Check(this.score)) {
                this.result = i;

            }
        }
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



const results = [
    new Result("Коммуникативные мотивы.", 7),
];

//Массив с вопросами
const questions = [
    //1
    new Question("Есть ли у вас стремление к изучению людей и установлению знакомств с различными людьми?.",
        [
            new Answer("Да", 1),
            new Answer("Нет", 0),
        ]),

    new Question("Нравится ли вам заниматься общественной работой?.",
        [
            new Answer("Да", 1),
            new Answer("Нет", 0),
        ]),

    new Question("Долго ли вас беспокоит чувство обиды, причиненной вам кем-либо из ваших товарищей?.",
        [
            new Answer("Да", 0),
            new Answer("Нет", 1),
        ]),

    new Question("Всегда ли вам трудно ориентироваться в создавшейся критической ситуации?.",
        [
            new Answer("Да", 0),
            new Answer("Нет", 1),
        ]),
    new Question("Много ли у вас друзей, с которыми вы постоянно общаетесь?.",
        [
            new Answer("Да", 1),
            new Answer("Нет", 0),
        ]),
    new Question("Часто ли вам удается склонить большинство своих товарищей к принятию ими вашего мнения?.",
        [
            new Answer("Да", 1),
            new Answer("Нет", 0),
        ]),
    new Question("Верно ли, что вам приятнее и проще проводить время за книгами или за каким-нибудь другим занятием, чем с людьми?.",
        [
            new Answer("Да", 0),
            new Answer("Нет", 1),
        ]),
    new Question("Если возникли некоторые помехи в осуществлении ваших намерений, легко ли вам отказаться от своих намерений?.",
        [
            new Answer("Да", 0),
            new Answer("Нет", 1),
        ]),
    new Question("Легко ли вы устанавливаете контакты с людьми, которые старше вас по возрасту?.",
        [
            new Answer("Да", 1),
            new Answer("Нет", 0),
        ]),
    new Question("Любите ли вы придумывать или организовывать со своими товарищами различные игры и развлечения?.",
        [
            new Answer("Да", 1),
            new Answer("Нет", 0),
        ]),
    new Question("Трудно ли вам включаться в новые для вас компании (коллективы)?.",
        [
            new Answer("Да", 0),
            new Answer("Нет", 1),
        ]),
    new Question("Часто ли вы откладываете на другие дни дела, которые нужно было выполнить сегодня?.",
        [
            new Answer("Да", 0),
            new Answer("Нет", 1),
        ]),
    new Question("Легко ли вам удается устанавливать контакты и общаться с незнакомыми людьми?.",
        [
            new Answer("Да", 1),
            new Answer("Нет", 0),
        ]),
    new Question("Стремитесь ли вы добиться того, чтобы ваши товарищи действовали в соответствии с вашим мнением?.",
        [
            new Answer("Да", 1),
            new Answer("Нет", 0),
        ]),
    new Question("Трудно ли вы осваиваетесь в новом коллективе?.",
        [
            new Answer("Да", 0),
            new Answer("Нет", 1),
        ]),
    new Question("Верно ли, что у вас не бывает конфликтов с товарищами из-за невыполнения ими своих обещаний, обязательств, обязанностей?.",
        [
            new Answer("Да", 0),
            new Answer("Нет", 1),
        ]),
    new Question("Стремитесь ли вы при удобном случае познакомиться и побеседовать с новым человеком?.",
        [
            new Answer("Да", 1),
            new Answer("Нет", 0),
        ]),
    new Question("Часто ли при решении важных дел вы принимаете инициативу на себя?.",
        [
            new Answer("Да", 1),
            new Answer("Нет", 0),
        ]),
    new Question("Раздражают ли вас окружающие люди и хочется ли вам побыть одному?.",
        [
            new Answer("Да", 0),
            new Answer("Нет", 1),
        ]),
    new Question("Правда ли, что вы плохо ориентируетесь в незнакомой для вас обстановке?.",
        [
            new Answer("Да", 0),
            new Answer("Нет", 1),
        ]),
    new Question("Нравится ли вам постоянно находиться среди людей?.",
        [
            new Answer("Да", 1),
            new Answer("Нет", 0),
        ]),
    new Question("Возникает ли у вас раздражение, если вам не удается закончить начатое дело?.",
        [
            new Answer("Да", 1),
            new Answer("Нет", 0),
        ]),
    new Question("Испытываете ли вы затруднение, если приходится проявить инициативу, чтобы познакомиться с новым человеком?.",
        [
            new Answer("Да", 0),
            new Answer("Нет", 1),
        ]),
    new Question("Правда ли, что вы утомляетесь от частого общения с товарищами?.",
        [
            new Answer("Да", 0),
            new Answer("Нет", 1),
        ]),
    new Question("Любите ли вы участвовать в коллективных играх?.",
        [
            new Answer("Да", 1),
            new Answer("Нет", 0),
        ]),
    new Question("Часто ли вы проявляете инициативу при решении вопросов, затрагивающих интересы ваших товарищей?.",
        [
            new Answer("Да", 1),
            new Answer("Нет", 0),
        ]),
    new Question("Правда ли, что вы чувствуете себя неуверенно среди незнакомых людей?.",
        [
            new Answer("Да", 0),
            new Answer("Нет", 1),
        ]),
    new Question("Верно ли, что вы редко стремитесь доказать свою правоту?.",
        [
            new Answer("Да", 0),
            new Answer("Нет", 1),
        ]),
    new Question("Полагаете ли вы, что вам не представляет особого труда внести оживление в малознакомую группу?
        .
        ",      [
            new Answer("Да", 1),
            new Answer("Нет", 0),
        ]),
    new Question("Принимаете ли вы участие в общественной работе в школе (на производстве) ?.",
        [
            new Answer("Да", 1),
            new Answer("Нет", 0),
        ]),
    new Question("Стремитесь ли вы ограничить круг своих знакомых?.",
        [
            new Answer("Да", 0),
            new Answer("Нет", 1),
        ]),
    new Question("Верно ли, что вы не стремитесь отстаивать свое мнение или решение, если оно не сразу было принято товарищами?.",
        [
            new Answer("Да", 0),
            new Answer("Нет", 1),
        ]),
    new Question("Чувствуете ли вы себя непринужденно, попав в незнакомый коллектив?.",
        [
            new Answer("Да", 1),
            new Answer("Нет", 0),
        ]),
    new Question("Охотно ли вы приступаете к организации различных мероприятий для своих товарищей?.",
        [
            new Answer("Да", 1),
            new Answer("Нет", 0),
        ]),
    new Question("Правда ли, что вы не чувствуете себя достаточно уверенным и спокойным, когда приходится говорить что-либо большой группе людей?.",
        [
            new Answer("Да", 0),
            new Answer("Нет", 1),
        ]),
    new Question("Часто ли вы опаздываете на деловые встречи, свидания?.",
        [
            new Answer("Да", 0),
            new Answer("Нет", 1),
        ]),
    new Question("Верно ли, что у вас много друзей?.",
        [
            new Answer("Да", 1),
            new Answer("Нет", 0),
        ]),
    new Question("Часто ли вы оказываетесь в центре внимания своих товарищей?.",
        [
            new Answer("Да", 1),
            new Answer("Нет", 0),
        ]),
    new Question("Часто ли вы смущаетесь, чувствуете неловкость при общении с малознакомыми людьми?.",
        [
            new Answer("Да", 0),
            new Answer("Нет", 1),
        ]),
    new Question("Правда ли, что вы не очень уверенно чувствуете себя в окружении большой группы своих товарищей?.",
        [
            new Answer("Да", 0),
            new Answer("Нет", 1),
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

        var coockieScore = 0;
        headElem.innerHTML = "";
        buttonsElem.innerHTML = "";
        for (let i = 1; i < 6; i++) {
            var wrap = document.createElement("div");
            wrap.setAttribute('class', 'progressWrap');
            progressBar.setAttribute('style', 'width:' + progressInfill + '%');
            progressValue.innerHTML = progressInfill;
            e = document.createElement("h3");
            progressTitle.setAttribute('class', 'progress-title')
            var mainDiv = document.createElement("div");
            mainDiv.setAttribute('class', 'progress blue');
            var progressBar = document.createElement("div");
            progressBar.setAttribute('class', 'progress-bar');
            var progressValue = document.createElement("div");
            progressValue.setAttribute('class', 'progress-value');

            if (i == 1) {
                var progressInfill = getCookie("scale_1");
                progressValue.innerHTML = "Любознательность: " + progressInfill + " из 24";
                coockieScore += Number.parseInt(progressInfill);
                progressInfill = Number.parseInt((progressInfill / 24) * 100);
                progressBar.setAttribute('style', 'width:' + progressInfill + '%');
                progressValue.innerHTML = progressInfill;
            }
            if (i == 2) {
                var progressInfill = getCookie("scale_2");
                progressValue.innerHTML = "Сложность : " + progressInfill + " из 22";
                coockieScore += Number.parseInt(progressInfill);
                progressInfill = Number.parseInt((progressInfill / 22) * 100);
                progressBar.setAttribute('style', 'width:' + progressInfill + '%');
                progressValue.innerHTML = progressInfill;
            }
            if (i == 3) {
                var progressInfill = getCookie("scale_3");
                progressValue.innerHTML = "Воображение: " + progressInfill + " из 26";
                coockieScore += Number.parseInt(progressInfill);
                progressInfill = Number.parseInt((progressInfill / 26) * 100);
                progressBar.setAttribute('style', 'width:' + progressInfill + '%');
                progressValue.innerHTML = progressInfill;
            }
            if (i == 4) {
                var progressInfill = getCookie("scale_4");
                progressValue.innerHTML = "Склонность к риску: " + progressInfill + " из 26";
                coockieScore += Number.parseInt(progressInfill);
                progressInfill = Number.parseInt((progressInfill / 26) * 100);
                progressBar.setAttribute('style', 'width:' + progressInfill + '%');
                progressValue.innerHTML = progressInfill;
            }
            progressBar.appendChild(progressValue);
            mainDiv.appendChild(progressBar);
            wrap.appendChild(progressTitle);
            wrap.appendChild(mainDiv);
            headElem.appendChild(wrap);
        }

        let percentOf = Number.parseInt((coockieScore / 160) * 100);
        console.log("percentOf2: " + percentOf);
        setCookie("percentOfCoockieScore2", percentOf);
        setCookie("end", 2);
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