const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const colors = require('colors');
const connectDB = require('./config/db');

const schema = require('./schema/schema');

const PORT = process.env.PORT || 3000;
const app = express();

// Connect to DB
connectDB();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === 'development'
}));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// 'mongodb+srv://graphql123:graphql123@mern-graphql.1a2qxw0.mongodb.net/management_db?retryWrites=true&w=majority'