import React from 'react';
import {Link} from "react-router-dom";
import {withRouter} from 'react-router-dom';
import './Menu-item.css';

const MenuItem = ({title, item, size}) => {
    return ( 
            <div 
            className={`${size}  menu-item`}
            >
                <div 
                    className='background-image'
                    style={{
                        backgroundImage: `url(${item.imageUrl})`
                        }}
                />
                <Link to={`/shop/${item.title}`} className='content'>
                    <h1>{title.toUpperCase()}</h1>
                    <span> Shop Now</span>
                </Link>
            </div>
        
     );
}
 
export default  withRouter(MenuItem);