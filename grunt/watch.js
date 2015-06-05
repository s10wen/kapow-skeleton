module.exports = {
  options: {
    livereload: true,
    spawn: false
  },
  // phplint and phpdoc don't work with newer
  code_plugins: {
    files: ['<%= wpPlugins %>'],
    tasks: ['phplint:plugins', 'phpdoc:plugins', 'notify:code_plugins']
  },
  code_theme: {
    files: ['<%= wpInfo.wp_content %>/themes/<%= wpInfo.theme_name %>/**/*.php'],
    tasks: ['phplint:theme', 'phpdoc:theme', 'notify:code_theme']
  },
  // respimages doesn't require newer
  images_jpg: {
    files: ['<%= siteInfo.assets_path %>/<%= siteInfo.img_dir %>/**/*.jpg'],
    tasks: ['respimages', 'newer:imagemin', 'notify:images']
  },
  // svg2png doesn't work with newer
  images_other: {
    files: ['<%= siteInfo.assets_path %>/<%= siteInfo.img_dir %>/**/*.{png,svg,gif}'],
    tasks: ['svg2png', 'newer:imagemin', 'notify:images']
  },
  scripts: {
    files: [
      '<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/**/*.js',
      '!<%= siteInfo.assets_path %>/<%= siteInfo.js_dir %>/lib/modernizr-custom.js'
    ],
    tasks: ['jshint', 'modernizr', 'concat', 'uglify', 'clean', 'jsdoc', 'notify:scripts']
  },
  styles: {
    files: ['<%= siteInfo.assets_path %>/<%= siteInfo.sass_dir %>/**/*.scss'],
    tasks: ['scsslint', "spritesmith", 'sass', 'postcss', 'cssmin', 'sassdoc', 'notify:styles']
  }
};
