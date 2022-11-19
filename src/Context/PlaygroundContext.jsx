import { createContext, useState } from "react";

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
        const newFolders = folders.map((folder) => {
            if(folder.id === folderId){
                folder['playgrounds'] = folder['playgrounds'].filter((playgrounds) => playgrounds.id !== cardId)
            }
            return folder;
        })
        setFolders(newFolders);
    }

    const deleteFolder = (folderId) => {
        setFolders(folders.filter((folder) => folder.id !== folderId));
    }

    //Creating/add new folder
    const addFolder = () => {
        console.log('addFolder');
    }


    //Adding new card
    const addCard = (folderId) =>{
        console.log('add card in folder', folderId);
    }

    //Add card and folder
    const addCardAndFolder = () => {
        console.log('addCardAndFolder');

    }

    //Edit folder title
    const editFolderTitle = (folderId,folderName) =>{
        setFolders({
            ...folders,
            [folderId]: {
                ...folders[folderId],
                title: folderName,
            }
        })
    }

    //Edit card title
    const editCardTitle = (folderId,cardId,PlaygroundTitle) =>{
        setFolders({
            ...folders,
            [folderId]: {
                ...folders[folderId],
                [cardId]: {
                    ...folders[folderId][cardId],
                    title: PlaygroundTitle,
                }
            }
        })

    }

    const PlayGroundFeatures = {
        folders: folders,
        deleteCard: deleteCard,
        deleteFolder: deleteFolder,
        addFolder: addFolder,
        addCard: addCard,
        addCardAndFolder: addCardAndFolder,
        editFolderTitle: editFolderTitle,
        editCardTitle: editCardTitle
    }
    return (
        <PlaygroundContext.Provider value={PlayGroundFeatures}>
            {children}
        </PlaygroundContext.Provider>
    )
}

export default PlaygroundProvider;