// To apply that CSS conditionally via JavaScript for screens 767px and below
const isMobile_767 = () => window.innerWidth <= 767;

// const banner_video = document.getElementById("bgVideo");
const playPauseBtn = document.getElementById("playPauseBtn");
// gsap.registerPlugin(DrawSVGPlugin)
// gsap.from(".draw-me", {duration:1,drawSVG: 0});
playPauseBtn.addEventListener("click", () => {
  playPauseBtn.classList.toggle("text_white");
});

// ================== Banner Section ==================
// function toggleAudio() {
//   if (banner_video.muted) {
//     banner_video.muted = false;
//   } else {
//     banner_video.muted = true;
//   }
// }
// gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.create({
//   trigger: ".banner_section",
//   start: "top center",
//   end: "bottom center",
//   onEnter: () => {
//     banner_video.muted = true; // Ensure it's muted
//     banner_video.play().catch((err) => console.log("Autoplay blocked:", err));
//   },
//   onLeave: () => banner_video.pause(),
//   onEnterBack: () => banner_video.play(),
//   onLeaveBack: () => banner_video.pause(),
//   markers: false,
// });

/*====================================
*     LOADER
======================================*/

loader();
// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelector('.btn').onclick = loader;
// });

function loader(_success) {
  var obj = document.querySelector(".preloader"),
    inner = document.querySelector(".preloader_inner"),
    page = document.querySelector(".page");
  obj.classList.add("show");
  page.classList.remove("show");
  var w = 0,
    t = setInterval(function () {
      w = w + 1;
      inner.textContent = w + "%";
      if (w === 100) {
        obj.classList.remove("show");
        page.classList.add("show");
        clearInterval(t);
        w = 0;
        if (_success) {
          return _success();
        }
        document.querySelectorAll(".banner_fadeInUp").forEach((el) => {
          // Match delay-Xs from classList (e.g., delay-1s => 1)
          const delayMatch = [...el.classList].find((cls) =>
            cls.startsWith("delay-")
          );
          const delay = delayMatch
          ? parseFloat(delayMatch.replace("delay-", "").replace("s", ""))
          : 0;

          gsap.fromTo(
            el,
            { opacity: 0, y: 80 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              delay: delay,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                toggleActions: "play none none reverse",
                // markers: true
              },
            }
          );
        });
      }
    }, 5);
}

// audio sound
$(".sound").on("click", function () {
  let soundFile = $(this).data("sound");
  let audio = new Audio(soundFile);
  audio.play();
});

// ================ Header ================== //

var scrolling;
var position = 0;
var delta = 5;
var hh = $("header").outerHeight();
var dh = $(document).height();
var wh = $(window).height();

$(window).scroll(function (event) {
  scrolling = true;
});

setInterval(function () {
  if (scrolling) {
    scrollFunction();
    scrolling = false;
  }
}, 250);

function scrollFunction() {
  var st = $(this).scrollTop();

  if (Math.abs(position - st) <= delta) return;

  if (st > position && st > hh) {
    $("header").removeClass("scroll-down").addClass("scroll-up");
  } else {
    if (st + wh < dh) {
      $("header").removeClass("scroll-up").addClass("scroll-down");
    }
  }

  if (st === 0) {
    $("header").addClass("pn_active");
  } else {
    $("header").removeClass("pn_active");
  }

  position = st;
}

// Payout Text section

// Set initial state: scale 0, opacity 0
let sm1 = gsap.matchMedia();

