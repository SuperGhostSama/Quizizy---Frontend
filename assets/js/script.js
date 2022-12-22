let nextBtn = document.getElementById("nextBtn");
let submitBtn = document.getElementById("submitBtn");
let finishBtn = document.getElementById("finishBtn");
let content = document.getElementById("content");
let text = document.getElementById("text");
let bullets = [...document.querySelectorAll(".bullet")];
let counter = document.getElementById("counter");
let MAX_STEPS = 3;
let currentStep = 1;





nextBtn.addEventListener("click", () => {
  bullets[currentStep - 1].classList.add("completed");
  currentStep += 1;
 
  if (currentStep === MAX_STEPS) {
    nextBtn.disabled = true;
    finishBtn.disabled = false;
  }
  content.innerText = `Step Number ${currentStep}`;

  textEdit();
});

finishBtn.addEventListener("click", () => {
  location.reload();
});

submitBtn.addEventListener("click", () => {
  

});



//function to change the text depending on the step
function textEdit() {
  if (currentStep === 2) {
    // Call the function to start showing the questions
    showQuestions();
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("finishBtn").style.display = "none";
    document.getElementById("submitBtn").style.display = "block";
  } else if (currentStep === 3) {
    resultText();
    document.getElementById("finishBtn").style.display = "block";
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("submitBtn").style.display = "none";


  } else if (currentStep === 1) {
    informationText();
  }
}

//functions for the text in each step

function informationText(){
  text.innerHTML = `<h3 class="text-center" style="margin: 0;" >Welcome to the AWS Quiz application!</h3> <p>This application is designed to test your knowledge of Amazon Web Services (AWS), a cloud computing platform offered by Amazon.com. It provides a wide range of services that can be used to build and run applications, store and
  analyze data, and more. <br>Our AWS Quiz application allows you to test your knowledge of AWS concepts and features through a series of multiple choice questions. You can take a quiz that covers a variety of AWS services
  and features. <br>The quiz questions are designed to challenge your understanding of AWS and help you learn more about the platform. You can track your progress and see how you compare to other users. Whether you're an experienced AWS user or just starting out, the AWS Quiz
  application is a great way to learn more about the platform and improve your knowledge of its capabilities. <br>So why wait? Click on Next to start learning and testing your AWS knowledge today!</p>`;
  
}

function resultText(){
  text.innerText = `Congratulations on completing the AWS Quiz!

  You have just finished testing your knowledge of Amazon Web Services (AWS), a cloud computing platform offered by Amazon.com. The quiz included a series of multiple choice questions designed to challenge your understanding of AWS concepts and features.
  
  Now, it's time to see how you did. The AWS Quiz application will provide you with a detailed breakdown of your results, including the number of correct answers, the percentage of correct answers, and the areas where you may need to improve.
  
  If you scored well on the quiz, congratulations! You have a strong foundation in AWS and are well on your way to becoming an expert. If you didn't do as well as you had hoped, don't worry. The AWS Quiz application is a great learning tool and can help you identify areas where you may need to focus your studies.
  
  Whether you're an experienced AWS user or just starting out, the AWS Quiz application is a valuable resource for improving your knowledge and skills. So why wait? Start learning and testing your AWS knowledge today!`;
}

let i=0;
let score=0;
let isCorrect;
function showQuestions(){
  text.innerHTML = `<section class="d-flex flex-wrap justify-content-center">
  <div class="card m-2" >
      <div class="card-body">
           <h5> ${questionsCopy[i]["question"]}</h5>
          <div class="form-check">
              <input class="form-check-input" type="radio" name="radio" id="radioA" value="A">
              <label class="form-check-label" for="radioA">
              ${questionsCopy[i]["choiceA"]}
              </label>
          </div>
          <div class="form-check">
              <input class="form-check-input" type="radio" name="radio" id="radioB" value="B">
              <label class="form-check-label" for="radioB">
              ${questionsCopy[i]["choiceB"]}
              </label>
          </div>
          <div class="form-check">
              <input class="form-check-input" type="radio" name="radio" id="radioC" value="C">
              <label class="form-check-label" for="radioC">
              ${questionsCopy[i]["choiceC"]}
              </label>
          </div>
          <div class="form-check">
              <input class="form-check-input" type="radio" name="radio" id="radioD" value="D">
              <label class="form-check-label" for="radioD">
              ${questionsCopy[i]["choiceD"]} 
              </label>
          </div>
      </div>
  </div>
  </section>`; 
  // console.log(questionsCopy[i].correct);
 

  if(i<questionsCopy.length-1 ){
    i++;
    setTimeout(showQuestions, 500000);
    // Set a timeout to show a new question after 30 seconds
    countdown();
    
  }else{
    //i need to add the condition that sends the user to the result
  }

    // Get the value of the checked radio button
    let checkedRadio = document.querySelector('input[name="radio"]:checked');

 // Check if the checked radio button is null
 if (checkedRadio === null) {
   console.error('No radio button is checked');
 } else {
   let checkedValue = checkedRadio.value;}
 
}

//COUNTER
let count = 5;
function countdown() { 
  // Update the count on the screen
  counter.innerHTML = `Time remaining: ${count} seconds`;
   // Decrement the count by 1
  count--;
  // If the count is not yet 0, set a timeout to call the countdown function again after 1 second
  if (count > 0) {
    setTimeout(countdown, 1000);
  }else {
    count = 5;
  }
}

function shuffle(questionsCopy) {
  for (let i = questionsCopy.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [questionsCopy[i], questionsCopy[j]] = [questionsCopy[j], questionsCopy[i]];
  }
}

 
// function quizzCompare(){
//   const checkedRadio = document.querySelector('input[name="radio"]:checked');
//   const checkedValue = checkedRadio.value;

//   let correct = 0;

// for (const question of questions) {
  
//   if (question === checkedValue) {
//     correct++;
//   }
// }

// console.log(`You got ${correct} out of ${questions.length} questions correct`);
// }


