// The createContext is used instead of useState to avoid prop drilling

import { createContext,useState } from "react";

export const ModalContext = createContext();

// ModalFields: {folderName,fileName,language,type,isOpenModal}
export default function ModalProvider({children}){

    const initialModalFields = {
        show: false,
        modalType: "",
        identifier: {
            folderId: "",
            cardId: "",
        }  
    }

    const [isOpenModal,setIsOpenModal] = useState({...initialModalFields}); 
    
    const openModal = (value) =>{
        setIsOpenModal(value);
    }

    const closeModal = () =>{  
        setIsOpenModal({...initialModalFields});
    }

    const ModalFeatures = {
        isOpenModal: isOpenModal,
        openModal: openModal,
        closeModal: closeModal,
    }
    return (
        <ModalContext.Provider value={ModalFeatures}>
            {children}
        </ModalContext.Provider>
    )
}