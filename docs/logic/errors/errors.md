## Errors Encountered

## Problem 1

- cannot set headers after they are sent to the client.

```js
[nodemon] to restart at any time, enter rs
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting node server.js
Listening at: http://localhost:5000
Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    at ServerResponse.setHeader (node:_http_outgoing:699:11)
    at ServerResponse.header (C:\Users\justa\OneDrive\Desktop\FIFA-Duel-Tracker\backend\node_modules\express\lib\response.js:795:10)
    at ServerResponse.send (C:\Users\justa\OneDrive\Desktop\FIFA-Duel-Tracker\backend\node_modules\express\lib\response.js:175:12)
    at ServerResponse.json (C:\Users\justa\OneDrive\Desktop\FIFA-Duel-Tracker\backend\node_modules\express\lib\response.js:279:15)
    at C:\Users\justa\OneDrive\Desktop\FIFA-Duel-Tracker\backend\routes\match\match.routes.js:11:7
    at Layer.handle [as handle_request] (C:\Users\justa\OneDrive\Desktop\FIFA-Duel-Tracker\backend\node_modules\express\lib\router\layer.js:95:5)
    at next (C:\Users\justa\OneDrive\Desktop\FIFA-Duel-Tracker\backend\node_modules\express\lib\router\route.js:149:13)
    at Route.dispatch (C:\Users\justa\OneDrive\Desktop\FIFA-Duel-Tracker\backend\node_modules\express\lib\router\route.js:119:3)
    at Layer.handle [as handle_request] (C:\Users\justa\OneDrive\Desktop\FIFA-Duel-Tracker\backend\node_modules\express\lib\router\layer.js:95:5)
    at C:\Users\justa\OneDrive\Desktop\FIFA-Duel-Tracker\backend\node_modules\express\lib\router\index.js:284:15
```

- I got solution

```js
router.get("/:id", (req, res) => {
//   res.json({ message: "Get match by id" });
// remove above line or leave one
  res.json(req.params);
});
```

## Problem 2

You were working on a backend JavaScript project with Express, and you encountered the error:

```
'require' is not defined.eslintno-undef
```

This error occurs because **ESLint** (a tool that checks your JavaScript code for potential issues) doesn't recognize `require` as a valid global variable. 

### **Why Did This Happen?**

In JavaScript, the `require` function is specific to **Node.js** environments and is used to import modules. However, ESLint, by default, assumes you might be writing code for a **browser environment**, where `require` doesn't exist. Therefore, when ESLint checks your code, it doesn't recognize `require` as a valid global function and throws an error.

### **Solution:**

The solution is to configure ESLint to recognize that you’re working in a **Node.js** environment. By doing this, ESLint will understand that `require` is a valid global function and stop flagging it as an error.

#### Steps Taken:
1. **Set ESLint's environment to Node.js**: 
   - In the `.eslintrc` configuration file, I added `"node": true` in the `env` section. This tells ESLint to expect **Node.js globals** like `require`, `module`, and `process` to be present in your code.

2. **Run ESLint**:
   - After making the configuration change, ESLint no longer threw the `no-undef` error for `require`, and you were able to run your code without issues.

### **Why It Worked:**

By adding `"node": true` to the ESLint configuration, you informed ESLint that the code is running in a **Node.js** environment. ESLint then allowed the use of `require` without flagging it as undefined because it’s a core part of Node.js and is not available in browsers.

### **Key Takeaways:**
- ESLint’s environment settings control what global variables it expects.
- In a **Node.js** environment, `require` is a global function.
- You can configure ESLint to recognize this by specifying `"node": true` in your `.eslintrc` file.

```js
npx eslint --init
```
