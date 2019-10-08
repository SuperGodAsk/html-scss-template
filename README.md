# html-scss-template

These tools make it a solid front-end boilerplate to get a new project off the ground.
For using clone repository with

`git clone https://github.com/SuperGodAsk/html-scss-template.git`

## :gift: Features
| Features | Description |
| :------------- | :------------- |
| Task Runner | [Gulp](http://gulpjs.com/)
| CSS | [SASS](http://sass-lang.com/), [CSS Guidelines](https://cssguidelin.es/), [BEM](http://getbem.com/)
| CSS Tools | [Autoprefixer](https://github.com/postcss/autoprefixer), [Source Maps](https://www.npmjs.com/package/gulp-sourcemaps), [Stylelint](https://stylelint.io/)
| JS | [Webpack](https://webpack.js.org/), [Babel](http://babeljs.io/), [ESLint](http://eslint.org/)
| Live Reload | [BrowserSync](http://www.browsersync.io/)
| HTML Templates | [Twig.js](https://github.com/twigjs/twig.js)
| Deployment | [GitHub Pages]((https://www.npmjs.com/package/gulp-gh-pages))


## Usage

### Requirements
Make sure all dependencies have been installed before moving on:

* [yarn](https://yarnpkg.com/lang/en/) or [npm](https://www.npmjs.com/get-npm)
* [Node.js](https://nodejs.org/en/download/) >= 8.16.0
* [Gulp](http://gulpjs.com/)

### Quick start: Installation
Clone this repository and run
- `yarn` or `npm install` to install dependencies

### Tasks
| Task Name | Description | Environment |
| :------------- | :------------- | :------------- |
| `yarn start` or `npm run start` | Generate a development environment, start the server and watch for changes | Development
| `yarn watch` or `npm run watch` | Start the server and watch for changes | Development
| `yarn build` or `npm run build` | Compile production code | Production
| `yarn deploy` or `npm run deploy` | Compile production code and deploy to GitHub Pages | Production

## Structure

```
|--dist/                   # →  Static version of the website ready to upload (never edit)
|
|--gulpfile.babel.js/      # →  Gulpfile config and tasks
|--node_modules/           # →  Node.js packages (never edit)
|--assets/                 # →  Assets
|  |  |--fonts/            # →  Assets: Fonts
|  |  |--img/              # →  Node.js packages (never edit)
|--src/                    # →  Source files            # →  Assets: Images
|  |--modules/             # →  Modules: Multi-part components e.g. Navbar (HTML, CSS and JS)
|  |--scripts/             # →  JS
|  |  |--components/       # →  JS: Components
|  |  |--app.js            # →  JS: Main file
|  |--styles/              # →  Styles: ITCSS Architecture + BEM Methodology
|  |  |--main.scss         # →  Styles: Main stylesheet file
|  |--templates/           # →  Site templates (Twig.js)
|  |  |--layouts/          # →  Templates: Layouts
|  |  |--components/       # →  Templates: Components
|  |  |--pages/            # →  Templates: Pages
|--.babelrc                # →  Babel presets
|--.browserslistrc         # →  Browserslist config, browsers that we support
|--.eslintrc               # →  ESLint config
|--.gitignore              # →  Gitignore
|--.stylelintrc            # →  Stylelint config
|--package-lock.json       # →  NPM lock file (never edit)
|--package.json            # →  Node.js dependencies and scripts
|--webpack.config.js       # →  Webpack config
|--yarn.lock               # →  Yarn lock file (never edit)
```
