// import Link from "next/link";
// import React, { useState, useEffect, useRef } from "react";
// import styled from "styled-components";
// import Header from "./components/header";
// import ThemeToggle from "./components/ThemeToggle";
// import { FiCamera } from "react-icons/fi";
// import { ImAttachment } from "react-icons/im";
// import {
//   IoCallOutline,
//   IoDocumentTextOutline,
//   IoSend,
//   IoVideocamOutline,
// } from "react-icons/io5";
// import { BsArrowLeft, BsFillImageFill } from "react-icons/bs";
// import { AiOutlineAudio, AiOutlineClose } from "react-icons/ai";
// import { MdContentCopy } from "react-icons/md";
// import { GiNetworkBars } from "react-icons/gi";
// import { FaRegUserCircle } from "react-icons/fa";
// import { TfiLocationPin } from "react-icons/tfi";
// import ImageUploading from "react-images-uploading";

// export default function Messages() {
//   const [messageList, setMessageList] = useState<any>([]);
//   const [images, setImages] = useState<any>([]);
//   const [message, setMessage] = useState("");
//   const [open, setOpen] = useState(false);
//   const scollToRef = useRef<null | HTMLDivElement>(null);
//   const maxNumber = 69;

//   useEffect(() => {
//     scollToRef?.current?.scrollIntoView({
//       behavior: "smooth",
//       block: "nearest",
//       inline: "start",
//     });
//   }, [messageList]);

//   const onChange = (imageList: any) => {
//     setImages(imageList);
//   };
//   function handleClike(e: any) {
//     e.preventDefault();
//     setMessageList((s: any) => [
//       ...s,
//       { msg: message, userId: 1, img: images },
//     ]);
//     setMessage("");
//   }

//   useEffect(() => {
//     if (messageList[messageList.length - 1]?.userId !== 1) return;
//     const timer = setTimeout(() => {
//       setMessageList((s: any) => [
//         ...s,
//         { msg: "Yo, wazzz upppp!!!", userId: 2 },
//       ]);
//       setImages([]);
//     }, 3000);
//     return () => clearTimeout(timer);
//   }, [messageList]);

//   console.log(messageList, "mmmm");

//   return (
//     <Container>
//       <Header
//         title={
//           <>
//             <div className='flex justify-between items-center'>
//               <div className='flex items-center gap-2'>
//                 <Link href='/home'>
//                   <BsArrowLeft className='text-2xl ' />
//                 </Link>
//                 <Link href='/profile'>
//                   <div>
//                     <img
//                       src='/assest/user1.png'
//                       alt=''
//                       className='w-10 object-cover'
//                     />
//                   </div>
//                 </Link>
//                 <div>
//                   <div className='font-semibold'>Jhon Abraham</div>
//                   <div className='text-[12px]'>Active now</div>
//                 </div>
//               </div>

//               <div className=' text-2xl flex items-center gap-4'>
//                 <Link href='/calls'>
//                   <div>
//                     <IoCallOutline />
//                   </div>
//                 </Link>
//                 <Link href='/video-call'>
//                   <div>
//                     <IoVideocamOutline />
//                   </div>
//                 </Link>
//               </div>
//             </div>
//           </>
//         }
//       />
//       <div className='user_list'>
//         <div className='text-center '>
//           <span className='font-semibold px-4 py-1 text rounded-full  text-sm'>
//             Today
//           </span>
//         </div>
//         <div>
//           {messageList.map((i: any, ind: any) => {
//             return (
//               <div key={ind}>
//                 {i.userId == 1 ? (
//                   <>
//                     <div className='text-end p-4 mt-4 image-item'>
//                       <span className='send_message'>{i.msg}</span>
//                       <div className='text-[12px] my-2 text-[#797c7b]'>
//                         09:25 AM
//                       </div>
//                     </div>
//                     {/* {i.img? */}
//                     <div className='m-4 '>
//                       {i.img?.map((image: any, index: any) => (
//                         <div
//                           key={index}
//                           className='image-item my-4 flex justify-end '
//                         >
//                           <img
//                             src={image.data_url}
//                             alt=''
//                             className=' object-cover rounded '
//                           />
//                         </div>
//                       ))}
//                     </div>
//                     {/* :null} */}
//                   </>
//                 ) : (
//                   <div className='flex gap-4 image-item' key={ind}>
//                     <img
//                       src='/assest/user1.png'
//                       alt=''
//                       className='w-12 h-12 mt-2 object-cover rounded-full'
//                     />
//                     <div>
//                       <div className='font-semibold my-2'>Jhon Abraham</div>
//                       <div className=''>
//                         <div className=''>
//                           <span className='coming_message '>
//                             Have a great working week!!
//                           </span>
//                           <div className='text-[12px] my-2 text-right text-[#797c7b]'>
//                             09:25 AM
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             );
//           })}

