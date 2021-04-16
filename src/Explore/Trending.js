import React,{useEffect,useState} from 'react'
import Explorepost from "./Explorepost"
import "./Trending.css"
import axios from '../axios'
function Trending() {
   
      const [trendingpost,settrendingpost]=useState("")
       async function gettrendingpost(){
         await axios.get(`/api/posts/trending/`)
          .then((res)=>{
              settrendingpost(res)
              console.log(res)
        })
       }
        useEffect(() => {
            gettrendingpost()
        }, [])
        
    
    return (
        <div>
    {trendingpost != "" ? 
                            (trendingpost.data).map((data)=>{
                                return(
            
                                    
                                    <div className="trending">
                                    <div className="trending-c1">
                                        <img src={`https://res.cloudinary.com/di9lrcrlj/${data.image}`}alt=""/>
                                    </div>
                                    <div className="trending-c2">
                                        <div className="trending-c2-caption">
                                            {data.caption}
                                        </div>
                                        <div className="trending-c2-userinfo">
                                            <div className="trending-c2-userinfo-text">
                                                
                                            <div className="trending-c2-username">
                                                {data.user.user.username}
                                            </div>
                                            <div className="trending-c2-name">
                                               {data.user.user.first_name +" "+ data.user.user.last_name}
                                            </div>
                                            </div>
                                            <div className="trending-c2-profileimg">
                                              <img src="/image/7.jpg" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>      
                
                            )}):
                                <div>
                                    hello     
                                </div>
                        } 
                

                </div>
    )
    
}

export default Trending
