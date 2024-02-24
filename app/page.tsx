import React from "react";
import BillBookCard from "@/components/BillBookCard";
import { RxAvatar } from "react-icons/rx";
import { GrMoney } from "react-icons/gr";
import { GiPayMoney } from "react-icons/gi";

export default function Home() {
  return (
    <div className='main w-full h-[15vw] px-5 py-5 flex flex-wrap justify-center'>
      <BillBookCard
       icon={<RxAvatar className='scale-110 mt-[2px] text-[#485eb0]' />} 
       title="All Parties" 
       amount="5" 
       borderColor="violet-400"
       textColor="text-violet-500"
       bgColor="violet-50"
      /> 

      <BillBookCard
       icon={<GrMoney className='scale-110 mt-[2px] text-[#059f74]' />} 
       title="To Collect" 
       amount="₹17,500" 
       borderColor="green-500"
       textColor="text-green-500"
       bgColor="red-50"
      />

      <BillBookCard
      icon={<GiPayMoney className="scale-110 mt-[2px] text-[#c33b3b]"/>}
      title="To Pay"
      amount="₹0"
      borderColor="red-400"
      textColor="text-red-500"
      bgColor="red-50"
      />
    </div>
  );
}
