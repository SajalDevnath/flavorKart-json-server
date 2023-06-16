// JSON Server module 
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db/db.json");
// Make sure to use the default middleware 
const middlewares = jsonServer.defaults();
server.use(middlewares);
// Add this before 
server.use(router)
server.use(
    jsonServer.rewriter({
        "/api/*": "/$1",
    }));
server.use(router);
server.listen(3000, () => {
    console.log("JSON Server is running");
});