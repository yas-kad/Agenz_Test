import React from 'react'
import { GoogleMap, useLoadScript, } from '@react-google-maps/api';
import './Map.css'
function Map() {
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: "AIzaSyCLdszu6GiovZNBOUIM4WxYqcVB9EP9Zxo",
  })

  if (!isLoaded)
    return <div>Loading...</div>;
  return (
    <Maps />
  )
}

function Maps() {
  const defaultMapOptions = {
    fullscreenControl: false,
    disableDefaultUI: "true"
  };
  return (
    <GoogleMap
        zoom={10}
        center={{lat: 33.5722875, lng: -7.5869925}}
        mapContainerClassName="map-container"
        options={defaultMapOptions}
        >
    </GoogleMap>
  )
}

export default Map