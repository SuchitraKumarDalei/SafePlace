import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export default function GeoFencing(){
    const [position,setPosition] = useState({lat:null,lng:null});
    const[status,setStatus] = useState("Detecting location....");
    const username = "Aditya Prasad Dash";

    useEffect(()=>{
        if(navigator.geolocation){
            navigator.geolocation.watchPosition(
                async(pos)=>{
                    const lat = pos.coords.latitude;
                    const lng = pos.coords.longitude;
                    setPosition({lat,lng});
                
                    try{
                        const res = await axios.post("http://localhost:5000/api/location",{
                            lat,lng,username
                        });
                        setStatus(`${res.data.massage} is (${res.data.distance})m away`)
                    }catch(err){
                        setStatus("Geo Location not working.....!");
                    }
                },
                (err) => {
                    console.error(err);
                    setStatus("Permission denied or unavailable");
                },
                { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 }
            )
        }else{
            setStatus("Geo location not fetched")
        }
    },[]);
    return (
        <div>
            Geo Fencing
        </div>
    )
}