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


## How to Use:

Start Webpack:
``npm run build``
(In visual studio there isn't a built in terminal so launch [cmder](https://cmder.net/) or you favorite terminal at the package.json directory and type the command there.)

Run App:
```F5```

Client side changes don't even require you to refresh the Visual Studio debugger.

## Requirements:
- you have node, npm, and visual studio installed with asp .NET core support.

## How it works:

- Webpack is configured to run and watch for changes in the npm package file.
- The webpack config is set up to transpile the typescript files, but also create sourcemaps for easy debugging
- The typescript config is set to spit out output javascript files in the same location as the uncompiled typescript files.

## Why it doesn't suck:
- The project includes [webpack-notifier](https://www.npmjs.com/package/webpack-notifier) which causes a notification message to appear in your windows tray if something goes sideways so you don't need to watch the terminal window.
- The ASP .NET Core app includes the Microsoft.AspNetCore.StaticFiles middleware Nuget package and is set up to server a static index.html file so you can use serverside logic... or not.
- You can run this in Visual Studio or VS Code. In Visual Studio the site will be launched using IIS. In VS Code you are using the .NET Core launcher(?)


## Additional Notes:
- [todo]:  Add steps to configure production & dev builds

