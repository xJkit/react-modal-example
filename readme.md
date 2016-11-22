# Boilerplate React App
This is the vanilla version of the react boilerplate without __Foundation__ CSS frameworks and __jQuery__ installed.
You need to build CSS from scratch!

### Unit Testing
1. [Karma](https://github.com/karma-runner/karma): A simple tool that allows you to execute JavaScript code in multiple real browsers.
> The main purpose of Karma is to make your test-driven development easy, fast, and fun.
2. [Mocha](https://github.com/mochajs/mocha): Mocha is a simple, flexible, fun JavaScript test framework for node.js and the browser.
> For more information view the [documentation](http://mochajs.org/)
3. [expect](https://github.com/mjackson/expect): Write better assertions
> a more compact alternative to [Chai](http://chaijs.com/) and [Sinon](http://sinonjs.org/)
4. [Enzyme](https://github.com/airbnb/enzyme): JavaScript Testing utilities for React
> Enzyme's API is meant to be intuitive and flexible by mimicking jQuery's API for DOM manipulation and traversal.

### Installation
Run npm install at first.
```
npm i
```
You need to know that I use the React version up to v15 because of the __enzyme__ library. Though __enzyme__ is suitable for v0.13, v0.14 and v15; however, the configurations for v15 is the easiest way to kick off.

### Development
Use __webpack__ to bundle all your components and static files by
```
npm run watch
```

### TDD/BDD development
You could run __Karma__ test runner for watching your files by
```
npm t
```
If you don't want to be in watch mode, just modify the __singleRun__ from _false_ to _true_ in the __Karma.conf.js__ file.

### Start Server
Of course, you can start your server by running the express server:
```
npm run start
```
This command could be used for __Heroku__ deployment, too. Have fun!

### License
MIT
