"use client"

import React, {useEffect, useState} from 'react';
import styles from './LostPeopleMap.module.scss'

import { useGeolocation } from "@uidotdev/usehooks";
import dataset from './dataset.json'
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
    InfoWindow,
} from "@vis.gl/react-google-maps";
import SidebarInfo from "@/features/SidebarInfo/SidebarInfo";


const LostPeopleMap = () => {
    const user_location = useGeolocation();
    const [active, setActive] = useState<boolean>(false)
    const [latLng, setLatLng] = useState<{lat: number, lng: number}>({lat: 0, lng: 0});
    useEffect(() => {
        if (!user_location.loading && user_location.latitude && user_location.longitude) {
            setLatLng({lat: user_location.latitude, lng: user_location.longitude})
        }
    }, [user_location.latitude, user_location.loading, user_location.longitude]);

    return (
        <div>
            <APIProvider apiKey={"AIzaSyAv3pmRiimKkpwcy5Jp4pVWby2apJz0LzU"} >
                <div className={styles.weatherStationMap}>
                    <Map
                        defaultZoom={9}
                        center={latLng} mapId={"aef11bcaed8d296f"}
                    >
                        {dataset.map((value, index) => (
                            <div key={index}>
                                <AdvancedMarker  position={{lat: value.latitude, lng: value.longitude}} onClick={() => setActive(true)}>
                                    <Pin/>
                                </AdvancedMarker>
                                <SidebarInfo active={active} setActive={setActive} person={value}/>

                            </div>
                        ))}

                    </Map>
                </div>
            </APIProvider>
        </div>
    );
};

export default LostPeopleMap;