// Customizer JS to facilitate live previews.
// ----------------------------------------------------------------------------

jQuery(function($) {

    // // Add a handler to enable live preview
    // // for a particular selector or group of
    // // selectors.
    // // -------------------------------------
    //  wp.customize('your_setting_id', function(value) {
    //    value.bind(function(newval) {
    //      $('.selector').html(newval);
    //    });
    //  });

    // Live preview for standard size logo.
	// -------------------------------------
    wp.customize('my_project_logo', function(value) {
        value.bind(function(newval) {
            var container = $('.site-logo');
            var img = $('.site-logo img');

            if (newval.length === 0) {
                // Remove.
                img.remove();
            } else if (img.length === 0 && newval.length > 0) {
                // Add.
                newimg = $('<img/>');
                newimg.attr('src', newval);
                container.prepend(newimg);
            } else {
                // Change.
                img.attr('src', newval);
            }
        });
    });
}(jQuery));
