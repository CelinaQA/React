'use strict';

const Basket = ({ items }) => {

    const Display = ({ itemName, itemQuantity }) => <li> {itemName}  x{itemQuantity} </li>

    return (
        <ul>
            <h2>Shopping basket:</h2>
            {items.map((item, i) => (
                <Display key={i} itemName={item.itemName} itemQuantity={item.quantity} />
            ))}
        </ul>
    )
}
export default Basket;