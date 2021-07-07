// function myFunction(event) {
//     var x = event.keyCode; // Get the Unicode value
//     var y = String.fromCharCode(x); // Convert the value into a character
//     document.getElementById("demo").innerHTML = "Number: " + x + " = Character: " + y;
// }


// myFunction()


document.addEventListener("keydown", function(event) {

    let x = event.keyCode; // Get the Unicode value
    let y = String.fromCharCode(x); // Convert the value into a character
    if (x = "a") {
        alert('fsdfsd');
        console.log("Space was pressed!");
    }
});


import { game } from './gamedemo';
let select_left_keybord;
let select_right_keybord;
let name_left;
let name_right;


// נדב אמר שיכול להתמש מתי שבא לי ב ארור פאןקיישטן -כלומר עם 
// =>
// עדיף להתשמש בשיטה אחת 
// עדיף לא להתשמש בthis  אלה ליצור כבר מחלקה

let myGamePiece;

function startGame() {
    myGamePiece = new component(30, 30, "red", 60, 120);
    myGameArea.start();
}

// var myGameArea = {
//     canvas: document.createElement("canvas"),
//     start: function() {
//         this.canvas.width = 480;
//         this.canvas.height = 270;
//         this.context = this.canvas.getContext("2d");
//         document.body.insertBefore(this.canvas, document.body.childNodes[0]);
//         this.interval = setInterval(updateGameArea, 20);
//     },
//     clear: function() {
//         this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
//     }
// }

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.newPos();
    myGamePiece.update();
}



function moveleft() {
    myGamePiece.speedX -= 1;
}

function moveright() {
    myGamePiece.speedX += 1;
}

function fightClick() {

    let paper = document.getElementById('paper');




}



function fightClickDemo() {

    // window.addEventListener("keydown", function(event) {
    //     const p = document.createElement("p");
    //     p.textContent = `KeyboardEvent: key='${event.key}' | code='${event.code}'`;
    //     document.getElementById("output").appendChild(p);
    // }, true);

    const winner = game(name_right, select_right_keybord, name_left, select_left_keybord);
    alert(`condtration ${winner.name} you Win!!!!`);





}


// לבנתיים אני עושה רק על אבן 
// כל הלחיצות על אבן נייר או מספריים אמורות הלגיע לפה
function fightClick() {
    console.log("asasda")
    let right_stone_isclick = false;
    let right_paper_isclick = false;
    let right_Scissors_isclick = false;

    document.getElementById('rightStone').addEventListener("click", function() {
        right_stone_isclick = true;
        alert(right_stone_isclick);
    }​);​

    document.getElementById('rightPaper').addEventListener("click", function() {
        right_paper_isclick = true
    }​);​
    document.getElementById('rightScissors').addEventListener("click", function() {
        right_Scissors_isclick = true
    }​);​

    let id = null;

    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);

    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            rightStoneEle.style.top = pos + "px";
            rightStoneEle.style.left = pos + "px";
        }
    }
    // // always checking if the element is clicked, if so, do alert('hello')
    // paper.addEventListener("click", () => {
    //     alert('hello');
    // });


}