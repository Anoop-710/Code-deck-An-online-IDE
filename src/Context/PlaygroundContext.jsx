import { createContext, useState } from "react";
import { v4 as uuid} from 'uuid';
export const PlaygroundContext = createContext();

const PlaygroundProvider = ({ children }) => {
    // rough implementation of a playground

    const [folders, setFolders] = useState({
       '1': {
        title: "folder1",
            
            playgrounds: {
               '1_1': {
                   
                    title: "playground1",
                    language: "javascript",
                },

                '1_2':{
                    
                    title: "playground2",
                    language: "javascript",
                },
            }
        },
       '2': {
            name: "folder2",
           
            playgrounds: {
                '2_1': {
                   
                    title: "playground1",
                    language: "javascript",
                },
                '2_2': {
                    
                    title: "playground2",
                    language: "javascript",
                },
            }
        },
})

    const deleteCard = (folderId, cardId) => {
        setFolders((oldState) => {
            const newState = { ...oldState };
            delete newState[folderId].playgrounds[cardId];
            return newState;
        });
    }

    const deleteFolder = (folderId) => {
        setFolders((oldState) => {
            const newState = { ...oldState };
            delete newState[folderId];
            return newState;
        });
    }

    //Creating/add new folder
    const addFolder = (folderName) => {
        setFolders((oldState) => {
            const newState = { ...oldState };

            newState[uuid()] = {
                title: folderName,
                playgrounds: {}
            }

            return newState;
        })
    }


    //Adding new card
    const addPlayground = (folderId, playgroundName, language) => {
        setFolders((oldState) => {
            const newState = { ...oldState };

            newState[folderId].playgrounds[uuid()] = {
                title: playgroundName,
                language: language
            }

            return newState;
        })
    }

    //Add card and folder
    const addPlaygroundAndFolder = (folderName, playgroundName, language) => {
        setFolders((oldState) => {
            const newState = { ...oldState }

            newState[uuid()] = {
                title: folderName,
                playgrounds: {
                    [uuid()]: {
                        title: playgroundName,
                        language: language
                    }
                }
            }

            return newState;
        })
    }

    //Edit folder title
    const editFolderTitle = (folderId, folderName) => {
        setFolders((oldState) => {
            const newState = { ...oldState }
            newState[folderId].title = folderName;
            return newState;
        })
    }



    //Edit card title
    const editPlaygroundTitle = (folderId,cardId,PlaygroundTitle) =>{
       setFolders((oldState) => {
        const newState = {...oldState };
        newState[folderId].playgrounds[cardId].title = PlaygroundTitle;
        return newState;
       })

    }

    const PlayGroundFeatures = {
        folders: folders,
        deleteCard: deleteCard,
        deleteFolder: deleteFolder,
        addFolder: addFolder,
        addPlayground: addPlayground,
        addPlaygroundAndFolder: addPlaygroundAndFolder,
        editFolderTitle: editFolderTitle,
        editFolderTitle: editFolderTitle,
    }
    return (
        <PlaygroundContext.Provider value={PlayGroundFeatures}>
            {children}
        </PlaygroundContext.Provider>
    )
}

export default PlaygroundProvider;