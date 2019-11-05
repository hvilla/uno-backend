import app from './src/api/app';
import path from 'path';

require("dotenv").config({ path: path.join(__dirname,"./src/config/.env") });
const connectDB = require('./src/config/database');

connectDB();

const PORT = process.env.PORT || 9000;
const apiVersion = process.env.API_VERSION
const appMode = process.env.MODE;

const server = app.listen(PORT,
    console.log(`${appMode} Server running on http://localhost:${PORT} Ver.${apiVersion}`.blue)
);

process.on('unhandledRejection',(err, promise) => {
    console.log(`Error: ${err}`.red);
    server.close();
});