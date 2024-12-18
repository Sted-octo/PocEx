

function addCustomToolbarButton() {
    console.log("addCustomToolbarButton");
    const toolbar = document.getElementById('docs-toolbar');
    
    if (toolbar) {

    const customButton = document.createElement('div');
    
    customButton.classList.add('docs-toolbar-button', 'custom-extension-button');
    
    const buttonIcon = document.createElement('img');
    buttonIcon.src = chrome.runtime.getURL('icons/octo48.png');
    buttonIcon.style.width = '24px';
    buttonIcon.style.height = '24px';
    buttonIcon.style.cursor = 'pointer';
    
    customButton.title = 'PocEx Action';
    
    customButton.appendChild(buttonIcon);

    customButton.addEventListener('click', () => {
        console.log('Bouton PocEx action cliqué !');
    });

    toolbar.appendChild(customButton);
    console.log("Custom toolbar PocEx octo chargée");
    }
}
  
function initializeToolbarExtension() {
    console.log("initializeToolbarExtension");
    setTimeout(addCustomToolbarButton, 1000);
}

function onDocumentReady() {
    console.log("Extension PocEx octo chargée");
    initializeToolbarExtension();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onDocumentReady);
} else {
    onDocumentReady();
}
