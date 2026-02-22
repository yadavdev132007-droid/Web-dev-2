const eventForm = document.getElementById('eventForm');
const eventList = document.getElementById('eventList');

eventForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;

    createEventElement(title, date, category, description);

    eventForm.reset();
});

function createEventElement(title, date, category, desc) {
    const eventCard = document.createElement('div');
    eventCard.className = 'event-item';

    eventCard.innerHTML = `
        <button class="delete-btn" onclick="this.parentElement.remove()">×</button>
        <h3>${title}</h3>
        <p><strong>📅 ${date}</strong></p>
        <span style="background:#3f51b5; color:white; padding:2px 8px; border-radius:10px; font-size:12px;">${category}</span>
        <p>${desc}</p>
    `;

    eventList.appendChild(eventCard);
}

function clearAll() {
    eventList.innerHTML = '';
}

function addSample() {
    createEventElement(
        "Web Development Conference", 
        "2026-02-15", 
        "Conference", 
        "Annual conference on modern web technologies."
    );
}