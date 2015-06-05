module.exports = {
  options: {
    dest: '<%= siteInfo.docs_path %>/sass'
  },
  dist: {
    src: '<%= siteInfo.assets_path %>/<%= siteInfo.sass_dir %>',
  }
};
