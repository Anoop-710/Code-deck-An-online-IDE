// The createContext is used instead of useState to avoid prop drilling

import { createContext,useState } from "react";

export const ModalContext = createContext();

// ModalFields: {folderName,fileName,language,type,isOpenModal}
export default function ModalProvider({children}){
    const [isOpenModal,setIsOpenModal] = useState(false);
    const [modalType,setModalType] = useState(null);

    const setModal =(isOpenModal, type) =>{
        setIsOpenModal(isOpenModal);
        setModalType(type);
    }
    return (
        <ModalContext.Provider value={{isOpenModal, setIsOpenModal, modalType, setModal}}>
            {children}
        </ModalContext.Provider>
    )
}