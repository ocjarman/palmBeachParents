import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "../CustomMUI/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { resetUser } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import Typography from "../CustomMUI/Typography";

function ResponsiveAppBar() {
  const { user } = useSelector((state: RootState) => state.user);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logout = () => {
    window.localStorage.removeItem("token");
    dispatch(resetUser());
    navigate('/')
  };

  const loggedIn = user.id !=='' && user.id !== null

  return (
    <AppBar position="static" sx={{ bgcolor: "secondary.light" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "secondary.dark",
              textDecoration: "none",
            }}
          >
            PBP
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  textAlign="center"
                  onClick={() => navigate("/")}
                >
                  {"Home"}
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  textAlign="center"
                  onClick={() => navigate("/events")}
                >
                  {"Events"}
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  textAlign="center"
                  onClick={() => navigate("/resources")}
                >
                  {"Resources"}
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "secondary.dark",
              textDecoration: "none",
            }}
          >
            PBP
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={() => navigate("/")}
              sx={{ my: 2, color: "primary.dark", display: "block" }}
            >
              Home
            </Button>
            <Button
              onClick={() => navigate("/events")}
              sx={{ my: 2, color: "primary.dark", display: "block" }}
            >
              Events
            </Button>
            <Button
              onClick={() => navigate("/resources")}
              sx={{ my: 2, color: "primary.dark", display: "block" }}
            >
              Resources
            </Button>
          </Box>
            {loggedIn && 
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={`${user.avatarUrl}`} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem>
                  <Typography
                    textAlign="center"
                    onClick={() => {
                      navigate("/profile");
                      handleCloseUserMenu();
                    }}
                  >
                    {"Profile"}
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <Typography
                    textAlign="center"
                    onClick={() => {
                      navigate("/account");
                      handleCloseUserMenu();
                    }}
                  >
                    {"Account"}
                  </Typography>
                </MenuItem>
                
                {user.isAdmin && (<MenuItem>
                  <Typography
                    textAlign="center"
                    onClick={() => {
                      navigate("/dashboard");
                      handleCloseUserMenu();
                    }}
                  >
                    {"Dashboard"}
                  </Typography>
                </MenuItem>)}

                <MenuItem>
                  <Typography
                    textAlign="center"
                    onClick={() => {
                      logout();
                      handleCloseUserMenu();
                    }}
                  >
                    {"Logout"}
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
            }
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
