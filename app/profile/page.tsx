import Profile from '@/components/Profile'
import React from 'react'
import { CgProfile } from "react-icons/cg";

const CoustomerCard: React.FC = () => {
    const partyDetails = {
        partyName: 'Ambaji Motor Driving School',
        partyType: 'Customer',
        mobileNumber: '9313337362',
        partyCategory: '-',
        email: '-',
        openingBalance: '₹0',
    }
    return (
        <div className='main w-full h-screen px-3 py-3'>
            <div className="box w-full h-full">
                {/* navbar start */}

                <div className='heading  w-full '>
                    <div className='button1 flex py-2 px-2 text-[#4c3cce]'>
                        <div className='m'>
                            <CgProfile />
                        </div>
                        <div className='ml-1   text-[13px]'>
                            <button>Profile</button>
                        </div>
                    </div>
                </div>
                <hr />

                {/* navbar End */}
                <Profile details={partyDetails} />
            </div>
        </div>
    )
}

export default CoustomerCard