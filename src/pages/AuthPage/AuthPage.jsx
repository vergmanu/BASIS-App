import { useState } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

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
    <main>
      <h1>AuthPage</h1>
      <h3 onClick={handleClick}>
        {
          currentForm === 'login'
          ? 'Sign Up'
          : 'Log In'
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