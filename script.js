
  // select the button and the div
  const button1 = document.getElementById('myButton1');
  const title = document.getElementById('bandTitle');
  const role = document.getElementById('bandRole');
  const desc = document.getElementById('bandDesc');



  // define the function to change the HTML content
  function WolfSpeak() {
    title.innerHTML = '<h5>Wolfspeak</h5>'
    role.textContent = 'CURRENT LEAD GUITAR'
    desc.textContent = 'Alternative Metal/Horror Shock Rock Band from Asbury Park, NJ'

  }

  function DrugMirror() {
    title.innerHTML = '<h5>Drug Mirror</h5>'
    role.textContent = 'CURRENT LEAD GUITAR'
    desc.textContent = '2000s based Alternative Metal band from Asbury Park, NJ'

  }

  function Baquenne() {
    title.innerHTML = '<h5>Baquenne</h5>'
    role.textContent = 'CURRENT LEAD GUITAR'
    desc.textContent = 'Alternative Indie Rock Band from Asbury Park, NJ'

  }

  function ParlorMob() {
    title.innerHTML = '<h5>The Parlor Mob</h5>'
    role.textContent = 'PAST FEATURED LEAD GUITAR'
    desc.textContent = 'Alternative Hard Rock band from Asbury Park, NJ'

  }

  function TheColdSeas() {
    title.innerHTML = '<h5>The Cold Seas</h5>'
    role.textContent = 'PAST FEATURED LEAD GUITAR'
    desc.textContent = 'Alternative Indie Rock band from Asbury Park, NJ'

  }

  // add event listener to the button
  button1.addEventListener('click', WolfSpeak);
  button2.addEventListener('click', DrugMirror);
