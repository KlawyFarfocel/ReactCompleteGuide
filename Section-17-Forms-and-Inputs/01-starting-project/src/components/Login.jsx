import { useRef, useState } from "react";

export default function Login() {

  const emailRef=useRef();
  const passwordRef=useRef();

  const[emailIsInvalid,setEmailIsInvalid]=useState(false)

  function handleSubmit(event){
    event.preventDefault()

    const enteredEmail=emailRef.current.value;
    const enteredPassword=passwordRef.current.value;

    const emailIsValid=enteredEmail.includes('@');
    if(!emailIsValid){
      setEmailIsInvalid(true)
      return;
    }
    setEmailIsInvalid(false)
  }
  // function handleEmailChange(event){
  //   setEnteredEmail(event.target.value)
  // }
  // function handlePasswordChange(event){
  //   setEnteredPassword(event.target.value)
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input ref={emailRef} autoComplete="username" id="email" type="email" name="email" />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter valid email</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input ref={passwordRef} autoComplete="current-password" id="password" type="password" name="current-password" />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" >Login</button>
      </p>
    </form>
  );
}
