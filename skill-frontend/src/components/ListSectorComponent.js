import React, {useEffect, useState} from 'react'
import SectorService from "../services/SectorService";

const ListSectorComponent = () => {

    const [sectors, setSectors] = useState([]);

    useEffect(() => {

        SectorService.getAllSectors().then((response) => {
          setSectors(response.data)
          console.log(response.data)
        }).catch(error =>{
            console.log(error);
        })

    }, []);


    return (
        <div className="container">
            <h2 className="text-center"> List Sectors </h2>
            <table className="table table-bordered table-striped">
                <thead>
                <th> Sectors</th>
                <th> Actions</th>
                </thead>
                <tbody>
                {
                    sectors.map(
                        sector =>
                            <tr key={sector.id}>
                                <td> {sector.name} </td>
                            </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default ListSectorComponent
