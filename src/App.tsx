import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "@apollo/client";
import { gql } from "./generated/gql";

function App() {
  const GET_CHARACTERS = gql(/* GraphQL */ `
    query ExampleQuery {
      characters {
        results {
          name
          id
          image
        }
      }
    }
  `);
  const { data, loading, error } = useQuery(GET_CHARACTERS);

  if (loading) {
    return <>LOADING....</>;
  }

  if (error) {
    return <>ERROR!!!</>;
  }

  return (
    <div className="App">
      {data &&
        data.characters?.results?.map((characters) => {
          return (
            <div key={characters?.id} className="wrapper">
              {characters?.name}
            </div>
          );
        })}
    </div>
  );
}

export default App;
