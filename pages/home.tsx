import Link from "next/link";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./components/header";
import ThemeToggle from "./components/ThemeToggle";
import { FiPhoneCall } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { BsChatDots, BsSearch } from "react-icons/bs";
const SliderTab = [
  {
    id: 1,
    img: "/assest/user1.png",
    name: "My status",
    color: "",
  },
  {
    id: 2,
    img: "/assest/user2.png",
    name: "Adil",
    color: "border-[#ffc746]",
  },
  {
    id: 3,
    img: "/assest/user3.png",
    name: "Marina",
    color: "border-[#f5b7be]",
  },
  {
    id: 4,
    img: "/assest/user4.png",
    name: "Dean",
    color: "border-[#98a1f1]",
  },
  {
    id: 5,
    img: "/assest/user5.png",
    name: "Max",
    color: "border-[#fbdc94]",
  },
];
const userList = [
  {
    id: 1,
    img: "/assest/user1.png",
    time: "2 min ago",
    massegeCount: "5",
    name: "Alex Linderson",
    desc: "How are you today?",
  },
  {
    id: 2,
    img: "/assest/user2.png",
    time: "2 min ago",
    massegeCount: "3",
    name: "Team Align",
    desc: "Don’t miss to attend the meeting.",
    color: "border-[#ffc746]",
  },
  {
    id: 3,
    img: "/assest/user3.png",
    time: "2 min ago",
    massegeCount: "4",
    name: "Marina",
    desc: "How are you today?",
    color: "border-[#f5b7be]",
  },
  {
    id: 4,
    img: "/assest/user4.png",
    time: "2 min ago",
    name: "John Ahraham",
    desc: "Hey! Can you join the meeting?",
    color: "border-[#98a1f1]",
  },
  {
    id: 5,
    img: "/assest/user5.png",
    time: "2 min ago",
    name: "Sabila Sayma",
    desc: "How are you today?",
    color: "border-[#fbdc94]",
  },
  {
    id: 6,
    img: "/assest/user2.png",
    time: "2 min ago",
    name: "John Borino",
    desc: "Have a good day 🌸",
    color: "border-[#fbdc94]",
  },
  {
    id: 7,
    img: "/assest/user4.png",
    time: "2 min ago",
    name: "John Ahraham",
    desc: "Hey! Can you join the meeting?",
    color: "border-[#98a1f1]",
  },
  {
    id: 8,
    img: "/assest/user5.png",
    time: "2 min ago",
    name: "Sabila Sayma",
    desc: "How are you today?",
    color: "border-[#fbdc94]",
  },
];
export default function Home() {
  return (
    <Container>
      <ThemeToggle />
      <Header
        title={
          <>
            <div className='flex justify-between items-center'>
              <div className='border rounded-full text-2xl p-1'>
                <BsSearch className='p-[2px] text-white' />
              </div>
              <div className='text-white'>Home</div>
              <div>
                <img src='/assest/user1.png' alt='' />
              </div>
            </div>

            <div className='mt-12 mb-8'>
              <div className='hs full no-scrollbar sm:flex sm:justify-center sm:gap-4 '>
                {SliderTab.map((i: any, ind: any) => {
                  return (
                    <div className='item my-4' key={ind}>
                      <div className={"flex flex-col items-center text-white"}>
                        <div className={`rounded-full ${i.color} p-1 border`}>
                          <img src={i.img} alt={i.name} />
                        </div>
                        <div className='text-sm mt-2 text-center min-w-[60px]'>
                          {i.name}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        }
      />
      <div className='user_list'>
        <div className='text_empty'></div>
        <div>
          {userList.map((i: any, ind: any) => {
            return (
              <div key={ind} className='flex justify-between items-center'>
                <div className='flex  items-center gap-4 my-4'>
                  <div>
                    <img src={i.img} alt={i.name} />
                  </div>
                  <div>
                    <div className='font-semibold'> {i.name}</div>
                    <p>{i.desc}</p>
                  </div>
                </div>
                <div>
                  <div>{i.time}</div>
                  <div className='text-end mt-1'>
                    {i.massegeCount ? (
                      <span className='bg-red-500 text-white my-2 rounded-full px-2 py-[1px]   '>
                        {i.massegeCount}
                      </span>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='footer'>
        <div className="">
          <BsChatDots className="mx-auto"/>
          <div className="text-lg">Message</div>
        </div>
        <div>
          <FiPhoneCall className="mx-auto"/>
          <div className="text-lg">Calls</div>
        </div>
        <div>
          <FaRegUserCircle className="mx-auto"/>
          <div className="text-lg">Contacts</div>
        </div>
        <div>
          <IoSettingsOutline className="mx-auto" />
          <div className="text-lg">Setting</div>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  max-width: 450px;
  width: 100%;
  margin: auto;
  height: 100vh;
  background-color: var(--color-profile);
  .user_list {
    background-color: var(--color-bg-primary);
    width: 100%;
    height: 590px;
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
`;
