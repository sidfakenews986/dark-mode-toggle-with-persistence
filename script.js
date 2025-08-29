const toggleButton = document.getElementById('toggle-button');
const body = document.body;

// Überprüfen, ob der Benutzer eine Präferenz im lokalen Speicher hat und anwenden
const currentTheme = localStorage.getItem('theme') || 'light';
body.classList.add(currentTheme === 'dark' ? 'dark-mode' : 'light-mode');

toggleButton.addEventListener('click', () => {
    // Wechseln zwischen dunklem und hellem Modus
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        // Speichern der Benutzerpräferenz im lokalen Speicher
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        // Speichern der Benutzerpräferenz im lokalen Speicher
        localStorage.setItem('theme', 'dark');
    }
});

// Sicherstellen, dass der gespeicherte Zustand beim Laden der Seite angewendet wird
window.addEventListener('load', () => {
    const theme = localStorage.getItem('theme') || 'light';
    // Überprüfen, ob der aktuelle Zustand bereits festgelegt ist
    body.classList.toggle('dark-mode', theme === 'dark');
    body.classList.toggle('light-mode', theme === 'light');
});