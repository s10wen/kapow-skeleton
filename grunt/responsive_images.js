module.exports = {
  options: {
      engine: 'gm',
      sizes: '<%= imgSizes %>',
    },
  all: {
    options: {
      newFilesOnly: true
    },
    files: [{
      expand: true,
      cwd: '<%= siteInfo.assets_path %>/<%= siteInfo.img_dir %>',
      src: ['**/*.jpg'],
      custom_dest: '<%= siteInfo.assets_path %>/<%= siteInfo.img_dir %>/{%= name %}/'
    }]
  }
};
