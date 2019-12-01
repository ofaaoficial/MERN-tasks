require('dotenv').config();

const app = require('./app');
require('./config/database');

async function main(){
    app.set('port', process.env.PORT || 3000);
    await app.listen(app.get('port'));
    console.log(`Server on http://localhost:${app.get('port')}/`)
}

main();