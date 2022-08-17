import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import SectorService from "../services/SectorService";

const ListSectorComponent = () => {

    const [sectors, setSectors] = useState([]);
    // const {id} = useParams();

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
    const saveUser = (e) => {
        e.preventDefault();

        const user = {name, accepted_terms: true}

        SectorService.createUser(user).then((response) => {
            navigate('/users');
            refreshPage();
        }).catch(error => {
            console.log(error)
        });
    }

    // useEffect(() => {
    //
    //     SectorService.getUserById(id).then((response) => {
    //         setName(response.data.name)
    //     }).catch(error => {
    //         console.log(error)
    //     })
    //
    // }, [id]);

    return (

        <div className="container">
            <br/><br/>
            <div className="card">
                <h2 className="text-center"> Sector Picking Form </h2>
                <div className="card-body">
                    <form>
                        <div className="form-group mb-2">
                            <label className="form-label"> Name :</label>
                            <input
                                required={true}
                                type="text"
                                placeholder="Enter Your Name"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            >
                            </input>
                            <br/>
                            <label className="form-label"> List of Sectors:</label>
                            <select className="form-select">
                                {sectors.map((sector) => <option key={sector.id} value={sector.name}>{sector.name}</option>)}
                            </select>
                            <div>
                                <input type="checkbox" required={true} onChange={()=>{}}/>
                                <label className="w-15 m-2" htmlFor="agree"> I agree to <b>terms and
                                    conditions</b></label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <button className="btn btn-success" onClick={(e) => saveUser(e)}>Submit</button>

        </div>
    )
}

export default ListSectorComponent
