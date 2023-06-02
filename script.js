
gsap.registerPlugin(ScrollTrigger);



var up = document.querySelectorAll(".page>h3");

up.forEach(function (elem) {
  gsap.to(elem, {
    opacity: 1,
    scrollTrigger: {
      trigger: elem,
      scroller: "body",
      start: "top 60%",
      end: "top 10%",
      // markers:true,
      scrub: true,
    },
  });
});

var down = document.querySelectorAll(".page>p");
down.forEach(function (elem) {
  gsap.to(elem, {
    opacity: 1,
    scrollTrigger: {
      trigger: elem,
      scroller: "body",
      start: "top 60%",
      end: "top 17%",
      // markers:true,
      scrub: true,
    },
  });
});

var main=document.querySelector(".main")
var button = document.querySelector(".loader>button");

var load = document.querySelector(".loader");

button.addEventListener("click", function () {
  load.style.audio;
  
  load.style.height="0%";
  load.style.top = "-120%";
  main.style.display="initial"

});


function playe() {
  var audioe = document.getElementById("play");
  audioe.play();
}

function playestop() {
  var audioe = document.getElementById("play");
  audioe.pause();
}

var letsgo = document.querySelector("#letsgo");

var letsstop = document.querySelector("#letsstop");

var sound = document.querySelector(".sound");
var flag = 0;
sound.addEventListener("click", function () {
  if (flag == 0) {
    letsgo.style.display = "none";
    letsstop.style.display = "flex";
    flag = 1;
  } else {
    letsgo.style.display = "flex";
    letsstop.style.display = "none";
    flag = 0;
  }
});




gsap.from(".zoom", {
  scale:0,
  opacity:0,

  scrollTrigger: {
    scroller:"body",
    start:"top 50%",
    end:"top 0%",
    trigger:".zoom",
    scrub:true,
     pin: true,
    // markers:true,
  },
});

function playAudio() {
  var audio = document.getElementById("audioPlayer");
  audio.play();
}
