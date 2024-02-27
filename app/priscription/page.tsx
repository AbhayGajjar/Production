import React from 'react'

const Priscription = () => {
  return (
    <div>
      <div className="card shadow-xl lg:card-side bg-base-100">
        <figure><img src="/img2.jpg" className='w-72 h-full' alt="Album" /></figure>
        <div className="card-body">
          <h2 className="card-title"> Prescription History at Your Fingertips!</h2>
          <p className=' md:w-[40vw] '> Neytram's innovative software provides coustomers opticians with immediate access to comprehensive prescription histories, empowering efficient decision-making and personalized patient care.</p>
          <div className="card-actions ">
          <button className="btn btn-wide ">Try Free</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Priscription