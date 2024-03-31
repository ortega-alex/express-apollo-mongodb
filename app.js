const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const { typeDefs } = require('./typeDefs')
const { resolvers } = require('./resolvers')
const { connectDB } = require('./db')
const { PORT } = require('./config')

const app = express()
connectDB()

app.get('/', (_, res) => res.send('Welcome to my api'))

module.exports = app

async function start() {
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    })
    await apolloServer.start()
    apolloServer.applyMiddleware({ app })

    app.use('*', (_, res) => res.status(404).send('Not found'))
    app.listen(PORT, () => console.log(`server on port`, PORT))
}

start();