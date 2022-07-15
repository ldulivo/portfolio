
/**
 * CHAT BOT
 */

 const menu = [
  '¡Informático desde muy pequeño!',
  '¡Mi primer programa con 12 años!',
  '¿Por qué programador?',
  '¿Por qué yo?',
  'Formulario de contactos'
]

const respuestas = {
  0: 'Mi vida cambió cuando con apenas 10 años mi padre trajo nuestro primer ordenador de escritorio.',
  1: 'Desde entonces comprendo algoritmos y lógica de programación de software. Uno de mis pasatiempos a esa edad fue programar con un lenguaje llamado QBasic.',
  2: 'Trabajar con servidores y redes informáticas me encanta, pero ¡la programación me apasiona!',
  3: 'Gracias a mi larga relación con la informática y mi formación universitaria, puedo adaptarme con facilidad a nuevas tecnologías.',
  4: ''
}

const respondido = []

const abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z",
"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z",
"0","1","2","3","4","5","6","7","8","9",];

const rootChatBot = document.getElementById('rootChatBot');

const div = document.createElement('div');
div.className = 'textChat'


const printMenu = () => {
  const ul = document.createElement('ul');
  ul.id = id();

  respondido.map( (item, index) => {
    const li = document.createElement('li')
    li.innerText = menu[item];
    li.id = id();
    li.onclick = () => printRespuesta(index, li.id, ul.id, item)
    ul.appendChild(li);
  })
  
  div.appendChild(ul)
}

const printRespuesta = (index, id, ulID, ulItem) => {
  if (ulItem !== menu.length-1) {
    const p = document.createElement('p');
    p.innerText = respuestas[ulItem];
    
    div.appendChild(p);
  
    quitarRespondido(index)
    
    document.getElementById(id).classList.add('li-selection')
    disableUl(ulID)
    chatBotMain.scrollTop = chatBotMain.scrollHeight
  
    setTimeout(() => {
      printMenu();
      chatBotMain.scrollTop = chatBotMain.scrollHeight
    }, 1000);
  } else {
    contactMeToForm('form')
  }
}

const id = () => {
  
  let id = '';
  for (let index = 0; index < 30; index++) {
    const i = Math.floor(Math.random() * 60);
    id += abc[i]
  }
  return id;
}

const disableUl = (ulID) => {
  const ul = document.getElementById(ulID);

  for (let index = 0; index < ul.childNodes.length; index++) {
    ul.childNodes[index].style.pointerEvents = "none";
  }
}

const quitarRespondido = (index) => {
  respondido.splice(index, 1)
}

/**
 * init
 */
const myBody = document.getElementById('myBody');
const menu_nav = document.getElementById('menu_nav');
const myList = menu_nav.querySelectorAll('li');
const myViewPort = document.querySelectorAll('div.myViewPort');
const myViewPortSection = document.querySelectorAll('section');
const viewPortHeight = window.innerHeight;
let changeViewPort = true;

/**
 * contactMe
 */
const contact_me = document.getElementById('contact_me');
contact_me.onclick = () => contactMeToForm('bot');
let contactMeFly = false;
const span = document.createElement('span')

let chatBotState = false // false = close

const chatBot = document.createElement('div');
const chatBotHeader = document.createElement('header');
const chatBotMain = document.createElement('main');
const chatBotNameBot = document.createElement('p')
const chatBotClose = document.createElement('p')
chatBotClose.onclick = () => contactMeToForm('close');

chatBot.id = 'rootChatBot';
chatBot.className = 'chat-bot--div';
chatBotHeader.id = 'chat_bot_header';
chatBotMain.id = 'chat_bot__main';
chatBotNameBot.innerText = 'Hola soy Simpá'
chatBotClose.id = 'chat_bot__close';
chatBotClose.innerText = 'x'


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

  setTimeout(() => {
    changeViewPort = true;
  }, 1000);

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

    contactMeToForm('del')
    console.log('Normal')
    
    setTimeout(() => {
      //chatBotState = false;
      contact_me.className = 'contact-me'
      contact_me.removeChild(span)
      setTimeout(() => {
        contact_me.innerText = 'Contáctame'
      }, 100);
    }, 100);
    

  }

  contactMeFly = !contactMeFly
}

// si contactMeFly = false, mueve el scroll a sección formulario.
// si es true, abre chatBot.
const contactMeToForm = (action = "") => {

  if (!contactMeFly) {

    document.getElementById('contactMeForm').scrollIntoView({
      behavior: "smooth"
    });

  } else {

    if (!chatBotState && action == 'bot') {
      contact_me.childNodes[0].appendChild(chatBot);
      chatBotMain.scrollTop = chatBotMain.scrollHeight
      chatBotState = true
    } else {
      setTimeout(() => {
        if (action == 'close') {
          chatBotState = false
          contact_me.childNodes[0].removeChild(chatBot);
        }
        
        if (action == 'form') {
          chatBotState = false
          document.getElementById('contactMeForm').scrollIntoView({
            behavior: "smooth"
          });
          contact_me.childNodes[0].removeChild(chatBot);
        }

        if (action == 'del' && contact_me.childNodes[0].childElementCount > 0) {
          contact_me.childNodes[0].removeChild(chatBot);
          chatBotState = false;
          console.log('del')
        }
      }, 100);

    }

  }
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

/**
 * OnLoad
 */

window.onload = function () {
  menu.map( (item,index) => {
    respondido.push(index)
  })
  printMenu()

  chatBotHeader.appendChild(chatBotNameBot);
  chatBotHeader.appendChild(chatBotClose);
  chatBotMain.appendChild(div);
  chatBot.appendChild(chatBotHeader);
  chatBot.appendChild(chatBotMain);
}