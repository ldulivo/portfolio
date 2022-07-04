const myBody = document.getElementById('myBody');
const menu_nav = document.getElementById('menu_nav');
const myList = menu_nav.querySelectorAll('li')

for (let i = 0; i < myList.length; i++) {

  myList[i].onclick = function() {
    for (let t = 0; t < myList.length; t++) {
      myList[t].className = 'list';
    }
    myList[i].className = 'list active';
    let color = myList[i].getAttribute('data-color');
    myBody.style.backgroundColor = color;
  }  

}