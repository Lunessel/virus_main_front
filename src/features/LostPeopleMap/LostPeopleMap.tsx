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

const LostPeopleMap = () => {
    const user_location = useGeolocation();

    const [latLng, setLatLng] = useState<{lat: number, lng: number}>({lat: 0, lng: 0});
    useEffect(() => {
        if (!user_location.loading && user_location.latitude && user_location.longitude) {
            setLatLng({lat: user_location.latitude, lng: user_location.longitude})
        }
    }, [user_location.latitude, user_location.loading, user_location.longitude]);

    return (
        <div>
            <APIProvider apiKey={"AIzaSyBni8kPhUkYMD03DG1evIPLEc38jzrvSWg"}>
                <div className={styles.weatherStationMap}>
                    <Map defaultZoom={9} center={latLng} mapId={"fd3f6927221a4b0a"} >
                        {dataset.map((value, index) => (
                            <AdvancedMarker key={index} position={{lat: value.latitude, lng: value.longitude}}>
                                <Pin/>
                            </AdvancedMarker>
                        ))}

                    </Map>
                </div>
            </APIProvider>
        </div>
    );
};

export default LostPeopleMap;