import React from 'react'
import './ContactUs.css'
import ContactUsForm from './ContactUsForm'

const ContactUs = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content grid sm:grid-cols-1 md:grid-cols-2  max-w-3xl">

                    <div className="text-center lg:text-left heading-text">
                        <h1 className="text-3xl md:text-5xl font-bold">
                            DO YOU
                            <br />
                            WANT MORE
                            INFORMATION?
                        </h1>
                        <p className='text-2xl font-bold'>
                            CONTACT US AND
                            <br />
                            OUR TEAM WILL ANSWER
                            <br />
                            YOUR QUESTIONS
                        </p>
                    </div>

                    <div className="">
                        <ContactUsForm />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ContactUs