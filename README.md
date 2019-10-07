# base-npm-lib

Shell for developing npm packages, wired with Webpack and Babel to allow ES6 and import/export modules

## How to use `base-npm-lib` to build a package?

### 1. Clone

* Clone this repo
* Create a github repo with the name for your package and add the newly created repo as the origin remote
* Update the details in `package.json` file (name, description, github url and versoin).

### 2. Test

* `npm run test` to test

### 3. Build

* `npm run build` to build the package

### 4. Publish

* `npm login` (first time only)
* `npm publish`

---

## Import published package in another app

### 1. Install

`npm install base-npm-lib` to install the latest version from `npm` 

### 2. Use

```javascript
import { sayHello, greet } from 'base-npm-lib'

...

sayHello('name'); // hello name
greet(); // hello world!!

```