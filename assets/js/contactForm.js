const contactForm_name = document.getElementById('contactForm_name');
const contactForm_email = document.getElementById('contactForm_email');
const contactForm_subject = document.getElementById('contactForm_subject');
const contactForm_msg = document.getElementById('contactForm_msg');

const contactForm_submit = document.getElementById('contactForm_submit');

const inputBox_name = document.getElementById('inputBox_name');
const inputBox_email = document.getElementById('inputBox_email');
const inputBox_subject = document.getElementById('inputBox_subject');
const inputBox_msg = document.getElementById('inputBox_msg');

contactForm_submit.onclick = () => checkForm(event);

const checkForm = (e) => {
  e.preventDefault()
  
  contactForm_name.value.trim()
  if ( !checkText(contactForm_name.value, inputBox_name) ) return;
  
  contactForm_email.value.trim()
  if ( !checkText(contactForm_email.value, inputBox_email) ) return;
  
  contactForm_subject.value.trim()
  if ( !checkText(contactForm_subject.value, inputBox_subject) ) return;
  
  contactForm_msg.value.trim()
  if ( !checkText(contactForm_msg.value, inputBox_msg) ) return;
  
  console.log('prevent?', e)
}

const checkText = (txt, id) => {
  if (txt.length >= 3) return true

  id.classList.add('shaking')

  setTimeout(() => {
    id.classList.remove('shaking')
    id.childNodes[1].focus()
  }, 1100);

  return false;
}
