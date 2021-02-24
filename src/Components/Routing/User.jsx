
import { useParams } from 'react-router-dom';

const User = () => {

    const { id } = useParams()

    return (
        <p>The value from the url is: {id}</p>
    )

}

export default User;