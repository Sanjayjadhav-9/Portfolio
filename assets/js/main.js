/* MENU SHOW & HIDDEN */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/* MENU SHOW */
/* VALIDATE IF CONSTANT EXISTS */
if(navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/* MENU HIDDEN */
/* VALIDATE IF CONSTANT EXISTS */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll('.nav-link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));

/* CHANGE BACKGROUND HEADER */
const scrollHeader = () => {
  const header = document.getElementById('header');

  this.scrollY >= 20 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header')
};

window.addEventListener('scroll', scrollHeader)

/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        ".nav-menu a[href*=" + sectionId + "]"
      );

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionClass.classList.add('active-link');
    } else {
      sectionClass.classList.remove('active-link');
    }
  });
};

window.addEventListener('scroll', scrollActive);

/* SCROLL ABOUT ANIMATION */
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".text-gradient").forEach((span) => {
  gsap.to(span, {
    backgroundSize: "100% 100%",
    ease: "none",
    scrollTrigger: {
      trigger: span,
      start: "top bottom",
      end: "top center",
      scrub: true,
    },
  });
});

/* DARK LIGHT THEME */
window.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');

  function applyTheme(theme) {
    if(theme === 'light') {
      document.body.classList.add('light-theme');
      toggleBtn.classList.remove('ri-sun-line')
      toggleBtn.classList.add('ri-moon-line')
    } else {
      document.body.classList.remove("light-theme");
      toggleBtn.classList.add("ri-sun-line");
      toggleBtn.classList.remove("ri-moon-line");
    }

    localStorage.setItem('theme', theme);
  }

  const savedTheme = localStorage.getItem('theme') || 'dark';
  applyTheme(savedTheme);

  toggleBtn.addEventListener('click', () => {
    const isLight = document.body.classList.contains('light-theme');
    applyTheme(isLight ? 'dark' : 'light');
  })
})

/* MIXITUP FILTER PORTFOLIO */
var mixer = mixitup(".work-container", {
  selectors: {
    target: ".mix",
  },
  animation: {
    duration: 300,
  },
});

/* ACTIVE WORK */
const work_items = document.querySelectorAll(".work-item");

work_items.forEach((work_item) => {
  work_item.onclick = function () {
    // remove active from all work items
    work_items.forEach((link) => link.classList.remove("active-work"));
    // add active to clicked
    this.classList.add("active-work");
  };
});

/* EMAIL JS */
const contactForm = document.getElementById("contact-form");
const contactName = document.getElementById("contact-name");
const contactEmail = document.getElementById("contact-email");
const contactMessage = document.getElementById("contact-message");
const message = document.getElementById("message");

const sendEmail = (e) => {
  e.preventDefault();

  if (!contactName.value || !contactEmail.value || !contactMessage.value) {
    message.textContent = "Write all the input fields";
    setTimeout(() => {
      message.textContent = "";
    }, 3000);
    return;
  }
  emailjs
    .sendForm("service_3eysaxi", "template_kqjfsic", "#contact-form")
    .then((response) => {
      console.log("EmailJS success:", response);
      message.textContent = "Message sent successfully.";
      contactForm.reset();
      setTimeout(() => {
        message.textContent = "";
      }, 5000);
    })
    .catch((err) => {
      console.error("EmailJS error:", err);
      message.textContent = "Failed to send message";
      alert("OOPs! SOMETHING WENT WRONG...");
    });
};

contactForm.addEventListener("submit", sendEmail);

/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
});

sr.reveal(`.home-data`);
sr.reveal(`.home-img-wrapper`, {delay: 600});
sr.reveal(`.home-social`, {delay: 800});
sr.reveal(`.skills-frontend, .resume-left, .contact-group`, {origin: 'left'});
sr.reveal(`.skills-backend, .resume-right, .contact-form`, {origin: 'right'});
sr.reveal(`.services-card, .mix`, {interval: 100});