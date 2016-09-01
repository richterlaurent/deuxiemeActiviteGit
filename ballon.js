var boutDem = document.getElementById('demarrer');
var boutArr = document.getElementById('arreter');
var ballon = document.getElementById('ballon');
var cadre = document.getElementById('cadre');
var animationId = null;
var retour = false;

var diametreBalle = parseFloat(getComputedStyle(ballon).width);
var vitesse = 10;

boutDem.addEventListener('click', start);
boutArr.addEventListener('click', stop);

function start(){
    boutDem.disabled = true;
    boutArr.disabled = false;
    animationId = requestAnimationFrame(deplacerBalle);
}

function deplacerBalle(){
    var position = parseFloat(getComputedStyle(ballon).left);

    if(!retour && (position + diametreBalle) < parseFloat(getComputedStyle(cadre).width)){
        ballon.style.left = position + vitesse + "px";
    }else{
        retour = true;
        ballon.style.left = position - vitesse + "px";
    }

    if(retour && position >= 0){
        ballon.style.left = position - vitesse + "px";
    }else{
        retour = false;
        ballon.style.left = position + vitesse + "px";
    }

    animationId = requestAnimationFrame(deplacerBalle);
}

function stop() {
    boutDem.disabled = false;
    boutArr.disabled = true;
    cancelAnimationFrame(animationId);
}




Printer = function(){
    this.print = function(){
        console.log(this);
    }
};

var printer = new Printer();

printer.print();

