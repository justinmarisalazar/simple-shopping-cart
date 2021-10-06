import React from 'react'

function Cart(props) {
    const {cartItems, setCartItems} = props;

    const addQuantity = (cartItem) => {
        setCartItems(cartItems.map(x =>
            x.name === cartItem.name ? {cartItem, qty: cartItem.qty + 1} : x)
        );
    }

    return (
        <div className="card">
            <h2>Cart</h2>
            <ul className="noBullet">
                {cartItems.map(cartItem => (
                    <li key={cartItem.id}>
                        {cartItem.name} | Quantity: {cartItem.qty}
                        <button className="space">-</button>
                        <button onClick={() => addQuantity(cartItem)}>+</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Cart
