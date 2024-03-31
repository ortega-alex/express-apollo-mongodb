
const { config } = require('dotenv')
config();

const MONTODB_URI = process.env.MONTODB_URI || "mongodb://localhost:27017/tasksdb";
const PORT = process.env.PORT || 3000;

module.exports = {
    MONTODB_URI,
    PORT
}