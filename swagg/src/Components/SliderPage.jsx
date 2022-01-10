
import styled from 'styled-components';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import Silider from './Silider';



const Container = styled.div`

`


function SliderPage() {
  
   
    return (
     <Container >
       <Silider />
     </Container>
    );
}

export default SliderPage


// <Arrow  style = {{left:"10px"}}><ArrowBackOutlinedIcon/></Arrow>
// <Wrapper>
// <Slide>

// </Slide>
// </Wrapper>
// <Arrow style = {{right: "10px"}} ><ArrowForwardOutlinedIcon /></Arrow> 