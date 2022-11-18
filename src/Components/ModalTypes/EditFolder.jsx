import React from 'react'
import { Header, Heading } from '../Modal'
import {IoCloseSharp} from 'react-icons/io5'
import { ModalContext } from '../../Context/ModalContext'
const EditFolder = () => {
  const {closeModal} = React.useContext(ModalContext);
  return (
    <>
      <Header>
        <Heading>Edit Folder</Heading>
        <IoCloseSharp  onClick={()=>closeModal()} />
      </Header>
      <p>Enter New Name: <input type="text" /></p>
      <button>Edit New Folder</button>
    </>
  )
}

export default EditFolder