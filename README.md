![Kapow! Logo Banner](https://raw.githubusercontent.com/kapow-wp/kapow-skeleton/master/kapow-full-logo-x2.png)

# Kapow! Skeleton

The Skeleton component of the Kapow! boilerplate for bespoke WordPress site development.

## [About](#about)

Kapow! empowers you to quickly get up and running with bespoke WordPress site development using Vagrant + VVV, whilst taking advantage of the front-end, tooling and theme goodness that the other modules have to offer. The Skeleton consists of the following:

- A clearly defined and well organised folder structure
- A comprehensive .gitignore file to cover all the bases
- Useful front-end polyfills used by Kapow! Sass
- NPM, Bower and Composer dependency manifests
- WordPress configuration files
- Vagrant configuration files

On it's own, the Skeleton isn't all that useful unless you've already got your own Sass, build tool and theme components to drop into the project. Thankfully, the Skeleton is designed to work with the other members of the Kapow! family: 

- [Sass](https://github.com/mkdo/kapow-sass)
- [Grunt](https://github.com/mkdo/kapow-grunt)
- [Theme](https://github.com/mkdo/kapow-theme)
- [Core](https://github.com/mkdo/kapow-core)
- [Project Core](https://github.com/mkdo/kapow-project-core)

## [Requirements](#requirements)

You will need the following installed on your system before attempting to set-up a Kapow! based project using this guide.

- [VirtualBox](http://www.virtualbox.org/), [Parallels](http://www.parallels.com) or another virtual machine
- [Vagrant](https://www.vagrantup.com/)
- [VVV (2.0.0+) a.k.a Varying Vagrant Vagrants](https://github.com/Varying-Vagrant-Vagrants/VVV)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [NodeJS](https://nodejs.org/)
- [Bower](http://bower.io/#install-bower)
- [Grunt](http://gruntjs.com/installing-grunt)

## [Installation](#installation)

**If you are planning on using the full Kapow! boilerplate for your next project, we have a [setup script](https://github.com/mkdo/kapow-setup) to help you get up and running *fast*. Seriously, don't even bother with the instructions below unless you are a sadist.**

**1)** Create a directory for your project and copy the contents of the `kapow-skeleton` folder from this repo into it.

**2)** Add the other Kapow! components ([Sass](https://github.com/mkdo/kapow-sass), [Grunt](https://github.com/mkdo/kapow-grunt), [Theme](https://github.com/mkdo/kapow-theme)), [Core](https://github.com/mkdo/kapow-core) and [Project Core](https://github.com/mkdo/kapow-project-core) as required to the relevant locations:

- Kapow! Sass files go in `assets/scss`
- Kapow! Grunt files/folder go directly into the project root: you can overwrite the `package.json` as it maintains parity with the copy found in this repository.
- Kapow! Theme files go in `build/wp-content/themes/your-theme-name`
- Kapow! Core files go into `build/wp-content/plugins/kapow-core`
- Kapow! Project Core files go into `build/wp-content/plugins/kapow-project-core`

**3)** Open the project folder in your code editor and do a ***case sensitive*** find and replace for each of these strings of text, replacing them with project specific alternatives. Replace them in the order as follows to prevent issues with the email and web addresses:

- **my-project** = "slug" name, theme directory slug and theme textdomain
- **My Project** = "proper" name
- **my_project** = database name & function name prefix
- **Author Name** = your or your organisation's name
- **hello@<span></span>my-project.com** = your email address
- **http://www&#8203;.&#8203;my-project.com** = your company website

**4)** Open `gruntfile.js` and configure your Grunt settings accordingly including adding any additional bower/custom dependencies for concatenation, paths to plugins to be linted etc. You shouldn't need to alter the `siteInfo` and `wpInfo` settings objects if you're happy with Kapow!'s default structure.

**5)** Run `npm install`,  `bower install` and `composer install` to get all the required dependencies. If you're planning on generating PHP and Sass documentation you'll need to install [phpDoc](http://www.phpdoc.org/docs/latest/getting-started/installing.html) and [sassDoc](http://www.sassdoc.com) on your system.

If you run into trouble with permissions, you may need to prefix the above with `sudo` e.g. `sudo npm install`.

**6)** Run `vagrant root` followed by `vagrant provision --provision-with=site-your-site`. It is important that you complete step #5 **before** you provision Vagrant! :)

**7)** Run `grunt` to generate your front-end assets, or `grunt build` to generate the assets and watch for changes should you be ready to start development.

**8)** When you're ready, you'll need to configure the repo so that you can push these local files up to your remote repo once you've added and committed them. That's beyond the scope of this guide so I'll leave that up to you. :)

**9)** Check out `assets/scss/style.scss` to pick your front-end framework of choice and get started with front-end development.

**10)** Make a nice hot cup of tea/coffee and bask in your magnificence!

## [Usage](#usage)

Once you've completed the installation steps you're ready to login to WordPress (user: *admin* / password: *password*) to start developing the site locally!
