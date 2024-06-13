import React from 'react';

export const MapWrapper = React.memo(
    () => {
        return <div id='map-container' style={{ width: '100%', height: '300px' }}></div>;
    },
    () => true,
);
