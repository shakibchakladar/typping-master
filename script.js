function play() {
    // step one:- hide the home screen
    const homeScreen = document.getElementById('home-screen');
    homeScreen.classList.add('hidden');

    // step two:- visible the playground section 
    const playGround = document.getElementById('play-ground');
    playGround.classList.remove('hidden');
    continueGame()
}

// play game function
function continueGame() {
    const alphBets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const randomNumber = Math.random() * 25;
    const number = Math.round(randomNumber);
    const alphabate = alphBets[number];
    document.getElementById('display-random-word').innerText = alphabate;

    setBgColorByid(alphabate);

}
// show the random alphabate on playground
// set bg clor by id
function setBgColorByid(elementId) {
    document.getElementById(elementId).classList.add('bg-orange-500');
}
function removeBgcolorByid(elementId){
    document.getElementById(elementId).classList.remove('bg-orange-500');
}


// press the perfect key

function handleKeyBoardKeyUpEvent(events){
 const playerPressKey=(events.key);
 const expectedKey=document.getElementById('display-random-word').innerText;
 const dicliredKey=expectedKey.toLocaleLowerCase();
 if(dicliredKey===playerPressKey){
    removeBgcolorByid(dicliredKey);

    // for score 
    const score=document.getElementById('current-score');
   const currentScoreText= score.innerHTML;
   const currentScore=parseInt(currentScoreText);
//    increese number
   const newScore=currentScore+1;
   document.getElementById('current-score').innerText=newScore;
    continueGame()
    // console.log('Yahhh! you got point')
 }
 else{
    const life=document.getElementById('current-life');
    const lifeText=life.innerText;
    const currentLife=parseInt(lifeText);
    const newLife=currentLife-1;
    life.innerText=newLife;
    console.log('you press wrong key ')
    // game oveer
    if(newLife===0){
        document.getElementById('play-ground').classList.add('hidden');
        document.getElementById('score-section').classList.remove('hidden');
        const totalScore=document.getElementById('current-score').innerText;
        document.getElementById('scoreResult').innerText=totalScore;
        // ..................
    }
 }
}

function playAgain(){
   const scoreSec= document.getElementById('score-section');
   scoreSec.classList.add('hidden');
   document.getElementById('play-ground').classList.remove('hidden');
   document.getElementById('current-life').innerText=3;
}

 document.addEventListener('keyup', handleKeyBoardKeyUpEvent)
