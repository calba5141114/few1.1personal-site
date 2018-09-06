let i = 0;
let txt = 'Web Manifestation And Design';
let speed = 120;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("brand-title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
