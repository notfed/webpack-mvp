# Introduction

This is a minimal working example of an HTML/CSS/JS single-page webapp using [webpack](https://webpack.js.org/guides/getting-started/).

To try it, run:

```
git clone git@github.com:notfed/webpack-mvp.git
cd webpack-mvp
npm install
npm run build
npm start
```

# How this was setup

The steps to create this were generally:
```
mkdir webpack-demo
cd webpack-demo
npm init -y
npm i --save-dev webpack webpack-cli 
npm i --save-dev style-loader css-loader csv-loader xml-loader raw-loader 
npm i --save-dev html-webpack-plugin html-inline-script-webpack-plugin
npm pkg set scripts.start='webpack serve --open --no-live-reload'
npm pkg set scripts.watch='webpack --watch'
npm pkg set scripts.build='webpack"'
# ...other files added manually...
```
