import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation login(username: String!, password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

// export const ADD_USER = gql`
//   mutation addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!) {
//     addUser(firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password) {
//       token
//       user {
//         _id
//       }
//     }
//   }
// `;