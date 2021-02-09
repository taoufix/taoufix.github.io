const COLORS = [
    'white',
    'black',
    'gray',
    'red',
    'pink',
    'green',
    'blue',
    'deepskyblue',
    'yellow',
    'rebeccapurple',
    'saddlebrown',
    'darkorange',
  ];
  
  const body = document.getElementsByTagName('body')[0];
      
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  function changeColor() {
    var color;
    do {
      color = COLORS[getRandomInt(COLORS.length)];
    } while (color === body.style.backgroundColor);
    
    body.style.backgroundColor = color;
  }
  
  window.addEventListener('click', changeColor);
  window.addEventListener('touchstart', changeColor);

  changeColor();
