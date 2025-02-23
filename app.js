const rock = document.getElementById('rockimg');
const paper = document.getElementById('paperimg');
const scissors = document.getElementById('scissorsimg');
const point1 = document.getElementById('point1');
const point2 = document.getElementById('point2');
const text = document.getElementById('text');

const gamer1Win = document.getElementById('player1win')
const gamer1Lost = document.getElementById('player1lost')
const gamer1Draw = document.getElementById('player1draw')
const gamer2Win = document.getElementById('player2win')
const gamer2Lost = document.getElementById('player2lost')
const gamer2Draw = document.getElementById('player2draw')

let player1Win = 0;
let player1Lost = 0;
let player1Draw = 0;

let player2Win = 0;
let player2Lost = 0;
let player2Draw = 0;


function rockButton() {
    let randomNumber = Math.floor(Math.random()*3 + 1)

    point1.innerHTML = `<img src="images/imgleft.png"   class="p1" alt="" width="150px" height="100px">`
    point2.innerHTML = `<img src="images/imgright1.png" class="p2" alt="" width="150px" height="100px">`

    point1.classList.add('gamer1');
    point2.classList.add('gamer2');
    text.textContent = 'Wait...'

    setTimeout(() => {
        point1.innerHTML = `<img src="images/imgleft.png"   class="p1" alt="" width="150px" height="100px">`

        if(randomNumber == 1) {
            point2.innerHTML = `<img src="images/rightpaper.png" class="p2" alt="" width="150px" height="100px">`
            text.textContent = 'You lost 😔'
            player2Win++
            player1Lost++
            gamer1Lost.textContent = player1Lost;
            gamer2Win.textContent = player2Win;
        } else if(randomNumber == 2) {
            point2.innerHTML = `<img src="images/rightscissor.png" class="p2" alt="" width="150px" height="100px">`
            text.textContent = 'You are winner 😃'
            player1Win++
            player2Lost++
            gamer1Win.textContent = player1Win;
            gamer2Lost.textContent = player2Lost;

        } else {
            point2.innerHTML = `<img src="images/imgright1.png" class="p2" alt="" width="150px" height="100px">`
            text.textContent = `Match draw 😑`
            player1Draw++
            player2Draw++
            gamer1Draw.textContent = player1Draw
            gamer2Draw.textContent = player2Draw
        }
        point1.classList.remove('gamer1');
        point2.classList.remove('gamer2');
    }, 2750);
}

function paperButton() {
    let randomNumber = Math.floor(Math.random()*3 + 1)

    point1.innerHTML = `<img src="images/imgleft.png"   class="p1" alt="" width="150px" height="100px">`
    point2.innerHTML = `<img src="images/imgright1.png" class="p2" alt="" width="150px" height="100px">`

    point1.classList.add('gamer1');
    point2.classList.add('gamer2');
    text.textContent = 'Wait...'

    setTimeout(() => {
        point1.innerHTML = `<img src="images/leftpaper.png"   class="p1" alt="" width="150px" height="100px">`

        if(randomNumber == 1) {
            point2.innerHTML = `<img src="images/rightpaper.png" class="p2" alt="" width="150px" height="100px">`


            text.textContent = `Match draw 😑`
            player1Draw++
            player2Draw++
            gamer1Draw.textContent = player1Draw
            gamer2Draw.textContent = player2Draw
        } else if(randomNumber == 2) {
            point2.innerHTML = `<img src="images/rightscissor.png" class="p2" alt="" width="150px" height="100px">`
            text.textContent = 'You lost 😔'
            player2Win++
            player1Lost++
            gamer1Lost.textContent = player1Lost;
            gamer2Win.textContent = player2Win;

        } else {
            point2.innerHTML = `<img src="images/imgright1.png" class="p2" alt="" width="150px" height="100px">`
            text.textContent = 'You are winner 😃'
            player1Win++
            player2Lost++
            gamer1Win.textContent = player1Win;
            gamer2Lost.textContent = player2Lost;
        }
        point1.classList.remove('gamer1');
        point2.classList.remove('gamer2');
    }, 2750);
}



function scissorsButton() {
    let randomNumber = Math.floor(Math.random()*3 + 1)

    point1.innerHTML = `<img src="images/imgleft.png"   class="p1" alt="" width="150px" height="100px">`
    point2.innerHTML = `<img src="images/imgright1.png" class="p2" alt="" width="150px" height="100px">`

    point1.classList.add('gamer1');
    point2.classList.add('gamer2');
    text.textContent = 'Wait...'

    setTimeout(() => {
        point1.innerHTML = `<img src="images/leftscissor.png"   class="p1" alt="" width="150px" height="100px">`

        if(randomNumber == 1) {
            point2.innerHTML = `<img src="images/rightpaper.png" class="p2" alt="" width="150px" height="100px">`
            text.textContent = 'You are winner 😃'
            player1Win++
            player2Lost++
            gamer1Win.textContent = player1Win;
            gamer2Lost.textContent = player2Lost;

        } else if(randomNumber == 2) {
            point2.innerHTML = `<img src="images/rightscissor.png" class="p2" alt="" width="150px" height="100px">`

            text.textContent = `Match draw 😑`
            player1Draw++
            player2Draw++
            gamer1Draw.textContent = player1Draw
            gamer2Draw.textContent = player2Draw

        } else {
            point2.innerHTML = `<img src="images/imgright1.png" class="p2" alt="" width="150px" height="100px">`

            text.textContent = 'You lost 😔'
            player2Win++
            player1Lost++
            gamer1Lost.textContent = player1Lost;
            gamer2Win.textContent = player2Win;
        }
        point1.classList.remove('gamer1');
        point2.classList.remove('gamer2');
    }, 2750);
}