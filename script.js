const projectData = [
    {
        title: "Number Converter",
        desc: "A tool designed to convert numbers between formats like Binary, Hex, and Decimal.",
        image: "" 
        desc: "A handy tool designed to convert numbers between various formats. Built with focus on precision and an intuitive UI.",
        repo: "https://github.com/Masterofnone745/Number-converter",
        web: "https://masterofnone745.github.io/Number-converter/",
        image: ""
    },
    {
        title: "Arduino Lights Out",
        desc: "A logic-based physical puzzle game using Arduino hardware. Toggles LEDs to 'off' using moves.",
        image: "" 
        desc: "A logic-based physical puzzle game using Arduino hardware. Players must solve the light patterns.",
        repo: "https://github.com/Masterofnone745/Lights-Out-Ardunio",
        web: "Lightsout.html",
        image: ""
    },
    {
        title: "King Pin",
        desc: "A bowling team site for tracking statistics and schedules.",
        desc: "A collaborative web project designed for the school bowling team to track stats and schedules.",
        repo: "https://github.com/Masterofnone745",
        web: "Kingpin.html",
        image: ""
    },
    {
        title: "CTF: Inspect Tool",
        desc: "Guide on using the Browser Inspect Tool for CTF challenges, featuring solutions for Getaway 2 and Close Clawed.",
        repo: "https://github.com/Masterofnone745",
        web: "writeup.html",
        image: ""
    }
];
@@ -20,49 +33,55 @@ const slider = document.getElementById('project-slider');

function shiftSlider(direction) {
    const cards = document.querySelectorAll('.project-card-link');
    
    // Reset animations
    cards.forEach(card => card.classList.remove('slide-next', 'slide-prev'));
    void slider.offsetWidth; // Trigger reflow

    if (direction === 1) {
        slider.appendChild(cards[0]);
        document.querySelectorAll('.project-card-link').forEach(c => c.classList.add('slide-next'));
    } else {
        slider.prepend(cards[cards.length - 1]);
        document.querySelectorAll('.project-card-link').forEach(c => c.classList.add('slide-prev'));
    }
    updateShowcase();
}

function updateShowcase() {
    const cards = document.querySelectorAll('.project-card-link');
    const activeId = cards[0].getAttribute('data-id');
    const data = projectData[activeId];
    if (cards.length === 0) return;

    // The middle card (index 1) is the one we showcase
    const activeCard = cards[1]; 
    const id = activeCard.getAttribute('data-id');
    const data = projectData[id];

    document.getElementById('showcase-title').innerText = data.title;
    document.getElementById('showcase-desc').innerText = data.desc;
    document.getElementById('showcase-repo-btn').href = data.repo;
    document.getElementById('showcase-web-btn').href = data.web;
    
    const img = document.getElementById('showcase-img');
    const placeholder = document.getElementById('showcase-placeholder');
    
    if (data.image && data.image !== "") {
        img.src = data.image;
        img.classList.remove('opacity-0');
        placeholder.classList.add('hidden');
    } else {
        img.classList.add('opacity-0');
        placeholder.classList.remove('hidden');
    }

    // Visual styling for the slider cards
    cards.forEach((card, i) => {
        if(i === 0) {
        if (i === 1) {
            card.style.borderColor = "#06b6d4";
            card.style.transform = "scale(1.02)";
            card.style.transform = "scale(1.1)";
            card.style.opacity = "1";
            card.style.background = "rgba(15, 23, 42, 0.9)";
        } else {
            card.style.borderColor = "transparent";
            card.style.transform = "scale(0.95)";
            card.style.opacity = "0.5";
            card.style.transform = "scale(0.85)";
            card.style.opacity = "0.4";
            card.style.background = "rgba(15, 23, 42, 0.5)";
        }
    });
}

// Initial Call
window.onload = updateShowcase;

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});
// Initial load
window.onload = () => updateShowcase();