sm1.add("(min-width: 991px)", () => {
gsap.set(".payout_text_video", {
  scale: 0.3,
  opacity: 0.5,
});

// Animate on scroll: zoom in and fade in
gsap.to(".payout_text_video", {
  scale: 0,
  scrollTrigger: {
    trigger: ".payout_text",
    start: "center center",
    end: "+=1000",
    scrub: 0.5,
    pin: true,
    markers: false,
  },
  scale: 1,
  opacity: 1,
  ease: "power1.out",
});


// gsap.set(".payout_fade_up", {
//   //scale: 0.3,
//   // opacity: 0,
// });
// gsap.to(".payout_fade_up", {
//   // scale: 1,
//   // opacity: 1,
//   ease: "sine.out",
//   scrollTrigger: {
//     trigger: ".payment_workflow_section",
//     start: "bottom 110%",
//     end: "+=800",
//     //scrub: 0.5,
//     pin: true,
//     markers: false,
//   },
// });



gsap.set(".payments_text_video", {
  scale: 0.3,
  opacity: 0.5,
});
gsap.to(".payments_text_video", {
  scale: 0,
  scrollTrigger: {
    trigger: ".payments_text",
    start: "center center",
    end: "+=1000",
    scrub: 0.5,
    pin: true,
    markers: false,
  },
  scale: 1,
  opacity: 1,
  ease: "sine.out",
});


// gsap.set(".payments_text_videos", {
//   scale: 0.3,
//   opacity: 0.5,
// });
// gsap.to(".payments_text_videos", {
//   scale: 0,
//   scrollTrigger: {
//     trigger: ".payments_texts",
//     start: "center center",
//     end: "+=1000",
//     scrub: 0.5,
//     pin: true,
//     markers: false,
//   },
//   scale: 1.1,
//   opacity: 1,
//   ease: "sine.out",
// });

gsap.set(".support_sec_content", {
  scale: 0.3,
  opacity: 0.5,
});
gsap.to(".support_sec_content", {
  scale: 0,
  scrollTrigger: {
    trigger: ".support_section",
    start: "center center",
    end: "+=1000",
    scrub: 0.5,
    pin: true,
    markers: false,
  },
  scale: 1,
  opacity: 1,
  ease: "sine.out",
});
});
// products

$(document).ready(function () {
  $(".products").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    autoplay: false,
    autoplayTimeout: 3000,
    startPosition: 0,
    navText: [
      '<span class="custom-prev"><svg aria-hidden="true" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%"><path d="M9.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 12 9.293 6.707a1 1 0 0 1 0-1.414Z"></path></svg></span>',
      '<span class="custom-next"><svg aria-hidden="true" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%"><path d="M9.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 12 9.293 6.707a1 1 0 0 1 0-1.414Z"></path></svg></span>',
    ],
    // responsive: {
    //   0: { items: 1 },
    //   600: { items: 2 },
    //   1000: { items: 3, loop: false },
    // },
    responsive: {
      0: {
        items: 1,
        center: false,
        /* Shows 1 card on small screens */
      },
      991: {
        items: 2,
        center: false,
        /* Shows 1 card on small screens */
      },
      1280: {
        items: 3 /* Shows 2 cards on large screens */,
        center: false,
      },
      1440: {
        items: 3 /* Shows 3 cards on large screens */,
        center: false,
      },
    },
  });
});



