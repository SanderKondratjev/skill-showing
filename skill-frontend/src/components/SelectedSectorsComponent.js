import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import SectorService from "../services/SectorService";

const SelectedSectorsComponent = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {

        SectorService.getAllUsers().then((response) => {
            setUsers(response.data)
            console.log(response.data)
        }).catch(error => {
            console.log(error);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <div className = "container">
            <h2 className = "text-center"> Selected Sectors </h2>
            <Link to = "/" className = "btn btn-primary mb-2" > Back </Link>
            <table className="table table-bordered table-striped">
                <thead>
                <th> Name </th>
                <th> Selected sectors </th>
                </thead>
                <tbody>
                {
                    users.map(
                        user =>
                            <tr key = {user.id}>
                                <td> {user.name} </td>
                                <td> {user.sector_id} </td>
                            </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default SelectedSectorsComponent
