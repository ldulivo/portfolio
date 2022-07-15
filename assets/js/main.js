const myBody = document.getElementById('myBody');
const menu_nav = document.getElementById('menu_nav');
const myList = menu_nav.querySelectorAll('li');
const myViewPort = document.querySelectorAll('div.myViewPort');
const myViewPortSection = document.querySelectorAll('section');
const viewPortHeight = window.innerHeight;
let changeViewPort = true;

const contact_me = document.getElementById('contact_me');
let contactMeFly = false;
const span = document.createElement('span')


/**
 * Menu
 */
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
  if (i >= 0 && i < myViewPortSection.length - 2) {
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

// mueve el scroll a la sección seleccionada
const changeNav = (hLink) => {

  document.querySelector(hLink).scrollIntoView({
    behavior: "smooth"
  });

}

/**
 * ContactMe
 */
const contactMe = () => {
  if (!contactMeFly) {

    console.log('Burbuja')
    contact_me.className = 'contact-me contact-me-flying'
    contact_me.innerText = ''
    contact_me.appendChild(span)

  } else {

    console.log('Normal')
    contact_me.className = 'contact-me'
    contact_me.removeChild(span)
    setTimeout(() => {
      contact_me.innerText = 'Contáctame'
    }, 100);

  }

  contactMeFly = !contactMeFly
}

// si contactMeFly = true, mueve el scroll a sección formulario

/**
 * Detectar movimientos de scroll de pantalla
 */


const viewPortChange = () => {
  let returnColor = 0;
  for (let i = 1; i < myViewPortSection.length; i++) {
    if ( myViewPortSection[i].getBoundingClientRect().top < (viewPortHeight / 3) ) returnColor = i;
  }
  return returnColor;
}

// detecta el movimiento del scroll
window.onscroll = function () {
  let scroll = document.documentElement.scrollTop;

  if (changeViewPort) changeMenu( viewPortChange() - 1 )

  if (scroll > (viewPortHeight - viewPortHeight*.15) && !contactMeFly) contactMe();
  if (scroll < (viewPortHeight - viewPortHeight*.15) && contactMeFly) contactMe();

}
