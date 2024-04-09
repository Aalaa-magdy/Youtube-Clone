import React, { useState,useEffect} from 'react'
import moment from 'moment'
import './PlayVideo.css'
import like from '../../images/like.png'
import dislike from '../../images/dislike.png'
import share from '../../images/share.png'
import download from '../../images/download.png'
import {useParams} from 'react-router-dom'
import { value_converter,API_KEY2, API_KEY } from '../../data'
const PlayVideo =()=>{
  
  const {videoId}=useParams();

  const [apiData,setApiData]=useState(null);
  const [channelData,setChannelData]=useState(null);
  const [commentData,setCommentData]=useState([]);

  const fetchVideos= async()=>{
    try{
    const video_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY2}`
    await fetch(video_url).then(response => response.json()).then(data=> setApiData(data.items[0]))
    }
    catch(err){
      console.log(err)
    }
  }
  const fetchDetails = async ()=>{
    try{
      const channel_url=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY2}`;
      await fetch(channel_url).then(response=>response.json()).then(data=>setChannelData(data.items[0]))
    }
    catch(err){
      console.log(err)
    }
   try{
    const comment_url=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY2}`
    await fetch(comment_url).then(response=>response.json()).then(data=>setCommentData(data.items))
   }
   catch(err){
    console.log(err)
   }
   
  }

  useEffect(()=>{
    fetchVideos()
  },[videoId])
  useEffect(()=>{
  
   fetchDetails()
  },[apiData])
return (
 <div className='play-video'>
      <iframe src={`https://www.youtube.com/embed/${videoId}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <h3>{apiData?apiData.snippet.title:"Title Here"}</h3>
    <div className='play-video-info'>
        <p>{apiData?value_converter(apiData.statistics.viewCount):"16K"} Views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():""}</p>
        <div>
          <span><img src={like} alt=""/>{apiData?value_converter(apiData.statistics.likeCount):155}</span>
          <span><img src={dislike} alt=""/>2</span>
          <span><img src={share} alt=""/></span>
          <span><img src={download} alt=""/></span>
        </div>
     </div>
     <hr/>

     <div className="publisher">
       <img src={channelData?channelData.snippet.thumbnails.medium.url:''} alt=""/>
        <div>
            <h3>{apiData?apiData.snippet.channelTitle:''}</h3>
            <span>{channelData?value_converter(channelData.statistics.subscriberCount):"100K"}</span>
        </div>
        <button>Subscribe</button>
     </div>

     <div className="vide-description">
        <p>{apiData?apiData.snippet.description.slice(0,300):"Description Here"}</p>
        <hr/>
        <h4>{apiData?value_converter(apiData.statistics.subscriberCount):102} Comments</h4>
        {commentData.map((item,index)=>{
          return(
              <div key={index}className="comment">
                  <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt=""/>
                  <div>
                     <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}</h3>
                     <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                        <div className="comment-action">
                          <img src={like}alt=""/>
                          <span>{item.snippet.topLevelComment.snippet.likeCount}</span>
                          <img src={dislike} alt=""/>
                        </div>
                  </div>
              </div>
          )
        })}
     </div>

    
  </div>
)


    
}
export default PlayVideo