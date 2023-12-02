
import { useUsers } from "../hooks/useUsers";

const UserPages = () => {
    const {backenData} = useUsers();
    return (
        <>
            {
            (typeof backenData.users === 'undefined') ?
            (<p>Loading.........</p>) :

            <div className='container mt-8'>
            <div className='table-responsive'>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>BUZZWORD</th>
                            <th>CATCH</th>
                            <th>COMPANY</th>
                            <th>DEPARTAMENT</th>
                            <th>DUNS</th>
                            <th>AVATAR</th>
                            <th>FAKE COMPANY NAME</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                        (backenData.users.map((user, i)=>
                    <tr key={i}>
                    <td>{user.id}</td>
                    <td>{user.buzzword}</td>
                    <td>{user.catch_phrase}</td>
                    <td>{user.company_name}</td>
                    <td>{user.departament}</td>
                    <td>{user.duns}</td>
                    <td><img src={user.avatar} alt={user.id}
                        className='img-thumbail' style={{width:50}} />
                    </td>
                    <td>{user.fake_company_name}</td>
                    </tr>
                    ))
                    }
            </tbody>
            </table>
            </div>
            </div>

        }
        </>
    )
}

export default UserPages
