import React,{useState, useEffect} from 'react'
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import {Link, useNavigate} from "react-router-dom"
import axios from 'axios';
import { StatusCodes } from 'http-status-codes';
import api from '../ApiClient';
import { toast } from "react-toastify"
import { useIsAuthenticated, useSignIn } from 'react-auth-kit'
import data from "../data.json"

interface FormErrors {
  email?: string[];
  password?: string[];
}

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [formErrors, setFormErrors] = useState<FormErrors>({})
  const signIn = useSignIn()
  const navigate = useNavigate()
  const isAuthenticated = useIsAuthenticated()


  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/home")
    }
  }, [isAuthenticated, navigate])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const formData = {email: email, password: password}
      const response = await api.post("/auth/login", formData)
      if (signIn({
        token: response.data?.data["accessToken"],
        expiresIn: 60,
        tokenType: "Bearer",
        authState: {
          id: response.data?.data["id"],
          email: response.data?.data["email"]
        }
      })) {
        toast.success(`${response.data?.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          localStorage.setItem("data", JSON.stringify(data))
        navigate("/home")
      }
      else {
        toast.error(`Something went wrong`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
        console.log("Something went wrong")
        
      }
      
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === StatusCodes.UNPROCESSABLE_ENTITY) {
          setFormErrors(error.response?.data['error'])
        }
        else {
          setFormErrors({})
          toast.error(`${error.response?.data['message']}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        }
      }
      else {
        toast.error(`Something went wrong`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
        console.log("Something went wrong")
      }
    } 
  }
  return (
    <div className=' bg-teal-blue h-screen flex flex-col items-center gap-14 pt-12 tablet:gap-20'>
        <MovieCreationIcon htmlColor='red' fontSize='large'/>
        <div className=' text-white text-sm bg-light-teal-blue mx-auto p-6 min-w-[326px] rounded-lg tablet:min-w-[400px] tablet:rounded-xl'>
            <form className=' flex flex-col items-center gap-6' onSubmit={handleSubmit}>
                <h1 className='text-3xl self-start'>Login</h1>
                <div className=' w-full h-9'>
                  <input 
                    id='email'
                    type="email" 
                    placeholder='Email address'
                    onChange={(e)=>{
                      setEmail(e.target.value)
                    }} 
                    className={`w-full h-full bg-transparent border-solid ${formErrors["email"]?.[0] ? 'border-red' : 'border-grey'} border-b-2 outline-none pb-4 px-4 focus:border-white focus:caret-red hover:cursor-pointer`} 
                  /> 
                  {formErrors["email"]?.[0] && <div id='emailText' className=' relative left-[60%] mt-[-2.25rem] w-28 text-red'>{formErrors["email"]?.[0]}</div>}
                </div>
                <div className=' w-full h-9'>
                  <input 
                    id='password'
                    type="Password" 
                    placeholder='Password'
                    onChange={(e)=>{
                      setPassword(e.target.value)
                    }} 
                    className={`w-full h-full bg-transparent border-solid ${formErrors["password"]?.[0] ? 'border-red' : 'border-grey'} border-b-2 outline-none pb-4 px-4 focus:border-white focus:caret-red hover:cursor-pointer`} 
                  /> 
                  {formErrors["password"]?.[0] && <div id='passwordText' className=' relative left-[60%] mt-[-2.25rem] w-28 text-red'>{formErrors["password"]?.[0]}</div>}
                </div>
                <input 
                  type='submit' 
                  value='Login to your account' 
                  className=' w-full h-12 mt-4 bg-red rounded-lg outline-none text-xl hover:bg-white hover:text-teal-blue hover:cursor-pointer'
                />
            </form>
            <div className='text-center mt-6'>
                Don't have an account? 
                <span className=' text-red'> 
                  <Link to={`/auth/register`}> Sign up</Link>
                </span>
            </div>
        </div>
    </div>
  )
}
