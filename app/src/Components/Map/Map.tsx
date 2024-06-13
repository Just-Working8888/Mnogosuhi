import React, { useEffect, useState } from 'react';
import { load } from '@2gis/mapgl';
import { MapWrapper } from './MapWrapper';
import { useAppDispatch, useAppSelector } from 'store/hook';
import { setAdressTitle } from 'store/slices/adressesSlice';

// Типы для состояния и координат
interface PointState {
    adressPoint: [number, number];
}

const Map: React.FC = () => {
    const points = useAppSelector((state: { point: PointState }) => state.point);
    const [map, setMap] = useState<any | null>(null);
    const markerRef = React.useRef<any | null>(null);
    const dispatch = useAppDispatch()
    // Функция для обратного геокодирования
    const reverseGeocode = async (lngLat: [number, number]) => {
        const [longitude, latitude] = lngLat;
        const apiKey = '3ccce139-b395-41a9-8adf-d57b6b23f0dd'; // Замените на ваш API-ключ 2GIS
        const url = `https://catalog.api.2gis.com/3.0/items/geocode?lon=${longitude}&lat=${latitude}&key=${apiKey}`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.result && data.result.items && data.result.items.length > 0) {
                const address = data.result.items[0].full_name;
                console.log('Address:', address);
                dispatch(setAdressTitle(address))
                return address;
            } else {
                console.log('Address not found');
                return 'Address not found';
            }
        } catch (error) {
            console.error('Error during reverse geocoding:', error);
            return 'Error during reverse geocoding';
        }
    };

    useEffect(() => {
        load().then((mapglAPI) => {
            const options: any = {
                center: [74.593379, 42.878941], // Координаты центра карты
                zoom: 13,
                key: '3ccce139-b395-41a9-8adf-d57b6b23f0dd', // Замените на ваш API-ключ 2GIS
            };

            const mapInstance = new mapglAPI.Map('map-container', options);

            mapInstance.on('click', async (event: any) => {
                const lngLat: [number, number] = [event.lngLat[0], event.lngLat[1]]; // Приведение типов
                const address = await reverseGeocode(lngLat); // Вызов функции обратного геокодирования
                console.log('Coordinates:', lngLat);
                dispatch(setAdressTitle(address))
                // Удалить предыдущий маркер, если он существует
                if (markerRef.current) {
                    markerRef.current.destroy();
                }

                // Добавить новый маркер
                const newMarker = new mapglAPI.Marker(mapInstance, {
                    coordinates: lngLat,
                    label: {
                        text: '' as any,
                        offset: [0, -20],
                    },
                });

                markerRef.current = newMarker;
            });

            setMap(mapInstance);
        });

        // Уничтожить карту при размонтировании компонента
        return () => {
            if (map) {
                map.destroy();
            }
            if (markerRef.current) {
                markerRef.current.destroy();
            }
        };
    }, []); // Пустой массив зависимостей для инициализации карты только один раз

    useEffect(() => {
        if (map && points && points.adressPoint) {
            map.setCenter(points.adressPoint);
        }
    }, [map, points]); // Зависимость от points для центрирования карты при изменении

    return (
        <div>
            <MapWrapper />
        </div>
    );
}

export default Map;
