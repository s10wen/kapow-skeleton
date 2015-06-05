# Kapow! Sass

The Sass component of the Kapow! front-end boilerplate for WordPress builds, using a 10-1 structure and complete with integration with several popular front-end frameworks.

## About

A more detailed overview of what Kapow! Sass contains is coming Real Soon Now™...

## Installation

If you're not using this as part of the wider Kapow! set-up, you'll need to...

1) Install Normalize (SCSS version) and the required framework (omit as appropriate):

```bower install normalize-scss bootstrap-sass#3.3.4 foundation#5.5.2 bourbon#4.2.3 neat#1.7.2```

**NOTE**: Naturally you're going to want Bourbon and Neat together.

2) Ensure that the contents of the repo are placed a level deeper than your bower folder e.g.

    your_project/
      assets/
        sass/ << put contents here
      bower_components/

## Usage

As Kapow! Sass is plumbed into three popular front-end frameworks ([Foundation](http://foundation.zurb.com/docs/), [Bootstrap](http://getbootstrap.com/getting-started/) and [Bourbon](http://bourbon.io/docs/) + [Neat](http://thoughtbot.github.io/neat-docs/latest/)) your first port of call will be ```config/_settings.scss``` where you can switch on support for one of them if you wish.

To get up and running you need to:

1) Change the value of the ```$kp-framework``` variable to either ```foundation```, ```bootstrap``` or ```bourbon```. This will ensure that Kapow! Sass and your chosen framework are properly 'plumbed' together. You can also add your own setting overrides in this file e.g. alter a specific component colour.

The next time you compile your Sass the resulting CSS will be packed full of Foundation/Bootstrap/Bourbon goodness! 

2) Open the main `site.scss` file and uncomment the relevant `@import` statement for your chosen framework.

3) The final step is to open ```config/_variables.scss``` and change the variables as you see fit whilst adding any of your own project specific variables. Now go forth and compile!

## Changelog

**0.2.0** - *29.05.2015* - Added responsiveness for WordPress galleries.

**0.1.0** - *29.05.2015* - Initial release, requires additional testing in the wild.
