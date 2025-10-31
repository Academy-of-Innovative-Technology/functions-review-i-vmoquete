// ===== FUNCTIONS WITH NO PARAMETERS ===== //
function sayHello() {
  let output = document.querySelector("#output1");
  output.innerHTML = "Hello Jin! welcome to JavaScript functions review.";
}

function showDate() {
  let output = document.querySelector("#output1");
  output.innerHTML = "10/30/2025";
}

function motivateBtn() {
  let output = document.querySelector("#output1");
  output.innerHTML =
    "Don't wait for the perfect moment; make the perfect moment you have.";
}

function motivateBtn() {
  let output = document.querySelector("#output1");
  output.innerHTML =
    "Don't wait for the perfect moment; make the perfect moment you have.";
}

function you() {
  let output = document.querySelector("#output1");
  output.innerHTML = "Vianny Moquete - Academy of Innovative Technology";
}

// ===== FUNCTIONS WITH PARAMETERS ===== //
function add(val1, val2) {
  let output2 = document.querySelector("#output2");
  output2.innerHTML = ` The sum of ${val1} + ${val2} = ${val1 + val2}`;
}

function greet(name) {
  let output2 = document.querySelector("#output2");
  output2.innerHTML = `Hello, ${name}  Welcome to the world of JavaScript.`;
}

function calculateArea(width, height) {
  let output2 = document.querySelector("#output2");
  output2.innerHTML = `The area of a 10x6 rectangle is ${width} * ${height} = ${
    width * height
  }; square units `;
}

function favoriteColor(color) {
  let output2 = document.querySelector("#output2");
  output2.innerHTML = `Your favorite color is ${color}  .`;
}

function temp(celcius, mul, sum) {
  let output2 = document.querySelector("#output2");
  output2.innerHTML = `In Fahrenheit is ${celcius} * ${mul} + ${sum} = ${
    celcius * mul + sum
  }.`;
}

// ===== EVENT LISTENERS THAT CALLS FUNCTIONS ===== //
document.querySelector(".sayHelloBtn").addEventListener("click", function () {
  sayHello();
});

document.querySelector(".showDate").addEventListener("click", function () {
  showDate();
});

document.querySelector(".motivateBtn").addEventListener("click", function () {
  motivateBtn();
});

document.querySelector(".you").addEventListener("click", function () {
  you();
});

//pt2
document.querySelector(".showSum").addEventListener("click", function () {
  add(5, 3);
});

document.querySelector(".name").addEventListener("click", function () {
  greet("Alex");
});

document.querySelector(".calcu").addEventListener("click", function () {
  calculateArea(10, 6);
});

document.querySelector(".color").addEventListener("click", function () {
  favoriteColor("black");
});

document.querySelector(".temp").addEventListener("click", function () {
  temp(25, 1.8, 32);
});
