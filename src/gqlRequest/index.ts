import { gql } from "../generated/gql";

export const GET_ALL_CHARACTERS = gql(`
  query GetAllCharacters($page: Int) {
    characters(page: $page) {
      results {
        image
        name
        id
        created
      }
      info {
        pages
      }
    }
  }
`);

export const GET_CHARACTER = gql(`
  query GetCharacter($characterId: ID!) {
    character(id: $characterId) {
      created
      gender
      id
      image
      name
      status
      type
      episode {
        id
      }
      location {
        name
      }
    }
  }
`);
