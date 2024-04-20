// const cursor = document.querySelector('.cursor');
// document.addEventListener('mousemove', (e) => {
//   cursor.style.left = e.pageX + "px";
//   cursor.style.top = e.pageY + "px";
// });

// This is cursormove effect ↖️

const myText = new SplitType("#my-text");

gsap.to(".char", {
  y: 0,
  stagger: 0.03,
  delay: 0.1,
  duration: 0.1,
});

// logo titles animation width GSAP 😬⚡

gsap.from(".logo", {
  scale: 0.3,
  duration: 1,
  ease: "elastic",
});

gsap.from(".title h1, p,button", {
  duration: 2,
  y: "-50%",
  ease: "elastic",
});

gsap.from(".links", {
  duration: 2,
  x: "50%",
  ease: "elastic",
});

// button animation width GSAP 🍵👀

const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  gsap.from(".btn", {
    scale: -2,
    duration: 1,
    ease: "elastic",
  });
});

// Links onCLICK animation width GSAP ❤️⚡

const homeGsap = document.querySelector(".home-gsap");

homeGsap.addEventListener("click", () => {
  gsap.from(".home-gsap", {
    scale: 1.5,
    duration: 1,
    ease: "elastic",
  });
});

const aboutGsap = document.querySelector(".about-gsap");

aboutGsap.addEventListener("click", () => {
  gsap.from(".about-gsap", {
    scale: 1.5,
    duration: 1,
    ease: "elastic",
  });
});

const directionsGsap = document.querySelector(".directions-gsap");

directionsGsap.addEventListener("click", () => {
  gsap.from(".directions-gsap", {
    scale: 1.5,
    duration: 1,
    ease: "elastic",
  });
});

const contactGsap = document.querySelector(".contact-gsap");

contactGsap.addEventListener("click", () => {
  gsap.from(".contact-gsap", {
    scale: 1.5,
    duration: 1,
    ease: "elastic",
  });
});

// Links onCLICK animation width GSAP ❤️⚡

gsap.from(".links a", {
  scale: 0.1,
  duration: 1,
  yoyo: true,
  ease: "elastic",
});

gsap.from(".social-media", {
  scale: 0.1,
  duration: 1,
  ease: "elastic",
});


// Function for Responsive Burger 📲🍵

const navAim = () => {
  const burger = document.querySelector(".burger");
  const links = document.querySelector(".links");

  burger.addEventListener("click", () => {
    links.classList.toggle("links-active");
    burger.classList.toggle("toggle");
    gsap.from(".burger", {
      scale: 1.5,
      duration: 1,
      ease: "elastic",
    });
  });
};
navAim();

gsap.from(".btn", {
  scale: 1.3,
  duration: 1,
  ease: "elastic",
  repeat: -1,
  yoyo: true,
});

gsap.from(".logo-img", {
  rotate: 20,
  scale: 1.2,
  duration: 3,
  ease: "elastic",
  repeat: -1,
  yoyo: true,
});