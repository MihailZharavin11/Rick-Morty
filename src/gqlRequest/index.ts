import { gql } from "../generated/gql";

export const GET_ALL_CHARACTERS = gql(/* GraphQL */ `
  query ExampleQuery {
    characters {
      results {
        image
        name
        id
        created
      }
    }
  }
`);
