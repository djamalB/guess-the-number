// угадай число
const random = Math.floor(Math.random() * 2) + 1;

const input = document.querySelector("input");
const btn = document.querySelector("button");
const p = document.querySelector("p");

btn.addEventListener("click", function () {
  let value = Number(input.value);

  if (isNaN(value)) {
    p.textContent = "Введите число";
  } else if (value === random) {
    p.textContent = "Вы угадали";
  } else if (value < random) {
    p.textContent = "Введите число побольше";
  } else if (value > random) {
    p.textContent = "Введите число поменьше";
  }
});


