// const textPopover = document.querySelector('.popover-grid');
// const popoverActions = document.querySelector('.popover-actions');
// const originalContent = textPopover.innerHTML, popoverOriginalActions = popoverActions.innerHTML;

// function attachButtonListener() {
//     const knopOpgeslagenWebsites = document.getElementById('knopOpgeslagenWebsites');
//     if (knopOpgeslagenWebsites) {
//         knopOpgeslagenWebsites.addEventListener('click', opgeslagenWebsites);
//     }
// }

// function opgeslagenWebsites() {
//     textPopover.innerHTML = "<section id=\"opgeslagenWebsites\"><h2>Opgeslagen Websites</h2><ul><li><a href=\"#\">https://example.com</a><button class=\"remove-button\">Verwijder</button></li><li><a href=\"#\">https://example2.com</a><button class=\"remove-button\">Verwijder</button></li></ul></section>";
//     popoverActions.innerHTML = "<button id=\"backButton\">Terug</button>";
//     const backButton = document.getElementById('backButton');
    
//     backButton.addEventListener('click', () => {
//         textPopover.innerHTML = originalContent;
//         popoverActions.innerHTML = popoverOriginalActions;
//         attachButtonListener(); 
//     });
// }

// const removeButtons = document.querySelectorAll('.remove-button');

// removeButtons.addEventListener('click', () => {
// removeButtons.remove();

// });

// attachButtonListener();

// ============================================
// STAP 1: Bewaar de originele HTML
// ============================================

const popoverGrid = document.querySelector('.popover-grid');
const popoverActions = document.querySelector('.popover-actions');

const origineleInhoud = popoverGrid.innerHTML;
const origineleActies = popoverActions.innerHTML;


// ============================================
// STAP 2: Bijhouden waar de gebruiker is
// ============================================

// Dit is de "geheugen" variabele — hier slaan we het element in op
let huidigFocusElement = null;

// Elke keer dat iemand ergens op klikt of naartoe tabt...
document.addEventListener('focusin', function(event) {

    // ...kijken we of het BUITEN de popover is
    if (!event.target.closest('.popover')) {

        // Zo ja: onthoud dat element
        huidigFocusElement = event.target;
    }
});


// ============================================
// STAP 3: Positie opslaan met Alt + S
// ============================================

// Lijst van opgeslagen posities
let opgeslagenPosities = [];

document.addEventListener('keydown', function(event) {

    // Controleer of Alt + S is ingedrukt
    if (event.altKey && event.key === 's') {

        // Is er wel een element gefocust?
        if (huidigFocusElement === null) {
            alert('Eerst ergens op klikken of naartoe tabben!');
            return;
        }

        // Maak een omschrijving van het element
        // Bijvoorbeeld: "BUTTON: Lees meer" of "A: Home"
        let omschrijving = huidigFocusElement.tagName + ': ' + huidigFocusElement.innerText.trim();

        // Voeg toe aan de lijst
        opgeslagenPosities.push({
            omschrijving: omschrijving,
            element: huidigFocusElement   // bewaar het echte element
        });

        alert('Opgeslagen: ' + omschrijving);
    }
});


// ============================================
// STAP 4: Toon de opgeslagen posities
// ============================================

function toonOpgeslagenWebsites() {

    // Bouw de lijst op als HTML
    // Als er niets is opgeslagen, toon een melding
    let lijstHTML = '';

    if (opgeslagenPosities.length === 0) {
        lijstHTML = '<li>Nog niets opgeslagen. Druk Alt+S op een element.</li>';
    } else {

        // Loop door elke opgeslagen positie
        for (let i = 0; i < opgeslagenPosities.length; i++) {
            let positie = opgeslagenPosities[i];

            lijstHTML += `
                <li>
                    <span>${positie.omschrijving}</span>
                    <button class="herstel-knop" data-index="${i}">Ga erheen</button>
                    <button class="verwijder-knop" data-index="${i}">Verwijder</button>
                </li>
            `;
        }
    }

    // Zet de nieuwe HTML in de popover
    popoverGrid.innerHTML = `
        <section>
            <h2>Opgeslagen posities</h2>
            <p>Druk <strong>Alt + S</strong> om de huidige positie op te slaan.</p>
            <ul>${lijstHTML}</ul>
        </section>
    `;

    popoverActions.innerHTML = `<button id="backButton">Terug</button>`;

    // Koppel de "Ga erheen" knoppen
    document.querySelectorAll('.herstel-knop').forEach(function(knop) {
        knop.addEventListener('click', function() {

            // Welke index heeft deze knop?
            let index = knop.dataset.index;
            let positie = opgeslagenPosities[index];

            // Zet de focus terug op dat element
            positie.element.focus();
            positie.element.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Koppel de "Verwijder" knoppen
    document.querySelectorAll('.verwijder-knop').forEach(function(knop) {
        knop.addEventListener('click', function() {

            let index = knop.dataset.index;

            // Verwijder uit de lijst
            opgeslagenPosities.splice(index, 1);

            // Herlaad de weergave
            toonOpgeslagenWebsites();
        });
    });

    // Koppel de terug knop
    document.getElementById('backButton').addEventListener('click', function() {
        popoverGrid.innerHTML = origineleInhoud;
        popoverActions.innerHTML = origineleActies;
        koppelKnoppen();
    });
}


// ============================================
// STAP 5: Koppel de beginknop
// ============================================

function koppelKnoppen() {
    let knop = document.getElementById('knopOpgeslagenWebsites');
    if (knop) {
        knop.addEventListener('click', toonOpgeslagenWebsites);
    }
}

koppelKnoppen();