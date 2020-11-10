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
`;

// export const QUERY_ME = gql`
//     {
//         me {
//         _id
//         firstName
//         lastName
//         username
//         email
//         idols {
//             _id
//             name
//             charity
//             description
//             hometown
//             charity_url
//             image
//             twitter_url
//             idol_category {
//                 _id
//                 name
//             }
//         }
//     }
// `;

export const QUERY_CATEGORIES = gql`
    {
        categories {
            _id
            name
        }
    }
`;