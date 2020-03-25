require('dotenv').config();
require('./database');
const app = require('./app');

async function main() {
    
    // Start server
    await app.listen(app.get('port'));
    console.log('Server on http://localhost:'+app.get('port'));
    
}

main();
