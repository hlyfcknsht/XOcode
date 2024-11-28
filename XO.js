///Слайдер с картинками сверху. 
///Слушает клик и проверяет класс: Если hat__slide, значит карточка закрыта и откроется по клику, при этом класс изменится на hat__slide active
///Если класс hat__slide active, то повторный клик закроет слайдер

const slides = document.querySelectorAll('.hat__slide');

        for (const hat__slide of slides) {
            hat__slide.addEventListener('click', () => {
            if (hat__slide.className == 'hat__slide'){  
                clearActiveClasses()
                hat__slide.classList.add('active')}
                else clearActiveClasses()
            })
             
    function clearActiveClasses() {
        slides.forEach((hat__slide) => {
            hat__slide.classList.remove('active')
        })
}}


let area = document.getElementById('area');
let cell = document.getElementsByClassName('cell');
let currentPlayer = document.getElementById('curPlyr');
let player = "X";



let winindex = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
]




for(let i = 1; i<=9; i++) {
    area.innerHTML += "<div class = 'cell' pos=" + i + "></div>";
}

for(let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', cellClick, false);

}

function cellClick() {
    let data = [];


    if(!this.innerHTML){
        this.innerHTML = player;
    }else {
        let alert = push.alert('AAAAA')
        return;
    }
    
    for(let i in cell) {
        if(cell[i].innerHTML == player){
            data.push(parseInt(cell[i].getAttribute('pos')));

        }
    }
    
   
    
    if(winCheck(data)) {
        restart(player + " победили!");
    }else {
        let draw = true;
        for(let i in cell) {
            if(cell[i].innerHTML == '') draw = false;
        }
        if(draw) {
            restart("Ничья!")
            

        }
    }
    player = player == "X" ? "O" : "X";
    currentPlayer.innerHTML = playerName;

}




function winCheck(data) {
    for(let i in winindex) {
        let win = true;
        for(let j in winindex[i]) {
            let id = winindex[i][j];
            let ind = data.indexOf(id);
        
           if(ind == -1) {
            win = false;
            }
        }
        if(win) return true;

    }
    return false;
}
function restart(text) {
alert(text);
for(let i = 0; i < cell.length; i++) {
cell[i].innerHTML = '';
}}
            

let rest = document.getElementsByClassName('basement__repeat-button');
if (rest) {
    rest[0].addEventListener("click", function(){
        location.reload();
});
}
