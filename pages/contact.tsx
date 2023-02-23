import React, { useState } from "react";
import { BsChatDots, BsSearch } from "react-icons/bs";
import Header from "./components/header";
import ThemeToggle from "./components/ThemeToggle";
import styled from "styled-components";
import Link from "next/link";
import { FiPhoneCall, FiUserPlus } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
const userList = [
  {
    id: 1,
    img: "/assest/user1.png",
    time: "2 min ago",
    massegeCount: "5",
    name: "Alex Linderson",
    desc: "Life is beautiful 👌",
  },
  {
    id: 2,
    img: "/assest/user2.png",
    time: "2 min ago",
    massegeCount: "3",
    name: "Adil Adnan",
    desc: "Be your own hero 💪",
  },
  {
    id: 3,
    img: "/assest/user3.png",
    time: "2 min ago",
    massegeCount: "4",
    name: "Marina",
    desc: "Keep working ✍",
  },
  {
    id: 4,
    img: "/assest/user4.png",
    time: "2 min ago",
    name: "John Ahraham",
    desc: "Make yourself proud 😍",
  },
  {
    id: 5,
    img: "/assest/user5.png",
    time: "2 min ago",
    name: "Sabila Sayma",
    desc: "Keep working ✍",
  },
  {
    id: 6,
    img: "/assest/user2.png",
    time: "2 min ago",
    name: "John Borino",
    desc: "Have a good day 🌸",
  },
  {
    id: 7,
    img: "/assest/user4.png",
    time: "2 min ago",
    name: "John Ahraham",
    desc: "Life is beautiful 👌",
  },
  {
    id: 8,
    img: "/assest/user5.png",
    time: "2 min ago",
    name: "Sabila Sayma",
    desc: "Flowers are beautiful 🌸",
  },
];
export default function Contact() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  // const oderUserList = userList.sort((a, b) =>
  //   a.name.localeCompare(b.name, "es", { sensitivity: "base" })
  // );
  let data = userList.reduce((r:any, e:any) => {
    let alphabet = e.name[0];
    if (!r[alphabet]) r[alphabet] = { alphabet, record: [e] };
    else r[alphabet].record.push(e);
    return r;
  }, {});
  let result = Object.values(data);

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
                  <div
                    className='border rounded-full text-2xl p-1'
                    onClick={() => setOpen((s) => !s)}
                  >
                    <BsSearch className='p-[2px] text-white' />
                  </div>
                  <div className='text-white'>ContactS</div>

                  <div className='border rounded-full text-2xl p-1'>
                    <FiUserPlus className='p-[2px] text-white' />
                  </div>
                </>
              )}
            </div>
          </>
        }
      />

      <div className='user_list'>
        <div className='text_empty'></div>
        <div className='font-semibold'>My Contact</div>
        <div>
          {result
            .filter((i:any) => {
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
                <div key={ind} className=''>
                  <div className='font-bold my-4'>{i.alphabet}</div>
                  {i.record.map((i: any, ind: any) => {
                    return (
                      <div key={ind}>
                        <div className='flex  items-center gap-4 my-4'>
                          <div>
                            <img src={i.img} alt={i.name} />
                          </div>
                          <div>
                            <div className='font-semibold'> {i.name}</div>
                            <div className='flex items-center gap-2'>
                              <div className='text-sm text-[#989e9c]'>
                                {i.desc}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
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
          <div className=''>
            <FiPhoneCall className='mx-auto' />
            <div className='text-lg'>Calls</div>
          </div>
        </Link>
        <div className='text-[#25786d]'>
          <FaRegUserCircle className='mx-auto' />
          <div className='text-lg'>Contacts</div>
        </div>
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
