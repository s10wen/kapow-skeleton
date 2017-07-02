jQuery( function( $ ) {

	'use strict';

	// Change the CSS background-image of an
	// element or collection of elements at
	// different breakpoints based on image
	// sources stored in data attributes
	// on the element(s).
	//
	// This function is bound to the window
	// and be used in the global scope.
	// -------------------------------------
	window.responsiveBackgroundImages = function( selector ) {

		// Abort if Modernizr is not available.
		// -------------------------------------
		if ( typeof Modernizr === 'undefined' ) {
			return;
		}

		// Abort if we have no selector.
		// -------------------------------------
		if ( ! selector ) {
			return;
		}

		// Change this to the appropriate CSS
		// selector and walk away; you're done!
		// -------------------------------------
		var $bg_img_el  = $( selector );

		// Iterate over all elements that have
		// the chosen selector.
		// -------------------------------------
		$bg_img_el.each( function( index, element ) {

			// Set-up our variables.
			// -------------------------------------
			var css_prop        = 'background-image',
				$img_target     = $(element),
				img_data        = [],
				img_default_src = '',
				// Gets the URL from the background-image property.
				img_current_src = $(element)
					.css( css_prop )
					.replace ( "url(", "" )
					.replace( ")", "")
					.replace( /\"/gi, "" );

			// Get all of the element attributes.
			// -------------------------------------
			$.each( this.attributes, function( index, element ) {

				// Get and store the default image.
				// -------------------------------------
				if ( this.name.indexOf( 'data-default-bg' ) !== -1 ) {

					img_default_src = this.value || '';
				}

				// Get and store the breakpoint and the
				// image src as an object in our array
				// of image data.
				// -------------------------------------
				if ( this.name.indexOf( 'data-bg-' ) !== -1 ) {

					// Regex to extract the breakpoint value
					// from the attribute name.
					// -------------------------------------
					var regex = /data-bg-(\d*)/i,
						match = this.name.match( regex );

					// Make sure we only add the the image
					// data if the URL is present and we
					// have a match.
					// -------------------------------------
					if (
						this.value !== '' &&
						typeof this.value !== 'undefined' &&
						typeof match[1] !== 'undefined'
						) {

						var data = {
							breakpoint: parseInt( match[1] ),
							src: this.value,
						};

						img_data.push( data );
					}
				}
			});

			// Iterate over our data object and
			// replace the background image with the
			// most appropriate version for the
			// current viewport size if required.
			// -------------------------------------
			for ( var i = 0; i < img_data.length; i++ ) {

				// Set-up our variables.
				// -------------------------------------
				var src     = img_data[ i ].src,
					next    = i+1,
					// Ensure the first breakpoint value is always zero.
					bp_min  = i === 0 ? 0 : img_data[ i ].breakpoint,
					// Ensure the last breakpoint value is always high.
					bp_max  = i === img_data.length - 1 ? 9999 : img_data[ next ].breakpoint -1;

				// Carry out a Modernzir media query
				// check for each breakpoint defined in
				// our array, and update the background
				// image CSS property for the element.
				// -------------------------------------
				if ( Modernizr.mq( 'screen and ( min-width: ' + bp_min + 'px ) and ( max-width: ' + bp_max + 'px )' ) ) {

					// Only update the background image if
					// the image for this breakpoint is not
					// the same as the existing image.
					// -------------------------------------
					if ( img_current_src !== src ) {

						$img_target.css( css_prop, 'url("' + src + '")' );
					}
				}
			}

			// Use the default image as a fallback
			// if this element still does not have a
			// background image set, for whatever
			// reason that may be.
			// -------------------------------------
			var bg_img = $img_target
						 .css( css_prop )
						 .replace ( "url(", "" )
						 .replace( ")", "")
						 .replace( /\"/gi, "" );

			if (
				bg_img === 'none'  &&
				img_default_src !== ''
				) {

				$img_target.css( css_prop, 'url("' + img_default_src + '")' );
			}
		});
	}

})( jQuery );
