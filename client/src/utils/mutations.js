import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_BOOK = gql`
  mutation saveBook($newBook: NewBook) {
    saveBook(newBook: $newBook) {
      _id
      username
      email
      savedBooks { 
          bookId
          authors
          description
          image
          link
          title
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation deleteBook($bookId: ID!) {
    deleteBook(bookId: $bookId) {
      _id
      username
      email
      savedBooks { 
          bookId
          authors
          description
          image
          link
          title
      }
    }
  }
`;