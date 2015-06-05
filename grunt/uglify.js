module.exports = {
  options: {
    banner: '/*! <%= package.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
    mangle: false
  },
  header: {
    files: {
        '<%= wpInfo.wp_content %>/themes/<%= wpInfo.theme_name %>/<%= wpInfo.js_dir %>/header.min.js': ['<%= concat.header.dest %>']
    }
  },
  footer: {
    files: {
        '<%= wpInfo.wp_content %>/themes/<%= wpInfo.theme_name %>/<%= wpInfo.js_dir %>/footer.min.js': ['<%= concat.footer.dest %>']
    }
  }
};
