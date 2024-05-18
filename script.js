gsap.registerPlugin(ScrollTrigger);

// Initial animations for the navigation and hero text
var tl = gsap.timeline();

tl.from(["#nav", "#herotext"], {
    opacity: 0,
    duration: 2,
    delay: 0.8
})
// Prevent scrolling until initial animations are complete
document.body.style.overflow = 'hidden';

// Animation for the moon image during scroll

// Animation for the navigation and hero text during scroll
// gsap.to("#nav, #herotext", {
//     scrollTrigger: {
//         trigger: "#sectionfirst",
//         start: "top top",
//         end: "bottom top",
//         scrub: true,
//     },
//     y: -800
// });
