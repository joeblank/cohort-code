require('dotenv').config();
const { GraphQLServer } = require('graphql-yoga');
const massive = require('massive');

massive(process.env.CONNECTION_STRING).then(db => {
  const typeDefs = `
    type Query {
      allAuthors: [Author!]!
      author(id: ID): Author!
      booksByAuthor(authorId: ID): [Book!]!
    }
    type Mutation {
      addAuthor(name: String!): Author!
    }
    type Author {
      author_id: ID,
      author_name: String
      books: AuthorBooksConnection
    }
    type Book {
      book_title: String
      author_id: ID
      author_name: String
    }
    type AuthorBooksConnection {
      edges: [Book]
    }
  `;

  const resolvers = {
    Query: {
      allAuthors: async () => {
        const res = await db.authors();
        return res;
      },
      author: async (_, args) => {
        const [author] = await db.author([args.id])
        return author;
      },
      booksByAuthor: async (_, args) => {
        return await db.books_by_author([args.authorId])
      }
    },
    Mutation: {
      addAuthor: async (_, args) => {
        let [author] = await db.create_author([args.name])
        return author;
      }
    }
  }

  const server = new GraphQLServer({
    typeDefs,
    resolvers
  })

  server.start(() => console.log('Server running on http://localhost:4000'))
})