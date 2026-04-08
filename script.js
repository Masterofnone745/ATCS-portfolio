const projectData = [
    {
        title: "Number Converter",
        desc: "A tool designed to convert numbers between formats like Binary, Hex, and Decimal.",
        image: "" 
    },
    {
        title: "Arduino Lights Out",
        desc: "A logic-based physical puzzle game using Arduino hardware. Toggles LEDs to 'off' using moves.",
        image: "" 
    },
    {
        title: "King Pin",
        desc: "A bowling team site for tracking statistics and schedules.",
        image: ""
    }
];

const slider = document.getElementById('project-slider');

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

    document.getElementById('showcase-title').innerText = data.title;
    document.getElementById('showcase-desc').innerText = data.desc;

    cards.forEach((card, i) => {
        if(i === 0) {
            card.style.borderColor = "#06b6d4";
            card.style.transform = "scale(1.02)";
            card.style.opacity = "1";
        } else {
            card.style.borderColor = "transparent";
            card.style.transform = "scale(0.95)";
            card.style.opacity = "0.5";
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
