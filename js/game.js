let mood = false; //false=computer ,true=toghter
let text_signUp; // sign up -טקסטס הודעה האם ההזנה של שמות המשתתפים למשחק הצליחה

// const game = require("./gamedemo"); //כאשר מחזיר את זה יש הקוד לא עובד תקין להתסלכ בf12
let select_left_keybord = "";
let select_right_keybord = "";
let name_left;
let name_right;
let count_click_key_bord = 0;
let is_Succeeded;
let key_value; //key value of key enter on key bord 

const arr_key_fight = [87, 83, 68, 74, 75, 76]; //     [87, "w"],  [83, "s"], [68, "d"], [74, "j"] [75, "k"], [76, "l"]
let check_key_fight;
let choose_many;



//שלב א 
// לחיצה על כפתור מצב נגד המחשב כלומר צריך לבקש רק פרטים של שם אחד 
//נגד המחשב 
function computer_mood_click() {
    alert("mood computer")
    mood = false; //מגדיר למקרה שיבחרו אחד נגד השני ואז ישנו את הבחירה

    enter_detilasFighter();
    if (!is_Succeeded)
        return alert("error pleade refresh the page ")


}

// זוג -אחד נגד השני 
function vsTwo_mood_click() {
    alert("mood vs ")

    mood = true;
    enter_detilasFighter();
    alert(name_left + " " + name_right + "  ")
    count_click_key_bord = 0;

}

// םעולה המקלבת את מצב המשחק נגד המחשב או אחג נגד השני
// לפי מצב המשחק יודעת אם לבקש שם אחד או שנייים
// או ולידציה פשוטה אם הזינו שם 
function enter_detilasFighter() {



    name_left = prompt("Please enter your name -fighter one:", "");
    name_right = "";
    // two fighter mood
    if (mood) {
        name_right = prompt("Please enter your name -fighter two:", "");
    }

    if ((name_left == null || name_left == "") || (mood && (name_right == null || name_right == ""))) {
        text_signUp = "User cancelled the prompt.";
        is_Succeeded = false;

    } else {
        text_signUp = "let start the game ";
        is_Succeeded = true;


    }
    if (is_Succeeded) {

    }

    alert(text_signUp);


}


// שלב א של המשחק 

// key bord for the game



window.addEventListener("keydown", function(event) {
    check_key_fight = false;
    // let fight = { side: , value: };
    if (count_click_key_bord == 0 || count_click_key_bord == 1) { //אם שניהם לא בחרו עדיין

        key_value = event.keyCode;
        arr_key_fight.map((currElement, index) => {
            if (key_value == currElement) {
                if (index < 3 && select_left_keybord != "") {
                    select_left_keybord = key_value;
                    check_key_fight = true;

                }
                if (index < 3 && select_left_keybord == "")
                    check_key_fight = false;

                if (i > 3 && select_right_keybord != "") {
                    select_right_keybord = key_value;
                    check_key_fight = true;

                }
                if (i > 3 && select_right_keybord == "") {
                    check_key_fight = false;
                }
                count_click_key_bord++;


            }

        });
        if (!check_key_fight) {
            alert("you choose inccort key bord /one side choose more than on time")
            return;
        }

    }


    if (count_click_key_bord == 2) {

        fightClickCalck();
        // clacl who is the winner can use the nexy fin
    }
    if (count_click_key_bord > 2) {
        alert("restart the game /go to fight ")
        return;
    }



});






function fightClickCalck() {

    // window.addEventListener("keydown", function(event) {
    //     const p = document.createElement("p");
    //     p.textContent = `KeyboardEvent: key='${event.key}' | code='${event.code}'`;
    //     document.getElementById("output").appendChild(p);
    // }, true);
    alert(" הגיע לפה")
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