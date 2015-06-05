module.exports = {
  scripts: {
    src: [
    '<%= wpInfo.wp_content %>/themes/<%= wpInfo.theme_name %>/<%= wpInfo.js_dir %>/*.js',
    '!<%= wpInfo.wp_content %>/themes/<%= wpInfo.theme_name %>/<%= wpInfo.js_dir %>/*.min.js'
    ]
  }
};
