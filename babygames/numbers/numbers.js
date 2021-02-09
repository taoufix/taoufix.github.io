const body = document.getElementsByTagName('body')[0];

var val = 1;

function nextNumber() {
  val = val + 1;
  if (val > 10) {
    val = 1;
  }
  body.textContent = val;
}

window.addEventListener('touchstart', nextNumber);
