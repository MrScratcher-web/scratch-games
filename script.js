// =============================
// MrScratcher's Universe
// script.js
// =============================

// Loading Screen
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";

        setTimeout(() => {
            loader.style.display = "none";
        }, 800);

    }, 3000);

});

// Explore Button

const exploreBtn = document.getElementById("exploreBtn");

if(exploreBtn){

    exploreBtn.addEventListener("click", () => {

        document.getElementById("scratch").scrollIntoView({

            behavior:"smooth"

        });

    });

}

// Fade In Animation

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("fade-in");

    observer.observe(section);

});

// Floating Cards

document.querySelectorAll(".game-card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        const rotateX=((y-rect.height/2)/18);

        const rotateY=((rect.width/2-x)/18);

        card.style.transform=
        `perspective(900px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.03)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});

// Mouse Glow

const glow=document.createElement("div");

glow.style.position="fixed";
glow.style.width="350px";
glow.style.height="350px";
glow.style.borderRadius="50%";
glow.style.pointerEvents="none";
glow.style.background="radial-gradient(circle,#4da6ff33,transparent 70%)";
glow.style.zIndex="-1";
glow.style.transition="transform .08s linear";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

    glow.style.transform=
    `translate(${e.clientX-175}px,${e.clientY-175}px)`;

});

// Konami Code Easter Egg

const code=[
"ArrowUp",
"ArrowUp",
"ArrowDown",
"ArrowDown",
"ArrowLeft",
"ArrowRight",
"ArrowLeft",
"ArrowRight",
"b",
"a"
];

let entered=[];

document.addEventListener("keydown",(e)=>{

entered.push(e.key);

entered=entered.slice(-code.length);

if(JSON.stringify(entered)==JSON.stringify(code)){

alert("🎉 Secret Unlocked!");

document.body.style.filter="hue-rotate(90deg)";

}

});

// Floating Stars

for(let i=0;i<60;i++){

const star=document.createElement("div");

star.style.position="fixed";

star.style.width="3px";
star.style.height="3px";
star.style.background="white";

star.style.borderRadius="50%";

star.style.opacity=Math.random();

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.pointerEvents="none";

star.style.animation=
`floatStar ${5+Math.random()*10}s linear infinite`;

document.body.appendChild(star);

}

const style=document.createElement("style");

style.innerHTML=`

@keyframes floatStar{

0%{

transform:translateY(0px);

}

100%{

transform:translateY(-120vh);

}

}

`;

document.head.appendChild(style);

// Navbar Background

window.addEventListener("scroll",()=>{

const nav=document.querySelector("nav");

if(window.scrollY>80){

nav.style.background="rgba(5,10,30,.9)";

}else{

nav.style.background="rgba(10,10,20,.45)";

}

});

// Console Message

console.log("%cWelcome to MrScratcher's Universe!",
"font-size:22px;color:#4da6ff;font-weight:bold;");

console.log("Made with HTML, CSS & JavaScript");

// Footer Year

const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML=`© ${new Date().getFullYear()} MrScratcher`;

}
