// TODO Mouse Click animation
// TODO Mouse Right-Click animation

const root = document.querySelector('html')
const body = document.querySelector('body')

// Real cursor element
const cursor = document.createElement('div')
cursor.classList.add('cursor')
root.appendChild(cursor)

// Following extra cursor element
const follower = document.createElement('div');
follower.classList.add('cursor', 'cursor__follower');
root.appendChild(follower);


root.addEventListener('mousemove', (e) => {
  setPosition(follower, e)
  setPosition(cursor, e)
})

function setPosition(element, e) {
  element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
}


function getRandomColor() {
  color = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
  return color;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function getRandomX() {
  return getRandomInt(body.offsetWidth - 200) + 'px';
}
function getRandomY() {
  return getRandomInt(body.offsetHeight - 200) + 'px';
}

function keyPressed(e) {
  const letter = document.createElement('div');
  letter.classList.add('letter');
  letter.innerHTML = e.key.toUpperCase();
  letter.style.color = getRandomColor();
  letter.style.top = getRandomY();
  letter.style.left = getRandomX();
  body.appendChild(letter);
  setTimeout(() => body.removeChild(letter), 1000);
}
