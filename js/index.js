// Your code goes here

let nav = document.querySelectorAll("nav a");
nav[0].addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "purple";
});
nav[1].addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor ="green" ;
});
nav[2].addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "red";
});
nav[3].addEventListener("mouseover", (event) => {
 event.target.style.backgroundColor = "pink";
})
nav[0].addEventListener("mouseleave", (event) => {
    event.target.style.backgroundColor = "blue ";
  });
  nav[1].addEventListener("mouseleave", (event) => {
    event.target.style.backgroundColor = "blue";
  });
  nav[2].addEventListener("mouseleave", (event) => {
    event.target.style.backgroundColor = "blue";
  });
  nav[3].addEventListener("mouseleave",(event) => {
      event.target.style.backgroundColor = "blue";
  })

  let intro = document.querySelector(".intro h2");
intro.addEventListener("copy", (event) => {
  alert("Intro is copied");
});

let letsGo = document.querySelector(".img-content img");
letsGo.addEventListener("dblclick", (event) => {
  event.preventDefault();
  alert("WOOOOOOOOOOOO!!!");
});

let destination = document.querySelectorAll(".destination h4");
destination[0].addEventListener("mousemove", (event) => {
  event.target.style.color = "red";
});
destination[1].addEventListener("mousemove", (event) => {
  event.target.style.color = "red";
});
destination[2].addEventListener("mousemove", (event) => {
  event.target.style.color = "red";
});

let pickYour = document.querySelector(".content-destination h2");
pickYour.addEventListener("drag", (event) => {
  alert("Pick your destination is being dragged");
});

let paragraph = document.querySelector('p')
paragraph.addEventListener('click', (event) => {
    event.target.style.color = 'red';
});

let imgRemove = document.querySelector('.img-content img');

  imgRemove.addEventListener('dblclick', event)

  imgRemove.addEventListener('dblclick', event => {
     imgRemove.style.display = 'none';
 });

const foot = document.querySelector('footer');
 foot.addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = 'yellow';
});


const h2 = document.querySelectorAll('h2');
h2[0].addEventListener('click', (event) => event.target.style.color = 'pink');
h2[0].addEventListener('click', (event) => event.stopPropagation());

const keyDown = document.getElementsByClassName('.text-content');

 document.addEventListener('keydown', function() {
  console.log ('You pressed me.');
});

window.addEventListener('resize', function(){console.log('resize!')}, true);

var dragged;

/* events fired on the draggable target */
document.addEventListener("drag", function(event) {console.log('Drag!')}, false);