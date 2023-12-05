
  // select the button and the div
  const button1 = document.getElementById('myButton1');
  const title = document.getElementById('bandTitle');
  const role = document.getElementById('bandRole');
  const desc = document.getElementById('bandDesc');



  // define the function to change the HTML content
  function WolfSpeak() {
    title.innerHTML = '<h5>Changed</h5>'
    role.textContent = 'CURRENT LEAD GUITAR'
    desc.textContent = 'Changed'

  }

  function DrugMirror() {
    title.innerHTML = '<h5>Changed</h5>'
    role.textContent = 'CURRENT LEAD GUITAR'
    desc.textContent = 'Changed'

  }

  // add event listener to the button
  button1.addEventListener('click', WolfSpeak);
  button2.addEventListener('click', DrugMirror);
