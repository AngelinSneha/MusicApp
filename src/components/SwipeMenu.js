import React, { useState, useContext, useEffect, useCallback } from "react";

import {
  SwipeableDrawer,
  Avatar,
  Divider,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link as MaterialLink
} from "@material-ui/core";

// import sun from '@material-ui/icons/Brightness5';
// import B2 from '@material-ui/icons/Brightness2';
import {
  AccountCircle,
  Feedback,
  Info,
  FreeBreakfast,
  People,
  Settings
} from "@material-ui/icons";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import { motion, AnimatePresence } from "framer-motion";

import { Link } from "react-router-dom";

import { GlobalContext } from "./GlobalState";
import "./darkMode.css";
import moon from "../images/moon-solid.svg";
import sun from "../images/sun-solid.svg";

const SwipeMenu = () => {
  const [{ menuOpen, themeSelectValue }, dispatch] = useContext(GlobalContext);

  const setMenuOpen = data => {
    dispatch({ type: "setMenuOpen", snippet: data });
  };

  const setThemeSelectValue = useCallback(
    data => {
      dispatch({ type: "setThemeSelectValue", snippet: data });
    },
    [dispatch]
  );

  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    if (themeSelectValue === "Dark") {
      setIsNight(true);
    } else {
      setIsNight(false);
    }
  }, [themeSelectValue]);

  const changeTheme = theme => {
    setThemeSelectValue(theme);
    localStorage.setItem("selectedTheme", theme);
  };

  const handleThemeToggle = () => {
    if (!isNight) {
      changeTheme("Dark");
      setIsNight(false);
    } else {
      changeTheme("Default");
      setIsNight(true);
    }
  };

  return (
    <SwipeableDrawer
      open={menuOpen}
      onClose={() => setMenuOpen(false)}
      onOpen={() => setMenuOpen(true)}
    >
      <div style={{ width: "300px" }}>
        <div
          style={{
            margin: "35px",
            position: "relative",
            width: "30px",
            height: "30px"
          }}
        >
          <AnimatePresence>
            <motion.img
              key={isNight ? sun : moon}
              initial={{ scale: 1.5 }}
              animate={{ scale: 1.5, rotate: "360deg" }}
              exit={{ scale: 0 }}
              // transition={{ duration: 0.5 }}
              src={isNight ? sun : moon}
              onClick={() => handleThemeToggle()}
              className="dayNightToggleBtn"
              alt="sun moon icon"
            />
          </AnimatePresence>
        </div>

        <Divider />

        <List
          component="nav"
          className={"pinkLists"}
          onClick={() => setMenuOpen(false)}
        >
          <ListItem button component={Link} to="/settings">
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button component={Link} to="/quotes">
            <ListItemIcon>
              <MusicNoteIcon />
            </ListItemIcon>
            <ListItemText primary="Quotes" />
          </ListItem>
        </List>
      </div>
    </SwipeableDrawer>
  );
};

export default SwipeMenu;