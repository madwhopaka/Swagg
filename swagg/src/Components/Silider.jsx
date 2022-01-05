import React from 'react';
import Carousel, {autoplayPlugin} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import slider1 from '../images/slider1.jpg'
import slider2 from '../images/slider2.jpg'
import slider3 from '../images/slider3.jpg'
import slider4 from '../images/slider4.jpg';

function Silider() {
    return (
        <div>
            <Carousel
  plugins={[
     'infinite',
    {
      resolve: autoplayPlugin,
      options: {
        interval: 3000,
      }
    },
  ]}   
  animationSpeed={1000}
>
  <img style = {{width: "100%" }} src={slider1} alt = 'slider1'/>
  <img style = {{width: "100%" }} src={slider2}  alt = 'slider1'/>
  <img style = {{width: "100%" }} src={slider3}  alt = 'slider1'/>
  <img  style = {{width: "100%" }} src={slider4}  alt = 'slider1'/>
</Carousel>
        </div>
    )
}

export default Silider
