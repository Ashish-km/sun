document.addEventListener("DOMContentLoaded", function () {
  // Calculate introPage height
  var introPage = document.getElementById("introPage");
  var introPageHeight = introPage.scrollHeight; // Get the total height of the introPage content

  // Set introPage height to be fixed to its content height
  introPage.style.height = introPageHeight + "px";

  // Define GSAP timelines for introPage and page1 animations
  var introTimeline = gsap.timeline();
  var page1Timeline = gsap.timeline({ paused: true });

  // Animation for introPage elements
  introTimeline.from("#introPage #firstCard", {
    opacity: 0,
    duration: 0.5,
    delay: 0.5
  })
  .from("#subHead", {
    opacity: 0,
    duration: 0.6,
    scale: 0.1
  });

  // Animation for page1 elements
  page1Timeline.to("#introPage", {
    opacity: 0,
    duration: 0.5,
    display: "none"
  })
  .from("#page1", {
    opacity: 0,
    duration: 0.5,
    display: "block"
  })
  .from("#page1 #nav", {
    y: -40,
    opacity: 0,
    duration: 1
  })
  .from("#page1 h1", {
    y: -40,
    opacity: 0,
    stagger: 0.1,
    duration: 0.5
  });

  // Skip button functionality
  var skipButton = document.querySelector("#introPage .position-absolute");
  skipButton.addEventListener("click", function (event) {
    event.preventDefault();

    // Disable scroll during animation
    document.body.style.overflow = "hidden";

    // Hide introPage elements
    introTimeline.to("#introPage", {
      opacity: 0,
      duration: 0.5,
      display: "none"
    });

    // Show page1 elements with animations
    page1Timeline.play();

    // Set body overflow to auto after animations complete
    page1Timeline.eventCallback("onComplete", function () {
      document.body.style.overflow = "auto";
    });
  });

  // Start scroll-triggered animation for nav bar (optional, if needed)
  gsap.from("#page1 #nav", {
    y: -40,
    opacity: 0,
    duration: 1,
    delay: 1
  });

  // Additional animation for h1 elements in page1 (optional, if needed)
  gsap.from("#page1 h1", {
    y: -40,
    opacity: 0,
    stagger: 0.1,
    duration: 0.5
  });

});
