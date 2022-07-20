### To use these web components , there are two ways

### 1. Host these web components application into some URL and access from there.
### 2. Create npm package of this application and use that package.

## 1. First way to Host app on server -

1. On Local, you can use VS Code extension 'LiveServer' to run your app on localhost.

URL is > https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

Then you can access files with URL >

http://127.0.0.1:5500/green-button.js
http://127.0.0.1:5500/wc-form.js

2. Use these URLs in script tag of another application inside index.html, where you want to use like -

  ```
  <script src="http://127.0.0.1:5500/green-button.js"></script>
    <script src="http://127.0.0.1:5500/red-button.js"></script>
    <script src="http://127.0.0.1:5500/dynamic-button.js"></script>
    <script src="http://127.0.0.1:5500/wc-form.js"></script>
  ```

3. Embed these web components in your component like -

 <wc-green-btn></wc-green-btn>

 <wc-form fname="JSMount" lname="Technical"></wc-form>

 ## 2. Publish these app into npm -

 1. Publish this in npm by using > npm publish (read any blog to publish app on npm)

 2. This app is already published in npm. You can access that package with > https://www.npmjs.com/package/web-components-custom-elements

 3. Install this package in your another application with below command -

> npm i web-components-custom-elements

4. import this in your commment like -

import 'web-components-custom-elements';

5. Then use web component like -

<wc-green-btn></wc-green-btn>

<wc-form fname="JSMount" lname="Technical"></wc-form>

