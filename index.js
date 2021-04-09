console.log("connected");

const colorBtn = document.querySelector("#button");
const colorBtn2 = document.querySelector("#button2");

colorBtn.addEventListener("click", changeColor);
colorBtn2.addEventListener("click", changeColor2);

function changeColor() {
  console.log("function running");
  document.body.style.backgroundColor = "black";
  colorBtn2.addEventListener("click", changeColor2);
}
function changeColor2() {
  console.log("function white");
  document.body.style.backgroundColor = "#ced0d5";
  colorBtn.addEventListener("click", changeColor);
}
