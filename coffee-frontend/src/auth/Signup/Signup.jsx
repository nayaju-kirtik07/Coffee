import React, { useState } from 'react';
import { Button, TextField, Typography, Grid, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { api } from '../../api/config';
import './Signup.css';

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
        c_password: '',
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
            const response = await api.post('/signup', {
                first_name: formData.first_name,
                last_name: formData.last_name,
                username: formData.username,
                email: formData.email,
                password: formData.hashPassword,
                c_password: formData.c_hashPassword
            });

            if (response.status === 201) {
                console.log('Signup successful:', response.data);
                navigate('/login'); // Redirect to login page after successful signup
            }
        } catch (error) {
            console.error('Signup error:', error);
            setError(error.response?.data || 'An error occurred during signup');
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-content">
                <Container maxWidth="sm">
                    <Typography variant="h3" className="signup-title">
                        Create Account
                    </Typography>
                    <Typography variant="body1" className="signup-subtitle">
                        Join us for a perfect coffee experience
                    </Typography>

                    {error && (
                        <Typography color="error" className="error-message" align="center">
                            {error}
                        </Typography>
                    )}

                    <form onSubmit={handleSubmit} className="signup-form">
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="first_name"
                                    label="First Name"
                                    value={formData.first_name}
                                    onChange={handleChange}
                                    required
                                    fullWidth
                                    variant="outlined"
                                    className="input-field"
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="last_name"
                                    label="Last Name"
                                    value={formData.last_name}
                                    onChange={handleChange}
                                    required
                                    fullWidth
                                    variant="outlined"
                                    className="input-field"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="username"
                                    label="Username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                    fullWidth
                                    variant="outlined"
                                    className="input-field"
                                />
                            </Grid>
                            <Grid item xs={12}>
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
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="hashPassword"
                                    label="Password"
                                    type="password"
                                    value={formData.hashPassword}
                                    onChange={handleChange}
                                    required
                                    fullWidth
                                    variant="outlined"
                                    className="input-field"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="c_hashPassword"
                                    label="Confirm Password"
                                    type="password"
                                    value={formData.c_hashPassword}
                                    onChange={handleChange}
                                    required
                                    fullWidth
                                    variant="outlined"
                                    className="input-field"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    className="signup-button"
                                >
                                    Sign Up
                                </Button>
                            </Grid>
                        </Grid>
                    </form>

                    <Typography className="login-link">
                        Already have an account?
                        <Button
                            onClick={() => navigate("/login")}
                            className="login-button"
                        >
                            Login
                        </Button>
                    </Typography>
                </Container>
            </div>
        </div>
    );
};

export default Signup;