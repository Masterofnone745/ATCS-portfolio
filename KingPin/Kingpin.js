/**
 * KingPin Portfolio Logic
 * Handles syntax highlighting and UI interactions
 */

document.addEventListener('DOMContentLoaded', (event) => {
    // 1. Initialize Highlight.js for the code blocks
    if (typeof hljs !== 'undefined') {
        hljs.highlightAll();
    }

    // 2. Simple Dashboard State Simulation (Example for the UI)
    const welcomeMsg = document.getElementById('welcome-msg');
    if (welcomeMsg) {
        const hours = new Date().getHours();
        let greeting = "Welcome";
        
        if (hours < 12) greeting = "Good Morning";
        else if (hours < 18) greeting = "Good Afternoon";
        else greeting = "Good Evening";
        
        welcomeMsg.innerText = `${greeting}, Guest User!`;
    }

    // 3. Log console message for "Bug Squashing" theme
    console.log("KingPin Dashboard Initialized. All systems nominal. 0 bugs detected.");
});

/**
 * Example function showing the logic used in the KingPin project
 * to resolve the 'duplicate render' bug mentioned in the portfolio.
 */
function clearAndPopulateList(containerId, items) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Clear existing content to prevent duplication
    container.innerHTML = '';

    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        container.appendChild(li);
    });
}