var Score = 0;
var Stage = 0;
var Timer = 50;
var Interval = 1000;
randomWord = null
var Words = ['route', 'rank', 'outline', 'poem', 'trance', 'brain', 'dome',
 'cave', 'thread', 'gown', 'crackpot', 'eavesdrop', 'courage', 'root', 'eternal', 'long', 
 'wording', 'alive', 'pity', 'fresh', 'issue', 'impound', 'side', 'smart', 'persist',
 'power', 'veteran', 'bind'
]

setDefData()
startTimer()

document.querySelector('input').addEventListener('keyup', function(){
if (document.querySelector('input').value === randomWord){
    document.querySelector('input').value = ''
    setRandomWord()
    Score++
    document.querySelector('.score').innerHTML = "Score" + Score
}
})

function setDefData(){
    document.querySelector('.score').innerHTML = "Score" + Score
    document.querySelector('.stage').innerHTML = "Stage" + Stage
   setRandomWord()
}
function setRandomWord(){
    randomWord =Words[Math.floor(Math.random()*Words.length)]
    document.querySelector('.word').innerHTML = randomWord
}
function timerSetting(){
    if (Timer <= 0){
        return gameOver()
    }
    Timer--
    document.querySelector('.timer').innerHTML = Timer + "s"
}
function startTimer(){
    setInterval(timerSetting, Interval)
}
function gameOver(){
    clearInterval(startTimer)
    document.querySelector('.modal-cont').style.display = 'flex'
    setTimeout(() => {
        document.querySelector('.modal-cont .modal-box').style.opacity = '1'
    }, 500);
}
function Repeat(){
    window.location = 'index.html'
}
