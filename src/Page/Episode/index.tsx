import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FixedSizeList, ListChildComponentProps } from "react-window";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import classNames from "classnames";
import styles from "./episode.module.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useQuery } from "@apollo/client";
import { GET_EPISODE } from "../../gqlRequest";
import { CharacterListItem } from "../../components/CharacterListItem";
export const Episode = () => {
  const { id } = useParams();
  const { data, loading } = useQuery(GET_EPISODE, {
    variables: {
      episodeId: id || "1",
    },
  });

  console.log(data);

  return (
    <Box padding={3}>
      <Typography marginBottom={2} variant="subtitle1">
        Episode name: {data?.episode?.name}
      </Typography>
      <Typography marginBottom={2} variant="subtitle1">
        Date of episode creation:{" "}
        {data?.episode?.created
          ? new Date(data?.episode?.created).toLocaleDateString()
          : data?.episode?.air_date}
      </Typography>
      <Accordion sx={{ width: "300px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography> Characters</Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{
            height: "500px",
            overflow: "hidden",
            overflowY: "scroll",
          }}
        >
          <List>
            {data?.episode?.characters.map((character) => {
              if (character?.name && character?.id) {
                return (
                  <CharacterListItem
                    name={character?.name}
                    id={character?.id}
                  />
                );
              }
              return "";
            })}
          </List>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
