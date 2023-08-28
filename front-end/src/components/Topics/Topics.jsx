import React, { useState } from 'react'
import './Topics.css';
import {daw,frequencies,mastering,mixing,mixingConsole,vocalsProcessing, rightBlock} from '../../assets/images';
const Topics = () => {
const [currentImage,setCurrentImage]=useState(frequencies);
  return (
    <section className='black' id="topics">
        <div className='wrapper'>
            <h2>What will you learn?</h2>
            <div className='content-container'>
                <ul className="topics-list">
                    <li onMouseEnter={()=>setCurrentImage(frequencies)}>What are frequencies?</li>
                    <li onMouseEnter={()=>setCurrentImage(daw)}>Using DAW</li>
                    <li onMouseEnter={()=>setCurrentImage(vocalsProcessing)}>Vocals Processing</li>
                    <li onMouseEnter={()=>setCurrentImage(mixing)}>Mixing</li>
                    <li onMouseEnter={()=>setCurrentImage(mixingConsole)}>Mixing Console</li>
                    <li onMouseEnter={()=>setCurrentImage(mastering)}>Mastering</li>
                </ul>
                <div className='topic-image'>
                    <img src={currentImage}/>
                </div>
            </div>
            <img src={rightBlock} className='right-block-elem'/>
        </div>
    </section>
  )
}

export default Topics