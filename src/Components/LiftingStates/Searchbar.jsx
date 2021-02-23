import SearchableList from "./SearchableList"

const Searchbar = (props) => {

    const { stateQuery, updateQuery, stateCheck, updateCheck } = props;

    return (
        <>
            <input type="text" onChange={updateQuery} value={stateQuery} />
            <label>Only show completed tasks:</label>
            <input type="checkbox" onChange={updateCheck} checked={stateCheck} />
        </>

    )
}

export default Searchbar;