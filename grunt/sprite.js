module.exports = {
  all: {
    src: [
      '<%= siteInfo.assets_path %>/<%= siteInfo.img_dir %>/*.png',
      '!<%= siteInfo.assets_path %>/<%= siteInfo.img_dir %>/sprite.png'
    ],
    dest: '<%= siteInfo.assets_path %>/<%= siteInfo.img_dir %>/sprite.png',
    destCss: '<%= siteInfo.assets_path %>/<%= siteInfo.sass_dir %>/base/_sprites.scss'
  }
};
