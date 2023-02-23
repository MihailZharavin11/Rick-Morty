/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  query GetAllCharacters($page: Int,$filter: FilterCharacter) {\n    characters(page: $page,filter: $filter) {\n      results {\n        image\n        name\n        id\n        created\n      }\n      info {\n        pages\n      }\n    }\n  }\n": types.GetAllCharactersDocument,
    "\n  query GetCharacter($characterId: ID!) {\n    character(id: $characterId) {\n      created\n      gender\n      id\n      image\n      name\n      status\n      type\n      episode {\n        id\n      }\n      location {\n        name\n      }\n    }\n  }\n": types.GetCharacterDocument,
    "\n  query Characters($filter: FilterEpisode, $page: Int) {\n    episodes(filter: $filter, page: $page) {\n      results {\n        name\n        id\n        episode\n        created\n        characters {\n          id\n          name\n        }\n      }\n      info {\n        pages\n      }\n    }\n  }\n": types.CharactersDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAllCharacters($page: Int,$filter: FilterCharacter) {\n    characters(page: $page,filter: $filter) {\n      results {\n        image\n        name\n        id\n        created\n      }\n      info {\n        pages\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAllCharacters($page: Int,$filter: FilterCharacter) {\n    characters(page: $page,filter: $filter) {\n      results {\n        image\n        name\n        id\n        created\n      }\n      info {\n        pages\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetCharacter($characterId: ID!) {\n    character(id: $characterId) {\n      created\n      gender\n      id\n      image\n      name\n      status\n      type\n      episode {\n        id\n      }\n      location {\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetCharacter($characterId: ID!) {\n    character(id: $characterId) {\n      created\n      gender\n      id\n      image\n      name\n      status\n      type\n      episode {\n        id\n      }\n      location {\n        name\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Characters($filter: FilterEpisode, $page: Int) {\n    episodes(filter: $filter, page: $page) {\n      results {\n        name\n        id\n        episode\n        created\n        characters {\n          id\n          name\n        }\n      }\n      info {\n        pages\n      }\n    }\n  }\n"): (typeof documents)["\n  query Characters($filter: FilterEpisode, $page: Int) {\n    episodes(filter: $filter, page: $page) {\n      results {\n        name\n        id\n        episode\n        created\n        characters {\n          id\n          name\n        }\n      }\n      info {\n        pages\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;