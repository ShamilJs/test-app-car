import React from 'react';
import { useSelector } from 'react-redux';

export const Loader = () => {
    const loader = useSelector(state => state.show.loader);

    if (!loader) return null

    return (
        <div className="loader">
            <div className="spiner"></div>
        </div>
    );
};