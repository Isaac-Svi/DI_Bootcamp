import React, { useState } from 'react'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from 'react-google-maps'

const MyMapComponent = withScriptjs(
    withGoogleMap((props) => {
        const [coords, setCoords] = useState({
            lat: '',
            lng: '',
        })
        navigator.geolocation.getCurrentPosition((pos) => {
            setCoords({
                lat: pos.coords.latitude,
                lng: pos.coords.longitude,
            })
        })

        if (typeof coords.lat !== 'number' || typeof coords.lng !== 'number')
            return null

        return (
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: coords.lat, lng: coords.lng }}
            >
                {props.isMarkerShown && (
                    <Marker position={{ lat: coords.lat, lng: coords.lng }} />
                )}
            </GoogleMap>
        )
    })
)

const props = {
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
}

export default () => <MyMapComponent {...props} isMarkerShown />
