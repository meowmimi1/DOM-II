// Your code goes here
// let nav = document.querySelectorAll(".nav-link");
// nav[0].addEventListener("mouseover", (event) => {
//     event.target.style.backgroundColor = "pink";
// });

let nav = document.querySelectorAll("nav");
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


const foot = document.querySelector('footer');
 foot.addEventListener('mouseover', function(event) {
    event.target.style.backgroundColor = 'yellow';
})
