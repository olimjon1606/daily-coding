let random = Math.floor(Math.random()*3)+1;
console.log(random);
let content = document.getElementById("content");
content.style.backgroundImage = "url(\"./images/bg" + random +".jpg\")";
