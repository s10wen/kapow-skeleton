module.exports = {
  sass: {
    options: {
      // sourcemap: true,
      style: 'compressed'
    },
    files: [{
      expand: true,
      cwd: '<%= siteInfo.assets_path %>/<%= siteInfo.sass_dir %>',
      src: ['*.scss'],
      dest: '<%= siteInfo.assets_path %>/<%= siteInfo.css_dir %>',
      ext: '.css'
    }]
  }
};
