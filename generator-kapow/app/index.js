
// Yeoman generator for Kapow!
// ---------------------------------------------------------------------------

'use strict';
var chalk  = require('chalk');
var yeoman = require('yeoman-generator');
var yosay  = require('yosay');

module.exports = yeoman.generators.Base.extend({

  // Init
  // -------------------------------------
  init: function () {
    this.pkg = require('../package.json');
  },

  // Prompting
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
        default: 'my-project'
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
        default: "my_project"
      },
      {
        type: 'input',
        name: 'projDBEmail',
        message: chalk.yellow('(9/10)') + ' What is the email address for the WordPress administrator?',
        default: "hello@myproject.com"
      },
      {
        type: 'input',
        name: 'projDomain',
        message: chalk.yellow('(10/10)') + ' What name do you prefer for the Vagrant \'.dev\' domain? ' + chalk.red('e.g. gotham-ent'),
        default: "my-project"
      },
    ];


    // Set our options
    this.prompt(questions, function (answers) {


      // Congratulate the user
      this.log(yosay(chalk.yellow('## Well done Citizen! ##') + '\r' + 'You will now witness the almighty power of ' + chalk.red('Kapow!')));

      // Finish up
      done();
    }.bind(this));

  }, // prompting

  // Debug
  // -------------------------------------
  debug: function() {
    // console.log(this);
  },

});
