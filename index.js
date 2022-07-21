var quizData = [
    {
        question : 'What does HTML stands for?',
        a : 'Hypertext Machine language.',
        b : 'Hypertext and links markup language.',
        c : 'Hypertext Markup Language.',
        d : 'Hightext machine language.',
        correct : 'c',
    },{
        question : '_______keyword is used to declare variables in javascript.?',
        a : 'Var',
        b : 'Dim',
        c : 'String',
        d :  'None of the above',
        correct : 'a',
    },{
        question : 'Among the following operators identify the one which is used to allocate memory to array variables in JavaScript.?',
        a : 'malloc',
        b : 'new malloc',
        c : 'new',
        d: 'alloc',
        correct : 'c',
    },{
        question : 'Why were cookies designed?',
        a : 'server side programming',
        b : 'client side programming',
        c : 'Both a and b ',
        d : 'None of the above',
        correct : 'a',
    },{
        question : 'Which of the following is used to transmit information on the world wide web?',
        a : 'HPPT',
        b : 'HTTP',
        c : 'HTTTP',
        d : 'HTPP',
        correct : 'b',
    }
];
var quiz = document.getElementById("quiz");
var answerEls = document.querySelectorAll(".answer");
var questionEl = document.getElementById('question');
var a_text = document.getElementById("a_text");
var b_text = document.getElementById("b_text");
var c_text = document.getElementById("c_text");
var d_text = document.getElementById("d_text");
var submitBtn = document.getElementById("submit");

 let currentQuiz = 0;
let score = 0;

 loadQuiz();
 function loadQuiz(){
    deSelectAnswers();

    var currentQuizData = quizData[currentQuiz];
     questionEl.innerHTML = currentQuizData.question;
     a_text.innerHTML = currentQuizData.a;
     b_text.innerHTML = currentQuizData.b;
     c_text.innerHTML = currentQuizData.c;
     d_text.innerHTML = currentQuizData.d;
 }

  function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if(answerEl.checked){
        answer = answerEl.id;
    }
  });
  return answer;
  }

  function deSelectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
      });
  }

 submitBtn.addEventListener("click" , function(){
   
    var answer = getSelected();
    
    if(answer){
       if(answer === quizData[currentQuiz].correct){
        score++;
       }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
           quiz.innerHTML =  `<h2>You answered correctly at ${score}/${quizData.length} question.</h2>
           <button onClick = "location.reload()">Reload</button>`;
        }
    }
 });