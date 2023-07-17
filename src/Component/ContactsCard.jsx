import React from "react";
import {
  AiOutlineHeart,
  AiOutlineEdit,
  AiFillDelete,
  AiOutlineMail,
  AiFillPhone,
  
} from "react-icons/ai";
import { BsGlobe2 } from "react-icons/bs";

const ContactsCard = ({ contacts }) => {
  return (
    <div className="grid lg:my-48 md:grid-cols-3 lg:grid-cols-4  sm:grid-cols-2 justify-center gap-6">
      {contacts.map((item, index) => (
        <figure className="max-w-lg  border-gray-300 border " key={index}>
          <img
            className="mb-16  p-4 bg-gray-100 pb-0"
            src={`https://api.dicebear.com/6.x/avataaars/svg?seed=${item.phone}`}
            alt="avatars"
          />
          <figcaption className="sm:text-xs flex flex-col justify-center text-sm  -mt-12 m-4 mr-0">
            <p className="sm:text-xs text-base font-semibold">{item.name}</p>
            <p className="flex   items-center">
              <AiOutlineMail />
              <span className="mx-2">{`${item.email.slice(0,8)}.me`}</span>
            </p>
            <p className="flex  items-center">
              <AiFillPhone />
              <span className="mx-2">{item.phone.slice(0,12)}</span>
            </p>
            <p className="flex  items-center">
              <BsGlobe2 />
              <span className="mx-2">{`http://${item.website}`}</span>
            </p>
          </figcaption>
          <div className="sm:p-2 sm:text-sm border-t p-4 text-xl flex justify-evenly bg-gray-100">
            <p className=" text-pink-500 px-7  ">
            <span className="cursor-pointer"><AiOutlineHeart  /></span>
            </p>
            <p className="border-x px-6 border-gray-400">
              <span className="cursor-pointer"><AiOutlineEdit  /></span>
              
            </p>
            <p className=" px-7">
            <span className="cursor-pointer"><AiFillDelete  /></span>
            </p>
          </div>
        </figure>
      ))}
    </div>
  );
};

export default ContactsCard;
