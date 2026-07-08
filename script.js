<<<<<<< HEAD
/*==========================================
    PORTFOLIO JAVASCRIPT
==========================================*/

// ===============================
// Mobile Menu
// ===============================

// Sample commment

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav-links a");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

    if(nav.classList.contains("active")){
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    }else{
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }

});

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

    });

});


// ===============================
// Typing Effect
// ===============================

const typingElement = document.getElementById("typing");

const words = [

    "Full Stack Developer",
    "UI/UX Designer",
    "Java Programmer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typingElement.textContent =
        currentWord.substring(0, charIndex);

        charIndex++;

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;

        }

    }else{

        typingElement.textContent =
        currentWord.substring(0, charIndex);

        charIndex--;

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 110);

}

typeEffect();


// ===============================
// Scroll To Top
// ===============================

const scrollBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if(window.scrollY > 350){

        scrollBtn.classList.add("show");

    }else{

        scrollBtn.classList.remove("show");

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});


// ===============================
// Reveal Sections on Scroll
// ===============================

const sections = document.querySelectorAll(".section");

function revealSections(){

    sections.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        if(top < window.innerHeight - 120){

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();


// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target =
        document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// ===============================
// Hero Image Floating Effect
// ===============================

const heroImage = document.querySelector(".hero-image");

window.addEventListener("mousemove",(e)=>{

    const x =
    (window.innerWidth/2 - e.pageX)/60;

    const y =
    (window.innerHeight/2 - e.pageY)/60;

    heroImage.style.transform =
    `translate(${x}px, ${y}px)`;

});
/*==========================================
    PART 3B
    Premium Interactions
==========================================*/

// ==========================================
// Active Navigation Link
// ==========================================

const allSections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    allSections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ==========================================
// Header Shadow While Scrolling
// ==========================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.style.background = "rgba(255,255,255,.92)";
        header.style.boxShadow = "0 10px 35px rgba(0,0,0,.08)";
        header.style.backdropFilter = "blur(18px)";

    }else{

        header.style.background = "rgba(255,255,255,.75)";
        header.style.boxShadow = "none";

    }

});


// ==========================================
// Skill Bar Animation
// ==========================================

const progressBars = document.querySelectorAll(".progress");

let skillsPlayed = false;

function animateSkills(){

    const skills = document.querySelector("#skills");

    if(!skills) return;

    const trigger = skills.getBoundingClientRect().top;

    if(trigger < window.innerHeight - 120 && !skillsPlayed){

        progressBars.forEach(bar=>{

            const width = bar.style.width || getComputedStyle(bar).width;

            bar.style.width = "0";

            setTimeout(()=>{

                if(bar.classList.contains("html")){

                    bar.style.width="95%";

                }

                if(bar.classList.contains("css")){

                    bar.style.width="90%";

                }

                if(bar.classList.contains("js")){

                    bar.style.width="85%";

                }

                if(bar.classList.contains("java")){

                    bar.style.width="88%";

                }

            },300);

        });

        skillsPlayed = true;

    }

}

window.addEventListener("scroll", animateSkills);

animateSkills();


// ==========================================
// Project Card Hover Tilt
// ==========================================

