const myBody = document.getElementById('myBody');
const menu_nav = document.getElementById('menu_nav');
const myList = menu_nav.querySelectorAll('li');
const myViewPort = document.querySelectorAll('div.myViewPort');
const myViewPortSection = document.querySelectorAll('section');
const viewPortHeight = window.innerHeight;
let changeViewPort = true;

const contact_me = document.getElementById('contact_me');
let contactMeFly = false;

/**
 * SVG
 */
const SVG_NS = 'http://www.w3.org/2000/svg';
let svg = document.createElementNS(SVG_NS, 'svg');
svg.setAttributeNS(null, "viewBox", "0 0 1024 1024");
let trazado = document.createElementNS(SVG_NS, 'path');
trazado.setAttributeNS(null, "d", "M924.3 338.4a447.57 447.57 0 0 0-96.1-143.3 443.09 443.09 0 0 0-143-96.3A443.91 443.91 0 0 0 512 64h-2c-60.5.3-119 12.3-174.1 35.9a444.08 444.08 0 0 0-141.7 96.5 445 445 0 0 0-95 142.8A449.89 449.89 0 0 0 65 514.1c.3 69.4 16.9 138.3 47.9 199.9v152c0 25.4 20.6 46 45.9 46h151.8a447.72 447.72 0 0 0 199.5 48h2.1c59.8 0 117.7-11.6 172.3-34.3A443.2 443.2 0 0 0 827 830.5c41.2-40.9 73.6-88.7 96.3-142 23.5-55.2 35.5-113.9 35.8-174.5.2-60.9-11.6-120-34.8-175.6zM312.4 560c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.4 48-47.9 48zm199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.5 48-47.9 48zm199.6 0c-26.4 0-47.9-21.5-47.9-48s21.5-48 47.9-48 47.9 21.5 47.9 48-21.5 48-47.9 48z");
svg.appendChild(trazado)


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
 * ContactMe
 */
const contactMe = () => {
  if (!contactMeFly) {

    console.log('Burbuja')
    contact_me.className = 'contact-me contact-me-flying'
    contact_me.innerText = ''
    contact_me.appendChild(svg)

  } else {

    console.log('Normal')
    contact_me.className = 'contact-me'
    contact_me.removeChild(svg)
    setTimeout(() => {
      contact_me.innerText = 'Contáctame'
    }, 100);

  }

  contactMeFly = !contactMeFly
}

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
