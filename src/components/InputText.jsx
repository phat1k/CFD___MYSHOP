import React, { useId } from 'react'
import styled from "styled-components"

const ErrorMessage = styled.p`
  color:red;
  white-space: nowrap;
`

export default function InputText({label, placeholder, type="text", onChange, error, ...props}) {
    const id = useId()
    return (
        <div className="form-group">
            {label &&  <label  htmlFor={id}>
                    {label}
            </label>
            }
           
            <input {...props} className="form-control form-control-sm" type={type} id="loginEmail" onChange={onChange} placeholder={placeholder}  />
            {error && <ErrorMessage> {error}</ErrorMessage>}
        </div>
    )
}
