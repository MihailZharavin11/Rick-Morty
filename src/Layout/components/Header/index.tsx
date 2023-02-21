import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./header.module.scss";
import classnames from "classnames";

export const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const { pathname } = useLocation();

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/settings">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
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
          {pathname === "/" && (
            <IconButton
              size="large"
              edge="start"
              aria-label="search"
              color="inherit"
              onClick={() => setSearchOpen(!isSearchOpen)}
            >
              <SearchIcon />
            </IconButton>
          )}

          <Box marginLeft={1} className={styles.boxInput}>
            <Paper
              component="form"
              className={classnames(styles.input, {
                [styles.active]: isSearchOpen,
                [styles.disable]: !isSearchOpen,
              })}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Searching for a character"
                inputProps={{
                  "aria-label": "Searching for a character by name",
                }}
              />
              <IconButton type="button" sx={{ p: "5px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Box>

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
