import React, { useCallback, useEffect, useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  minWidth: '100%',
  minHeight: '40vh',
  height: '100%',
};

function Map({ center }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBgdt7wA-iBp5bQ8oW-SL-1cYIthSUFvrA',
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    // const marker = new window.google.maps.Marker({
    //   position: center,
    //   map,
    //   title: 'Hello World!',
    //   optimized: true,
    // });
    // const infoWindow = new window.google.maps.InfoWindow({
    //   content: 'Hello World!',
    // });
    // infoWindow.open({
    //   anchor: marker,
    //   map,
    // });
    // marker.setMap(map);
    // setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  useEffect(() => {
    if (map) {
      map.panTo(center);
      map.setZoom(14);
    }
  }, [map, center]);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
