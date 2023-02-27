import React from "react";
import { HiArrowsUpDown } from "react-icons/hi2";
import { BsArrowLeft, BsChatDots } from "react-icons/bs";
import Header from "./components/header";
import ThemeToggle from "./components/ThemeToggle";
import styled from "styled-components";
import Link from "next/link";
import { FiHelpCircle, FiUsers } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiOutlineKey } from "react-icons/hi";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import Footer from "./components/footer";

export default function setting() {
  return (
    <Root>
      <Header
        title={
          <>
            <div className='py-8 flex justify-between items-center'>
              <Link href='/home'>
                <BsArrowLeft className='p-[2px] text-white text-2xl' />
              </Link>

              <div className='text-white text-center text-xl'>Setting</div>

              <div></div>
            </div>
          </>
        }
      />

      <div className='user_list'>
        <div className='text_empty'></div>
        <Link href='/profile'>
          <div className=' flex justify-between items-center py-6 px-4'>
            <div className='flex items-center gap-2'>
              <img src='/assest/user1.png' alt='' />
              <div>
                <div className='font-semibold'>Nazrul Islam</div>
                <div className='text-[12px]'>Never give up 💪 </div>
              </div>
            </div>
            <MdOutlineQrCodeScanner className='text-[#25786d] text-2xl' />
          </div>
        </Link>
        <hr />
        <div className='pb-4'>
          <div className='flex px-6 my-8 items-center gap-4'>
            <div className='p-3 rounded-full text '>
              <HiOutlineKey className='text-2xl text-[#797c7b]' />
            </div>
            <div>
              <div className='font-semibold '>Account</div>
              <div className='text-sm text-[#797c7b]'>
                Privacy, security, change number
              </div>
            </div>
          </div>
          <Link href='/message'>
            <div className='flex px-6 my-8 items-center gap-4'>
              <div className='p-3 rounded-full text '>
                <BsChatDots className='text-2xl text-[#797c7b]' />
              </div>
              <div>
                <div className='font-semibold '>Chat</div>
                <div className='text-sm text-[#797c7b]'>
                  Chat history,theme,wallpapers
                </div>
              </div>
            </div>
          </Link>
          <div className='flex px-6 my-8 items-center gap-4'>
            <div className='p-3 rounded-full text '>
              <IoNotificationsOutline className='text-2xl text-[#797c7b]' />
            </div>
            <div>
              <div className='font-semibold '>Notifications</div>
              <div className='text-sm text-[#797c7b]'>
                Messages, group and others
              </div>
            </div>
          </div>
          <div className='flex px-6 my-8 items-center gap-4'>
            <div className='p-3 rounded-full text '>
              <FiHelpCircle className='text-2xl text-[#797c7b]' />
            </div>
            <div>
              <div className='font-semibold '>Help</div>
              <div className='text-sm text-[#797c7b]'>
                Help center,contact us, privacy policy
              </div>
            </div>
          </div>
          <div className='flex px-6 my-8 items-center gap-4'>
            <div className='p-3 rounded-full text '>
              <HiArrowsUpDown className='text-2xl text-[#797c7b]' />
            </div>
            <div>
              <div className='font-semibold '>Storage and data</div>
              <div className='text-sm text-[#797c7b]'>
                Network usage, stogare usage
              </div>
            </div>
          </div>
          <div className='flex px-6 my-8 items-center gap-4'>
            <div className='p-3 rounded-full text '>
              <FiUsers className='text-2xl text-[#797c7b]' />
            </div>
            <div className='font-semibold '>Invite a friend</div>
          </div>
        </div>
      </div>
      <div className='absolute right-2 bottom-16 z-10'>
        <ThemeToggle />
      </div>
      <Footer />
    </Root>
  );
}

const Root = styled.div`
  background-color: var(--calls-bg-color);
  height: 100vh;
  .user_list {
    background-color: var(--color-bg-primary);
    width: 100%;
    height: 80vh;
    overflow: hidden;
    overflow-y: scroll;
    padding: 10px 0px;
    border-radius: 30px 30px 0px 0px;
  }
  .user_list::-webkit-scrollbar {
    display: none;
  }
  .text {
    color: var(--color-text-primary);
    background-color: var(--bg-color);
  }
  .text_empty {
    margin: 0px auto;
    width: 45px;
    height: 4px;
    border-radius: 100px;
    background-color: #e6e6e6;
  }
`;
