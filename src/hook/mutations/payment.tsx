

  import { gql } from "@apollo/client";

export const paymentCheckout= gql`
mutation PaymentCheckout($userId: String!) {
    paymentCheckout(userId: $userId)
  }
  `;

