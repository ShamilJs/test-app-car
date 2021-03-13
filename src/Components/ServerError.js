import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showError } from '../redux/action';


export const ServerError = () => {
    const err = useSelector(state => state.show.err);
    const dispatch = useDispatch();

    const alertClose = () => dispatch(showError(false, ''));

    useEffect(() => {
        if (!err.show) return;
        setTimeout(alertClose, 2000);
        // eslint-disable-next-line
    }, [err.show]);

    if (!err.show) return null;
    
    return (
        <div className="modal">
            <div className="modal__content modal__error">
                <p className="modal__text">Error: {err.message}</p>
            </div>
        </div>
    );

};