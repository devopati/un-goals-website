import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
    const [activeItem, setActiveItem] = useState('Products'); // Default active item

    const navigateTo = (path, itemName) => {
        navigate(path);
        setActiveItem(itemName);
    };

    return (
        <div className="sidebar_container">
            <div className='we_titles'>Admin Panel</div>
            <div className='web_item_list_container'>
                <div className={`web_item ${activeItem === 'Products' && 'active'}`} onClick={() => navigateTo('/admin', 'Products')}>Products</div>
                <div className={`web_item ${activeItem === 'Add Products' && 'active'}`} onClick={() => navigateTo('/admin/addproduct', 'Add Products')}>Add Products</div>
            </div>
        </div>
    );
}

export default Sidebar;
