import React from 'react';
import styled from 'styled-components';
import LeftComponent from './LeftComponent';
import RightComponent from './RightComponent';
import Modal from '../../Components/Modal';

const StyledHome = styled.div`
  width: 100%;
  heigh: 100vh;
  font-family: 'Poppins', sans-serif;
`
function index() {
  const isOpenModal = false;
  return (
    <div>
      <LeftComponent/>
      <RightComponent />
      { isOpenModal && <Modal />} 
    </div>
  )
}

export default index