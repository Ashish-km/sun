// Hide the website content initially
document.getElementById('website-content').style.display = 'none';

// Show the website content after a delay
window.onload = function () {
  setTimeout(function() {
    document.querySelector('.loading-message').style.display = 'none';
    document.getElementById('website-content').style.display = 'block';
  }, 10000); // Delay for 2 seconds (adjust as needed)
};

// GSAP animation for the loading section
const lines = document.querySelectorAll("#loading > #firstCard > *");
gsap.set(lines, { opacity: 0 });

gsap.fromTo(lines, {
  opacity: 0,
  y: 20
}, 
{
  opacity: 1,
  y: 0,
  duration: 1,
  stagger: 0.5, // Stagger each line by 0.5 seconds
  delay: 2 // Add a delay of 2 seconds before starting the animation
});
