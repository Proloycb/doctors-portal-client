import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrimaryButton = ({children}) => {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate("/appointment")} className="btn btn-primary text-white uppercase font-bold bg-gradient-to-r from-secondary to-primary">{children}</button>
    );
};

export default PrimaryButton;