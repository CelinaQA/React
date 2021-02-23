'use strict';

const Basket = ({ items }) => {

    const Display = ({ itemName }) => <li> {itemName} </li>

    return (
        <ul>
            <h2>Shopping basket:</h2>
            {items.map((itemName, i) => (
                <Display key={i} itemName={itemName} />
            ))}
        </ul>
    )
}
export default Basket;