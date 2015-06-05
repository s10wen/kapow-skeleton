module.exports = {
  options: {
    separator: '\r\n\r\n',
  },
  header: {
    src: ['<%= concatHead %>'],
    dest: '<%= wpInfo.wp_content %>/themes/<%= wpInfo.theme_name %>/<%= wpInfo.js_dir %>/header.js',
    nonull: true
  },
  footer: {
    src: ['<%= concatFoot %>'],
    dest: '<%= wpInfo.wp_content %>/themes/<%= wpInfo.theme_name %>/<%= wpInfo.js_dir %>/footer.js',
    nonull: true
  }
};
