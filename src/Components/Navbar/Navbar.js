import React from 'react'
import './Navbar.css'
import youtube from '../../images/youtube.png'
import menu_icon from '../../images/menu.png'
import profile_icon from '../../images/profile.png'
import search_icon from '../../images/search.png'
import upload_icon from '../../images/upload.png'
import more_icon from '../../images/more.png'
import notifications_icon from '../../images/notifications.png'
import {Link } from 'react-router-dom'
const Navbar = ({setSidebar}) => {
  return (
    <nav className='flex-div'>
        
         <div className='nav-left flex-div'>
             <img className='menu_icon' src={menu_icon} alt="" onClick={()=>setSidebar(prev=> prev===false ?true:false)}/>
             <Link to='/'> <img className='logo' src={youtube} alt=""/></Link>
             <span>YouTube</span>
         </div>

         <div className='nav-middle flex-div'>
            <div className='search-box flex-div'>
            <input type='text'placeholder='Search'/>
             <img  src={search_icon} alt=""/>
            </div>
        
         </div>
         
         <div className='nav-right flex-div'>
             <img className='upload_icon' src={upload_icon} alt=""/>
             
             <img className='more_icon' src={more_icon} alt=""/>
             <img className='notification_icon' src={notifications_icon} alt=""/>
             <img className='profile_icon' src={profile_icon} alt=""/>
         </div>
    </nav>
  )
}

export default Navbar