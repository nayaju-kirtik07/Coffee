import React, { useState } from 'react';
import { 
    Button, 
    TextField, 
    Typography, 
    Container,
    IconButton,
    InputAdornment
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { api } from '../../api/config';
import { useAuth } from '../../Context/AuthContext';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setError(''); // Clear error when user types
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await api.post('/login', {
                email: formData.email,
                password: formData.password
            });

            if (response.data.success) {
                const { 
                    refresh_token, 
                    access_token,
                    userId, 
                    user: username, 
                    profileImage 
                } = response.data;
                
                // Store complete user data
                const userData = {
                    userId,
                    username,
                    profileImage,
                    email: formData.email
                };
                
                // Login with complete user data
                login(userData, access_token);

                // Store refresh token separately
                localStorage.setItem('refreshToken', refresh_token);
                
                // Redirect to home page
                navigate('/');
            }
        } catch (error) {
            console.error('Login error:', error);
            setError(
                error.response?.data?.error || 
                'An error occurred during login'
            );
        }
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-container">
            <div className="login-content">
                <Container maxWidth="xs">
                    <Typography variant="h3" className="login-title">
                        Welcome Back
                    </Typography>
                    <Typography variant="body1" className="login-subtitle">
                        Sign in to continue your coffee journey
                    </Typography>

                    {error && (
                        <Typography color="error" className="error-message" align="center">
                            {error}
                        </Typography>
                    )}

                    <form onSubmit={handleSubmit} className="login-form">
                        <TextField
                            name="email"
                            label="Email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            fullWidth
                            variant="outlined"
                            className="input-field"
                        />
                        
                        <TextField
                            name="password"
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            value={formData.password}
                            onChange={handleChange}
                            required
                            fullWidth
                            variant="outlined"
                            className="input-field"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleClickShowPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <Button 
                            type="submit" 
                            variant="contained" 
                            fullWidth
                            className="login-submit-button"
                        >
                            Login
                        </Button>

                        <Typography className="forgot-password">
                            <Button 
                                onClick={() => navigate("/forgot-password")}
                                className="forgot-password-button"
                            >
                                Forgot Password?
                            </Button>
                        </Typography>
                    </form>

                    <Typography className="signup-link">
                        Don't have an account? 
                        <Button 
                            onClick={() => navigate("/signup")} 
                            className="signup-button"
                        >
                            Sign Up
                        </Button>
                    </Typography>
                </Container>
            </div>
        </div>
    );
};

export default Login;
