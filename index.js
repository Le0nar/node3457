const app = require('express')();
const http = require('http').Server(app);
const port = process.env.PORT || 3000;


http.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});