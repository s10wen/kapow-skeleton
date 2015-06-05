module.exports = {
  css: {
    options: {
      sourceMap: true
    },
    src: '<%= siteInfo.assets_path %>/<%= siteInfo.css_dir %>/<%= siteInfo.sass_file %>.css',
    dest: '<%= wpInfo.wp_content %>/themes/<%= wpInfo.theme_name %>/style.css'
  }
};
