module.exports = {
  svg2png: {
    files: [
      {
        // Trailing slash required here, unlike in other tasks!
        cwd: '<%= siteInfo.assets_path %>/<%= siteInfo.img_dir %>/',
        src: ['**/*.svg'],
        dest: '<%= siteInfo.assets_path %>/<%= siteInfo.img_dir %>/'
      }
    ]
  }
};
