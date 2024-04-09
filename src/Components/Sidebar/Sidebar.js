import React from 'react'
import './Sidebar.css'
import home from '../../images/home.png';
import game_icon from '../../images/games.png';
import automobiles from '../../images/car-side.png';
import sports from '../../images/sport.png';
import entertainment from '../../images/movies.png';
import tech from '../../images/platform.png';
import music from '../../images/music-note.png';
import blog from '../../images/blog-text.png';
import news from '../../images/news.png';
import p1 from '../../images/p1.jpg';
import p2 from '../../images/p2.jpg';
import p3 from '../../images/p3.jpg';
import p4 from '../../images/p4.jpg';
import p5 from '../../images/p5.jpg';

const Sidebar = ({sidebar,category,setCategory}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
            <div className='shortcut-links'>
                <div className={`link ${category===0?"active":""}`}onClick={()=>{setCategory(0)}}>
                    <img src={home} alt='home'/>
                    <p>Home</p>
                </div>
                <div className={`link ${category===20?"active":""}`}onClick={()=>{setCategory(20)}}>
                    <img src={game_icon} alt='games'/>
                    <p>Games</p>
                </div>
                <div className={`link ${category===2?"active":""}`}onClick={()=>{setCategory(2)}}>
                    <img src={automobiles} alt='automobiles'/>
                    <p>Automobiles</p>
                </div>
                <div className={`link ${category===17?"active":""}`}onClick={()=>{setCategory(17)}}>
                    <img src={sports} alt='sports'/>
                    <p>Sports</p>
                </div>
                <div className={`link ${category===24?"active":""}`}onClick={()=>{setCategory(24)}}>
                    <img src={entertainment} alt='entertainment'/>
                    <p>Entertainment</p>
                </div>
                <div className={`link ${category===28?"active":""}`}onClick={()=>{setCategory(28)}}>
                    <img src={tech} alt='tech'/>
                    <p>Technology</p>
                 </div>
                 <div className={`link ${category===10?"active":""}`}onClick={()=>{setCategory(10)}}>
                    <img src={music} alt='music'/>
                    <p>Music</p>
                 </div>
                 <div className={`link ${category===22?"active":""}`}onClick={()=>{setCategory(22)}}>
                    <img src={blog} alt='blog'/>
                    <p>Blog</p>
                 </div>
                 <div className={`link ${category===25?"active":""}`}onClick={()=>{setCategory(25)}}>
                    <img src={news} alt='news'/>
                    <p>News</p>
                 </div>
         </div>
         <hr/>
         <div className='subscribed-list'>
            <h3>Subscribed</h3>
            <div className='link'>
                <img src={p1} alt='p1'/>
                <p>pieDive</p>
            </div>
            <div className='link'>
                <img src={p2} alt='p2'/>
                <p>Mrbeast</p>
            </div>
            <div className='link'>
                <img src={p3} alt='p3'/>
                <p>sugo</p>
            </div>
            <div className='link'>
                <img src={p4} alt='p4'/>
                <p>Learn</p>
            </div>
            <div className='link'>
                <img src={p5} alt='p5'/>
                <p>Family</p>
            </div>

         </div>
    </div>
  )
}

export default Sidebar