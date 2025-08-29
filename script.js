const toggleButton = document.getElementById('toggle-button');
const body = document.body;

// Überprüfen, ob der Benutzer eine Präferenz im lokalen Speicher hat und anwenden
const currentTheme = localStorage.getItem('theme') || 'light';
body.classList.add(currentTheme === 'dark' ? 'dark-mode' : 'light-mode');

toggleButton.addEventListener('click', () => {
    // Wechseln zwischen dunklem und hellem Modus
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Speichern der Benutzerpräferenz im lokalen Speicher
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Sicherstellen, dass der gespeicherte Zustand beim Laden der Seite angewendet wird
window.addEventListener('load', () => {
    const theme = localStorage.getItem('theme') || 'light';
    // Überprüfen, ob der aktuelle Zustand bereits festgelegt ist
    body.classList.toggle('dark-mode', theme === 'dark');
    body.classList.toggle('light-mode', theme === 'light');
});