const el = document.getElementById("info");
const title = document.getElementById("desc_title1");
const desc = document.getElementById("desc_title2");
var smth  = ".infoButton";

$(smth).on('click', function(){
    var value = $(this).val();
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
        title.innerHTML = "<b>Индуктивный тест{SRT}";
        desc.innerHTML = "Работодатель назначил тест, чтобы проверить ваши навыки индуктивного мышления? Данные тесты схожи с тестами на логику и абстрактное мышление. Попробуйте пройти один из примеров, чтобы получить представление о тестах на индуктивное мышление.<br><br>Тесты <b>индуктивное и дедуктивное мышление</b> часто используются взаимозаменяемо. В действительности это разные тесты, несмотря на то, что в общем дедуктивный и индуктивный способ мышления используется для решения логических задач. Тесты на индуктивное мышление являются распространенной формой оценки персонала после числовых и вербальных тестов. Тесты обычно используются для проверки кандидатов на инженерные и технические должности.";
    }
    if(value == 6){
        title.innerHTML = "";
        desc.innerHTML = "";
        title.innerHTML = "<b>Диагностика креативности</b>";
        desc.innerHTML = "Креативность  по Торренсу (от лат. <b>creatio</b> - созидание) - это чувствительность к задачам, дефициту и пробелам знаний, стремление к объединению разноплановой информации; креативность выявляет связанные с дисгармонией элементов проблемы, ищет их решения, выдвигает предположения и гипотезы о возможности решений; проверяет и опровергает эти гипотезы, видоизменяет их, перепроверяет их, окончательно обосновывает результат. Э. Торренс разработал 12 тестов, сгруппированных в вербальную, изобразительную и звуковую батарею. Невербальная часть данного теста, известная как «Фигурная форма теста творческого мышления Торренса» (Figural forms), была адаптирована в НИИ общей и педагогической психологии АПН в 1990 году. Другая часть теста - «Завершение картинок» (Complete Figures) была адаптирована в 1993-1994 годах в лаборатории диагностики способностей и ПВК Института психологии Российской академии наук.";
    }
    if(value == 7){
        title.innerHTML = "";
        desc.innerHTML = "";
        title.innerHTML = "<b>Оценка уровня интеллекта</b>";
        desc.innerHTML = "Этот тест предполагает наличие быстрой реакции, скорости вычислений и принятий решений на основе совсем небольшого набора данных, в виде простых задач.";
    }
    if(value == 8){
        title.innerHTML = "";
        desc.innerHTML = "";
        title.innerHTML = "<b>Тест-опросник самоорганизации деятельности (ОСД).</b>";
        desc.innerHTML = "<b>Опросник самоорганизации деятельности</b> предназначен для диагностики сформированности навыков тактического <b>планирования и стратегического</b> целеполагания, особенностей структурирования самоорганизации деятельности. Он может быть использован в психологическом и организационном консультировании, в образовательных программах, тренингах и как методика диагностики тайм-менеджмента в процессе профессиональной подготовки. Эффективный тайм-менеджмент - управление временем  согласно предлагаемой методике складывается из следующих составляющих:<br>Планомерность <br>Целеустремленность <br>Настойчивость <br>Фиксация (фиксация на структурировании деятельности) <br>Самоорганизация (посредством внешних средств) <br>Ориентация на настоящее";
    }
    if(value == 9){
        title.innerHTML = "<b></b>";
        desc.innerHTML = "";
    }
    if(value == 10){
        title.innerHTML = "";
        desc.innerHTML = "";
        title.innerHTML = "<b>«Коммуникативные и организаторские склонности» В.В. Синявский, В.А. Федорошин (КОС)</b>";
        desc.innerHTML = "В профессиях, которые по своему содержанию связаны с активным взаимодействием человека с другими людьми, в качестве стержневых выступают коммуникативные и организаторские способности, без которых не может быть обеспечен успех в работе. Главное содержание деятельности работников таких профессий - руководство коллективами, обучение, воспитание, культурно-просветительское и бытовое обслуживание людей и т.д. По результатам ответов испытуемого появляется возможность выявить качественные особенности его коммуникативных и организаторских склонностей.";
    }
    if(value == 11){
        title.innerHTML = "";
        desc.innerHTML = "";
        title.innerHTML = "<b>Методика диагностики рефлексивности (опросник Карпова А.В., тест на рефлексию)</b>";
        desc.innerHTML = "<b>Методика диагностики рефлексивности</b> (опросник Карпова А.В., тест на рефлексию) предназначена для определения уровня развития рефлексии у личности.  <b>Рефлексивность</b> - это  способность  человека  выходить  за  пределы  собственного <b>'Я',</b>  осмысливать,  изучать,  анализировать  что-либо  с  помощью  сравнения образа своего <b>'Я'</b>  с какими-либо  событиями,  личностями. Рефлексивность, как противоположность импульсивности, характеризует людей, которые, прежде чем действовать, внутренне просматривают все гипотезы, отбрасывая те из них, которые кажутся им малоправдоподобными, принимают решения обдуманно, взвешенно, учитывая различные варианты решения <b>'задачи'</b>.";
    }
    if(value == 12){
        title.innerHTML = "";
        desc.innerHTML = "";
        title.innerHTML = "<b>Тест-Ориентир</b>";
        desc.innerHTML = "Анкета <b>'Ориентация'</b> определяет профессиональную направленность личности к определенной сфере деятельности. Опросник профориентации был разработан петербургским психологом Игорем Леонидовичем Соломиным.  Тест Соломина применяется для самооценки профессиональных интересов и способностей молодых и взрослых людей. Методика проста в обращении, не требует специальных психологических знаний.Время тестирования занимает 10-15 мин. Методика включает анкету <b>'Ориентация'</b>, уточняющую интересы и способности личности и карту профессий, дающих подробную информацию о различных видах профессий.  При создании анкеты учитывалась классификация Е. А. Климова о пяти типах людей: Человек – Техника, Человек – Природа, Человек — Знаковая система, Человек — Художественный образ, Человек - Человек.";
    }
    if(value == 13){
        title.innerHTML = "";
        desc.innerHTML = "";
        title.innerHTML = "<b>Методика изучения статусов профессиональной идентичности</b>";
        desc.innerHTML = "Профессиональная принадлежность – одна из самых значимых характеристик любого человека. Представление о себе как о носителе определенной профессии – неотъемлемый компонент представлений большинства взрослых людей о самих себе. И чем более любима работа, тем более слиты эти представления, со временем человек уже не мыслит себя вне связи со своей профессией. И если он по каким-то причинам не может продолжать заниматься своим любимым делом (безработица, болезни, выход на пенсию), это превращается для него в настоящую жизненную трагедию. Профессиональное самоопределение не сводится к одномоментному выбору, оно начинается задолго до самого события, продолжается и после него, по мере дальнейшего обучения и освоения профессии. Сложность выбора состоит еще в том, что предпочесть одну профессию – значит отказаться от многих других.";
    }
    el.classList.toggle("active");
});

$('#infoClose').on('click', function(){
  el.classList.remove("active");
});