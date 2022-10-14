console.log("anything")
var currentDay = document.getElementById("currentDay")
currentDay.textContent=moment().format('LLLL');
var btn8 = document.getElementById("btn8")
var text8= document.getElementById("text8")
btn8.addEventListener("click", function(){
  localStorage.setItem("text8", text8.value)
})
text8.value= localStorage.getItem("text8")

var btn9 = document.getElementById("btn9")
var text9= document.getElementById("text9")
btn9.addEventListener("click", function(){
  localStorage.setItem("text9", text9.value)
})
text9.value= localStorage.getItem("text9")