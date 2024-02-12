const container = document.getElementsByClassName('container')[0];
const result = document.getElementsByClassName('result')[0];
const calc_btns = document.querySelectorAll('.calc-btn');
var current_theme = 1;
var direction = 1;
var targil = "";

calc_btns.forEach(function(el){
    el.addEventListener("click", function(){
        let btn_txt = el.textContent;
        if(btn_txt === "del" || btn_txt === "reset"){
            result.innerHTML = "";
            targil = "";
        }
        else if(btn_txt === "=")
            calculate();
        else{
            targil += btn_txt;
            result.innerHTML = targil;
        }
    });
})


/*This function change the theme of the calculator*/
function changeTheme(){
    container.classList.remove("t" + current_theme + "-container");
    
    if(current_theme === 1){
        direction = 1;
    }
    else{
        if(current_theme === 3){
            direction = -1;
        }
    }

    current_theme = direction + current_theme;
    container.classList.add("t" + current_theme + "-container");
}

/*This function resets the expression*/
function deleteAll(){
    targil = "";
    result.innerHTML = "";
}

/*This function calculates the expression*/
function calculate(){
    result.innerHTML = eval(targil);
    targil = "";
}

