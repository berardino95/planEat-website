// Configurazione centralizzata per il sito PlanEat
const PLANEAT_CONFIG = {
    contact: {
        email: 'planeatmobileapp@gmail.com'
    },
    app: {
        name: 'PlanEat',
        developer: 'Berardino Chiarello',
        year: '2025'
    }
};

// Funzione per aggiornare tutti gli elementi email nella pagina
document.addEventListener('DOMContentLoaded', function() {
    const email = PLANEAT_CONFIG.contact.email;

    // Aggiorna tutti gli elementi con attributo data-email
    const emailElements = document.querySelectorAll('[data-email]');
    emailElements.forEach(element => {
        // Se è un link, aggiorna href e testo
        if (element.tagName === 'A') {
            element.href = `mailto:${email}`;
            element.textContent = email;
        } else {
            // Altrimenti aggiorna solo il testo
            element.textContent = email;
        }
    });
});
