// Guestbook
function submitGuestbook() {
    const name = document.getElementById('gbName').value.trim();
    const msg = document.getElementById('gbMessage').value.trim();
    if (!name || !msg) { alert('Please enter your name and a message.'); return; }

    const entry = document.createElement('div');
    entry.className = 'guestbook-entry';
    entry.innerHTML = `
        <div class="entry-author">${name}</div>
        <div class="entry-time">Just now</div>
        <div class="entry-message">"${msg}"</div>
    `;
    const container = document.getElementById('guestbookEntries');
    container.insertBefore(entry, container.firstChild);

    document.getElementById('gbName').value = '';
    document.getElementById('gbLastName').value = '';
    document.getElementById('gbMessage').value = '';
}

// Mobile menu
function toggleMenu() {
    const links = document.querySelector('.nav-links');
    links.classList.toggle('open');
}

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('open');
    });
});

// Active nav on scroll
window.addEventListener('scroll', () => {
    const links = document.querySelectorAll('.sub-nav a');
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) current = s.id; });
    links.forEach(l => {
        l.style.color = l.getAttribute('href') === '#' + current ? 'white' : '';
    });
});

 // Mute button
function toggleSound() {
    const video = document.getElementById('weddingVideo');
    const btn = document.getElementById('soundBtn');
    if (video.muted) {
        video.muted = false;
        btn.textContent = 'Mute';
    } else {
        video.muted = true;
        btn.textContent = 'Unmute';
    }
}