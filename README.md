# Kapow! Skeleton

The skeleton component of the Kapow! framework/boilerplate for WordPress builds.

## About



## Installation

NB: A Yeoman generator is currently being developed to automate the creation of a new Kapow! based project.

1) Create a directory for your project and extract the contents of the the Kapow! Skeleton archive into it. Alternatively you could do `git clone git@github.com:mkdo/kapow-skeleton.git your-project-folder`, navigate to the project folder and then delete the `.git` directory with `sudo rm -rf .git`

2) Add the other Kapow! components ([Sass](https://github.com/mkdo/kapow-sass), [Grunt](https://github.com/mkdo/kapow-grunt), [Theme](https://github.com/mkdo/kapow-theme)) as required to the relevant locations:

- Sass files go in `assets/sass`
- Grunt files/folder go directly into the project root: *the package.json is identical so you can overwite it!*
- Theme files should go into `htdocs/wp-content/themes/your-theme-name`

For each of the Kapow! components you can either download and extract the archive or clone the repo straight into the relevant folder, making sure you remove the `.git` folder each time as detailed above.

3) Open your project folder in your code editor and do a ***case sensitive*** find and replace for each of these strings of text, replacing them with project specific alternatives:

- My Project = the 'proper' name 
- my-project = the 'slug' name
- my_project = the database name 

4) Open `gruntfile.js` and configure your Grunt settings accordingly. Then open

5) Run `npm install` and `bower install` to get all the required dependencies

6)

7) Run `vagrant root` followed by `vagrant up --provision

8) Grunt `grunt build` to generate your front-end assets

## Useage

Once you've completed the installation steps you're ready to login to WordPress (admin / password) and can start developing the site locally!

## Changelog

0.1.0 - 27.08.2015 - Initial release.
