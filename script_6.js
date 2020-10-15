let container = document.getElementById("container");
let quest_cell = document.getElementById("question");
quest_cell.innerHTML = question[0].text;
let i = 0;
let summAnswer = 0;

let answer_1;
answer_1 = document.createElement("div");
answer_1.classList.add("panel", "panel--option");
answer_1.innerHTML = question[0].options[0];

let answer_2;
answer_2 = document.createElement("div");
answer_2.classList.add("panel", "panel--option");
answer_2.innerHTML = question[0].options[1];

let answer_3;
answer_3 = document.createElement("div");
answer_3.classList.add("panel", "panel--option");
answer_3.innerHTML = question[0].options[2];

let answer_4;
answer_4 = document.createElement("div");
answer_4.classList.add("panel", "panel--option");
answer_4.innerHTML = question[0].options[3];

container.appendChild(answer_1);
container.appendChild(answer_2);
container.appendChild(answer_3);
container.appendChild(answer_4);

window.alert("Добро пожаловать на Викторину! \nВыберите один из предложенных вариантов ответов.")

function newQuestion() {
   if (i < question.length) {
        quest_cell.innerHTML = question[i].text;
        answer_1.innerHTML = question[i].options[0];
        answer_2.innerHTML = question[i].options[1];
        answer_3.innerHTML = question[i].options[2];
        answer_4.innerHTML = question[i].options[3];
    } 
}

function winnerMessage() {
    if (i == question.length) {
        container.innerHTML = "Вы ответили правильно на " + summAnswer + " вопроса из " + question.length;
    }
}


function count_1() {
    if (question[i].correct == 0) {
        summAnswer = summAnswer +1;
    }
    i++;
    newQuestion();
    winnerMessage();
}

function count_2() {
    if (question[i].correct == 1) {
        summAnswer++;
    }
    i++;
    newQuestion();
    winnerMessage();
}

function count_3() {
    if (question[i].correct == 2){
        summAnswer++;
    }
    i++;
    newQuestion();
    winnerMessage();
}

function count_4() {
    if (question[i].correct == 3) {
        summAnswer++;
    }
    i++;
    newQuestion();
    winnerMessage();
}

answer_1.addEventListener("click", count_1);
answer_2.addEventListener("click", count_2);
answer_3.addEventListener("click", count_3);
answer_4.addEventListener("click", count_4);
