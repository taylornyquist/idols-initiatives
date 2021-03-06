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

export const ADD_TO_HUB = gql`
mutation addToHub($idol_id: ID!) {
  addToHub(idol_id: $idol_id) {
    _id
    username
    idols {
      _id
    }
  }
}
`;

export const REMOVE_FROM_HUB = gql `
mutation removeFromHub($idol_id: ID!) {
  removeFromHub(idol_id: $idol_id) {
    _id
    username
    idols {
      _id
    }
  }
}
`

export const SAVE_NEW_IDOL = gql `
  mutation saveIdol($name: String!, $charity: String!, $description: String!, $hometown: String!, $charity_url: String!, $twitter_url: String, $image: String, $idol_category: String){
    saveIdol (name:$name, charity: $charity, description: $description, hometown: $hometown, charity_url: $charity_url, twitter_url: $twitter_url, image: $image, idol_category: $idol_category){
      name
      charity
      description
      hometown
      charity_url
      image
      twitter_url
      idol_category{
        name
      }
    } 
  }
`