

const Employee = ({ person }) => {
    return (
        <>
            <tr>
                <th scope="row">{person.id}</th>
                <td>{person.employee_name}</td>
                <td>{person.employee_age}</td>
            </tr>

        </>
    )
}

export default Employee;