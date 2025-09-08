import { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import styled from 'styled-components';

function KakaoMap({ location, hallName }) {
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    if (!location) return;

    const geocoder = new window.kakao.maps.services.Geocoder();

    geocoder.addressSearch(location, function (result, status) {
      if (status === window.kakao.maps.services.Status.OK) {
        const lat = parseFloat(result[0].y);
        const lng = parseFloat(result[0].x);
        setCoords({ lat, lng });
      } else {
        console.error('주소 변환 실패:', status);
      }
    });
  }, [location]);

  return (
    <Map
      center={
        coords || { lat: 33.450701, lng: 126.570667 } // 기본값
      }
      style={{ width: '100%', height: '100%' }}
      level={3}
    >
      {coords && (
        <MapMarker position={coords}/>
      )}
    </Map>
  );
}

export default KakaoMap;