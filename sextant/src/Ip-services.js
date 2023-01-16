import React, {useState, useEffect} from 'react';
import Axios from 'axios';

function IpServices() {
    const [ip, setIp] = useState("null");

    useEffect (() => {
    Axios.get("https://geo.ipify.org/api/v2/country?apiKey=at_RBSlwBlijoYV1zBxGDrTYFG9QWixE")
    .then((res) => {setIp(res.data.ip);});
    }, []);

    return(
        <div>{ip}</div>
    );
};

export default IpServices;
