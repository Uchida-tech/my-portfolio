const catButton = document.getElementById("button");
const catCount = document.getElementById("counter");

let count = 0; //ボタンが押された回数の値

catButton.onclick = function () {
  count += 1;
  catCount.textContent = count;
};