sm1.add("(min-width: 1023px)", () => {
  // Animation for .fz_intergration (left to center)
  gsap.fromTo(
    ".pn_product1",
    {
      opacity: 0.5,
      scale: 0.7,
      rotateX: "10deg",
      x: "-10vw", // Start from left side (off-screen)
    },
    {
      opacity: 1,
      scale: 1,
      rotateX: "0deg",
      x: "0vw", // Move to original position (center)
      scrollTrigger: {
        trigger: ".pn_product1",
        start: "top bottom", // Starts when the top of the section reaches the bottom of the viewport
        end: "bottom bottom-=10%", // Ends when the section bottom is 10% before the bottom
        scrub: 1, // Syncs animation with scroll position
      },
    }
  );

  // Bottom to top scroll animation for .fz_api
  gsap.fromTo(
    ".pn_product2",
    {
      opacity: 0.5,
      scale: 0.7,
      rotateX: "10deg",
      y: "10vh", // Start 30% of viewport height below (off-screen)
    },
    {
      opacity: 1,
      scale: 1,
      rotateX: "0deg",
      y: "0", // Move to original position (center)
      scrollTrigger: {
        trigger: ".pn_product2",
        start: "top bottom", // Start when the bottom of the element reaches the bottom of the viewport
        end: "bottom bottom-=10%", // End when the top of the element reaches the top of the viewport
        scrub: 1, // Sync the animation with scroll position
      },
    }
  );

  // Animation for .fz_webhook (right to center)
  gsap.fromTo(
    ".pn_product3",
    {
      opacity: 0.5,
      scale: 0.7,
      rotateX: "10deg",
      x: "10vw", // Start from right side (off-screen)
    },
    {
      opacity: 1,
      scale: 1,
      rotateX: "0deg",
      x: "0vw", // Move to original position (center)
      scrollTrigger: {
        trigger: ".pn_product3",
        start: "top bottom", // Starts when the section top reaches the bottom of the viewport
        end: "bottom bottom-=10%", // Ends when the section bottom is 10% before the bottom
        scrub: 1, // Syncs animation with scroll position
      },
    }
  );

  // ============================= Secure Private Section =============================== //

  // gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

  // // Get the path and its length
  // const path = document.querySelector(".theLine");
  // const pathLength = path.getTotalLength();

  // // Setup the path for line draw animation
  // path.style.strokeDasharray = pathLength;
  // path.style.strokeDashoffset = pathLength;

  // // Pulse + text timeline
  // const pulses = gsap
  //   .timeline({
  //     defaults: {
  //       duration: 0.05,
  //       autoAlpha: 1,
  //       scale: 1,
  //       transformOrigin: "center",
  //       ease: "elastic(2.5, 1)",
  //     },
  //   })
  //   .to(".ball01, .text01", {}, 0.0)
  //   .to(".ball02, .text02", {}, 0.0)
  //   .to(".ball03, .text03", {}, 0.08)
  //   .to(".ball04, .text04", {}, 0.22)
  //   .to(".ball05, .text05", {}, 0.64)
  //   .fromTo(
  //     ".text01",
  //     { x: -50, autoAlpha: 0 },
  //     { x: -10, autoAlpha: 1, duration: 0.3, ease: "power2.out" },
  //     0.0
  //   )
  //   .fromTo(
  //     ".text02",
  //     { x: 350, autoAlpha: 0 },
  //     { x: 10, autoAlpha: 1, duration: 0.3, ease: "power2.out" },
  //     0.0
  //   )
  //   .fromTo(
  //     ".text03",
  //     { x: -350, autoAlpha: 0 },
  //     { x: -10, autoAlpha: 1, duration: 0.3, ease: "power2.out" },
  //     0.08
  //   )
  //   .fromTo(
  //     ".text04",
  //     { x: 350, autoAlpha: 0 },
  //     { x: 10, autoAlpha: 1, duration: 0.3, ease: "power2.out" },
  //     0.22
  //   )
  //   .fromTo(
  //     ".text05",
  //     { x: -350, autoAlpha: 0 },
  //     { x: -10, autoAlpha: 1, duration: 0.3, ease: "power2.out" },
  //     0.64
  //   );

  // // Main ScrollTrigger timeline
  // const main = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: "#svg-stage",
  //     start: "top center",
  //     end: "bottom center",
  //     scrub: true,
  //     // markers: true,
  //     onUpdate: (self) => {
  //       // console.log("progress:", self.progress.toFixed(2));
  //     },
  //   },
  // });

  // // Animate the line by updating strokeDashoffset from full length to 0
  // main.to(
  //   path,
  //   {
  //     strokeDashoffset: 0,
  //     duration: 1,
  //   },
  //   0
  // );

  // // Add pulse timeline
  // main.add(pulses, 0);
});

// ==================== support card ===================== ///
$(document).ready(function () {
  const cards = $(".support_card");
  let current = 0;
  let myInterval = null;

  function startInterval() {
    if (!myInterval) {
      myInterval = setInterval(resizeImage, 4000);
    }
  }

  function stopInterval() {
    if (myInterval) {
      clearInterval(myInterval);
      myInterval = null;
    }
  }

  function resizeImage() {
    if (window.innerWidth > 767) {
      cards.removeClass("active");
      $(cards[current]).addClass("active");
      current = (current + 1) % cards.length;
      startInterval(); // Ensure interval is running
    } else {
      cards.removeClass("active");
      stopInterval(); // Stop interval when small screen
    }
  }

  // Run once on load
  resizeImage();

  // Re-run on resize
  window.addEventListener("resize", resizeImage);
});

// footer

