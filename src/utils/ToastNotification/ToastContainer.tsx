import React from 'react'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastWrapper = ({children}:{children:React.ReactNode}) => {
    return (
        <>
            <ToastContainer rtl/>
            {children}
        </>
    )
}

export default ToastWrapper
