module.exports = function(grunt) {
  require('load-grunt-config')(grunt, {
      init: true,
      jitGrunt: {
        jitGrunt: true,
        // These help Grunt play nicely with certain plugins
        staticMappings: {
          responsive_images: 'grunt-responsive-images',
          scsslint: 'grunt-scss-lint',
          sprite: "grunt-spritesmith"
        }
      },
      // -----------------------------------------------------------------------------
      // Anything you define within the main 'data' object can be accessed
      // both in the Gruntfile and in the individual task configurations e.g.
      // <%= wpInfo.theme_name %> , <%= siteInfo.assets_path %> etc.
      // -----------------------------------------------------------------------------
      data: {
        // -------------------------------------
        // Site specific settings
        // -------------------------------------
        siteInfo: {
          fancy_name: 'Avengers Initiative',       // The 'fancy' name for your project e.g. 'My First Website'
          docs_path: 'documentation',       // Documentation path relative to the project root - NO trailing slash
          reports_path: 'reports',          // Reports path relative to the project root - NO trailing slash
          assets_path: 'assets',            // Assets path relative to the project root - NO trailing slash
          img_dir: 'img',                   // Directory containing image assets
          js_dir: 'js',                     // Directory containing Javascript assets
          sass_dir: 'sass',                 // Directory containing Sass assets
          css_dir: 'css',                   // Directory containing CSS assets
          sass_file: 'site'                 // Name of your main Sass file and consequent CSS file
        },

        // -------------------------------------
        // WordPress specific settings
        // -------------------------------------
        wpInfo: {
          wp_content: 'htdocs/wp-content',  // Path to wp-content relative to the project root
          theme_name: 'avengers-int',         // WordPress theme directory name
          img_dir: 'img',                   // Directory containing theme images
          js_dir: 'js',                     // Directory containing theme Javascript
        },

        // -------------------------------------
        // Array of paths to WordPress plugin
        // folders/files that require linting
        // -------------------------------------
        wpPlugins: [
          // '<%= wpInfo.wp_content %>/plugins/my-plugin/**/*.php',
        ],

        // -------------------------------------
        // Array of paths to Javascript files
        // for inclusion in the <head>
        // -------------------------------------
        concatHead: [
          // '<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/header.js'
        ],

        // -------------------------------------
        // Array of paths to Javascript files
        // for inclusion in the footer
        // -------------------------------------
        concatFoot: [
          // '<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/footer.js'
        ],

        // -------------------------------------
        // Define image sizes for use with the
        // responsive images task
        // -------------------------------------
        imgSizes: [
          {
            name: 'x-small',
            width: 450
          },
          {
            name: 'x-small-retina',
            suffix: '_2x',
            width: 900
          },
          {
            name: 'small',
            width: 800
          },
          {
            name: 'small-retina',
            suffix: '_2x',
            width: 1600
          },
          {
            name: 'medium',
            width: 1000
          },
          {
            name: 'medium-retina',
            suffix: '_2x',
            width: 2000
          },
          {
            name: 'large',
            width: 1400
          },
          {
            name: 'large-retina',
            suffix: '_2x',
            width: 2800
          },
          {
            name: 'x-large',
            width: 1600
          },
          {
            name: 'x-large-retina',
            width: 3200
          }]
    }
  });
  // Provides a summary of the time tasks have taken
  require('time-grunt')(grunt);

  // Silences grunt-newer
  // https://github.com/tschaub/grunt-newer/issues/52#issuecomment-59397284
  var origLogHeader = grunt.log.header;
    grunt.log.header = function(msg) {
        if (!/newer(-postrun)?:/.test(msg)) {
            origLogHeader.apply(this, arguments);
        }
    };
};
