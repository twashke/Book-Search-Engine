import { gql } from "@apollo/client";

export const GET_ME = gql`
    {
        me {
            _id
            username
            email
            bookCount
            savedBooks {
                # _id
                bookId
                title
                authors
                description
                image
                link
            }
        }
    }
`;