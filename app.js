let text = document.getElementById("text");

let td1 = document.getElementById("td1");
let td2 = document.getElementById("td2");
let td3 = document.getElementById("td3");
let td4 = document.getElementById("td4");
let td5 = document.getElementById("td5");
let td6 = document.getElementById("td6");
let td7 = document.getElementById("td7");
let td8 = document.getElementById("td8");
let td9 = document.getElementById("td9");
let td10 = document.getElementById("td10");
let td11 = document.getElementById("td11");
let td12 = document.getElementById("td12");
let td13 = document.getElementById("td13");
let td14 = document.getElementById("td14");
let td15 = document.getElementById("td15");
let td16 = document.getElementById("td16");

let td1b = document.getElementById("td1b");
let td2b = document.getElementById("td2b");
let td3b = document.getElementById("td3b");
let td4b = document.getElementById("td4b");
let td5b = document.getElementById("td5b");
let td6b = document.getElementById("td6b");
let td7b = document.getElementById("td7b");
let td8b = document.getElementById("td8b");
let td9b = document.getElementById("td9b");
let td10b = document.getElementById("td10b");
let td11b = document.getElementById("td11b");
let td12b = document.getElementById("td12b");
let td13b = document.getElementById("td13b");
let td14b = document.getElementById("td14b");
let td15b = document.getElementById("td15b");
let td16b = document.getElementById("td16b");

let bold = document.getElementById("bold");
let italic = document.getElementById("italic");
let underline = document.getElementById("underline");

let left = document.getElementById("left");
let center = document.getElementById("center");
let right = document.getElementById("right");

let upper = document.getElementById("upper");
let lower = document.getElementById("lower");
let capital = document.getElementById("capital");

let clear = document.getElementById("clear");
let words = document.getElementById("word");
let lengths = document.getElementById("lengths");

let family = document.querySelector('#family');
let size = document.querySelector('#size');

bold.addEventListener("click", function () {
        text.style.fontWeight = "bold";
});

italic.addEventListener("click", function () {
        text.style.fontStyle = "italic";
});

underline.addEventListener("click", function () {
        text.style.textDecoration = "underline";
});

left.addEventListener("click", function () {
        text.style.textAlign = "left";
});

center.addEventListener("click", function () {
        text.style.textAlign = "center";
});

right.addEventListener("click", function () {
        text.style.textAlign = "right";
});

upper.addEventListener("click", function () {
        text.style.textTransform = "uppercase";
});

lower.addEventListener("click", function () {
        text.style.textTransform = "lowercase";
});

capital.addEventListener("click", function () {
        text.style.textTransform = "capitalize";
});

clear.addEventListener("click", function () {
        location.reload();
});

words.addEventListener("click", function () {
        let a = text.value;
        let b = a.split(" ");
        words.innerText = b.length;
});

lengths.addEventListener("click", function () {
        let a = text.value;
        let b = a.split("");
        lengths.innerText = b.length;
});

family.addEventListener("click", function () {
        output = family.value;
        text.style.fontFamily = output;
});

size.addEventListener("click", function () {
        output = size.value;
        output1 = output+"px";
        text.style.fontSize = output1;
});

// TEXT-COLOR

td1.addEventListener("click", function(){
        text.style.color = "red";
});
td2.addEventListener("click", function(){
        text.style.color = "blue";
});
td3.addEventListener("click", function(){
        text.style.color = "green";
});
td4.addEventListener("click", function(){
        text.style.color = "orange";
});
td5.addEventListener("click", function(){
        text.style.color = "purple";
});
td6.addEventListener("click", function(){
        text.style.color = "pink";
});
td7.addEventListener("click", function(){
        text.style.color = "yellow";
});
td8.addEventListener("click", function(){
        text.style.color = "brown";
});
td9.addEventListener("click", function(){
        text.style.color = "black";
});
td10.addEventListener("click", function(){
        text.style.color = "white";
});
td11.addEventListener("click", function(){
        text.style.color = "chartreuse";
});
td12.addEventListener("click", function(){
        text.style.color = "tomato";
});
td13.addEventListener("click", function(){
        text.style.color = "orangered";
});
td14.addEventListener("click", function(){
        text.style.color = "gray";
});
td15.addEventListener("click", function(){
        text.style.color = "skyblue";
});
td16.addEventListener("click", function(){
        text.style.color = "aqua";
});

// BACKGROUND-COLOR

td1b.addEventListener("click", function(){
        text.style.backgroundColor = "red";
});
td2b.addEventListener("click", function(){
        text.style.backgroundColor = "blue";
});
td3b.addEventListener("click", function(){
        text.style.backgroundColor = "green";
});
td4b.addEventListener("click", function(){
        text.style.backgroundColor = "orange";
});
td5b.addEventListener("click", function(){
        text.style.backgroundColor = "purple";
});
td6b.addEventListener("click", function(){
        text.style.backgroundColor = "pink";
});
td7b.addEventListener("click", function(){
        text.style.backgroundColor = "yellow";
});
td8b.addEventListener("click", function(){
        text.style.backgroundColor = "brown";
});
td9b.addEventListener("click", function(){
        text.style.backgroundColor = "black";
});
td10b.addEventListener("click", function(){
        text.style.backgroundColor = "white";
});
td11b.addEventListener("click", function(){
        text.style.backgroundColor = "chartreuse";
});
td12b.addEventListener("click", function(){
        text.style.backgroundColor = "tomato";
});
td13b.addEventListener("click", function(){
        text.style.backgroundColor = "orangered";
});
td14b.addEventListener("click", function(){
        text.style.backgroundColor = "gray";
});
td15b.addEventListener("click", function(){
        text.style.backgroundColor = "skyblue";
});
td16b.addEventListener("click", function(){
        text.style.backgroundColor = "aqua";
});