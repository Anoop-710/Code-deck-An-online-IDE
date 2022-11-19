import React, {useState} from 'react'
import { Header, Heading } from '../Modal'
import { IoCloseSharp } from 'react-icons/io5'
import { ModalContext } from '../../Context/ModalContext';
import { PlaygroundContext } from '../../Context/PlaygroundContext';

const EditPlaygroundTitle = () => {
  const {isOpenModal,closeModal} = React.useContext(ModalContext);
  const {editPlaygroundTitle, folders} = React.useContext(PlaygroundContext);

  const { folderId, cardId } = isOpenModal.identifiers;
  const [playgroundTitle, setPlaygroundTitle] = useState(folders[folderId].playgrounds[cardId].title);
  return (
    <>
      <Header>
        <Heading>Edit New Playground</Heading>
        <IoCloseSharp onClick={()=>closeModal()} />
      </Header>
      <input type="text" onChange={(e) => setPlaygroundTitle(e.target.value)} />
        <button onClick={() => {
          editPlaygroundTitle(folderId, cardId, playgroundTitle)
          closeModal()
        }}>Update Title</button>
    </>
  )
}

export default EditPlaygroundTitle