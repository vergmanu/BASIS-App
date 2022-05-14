import { useState } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import './AuthPage.css'

export default function AuthPage({ setUser }) {
  const [ currentForm, setCurrentForm ] = useState('login')

  function handleClick() {
    if(currentForm === 'login') {
      setCurrentForm('signup')
    } else {
      setCurrentForm('login')
    }
  }

  return (
    <main className="container AuthPage">
      <br />
      <h3 onClick={handleClick}>
        {
          currentForm === 'login'
          ? 'NEW USER? SIGN UP'
          : 'HAVE AN ACCOUNT? LOG IN'
        }
      </h3>
        {
          currentForm === 'login'
          ? <LoginForm setUser={setUser}/>
          :
          <SignUpForm setUser={setUser}/>
        }
    </main>
  );
}