window.onload = function () {
    show(0);
}
//Questions

let questions = [
    {
        id: 1,
        question: "WHAT IS MANGO?",
        answer: "Fruit",
        options: [
            "Fruit",
            "Vegetable",
            "Rashpan",
            "None of these"
        ]
    },
    {
        id: 2,
        question: "WHAT IS India?",
        answer: "Country",
        options: [
            "Fruit",
            "Country",
            "Veg",
            "None of these"
        ]
    },
    {
        id: 3,
        question: "WHAT IS UP?",
        answer: "State",
        options: [
            "State",
            "Country",
            "Continent",
            "None of these"
        ]
    },
    {
        id: 4,
        question: "WHAT IS ZEBRA?",
        answer: "Animal",
        options: [
            "Animal",
            "Fruit",
            "Flower",
            "None of these"
        ]
    },
    {
        id: 5,
        question: "WHO IS ASHOKA?",
        answer: "None of these",
        options: [
            "Animal",
            "zadi buti",
            "village",
            "None of these"
        ]
    }
];







function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;


    sessionStorage.setItem("name", name);

    location.href = "quiz.html";

}

let question_count = 0;
let point = 0;
sessionStorage.setItem("points", point);

function next() {

    let user_answer = document.querySelector("li.option.active").innerHTML;

    if(question_count==2){
        let user_answer = document.getElementById("inty").value;
        console.log(user_answer);
        if(user_answer == "State"){
            point +=10
        }
    }
    /*else if(question_count==5){
        let user_answer = document.getElementById("intyt").value;
        console.log(user_answer);
        if(user_answer == "None of these"){
            point +=10
        }
    }*/
    console.log(user_answer);
    if (user_answer == questions[question_count].answer) {

        point += 10;
        sessionStorage.setItem("points", point);
    }
    question_count++;
    if (question_count == questions.length) {
        sessionStorage.setItem("time", `${minutes} minutes and ${seconds} seconds`);
        clearInterval(mytime);
        location.href = "end.html";
        return;
    }



    show(question_count);

}

function show(count) {
    let question = document.getElementById("questions");



    if(count==2){
         question.innerHTML = `
     <h2>Q${question_count+1}. ${questions[count].question}</h2>
     <ul class="option_group">
     <li class="option"><input type="radio" name="gender-other" value="State" id="inty">${questions[count].options[0]}</li>
     <li class="option"><input type="radio" name="gender-other" value="zadi buti" id="inty">${questions[count].options[1]}</li>
     <li class="option"><input type="radio" name="gender-other" value="State" id="inty">${questions[count].options[2]}</li>
     <li class="option"><input type="radio" name="gender-other" value="None of these" id="inty">${questions[count].options[3]}</li>
     </ul>
 
     `;
 
     }
     /*else if(count==5){
        question.innerHTML = `
    <h2>Q${question_count+1}. ${questions[count].question}</h2>
    <input type="text" name="type" value="None of these" id="intyt">

    `;
     return;
    }*/else{
    question.innerHTML = `
        <h2>Q${question_count + 1}. ${questions[count].question}</h2>
        <ul class="option_group">
        <li class="option">${questions[count].options[0]}</li>
        <li class="option">${questions[count].options[1]}</li>
        <li class="option">${questions[count].options[2]}</li>
        <li class="option">${questions[count].options[3]}</li>
        </ul>
    
        `;

     }

    toggleActive();
}

function toggleActive() {
    let option = document.querySelectorAll("li.option");

    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let j = 0; j < option.length; j++) {
                if (option[j].classList.contains("active")) {
                    option[j].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}








