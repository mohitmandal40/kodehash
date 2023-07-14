"use client";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import Link from "next/link";
import { useState } from "react";

const drawerWidth = 240;

const Header = ({ linksList }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        KODEHASH
      </Typography>
      <Divider />
      <List>
        {linksList?.map((item) => (
          <Button key={item.id} sx={{ color: "#fff" }}>
            <Link
              href={`/blogpage/${item.id}`}
              style={{
                textDecoration: "none",
              }}
            >
              {item.name}
            </Link>
          </Button>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar sx={{ height: "64px" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              KODEHASH
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {linksList?.map((item) => (
                <Button key={item.id} sx={{ color: "#fff" }}>
                  <Link
                    href={`/blogpage/${item.id}`}
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                    }}
                  >
                    {item.name}
                  </Link>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
              <Typography variant="h6" sx={{ my: 2 }}>
                KODEHASH
              </Typography>
              <Divider />
              <List>
                {linksList?.map((item) => (
                  <Button key={item.id} sx={{ color: "#fff" }}>
                    <Link
                      href={`/blogpage/${item.id}`}
                      style={{
                        textDecoration: "none",
                      }}
                    >
                      {item.name}
                    </Link>
                  </Button>
                ))}
              </List>
            </Box>
          </Drawer>
        </Box>
      </Box>

      {/* <Box sx={{ display: "flex", height: "64px" }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-evenly"
            >
              <img src={Logo} style={{ width: "32px", height: "32px" }} />
              {linksList?.map((item) => (
                <Button key={item.id} sx={{ color: "#fff" }}>
                  <Link
                    href={`/blogpage/${item.id}`}
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                    }}
                  >
                    {item.name}
                  </Link>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Box> */}
    </>
  );
};

export default Header;
