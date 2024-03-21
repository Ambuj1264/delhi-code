import { gql } from "@apollo/client";

export const demoToolDetails = gql`
query FindDemoToolDetails($toolUniqueName: String!) {
  FindDemoToolDetails(toolUniqueName: $toolUniqueName) {
    toolName
    videoLink
    toolDetails
    toolExtras
    toolUniqueName
    isDeleted
  }
}
`;
