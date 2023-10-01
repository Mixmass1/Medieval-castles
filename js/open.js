function toggle(){
    var x = document.getElementById("meni");
    var el = document.querySelector(".class");

    if(x.style.opacity == 0){
        x.style.opacity = 1;
        el.classList.add("yellow");
        x.classList.add("green");
    }
    else{
        x.style.opacity = 0;
        el.classList.remove("yellow");
        x.classList.remove("green");
    }
}
