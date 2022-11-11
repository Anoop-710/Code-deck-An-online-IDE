import React from 'react';
import styled from 'styled-components';
import LeftComponent from './LeftComponent';


const StyledHome = styled.div`
  width: 100%;
  heigh: 100vh;
  font-family: 'Poppins', sans-serif;
`
function index() {
  return (
    <div>
      <LeftComponent/>
    </div>
  )
}

export default index