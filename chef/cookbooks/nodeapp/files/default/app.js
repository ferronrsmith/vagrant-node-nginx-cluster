var os   = require('os');
var hostname = os.hostname();
var server = require("./node-router").getServer();

server.get("/", function (request, response) {
    response.simpleText(200, "Hello from " + hostname + "\n")
});

server.get("/time", function (request, response) {
    response.simpleJson(200, {
        hostname : hostname,
        date : new Date()
    })
});


server.listen(1337, "localhost");