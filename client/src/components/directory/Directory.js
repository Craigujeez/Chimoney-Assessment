import React from 'react';
import {useSelector} from 'react-redux';
import MenuItem from '../menu-item/Menu-item';
import './directory.css'

const Directory = () => {
    const {directory} = useSelector(state => state.shop);
    
    return ( 
        <div className='directory-menu'>
            {
                directory.map(item=>{
                    return <MenuItem key={item.id} title={item.title} item={item} size={item.size} />
                })
            }
        </div>
     );
}
 
export default Directory;