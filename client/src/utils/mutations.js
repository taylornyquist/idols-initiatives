import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $username: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const SAVE_IDOL= gql `
  mutation saveIdol($name: String!, $charity: String!, $description: String!, $hometown: String!, $charity_url: String! $image: String  ){
    saveIdol(name: $name, charity: $charity, description: $description, hometown: $hometown, charity_url: $charity_url, image: $image){
      name
      charity
      description
      hometown
      charity_url
      twitter_url
      image
  }
}
`