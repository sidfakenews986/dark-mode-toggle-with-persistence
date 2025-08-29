const toggleButton = document.getElementById('toggle-button');
const body = document.body;

// Überprüfen, ob der Benutzer eine Präferenz im lokalen Speicher hat
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
} else {
    body.classList.add('light-mode');
}

toggleButton.addEventListener('click', () => {
    // Wechseln zwischen dunklem und hellem Modus
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Speichern der Benutzerpräferenz im lokalen Speicher
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Sicherstellen, dass der gespeicherte Zustand beim Laden der Seite angewendet wird
window.addEventListener('load', () => {
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
    }
});