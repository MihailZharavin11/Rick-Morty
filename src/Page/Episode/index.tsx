import {
  Box,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FixedSizeList, ListChildComponentProps } from "react-window";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import classNames from "classnames";
import styles from "./episode.module.scss";
export const Episode = () => {
  const { id } = useParams();
  const [isArrowDown, setArrowDown] = useState(false);

  const renderRow = (props: ListChildComponentProps) => {
    const { index, style } = props;

    return (
      <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemButton>
          <ListItemText primary={`Item ${index + 1}`} />
        </ListItemButton>
      </ListItem>
    );
  };

  return (
    <div className="wrapper">
      Characters
      <IconButton
        onClick={() => {
          setArrowDown(!isArrowDown);
        }}
      >
        <KeyboardArrowUpIcon
          className={classNames(
            styles.arrow,
            isArrowDown ? styles.arrowDown : ""
          )}
        />
      </IconButton>
      {isArrowDown && (
        <Box
          sx={{
            width: "100%",
            height: 200,
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
        >
          <FixedSizeList
            height={200}
            width={360}
            itemSize={46}
            itemCount={200}
            overscanCount={5}
          >
            {renderRow}
          </FixedSizeList>
        </Box>
      )}
    </div>
  );
};
