const http = require('http');
const app = require('./index');
console.log('APPPPP');
const cors = require('cors');
let server = http.createServer(app);

const port = process.env.PORT || 5050;

server.listen(port, () => console.log(`Server is running on port ${port}`));
