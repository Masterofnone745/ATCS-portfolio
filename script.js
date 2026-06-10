const projectData = [
    {
        title: "Number Converter",
        desc: "A handy tool designed to convert numbers between various formats. Built with focus on precision and an intuitive UI.",
        repo: "https://github.com/Masterofnone745/Number-converter",
        web: "https://masterofnone745.github.io/Number-converter/",
        image: "Num_Converter.png" 
    },
    {
        title: "Arduino Lights Out",
        desc: "A logic-based physical puzzle game using Arduino hardware. Players must solve the light patterns.",
        repo: "https://github.com/Masterofnone745/Lights-Out-Ardunio",
        web: "Lightsout.html",
        image: "LightsOut.png"
    },
    {
        title: "King Pin",
        desc: "A collaborative web project designed for the school bowling team to track stats and schedules.",
        repo: "https://github.com/Masterofnone745",
        web: "Kingpin.html",
        image: "Kingpin.png"
    },
    {
        title: "CTF: Inspect Tool",
        desc: "Guide on using the Browser Inspect Tool for CTF challenges, featuring solutions for Getaway 2 and Close Clawed.",
        repo: "https://github.com/Masterofnone745",
        web: "Ctf.html",
        image: "Ctf.png"
    },
    {
        title: "Fishing Game",
        desc: "An interactive catching game where players reel in different fish types and rack up high scores.",
        repo: "https://github.com/Masterofnone745", 
        web: "FishingGame.html",                    
        image: "FishingGame.png"                    
    }
];

let currentIndex = 0; // Tracks the currently featured project index

function shiftSlider(direction) {
    // direction can be 1 (next) or -1 (prev)
    currentIndex = (currentIndex + direction + projectData.length) % projectData.length;
    updateShowcase();
}

function updateShowcase() {
    const slider = document.getElementById('project-slider');
    const cards = document.querySelectorAll('.project-card-link');
    if (cards.length === 0) return;

    const data = projectData[currentIndex];

    // 1. Update the Main Showcase Banner elements
    const repoBtn = document.getElementById('showcase-repo-btn');
    const webBtn = document.getElementById('showcase-web-btn');

    document.getElementById('showcase-title').innerText = data.title;
    document.getElementById('showcase-desc').innerText = data.desc;
    
    repoBtn.href = data.repo;
    repoBtn.target = "_self"; 
    webBtn.href = data.web;
    webBtn.target = "_self";

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

    // 2. Center and style the active item inside the horizontal track
    cards.forEach((card) => {
        const id = parseInt(card.getAttribute('data-id'), 10);
        
        if (id === currentIndex) {
            // Highlighting the active card
            card.style.borderColor = "#06b6d4";
            card.style.transform = "scale(1.1)";
            card.style.opacity = "1";
            card.style.background = "rgba(15, 23, 42, 0.9)";
            // Smoothly center the active card within the container view
            card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } else {
            // Dimming inactive cards
            card.style.borderColor = "transparent";
            card.style.transform = "scale(0.85)";
            card.style.opacity = "0.4";
            card.style.background = "rgba(15, 23, 42, 0.5)";
        }
    });
}

// Initial load
window.onload = () => updateShowcase();
