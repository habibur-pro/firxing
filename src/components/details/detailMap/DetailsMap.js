"use client"
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './DetailsMap.css'




const DetailsMap = () => {
    const position = [23.794343121597283, 90.40432617658985]

    const customIcon = L.icon({
        iconUrl: '/icons/location_icon.png',
        iconSize: [32, 32],
    });

    return (
        <>

            <div className='border-t mt-10'>


                <h1 className='text-2xl my-5'>Where you will be</h1>
                <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position} icon={customIcon}>
                        <Popup>
                            Address
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </>


    );
};

export default DetailsMap;