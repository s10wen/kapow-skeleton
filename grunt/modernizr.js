module.exports = {
  custom: {
    "uglify": false,
    "extra": {
      "shiv": true,
      "printshiv": true,
      "load": true,
      "mq": true,
      "cssclasses": true
    },
    "devFile": "bower_components/modernizr/modernizr.js",
    "outputFile": "<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/lib/modernizr-custom.js",
    "files": {
      "src": [
        '<%= siteInfo.assets_path %>/<%= siteInfo.sass_dir %>/**/*.scss',
        '<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/**/*.js',
        '!<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/lib/modernizr-custom.js'
      ]
    }
  }
};
