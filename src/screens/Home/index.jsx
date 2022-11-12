import React from 'react';
import styled from 'styled-components';
import LeftComponent from './LeftComponent';
import RightComponent from './RightComponent';


const StyledHome = styled.div`
  width: 100%;
  heigh: 100vh;
  font-family: 'Poppins', sans-serif;
`
function index() {
  return (
    <div>
      <LeftComponent/>
      <RightComponent />
    </div>
  )
}

export default index