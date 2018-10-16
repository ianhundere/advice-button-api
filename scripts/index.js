const triggerElement = document.querySelector('[ data-trigger]');
const outputElement = document.querySelector('[ data-output]');
function getAdvice() {
    fetch('http://api.adviceslip.com/advice')
        .then(convertToJson)
        .then(extractAdviceText)
        .then(drawAdvice)
}

function convertToJson(r) {
    return r.json();
}

function extractAdviceText(adviceObj) {
    return adviceObj.slip.advice;
}
function drawAdvice(adviceText) {
    const newAdvice = document.createElement('li');
    newAdvice.textContent = adviceText;
    outputElement.appendChild(newAdvice);
}
function main() {
    triggerElement.addEventListener('click', getAdvice);
}
main();