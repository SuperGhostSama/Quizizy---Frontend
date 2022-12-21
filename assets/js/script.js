const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");
const finishBtn = document.getElementById("finishBtn");
const content = document.getElementById("content");
const text = document.getElementById("text");
const bullets = [...document.querySelectorAll(".bullet")];
const counter = document.getElementById("counter");
const MAX_STEPS = 3;
let currentStep = 1;

nextBtn.addEventListener("click", () => {
  bullets[currentStep - 1].classList.add("completed");
  currentStep += 1;
  previousBtn.disabled = false;
  if (currentStep === MAX_STEPS) {
    nextBtn.disabled = true;
    finishBtn.disabled = false;
  }
  content.innerText = `Step Number ${currentStep}`;

  textEdit();
});

previousBtn.addEventListener("click", () => {
  bullets[currentStep - 2].classList.remove("completed");
  currentStep -= 1;
  nextBtn.disabled = false;
  finishBtn.disabled = true;
  if (currentStep === 1) {
    previousBtn.disabled = true;
  }
  content.innerText = `Step Number ${currentStep}`;

  textEdit();
});

finishBtn.addEventListener("click", () => {
  location.reload();
});

//function to change the text depending on the step
function textEdit() {
  if (currentStep === 2) {
    // Call the function to start showing the questions
    showQuestions();
  } else if (currentStep === 3) {
    resultText();
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
function showQuestions() {
  
  // Get a random question from the array
  const randomQuestion = questions[Math.floor(Math.random() * questions.length)];

  // Display the question and choices on the screen
  text.innerHTML = `<section class="d-flex flex-wrap justify-content-center">
  <div class="card m-2" >
      <div class="card-body">
           <h5> ${randomQuestion.question}</h5>
          <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
              <label class="form-check-label" for="flexRadioDefault1">
              ${randomQuestion.choiceA} 
              </label>
          </div>
          <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
              <label class="form-check-label" for="flexRadioDefault1">
              ${randomQuestion.choiceB}
              </label>
          </div>
          <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
              <label class="form-check-label" for="flexRadioDefault1">
              ${randomQuestion.choiceC}
              </label>
          </div>
          <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
              <label class="form-check-label" for="flexRadioDefault1">
              ${randomQuestion.choiceD} 
              </label>
          </div>
      </div>
  </div>
  </section>`; 
  // Set a timeout to show a new question after 30 seconds
  setTimeout(showQuestions, 30000);
  countdown();
}

//COUNTER
let count = 30;

function countdown() {
  // Decrement the count by 1
  count--;
  // Update the count on the screen
  counter.innerHTML = `Time remaining: ${count} seconds`;
  
  // If the count is not yet 0, set a timeout to call the countdown function again after 1 second
  if (count > 0) {
    setTimeout(countdown, 1000);
  }else {
    count = 30;
  }
}




