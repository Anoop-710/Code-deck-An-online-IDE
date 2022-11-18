import React from 'react'
import { Header, Heading } from '../Modal'
import {IoCloseSharp} from 'react-icons/io5'
import { ModalContext } from '../../Context/ModalContext'
const NewFolder = () => {
  const {closeModal} = React.useContext(ModalContext);
  return (
    <>
      <Header>
        <Heading>Create New Folder</Heading>
        <IoCloseSharp  onClick={()=> closeModal()} />
      </Header>
      <p>Enter Folder Name: <input type="text" /></p>
      <button>Create New Folder</button>
    </>
  )
}

export default NewFolder