//           <div ref={scollToRef} />
//         </div>
//       </div>
//       <div className='absolute right-2 bottom-16 z-10'>
//         <ThemeToggle />
//       </div>
//       <div className='footer'>
//         <ImAttachment onClick={() => setOpen((s) => !s)} />
//         <form className='input_section ' onSubmit={(e: any) => handleClike(e)}>
//           <input
//             placeholder='Write your message'
//             className='w-full '
//             value={message}
//             type='text'
//             onChange={(e) => {
//               setMessage(e.target.value);
//             }}
//           />
//           <MdContentCopy className='absolute top-3 right-1 text-[#797C7B]' />
//         </form>
//         {message ? (
//           <div className='send_icon' onClick={(e) => handleClike(e)}>
//             <IoSend className='text-[20px] pl-1' />
//           </div>
//         ) : (
//           <div className='flex items-center gap-2 text-2xl'>
//             <ImageUploading
//               multiple
//               value={images}
//               onChange={onChange}
//               maxNumber={maxNumber}
//               dataURLKey='data_url'
//               acceptType={["jpg"]}
//             >
//               {({ onImageUpload, dragProps }) => (
//                 <div className='upload__image-wrapper'>
//                   <div onClick={onImageUpload} {...dragProps}>
//                     <FiCamera />
//                   </div>
//                 </div>
//               )}
//             </ImageUploading>
//             <AiOutlineAudio />
//           </div>
//         )}
//       </div>
//       {open ? (
//         <ModalBox>
//           <Popup>
//             <div className='flex  justify-between mx-8 my-4'>
//               <AiOutlineClose
//                 onClick={() => setOpen((s) => !s)}
//                 className='text-lg text-[#797c7b]'
//               />

