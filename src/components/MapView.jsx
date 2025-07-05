import { useEffect, useRef } from 'react';

const MapView = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const loader = new window.google.maps.Map(mapRef.current, {
      center: { lat: 28.4595, lng: 77.0266 },
      zoom: 14,
    });

    new window.google.maps.Marker({
      position: { lat: 28.46, lng: 77.026 },
      map: loader,
      icon: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
      title: 'Overflowing Bin',
    });
  }, []);

  return <div ref={mapRef} style={{ height: '400px', width: '100%' }} />;
};

export default MapView;