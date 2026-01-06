import React from "react";
import { FaStar } from "react-icons/fa";
import client1 from "/client1.png";

const ReviewCard = ({ userName, address, review, src }) => {
  return (
    <div className="w-[550px]  bg-[#111418] p-[48px] ">
      <div className="top flex items-center gap-4">
        <img className="h-[65px] w-[65px] rounded-full" src={src} alt="" />

        <div>
          <p className="text-[16px] font-semibold font-pop text-[#ffffff] ">
            {userName}
          </p>
          <p className="text-[16px] font-medium font-pop text-[#ffffff]/50">
            {address}
          </p>
        </div>
      </div>

      <p className="text-[16px] font-normal font-pop text-[#dee3e4] my-6 ">
        {review}
      </p>

      <span className="text-[#ffc107] flex gap-1">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </span>
    </div>
  );
};

export default ReviewCard;
