
import { gql } from '@apollo/client';

export const loginQuery = gql`
query Login($input: CreateUserInput) {
  login(input: $input) {
    id
    email
    password
    isDeleted
    name
    role
    token
  }
}
`;

export const verifyToken=gql`
query VerifyToken($token: String!) {
  verifyToken(token: $token) {
    oid
    loginId
    email
    iat
    exp
  }
}`


