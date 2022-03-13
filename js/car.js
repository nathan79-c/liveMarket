let x = document.getElementById('x'); 
let y = document.getElementById('y');
let z = document.getElementById('z');
let cmpt = 0;
setInterval(() => {
    //x.style.zIndex = cmpt;
    cmpt++;
    if(cmpt == 3){
        cmpt = 0;
    }
    if(cmpt == 0){
        x.style.zIndex = 100;
        y.style.zIndex = 0;
        z.style.zIndex = 0;
    }
    if(cmpt == 1){
        x.style.zIndex = 0;
        y.style.zIndex = 100;
        z.style.zIndex = 0;
    }
    if(cmpt == 2){
        x.style.zIndex = 0;
        y.style.zIndex = 0;
        z.style.zIndex = 100;
    }
}, 5000);
