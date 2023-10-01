window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal')

    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 60;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('aktivan');
        }
        else{
            reveals[i].classList.remove('aktivan');
        }
    }
}