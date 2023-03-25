import { ErrorMessage } from 'formik';
import React from 'react'
import { BiErrorCircle } from "react-icons/bi";
import { MdError } from "react-icons/md";
import { IoMdWarning } from "react-icons/io";


const CustomErrorMessage = ({ name }) => {
    const ErrorIcon = () => <IoMdWarning />;

    return (
        <ErrorMessage name={name} >
            {msg => (
                <div className="input-error-message">
                    {msg}
                    <ErrorIcon />

                </div>
            )}
        </ErrorMessage>
    )
}

export default CustomErrorMessage