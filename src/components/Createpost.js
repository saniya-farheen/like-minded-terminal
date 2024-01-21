import React from 'react'
import profile from './profile.jpg'
import "./createpost.css"
import icon from "./img-icon.png"

export default function Createpost() {
    const loadfile = (event)=>{
        var output = document.getElementById('output');
        output.src = URL.createObjectURL(event.target.files[0]);
        output.onload = function() {
          URL.revokeObjectURL(output.src) // free memory
    }
}

  return (
    <div className='createPost'>
        {/*header*/}
    <div className='post-header'>
        <h4 style={{margin:"3px auto"}}>Create new Post</h4>
        <button id='post-btn'>Share</button>
    </div>
    {/*image-preview*/}
    <div className='main-div'>
        <img id = "output" src={icon}/>
        <input type='file' accept='image/*' onChange={(event)=>{
            loadfile(event)
        }}/>
        

    </div>
    {/*details*/}
    <div className='details'>
        <div className='card-header'>
            <div className='card-pic'>
                <img src={profile} alt=''/>
            </div>
            <h5>Saniya</h5>
        </div>
        <div >
        <textarea type="text" placeholder='write a caption'>

        </textarea>
        </div>
    </div>
    </div>
  )
}
