const textPopover = document.querySelector('.popover-grid');
const popoverActions = document.querySelector('.popover-actions');
const originalContent = textPopover.innerHTML, popoverOriginalActions = popoverActions.innerHTML;

function attachButtonListener() {
    const knopOpgeslagenWebsites = document.getElementById('knopOpgeslagenWebsites');
    if (knopOpgeslagenWebsites) {
        knopOpgeslagenWebsites.addEventListener('click', opgeslagenWebsites);
    }
}

function opgeslagenWebsites() {
    textPopover.innerHTML = "<section id=\"opgeslagenWebsites\"><h2>Opgeslagen Websites</h2><ul><li><a href=\"#\">https://example.com</a><button class=\"remove-button\">X</button></li><li><a href=\"#\">https://example2.com</a><button class=\"remove-button\">X</button></li></ul></section>";
    popoverActions.innerHTML = "<button id=\"backButton\">Terug</button>";
    const backButton = document.getElementById('backButton');
    
    backButton.addEventListener('click', () => {
        textPopover.innerHTML = originalContent;
        popoverActions.innerHTML = popoverOriginalActions;
        attachButtonListener(); 
    });

    const removeButtons = document.querySelectorAll('.popover-actions');
    removeButtons.remove();
}

attachButtonListener();