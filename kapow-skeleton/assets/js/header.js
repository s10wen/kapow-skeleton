// Custom JS for the Header.
// ----------------------------------------------------------------------------

// Adds User Agent and Operating System
// details to the <html> tag.
// -------------------------------------
var b = document.documentElement;

b.setAttribute( 'data-useragent',  navigator.userAgent );
b.setAttribute( 'data-platform', navigator.platform );
b.className += ( ( !! ( 'ontouchstart' in window ) || !! ( 'onmsgesturechange' in window ) ) ? ' touch': '' );
