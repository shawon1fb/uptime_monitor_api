const http = require('http');

const app = {};
app.config = {
    port: 3000,
};

app.createServer = () => {
    const server = http.createServer(app.handelRequest);
    server.listen(app.config.port, () => {
        console.log(`listing 1 to port ${app.config.port}`);
    });
};

app.handelRequest = (req, res) => {
    res.end('hello world 4');
};

app.createServer();
