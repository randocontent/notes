---
title: React Patterns For Beginners
layout: default
---

## Starting

React by itself doesn't make a complete application, so we use it as part of a bigger system. We still call it a "React App" beacuse...(?) React does the UI which may be the core of the app. And many of the other tools mentioned can be more or less transparent. 

This is roughly what a bigger system might look like and where React fits in:

- Tools are desinged to be used in a terminal environment. Expand...
- React is available through [npm][0001], as well as other needed tools. npm is a company that runs a free JavaScript pacakge library and offers a free tool, also called `npm`, to access it. A "package" [essentially](https://docs.npmjs.com/about-packages-and-modules) is a directory that includes a `package.json` file. In practice, npm packages are usually JavaScript code and related files that can be added to a project as drop-in _Modules_. npm is owned by GitHub which is owned by Microsoft. 
- React code gets compiled before running on the client. Babel is a JavaScript compiler that compiles [JSX](https://reactjs.org/docs/react-without-jsx.html) to standard JavaScript, and compiles some of the [JavaScript ES6](https://reactjs.org/docs/react-without-es6.html) features being used into JavaScript that more clients can understand. 
- This code, as well as any other needed files, gets _Bundled_, for example by [webpack](https://webpack.js.org/). This part integrates all the different _Modules_ into one app, and also includes things like preprocessing, minification, and any other preparation step. webpack also has a development server with live reloading. 


[Creating a Toolchain from Scratch - Create a New React App – React](https://reactjs.org/docs/create-a-new-react-app.html#creating-a-toolchain-from-scratch)

[Creating a React App… From Scratch. - Noteworthy - The Journal Blog](https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658)

[Create a New React App – React](https://reactjs.org/docs/create-a-new-react-app.html)

[nitishdayal/cra_closer_look: An explanation of the problems that Create-React-App addresses, and how it attempts to solve them.](https://github.com/nitishdayal/cra_closer_look)

[Building a JavaScript Development Environment | Pluralsight](https://www.pluralsight.com/courses/javascript-development-environment)
[Build a JavaScript Dev Environment in One hour](https://www.infoq.com/presentations/javascript-dev-environment/)
[coryhouse/javascript-development-environment: JavaScript development environment discussed in "Building a JavaScript Development Environment" on Pluralsight](https://github.com/coryhouse/javascript-development-environment)

[0001]: https://www.npmjs.com/

## State with Hooks
 
Hooks are a relatively late addition to React. They bring state to functional components. Previously state was only available for classes. This should make it easier to develop with React, becuause it avoids the issues related to classes. Expand...

## Basic interactions 