
const darkModeToggle = document.getElementById( 'dark-mode-toggle' );
const body = document.body;

// check local storage for dark mode
const darkMode = localStorage.getItem( 'dark-mode' );
if ( darkMode ) {
    body.classList.add( 'dark' );
    darkModeToggle.checked = true;
}

// check system preference for dark mode
const darkModeMediaQuery = window.matchMedia( '(prefers-color-scheme: dark)' );
if ( darkModeMediaQuery.matches ) {
    body.classList.add( 'dark' );
    darkModeToggle.checked = true;
}

darkModeToggle.addEventListener( 'change', () => {
    if ( darkModeToggle.checked ) {
        body.classList.add( 'dark' );
        localStorage.setItem( 'dark-mode', true );
    } else {
        body.classList.remove( 'dark' );
        localStorage.removeItem( 'dark-mode' );
    }
} );


