// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

  type Category {
    _id: ID
    name: String
  }

  type Idol {
    _id: ID
    name: String
    description: String
    hometown: String
    image: String
    category: Category
    charity_url: String
    twitter_url: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    idols: [Idol]
    charities: [Charity]
    admin: String
  }

  type Charity {
    _id: ID
    name: String
    description: String
    url: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    idols(idol: ID, name: String): [Idol]
    charity(_id: ID!): Charity
    user: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    addCharity(idol: [ID]!): Charity
    addIdol(firstName: String!, lastName: String!, description: String, image: String): Idol
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateIdol(firstName: String, lastName: String): Idol
  }


`;

// export the typeDefs
module.exports = typeDefs;