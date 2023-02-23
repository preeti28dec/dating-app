import React, { useState } from "react";
import { BsChatDots, BsSearch } from "react-icons/bs";
import Header from "./components/header";
import ThemeToggle from "./components/ThemeToggle";
import { HiOutlinePhoneMissedCall, HiOutlineVideoCamera } from "react-icons/hi";
import styled from "styled-components";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { TbPhoneCall } from "react-icons/tb";
import { VscCallIncoming, VscCallOutgoing } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";
const userList = [
  {
    id: 1,
    img: "/assest/user1.png",
    time: "Today, 07:30 AM",
    massegeCount: "5",
    name: "Alex Linderson",
    icon: <VscCallIncoming />,
    callType: "Incoming",
  },
  {
    id: 2,
    img: "/assest/user2.png",
    time: "Today, 07:30 AM",
    massegeCount: "3",
    name: "Team Align",
    icon: <HiOutlinePhoneMissedCall />,
    callType: "MissedCall",
    color: "border-[#ffc746]",
  },
  {
    id: 3,
    img: "/assest/user3.png",
    time: "Today, 07:30 AM",
    massegeCount: "4",
    name: "Marina",
    icon: <VscCallIncoming />,
    callType: "Incoming",
    color: "border-[#f5b7be]",
  },
  {
    id: 4,
    img: "/assest/user4.png",
    time: "Today, 07:30 AM",
    name: "John Ahraham",
    icon: <VscCallOutgoing />,
    callType: "Outgoing",
    color: "border-[#98a1f1]",
  },
  {
    id: 5,
    img: "/assest/user5.png",
    time: "Today, 07:30 AM",
    name: "Sabila Sayma",
    icon: <VscCallIncoming />,
    callType: "Incoming",
    color: "border-[#fbdc94]",
  },
  {
    id: 6,
    img: "/assest/user2.png",
    time: "Today, 07:30 AM",
    name: "John Borino",
    icon: <HiOutlinePhoneMissedCall />,
    callType: "MissedCall",
    color: "border-[#fbdc94]",
  },
  {
    id: 7,
    img: "/assest/user4.png",
    time: "Today, 07:30 AM",
    name: "John Ahraham",
    icon: <VscCallOutgoing />,
    callType: "Outgoing",
    color: "border-[#98a1f1]",
  },
  {
    id: 8,
    img: "/assest/user5.png",
    time: "Today, 07:30 AM",
    name: "Sabila Sayma",
    icon: <VscCallIncoming />,
    callType: "Incoming",
    color: "border-[#fbdc94]",
  },
  {
    id: 9,
    img: "/assest/user4.png",
    time: "Today, 07:30 AM",
    name: "John Ahraham",
    icon: <VscCallOutgoing />,
    callType: "Outgoing",
    color: "border-[#98a1f1]",
  },
  {
    id: 10,
    img: "/assest/user5.png",
    time: "Today, 07:30 AM",
    name: "Sabila Sayma",
    icon: <VscCallIncoming />,
    callType: "Incoming",
    color: "border-[#fbdc94]",
  },
  {
    id: 11,
    img: "/assest/user4.png",
    time: "Today, 07:30 AM",
    name: "John Ahraham",
    icon: <VscCallOutgoing />,
    callType: "Outgoing",
    color: "border-[#98a1f1]",
  },
  {
    id: 12,
    img: "/assest/user5.png",
    time: "Today, 07:30 AM",
    name: "Sabila Sayma",
    icon: <VscCallIncoming />,
    callType: "Incoming",
    color: "border-[#fbdc94]",
  },
];
export default function Calls() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  return (
    <Root>
      <ThemeToggle />
      <Header
        title={
          <>
            <div className='py-6 flex justify-between items-center'>
              {open ? (
                <div className='input_section'>
                  <BsSearch className='text-lg absolute left-2 top-2' />
                  <input
                    placeholder='Search people'
                    className=''
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <AiOutlineClose
                    className='text-lg absolute right-2 top-2'
                    onClick={() => setOpen((s) => !s)}
                  />
                </div>
              ) : (
                <>
                  <div className='border rounded-full text-2xl p-1'>
                    <BsSearch
                      className='p-[2px] text-white'
                      onClick={() => setOpen((s) => !s)}
                    />
                  </div>
                  <div className='text-white text-xl'>Calls</div>

                  <div className='border rounded-full text-2xl p-1'>
                    <HiOutlinePhoneMissedCall className='p-[2px] text-white' />
                  </div>
                </>
              )}
            </div>
          </>
        }
      />

      <div className='user_list'>
        <div className='text_empty'></div>
        <div className='font-semibold'>Recent</div>
        <div>
          {userList
            .filter((i) => {
              if (search === "") {
                return i;
              } else if (
                i.name.toLowerCase().includes(search.toLocaleLowerCase())
              ) {
                return i;
              }
            })
            .map((i: any, ind: any) => {
              return (
                <div key={ind} className='flex justify-between items-center'>
                  <div className='flex  items-center gap-4 my-4'>
                    <div>
                      <img src={i.img} alt={i.name} />
                    </div>
                    <div>
                      <div className='font-semibold'> {i.name}</div>
                      <div className='flex items-center gap-2'>
                        <div
                          className={
                            i.callType == "Incoming"
                              ? "text-[#139c6f]"
                              : i.callType == "MissedCall"
                              ? "text-[#ea3736]"
                              : i.callType == "Outgoing"
                              ? "text-[#5f40dc]"
                              : ""
                          }
                        >
                          {i.icon}{" "}
                        </div>
                        <div className='text-sm text-[#989e9c]'>{i.time}</div>
                      </div>
                    </div>
                  </div>
                  <div className='flex gap-4 items-center text-2xl text-[#989e9c]'>
                    <TbPhoneCall />
                    <Link href='/video-call'>
                      <HiOutlineVideoCamera />
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className='footer'>
        <Link href='/message'>
          <div className=''>
            <BsChatDots className='mx-auto' />
            <div className='text-lg'>Message</div>
          </div>
        </Link>
        <Link href='/calls'>
          <div className='text-[#25786d]'>
            <FiPhoneCall className='mx-auto' />
            <div className='text-lg'>Calls</div>
          </div>
        </Link>
        <Link href='/contact'>
          <div>
            <FaRegUserCircle className='mx-auto' />
            <div className='text-lg'>Contacts</div>
          </div>
        </Link>
        <Link href='/setting'>
          <div>
            <IoSettingsOutline className='mx-auto' />
            <div className='text-lg'>Setting</div>
          </div>
        </Link>
      </div>
    </Root>
  );
}

const Root = styled.div`
  background-color: var(--calls-bg-color);
  .user_list {
    background-color: var(--color-bg-primary);
    width: 100%;
    height: 79vh;
    overflow: hidden;
    overflow-y: scroll;
    padding: 10px 20px;
    border-radius: 30px 30px 0px 0px;
  }
  .user_list::-webkit-scrollbar {
    display: none;
  }
  .text_empty {
    margin: 0px auto;
    width: 45px;
    height: 4px;
    border-radius: 100px;
    background-color: #e6e6e6;
  }
  .footer {
    background-color: var(--color-bg-primary);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    font-size: 24px;
    line-height: 32px;
    border-top: 1px solid #242e2e;
  }
  .input_section {
    position: relative;
    background: #f3f6f6;
    width: 100%;
    color: black;
    border-radius: 6px;
  }
  input {
    outline: unset;
    border: unset;
    background-color: unset;
    font-size: 16px;
    padding: 6px 40px;
    color: #797c7b;
  }
`;
