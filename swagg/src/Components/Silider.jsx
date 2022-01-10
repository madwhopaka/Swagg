import Carousel, {autoplayPlugin} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import slider1 from '../images/slider1.jpg'
import slider2 from '../images/slider2.jpg'
import slider3 from '../images/slider3.jpg'
import slider4 from '../images/slider4.jpg';
import slidermob2 from '../images/slidermob2.jpg' ;
import slidermob1 from '../images/slidermob1.jpg';
import slidermob3 from '../images/slidermob3.jpg';
import slidermob4 from '../images/slidermob4.jpg';
import styled from 'styled-components';
import React, {useState,useEffect} from 'react' ; 

const Image = styled.img`
width: 100%; 
height: 90%; 
` ; 
const Container = styled.div `
display: flex;
align-items: center; 
justify-content: center;

` ;
function Silider() {
  const [dimensions, setDimensions] = React.useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })

useEffect(() => {
    function handleResize() {
        setDimensions({
          height: window.innerHeight,
          width: window.innerWidth
        });
    }

    window.addEventListener('resize', handleResize);
});

    return (
        <Container>
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
  <Image  src={dimensions.height>dimensions.width?slidermob1:slider1} alt = 'slider1'/>
  <Image src={dimensions.height>dimensions.width?slidermob2:slider2}  alt = 'slider1'/>
  <Image src={dimensions.height>dimensions.width?slidermob3:slider3}  alt = 'slider1'/>
  <Image src={dimensions.height>dimensions.width?slidermob4:slider4}  alt = 'slider1'/>
</Carousel>
        </Container>
    )
}

export default Silider
