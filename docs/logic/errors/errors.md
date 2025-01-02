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