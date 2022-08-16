import React, {useEffect, useState} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import SectorService from "../services/SectorService";

const ListSectorComponent = () => {

    const [sectors, setSectors] = useState([]);
    const [users, setUsers] = useState([]);
    const {id} = useParams();

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

        const user = {name}

            SectorService.createUser(user).then((response) => {
                navigate('/sectors');
                refreshPage();
            }).catch(error => {
                console.log(error)
            });
        }

    useEffect(() => {

        SectorService.getUserById(id).then((response) =>{
            setName(response.data.name)
        }).catch(error => {
            console.log(error)
        })

    }, []);
    

    const title = () => {

        if (id) {
            return <h5 className= "text-center"> Update sector</h5>
        }
            return <h5 className= "text-center"> Add sector</h5>
    }

    const [agree, setAgree] = useState(false);

    const checkboxHandler = () => {
        setAgree(!agree);
    }
    return (

        <div className="container">
            <br/><br/>
            <div className="card">
                {
                    title()
                }
                <div className="card-body">
                    <form>
                        <div className="form-group mb-2">
                            <label className="form-label"> Name :</label>
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            >
                            </input>
                            <button className="btn btn-success" onClick={(e) => saveUser(e)}>Submit</button>
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
                                                <td>
                                                    <Link className="btn btn-info" to={`/edit-sector/${sector.id}`} >Update</Link>
                                                </td>
                                            </tr>
                                    )
                                }
                                </tbody>
                            </table>
                            <div>
                                <input type="checkbox" id="agree" onChange={checkboxHandler} />
                                <label className= "w-15 m-2" htmlFor="agree"> I agree to <b>terms and conditions</b></label>
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
