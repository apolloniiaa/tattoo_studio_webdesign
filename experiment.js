// //button changer on position x / y

// const hikeExp = document.querySelector(".hike-exp");

// window.addEventListener("scroll", scrollReveal);

// function scrollReveal() {
//   //const hikePos = hikeExp.getBoundingClientRect();
//   const hikePos = hikeExp.getBoundingClientRect().top;
//   //console.log(hikePos);

//   //   const windowHeight = window.innerHeight;
//   const windowHeight = window.innerHeight / 1.8;
//   console.log(windowHeight);
//   if (hikePos < 0) {
//     hikeExp.style.color = "red";
//   } //•______• button on red
// }

// const slide = document.querySelector(".slide");

// let options = {
//   treshold: 0.5,
// };

// let observer = new IntersectionObserver(slideAnim, options);
// function slideAnim(entries) {
//   entries.forEach((entry) => {
//     console.log(entry);
//   });
// }
// observer.observe(slide);

const controller = new ScrollMagic.Controller();
const exploreScene = new ScrollMagic.Scene({
  triggerElement: ".hike-exp",
  triggerHook: 0.5,
})
  .addIndicators({ colorStart: "white", colorTrigger: "white" })
  .addTo(controller);
