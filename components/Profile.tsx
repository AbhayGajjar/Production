import React from 'react';
import { FiFileText } from 'react-icons/fi';


interface PartyDetails {
    partyName: string;
    partyType: string;
    mobileNumber: string;
    partyCategory: string;
    email: string;
    openingBalance: string;
}

interface CardProps {
    details: PartyDetails;
}

const Profile: React.FC<CardProps> = ({ details }) => {
    return (
        <div className="card w-full sm:w-[45%] lg:w-[30vw] h-auto sm:h-96 border border-zinc-300 rounded-xl hover:shadow-lg mb-3 sm:mr-3">
            <div className="heading w-full h-[5vh] px-2 py-2 flex rounded-t-xl bg-zinc-300">
                <div>
                    <FiFileText className='mt-1' />
                </div>
                <div>
                    <h4 className='text-[15px] ml-1'>General Details</h4>
                </div>
            </div>
            <div className='main1 flex flex-col sm:flex-row'>
                <div className='px-3 py-1'>
                    <h6 className='text-zinc-500'>Party Name</h6>
                    <h4 className='uppercase'>{details.partyName}</h4>
                </div>
                <div className='px-3 py-1'>
                    <h6 className='text-zinc-500'>Party Type</h6>
                    <h4>{details.partyType}</h4>
                </div>
            </div>
            <div className='main1 mt-3 justify-between flex flex-col sm:flex-row'>
                <div className='px-3 py-1'>
                    <h6 className='text-zinc-500'>Mobile Number</h6>
                    <h4 className='uppercase'>{details.mobileNumber}</h4>
                </div>
                <div className='px-3 py-1 mr-[80px]'>
                    <h6 className='text-zinc-500'>Party Category</h6>
                    <h4>{details.partyCategory}</h4>
                </div>
            </div>
            <div className='px-3 py-1 mt-3'>
                <h6 className='text-zinc-500'>Email</h6>
                <h4 className='uppercase'>{details.email}</h4>
            </div>
            <div className='px-3 py-1 mt-5'>
                <h6 className='text-zinc-500'>Opening Balance</h6>
                <h4 className='uppercase'>{details.openingBalance}</h4>
            </div>
        </div>
    )
}

export default Profile