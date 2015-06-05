module.exports = {
  images: {
    files: [{
      expand: true,
      cwd: '<%= siteInfo.assets_path %>/<%= siteInfo.img_dir %>',
      src: ['**/*.{png,jpg,svg,gif}'],
      dest: '<%= wpInfo.wp_content %>/themes/<%= wpInfo.theme_name %>/<%= wpInfo.img_dir %>'
    }]
  }
};
