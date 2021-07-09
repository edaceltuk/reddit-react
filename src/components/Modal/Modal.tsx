import React, { useContext } from 'react'
import { useToasts } from 'react-toast-notifications'

import { PostContext } from "../../Providers/PostProvider";
import Cancel from "../../assets/images/delete.png"

import './modal.sass'

export type ModalData = {
    url: string
    name: string
}

interface Props {
    data: ModalData
    setModalData: Function
    setShowModal: Function
}

const Modal = (props: Props) => {
    const { addToast } = useToasts()
    const { deletePost } = useContext(PostContext);
    const handleClose = () => {
        props.setShowModal(false)
    }

    return (
        <div className="modal-wrapper" data-testid="modal">
            <div className="modal-container">
                <div className="header">
                    <p>Remove Link</p>
                    <img src={Cancel} alt="cancel" className="delete-button" data-testid="top-cancel-button" onClick={() => handleClose()} />
                </div>
                <h3>Do You want to remove</h3>
                <p>{props.data.name}</p>
                <div className="button-container">
                    <button onClick={() => {
                        deletePost(props.data.url);
                        handleClose();
                        addToast(`${props.data.name} removed`, {
                            appearance: 'success',
                            autoDismiss: true,
                        })
                    }}
                        data-testid="delete-button"
                    >
                        OK
                    </button>
                    <button onClick={() => handleClose()} data-testid="bottom-cancel-button">
                        CANCEL
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal;