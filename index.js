
const { ApolloServer, gql } = require('apollo-server');

// Define types
const typeDefs = gql`
  type Book {
    title: String
    author: String
    pages: Int
  }

  type Query {
    hello: String
    books: [Book]
  }
`;

// Dummy data
const books = [
  {
    title: 'Harry Potter',
    author: 'J.K. Rowling',
    pages: 500
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    pages: 208
  },
];

// Resolvers
const resolvers = {
  Query: {
    hello: () => 'Hello again!',
    books: () => books
  }
};

// Server setup
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
