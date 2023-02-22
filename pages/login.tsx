import Link from "next/link";
import React, { useState,useEffect } from "react";
import { BsApple, BsArrowLeft } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { TfiFacebook } from "react-icons/tfi";
import styled from "styled-components";
import Header from "./components/header";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";
import ThemeToggle from "./components/ThemeToggle";

export default function LoginPage() {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [login, setLogin] = useState(false);

  const handlePasswordChange = (evnt: any) => {
    setPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  function isValidEmail(email: any) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event: any) => {
    if (!isValidEmail(event.target.value)) {
      setError("Email is invalid");
    } else {
      setError("");
    }

    setEmail(event.target.value);
  };
  useEffect(()=>{
    if (email && passwordInput){
      setLogin(true)
    }
    else{
      setLogin(false)
    }
  },[passwordInput,email])

  return (
    <Container>
      <ThemeToggle />
      <Header
        title={
          <>
            <div className='flex py-2 items-center  gap-2 '>
              <Link href='/'>
                <BsArrowLeft className='text-2xl' />
              </Link>
            </div>
            <div className='font-bold text-xl pt-5 text-center'>
              {" "}
              Log in to Chatbox
            </div>
            <p className='px-6 py-4 text-center text-[#797C7B]'>
              Welcome back! Sign in using your social account or email to
              continue us
            </p>

            <div className='flex gap-4 my-2 justify-center items-center '>
              <div className='border rounded-full text-2xl p-1'>
                <div className='bg-[#1877f2] rounded-full p-[2px]'>
                  <TfiFacebook className='text-white' />
                </div>
              </div>
              <div className='border rounded-full text-2xl p-1'>
                <FcGoogle />
              </div>
              <div className='border rounded-full text-2xl p-1'>
                <BsApple  />
              </div>
            </div>

            <div className='flex gap-2 items-center my-4'>
              <hr className='h-2 w-[50%] ' />
              <span className='text-[20px] pb-2 text-[#595d5c]'>OR</span>{" "}
              <hr className='h-2 w-[50%]' />
            </div>
          </>
        }
      />
      <div className='mx-4 '>
        <div className='mt-6'>
          <label>Email</label>
          <input
            className='input'
            id='email'
            name='email'
            value={email}
            onChange={handleChange}
            type='text'
            placeholder='enter your email address'
          />
          {error && <h2 style={{ color: "red" }}>{error}</h2>}
        </div>
        <div className='mt-6'>
          <label>Password</label>
          <input
            className='input'
            type={passwordType}
            onChange={handlePasswordChange}
            value={passwordInput}
            name='password'
            placeholder='Password'
          />
          <div className='eyeIcon' onClick={togglePassword}>
            {passwordType === "password" ? (
              <AiFillEyeInvisible className='text-2xl' />
            ) : (
              <AiFillEye className='text-2xl' />
            )}
          </div>
        </div>
      </div>
      <Link href='/sign-up'>
      <div className={login?'login-true':'login-false'}>
        <button className={login?"text-white font-semibold":"font-semibold text-[#797C7B]"} >Login</button>
      </div>
      </Link>
      <div className='forget'>Forgot password?</div>
    </Container>
  );
}
const Container = styled.div`
  /* max-width: 450px;
  width: 100%;
  margin: auto; */

  .input {
    border: 1px solid gray;
    border-top: none;
    border-left: none;
    border-right: none;
    width: 100%;
    outline: none;
    background-color: unset;
  }
  label {
    color: var(--color-text-secondary);
  }
  .forget {
    color: var(--color-text-secondary);
    text-align: center;
    padding: 10px 0px;
  }
  .login-false {
    background-color: var(--color-button);
    border-radius: 100px;
    padding: 10px;
    text-align: center;
    color: black;
    margin: 40px 14px 0px 14px;
  }
  .login-true {
    background-color: var(--color-text-secondary);
    border-radius: 100px;
    padding: 10px;
    text-align: center;
    color: black;
    margin: 40px 14px 0px 14px;
  }
`;
