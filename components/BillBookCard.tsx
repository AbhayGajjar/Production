import React from 'react';

interface BillBookCardProps {
    icon: React.ReactNode;
    title: string;
    amount: string;
    borderColor: string;
    textColor: string;
    bgColor: string;
    
}

const BillBookCard: React.FC<BillBookCardProps> = ({ icon, title, amount, borderColor, textColor, bgColor }) => {
    return (
        <div className={`parties h-20 w-[45%] md:w-[20vw] rounded-lg border-1 border hover:border-${borderColor} hover:cursor-pointer hover:shadow-md my-2 md:mx-2 hover:bg-${bgColor}`}>
            <div className='ml-2 icone h-5 px-2 py-2 flex rounded-t-lg'>
                <div>
                    {icon}
                </div>
                <div className=''>
                    <h5 className={`text-sm ml-1 ${textColor}`}>{title}</h5>
                </div>
            </div>
            <div className='h-[15px]'></div>
            <div className='total w-full h-6'>
                <h1 className='ml-4 text-xl'>{amount}</h1>
            </div>
        </div>
    );
};

export default BillBookCard;