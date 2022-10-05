import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import img1 from "../img/slider1.png"

const Slider = () => {
  return (
    <AwesomeSlider>
    <div><img src="https://images.pexels.com/photos/5799285/pexels-photo-5799285.jpeg?cs=srgb&dl=pexels-serena-koi-5799285.jpg&fm=jpg" alt="" srcset="" /></div>
    <div><img src="https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?cs=srgb&dl=pexels-shattha-pilabut-135620.jpg&fm=jpg" alt="" srcset="" /></div>
    <div><img src="https://images.pexels.com/photos/5799285/pexels-photo-5799285.jpeg?cs=srgb&dl=pexels-serena-koi-5799285.jpg&fm=jpg" alt="" srcset="" /></div>
  </AwesomeSlider>
  )
}

export default Slider