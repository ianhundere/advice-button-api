const triggerElement = document.querySelector('[data-trigger]');
const outputElement = document.querySelector('[data-output]');

function getAdvice() {
    fetch('http://api.adviceslip.com/advice')
        .then(convertToJson)
        .then(extractAdviceText)
        .then(drawAdvice);
}
function convertToJson(r) {
    // console.log(r);
    return r.json();
}
function extractAdviceText(adviceObj) {
    return adviceObj.slip.advice;
}
function drawAdvice(adviceText) {
    const newAdvice = document.createElement('li');
    const newLine = document.createElement('hr');
    newAdvice.textContent = adviceText;
    outputElement.appendChild(newAdvice);
    outputElement.appendChild(newLine);
}

const triggerElementImg = document.querySelector('[data-triggerImg]');
const outputElementImg = document.querySelector('[data-outputImg]');

function getHero() {
    fetch('https://pixabay.com/api/?key=10424289-561cb90cf88816a7238a655ad&q=magic&image_type=photo')
      .then(convertToJson)
      .then(extractHeroImage)
      .then(drawHero);
}
function extractHeroImage(heroObj) {
    random = Math.floor(Math.random() * 30) + 1;  
    return heroObj.hits[random].userImageURL;
}
function drawHero(heroImg) {
    // console.log(heroImg);
  const newHero = document.createElement('img');
  newHero.src = heroImg;
  outputElementImg.appendChild(newHero);
}
function main() {
  triggerElement.addEventListener("click", getAdvice);
  triggerElementImg.addEventListener("click", getHero);
}
main();