$(document).ready(function () {
  const toggleInput = $("#toggleInput");
  const emailInput = $("#emailInput");

  toggleInput.on("click", function (e) {
    e.stopPropagation();

    if (emailInput.is(":visible")) {
      // Hide with transform and fade
      emailInput
        .css({
          transform: isMobile_767() ? "translateY(0)" : "translateX(-110px)",
          opacity: 0,
        })
        .fadeOut(300);
    } else {
      // Show first, then animate
      emailInput
        .css({
          display: "block",
        })
        .animate({ opacity: 1 }, 0, function () {
          if (isMobile_767()) {
            $(this).css({
              transform: "translateY(-66px)",
              left: "-51px",
              opacity: 1,
              display: "block",
            });
          } else {
            $(this).css({
              transform: "translateX(-261px)",
            });
          }
        })
        .focus();
    }
  });

  $(document).on("click", function (e) {
    if (
      !$(e.target).closest("#toggleInput, #emailInput, .subscribe_btn").length
    ) {
      emailInput
        .css({
          transform: isMobile_767() ? "translateY(0)" : "translateX(-110px)",
          opacity: 0,
        })
        .fadeOut(300);
    }
  });
});

// testimonial section/

// $(document).ready(function () {
//   $(".testimonial").owlCarousel({
//     loop: true,
//     margin: 50,
//     nav: true,
//     dots: true,
//     autoplay: true,
//     autoplayTimeout: 3000,
//     autoplayHoverPause: true,
//     center: true,
//     navText: [
//       '<span class="custom-prev"><svg aria-hidden="true" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%"><path d="M9.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 12 9.293 6.707a1 1 0 0 1 0-1.414Z"></path></svg></span>',
//       '<span class="custom-next"><svg aria-hidden="true" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%"><path d="M9.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 12 9.293 6.707a1 1 0 0 1 0-1.414Z"></path></svg></span>',
//     ],
//     responsive: {
//       0: {
//         items: 1,
//         center: false,
//         /* Shows 1 card on small screens */
//       },
//       768: {
//         items: 2,
//         center: false,
//         /* Shows 2 cards on medium screens */
//       },
//       1024: {
//         items: 4 /* Shows 3 cards on large screens */,
//         // loop:false,
//         center: true,
//       },
//       1600: {
//         items: 4.4 /* Shows 3 cards on large screens */,
//         center: true,
//       },
//     },
//   });
// });

// =====payment-======card========

$(document).ready(function () {
  $(".payment_card").owlCarousel({
    loop: true,
    margin: 50,
    nav: true,
    dots: true,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    center: true,
    navText: [
      '<span class="custom-prev"><svg aria-hidden="true" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%"><path d="M9.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 12 9.293 6.707a1 1 0 0 1 0-1.414Z"></path></svg></span>',
      '<span class="custom-next"><svg aria-hidden="true" role="img" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100%" height="100%"><path d="M9.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L14.586 12 9.293 6.707a1 1 0 0 1 0-1.414Z"></path></svg></span>',
    ],
    responsive: {
      0: {
        items: 1,
        center: false,
        /* Shows 1 card on small screens */
      },
      768: {
        items: 2,
        center: false,
        /* Shows 2 cards on medium screens */
      },
      1024: {
        items: 3 /* Shows 3 cards on large screens */,
        // loop:false,
        center: true,
      },
    },
  });
});

// =============== Fade in ================= //

// sm1.add("(min-width: 1200px)", () => {
document.querySelectorAll(".fade-up").forEach((title) => {
  gsap.fromTo(
    title,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: {
        trigger: title,
        start: "top 90%",
        toggleActions: "play none none reverse",
        // markers: true
      },
    }
  );
});
// });

//  =================== Powering Payment Section ======================== //
sm1.add("(min-width: 991px)", () => {
  gsap.utils.toArray(".step").forEach((step, i) => {
    let stepNum = i + 1;

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: step,
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });

    tl.to(step, {
      opacity: 1,
      x: 0,
      duration: 0.2,
      ease: "power2.out",
    });

    const spantag = step.querySelector(
      `.spantag_one, .spantag_two, .spantag_three`
    );
    const text = step.querySelector(
      `.step_text_one, .step_text_two, .step_text_three`
    );

    if (spantag) {
      tl.to(
        spantag,
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "back.out(1.7)",
        },
        "+=0.2"
      );
    }

    if (text) {
      tl.to(
        text,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        },
        "+=0.2"
      );
    }
  });
});

$(document).ready(function () {
  $(".step_mouse").on("mouseenter", function () {
    var targetId = $(this).data("img");
    $(".mainImage").each(function () {
      if ($(this).attr("id") === targetId) {
        $(this).fadeIn(300);
      } else {
        $(this).hide();
      }
    });
  });

  // $(".step_mouse").on("mouseleave", function () {
  //   $(".mainImage").fadeOut(200); // Optional
  // });
});

