# 🚀 Webpack5 build script boilerplate for PHP 
Webpack5 build script for creating static PHP and HTML pages.


## Requirements
- Local web server
- [PHP](https://secure.php.net/manual/en/install.php)
- [Node.js](http://nodejs.org/) >= 12.14.0
- [Yarn](https://yarnpkg.com/en/docs/install)

Included features
- SCSS
- Js
- Stylelint
- Automatically validate, fix and re-order your css properties


## Installation
Navigate to your web server root directory, and create a new folder for your project:
```
mkdir new-project && cd new-project
```

Clone repository
```
git clone git@github.com:code-soup/webpack-php-boilerplate.git .
```

Start fresh, remove .git folder and create new git repository.
This will ensure that your repository does not include history from original
```
rm -rf .git
git init
git add . 
git commit -am 'Init setup'
```

Install dependencies
```
yarn
```
## Configurations
Update `publicPath` and `publicPathProd` in `/src/config.js`
For other options please read comments inside of a config.js file.

**Example 1**
```
http://localhost/my-small-project
https://www.mysmallproject.com

publicPath: '/my-small-project'
publicPathProd: '/'
```
**Example 2**
```
http://localhost/landing-pages/new-product-landing
https://www.projectwebsite.com/new-product-xyz

publicPath: '/landing-pages/new-product-landing'
publicPathProd: '/new-product-xyz'
```
**Example 3**
```
http://local.domain/html-templates/new-template
https://www.mytemplates.com/blue-template

devHost: 'http://local.domain',
publicPath: '/html-templates/new-template'
publicPathProd: '/blue-template'
```

## Commands
```
yarn start
```
Start development in the watch mode.
This will automatically compile css/js and refresh browser

```
yarn build
```
Build all css/js, same as `start` but this will not monitor file changes and autoupdate/regenerate build.

```
yarn build:prod
```
Create optimised build for production.
Do this before you move your files to production server

#### Other commands
```
yarn lint                // Lint your source Js/SCSS files

yarn lint:styles         // lint styles only
yarn lint:styles --fix   // lint styles and attempt to fix errors

yarn lint:scripts        // lint scripts only
yarn lint:scripts --fix  // lint scripts and attempt to fix errors

yarn clean               // delete /dist directory
yarn reinit              // delete /dist and /node_modules directories and reinstall dependencies
```