//               <div className='font-semibold text-center'>Share Content</div>
//               <div></div>
//             </div>
//             <div className='flex px-6 my-5 items-center gap-4'>
//               <div className='p-3 rounded-full text '>
//                 <ImageUploading
//                   multiple
//                   value={images}
//                   onChange={onChange}
//                   maxNumber={maxNumber}
//                   dataURLKey='data_url'
//                   acceptType={["jpg"]}
//                 >
//                   {({ onImageUpload, dragProps }) => (
//                     <div className='upload__image-wrapper'>
//                       <div onClick={onImageUpload} {...dragProps}>
//                         <FiCamera className='text-2xl text-[#797c7b]' />
//                       </div>
//                     </div>
//                   )}
//                 </ImageUploading>
//               </div>
//               <div className='font-bold '>Camera</div>
//             </div>
//             <hr className='w-[80%] absolute right-2 ' />
//             <div className='flex px-6 my-5 pt-6 items-center gap-4'>
//               <div className='p-3 rounded-full text '>
//                 <IoDocumentTextOutline className='text-2xl text-[#797c7b]' />
//               </div>
//               <div>
//                 <div className='font-bold '>Documents</div>
//                 <span className='text-sm text-[#797c7b]'>Share your files</span>
//               </div>
//             </div>
//             <hr className='w-[80%] absolute right-2' />
//             <div className='flex px-6 my-5 pt-6 items-center gap-4'>
//               <div className='p-3 rounded-full text '>
//                 <GiNetworkBars className='text-2xl text-[#797c7b]' />
//               </div>
//               <div>
//                 <div className='font-bold '>Create a poll</div>
//                 <span className='text-sm text-[#797c7b]'>
//                   Create a poll for any querry
//                 </span>
//               </div>
//             </div>
//             <hr className='w-[80%] absolute right-2' />
//             <div className='flex px-6 my-5 pt-6 items-center gap-4'>
//               <div className='p-3 rounded-full text '>
//                 <BsFillImageFill className='text-2xl text-[#797c7b]' />
//               </div>
//               <div>
//                 <div className='font-bold '>Media</div>
//                 <span className='text-sm text-[#797c7b]'>
//                   Share photos and videos
//                 </span>
//               </div>
//             </div>
//             <hr className='w-[80%] absolute right-2' />
//             <div className='flex px-6 my-5 pt-6 items-center gap-4'>
//               <div className='p-3 rounded-full text '>
//                 <FaRegUserCircle className='text-2xl text-[#797c7b]' />
//               </div>
//               <div>
//                 <div className='font-bold '>Contact</div>
//                 <span className='text-sm text-[#797c7b]'>
//                   Share your contacts
//                 </span>
//               </div>
//             </div>
//             <hr className='w-[80%] absolute right-2' />
//             <div className='flex px-6 my-5 pt-6 items-center gap-4'>
//               <div className='p-3 rounded-full text '>
//                 <TfiLocationPin className='text-2xl text-[#797c7b]' />
//               </div>
//               <div>
//                 <div className='font-bold '>Location</div>
//                 <span className='text-sm text-[#797c7b]'>
//                   Share your location
//                 </span>
//               </div>
//             </div>
//             <hr className='w-[80%] absolute right-2' />
//           </Popup>
//         </ModalBox>
//       ) : null}
//     </Container>
//   );
// }
// const Container = styled.div`
//   height: 100vh;
//   position: relative;
//   .image-item {
//     animation: floatup 0.5s forwards;
//   }
//   .user_list {
//     background-color: var(--color-bg-primary);
//     width: 100%;
//     height: 80vh;
//     overflow: hidden;
//     overflow-y: scroll;
//     padding: 10px 20px;
//   }
//   .user_list::-webkit-scrollbar {
//     display: none;
//   }
//   .footer {
//     max-width: 450px;
//     background-color: var(--color-bg-primary);
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding: 12px 16px 20px 16px;
//     font-size: 24px;
//     line-height: 32px;
//     position: fixed;
//     bottom: 0;
//     width: 100%;
//   }
//   .input_section {
//     position: relative;
//     background: #f3f6f6;
//     width: 100%;
//     margin: 2px 10px;
//     border-radius: 6px;
//   }
//   input {
//     outline: unset;
//     border: unset;
//     background-color: unset;
//     font-size: 16px;
//     padding: 6px 20px;
//     color: #797c7b;
//   }
//   .text {
//     color: var(--color-text-primary);
//     background-color: var(--bg-color);
//   }
//   .send_icon {
//     background-color: var(--message-bg-background);
//     color: var(--color-white);
//     padding: 9px;
//     border-radius: 100px;
//   }
//   .send_message {
//     background-color: var(--message-bg-background);
//     color: var(--color-white);
//     padding: 5px;
//     border-radius: 8px 0px 8px 8px;
//     word-wrap: break-word;
//     width: 200px;
//     display: inline-block;
//   }
//   .coming_message {
//     background-color: var(--bg-color);
//     color: var(--color-text-primary);
//     padding: 5px;
//     margin: 6px 0px;
//     border-radius: 0px 8px 8px 8px;
//     word-wrap: break-word;
//     word-wrap: break-word;
//     width: 200px;
//   }

