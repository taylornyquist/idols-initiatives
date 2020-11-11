const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    formatError: (err) => {
        // Don't give the specific errors to the client.
        if (err.message.startsWith("E11000 duplicate key ")) {
          return new Error('Username or Email has already been used.');
        }
        if (err.message.startsWith("Response not successful")) {
            return new Error('Test.');
        }
        // Otherwise return the original error.  The error can also
        // be manipulated in other ways, so long as it's returned.
        return err;
      },
    context: authMiddleware,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Not sure about this...
// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
};

// Not sure about this... NOT WORKING YET!!!
// app.get("/service-worker.js", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "public", "service-worker.js"));
// });

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
});
