module.exports = {
    all: {
      src: [
        '<%= wpPlugins %>',
        '<%= wpInfo.wp_content %>/themes/<%= wpInfo.theme_name %>'],
      dest: '<%= siteInfo.docs_path %>/php'
    },
    theme: {
      src: ['<%= wpInfo.wp_content %>/themes/<%= wpInfo.theme_name %>'],
      dest: '<%= siteInfo.docs_path %>/php'
    },
    plugins: {
      src: ['<%= wpPlugins %>'],
      dest: '<%= siteInfo.docs_path %>/php'
    }
}
