var Score = 0;
var Stage = 0;
var Timer = 120;
var Interval = 1000;
randomWord = null
var Words = ['html', 'css', 'link', 'color', 'background-color', 'input', 'article',
 'div', 'section', 'main', 'transparent', 'opacity', 'body', 'aside', 'button', 'before', 
 'after', 'logo', 'footer', 'header', 'display', 'manuchari', 'turmanidze', 'head', 'title',
 'flex', 'grid', 'block', 'inline-block', 'table', 'style', 'href', 'margin', 'padding', 'top', 'left', 'right',
 'bottom', 'left', 'template', 'column', 'row', 'inline', 'border', 'radius', 'width', 'height', 'box', 'shadow',
 'outline', 'none', 'inherit', 'cover', 'contain', 'align', 'center', 'auto', 'font', 'size', 'animation', 'duration',
 'fixed', 'sticky', 'hidden', 'visibility', 'visible', 'delay', 'keyframe', 'media', 'screen', 'folder', 'direction',
 'cursor', 'pointer', 'transition', 'hover', 'transform', 'translate', 'scale', 'z-index'
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
    document.querySelector('.stage').innerHTML = "Score" + Score
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
