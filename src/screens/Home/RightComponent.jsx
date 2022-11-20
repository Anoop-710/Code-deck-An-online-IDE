import React from 'react';
import { useContext } from 'react';
import styled from 'styled-components'
import { IoTrashOutline } from 'react-icons/io5'
import { BiEditAlt } from 'react-icons/bi'
import logo from '../../Assets/logo-small.png';

import { ModalContext } from '../../Context/ModalContext';
import { PlaygroundContext } from '../../Context/PlaygroundContext';

import { useNavigate } from 'react-router-dom'

const StyledRightComponent = styled.div`
    
  
  span {
    font-size: 20px
  }
  
  .dark-mode {
    background-color: #1a1919;
    color: white;
    // height: 100%;
    transition: background-color 0.25s ease-in-out;
    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    padding: 2rem;
    height: 100vh;
    
  }
  
  .light-mode {
    background-color: #fff;
    color: #333;
    // height: 100%;
    transition: background-color 0.25s ease-in-out;

    position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    padding: 2rem;
    height: 100vh;

  }
  
  .container {
    position: absolute;
    top: -5px;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  

  
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }
  
  .switch input { 
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  input:checked + .slider {
    background-color: #19a2c1;
  }
  
  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }
  
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  
  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }
  
  .slider.round:before {
    border-radius: 50%;
  }
  .switch-checkbox {
    padding: 10px
  }
    // position: absolute;
    top: 0;
    right: 0;
    width: 60%;
    padding: 2rem;
    height: 100vh;
    
`
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0;
`
const Heading = styled.h3`
  font-size: ${props => props.size === 'small' ? "1.25rem" : "1.75rem"};
  font-weight: 400;
  span{
    font-weight: 700;
  }
`

const AddButton = styled.div`
    font-size: 1rem;
    border-radius: 30px;
    color: dark-gray;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    span{
        font-size: 1.5rem;
        font-weight: 700;
    }
    &:hover{
        cursor: pointer;
    }
`

const FolderCard = styled.div`
    margin-bottom: 1rem;
`

const FolderIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.7rem;
    cursor: pointer;
`
const PlayGroundCards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    
`
const Card = styled.div`
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    box-shadow: 0 0 4px 0px #989898;
`

const CardContainer = styled.div`
    display: flex;
    align-items: center;
`
const CardContent = styled.div`
    
`
const Logo = styled.img`
    width: 70px;
    margin-right: 1rem;
`

const RightComponent = () => {
    const {openModal} = React.useContext(ModalContext);
    const [darkMode,setDarkMode] = React.useState(false);
    const {folders, deleteFolder, deleteCard} = useContext(PlaygroundContext);

    const navigate = useNavigate();
  return (
    <>
        
        <StyledRightComponent>
        <div className={darkMode ? 'dark-mode' : 'light-mode '}>
            <div className="container">
                <span style={{color: darkMode? 'grey' : 'white'}}>☀️</span>
                <div className='switch-checkbox'>
                    <label className='switch'>
                    <input type="checkbox"  onChange={() => setDarkMode(!darkMode) } />
                    <span className='slider round'></span>
                    </label>
                </div>
                
                <span style={{color: darkMode? 'white' : 'grey'}}>🌙</span>
            </div>
        <div>
        <Header>
        <Heading size="large">
          My <span>Playground</span>
        </Heading>
        <AddButton onClick={() => openModal({
          show: true,
          modalType: 1,
          identifiers: {
            folderId: "",
            cardId: "",
          }
        })}> <span>+</span> New Folder</AddButton>
      </Header>
      <hr />

        {/* Mapping objects  so use object entries to convert into arrays*/}
      {
        Object.entries(folders).map(([folderId,folder]) => (
          <FolderCard key={folderId}>
            <Header>
              <Heading size="small">
                {folder.title}
              </Heading>
              <FolderIcons>
                <IoTrashOutline onClick={() => deleteFolder(folderId)}/> 
                <BiEditAlt onClick={() => openModal({
                  show: true,
                  modalType: 4,
                  identifiers: {
                    folderId: folderId,
                    cardId: "",
                  }
                })} />
                <AddButton onClick={() => openModal({
                  show: true,
                  modalType: 2,
                  identifiers: {
                    folderId: folderId,
                    cardId: "",
                  }
                })}><span>+</span> New Playground</AddButton>
              </FolderIcons>
            </Header>

            <PlayGroundCards>
              {
                Object.entries(folder['playgrounds']).map((playgroundId,playground) => (
                  <Card key={playgroundId} onClick={() => {
                    navigate(`/playground/${folderId}/${playgroundId}`)
                  }}>
                    <CardContainer>
                      <Logo src={logo} />
                      <CardContent>
                        <p>{playground.title}</p>
                        <p>Language: {playground.language}</p>
                      </CardContent>
                    </CardContainer>
                    <FolderIcons onClick={(e) => {
                      e.stopPropagation(); //stop click propagation from child to parent
                    }}>
                      <IoTrashOutline onClick={() => deleteCard(folderId, playgroundId)} />
                      <BiEditAlt onClick={() => openModal({
                        show: true,
                        modalType: 5,
                        identifiers: {
                          folderId: folderId,
                          cardId: playgroundId,
                        }
                      })} />
                    </FolderIcons>
                  </Card>
                ))
              }
            </PlayGroundCards>
          </FolderCard>
        ))
      }
            </div>
        </div>
            
            
        </StyledRightComponent>
    </>
    
  )
}

export default RightComponent;