import React from "react";
import './SPMenu.css';

const SPMenu = () => {
    const streamingPlatforms = [
        {id: 1, name: 'Netflix'},
        {id: 2, name: 'Prime Video'},
        {id: 3, name: 'Disney +'},
        {id: 4, name: 'HBO Max'}
    ];
    const items = streamingPlatforms.map(sp => <li className="menu-item">{sp.name}</li>)
    return <ul className="menu">{items}</ul>;
};

export default SPMenu;