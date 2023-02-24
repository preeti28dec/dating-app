import Link from "next/link";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./components/header";
import ThemeToggle from "./components/ThemeToggle";
import {BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import Footer from "./components/footer";
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
  {
    id: 6,
    img: "/assest/user2.png",
    time: "2 min ago",
    name: "John Borino",
    desc: "Have a good day 🌸",
    color: "border-[#fbdc94]",
  },
  // {
  //   id: 7,
  //   img: "/assest/user4.png",
  //   time: "2 min ago",
  //   name: "John Ahraham",
  //   desc: "Hey! Can you join the meeting?",
  //   color: "border-[#98a1f1]",
  // },
  // {
  //   id: 8,
  //   img: "/assest/user5.png",
  //   time: "2 min ago",
  //   name: "Sabila Sayma",
  //   desc: "How are you today?",
  //   color: "border-[#fbdc94]",
  // },
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
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <>
      <Container>
        <Header
          title={
            <>
              <div className='flex justify-between items-center '>
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
                    <div className='text-white text-xl'>Home</div>
                    <Link href='/profile'>
                      <div>
                        <img src='/assest/user1.png' alt='' />
                      </div>
                    </Link>
                  </>
                )}
              </div>

              <div className='mt-4 mb-1'>
                <div className='hs full no-scrollbar sm:flex sm:justify-center sm:gap-4 '>
                  {SliderTab.map((i: any, ind: any) => {
                    return (
                      <div className=' my-2' key={ind}>
                        <div
                          className={"flex flex-col items-center text-white"}
                        >
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
          <div className='pb-4'>
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
                    <div className='flex  items-center gap-4 my-4 '>
                      <div>
                        <img src={i.img} alt={i.name} />
                      </div>
                      <div>
                        <div className='font-semibold'> {i.name}</div>
                        <p>{i.desc}</p>
                      </div>
                    </div>
                    <div>
                      <div className='text-sm'>{i.time}</div>
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
        <div className='absolute right-2 bottom-16 z-10'>
          <ThemeToggle />
        </div>
        <Footer />
      </Container>
    </>
  );
}
const Container = styled.div`
  height: 100%;
  background-color: var(--color-profile);
  .user_list {
    background-color: var(--color-bg-primary);
    width: 100%;
    height: 69vh;
    overflow: hidden;
    overflow-y: scroll;
    padding: 15px 20px 30px 20px;
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
  .input_section {
    position: relative;
    background: #f3f6f6;
    width: 100%;
    margin: 8px 0px;
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
