import Link from "next/link";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsArrowLeft, BsCameraVideo, BsMic } from "react-icons/bs";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { IoChatboxOutline } from "react-icons/io5";
import styled from "styled-components";
import ThemeToggle from "./components/ThemeToggle";

export default function VideoCall() {
  return (
    <>
      <ThemeToggle />
      <Root className='relative'>
        <div className='relative'>
          <img
            src='/assest/call_person.png'
            alt='call image '
            className='w-full h-[100vh]'
          />
        </div>

        <Link href='/login'>
          <BsArrowLeft className='text-2xl absolute top-6 m-4' />
        </Link>
        <div className='absolute top-2 m-4 right-2'>
          <img
            src='/assest/user_call2.jpg'
            alt='call image '
            className='w-24 h-24 rounded-lg '
          />
        </div>
        <div className='absolute top-1/3 left-4 '>
          <div className='w-[44px] h-[162px] relative  rounded-full bg-[#4c525b]  text-white'>
            <input type='range' className='  ' />
            <HiOutlineSpeakerWave className='absolute bottom-2 text-xl  left-[10px]' />
          </div>
        </div>
        <div className='bottom-4 m-auto left-0 right-0 absolute flex justify-center gap-4 items-center text-2xl'>
          <div className='p-3 rounded-full bg-[#333e39]  text-white'>
            <BsMic />
          </div>
          <div className='p-3 rounded-full bg-[#333e39]  text-white'>
            <HiOutlineSpeakerWave />
          </div>
          <div className='p-3 rounded-full bg-[#333e39]  text-white'>
            <BsCameraVideo />
          </div>
          <Link href='/message'>
            <div className='p-3 rounded-full bg-[#20a090]  text-white'>
              <IoChatboxOutline />
            </div>
          </Link>
          <Link href='/profile'>
            <div className='p-3 rounded-full bg-[#ea3736]  text-white'>
              <AiOutlineClose />
            </div>
          </Link>
        </div>
      </Root>
    </>
  );
}

const Root = styled.div`
  input[type="range"] {
    position: absolute;
    left: -42px;
    top: 13%;
    height: 60%; 
    transform: rotate(270deg);
  }
`;
