# Kapow! Skeleton

The Skeleton component of the Kapow! framework/boilerplate for WordPress builds.

## About

The Kapow! Skeleton consists of the following:

- A basic folder structure
- A comprehensive .gitignore file
- Useful front-end polyfills
- NPM, Bower and Gem dependency manifests
- Plumbing for a WordPress installation
- Vagrant configuration files

On it's own, the Skeleton isn't a lot of use unless you've already got your own Sass, build tool and theme modules to drop into the project. Thankfully, the Skeleton is designed to work with the other members of the Kapow! family: the [Sass](https://github.com/mkdo/kapow-sass), [Grunt](https://github.com/mkdo/kapow-grunt) and [Theme](https://github.com/mkdo/kapow-theme) modules.

## Installation

NB: A Yeoman generator is currently being developed to automate the creation of a new Kapow! based project and take care of much of what is detailed below.

1) Create a directory for your project and extract the contents of the the Kapow! Skeleton archive into it. Alternatively you could do `git clone git@github.com:mkdo/kapow-skeleton.git your-project-folder`, navigate to the project folder and then delete the `.git` directory with `sudo rm -rf .git`

2) Add the other Kapow! components ([Sass](https://github.com/mkdo/kapow-sass), [Grunt](https://github.com/mkdo/kapow-grunt), [Theme](https://github.com/mkdo/kapow-theme)) as required to the relevant locations:

- Sass files go in `assets/sass`
- Grunt files/folder go directly into the project root: *the package.json is identical so you can overwite it!*
- Theme files should go into `htdocs/wp-content/themes/your-theme-name`

For each of the Kapow! components you can either download and extract the archive or clone the repo straight into the relevant folder, making sure you remove the `.git` folder each time as detailed above.

3) Open the project folder in your code editor and do a ***case sensitive*** find and replace for each of these strings of text, replacing them with project specific alternatives:

- My Project = the "proper" name 
- my-project = the "slug" name
- my_project = the database name 
- hello@<span></span>my-project.com = your email address

4) Open `gruntfile.js` and configure your Grunt settings accordingly including adding any additional bower/custom dependencies for concatenation, paths to plugins to be linted etc. The `siteInfo` and `wpInfo` settings objects shouldn't need to be altered if you're happy with Kapow!'s default structure.

5) Run `npm install` and `bower install` to get all the required dependencies. If you intend on enabling the Grunt task that lints your Sass, you'll need to run `gem install scss_lint`. If you're planning on generating PHP documentation you'll need to install [PHPdocumentor](http://www.phpdoc.org/docs/latest/getting-started/installing.html) on your system.

6) WordPress needs adding as a sub-module, so make sure you're in the root of the project and run `git submodule add -f git://github.com/WordPress/WordPress.git htdocs/wordpress`. Then you need to update your sub-modules in order to fetch the WordPress repo using `git submodule update --init --recursive`.

Once WordPress has been downloaded, navigate to `htdocs` and rename `local-config-sample.php` to `local-config.php`.

7) Run `vagrant root` followed by `vagrant up --provision`. It is important that you ensure step #6 has been completed before provisioning Vagrant! :)

8) Run `grunt` to generate your front-end assets, or `grunt build` to generate the assets and watch for changes should you be ready to start developing.

9) When you're ready, you'll need to initialize this as a new Git repo, or configure it so you can push these files to an existing repo. That's beyond the scope of this guide so I'll leave that up to you. :)

10) Make a nice hot cup of tea/coffee and bask in your magnificence!

## Usage

Once you've completed the installation steps you're ready to login to WordPress (admin / password) and can start developing the site locally!

If you wish to use a particular front-end framework or otherwise configure your Sass set-up you should take a look at and edit the following files:

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
- `grunt docs` generates Sass, Javascript and PHP documentation *
- `grunt lint` lint your Sass, Javascript and PHP for errors *

* These commands assume you have the required dependencies installed as detailed earlier.

## Changelog

0.1.0 - 27.05.2015 - Initial release.
