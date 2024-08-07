import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import './LoginRegister.css'
import { userRegister } from "../../Services/User"

function Register() {
  // create state members
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  // get a hook to navigate
  const navigate = useNavigate()

  const onCancel = () => {
    navigate('/login')
  }

  const isValidEmail = () => {
    return email.includes('@')
  }

  const onRegister = async () => {
    // client side validation
    if (firstName.length === 0) {
      toast.warning('enter first name')
    } else if (lastName.length === 0) {
      toast.warning('enter last name')
    } else if (email.length === 0) {
      toast.warning('enter email')
    } else if (!isValidEmail()) {
      toast.warning('Email is not valid')
    } else if (password.length === 0) {
      toast.warning('enter password')
    } else if (confirmPassword.length === 0) {
      toast.warning('confirm password')
    } else if (password !== confirmPassword) {
      toast.warning('password does not match')
    } else {
      const result = await userRegister(firstName, lastName, email, password)
      if (result['message'] === 'success') {
        toast.success('successfully registered a user')
        navigate('/login')
      } else {
        toast.error('Failed to register the user')
      }
    }
  }

  const onBack = () => {
    navigate(-1); // Navigate to the previous page
  }

  return (
    <div className='form-container'>
      <div className='form'>
        <h2 className='page-header'>Register</h2>
        <div className='mb-3'>
          <label htmlFor='firstName'>First Name</label>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            type='text'
            className='form-control'
            id='firstName'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='lastName'>Last Name</label>
          <input
            onChange={(e) => setLastName(e.target.value)}
            type='text'
            className='form-control'
            id='lastName'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='email'>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            className='form-control'
            id='email'
          />
        </div>
        {/* <div className='mb-3'>
          <label htmlFor='phone'>Phone Number</label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            type='tel'
            className='form-control'
            id='phone'
          />
        </div> */}
        <div className='mb-3'>
          <label htmlFor='password'>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            className='form-control'
            id='password'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            type='password'
            className='form-control'
            id='confirmPassword'
          />
        </div>
        <div className='mb-3'>
          Already have an account? <Link to='/login'>Login here</Link>
        </div>
        <div className='button-container'>
          <button onClick={onRegister} className='btn btn-success'>Register</button>
          <button onClick={onCancel} className='btn btn-danger'>Cancel</button>
          <button onClick={onBack} className='btn btn-back'>Back</button>
        </div>
      </div>
    </div>
  )
}

export default Register
