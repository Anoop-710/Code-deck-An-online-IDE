import React, { useState ,useContext } from 'react'
import { Header, Heading } from '../Modal'
import {IoCloseSharp} from 'react-icons/io5'
import { ModalContext } from '../../Context/ModalContext'
import { PlaygroundContext } from '../../Context/PlaygroundContext'

 
const EditFolder = () => {
  const {closeModal, isOpenModal} = React.useContext(ModalContext);
  const {editFolderTitle ,folders} = useContext(PlaygroundContext);

  
  const folderId = isOpenModal.identifiers.folderId;
  const [folderTitle, setFolderTitle] = useState(folders[folderId].title);
  return (
    <>
      <Header>
        <Heading>Edit Folder</Heading>
        <IoCloseSharp  onClick={()=>closeModal()} />
      </Header>
      <p>Enter New Name: <input type="text" onChange={(e)=>(setFolderTitle(e.target.value))}/></p>
      <button onClick={()=>{editFolderTitle(folderId,folderTitle) 
      closeModal()
      }}>Edit New Folder</button> 
    </>
  )
}

export default EditFolder