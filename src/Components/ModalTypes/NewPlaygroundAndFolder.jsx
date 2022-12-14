import React , {useState} from 'react'
import { Header, Heading } from '../Modal'
import { IoCloseSharp } from 'react-icons/io5'
import {ModalContext} from '../../Context/ModalContext';
import { PlaygroundContext } from '../../Context/PlaygroundContext';

import Select from 'react-select';
import styled from 'styled-components';


const InputWithSelect = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  row-gap: 1rem;
  column-gap: 1rem;
  margin-top: 1.2rem;
  align-items: center;
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


const NewPlaygroundAndFolder = () => {
  const {closeModal} = React.useContext(ModalContext);
  const {addPlaygroundAndFolder} = React.useContext(PlaygroundContext);
   
  const languageOptions = [
    { value: "c++", label: "C++" },
    { value: "java", label: "Java" },
    { value: "javascript", label: "JavaScript" },
    { value: "python", label: "Python" },
  ];

  const [playgroundName, setPlaygroundName] = useState("")
  const [folderName, setFolderName] = useState("")
  const [language, setLanguage] = useState(languageOptions[0]);

  const handleLanguageChange = (selectedOption) => {
    setLanguage(selectedOption);
  };


  return (
    <>
      <Header>
        <Heading>Create New Playground & Create New Folder</Heading>
        <IoCloseSharp onClick={()=>closeModal()} />
      </Header>
      <InputWithSelect>
        <label>Enter Folder Name</label>
        <input type='text' onChange={(e)=> setFolderName(e.target.value) }/>

        <label>Enter Card Name</label>
        <input type='text' onChange={(e)=> setPlaygroundName(e.target.value) } />

        <Select
          options={languageOptions}
          value={language}
          onChange={handleLanguageChange}
        />

        <button onClick={()=>{
          addPlaygroundAndFolder(folderName, playgroundName, language.label)
          closeModal();

        }}> Create Playground </button>
      </InputWithSelect>
    </>
  )
}

export default NewPlaygroundAndFolder