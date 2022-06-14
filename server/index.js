const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const colors = require('colors');
const connectDB = require('./config/db');
const morgan = require('morgan');

const schema = require('./schema/schema');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(morgan('dev'));

app.use(cors());

// Connect to DB
connectDB();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(5000, () => {
  console.log(`Server running on http://localhost:${5000}`);
});

// 'mongodb+srv://graphql123:graphql123@mern-graphql.1a2qxw0.mongodb.net/management_db?retryWrites=true&w=majority'