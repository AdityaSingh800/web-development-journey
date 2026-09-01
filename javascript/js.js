let t= document.getElementById ("title");
let inc=document.getElementById ("increase");
let dec=document.getElementById ("decrease");
let reset=document.getElementById("reset");
let col=document.getElementById("color");
let count=0;
let i=0;
let colors = ["lightblue", "blanchedalmond","lightgreen", "lightpink", "lightyellow"];

inc.addEventListener("click",function(){
    count++;
    t.textContent=count;
})

dec.addEventListener ("click",function(){
    count--;
    t.textContent=count;
})

reset.addEventListener("click",function(){
    count=0;
    t.textContent =count;

})

col.addEventListener("click",function(){
    document.body.style.backgroundColor = colors[i]; 

    i++;

    if (i === colors.length){
        i = 0;
    }  
});