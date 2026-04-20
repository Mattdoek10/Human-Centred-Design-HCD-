

const popoverGrid = document.querySelector('.popover-grid');
const popoverActions = document.querySelector('.popover-actions');

const origineleInhoud = popoverGrid.innerHTML;
const origineleActies = popoverActions.innerHTML;

function maakHeadingFocusbaar() {
    document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(function(heading) {
        if (!heading.hasAttribute('tabindex')) {
            heading.setAttribute('tabindex', '0');
        }
    });
}
// copilot: hoe zorg ik dat alle headings focusbaar zijn, zodat gebruikers er makkelijk naartoe kunnen tabben of er met sneltoetsen naartoe kunnen springen?
function maakElementFocusbaar(element) {
    if (element instanceof HTMLElement && !element.hasAttribute('tabindex')) {
        element.setAttribute('tabindex', '-1');
    }
}

maakHeadingFocusbaar();


let huidigFocusElement = null;
document.addEventListener('focusin', function(event) {

    if (!event.target.closest('.popover')) {
        huidigFocusElement = event.target;
    }
});

// positie opslaan

let opgeslagenPosities = [];

function gaNaarSectie(id) {
    let doel = document.getElementById(id);
    if (!doel) {
        return;
    }
    doel.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // copilot: hoe zorg ik dat het doel element focusbaar is, en dat de focus er ook echt op komt te staan?
    if (doel instanceof HTMLElement) {
        maakElementFocusbaar(doel);
        doel.focus();
    }
}

// bron; https://www.w3schools.com/js//js_switch.asp

document.addEventListener('keydown', function(event) {
    if (event.altKey) {
        switch (event.key) {
            case '1':
                event.preventDefault(); //voorkomt dat de browser zijn eigen standaardreactie op die toets uitvoert.
                gaNaarSectie('hoofdinhoud');
                return;
            case '2':
                event.preventDefault();
                gaNaarSectie('navigatie-menu');
                return;
            case '3':
                event.preventDefault();
                gaNaarSectie('zijbalk');
                return;
            case '4':
                event.preventDefault();
                gaNaarSectie('voetnoot');
                return;
        }
    }

    if (event.altKey && event.key === 's') {

        let elementOmOpTeSlaan = huidigFocusElement || document.activeElement;

        if (!elementOmOpTeSlaan || elementOmOpTeSlaan === document.body || elementOmOpTeSlaan === document.documentElement) {
            alert('Eerst ergens op klikken, naartoe tabben of een heading focusen!');
            return;
        }

        // met ai prompt; hoe geef ik een element een unieke id als dat nog niet heeft, zodat ik er later makkelijk naar te rugkeren?
        // Zorg dat het element focusbaar is als dat nog niet zo is
        maakElementFocusbaar(elementOmOpTeSlaan);

        // Maak een omschrijving van het element
        // Bijvoorbeeld: "BUTTON: Lees meer" of "H2: Accessibility in Context"
        let omschrijving = elementOmOpTeSlaan.tagName + ': ' + elementOmOpTeSlaan.innerText.trim();

        // Als het element geen id heeft, geef het een uniek id
        if (!elementOmOpTeSlaan.id) {
            elementOmOpTeSlaan.id = 'saved-position-' + Date.now();
        }

        // Voeg toe aan de lijst
        opgeslagenPosities.push({
            omschrijving: omschrijving,
            element: elementOmOpTeSlaan   // bewaar het echte element
        });

        alert('Opgeslagen: ' + omschrijving);
    }
});

function toonOpgeslagenWebsites() {

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

    // met copilot prompt; hoe koppel ik de "Ga erheen", en "verwijder" knoppen.
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

function koppelKnoppen() {
    let knop = document.getElementById('knopOpgeslagenWebsites');
    if (knop) {
        knop.addEventListener('click', toonOpgeslagenWebsites);
    }
}

koppelKnoppen();