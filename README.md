<h1 align="center">
<img src="https://raw.githubusercontent.com/ryansutc/webpack_typescript_setup/master/doc/blob/vanilla_ts_webpack.png" alt="logo" width="50%">
    <br>
        Vanilla Webpack Typescript Setup
    <br>
  <h4 align="center">A good initial setup for Webpack builds in an ASP .NET Core application</h4>
</h1>

<p align="center">
  <a href="https://github.com/ryansutc/webpack_typescript_setup/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/express.svg?maxAge=2592000&style=flat-square"
         alt="License">
  </a>
</p>

## webpack_typescript_setup
A vanilla webpack_typescript_setup scaffolded onto ASP .NET Core to work with both Visual Studio and VS Code 

## How to Use

Start Webpack:
``npm run build``

Run App:
```F5```

## How it works:

- Webpack is configured to run and watch for changes in the npm package file.
- The webpack config is set up to transpile the typescript files, but also create sourcemaps for easy debugging
- The typescript config is set to spit out output javascript files in the same location as the uncompiled typescript files.