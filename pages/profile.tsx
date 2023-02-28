import React from "react";
import { BsArrowLeft, BsChatDots, BsThreeDots } from "react-icons/bs";
import Header from "./components/header";
import ThemeToggle from "./components/ThemeToggle";
import styled from "styled-components";
import Link from "next/link";
import { FiVideo } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";

export default function Profile() {
  return (
    <Root>
      <Header
        title={
          <>
            <div className=''>
              <Link href='/home'>
                <BsArrowLeft className='p-[2px] text-white text-2xl' />
              </Link>
              <div className='text-center'>
                <img src='/assest/user1.png' alt='' className='mx-auto ' />
                <div className='text-white'>Jhon Abraham</div>
                <div className='text-[12px] text-[#bde0d5]'>@jhonabraham</div>
              </div>
              <div className='flex justify-center mt-6 items-center gap-4'>
                <Link href='/message'>
                  <div className='p-3 rounded-full text  '>
                    <BsChatDots className='text-xl ' />
                  </div>
                </Link>
                <Link href='/video-call'>
                  <div className='p-3 rounded-full text '>
                    <FiVideo className='text-xl ' />
                  </div>
                </Link>
                <Link href='/calls'>
                  <div className='p-3 rounded-full text '>
                    <IoCallOutline className='text-xl ' />
                  </div>
                </Link>
                <div className='p-3 rounded-full text '>
                  <BsThreeDots className='text-xl ' />
                </div>
              </div>
            </div>
          </>
        }
      />
      <div className='user_list'>
        <div className='text_empty'></div>

        <div className='my-6 px-6'>
          <div className='text-[#797c7b] text-sm'>Display Name</div>
          <div className='font-semibold'>Jhon Abraham</div>

          <div className='my-6'>
            <div className='text-[#797c7b] text-sm'>Email Address</div>
            <div className='font-semibold'>jhonabraham20@gmail.com</div>
          </div>

          <div className='my-6'>
            <div className='text-[#797c7b] text-sm'>Address</div>
            <div className='font-semibold'>
              33 street west subidbazar,sylhet
            </div>
          </div>

          <div className='my-6'>
            <div className='text-[#797c7b] text-sm'>Phone Number</div>
            <div className='font-semibold'>(320) 555-0104</div>
          </div>
          <div className='my-6 flex justify-between items-center'>
            <div className='text-[#797c7b] text-sm'>Media Shared</div>
            <div className='font-semibold text-[#20A090]'>View All</div>
          </div>
        </div>

        <div className='image_section'>
          <div className='w-28 h-28 gallery_img rounded-xl overflow-hidden'>
            <img
              src='/assest/orange.jpg'
              alt='post images'
              className='w-full h-full object-cover'
            />
          </div>
          <div className='w-28 h-28 gallery_img rounded-xl overflow-hidden'>
            <img
              src='/assest/phone.webp'
              alt='post images'
              className='w-full h-full object-cover'
            />
          </div>
          <div className='w-28 h-28 gallery_img rounded-xl overflow-hidden'>
            <img
              src='/assest/camera.jpg'
              alt='post images'
              className='w-full h-full object-cover'
            />
          </div>
          <div className='w-28 h-28 gallery_img rounded-xl overflow-hidden'>
            <img
              src='/assest/phone2.jpg'
              alt='post images'
              className='w-full h-full object-cover'
            />
          </div>
          <div className='w-28 h-28 gallery_img rounded-xl overflow-hidden'>
            <img
              src='/assest/camera2.webp'
              alt='post images'
              className='w-full h-full object-cover'
            />
          </div>
          <div className='w-28 h-28 gallery_img rounded-xl overflow-hidden'>
            <img
              src='/assest/orange.jpg'
              alt='post images'
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-2 right-3"><ThemeToggle /></div>
    </Root>
  );
}

const Root = styled.div`
  background-color: var(--calls-bg-color);
  height: 100vh;
  .user_list {
    max-width: 450px;
    background-color: var(--color-bg-primary);
    width: 100%;
    height: 68.8vh;
    overflow: hidden;
    overflow-y: scroll;
    position: fixed;
    bottom: 0;
    padding: 10px 0px;
    border-radius: 30px 30px 0px 0px;
  }
  .user_list::-webkit-scrollbar {
    display: none;
  }
  .text {
    color: white;
    background-color: var(--profile-bg-color);
  }
  .text_empty {
    margin: 0px auto;
    width: 45px;
    height: 4px;
    border-radius: 100px;
    background-color: #e6e6e6;
  }
  .image_section {
 
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    padding: 0px 1rem;
  }
  @media (max-width: 375px) {
    .gallery_img {
      width: 100%;
      height: 100%;
    }
  }
`;
