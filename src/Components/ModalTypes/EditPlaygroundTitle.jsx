import React from 'react'
import { Header, Heading } from '../Modal'
import { IoCloseSharp } from 'react-icons/io5'
import { ModalContext } from '../../Context/ModalContext';

const EditPlaygroundTitle = () => {
  const {closeModal} = React.useContext(ModalContext);
  return (
    <>
      <Header>
        <Heading>Edit New Playground</Heading>
        <IoCloseSharp onClick={()=>closeModal()} />
      </Header>
      <p>Enter new name: <input type="text" /></p>
      <button>Edit Playground</button>
    </>
  )
}

export default EditPlaygroundTitle