import React from 'react'
import profile from './profile.jpg'
import "./profile.css"

export default function Profile() {
  return (
    <div className='profile'>
    {/*profile frame*/}
    <div className='profile-frame'>
      {/* profile pic */}
    <div className='profile-pic'>
      <img src={profile} alt='' />

    </div>
    {/* profile-data */}
    <div className='profile-data'>
      <h1>Saniya</h1>
   <div className='profile-info' style={{display:"flex"}}>
        <p>40 posts</p>
        <p>40 followers</p>
        <p>40 following</p>

      </div>

    </div>


    </div>
    <hr style={{
      width:"90%",
      margin:"auto",
      opacity:"0.8",
      margin : "25px auto"
    }}/>
    {/*Gallery */}
    <div className='gallery'>
      <img src={profile} alt='' height="40px" width="40px"/>
      <img src={profile} alt='' height="40px" width="40px"/>
      <img src={profile} alt='' height="40px" width="40px"/>
      <img src={profile} alt='' height="40px" width="40px"/>
      <img src={profile} alt='' height="40px" width="40px"/>
      <img src={profile} alt='' height="40px" width="40px"/>
    </div>

    </div>
  );
}
