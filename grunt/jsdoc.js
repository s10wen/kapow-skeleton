module.exports = {
  jsdoc: {
    src: ['<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/*.js'],
    dest: '<%= siteInfo.docs_path %>/js'
  }
};
