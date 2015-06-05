module.exports = {
    options: {
      processors: [
        require('autoprefixer-core')({browsers: ['> 5%', 'last 2 versions' ]})
      ]
    },
    dist: {
      src: '<%= siteInfo.assets_path %>/<%= siteInfo.css_dir %>/<%= siteInfo.sass_file %>.css'
    }
  }