// ========payment===process======card=======

document.addEventListener("DOMContentLoaded", function () {
  // Load the Lottie animation
  lottie.loadAnimation({
    container: document.getElementById("payment_process_card_img"), // HTML container for the animation
    renderer: "svg", // Render as SVG
    loop: true, // Animation will loop continuously
    autoplay: true, // Animation will play automatically
    path: "assets/json/Graph.json", // Path to the Lottie JSON file
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Load the Lottie animation
  lottie.loadAnimation({
    container: document.getElementById("payment_process_card_img2"), // HTML container for the animation
    renderer: "svg", // Render as SVG
    loop: true, // Animation will loop continuously
    autoplay: true, // Animation will play automatically
    path: "assets/json/app_menu_ai.json", // Path to the Lottie JSON file
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Load the Lottie animation
  lottie.loadAnimation({
    container: document.getElementById("payment_process_card_img3"), // HTML container for the animation
    renderer: "svg", // Render as SVG
    loop: true, // Animation will loop continuously
    autoplay: true, // Animation will play automatically
    path: "assets/json/data_transfer.json", // Path to the Lottie JSON file
  });
});

// =============== Reach_out ================ //

jQuery(document).ready(function ($) {
  $(".et-js-tilt").tilt({
    glare: true,
    maxGlare: 0.7,
    scale: 1,
    perspective: 1000,
  });

  $(".banner-js-tilt").tilt({
    glare: true,
    maxGlare: 10,
    scale: 1,
    perspective: 700,
  });
});

// ============== Cursor Effect =========== //

const cursor = document.querySelector("#cursor");
const cursorBorder = document.querySelector("#cursor-border");
const cursorPos = { x: 0, y: 0 };
const cursorBorderPos = { x: 0, y: 0 };

document.addEventListener("mousemove", (e) => {
  cursorPos.x = e.clientX;
  cursorPos.y = e.clientY;

  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

requestAnimationFrame(function loop() {
  const easting = 8;
  cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
  cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;

  cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
  requestAnimationFrame(loop);
});

document.querySelectorAll("[data-cursor]").forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    if (item.dataset.cursor === "pointer") {
      cursorBorder.style.backgroundColor = "rgba(255, 255, 255, .6)";
      cursorBorder.style.setProperty("--size", "30px");
    }
    if (item.dataset.cursor === "pointer2") {
      cursorBorder.style.backgroundColor = "white";
      cursorBorder.style.mixBlendMode = "difference";
      cursorBorder.style.setProperty("--size", "80px");
    }
  });
  item.addEventListener("mouseout", (e) => {
    cursorBorder.style.backgroundColor = "unset";
    cursorBorder.style.mixBlendMode = "unset";
    cursorBorder.style.setProperty("--size", "50px");
  });
});


// ======================= Next Gen Section ======================== //

gsap.registerPlugin(ScrollTrigger);

const video1 = document.querySelector("#video_workflow_1");
const video2 = document.querySelector("#video_workflow_2");
const video3 = document.querySelector("#video_workflow_3");

ScrollTrigger.create({
  trigger: ".payment_workflow_section",
  start: "top center",
  end: "bottom 20%",
  onEnter: () => {
    video1.play();
    setTimeout(() => video2.play(), 2000); // 2s delay
    setTimeout(() => video3.play(), 4000); // 4s delay
  },
  onLeave: () => {
    video1.currentTime = 0;
    video1.play();

    setTimeout(() => {
      video2.currentTime = 0;
      video2.play();
    }, 2000);

    setTimeout(() => {
      video3.currentTime = 0;
      video3.play();
    }, 4000);
  },
  onEnterBack: () => {
    video1.play();
    setTimeout(() => video2.play(), 2000);
    setTimeout(() => video3.play(), 4000);
  },
  onLeaveBack: () => {
    video1.currentTime = 0;
    video1.play();

    setTimeout(() => {
      video2.currentTime = 0;
      video2.play();
    }, 2000);

    setTimeout(() => {
      video3.currentTime = 0;
      video3.play();
    }, 4000);
  },
  markers: false
});
