import React from 'react'
import profile from "./profile.jpg"
import "./home.css"

export default function Home() {
  return (
    <div className='home'>
    {/* card */}
    <div className='card'>
     {/* card header */}
      <div className='card-header'>
        <div className='card-pic'>
       <img src={profile} alt='' />
       </div>
       <h5>Saniya</h5>
       

      </div>
      {/* card-image */}
      <div className='card-image'>
        <img src={profile} alt='card' />
        </div>
        { /*card-content*/ }
        <div className='card-content'>
        <span className="material-symbols-outlined">
           favorite
        </span>
         <p>1 like</p> 
         <p>This is amazing</p>

          </div>
          {/*add comment*/}
        <div className='add-comment'>
        <span className="material-symbols-outlined">
        sentiment_satisfied
      </span>
        <input type='text' placeholder='Add a comment'/>
        <button className='comment'>POST</button>

        </div>



    </div>


    </div>

  )
}
