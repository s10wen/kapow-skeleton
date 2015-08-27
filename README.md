# Kapow! Skeleton

The Skeleton component of the Kapow! framework/boilerplate for WordPress site development.

## About

The Kapow! Skeleton empowers you to get up and running with WordPress site development using Vagrant + VVV, whilst taking advantage of the front-end, tooling and theme goodness that the other modules have to offer.

The Skeleton consists of the following:

- A clearly defined folder structure
- A comprehensive .gitignore file
- Useful front-end polyfills
- NPM, Bower and Gem dependency manifests
- Config files necessary for WordPress
- Vagrant configuration files
- A Vagrant database backup script

On it's own, the Skeleton isn't a lot of use unless you've already got your own Sass, build tool and theme components to drop into the project. Thankfully, the Skeleton is designed to work with the other members of the Kapow! family: the [Sass](https://github.com/mkdo/kapow-sass), [Grunt](https://github.com/mkdo/kapow-grunt) and [Theme](https://github.com/mkdo/kapow-theme) components.

## Requirements

You will need the following installed on your system before attempting to set-up a Kapow! project using this guide.

- [VirtualBox](http://www.virtualbox.org/) (or another virtual machine app such as Paralells)
- [Vagrant](https://www.vagrantup.com/)
- [VVV a.k.a Varying Vagrant Vagrants](https://github.com/Varying-Vagrant-Vagrants/VVV)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [NodeJS](https://nodejs.org/)
- [Bower](http://bower.io/#install-bower)
- [Grunt](http://gruntjs.com/installing-grunt)

## Installation

**NB: A Yeoman generator is currently being developed to automate the creation of a new Kapow! based project and take care of much of what is detailed below.**

**1)** Create a directory for your project and extract the contents of the the Kapow! Skeleton archive into it. Alternatively you could do `git clone git@github.com:mkdo/kapow-skeleton.git your-project-folder`, navigate to the project folder and then delete the `.git` directory with `sudo rm -rf .git`

**2)** Add the other Kapow! components ([Sass](https://github.com/mkdo/kapow-sass), [Grunt](https://github.com/mkdo/kapow-grunt), [Theme](https://github.com/mkdo/kapow-theme)) as required to the relevant locations:

- Sass files go in `assets/sass`
- Grunt files/folder go directly into the project root: *the package.json is identical so you can overwite it!*
- Theme files should go into `htdocs/wp-content/themes/your-theme-name`

For each of the Kapow! components you can either download and extract the archive or clone the repo straight into the relevant folder, making sure you remove the `.git` folder each time as detailed above.

**3)** Open the project folder in your code editor and do a ***case sensitive*** find and replace for each of these strings of text, replacing them with project specific alternatives:

- My Project = "proper" name 
- my-project = "slug" name
- my_project = database name & function name prefix
- hello@<span></span>my-project.com = your email address

**4)** Open `gruntfile.js` and configure your Grunt settings accordingly including adding any additional bower/custom dependencies for concatenation, paths to plugins to be linted etc. The `siteInfo` and `wpInfo` settings objects shouldn't need to be altered if you're happy with Kapow!'s default structure.

**5)** Run `npm install` and `bower install` to get all the required dependencies. If you intend on enabling the Grunt task that lints your Sass, you'll need to run `gem install scss_lint`. If you're planning on generating PHP documentation you'll need to install [PHPdocumentor](http://www.phpdoc.org/docs/latest/getting-started/installing.html) on your system.

If you run into trouble with permissions, you may need to prefix the above with `sudo` e.g. `sudo npm install`

**6)** Before you add WordPress as a sub-module, you need to initialize this project as a git repository using `git init`. 

Now you can run `git submodule add -f git://github.com/WordPress/WordPress.git htdocs/wordpress` to add a reference to this sub-module to the repo. With this done, you just need to update your sub-modules in order to clone WordPress into the project using `git submodule update --init --recursive`.

Once WordPress has been cloned, navigate to `htdocs` and rename `local-config-sample.php` to `local-config.php`. This contains your local database connection settings for Vagrant and overrides `wp-config.php`.

**7)** Run `vagrant root` followed by `vagrant up --provision`. It is important that you complete step #6 before you provision Vagrant! :)

**8)** Run `grunt` to generate your front-end assets, or `grunt build` to generate the assets and watch for changes should you be ready to start developing.

**9)** When you're ready, you'll need to configure the repo so that you can push these local files up to your remote repo once you've added and committed them. That's beyond the scope of this guide so I'll leave that up to you. :)

**10)** Make a nice hot cup of tea/coffee and bask in your magnificence!

## Usage

Once you've completed the installation steps you're ready to login to WordPress (*admin* / *password*) and can start developing the site locally!

If you wish to use one of the available front-end frameworks (Foundation / Bootstrap / Bourbon + Neat) or otherwise configure your Sass set-up you should take a look at the following files:

- `assets/sass/config/_settings.scss` to pick a Sass framework
- `assets/sass/config/_vars-default.scss` to alter the default variables to suit your needs
- `assets/sass/config/_vars-custom.scss` to add your own project specific variables
- `assets/sass/site.scss` to choose your Sass imports

Out of the box Kapow!'s Grunt set-up has several features commented out such as code linting and documentation generation. Take a look at the following files to:

- `gruntfile.js` alter the main configuration
- `grunt/default.js` choose what runs as part of the main build task
- `grunt/watch.js` change what happens when certain files change

Several Grunt commands are at your disposal:

- `grunt` builds the project
- `grunt build` builds and then watches for changes
- `grunt docs` generates Sass, Javascript and PHP documentation
- `grunt lint` lint your Sass, Javascript and PHP for errors

**NB:** The `docs` and `lint` commands assume you have the required dependencies installed as detailed earlier.

## Changelog

0.1.0 - 27.05.2015 - Initial release along with documentation.
