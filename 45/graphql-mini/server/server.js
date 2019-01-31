const { GraphQLServer } = require('graphql-yoga');

let articleLinks = [{
  id: 'link-0',
  url: 'www.howtographql.com',
  description: 'A resources to learn graphql. Check out the advanced sections for some more in-depth tutorials.'
}, {
  id: 'link-1',
  url: 'news.ycombinator.com',
  description: 'Hacker news is like reddit that doesn\'t suck.  Focused on tech.  Great place to improvey our chameleon skills.'
}, {
  id: 'link-2',
  url: 'https://www.graphqlhub.com/',
  description: 'Some practice APIs to play around with queries'
}]
let id = 2;

const typeDefs = `
  type Query {
    welcome: String!
    articleLinks: [Link!]!
  }
  type Mutation {
    addLink(url: String!, description: String!): Link!
    editLink(id: ID!, newUrl: String!, newDescription: String!): Link!
    removeLink(id: ID!): Link!
  }
  type Link {
    id: ID
    url: String
    description: String
  }
`;

const resolvers = {
  Query: {
    welcome: () => 'Hello World! again',
    articleLinks: () => articleLinks
  },
  Mutation: {
    addLink: (root, args) => {
      id++;
      const newLink = {
        id: `link-${id}`,
        url: args.url,
        description: args.description
      }
      articleLinks.push(newLink);
      return newLink;
    },
    editLink: (root, args) => {
      for (let i = 0; i < articleLinks.length; i++) {
        if (articleLinks[i].id === args.id) {
          articleLinks[i] = {
            id: args.id,
            url: args.newUrl,
            description: args.newDescription
          }
          return articleLinks[i];
        }
      }
    },
    removeLink: (root, args) => {
      let removedLink;
      articleLinks = articleLinks.filter((link) => {
        if (link.id === args.id) {
          removedLink = link;
          return false
        }
        return true;
      })
      return removedLink;
    }
  }
}

const server = new GraphQLServer({ typeDefs, resolvers });

server.start(() => console.log('Server running on http://localhost:4000'))