import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import SectorService from "../services/SectorService";

const ListSectorComponent = () => {

    const [sectors, setSectors] = useState([]);

    useEffect(() => {

        SectorService.getAllSectors().then((response) => {
            setSectors(response.data)
            console.log(response.data)
        }).catch(error => {
            console.log(error);
        })

    }, []);

    const [name, setName] = useState('')
    const navigate = useNavigate();
    const refreshPage = () => {
        navigate(0);
    }
    const saveSector = (e) => {
        e.preventDefault();

        const sector = {name}

        SectorService.createSector(sector).then((response) => {
            navigate('/sectors');
            refreshPage();
        }).catch(error => {
            console.log(error)

            navigate('/sectors');
            refreshPage();
        })
    }


    return (

        <div className="container">
            <br/><br/>
            <div className="card">
                <h5 className="text-center"> Please enter your name and pick the Sectors you are currently involved
                    in.</h5>
                <div className="card-body">
                    <form>
                        <div className="form-group mb-2">
                            <label className="form-label"> Name :</label>
                            <input
                                type="text"
                                placeholder="Enter Sector name"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            >
                            </input>
                            <h2 className="text-center"> List of Sectors </h2>
                            <table className="table table-bordered table-striped">
                                <tbody>
                                <tr>
                                    <td> Sectors</td>
                                    <td> Actions</td>
                                </tr>
                                </tbody>
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
                    </form>
                </div>
            </div>

            <button className="btn btn-success" onClick={(e) => saveSector(e)}>Submit</button>

        </div>
    )
}

export default ListSectorComponent
