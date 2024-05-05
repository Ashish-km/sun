var h4all = document.querySelectorAll("#nav h4");
gsap.to("#nav", {

  duration: 0.5,
  height: "110px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

const lines = document.querySelectorAll("#page1 > #firstCard > *");
gsap.set(lines, { opacity: 0 });

gsap.fromTo(lines, {
  opacity: 0,
  y: 20
}, {
  opacity: 1,
  y: 0,
  duration: 1,
  stagger: 0.5 // Stagger each line by 0.5 seconds
});