import React from 'react';
import {
    Drawer,
    Box,
    Typography,
    IconButton,
    Button,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useCart } from '../../Context/CartContext';
import './Cart.css';

const Cart = () => {
    const { 
        cartItems, 
        isCartOpen, 
        toggleCart, 
        removeFromCart, 
        updateQuantity,
        clearCart 
    } = useCart();

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => 
            total + (item.price * item.quantity), 0
        ).toFixed(2);
    };

    return (
        <Drawer
            anchor="right"
            open={isCartOpen}
            onClose={toggleCart}
            className="cart-drawer"
        >
            <Box className="cart-container">
                <Box className="cart-header">
                    <Typography variant="h6">Your Cart</Typography>
                    <Box>
                        {cartItems.length > 0 && (
                            <IconButton 
                                onClick={clearCart} 
                                className="clear-cart-button"
                                title="Clear Cart"
                            >
                                <DeleteOutlineIcon />
                            </IconButton>
                        )}
                        <IconButton onClick={toggleCart}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                </Box>

                {cartItems.length === 0 ? (
                    <Box className="empty-cart">
                        <Typography>Your cart is empty</Typography>
                    </Box>
                ) : (
                    <>
                        <List className="cart-items">
                            {cartItems.map((item) => (
                                <ListItem key={item.id} className="cart-item">
                                    <img 
                                        src={item.image} 
                                        alt={item.name} 
                                        className="cart-item-image"
                                    />
                                    <Box className="cart-item-details">
                                        <ListItemText
                                            primary={item.name}
                                            secondary={
                                                <Typography variant="body2">
                                                    Rs. {item.price} × {item.quantity} = Rs. {(item.price * item.quantity).toFixed(2)}
                                                </Typography>
                                            }
                                        />
                                        <Box className="quantity-controls">
                                            <IconButton 
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                size="small"
                                                disabled={item.quantity <= 1}
                                            >
                                                <RemoveIcon />
                                            </IconButton>
                                            <Typography>{item.quantity}</Typography>
                                            <IconButton 
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                size="small"
                                            >
                                                <AddIcon />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                    <ListItemSecondaryAction>
                                        <IconButton 
                                            edge="end" 
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            <DeleteOutlineIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            ))}
                        </List>
                        <Box className="cart-footer">
                            <Typography variant="h6">
                                Total: Rs. {calculateTotal()}
                            </Typography>
                            <Button 
                                variant="contained" 
                                className="checkout-button"
                            >
                                Proceed to Checkout
                            </Button>
                        </Box>
                    </>
                )}
            </Box>
        </Drawer>
    );
};

export default Cart;