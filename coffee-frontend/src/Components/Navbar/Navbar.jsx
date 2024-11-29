import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Stack,
    IconButton,
    Drawer,
    List,
    ListItem,
    TextField,
    InputAdornment,
    Box
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.css';
import { useAuth } from '../../Context/AuthContext';

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const appBar = document.querySelector('.app-bar');
            if (window.scrollY > 50) {
                appBar.classList.add('scrolled');
            } else {
                appBar.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    useEffect(() => {
        if (user) {
            console.log('Current user:', user);
        }
    }, [user]);

    const drawer = (
        <div className="mobile-menu">
            <div className="drawer-header">
                <Typography variant="h6" className="drawer-title">
                    Grab a Coffee
                </Typography>
                <IconButton onClick={handleDrawerToggle}>
                    <CloseIcon />
                </IconButton>
            </div>
            <List>
                <ListItem>
                    <Button className="mobile-nav-button" fullWidth>
                        Home
                    </Button>
                </ListItem>
                <ListItem>
                    <Button className="mobile-nav-button" fullWidth>
                        Menu
                    </Button>
                </ListItem>
                <ListItem>
                    <Button className="mobile-nav-button" fullWidth>
                        Contact
                    </Button>
                </ListItem>
                <ListItem>
                    {user ? (
                        <Button 
                            className="mobile-nav-button" 
                            fullWidth 
                            onClick={handleLogout}
                        >
                            Logout
                        </Button>
                    ) : (
                        <Button 
                            className="mobile-nav-button" 
                            fullWidth 
                            onClick={() => navigate("/login")}
                        >
                            Sign Up
                        </Button>
                    )}
                </ListItem>
                <ListItem>
                    <TextField
                        fullWidth
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearch}
                        variant="outlined"
                        className="search-input"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </ListItem>
            </List>
        </div>
    );

    return (
        <AppBar position="fixed" className="app-bar">
            <Toolbar className="toolbar">
                {/* Logo */}
                <Typography
                    variant="h6"
                    className="logo-text"
                    fontFamily="Playfair Display"
                >
                    Grab a Coffee
                </Typography>

                {/* Center Navigation */}
                <Stack direction="row" spacing={2} className="center-nav">
                    <Button className="nav-button">Home</Button>
                    <Button className="nav-button">Menu</Button>
                    <Button className="nav-button">Contact</Button>
                </Stack>

                {/* Right Side Items */}
                <Stack direction="row" spacing={2} className="right-nav">
                    <TextField
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearch}
                        variant="outlined"
                        size="small"
                        className="search-input"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <IconButton className="cart-icon">
                        <ShoppingCartIcon />
                    </IconButton>
                    {user ? (
                        <Button 
                            onClick={handleLogout} 
                            className="navbar-signup-button"
                        >
                            Logout
                        </Button>
                    ) : (
                        <Button 
                            onClick={() => navigate("/login")} 
                            className="navbar-signup-button"
                        >
                            Sign Up
                        </Button>
                    )}
                </Stack>

                {/* Mobile Menu Icon */}
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    className="menu-icon"
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>

            {/* Mobile Drawer */}
            <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                className="mobile-drawer"
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
};

export default Navbar;