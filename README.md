# Kapow! Skeleton

The Skeleton component of the Kapow! boilerplate for bespoke WordPress site development.

## About

Kapow! empowers you to quickly get up and running with bespoke WordPress site development using Vagrant + VVV, whilst taking advantage of the front-end, tooling and theme goodness that the other modules have to offer. The Skeleton consists of the following:

- A clearly defined and well organised folder structure
- A comprehensive .gitignore file to cover all the bases
- Useful front-end polyfills used by Kapow! Sass
- NPM, Bower and Composer dependency manifests
- WordPress configuration files
- Vagrant configuration files
- An optional Vagrant database backup script

On it's own, the Skeleton isn't all that useful unless you've already got your own Sass, build tool and theme components to drop into the project. Thankfully, the Skeleton is designed to work with the other members of the Kapow! family: [Sass](https://github.com/mkdo/kapow-sass), [Grunt](https://github.com/mkdo/kapow-grunt) and [Theme](https://github.com/mkdo/kapow-theme).

## Requirements

You will need the following installed on your system before attempting to set-up a Kapow! based project using this guide.

- [VirtualBox](http://www.virtualbox.org/), [Parallels](http://www.parallels.com) or another virtual machine
- [Vagrant](https://www.vagrantup.com/)
- [VVV a.k.a Varying Vagrant Vagrants](https://github.com/Varying-Vagrant-Vagrants/VVV)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [NodeJS](https://nodejs.org/)
- [Bower](http://bower.io/#install-bower)
- [Grunt](http://gruntjs.com/installing-grunt)

## Installation

**If you are planning on using the full Kapow! boilerplate for your next project, we have a [setup script](https://github.com/mkdo/kapow-setup) to help you get up and running *fast*. Seriously, don't even bother with the instructions below unless you a sadist.**

**1)** Create a directory for your project and copy the contents of the `kapow-skeleton` folder from this repo into it.

**2)** Add the other Kapow! components ([Sass](https://github.com/mkdo/kapow-sass), [Grunt](https://github.com/mkdo/kapow-grunt), [Theme](https://github.com/mkdo/kapow-theme)) as required to the relevant locations:

- Kapow! Sass files go in `assets/sass`
- Kapow! Grunt files/folder go directly into the project root: you can overwrite the `package.json`!
- Kapow! Theme files go in `build/wp-content/themes/your-theme-name`

**3)** Open the project folder in your code editor and do a ***case sensitive*** find and replace for each of these strings of text, replacing them with project specific alternatives. Replace them in the order as follows to prevent issues with the email and web addresses:

- **my-project** = "slug" name, theme directory slug and theme textdomain
- **My Project** = "proper" name
- **my_project** = database name & function name prefix
- **Author Name** = your or your organisation's name
- **hello@<span></span>my-project.com** = your email address
- **http://www&#8203;.&#8203;my-project.com** = your company website

**4)** Open `gruntfile.js` and configure your Grunt settings accordingly including adding any additional bower/custom dependencies for concatenation, paths to plugins to be linted etc. You shouldn't need to alter the `siteInfo` and `wpInfo` settings objects if you're happy with Kapow!'s default structure.

**5)** Run `npm install` and `bower install` to get all the required dependencies. If you're planning on generating PHP documentation you'll need to install [PHPdocumentor](http://www.phpdoc.org/docs/latest/getting-started/installing.html) on your system.

If you run into trouble with permissions, you may need to prefix the above with `sudo` e.g. `sudo npm install`

**6)** Run `composer create-project` to install WordPress along with any plugins or requirements defined in the `composer.json` file. The composer file that comes with this build is pretty stripped back, but for a more comprehensive composer file that includes useful plugins and mu-plugins take a look at [MKDO Common Composer Dependencies](https://github.com/mkdo/mkdo-common-composer-dependencies).

**7)** Run `vagrant root` followed by `vagrant up --provision`. It is important that you complete step #6 **before** you provision Vagrant! :)

**8)** Run `grunt` to generate your front-end assets, or `grunt build` to generate the assets and watch for changes should you be ready to start development.

**9)** When you're ready, you'll need to configure the repo so that you can push these local files up to your remote repo once you've added and committed them. That's beyond the scope of this guide so I'll leave that up to you. :)

**10)** Make a nice hot cup of tea/coffee and bask in your magnificence!

## Usage

Once you've completed the installation steps you're ready to login to WordPress (user: *admin* / password: *password*) to start developing the site locally!

If you wish to use one of the available front-end frameworks/libraries (Foundation / Bootstrap / Bourbon + Neat) or otherwise configure your Sass set-up you should take a look at the following files:

- `assets/sass/config/_settings.scss` to pick a Front-end framework/library
- `assets/sass/config/_vars-default.scss` to alter the default variables to suit your needs
- `assets/sass/config/_vars-custom.scss` to add your own project specific variables
- `assets/sass/style.scss` to choose your Sass imports

Out of the box Kapow!'s Grunt set-up has several features commented out such as code linting and documentation generation. Take a look at the following files to:

- `gruntfile.js` alter the main configuration
- `grunt/default.js` choose what runs as part of the main build task
- `grunt/watch.js` change what happens when certain files change or are added

Several Grunt commands are at your disposal:

- `grunt` builds the project
- `grunt build` builds and then watches for changes
- `grunt document` generates Sass, Javascript and PHP documentation
- `grunt images` minifies JPG, PNG and SVG images
- `grunt lint` lint your Sass, Javascript and PHP for errors
- `grunt analyse` get useful feedback on your code (currently CSS only)

**NB:** The `docs` and `lint` commands assume you have the required dependencies installed as detailed earlier.

## Changelog

**1.3.0** - *17.05.2015* General documentation review and updates.

**1.2.0** - *18.09.2015* Updates to structure, minor tweaks and documentation updates.

**1.1.0** - *17.09.2015* Added grunt-parker to NPM manifest.

**1.0.0** - *27.05.2015* - Initial release along with documentation.
