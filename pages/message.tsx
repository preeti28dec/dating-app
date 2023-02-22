import Link from "next/link";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./components/header";
import ThemeToggle from "./components/ThemeToggle";
import { FiCamera } from "react-icons/fi";
import { ImAttachment } from "react-icons/im";
import {
  IoCallOutline,
  IoDocumentTextOutline,
  IoSend,
  IoVideocamOutline,
} from "react-icons/io5";
import { BsArrowLeft, BsFillImageFill } from "react-icons/bs";
import { AiOutlineAudio, AiOutlineClose } from "react-icons/ai";
import { MdContentCopy } from "react-icons/md";
import { GiNetworkBars } from "react-icons/gi";
import { FaRegUserCircle } from "react-icons/fa";
import { TfiLocationPin } from "react-icons/tfi";

export default function Messages() {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [open, setOpen] = useState(false);

  function handleClike(e: any) {
    e.preventDefault();
    setMessageList((s: any) => [...s, message]);
    setMessage("");
  }
  return (
    <>
      <ThemeToggle />
      <Container>
        <Header
          title={
            <>
              <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                  <Link href='/home'>
                    <BsArrowLeft className='text-2xl ' />
                  </Link>
                  <div>
                    <img
                      src='/assest/user1.png'
                      alt=''
                      className='w-10 object-cover'
                    />
                  </div>
                  <div>
                    <div className='font-semibold'>Jhon Abraham</div>
                    <div className='text-[12px]'>Active now</div>
                  </div>
                </div>

                <div className=' text-2xl flex items-center gap-4'>
                  <div>
                    <IoCallOutline />
                  </div>
                  <div>
                    <IoVideocamOutline />
                  </div>
                </div>
              </div>
            </>
          }
        />
        <div className='user_list'>
          <div className='text-center '>
            <span className='font-semibold px-4 py-1 text rounded-full  text-sm'>
              Today
            </span>
          </div>
          {messageList.map((i, ind) => {
            return (
              <div key={ind}>
                <div className='text-end p-4 mt-4'>
                  <span className='send_message'>{i}</span>
                  <div className='text-[12px] my-2 text-[#797c7b]'>
                    09:25 AM
                  </div>
                </div>
                <div className='flex gap-4 '>
                  <img
                    src='/assest/user1.png'
                    alt=''
                    className='w-12 h-12 mt-2 object-cover rounded-full'
                  />
                  <div>
                    <div className='font-semibold my-2'>Jhon Abraham</div>
                    <div>
                      <div className=''>
                        <span className='coming_message'>
                          Have a great working week!!
                        </span>
                        <div className='text-[12px] my-2 text-right text-[#797c7b]'>
                          09:25 AM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='text-end p-4 mt-4'>
                  <span className='send_message'>You did your job well!</span>
                  <div className='text-[12px] my-2 text-[#797c7b]'>
                    09:25 AM
                  </div>
                </div>
                <div className='flex gap-4'>
                  <img
                    src='/assest/user1.png'
                    alt=''
                    className='w-12 h-12 mt-2 object-cover rounded-full'
                  />
                  <div>
                    <div className='font-semibold my-2'>Jhon Abraham</div>
                    <div className=''>
                      <span className='coming_message'>
                        Have a great working week!!
                      </span>
                      <div className='my-6'>
                        <span className='coming_message'>
                          Hope you like it!
                        </span>
                      </div>
                      <div className='text-[12px] my-2 text-right text-[#797c7b]'>
                        09:25 AM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className='footer'>
          <ImAttachment onClick={() => setOpen((s) => !s)} />
          <form
            className='input_section '
            onSubmit={(e: any) => handleClike(e)}
          >
            <input
              placeholder='Write your message'
              className='w-full '
              value={message}
              type='text'
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <MdContentCopy className='absolute top-3 right-1 text-[#797C7B]' />
          </form>
          {message ? (
            <div className='send_icon' onClick={(e) => handleClike(e)}>
              <IoSend className='text-[20px] pl-1' />
            </div>
          ) : (
            <div className='flex items-center gap-2 text-2xl'>
              <FiCamera />
              <AiOutlineAudio />
            </div>
          )}
        </div>
        {open ? (
          <ModalBox onClick={() => setOpen((s) => !s)}>
            <Popup>
              <div className='flex  justify-between mx-8 my-4'>
                <div onClick={() => setOpen((s) => !s)}>
                  <AiOutlineClose className='text-lg text-[#797c7b]' />
                </div>
                <div className='font-semibold text-center'>Share Content</div>
                <div></div>
              </div>
              <div className='flex px-6 my-5 items-center gap-4'>
                <div className='p-3 rounded-full text '>
                  <FiCamera className='text-2xl text-[#797c7b]' />
                </div>
                <div className='font-bold '>Camera</div>
              </div>
              <hr className='w-[80%] absolute right-0 ' />
              <div className='flex px-6 my-5 pt-6 items-center gap-4'>
                <div className='p-3 rounded-full text '>
                  <IoDocumentTextOutline className='text-2xl text-[#797c7b]' />
                </div>
                <div>
                  <div className='font-bold '>Documents</div>
                  <span className='text-sm text-[#797c7b]'>
                    Share your files
                  </span>
                </div>
              </div>
              <hr className='w-[80%] absolute right-0' />
              <div className='flex px-6 my-5 pt-6 items-center gap-4'>
                <div className='p-3 rounded-full text '>
                  <GiNetworkBars className='text-2xl text-[#797c7b]' />
                </div>
                <div>
                  <div className='font-bold '>Create a poll</div>
                  <span className='text-sm text-[#797c7b]'>
                    Create a poll for any querry
                  </span>
                </div>
              </div>
              <hr className='w-[80%] absolute right-0' />
              <div className='flex px-6 my-5 pt-6 items-center gap-4'>
                <div className='p-3 rounded-full text '>
                  <BsFillImageFill className='text-2xl text-[#797c7b]' />
                </div>
                <div>
                  <div className='font-bold '>Media</div>
                  <span className='text-sm text-[#797c7b]'>
                    Share photos and videos
                  </span>
                </div>
              </div>
              <hr className='w-[80%] absolute right-0' />
              <div className='flex px-6 my-5 pt-6 items-center gap-4'>
                <div className='p-3 rounded-full text '>
                  <FaRegUserCircle className='text-2xl text-[#797c7b]' />
                </div>
                <div>
                  <div className='font-bold '>Contact</div>
                  <span className='text-sm text-[#797c7b]'>
                    Share your contacts
                  </span>
                </div>
              </div>
              <hr className='w-[80%] absolute right-0' />
              <div className='flex px-6 my-5 pt-6 items-center gap-4'>
                <div className='p-3 rounded-full text '>
                  <TfiLocationPin className='text-2xl text-[#797c7b]' />
                </div>
                <div>
                  <div className='font-bold '>Location</div>
                  <span className='text-sm text-[#797c7b]'>
                    Share your location
                  </span>
                </div>
              </div>
              <hr className='w-[80%] absolute right-0' />
            </Popup>
          </ModalBox>
        ) : null}
      </Container>
    </>
  );
}
const Container = styled.div`
  /* max-width: 450px;
  width: 100%; */
  /* margin: auto; */
  height: 100vh;
  position: relative;
  .user_list {
    background-color: var(--color-bg-primary);
    width: 100%;
    height: 80vh;
    overflow: hidden;
    overflow-y: scroll;
    padding: 10px 20px;
  }
  .user_list::-webkit-scrollbar {
    display: none;
  }
  .footer {
    background-color: var(--color-bg-primary);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    font-size: 24px;
    line-height: 32px;
  }
  .input_section {
    position: relative;
    background: #f3f6f6;
    width: 100%;
    margin: 2px 10px;
    border-radius: 6px;
  }
  input {
    outline: unset;
    border: unset;
    background-color: unset;
    font-size: 16px;
    padding: 6px 20px;
    color: #797c7b;
  }
  .text {
    color: var(--color-text-primary);
    background-color: var(--bg-color);
  }
  .send_icon {
    background-color: var(--message-bg-background);
    color: var(--color-white);
    padding: 9px;
    border-radius: 100px;
  }
  .send_message {
    background-color: var(--message-bg-background);
    color: var(--color-white);
    padding: 5px;
    border-radius: 8px 0px 8px 8px;
    word-wrap: break-word;
  }
  .coming_message {
    background-color: var(--bg-color);
    color: var(--color-text-primary);
    padding: 5px;
    margin: 6px 0px;
    border-radius: 0px 8px 8px 8px;
    word-wrap: break-word;
  }
`;

const ModalBox = styled.div`
  background: rgba(0, 14, 8, 0.5);
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
`;
const Popup = styled.div`
  background: var(--color-bg-primary);
  width: 100%;
  height: 70vh;
  position: absolute;
  border-radius: 40px 40px 0px 0px;
  bottom: 0;
`;
