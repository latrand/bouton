
const btn = document.querySelector(".btn");

btn.addEventListener("mousedown", function(){
    btn.innerText = "On Clicked";
});

btn.addEventListener("mouseover", function(){
    btn.innnerText = "On Hover";
});

btn.addEventListener("mouseout", function(){
    btn.innerText = "Mouse out";
});