//   @keyframes floatup {
//     from {
//       transform: translateY(24px);
//       opacity: 0;
//     }
//     to {
//       transform: translateY(0px);
//       opacity: 1;
//     }
//   }
// `;

// const ModalBox = styled.div`
//   background: rgba(0, 14, 8, 0.5);
//   /* max-width: 450px; */
//   width: 100%;
//   height: 100vh;
//   position: absolute;
//   top: 0;
// `;
// const Popup = styled.div`
//   background: var(--color-bg-primary);
//   max-width: 450px;
//   width: 100%;
//   height: 80vh;
//   position: fixed;
//   border-radius: 40px 40px 0px 0px;
//   bottom: 0;
// `;

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
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
import { MdContentCopy, MdOutlineAttachFile } from "react-icons/md";
import { GiNetworkBars } from "react-icons/gi";
import { FaRegUserCircle } from "react-icons/fa";
import { TfiLocationPin } from "react-icons/tfi";

export default function Messages() {
  const [messageList, setMessageList] = useState<any>([]);
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [files, setFile] = useState<any>(null);
  const scollToRef = useRef<null | HTMLDivElement>(null);
  const maxNumber = 69;

  useEffect(() => {
    scollToRef?.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }, [messageList]);

  useEffect(() => {
    setMessageList((s: any) => [...s, { file: files }]);
  }, [files]);

  function onSubmit(e: any) {
    e.preventDefault();
    setMessageList((s: any) => [...s, { msg: message }]);
    setMessage("");
  }
  useEffect(() => {
    if (messageList[messageList.length - 1]?.text) {
      return;
    }
    const timer = setTimeout(() => {
      setMessageList((s: any) => [...s, { text: "how can i help you?" }]);
    }, 3000);
    return () => clearTimeout(timer);
  }, [messageList]);

  console.log(messageList,"mmm");
  
  return (
    <Container>
      <Header
        title={
          <>
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <Link href='/home'>
                  <BsArrowLeft className='text-2xl ' />
                </Link>
                <Link href='/profile'>
                  <div>
                    <img
                      src='/assest/user1.png'
                      alt=''
                      className='w-10 object-cover'
                    />
                  </div>
                </Link>
                <div>
                  <div className='font-semibold'>Jhon Abraham</div>
                  <div className='text-[12px]'>Active now</div>
                </div>
              </div>

              <div className=' text-2xl flex items-center gap-4'>
                <Link href='/calls'>
                  <div>
                    <IoCallOutline />
                  </div>
                </Link>
                <Link href='/video-call'>
                  <div>
                    <IoVideocamOutline />
                  </div>
                </Link>
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
        <div>
          {messageList.map((i: any, ind: any) => {
            return (
              <div key={ind}>
                {i?.msg && (
                  <div className='text-end p-4 mt-4 image-item msg'>
                    <span className='send_message'>{i.msg}</span>
                    <div className='text-[12px] my-2 text-[#797c7b]'>
                      09:25 AM
                    </div>
                  </div>
                )}
                {i?.text && (
                  <div className='flex gap-4 image-item received-msg' key={ind}>
                    <img
                      src='/assest/user1.png'
                      alt=''
                      className='w-12 h-12 mt-2 object-cover rounded-full'
                    />
                    <div>
                      <div className='font-semibold my-2'>Jhon Abraham</div>
                      <div className=''>
                        <div className=''>
                          <span className='coming_message '>
                            Have a great working week!!
                          </span>
                          <div className='text-[12px] my-2 text-right text-[#797c7b]'>
                            09:25 AM
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {i?.file &&
                  i?.file.map((file: any, ind: any) => {
                    return (
                      <div
                        className='image-item my-4 flex justify-end'
                        key={ind}
                      >
                        <img
                          height='100%'
                          className=' object-cover rounded'
                          src={URL.createObjectURL(file)}
                          alt='image'
                        />
                      </div>
                    );
                  })}
              </div>
            );
          })}

          <div ref={scollToRef} />
        </div>
      </div>
      <div className='absolute right-2 bottom-16 z-10'>
        <ThemeToggle />
      </div>
      <div className='footer'>
        <ImAttachment onClick={() => setOpen((s) => !s)} />
        <form className='input_section ' onSubmit={onSubmit}>
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
          <div className='send_icon' onClick={onSubmit}>
            <IoSend className='text-[20px] pl-1' />
          </div>
        ) : (
          <div className='flex items-center gap-2 text-2xl'>
            <label htmlFor='imageFile'>
              <div className='file-div'>
                <FiCamera className='file-icon' />
                <input
                  type='file'
                  id='imageFile'
                  className='file-input'
                  value={""}
                  multiple
                  onChange={(e: any) => {
                    setFile(Array.prototype.slice.call(e.target.files));
                  }}
                />
              </div>
            </label>
            <AiOutlineAudio />
          </div>
        )}
      </div>
      {open ? (
        <ModalBox>
          <Popup>
            <div className='flex  justify-between mx-8 my-4'>
              <AiOutlineClose
                onClick={() => setOpen((s) => !s)}
                className='text-lg text-[#797c7b]'
              />

              <div className='font-semibold text-center'>Share Content</div>
              <div></div>
            </div>
            <div className='flex px-6 my-5 items-center gap-4'>
              <div className='p-3 rounded-full text '>
                <label htmlFor='imageFile'>
                  <div className='file-div'>
                    <FiCamera className='text-2xl text-[#797c7b]' />
                    <input
                      type='file'
                      id='imageFile'
                      className='file-input'
                      value={""}
                      multiple
                      onChange={(e: any) => {
                        setFile(Array.prototype.slice.call(e.target.files));
                      }}
                    />
                  </div>
                </label>
              </div>
              <div className='font-bold '>Camera</div>
            </div>
            <hr className='w-[80%] absolute right-2 ' />
            <div className='flex px-6 my-5 pt-6 items-center gap-4'>
              <div className='p-3 rounded-full text '>
                <IoDocumentTextOutline className='text-2xl text-[#797c7b]' />
              </div>
              <div>
                <div className='font-bold '>Documents</div>
                <span className='text-sm text-[#797c7b]'>Share your files</span>
              </div>
            </div>
            <hr className='w-[80%] absolute right-2' />
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
            <hr className='w-[80%] absolute right-2' />
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
            <hr className='w-[80%] absolute right-2' />
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
            <hr className='w-[80%] absolute right-2' />
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
            <hr className='w-[80%] absolute right-2' />
          </Popup>
        </ModalBox>
      ) : null}
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
  position: relative;
  .image-item {
    animation: floatup 0.5s forwards;
  }
  .file-div {
    display: flex;
    width: 30px;
    aspect-ratio: 1;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    font-size: 22px;
    .file-input {
      pointer-events: none;
      position: absolute;
      height: 0;
      width: 0;
      display: none;
    }
  }

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
    max-width: 450px;
    background-color: var(--color-bg-primary);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px 20px 16px;
    font-size: 24px;
    line-height: 32px;
    position: fixed;
    bottom: 0;
    width: 100%;
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
    width: 200px;
    display: inline-block;
  }
  .coming_message {
    background-color: var(--bg-color);
    color: var(--color-text-primary);
    padding: 5px;
    margin: 6px 0px;
    border-radius: 0px 8px 8px 8px;
    word-wrap: break-word;
    word-wrap: break-word;
    width: 200px;
  }

  @keyframes floatup {
    from {
      transform: translateY(24px);
      opacity: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`;

const ModalBox = styled.div`
  background: rgba(0, 14, 8, 0.5);
  /* max-width: 450px; */
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
`;
const Popup = styled.div`
  background: var(--color-bg-primary);
  max-width: 450px;
  width: 100%;
  height: 80vh;
  position: fixed;
  border-radius: 40px 40px 0px 0px;
  bottom: 0;
`;
