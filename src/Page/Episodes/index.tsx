import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useQuery } from "@apollo/client";
import { GET_ALL_EPISODES } from "../../gqlRequest";
export const Episodes = () => {
  const { data } = useQuery(GET_ALL_EPISODES);
  const flex = 1;

  const rowsData = data?.episodes?.results?.map((element) => {
    return {
      id: Number(element?.id),
      name: element?.name,
      episode: element?.episode,
      created: new Date(element?.created || 0).toLocaleDateString(),
      characters: element?.characters.length,
    };
  });

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex },
    { field: "name", headerName: "name", flex },
    { field: "episode", headerName: "Episode", flex },
    {
      field: "created",
      headerName: "Created",
      flex,
    },
    {
      field: "characters",
      headerName: " Characters",
      description: "This column has a value getter and is not sortable.",
      flex,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", name: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", name: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", name: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", name: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", name: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", name: null, age: 150 },
    { id: 7, lastName: "Clifford", name: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", name: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", name: "Harvey", age: 65 },
  ];

  return (
    <div style={{ height: 370, width: "100%" }}>
      <DataGrid rows={rowsData || []} columns={columns} pageSize={5} />
    </div>
  );
};
