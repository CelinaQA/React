'use strict';
import { useState } from 'react';


const AddItems = ({ submitHandler, handleAdd, handleDelete }) => {

    const [itemName, setItemName] = useState("");
    const [quantity, setQuantity] = useState(0);

    const add = (e) => {
        e.preventDefault();
        const d = {
            itemName: itemName,
            quantity: quantity
        }
        handleAdd(d);
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Enter item name:" onChange={(e) => setItemName(e.target.value)} />
            <input type="text" placeholder="Enter item quantity:" onChange={(e) => setQuantity(e.target.value)} />
            <button type="button" onClick={add}> Add Item </button>
            <button type="button" onClick={handleDelete}> Delete Last Item </button>
        </form>
    )
}
export default AddItems; 