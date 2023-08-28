import React from 'react';
import './Blog.css';
import {dawThumbnail,
mixingThumbnail,
voxThumbnail} from '../../assets/images';
const Blog = () => {
  return (
    <section className='pink' id='blogs'>
      <div className="wrapper">
        <h2 className="light">Latest Posts</h2>
        <div className="content-container">
          {/* DAW */}
          <div className="post">
            <div className="tag">DAW</div>
            <a href="#">
              <img src={dawThumbnail} alt="daw"/>
            </a>
            <a href="#">
              <h3 className="post-title">How to Use Drum Machine in Logic Pro X</h3>
            </a>
          </div>
          {/* Mixing */}
          <div className="post">
            <div className="tag">Mixing</div>
            <a href="#">
              <img src={mixingThumbnail} alt="mixing"/>
            </a>
            <a href="#">
              <h3 className="post-title">How To Mix Guitars Effectively</h3>
            </a>
          </div>
           {/* Vox */}
           <div className="post">
            <div className="tag">Vox</div>
            <a href="#">
              <img src={voxThumbnail} alt="vox"/>
            </a>
            <a href="#">
              <h3 className="post-title">The Real Power of Harmonies in Music Production</h3>
            </a>
          </div>
        </div>
        <div className="btn-container">
          <a href="#" className="all-posts-btn">All Posts</a>
        </div>
      </div>
    </section>
  )
}

export default Blog