import React from 'react'
import styled from 'styled-components';
import {NewFolder,NewPlayground,NewPlaygroundAndFolder,EditFolder,EditPlaygroundTitle} from './ModalTypes'
import { ModalContext } from '../Context/ModalContext';

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

const ModalContent =styled.div`
    background-color: #fff;
    padding: 0.5rem;
`

export const Header = styled.div`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0;
`

export const Heading = styled.h3`
  font-weight: 400;
  span{
    font-weight: 700;
  }`

const Modal = ({setIsOpenModal}) => {
  const {isOpenModal} = React.useContext(ModalContext);
  const {modalType} = isOpenModal.modalType;
  return (
    <ModalContainer>
        <ModalContent>
            {modalType ===1 && <NewFolder />}
            {modalType ===2 &&< NewPlayground />}
            {modalType ===3 && <NewPlaygroundAndFolder />}
            {modalType ===4 && <EditFolder />}
            {modalType ===5 && <NewPlaygroundAndFolder />}
        </ModalContent>
    </ModalContainer>
  )
}

export default Modal 