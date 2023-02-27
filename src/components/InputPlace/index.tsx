import React, { FC } from "react";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, InputBase, Paper } from "@mui/material";

type InputPlaceProps = {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  clickOnSearch: () => void;
  clickOnClear: () => void;
  width?: string;
};

export const InputPlace: FC<InputPlaceProps> = ({
  inputValue,
  setInputValue,
  clickOnClear,
  clickOnSearch,
  width = "340px",
}) => {
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
        value={inputValue}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setInputValue(event.target.value);
        }}
      />
      <IconButton
        onClick={clickOnSearch}
        type="button"
        sx={{ p: "5px" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <IconButton
        onClick={clickOnClear}
        type="button"
        sx={{ p: "5px" }}
        aria-label="close"
      >
        <CloseIcon />
      </IconButton>
    </Paper>
  );
};
