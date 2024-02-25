import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import heart from "../../assets/heart.png"
import calories from "../../assets/calories.png"
import girl from "../../assets/girl.png"

const Hero = () => {
  return (
    <div className='hero'>
        <div className='left-h'>
            <Header />
            {/* the best fitness */}
            <div className="the-best">
            <div></div>
            <span>The best fitness club</span>
            </div>

            {/* Hero heading */}
            <div className="hero-text">
              <div>
                <span className='stroke-text'>shape</span>
                <span>Your</span>
              </div>
              <div>
                <span>
                  Ideal Body
                </span>
              </div>
              <div>
                <span>We will help you to shape and build your ideal body to seems as looks like a bull.Join us.Be a bull.Not a cow.</span>
              </div>
            </div>
            {/* figures */}
            <div className="figure">
              <div>
                <span>139</span>
                <span>Expert Coach</span>
              </div>
              <div>
                <span>1000+</span><span>
                member joined</span>
              </div>
              <div>
                <span>40+</span><span>
                Fitness Programs</span>
              </div>
            </div>
            {/* hero buttons */}
            <div className="hero-buttons">
              <button className='btn'>Get Started</button>
              <button className='btn'>Learn More</button>
              </div>
        </div>
        <div className='right-h'>
          <button className="btn">Join Now</button>

          <div className="heart-rate">
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>118 bpm</span>
          </div>
          {/* Hero images */}
          <img src={hero_image} alt="" className='hero-image' />
          <img src={hero_image_back} alt="" className='hero-image-back' />
          <img src={girl} alt="" className='girl' />

        {/* calories */}
        <div className="calories">
          <img src={calories} alt="" />
          <div>
          <span>Calories Burned</span>
          <span>220 kcal</span>
          
          </div>
        </div>
        </div>
    </div>
  )
}

export default Hero