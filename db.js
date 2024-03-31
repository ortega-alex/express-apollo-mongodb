const { connect } = require('mongoose')
const { MONTODB_URI } = require('./config')

const connectDB = async () => {
    try {
        const db = await connect(MONTODB_URI)
        console.log("DB Connected to ", db.connection.name);
    } catch (error) {
        console.log(error);
    }
}

module.exports = { connectDB }