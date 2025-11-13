var count = 0;
const mychangeFunc = function mychange(){
 document.body.style.backgroundColor = "yellow";
}

const input = document.querySelector("input");
input.addEventListener("change", mychangeFunc);

document.getElementById("btn-2").addEventListener("click", function () {
  alert("I told you not to click me MF!");
  if (count % 2 == 0) {
    this.style.backgroundColor = "red";
  } else {
    this.style.backgroundColor = "lightgray";
  }
  count++;
});