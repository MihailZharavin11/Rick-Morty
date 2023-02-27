import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

type CharacterListItemProps = {
  name: string;
  id: string;
};

export const CharacterListItem: FC<CharacterListItemProps> = ({ name, id }) => {
  const navigate = useNavigate();
  return (
    <ListItem disablePadding>
      <ListItemButton
        onClick={() => {
          navigate(`/character/${id}`);
        }}
      >
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  );
};
