import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";

import styles from "./header.module.scss";

export const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const { pathname } = useLocation();

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="All Characters" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component={Link} to="/episodes">
            <ListItemText primary="Episodes" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>

          <Box marginLeft={1} className={styles.boxInput}></Box>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "end" }}
          >
            Rick & Morty
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor={"left"}
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        {list()}
      </Drawer>
    </Box>
  );
};
