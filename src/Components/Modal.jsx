import React from 'react'
import styled from 'styled-components';
import {NewFolder,NewPlayground,NewPlaygroundAndFolder,EditFolder,EditPlaygroundTitle} from './ModalTypes'
import { ModalContext } from '../Context/ModalContext';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
    
`

const ModalContent =styled.div`
  background-color: #fff;
  padding: 2rem;
  width: 35%;
  border-radius: 10px;
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

export const CloseButton = styled.button`
  background: transparent;
  outline: 0;
  border: 0;
  font-size: 2rem;
  cursor: pointer;
`

export const Input = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
  gap: 2rem;
  padding-bottom: 0;

  input {
    flex-grow: 1;
    height: 2rem;
  }

  button {
    background: #241f21;
    height: 2rem;
    color: white;
    padding: 0 2rem;
  }
`


const Modal = () => {
  const {isOpenModal} = React.useContext(ModalContext);
  const {modalType} = isOpenModal;
  return (
    <ModalContainer>
        <ModalContent>
            {modalType ===1 && <NewFolder />}
            {modalType ===2 &&< NewPlayground />}
            {modalType ===3 && <NewPlaygroundAndFolder />}
            {modalType ===4 && <EditFolder />}
            {modalType ===5 && <EditPlaygroundTitle />}
        </ModalContent>
    </ModalContainer>
  )
}

export default Modal 