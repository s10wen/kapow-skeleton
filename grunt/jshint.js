module.exports = {
  options: {
    jshintrc: 'grunt/config/jshintrc.json',
    reporter: require('jshint-stylish'),
    reporterOutput: '<%= siteInfo.reports_path %>/jshint.txt',
    force: true
  },
    options: {
      reporterOutput: '<%= siteInfo.reports_path %>/jshint.txt'
    },
    src: [
    '<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/**/*.js',
    '!<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/lib/modernizr-custom.js'
    ]
};
