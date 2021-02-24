import { useState, useEffect } from 'react';
import axios from 'axios';
import { Spinner } from 'reactstrap';
import Employee from './Employee';

const Tesco = () => {

    // Error
    const [error, setError] = useState(null);

    // Loading
    const [isloaded, setLoaded] = useState(false);

    // Data
    const [data, setData] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            axios.get(`http://dummy.restapiexample.com/api/v1/employees`)
                .then((response) => {
                    setLoaded(true);
                    setData(response.data.data);
                    console.log(response);
                })
                .catch((error) => {
                    setLoaded(true);
                    setError(error);
                })
        }, 2000)
    }, [])
    // Get data

    if (error) {
        return <p>Oops...something went wrong</p>
    } else if (!isloaded) {
        return (
            <>
                <p>
                    Please wait...
                        </p>
                <Spinner animation="border">
                    <span>Loading</span>
                </Spinner>
            </>
        )
    } else {
        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((person) => <Employee person={person} />)}
                    </tbody>
                </table>
            </>
        )
    }

}

export default Tesco;