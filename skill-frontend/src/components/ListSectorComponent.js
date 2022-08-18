import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import SectorService from "../services/SectorService";

const ListSectorComponent = () => {

    const [name, setName] = useState('')
    const [accepted_terms, setAcceptedTerms] = useState(false)
    const {id} = useParams();
    const [sector_name, setSectorName] = useState(id)
    const navigate = useNavigate();
    const refreshPage = () => {
        navigate(0);
    }
    const saveOrUpdateUser = (e) => {
        e.preventDefault();

        const user = {name, accepted_terms, sector_name}

        if (id) {
            SectorService.updateUser(id, user).then((response) => {
                navigate('/selected-sectors');
                refreshPage();
            }).catch(error => {
                console.log(error)
            })
        } else {
            SectorService.createUser(user).then((response) => {
                navigate('/selected-sectors');
                refreshPage();
            }).catch(error => {
                console.log(error)
            })
        }
    }

    const [sectors, getSectors] = useState([]);

    useEffect(() => {
        SectorService.getAllSectors().then((response) => {
            getSectors(response.data)
            console.log(response.data)
        }).catch(error => {
            console.log(error);
        })
    }, []);

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
                            <select className="form-select" multiple aria-label="multiple select"
                                    onChange={(e) => setSectorName(e.target.value)}>
                                {sectors.map((sector) => <option key={sector.id}
                                                                 value={sector.name}>{sector.name}</option>)}
                            </select>
                            <div>
                                <input type="checkbox" required={true}
                                       onChange={(e) => setAcceptedTerms(e.currentTarget.checked)}/>
                                <label className="w-15 m-2" htmlFor="agree"> I agree to <b>terms and
                                    conditions</b></label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <br/>
            <button className="btn btn-success" onClick={(e) => saveOrUpdateUser(e)}>Submit</button>
        </div>
    )
}

export default ListSectorComponent
