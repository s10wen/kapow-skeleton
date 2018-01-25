// Custom JS for the Footer.
// ----------------------------------------------------------------------------

// Document Ready.
// -------------------------------------
jQuery( function( $ ) {

    // Initialize Foundation JS if it has
    // been included in the document.
    // -------------------------------------
    if ( window.Foundation !== undefined ) {
        $( document ).foundation();
    }

	// Responsive Background Images.
	// -------------------------------------
	// responsiveBackgroundImages( '.js-bg-img' );

	// Window Resize & Orientation Change.
	// -------------------------------------
	var resizeTimer;
	$( window ).on( "resize orientationchange", function( event ) {
	
		clearTimeout( resizeTimer );

		resizeTimer = setTimeout( function() {

			// responsiveBackgroundImages( '.js-bg-img' );
		}, 100 );
	});

}( jQuery ));

// Window Load.
// -------------------------------------
jQuery( window ).load( function( $ ) {


}( jQuery ));
