module.exports = {
  options: {
    bundleExec: false, // Change to true once using bundler for gem installs
    colorizeOutput: true,
    compact: true,
    force: true,
    config: 'grunt/config/scsslint.yml',
    reporterOutput: '<%= siteInfo.reports_path %>/scsslint.xml',
  },
  src: [
    '<%= siteInfo.assets_path %>/<%= siteInfo.sass_dir %>/**/*.scss',
  ]
};
