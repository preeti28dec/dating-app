import React from "react";
import styled from "styled-components";
import { BsApple } from "react-icons/bs";
import { TfiFacebook } from "react-icons/tfi";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export default function Login() {
  return (
    <Root>
      <div className='overhidden'></div>
      <div className='text-center  text-white'>Dating App</div>
      <div className='Connect'>Connect friends easily & quickly</div>
      <p>
        Our chat app is the perfect way to stay connected with friends and
        family.
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
          <BsApple className='text-white' />
        </div>
      </div>

      <div className='flex gap-2 items-center my-4'>
        <hr className='h-2 w-[50%] ' />
        <span className='text-[20px] pb-2 text-white'>OR</span>
        <hr className='h-2 w-[50%]' />
      </div>
      <Link href='/sign-up'>
        <div className='sign-up'>
          <button>Sign up with Email</button>
        </div>
      </Link>
      <div className='text-center'>
        <p>
          Existing account?
          <Link href='/login'>
            <span className='text-white'>Log in</span>
          </Link>
        </p>
      </div>
    </Root>
  );
}

const Root = styled.div`
  background-color: black;
  height: 100%;
  left: 24px;
  top: 124px;
  padding: 4% 40px;
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */

  .Connect {
    font-weight: 400;
    font-size: 55px;
    line-height: 70px;
    color: white;
    position: relative;
    margin: 15px 0px;
    /* z-index: ; */
  }
  p {
    font-weight: 450;
    font-size: 16px;
    margin: 20px 0px;
    line-height: 26px;
  }
  .overhidden {
    width: 220px;
    height: 244.52px;
    /* top: 21.56px; */
    position: absolute;
    background: linear-gradient(271.23deg, #43116a 36.61%, #0a1832 106.23%);
    opacity: 0.63;
    filter: blur(74px);
    /* background-color: white; */
    transform: rotate(134.23deg);
  }
  .sign-up {
    background-color: white;
    border-radius: 100px;
    padding: 10px;
    text-align: center;
    color: black;
  }
`;
