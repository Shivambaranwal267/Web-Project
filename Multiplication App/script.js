const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById("question");

const formEl = document.getElementById("form");

const inputEl = document.getElementById("input");

const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  // default score
  score = 0;
}

scoreEl.innerText = `score: ${score}`;

questionEl.innerText = `What is ${num1} multiply by ${num2}?`;

const CorrectAns = num1 * num2;

formEl.addEventListener("submit", (event) => {
  // convert string to number we use + sign in begin
  const userAns = +inputEl.value;
  if (userAns === CorrectAns) {
    score++;
    console.log(score);
    UpdatelocalStorage();
  } else {
    score--;
    console.log(score);
    UpdatelocalStorage();
  }
});

function UpdatelocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}

localStorage.clear("score");
