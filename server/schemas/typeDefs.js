// import the gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Idol {
  _id: ID
  name: String
  charity: String
  description: String
  hometown: String
  charity_url: String
  image: String
  twitter_url: String
  idol_category: [Category]
  }

type Category {
      _id: ID
      name: String
    } 
  
type User {
     _id: ID
     firstName: String
     lastName: String
     username: String
     email: String
     admin: Int
     idols: [Idol]
   }

type Auth {
  token: ID
  user: User
} 

type Query {
      me: User
      categories: [Category]
      idols: [Idol]
      idol(_id: ID!): Idol
      users: [User]
      user(_id: ID!): User
    }

type Mutation {
      addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!, admin: Int!): Auth
      login(email: String!, password: String!): Auth
      saveIdol(name: String!, charity: String!, description: String!, hometown: String!, charity_url: String! image: String, image: String, twitter_url: String, idol_category:String): Idol
      }
`;

module.exports = typeDefs
// create our typeDefs
// const typeDefs = gql`




//   type Query {
//     categories: [Category]
//     idols(idol: ID, name: String): [Idol]
//     user: User
//     me: User
//   }

//   type Mutation {
//     addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!): Auth
//     login(username: String!, password: String!): Auth
//     saveIdol(name: String!, description: String, hometown: String, image: String, category: String, charity_url: String, twitter_url: String): Idol
//     updateUser(firstName: String, lastName: String, email: String, password: String): User
//   }

// `;

// // export the typeDefs
// module.exports = typeDefs;