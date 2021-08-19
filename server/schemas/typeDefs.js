const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Book {
        bookId: ID
        authors: [String]
        title: String
        description: String
        image: String
        link: String
    }

    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    input bookInput {
        authors: [String]
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password:String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(addedBook: bookInput!): User
        removeBook(bookId: ID!): User
    }


`;

module.exports = typeDefs;