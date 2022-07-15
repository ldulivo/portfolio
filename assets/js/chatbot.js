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
    p.innerText = respuestas[index];
    
    div.appendChild(p);
  
    quitarRespondido(index)
    
    document.getElementById(id).classList.add('li-selection')
    disableUl(ulID)
  
    setTimeout(() => {
      printMenu();
    }, 1000);
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

window.onload = function () {
  menu.map( (item,index) => {
    respondido.push(index)
  })
  printMenu()
  rootChatBot.appendChild(div)
}