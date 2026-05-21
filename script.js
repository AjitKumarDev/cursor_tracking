let div = document.querySelector(".container");

window.addEventListener("mousemove", function (info) {
  //console.log(info.clientX, info.clientY)
  div.style.top = info.clientY + "px";
  div.style.left = info.clientX + "px";

})