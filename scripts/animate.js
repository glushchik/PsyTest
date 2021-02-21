const el = document.getElementById("info");
const title = document.getElementById("desc_title1");
const desc = document.getElementById("desc_title2");
var smth  = ".infoButton";
$(smth).on('click', function(){
    var value = $(this).val();
    console.log(value);
    if(value == 1){
        title.innerHTML = "";
        desc.innerHTML = "";
        title.innerHTML = "<b>Методика диагностики учебной мотивации студентов</b>";
        desc.innerHTML = "<br><b>Шкалы:</b> учебные мотивы – коммуникативные, избегания неудачи, престижа,профессиональные, творческой самореализации, учебно-познавательные,социальные мотивы<br><b>Назначение теста</b><br> Диагностика учебной мотивации студентов. <br> <b>Описание теста</b><br> Методика разработана на основе опросника А.А.Реана и В.А.Якунина. К 16 утверждениям вышеназванного опросника добавлены утверждения, характеризующие мотивы учения, выделенные В.Г.Леонтьевым, а также утверждения, характеризующие мотивы учения, полученные Н.Ц.Бадмаевой в результате опроса студентов и школьников. Это коммуникативные, профессиональные, учебно-познавательные, широкие социальные мотивы, а также мотивы творческой самореализации, избегания неудачи и престижа. <br> ";
    }
    if(value == 2){
        title.innerHTML = "";
        desc.innerHTML = "";
        title.innerHTML = "<b>Методика «Потребность в достижении»</b>";
        desc.innerHTML = "Представление о потребности в достижениях берет свое начало из понятия Ф. Хоппе 'Я-уровень', означающего стремление человека удерживать самосознание на возможно более высоком уровне с помощью высокого личного стандарта достижений (уровня притязаний). Позднее это понятие превратилось в понятие 'мотив достижения', определяемое X. Хекхаузеном как стремление повышать свои способности и умения, поддерживать их на возможно более высоком уровне в тех видах деятельности, по отношению к которым достижения считаются обязательными.";
    }
    if(value == 3){
        title.innerHTML = "";
        desc.innerHTML = "";
        title.innerHTML = "<b>Диагностика «эмоционального интеллекта» (Н. Холл)</b>";
        desc.innerHTML = "<br><b>Назначение теста </b><b><br>Методика предложена</b> для выявления способности понимать отношения личности, репрезентируемые в эмоциях, и управлять эмоциональной сферой на основе принятия решений.<br> Она состоит из 30 утверждений и содержит <b>5 шкал</b>:<br>1. эмоциональная осведомленность;<br>2. управление своими эмоциями (скорее эмоциональная отходчивость, эмоциональная неригидность); <br>3. самомотивация (скорее как раз произвольное управление своими эмоциями, исключая пункт 14); <br>4. эмпатия; <br>5. распознавание эмоций других людей (скорее умение воздействовать на эмоциональное состояние других людей). <br><b>";
    }
    if(value == 4){
        title.innerHTML = "";
        desc.innerHTML = "";
        title.innerHTML = "<b>Морфологический тест жизненных ценностей (МТЖЦ) </b>";
        desc.innerHTML = "Морфологический тест жизненных ценностей (МТЖЦ) предназначен для диагностики мотивационно-ценностной сферы личности. Методика позволяет оценить общую выраженность каждой из восьми терминальных ценностей (развитие себя, духовное удовлетворение, креативность, социальные контакты, престиж, достижения, материальное положение, сохранение индивидуальности), а также и их представленность в различных сферах жизни. Методика является развитием и усовершенствованием Опросника терминальных ценностей В. Сенина.";
    }
    if(value == 5){
        title.innerHTML = "";
        desc.innerHTML = "";
    }
    if(value == 6){
        title.innerHTML = "";
        desc.innerHTML = "";
    }
    if(value == 7){
        title.innerHTML = "";
        desc.innerHTML = "";
    }
    if(value == 8){
        title.innerHTML = "";
        desc.innerHTML = "";
    }
    if(value == 9){
        title.innerHTML = "";
        desc.innerHTML = "";
    }
    if(value == 10){
        title.innerHTML = "";
        desc.innerHTML = "";
    }
    if(value == 11){
        title.innerHTML = "";
        desc.innerHTML = "";
    }
    if(value == 12){
        title.innerHTML = "";
        desc.innerHTML = "";
    }
    if(value == 13){
        title.innerHTML = "";
        desc.innerHTML = "";
    }
    el.classList.toggle("active");
});

$('#infoClose').on('click', function(){
  el.classList.remove("active");
});