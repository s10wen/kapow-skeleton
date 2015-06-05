module.exports =  {
  all: [
    '<%= wpPlugins %>',
    '<%= wpInfo.wp_content %>/themes/<%= wpInfo.theme_name %>/**/*.php'
  ],
  plugins: ['<%= wpPlugins %>'],
  theme: ['<%= wpInfo.wp_content %>/themes/<%= wpInfo.theme_name %>/**/*.php']
};
