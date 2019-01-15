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

let idCount = 2;

const typeDefs = `
  type Query {
    welcome: String!
    links: [Link!]!
  }

  type Mutation {
    addLink(url: String!, description: String!): Link!
    removeLink(linkId: ID!): Link!
  }

  type Link {
    id: ID!
    url: String!
    description: String!
  }
`;

const resolvers = {
  Query: {
    welcome: () => 'Hacker news clone begins',
    links: () => articleLinks,
  },
  Mutation: {
    addLink: (root, args) => {
      idCount++;
      const newLink = {
        id: `link-${idCount}`,
        url: args.url,
        description: args.description
      }
      articleLinks.push(newLink);
      return newLink;
    },
    removeLink: (root, args) => {
      let linkIndex = articleLinks.findIndex((link) => {
        if (link.id === args.linkId) return true;
        else return false;
      })
      let link = articleLinks[linkIndex];
      articleLinks.splice(linkIndex, 1);
      return link;
    }
  }
}

const server = new GraphQLServer({
  typeDefs: typeDefs,
  resolvers: resolvers
})

server.start(() => console.log('Server running at http://localhost:4000'));
