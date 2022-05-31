
import { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './Form.module.css'
function Form(props) {
    const {title,link,linklName,action} = props
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [errorEmail,setErrorEmail] = useState('')
  const [errorPassword,setErrorPassword] = useState('')
  const [isEmailTouched,setIsEmailTouched] = useState(false)
  const [isPasswordTouched,setIsPasswordTouched] = useState(false)
  
  
  
  const emailHandler = (e) => {
    setEmail(e.currentTarget.value)
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(!reg.test(String(e.currentTarget.value).toLowerCase())){
        setIsEmailTouched(true)
      setErrorEmail('не корректный email')
    } else {
      setErrorEmail('')
    }
  }
  const passwordHandler = (e) => {
    setPassword(e.currentTarget.value)
    
    if(e.currentTarget.value.length < 8){
        setIsPasswordTouched(true)
      setErrorPassword('Пароль должен быть не меньше 8 символов')
    } else {
      setErrorPassword('')
    }
  }
  const onBlurHandler = (e) => {
  
    switch (e.target.name) {
      case 'email':
        if(!email){
          setIsEmailTouched(true)
          setErrorEmail('поле не может быть пустым')
        }
        break;
        case 'password':
          if(!password){
            setIsPasswordTouched(true)
            setErrorPassword('поле не может быть пустым')
          }
          
          break;
      default:
        break;
    }
   }
   const handleSubmit = (e) => {
     e.preventDefault()
     action(email,password)
   }
  return (
    <div className={s.container}>
    <h1>{title}</h1>
      <form onSubmit={e => handleSubmit(e)}>
      <div className={s.input_container}>
        {(isEmailTouched && errorEmail) && <div className={s.error}>&#9888; {errorEmail}</div>}
        <input value={email} onChange={e=>emailHandler(e)}  onBlur={e=>onBlurHandler(e)} name='email' type='text' placeholder='Email'/>
      </div>
      <div className={s.input_container}>
      {(isPasswordTouched && errorPassword) && <div className={s.error}>&#9888; {errorPassword}</div>}
        <input value={password} onChange={e=>passwordHandler(e)} onBlur={e=>onBlurHandler(e)} name='password' type='password' placeholder='Login'/>
      </div>
      <div>
        <input  type='submit' value='login'/>
        <Link to={link}>&rarr; {linklName}</Link>
      </div>
        
        
        
      </form>
    </div>
  );
}

export default Form;