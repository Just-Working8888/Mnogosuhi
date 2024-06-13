import React, { useEffect } from 'react'
import { load } from '@2gis/mapgl';
import { MapWrapper } from './MapWrapper';

const Map = () => {
    useEffect(() => {
        let map: any
        load().then((mapglAPI) => {
            map = new mapglAPI.Map('map-container', {
                center: [74.593379, 42.878941], // Координаты центра карты
                zoom: 13,
                key: 'YOUR_2GIS_API_KEY', // Замените на ваш API-ключ 2GIS
            });

            map.on('click', (event: any) => {
                console.log('Coordinates:', event.lngLat);
            });
        });

        // Уничтожить карту при размонтировании компонента
        return () => map && map.destroy();
    }, []);
    return (
        <div>
            <MapWrapper />
        </div>
    )
}

export default Map
