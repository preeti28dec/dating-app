import Link from "next/link";
import React from "react";
import { BsChatDots } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import styled from "styled-components";
import { ThemeButton } from "../../context";

export default function Footer() {
  const { activePage, setActivePage }: any = ThemeButton();

  return (
    <Root className='footer'>
      <Link href='/message'>
        <div
          className={activePage === "message" ? "text-[#25786d]" : ""}
          onClick={() => setActivePage("message")}
        >
          <BsChatDots className='mx-auto' />
          <div className='text-lg'>Message</div>
        </div>
      </Link>
      <Link href='/calls'>
        <div
          className={activePage === "calls" ? "text-[#25786d]" : ""}
          onClick={() => setActivePage("calls")}
        >
          <FiPhoneCall className='mx-auto' />
          <div className='text-lg'>Calls</div>
        </div>
      </Link>
      <Link href='/contact'>
        <div
          className={activePage === "contact" ? "text-[#25786d]" : ""}
          onClick={() => setActivePage("contact")}
        >
          <FaRegUserCircle className='mx-auto' />
          <div className='text-lg'>Contacts</div>
        </div>
      </Link>
      <Link href='/setting'>
        <div
          className={activePage === "setting" ? "text-[#25786d]" : ""}
          onClick={() => setActivePage("setting")}
        >
          <IoSettingsOutline className='mx-auto' />
          <div className='text-lg'>Setting</div>
        </div>
      </Link>
    </Root>
  );
}

const Root = styled.div`
  max-width: 450px;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: var(--color-bg-primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  font-size: 24px;
  line-height: 32px;
  border-top: 1px solid #242e2e;
`;
