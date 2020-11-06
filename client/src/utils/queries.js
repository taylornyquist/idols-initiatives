import gql from 'graphql-tag';

export const QUERY_ALL_IDOLS = gql `
    {
        idols{
            _id
            name
            charity
            description
            hometown
            charity_url
            image
            twitter_url
        }  
    }
`