import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import InputText from "../../components/InputText"
import { fetchLogin, fetchRegister } from '../../stores/authReducer'
import validatee, { minMax, pattern, required } from "../../utils/validate"
import {  ACCOUNT_PATH, AUTH_PATH } from "../../constants/path"
import { useSelector } from 'react-redux'
import {Navigate} from 'react-router-dom'

const ErrorMessage = styled.div`
    color:red
`

export default function Login() {
  const [formLogin, setFormLogin] = useState({})
  const [errorLogin, setErrorLogin] = useState({})
  const [errorLoginMessage, setErrorLoginMessage] = useState("")

  const [formRegister] = useState({})
  const [errorRegister, setErrorRegister] = useState({})
  const [errorRegisterMessage, setErrorRegisterMessage] = useState("")

  const { user } = useSelector(store => store.UserRe)
  const dispatch = useDispatch()
  const regexpEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  const phoneVn = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
  const urlFb = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/

  const onSubmitLogin = (ev) => {
    ev.preventDefault()
    console.log(`formlogin`, formLogin)
    const errorObj = {}
    if (!formLogin?.username?.trim()) {
      errorObj.username = "nhập username vào"
    }else if(!regexpEmail.test(formLogin.username)){
      errorObj.username = "Email không đúng định dạng"
    }
    if (!formLogin?.password) {
      errorObj.password = "nhập password vào "
    }
    console.log(`errorObj`, errorObj)
    setErrorLogin(errorObj)
    if(Object.keys(errorObj).length === 0){
      setErrorLoginMessage()
      dispatch(fetchLogin({
        data: formLogin,
        error: (error) => {
            setErrorLoginMessage(error.message)
        },
        success: () => { }
    }))
    }
    
  

    // else if(!regexpEmail.test(formLogin.username)){
    //   errorObj.username = "username không đúng định dạng"
    // }
    // if (!formLogin?.name?.trim()) {
    //   errorObj.name = "nhập họ và tên vào"
    // }

    // const error = validate(formLogin, {
    //   usename:[
    //     required('Email là bắt buộc'),
    //     pattern('email','vui lòng nhập đúng định dạng')
    //   ],
    //   password:[
    //     required('Password là bắt buộc'),
    //     minMax(6, 32, 'mật khẩu phải nằm trong khoảng 6 đến 32 kí tự')
    //   ]
    // })

  //   const errorObj = validatee(formLogin, {
  //     username: [
  //       required('Email là bắt buộc'),
  //       pattern('email','vui lòng nhập đúng định dạng')
      
  //     ],
  //     password: [
  //       required('Password là bắt buộc'),
  //     ]
  //   })
  //   console.log(`error`, errorObj)
  //   setErrorLogin(errorObj)
  //   if (Object.keys(errorObj).lenght === 0) {
  //     alert("thành công")
  //   }
  }
  const onSubmitRegister = (ev) => {
    ev.preventDefault()
    console.log(`clickccccccccccccccccc`)
    console.log(`formRegister`, formRegister)
    const errorObjj = {}
    if (!formRegister?.name) {
      errorObjj.name = "nhập họ tên vào "
    }
    if (!formRegister?.username?.trim()) {
      errorObjj.username = "nhập username vào"
    }else if(!regexpEmail.test(formRegister.username)){
      errorObjj.username = "Email không đúng định dạng"
    }
    if (!formRegister?.password) {
      errorObjj.password = "nhập password vào "
    }
    if (!formRegister?.ConfirmPassword) {
      errorObjj.ConfirmPassword = "nhập password vào "
    }
    else if(!(formRegister?.password === formRegister.ConfirmPassword)){
      errorObjj.ConfirmPassword = " password k trùng "
    }
    console.log(`errorObjj`, errorObjj)
    setErrorRegister(errorObjj)
    if(Object.keys(errorObjj).length === 0){
      setErrorRegisterMessage()
      // console.log(`thành công`)
      dispatch(fetchRegister({
        data: formRegister,
        error: (error) => {
          setErrorRegisterMessage(error.error)
        },
        success: () => { 
          dispatch(fetchLogin({
            data: {
              username: formRegister.username,
              password: formRegister.password
            }
        }))
        }
    }))
    }
  }
  if(user) return <Navigate to={ACCOUNT_PATH}/>
  return (
    <div>
      <section className="py-12">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              {/* Card */}
              <div className="card card-lg mb-10 mb-md-0">
                <div className="card-body">
                  {/* Heading */}
                  <h6 className="mb-7">Returning Customer</h6>
                  {/* Form */}
                  {
                    errorLoginMessage && <ErrorMessage>{errorLoginMessage}</ErrorMessage>
                  }
                  <form onSubmit={onSubmitLogin}>
                    <div className="row">
                      <div className="col-12">
                        {/* Email */}
                        <InputText
                          placeholder="Email Address *"
                          onChange={ev => formLogin.username = ev.target.value}
                          error={errorLogin.username}
                        />
                      </div>
                      <div className="col-12">
                        {/* Password */}
                        <InputText
                          placeholder="Password *"
                          type="password"
                          onChange={ev => formLogin.password = ev.target.value}
                          error={errorLogin.password}
                        />
                      </div>
                      <div className="col-12 col-md">
                        {/* Remember */}
                        <div className="form-group">
                          <div className="custom-control custom-checkbox">
                            <input className="custom-control-input" id="loginRemember" type="checkbox" />
                            <label className="custom-control-label" htmlFor="loginRemember">
                              Remember me
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-auto">
                        {/* Link */}
                        <div className="form-group">
                          <a className="font-size-sm text-reset" data-toggle="modal" href="#modalPasswordReset">Forgot
                            Password?</a>
                        </div>
                      </div>
                      <div className="col-12">
                        {/* Button */}
                        <button className="btn btn-sm btn-dark" type="submit">
                          Sign In
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              {/* Card */}
              <div className="card card-lg">
                <div className="card-body">
                  {/* Heading */}
                  <h6 className="mb-7">New Customer</h6> 
                  {/* Form */}
                  {
                    errorRegisterMessage && <ErrorMessage>{errorRegisterMessage}</ErrorMessage>
                  }
                  <form onSubmit={onSubmitRegister}>
                    <div className="row">
                      <div className="col-12">
                        {/* FULL NAMEEEEEEEEEEEEEEEEEEEEEEEEEEE */}
                        <InputText
                          placeholder="Full Name"
                          onChange={ev => formRegister.name = ev.target.value}
                          error={errorRegister.name}
                        />
                      </div>
              
                      <div className="col-12">
                        {/* Emailllllllllllllllllllllllllllllllllll */}
                        <InputText
                          placeholder="Email Address"
                          onChange={ev => formRegister.username = ev.target.value}
                          error={errorRegister.username}
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        {/* Passwordddddddddddddddddddddddd */}
                        <InputText
                          placeholder="Password *"
                          type="password"
                          onChange={ev => formRegister.password = ev.target.value}
                          error={errorRegister.password}
                        />
                      </div>
                      <div className="col-12 col-md-6">
                        {/*Confirmmmmmmmmmmmm Passworddddddddddddddddddddddddd */}
                        <InputText
                          placeholder="Confirm Password *"
                          type="password"
                          onChange={ev => formRegister.ConfirmPassword = ev.target.value}
                          error={errorRegister.ConfirmPassword}
                        />
                      </div>
                      <div className="col-12 col-md-auto">
                        {/* Link */}
                        <div className="form-group font-size-sm text-muted">
                          By registering your details, you agree with our Terms &amp; Conditions,
                          and Privacy and Cookie Policy.
                        </div>
                      </div>
                      <div className="col-12 col-md">
                        {/* Newsletter */}
                        <div className="form-group">
                          <div className="custom-control custom-checkbox">
                            <input className="custom-control-input" id="registerNewsletter" type="checkbox" />
                            <label className="custom-control-label" htmlFor="registerNewsletter">
                              Sign me up for the Newsletter!
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        {/* Button */}
                        <button className="btn btn-sm btn-dark" type="submit">
                          Register
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
