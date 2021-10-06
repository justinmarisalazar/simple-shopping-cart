import React from 'react'

function AddProduct(props) {
    const { addItem, setItemName, itemName} = props;
    return (
        <div className="card center">
            <h2>Add Product</h2>
            <form onSubmit={addItem}>
                <label>Name of Product: </label>
                <input type="text" value={itemName} onChange={e => setItemName(e.target.value)}></input>
                <button className="space" type="submit">Add to Cart</button>
            </form>
        </div>
    )
}

export default AddProduct
