
// Yeoman generator for Kapow!
// ---------------------------------------------------------------------------

'use strict';
// Dependencies
var chalk  = require('chalk'),
    wiring = require('html-wiring'),
    yeoman = require('yeoman-generator'),
    yosay  = require('yosay');

// Chalk colours
var highlightColour = chalk.yellow,
    successColour   = chalk.green,
    alertColour     = chalk.red;

module.exports = yeoman.generators.Base.extend({

  // Init tasks
  // -------------------------------------
  initializing: function () {
    this.pkg = require('../package.json');
  },

  // Ask our questions & save the answers
  // -------------------------------------
  prompting: function () {
    var done = this.async();

    // Greet the user
    this.log(yosay(highlightColour('## Greetings Citizen! ##') + '\r' + 'I hear you\'re in need of some help? Tell me more!'));

    // Utility function to replace spaces
    var replaceSpaces = function (input) {
      input = input.replace(/( )/gm, '-');
      return input;
    };

    // Define our questions
    var questions = [
      {
        type: 'input',
        name: 'projProperName',
        message: highlightColour('(1/10)') + ' What is the "proper" name of this project? ' + highlightColour('e.g. Gotham Enterprises') + '\n',
        default: 'My Project'
      },
      {
        type: 'input',
        name: 'projSlugName',
        message: highlightColour('(2/10)') + ' What is the "slug" name of this project? ' + highlightColour('e.g. gotham-ent (no spaces!)') + '\n',
        default: 'my-project',
        filter: function(input) {
          var done = this.async();
          input = replaceSpaces(input);
          done(input);
        }
      },
      {
        type: 'input',
        name: 'projAuthor',
        message: highlightColour('(3/10)') + ' Who is the author of this project? ' + highlightColour('e.g. Bruce Wayne <bruce@gotham-ent.com>') + '\n',
        default: 'Author Name'
      },
      {
        type: 'list',
        name: 'projFramework',
        message: highlightColour('(4/10)') + ' Which of these frameworks would you like to use?'  + '\n',
        choices: [
          {
            name: 'Bootstrap',
            value: 'bootstrap'
          },
          {
            name: 'Foundation',
            value: 'bourbon'
          },
          {
            name: 'Bourbon + Neat',
            value: 'bourbon'
          },
          {
            name: 'None',
            value: 'none'
          }
        ]
      },
      {
        type: 'checkbox',
        name: 'projExtras',
        message: highlightColour('(5/10)') + ' Which of these extras would you like to include?' + '\n',
        choices: [
          {
            name: 'Font Awesome',
            value: 'fontawesome'
          },
          {
            name: 'Masonry (+ Images Loaded)',
            value: 'masonry'
          },
          {
            name: 'jQuery UI',
            value: 'jqueryui'
          }
        ]
      },
      {
        type: 'checkbox',
        name: 'projFeatures',
        message: highlightColour('(6/10)') + ' Which of these features would you like to include?' + '\n',
        choices: [
          {
            name: 'Generate PNG files from SVG assets',
            value: 'svg2png'
          },
          {
            name: 'Generate responsive images from JPG assets',
            value: 'masonry'
          }
        ]
      },
      {
        type: 'checkbox',
        name: 'projDocs',
        message: highlightColour('(7/10)') + ' What documentation to you wish to generate?' + '\n',
        choices: [
          {
            name: 'JSDoc',
            value: 'js'
          },
          {
            name: 'phpDocumentor',
            value: 'php'
          },
          {
            name: 'SassDoc',
            value: 'sass'
          }
        ]
      },
      {
        type: 'input',
        name: 'projDBName',
        message: highlightColour('(8/10)') + ' What should the WordPress database be called? '  + highlightColour('e.g. gotham_ent (no spaces!)') + '\n',
        default: "my-project-db",
        filter: function(input) {
          var done = this.async();
          input = replaceSpaces(input);
          done(input);
        }
      },
      {
        type: 'input',
        name: 'projAdminEmail',
        message: highlightColour('(9/10)') + ' What should the WordPress admin email address be?' + '\n',
        default: "hello@my-project.com"
      },
      {
        type: 'input',
        name: 'projDomain',
        message: highlightColour('(10/10)') + ' What should the Vagrant \'.dev\' domain be? ' + highlightColour('e.g. gotham-ent (no suffix!)') + '\n',
        default: "my-project",
        filter: function(input) {
          var done = this.async();
          input = replaceSpaces(input);
          done(input);
        }
      },
    ];

    // Ask our questions and save the answers
    this.prompt(questions, function (answers) {

      // Map the answers to variables of the same name
      this.projProperName = answers.projProperName;
      this.projSlugName   = answers.projSlugName;
      this.projAuthor     = answers.projAuthor;
      this.projFramework  = answers.projFramework
      this.projExtras     = answers.projExtras;
      this.projDocs       = answers.projDocs;
      this.projFeatures   = answers.projFeatures;
      this.projDBName     = answers.projDBName;
      this.projAdminEmail = answers.projAdminEmail;
      this.projDomain     = answers.projDomain;

      // Congratulate the user
      this.log(yosay(highlightColour('## Well done Citizen! ##') + '\r' + 'You will now witness the almighty power of ' + alertColour('Kapow!')));

      // Finish up
      done();
    }.bind(this));

  },

  // Pull down Kapow! repositories
  // -------------------------------------
  // Having to use bulkDirectory as using
  // directory gives permission errors!
  // -------------------------------------
  repos: function () {
    var shortName = this.projSlugName;
    var repoErr   = false;

    console.log(highlightColour('Pulling down the Kapow! repositories'));

    // Grunt
    this.remote('mkdo', 'kapow-grunt', 'master', function(err, remote) {
      if (!err) {
        remote.bulkDirectory('grunt', 'grunt');
      } else {
        console.log('\n');
        console.log(alertColour('Failed to pull down Kapow! Grunt'));
        repoErr = true;
      }
    });

    // Sass
    this.remote('mkdo', 'kapow-sass', 'master', function(err, remote) {
      if (!err) {
        remote.bulkDirectory('.', 'assets/sass');
      } else {
        console.log('\n');
        console.log(alertColour('Failed to pull down Kapow! Sass'));
        repoErr = true;
      }
    });

    // Theme
    this.remote('mkdo', 'kapow-theme', 'master', function(err, remote) {
      if (!err) {
        remote.bulkDirectory('.', 'htdocs/wp-content/themes/' + shortName);
      } else {
        console.log('\n');
        console.log(alertColour('Failed to pull down Kapow! Theme'));
        repoErr = true;
      }
    });

    if (!repoErr) {
      console.log(successColour('Success!'));
      console.log('\n');
    } else {
      console.log(alertColour('One or more repositories failed to download!'));
    }
  },

  // Enable desired front-end framework
  // -------------------------------------
  frameworks: function () {

  },

  // Enables desired front-end extras
  // -------------------------------------
  extras: function () {

  },

  // Enables desired workflow features
  // -------------------------------------
  features: function () {

  },

  // Enables desired documentation systems
  // -------------------------------------
  docs: function () {

  },

  // Update strings in project files
  // -------------------------------------
  strings: function () {

    console.log(highlightColour('Updating project files'));

    var properRegex = /(My Project)/mg,
        shortRegex  = /(my-project)/mg,
        authorRegex = /(Author Name)/mg,
        dbnameRegex = /(my-project-db)/mg,
        emailRegex  = /(hello@my-project.com)/mg,
        domainRegex = /(my-project.dev)/mg;

    // assets/sass/site.scss
    // var sitescssPath = "assets/sass/site.scss",
    //     sitescssFile = wiring.readFileAsString(sitescssPath);

    // sitescssFile = sitescssFile.replace(properRegex, this.projProperName);
    // sitescssFile = sitescssFile.replace(authorRegex, this.projSlugName);
    // sitescssFile = sitescssFile.replace(shortRegex,  this.projSlugName);

    // wiring.writeFileFromString(sitescssFile, sitescssPath);

    // .gitignore
    var gitignorePath = ".gitignore",
        gitignoreFile = wiring.readFileAsString(gitignorePath);

    gitignoreFile = gitignoreFile.replace(properRegex, this.projProperName);
    gitignoreFile = gitignoreFile.replace(shortRegex,  this.projSlugName);

    wiring.writeFileFromString(gitignoreFile, gitignorePath);

    // bower.json
    var bowerPath = "bower.json",
        bowerFile = wiring.readFileAsString(bowerPath);

    bowerFile = bowerFile.replace(shortRegex,  this.projSlugName);
    bowerFile = bowerFile.replace(authorRegex, this.projAuthor);

    wiring.writeFileFromString(bowerFile, bowerPath);

    // gruntfile.js
    var gruntfilePath = "gruntfile.js",
        gruntfileFile = wiring.readFileAsString(gruntfilePath);

    gruntfileFile = gruntfileFile.replace(properRegex, this.projProperName);
    gruntfileFile = gruntfileFile.replace(shortRegex,  this.projSlugName);

    wiring.writeFileFromString(gruntfileFile, gruntfilePath);

    // package.json
    var packagePath = "package.json",
        packageFile = wiring.readFileAsString(packagePath);

    packageFile = packageFile.replace(shortRegex, this.projSlugName);

    wiring.writeFileFromString(packageFile, packagePath);

    // vvv-hosts
    var vvvhostsPath = "vvv-hosts",
        vvvhostsFile = wiring.readFileAsString(vvvhostsPath);

    vvvhostsFile = vvvhostsFile.replace(domainRegex, this.projDomain + ".dev");

    wiring.writeFileFromString(vvvhostsFile, vvvhostsPath);

    // vvv-init.sh
    var vvvinitPath = "vvv-init.sh",
        vvvinitFile = wiring.readFileAsString(vvvinitPath);

    vvvinitFile = vvvinitFile.replace(properRegex, this.projProperName);
    vvvinitFile = vvvinitFile.replace(domainRegex, this.projDomain + ".dev");
    vvvinitFile = vvvinitFile.replace(dbnameRegex, this.projDBName);
    vvvinitFile = vvvinitFile.replace(emailRegex,  this.projAdminEmail);
    vvvinitFile = vvvinitFile.replace(shortRegex,  this.projSlugName);

    wiring.writeFileFromString(vvvinitFile, vvvinitPath);

    // vvv-nginx.conf
    var vvvnginxPath = "vvv-nginx.conf",
        vvvnginxFile = wiring.readFileAsString(vvvnginxPath);

    vvvnginxFile = vvvnginxFile.replace(domainRegex, this.projDomain + ".dev");

    wiring.writeFileFromString(vvvnginxFile, vvvnginxPath);

    console.log(successColour('Success!'));
    console.log('\n');
  },

  // Install required dependencies
  // -------------------------------------
  install: function () {
    this.installDependencies();
  }
});