const cards = document.querySelectorAll(".project-card");

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = -(y - rect.height/2)/18;
        const rotateY = (x - rect.width/2)/18;

        card.style.transform =
        `perspective(900px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "perspective(900px) rotateX(0) rotateY(0)";

    });

});


// ==========================================
// EmailJS Initialization
// ==========================================

emailjs.init({
    publicKey: "zhi1PI4AxmS0x4fak"
});

// ==========================================
// Contact Form
// ==========================================

const form = document.getElementById("contact-form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.sendForm(
            "service_0avtsmn",
            "template_htnd1ne",
            this
        )
        .then(function () {

            alert("✅ Thank you! Your message has been sent successfully!");

            form.reset();

        })
        .catch(function (error) {

            console.error("EmailJS Error:", error);

            alert("❌ Failed to send the message.");

        });

    });

}


// ==========================================
// Button Ripple Effect
// ==========================================

const buttons = document.querySelectorAll("button,.btn");

buttons.forEach(button=>{

    button.addEventListener("click",function(e){

        const ripple = document.createElement("span");

        const size = Math.max(
            this.clientWidth,
            this.clientHeight
        );

        ripple.style.width = size + "px";
        ripple.style.height = size + "px";

        ripple.style.left =
            e.offsetX - size/2 + "px";

        ripple.style.top =
            e.offsetY - size/2 + "px";

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});


// ==========================================
// Console Greeting
// ==========================================

console.log(
"%cWelcome to Keed Nahaleel's Portfolio 🚀",
"color:#F59E0B;font-size:18px;font-weight:bold;"
);

console.log(
"%cBuilt with HTML, CSS & JavaScript",
"color:#555;font-size:14px;"
=======
/*==========================================
    PORTFOLIO JAVASCRIPT
==========================================*/

// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav-links a");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

    if(nav.classList.contains("active")){
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    }else{
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }

});

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

    });

});


// ===============================
// Typing Effect
// ===============================

const typingElement = document.getElementById("typing");

const words = [

    "Full Stack Developer",
    "UI/UX Designer",
    "Java Programmer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typingElement.textContent =
        currentWord.substring(0, charIndex);

        charIndex++;

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;

        }

    }else{

        typingElement.textContent =
        currentWord.substring(0, charIndex);

        charIndex--;

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 110);

}

typeEffect();


// ===============================
// Scroll To Top
// ===============================

const scrollBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if(window.scrollY > 350){

        scrollBtn.classList.add("show");

    }else{

        scrollBtn.classList.remove("show");

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});


// ===============================
// Reveal Sections on Scroll
// ===============================

const sections = document.querySelectorAll(".section");

function revealSections(){

    sections.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        if(top < window.innerHeight - 120){

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();


// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target =
        document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// ===============================
// Hero Image Floating Effect
// ===============================

const heroImage = document.querySelector(".hero-image");

window.addEventListener("mousemove",(e)=>{

    const x =
    (window.innerWidth/2 - e.pageX)/60;

    const y =
    (window.innerHeight/2 - e.pageY)/60;

    heroImage.style.transform =
    `translate(${x}px, ${y}px)`;

});
/*==========================================
    PART 3B
    Premium Interactions
==========================================*/

// ==========================================
// Active Navigation Link
// ==========================================

const allSections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    allSections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ==========================================
// Header Shadow While Scrolling
// ==========================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.style.background = "rgba(255,255,255,.92)";
        header.style.boxShadow = "0 10px 35px rgba(0,0,0,.08)";
        header.style.backdropFilter = "blur(18px)";

    }else{

        header.style.background = "rgba(255,255,255,.75)";
        header.style.boxShadow = "none";

    }

});


// ==========================================
// Skill Bar Animation
// ==========================================

const progressBars = document.querySelectorAll(".progress");

let skillsPlayed = false;

function animateSkills(){

    const skills = document.querySelector("#skills");

    if(!skills) return;

    const trigger = skills.getBoundingClientRect().top;

    if(trigger < window.innerHeight - 120 && !skillsPlayed){

        progressBars.forEach(bar=>{

            const width = bar.style.width || getComputedStyle(bar).width;

            bar.style.width = "0";

            setTimeout(()=>{

                if(bar.classList.contains("html")){

                    bar.style.width="95%";

                }

                if(bar.classList.contains("css")){

                    bar.style.width="90%";

                }

                if(bar.classList.contains("js")){

                    bar.style.width="85%";

                }

                if(bar.classList.contains("java")){

                    bar.style.width="88%";

                }

            },300);

        });

        skillsPlayed = true;

    }

}

window.addEventListener("scroll", animateSkills);

animateSkills();


// ==========================================
// Project Card Hover Tilt
// ==========================================

const cards = document.querySelectorAll(".project-card");

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = -(y - rect.height/2)/18;
        const rotateY = (x - rect.width/2)/18;

        card.style.transform =
        `perspective(900px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "perspective(900px) rotateX(0) rotateY(0)";

    });

});


// ==========================================
// EmailJS Initialization
// ==========================================

emailjs.init({
    publicKey: "zhi1PI4AxmS0x4fak"
});

// ==========================================
// Contact Form
// ==========================================

const form = document.getElementById("contact-form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.sendForm(
            "service_0avtsmn",
            "template_htnd1ne",
            this
        )
        .then(function () {

            alert("✅ Thank you! Your message has been sent successfully!");

            form.reset();

        })
        .catch(function (error) {

            console.error("EmailJS Error:", error);

            alert("❌ Failed to send the message.");

        });

    });

}


// ==========================================
// Button Ripple Effect
// ==========================================

const buttons = document.querySelectorAll("button,.btn");

buttons.forEach(button=>{

    button.addEventListener("click",function(e){

        const ripple = document.createElement("span");

        const size = Math.max(
            this.clientWidth,
            this.clientHeight
        );

        ripple.style.width = size + "px";
        ripple.style.height = size + "px";

        ripple.style.left =
            e.offsetX - size/2 + "px";

        ripple.style.top =
            e.offsetY - size/2 + "px";

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});


// ==========================================
// Console Greeting
// ==========================================

console.log(
"%cWelcome to Keed Nahaleel's Portfolio 🚀",
"color:#F59E0B;font-size:18px;font-weight:bold;"
);

console.log(
"%cBuilt with HTML, CSS & JavaScript",
"color:#555;font-size:14px;"
>>>>>>> e71b9bf4ef5a0b1f0277f33d82adb14c707d4931
);