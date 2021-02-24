'use strict';
import { useState } from 'react';
import AddItems from './AddItems';
import Basket from './Basket';

const ProductManager = () => {

    const [items, setItems] = useState([]);

    const submitForm = (event) => {
        // prevent form submission on initial click 
        event.preventDefault();
    }

    const handleAdd = (data) => {
        // save item into the array 
        setItems(items => [...items, data]);
        console.log(items);
    }

    // const handleDelete = () => {
    //     console.log(items);
    //     setItems(items => items.pop());
    //     console.log(items);
    // } handleDelete={handleDelete}

    return (
        <>
            <AddItems submitHandler={submitForm} handleAdd={handleAdd} />
            <Basket items={items} />
        </>
    );
}

export default ProductManager;