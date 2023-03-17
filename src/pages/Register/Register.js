import { useState } from 'react'

const Register = () => {

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  const onSubmit = (event) => {
    // evita la carga del formulario
    event.preventDefault()
    if (password !== repeatPassword) {
      console.log('las claves no son iguales')
      return
    }

    console.log('registro exitoso')
  }

  const onReset = () => {
    setUserName('')
    setEmail('')
    setPassword('')
    setRepeatPassword('')
  }

  return (
    <div className='form-page mt-5 text-white'>
      <h1>Register</h1>
      <form
        autoComplete='off'
        onSubmit={onSubmit}
        // onSubmit={(event) => onSubmit(event)}
        onReset={onReset}
        id='RegisterForm'
      >
        <input
          required
          type='text'
          placeholder='username'
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <input 
          required
          name='email'
          type='email'
          placeholder='example@example.com'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input 
          required
          minLength={8}
          type='password'
          placeholder='Ingrese su clave'
          value={password}
          onChange={(event) => setPassword(event.target.value) }
        />
        <input
          required
          minLength={8}
          type='password'
          placeholder='Repita su clave'
          value={repeatPassword}
          onChange={(event => setRepeatPassword(event.target.value))}
        />

      </form>

      <div className='d-flex gap-3 justify-content-between'>
        <button type='reset' className='btn btn-outline-danger' form='RegisterForm'>
          Limpiar campos
        </button>

        <button type='submit' className='btn btn-outline-light' form='RegisterForm'>
          Registrarme
        </button>
      </div>
    </div>
  )
}

export default Register
