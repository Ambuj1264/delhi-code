import { gql } from "@apollo/client";

export const createUser= gql`
mutation CreateUser($input: CreateUser) {
  createUser(input: $input) {
    id
    email
    password
    isDeleted
    name
    role
  }

}
  `;



