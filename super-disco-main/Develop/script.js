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

var btn10 = document.getElementById("btn10")
var text10= document.getElementById("text10")
btn10.addEventListener("click", function(){
  localStorage.setItem("text10", text10.value)
})
text10.value= localStorage.getItem("text10")

var btn11 = document.getElementById("btn11")
var text11= document.getElementById("text11")
btn11.addEventListener("click", function(){
  localStorage.setItem("text11", text11.value)
})
text11.value= localStorage.getItem("text11")

var btn12 = document.getElementById("btn12")
var text12= document.getElementById("text12")
btn12.addEventListener("click", function(){
  localStorage.setItem("text12", text12.value)
})
text12.value= localStorage.getItem("text12")

var btn13 = document.getElementById("btn13")
var text13= document.getElementById("text13")
btn13.addEventListener("click", function(){
  localStorage.setItem("text13", text13.value)
})
text13.value= localStorage.getItem("text13")

var btn14 = document.getElementById("btn14")
var text14= document.getElementById("text14")
btn14.addEventListener("click", function(){
  localStorage.setItem("text14", text14.value)
})
text14.value= localStorage.getItem("text14")

var btn15 = document.getElementById("btn15")
var text15= document.getElementById("text15")
btn15.addEventListener("click", function(){
  localStorage.setItem("text15", text15.value)
})
text15.value= localStorage.getItem("text15")

var btn16 = document.getElementById("btn16")
var text16= document.getElementById("text16")
btn16.addEventListener("click", function(){
  localStorage.setItem("text16", text16.value)
})
text16.value= localStorage.getItem("text16")

var btn17 = document.getElementById("btn17")
var text17= document.getElementById("text17")
btn17.addEventListener("click", function(){
  localStorage.setItem("text17", text17.value)
})
text17.value= localStorage.getItem("text17")


var hour = moment().hours()
console.log(hour)



