import React, { useState,useContext } from 'react';
import styled from 'styled-components';
import LeftComponent from './LeftComponent';
import RightComponent from './RightComponent';
import Modal from '../../Components/Modal';

import { ModalContext } from '../../Context/ModalContext';

const StyledHome = styled.div`
  width: 100%;
  heigh: 100vh;
  font-family: 'Poppins', sans-serif;
`
const Home = () => {
  // const [isOpenModal,setIsOpenModal] = useState(true);
  const {isOpenModal} = useContext(ModalContext);

  return (
    <StyledHome>
      <LeftComponent />
      <RightComponent />
      { isOpenModal.show && <Modal/>} 
    </StyledHome>
  )
}

export default Home