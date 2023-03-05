import React, { FC, useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, InputBase, Paper } from "@mui/material";

type InputPlaceProps = {
  clickOnSearch: (inputValue: string) => void;
  clickOnClear: () => void;
  width?: string;
};

export const InputPlace: FC<InputPlaceProps> = ({
  clickOnClear,
  clickOnSearch,
  width = "340px",
}) => {
  const [input, setInput] = useState("");

  const handleSearchButton = () => {
    clickOnSearch(input);
    setInput("");
  };

  const handleClearButton = () => {
    clickOnClear();
    setInput("");
  };

  return (
    <Paper
      style={{
        width,
        display: "flex",
      }}
      component="form"
    >
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
        }}
        placeholder="Search for an episode by name"
        inputProps={{
          "aria-label": "Search for an episode by name",
        }}
        value={input}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setInput(event.target.value);
        }}
      />
      <IconButton
        onClick={handleSearchButton}
        type="button"
        sx={{ p: "5px" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <IconButton
        onClick={handleClearButton}
        type="button"
        sx={{ p: "5px" }}
        aria-label="close"
      >
        <CloseIcon />
      </IconButton>
    </Paper>
  );
};
