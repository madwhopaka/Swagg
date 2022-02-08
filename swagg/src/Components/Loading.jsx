import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import styled from 'styled-components';


const Container = styled.div `
height: 100vh ;
display:flex;
justify-content: center;
align-items: center;
flex-direction:center;` ; 



function Loading(props) {
  return <Container>
    
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={props.backdrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
  </Container>;
}

export default Loading;
