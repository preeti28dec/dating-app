import Link from "next/link";
import React from "react";
import { BsChatDots } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import styled from "styled-components";

export default function Footer() {
  return (
    <Root className='footer'>
      <Link href='/message'>
        <div className=''>
          <BsChatDots className='mx-auto' />
          <div className='text-lg'>Message</div>
        </div>
      </Link>
      <Link href='/calls'>
        <div>
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
    </Root>
  );
}

const Root = styled.div`
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
