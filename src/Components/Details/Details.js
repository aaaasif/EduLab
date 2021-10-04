import React, { useEffect, useState } from 'react';
import './details.css'
import DesplayDetails from "../DisplayDetails/DesplayDetails"

const Details = () => {
    const[details, setDetails] = useState([]);
    useEffect( ()=>{
        fetch(`./FakeDb.json`)
        .then(res => res.json())
        .then(data =>console.log(data))
    },[])
    return (
        <div>
            <div>
                {
                    details.map(detail => <DesplayDetails
                    detail={detail}
                    ></DesplayDetails>)
                }
            </div>
        </div>
    );
};

export default Details;