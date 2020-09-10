const firstLevel = document.querySelector('.container')
const textDisplay = firstLevel.querySelector('.display') 
const button = document.querySelector('.hello')
let displayedMessage = textDisplay

button.addEventListener('click', e => {
    if (e.target.matches('button')) {
        let target = e.target
        let helloWorld = target.textContent + ', World!'
        console.log(typeof textDisplay)

        displayedMessage.textContent = helloWorld
    } else {
        displayedMessage = '';
    }
})

