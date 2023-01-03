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
  // content.innerText = `Step Number ${currentStep}`;
  textEdit();
});

finishBtn.addEventListener("click", () => {
  location.reload();
});

submitBtn.addEventListener("click", () => {
  count=30;
  clearTimeout(countdownn);
  checkRadio();
  clearTimeout(show);
  showQuestions();

});




//function to change the text depending on the step
function textEdit() {
  if (currentStep === 2) {
    // Call the function to start showing the questions
    showQuestions();
    document.getElementById("progressBar").style.display = "block";
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("finishBtn").style.display = "none";
    document.getElementById("submitBtn").style.display = "block";
  } else if (currentStep === 3) {
    resultText();
    document.getElementById("progressBar").style.display = "none";
    document.getElementById("finishBtn").style.display = "block";
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("submitBtn").style.display = "none";


  } else if (currentStep === 1) {
    informationText();
  }
}

//functions for the text in each step

function informationText(){
  text.innerHTML = `<h3 class="text-center " style="margin: 0;" >Welcome to the AWS Quiz application!</h3> <p>This application is designed to test your knowledge of Amazon Web Services (AWS), a cloud computing platform offered by Amazon.com. It provides a wide range of services that can be used to build and run applications, store and
  analyze data, and more. <br>Our AWS Quiz application allows you to test your knowledge of AWS concepts and features through a series of multiple choice questions. You can take a quiz that covers a variety of AWS services
  and features. <br>The quiz questions are designed to challenge your understanding of AWS and help you learn more about the platform. You can track your progress and see how you compare to other users. Whether you're an experienced AWS user or just starting out, the AWS Quiz
  application is a great way to learn more about the platform and improve your knowledge of its capabilities. <br>So why wait? Click on Next to start learning and testing your AWS knowledge today!</p>`;
  
}

function resultText(){
  text.innerHTML = `<h3 class="text-center" style="margin: 0;" ><p>Congratulations on completing the AWS Quiz!</h3> 
  <br><h3 class="text-center" >Your Result is ${score}/10</h3> 
  <br><p class="text-center " >If you are unsatisfied of your Result, Work Harder and try Again by pressing the Finish button</p>
  <h3 class="text-center" >Here are the incorrect questions with the explanation</h1>
  `;

  for(let index=0 ; index<questionsCopy.length ; index++){
  if(questionsCopy[index]["incorrect"]){
    text.innerHTML +=`<section class="d-flex flex-wrap justify-content-center">
    <div class="w-100 card m-3 border-secondary border border-3">
        <div class="card-body text-center">
             <h5> ${questionsCopy[index]["question"]}</h5>
            <div class="form-check">
                ${questionsCopy[index]["answer"]}
                </label>
            </div>
        </div>
    </div>
    </section>`;
  }
}
}

let i=0;
let show;
function showQuestions(){
  if(i<questionsCopy.length){
  text.innerHTML = `<section class="d-flex  ">
  <div class="m-2 " >
      <div class="card-body text-center ">
          <div class="card border border-3 " ">
            <div class="card-body text-center">
                <h5 class="card-title">${questionsCopy[i]["question"]}</h5>
            </div>
          </div>

          <div class="form-check form-check-inline card border border-3 mt-4 rounded-pill">
              <input class="form-check-input" type="radio" name="radio" id="radioA" value="A" >
              <label class="form-check-label" for="radioA">
              A - ${questionsCopy[i]["choiceA"]}
              </label>
          </div>
          <div class="form-check card border border-3 mt-4 rounded-pill">
              <input class="form-check-input" type="radio" name="radio" id="radioB" value="B">
              <label class="form-check-label" for="radioB" >
              B - ${questionsCopy[i]["choiceB"]}
              </label>
          </div>
          <div class="form-check card border border-3 mt-4 rounded-pill">
              <input class="form-check-input" type="radio" name="radio" id="radioC" value="C">
              <label class="form-check-label" for="radioC" >
              C - ${questionsCopy[i]["choiceC"]}
              </label>
          </div>
          <div class="form-check card border border-3 mt-4 rounded-pill">
              <input class="form-check-input" type="radio"  name="radio" id="radioD" value="D">
              <label class="form-check-label" for="radioD" >
              D - ${questionsCopy[i]["choiceD"]} 
              </label>
          </div>
      </div>
  </div>
  </section>`; 

    
    let progressBar=document.querySelector(".progress-bar");
    progressBar.style.width=(i*100/questionsCopy.length)+"%";
    progressBar.innerText=(i*100/questionsCopy.length)+"%";
    

    show=setTimeout(function(){checkRadio(); showQuestions();}, 30000);
    // Set a timeout to show a new question after 30 seconds
    countdown();
    
  }else{
    
    bullets[currentStep - 1].classList.add("completed");
    currentStep = 3;
    document.getElementById("counter").style.display = "none";
    textEdit();
  }
  i++;
}

//COUNTER
let count = 30;
let countdownn;
function countdown() { 
  // Update the count on the screen
  counter.innerHTML = `Time remaining: ${count} seconds`;
   // Decrement the count by 1
  count--;
  // If the count is not yet 0, set a timeout to call the countdown function again after 1 second
  if (count > 0) {
    countdownn=setTimeout(countdown, 1000);
  }else {
    count = 30;
  }
}

function shuffle(questionsCopy) {
  for (let i = questionsCopy.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [questionsCopy[i], questionsCopy[j]] = [questionsCopy[j], questionsCopy[i]];
  }
}

let questionsCopy;
let score=0;
function checkRadio(){
  // Get the value of the checked radio button
  let checkedRadio = document.querySelector('input[name="radio"]:checked');
 // Check if the checked radio button is null
 if (checkedRadio === null) {
  //  console.error('No radio button is checked');
   questionsCopy[i-1]["incorrect"]="true";
  } else {
   let checkedValue = checkedRadio.value;
   console.log(checkedValue);
      if(checkedValue == questionsCopy[i-1].correct){
        // console.log("Correct");
        score++;
        // console.log(score);
      }else{
        // console.log("Incorrect");
        questionsCopy[i-1]["incorrect"]="true";
        console.log(questionsCopy);
      }
      

  }
}

//AJAX
var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              questionsCopy=JSON.parse(this.responseText);
            }
        };
        xmlhttp.open("GET", "/Quizizy---Frontend/Controllers/json.php" , false);
        xmlhttp.send();
        shuffle(questionsCopy);
        console.log(questionsCopy);