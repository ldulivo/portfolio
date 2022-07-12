const myBody = document.getElementById('myBody');
const menu_nav = document.getElementById('menu_nav');
const myList = menu_nav.querySelectorAll('li');
const myViewPort = document.querySelectorAll('div.myViewPort');
const myViewPortSection = document.querySelectorAll('section');
const viewPortHeight = window.innerHeight;
let changeViewPort = true;


for (let i = 0; i < myList.length; i++) {

  myList[i].onclick = function() {
    changeViewPort = false;
    changeMenu(i, true);
  }

}

const changeMenu = (i, change = false) => {
  let color;
  let hLink;

  for (let t = 0; t < myList.length; t++) {
    myList[t].className = 'list';
  }
  if (i >= 0) {
    myList[i].className = 'list active';
    color = myList[i].getAttribute('data-color');
    hLink = myList[i].getAttribute('data-link');
  } else {
    color = '#333'
  }
  myBody.style.background = color;
  
  if (change) {
    setTimeout(() => {
      changeNav(hLink);
    }, 500);
  }

  changeViewPort = true;

}

const changeNav = (hLink) => {

  document.querySelector(hLink).scrollIntoView({
    behavior: "smooth"
  });

}

/**
 * Detectar movimientos de scroll de pantalla
 */


const viewPortChange = () => {
  let returnColor = 0;
  for (let i = 1; i < myViewPortSection.length; i++) {
    if ( myViewPortSection[i].getBoundingClientRect().top < (viewPortHeight / 4) ) returnColor = i;
  }
  return returnColor;
}

// detecta el movimiento del scroll
window.onscroll = function () {
  if (changeViewPort) changeMenu( viewPortChange() - 1 )
}

