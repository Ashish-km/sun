gsap.registerPlugin(ScrollTrigger);

// Initial animations for the navigation and hero text
var tl = gsap.timeline();

tl.from(["#nav", "#herotext"], {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.5,
    stagger: 0.5
}).to("#moon-image", {
    opacity: 1,
    duration: 1,
    onComplete: function() {
        // Enable scrolling after the moon animation completes
        document.body.style.overflow = 'auto';
    }
});

// Prevent scrolling until initial animations are complete
document.body.style.overflow = 'hidden';

// Animation for the moon image during scroll

// Animation for the navigation and hero text during scroll
gsap.to("#nav, #herotext", {
    scrollTrigger: {
        trigger: "#sectionfirst",
        start: "top top",
        end: "bottom top",
        scrub: true,
    },
    y: -200
});
