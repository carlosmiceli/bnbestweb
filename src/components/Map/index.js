import React from 'react';
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap
} from 'react-google-maps';


const Mapa = props => {

    
    return ( 
        <GoogleMap 
            defaultZoom={17}
            defaultCenter={{ lat: props.lat, lng: props.lng }}
        >
        </GoogleMap>
     );
}
 
export default withScriptjs(
    withGoogleMap(Mapa)
);