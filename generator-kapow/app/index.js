
// Yeoman generator for Kapow!
// ---------------------------------------------------------------------------

'use strict';
var chalk  = require('chalk');
var wiring = require('html-wiring');
var yeoman = require('yeoman-generator');
var yosay  = require('yosay');

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
    this.log(yosay(chalk.yellow('## Greetings Citizen! ##') + '\r' + 'I hear you\'re in need of some help? Tell me more!'));

    // Define our questions
    var questions = [
      {
        type: 'input',
        name: 'projProperName',
        message: chalk.yellow('(1/10)') + ' What is the "proper" name of this project? ' + chalk.red('e.g. Gotham Enterprises'),
        default: 'My Project'
      },
      {
        type: 'input',
        name: 'projShortName',
        message: chalk.yellow('(2/10)') + ' What is the "short" name of this project? ' + chalk.red('e.g. gotham-ent'),
        default: 'my-project'
      },
      {
        type: 'input',
        name: 'projAuthor',
        message: chalk.yellow('(3/10)') + ' Who is the author of this project? ' + chalk.red('e.g. Bruce Wayne <bruce@gotham-ent.com>'),
        default: 'Author Name'
      },
      {
        type: 'list',
        name: 'projFramework',
        message: chalk.yellow('(4/10)') + ' Which of these front-end frameworks do you require?',
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
        message: chalk.yellow('(5/10)') + ' Which of these front-end extras do you require?',
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
        ],
        default: 'all'
      },
      {
        type: 'checkbox',
        name: 'projDocs',
        message: chalk.yellow('(6/10)') + ' Which of these documentation systems do you require?',
        choices: [
          {
            name: 'JSDoc',
            value: 'jsdoc'
          },
          {
            name: 'phpDocumentor',
            value: 'phpdoc'
          },
          {
            name: 'SassDoc',
            value: 'sassdoc'
          }
        ],
        default: 'all'
      },
      {
        type: 'confirm',
        name: 'projRespImages',
        message: chalk.yellow('(7/10)') + ' Would you like to generate responsive sizes for .jpg images in your theme?',
        default: 'true'
      },
      {
        type: 'input',
        name: 'projDBName',
        message: chalk.yellow('(8/10)') + ' What should I call the WordPress database? ' + chalk.red('e.g. gotham_ent'),
        default: "my-project-db"
      },
      {
        type: 'input',
        name: 'projAdminEmail',
        message: chalk.yellow('(9/10)') + ' What is the email address for the WordPress administrator?',
        default: "hello@my-project.com"
      },
      {
        type: 'input',
        name: 'projDomain',
        message: chalk.yellow('(10/10)') + ' What name (without any suffix) do you prefer for the Vagrant \'.dev\' domain? ' + chalk.red('e.g. gotham-ent'),
        default: "my-project"
      },
    ];

    // Ask our questions and save the answers
    this.prompt(questions, function (answers) {

      // Map the answers to variables of the same name
      this.projProperName = answers.projProperName;
      this.projShortName  = answers.projShortName;
      this.projAuthor     = answers.projAuthor;
      this.projFramework  = answers.projFramework
      this.projExtras     = answers.projExtras;
      this.projDocs       = answers.projDocs;
      this.projRespImages = answers.projRespImages;
      this.projDBName     = answers.projDBName;
      this.projAdminEmail = answers.projAdminEmail;
      this.projDomain     = answers.projDomain;

      // Congratulate the user
      this.log(yosay(chalk.yellow('## Well done Citizen! ##') + '\r' + 'You will now witness the almighty power of ' + chalk.red('Kapow!')));

      // Finish up
      done();
    }.bind(this));

  }, // prompting

  // Scaffold the project
  // -------------------------------------
  // Having to use bulkDirectory as using
  // directory gives permission errors!
  // -------------------------------------
  writing: {

    // Pull down Kapow! repositories
    // -------------------------------------
    repos: function () {

      var shortName = this.projShortName;

      this.log(chalk.yellow('Pulling down the Kapow! repositories'));

      // Grunt
      this.remote('mkdo', 'kapow-grunt', 'master', function(err, remote) {
        remote.bulkDirectory('grunt', 'grunt');
      });

      // Sass
      this.remote('mkdo', 'kapow-sass', 'master', function(err, remote) {
        remote.bulkDirectory('.', 'assets/sass');
      });

      // Theme
      this.remote('mkdo', 'kapow-theme', 'master', function(err, remote) {
        remote.bulkDirectory('.', 'htdocs/wp-content/themes/' + shortName);
      });

    },

    // Update strings in project files
    // -------------------------------------
    updates:  function () {

      this.log(chalk.yellow('Updating project files'));

      var properRegex = /(My Project)/mg;
      var shortRegex  = /(my-project)/mg;
      var domainRegex = /(my-project.dev)/mg;
      var dbnameRegex = /(my-project-db)/mg;
      var emailRegex  = /(hello@my-project.com)/mg;

      // .gitignore
      var gitignorePath = ".gitignore",
          gitignoreFile = wiring.readFileAsString(gitignorePath);

      gitignoreFile = gitignoreFile.replace(properRegex, this.projProperName);
      gitignoreFile = gitignoreFile.replace(shortRegex, this.projShortName);

      wiring.writeFileFromString(gitignoreFile, gitignorePath);

      // bower.json
      var bowerPath = "bower.json",
          bowerFile = wiring.readFileAsString(bowerPath);

      bowerFile = bowerFile.replace(shortRegex, this.projShortName);
      bowerFile = bowerFile.replace('Author Name', this.projAuthor);

      wiring.writeFileFromString(bowerFile, bowerPath);

      // gruntfile.js
      var gruntfilePath = "gruntfile.js",
          gruntfileFile = wiring.readFileAsString(gruntfilePath);

      gruntfileFile = gruntfileFile.replace(properRegex, this.projProperName);
      gruntfileFile = gruntfileFile.replace(shortRegex, this.projShortName);

      wiring.writeFileFromString(gruntfileFile, gruntfilePath);

      // package.json
      var packagePath = "package.json",
          packageFile = wiring.readFileAsString(packagePath);

      packageFile = packageFile.replace(shortRegex, this.projShortName);

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
      vvvinitFile = vvvinitFile.replace(emailRegex, this.projAdminEmail);
      vvvinitFile = vvvinitFile.replace(shortRegex, this.projShortName);

      wiring.writeFileFromString(vvvinitFile, vvvinitPath);

      // vvv-nginx.conf
      var vvvnginxPath = "vvv-nginx.conf",
          vvvnginxFile = wiring.readFileAsString(vvvnginxPath);

      vvvnginxFile = vvvnginxFile.replace(domainRegex, this.projDomain + ".dev");

      wiring.writeFileFromString(vvvnginxFile, vvvnginxPath);
    }
  },

  // Install required dependencies
  // -------------------------------------
  install: function () {
    // this.installDependencies();
  }

});
