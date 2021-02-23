'use strict';
import { useState } from 'react';
import AddItems from './AddItems';
import Basket from './Basket';

const ProductManager = () => {
    const [itemName, setItemName] = useState("");
    const [items, setItems] = useState([]);

    const newItem = ({ target }) => {
        setItemName(target.value);
    }

    const submitForm = (event) => {
        // prevent form submission on initial click 
        event.preventDefault();
    }

    const handleAdd = () => {
        // save item into the array 
        setItems(items => [...items, itemName]);
        console.log(items);
    }

    const handleDelete = () => {
        console.log(items);
        setItems(items => items.pop());
        console.log(items);
    }

    return (
        <>
            <AddItems newItem={newItem} submitHandler={submitForm} handleAdd={handleAdd} handleDelete={handleDelete} />
            <Basket items={items} />
        </>
    );
}

export default ProductManager;