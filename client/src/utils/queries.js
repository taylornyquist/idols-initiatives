import gql from 'graphql-tag';

export const QUERY_ALL_IDOLS = gql`
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
            idol_category {
                _id
                name
            }
        }  
    }
`

export const QUERY_MY_IDOLS = gql`
    {
        me {
        _id
        username
        idols {
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

export const QUERY_CATEGORIES = gql`
    {
        categories {
            _id
            name
        }
    }
`;