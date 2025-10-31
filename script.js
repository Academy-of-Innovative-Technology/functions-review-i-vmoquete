// ===== FUNCTIONS WITH NO PARAMETERS ===== //

function sayHello() {
  let output1 = document.querySelector("#output1");
  output1.innerHTML = "Hello Jin! Welcome to Js functions review";
}

// ===== FUNCTIONS WITH PARAMETERS ===== //

function add(val1, val2) {
  let output2 = document.querySelector("#output2");
  output2.innerHTML = `The sum of ${val1} + ${val2} = ${val1 + val2}`;
}

// ===== EVENT LISTENERS THAT CALLS FUNCTIONS ===== //

document.querySelector(".sayHelloBtn").addEventListener("click", function () {
  sayHello();
});

document.querySelector(".showSum").addEventListener("click", function () {
  add(32, 64);
});
