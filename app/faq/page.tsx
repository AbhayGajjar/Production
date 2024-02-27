import React from 'react'


export const metadata = {
    title: "FAQ : NeytRAM"
}

const FAQ = () => {
    return (
        <section className='FAQ main h-screen w-full'>
        <div className='py-4 items-center grid justify-center'>
          <h1 className='text-4xl text-center'>FAQ's</h1>
  
          {/* Question Start */}
  
          <div className="space-y-4 w-[72vw] my-3  items-center justify-center text-[#000435]">
            <div className="join join-vertical w-full">
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                What is Neytram and how does it solve optics-related problems?
                </div>
                <div className="collapse-content">
                  <article>Neytram is a software designed specifically to address challenges in the optics industry, offering solutions for managing prescriptions, customer orders, and more.</article>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                How does Neytram Optics CRM streamline the process of managing prescriptions and customer orders?
                </div>
                <div className="collapse-content">
                  <article> Neytram Optics CRM centralizes prescription and order management, offering opticians an intuitive platform to input, track, and update details. This streamlines processes, reduces errors, and enhances customer satisfaction.</article>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                Does Neytram Optics CRM offer customizable features to adapt to the specific needs of our optical practice?
                </div>
                <div className="collapse-content">
                  <article> Certainly! Neytram Optics CRM provides customizable features that cater to the unique requirements of optical practices. From tailored workflows to personalized dashboards, it offers flexibility and efficiency in addressing specific operational needs.</article>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                Can Neytram integrate with other popular software solutions used in the optics industry?
                </div>
                <div className="collapse-content">
                  <article>  Yes, Neytram is designed to integrate seamlessly with other industry-specific software solutions, facilitating data exchange and collaboration.</article>
                </div>
              </div>

              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                How easy is it to use Neytram?
                </div>
                <div className="collapse-content">
                  <article>Neytram features an intuitive interface and user-friendly design, making it easy for opticians and staff to navigate and utilize its functionalities.</article>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                Does Neytram offer customer support and training resources?
                </div>
                <div className="collapse-content">
                  <article>Yes, Neytram provides customer support and comprehensive training resources to ensure users can maximize the benefits of the software.</article>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                What sets Neytram apart from other software solutions in the optics industry?
                </div>
                <div className="collapse-content">
                  <article>Neytram stands out for its customizable features, seamless integrations, user-friendly interface, and dedicated customer support, offering a comprehensive solution tailored to optical practices.</article>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                What sets Neytram apart from other software solutions in the optics industry?
                </div>
                <div className="collapse-content">
                  <article>Neytram stands out for its customizable features, seamless integrations, user-friendly interface, and dedicated customer support, offering a comprehensive solution tailored to optical practices.</article>
                </div>
              </div>
              <div className="collapse collapse-arrow join-item border border-base-300">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium">
                How can I get started with Neytram for my optical practice?
                </div>
                <div className="collapse-content">
                  <article>You can get started with Neytram by contacting our sales team to schedule a demo or sign up for a free trial to explore its capabilities and benefits for your optical practice.</article>
                </div>
              </div>

            </div>
  
  
          </div>
  
          {/* Question End */}
  
  
        </div>
      </section>
    )
}

export default FAQ