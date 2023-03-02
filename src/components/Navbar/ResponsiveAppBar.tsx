import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetUser } from '../../store/userSlice';
import { useNavigate } from 'react-router-dom';

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const dispatch = useDispatch()
  const navigate = useNavigate()

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
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PBP
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" onClick={() => navigate('/')}>{'Home'}</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" onClick={() => navigate('/events')}>{'Events'}</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" onClick={() => navigate('/resources')}>{'Resources'}</Typography>
                </MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PBP
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
              <Button
                onClick={handleCloseNavMenu}
                href="/"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Home
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                href="/events"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Events
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                href="/resources"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Resources
              </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={() => navigate('/profile')}>{'Profile'}</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center" onClick={() => navigate('/account')}>{'Account'}</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center" onClick={() => navigate('/dashboard')}>{'Dashboard'}</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center" onClick={logout}>{'Logout'}</Typography>
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;