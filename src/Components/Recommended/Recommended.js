import React ,{useState,useEffect}from 'react'
import './Recommended.css'
import { API_KEY2,value_converter } from '../../data';
import {Link} from 'react-router-dom'
const Recommended =({categoryId})=>{

   const [apiData,setApiData]=useState([])
   
   const fetchData = async () => {
      try{
      const relative_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY2}`
      await fetch(relative_url).then(response=>response.json()).then(data=>setApiData(data.items))
      }catch(error){
        console.log(error)
      }
   }
   
   useEffect(()=>{
    fetchData();
   },[])

     return(
         <div className='recommended'>

              {apiData.map((item , index)=>{
               return(
                  <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key ={index} className="side-video-list">
                  <img src={item.snippet.thumbnails.medium.url}alt=""/> 
                   <div class="vid-info">
                      <h2>{item.snippet.title}</h2>
                      <h3>{item.snippet.channelTitle}</h3>
                      <p>{value_converter(item.statistics.viewCount)} Views</p>
                   </div>
              </Link>
               )
              })}
         </div>
     )
}
export default Recommended