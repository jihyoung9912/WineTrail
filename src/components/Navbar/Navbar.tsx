import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUserContext } from 'hooks/useUserContext';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useWindowSize } from 'hooks/useWindowSize';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useSignOut } from 'hooks/useSignOut';
import { useSnackbar } from 'notistack';

const Navbar = () => {
  const { user }: any = useUserContext();
  const { SignOut }: any = useSignOut();
  const windowSize = useWindowSize();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const { enqueueSnackbar } = useSnackbar();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const AppBarContainer = styled(AppBar)`
    position: static;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
    background-color: #fff;
  `;

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '30px',
    border: '2px solid #a4508b',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#5f0a87',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      color: '#000',
      [theme.breakpoints.up('sm')]: {
        width: '30ch',
        '&:focus': {
          borderRadius: '30px',
          border: '1px solid #a4508b',
          width: '33ch',
        },
      },
    },
  }));

  return (
    <AppBarContainer>
      <Container style={{ width: '100%', maxWidth: '1200px' }}>
        {windowSize.width !== undefined && windowSize.width > 900 ? (
          <Toolbar disableGutters>
            {/* PC Logo */}
            <Link to="/">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/red-logo.svg`}
                alt="WineTrail Logo"
                style={{ width: '3.8rem', height: '3.8rem', marginRight: '3rem' }}
              />
            </Link>
            {/* PC SearchBar */}
            <Box sx={{ flexGrow: 2, display: 'flex' }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
              </Search>
            </Box>
            {/* PC Components */}
            <Box sx={{ flexGrow: 0, display: 'flex', gap: '15px' }}>
              <Link to="/">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: '#000', display: 'block', fontWeight: '700' }}
                >
                  와인 스토리
                </Button>
              </Link>
              {!user ? (
                <>
                  <Link to="/signin">
                    <Button
                      sx={{
                        display: 'block',
                        width: '7rem',
                        textAlign: 'center',
                        color: '#fff',
                        backgroundColor: '#a4508b',
                        my: 2,
                        fontWeight: '700',
                        borderRadius: '30px',
                        boxShadow: '-3px 5px 5px -3px rgba(0,0,0,0.74)',
                        '&:hover': {
                          backgroundColor: '#93487D',
                        },
                      }}
                      onClick={() => enqueueSnackbar('I love hooks')}
                    >
                      로그인
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button
                      sx={{
                        display: 'block',
                        width: '7rem',
                        textAlign: 'center',
                        color: '#fff',
                        backgroundColor: '#a4508b',
                        my: 2,
                        fontWeight: '700',
                        borderRadius: '30px',
                        boxShadow: '-3px 5px 5px -3px rgba(0,0,0,0.74)',
                        '&:hover': {
                          backgroundColor: '#93487D',
                        },
                      }}
                    >
                      회원가입
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/test">
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: '#000', display: 'block', fontWeight: '700' }}
                    >
                      마이페이지
                    </Button>
                  </Link>
                  <Link to="/">
                    <Button
                      onClick={SignOut}
                      sx={{
                        display: 'block',
                        width: '7rem',
                        textAlign: 'center',
                        color: '#fff',
                        backgroundColor: '#a4508b',
                        my: 2,
                        fontWeight: '700',
                        borderRadius: '30px',
                        boxShadow: '-3px 5px 5px -3px rgba(0,0,0,0.74)',
                        '&:hover': {
                          backgroundColor: '#93487D',
                        },
                      }}
                    >
                      로그아웃
                    </Button>
                  </Link>
                </>
              )}
            </Box>
          </Toolbar>
        ) : (
          <Toolbar disableGutters>
            {/* Mobile Hamburger Components */}
            <Box sx={{ flexGrow: 0, display: 'flex', color: '#000' }}>
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
                  display: 'block',
                }}
              >
                <Link to="/">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">와인 스토리</Typography>
                  </MenuItem>
                </Link>
                {!user ? (
                  <>
                    <Link to="/signin">
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">로그인</Typography>
                      </MenuItem>
                    </Link>

                    <Link to="/signup">
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">회원가입</Typography>
                      </MenuItem>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/test">
                      <MenuItem onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">마이페이지</Typography>
                      </MenuItem>
                    </Link>
                    <Link to="/">
                      <MenuItem
                        onClick={() => {
                          handleCloseNavMenu();
                          SignOut();
                        }}
                      >
                        <Typography textAlign="center">로그아웃</Typography>
                      </MenuItem>
                    </Link>
                  </>
                )}
              </Menu>
            </Box>

            {/* Mobile SearchBar */}
            <Box sx={{ flexGrow: 1, display: 'flex', marginLeft: '2rem' }}>
              <Search sx={{ width: '80%' }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
              </Search>
            </Box>

            {/* Mobile Logo */}
            <Link to="/">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/red-logo.svg`}
                alt="WineTrail Logo"
                style={{ width: '3.8rem', height: '3.8rem' }}
              />
            </Link>
          </Toolbar>
        )}
      </Container>
    </AppBarContainer>
  );
};

export default Navbar;
