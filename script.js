
  // select the button and the div
  const button1 = document.getElementById('myButton1');
  const button2 = document.getElementById('myButton2');
  const button3 = document.getElementById('myButton3');
  const button4 = document.getElementById('myButton4');
  const button5 = document.getElementById('myButton5');
  const title = document.getElementById('bandTitle');
  const role = document.getElementById('bandRole');
  const desc = document.getElementById('bandDesc');
  const spotify = document.getElementById('bandSpotify');



  // define the function to change the HTML content
  function WolfSpeak() {
    title.innerHTML = '<h2><b>Wolfspeak</b></h2>'
    role.textContent = 'CURRENT LEAD GUITAR'
    desc.textContent = 'Alternative Metal/Horror Shock Rock Band from Asbury Park, NJ'
    spotify.innerHTML = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/39KK7AKml3LzBHddR0dUTe?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'

  }

  function DrugMirror() {
    title.innerHTML = '<h2><b>Drug Mirror</b></h2>'
    role.textContent = 'CURRENT LEAD GUITAR'
    desc.textContent = '2000s based Alternative Metal Band from Asbury Park, NJ'
    spotify.innerHTML = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/5iBg5aogXqJ3CGTuAe95YR?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'

  }

  function Baquenne() {
    title.innerHTML = '<h2><b>Baquenne</b></h2>'
    role.textContent = 'CURRENT LEAD GUITAR'
    desc.textContent = 'Alternative Indie Rock Band from Asbury Park, NJ'
    spotify.innerHTML = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/4v6MmrK8XSmZBtN5wE5Jmm?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'

  }

  function ParlorMob() {
    title.innerHTML = '<h2><b>The Parlor Mob</b></h2>'
    role.textContent = 'PAST FEATURED LEAD GUITAR'
    desc.textContent = 'Alternative Hard Rock Band from Asbury Park, NJ'
    spotify.innerHTML = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/1U4d20oJAq9aLa2mhDGwVV?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'

  }

  function TheColdSeas() {
    title.innerHTML = '<h2><b>The Cold Seas</b></h2>'
    role.textContent = 'PAST FEATURED LEAD GUITAR'
    desc.textContent = 'Alternative Indie Rock Band from Asbury Park, NJ'
    spotify.innerHTML = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/539GtUPcWgRSPf57u4KosV?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'

  }

  // add event listener to the button
  button1.addEventListener('click', WolfSpeak);
  button2.addEventListener('click', DrugMirror);
  button3.addEventListener('click', Baquenne);
  button4.addEventListener('click', ParlorMob);
  button5.addEventListener('click', TheColdSeas);
