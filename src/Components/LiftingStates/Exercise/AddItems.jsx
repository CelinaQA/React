'use strict';

const AddItems = ({ newItem, submitHandler, handleAdd, handleDelete }) => {
    return (
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Enter item name:" onChange={newItem} />
            <button type="button" onClick={handleAdd}> Add Item </button>
            <button type="button" onClick={handleDelete}> Delete Last Item </button>
        </form>
    )
}
export default AddItems; 