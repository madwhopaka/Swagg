import styled from 'styled-components' ; 
import dod1 from '../images/dod1.jpg' ; 
import dod2 from '../images/dod2.jpg' ;
import { Link } from 'react-router-dom';
import dod3 from '../images/dod3.jpg' ;
import dod4 from '../images/dod4.jpg' ;
import { imageList } from '../utils/imageList';
import Carousel, {autoplayPlugin} from '@brainhubeu/react-carousel';

const Container = styled.div `
margin-top:10px; 
display:flex; 
width:100vw; 
flex-direction:column; 
justify-content:center;
background-color: whitesmoke;
padding-top:20px ;
padding-bottom:50px ;
box-shadow: 5px 5px 15px rgba(white, .5);
align-items:center;
text-align:center; 
`
const Image = styled.img `
height: 55vh; ` ; 

const Title = styled.h1 `
display:flex;
color:#3E4152;
font-size: 30px;
margin-bottom: 20px; 
`
const Wrapper = styled.div `
display:flex ;
justify-content:center;
align-items:center;
text-align:center;
`

function Dealofday() {
    return (
       <Container>
           <Title>DEALS OF THE DAY</Title>
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
{imageList.map((img)=> { return (
                <Link to= '/products/${'>
                <Image src= {img.image} />
                </Link>
             )  })}
</Carousel>
              
              
         
       </Container>
    )
}

export default Dealofday;
