let mood = false; //false=computer ,true=toghter

const game = require("./gamedemo")
let select_left_keybord;
let select_right_keybord;
let name_left;
let name_right;
let count_click_key_bord=0;
let is_Succeeded 


alert("f")

//שלב א 
//נגד המחשב 
function computer_mood_click() {
    alert("mood computer")
    mood =false;//מגדיר למקרה שיבחרו אחד נגד השני ואז ישנו את הבחירה

     enter_detilasFighter(mood);
     if(!is_Succeeded)
        return alert("error pleade refresh the page ")

        
}

// זוג -אחד נגד השני 
function vsTwo_mood_click() {
    alert("mood vs ")

    mood = true;
    enter_detilasFighter(mood);
}

// םעולה המקלבת את מצב המשחק נגד המחשב או אחג נגד השני
// לפי מצב המשחק יודעת אם לבקש שם אחד או שנייים
// או ולידציה פשוטה אם הזינו שם 
function enter_detilasFighter(mood) {
     is_Succeeded = false
    let text;

    let fight_left = prompt("Please enter your name -fighter one:", "");
    let fight_right;
    // two fighter mood
    if (mood) {
        fight_right = prompt("Please enter your name -fighter two:", "");
    }

    if ((fight_left == null || fight_left == "") || (mood && (fight_right == null || fight_right == ""))) {
        text = "User cancelled the prompt.";

    } else {
        text = "let start the game ";
        Succeeded = true;

    }

    alert(text);
    return is_Succeeded;

}

// שלב א של המשחק 

// key bord for the game
 function keybord_click_fun(){


    window.addEventListener("keydown", function(event) {

        // let fight = { side: , value: };
        if(count_click_key_bord==0&&count_click_key_bord==1){

            count_click_key_bord++;
            let key_value = event.key;
        
        
            let arrKeyFight = [ "w", "s", "d",];//להוסיך פה את הלחצנים ימיןל שמאל וכו 
        
            let length_arr = arrKeyFight.length;
        
            for (let i = 0; i < length_arr; i++) {
                if (key_value == arrKeyFight[i]) {
                    if(i<3)
                        select_left_keybord=key_value;

                    if(i>3)
                        select_right_keybord=key_value;


                   
                }
        
        
        
            }
        }else{
            alert("restart the game /go to fight ")
        }
    
    
    
    });



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



// נדב אמר שיכול להתמש מתי שבא לי ב ארור פאןקיישטן -כלומר עם 
// =>
// עדיף להתשמש בשיטה אחת 
// עדיף לא להתשמש בthis  אלה ליצור כבר מחלקה










// לבנתיים אני עושה רק על אבן 
// כל הלחיצות על אבן נייר או מספריים אמורות הלגיע לפה
// function fightClick() {
//     console.log("asasda")
//     let right_stone_isclick = false;
//     let right_paper_isclick = false;
//     let right_Scissors_isclick = false;

//     document.getElementById('rightStone').addEventListener("click", function() {
//         right_stone_isclick = true;
//         alert(right_stone_isclick);
//     }​);​

//     document.getElementById('rightPaper').addEventListener("click", function() {
//         right_paper_isclick = true
//     }​);​
//     document.getElementById('rightScissors').addEventListener("click", function() {
//         right_Scissors_isclick = true
//     }​);​







    //דוגמא של 'קוד שליו


  
    // // always checking if the element is clicked, if so, do alert('hello')
    // paper.addEventListener("click", () => {
    //     alert('hello');
    // });






// Initialize();

// function Initialize() {
//     preGameSound = new Sound("soundeffects/PreGame.mp3");
//     shotSound = new Sound("soundeffects/GunShot.mp3");
//     deathSound = new Sound("soundeffects/Death.mp3");
//     myGameArea.start();
//     gun1 = new Gun(80, 80, "images/YourGun.gif", canvasWidth * 0.1, canvasHeight / 2);
//     gun2 = new Gun(80, 80, "images/AiGun.gif", canvasWidth * 0.9, canvasHeight / 2);
//     leftBullets = [];
//     rightBullets = [];
// }



// let myGameArea = {
//     canvas: document.createElement("canvas"),

//     start: function() {
//         this.canvas.width = canvasWidth;
//         this.canvas.height = canvasHeight;
//         this.canvas.className = "game-block";
//         this.canvas.id = "canvas-id"
//         this.context = this.canvas.getContext('2d');
//         this.pause = false;
//         document.body.insertBefore(this.canvas, document.body.childNodes[4]);
//         preGameSound.play();
//         countDown = 5;
//         this.keyMap = [];
//         this.interval = setInterval(preGame, 1000);

//         window.addEventListener('keydown', (e) => {
//             if (!this.keyMap.includes(e.keyCode)) {
//                 this.keyMap.push(e.keyCode);
//             }
//         })

//         window.addEventListener('keyup', (e) => {
//             if (this.keyMap.includes(e.keyCode)) {
//                 this.keyMap.splice(this.keyMap.indexOf(e.keyCode), 1);
//             }
//         })
//     },
//     clear: function() {
//         this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
//     },
//     stop: function() {
//         clearInterval(gameInterval)
//         clearInterval(aiInterval);
//         this.pause = true;
//     }
// }